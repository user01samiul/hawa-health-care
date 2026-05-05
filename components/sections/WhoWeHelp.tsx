import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const AUDIENCES = [
  {
    title: "NDIS participants",
    body: "Direct support shaped around your plan, your goals, and your everyday life.",
    points: [
      "Self-managed, plan-managed or NDIA-managed",
      "Match-based support workers",
      "Plans that grow with you",
    ],
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
      </>
    ),
    cta: { label: "How we support participants", href: "/about" },
  },
  {
    title: "Families",
    body: "Clear updates and consistent care so the people you love are always looked after.",
    points: [
      "Same-day onboarding for urgent need",
      "Familiar, vetted support workers",
      "We talk straight, no jargon",
    ],
    icon: (
      <>
        <circle cx="9" cy="9" r="3.5" />
        <circle cx="17" cy="10" r="2.5" />
        <path d="M2 21v-1a6 6 0 0 1 12 0v1" />
        <path d="M14 21v-1a4 4 0 0 1 7-2.83" />
      </>
    ),
    cta: { label: "Talk to our team", href: "/contact" },
  },
  {
    title: "Support coordinators",
    body: "A reliable provider for your participants — fast quotes, clean reporting, no chasing.",
    points: [
      "Capacity for urgent referrals",
      "Service agreements within 24h",
      "Direct line to senior staff",
    ],
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 13h6" />
        <path d="M9 17h6" />
      </>
    ),
    cta: { label: "Make a referral", href: "/referrals" },
  },
];

export default function WhoWeHelp() {
  return (
    <section
      aria-labelledby="who-heading"
      className="relative bg-surface py-20 md:py-28"
    >
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Who we help"
              title={
                <>
                  Built for everyone who shapes a{" "}
                  <span className="text-primary">participant's plan</span>.
                </>
              }
              subtitle="Whether you're living with the plan, supporting someone who is, or coordinating it on their behalf — we make your part easier."
            />
          </div>

          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="relative aspect-[5/3] overflow-hidden rounded-[var(--radius-lg)] border border-border shadow-[var(--shadow-md)]">
              <Image
                src="/senior-father-wheelchair-young-son-walk.jpg"
                alt="Hawa Health Care worker supporting a participant out in the community."
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-tr from-primary/35 via-transparent to-transparent"
              />
            </div>
          </div>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {AUDIENCES.map((a) => (
            <li
              key={a.title}
              className="group relative flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-background p-6 shadow-[var(--shadow-xs)] transition-[transform,box-shadow,border-color] duration-[var(--duration-base)] hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[var(--shadow-md)] md:p-7"
            >
              <span className="grid h-12 w-12 place-items-center rounded-[var(--radius-md)] bg-primary-soft text-primary transition-colors duration-[var(--duration-base)] group-hover:bg-primary group-hover:text-foreground-inverse">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {a.icon}
                </svg>
              </span>

              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                {a.body}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-foreground-muted">
                {a.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary-soft text-secondary">
                      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <Link
                href={a.cta.href}
                className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary"
              >
                {a.cta.label}
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 transition-transform duration-[var(--duration-base)] group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m13 5 7 7-7 7" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
