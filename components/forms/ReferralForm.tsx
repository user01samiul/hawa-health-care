"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { SERVICES } from "@/data/services";
import Turnstile, { type TurnstileHandle } from "@/components/forms/Turnstile";

const PLAN_TYPES = ["Self-managed", "Plan-managed", "NDIA-managed"] as const;

const URGENCY = [
  { value: "urgent", label: "Urgent (start today / tomorrow)" },
  { value: "this-week", label: "This week" },
  { value: "this-month", label: "Within the next 30 days" },
  { value: "planning", label: "Planning ahead" },
] as const;

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

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export default function ReferralForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const turnstileRef = useRef<TurnstileHandle | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.kind === "submitting") return;

    const formEl = event.currentTarget;
    const formData = new FormData(formEl);

    if (turnstileSiteKey && !turnstileToken) {
      setStatus({
        kind: "error",
        message: "Please complete the anti-spam check below.",
      });
      return;
    }

    const payload = {
      participantName: String(formData.get("participantName") ?? ""),
      dob: String(formData.get("dob") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      ndisNumber: String(formData.get("ndisNumber") ?? ""),
      suburb: String(formData.get("suburb") ?? ""),
      planType: String(formData.get("planType") ?? ""),
      urgency: String(formData.get("urgency") ?? ""),
      coordinatorName: String(formData.get("coordinatorName") ?? ""),
      coordinatorContact: String(formData.get("coordinatorContact") ?? ""),
      services: formData.getAll("services").map((v) => String(v)),
      notes: String(formData.get("notes") ?? ""),
      consent: formData.get("consent") === "on",
      turnstileToken,
    };

    setStatus({ kind: "submitting" });

    try {
      const res = await fetch("/api/referrals", {
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
        turnstileRef.current?.reset();
        setTurnstileToken("");
        return;
      }

      setStatus({ kind: "success" });
      formEl.reset();
      turnstileRef.current?.reset();
      setTurnstileToken("");
    } catch {
      setStatus({
        kind: "error",
        message: "Network error. Please check your connection and try again.",
      });
      turnstileRef.current?.reset();
      setTurnstileToken("");
    }
  }

  const isSubmitting = status.kind === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-10 rounded-[var(--radius-lg)] border border-border bg-background p-6 shadow-[var(--shadow-xs)] sm:p-8 md:p-10"
    >
      <fieldset className="space-y-6">
        <legend className="text-lg font-semibold tracking-tight text-foreground">
          Participant details
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <FieldLabel htmlFor="participantName" required>
              Participant name
            </FieldLabel>
            <input
              id="participantName"
              name="participantName"
              type="text"
              required
              autoComplete="name"
              className={inputBase}
              placeholder="Full name"
            />
          </div>
          <div>
            <FieldLabel htmlFor="dob" required>
              Date of birth
            </FieldLabel>
            <input id="dob" name="dob" type="date" required className={inputBase} />
          </div>
          <div>
            <FieldLabel htmlFor="phone" required>
              Phone
            </FieldLabel>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className={inputBase}
              placeholder="04xx xxx xxx"
            />
          </div>
          <div>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={inputBase}
              placeholder="name@example.com"
            />
          </div>
          <div>
            <FieldLabel htmlFor="ndisNumber">NDIS number</FieldLabel>
            <input
              id="ndisNumber"
              name="ndisNumber"
              type="text"
              inputMode="numeric"
              className={inputBase}
              placeholder="9-digit NDIS number"
            />
          </div>
          <div>
            <FieldLabel htmlFor="suburb" required>
              Suburb / location
            </FieldLabel>
            <input
              id="suburb"
              name="suburb"
              type="text"
              required
              className={inputBase}
              placeholder="e.g. Blacktown, NSW"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-6">
        <legend className="text-lg font-semibold tracking-tight text-foreground">
          Plan &amp; coordination
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <FieldLabel htmlFor="planType" required>
              Plan management
            </FieldLabel>
            <select
              id="planType"
              name="planType"
              required
              defaultValue=""
              className={inputBase}
            >
              <option value="" disabled>
                Select an option
              </option>
              {PLAN_TYPES.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
          <div>
            <FieldLabel htmlFor="urgency" required>
              Urgency
            </FieldLabel>
            <select
              id="urgency"
              name="urgency"
              required
              defaultValue=""
              className={inputBase}
            >
              <option value="" disabled>
                Select an option
              </option>
              {URGENCY.map((u) => (
                <option key={u.value} value={u.value}>
                  {u.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <FieldLabel htmlFor="coordinatorName">Support coordinator name</FieldLabel>
            <input
              id="coordinatorName"
              name="coordinatorName"
              type="text"
              className={inputBase}
              placeholder="If applicable"
            />
          </div>
          <div>
            <FieldLabel htmlFor="coordinatorContact">Coordinator phone / email</FieldLabel>
            <input
              id="coordinatorContact"
              name="coordinatorContact"
              type="text"
              className={inputBase}
              placeholder="Best contact"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="text-lg font-semibold tracking-tight text-foreground">
          Services required
        </legend>
        <p className="text-sm text-foreground-muted">Select all that apply.</p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <label className="flex cursor-pointer items-start gap-3 rounded-[var(--radius-sm)] border border-border bg-surface px-4 py-3 transition-colors hover:border-primary hover:bg-primary-soft/40">
                <input
                  type="checkbox"
                  name="services"
                  value={s.slug}
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm font-medium text-foreground">{s.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>

      <div>
        <FieldLabel htmlFor="notes">Notes</FieldLabel>
        <textarea
          id="notes"
          name="notes"
          rows={5}
          className={inputBase}
          placeholder="Anything else we should know: preferences, communication needs, current supports, urgency context."
        />
      </div>

      <label className="flex items-start gap-3 rounded-[var(--radius-sm)] border border-border bg-surface px-4 py-4">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
        />
        <span className="text-sm text-foreground-muted">
          I have consent from the participant (or am the participant) to share these details with Hawa Health Care for the purpose of arranging supports.
        </span>
      </label>

      {turnstileSiteKey ? (
        <div>
          <Turnstile
            ref={turnstileRef}
            siteKey={turnstileSiteKey}
            onToken={setTurnstileToken}
            onError={() => setTurnstileToken("")}
            action="referral"
          />
        </div>
      ) : null}

      {status.kind === "success" ? (
        <div
          role="status"
          className="rounded-[var(--radius-sm)] border border-secondary/30 bg-secondary-soft px-4 py-3 text-sm text-secondary"
        >
          Referral received — we&apos;ll be in touch within hours to confirm capacity and next steps.
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
        <p className="text-xs text-foreground-subtle">
          We respond to referrals within hours during business hours.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-primary px-7 py-3.5 text-base font-semibold text-foreground-inverse shadow-[var(--shadow-md)] transition-[background,transform,box-shadow] hover:bg-primary-hover hover:shadow-[var(--shadow-lg)] active:translate-y-px disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Submitting…" : "Submit referral"}
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m13 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </form>
  );
}
