import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      transcript, 
      question, 
      markScheme,
      modelAnswer,
      tips,
      followUpCount, 
      followUpDepth, 
      previousMessages 
    } = await req.json();

    if (!transcript || !question) {
      return new Response(
        JSON.stringify({ error: "Transcript and question are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "AI service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const shouldGenerateFollowUp = followUpCount < followUpDepth;

    // Build mark scheme context
    let markSchemeContext = "";
    if (markScheme && markScheme.criteria) {
      markSchemeContext = `
MARK SCHEME (Total: ${markScheme.total_marks} marks):
${markScheme.criteria.map((c: any) => `
- ${c.name} (${c.max_marks} marks): ${c.description}
  * Excellent: ${c.indicators?.excellent || "Strong performance"}
  * Good: ${c.indicators?.good || "Good performance"}
  * Satisfactory: ${c.indicators?.satisfactory || "Adequate performance"}
  * Needs Improvement: ${c.indicators?.needs_improvement || "Below expectations"}
`).join("")}`;
    }

    const systemPrompt = `You are an expert medical school interview examiner providing detailed feedback.

${markSchemeContext}

${modelAnswer ? `MODEL ANSWER FOR REFERENCE:
${modelAnswer}` : ""}

${tips ? `KEY POINTS TO ASSESS:
${tips}` : ""}

Your task is to ${shouldGenerateFollowUp ? "generate a relevant follow-up question OR" : ""} provide detailed feedback using the mark scheme.

OUTPUT FORMAT - You MUST respond with valid JSON:
{
  "shouldFollowUp": boolean,
  "followUp": "string or null - a concise follow-up question if shouldFollowUp is true",
  "feedback": {
    "scores": {
      "criteria": [
        {
          "name": "criterion name",
          "score": number,
          "max_marks": number,
          "feedback": "specific feedback for this criterion"
        }
      ],
      "total": number,
      "max_total": number,
      "percentage": number
    },
    "what_went_well": ["list of 2-4 specific strengths with examples from their answer"],
    "areas_for_improvement": ["list of 2-4 specific areas to improve with actionable advice"],
    "model_answer": "A well-structured example answer (45-60 seconds when spoken)"
  }
}

FEEDBACK GUIDELINES:
1. "what_went_well" should highlight genuine strengths - be encouraging but honest
2. "areas_for_improvement" should be constructive and actionable - explain WHAT to change and HOW
3. Score each criterion fairly based on the indicators provided
4. Reference specific parts of the candidate's answer when giving feedback
5. The model_answer should demonstrate excellent technique for this specific question`;

    const conversationContext = previousMessages 
      ? previousMessages.map((m: { role: string; content: string }) => `${m.role}: ${m.content}`).join("\n")
      : "";

    const userPrompt = `INTERVIEW QUESTION: ${question}

PREVIOUS CONVERSATION:
${conversationContext}

CANDIDATE'S RESPONSE:
"${transcript}"

${shouldGenerateFollowUp 
  ? `This is follow-up ${followUpCount + 1} of ${followUpDepth}. Consider whether a follow-up would add value, or if ready for final feedback.` 
  : "Provide complete feedback using the mark scheme. No more follow-ups."}

Respond with the JSON structure specified.`;

    console.log(`Processing feedback, followUpCount: ${followUpCount}/${followUpDepth}`);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add credits to continue." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI API error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Failed to generate feedback" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const aiResponse = await response.json();
    const content = aiResponse.choices?.[0]?.message?.content;

    if (!content) {
      console.error("No content in AI response");
      return new Response(
        JSON.stringify({ error: "Empty response from AI" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Parse JSON from response
    let parsedContent;
    try {
      let jsonStr = content;
      if (jsonStr.includes("```json")) {
        jsonStr = jsonStr.replace(/```json\n?/g, "").replace(/```\n?/g, "");
      } else if (jsonStr.includes("```")) {
        jsonStr = jsonStr.replace(/```\n?/g, "");
      }
      parsedContent = JSON.parse(jsonStr.trim());
    } catch (parseError) {
      console.error("Failed to parse AI response:", content);
      // Return default feedback structure
      const defaultCriteria = markScheme?.criteria?.map((c: any) => ({
        name: c.name,
        score: Math.round(c.max_marks * 0.6),
        max_marks: c.max_marks,
        feedback: "Your response showed effort. Focus on providing more specific examples and structure."
      })) || [
        { name: "Communication", score: 15, max_marks: 25, feedback: "Consider improving structure" },
        { name: "Content", score: 18, max_marks: 30, feedback: "Add more specific examples" },
        { name: "Critical Thinking", score: 15, max_marks: 25, feedback: "Show more analysis" },
        { name: "Ethics", score: 12, max_marks: 20, feedback: "Demonstrate ethical awareness" }
      ];
      
      const total = defaultCriteria.reduce((sum: number, c: any) => sum + c.score, 0);
      const maxTotal = defaultCriteria.reduce((sum: number, c: any) => sum + c.max_marks, 0);
      
      parsedContent = {
        shouldFollowUp: false,
        followUp: null,
        feedback: {
          scores: {
            criteria: defaultCriteria,
            total,
            max_total: maxTotal,
            percentage: Math.round((total / maxTotal) * 100)
          },
          what_went_well: [
            "You attempted to answer the question",
            "Your response showed some understanding of the topic"
          ],
          areas_for_improvement: [
            "Structure your answer with a clear beginning, middle, and end",
            "Include specific examples from your experience",
            "Consider the ethical implications more deeply"
          ],
          model_answer: modelAnswer || "When answering this question, structure your response clearly. Start by acknowledging the complexity of the issue, provide specific examples from your experience, explain your reasoning process, and conclude with key learnings."
        }
      };
    }

    console.log("Feedback generated successfully");

    return new Response(
      JSON.stringify({
        followUp: parsedContent.shouldFollowUp ? parsedContent.followUp : null,
        feedback: parsedContent.shouldFollowUp ? null : parsedContent.feedback
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Feedback error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
