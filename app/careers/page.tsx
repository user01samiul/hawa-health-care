import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Hawa Health Care. Support worker, coordinator and casual roles across Western Sydney with respectful rosters and ongoing training.",
};

const PERKS = [
  {
    title: "Rosters that respect you",
    body: "Built around your availability, not the other way around.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="3" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),
  },
  {
    title: "Ongoing training",
    body: "Manual handling, mental health first aid, infection control: paid time, no fluff.",
    icon: (
      <>
        <path d="M12 14 4 9l8-5 8 5-8 5z" />
        <path d="M4 9v6l8 5 8-5V9" />
      </>
    ),
  },
  {
    title: "Real backup",
    body: "Coordinators on call, clean handover notes, and a team WhatsApp that actually replies.",
    icon: (
      <>
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
      </>
    ),
  },
  {
    title: "Pay that's clear",
    body: "Award-aligned, paid on time, with penalties paid as penalties, no surprises.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <path d="M12 6v2M12 16v2" />
      </>
    ),
  },
];

const ROLES = [
  {
    title: "Support Worker, Western Sydney",
    type: "Casual / Part-time",
    location: "Blacktown, Mount Druitt, Parramatta",
    body: "Day-to-day NDIS support across community access, personal care and respite.",
  },
  {
    title: "Senior Support Worker",
    type: "Part-time / Full-time",
    location: "Western Sydney",
    body: "Lead on complex participant matches, mentor new workers, and shape rosters with the coordinator team.",
  },
  {
    title: "Support Coordinator",
    type: "Full-time",
    location: "Hybrid (Western Sydney)",
    body: "Coordinate intake, plan implementation, and family communications across an active caseload.",
  },
];

const inputBase =
  "w-full rounded-[var(--radius-sm)] border border-border bg-background px-4 py-3 text-sm text-foreground shadow-[var(--shadow-xs)] outline-none transition-colors placeholder:text-foreground-subtle focus:border-primary focus:ring-2 focus:ring-primary/15";

function FieldLabel({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-foreground"
    >
      {children}
      {required ? <span aria-hidden className="ml-1 text-secondary">*</span> : null}
    </label>
  );
}

export default function CareersPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ href: "/", label: "Home" }, { label: "Careers" }]}
        eyebrow="Careers"
        title={
          <>
            Work with a team that backs{" "}
            <span className="text-primary">support workers</span>.
          </>
        }
        subtitle="We're hiring careful, communicative people across Western Sydney. Real shifts, real backup, real pathways to grow into senior roles."
      >
        <Link
          href="#apply"
          className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-background px-6 py-3 text-base font-semibold text-primary shadow-[var(--shadow-md)] transition-colors hover:bg-surface"
        >
          Apply now
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m13 5 7 7-7 7" />
          </svg>
        </Link>
      </PageHero>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Why join us"
            title={
              <>
                The basics done well, in a sector where{" "}
                <span className="text-primary">that's rare</span>.
              </>
            }
            subtitle="No empty promises about culture. Just rosters, training and pay that work, so you can focus on the participants in front of you."
            className="mb-12"
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((p) => (
              <li
                key={p.title}
                className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-border bg-background p-7 shadow-[var(--shadow-xs)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-[var(--radius-md)] bg-primary-soft text-primary">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {p.icon}
                  </svg>
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Open roles"
            title={
              <>
                Currently hiring across{" "}
                <span className="text-primary">Western Sydney</span>.
              </>
            }
            subtitle="Don't see your role? Submit an EOI below. We hire continuously."
            className="mb-12"
          />
          <ul className="grid gap-5 md:grid-cols-3">
            {ROLES.map((r) => (
              <li key={r.title} className="flex flex-col rounded-[var(--radius-lg)] border border-border bg-background p-7 shadow-[var(--shadow-xs)]">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  {r.type}
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-tight text-foreground">{r.title}</h3>
                <p className="mt-1 text-xs text-foreground-subtle">{r.location}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground-muted">{r.body}</p>
                <Link
                  href="#apply"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Apply for this role
                  <span aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="apply" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Apply"
                title={
                  <>
                    Send us a quick{" "}
                    <span className="text-primary">expression of interest</span>.
                  </>
                }
                subtitle="A coordinator will be in touch within a few business days. Bring your CV, certifications and questions."
              />
            </div>
            <form className="space-y-6 rounded-[var(--radius-lg)] border border-border bg-surface p-6 shadow-[var(--shadow-xs)] sm:p-8 md:p-10 lg:col-span-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <FieldLabel htmlFor="name" required>Full name</FieldLabel>
                  <input id="name" name="name" type="text" required autoComplete="name" className={inputBase} />
                </div>
                <div>
                  <FieldLabel htmlFor="email" required>Email</FieldLabel>
                  <input id="email" name="email" type="email" required autoComplete="email" className={inputBase} />
                </div>
                <div>
                  <FieldLabel htmlFor="phone">Phone</FieldLabel>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputBase} />
                </div>
                <div>
                  <FieldLabel htmlFor="role" required>Role of interest</FieldLabel>
                  <select id="role" name="role" required defaultValue="" className={inputBase}>
                    <option value="" disabled>Select an option</option>
                    {ROLES.map((r) => (
                      <option key={r.title}>{r.title}</option>
                    ))}
                    <option>General EOI</option>
                  </select>
                </div>
              </div>
              <div>
                <FieldLabel htmlFor="experience">Experience &amp; certifications</FieldLabel>
                <textarea id="experience" name="experience" rows={5} className={inputBase} placeholder="Briefly: years in care, NDIS Worker Screening, First Aid, manual handling, etc." />
              </div>
              <div>
                <FieldLabel htmlFor="availability">Availability</FieldLabel>
                <input id="availability" name="availability" type="text" className={inputBase} placeholder="e.g. weekday mornings, weekend evenings" />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-foreground-subtle">We respond within a few business days.</p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-primary px-7 py-3.5 text-base font-semibold text-foreground-inverse shadow-[var(--shadow-md)] transition-colors hover:bg-primary-hover"
                >
                  Submit EOI
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
