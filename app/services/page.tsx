import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/sections/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Six core NDIS services delivered by one coordinated team across Western Sydney — from daily living and community participation to respite support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ href: "/", label: "Home" }, { label: "Services" }]}
        eyebrow="Our services"
        title={
          <>
            Six core supports.{" "}
            <span className="text-primary">One coordinated team</span>.
          </>
        }
        subtitle="Every service below is delivered by support workers we've trained, matched, and back personally — with the same fast onboarding and clear communication across the board."
      />

      <section className="py-20 md:py-28">
        <Container>
          <ul className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border bg-background shadow-[var(--shadow-xs)] transition-[transform,box-shadow] duration-[var(--duration-base)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[700ms] group-hover:scale-[1.04]"
                      priority={i < 2}
                    />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/15 to-transparent" />
                    {s.focus ? (
                      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground-inverse shadow-[var(--shadow-sm)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-foreground-inverse" />
                        Focus service
                      </span>
                    ) : null}
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {s.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-muted md:text-base">
                      {s.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Learn more
                      <span aria-hidden className="grid h-7 w-7 place-items-center rounded-[var(--radius-pill)] bg-primary text-foreground-inverse transition-transform duration-[var(--duration-base)] group-hover:translate-x-1">
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m13 5 7 7-7 7" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Not sure which service fits?"
            title={
              <>
                We&apos;ll help you map your plan to the{" "}
                <span className="text-primary">right supports</span>.
              </>
            }
            subtitle="A 15-minute call is usually enough to scope what's needed and confirm we have capacity in your suburb."
            className="mb-10"
          />
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-primary px-6 py-3.5 text-base font-semibold text-foreground-inverse shadow-[var(--shadow-md)] transition-colors hover:bg-primary-hover"
            >
              Book a call
            </Link>
            <Link
              href="/referrals"
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] border border-border-strong bg-background px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Make a referral
            </Link>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
