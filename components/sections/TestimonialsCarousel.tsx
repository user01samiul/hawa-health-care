"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import TestimonialCard, { type Testimonial } from "@/components/sections/TestimonialCard";

type Props = {
  items: readonly Testimonial[];
  intervalMs?: number;
};

export default function TestimonialsCarousel({ items, intervalMs = 5500 }: Props) {
  const [perView, setPerView] = useState(1);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPerView = () => setPerView(desktop.matches ? 3 : 1);
    const syncMotion = () => {
      reducedMotion.current = motion.matches;
    };

    syncPerView();
    syncMotion();
    desktop.addEventListener("change", syncPerView);
    motion.addEventListener("change", syncMotion);
    return () => {
      desktop.removeEventListener("change", syncPerView);
      motion.removeEventListener("change", syncMotion);
    };
  }, []);

  const maxIndex = Math.max(0, items.length - perView);
  const slideCount = maxIndex + 1;

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  useEffect(() => {
    if (paused || reducedMotion.current || slideCount < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slideCount);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [paused, slideCount, intervalMs]);

  const go = (next: number) => {
    setIndex(((next % slideCount) + slideCount) % slideCount);
  };

  const offsetPercent = useMemo(
    () => index * (100 / perView),
    [index, perView],
  );

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <ul
          aria-live="polite"
          className="flex transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out)]"
          style={{ transform: `translate3d(-${offsetPercent}%, 0, 0)` }}
        >
          {items.map((t, i) => {
            const visible = i >= index && i < index + perView;
            return (
              <li
                key={t.name}
                className="w-full shrink-0 px-2.5 md:w-1/3"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${items.length}`}
                aria-hidden={!visible}
              >
                <TestimonialCard testimonial={t} />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => go(index - 1)}
          className="grid h-10 w-10 place-items-center rounded-[var(--radius-pill)] border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="m11 19-7-7 7-7" />
          </svg>
        </button>

        <ul className="flex items-center gap-2">
          {Array.from({ length: slideCount }).map((_, i) => (
            <li key={i}>
              <button
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => go(i)}
                className={`h-2 rounded-full transition-[width,background-color] duration-[var(--duration-base)] ${
                  i === index ? "w-7 bg-primary" : "w-2 bg-border-strong hover:bg-foreground-subtle"
                }`}
              />
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Next"
          onClick={() => go(index + 1)}
          className="grid h-10 w-10 place-items-center rounded-[var(--radius-pill)] border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m13 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
