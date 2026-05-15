import "server-only";
import nodemailer, { type Transporter } from "nodemailer";

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

let cachedTransporter: Transporter | null = null;

export function getTransporter(): Transporter {
  if (cachedTransporter) return cachedTransporter;

  const host = required("SMTP_HOST");
  const port = Number(process.env.SMTP_PORT ?? 465);
  const secure = (process.env.SMTP_SECURE ?? "true").toLowerCase() !== "false";
  const user = required("SMTP_USER");
  const pass = required("SMTP_PASS");

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  return cachedTransporter;
}

export type MailPayload = {
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

export async function sendMail(payload: MailPayload): Promise<void> {
  const transporter = getTransporter();
  const fromEmail = required("CONTACT_FORM_FROM_EMAIL");
  const fromName = process.env.CONTACT_FORM_FROM_NAME ?? "Hawa Health Care";
  const to = required("CONTACT_FORM_TO_EMAIL");

  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to,
    subject: payload.subject,
    text: payload.text,
    html: payload.html,
    replyTo: payload.replyTo,
  });
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
