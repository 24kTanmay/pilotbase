'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Handle the OAuth callback
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Auth callback error:', error);
          // Redirect to login with error
          router.push('/login?error=auth_callback_failed');
          return;
        }

        if (data.session) {
          // Successfully authenticated, redirect to dashboard
          console.log('OAuth authentication successful');
          router.push('/dashboard');
        } else {
          // No session found, redirect to login
          console.log('No session found in callback');
          router.push('/login?error=no_session');
        }
      } catch (err) {
        console.error('Unexpected error in auth callback:', err);
        router.push('/login?error=unexpected_error');
      }
    };

    handleAuthCallback();
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mb-4"></div>
        <p className="text-gray-600">Completing your sign-in...</p>
      </div>
    </div>
  );
}
