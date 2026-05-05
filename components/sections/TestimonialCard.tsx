export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  accent: "primary" | "secondary";
};

type Props = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial: t }: Props) {
  const accentBg = t.accent === "primary" ? "bg-primary-soft" : "bg-secondary-soft";
  const accentText = t.accent === "primary" ? "text-primary" : "text-secondary";

  return (
    <article className="relative flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-background p-6 shadow-[var(--shadow-xs)] transition-shadow duration-[var(--duration-base)] hover:shadow-[var(--shadow-md)] md:p-7">
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className={`h-7 w-7 ${accentText}`}
        fill="currentColor"
      >
        <path d="M9.5 7C5 7 3 11 3 15v3h6v-7H6c0-2 1.5-3 3.5-3zm10 0c-4.5 0-6.5 4-6.5 8v3h6v-7h-3c0-2 1.5-3 3.5-3z" />
      </svg>

      <p className="mt-4 flex-1 text-base leading-relaxed text-foreground">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <span
          className={`grid h-11 w-11 place-items-center rounded-[var(--radius-pill)] text-sm font-bold ${accentBg} ${accentText}`}
        >
          {t.initials}
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-foreground">{t.name}</p>
          <p className="text-xs text-foreground-subtle">{t.role}</p>
        </div>
      </div>
    </article>
  );
}
