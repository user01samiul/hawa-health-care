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
    body: "Support shaped around each participant's goals, routines, culture and preferences, never a one-size-fits-all approach.",
    icon: <path d="M12 21s-7-4.35-7-10a4.5 4.5 0 0 1 8-2.83A4.5 4.5 0 0 1 19 11c0 5.65-7 10-7 10Z" />,
  },
  {
    title: "Respectful",
    body: "We provide support with dignity, patience and care, making sure every participant feels heard, safe and valued.",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: "Reliable",
    body: "Consistent support workers, clear communication and dependable service that participants and families can trust.",
    icon: (
      <>
        <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Trusted",
    body: "Backed by healthcare experience, trained workers and transparent support planning from the first conversation.",
    icon: (
      <>
        <circle cx="12" cy="8" r="7" />
        <path d="m8.21 13.89 1.5 7.61L12 17l2.29 4.5 1.5-7.6" />
      </>
    ),
  },
];

const STATS = [
  { value: "7+", label: "Years of healthcare and support experience" },
  { value: "Western Sydney", label: "Supporting participants and families locally" },
  { value: "Person-centred", label: "Support shaped around individual goals" },
  { value: "Trusted care", label: "Matched workers and clear communication" },
];

const PROMISE = [
  "Support shaped around goals and daily routines",
  "A clear contact person who understands your situation",
  "Service agreements explained in simple language",
  "Regular updates for families and support coordinators",
  "Respectful support workers matched to participant needs",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ href: "/", label: "Home" }, { label: "About" }]}
        eyebrow="About Hawa Health Care"
        image="/tailored ndis.jpg"
        title={
          <>
            Care that moves at your pace,{" "}
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
                    Care that feels personal, reliable and{" "}
                    <span className="text-primary">built around you</span>.
                  </>
                }
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground-muted sm:text-lg">
                <p>
                  Hawa Health Care provides NDIS support that is centred on trust, consistency and genuine care. We work with participants, families and support coordinators to deliver support that respects each person&apos;s goals, routines, culture and individual needs.
                </p>
                <p>
                  Our focus is not just on providing a service. It is on building the right support relationship. We take the time to understand what matters to each participant, match them with suitable support workers and maintain clear communication with the people involved in their care.
                </p>
                <p>
                  With experience across the Australian health and community care sector, our team understands the importance of safe, respectful and person-centred support. Whether it is help at home, community participation, personal care, transport or respite, we aim to provide support that helps participants feel confident, included and in control.
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
                      <dt className="text-xl font-bold leading-tight tracking-tight text-foreground sm:text-2xl">
                        {s.value}
                      </dt>
                      <dd className="mt-1.5 text-xs leading-snug text-foreground-subtle">{s.label}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-primary px-5 py-3 text-sm font-semibold text-foreground-inverse shadow-[var(--shadow-sm)] transition-colors hover:bg-primary-hover"
                >
                  Speak With Our Team
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-primary py-24 text-foreground-inverse md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(90,181,186,0.22) 0%, transparent 70%), radial-gradient(45% 40% at 100% 100%, rgba(255,255,255,0.08) 0%, transparent 65%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        />

        <Container>
          <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center md:mb-20">
            <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-white/25 bg-white/[0.07] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-inverse backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              What we stand for
            </span>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground-inverse sm:text-5xl lg:text-[3.15rem]">
              Values you can feel in{" "}
              <span className="relative inline-block text-secondary">
                every interaction
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-secondary/40"
                />
              </span>
              .
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Our values guide how we support participants, communicate with families and work alongside support coordinators.
            </p>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-[var(--radius-xl)] border border-white/15 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <li
                key={v.title}
                className="group relative flex flex-col gap-6 bg-primary p-8 transition-colors duration-[var(--duration-base)] hover:bg-primary-hover lg:p-9"
              >
                <span
                  aria-hidden
                  className="absolute right-6 top-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/35"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span
                  aria-hidden
                  className="absolute inset-x-8 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out)] group-hover:scale-x-100"
                />

                <span className="grid h-14 w-14 place-items-center rounded-[var(--radius-md)] border border-white/20 bg-white/[0.08] text-secondary transition-[background,border-color,color] duration-[var(--duration-base)] group-hover:border-secondary/60 group-hover:bg-secondary/15">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {v.icon}
                  </svg>
                </span>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground-inverse">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    {v.body}
                  </p>
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
                    Clear, respectful support from{" "}
                    <span className="text-primary">day one</span>.
                  </>
                }
                subtitle="We keep our promises simple: listen properly, communicate clearly and provide care that is matched to the person."
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
