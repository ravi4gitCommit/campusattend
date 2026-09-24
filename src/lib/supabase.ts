import { createClient } from '@supabase/supabase-js'

import { env } from '@/config/env'

/**
 * The one Supabase client for the whole app. Everything that talks to
 * Supabase Auth imports this — never creates a second client.
 */
export const supabase = createClient(env.supabaseUrl, env.supabaseAnonKey)