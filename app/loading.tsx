export default function Loading() {
  return (
    <section
      aria-label="Loading"
      className="grid min-h-screen place-items-center bg-background"
    >
      <div className="relative grid h-16 w-16 place-items-center">
        <span className="absolute inset-0 animate-ping rounded-[var(--radius-pill)] bg-secondary/20" />
        <span className="absolute inset-1 rounded-[var(--radius-pill)] border border-brand-100" />
        <span className="h-10 w-10 animate-spin rounded-[var(--radius-pill)] border-2 border-brand-200 border-t-primary" />
        <span className="absolute h-2.5 w-2.5 rounded-[var(--radius-pill)] bg-secondary" />
        <span className="sr-only">Loading page content.</span>
      </div>
    </section>
  );
}
