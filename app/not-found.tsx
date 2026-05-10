import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you're looking for has moved or doesn't exist. Browse our NDIS services or get in touch with the Hawa Health Care team.",
  robots: { index: false, follow: false },
};

const QUICK_LINKS = [
  {
    href: "/services",
    title: "NDIS services",
    body: "Browse all the supports we offer across Western Sydney.",
  },
  {
    href: "/referrals",
    title: "Make a referral",
    body: "Refer a participant for fast onboarding, no chasing.",
  },
  {
    href: "/contact",
    title: "Contact us",
    body: "Talk to our team for a same-day response.",
  },
];

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-heading"
      className="relative isolate flex flex-1 items-center overflow-hidden bg-surface py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(17,75,115,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,75,115,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 40%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 40%, black 30%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-100/45 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-[-8rem] -z-10 h-[24rem] w-[24rem] rounded-full bg-accent-100/55 blur-3xl"
      />

      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-brand-100 bg-primary-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Error 404
          </span>

          <p
            aria-hidden
            className="mt-6 select-none bg-gradient-to-b from-brand-700 to-brand-300 bg-clip-text text-[7rem] font-bold leading-none tracking-tight text-transparent sm:text-[10rem]"
          >
            404
          </p>

          <h1
            id="not-found-heading"
            className="mt-2 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem]"
          >
            We couldn&apos;t find that page.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted sm:text-lg">
            The link may have moved, or the page might never have existed.
            Here&apos;s where most people go next.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-primary px-6 py-3.5 text-base font-semibold text-foreground-inverse shadow-[var(--shadow-md)] transition-colors duration-[var(--duration-fast)] hover:bg-primary-hover"
            >
              Back to home
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
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] border border-border-strong bg-background px-6 py-3.5 text-base font-semibold text-foreground transition-colors duration-[var(--duration-fast)] hover:border-primary hover:text-primary"
            >
              Contact our team
            </Link>
          </div>
        </div>

        <ul className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-3">
          {QUICK_LINKS.map((q) => (
            <li key={q.href}>
              <Link
                href={q.href}
                className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-background p-6 shadow-[var(--shadow-xs)] transition-[transform,box-shadow,border-color] duration-[var(--duration-base)] hover:-translate-y-1 hover:border-brand-200 hover:shadow-[var(--shadow-md)]"
              >
                <h2 className="text-base font-semibold tracking-tight text-foreground">
                  {q.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">
                  {q.body}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Go there
                  <span
                    aria-hidden
                    className="transition-transform duration-[var(--duration-base)] group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
