import type { Metadata } from 'next';
import FAQ from "@/sections/FAQ";
import PatternDivider from "@/components/PatternDivider";
import CTA from "@/sections/CTA";

export const metadata: Metadata = {
  title: 'FAQ',
};

export default function FAQPage() {
  return (
    <>
      <FAQ />
      <PatternDivider />
      <CTA />
      <PatternDivider />
    </>
  );
}
