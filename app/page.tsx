import Hero from "@/components/sections/Hero";
import FastOnboarding from "@/components/sections/FastOnboarding";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import Referral from "@/components/sections/Referral";
import Testimonials from "@/components/sections/Testimonials";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <FastOnboarding />
      <About />
      <Services />
      <WhyUs />
      <WhoWeHelp />
      <Referral />
      <Testimonials />
      <FinalCta />
    </>
  );
}
