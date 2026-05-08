"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type AnimatedStat = {
  value: number;
  suffix?: string;
  label: ReactNode;
};

type Props = {
  stats: AnimatedStat[];
  className?: string;
  duration?: number;
};

export default function AnimatedStats({
  stats,
  className = "",
  duration = 1400,
}: Props) {
  const ref = useRef<HTMLDListElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <dl
      ref={ref}
      className={`grid max-w-xl grid-cols-3 gap-4 sm:gap-6 ${className}`}
    >
      {stats.map((stat, i) => (
        <StatItem
          key={i}
          stat={stat}
          started={started}
          duration={duration}
        />
      ))}
    </dl>
  );
}

function StatItem({
  stat,
  started,
  duration,
}: {
  stat: AnimatedStat;
  started: boolean;
  duration: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setValue(stat.value);
      return;
    }

    let raf = 0;
    let startTs: number | null = null;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (ts: number) => {
      if (startTs === null) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      setValue(Math.round(easeOut(progress) * stat.value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, stat.value, duration]);

  return (
    <div className="border-l-2 border-brand-200 pl-3 sm:pl-4">
      <dt className="text-2xl font-bold tracking-tight text-foreground tabular-nums sm:text-3xl">
        {value}
        {stat.suffix ?? ""}
      </dt>
      <dd className="mt-1 text-xs leading-snug text-foreground-subtle sm:text-sm">
        {stat.label}
      </dd>
    </div>
  );
}
