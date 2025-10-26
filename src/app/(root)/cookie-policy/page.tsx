import type { Metadata } from 'next';
import Content from '@/sections/Content';
import PatternDivider from '@/components/PatternDivider';
import LegalHero from '@/components/LegalHero';
import { COOKIE_POLICY_LINKS, COOKIE_POLICY_RAW_HTML } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Cookie Policy',
};

export default function CookiePolicyPage() {
  return (
    <>
      <LegalHero
        title="Ignitia Cookie Policy"
        updateDate="Last updated January 7th, 2025"
      />

      <PatternDivider />
      <Content
        rawHTML={COOKIE_POLICY_RAW_HTML}
        tableOfContents={COOKIE_POLICY_LINKS}
      />
    </>
  );
}
