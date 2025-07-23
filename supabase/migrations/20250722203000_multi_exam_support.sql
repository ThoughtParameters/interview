-- 1. Create Exams Table
-- This table will serve as a central directory for all certifications.
CREATE TABLE public.exams (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  passing_score INTEGER NOT NULL DEFAULT 75
);

-- 2. Add exam_id to Questions Table
-- This creates a direct link between a question and a specific exam.
ALTER TABLE public.questions
ADD COLUMN exam_id UUID REFERENCES public.exams(id);

-- 3. Enable RLS for the new Exams table
ALTER TABLE public.exams ENABLE ROW LEVEL SECURITY;

-- 4. Create RLS Policies for Exams
-- All authenticated users can view the list of available exams.
CREATE POLICY "Authenticated users can view exams."
ON public.exams FOR SELECT
USING (auth.role() = 'authenticated');
