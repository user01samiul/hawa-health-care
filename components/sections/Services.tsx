import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const SERVICES = [
  {
    slug: "daily-living-assistance",
    name: "Daily Living Assistance",
    blurb: "Hands-on help with everyday routines so days run smoothly.",
    icon: (
      <>
        <path d="M3 12 12 3l9 9" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </>
    ),
  },
  {
    slug: "community-participation",
    name: "Community Participation",
    blurb: "Get out, stay social, and build the connections that matter.",
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
    slug: "transport-assistance",
    name: "Transport Assistance",
    blurb: "Reliable rides to appointments, work, study and outings.",
    icon: (
      <>
        <path d="M5 17h14" />
        <path d="M3 17V9l2-5h14l2 5v8" />
        <circle cx="7.5" cy="17.5" r="1.5" />
        <circle cx="16.5" cy="17.5" r="1.5" />
      </>
    ),
  },
  {
    slug: "respite-support",
    name: "Respite Support",
    blurb: "Trusted short-term care that lets families and carers recharge.",
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
            subtitle="Six core services across daily living, community, transport, and respite — coordinated by one team that actually knows your plan."
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

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-[var(--radius-lg)] border border-border bg-background p-6 shadow-[var(--shadow-xs)] transition-[transform,box-shadow,border-color] duration-[var(--duration-base)] hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[var(--shadow-md)] md:p-7"
              >
                <span
                  aria-hidden
                  className="grid h-12 w-12 place-items-center rounded-[var(--radius-md)] bg-primary-soft text-primary transition-colors duration-[var(--duration-base)] group-hover:bg-primary group-hover:text-foreground-inverse"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {s.icon}
                  </svg>
                </span>

                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {s.blurb}
                  </p>
                </div>

                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Learn more
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
                </span>
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
