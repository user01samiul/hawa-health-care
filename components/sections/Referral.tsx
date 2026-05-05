import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const URGENCY = [
  { value: "urgent", label: "Urgent — within 24h" },
  { value: "soon", label: "This week" },
  { value: "flexible", label: "Flexible" },
];

export default function Referral() {
  return (
    <section
      aria-labelledby="referral-heading"
      className="relative overflow-hidden bg-primary py-20 text-foreground-inverse md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(45% 60% at 100% 0%, rgba(255,255,255,0.18) 0%, transparent 65%), radial-gradient(40% 60% at 0% 100%, rgba(255,255,255,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(70% 60% at 50% 50%, #000 0%, transparent 75%)",
        }}
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-100 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            Refer a participant
          </span>
          <h2
            id="referral-heading"
            className="mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.6rem]"
          >
            Got someone who needs support{" "}
            <span className="text-secondary">this week</span>?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-100 sm:text-lg">
            Send us the basics and we'll get back within hours. If it's urgent,
            we'll usually have a worker in place within 24 hours of the
            referral.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Service agreement within 24h",
              "Direct line to senior staff",
              "All NDIS plan types accepted",
              "Western Sydney capacity available",
            ].map((p) => (
              <li
                key={p}
                className="flex items-start gap-2.5 text-sm text-brand-100"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/15">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6">
          <form
            action="/referrals"
            method="get"
            className="rounded-[var(--radius-xl)] border border-white/15 bg-background p-6 text-foreground shadow-[var(--shadow-lg)] md:p-8"
          >
            <SectionHeading
              title="Quick referral"
              subtitle="The full form lives on our referrals page — pre-fill it here in 30 seconds."
              titleClassName="!text-2xl sm:!text-3xl lg:!text-3xl"
            />

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Your name" name="referrerName" placeholder="Jane Doe" />
              <Field
                label="Phone or email"
                name="referrerContact"
                placeholder="0400 000 000 or you@email.com"
              />
              <Field
                label="Participant name"
                name="participantName"
                placeholder="Participant"
                wrapperClassName="sm:col-span-2"
              />

              <div className="sm:col-span-2">
                <label
                  htmlFor="urgency"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground-subtle"
                >
                  Urgency
                </label>
                <div className="flex flex-wrap gap-2">
                  {URGENCY.map((u, i) => (
                    <label
                      key={u.value}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-[var(--radius-pill)] border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground-muted transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary-soft has-[:checked]:text-primary hover:border-primary"
                    >
                      <input
                        type="radio"
                        name="urgency"
                        value={u.value}
                        defaultChecked={i === 0}
                        className="sr-only"
                      />
                      {u.label}
                    </label>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="notes"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground-subtle"
                >
                  Short note <span className="font-normal text-foreground-subtle/70">(optional)</span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  placeholder="Quick context: services needed, suburb, plan type…"
                  className="w-full resize-none rounded-[var(--radius-md)] border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle/70 focus:border-primary focus:outline-none focus:ring-4 focus:ring-[color:var(--brand-100)]"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-foreground-subtle">
                We'll only use your details to respond to this referral.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-primary px-6 py-3 text-sm font-semibold text-foreground-inverse shadow-[var(--shadow-sm)] transition-[background,transform,box-shadow] duration-[var(--duration-fast)] hover:bg-primary-hover hover:shadow-[var(--shadow-md)] active:translate-y-px"
              >
                Submit a Referral
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m13 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  wrapperClassName = "",
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  wrapperClassName?: string;
}) {
  return (
    <div className={wrapperClassName}>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground-subtle"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-[var(--radius-md)] border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle/70 focus:border-primary focus:outline-none focus:ring-4 focus:ring-[color:var(--brand-100)]"
      />
    </div>
  );
}
