import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
  titleClassName = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-brand-100 bg-primary-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem] ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
