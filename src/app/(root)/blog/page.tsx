import type { Metadata } from 'next';
import Blog from "@/sections/Blog";
import PatternDivider from "@/components/PatternDivider";
import CTA from "@/sections/CTA";

export const metadata: Metadata = {
  title: 'Blog',
};

export default function BlogPage() {
  return (
    <>
      <Blog />
      <PatternDivider />
      <CTA />
      <PatternDivider />
    </>
  );
}
