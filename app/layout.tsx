import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const helveticaNow = localFont({
  src: [
    {
      path: "../public/font/HelveticaNowDisplay-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/font/HelveticaNowDisplay-ThinIta.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/font/HelveticaNowDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/font/HelveticaNowDisplay-LightIta.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/font/HelveticaNowDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/HelveticaNowDisplay-RegIta.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/font/HelveticaNowDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/HelveticaNowDisplay-MedIta.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/font/HelveticaNowDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/HelveticaNowDisplay-BoldIta.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/font/HelveticaNowDisplay-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/font/HelveticaNowDisplay-ExtBdIta.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/font/HelveticaNowDisplay-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/font/HelveticaNowDisplay-BlackIta.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-helvetica-now",
});

export const metadata: Metadata = {
  title: {
    default: "Hawa Health Care — Fast, Personalised NDIS Support",
    template: "%s | Hawa Health Care",
  },
  description:
    "Tailored, participant-centred NDIS support across Western Sydney. Same-day or next-day onboarding, 7+ years healthcare experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${helveticaNow.variable} flex min-h-full flex-col bg-background text-foreground antialiased`}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
