import About from "@/components/sections/About";
import EligibilityBanner from "@/components/sections/EligibilityBanner";
import FastOnboarding from "@/components/sections/FastOnboarding";
import FinalCta from "@/components/sections/FinalCta";
import Hero from "@/components/sections/Hero";
import Referral from "@/components/sections/Referral";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import WhyUs from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <FastOnboarding />
      <About />
      <Services />
      <EligibilityBanner />
      <WhyUs />
      <WhoWeHelp />
      <Referral />
      <Testimonials />
      <FinalCta />
    </>
  );
}
