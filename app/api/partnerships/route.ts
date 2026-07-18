import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY?.trim());

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Adjust these destructured fields if your frontend form uses different names
    const { organizationName, contactPerson, email, phone, partnershipType, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'EDH Platform <onboarding@resend.dev>',
      to: 'ent.devhub@gmail.com', //[cite: 12]
      subject: `Partnership Proposal from ${organizationName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #047857;">New Partnership Proposal</h2>
          <p>An organization has submitted a request to collaborate with EDH.</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p><strong>Organization:</strong> ${organizationName}</p>
          <p><strong>Contact Person:</strong> ${contactPerson}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Interest Area:</strong> <span style="color: #d97706; font-weight: bold;">${partnershipType}</span></p>
          <br/>
          <p><strong>Proposal / Message:</strong></p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; color: #374151;">
            ${message}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error: 'Failed to send partnership request' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Partnership request sent successfully', data }, { status: 200 });

  } catch (error) {
    console.error("Partnerships API Route Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}