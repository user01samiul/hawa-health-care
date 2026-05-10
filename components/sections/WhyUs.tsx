import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const REASONS = [
  {
    title: "Same-day onboarding",
    body: "Most participants are supported within 24 hours of first contact. We hold capacity open so the right care arrives fast, with no drawn-out paperwork and no missed weeks.",
    stat: "<24h",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
  },
  {
    title: "Tailored support plans",
    body: "Every plan is built around the participant, their routines, the people in their life, and the goals that actually matter to them.",
    stat: "1:1",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="m9 13 2 2 4-4" />
      </>
    ),
  },
  {
    title: "7+ years healthcare experience",
    body: "Deep clinical and community-care experience behind every shift, every assessment, and every conversation with families and coordinators.",
    stat: "7+ yrs",
    icon: (
      <>
        <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Reliable support workers",
    body: "Vetted, trained and matched intentionally, not pulled from a casual pool. Participants see the same trusted faces, week after week.",
    stat: "100%",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
      </>
    ),
  },
  {
    title: "Strong communication",
    body: "Clear updates for participants, families, and support coordinators at every step of the plan, with no chasing required.",
    stat: "24/7",
    icon: (
      <>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
      </>
    ),
  },
];

export default function WhyUs() {
  return (
    <section
      aria-labelledby="why-heading"
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 55% at 0% 100%, var(--accent-50) 0%, transparent 60%), radial-gradient(40% 50% at 100% 0%, var(--brand-50) 0%, transparent 65%)",
        }}
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why Hawa Health Care"
          title={
            <>
              Five reasons families and coordinators{" "}
              <span className="text-primary">refer to us</span>.
            </>
          }
          subtitle="Real differentiators, not generic claims. This is how we keep our promise of fast, reliable, and personalised support."
          className="mb-12 md:mb-16"
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <aside className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-primary p-8 text-foreground-inverse shadow-[var(--shadow-lg)] md:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-80"
                style={{
                  background:
                    "radial-gradient(60% 60% at 100% 0%, rgba(255,255,255,0.18) 0%, transparent 60%), radial-gradient(50% 50% at 0% 100%, rgba(255,255,255,0.10) 0%, transparent 70%)",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                  maskImage:
                    "radial-gradient(70% 60% at 50% 50%, #000 0%, transparent 80%)",
                }}
              />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-100 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  The Hawa promise
                </span>

                <p className="mt-6 text-balance text-3xl font-bold leading-[1.05] tracking-tight md:text-[2.6rem]">
                  Fast.
                  <br />
                  Reliable.
                  <br />
                  <span className="text-secondary">Personalised.</span>
                </p>

                <p className="mt-6 max-w-md text-sm leading-relaxed text-brand-100 md:text-base">
                  If we can&apos;t deliver on this promise for a participant,
                  we&apos;ll be the first to tell you, and we&apos;ll help find
                  the right alternative.
                </p>

                <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/15 pt-6">
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-100">
                      Experience
                    </dt>
                    <dd className="mt-1 text-3xl font-bold tracking-tight">7+ yrs</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-100">
                      Onboarding
                    </dt>
                    <dd className="mt-1 text-3xl font-bold tracking-tight">
                      &lt;24h
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-100">
                      Coverage
                    </dt>
                    <dd className="mt-1 text-base font-semibold leading-tight">
                      Western Sydney <span className="text-brand-100">+ NSW</span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-100">
                      Plan types
                    </dt>
                    <dd className="mt-1 text-base font-semibold leading-tight">
                      Self · Plan · NDIA
                    </dd>
                  </div>
                </dl>

                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-background px-5 py-3 text-sm font-semibold text-primary shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-md)]"
                >
                  Our standards
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m13 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </aside>

          <ol className="lg:col-span-7">
            {REASONS.map((r, i) => (
              <li
                key={r.title}
                className="group relative grid grid-cols-[auto_1fr] gap-5 border-b border-border py-7 transition-colors duration-[var(--duration-base)] last:border-b-0 first:pt-0 hover:[&_.idx]:text-primary md:grid-cols-[auto_1fr_auto] md:gap-8 md:py-9"
              >
                <span
                  aria-hidden
                  className="idx col-start-1 mt-1 select-none text-5xl font-bold leading-none tracking-tight tabular-nums text-foreground-subtle/25 transition-colors duration-[var(--duration-base)] md:text-6xl"
                >
                  0{i + 1}
                </span>

                <div className="col-start-2">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-[var(--radius-md)] bg-primary-soft text-primary transition-colors duration-[var(--duration-base)] group-hover:bg-primary group-hover:text-foreground-inverse">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {r.icon}
                      </svg>
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-[1.5rem]">
                      {r.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-prose text-sm leading-relaxed text-foreground-muted md:text-[15px]">
                    {r.body}
                  </p>

                  <span className="mt-4 inline-flex rounded-[var(--radius-pill)] bg-secondary-soft px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-secondary md:hidden">
                    {r.stat}
                  </span>
                </div>

                <span className="col-start-3 row-start-1 hidden self-start rounded-[var(--radius-pill)] border border-border bg-background px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-secondary shadow-[var(--shadow-xs)] transition-colors duration-[var(--duration-base)] group-hover:border-secondary group-hover:bg-secondary group-hover:text-foreground-inverse md:inline-flex">
                  {r.stat}
                </span>

                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-px left-0 h-[2px] w-0 bg-gradient-to-r from-primary via-secondary to-transparent transition-[width] duration-[var(--duration-slow)] ease-[var(--ease-out)] group-hover:w-full"
                />
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
