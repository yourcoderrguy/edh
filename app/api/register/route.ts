import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY?.trim());

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Adjust these destructured fields if your frontend form uses different names
    const { fullName, email, phone, program, background } = body;

    const { data, error } = await resend.emails.send({
      from: 'EDH Platform <onboarding@resend.dev>',
      to: 'ent.devhub@gmail.com', //[cite: 12]
      subject: `New Academy Registration: ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #047857;">New Academy Registration</h2>
          <p>A new applicant has registered for an EDH Academy Programme.</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p><strong>Applicant Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Selected Programme:</strong> <span style="color: #d97706; font-weight: bold;">${program}</span></p>
          <br/>
          <p><strong>Applicant Background / Experience:</strong></p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; color: #374151;">
            ${background || 'No background information provided.'}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error: 'Failed to send registration' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Registration sent successfully', data }, { status: 200 });

  } catch (error) {
    console.error("Registration API Route Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
