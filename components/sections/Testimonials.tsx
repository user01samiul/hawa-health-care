import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const TESTIMONIALS = [
  {
    quote:
      "From the first call, the team listened and acted. Mum had a worker the next morning and she's been with us ever since.",
    name: "Sarah M.",
    role: "Family member",
    initials: "SM",
    accent: "primary",
  },
  {
    quote:
      "Hawa stepped in when another provider couldn't. Service agreement signed within 24 hours, support active by Monday.",
    name: "James K.",
    role: "Support coordinator",
    initials: "JK",
    accent: "secondary",
  },
  {
    quote:
      "I'm out in the community more than I've ever been. They actually built support around what I want to do, not just what's easy.",
    name: "Daniel R.",
    role: "NDIS participant",
    initials: "DR",
    accent: "primary",
  },
] as const;

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative bg-background py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          align="center"
          eyebrow="What people say"
          title={
            <>
              Trusted by participants, families and{" "}
              <span className="text-primary">coordinators</span>.
            </>
          }
          subtitle="A few of the people who've worked with us. Names changed for privacy — full case studies available on request."
          className="mb-14"
        />

        <ul className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => {
            const accentBg = t.accent === "primary" ? "bg-primary-soft" : "bg-secondary-soft";
            const accentText = t.accent === "primary" ? "text-primary" : "text-secondary";

            return (
              <li
                key={t.name}
                className="relative flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-background p-6 shadow-[var(--shadow-xs)] transition-shadow duration-[var(--duration-base)] hover:shadow-[var(--shadow-md)] md:p-7"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className={`h-7 w-7 ${accentText}`}
                  fill="currentColor"
                >
                  <path d="M9.5 7C5 7 3 11 3 15v3h6v-7H6c0-2 1.5-3 3.5-3zm10 0c-4.5 0-6.5 4-6.5 8v3h6v-7h-3c0-2 1.5-3 3.5-3z" />
                </svg>

                <p className="mt-4 text-base leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-[var(--radius-pill)] text-sm font-bold ${accentBg} ${accentText}`}
                  >
                    {t.initials}
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-foreground-subtle">{t.role}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground-subtle">
          <span>NDIS Registered</span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-border-strong" />
          <span>7+ Years Healthcare</span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-border-strong" />
          <span>Western Sydney</span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-border-strong" />
          <span>Same-day Onboarding</span>
        </div>
      </Container>
    </section>
  );
}
