import React from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import PrivateRoute from '../components/PrivateRoute';

const ExamContent = () => {
  return (
    <Layout>
      <SEO title="Exam" />
      <h1 className="text-3xl font-bold mb-4">Certification Exam</h1>
      <p>This is where the exam will be.</p>
    </Layout>
  );
};

const ExamPage = () => <PrivateRoute component={ExamContent} />;

export default ExamPage;
