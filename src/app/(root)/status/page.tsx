import type { Metadata } from 'next';
import Heading from "@/sections/Heading";
import Metrics from "@/sections/Metrics";
import Info from "@/sections/Info";
import PatternDivider from "@/components/PatternDivider";

export const metadata: Metadata = {
  title: 'Status',
};

export default function StatusPage() {
  return (
    <>
      <Heading />
      <Metrics />
      <Metrics />
      <Info />
      <Metrics />
      <PatternDivider />
    </>
  );
}
