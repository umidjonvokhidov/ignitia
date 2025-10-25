import Content from '@/sections/Content';
import PatternDivider from '@/components/PatternDivider';
import LegalHero from '@/components/LegalHero';
import {
  TERMS_AND_CONDITIONS_RAW_HTML,
  TERMS_AND_SERVICES_LINKS,
} from '@/lib/constants';

export default function TermsServicesPage() {
  return (
    <>
      <LegalHero
        title="Ignitia Terms & Condition"
        updateDate="Last updated January 7th, 2025"
      />
      <PatternDivider />
      <Content
        rawHTML={TERMS_AND_CONDITIONS_RAW_HTML}
        tableOfContents={TERMS_AND_SERVICES_LINKS}
      />
    </>
  );
}
