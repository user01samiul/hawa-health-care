import Link from "next/link";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/site";

export default function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative bg-background py-16 md:py-24"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-brand-200 bg-primary px-6 py-14 text-center text-foreground-inverse shadow-[var(--shadow-lg)] md:px-12 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(50% 60% at 50% 0%, rgba(255,255,255,0.18) 0%, transparent 60%), radial-gradient(40% 60% at 100% 100%, rgba(255,255,255,0.10) 0%, transparent 70%)",
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
                "radial-gradient(70% 60% at 50% 50%, #000 0%, transparent 78%)",
            }}
          />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-100 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              Ready when you are
            </span>

            <h2
              id="final-cta-heading"
              className="mt-5 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.8rem]"
            >
              Ready to get started?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-brand-100 sm:text-lg">
              Tell us what you need, and we&apos;ll respond within hours and have
              support in place fast. No obligation, no pressure.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-background px-7 py-3.5 text-base font-semibold text-primary shadow-[var(--shadow-md)] transition-[transform,box-shadow] duration-[var(--duration-fast)] hover:shadow-[var(--shadow-lg)] active:translate-y-px sm:w-auto"
              >
                Enquire Now
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m13 5 7 7-7 7" />
                </svg>
              </Link>
              <Link
                href={`tel:${SITE.phone}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-pill)] border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-foreground-inverse backdrop-blur transition-colors hover:bg-white/20 sm:w-auto"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                Call Now
              </Link>
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-brand-100/80">
              Western Sydney &bull; Same-day onboarding &bull; 7+ years experience
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
