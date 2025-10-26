import type { Metadata } from 'next';
import ContactUs from "@/sections/ContactUs";
import PatternDivider from "@/components/PatternDivider";
import CTA from "@/sections/CTA";

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default function ContactUsPage() {
  return (
    <>
      <ContactUs />
      <PatternDivider />
      <CTA />
      <PatternDivider />
    </>
  );
}
