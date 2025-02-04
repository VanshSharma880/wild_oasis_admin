// import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;


import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://kvizufaanemrmacxlaxm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2aXp1ZmFhbmVtcm1hY3hsYXhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA5NjE3MzMsImV4cCI6MjA0NjUzNzczM30.rJ3Of51P5-mNimT9dYPUuCJslznZWA9-kfsawv79WdM";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;