"use client";

import { useEffect, useImperativeHandle, useRef, forwardRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
          size?: "normal" | "flexible" | "compact";
          action?: string;
        },
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js";
const SCRIPT_ID = "cf-turnstile-script";

let scriptPromise: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.turnstile) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("Turnstile script failed to load")));
      if (window.turnstile) resolve();
      return;
    }
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = `${SCRIPT_SRC}?render=explicit`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Turnstile script failed to load"));
    document.head.appendChild(script);
  });

  return scriptPromise;
}

export type TurnstileHandle = {
  reset: () => void;
};

type TurnstileProps = {
  siteKey: string;
  onToken: (token: string) => void;
  onError?: () => void;
  action?: string;
};

const Turnstile = forwardRef<TurnstileHandle, TurnstileProps>(function Turnstile(
  { siteKey, onToken, onError, action },
  ref,
) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onTokenRef = useRef(onToken);
  const onErrorRef = useRef(onError);

  onTokenRef.current = onToken;
  onErrorRef.current = onError;

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
      }
    },
  }));

  useEffect(() => {
    let cancelled = false;

    loadScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.turnstile) return;
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          action,
          callback: (token) => onTokenRef.current(token),
          "error-callback": () => onErrorRef.current?.(),
          "expired-callback": () => onTokenRef.current(""),
        });
      })
      .catch(() => onErrorRef.current?.());

    return () => {
      cancelled = true;
      if (window.turnstile && widgetIdRef.current) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // ignore
        }
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, action]);

  return <div ref={containerRef} />;
});

export default Turnstile;
