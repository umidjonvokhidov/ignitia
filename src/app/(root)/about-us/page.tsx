import Heading from "@/sections/Heading";
import SocialProof from "@/sections/SocialProof";
import PatternDivider from "@/components/PatternDivider";
import About from "@/sections/About";
import OurTeam from "@/sections/OurTeam";
import Testimonial from "@/sections/Testimonial";
import CTA from "@/sections/CTA";

export default function AboutUsPage() {
  return (
    <>
      <Heading />
      <SocialProof />
      <PatternDivider />
      <About />
      <PatternDivider />
      <OurTeam />
      <PatternDivider />
      <Testimonial />
      <PatternDivider />
      <CTA />
      <PatternDivider />
    </>
  );
}
