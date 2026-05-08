import About from "@/components/sections/About";
import EligibilityBanner from "@/components/sections/EligibilityBanner";
import FastOnboarding from "@/components/sections/FastOnboarding";
import FinalCta from "@/components/sections/FinalCta";
import Hero from "@/components/sections/Hero";
import SafeCommitments from "@/components/sections/SafeCommitments";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import WhyUs from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FastOnboarding />
      <EligibilityBanner />
      <WhyUs />
      <WhoWeHelp />
      <SafeCommitments />
      <Testimonials />
      <FinalCta />
    </>
  );
}
