import { NextResponse } from "next/server";
import { escapeHtml, sendMail } from "@/lib/mailer";
import { SERVICES } from "@/data/services";
import { getRemoteIp, verifyTurnstile } from "@/lib/turnstile";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ReferralPayload = {
  participantName?: string;
  dob?: string;
  phone?: string;
  email?: string;
  ndisNumber?: string;
  suburb?: string;
  planType?: string;
  urgency?: string;
  coordinatorName?: string;
  coordinatorContact?: string;
  services?: unknown;
  notes?: string;
  consent?: unknown;
  turnstileToken?: string;
};

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((v): v is string => typeof v === "string" && v.length > 0);
}

const SERVICE_LABEL_BY_SLUG: Record<string, string> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s.name]),
);

export async function POST(request: Request) {
  let body: ReferralPayload;
  try {
    body = (await request.json()) as ReferralPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const participantName = str(body.participantName);
  const dob = str(body.dob);
  const phone = str(body.phone);
  const email = str(body.email);
  const ndisNumber = str(body.ndisNumber);
  const suburb = str(body.suburb);
  const planType = str(body.planType);
  const urgency = str(body.urgency);
  const coordinatorName = str(body.coordinatorName);
  const coordinatorContact = str(body.coordinatorContact);
  const notes = str(body.notes);
  const services = asStringArray(body.services);
  const consent = body.consent === true || body.consent === "on" || body.consent === "true";

  if (!participantName || !dob || !phone || !suburb || !planType || !urgency) {
    return NextResponse.json(
      { error: "Please fill in all required participant and plan fields." },
      { status: 400 },
    );
  }

  if (!consent) {
    return NextResponse.json(
      { error: "Consent is required to submit this referral." },
      { status: 400 },
    );
  }

  if (email) {
    const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailLooksValid) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }
  }

  const verification = await verifyTurnstile(body.turnstileToken, getRemoteIp(request));
  if (!verification.ok) {
    return NextResponse.json(
      { error: "Please complete the anti-spam check and try again." },
      { status: 400 },
    );
  }

  const isUrgent = urgency === "urgent";
  const subject = `${isUrgent ? "[URGENT] " : ""}New NDIS referral — ${participantName}`;

  const serviceLabels = services.map((slug) => SERVICE_LABEL_BY_SLUG[slug] ?? slug);

  const textLines = [
    `Participant: ${participantName}`,
    `Date of birth: ${dob}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : null,
    ndisNumber ? `NDIS number: ${ndisNumber}` : null,
    `Suburb: ${suburb}`,
    "",
    `Plan management: ${planType}`,
    `Urgency: ${urgency}`,
    coordinatorName ? `Support coordinator: ${coordinatorName}` : null,
    coordinatorContact ? `Coordinator contact: ${coordinatorContact}` : null,
    "",
    serviceLabels.length
      ? `Services required:\n- ${serviceLabels.join("\n- ")}`
      : "Services required: (none selected)",
    "",
    notes ? `Notes:\n${notes}` : null,
  ].filter((line): line is string => line !== null);

  const text = textLines.join("\n");

  const row = (label: string, value: string) =>
    `<tr><td style="padding:4px 12px 4px 0;color:#555;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:4px 0;"><strong>${escapeHtml(value)}</strong></td></tr>`;

  const html = `
    <div style="font-family:Helvetica,Arial,sans-serif;color:#111;line-height:1.5;">
      <h2 style="margin:0 0 6px;">New NDIS referral</h2>
      ${isUrgent ? `<p style="margin:0 0 14px;color:#b91c1c;font-weight:600;">URGENT — start today or tomorrow.</p>` : ""}
      <h3 style="margin:16px 0 6px;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#555;">Participant</h3>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
        ${row("Name", participantName)}
        ${row("Date of birth", dob)}
        ${row("Phone", phone)}
        ${email ? row("Email", email) : ""}
        ${ndisNumber ? row("NDIS number", ndisNumber) : ""}
        ${row("Suburb", suburb)}
      </table>

      <h3 style="margin:20px 0 6px;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#555;">Plan & coordination</h3>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
        ${row("Plan management", planType)}
        ${row("Urgency", urgency)}
        ${coordinatorName ? row("Coordinator", coordinatorName) : ""}
        ${coordinatorContact ? row("Coordinator contact", coordinatorContact) : ""}
      </table>

      <h3 style="margin:20px 0 6px;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#555;">Services required</h3>
      ${
        serviceLabels.length
          ? `<ul style="margin:0;padding-left:18px;font-size:14px;">${serviceLabels.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ul>`
          : `<p style="margin:0;color:#888;font-size:14px;">None selected.</p>`
      }

      ${
        notes
          ? `<h3 style="margin:20px 0 6px;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#555;">Notes</h3>
             <div style="white-space:pre-wrap;border-left:3px solid #0ea5e9;padding:8px 12px;background:#f8fafc;font-size:14px;">${escapeHtml(notes)}</div>`
          : ""
      }

      <p style="margin-top:24px;color:#888;font-size:12px;">Sent from the Hawa Health Care referrals form.</p>
    </div>
  `;

  try {
    await sendMail({
      subject,
      text,
      html,
      replyTo: email ? `${participantName} <${email}>` : undefined,
    });
  } catch (error) {
    console.error("[referrals] sendMail failed", error);
    return NextResponse.json(
      { error: "Could not submit your referral. Please call our intake line." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
