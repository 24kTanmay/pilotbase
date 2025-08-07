// Check user confirmation status
require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

async function checkUsers() {
  try {
    // Check if there are any users in profiles
    const { data: profiles, error } = await supabase
      .from('profiles')
      .select('*')
    
    if (error) {
      console.error('Error:', error)
      return
    }
    
    console.log('📊 User Registration Status:')
    console.log('Total profiles:', profiles?.length || 0)
    
    if (profiles && profiles.length > 0) {
      profiles.forEach(profile => {
        console.log(`- ${profile.first_name} ${profile.last_name} (ID: ${profile.id})`)
      })
      console.log('\n✅ Users are being created successfully!')
      console.log('🔍 If login is not working, check email confirmation settings in Supabase Dashboard')
    } else {
      console.log('❌ No users found. Registration may not be working.')
    }
    
  } catch (error) {
    console.error('Failed to check users:', error)
  }
}

checkUsers()
