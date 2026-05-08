"use client";

import { useEffect } from "react";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  unstable_retry: () => void;
};

export default function GlobalError({
  error,
  unstable_retry,
}: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en-AU">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7fafc",
          color: "#0e1726",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          padding: "2rem 1.5rem",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <title>Something went wrong | Hawa Health Care</title>
        <main
          style={{
            width: "100%",
            maxWidth: "32rem",
            background: "#ffffff",
            border: "1px solid #e3e8ee",
            borderRadius: "18px",
            padding: "2.25rem",
            boxShadow: "0 8px 24px rgba(14,23,38,0.08)",
            textAlign: "center",
          }}
        >
          <span
            aria-hidden
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.25rem 0.75rem",
              borderRadius: "9999px",
              border: "1px solid #cfe1ee",
              background: "#ecf3f9",
              color: "#114b73",
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "9999px",
                background: "#114b73",
              }}
            />
            Critical error
          </span>

          <h1
            style={{
              marginTop: "1.25rem",
              fontSize: "1.875rem",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            Something went wrong.
          </h1>
          <p
            style={{
              marginTop: "0.75rem",
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "#4b5563",
            }}
          >
            We hit a problem loading the page. Please try again, or get in
            touch if it keeps happening.
          </p>

          {error.digest ? (
            <p
              style={{
                marginTop: "0.75rem",
                fontFamily:
                  '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
                fontSize: "0.75rem",
                color: "#6b7280",
              }}
            >
              Reference: {error.digest}
            </p>
          ) : null}

          <div
            style={{
              marginTop: "1.75rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              justifyContent: "center",
            }}
          >
            <button
              type="button"
              onClick={() => unstable_retry()}
              style={{
                padding: "0.85rem 1.5rem",
                borderRadius: "9999px",
                border: "none",
                background: "#114b73",
                color: "#ffffff",
                fontSize: "0.95rem",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(14,23,38,0.08)",
              }}
            >
              Try again
            </button>
            <a
              href="/"
              style={{
                padding: "0.85rem 1.5rem",
                borderRadius: "9999px",
                border: "1px solid #cdd5df",
                background: "#ffffff",
                color: "#0e1726",
                fontSize: "0.95rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Back to home
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
