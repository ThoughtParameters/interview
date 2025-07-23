import React, { createContext, useState, useEffect, useContext } from 'react';
import { getSupabase } from '../utils/supabase';
import { navigate } from 'gatsby';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = getSupabase();
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // Set the initial user state
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const value = {
    signUp: (data) => getSupabase().auth.signUp(data),
    signIn: (data) => getSupabase().auth.signInWithPassword(data),
    signOut: async () => {
      await getSupabase().auth.signOut();
      navigate('/login');
    },
    deleteUser: async () => {
      const { data, error } = await getSupabase().rpc('delete_user');
      if (error) throw error;
      return data;
    },
    user,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
