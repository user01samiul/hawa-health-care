import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const HIGHLIGHTS = [
  {
    title: "Participant-centred",
    body: "Every plan is built around the person, their routines, goals, and the people who matter to them.",
  },
  {
    title: "Built for independence",
    body: "We back daily decisions, build skills, and step back as confidence grows.",
  },
  {
    title: "Goal-driven",
    body: "Your NDIS goals shape every shift. We measure progress, not hours.",
  },
];

export default function About() {
  return (
    <section
      aria-labelledby="about-heading"
      className="relative bg-background py-20 md:py-28"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="hidden lg:col-span-5 lg:block">
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-xl)] bg-surface shadow-[var(--shadow-md)]">
              <Image
                src="/ortopediatri-cocuk-ortopedi-akademisi-rXqfl7MKEJ4-unsplash.jpg"
                alt="A Hawa Health Care support worker walking with a participant in their community."
                fill
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[var(--radius-pill)] border border-border bg-background px-4 py-2.5 shadow-[var(--shadow-md)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-[11px]">
                Western Sydney, expanding NSW
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="About Hawa Health Care"
            title={
              <>
                Tailored NDIS support, delivered by people who{" "}
                <span className="text-primary">listen first</span>.
              </>
            }
            subtitle="We're a Western Sydney team built around one idea: the best NDIS outcomes happen when participants are heard, plans are personal, and support arrives when it's promised. With 7+ years in the health industry, we've built our service around speed, reliability, and real human care."
          />

          <div className="mt-10 mb-2 lg:hidden">
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-xl)] bg-surface shadow-[var(--shadow-md)]">
                <Image
                  src="/ortopediatri-cocuk-ortopedi-akademisi-rXqfl7MKEJ4-unsplash.jpg"
                  alt="A Hawa Health Care support worker walking with a participant in their community."
                  fill
                  sizes="(min-width: 640px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[var(--radius-pill)] border border-border bg-background px-4 py-2.5 shadow-[var(--shadow-md)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-[11px]">
                  Western Sydney, expanding NSW
                </p>
              </div>
            </div>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-8">
            {HIGHLIGHTS.map((h) => (
              <li
                key={h.title}
                className="rounded-[var(--radius-md)] border border-border bg-surface p-5"
              >
                <div className="flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-[var(--radius-pill)] bg-secondary-soft text-secondary">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">{h.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {h.body}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-primary px-5 py-3 text-sm font-semibold text-foreground-inverse shadow-[var(--shadow-sm)] transition-colors hover:bg-primary-hover"
            >
              More about us
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-[var(--radius-pill)] border border-border-strong px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              See our services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
