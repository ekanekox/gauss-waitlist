import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our waitlist table
export interface WaitlistEntry {
  id: string
  email: string
  shop_name?: string
  city?: string
  source: string
  created_at: string
}

export async function addToWaitlist(data: {
  email: string
  shop_name?: string
  city?: string
  source?: string
}): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase.from('waitlist').insert([
      {
        email: data.email.toLowerCase().trim(),
        shop_name: data.shop_name?.trim() || null,
        city: data.city?.trim() || null,
        source: data.source || 'direct',
      },
    ])

    if (error) {
      if (error.code === '23505') {
        return { success: false, error: 'email_exists' }
      }
      console.error('Supabase error:', error)
      return { success: false, error: 'unknown' }
    }

    return { success: true }
  } catch (err) {
    console.error('Error adding to waitlist:', err)
    return { success: false, error: 'unknown' }
  }
}

export async function getWaitlistCount(): Promise<number> {
  try {
    const { count, error } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })

    if (error) {
      console.error('Error getting count:', error)
      return 0
    }

    return count || 0
  } catch {
    return 0
  }
}
