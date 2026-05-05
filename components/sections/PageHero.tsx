import Link from "next/link";
import type { ReactNode } from "react";
import Container from "@/components/ui/Container";

type Crumb = { href?: string; label: string };

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  breadcrumbs?: Crumb[];
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-surface pb-16 pt-14 md:pb-24 md:pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand-100/55 blur-3xl" />
        <div className="absolute -right-32 -top-24 h-96 w-96 rounded-full bg-accent-100/40 blur-3xl" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(60% 80% at 50% 0%, #000 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(60% 80% at 50% 0%, #000 0%, transparent 70%)",
        }}
      />

      <Container className="relative">
        {breadcrumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-foreground-subtle">
              {breadcrumbs.map((c, i) => (
                <li key={`${c.label}-${i}`} className="inline-flex items-center gap-1.5">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-primary">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-foreground">{c.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 ? (
                    <span aria-hidden className="text-foreground-subtle/60">/</span>
                  ) : null}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        {eyebrow ? (
          <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-brand-100 bg-primary-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {eyebrow}
          </span>
        ) : null}

        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>

        {subtitle ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg">
            {subtitle}
          </p>
        ) : null}

        {children ? <div className="mt-7">{children}</div> : null}
      </Container>
    </section>
  );
}
