import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/sections/PageHero";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Tailored, participant-centred NDIS support across Western Sydney with same-day or next-day onboarding and 7+ years of healthcare experience.",
};

const VALUES = [
  {
    title: "Personalised",
    body: "Plans built around the participant — preferences, culture, goals — never a template.",
    icon: <path d="M12 21s-7-4.35-7-10a4.5 4.5 0 0 1 8-2.83A4.5 4.5 0 0 1 19 11c0 5.65-7 10-7 10Z" />,
  },
  {
    title: "Fast",
    body: "Same-day or next-day onboarding. Service agreements signed in hours, not weeks.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
  },
  {
    title: "Reliable",
    body: "Consistent, named support workers — clear comms with you and your coordinator.",
    icon: (
      <>
        <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Trusted",
    body: "7+ years across the health sector. Trained workers, clean handovers, honest plans.",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M6 21v-1a6 6 0 0 1 12 0v1" />
      </>
    ),
  },
];

const STATS = [
  { value: "24h", label: "Average onboarding turnaround" },
  { value: "7+", label: "Years in healthcare" },
  { value: "Sydney", label: "Western — expanding NSW" },
  { value: "100%", label: "Named, matched workers" },
];

const PROMISE = [
  "Same-day or next-day onboarding when there's capacity",
  "A real person on the phone, not a contact form black hole",
  "Service agreements that read like English, not legal jargon",
  "Notes after every shift so families and coordinators stay in the loop",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ href: "/", label: "Home" }, { label: "About" }]}
        eyebrow="About Hawa Health Care"
        title={
          <>
            Care that moves at your pace —{" "}
            <span className="text-primary">starting today</span>.
          </>
        }
        subtitle="We're an NDIS provider built around three things participants tell us actually matter: speed, reliability, and support that's genuinely personalised."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Who we are"
                title={
                  <>
                    A small team with deep healthcare experience and a bias for{" "}
                    <span className="text-primary">action</span>.
                  </>
                }
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground-muted sm:text-lg">
                <p>
                  Hawa Health Care was founded to fix a problem participants kept telling us about — long waits, generic plans, and support that arrived too late to matter. We built our process around the opposite: rapid onboarding, named workers, and plans shaped to the person.
                </p>
                <p>
                  Our team brings more than seven years of experience across the Australian health sector — from in-home care to community engagement. We know what good NDIS support looks like, and what gets in the way of it.
                </p>
                <p>
                  Today we serve participants across Western Sydney, with capacity expanding across NSW. Whether you need urgent respite, ongoing community participation, or steady help at home — we're set up to start fast and stay consistent.
                </p>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="sticky top-28 rounded-[var(--radius-lg)] border border-border bg-surface p-7 shadow-[var(--shadow-xs)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  At a glance
                </p>
                <dl className="mt-5 grid grid-cols-2 gap-5">
                  {STATS.map((s) => (
                    <div key={s.label}>
                      <dt className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        {s.value}
                      </dt>
                      <dd className="mt-1 text-xs text-foreground-subtle">{s.label}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-primary px-5 py-3 text-sm font-semibold text-foreground-inverse shadow-[var(--shadow-sm)] transition-colors hover:bg-primary-hover"
                >
                  Talk to us today
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
            eyebrow="What we stand for"
            title={
              <>
                Four values you'll feel in{" "}
                <span className="text-primary">every interaction</span>.
              </>
            }
            subtitle="Brand promises are easy. We pin our values to actions you can measure on day one."
            className="mb-14"
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <li
                key={v.title}
                className="group relative flex flex-col gap-4 rounded-[var(--radius-lg)] border border-border bg-background p-7 shadow-[var(--shadow-xs)] transition-shadow duration-[var(--duration-base)] hover:shadow-[var(--shadow-md)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-[var(--radius-md)] bg-primary-soft text-primary transition-colors duration-[var(--duration-base)] group-hover:bg-primary group-hover:text-foreground-inverse">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {v.icon}
                  </svg>
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{v.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Our promise"
                title={
                  <>
                    What you get from{" "}
                    <span className="text-primary">day one</span>.
                  </>
                }
                subtitle="A short list, kept honest. If we can't deliver on something for your situation, we'll tell you up front."
              />
            </div>
            <ul className="grid gap-3 rounded-[var(--radius-lg)] border border-border bg-surface p-6 md:p-8">
              {PROMISE.map((p) => (
                <li key={p} className="flex items-start gap-3 text-base text-foreground">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-secondary-soft text-secondary">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="leading-relaxed">{p}</span>
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
