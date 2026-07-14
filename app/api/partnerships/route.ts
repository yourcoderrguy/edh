import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { orgName, contactPerson, email, type, message } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'partnerships@entrepreneurshipdevhub.com',
      subject: `New Partnership Inquiry: ${orgName}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0f5132;">New Partnership Inquiry</h2>
          <p>An organization wants to partner with EDH.</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Organization Name:</strong> ${orgName}</p>
          <p><strong>Contact Person:</strong> ${contactPerson}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Partnership Type:</strong> ${type}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Inquiry sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}