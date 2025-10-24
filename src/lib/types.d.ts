// SVG Type Declarations for SVGR
declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module '*.svg?url' {
  const content: any;
  export default content;
}

declare interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

declare interface DropdownItem {
  title: string;
  description: string;
  href: string;
}

declare interface NavDropdown {
  title: string;
  items: DropdownItem[];
}

declare interface Framework {
  name: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
}

declare interface SocialProof {
  name: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
}

declare interface AboutCard {
  logo: React.ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

declare interface FeatureItem {
  title: string;
  description: string;
}

declare interface IntegrationItem {
  name: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  col?: number;
  row?: number;
  mdcol?: number;
  mdrow?: number;
  lgcol?: number;
  lgrow?: number;
}

declare interface Testimonial {
  avatar: string;
  name: string;
  title: string;
  company: string;
  quote: string;
}

declare interface ContactSectionItem {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  content: string;
  href?: string;
}

declare interface FAQItem {
  title: string;
  description: string;
}

declare interface FAQCategory {
  category: string;
  items: FAQItem[];
}

declare interface PricingPlan {
  name: string;
  description: string;
  price: Number;
  features: string[];
  isPopular?: boolean;
  href: string;
}

declare interface FooterLink {
  name: string;
  href: string;
  isNew?: boolean;
}

declare interface FooterSection {
  title: string;
  links: FooterLink[];
}

declare interface FooterLegalLink {
  name: string;
  href: string;
}

declare interface FooterSocialLink {
  name: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
}

declare interface AboutFeature {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

declare interface SocialMedia {
  facebook?: string;
  x?: string;
  linkedin?: string;
  instagram?: string;
}

declare interface TeamMember {
  avatar: string;
  name: string;
  title: string;
  socialMedia: SocialMedia;
}

declare interface PricingAddon {
  name: string;
  price: string;
}

declare interface PricingPlanMain {
  name: string;
  price: string;
  description: string;
  features: {
    projects: string;
    storage: string;
  };
  addons: PricingAddon[];
  isPopular?: boolean;
  href: string;
}

declare interface PricingAdvantage {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

declare interface Integration {
  logo: React.ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  category: string;
  isBuiltIn?: boolean;
}

declare interface Testimonial {
  avatar: string;
  name: string;
  title: string;
  company: string;
  quote: string;
}

declare interface PricingFeature {
  name: string;
  personal: string | boolean;
  launch: string | boolean;
  scale: string | boolean;
}

declare interface PricingPlanFeatures {
  plans: {
    personal: { name: string; price: string };
    launch: { name: string; price: string };
    scale: { name: string; price: string };
  };
  features: PricingFeature[];
}

declare interface BlogToC {
  id: string;
  title: string;
}

declare interface SocialM {
  title: 'X' | 'LinkedIn' | 'Facebook' | 'instagram' | 'Link';
  link: string;
}

declare interface RegisterPageFeature {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

declare interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
    socialMedia: SocialM[];
  };
  date: string;
  image: string;
  excerpt: string;
  content: string;
  rawHtml: string;
  tableOfContents?: BlogToC[];
  tags: string[];
  readTime: string;
  featured?: boolean;
}

declare interface PolicyLink {
  id: string;
  name: string;
}
