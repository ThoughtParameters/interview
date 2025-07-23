import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';
import { SEO } from '../../components/seo';
import { supabase } from '../../utils/supabase';

const ExamsPage = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchExams = async () => {
      const { data, error } = await supabase.from('exams').select('*');
      if (error) {
        setError(error.message);
      } else {
        setExams(data);
      }
      setLoading(false);
    };
    fetchExams();
  }, []);

  return (
    <Layout>
      <SEO title="Exams" />
      <h1 className="text-3xl font-bold mb-6">Available Exams</h1>
      {loading && <p>Loading exams...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {exams.map((exam) => (
          <Link
            key={exam.slug}
            to={`/exams/${exam.slug}`}
            className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-2xl font-bold mb-2">{exam.name}</h2>
            <p>{exam.description}</p>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default ExamsPage;
