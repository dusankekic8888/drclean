import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const body = await req.json();

  const {
    name,
    email,
    phone,
    address,
    services,
    message,
    token
  } = body;

  // Verify Captcha
  const verifyRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    { method: 'POST' }
  );

  const captcha = await verifyRes.json();

  if (!captcha.success) {
    return NextResponse.json({ error: 'Captcha verification failed' }, { status: 400 });
  }

  const html = `
    <h3>New Quote Request</h3>
    <p><b>Full Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Address:</b> ${address}</p>
    <p><b>Services:</b> ${services?.join(', ')}</p>
    <p><b>Additional Details:</b> ${message || 'N/A'}</p>
  `;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', 
      to: 'ben@eronka.com',
      subject: 'New Quote Form Submission',
      replyTo: email,
      html,
    });

    return NextResponse.json({ message: 'Quote request sent successfully!' });
  } catch (err) {
    console.error('Failed to send email:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
