"use client";

import TestimonialCard, { type Testimonial } from "@/components/sections/TestimonialCard";

type Props = {
  items: readonly Testimonial[];
};

export default function TestimonialsCarousel({ items }: Props) {
  const loop = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-24"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-24"
      />

      <ul className="marquee-track flex w-max gap-5 py-2">
        {loop.map((t, i) => (
          <li
            key={`${t.name}-${i}`}
            className="w-[85vw] shrink-0 sm:w-[420px] md:w-[440px]"
            aria-hidden={i >= items.length}
          >
            <TestimonialCard testimonial={t} />
          </li>
        ))}
      </ul>
    </div>
  );
}
