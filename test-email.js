// Test email confirmation setup
require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

async function testEmailSetup() {
  try {
    console.log('📧 Testing email setup...')
    
    // Try to register a test user
    const testEmail = 'test@example.com'
    const { data, error } = await supabase.auth.signUp({
      email: testEmail,
      password: 'testpassword123',
      options: {
        data: {
          first_name: 'Test',
          last_name: 'User'
        }
      }
    })
    
    if (error) {
      console.error('❌ Registration failed:', error.message)
      return
    }
    
    if (data.user && !data.user.email_confirmed_at) {
      console.log('✅ User created successfully!')
      console.log('📧 Confirmation email should be sent to:', testEmail)
      console.log('📋 User ID:', data.user.id)
      console.log('⏳ Email confirmation pending...')
      console.log('\n🔍 Check your SMTP settings in Supabase if no email arrives')
    } else if (data.user && data.user.email_confirmed_at) {
      console.log('✅ User created and automatically confirmed!')
      console.log('ℹ️  Email confirmation is disabled in your Supabase settings')
    }
    
  } catch (error) {
    console.error('Failed to test email setup:', error)
  }
}

testEmailSetup()
