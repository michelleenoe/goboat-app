import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cqodqcdfgyjiqwolmjhy.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxb2RxY2RmZ3lqaXF3b2xtamh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxNzcyMDksImV4cCI6MjA0Nzc1MzIwOX0.bUcRCtO72prmxeeRoLcSJJMbcAvPlZ8M76g4HGsBwso"; // Din public API nøgle
export const supabase = createClient(supabaseUrl, supabaseKey);
