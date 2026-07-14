import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Setting dynamic to force ensures Vercel doesn't cache this route
export const dynamic = 'force-dynamic';

export async function GET() {
  // We use the standard supabase-js client for a simple server-side ping
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  
  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    // A micro-query: Just fetch a single ID to register activity
    const { data, error } = await supabase
      .from('case_studies')
      .select('id')
      .limit(1);

    if (error) throw error;

    return NextResponse.json({ 
      status: 'Success', 
      message: 'Supabase database is awake and active.',
      time: new Date().toISOString()
    }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ 
      status: 'Error', 
      message: error.message 
    }, { status: 500 });
  }
}