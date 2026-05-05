export default function Loading() {
  return (
    <section
      aria-label="Loading"
      className="grid min-h-[60svh] place-items-center bg-background px-[var(--container-px)] py-20"
    >
      <div className="relative flex w-full max-w-sm flex-col items-center rounded-[var(--radius-xl)] border border-border bg-background p-8 text-center shadow-[var(--shadow-md)]">
        <div
          aria-hidden
          className="absolute inset-0 rounded-[var(--radius-xl)]"
          style={{
            background:
              "radial-gradient(70% 65% at 50% 0%, var(--brand-50) 0%, transparent 72%)",
          }}
        />

        <div className="relative grid h-16 w-16 place-items-center rounded-[var(--radius-pill)] bg-primary-soft text-primary">
          <span className="absolute inset-0 rounded-[var(--radius-pill)] border border-brand-200" />
          <span className="h-9 w-9 animate-spin rounded-[var(--radius-pill)] border-2 border-brand-200 border-t-primary" />
          <span className="absolute h-3 w-3 rounded-[var(--radius-pill)] bg-secondary" />
        </div>

        <p className="relative mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          Hawa Health Care
        </p>
        <p className="relative mt-2 text-base font-medium text-foreground">
          Preparing your support experience
        </p>
        <p className="sr-only">Loading page content.</p>
      </div>
    </section>
  );
}
