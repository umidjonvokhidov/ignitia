import type { Metadata } from 'next';
import PatternDivider from '@/components/PatternDivider';
import CTA from '@/sections/CTA';
import IntegrationsMain from '@/sections/IntegrationsMain';

export const metadata: Metadata = {
  title: 'Integrations',
};

export default function IntegrationsPage() {
  return (
    <>
      <IntegrationsMain />
      <PatternDivider />
      <CTA />
      <PatternDivider />
    </>
  );
}
