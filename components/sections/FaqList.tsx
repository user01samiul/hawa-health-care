"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };

export default function FaqList({ items }: { items: readonly FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ul className="space-y-3 lg:col-span-8">
      {items.map((f, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        return (
          <li key={f.q}>
            <div className="rounded-[var(--radius-lg)] border border-border bg-background shadow-[var(--shadow-xs)] transition-colors hover:border-primary/40">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left text-base font-semibold text-foreground"
              >
                <span>{f.q}</span>
                <span
                  aria-hidden
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary-soft text-primary transition-transform duration-[var(--duration-base)] ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14" />
                    <path d="M5 12h14" />
                  </svg>
                </span>
              </button>
              <div
                id={panelId}
                className={`grid px-6 transition-[grid-template-rows,opacity,padding-bottom] duration-[var(--duration-base)] ease-out ${
                  isOpen
                    ? "grid-rows-[1fr] pb-6 opacity-100"
                    : "grid-rows-[0fr] pb-0 opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-3 text-sm leading-relaxed text-foreground-muted">
                    {f.a.split("\n\n").map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
