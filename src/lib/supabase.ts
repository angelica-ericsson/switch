import type { DemographicFormData } from '@/features/onboarding/demographicStore';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabaseClient = createClient(supabaseUrl, supabaseKey);

export async function submitData(demographic: DemographicFormData, consent: object, gameState: object) {
  await supabaseClient.from('results').insert({ demographic: demographic, consent: consent, state: gameState });
}
