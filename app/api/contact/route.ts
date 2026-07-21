import { Resend } from "resend";
import { NextResponse } from "next/server";

/**
 * POST /api/contact
 *
 * Relays the Contact section form (components/sections/contact-section.tsx)
 * to TO_EMAIL via Resend. Requires RESEND_API_KEY to be set — see .env.example.
 */
const TO_EMAIL = "hrishikesh.tavar@zenture.in";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are all required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set.");
      return NextResponse.json(
        { error: "Email service is not configured yet." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      // Using Resend's shared sending domain for now — works immediately,
      // no DNS setup required. Once hrishi.co.uk is verified in Resend,
      // switch this to something like "Portfolio <contact@hrishi.co.uk>".
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `Portfolio enquiry from ${name}`,
      text: `${message}\n\n— ${name} (${email})`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
