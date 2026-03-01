import { createClient } from '@supabase/supabase-js';

function getSupabaseServiceRoleClient() {
  const url = "https://mybjgnhvqtmvqquegpqw.supabase.co";
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15Ympnbmh2cXRtdnFxdWVncHF3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDM2MDM2NSwiZXhwIjoyMDc1OTM2MzY1fQ.UDW_A-a7fdoa_stEVmSsSflKLnOr6jsyjS8p1k7Z-eI";
  return createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

export { getSupabaseServiceRoleClient as g };
