import React, { useState, useEffect, useRef } from 'react';
import Layout from '../../components/layout';
import { SEO } from '../../components/seo';
import PrivateRoute from '../../components/PrivateRoute';
import { Router, navigate } from '@reach/router';
import { useAuth } from '../../context/AuthContext';
import { getSupabase } from '../../utils/supabase';

const ExamContent = ({ exam_slug }) => {
  const { user } = useAuth();
  const [exam, setExam] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const fetchExamAndQuestions = async () => {
      try {
        const supabase = getSupabase();
        // Fetch exam details to get the ID
        const { data: examData, error: examError } = await supabase
          .from('exams')
          .select('id, name')
          .eq('slug', exam_slug)
          .single();
        if (examError) throw examError;
        setExam(examData);

        // Fetch questions
        const response = await fetch(
          `https://interviewapi.thoughtparameters.com/questions/${exam_slug}`
        );
        if (!response.ok) throw new Error('Failed to fetch questions');
        const questionsData = await response.json();
        setQuestions(questionsData);
        setStartTime(Date.now());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExamAndQuestions();
  }, [exam_slug]);

  useEffect(() => {
    if (startTime) {
      timerRef.current = setInterval(() => {
        setTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [startTime]);

  const handleAnswerChange = (questionId, answerId) => {
    setAnswers({ ...answers, [questionId]: answerId });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearInterval(timerRef.current);
    const duration_seconds = Math.floor((Date.now() - startTime) / 1000);

    const submission = {
      exam_id: exam.id,
      answers: Object.entries(answers).map(([question_id, answer_id]) => ({
        question_id,
        answer_id,
      })),
      duration_seconds,
    };

    try {
      const supabase = getSupabase();
      const { data: session, error: sessionError } = await supabase.auth.getSession();
      if (sessionError) throw sessionError;

      const response = await fetch('https://interviewapi.thoughtparameters.com/submit-exam', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.session.access_token}`,
        },
        body: JSON.stringify(submission),
      });

      if (!response.ok) throw new Error('Failed to submit exam');
      const result = await response.json();
      navigate('/exam-results', { state: result });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <SEO title={`Exam: ${exam?.name || exam_slug}`} />
      <h1 className="text-3xl font-bold mb-4">Certification Exam: {exam?.name || exam_slug}</h1>
      <div className="fixed top-4 right-4 bg-gray-800 p-2 rounded">
        Time: {new Date(time * 1000).toISOString().substr(11, 8)}
      </div>
      {loading && <p>Loading questions...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        {questions.map((q) => (
          <div key={q.id} className="mb-8">
            <p className="font-bold">{q.question_text}</p>
            <div className="mt-2 space-y-2">
              {q.answers.map((a) => (
                <label key={a.id} className="flex items-center">
                  <input
                    type="radio"
                    name={q.id}
                    value={a.id}
                    onChange={() => handleAnswerChange(q.id, a.id)}
                    className="mr-2"
                  />
                  {a.answer_text}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit Exam
        </button>
      </form>
    </>
  );
};

const ExamPage = () => {
  return (
    <Layout>
      <Router basepath="/exam">
        <PrivateRoute component={ExamContent} path="/:exam_slug" />
      </Router>
    </Layout>
  );
};

export default ExamPage;
