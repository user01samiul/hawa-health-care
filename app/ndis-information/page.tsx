import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/sections/PageHero";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "NDIS Information",
  description:
    "What the NDIS is, who's eligible, and how plan management works — explained in plain English by Hawa Health Care.",
};

const PLAN_TYPES = [
  {
    title: "Self-managed",
    body: "You manage the funds yourself. Most flexibility and choice of providers — including providers that aren't NDIS-registered.",
    points: ["Pay providers directly", "Keep your own invoices and receipts", "Maximum flexibility"],
  },
  {
    title: "Plan-managed",
    body: "A registered plan manager pays providers on your behalf. You keep choice across registered and non-registered providers.",
    points: ["No paperwork burden", "Provider choice maintained", "Invoices handled for you"],
  },
  {
    title: "NDIA-managed",
    body: "The NDIA pays your providers directly. You can only use NDIS-registered providers — Hawa Health Care included.",
    points: ["No invoices to handle", "Registered providers only", "Simplest day-to-day option"],
  },
];

const FAQ = [
  {
    q: "Am I eligible for the NDIS?",
    a: "You may be eligible if you're under 65, an Australian citizen / permanent resident / Protected SCV holder, and have a permanent disability that significantly affects your ability to do everyday activities. The NDIS website has the full criteria — and we're happy to walk you through it.",
  },
  {
    q: "How do I start with Hawa Health Care?",
    a: "Either call us, complete the contact form, or submit a referral. We'll confirm capacity in your suburb, send a clear service agreement, and book your first shift — often the same or next day.",
  },
  {
    q: "Do you support self-managed and plan-managed participants?",
    a: "Yes — both, plus NDIA-managed (we're a registered NDIS provider). Whichever way your plan is managed, we make the paperwork side painless.",
  },
  {
    q: "What if I'm not happy with my support worker?",
    a: "Tell us. We rematch quickly and confidentially — no awkward conversations on your end. Worker fit is one of the most important parts of NDIS support and we treat it that way.",
  },
  {
    q: "Can I switch from another provider?",
    a: "Yes. We help with the changeover, including talking to your current provider if helpful. Most switches happen within a week.",
  },
];

export default function NdisInformationPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ href: "/", label: "Home" }, { label: "NDIS Information" }]}
        eyebrow="NDIS, in plain English"
        image="/grab-fsDeUsH79OQ-unsplash.jpg"
        title={
          <>
            Understand your plan,{" "}
            <span className="text-primary">use it well</span>.
          </>
        }
        subtitle="A simple guide to understanding your NDIS plan, how funding is managed and the questions participants often ask when arranging support."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="What is the NDIS?"
                title={
                  <>
                    Funded support for{" "}
                    <span className="text-primary">eligible Australians</span>.
                  </>
                }
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground-muted sm:text-lg">
                <p>
                  The National Disability Insurance Scheme (NDIS) provides funding to eligible Australians under 65 with a permanent and significant disability. Funds are used to access the supports and services that help participants live the life they want — at home, in the community, and at work.
                </p>
                <p>
                  Plans are individual: built around the participant's goals, not a one-size-fits-all package. You decide which providers to engage and how to spend the funded supports — within the categories and amounts agreed with the NDIA.
                </p>
                <p>
                  Hawa Health Care is a registered NDIS provider delivering core supports across Western Sydney. We work with self-, plan-, and NDIA-managed participants every week.
                </p>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="sticky top-28 rounded-[var(--radius-lg)] border border-border bg-surface p-7 shadow-[var(--shadow-xs)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Quick links
                </p>
                <ul className="mt-5 space-y-3 text-sm">
                  <li>
                    <a href="https://www.ndis.gov.au/applying-access-ndis/am-i-eligible" target="_blank" rel="noreferrer noopener" className="font-semibold text-foreground hover:text-primary">
                      Eligibility checklist (NDIS)
                    </a>
                    <p className="text-xs text-foreground-subtle">Official NDIS eligibility tool.</p>
                  </li>
                  <li>
                    <a href="https://www.ndis.gov.au/participants/creating-your-plan" target="_blank" rel="noreferrer noopener" className="font-semibold text-foreground hover:text-primary">
                      Creating your plan
                    </a>
                    <p className="text-xs text-foreground-subtle">What goes into an NDIS plan.</p>
                  </li>
                  <li>
                    <a href="https://www.ndiscommission.gov.au" target="_blank" rel="noreferrer noopener" className="font-semibold text-foreground hover:text-primary">
                      NDIS Quality &amp; Safeguards
                    </a>
                    <p className="text-xs text-foreground-subtle">Provider standards and complaints.</p>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-primary px-5 py-3 text-sm font-semibold text-foreground-inverse shadow-[var(--shadow-sm)] transition-colors hover:bg-primary-hover"
                >
                  Ask us anything
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Plan management"
            title={
              <>
                Three ways to manage your{" "}
                <span className="text-primary">NDIS funds</span>.
              </>
            }
            subtitle="Each option has trade-offs around flexibility, paperwork and provider choice. Mix-and-match is also possible across plan categories."
            className="mb-12"
          />
          <ul className="grid gap-5 md:grid-cols-3">
            {PLAN_TYPES.map((t, i) => (
              <li
                key={t.title}
                className="flex flex-col rounded-[var(--radius-lg)] border border-border bg-background p-7 shadow-[var(--shadow-xs)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  Option {i + 1}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{t.body}</p>
                <ul className="mt-5 space-y-2.5">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary-soft text-secondary">
                        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="FAQ"
                title={
                  <>
                    What people{" "}
                    <span className="text-primary">ask us most</span>.
                  </>
                }
                subtitle="If your question isn't answered here, ask away — we'll write back the same day."
              />
            </div>
            <ul className="space-y-3 lg:col-span-8">
              {FAQ.map((f) => (
                <li key={f.q}>
                  <details className="group rounded-[var(--radius-lg)] border border-border bg-background p-6 shadow-[var(--shadow-xs)] transition-colors hover:border-primary/40 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-foreground">
                      {f.q}
                      <span aria-hidden className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary-soft text-primary transition-transform duration-[var(--duration-base)] group-open:rotate-45">
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 5v14" />
                          <path d="M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-foreground-muted">{f.a}</p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
