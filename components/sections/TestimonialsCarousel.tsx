"use client";

import { useEffect, useRef, useState } from "react";
import TestimonialCard, { type Testimonial } from "@/components/sections/TestimonialCard";

type Props = {
  items: readonly Testimonial[];
  intervalMs?: number;
};

export default function TestimonialsCarousel({ items, intervalMs = 5500 }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = mq.matches;
    const onChange = () => {
      reducedMotion.current = mq.matches;
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion.current || items.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [paused, items.length, intervalMs]);

  const go = (next: number) => {
    const len = items.length;
    setIndex(((next % len) + len) % len);
  };

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
          style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
        >
          {items.map((t, i) => (
            <li
              key={t.name}
              className="w-full shrink-0 px-1"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${items.length}`}
              aria-hidden={i !== index}
            >
              <TestimonialCard testimonial={t} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => go(index - 1)}
          className="grid h-10 w-10 place-items-center rounded-[var(--radius-pill)] border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="m11 19-7-7 7-7" />
          </svg>
        </button>

        <ul className="flex items-center gap-2">
          {items.map((t, i) => (
            <li key={t.name}>
              <button
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
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
          aria-label="Next testimonial"
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
