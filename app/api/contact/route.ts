import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message, token } = body;

  // Verify Captcha
  const verifyRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    { method: 'POST' }
  );
  const captcha = await verifyRes.json();

  if (!captcha.success) {
    return NextResponse.json({ error: 'Captcha verification failed' }, { status: 400 });
  }

  try {
    await resend.emails.send({
        //   from: 'Contact Form <onboarding@resend.dev>',
      from: 'onboarding@resend.dev',
      to: 'ben@eronka.com',
      subject: 'New Contact Form Submission',
      replyTo: email,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `
    });

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (err) {
    console.error('Failed to send email:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
