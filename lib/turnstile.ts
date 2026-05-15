import "server-only";

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export type TurnstileResult =
  | { ok: true }
  | { ok: false; reason: "missing-token" | "invalid-token" | "network-error" };

export async function verifyTurnstile(
  token: string | undefined,
  remoteIp?: string,
): Promise<TurnstileResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    // Turnstile not configured — skip verification (dev convenience).
    return { ok: true };
  }

  if (!token) return { ok: false, reason: "missing-token" };

  try {
    const body = new URLSearchParams();
    body.set("secret", secret);
    body.set("response", token);
    if (remoteIp) body.set("remoteip", remoteIp);

    const res = await fetch(VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    if (!res.ok) return { ok: false, reason: "network-error" };

    const data = (await res.json()) as { success?: boolean };
    return data.success ? { ok: true } : { ok: false, reason: "invalid-token" };
  } catch {
    return { ok: false, reason: "network-error" };
  }
}

export function getRemoteIp(request: Request): string | undefined {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim();
  return request.headers.get("cf-connecting-ip") ?? undefined;
}
