import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function EligibilityBanner() {
  return (
    <section
      aria-labelledby="eligibility-heading"
      className="relative isolate overflow-hidden"
    >
      <Image
        src="/front-view-woman-girl-couch.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-[60%_center]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900/85 via-primary/65 to-brand-900/55"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(45% 70% at 0% 50%, rgba(90,181,186,0.22) 0%, transparent 70%)",
        }}
      />

      <Container className="relative">
        <div className="flex flex-col items-start gap-6 py-12 md:flex-row md:items-center md:justify-between md:gap-10 md:py-14">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground-inverse backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              Our services
            </span>
            <h2
              id="eligibility-heading"
              className="mt-4 text-balance text-2xl font-bold leading-tight tracking-tight text-foreground-inverse drop-shadow-[0_2px_10px_rgba(7,39,60,0.45)] sm:text-3xl md:text-[2rem]"
            >
              How do you know if you&rsquo;re eligible for NDIS support?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-brand-100 sm:text-base">
              Hawa Health Care provides a range of NDIS services. Unsure if you&rsquo;re
              eligible? Use our resources to understand the National Disability
              Insurance Scheme and how to apply.
            </p>
          </div>

          <Link
            href="/ndis-information"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-background px-6 py-3 text-base font-semibold text-primary shadow-[var(--shadow-md)] transition-colors hover:bg-surface"
          >
            Check eligibility
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m13 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
