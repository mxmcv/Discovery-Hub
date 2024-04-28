import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bojwovjuuzaylpwizvqy.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvandvdmp1dXpheWxwd2l6dnF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzNzI3MjksImV4cCI6MjAyNzk0ODcyOX0.wPNrxkJoK1vqY5f4Mc5mSXKCNUGu0ikZ0MH6zzphpKo';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
