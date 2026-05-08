"use client";

import { useEffect } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";

type ErrorProps = {
  error: Error & { digest?: string };
  unstable_retry: () => void;
};

export default function Error({ error, unstable_retry }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section
      aria-labelledby="error-heading"
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

      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-brand-100 bg-primary-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Something went wrong
          </span>

          <span
            aria-hidden
            className="mt-8 grid h-20 w-20 place-items-center rounded-[var(--radius-xl)] border border-brand-100 bg-background text-primary shadow-[var(--shadow-md)]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-10 w-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
          </span>

          <h1
            id="error-heading"
            className="mt-6 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem]"
          >
            We hit an unexpected{" "}
            <span className="text-primary">error</span>.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted sm:text-lg">
            Our team has been notified. Try again — if it keeps happening,
            please get in touch and we&apos;ll help directly.
          </p>

          {error.digest ? (
            <p className="mt-3 font-mono text-xs text-foreground-subtle">
              Reference: {error.digest}
            </p>
          ) : null}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => unstable_retry()}
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-primary px-6 py-3.5 text-base font-semibold text-foreground-inverse shadow-[var(--shadow-md)] transition-colors duration-[var(--duration-fast)] hover:bg-primary-hover"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12a9 9 0 0 1 15.7-6L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-15.7 6L3 16" />
                <path d="M3 21v-5h5" />
              </svg>
              Try again
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] border border-border-strong bg-background px-6 py-3.5 text-base font-semibold text-foreground transition-colors duration-[var(--duration-fast)] hover:border-primary hover:text-primary"
            >
              Back to home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] border border-border-strong bg-background px-6 py-3.5 text-base font-semibold text-foreground transition-colors duration-[var(--duration-fast)] hover:border-primary hover:text-primary"
            >
              Contact us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
