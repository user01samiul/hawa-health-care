import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const POINTS = [
  {
    title: "Same-day or next-day onboarding",
    body: "Most participants are onboarded within 24 hours of first contact — no drawn-out paperwork.",
    icon: (
      <>
        <path d="M12 2v4" />
        <path d="m4.93 4.93 2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M22 12h-4" />
        <path d="m19.07 4.93-2.83 2.83" />
        <circle cx="12" cy="14" r="6" />
        <path d="M12 11v3l2 1" />
      </>
    ),
  },
  {
    title: "No long wait times",
    body: "We keep capacity available so plans start moving the moment you reach out.",
    icon: (
      <>
        <path d="M3 12a9 9 0 1 0 9-9" />
        <path d="M3 4v5h5" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  {
    title: "Quick response for urgent support",
    body: "Hospital discharge, sudden plan change, carer breakdown — call us and we mobilise fast.",
    icon: (
      <>
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
      </>
    ),
  },
];

export default function FastOnboarding() {
  return (
    <section
      aria-labelledby="fast-heading"
      className="relative overflow-hidden bg-background py-20 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(40% 60% at 100% 0%, var(--brand-50) 0%, transparent 70%)",
        }}
      />

      <Container className="relative">
        <SectionHeading
          align="center"
          eyebrow="Fast onboarding"
          title={
            <>
              Support that starts{" "}
              <span className="text-primary">within hours</span>, not weeks.
            </>
          }
          subtitle="Speed is one of our biggest promises. We hold capacity open for new participants so the right support is in place when you actually need it."
          className="mb-14"
        />

        <ul className="grid gap-5 md:grid-cols-3">
          {POINTS.map((p, i) => (
            <li
              key={p.title}
              className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-border bg-background p-6 shadow-[var(--shadow-xs)] transition-[transform,box-shadow,border] duration-[var(--duration-base)] hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[var(--shadow-md)] md:p-7"
            >
              <span
                aria-hidden
                className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-[var(--radius-pill)] bg-primary-soft text-xs font-bold text-primary"
              >
                0{i + 1}
              </span>
              <span className="grid h-12 w-12 place-items-center rounded-[var(--radius-md)] bg-primary text-foreground-inverse shadow-[var(--shadow-sm)]">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {p.icon}
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                {p.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
