import { useState, useCallback, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { 
  Mic, 
  MicOff, 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  Loader2,
  User,
  GraduationCap
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

// Persona definitions
const PERSONAS = {
  oxford_panel: {
    id: "oxford_panel",
    name: "Oxford Panel",
    description: "Formal tone, high challenge, heavy emphasis on clinical reasoning & ethics",
    style: "probing",
    voiceId: "JBFqnCBsd6RMkjVDRZzb", // George - formal British
    weights: { communication: 35, content: 65 }
  },
  imperial_mmi: {
    id: "imperial_mmi",
    name: "Imperial MMI",
    description: "Station-style scenarios, emphasis on structure & ethics",
    style: "scenario_tweak",
    voiceId: "EXAVITQu4vr4xnSDxMaL", // Sarah
    weights: { communication: 45, content: 55 }
  },
  cambridge_socratic: {
    id: "cambridge_socratic",
    name: "Cambridge Socratic",
    description: "Conversational, pushes for deeper logic with 'why' questions",
    style: "why_why",
    voiceId: "TX3LPaxmHKxFdv7VOQHJ", // Liam
    weights: { communication: 40, content: 60 }
  },
  generic_panel: {
    id: "generic_panel",
    name: "Generic Panel",
    description: "Balanced default interview style",
    style: "balanced",
    voiceId: "onwK4e9ZLuTAKqWW03F9", // Daniel
    weights: { communication: 40, content: 60 }
  }
};

const DEFAULT_QUESTIONS = [
  "Why do you want to study medicine?",
  "Tell us about a time you demonstrated empathy in a challenging situation.",
  "How would you approach a patient who refuses a recommended treatment?",
  "What do you think are the biggest challenges facing the NHS today?",
  "Describe a time when you had to work as part of a team."
];

interface Message {
  role: "interviewer" | "candidate";
  content: string;
  timestamp: Date;
  audioUrl?: string;
}

interface FeedbackResult {
  scores: {
    communication: {
      pitch: number;
      tone: number;
      structure: number;
      pace: number;
      signposting: number;
      total: number;
    };
    content: {
      relevance: number;
      clinical_reasoning: number;
      ethics: number;
      reflection: number;
      examples: number;
      total: number;
    };
    overall: number;
  };
  executive_summary: string;
  detailed_feedback: {
    communication: string[];
    content: string[];
  };
  actionable_practice: string[];
  model_answer: string;
  follow_ups: string[];
}

export default function InterviewPractice() {
  const [persona, setPersona] = useState<keyof typeof PERSONAS>("generic_panel");
  const [customQuestions, setCustomQuestions] = useState<string>("");
  const [questions, setQuestions] = useState<string[]>(DEFAULT_QUESTIONS);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [followUpDepth, setFollowUpDepth] = useState(2);
  
  const [sessionStarted, setSessionStarted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [transcript, setTranscript] = useState("");
  const [feedback, setFeedback] = useState<FeedbackResult | null>(null);
  const [currentFollowUps, setCurrentFollowUps] = useState<string[]>([]);
  const [followUpCount, setFollowUpCount] = useState(0);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const recognitionRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Parse custom questions
  useEffect(() => {
    if (customQuestions.trim()) {
      const parsed = customQuestions
        .split("\n")
        .map(q => q.trim())
        .filter(q => q.length > 0);
      if (parsed.length > 0) {
        setQuestions(parsed);
      }
    } else {
      setQuestions(DEFAULT_QUESTIONS);
    }
  }, [customQuestions]);

  const playAudio = async (text: string) => {
    if (isMuted) return;
    
    try {
      const selectedPersona = PERSONAS[persona];
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/interview-tts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ text, voiceId: selectedPersona.voiceId }),
        }
      );

      if (!response.ok) {
        console.error("TTS error:", response.status);
        return;
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      
      if (audioRef.current) {
        audioRef.current.pause();
      }
      
      audioRef.current = new Audio(audioUrl);
      audioRef.current.onplay = () => setIsPlaying(true);
      audioRef.current.onended = () => setIsPlaying(false);
      audioRef.current.onerror = () => setIsPlaying(false);
      await audioRef.current.play();
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  const startSession = async () => {
    setSessionStarted(true);
    setCurrentQuestionIndex(0);
    setMessages([]);
    setFeedback(null);
    setFollowUpCount(0);
    setCurrentFollowUps([]);
    
    const greeting = `Welcome to your ${PERSONAS[persona].name} style interview. I'll be asking you ${questions.length} questions today. Remember to speak clearly and take your time. Let's begin with the first question.`;
    
    setMessages([{
      role: "interviewer",
      content: greeting,
      timestamp: new Date()
    }]);
    
    await playAudio(greeting);
    
    // Small delay then ask first question
    setTimeout(async () => {
      const firstQuestion = questions[0];
      setMessages(prev => [...prev, {
        role: "interviewer",
        content: firstQuestion,
        timestamp: new Date()
      }]);
      await playAudio(firstQuestion);
    }, 1500);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];
      
      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };
      
      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        await processRecording(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };
      
      // Start speech recognition for live transcript
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;
        
        recognitionRef.current.onresult = (event: any) => {
          let finalTranscript = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript;
            }
          }
          if (finalTranscript) {
            setTranscript(prev => prev + " " + finalTranscript);
          }
        };
        
        recognitionRef.current.start();
      }
      
      mediaRecorderRef.current.start();
      setIsRecording(true);
      setTranscript("");
    } catch (error) {
      console.error("Error starting recording:", error);
      toast.error("Could not access microphone. Please check permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    }
  };

  const processRecording = async (audioBlob: Blob) => {
    setIsProcessing(true);
    
    try {
      // Add candidate message
      const candidateMessage = transcript || "Processing your response...";
      setMessages(prev => [...prev, {
        role: "candidate",
        content: candidateMessage,
        timestamp: new Date()
      }]);

      // Get AI feedback
      const { data, error } = await supabase.functions.invoke("interview-feedback", {
        body: {
          transcript: candidateMessage,
          question: questions[currentQuestionIndex],
          persona: persona,
          followUpCount: followUpCount,
          followUpDepth: followUpDepth,
          previousMessages: messages.map(m => ({ role: m.role, content: m.content }))
        }
      });

      if (error) {
        console.error("Feedback error:", error);
        toast.error("Failed to get feedback. Please try again.");
        setIsProcessing(false);
        return;
      }

      // Handle follow-ups
      if (data.followUp && followUpCount < followUpDepth) {
        setFollowUpCount(prev => prev + 1);
        setCurrentFollowUps(prev => [...prev, data.followUp]);
        
        setMessages(prev => [...prev, {
          role: "interviewer",
          content: data.followUp,
          timestamp: new Date()
        }]);
        
        await playAudio(data.followUp);
      } else {
        // Show feedback for this question
        setFeedback(data.feedback);
        
        // If there are more questions, offer to continue
        if (currentQuestionIndex < questions.length - 1) {
          const transition = "Thank you for your answer. Take a moment to review your feedback, then we'll move to the next question.";
          setMessages(prev => [...prev, {
            role: "interviewer",
            content: transition,
            timestamp: new Date()
          }]);
          await playAudio(transition);
        } else {
          const closing = "That concludes our interview. Please review your feedback. Well done for completing the session!";
          setMessages(prev => [...prev, {
            role: "interviewer",
            content: closing,
            timestamp: new Date()
          }]);
          await playAudio(closing);
        }
      }
    } catch (err) {
      console.error("Processing error:", err);
      toast.error("An error occurred while processing your response.");
    } finally {
      setIsProcessing(false);
    }
  };

  const nextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setFeedback(null);
      setFollowUpCount(0);
      setCurrentFollowUps([]);
      
      const nextQ = questions[currentQuestionIndex + 1];
      setMessages(prev => [...prev, {
        role: "interviewer",
        content: nextQ,
        timestamp: new Date()
      }]);
      await playAudio(nextQ);
    }
  };

  const resetSession = () => {
    setSessionStarted(false);
    setCurrentQuestionIndex(0);
    setMessages([]);
    setFeedback(null);
    setTranscript("");
    setFollowUpCount(0);
    setCurrentFollowUps([]);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const getScoreColor = (score: number, max: number = 10) => {
    const percentage = (score / max) * 100;
    if (percentage >= 70) return "text-green-600";
    if (percentage >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-secondary">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h1 className="text-xl font-bold text-gray-900">Medical Interview Coach</h1>
          </div>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {!sessionStarted ? (
          // Setup Screen
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Interview Setup
                </CardTitle>
                <CardDescription>
                  Configure your practice session
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Persona Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Interviewer Style</label>
                  <Select value={persona} onValueChange={(v) => setPersona(v as keyof typeof PERSONAS)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(PERSONAS).map(p => (
                        <SelectItem key={p.id} value={p.id}>
                          <div className="flex flex-col">
                            <span className="font-medium">{p.name}</span>
                            <span className="text-xs text-muted-foreground">{p.description}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Follow-up Depth */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Follow-up Depth</label>
                  <Select value={String(followUpDepth)} onValueChange={(v) => setFollowUpDepth(Number(v))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">No follow-ups</SelectItem>
                      <SelectItem value="1">Light (1 follow-up)</SelectItem>
                      <SelectItem value="2">Moderate (2 follow-ups)</SelectItem>
                      <SelectItem value="3">Deep probing (3 follow-ups)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Custom Questions */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Custom Questions (Optional)</label>
                  <Textarea
                    placeholder="Enter your own questions, one per line. Leave empty to use default questions."
                    value={customQuestions}
                    onChange={(e) => setCustomQuestions(e.target.value)}
                    rows={5}
                  />
                </div>

                <Button onClick={startSession} className="w-full" size="lg">
                  <Play className="w-5 h-5 mr-2" />
                  Start Interview
                </Button>
              </CardContent>
            </Card>

            {/* Preview Questions */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Questions Preview</CardTitle>
                <CardDescription>
                  {questions.length} question{questions.length !== 1 ? "s" : ""} in this session
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <div className="space-y-3">
                    {questions.map((q, idx) => (
                      <div key={idx} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                        <Badge variant="secondary" className="shrink-0">
                          Q{idx + 1}
                        </Badge>
                        <p className="text-sm">{q}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        ) : (
          // Active Session
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Conversation Panel */}
            <Card className="lg:col-span-2 shadow-lg">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Interview Session</CardTitle>
                    <CardDescription>
                      Question {currentQuestionIndex + 1} of {questions.length} • {PERSONAS[persona].name}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" onClick={toggleMute}>
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </Button>
                    <Button variant="ghost" size="icon" onClick={resetSession}>
                      <RotateCcw className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <Progress value={((currentQuestionIndex + 1) / questions.length) * 100} className="mt-4" />
              </CardHeader>
              <CardContent className="p-0">
                {/* Messages */}
                <ScrollArea className="h-[400px] p-4" ref={scrollRef}>
                  <div className="space-y-4">
                    {messages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex ${msg.role === "candidate" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            msg.role === "candidate"
                              ? "bg-primary text-white"
                              : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                          <span className="text-xs opacity-70 mt-1 block">
                            {msg.timestamp.toLocaleTimeString()}
                          </span>
                        </div>
                      </div>
                    ))}
                    {isProcessing && (
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg p-3 flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span className="text-sm">Analyzing your response...</span>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>

                {/* Live Transcript */}
                {isRecording && transcript && (
                  <div className="border-t p-4 bg-gray-50">
                    <p className="text-sm text-muted-foreground">Live transcript:</p>
                    <p className="text-sm italic">{transcript}</p>
                  </div>
                )}

                {/* Controls */}
                <div className="border-t p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {isPlaying && (
                      <Badge variant="secondary" className="animate-pulse">
                        <Volume2 className="w-3 h-3 mr-1" /> Speaking...
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    {!isRecording ? (
                      <Button
                        onClick={startRecording}
                        disabled={isProcessing || isPlaying}
                        size="lg"
                      >
                        <Mic className="w-5 h-5 mr-2" />
                        Start Speaking
                      </Button>
                    ) : (
                      <Button
                        onClick={stopRecording}
                        variant="destructive"
                        size="lg"
                        className="animate-pulse"
                      >
                        <MicOff className="w-5 h-5 mr-2" />
                        Stop Recording
                      </Button>
                    )}
                    
                    {feedback && currentQuestionIndex < questions.length - 1 && (
                      <Button onClick={nextQuestion} variant="outline" size="lg">
                        Next Question
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feedback Panel */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Feedback
                </CardTitle>
              </CardHeader>
              <CardContent>
                {feedback ? (
                  <Tabs defaultValue="scores" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="scores">Scores</TabsTrigger>
                      <TabsTrigger value="feedback">Details</TabsTrigger>
                      <TabsTrigger value="model">Model</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="scores" className="space-y-4 mt-4">
                      {/* Overall Score */}
                      <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                        <p className="text-sm text-muted-foreground">Overall Score</p>
                        <p className={`text-4xl font-bold ${getScoreColor(feedback.scores.overall, 100)}`}>
                          {feedback.scores.overall}
                          <span className="text-lg text-muted-foreground">/100</span>
                        </p>
                      </div>

                      <Separator />

                      {/* Communication */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Communication ({feedback.scores.communication.total}/40)</h4>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="flex justify-between">
                            <span>Pitch</span>
                            <span className={getScoreColor(feedback.scores.communication.pitch)}>{feedback.scores.communication.pitch}/10</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Tone</span>
                            <span className={getScoreColor(feedback.scores.communication.tone)}>{feedback.scores.communication.tone}/10</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Structure</span>
                            <span className={getScoreColor(feedback.scores.communication.structure)}>{feedback.scores.communication.structure}/10</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Pace</span>
                            <span className={getScoreColor(feedback.scores.communication.pace)}>{feedback.scores.communication.pace}/10</span>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Content */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Content ({feedback.scores.content.total}/60)</h4>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="flex justify-between">
                            <span>Relevance</span>
                            <span className={getScoreColor(feedback.scores.content.relevance)}>{feedback.scores.content.relevance}/10</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Clinical</span>
                            <span className={getScoreColor(feedback.scores.content.clinical_reasoning)}>{feedback.scores.content.clinical_reasoning}/10</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Ethics</span>
                            <span className={getScoreColor(feedback.scores.content.ethics)}>{feedback.scores.content.ethics}/10</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Reflection</span>
                            <span className={getScoreColor(feedback.scores.content.reflection)}>{feedback.scores.content.reflection}/10</span>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="feedback" className="mt-4">
                      <ScrollArea className="h-[350px]">
                        <div className="space-y-4">
                          {/* Summary */}
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                              <p className="text-sm">{feedback.executive_summary}</p>
                            </div>
                          </div>

                          {/* Communication Feedback */}
                          <div>
                            <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                              <AlertCircle className="w-4 h-4" />
                              Communication
                            </h4>
                            <ul className="space-y-1">
                              {feedback.detailed_feedback.communication.map((item, idx) => (
                                <li key={idx} className="text-xs text-muted-foreground pl-3 border-l-2 border-gray-200">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Content Feedback */}
                          <div>
                            <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                              <AlertCircle className="w-4 h-4" />
                              Content
                            </h4>
                            <ul className="space-y-1">
                              {feedback.detailed_feedback.content.map((item, idx) => (
                                <li key={idx} className="text-xs text-muted-foreground pl-3 border-l-2 border-gray-200">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Practice Tips */}
                          <div>
                            <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                              <Lightbulb className="w-4 h-4 text-yellow-600" />
                              Practice Tips
                            </h4>
                            <ul className="space-y-1">
                              {feedback.actionable_practice.map((item, idx) => (
                                <li key={idx} className="text-xs text-muted-foreground pl-3 border-l-2 border-yellow-200">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </ScrollArea>
                    </TabsContent>
                    
                    <TabsContent value="model" className="mt-4">
                      <ScrollArea className="h-[350px]">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-sm mb-2 text-green-800">Model Answer</h4>
                          <p className="text-sm text-green-900 whitespace-pre-wrap">
                            {feedback.model_answer}
                          </p>
                        </div>
                      </ScrollArea>
                    </TabsContent>
                  </Tabs>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-30" />
                    <p className="text-sm">Answer the question to receive feedback</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
