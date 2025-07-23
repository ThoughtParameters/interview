import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import { SEO } from '../../components/seo';
import PrivateRoute from '../../components/PrivateRoute';
import { Router } from '@reach/router';

const ExamContent = ({ exam_slug }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          `https://interviewapi.thoughtparameters.com/questions/${exam_slug}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }
        const data = await response.json();
        setQuestions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [exam_slug]);

  return (
    <>
      <SEO title={`Exam: ${exam_slug}`} />
      <h1 className="text-3xl font-bold mb-4">Certification Exam: {exam_slug}</h1>
      {loading && <p>Loading questions...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {/* Add exam interface here */}
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
