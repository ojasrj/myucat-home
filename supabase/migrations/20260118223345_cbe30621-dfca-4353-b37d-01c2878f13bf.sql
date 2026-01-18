-- Create updated_at function first
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create medical schools table
CREATE TABLE public.medical_schools (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  interview_style TEXT NOT NULL DEFAULT 'mmi',
  voice_id TEXT DEFAULT 'EXAVITQu4vr4xnSDxMaL',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create interview questions table with mark schemes
CREATE TABLE public.interview_questions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  school_id UUID NOT NULL REFERENCES public.medical_schools(id) ON DELETE CASCADE,
  question_text TEXT NOT NULL,
  question_type TEXT DEFAULT 'standard',
  mark_scheme JSONB,
  model_answer TEXT,
  tips TEXT,
  time_limit_seconds INTEGER DEFAULT 120,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.medical_schools ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.interview_questions ENABLE ROW LEVEL SECURITY;

-- Public read access for all users
CREATE POLICY "Anyone can view medical schools"
ON public.medical_schools
FOR SELECT
USING (true);

CREATE POLICY "Anyone can view interview questions"
ON public.interview_questions
FOR SELECT
USING (true);

-- For now, allow public insert/update/delete (admin functionality can be added later)
CREATE POLICY "Anyone can manage medical schools"
ON public.medical_schools
FOR ALL
USING (true)
WITH CHECK (true);

CREATE POLICY "Anyone can manage interview questions"
ON public.interview_questions
FOR ALL
USING (true)
WITH CHECK (true);

-- Create indexes
CREATE INDEX idx_questions_school_id ON public.interview_questions(school_id);
CREATE INDEX idx_questions_order ON public.interview_questions(school_id, order_index);

-- Insert Imperial College London as the first school
INSERT INTO public.medical_schools (name, description, interview_style, voice_id)
VALUES (
  'Imperial College London',
  'Imperial uses a Multiple Mini Interview (MMI) format with 7-8 stations. Each station is 5-7 minutes and tests different competencies including communication, ethics, problem-solving, and motivation.',
  'mmi',
  'EXAVITQu4vr4xnSDxMaL'
);

-- Add trigger for updated_at
CREATE TRIGGER update_medical_schools_updated_at
BEFORE UPDATE ON public.medical_schools
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_interview_questions_updated_at
BEFORE UPDATE ON public.interview_questions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();