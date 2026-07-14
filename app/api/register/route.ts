import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, programme, status } = body;

    // Configure the email transporter using standard Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // The EDH sender email
        pass: process.env.EMAIL_APP_PASSWORD, // Gmail App Password
      },
    });

    // Structure the email that Dr. Abigael will receive
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'partnerships@entrepreneurshipdevhub.com', // Where you want the form sent
      subject: `New Academy Registration: ${programme}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0f5132;">New Academy Registration</h2>
          <p>A new applicant has registered for a programme on the EDH platform.</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Selected Programme:</strong> ${programme}</p>
          <p><strong>Enterprise Status:</strong> ${status}</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Registration sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}