"use client";

import { useState, type FormEvent, type ReactNode } from "react";

const DEFAULT_TOPIC_OPTIONS = [
  "Starting NDIS supports",
  "Switching providers",
  "Respite support",
  "Community participation",
  "Careers",
  "Something else",
];

const inputBase =
  "w-full rounded-[var(--radius-sm)] border border-border bg-background px-4 py-3 text-sm text-foreground shadow-[var(--shadow-xs)] outline-none transition-colors placeholder:text-foreground-subtle focus:border-primary focus:ring-2 focus:ring-primary/15";

function FieldLabel({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-foreground"
    >
      {children}
      {required ? <span aria-hidden className="ml-1 text-secondary">*</span> : null}
    </label>
  );
}

type ContactFormProps = {
  title?: string;
  footerText?: string;
  submitLabel?: string;
  defaultTopic?: string;
  topicOptions?: string[];
  messagePlaceholder?: string;
  className?: string;
};

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export default function ContactForm({
  title = "Send us a message",
  footerText = "We respond within business hours, usually within 2-4 hours.",
  submitLabel = "Send message",
  defaultTopic = "",
  topicOptions = DEFAULT_TOPIC_OPTIONS,
  messagePlaceholder = "Tell us a little about what you need.",
  className = "",
}: ContactFormProps) {
  const options = topicOptions.includes(defaultTopic)
    ? topicOptions
    : [defaultTopic, ...topicOptions].filter(Boolean);

  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.kind === "submitting") return;

    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      topic: String(formData.get("topic") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setStatus({ kind: "submitting" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setStatus({
          kind: "error",
          message: data.error ?? "Something went wrong. Please try again.",
        });
        return;
      }

      setStatus({ kind: "success" });
      formEl.reset();
    } catch {
      setStatus({
        kind: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  }

  const isSubmitting = status.kind === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`space-y-6 rounded-[var(--radius-lg)] border border-border bg-background p-6 shadow-[var(--shadow-xs)] sm:p-8 md:p-10 ${className}`}
    >
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="name" required>
            Your name
          </FieldLabel>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputBase}
          />
        </div>
        <div>
          <FieldLabel htmlFor="email" required>
            Email
          </FieldLabel>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputBase}
          />
        </div>
        <div>
          <FieldLabel htmlFor="phone">Phone</FieldLabel>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputBase}
            placeholder="Optional"
          />
        </div>
        <div>
          <FieldLabel htmlFor="topic">I&apos;m enquiring about</FieldLabel>
          <select
            id="topic"
            name="topic"
            defaultValue={defaultTopic}
            className={inputBase}
          >
            <option value="" disabled>
              Choose a topic
            </option>
            {options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <FieldLabel htmlFor="message" required>
          Message
        </FieldLabel>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className={inputBase}
          placeholder={messagePlaceholder}
        />
      </div>

      {status.kind === "success" ? (
        <div
          role="status"
          className="rounded-[var(--radius-sm)] border border-secondary/30 bg-secondary-soft px-4 py-3 text-sm text-secondary"
        >
          Thanks — your message is on its way. We&apos;ll reply within business hours.
        </div>
      ) : null}
      {status.kind === "error" ? (
        <div
          role="alert"
          className="rounded-[var(--radius-sm)] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {status.message}
        </div>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-foreground-subtle">{footerText}</p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-primary px-7 py-3.5 text-base font-semibold text-foreground-inverse shadow-[var(--shadow-md)] transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending…" : submitLabel}
        </button>
      </div>
    </form>
  );
}
