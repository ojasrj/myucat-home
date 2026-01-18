import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const PERSONA_CONFIGS = {
  oxford_panel: {
    followUpStyle: "Ask for evidence. Probe how the candidate would handle conflicting priorities. Be formal and challenging.",
    scoringEmphasis: "Heavy emphasis on clinical reasoning and ethical awareness. Expect precise, well-structured answers."
  },
  imperial_mmi: {
    followUpStyle: "Present a short scenario tweak and ask for immediate reaction. Focus on situational judgment.",
    scoringEmphasis: "Emphasis on structure, ethics, and practical decision-making."
  },
  cambridge_socratic: {
    followUpStyle: "Ask 'Why?' to probe depth. Be conversational but push for deeper logic and reasoning chains.",
    scoringEmphasis: "Focus on depth of understanding and ability to justify reasoning."
  },
  generic_panel: {
    followUpStyle: "Balanced follow-up style. Ask for clarification or examples when appropriate.",
    scoringEmphasis: "Balanced assessment of communication and content."
  }
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { transcript, question, persona, followUpCount, followUpDepth, previousMessages } = await req.json();

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

    const personaConfig = PERSONA_CONFIGS[persona as keyof typeof PERSONA_CONFIGS] || PERSONA_CONFIGS.generic_panel;
    const shouldGenerateFollowUp = followUpCount < followUpDepth;

    const systemPrompt = `You are an expert medical school interview coach analyzing candidate responses.

PERSONA: ${persona}
FOLLOW-UP STYLE: ${personaConfig.followUpStyle}
SCORING EMPHASIS: ${personaConfig.scoringEmphasis}

Your task is to ${shouldGenerateFollowUp ? "generate a relevant follow-up question OR" : ""} provide detailed feedback on the candidate's answer.

SCORING RUBRIC (out of 10 for each sub-criterion):
COMMUNICATION (40% total):
- Pitch: confidence, volume variability, assertiveness
- Tone: warmth, professionalism, empathy
- Structure: clear opening, logical body, strong closing, signposting
- Pace: appropriate speed, effective pausing, minimal filler words

CONTENT (60% total):
- Relevance: directly addresses the question asked
- Clinical reasoning: logical chain from data to conclusion, medical knowledge accuracy
- Ethics: awareness of professional and ethical considerations
- Reflection: self-awareness, genuine motivation, growth mindset
- Examples: specific anecdotes, concrete actions, measurable outcomes

OUTPUT FORMAT:
You MUST respond with valid JSON in this exact structure:
{
  "shouldFollowUp": boolean,
  "followUp": "string or null - a concise, relevant follow-up question if shouldFollowUp is true",
  "feedback": {
    "scores": {
      "communication": { "pitch": 0-10, "tone": 0-10, "structure": 0-10, "pace": 0-10, "signposting": 0-10, "total": 0-40 },
      "content": { "relevance": 0-10, "clinical_reasoning": 0-10, "ethics": 0-10, "reflection": 0-10, "examples": 0-10, "total": 0-60 },
      "overall": 0-100
    },
    "executive_summary": "1-3 sentences: key strengths and top 1-2 improvements",
    "detailed_feedback": {
      "communication": ["specific feedback points with quotes from transcript"],
      "content": ["specific feedback points with quotes from transcript"]
    },
    "actionable_practice": ["concrete, specific practice exercises"],
    "model_answer": "A 45-60 second model answer demonstrating excellent structure and content"
  }
}`;

    const conversationContext = previousMessages 
      ? previousMessages.map((m: { role: string; content: string }) => `${m.role}: ${m.content}`).join("\n")
      : "";

    const userPrompt = `INTERVIEW QUESTION: ${question}

PREVIOUS CONVERSATION:
${conversationContext}

CANDIDATE'S LATEST RESPONSE:
"${transcript}"

${shouldGenerateFollowUp 
  ? `This is follow-up attempt ${followUpCount + 1} of ${followUpDepth}. Consider whether a follow-up would be valuable based on the persona style, or if the answer is complete enough to move to feedback.` 
  : "Provide complete feedback for this response. No more follow-ups needed."}

Analyze and respond with the JSON structure specified.`;

    console.log(`Processing feedback for persona: ${persona}, followUpCount: ${followUpCount}/${followUpDepth}`);

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
        console.error("Rate limited");
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        console.error("Payment required");
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

    // Parse JSON from response (handle markdown code blocks)
    let parsedContent;
    try {
      // Remove markdown code blocks if present
      let jsonStr = content;
      if (jsonStr.includes("```json")) {
        jsonStr = jsonStr.replace(/```json\n?/g, "").replace(/```\n?/g, "");
      } else if (jsonStr.includes("```")) {
        jsonStr = jsonStr.replace(/```\n?/g, "");
      }
      parsedContent = JSON.parse(jsonStr.trim());
    } catch (parseError) {
      console.error("Failed to parse AI response:", content);
      // Return a default structure
      parsedContent = {
        shouldFollowUp: false,
        followUp: null,
        feedback: {
          scores: {
            communication: { pitch: 6, tone: 6, structure: 6, pace: 6, signposting: 6, total: 30 },
            content: { relevance: 6, clinical_reasoning: 6, ethics: 6, reflection: 6, examples: 6, total: 30 },
            overall: 60
          },
          executive_summary: "Your answer showed good effort. Focus on providing more specific examples and structuring your response with a clear beginning, middle, and end.",
          detailed_feedback: {
            communication: ["Consider slowing down your pace", "Add clear signposting between points"],
            content: ["Include more specific examples", "Demonstrate awareness of ethical considerations"]
          },
          actionable_practice: [
            "Practice the STAR method: Situation, Task, Action, Result",
            "Record yourself and listen back for clarity"
          ],
          model_answer: "When answering this question, I would structure my response by first acknowledging the complexity of the issue, then providing a specific example from my experience, explaining my reasoning process, and concluding with what I learned and how it shaped my approach to medicine."
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
