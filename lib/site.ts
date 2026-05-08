const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hawahealthcare.com.au";
const SITE_URL = rawUrl.replace(/\/$/, "");

export const SITE = {
  name: "Hawa Health Care",
  shortName: "Hawa Health Care",
  legalName: "Hawa Health Care Pty Ltd",
  url: SITE_URL,
  locale: "en_AU",
  region: "AU",
  description:
    "Tailored, participant-centred NDIS support across Western Sydney. Same-day or next-day onboarding, 7+ years healthcare experience.",
  longDescription:
    "Hawa Health Care is a registered NDIS service provider delivering fast, reliable, personalised support across Western Sydney and expanding NSW. We offer same-day or next-day onboarding, focus services in Social & Community Participation and Respite Support, and a participant-centred approach grounded in 7+ years of healthcare experience.",
  tagline: "Fast • Reliable • Personalised",
  keywords: [
    "NDIS provider",
    "NDIS support Western Sydney",
    "NDIS Sydney",
    "Social and Community Participation",
    "Respite Support",
    "Personal Care",
    "Domestic Assistance",
    "NDIS registered provider",
    "same-day onboarding NDIS",
    "Hawa Health Care",
    "disability support NSW",
    "support coordination",
  ],
  phone: "+61000000000",
  phoneDisplay: "(00) 0000 0000",
  email: "office@alevenio.com",
  address: {
    street: "",
    locality: "Western Sydney",
    region: "NSW",
    country: "AU",
  },
  serviceArea: ["Western Sydney", "New South Wales"],
  openGraph: {
    images: [
      {
        url: "/openGH/openGH-lg.png",
        width: 1920,
        height: 1080,
        alt: "Hawa Health Care — NDIS Registered Service Provider Australia",
      },
      {
        url: "/openGH/openGH-md.png",
        width: 940,
        height: 908,
        alt: "Hawa Health Care — Tailored NDIS support",
      },
    ],
  },
} as const;
