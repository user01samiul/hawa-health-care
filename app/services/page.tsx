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
    "Four core NDIS services delivered by one coordinated team across Western Sydney — personal care, respite, social and community access, and domestic care.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ href: "/", label: "Home" }, { label: "Services" }]}
        eyebrow="Our services"
        image="/centre-for-ageing-better-c-LWLkJIV6Q-unsplash.jpg"
        title={
          <>
            Four core supports.{" "}
            <span className="text-primary">One coordinated team</span>.
          </>
        }
        subtitle="Every service below is delivered by support workers we've trained, matched, and back personally, with the same fast onboarding and clear communication across the board."
      />

      <section className="py-20 md:py-28">
        <Container>
          <ul className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {SERVICES.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border bg-background shadow-[var(--shadow-xs)] transition-[transform,box-shadow] duration-[var(--duration-base)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[700ms] group-hover:scale-[1.04]"
                      priority={i < 3}
                    />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-foreground/10 to-transparent" />
                    {s.focus ? (
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] bg-secondary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground-inverse shadow-[var(--shadow-sm)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-foreground-inverse" />
                        Focus service
                      </span>
                    ) : null}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg font-semibold leading-tight tracking-tight text-foreground">
                      {s.name}
                    </h2>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-foreground-muted">
                      {s.blurb}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Learn more
                      <span aria-hidden className="transition-transform duration-[var(--duration-base)] group-hover:translate-x-1">→</span>
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
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="How we deliver"
                title={
                  <>
                    Same workers. Same standards.{" "}
                    <span className="text-primary">Across every service</span>.
                  </>
                }
                subtitle="The service category changes but the playbook doesn't. Whether it's respite, personal care or domestic assistance, you get the same fast onboarding, the same matched worker, and the same honest communication."
              />
            </div>

            <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              {[
                {
                  title: "Matched, not assigned",
                  body: "Workers are matched to your preferences — gender, language, cultural fit, communication style — before the first shift.",
                },
                {
                  title: "Continuity by default",
                  body: "We aim for the same one or two workers on your roster, not a rotating cast. Backup is briefed properly when needed.",
                },
                {
                  title: "Notes after every shift",
                  body: "Short, useful handover notes shared with you and your coordinator — so nothing slips through gaps.",
                },
                {
                  title: "Plans that flex",
                  body: "Plans review with you regularly and shift as your goals shift. We don't lock you into anything that stops working.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-border bg-background p-6 shadow-[var(--shadow-xs)]"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-[var(--radius-md)] bg-primary-soft text-primary">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
