import type { Metadata } from 'next';
import Content from '@/sections/Content';
import PatternDivider from '@/components/PatternDivider';
import LegalHero from '@/components/LegalHero';
import { PRIVACY_POLICY_LINKS, PRIVACY_POLICY_RAW_HTML } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalHero
        title="Ignitia Privacy Policy"
        updateDate="Last updated January 7th, 2025"
      />
      <PatternDivider />
      <Content
        rawHTML={PRIVACY_POLICY_RAW_HTML}
        tableOfContents={PRIVACY_POLICY_LINKS}
      />
    </>
  );
}
