import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';
import { SEO } from '../../components/seo';
import { supabase } from '../../utils/supabase';

const ExamDetailPage = ({ params }) => {
  const [exam, setExam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchExam = async () => {
      const { data, error } = await supabase
        .from('exams')
        .select('*')
        .eq('slug', params.exam_slug)
        .single();

      if (error) {
        setError(error.message);
      } else {
        setExam(data);
      }
      setLoading(false);
    };
    fetchExam();
  }, [params.exam_slug]);

  return (
    <Layout>
      {loading && <p>Loading exam details...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {exam && (
        <>
          <SEO title={exam.name} />
          <h1 className="text-3xl font-bold mb-4">{exam.name}</h1>
          <p className="mb-6">{exam.description}</p>
          <p className="mb-6">
            <strong>Passing Score:</strong> {exam.passing_score}%
          </p>
          <Link
            to={`/exam/${exam.slug}`}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            Start Exam
          </Link>
        </>
      )}
    </Layout>
  );
};

export default ExamDetailPage;
