import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Feedback & Complaints",
  description:
    "Share feedback or raise a concern with Hawa Health Care. We treat every piece of feedback as a chance to improve.",
};

const TYPES = [
  { value: "compliment", label: "Compliment" },
  { value: "suggestion", label: "Suggestion" },
  { value: "complaint", label: "Complaint" },
  { value: "other", label: "Something else" },
] as const;

const PROCESS = [
  {
    step: "01",
    title: "We acknowledge",
    body: "Within 1 business day a coordinator confirms we've received your message.",
  },
  {
    step: "02",
    title: "We investigate",
    body: "We review the situation, talk to anyone involved, and gather context.",
  },
  {
    step: "03",
    title: "We resolve & follow up",
    body: "You hear back with what we've found, what we'll change, and how to escalate if needed.",
  },
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

export default function FeedbackPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ href: "/", label: "Home" }, { label: "Feedback" }]}
        eyebrow="Feedback & complaints"
        title={
          <>
            Tell us what worked —{" "}
            <span className="text-primary">and what didn't</span>.
          </>
        }
        subtitle="Honest feedback is how we get better. Compliments, suggestions, complaints — share whatever you need to and we'll handle it carefully."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <form className="space-y-6 rounded-[var(--radius-lg)] border border-border bg-background p-6 shadow-[var(--shadow-xs)] sm:p-8 md:p-10">
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  Share your feedback
                </h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <FieldLabel htmlFor="name">Your name</FieldLabel>
                    <input id="name" name="name" type="text" autoComplete="name" className={inputBase} placeholder="Optional — anonymous OK" />
                  </div>
                  <div>
                    <FieldLabel htmlFor="contact">Phone or email</FieldLabel>
                    <input id="contact" name="contact" type="text" className={inputBase} placeholder="Optional — only if you'd like a reply" />
                  </div>
                  <div>
                    <FieldLabel htmlFor="role">I am a</FieldLabel>
                    <select id="role" name="role" defaultValue="" className={inputBase}>
                      <option value="" disabled>Select an option</option>
                      <option>Participant</option>
                      <option>Family member or carer</option>
                      <option>Support coordinator</option>
                      <option>Support worker</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <FieldLabel htmlFor="type" required>Type of feedback</FieldLabel>
                    <select id="type" name="type" required defaultValue="" className={inputBase}>
                      <option value="" disabled>Select an option</option>
                      {TYPES.map((t) => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <FieldLabel htmlFor="message" required>Your feedback</FieldLabel>
                  <textarea id="message" name="message" rows={7} required className={inputBase} placeholder="What happened? When? Who was involved? What outcome would feel right?" />
                </div>

                <label className="flex items-start gap-3 rounded-[var(--radius-sm)] border border-border bg-surface px-4 py-4">
                  <input type="checkbox" name="follow-up" className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary" />
                  <span className="text-sm text-foreground-muted">
                    I'd like a coordinator to follow up with me directly.
                  </span>
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-foreground-subtle">Submissions are confidential. Anonymous feedback is welcome.</p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-primary px-7 py-3.5 text-base font-semibold text-foreground-inverse shadow-[var(--shadow-md)] transition-colors hover:bg-primary-hover"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <aside className="lg:col-span-5 space-y-5">
              <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-7 shadow-[var(--shadow-xs)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Our process
                </p>
                <ol className="mt-5 space-y-5">
                  {PROCESS.map((p) => (
                    <li key={p.step} className="flex gap-4">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[var(--radius-md)] bg-primary-soft text-sm font-bold text-primary">
                        {p.step}
                      </span>
                      <div>
                        <p className="font-semibold text-foreground">{p.title}</p>
                        <p className="mt-1 text-sm text-foreground-muted">{p.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-[var(--radius-lg)] border border-border bg-background p-7 shadow-[var(--shadow-xs)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Need to escalate?
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                  You can raise a concern externally with the NDIS Quality &amp; Safeguards Commission at any time, including before contacting us.
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <span className="font-semibold text-foreground">Phone:</span>{" "}
                    <a href="tel:1800035544" className="text-primary hover:underline">1800 035 544</a>
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Online:</span>{" "}
                    <a href="https://www.ndiscommission.gov.au" target="_blank" rel="noreferrer noopener" className="text-primary hover:underline">ndiscommission.gov.au</a>
                  </li>
                </ul>
                <p className="mt-4 text-xs text-foreground-subtle">
                  Or talk to us first — <Link href="/contact" className="text-primary hover:underline">contact us</Link> any time.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
