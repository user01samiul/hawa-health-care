import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

const TRUST_POINTS = [
  "Same-day / next-day onboarding",
  "7+ years healthcare experience",
  "Western Sydney — expanding across NSW",
];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-background"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 0% 0%, var(--brand-50) 0%, transparent 60%), radial-gradient(45% 40% at 100% 100%, var(--accent-50) 0%, transparent 60%)",
        }}
      />

      <Container className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-12 lg:gap-10 lg:py-28">
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-brand-100 bg-primary-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Registered NDIS Support
          </span>

          <h1
            id="hero-heading"
            className="mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.6rem]"
          >
            Fast, personalised{" "}
            <span className="relative inline-block text-primary">
              NDIS support
              <svg
                aria-hidden
                viewBox="0 0 220 14"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-accent-300"
              >
                <path
                  d="M2 9 C 60 1, 130 1, 218 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            when you need it most.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted">
            Tailored, participant-centred care across Western Sydney. From
            community participation to respite support — we onboard quickly,
            communicate clearly, and build plans around your goals.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-primary px-6 py-3.5 text-base font-semibold text-foreground-inverse shadow-[var(--shadow-md)] transition-[background,transform,box-shadow] duration-[var(--duration-fast)] hover:bg-primary-hover hover:shadow-[var(--shadow-lg)] active:translate-y-px"
            >
              Enquire Now
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
            <Link
              href="/referrals"
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] border border-border-strong bg-background px-6 py-3.5 text-base font-semibold text-foreground transition-colors duration-[var(--duration-fast)] hover:border-primary hover:text-primary"
            >
              Make a Referral
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5 text-sm text-foreground-muted">
            {TRUST_POINTS.map((point) => (
              <li key={point} className="inline-flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-secondary-soft text-secondary">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-xl)] bg-surface shadow-[var(--shadow-lg)] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/senior-father-wheelchair-young-son-walk.jpg"
              alt="A support worker walking with an elderly client in a wheelchair, sharing a moment together."
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/45 to-transparent"
            />
          </div>

          <div className="absolute -left-3 top-6 hidden rounded-[var(--radius-lg)] border border-border bg-background/95 p-4 shadow-[var(--shadow-md)] backdrop-blur sm:block md:-left-6 md:p-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-[var(--radius-md)] bg-secondary-soft text-secondary">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-foreground">Onboarded today</p>
                <p className="text-xs text-foreground-subtle">No long wait times</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 bottom-8 hidden rounded-[var(--radius-lg)] border border-border bg-background/95 p-4 shadow-[var(--shadow-md)] backdrop-blur sm:block md:-right-6 md:p-5">
            <p className="text-2xl font-bold leading-none text-primary">7+ yrs</p>
            <p className="mt-1 text-xs font-medium text-foreground-subtle">
              Healthcare experience
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
