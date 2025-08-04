# Supabase Setup Instructions

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up or log in
4. Click "New project"
5. Choose your organization
6. Fill in your project details:
   - Name: `pilotbase` (or your preferred name)
   - Database Password: Generate a strong password
   - Region: Choose closest to your users
7. Click "Create new project"

## 2. Get Your Project Credentials

1. In your Supabase dashboard, go to Settings > API
2. Copy the following values:
   - Project URL
   - Project API Key (anon, public)

## 3. Set Up Environment Variables

1. Create a `.env.local` file in your project root
2. Add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

## 4. Set Up Database Schema

1. In your Supabase dashboard, go to the SQL Editor
2. Copy the contents of `supabase-schema.sql`
3. Paste it into the SQL Editor
4. Click "Run" to execute the schema

This will create:
- `profiles` table for user profiles
- `projects` table for user projects
- `tasks` table for project tasks
- Row Level Security policies
- Triggers for automatic profile creation

## 5. Configure Authentication

1. Go to Authentication > Settings
2. Configure your site URL:
   - Site URL: `http://localhost:3000` (for development)
   - Redirect URLs: `http://localhost:3000/**`

## 6. Test Your Setup

1. Start your development server: `npm run dev`
2. Go to `http://localhost:3000/register`
3. Create a new account
4. Check your email for verification
5. Try logging in at `http://localhost:3000/login`

## 7. Optional: Email Configuration

For production, configure email settings in Authentication > Settings:
- SMTP settings for custom email provider
- Email templates customization
- Email rate limiting

## Features Enabled

✅ User registration with email verification  
✅ User login/logout  
✅ Protected routes  
✅ User profiles with metadata  
✅ Database for projects and tasks  
✅ Row Level Security for data protection  

## Next Steps

- Implement project CRUD operations
- Add real-time subscriptions
- Set up file storage for avatars
- Configure social auth providers (Google, GitHub, etc.)
- Set up production environment variables
