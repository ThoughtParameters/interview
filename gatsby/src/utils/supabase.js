import { createClient } from '@supabase/supabase-js';

let supabase = null;

export const getSupabase = () => {
  if (!supabase) {
    supabase = createClient(
      process.env.GATSBY_SUPABASE_URL,
      process.env.GATSBY_SUPABASE_ANON_KEY
    );
  }
  return supabase;
};
