import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import PrivateRoute from '../components/PrivateRoute';
import { useAuth } from '../context/AuthContext';
import { navigate } from 'gatsby';
import { getSupabase } from '../utils/supabase';

const ProfileContent = () => {
  const { user, deleteUser, signOut } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [examHistory, setExamHistory] = useState([]);

  useEffect(() => {
    const fetchExamHistory = async () => {
      try {
        const supabase = getSupabase();
        const { data: session, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) throw sessionError;

        const response = await fetch('https://interviewapi.thoughtparameters.com/profile/exam-history', {
          headers: {
            Authorization: `Bearer ${session.session.access_token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch exam history');
        }
        const data = await response.json();
        setExamHistory(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchExamHistory();
  }, []);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action is irreversible.')) {
      setLoading(true);
      setError('');
      try {
        await deleteUser();
        await signOut();
        navigate('/');
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Layout>
      <SEO title="Profile" />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <p className="mb-4">
            Welcome, {user?.user_metadata.full_name || user?.email}!
          </p>
          <h2 className="text-xl font-bold mt-6 mb-2">Account Settings</h2>
          <button
            onClick={handleDelete}
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {loading ? 'Deleting...' : 'Delete Account'}
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        <h2 className="text-2xl font-bold mb-4">Exam History</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          {examHistory.length > 0 ? (
            <ul className="divide-y divide-gray-700">
              {examHistory.map((exam, index) => (
                <li key={index} className="py-4">
                  <p><strong>Exam:</strong> {exam.exam_type}</p>
                  <p><strong>Score:</strong> {exam.score}%</p>
                  <p><strong>Result:</strong> {exam.passed ? 'Passed' : 'Failed'}</p>
                  <p><strong>Date:</strong> {new Date(exam.completed_at).toLocaleString()}</p>
                  <p><strong>Duration:</strong> {exam.duration_seconds} seconds</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>You have not taken any exams yet.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

const ProfilePage = () => <PrivateRoute component={ProfileContent} />;

export default ProfilePage;
