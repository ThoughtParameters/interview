-- Add a column to store the duration of the exam in seconds.
ALTER TABLE public.user_exams
ADD COLUMN duration_seconds INTEGER;
