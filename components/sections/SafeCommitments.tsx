import Link from "next/link";
import Container from "@/components/ui/Container";

const PRINCIPLES = [
  "Putting each participant's safety, choice and dignity at the centre of every decision and roster.",
  "Matching support workers carefully — culture, language, gender preference — so support feels safe from the first shift.",
  "Training every worker to recognise, prevent and respond to abuse, neglect or harm — and to escalate without hesitation.",
  "Keeping clear, written records and post-shift notes so families and coordinators always know what's happened.",
  "Inviting feedback openly and acting on it — including the complaints that point back at us.",
  "Maintaining a zero-tolerance stance on discrimination, exploitation, or any breach of the NDIS Code of Conduct.",
];

export default function SafeCommitments() {
  return (
    <section
      aria-labelledby="safe-commitments-heading"
      className="bg-lime-accent text-foreground"
    >
      <Container className="py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <h2
              id="safe-commitments-heading"
              className="text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.65rem]"
            >
              Participant Safe &amp; Inclusive Commitments
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/80">
              At Hawa Health Care, the safety, dignity and voice of every
              participant come before everything else. We align our work with
              the NDIS Code of Conduct, the NDIS Practice Standards, and the
              National Principles for Child Safe Organisations — and we hold
              ourselves accountable when something needs to change.
            </p>

            <Link
              href=""
              className="group mt-8 inline-flex items-center gap-2.5 rounded-[var(--radius-pill)] bg-foreground px-6 py-3.5 text-sm font-semibold text-foreground-inverse shadow-[var(--shadow-md)] transition-[transform,background] duration-[var(--duration-fast)] hover:bg-foreground/90 active:translate-y-px"
            >
              NDIS Commission Complaints
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
            </Link>
          </div>

          <div className="md:col-span-7">
            <h3 className="text-lg font-semibold text-foreground md:text-xl">
              We uphold these principles by:
            </h3>
            <ul className="mt-6 space-y-4">
              {PRINCIPLES.map((p) => (
                <li key={p} className="flex items-start gap-3.5">
                  <span
                    aria-hidden
                    className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-foreground text-lime-accent"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-base leading-relaxed text-foreground/85">
                    {p}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/80">
              Our promise is simple: every participant — and every family
              supporting them — deserves a provider that's transparent,
              accountable, and easy to raise a concern with.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
