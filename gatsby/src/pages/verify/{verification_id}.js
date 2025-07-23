import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import { SEO } from '../../components/seo';

const VerificationPage = ({ params }) => {
  const [verificationData, setVerificationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVerificationData = async () => {
      try {
        const response = await fetch(
          `https://interviewapi.thoughtparameters.com/verify/${params.verification_id}`
        );
        if (!response.ok) {
          throw new Error('Verification not found');
        }
        const data = await response.json();
        setVerificationData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVerificationData();
  }, [params.verification_id]);

  return (
    <Layout>
      <SEO title="Verify Certification" />
      <h1 className="text-3xl font-bold mb-4">Certification Verification</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {verificationData && (
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">
            {verificationData.full_name}
          </h2>
          <p>
            <strong>Exam:</strong> {verificationData.exam_type}
          </p>
          <p>
            <strong>Date Completed:</strong>{' '}
            {new Date(verificationData.completed_at).toLocaleDateString()}
          </p>
          <p>
            <strong>Status:</strong> {verificationData.passed ? 'Passed' : 'Failed'}
          </p>
        </div>
      )}
    </Layout>
  );
};

export default VerificationPage;
