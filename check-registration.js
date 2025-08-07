// Check if registration was successful
require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function checkRegistration() {
  try {
    console.log('🔍 Checking for registered users...')
    
    // Check profiles table for any new users
    const { data: profiles, error: profilesError } = await supabase
      .from('profiles')
      .select('*')
    
    if (profilesError) {
      console.error('Error checking profiles:', profilesError)
      return
    }
    
    console.log(`✅ Found ${profiles?.length || 0} user profile(s) in database`)
    
    if (profiles && profiles.length > 0) {
      profiles.forEach((profile, index) => {
        console.log(`📋 User ${index + 1}:`)
        console.log(`   - ID: ${profile.id}`)
        console.log(`   - Name: ${profile.first_name || 'N/A'} ${profile.last_name || 'N/A'}`)
        console.log(`   - Created: ${profile.updated_at || 'N/A'}`)
        console.log('')
      })
      
      console.log('🎉 Registration appears to be working!')
      console.log('✅ User profiles are being created automatically')
    } else {
      console.log('ℹ️  No users registered yet')
      console.log('Try registering a new account at: http://localhost:3000/register')
    }
    
  } catch (error) {
    console.error('Failed to check registration:', error)
  }
}

checkRegistration()
