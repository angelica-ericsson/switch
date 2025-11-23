import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabaseClient = createClient(supabaseUrl, supabaseKey);

// async function supa() {
//   const client = supabaseClient;
//   const result = await client.from('results').insert({ state: { foo: 'bar' } });
//   console.log(result);
// }
