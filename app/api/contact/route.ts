import { NextResponse } from "next/server";
import { escapeHtml, sendMail } from "@/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  topic?: string;
  message?: string;
};

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = str(body.name);
  const email = str(body.email);
  const phone = str(body.phone);
  const topic = str(body.topic);
  const message = str(body.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 },
    );
  }

  const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailLooksValid) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const subject = `New contact enquiry from ${name}${topic ? ` — ${topic}` : ""}`;

  const textLines = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    topic ? `Topic: ${topic}` : null,
    "",
    "Message:",
    message,
  ].filter((line): line is string => line !== null);

  const text = textLines.join("\n");

  const html = `
    <div style="font-family:Helvetica,Arial,sans-serif;color:#111;line-height:1.5;">
      <h2 style="margin:0 0 12px;">New contact enquiry</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:4px 12px 4px 0;color:#555;">Name</td><td style="padding:4px 0;"><strong>${escapeHtml(name)}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#555;">Email</td><td style="padding:4px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        ${phone ? `<tr><td style="padding:4px 12px 4px 0;color:#555;">Phone</td><td style="padding:4px 0;"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>` : ""}
        ${topic ? `<tr><td style="padding:4px 12px 4px 0;color:#555;">Topic</td><td style="padding:4px 0;">${escapeHtml(topic)}</td></tr>` : ""}
      </table>
      <h3 style="margin:20px 0 8px;font-size:14px;text-transform:uppercase;letter-spacing:0.08em;color:#555;">Message</h3>
      <div style="white-space:pre-wrap;border-left:3px solid #0ea5e9;padding:8px 12px;background:#f8fafc;">${escapeHtml(message)}</div>
      <p style="margin-top:20px;color:#888;font-size:12px;">Sent from the Hawa Health Care website contact form.</p>
    </div>
  `;

  try {
    await sendMail({ subject, text, html, replyTo: `${name} <${email}>` });
  } catch (error) {
    console.error("[contact] sendMail failed", error);
    return NextResponse.json(
      { error: "Could not send your message. Please call us instead." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
