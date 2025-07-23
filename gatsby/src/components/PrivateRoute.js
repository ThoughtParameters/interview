import React from 'react';
import { navigate } from 'gatsby';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>; // Or a spinner component
  }

  if (!user) {
    // If we’re not on the client side, don’t redirect
    if (typeof window !== 'undefined') {
      navigate('/login');
    }
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
