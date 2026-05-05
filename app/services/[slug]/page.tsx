import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/sections/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import { SERVICES, getServiceBySlug } from "@/data/services";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.name,
    description: service.description,
  };
}

const PROCESS = [
  {
    step: "01",
    title: "Quick chat",
    body: "A short call to scope your situation, plan funding, and timing.",
  },
  {
    step: "02",
    title: "Match & agreement",
    body: "We match a worker to your preferences and send a clear service agreement.",
  },
  {
    step: "03",
    title: "Support starts",
    body: "Same-day or next-day where capacity allows. Notes after every shift.",
  },
];

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
          { label: service.name },
        ]}
        eyebrow={service.focus ? "Focus service" : "NDIS service"}
        title={service.name}
        subtitle={service.blurb}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-background px-6 py-3 text-base font-semibold text-primary shadow-[var(--shadow-md)] transition-colors hover:bg-surface"
          >
            Enquire about this service
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m13 5 7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/referrals"
            className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] border border-white/40 bg-white/10 px-6 py-3 text-base font-semibold text-foreground-inverse backdrop-blur transition-colors hover:bg-white/20"
          >
            Make a referral
          </Link>
        </div>
      </PageHero>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-lg)] border border-border shadow-[var(--shadow-xs)]">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground-muted sm:text-lg">
                <p>{service.description}</p>
              </div>

              <div className="mt-12 grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    Who it's for
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {service.whoFor.map((w) => (
                      <li key={w} className="flex items-start gap-3 text-sm leading-relaxed text-foreground-muted">
                        <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    What's included
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {service.included.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground-muted">
                        <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary-soft text-secondary">
                          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="sticky top-28 space-y-5">
                <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-7 shadow-[var(--shadow-xs)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Onboarding
                  </p>
                  <p className="mt-3 text-2xl font-bold tracking-tight text-foreground">
                    Same-day / next-day
                  </p>
                  <p className="mt-2 text-sm text-foreground-muted">
                    Tell us what you need and we'll confirm capacity within hours.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-primary px-5 py-3 text-sm font-semibold text-foreground-inverse shadow-[var(--shadow-sm)] transition-colors hover:bg-primary-hover"
                  >
                    Enquire now
                  </Link>
                  <a
                    href="tel:+61000000000"
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-pill)] border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                    </svg>
                    Call us
                  </a>
                </div>

                <div className="rounded-[var(--radius-lg)] border border-border bg-background p-7 shadow-[var(--shadow-xs)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    How it works
                  </p>
                  <ol className="mt-4 space-y-5">
                    {PROCESS.map((p) => (
                      <li key={p.step} className="flex gap-4">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[var(--radius-md)] bg-primary-soft text-sm font-bold text-primary">
                          {p.step}
                        </span>
                        <div>
                          <p className="font-semibold text-foreground">{p.title}</p>
                          <p className="mt-1 text-sm text-foreground-muted">{p.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Related supports"
            title={
              <>
                You might also need{" "}
                <span className="text-primary">these.</span>
              </>
            }
            className="mb-12"
          />
          <ul className="grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/services/${r.slug}`}
                  className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-background p-7 shadow-[var(--shadow-xs)] transition-[transform,box-shadow] duration-[var(--duration-base)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
                >
                  <h3 className="text-lg font-semibold text-foreground">{r.name}</h3>
                  <p className="mt-3 flex-1 text-sm text-foreground-muted">{r.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Learn more
                    <span aria-hidden className="transition-transform duration-[var(--duration-base)] group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
