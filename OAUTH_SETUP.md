# OAuth Configuration Guide

## The Problem
When you test Google OAuth locally, it works fine, but when deployed, you get connection errors after sign-in. This is because:

1. **Development vs Production URLs**: Local development uses `localhost:3000`, but production uses your actual domain
2. **OAuth Redirect URLs**: Google OAuth needs to know which URLs are allowed for redirects
3. **Supabase Auth Configuration**: Supabase needs proper redirect URL configuration

## Solution Steps

### 1. Update Supabase Auth Settings
In your Supabase Dashboard:
1. Go to Authentication > Settings
2. Under "Site URL", set your production URL (e.g., `https://your-app.vercel.app`)
3. Under "Redirect URLs", add both:
   - `http://localhost:3000/auth/callback` (for development)
   - `https://your-app.vercel.app/auth/callback` (for production)

### 2. Configure Google OAuth
In Google Cloud Console:
1. Go to APIs & Services > Credentials
2. Edit your OAuth 2.0 Client ID
3. Under "Authorized redirect URIs", add:
   - `https://vkdneqbaoatqyiwunoqn.supabase.co/auth/v1/callback`
   - Make sure this matches your Supabase project URL

### 3. Environment Variables
Update your `.env.local` with your actual production URL:
```
NEXT_PUBLIC_SITE_URL=https://your-actual-domain.vercel.app
```

### 4. Files Modified
- `lib/supabase.ts` - Updated OAuth redirect logic
- `app/auth/callback/page.tsx` - Created OAuth callback handler
- `app/login/page.tsx` - Added error handling for OAuth
- `.env.local` - Added site URL configuration

## Testing
1. **Local Testing**: Should work with `http://localhost:3000`
2. **Production Testing**: Update environment variable and deploy

## Important Notes
- Always update the `NEXT_PUBLIC_SITE_URL` environment variable when deploying
- Ensure Supabase redirect URLs match your OAuth provider settings
- The callback URL pattern should be consistent across all environments
