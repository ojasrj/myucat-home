import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { 
  Plus, 
  Trash2, 
  Save, 
  GraduationCap,
  ArrowLeft,
  FileText,
  Loader2,
  GripVertical
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface MedicalSchool {
  id: string;
  name: string;
  description: string;
  interview_style: string;
  voice_id: string;
}

interface InterviewQuestion {
  id?: string;
  school_id: string;
  question_text: string;
  question_type: string;
  mark_scheme: MarkScheme;
  model_answer: string;
  tips: string;
  time_limit_seconds: number;
  order_index: number;
}

interface MarkScheme {
  criteria: MarkCriterion[];
  total_marks: number;
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

const DEFAULT_MARK_SCHEME: MarkScheme = {
  criteria: [
    {
      name: "Communication",
      description: "Clarity, structure, and confidence in delivery",
      max_marks: 25,
      indicators: {
        excellent: "Clear, well-structured response with confident delivery",
        good: "Mostly clear with some structure",
        satisfactory: "Understandable but lacks structure",
        needs_improvement: "Unclear or disorganized response"
      }
    },
    {
      name: "Content & Knowledge",
      description: "Accuracy and depth of medical/ethical understanding",
      max_marks: 30,
      indicators: {
        excellent: "Demonstrates deep understanding with accurate information",
        good: "Shows good understanding with minor gaps",
        satisfactory: "Basic understanding present",
        needs_improvement: "Limited or inaccurate knowledge"
      }
    },
    {
      name: "Critical Thinking",
      description: "Ability to analyze and reason through scenarios",
      max_marks: 25,
      indicators: {
        excellent: "Excellent analytical skills, considers multiple perspectives",
        good: "Good analysis with some consideration of alternatives",
        satisfactory: "Some analytical thinking shown",
        needs_improvement: "Limited critical analysis"
      }
    },
    {
      name: "Empathy & Ethics",
      description: "Awareness of ethical principles and patient-centered care",
      max_marks: 20,
      indicators: {
        excellent: "Strong ethical awareness and empathetic approach",
        good: "Good ethical consideration",
        satisfactory: "Basic ethical awareness",
        needs_improvement: "Limited ethical consideration"
      }
    }
  ],
  total_marks: 100
};

export default function InterviewAdmin() {
  const [schools, setSchools] = useState<MedicalSchool[]>([]);
  const [selectedSchool, setSelectedSchool] = useState<string>("");
  const [questions, setQuestions] = useState<InterviewQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  
  // New school form
  const [newSchoolName, setNewSchoolName] = useState("");
  const [newSchoolDescription, setNewSchoolDescription] = useState("");
  const [showNewSchoolForm, setShowNewSchoolForm] = useState(false);

  // Load schools
  useEffect(() => {
    loadSchools();
  }, []);

  // Load questions when school changes
  useEffect(() => {
    if (selectedSchool) {
      loadQuestions(selectedSchool);
    }
  }, [selectedSchool]);

  const loadSchools = async () => {
    try {
      const { data, error } = await supabase
        .from("medical_schools")
        .select("*")
        .order("name");
      
      if (error) throw error;
      setSchools(data || []);
      if (data && data.length > 0 && !selectedSchool) {
        setSelectedSchool(data[0].id);
      }
    } catch (err) {
      console.error("Failed to load schools:", err);
      toast.error("Failed to load medical schools");
    } finally {
      setIsLoading(false);
    }
  };

  const loadQuestions = async (schoolId: string) => {
    try {
      const { data, error } = await supabase
        .from("interview_questions")
        .select("*")
        .eq("school_id", schoolId)
        .order("order_index");
      
      if (error) throw error;
      
      // Parse mark_scheme from JSONB
      const parsedQuestions = (data || []).map(q => ({
        ...q,
        mark_scheme: (q.mark_scheme as unknown as MarkScheme) || DEFAULT_MARK_SCHEME
      }));
      
      setQuestions(parsedQuestions);
    } catch (err) {
      console.error("Failed to load questions:", err);
      toast.error("Failed to load questions");
    }
  };

  const addNewSchool = async () => {
    if (!newSchoolName.trim()) {
      toast.error("Please enter a school name");
      return;
    }

    setIsSaving(true);
    try {
      const { data, error } = await supabase
        .from("medical_schools")
        .insert({
          name: newSchoolName.trim(),
          description: newSchoolDescription.trim(),
          interview_style: "mmi"
        })
        .select()
        .single();
      
      if (error) throw error;
      
      setSchools(prev => [...prev, data]);
      setSelectedSchool(data.id);
      setNewSchoolName("");
      setNewSchoolDescription("");
      setShowNewSchoolForm(false);
      toast.success("Medical school added");
    } catch (err) {
      console.error("Failed to add school:", err);
      toast.error("Failed to add school");
    } finally {
      setIsSaving(false);
    }
  };

  const addNewQuestion = () => {
    const newQuestion: InterviewQuestion = {
      school_id: selectedSchool,
      question_text: "",
      question_type: "standard",
      mark_scheme: DEFAULT_MARK_SCHEME,
      model_answer: "",
      tips: "",
      time_limit_seconds: 120,
      order_index: questions.length
    };
    setQuestions(prev => [...prev, newQuestion]);
  };

  const updateQuestion = (index: number, updates: Partial<InterviewQuestion>) => {
    setQuestions(prev => prev.map((q, i) => 
      i === index ? { ...q, ...updates } : q
    ));
  };

  const removeQuestion = (index: number) => {
    const question = questions[index];
    if (question.id) {
      // Mark for deletion on save
      setQuestions(prev => prev.filter((_, i) => i !== index));
      // Actually delete from DB
      supabase
        .from("interview_questions")
        .delete()
        .eq("id", question.id)
        .then(({ error }) => {
          if (error) {
            toast.error("Failed to delete question");
          }
        });
    } else {
      setQuestions(prev => prev.filter((_, i) => i !== index));
    }
  };

  const updateMarkCriterion = (
    questionIndex: number, 
    criterionIndex: number, 
    updates: Partial<MarkCriterion>
  ) => {
    setQuestions(prev => prev.map((q, qi) => {
      if (qi !== questionIndex) return q;
      
      const newCriteria = q.mark_scheme.criteria.map((c, ci) =>
        ci === criterionIndex ? { ...c, ...updates } : c
      );
      
      return {
        ...q,
        mark_scheme: {
          ...q.mark_scheme,
          criteria: newCriteria,
          total_marks: newCriteria.reduce((sum, c) => sum + c.max_marks, 0)
        }
      };
    }));
  };

  const saveQuestions = async () => {
    setIsSaving(true);
    try {
      for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const questionData: any = {
          school_id: q.school_id,
          question_text: q.question_text,
          question_type: q.question_type,
          mark_scheme: JSON.parse(JSON.stringify(q.mark_scheme)),
          model_answer: q.model_answer,
          tips: q.tips,
          time_limit_seconds: q.time_limit_seconds,
          order_index: i
        };

        if (q.id) {
          const { error } = await supabase
            .from("interview_questions")
            .update(questionData)
            .eq("id", q.id);
          if (error) throw error;
        } else {
          const { data, error } = await supabase
            .from("interview_questions")
            .insert(questionData)
            .select()
            .single();
          if (error) throw error;
          questions[i].id = data.id;
        }
      }
      
      toast.success("Questions saved successfully");
    } catch (err) {
      console.error("Failed to save questions:", err);
      toast.error("Failed to save questions");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
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
            <h1 className="text-xl font-bold text-gray-900">Interview Question Manager</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button onClick={saveQuestions} disabled={isSaving}>
              {isSaving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
              Save All
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar - School Selection */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Medical Schools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={selectedSchool} onValueChange={setSelectedSchool}>
                <SelectTrigger>
                  <SelectValue placeholder="Select school" />
                </SelectTrigger>
                <SelectContent>
                  {schools.map(school => (
                    <SelectItem key={school.id} value={school.id}>
                      {school.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {showNewSchoolForm ? (
                <div className="space-y-3 p-3 border rounded-lg">
                  <Input
                    placeholder="School name"
                    value={newSchoolName}
                    onChange={(e) => setNewSchoolName(e.target.value)}
                  />
                  <Textarea
                    placeholder="Description"
                    value={newSchoolDescription}
                    onChange={(e) => setNewSchoolDescription(e.target.value)}
                    rows={3}
                  />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={addNewSchool} disabled={isSaving}>
                      Add
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => setShowNewSchoolForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <Button variant="outline" className="w-full" onClick={() => setShowNewSchoolForm(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add School
                </Button>
              )}

              <Separator />

              <div className="text-sm text-muted-foreground">
                <p><strong>{questions.length}</strong> questions</p>
                {selectedSchool && schools.find(s => s.id === selectedSchool) && (
                  <p className="mt-2 text-xs">
                    {schools.find(s => s.id === selectedSchool)?.description}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Main Content - Questions */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Questions & Mark Schemes</h2>
              <Button onClick={addNewQuestion}>
                <Plus className="w-4 h-4 mr-2" />
                Add Question
              </Button>
            </div>

            <ScrollArea className="h-[calc(100vh-250px)]">
              <div className="space-y-6 pr-4">
                {questions.length === 0 ? (
                  <Card className="p-8 text-center text-muted-foreground">
                    <FileText className="w-12 h-12 mx-auto mb-4 opacity-30" />
                    <p>No questions yet. Add your first question to get started.</p>
                  </Card>
                ) : (
                  questions.map((question, qIndex) => (
                    <Card key={qIndex} className="shadow-md">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <GripVertical className="w-5 h-5 text-muted-foreground cursor-move" />
                            <Badge variant="secondary">Q{qIndex + 1}</Badge>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive"
                            onClick={() => removeQuestion(qIndex)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Question Text */}
                        <div className="space-y-2">
                          <Label>Question</Label>
                          <Textarea
                            placeholder="Enter the interview question..."
                            value={question.question_text}
                            onChange={(e) => updateQuestion(qIndex, { question_text: e.target.value })}
                            rows={2}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          {/* Question Type */}
                          <div className="space-y-2">
                            <Label>Question Type</Label>
                            <Select
                              value={question.question_type}
                              onValueChange={(v) => updateQuestion(qIndex, { question_type: v })}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="standard">Standard</SelectItem>
                                <SelectItem value="scenario">Scenario-based</SelectItem>
                                <SelectItem value="ethical">Ethical Dilemma</SelectItem>
                                <SelectItem value="motivation">Motivation</SelectItem>
                                <SelectItem value="roleplay">Role Play</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          {/* Time Limit */}
                          <div className="space-y-2">
                            <Label>Time Limit (seconds)</Label>
                            <Input
                              type="number"
                              value={question.time_limit_seconds}
                              onChange={(e) => updateQuestion(qIndex, { time_limit_seconds: parseInt(e.target.value) || 120 })}
                            />
                          </div>
                        </div>

                        {/* Model Answer */}
                        <div className="space-y-2">
                          <Label>Model Answer</Label>
                          <Textarea
                            placeholder="Enter the ideal response..."
                            value={question.model_answer}
                            onChange={(e) => updateQuestion(qIndex, { model_answer: e.target.value })}
                            rows={4}
                          />
                        </div>

                        {/* Tips */}
                        <div className="space-y-2">
                          <Label>Tips for Candidates</Label>
                          <Textarea
                            placeholder="Key points to remember..."
                            value={question.tips}
                            onChange={(e) => updateQuestion(qIndex, { tips: e.target.value })}
                            rows={2}
                          />
                        </div>

                        {/* Mark Scheme */}
                        <Separator />
                        <div className="space-y-3">
                          <Label className="text-base font-semibold">Mark Scheme (Total: {question.mark_scheme.total_marks})</Label>
                          
                          {question.mark_scheme.criteria.map((criterion, cIndex) => (
                            <div key={cIndex} className="p-3 bg-gray-50 rounded-lg space-y-2">
                              <div className="flex items-center justify-between">
                                <Input
                                  value={criterion.name}
                                  onChange={(e) => updateMarkCriterion(qIndex, cIndex, { name: e.target.value })}
                                  className="font-medium w-48"
                                />
                                <div className="flex items-center gap-2">
                                  <Label className="text-xs">Max Marks:</Label>
                                  <Input
                                    type="number"
                                    value={criterion.max_marks}
                                    onChange={(e) => updateMarkCriterion(qIndex, cIndex, { max_marks: parseInt(e.target.value) || 0 })}
                                    className="w-20"
                                  />
                                </div>
                              </div>
                              <Input
                                placeholder="Criterion description"
                                value={criterion.description}
                                onChange={(e) => updateMarkCriterion(qIndex, cIndex, { description: e.target.value })}
                                className="text-sm"
                              />
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="space-y-1">
                                  <Label className="text-xs text-green-600">Excellent</Label>
                                  <Input
                                    value={criterion.indicators.excellent}
                                    onChange={(e) => updateMarkCriterion(qIndex, cIndex, { 
                                      indicators: { ...criterion.indicators, excellent: e.target.value }
                                    })}
                                    className="text-xs"
                                  />
                                </div>
                                <div className="space-y-1">
                                  <Label className="text-xs text-blue-600">Good</Label>
                                  <Input
                                    value={criterion.indicators.good}
                                    onChange={(e) => updateMarkCriterion(qIndex, cIndex, { 
                                      indicators: { ...criterion.indicators, good: e.target.value }
                                    })}
                                    className="text-xs"
                                  />
                                </div>
                                <div className="space-y-1">
                                  <Label className="text-xs text-yellow-600">Satisfactory</Label>
                                  <Input
                                    value={criterion.indicators.satisfactory}
                                    onChange={(e) => updateMarkCriterion(qIndex, cIndex, { 
                                      indicators: { ...criterion.indicators, satisfactory: e.target.value }
                                    })}
                                    className="text-xs"
                                  />
                                </div>
                                <div className="space-y-1">
                                  <Label className="text-xs text-red-600">Needs Improvement</Label>
                                  <Input
                                    value={criterion.indicators.needs_improvement}
                                    onChange={(e) => updateMarkCriterion(qIndex, cIndex, { 
                                      indicators: { ...criterion.indicators, needs_improvement: e.target.value }
                                    })}
                                    className="text-xs"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      </main>
    </div>
  );
}
