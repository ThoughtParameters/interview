import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import { SEO } from '../../components/seo';
import { Router } from '@reach/router';

const VerificationContent = ({ verification_id }) => {
  const [verificationData, setVerificationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVerificationData = async () => {
      try {
        const response = await fetch(
          `https://interviewapi.thoughtparameters.com/verify/${verification_id}`
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

    if (verification_id) {
      fetchVerificationData();
    }
  }, [verification_id]);

  const AddToLinkedInButton = ({ verificationData, verification_id }) => {
    const linkedInUrl = new URL('https://www.linkedin.com/profile/add');
    linkedInUrl.searchParams.append('name', verificationData.exam_type);
    linkedInUrl.searchParams.append('organizationName', 'Thought Parameters LLC');
    const issueDate = new Date(verificationData.completed_at);
    linkedInUrl.searchParams.append('issueYear', issueDate.getFullYear());
    linkedInUrl.searchParams.append('issueMonth', issueDate.getMonth() + 1);
    linkedInUrl.searchParams.append('credentialID', verification_id);
    linkedInUrl.searchParams.append('credentialURL', `${window.location.origin}/verify/${verification_id}`);

    return (
      <a
        href={linkedInUrl.toString()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add to LinkedIn
      </a>
    );
  };

  return (
    <>
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
          {verificationData.passed && (
            <AddToLinkedInButton
              verificationData={verificationData}
              verification_id={verification_id}
            />
          )}
        </div>
      )}
    </>
  );
};

const VerificationPage = () => {
  return (
    <Layout>
      <SEO title="Verify Certification" />
      <h1 className="text-3xl font-bold mb-4">Certification Verification</h1>
      <Router basepath="/verify">
        <VerificationContent path="/:verification_id" />
      </Router>
    </Layout>
  );
};

export default VerificationPage;
