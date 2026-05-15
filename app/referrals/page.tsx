import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import ReferralForm from "@/components/forms/ReferralForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Make a Referral",
  description:
    "Refer an NDIS participant to Hawa Health Care. Same-day or next-day onboarding for urgent requests across Western Sydney.",
};

const SUPPORT_POINTS = [
  "Service agreements within hours",
  "Capacity check while you're on the phone",
  "Direct line to a coordinator, not a call centre",
  "Continuity notes after every shift",
];

export default function ReferralsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ href: "/", label: "Home" }, { label: "Referrals" }]}
        eyebrow="Refer a participant"
        image="/thisisengineering-6DSItOWspGY-unsplash.jpg"
        title={
          <>
            Refer in seconds.{" "}
            <span className="text-primary">We'll handle the rest</span>.
          </>
        }
        subtitle="Coordinators, families and self-referring participants: fill out the form below and we'll respond within hours, with capacity confirmed and next steps clear."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-8">
              <ReferralForm />
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
                    Faster than email for urgent referrals. We&apos;ll confirm capacity on the call.
                  </p>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-background px-5 py-3 text-sm font-semibold text-primary shadow-[var(--shadow-sm)] transition-colors hover:bg-surface"
                  >
                    {SITE.phoneDisplay}
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
