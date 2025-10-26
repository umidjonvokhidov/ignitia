import type { Metadata } from 'next';
import Heading from "@/sections/Heading";
import SocialProof from "@/sections/SocialProof";
import PatternDivider from "@/components/PatternDivider";
import OurTeam from "@/sections/OurTeam";
import Testimonial from "@/sections/Testimonial";
import CTA from "@/sections/CTA";
import AboutMain from "@/sections/AboutMain";

export const metadata: Metadata = {
  title: 'About Us',
};

export default function AboutUsPage() {
  return (
    <>
      <Heading />
      <SocialProof />
      <PatternDivider />
      <AboutMain />
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
