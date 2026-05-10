import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { SITE } from "@/lib/site";

const QUICK_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/referrals", label: "Referrals" },
  { href: "/ndis-information", label: "NDIS Information" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const SERVICE_LINKS = [
  { href: "/services/personal-care", label: "Personal Care" },
  { href: "/services/respite-support", label: "Respite Support" },
  { href: "/services/community-participation", label: "Social & Community Access" },
  { href: "/services/domestic-assistance", label: "Domestic Care & Assistance" },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 1 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface text-foreground">
      <Container className="py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo imgClassName="h-20 w-auto md:h-24" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-foreground-muted">
              Hawa Health Care provides personalised NDIS support across
              Western Sydney, with a focus on respectful care, reliable support
              workers and clear communication with participants, families and
              support coordinators.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground-muted">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-[var(--radius-sm)] bg-primary-soft text-primary">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>
                <a href={`tel:${SITE.phone}`} className="hover:text-primary">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-[var(--radius-sm)] bg-primary-soft text-primary">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                </span>
                <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-[var(--radius-sm)] bg-primary-soft text-primary">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>Western Sydney, NSW. Expanding across NSW.</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold tracking-wide text-foreground">
              Quick links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-foreground-muted hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold tracking-wide text-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-foreground-muted hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold tracking-wide text-foreground">
              Get started today
            </h3>
            <p className="mt-3 text-sm text-foreground-muted">
              Same-day or next-day onboarding for urgent support needs.
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link
                href="/referrals"
                className="inline-flex items-center justify-center rounded-[var(--radius-pill)] bg-primary px-5 py-2.5 text-sm font-semibold text-foreground-inverse shadow-[var(--shadow-sm)] transition-colors hover:bg-primary-hover"
              >
                Make a Referral
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[var(--radius-pill)] border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Enquire Now
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-[var(--radius-pill)] border border-border text-foreground-muted transition-colors hover:border-primary hover:text-primary"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-foreground-subtle md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} Hawa Health Care. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <li>
              <Link href="/privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/feedback" className="hover:text-primary">
                Feedback &amp; Complaints
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-primary">
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
