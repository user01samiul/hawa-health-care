import Image from "next/image";
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
  image?: string;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  children,
  image = "/senior-father-wheelchair-young-son-walk.jpg",
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden rounded-br-[2rem] pb-20 pt-16 md:rounded-br-[4rem] md:pb-28 md:pt-24">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center]"
      />

      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-900/55 via-primary/35 to-brand-900/60"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900/55 via-primary/20 to-transparent"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 50% at 0% 100%, rgba(90,181,186,0.22) 0%, transparent 65%), radial-gradient(40% 50% at 100% 0%, rgba(255,255,255,0.10) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(60% 80% at 50% 100%, #000 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(60% 80% at 50% 100%, #000 0%, transparent 70%)",
        }}
      />

      <Container className="relative">
        {breadcrumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-brand-100/85">
              {breadcrumbs.map((c, i) => (
                <li key={`${c.label}-${i}`} className="inline-flex items-center gap-1.5">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-foreground-inverse">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-foreground-inverse">{c.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 ? (
                    <span aria-hidden className="text-brand-100/50">/</span>
                  ) : null}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        {eyebrow ? (
          <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground-inverse backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            {eyebrow}
          </span>
        ) : null}

        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground-inverse drop-shadow-[0_2px_12px_rgba(7,39,60,0.45)] [&_.text-primary]:text-secondary sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>

        {subtitle ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
            {subtitle}
          </p>
        ) : null}

        {children ? <div className="mt-7">{children}</div> : null}
      </Container>
    </section>
  );
}
