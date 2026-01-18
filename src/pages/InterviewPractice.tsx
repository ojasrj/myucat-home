import { useState, useCallback, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  RotateCcw, 
  Volume2, 
  VolumeX,
  CheckCircle2,
  XCircle,
  Lightbulb,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  Loader2,
  GraduationCap,
  Clock,
  Settings
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

interface MedicalSchool {
  id: string;
  name: string;
  description: string;
  interview_style: string;
  voice_id: string;
}

interface MarkCriterion {
  name: string;
  description: string;
  max_marks: number;
  indicators: {
    excellent: string;
    good: string;
    satisfactory: string;
    needs_improvement: string;
  };
}

interface MarkScheme {
  criteria: MarkCriterion[];
  total_marks: number;
}

interface InterviewQuestion {
  id: string;
  question_text: string;
  question_type: string;
  mark_scheme: MarkScheme;
  model_answer: string;
  tips: string;
  time_limit_seconds: number;
  order_index: number;
}

interface Message {
  role: "interviewer" | "candidate";
  content: string;
  timestamp: Date;
}

interface FeedbackResult {
  scores: {
    criteria: Array<{
      name: string;
      score: number;
      max_marks: number;
      feedback: string;
    }>;
    total: number;
    max_total: number;
    percentage: number;
  };
  what_went_well: string[];
  areas_for_improvement: string[];
  model_answer: string;
}

export default function InterviewPractice() {
  const [schools, setSchools] = useState<MedicalSchool[]>([]);
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>("");
  const [questions, setQuestions] = useState<InterviewQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [followUpDepth, setFollowUpDepth] = useState(2);
  
  const [isLoadingSchools, setIsLoadingSchools] = useState(true);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);
  const [sessionStarted, setSessionStarted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [transcript, setTranscript] = useState("");
  const [feedback, setFeedback] = useState<FeedbackResult | null>(null);
  const [followUpCount, setFollowUpCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const recognitionRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Load schools on mount
  useEffect(() => {
    loadSchools();
  }, []);

  // Load questions when school changes
  useEffect(() => {
    if (selectedSchoolId) {
      loadQuestions(selectedSchoolId);
    }
  }, [selectedSchoolId]);

  // Auto-scroll messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Timer for recording
  useEffect(() => {
    if (isRecording && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            stopRecording();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRecording]);

  const loadSchools = async () => {
    try {
      const { data, error } = await supabase
        .from("medical_schools")
        .select("*")
        .order("name");
      
      if (error) throw error;
      setSchools(data || []);
    } catch (err) {
      console.error("Failed to load schools:", err);
      toast.error("Failed to load medical schools");
    } finally {
      setIsLoadingSchools(false);
    }
  };

  const loadQuestions = async (schoolId: string) => {
    setIsLoadingQuestions(true);
    try {
      const { data, error } = await supabase
        .from("interview_questions")
        .select("*")
        .eq("school_id", schoolId)
        .order("order_index");
      
      if (error) throw error;
      
      const parsedQuestions = (data || []).map(q => ({
        ...q,
        mark_scheme: q.mark_scheme as unknown as MarkScheme
      }));
      
      setQuestions(parsedQuestions);
    } catch (err) {
      console.error("Failed to load questions:", err);
      toast.error("Failed to load questions");
    } finally {
      setIsLoadingQuestions(false);
    }
  };

  const selectedSchool = schools.find(s => s.id === selectedSchoolId);

  const playAudio = async (text: string) => {
    if (isMuted) return;
    
    try {
      const voiceId = selectedSchool?.voice_id || "EXAVITQu4vr4xnSDxMaL";
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/interview-tts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ text, voiceId }),
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
    if (questions.length === 0) {
      toast.error("No questions available for this school. Please add questions first.");
      return;
    }

    setSessionStarted(true);
    setCurrentQuestionIndex(0);
    setMessages([]);
    setFeedback(null);
    setFollowUpCount(0);
    
    const greeting = `Welcome to your ${selectedSchool?.name} interview practice. This is an MMI-style interview with ${questions.length} stations. You'll have a time limit for each question. Let's begin.`;
    
    setMessages([{
      role: "interviewer",
      content: greeting,
      timestamp: new Date()
    }]);
    
    await playAudio(greeting);
    
    setTimeout(async () => {
      const firstQuestion = questions[0];
      setTimeRemaining(firstQuestion.time_limit_seconds);
      setMessages(prev => [...prev, {
        role: "interviewer",
        content: firstQuestion.question_text,
        timestamp: new Date()
      }]);
      await playAudio(firstQuestion.question_text);
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
      setTimeRemaining(questions[currentQuestionIndex]?.time_limit_seconds || 120);
    } catch (error) {
      console.error("Error starting recording:", error);
      toast.error("Could not access microphone. Please check permissions.");
    }
  };

  const stopRecording = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
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
      const candidateMessage = transcript || "Processing your response...";
      setMessages(prev => [...prev, {
        role: "candidate",
        content: candidateMessage,
        timestamp: new Date()
      }]);

      const currentQuestion = questions[currentQuestionIndex];
      
      const { data, error } = await supabase.functions.invoke("interview-feedback", {
        body: {
          transcript: candidateMessage,
          question: currentQuestion.question_text,
          markScheme: currentQuestion.mark_scheme,
          modelAnswer: currentQuestion.model_answer,
          tips: currentQuestion.tips,
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

      if (data.followUp && followUpCount < followUpDepth) {
        setFollowUpCount(prev => prev + 1);
        
        setMessages(prev => [...prev, {
          role: "interviewer",
          content: data.followUp,
          timestamp: new Date()
        }]);
        
        await playAudio(data.followUp);
      } else {
        // Use provided model answer from the question, or AI-generated one
        const finalFeedback = {
          ...data.feedback,
          model_answer: currentQuestion.model_answer || data.feedback?.model_answer || ""
        };
        setFeedback(finalFeedback);
        
        if (currentQuestionIndex < questions.length - 1) {
          const transition = "Thank you for your answer. Review your feedback, then continue to the next station.";
          setMessages(prev => [...prev, {
            role: "interviewer",
            content: transition,
            timestamp: new Date()
          }]);
          await playAudio(transition);
        } else {
          const closing = "That concludes your interview practice. Well done! Review your feedback to see how you performed.";
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
      
      const nextQ = questions[currentQuestionIndex + 1];
      setTimeRemaining(nextQ.time_limit_seconds);
      setMessages(prev => [...prev, {
        role: "interviewer",
        content: nextQ.question_text,
        timestamp: new Date()
      }]);
      await playAudio(nextQ.question_text);
    }
  };

  const resetSession = () => {
    setSessionStarted(false);
    setCurrentQuestionIndex(0);
    setMessages([]);
    setFeedback(null);
    setTranscript("");
    setFollowUpCount(0);
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 70) return "text-green-600";
    if (percentage >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  if (isLoadingSchools) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light via-white to-secondary">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-secondary">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h1 className="text-xl font-bold text-gray-900">Medical Interview Coach</h1>
          </div>
          <div className="flex gap-2">
            <Link to="/interview-admin">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Manage Questions
              </Button>
            </Link>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {!sessionStarted ? (
          // Setup Screen
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Choose Your Medical School</CardTitle>
                <CardDescription>
                  Practice with school-specific questions and mark schemes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {schools.length === 0 ? (
                  <div className="text-center py-8">
                    <GraduationCap className="w-12 h-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                    <p className="text-muted-foreground mb-4">No medical schools configured yet.</p>
                    <Link to="/interview-admin">
                      <Button>
                        <Settings className="w-4 h-4 mr-2" />
                        Add Schools & Questions
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Medical School</label>
                      <Select value={selectedSchoolId} onValueChange={setSelectedSchoolId}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select a medical school" />
                        </SelectTrigger>
                        <SelectContent>
                          {schools.map(school => (
                            <SelectItem key={school.id} value={school.id}>
                              {school.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {selectedSchool && (
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-medium mb-2">{selectedSchool.name}</h3>
                        <p className="text-sm text-muted-foreground">{selectedSchool.description}</p>
                        <div className="mt-3 flex gap-2">
                          <Badge variant="secondary">{selectedSchool.interview_style.toUpperCase()}</Badge>
                          <Badge variant="outline">
                            {isLoadingQuestions ? "Loading..." : `${questions.length} Questions`}
                          </Badge>
                        </div>
                      </div>
                    )}

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

                    <Button 
                      onClick={startSession} 
                      className="w-full" 
                      size="lg"
                      disabled={!selectedSchoolId || questions.length === 0 || isLoadingQuestions}
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Start Interview Practice
                    </Button>
                  </>
                )}
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
                    <CardTitle>{selectedSchool?.name}</CardTitle>
                    <CardDescription>
                      Station {currentQuestionIndex + 1} of {questions.length}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-3">
                    {isRecording && (
                      <Badge variant="destructive" className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatTime(timeRemaining)}
                      </Badge>
                    )}
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
                <ScrollArea className="h-[350px] p-4" ref={scrollRef}>
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
                    <p className="text-xs text-muted-foreground mb-1">Live transcript:</p>
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
                        Next Station
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
                  <Tabs defaultValue="summary" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="summary">Summary</TabsTrigger>
                      <TabsTrigger value="details">Details</TabsTrigger>
                      <TabsTrigger value="model">Model</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="summary" className="space-y-4 mt-4">
                      {/* Overall Score */}
                      <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                        <p className="text-sm text-muted-foreground">Overall Score</p>
                        <p className={`text-4xl font-bold ${getScoreColor(feedback.scores.percentage)}`}>
                          {feedback.scores.total}
                          <span className="text-lg text-muted-foreground">/{feedback.scores.max_total}</span>
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {feedback.scores.percentage}%
                        </p>
                      </div>

                      <Separator />

                      {/* What Went Well */}
                      <div>
                        <h4 className="font-medium text-sm mb-2 flex items-center gap-2 text-green-700">
                          <CheckCircle2 className="w-4 h-4" />
                          What Went Well
                        </h4>
                        <ul className="space-y-1">
                          {feedback.what_went_well.map((item, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground pl-3 border-l-2 border-green-300">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Areas for Improvement */}
                      <div>
                        <h4 className="font-medium text-sm mb-2 flex items-center gap-2 text-amber-700">
                          <XCircle className="w-4 h-4" />
                          Areas for Improvement
                        </h4>
                        <ul className="space-y-1">
                          {feedback.areas_for_improvement.map((item, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground pl-3 border-l-2 border-amber-300">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="details" className="mt-4">
                      <ScrollArea className="h-[350px]">
                        <div className="space-y-3">
                          {feedback.scores.criteria.map((criterion, idx) => (
                            <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-medium text-sm">{criterion.name}</span>
                                <span className={`text-sm font-bold ${getScoreColor((criterion.score / criterion.max_marks) * 100)}`}>
                                  {criterion.score}/{criterion.max_marks}
                                </span>
                              </div>
                              <Progress 
                                value={(criterion.score / criterion.max_marks) * 100} 
                                className="h-2 mb-2"
                              />
                              <p className="text-xs text-muted-foreground">{criterion.feedback}</p>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </TabsContent>
                    
                    <TabsContent value="model" className="mt-4">
                      <ScrollArea className="h-[350px]">
                        <div className="space-y-4">
                          <div className="p-4 bg-green-50 rounded-lg">
                            <h4 className="font-medium text-sm mb-2 text-green-800 flex items-center gap-2">
                              <Lightbulb className="w-4 h-4" />
                              Model Answer
                            </h4>
                            <p className="text-sm text-green-900 whitespace-pre-wrap">
                              {feedback.model_answer}
                            </p>
                          </div>
                          
                          {questions[currentQuestionIndex]?.tips && (
                            <div className="p-4 bg-blue-50 rounded-lg">
                              <h4 className="font-medium text-sm mb-2 text-blue-800">Tips</h4>
                              <p className="text-sm text-blue-900">
                                {questions[currentQuestionIndex].tips}
                              </p>
                            </div>
                          )}
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
