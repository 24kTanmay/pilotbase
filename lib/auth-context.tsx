'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { auth, signInWithGoogle, signInWithFacebook } from './supabase';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ data: any; error: any }>;
  signInWithGoogle: () => Promise<{ data: any; error: any }>;
  signInWithFacebook: () => Promise<{ data: any; error: any }>;
  signUp: (email: string, password: string, firstName?: string, lastName?: string) => Promise<{ data: any; error: any }>;
  signOut: () => Promise<{ error: any }>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  signIn: async () => ({ data: null, error: null }),
  signInWithGoogle: async () => ({ data: null, error: null }),
  signInWithFacebook: async () => ({ data: null, error: null }),
  signUp: async () => ({ data: null, error: null }),
  signOut: async () => ({ error: null }),
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    auth.getCurrentUser().then(({ user, error }) => {
      if (error) {
        console.error('Error getting current user:', error);
      }
      setUser(user);
      setLoading(false);
    }).catch((error) => {
      console.error('Error in getCurrentUser:', error);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session);
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const result = await auth.signIn(email, password);
      if (result.error) {
        console.error('Sign in error:', result.error);
      } else {
        console.log('Sign in successful:', result.data);
      }
      return result;
    } catch (error) {
      console.error('Unexpected sign in error:', error);
      return { data: null, error: { message: 'An unexpected error occurred during sign in' } };
    }
  };

  const signUp = async (email: string, password: string, firstName?: string, lastName?: string) => {
    const result = await auth.signUp(email, password, firstName, lastName);
    return result;
  };

  const signOut = async () => {
    const result = await auth.signOut();
    return result;
  };

  const value = {
    user,
    session,
    loading,
    signIn,
    signInWithGoogle,
    signInWithFacebook,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
