import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/sections/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Hawa Health Care collects, uses, discloses and protects personal and sensitive information under the Australian Privacy Principles and the NDIS Code of Conduct.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "20 May 2026";

const SECTIONS = [
  { id: "scope", label: "Scope" },
  { id: "what-we-collect", label: "What we collect" },
  { id: "how-we-collect", label: "How we collect it" },
  { id: "why-we-collect", label: "Why we collect it" },
  { id: "disclosure", label: "Sharing & disclosure" },
  { id: "cookies", label: "Cookies & analytics" },
  { id: "third-parties", label: "Third-party services" },
  { id: "storage", label: "Storage & security" },
  { id: "your-rights", label: "Your rights" },
  { id: "complaints", label: "Complaints" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact us" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ href: "/", label: "Home" }, { label: "Privacy Policy" }]}
        eyebrow="Your privacy"
        image="/thisisengineering-o6jUolZ7QJk-unsplash.jpg"
        title={
          <>
            Personal information,{" "}
            <span className="text-primary">handled with care</span>.
          </>
        }
        subtitle="How Hawa Health Care collects, uses, discloses and protects your information under the Australian Privacy Principles and NDIS standards."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <aside className="lg:col-span-4">
              <div className="sticky top-28 rounded-[var(--radius-lg)] border border-border bg-surface p-7 shadow-[var(--shadow-xs)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  On this page
                </p>
                <nav aria-label="Privacy policy sections" className="mt-5">
                  <ol className="space-y-2.5 text-sm">
                    {SECTIONS.map((s, i) => (
                      <li key={s.id} className="flex items-baseline gap-3">
                        <span className="text-xs font-semibold text-foreground-subtle">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <a
                          href={`#${s.id}`}
                          className="font-medium text-foreground hover:text-primary"
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
                <p className="mt-7 border-t border-border pt-5 text-xs text-foreground-subtle">
                  Last updated: <span className="font-medium text-foreground">{LAST_UPDATED}</span>
                </p>
              </div>
            </aside>

            <article className="lg:col-span-8">
              <SectionHeading
                eyebrow="Privacy policy"
                title={
                  <>
                    Our commitment to{" "}
                    <span className="text-primary">your information</span>.
                  </>
                }
                subtitle={
                  <>
                    {SITE.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting the
                    privacy of participants, families, support coordinators, employees and
                    visitors to {SITE.url}. This policy explains how we handle personal and
                    sensitive information in accordance with the{" "}
                    <em>Privacy Act 1988 (Cth)</em>, the Australian Privacy Principles
                    (APPs) and the National Disability Insurance Scheme (NDIS) Code of
                    Conduct.
                  </>
                }
              />

              <div className="mt-10 space-y-12 text-base leading-relaxed text-foreground-muted sm:text-[1.0625rem]">
                <Block id="scope" title="1. Scope of this policy">
                  <p>
                    This policy applies to information we collect through our website, our
                    contact and referral forms, by phone, email, in person and through any
                    onboarding or service delivery interaction with Hawa Health Care.
                  </p>
                  <p>
                    By using our website or engaging our services, you consent to the
                    handling of your information as described in this policy.
                  </p>
                </Block>

                <Block id="what-we-collect" title="2. What information we collect">
                  <p>
                    The information we collect depends on how you interact with us. It may
                    include:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>
                      <strong>Contact details</strong> — name, email address, phone
                      number, suburb or address.
                    </li>
                    <li>
                      <strong>Participant details</strong> — date of birth, NDIS
                      participant number, plan management type, support coordinator name
                      and contact, services of interest, urgency of supports needed.
                    </li>
                    <li>
                      <strong>Sensitive information (with your consent)</strong> —
                      disability, health, cultural background and other support-related
                      information required to deliver safe, person-centred care.
                    </li>
                    <li>
                      <strong>Employment information</strong> — for careers enquiries:
                      résumé, qualifications, work rights, references and screening
                      checks where required by law (e.g. NDIS Worker Screening, Working
                      With Children Check).
                    </li>
                    <li>
                      <strong>Website usage data</strong> — IP address, device and
                      browser type, pages visited, referring URL and approximate location.
                    </li>
                  </ul>
                </Block>

                <Block id="how-we-collect" title="3. How we collect it">
                  <p>
                    We collect information directly from you whenever possible — through
                    our enquiry and referral forms, by phone on{" "}
                    <a
                      href={`tel:${SITE.phone}`}
                      className="font-medium text-primary hover:underline"
                    >
                      {SITE.phoneDisplay}
                    </a>
                    , by email at{" "}
                    <a
                      href={`mailto:${SITE.email}`}
                      className="font-medium text-primary hover:underline"
                    >
                      {SITE.email}
                    </a>
                    , or in person during service delivery.
                  </p>
                  <p>
                    With your consent, we may also collect information from third parties
                    such as support coordinators, plan managers, family members,
                    guardians, allied health professionals or the NDIA where this is
                    necessary to arrange or deliver your supports.
                  </p>
                </Block>

                <Block id="why-we-collect" title="4. Why we collect it">
                  <p>We use personal information to:</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>Respond to enquiries and referrals.</li>
                    <li>
                      Assess eligibility, prepare service agreements and onboard
                      participants — including same-day or next-day onboarding.
                    </li>
                    <li>
                      Roster and deliver NDIS supports safely and in line with your
                      goals.
                    </li>
                    <li>
                      Communicate with you, your nominated representatives and your
                      support network.
                    </li>
                    <li>
                      Meet our regulatory, reporting and record-keeping obligations under
                      the NDIS Act, NDIS Practice Standards and other Australian law.
                    </li>
                    <li>
                      Improve our website, services and participant experience.
                    </li>
                    <li>
                      Recruit and screen support workers and other staff.
                    </li>
                  </ul>
                  <p>
                    We will not use your information for a purpose that is unrelated to
                    those above unless you consent, or we are required or permitted by
                    law.
                  </p>
                </Block>

                <Block id="disclosure" title="5. When we share or disclose information">
                  <p>
                    We do not sell your personal information. We may share it with:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>
                      Our support workers, coordinators and administrative staff on a
                      need-to-know basis.
                    </li>
                    <li>
                      Your nominated representatives, plan manager, support coordinator,
                      guardian or family members where authorised.
                    </li>
                    <li>
                      The NDIA, NDIS Quality and Safeguards Commission, or other
                      government bodies where required by law.
                    </li>
                    <li>
                      Emergency services and health professionals where there is a
                      serious threat to life, health or safety.
                    </li>
                    <li>
                      Trusted third-party service providers who help us run our
                      business — for example email, cloud hosting, anti-spam and
                      analytics providers — subject to confidentiality obligations.
                    </li>
                  </ul>
                  <p>
                    Personal information is generally stored and processed in Australia.
                    If we ever need to disclose information overseas (for example to a
                    cloud provider with offshore data centres), we take reasonable steps
                    to ensure recipients handle it consistently with the APPs.
                  </p>
                </Block>

                <Block id="cookies" title="6. Cookies, analytics & tracking pixels">
                  <p>
                    Our website uses cookies and similar technologies to remember
                    preferences, secure form submissions and understand how visitors use
                    the site. These may include first-party cookies set by us and
                    third-party cookies set by analytics or advertising platforms such as
                    Meta (Facebook), Google or similar providers.
                  </p>
                  <p>
                    Tracking pixels and conversion tags allow us to measure the
                    effectiveness of our marketing, understand which pages drive
                    enquiries and show relevant ads to people who have shown interest in
                    NDIS supports. Data collected this way is aggregated and does not
                    identify you personally on its own.
                  </p>
                  <p>
                    You can disable cookies in your browser settings, opt out of
                    interest-based advertising via{" "}
                    <a
                      href="https://www.youronlinechoices.com.au"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-medium text-primary hover:underline"
                    >
                      youronlinechoices.com.au
                    </a>
                    , and manage Meta ad preferences in your Facebook or Instagram
                    account settings. Disabling cookies may affect how parts of the site
                    work.
                  </p>
                </Block>

                <Block id="third-parties" title="7. Third-party services we use">
                  <p>
                    To deliver this website and respond to enquiries we may rely on
                    reputable third-party providers, including:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>
                      <strong>Cloudflare Turnstile</strong> — to verify form submissions
                      are made by a human and not automated spam.
                    </li>
                    <li>
                      <strong>Email and hosting providers</strong> — to deliver
                      enquiries to our team and host the website.
                    </li>
                    <li>
                      <strong>Google Maps</strong> — to display our service area.
                    </li>
                    <li>
                      <strong>Meta (Facebook &amp; Instagram), Google and similar
                      platforms</strong> — for advertising, retargeting and measuring
                      campaign performance.
                    </li>
                  </ul>
                  <p>
                    These providers have their own privacy policies. We encourage you to
                    review them where relevant.
                  </p>
                </Block>

                <Block id="storage" title="8. How we store and protect information">
                  <p>
                    We take reasonable steps to protect personal information from misuse,
                    interference, loss, unauthorised access, modification or disclosure.
                    These measures include access controls, encryption in transit, secure
                    cloud hosting, staff training, confidentiality agreements and regular
                    review of our systems.
                  </p>
                  <p>
                    We keep records only for as long as needed to deliver supports and to
                    meet our legal obligations under the NDIS Act, taxation law and
                    other applicable legislation. When information is no longer needed,
                    we take reasonable steps to securely destroy or de-identify it.
                  </p>
                </Block>

                <Block id="your-rights" title="9. Your rights">
                  <p>Under the Australian Privacy Principles, you have the right to:</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>Ask what personal information we hold about you.</li>
                    <li>Request a copy of your information.</li>
                    <li>Ask us to correct information that is inaccurate or out of date.</li>
                    <li>Withdraw consent to receive marketing communications at any time.</li>
                    <li>
                      Request that we delete information we are not legally required to keep.
                    </li>
                    <li>Be told how to make a privacy complaint.</li>
                  </ul>
                  <p>
                    To exercise any of these rights, contact us using the details below.
                    We may need to verify your identity before acting on a request and
                    will respond within a reasonable time.
                  </p>
                </Block>

                <Block id="complaints" title="10. Privacy complaints">
                  <p>
                    If you believe we have mishandled your information, please contact us
                    first — we take privacy concerns seriously and will work with you to
                    resolve the issue.
                  </p>
                  <p>
                    If you are not satisfied with our response, you can contact the
                    Office of the Australian Information Commissioner (OAIC):
                  </p>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5">
                    <li>
                      Web:{" "}
                      <a
                        href="https://www.oaic.gov.au"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="font-medium text-primary hover:underline"
                      >
                        oaic.gov.au
                      </a>
                    </li>
                    <li>Phone: 1300 363 992</li>
                  </ul>
                  <p>
                    For concerns about NDIS service delivery, you can also contact the
                    NDIS Quality and Safeguards Commission on 1800 035 544 or at{" "}
                    <a
                      href="https://www.ndiscommission.gov.au"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-medium text-primary hover:underline"
                    >
                      ndiscommission.gov.au
                    </a>
                    .
                  </p>
                </Block>

                <Block id="changes" title="11. Changes to this policy">
                  <p>
                    We may update this policy from time to time to reflect changes in
                    our practices or legal obligations. The latest version will always
                    be available on this page with the &ldquo;last updated&rdquo; date at
                    the top. Material changes will be communicated through our website
                    or, where appropriate, directly to participants.
                  </p>
                </Block>

                <Block id="contact" title="12. Contact us">
                  <p>
                    Questions or requests about your privacy can be directed to our
                    Privacy Officer:
                  </p>
                  <div className="mt-4 rounded-[var(--radius-lg)] border border-border bg-surface p-6 text-sm not-italic shadow-[var(--shadow-xs)]">
                    <p className="font-semibold text-foreground">{SITE.legalName}</p>
                    <p className="mt-1">
                      Attn: Privacy Officer
                      <br />
                      {SITE.address.locality}, {SITE.address.region}, Australia
                    </p>
                    <p className="mt-3">
                      Email:{" "}
                      <a
                        href={`mailto:${SITE.email}`}
                        className="font-medium text-primary hover:underline"
                      >
                        {SITE.email}
                      </a>
                      <br />
                      Phone:{" "}
                      <a
                        href={`tel:${SITE.phone}`}
                        className="font-medium text-primary hover:underline"
                      >
                        {SITE.phoneDisplay}
                      </a>
                    </p>
                    <p className="mt-4 text-xs text-foreground-subtle">
                      We aim to respond to privacy enquiries within 30 days.
                    </p>
                  </div>

                  <p className="mt-6">
                    Prefer to talk to a human? Reach us through our{" "}
                    <Link href="/contact" className="font-medium text-primary hover:underline">
                      contact page
                    </Link>{" "}
                    or send a{" "}
                    <Link href="/feedback" className="font-medium text-primary hover:underline">
                      feedback or complaint
                    </Link>{" "}
                    at any time.
                  </p>
                </Block>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}

function Block({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-semibold text-foreground sm:text-[1.6rem]">
        {title}
      </h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}
