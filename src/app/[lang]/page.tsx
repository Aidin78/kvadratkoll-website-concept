import { Booking } from "@/components/sections/Booking";
import { Faq } from "@/components/sections/Faq";
import { FloorPlanExample } from "@/components/sections/FloorPlanExample";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { WhyUs } from "@/components/sections/WhyUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <Services />
      <Process />
      <WhyUs />
      <FloorPlanExample />
      <Pricing />
      <Faq />
      <Booking />
    </>
  );
}
