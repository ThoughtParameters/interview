import React from 'react';
import { useLocation } from '@reach/router';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

const ExamResultsPage = () => {
  const location = useLocation();
  const { score, passed, verificationId } = location.state || {};

  return (
    <Layout>
      <SEO title="Exam Results" />
      <h1 className="text-3xl font-bold mb-4">Exam Results</h1>
      {location.state ? (
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">
            You {passed ? 'Passed!' : 'Did Not Pass'}
          </h2>
          <p>
            <strong>Your Score:</strong> {score}%
          </p>
          {passed && (
            <div>
              <p>Congratulations! You can view your certificate here:</p>
              <a
                href={`/verify/${verificationId}`}
                className="text-blue-400 hover:underline"
              >
                View Certificate
              </a>
            </div>
          )}
        </div>
      ) : (
        <p>No exam results to display.</p>
      )}
    </Layout>
  );
};

export default ExamResultsPage;
