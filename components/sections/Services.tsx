import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const SERVICES = [
  {
    slug: "community-participation",
    name: "Community Participation",
    blurb: "Get out, stay social, and build the connections that matter.",
    image: "/services/community participation.png",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 21v-1a6 6 0 0 1 12 0v1" />
        <path d="M14 21v-1a4 4 0 0 1 7-2.83" />
      </>
    ),
  },
  {
    slug: "personal-care",
    name: "Personal Care",
    blurb: "Respectful, dignified support for showering, dressing and grooming.",
    image: "/services/personal care.jpg",
    icon: (
      <>
        <path d="M12 21s-7-4.35-7-10a4.5 4.5 0 0 1 8-2.83A4.5 4.5 0 0 1 19 11c0 5.65-7 10-7 10Z" />
      </>
    ),
  },
  {
    slug: "domestic-assistance",
    name: "Domestic Assistance",
    blurb: "Cleaning, laundry, meal prep — a calm, well-kept home.",
    image: "/services/domestic assistance.png",
    icon: (
      <>
        <path d="M4 21V8l8-5 8 5v13" />
        <path d="M9 21v-6h6v6" />
        <path d="M3 11h2" />
        <path d="M19 11h2" />
      </>
    ),
  },
  {
    slug: "respite-support",
    name: "Respite Support",
    blurb: "Trusted short-term care that lets families and carers recharge.",
    image: "/services/Respite Support.png",
    icon: (
      <>
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V6a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3z" />
        <path d="M8 11h8" />
        <path d="M8 8h6" />
      </>
    ),
  },
];

export default function Services() {
  return (
    <section
      aria-labelledby="services-heading"
      className="relative bg-surface py-20 md:py-28"
    >
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our services"
            title={
              <>
                Everything you need under{" "}
                <span className="text-primary">one provider</span>.
              </>
            }
            subtitle="Four core services across personal care, social and community access, domestic care and respite — coordinated by one team that actually knows your plan."
          />
          <Link
            href="/services"
            className="hidden shrink-0 items-center gap-2 rounded-[var(--radius-pill)] border border-border-strong bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary md:inline-flex"
          >
            View all services
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m13 5 7 7-7 7" />
            </svg>
          </Link>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] bg-foreground shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 transition-[transform,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out)] hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] focus-visible:-translate-y-1 sm:aspect-[5/4]"
              >
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out)] group-hover:scale-[1.05]"
                />

                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-foreground/55 via-foreground/15 to-transparent"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-foreground from-5% via-foreground/70 via-45% to-transparent to-80%"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-tr from-primary/35 via-transparent to-transparent opacity-0 transition-opacity duration-[var(--duration-slow)] group-hover:opacity-100"
                />

                <div
                  aria-hidden
                  className="absolute inset-0 rounded-[var(--radius-lg)] ring-1 ring-inset ring-white/0 transition-[box-shadow] duration-[var(--duration-base)] group-hover:ring-white/15"
                />

                <span
                  aria-hidden
                  className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-[var(--radius-md)] bg-background/95 text-primary shadow-[var(--shadow-md)] ring-1 ring-white/40 backdrop-blur transition-[background,color,transform] duration-[var(--duration-base)] group-hover:scale-105 group-hover:bg-primary group-hover:text-foreground-inverse"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {s.icon}
                  </svg>
                </span>

                <div className="absolute inset-x-0 bottom-0 flex flex-col p-6 text-foreground-inverse md:p-7">
                  <h3 className="text-[1.3rem] font-semibold leading-tight tracking-tight md:text-2xl">
                    {s.name}
                  </h3>
                  <p className="mt-2 max-w-[28ch] text-sm leading-relaxed text-white/85">
                    {s.blurb}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2.5 text-sm font-semibold text-foreground-inverse">
                    Learn more
                    <span
                      aria-hidden
                      className="grid h-8 w-8 place-items-center rounded-[var(--radius-pill)] bg-secondary text-foreground-inverse shadow-[var(--shadow-sm)] transition-transform duration-[var(--duration-base)] group-hover:translate-x-1"
                    >
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

        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-border-strong bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            View all services
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
