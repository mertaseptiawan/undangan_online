import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rlluqhaymlffgaxbdiow.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsbHVxaGF5bWxmZmdheGJkaW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwNTQxMDUsImV4cCI6MjA4MTYzMDEwNX0.tb05UCFqZrHr2TeT9ZekTJWof-6Pek773eGOktXg2ro';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);