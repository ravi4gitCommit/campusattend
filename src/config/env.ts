/**
 * Typed access to Vite environment variables.
 * Nothing else in the app should read `import.meta.env` directly.
 */

interface AppEnv {
    supabaseUrl: string
    supabaseAnonKey: string
    apiBaseUrl: string
  }
  
  export const env: AppEnv = {
    supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
    supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  }