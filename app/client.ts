import {createClient} from '@supabase/supabase-js';

export const supabase = createClient(
  'https://zftdviitsceenymnzetr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODI3MzM4MiwiZXhwIjoxOTUzODQ5MzgyfQ.MTgvInPrBOjxV11sgOEVBjzwpzV37VvMZ_TPDFECO14',
);
