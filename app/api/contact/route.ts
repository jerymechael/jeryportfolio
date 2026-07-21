import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { validateContactForm, type ContactFormValues } from "@/lib/validation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ContactFormValues>;

    const values: ContactFormValues = {
      name: body.name ?? "",
      email: body.email ?? "",
      phone: body.phone ?? "",
      message: body.message ?? "",
    };

    // Validasi ulang di server (jangan pernah percaya input dari client)
    const errors = validateContactForm(values);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_RECEIVER_EMAIL;
    const fromEmail = process.env.CONTACT_SENDER_EMAIL ?? "onboarding@resend.dev";

    if (!toEmail || !process.env.RESEND_API_KEY) {
      console.error("Missing CONTACT_RECEIVER_EMAIL or RESEND_API_KEY env var");
      return NextResponse.json(
        { success: false, message: "Server is not configured properly." },
        { status: 500 }
      );
    }

    const sentDate = new Date().toLocaleString("id-ID", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Asia/Jakarta",
    });

    const { error } = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: toEmail,
      replyTo: values.email,
      subject: `New Portfolio Contact - ${values.name}`,
      text: buildTextBody(values, sentDate),
      html: buildHtmlBody(values, sentDate),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to send message." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API unexpected error:", err);
    return NextResponse.json(
      { success: false, message: "Unexpected server error." },
      { status: 500 }
    );
  }
}

function buildTextBody(values: ContactFormValues, sentDate: string): string {
  return [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone Number: ${values.phone}`,
    `Message: ${values.message}`,
    `Date: ${sentDate}`,
  ].join("\n");
}

function buildHtmlBody(values: ContactFormValues, sentDate: string): string {
  const escape = (str: string) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  return `
    <div style="font-family: sans-serif; font-size: 14px; color: #1a1a1a; line-height: 1.6;">
      <h2 style="margin-bottom: 16px;">New Portfolio Contact</h2>
      <p><strong>Name:</strong> ${escape(values.name)}</p>
      <p><strong>Email:</strong> ${escape(values.email)}</p>
      <p><strong>Phone Number:</strong> ${escape(values.phone)}</p>
      <p><strong>Message:</strong><br/>${escape(values.message).replace(/\n/g, "<br/>")}</p>
      <p style="margin-top: 16px; color: #6b7280; font-size: 12px;">Sent on ${sentDate}</p>
    </div>
  `;
}