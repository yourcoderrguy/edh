import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY! // Use service role for backend writes
    );

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }]);

    if (error) throw error;

    return NextResponse.json({ message: "Subscribed successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
  }
}