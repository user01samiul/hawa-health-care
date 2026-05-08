import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Hawa Health Care. Same-day responses across Western Sydney - phone, email, or contact form.",
};

const SERVICE_AREAS = [
  "Blacktown",
  "Mount Druitt",
  "Parramatta",
  "Penrith",
  "Liverpool",
  "Fairfield",
  "Holroyd",
  "Cumberland",
  "The Hills",
  "Hawkesbury",
  "Camden",
  "Campbelltown",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
        eyebrow="Talk to us"
        image="/thisisengineering-o6jUolZ7QJk-unsplash.jpg"
        title={
          <>
            Real people, real responses -{" "}
            <span className="text-primary">within hours</span>.
          </>
        }
        subtitle="Whether it's a quick question, an urgent request, or you'd like to scope your plan - pick the channel that suits you best."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <aside className="lg:col-span-5">
              <div className="space-y-5">
                <div className="rounded-[var(--radius-lg)] border border-brand-200 bg-primary p-7 text-foreground-inverse shadow-[var(--shadow-md)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-100">
                    Direct lines
                  </p>
                  <ul className="mt-5 space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-[var(--radius-md)] bg-white/15 text-foreground-inverse">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <a href="tel:+61000000000" className="text-brand-100 hover:text-foreground-inverse">(00) 0000 0000</a>
                        <p className="mt-1 text-xs text-brand-100">Mon-Fri 8am-6pm AEST</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-[var(--radius-md)] bg-white/15 text-foreground-inverse">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2z" />
                          <path d="m22 6-10 7L2 6" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:hello@hawahealthcare.com.au" className="text-brand-100 hover:text-foreground-inverse">hello@hawahealthcare.com.au</a>
                        <p className="mt-1 text-xs text-brand-100">Replies within 2-4 hours</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-[var(--radius-md)] bg-white/15 text-foreground-inverse">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-semibold">Service area</p>
                        <p className="text-brand-100">Western Sydney - expanding across NSW</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="rounded-[var(--radius-lg)] border border-border bg-background p-7 shadow-[var(--shadow-xs)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Suburbs we cover
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {SERVICE_AREAS.map((area) => (
                      <li key={area} className="rounded-[var(--radius-pill)] border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground-muted">
                        {area}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs text-foreground-subtle">
                    Not on the list? <Link href="/contact" className="text-primary hover:underline">Ask us</Link> - we expand routinely based on demand.
                  </p>
                </div>

                <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface shadow-[var(--shadow-xs)]">
                  <div className="aspect-[5/3] w-full">
                    <iframe
                      title="Hawa Health Care service area map"
                      src="https://www.google.com/maps?q=Western+Sydney&output=embed"
                      className="h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
