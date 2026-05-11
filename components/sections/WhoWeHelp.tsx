import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const AUDIENCES = [
  {
    index: "01",
    tag: "For participants",
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
    index: "02",
    tag: "For families",
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
    index: "03",
    tag: "For coordinators",
    title: "Support coordinators",
    body: "A reliable provider for your participants: fast quotes, clean reporting, no chasing.",
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
      className="relative isolate overflow-hidden bg-surface py-20 md:py-28"
    >
      {/* Decorative background — soft brand grid + colour wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(17,75,115,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,75,115,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 30%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-100/45 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-[-8rem] -z-10 h-[24rem] w-[24rem] rounded-full bg-accent-100/55 blur-3xl"
      />

      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Who we help"
              title={
                <>
                  Helping participants, families and support teams{" "}
                  <span className="text-primary">feel more confident</span>.
                </>
              }
              subtitle="We work with participants, families, carers and support coordinators to arrange NDIS support that is practical, respectful and shaped around the person's daily life."
            />

            <dl className="mt-8 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              <div className="border-l-2 border-brand-200 pl-3 sm:pl-4">
                <dt className="text-base font-bold tracking-tight text-foreground sm:text-lg">
                  Participants
                </dt>
                <dd className="mt-1 text-xs leading-snug text-foreground-subtle sm:text-sm">
                  Support built around individual goals
                </dd>
              </div>
              <div className="border-l-2 border-brand-200 pl-3 sm:pl-4">
                <dt className="text-base font-bold tracking-tight text-foreground sm:text-lg">
                  Families
                </dt>
                <dd className="mt-1 text-xs leading-snug text-foreground-subtle sm:text-sm">
                  Clear communication and peace of mind
                </dd>
              </div>
              <div className="border-l-2 border-brand-200 pl-3 sm:pl-4">
                <dt className="text-base font-bold tracking-tight text-foreground sm:text-lg">
                  Coordinators
                </dt>
                <dd className="mt-1 text-xs leading-snug text-foreground-subtle sm:text-sm">
                  Simple referrals and responsive follow up
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[var(--radius-xl)] border border-border shadow-[var(--shadow-lg)]">
              <Image
                src="/smiley-man-woman-posing.jpg"
                alt="Hawa Health Care worker supporting a participant out in the community."
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-brand-900/75 via-brand-900/15 to-transparent"
              />

              {/* Floating chip — top-left */}
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-white/40 bg-white/85 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary backdrop-blur-md">
                <span className="relative grid h-2 w-2 place-items-center">
                  <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-secondary opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
                </span>
                In the community
              </div>

              {/* Caption card — bottom */}
              <div className="absolute inset-x-4 bottom-4 rounded-[var(--radius-md)] border border-white/30 bg-white/15 p-4 backdrop-blur-md">
                <p className="text-sm font-semibold leading-snug text-white">
                  &ldquo;Real support, real continuity, out where life
                  actually happens.&rdquo;
                </p>
                <p className="mt-1 text-xs text-white/80">
                  Western Sydney · Same-day onboarding available
                </p>
              </div>
            </div>

          </div>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-3 md:gap-5 lg:gap-6">
          {AUDIENCES.map((a, i) => (
            <li
              key={a.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border border-border bg-background p-7 shadow-[var(--shadow-xs)] transition-[transform,box-shadow,border-color] duration-[var(--duration-base)] hover:-translate-y-1 hover:border-brand-200 hover:shadow-[var(--shadow-lg)] md:p-8"
            >
              {/* Top accent bar */}
              <span
                aria-hidden
                className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-[var(--duration-slow)] group-hover:scale-x-100 ${
                  i === 1 ? "bg-secondary" : "bg-primary"
                }`}
              />

              {/* Top row — index + tag */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-foreground-subtle">
                  {a.index}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-border bg-surface px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground-muted">
                  {a.tag}
                </span>
              </div>

              {/* Icon — premium dual-layer treatment */}
              <div className="relative mt-6 h-14 w-14">
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-[var(--radius-md)] bg-primary-soft transition-transform duration-[var(--duration-base)] group-hover:rotate-6"
                />
                <span className="absolute inset-0 grid place-items-center rounded-[var(--radius-md)] border border-brand-100 bg-background text-primary shadow-[var(--shadow-xs)] transition-colors duration-[var(--duration-base)] group-hover:border-primary group-hover:bg-primary group-hover:text-foreground-inverse">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {a.icon}
                  </svg>
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground sm:text-[1.35rem]">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                {a.body}
              </p>

              <div
                aria-hidden
                className="mt-6 h-px w-full bg-gradient-to-r from-border via-border to-transparent"
              />

              <ul className="mt-5 flex-1 space-y-3 text-sm text-foreground">
                {a.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary-soft text-secondary ring-1 ring-inset ring-accent-100">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="leading-snug text-foreground-muted">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={a.cta.href}
                className="mt-7 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary"
              >
                <span className="relative">
                  {a.cta.label}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-[var(--duration-base)] group-hover:scale-x-100"
                  />
                </span>
                <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-soft text-primary transition-[background,color,transform] duration-[var(--duration-base)] group-hover:translate-x-0.5 group-hover:bg-primary group-hover:text-foreground-inverse">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom hand-off — subtle reinforcement strip */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-[var(--radius-lg)] border border-border bg-background p-6 shadow-[var(--shadow-xs)] md:flex-row md:items-center md:p-7">
          <div className="flex items-center gap-4">
            <span
              aria-hidden
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-foreground-inverse"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Not sure where you fit?
              </p>
              <p className="mt-0.5 text-sm text-foreground-muted">
                Tell us about the participant. We&apos;ll point you the right
                way, fast.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-border-strong bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors duration-[var(--duration-fast)] hover:border-primary hover:text-primary"
          >
            Get in touch
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
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
        </div>
      </Container>
    </section>
  );
}
