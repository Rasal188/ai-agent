'use client'

import { useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'

export default function AuthListener() {
  useEffect(() => {
    const supabase = createClient()
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        // Only redirect if NOT already on the dashboard to prevent infinite loops
        if (!window.location.pathname.startsWith('/dashboard')) {
          window.location.href = '/dashboard'
        }
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return null
}
