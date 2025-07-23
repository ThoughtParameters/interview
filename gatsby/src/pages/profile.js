import React, { useState } from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import PrivateRoute from '../components/PrivateRoute';
import { useAuth } from '../context/AuthContext';
import { navigate } from 'gatsby';

const ProfileContent = () => {
  const { user, deleteUser, signOut } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
        <div className="bg-gray-800 p-6 rounded-lg">
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
      </div>
    </Layout>
  );
};

const ProfilePage = () => <PrivateRoute component={ProfileContent} />;

export default ProfilePage;
