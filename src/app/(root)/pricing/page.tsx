import type { Metadata } from 'next';
import Pricing from "@/sections/Pricing";
import PatternDivider from "@/components/PatternDivider";
import Advantage from "@/sections/Advantage";
import ComparePlan from "@/sections/ComparePlan";
import CTA from "@/sections/CTA";

export const metadata: Metadata = {
  title: 'Pricing',
};

export default function PricingPage() {
  return (
    <>
      <Pricing />
      <PatternDivider />
      <Advantage />
      <PatternDivider />
      <ComparePlan />
      <PatternDivider className="hidden md:block" />
      <CTA />
      <PatternDivider />
    </>
  );
}
