-- 1. Create Profiles Table
-- This table stores public user data and is linked to the auth.users table.
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  full_name TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- 2. Create Topics Table
-- This table stores the learning topics.
CREATE TABLE public.topics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT
);

-- 3. Create Questions Table
-- This table stores the exam questions.
CREATE TABLE public.questions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question_text TEXT NOT NULL,
  topic_id UUID REFERENCES public.topics(id)
);

-- 4. Create Answers Table
-- This table stores the possible answers for each question.
CREATE TABLE public.answers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
  answer_text TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL DEFAULT FALSE
);

-- 5. Create User Exams Table
-- This table stores the results of a user's exam attempt.
CREATE TABLE public.user_exams (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  verification_id UUID UNIQUE,
  exam_type TEXT NOT NULL,
  exam_version TEXT,
  score INTEGER NOT NULL,
  passed BOOLEAN NOT NULL,
  completed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  expires_at TIMESTAMPTZ
);

-- 6. Enable Row Level Security (RLS) for all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_exams ENABLE ROW LEVEL SECURITY;

-- 7. Create RLS Policies

-- Profiles: Users can only see their own profile.
CREATE POLICY "Users can view their own profile."
ON public.profiles FOR SELECT
USING (auth.uid() = id);

-- Profiles: Users can update their own profile.
CREATE POLICY "Users can update their own profile."
ON public.profiles FOR UPDATE
USING (auth.uid() = id);

-- Topics: All authenticated users can view topics.
CREATE POLICY "Authenticated users can view topics."
ON public.topics FOR SELECT
USING (auth.role() = 'authenticated');

-- Questions: All authenticated users can view questions.
CREATE POLICY "Authenticated users can view questions."
ON public.questions FOR SELECT
USING (auth.role() = 'authenticated');

-- Answers: All authenticated users can view answers.
CREATE POLICY "Authenticated users can view answers."
ON public.answers FOR SELECT
USING (auth.role() = 'authenticated');

-- User Exams: Users can only see their own exam results.
CREATE POLICY "Users can view their own exam results."
ON public.user_exams FOR SELECT
USING (auth.uid() = user_id);

-- 8. Function to create a profile for a new user
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (new.id, new.raw_user_meta_data->>'full_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 9. Trigger to call the function when a new user signs up
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
