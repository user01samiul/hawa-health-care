import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Make a Referral",
  description:
    "Refer an NDIS participant to Hawa Health Care. Same-day or next-day onboarding for urgent requests across Western Sydney.",
};

const PLAN_TYPES = ["Self-managed", "Plan-managed", "NDIA-managed"] as const;
const URGENCY = [
  { value: "urgent", label: "Urgent — start today / tomorrow" },
  { value: "this-week", label: "This week" },
  { value: "this-month", label: "Within the next 30 days" },
  { value: "planning", label: "Planning ahead" },
] as const;

const SUPPORT_POINTS = [
  "Service agreements within hours",
  "Capacity check while you're on the phone",
  "Direct line to a coordinator — not a call centre",
  "Continuity notes after every shift",
];

function FieldLabel({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
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

const inputBase =
  "w-full rounded-[var(--radius-sm)] border border-border bg-background px-4 py-3 text-sm text-foreground shadow-[var(--shadow-xs)] outline-none transition-colors placeholder:text-foreground-subtle focus:border-primary focus:ring-2 focus:ring-primary/15";

export default function ReferralsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ href: "/", label: "Home" }, { label: "Referrals" }]}
        eyebrow="Refer a participant"
        title={
          <>
            Refer in seconds.{" "}
            <span className="text-primary">We'll handle the rest</span>.
          </>
        }
        subtitle="Coordinators, families and self-referring participants — fill out the form below and we'll respond within hours, with capacity confirmed and next steps clear."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-8">
              <form className="space-y-10 rounded-[var(--radius-lg)] border border-border bg-background p-6 shadow-[var(--shadow-xs)] sm:p-8 md:p-10">
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
                      <input
                        id="dob"
                        name="dob"
                        type="date"
                        required
                        className={inputBase}
                      />
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
                    Plan & coordination
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
                        <option value="" disabled>Select an option</option>
                        {PLAN_TYPES.map((p) => (
                          <option key={p} value={p}>{p}</option>
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
                        <option value="" disabled>Select an option</option>
                        {URGENCY.map((u) => (
                          <option key={u.value} value={u.value}>{u.label}</option>
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
                    placeholder="Anything else we should know — preferences, communication needs, current supports, urgency context."
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

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-foreground-subtle">We respond to referrals within hours during business hours.</p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-primary px-7 py-3.5 text-base font-semibold text-foreground-inverse shadow-[var(--shadow-md)] transition-[background,transform,box-shadow] hover:bg-primary-hover hover:shadow-[var(--shadow-lg)] active:translate-y-px"
                  >
                    Submit referral
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m13 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-5">
                <div className="rounded-[var(--radius-lg)] border border-brand-200 bg-primary p-7 text-foreground-inverse shadow-[var(--shadow-md)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-100">
                    Need to talk now?
                  </p>
                  <p className="mt-3 text-2xl font-bold leading-tight">
                    Call our intake line.
                  </p>
                  <p className="mt-2 text-sm text-brand-100">
                    Faster than email for urgent referrals — we&apos;ll confirm capacity on the call.
                  </p>
                  <a
                    href="tel:+61000000000"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-background px-5 py-3 text-sm font-semibold text-primary shadow-[var(--shadow-sm)] transition-colors hover:bg-surface"
                  >
                    (00) 0000 0000
                  </a>
                </div>

                <div className="rounded-[var(--radius-lg)] border border-border bg-background p-7 shadow-[var(--shadow-xs)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    What you can expect
                  </p>
                  <ul className="mt-4 space-y-3">
                    {SUPPORT_POINTS.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-foreground-muted">
                        <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary-soft text-secondary">
                          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        <span className="leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    Browse services
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
