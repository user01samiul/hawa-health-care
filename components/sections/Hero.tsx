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
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-background lg:min-h-[calc(100svh-5rem)]"
    >
      <Image
        src="/senior-father-wheelchair-young-son-walk.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[75%_center]"
      />

      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/30 to-black/45 sm:bg-gradient-to-r sm:from-background sm:from-30% sm:via-background/25 sm:via-65% sm:to-transparent sm:to-80%"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 hidden sm:block"
        style={{
          background:
            "radial-gradient(55% 45% at 0% 0%, var(--brand-50) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 hidden h-24 bg-gradient-to-t from-background to-transparent sm:block"
      />

      <Container className="grid w-full items-center gap-10 py-10 md:py-14 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-7 xl:col-span-6">
          <h1
            id="hero-heading"
            className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground-inverse drop-shadow-[0_2px_12px_rgba(7,39,60,0.55)] sm:text-5xl sm:text-foreground sm:drop-shadow-none lg:text-[3.6rem]"
          >
            Fast, personalised{" "}
            <span className="relative inline-block text-secondary sm:text-primary">
              NDIS support
              <svg
                aria-hidden
                viewBox="0 0 220 14"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-3 w-full text-primary sm:text-secondary"
              >
                <path
                  className="draw-on-mount"
                  d="M2 9 C 60 1, 130 1, 218 8"
                  pathLength={100}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            when you need it most.
          </h1>

          <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-white/85 drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)] sm:font-normal sm:text-foreground-muted sm:drop-shadow-none">
            Participant-centred NDIS support across Western Sydney — fast
            onboarding and plans built around your goals.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-background px-6 py-3.5 text-base font-semibold text-primary shadow-[var(--shadow-md)] transition-[background,transform,box-shadow] duration-[var(--duration-fast)] hover:bg-surface hover:shadow-[var(--shadow-lg)] active:translate-y-px sm:bg-primary sm:text-foreground-inverse sm:hover:bg-primary-hover"
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
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] border border-white/40 bg-white/10 px-6 py-3.5 text-base font-semibold text-foreground-inverse backdrop-blur transition-colors duration-[var(--duration-fast)] hover:bg-white/20 sm:border-border-strong sm:bg-background sm:text-foreground sm:backdrop-blur-none sm:hover:border-primary sm:hover:bg-background sm:hover:text-primary"
            >
              Make a Referral
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5 text-sm font-medium text-white/80 drop-shadow-[0_1px_4px_rgba(7,39,60,0.5)] sm:font-normal sm:text-foreground-muted sm:drop-shadow-none">
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

        <div className="relative hidden lg:col-span-5 lg:col-start-8 lg:block xl:col-span-6 xl:col-start-7">
          <div className="absolute right-0 top-4 inline-flex items-center gap-3 rounded-[var(--radius-lg)] border border-border bg-background/95 p-4 shadow-[var(--shadow-md)] backdrop-blur md:p-5">
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

          <div className="absolute bottom-6 right-12 rounded-[var(--radius-lg)] border border-border bg-background/95 p-4 shadow-[var(--shadow-md)] backdrop-blur md:p-5">
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
