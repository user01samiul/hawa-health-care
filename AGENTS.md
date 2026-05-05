<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Hawa Health Care — Project Brief

A conversion-focused NDIS provider website. The homepage is a landing page whose primary goal is generating **enquiries** and **referrals**.

## Business positioning (must show throughout)
- Tailored, participant-centred NDIS support
- **Same-day or next-day onboarding** (key selling point — surface in hero, dedicated section, why-us, CTAs)
- 7+ years health-industry experience
- Focus services: Social & Community Participation, Respite Support
- Service area: Western Sydney, expanding across NSW
- Brand promise: **Fast • Reliable • Personalised**

## Stack
- Next.js 16.2.4 (App Router) — read `node_modules/next/dist/docs/01-app/**` before reaching for old patterns
- React 19, TypeScript, Tailwind CSS v4 (`@import "tailwindcss"` + `@theme inline`)
- Local font: Helvetica Now Display via `next/font/local` (CSS var `--font-helvetica-now`)
- Path alias: `@/*` → repo root

## Design system
- **White mode only.** No dark-mode classes.
- Palette: white + healthcare blue + care green. All colours live as CSS variables in `app/globals.css` and are exposed to Tailwind via `@theme inline`. Use the tokens — do not hardcode hex values in components.
- Typography uses `font-sans` (Helvetica Now Display).

## Site structure
- `app/page.tsx` — Home (landing)
- `app/about/`, `app/services/`, `app/services/[slug]/`, `app/referrals/`, `app/contact/`, `app/feedback/`, `app/careers/`, `app/ndis-information/`

## Component layout convention
- `components/layout/` — Navbar, Footer (chrome shared across routes)
- `components/sections/` — homepage section components (Hero, FastOnboarding, About, Services, WhyUs, WhoWeHelp, Referral, Testimonials, FinalCta) — built modular so the home page composes them.
- `components/ui/` — reusable primitives (Button, Container, etc.) when they appear.

## Homepage sections (in order)
1. Hero — speed + personalised headline, two CTAs (Enquire Now, Make a Referral)
2. Fast Onboarding — same/next-day, no long waits, urgent support
3. About / Intro
4. Services Overview (6 services, each links to its own page)
5. Why Choose Hawa Health Care
6. Who We Help (participants, families, support coordinators)
7. Referral section (high priority) — short form / CTA
8. Testimonials (placeholders)
9. Final CTA — Enquire Now + Call Now

## Don'ts
- Don't copy dreammakercommunityservices.com.au — layout inspiration only.
- Don't introduce dark mode.
- Don't hardcode colours; use the CSS variables / Tailwind tokens.
