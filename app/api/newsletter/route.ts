import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    // Check if the Vercel environment variables are actually loaded
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error("CRITICAL: Missing Supabase Environment Variables");
      return NextResponse.json({ error: "Server configuration missing" }, { status: 500 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }]);

    if (error) {
      // Supabase error code 23505 means "Unique Constraint Violation" (Email already exists)
      if (error.code === '23505') {
        return NextResponse.json({ message: "Already subscribed!" }, { status: 200 });
      }
      console.error("Supabase Database Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Subscribed successfully" }, { status: 200 });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
  }
}