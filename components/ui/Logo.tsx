import Link from "next/link";

type LogoProps = {
  variant?: "default" | "inverse";
  className?: string;
};

export default function Logo({ variant = "default", className = "" }: LogoProps) {
  const wordColor = variant === "inverse" ? "text-foreground-inverse" : "text-foreground";
  const subColor = variant === "inverse" ? "text-brand-200" : "text-brand-600";

  return (
    <Link
      href="/"
      aria-label="Hawa Health Care home"
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <span
        aria-hidden
        className="grid h-9 w-9 place-items-center rounded-[var(--radius-sm)] bg-primary text-foreground-inverse shadow-sm"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21s-7-4.35-7-10a4.5 4.5 0 0 1 8-2.83A4.5 4.5 0 0 1 19 11c0 5.65-7 10-7 10Z" />
          <path d="M9 11h2v-2h2v2h2v2h-2v2h-2v-2H9z" fill="currentColor" stroke="none" />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`text-[15px] font-bold tracking-tight ${wordColor}`}>
          Hawa Health Care
        </span>
        <span className={`text-[10px] font-medium uppercase tracking-[0.18em] ${subColor}`}>
          NDIS Provider
        </span>
      </span>
    </Link>
  );
}
