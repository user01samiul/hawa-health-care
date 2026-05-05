import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const REASONS = [
  {
    title: "Same-day onboarding",
    body: "Most participants are supported within 24 hours of first contact.",
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
    body: "Every plan is built around the participant's goals, routines, and preferences.",
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
    body: "Deep clinical and community-care experience behind every shift.",
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
    body: "Vetted, trained, and matched to participants for genuine consistency.",
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
    body: "Clear updates for participants, families, and support coordinators — every step.",
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
          align="center"
          eyebrow="Why Hawa Health Care"
          title={
            <>
              Five reasons families and coordinators{" "}
              <span className="text-primary">refer to us</span>.
            </>
          }
          subtitle="Real differentiators — not generic claims. This is how we keep our promise of fast, reliable, and personalised support."
          className="mb-14"
        />

        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <li
              key={r.title}
              className={`group relative overflow-hidden rounded-[var(--radius-lg)] border border-border bg-background p-6 shadow-[var(--shadow-xs)] transition-[transform,box-shadow,border-color] duration-[var(--duration-base)] hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[var(--shadow-md)] md:p-7 ${
                i === 0 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-[var(--radius-md)] bg-primary-soft text-primary transition-colors duration-[var(--duration-base)] group-hover:bg-primary group-hover:text-foreground-inverse">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {r.icon}
                  </svg>
                </span>
                <span className="rounded-[var(--radius-pill)] bg-secondary-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary">
                  {r.stat}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                {r.body}
              </p>
            </li>
          ))}

          <li className="relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-lg)] border border-brand-200 bg-primary p-6 text-foreground-inverse shadow-[var(--shadow-md)] md:p-7">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-2xl"
            />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-100">
                The Hawa promise
              </p>
              <p className="mt-3 text-2xl font-bold leading-tight">
                Fast. Reliable. Personalised.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-100">
                If we can't deliver on our promise, we'll be the first to tell
                you — and we'll help find the right alternative.
              </p>
            </div>
            <div className="relative mt-6 flex items-center gap-3 text-sm font-medium text-brand-100">
              <span className="grid h-9 w-9 place-items-center rounded-[var(--radius-pill)] bg-white/15">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              Backed by 7+ years in the health industry
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
}
