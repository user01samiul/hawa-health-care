import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/sections/TestimonialCard";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";

const TESTIMONIALS = [
  {
    quote:
      "From the first call, the team listened and acted. Mum had a worker the next morning and she's been with us ever since.",
    name: "Sarah M.",
    role: "Family member",
    initials: "SM",
    accent: "primary",
  },
  {
    quote:
      "Hawa stepped in when another provider couldn't. Service agreement signed within 24 hours, support active by Monday.",
    name: "James K.",
    role: "Support coordinator",
    initials: "JK",
    accent: "secondary",
  },
  {
    quote:
      "I'm out in the community more than I've ever been. They actually built support around what I want to do, not just what's easy.",
    name: "Daniel R.",
    role: "NDIS participant",
    initials: "DR",
    accent: "primary",
  },
] as const;

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative bg-background py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          align="center"
          eyebrow="What people say"
          title={
            <>
              Trusted by participants, families and{" "}
              <span className="text-primary">coordinators</span>.
            </>
          }
          subtitle="A few of the people who've worked with us. Names changed for privacy — full case studies available on request."
          className="mb-14"
        />

        <div className="mx-auto max-w-md md:hidden">
          <TestimonialsCarousel items={TESTIMONIALS} />
        </div>

        <ul className="hidden gap-5 md:grid md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <li key={t.name}>
              <TestimonialCard testimonial={t} />
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground-subtle">
          <span>NDIS Registered</span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-border-strong" />
          <span>7+ Years Healthcare</span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-border-strong" />
          <span>Western Sydney</span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-border-strong" />
          <span>Same-day Onboarding</span>
        </div>
      </Container>
    </section>
  );
}
