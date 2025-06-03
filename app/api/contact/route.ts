import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  token: string;
}

interface CaptchaVerifyResponse {
  success: boolean;
  'error-codes'?: string[];
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, token }: ContactFormData = body;

    // Verify reCAPTCHA token
    const captchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const captchaData: CaptchaVerifyResponse = await captchaRes.json();

    if (!captchaData.success) {
      return NextResponse.json(
        { message: 'Captcha verification failed' },
        { status: 400 }
      );
    }

    // Send email via Resend
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'ben@eronka.com',
      subject: 'New Contact Form Submission',
      html: `<p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b> ${message}</p>`,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
