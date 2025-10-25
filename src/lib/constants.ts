import { SVGProps } from 'react';

// Import Framework icons
import NextJSIcon from '@/public/icons/Nextjs.svg';
import FlutterIcon from '@/public/icons/Flutter.svg';
import JavaScriptIcon from '@/public/icons/Javascript.svg';
import ReactIcon from '@/public/icons/React.svg';
import VueJSIcon from '@/public/icons/VueJS.svg';
import KotlinIcon from '@/public/icons/Kotlin.svg';

import ShieldIcon from '@/public/icons/shield.svg';
import LoaderIcon from '@/public/icons/loader.svg';

// Import Social Proof Company Logos
import CompanyLogo from '@/public/icons/CompanyLogo.svg';
import CompanyLogo1 from '@/public/icons/CompanyLogo-1.svg';
import CompanyLogo2 from '@/public/icons/CompanyLogo-2.svg';
import CompanyLogo3 from '@/public/icons/CompanyLogo-3.svg';
import CompanyLogo4 from '@/public/icons/CompanyLogo-4.svg';
import CompanyLogo5 from '@/public/icons/CompanyLogo-5.svg';
import CompanyLogo6 from '@/public/icons/CompanyLogo-6.svg';

// Import Integration icons
import MessengersIcon from '@/public/icons/Messengers.svg';
import DesignIcon from '@/public/icons/Design.svg';
import ProductivityIcon from '@/public/icons/Productivity.svg';
import Productivity1Icon from '@/public/icons/Productivity-1.svg';
import Messengers1Icon from '@/public/icons/Messengers-1.svg';
import Productivity2Icon from '@/public/icons/Productivity-2.svg';
import Productivity3Icon from '@/public/icons/Productivity-3.svg';
import FinanceIcon from '@/public/icons/Finance.svg';
import Productivity4Icon from '@/public/icons/Productivity-4.svg';
import CodingIcon from '@/public/icons/Coding.svg';
import Productivity5Icon from '@/public/icons/Productivity-5.svg';
import Productivity6Icon from '@/public/icons/Productivity-6.svg';
import Productivity7Icon from '@/public/icons/Productivity-7.svg';

// Import Contact Section Icons
import MailIcon from '@/public/icons/mail.svg';
import FileTextIcon from '@/public/icons/file-text.svg';
import OctagonIcon from '@/public/icons/octagon.svg';

// Import Social Media Icons
import FacebookIcon from '@/public/icons/facebook-2.svg';
import XIcon from '@/public/icons/X.svg';
import LinkedInIcon from '@/public/icons/linkedin.svg';
import YoutubeIcon from '@/public/icons/Youtube.svg';

// Import Company Logo Icons (company-logo with lowercase naming)
import companylogo from '@/public/icons/company-logo.svg';
import companylogo1 from '@/public/icons/company-logo-1.svg';
import companylogo2 from '@/public/icons/company-logo-2.svg';
import companylogo3 from '@/public/icons/company-logo-3.svg';
import companylogo4 from '@/public/icons/company-logo-4.svg';
import companylogo5 from '@/public/icons/company-logo-5.svg';
import companylogo6 from '@/public/icons/company-logo-6.svg';
import companylogo7 from '@/public/icons/company-logo-7.svg';
import companylogo8 from '@/public/icons/company-logo-8.svg';
import companylogo9 from '@/public/icons/company-logo-9.svg';
import companylogo10 from '@/public/icons/company-logo-10.svg';
import companylogo11 from '@/public/icons/company-logo-11.svg';

// Import About Feature Icons
import PocketIcon from '@/public/icons/pocket.svg';
import GlobeIcon from '@/public/icons/globe.svg';
import LockIcon from '@/public/icons/lock.svg';

// Import Pricing Advantage Icons
import LockAdvantageIcon from '@/public/icons/lock.svg';
import UserCircleIcon from '@/public/icons/user-circle.svg';
import KeyIcon from '@/public/icons/key.svg';
import FileIcon from '@/public/icons/file.svg';
import LayersTwoIcon from '@/public/icons/layers-two-01.svg';
import HeadphonesIcon from '@/public/icons/headphones.svg';

import SlackIcon from '@/public/icons/slack.svg';
import Integration1Icon from '@/public/icons/Integration-1.svg';
import ShopifyIcon from '@/public/icons/shopify.svg';
import Integration2Icon from '@/public/icons/Integration-2.svg';
import Integration3Icon from '@/public/icons/Integration-3.svg';
import ZoomIcon from '@/public/icons/zoom.svg';
import Integration4Icon from '@/public/icons/Integration-4.svg';
import Integration5Icon from '@/public/icons/Integration-5.svg';
import Integration6Icon from '@/public/icons/Integration-6.svg';
import Integration7Icon from '@/public/icons/Integration-7.svg';
import PythonIcon from '@/public/icons/python.svg';
import ReactJSIcon from '@/public/icons/react-js.svg';
import VueIcon from '@/public/icons/vue.svg';
import HtmlIcon from '@/public/icons/html.svg';

export const NAVIGATION_LINKS: NavLink[] = [
  {
    label: 'Products',
    href: '/products',
    hasDropdown: true,
  },
  {
    label: 'Solutions',
    href: '/solutions',
    hasDropdown: true,
  },
  {
    label: 'Developers',
    href: '/developers',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
];

export const PRODUCTS_DROPDOWN: NavDropdown = {
  title: 'Products',
  items: [
    {
      title: 'Identity Management',
      description:
        'Comprehensive user identity lifecycle management with seamless UX',
      href: '/products/identity-management',
    },
    {
      title: 'Access Control',
      description:
        'Granular access control and authorization with modular deployment',
      href: '/products/access-control',
    },
    {
      title: 'Single Sign-On (SSO)',
      description: 'Secure, scalable SSO solution for enterprise applications',
      href: '/products/sso',
    },
    {
      title: 'Multi-Factor Authentication',
      description:
        'Advanced MFA with adaptive security and user-friendly experience',
      href: '/products/mfa',
    },
    {
      title: 'API Security',
      description:
        'Secure API access management with pay-as-you-go scalability',
      href: '/products/api-security',
    },
  ],
};

export const SOLUTIONS_DROPDOWN: NavDropdown = {
  title: 'Solutions',
  items: [
    {
      title: 'Enterprise IAM',
      description:
        'Scalable identity management for large organizations with modular deployment',
      href: '/solutions/enterprise',
    },
    {
      title: 'Startup Solutions',
      description:
        'Cost-effective IAM with pay-as-you-go model for growing businesses',
      href: '/solutions/startups',
    },
    {
      title: 'Cloud-Native IAM',
      description: 'Seamless cloud deployment with adaptable architecture',
      href: '/solutions/cloud-native',
    },
    {
      title: 'Healthcare Compliance',
      description: 'HIPAA-compliant identity management with seamless UX',
      href: '/solutions/healthcare',
    },
    {
      title: 'Financial Services',
      description: 'Secure, scalable IAM solutions for financial institutions',
      href: '/solutions/finance',
    },
    {
      title: 'Government & Public Sector',
      description: 'Compliant identity management for government organizations',
      href: '/solutions/government',
    },
  ],
};

export const FRAMEWORKS: Framework[] = [
  {
    name: 'Next.js',
    icon: NextJSIcon,
  },
  {
    name: 'Flutter',
    icon: FlutterIcon,
  },
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'React',
    icon: ReactIcon,
  },
  {
    name: 'Vue.js',
    icon: VueJSIcon,
  },
  {
    name: 'Kotlin',
    icon: KotlinIcon,
  },
];

export const SOCIAL_PROOF_LOGOS: SocialProof[] = [
  {
    name: 'Adobe',
    icon: CompanyLogo,
  },
  {
    name: 'Evernote',
    icon: CompanyLogo1,
  },
  {
    name: 'PayPal',
    icon: CompanyLogo2,
  },
  {
    name: 'Amazon',
    icon: CompanyLogo3,
  },
  {
    name: 'Framer',
    icon: CompanyLogo4,
  },
  {
    name: 'Asana',
    icon: CompanyLogo5,
  },
  {
    name: 'Intercom',
    icon: CompanyLogo6,
  },
];

export const ABOUT_CARDS: AboutCard[] = [
  {
    logo: CompanyLogo3, // Amazon
    title: '50%',
    description: 'higher conversion rates',
  },
  {
    logo: CompanyLogo4, // Framer
    title: '5x',
    description: 'faster onboarding process',
  },
  {
    logo: CompanyLogo6, // Intercom
    title: '30%',
    description: 'reduction in compliance costs',
  },
];

export const FEATURES_ACCORDION: FeatureItem[] = [
  {
    title: 'Seamless Single Sign-On (SSO)',
    description:
      'allowing users to log in once and securely access all connected applications.',
  },
  {
    title: 'Advanced Multi-Factor Authentication (MFA)',
    description:
      'Ignitia employs advanced security measures, including encryption, multi-factor authentication, and compliance with industry standards such as SOC2 and GDPR. These ensure that your data and user identities are always secure.',
  },
  {
    title: 'Flexible Role-Based Access Control (RBAC)',
    description:
      'Ignitia employs advanced security measures, including encryption, multi-factor authentication, and compliance with industry standards such as SOC2 and GDPR. These ensure that your data and user identities are always secure.',
  },
  {
    title: 'Comprehensive Audit Logs & Analytics',
    description:
      'Ignitia employs advanced security measures, including encryption, multi-factor authentication, and compliance with industry standards such as SOC2 and GDPR. These ensure that your data and user identities are always secure.',
  },
];

export const INTEGRATION_ICONS: IntegrationItem[] = [
  {
    name: 'Slack',
    icon: MessengersIcon,
    col: 1,
    row: 1,
    mdcol: 1,
    mdrow: 1,
    lgcol: 1,
    lgrow: 1,
  },
  {
    name: 'Framer',
    icon: DesignIcon,
    col: 3,
    row: 1,
    mdcol: 3,
    mdrow: 1,
    lgcol: 3,
    lgrow: 1,
  },
  {
    name: 'Trello',
    icon: ProductivityIcon,
    col: 3,
    row: 3,
    mdcol: 5,
    mdrow: 1,
    lgcol: 6,
    lgrow: 1,
  },
  {
    name: 'Dropbox',
    icon: Productivity1Icon,
    col: 2,
    row: 2,
    mdcol: 2,
    mdrow: 2,
    lgcol: 7,
    lgrow: 1,
  },
  {
    name: 'Discord',
    icon: Messengers1Icon,
    col: 1,
    row: 3,
    mdcol: 4,
    mdrow: 2,
    lgcol: 10,
    lgrow: 1,
  },
  {
    name: 'Zendesk',
    icon: Productivity2Icon,
    col: 2,
    row: 4,
    mdcol: 1,
    mdrow: 3,
    lgcol: 2,
    lgrow: 2,
  },
  {
    name: 'Mailchimp',
    icon: Productivity3Icon,
    col: 1,
    row: 8,
    mdcol: 5,
    mdrow: 3,
    lgcol: 3,
    lgrow: 2,
  },
  {
    name: 'PayPal',
    icon: FinanceIcon,
    col: 1,
    row: 6,
    mdcol: 1,
    mdrow: 4,
    lgcol: 8,
    lgrow: 2,
  },
  {
    name: 'GitLab',
    icon: Productivity4Icon,
    col: 2,
    row: 3,
    mdcol: 5,
    mdrow: 4,
    lgcol: 10,
    lgrow: 2,
  },
  {
    name: 'React',
    icon: CodingIcon,
    col: 3,
    row: 6,
    mdcol: 2,
    mdrow: 5,
    lgcol: 1,
    lgrow: 3,
  },
  {
    name: 'GitHub',
    icon: Productivity5Icon,
    col: 2,
    row: 9,
    mdcol: 4,
    mdrow: 5,
    lgcol: 4,
    lgrow: 3,
  },
  {
    name: 'Loom',
    icon: Productivity6Icon,
    col: 2,
    row: 7,
    mdcol: 1,
    mdrow: 6,
    lgcol: 6,
    lgrow: 3,
  },
  {
    name: 'Notion',
    icon: Productivity7Icon,
    col: 3,
    row: 8,
    mdcol: 3,
    mdrow: 6,
    lgcol: 9,
    lgrow: 3,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Basic',
    description:
      'Perfect for small teams or startups getting started with secure identity management.',
    price: 49,
    features: ['Basic security features', 'Email support'],
    href: '/plans/basic',
  },
  {
    name: 'Launch',
    description:
      'Designed for growing businesses looking to enhance security and scalability.',
    price: 349,
    features: [
      'Advanced security (MFA, SSO)',
      'Analytics dashboard',
      'Integration with third-party tools',
    ],
    isPopular: true,
    href: '/plans/launch',
  },
  {
    name: 'Scale',
    description:
      'Built for enterprises requiring robust security, compliance, and unlimited scalability.',
    price: 649,
    features: [
      'Advanced security suite (MFA, SSO, biometrics)',
      'Custom workflows',
      'API access for custom solutions',
    ],
    href: '/plans/scale',
  },
];

export const TESTIMONIALSv2: Testimonial[] = [
  {
    avatar: '/images/AvatarTestimonial.png',
    name: 'Sarah Mansy',
    title: 'CTO',
    company: 'TechWave Solutions',
    quote:
      "Ignitia transformed our user authentication process with seamless SSO and robust MFA features. It's incredibly intuitive and scalable, making it the perfect solution for our growing tech company.",
  },
  {
    avatar: '/images/AvatarTestimonial-1.png',
    name: 'James Loki',
    title: 'Director of IT',
    company: 'MediSecure Healthcare',
    quote:
      "Ignitia's comprehensive security features and advanced compliance tools have transformed our healthcare operations. The platform's robust authentication and detailed audit capabilities ensure we meet all regulatory requirements while maintaining seamless access for our medical staff.",
  },
  {
    avatar: '/images/AvatarTestimonial-2.png',
    name: 'Jenny Wilson',
    title: 'Founder',
    company: 'BrightSpark Retail',
    quote:
      "Ignitia has revolutionized our access management across multiple retail locations and systems. The platform's intuitive interface and automated provisioning features have streamlined our operations while scaling perfectly with our expanding business needs.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    avatar: '/images/AvatarTestimonial.png',
    name: 'Sarah Mansy',
    title: 'CTO',
    company: 'TechWave Solutions',
    quote:
      "Ignitia's SSO and MFA are seamless and scalable. Perfect for our growing team!",
  },
  {
    avatar: '/images/AvatarTestimonial-1.png',
    name: 'James Loki',
    title: 'Director of IT',
    company: 'MediSecure Healthcare',
    quote:
      "Ignitia's security features and compliance tools are top-notch. A game-changer!",
  },
  {
    avatar: '/images/AvatarTestimonial-2.png',
    name: 'Jenny Wilson',
    title: 'Founder',
    company: 'BrightSpark Retail',
    quote:
      'Ignitia simplifies access management and scales effortlessly with our needs.',
  },
];

export const CONTACT_SECTIONS: ContactSectionItem[] = [
  {
    icon: MailIcon,
    title: 'Email',
    content: 'support@ignitiateam.com',
  },
  {
    icon: FileTextIcon,
    title: 'Media Inquiries',
    content: 'press@ignitiateam.com',
  },
  {
    icon: OctagonIcon,
    title: 'Brand Kit',
    content: 'Download',
    href: '/brand-kit',
  },
];

export const FAQ_DATA: FAQCategory[] = [
  {
    category: 'General',
    items: [
      {
        title: 'What is Ignitia?',
        description:
          'Ignitia is an identity and access management (IAM) platform designed to simplify user authentication and secure access for businesses.',
      },
      {
        title: 'Who is Ignitia for?',
        description:
          'Ignitia is an identity and access management (IAM) platform designed to simplify user authentication and secure access for businesses.',
      },
      {
        title: 'How do I start using Ignitia?',
        description:
          'Ignitia is an identity and access management (IAM) platform designed to simplify user authentication and secure access for businesses.',
      },
      {
        title: 'Does Ignitia work with cloud-based platforms?',
        description:
          'Ignitia is an identity and access management (IAM) platform designed to simplify user authentication and secure access for businesses.',
      },
      {
        title: 'Can Ignitia be customized for my business?',
        description:
          'Ignitia is an identity and access management (IAM) platform designed to simplify user authentication and secure access for businesses.',
      },
    ],
  },
  {
    category: 'Security',
    items: [
      {
        title: 'How does Ignitia ensure data security?',
        description:
          'Ignitia employs advanced security measures, including encryption, multi-factor authentication, and compliance with industry standards such as SOC2 and GDPR. These ensure that your data and user identities are always secure.',
      },
      {
        title: 'What compliance standards does Ignitia meet?',
        description:
          'Ignitia is designed to meet various compliance standards, including GDPR, HIPAA, and SOC2, ensuring your organization adheres to critical regulatory requirements.',
      },
      {
        title: 'Does Ignitia support Multi-Factor Authentication (MFA)?',
        description:
          'Yes, Ignitia offers robust Multi-Factor Authentication (MFA) options, including biometric, TOTP, and push notifications, to add an extra layer of security to user accounts.',
      },
      {
        title: 'How is user data encrypted?',
        description:
          'All user data is encrypted using industry-standard AES-256 encryption both in transit and at rest, ensuring maximum protection of sensitive information.',
      },
      {
        title: 'Does Ignitia support Single Sign-On (SSO)?',
        description:
          'Yes, Ignitia provides comprehensive SSO capabilities, allowing users to authenticate once and access all connected applications seamlessly.',
      },
    ],
  },
  {
    category: 'Features',
    items: [
      {
        title: 'What are the core features of Ignitia?',
        description:
          "Ignitia's core features include Single Sign-On (SSO), Multi-Factor Authentication (MFA), Role-Based Access Control (RBAC), API security, and comprehensive audit logs.",
      },
      {
        title: 'Can I integrate Ignitia with my existing applications?',
        description:
          'Yes, Ignitia provides extensive API documentation and SDKs to facilitate seamless integration with your existing applications and services.',
      },
      {
        title: 'Does Ignitia offer role-based access control?',
        description:
          "Absolutely. Ignitia's RBAC feature allows you to define granular permissions and roles, ensuring users only access the resources they need for their job functions.",
      },
      {
        title: 'What analytics and reporting features are available?',
        description:
          'Ignitia provides comprehensive analytics dashboards, audit logs, and reporting features to help you monitor user activity and maintain compliance.',
      },
      {
        title: 'Can I customize the user interface?',
        description:
          'Yes, Ignitia offers white-label solutions and customizable UI components to match your brand identity and user experience requirements.',
      },
    ],
  },
  {
    category: 'Pricing',
    items: [
      {
        title: "What is Ignitia's pricing model?",
        description:
          'Ignitia operates on a flexible pay-as-you-go model, allowing you to scale your usage up or down based on your business needs without long-term commitments.',
      },
      {
        title: 'Are there different pricing tiers?',
        description:
          'Yes, Ignitia offers several pricing tiers, including Basic ($49/month), Launch ($349/month), and Scale ($649/month) plans, each tailored to different organizational sizes and feature requirements.',
      },
      {
        title: 'Can I get a free trial?',
        description:
          'Ignitia offers a free tier for basic usage and free trials for our premium plans, allowing you to explore our features before committing.',
      },
      {
        title: 'Is there a discount for annual billing?',
        description:
          'Yes, we offer a 15% discount for annual billing across all our paid plans, helping you save while committing to long-term usage.',
      },
      {
        title: 'What happens if I exceed my plan limits?',
        description:
          "If you exceed your plan limits, we'll notify you and provide options to upgrade or purchase additional capacity to ensure uninterrupted service.",
      },
    ],
  },
  {
    category: 'Support',
    items: [
      {
        title: 'What kind of support does Ignitia offer?',
        description:
          'Ignitia provides comprehensive support, including email support for all plans, priority support for professional tiers, and 24/7 dedicated support for enterprise clients.',
      },
      {
        title: 'Where can I find documentation?',
        description:
          'Our extensive documentation, including API guides, tutorials, and FAQs, is available in the Developers section of our website.',
      },
      {
        title: 'How can I contact support?',
        description:
          'You can contact our support team via email at support@ignitiateam.com or through the contact form on our website.',
      },
      {
        title: 'Do you offer training and onboarding?',
        description:
          'Yes, we provide comprehensive onboarding assistance, training sessions, and best practice guides to help your team get the most out of Ignitia.',
      },
      {
        title: 'What is your response time for support requests?',
        description:
          'Response times vary by plan: Basic plans receive responses within 24 hours, Launch plans within 8 hours, and Scale plans receive priority support with 2-hour response times.',
      },
    ],
  },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Products',
    links: [
      { name: 'User Management', href: '/products/user-management' },
      { name: 'Product Overview', href: '/products/overview' },
      { name: 'Login & Authentication', href: '/products/authentication' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { name: 'Deployment Options', href: '/solutions/deployment' },
      { name: 'Migrate to Ignitia', href: '/solutions/migration' },
      { name: 'Scalability', href: '/solutions/scalability' },
      { name: 'Security', href: '/solutions/security' },
      { name: 'Privacy & GDPR Compliance', href: '/solutions/privacy' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { name: 'Documentation', href: '/developers/docs' },
      { name: 'Changelog', href: '/developers/changelog', isNew: true },
      { name: 'Open Source', href: '/developers/open-source' },
      { name: 'Status', href: '/developers/status' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Customer Stories', href: '/customer-stories' },
    ],
  },
];

export const FOOTER_LEGAL_LINKS: FooterLegalLink[] = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Condition', href: '/terms-conditions' },
  { name: 'Cookie Policy', href: '/cookie-policy' },
];

export const FOOTER_SOCIAL_LINKS: FooterSocialLink[] = [
  {
    name: 'Facebook',
    icon: FacebookIcon,
    href: 'https://facebook.com/ignitia',
  },
  {
    name: 'X (Twitter)',
    icon: XIcon,
    href: 'https://x.com/ignitia',
  },
  {
    name: 'LinkedIn',
    icon: LinkedInIcon,
    href: 'https://linkedin.com/company/ignitia',
  },
  {
    name: 'YouTube',
    icon: YoutubeIcon,
    href: 'https://youtube.com/@ignitia',
  },
];

export const COMPANY_LIST: React.ComponentType<SVGProps<SVGSVGElement>>[] = [
  companylogo,
  companylogo1,
  companylogo2,
  companylogo3,
  companylogo4,
  companylogo5,
  companylogo6,
  companylogo7,
  companylogo8,
  companylogo9,
  companylogo10,
  companylogo11,
];

export const ABOUT_FEATURES: AboutFeature[] = [
  {
    icon: PocketIcon,
    title: 'Reliable',
    description:
      'Ignitia has built scalable infrastructure to support your growth.',
  },
  {
    icon: GlobeIcon,
    title: 'Scalable',
    description: 'Our failover and deduplication features make scaling easy.',
  },
  {
    icon: LockIcon,
    title: 'Secure',
    description:
      'Ignitia ensures strong security and helps you meet industry standards.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    avatar: '/images/TeamAvatar.png',
    name: 'Sarah Mansy',
    title: 'Chief Executive Officer (CEO)',
    socialMedia: {
      facebook: 'https://facebook.com/sarahmansy',
      x: 'https://x.com/sarahmansy',
      linkedin: 'https://linkedin.com/in/sarahmansy',
    },
  },
  {
    avatar: '/images/TeamAvatar-1.png',
    name: 'James Loki',
    title: 'Chief Technology Officer (CTO)',
    socialMedia: {
      instagram: 'https://instagram.com/jamesloki',
      facebook: 'https://facebook.com/jamesloki',
      x: 'https://x.com/jamesloki',
      linkedin: 'https://linkedin.com/in/jamesloki',
    },
  },
  {
    avatar: '/images/TeamAvatar-2.png',
    name: 'Jenny Wilson',
    title: 'Chief Operating Officer (COO)',
    socialMedia: {
      facebook: 'https://facebook.com/jennywilson',
      x: 'https://x.com/jennywilson',
      linkedin: 'https://linkedin.com/in/jennywilson',
    },
  },
  {
    avatar: '/images/TeamAvatar-3.png',
    name: 'Robert Fox',
    title: 'Head of Product Development',
    socialMedia: {
      instagram: 'https://instagram.com/robertfox',
      facebook: 'https://facebook.com/robertfox',
      x: 'https://x.com/robertfox',
      linkedin: 'https://linkedin.com/in/robertfox',
    },
  },
  {
    avatar: '/images/TeamAvatar-4.png',
    name: 'Esther Howard',
    title: 'Director of Customer Success',
    socialMedia: {
      facebook: 'https://facebook.com/estherhoward',
      x: 'https://x.com/estherhoward',
      linkedin: 'https://linkedin.com/in/estherhoward',
    },
  },
  {
    avatar: '/images/TeamAvatar-5.png',
    name: 'Brooklyn Simmons',
    title: 'Senior Security Architect',
    socialMedia: {
      instagram: 'https://instagram.com/brooklynsimmons',
      facebook: 'https://facebook.com/brooklynsimmons',
      x: 'https://x.com/brooklynsimmons',
      linkedin: 'https://linkedin.com/in/brooklynsimmons',
    },
  },
  {
    avatar: '/images/TeamAvatar-6.png',
    name: 'Guy Hawkins',
    title: 'Marketing Manager',
    socialMedia: {
      instagram: 'https://instagram.com/guyhawkins',
      facebook: 'https://facebook.com/guyhawkins',
      x: 'https://x.com/guyhawkins',
      linkedin: 'https://linkedin.com/in/guyhawkins',
    },
  },
  {
    avatar: '/images/TeamAvatar-7.png',
    name: 'Leslie Alexander',
    title: 'Software Engineer',
    socialMedia: {
      facebook: 'https://facebook.com/lesliealexander',
      x: 'https://x.com/lesliealexander',
      linkedin: 'https://linkedin.com/in/lesliealexander',
    },
  },
];

export const PRICING_PLAN_MAIN: PricingPlanMain[] = [
  {
    name: 'Basic',
    price: '$49 / month',
    description:
      'Perfect for small teams or startups getting started with secure identity management.',
    features: {
      projects: '10 projects',
      storage: '0.5 GB storage',
    },
    addons: [
      {
        name: 'Private Cloud',
        price: '+$10 / month',
      },
      {
        name: 'Adaptive MFA',
        price: '+$10 / month',
      },
    ],
    href: '/plans/basic',
  },
  {
    name: 'Launch',
    price: '$369 / month',
    description:
      'Designed for growing businesses looking to enhance security and scalability.',
    features: {
      projects: '100 projects',
      storage: '15 GB storage',
    },
    addons: [
      {
        name: 'Private Cloud',
        price: '+$10 / month',
      },
      {
        name: 'Adaptive MFA',
        price: '+$10 / month',
      },
    ],
    isPopular: true,
    href: '/plans/launch',
  },
  {
    name: 'Scale',
    price: '$649 / month',
    description:
      'Built for enterprises requiring robust security, compliance, and unlimited scalability.',
    features: {
      projects: '100 projects',
      storage: '50 GB storage',
    },
    addons: [
      {
        name: 'Private Cloud',
        price: '+$10 / month',
      },
      {
        name: 'Adaptive MFA',
        price: '+$10 / month',
      },
    ],
    href: '/plans/scale',
  },
];

export const PRICING_ADVANTAGES: PricingAdvantage[] = [
  {
    icon: LockAdvantageIcon,
    title: 'Multi-Factor Authentication (MFA)',
    description:
      'Ensure top-notch security for your organization with MFA included in every plan. Protect user accounts with SMS, email, or app-based authentication for an additional layer of security.',
  },
  {
    icon: UserCircleIcon,
    title: 'Customizable User Roles',
    description:
      'Manage access effectively with customizable user roles. Assign permissions tailored to individual or team needs, ensuring the right people access the right resources.',
  },
  {
    icon: KeyIcon,
    title: 'Single Sign-On (SSO)',
    description:
      'Simplify user access with SSO integration across all major platforms. Enable seamless and secure login experiences while reducing password management overhead.',
  },
  {
    icon: FileIcon,
    title: 'Comprehensive Audit Logs',
    description:
      'Maintain transparency and compliance with detailed audit logs. Track user activities, login attempts, and security events across your platform for peace of mind.',
  },
  {
    icon: LayersTwoIcon,
    title: 'Seamless App Integrations',
    description:
      "Connect effortlessly with your favorite tools and platforms. Our wide array of integrations ensures your team's workflows remain uninterrupted and efficient.",
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description:
      'Get assistance whenever you need it with round-the-clock support included in all plans. Our dedicated team is here to resolve issues and answer your questions quickly.',
  },
];

export const PRICING_PLAN_FEATURES: PricingPlanFeatures = {
  plans: {
    personal: { name: 'Personal', price: 'Free' },
    launch: { name: 'Launch', price: '$349 / month' },
    scale: { name: 'Scale', price: '$649 / month' },
  },
  features: [
    {
      name: 'Password',
      personal: true,
      launch: true,
      scale: true,
    },
    {
      name: 'Passkeys',
      personal: true,
      launch: true,
      scale: true,
    },
    {
      name: 'Social Connections',
      personal: '3',
      launch: 'Unlimited',
      scale: 'Unlimited',
    },
    {
      name: 'Custom Social Connections',
      personal: true,
      launch: true,
      scale: true,
    },
    {
      name: 'Multi-Factor Authentication',
      personal: true,
      launch: true,
      scale: true,
    },
    {
      name: 'Custom Profile Fields',
      personal: true,
      launch: true,
      scale: true,
    },
    {
      name: 'Account Linking',
      personal: true,
      launch: true,
      scale: true,
    },
    {
      name: 'User Import',
      personal: true,
      launch: true,
      scale: true,
    },
    {
      name: 'Bulk User Import',
      personal: true,
      launch: true,
      scale: true,
    },
    {
      name: 'Fully Managed Captcha',
      personal: false,
      launch: true,
      scale: true,
    },
    {
      name: 'GDPR-compliant EU Data Storage',
      personal: false,
      launch: true,
      scale: true,
    },
    {
      name: 'Brute Force Protection',
      personal: true,
      launch: true,
      scale: true,
    },
    {
      name: 'Custom Domains',
      personal: false,
      launch: true,
      scale: true,
    },
    {
      name: 'Included Custom Domains',
      personal: false,
      launch: '10',
      scale: '20',
    },
    {
      name: 'Multi-Language',
      personal: true,
      launch: true,
      scale: true,
    },
    {
      name: 'Community Support',
      personal: true,
      launch: true,
      scale: true,
    },
    {
      name: 'VIP Community',
      personal: false,
      launch: true,
      scale: true,
    },
    {
      name: 'Standard Support',
      personal: false,
      launch: true,
      scale: true,
    },
    {
      name: 'User Data Export',
      personal: true,
      launch: true,
      scale: true,
    },
  ],
};

// Helper function to generate URL-friendly IDs from titles
const generateId = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'caching-keys-iam-security',
    title: 'The Perils of Caching Keys in IAM: A Security Nightmare',
    category: 'Security',
    author: {
      name: 'James Loki',
      handle: '@jamesloki',
      avatar: '/images/TeamAvatar-1.png',
      socialMedia: [
        { title: 'X', link: 'https://twitter.com/jamesloki' },
        { title: 'LinkedIn', link: 'https://linkedin.com/in/jamesloki' },
        { title: 'Link', link: 'https://github.com/jamesloki' },
      ],
    },
    date: 'December 24, 2024',
    image: '/images/BlogImg.jpg',
    excerpt:
      'Caching authentication keys in IAM systems can transform a security architecture from a fortress into a house of cards. Learn why security-first strategies should always take precedence over performance gains.',
    content:
      'Caching seems like an attractive performance optimization in IAM for faster authentication and reduced database load. However, caching authentication and authorization keys can transform a security architecture from a fortress into a house of cards...',
    rawHtml: `
      <div>
        <p>Caching seems like an attractive performance optimization in IAM for faster authentication and reduced database load. However, caching authentication and authorization keys can transform a security architecture from a fortress into a house of cards.</p>
        
        <h2 id="stale-permissions-persist">Stale permissions persist</h2>
        <p>Cached authentication keys can lead to unauthorized access if an employee's roles change or they are terminated, as access might persist until the cache expires, even after revocation.</p>
        
        <h2 id="instant-compromise-surface">Instant compromise surface</h2>
        <p>If an attacker gains access to a cached key store, they immediately get a comprehensive map of potential access points, dramatically expanding the attack surface.</p>
        
        <h2 id="technical-vulnerabilities-in-key-caching">Technical Vulnerabilities in Key Caching</h2>
        <p><strong>Token Replay and Replay Attacks</strong> Intercepted or stolen cached keys can be reused multiple times before cache invalidation, granting extended unauthorized access.</p>
        
        <p><strong>Race Conditions in Distributed Systems</strong> In distributed environments, cached keys can cause complex race conditions where permission updates don't immediately propagate across all cached instances, leading to inconsistent and unpredictable access control.</p>
        
        <p><strong>Insufficient Hashing Methods leading to Credential Bypass</strong> Choosing the right parameters for computing hash keys is crucial. Using methods like CRC32, which has a small target space, can lead to key collisions and credential bypass scenarios.</p>
        
        <h2 id="best-practices-for-secure-authentication">Best practices for secure authentication</h2>
        <p>Instead of caching keys, implement these security-first strategies:</p>
        <ul>
          <li><strong>Short-lived Tokens:</strong> Use time-bound access tokens with minimal lifespans.</li>
          <li><strong>Real-time Verification:</strong> Validate permissions at each critical access point.</li>
          <li><strong>Centralized Authorization:</strong> Maintain a single source of truth for access rights.</li>
          <li><strong>Dynamic Permission Checks:</strong> Evaluate permissions in real-time during each request.</li>
        </ul>
        
        <h2 id="performance-considerations">Performance considerations</h2>
        <p>The post addresses the concern about performance, stating that modern IAM systems and cloud infrastructure have evolved. The performance hit of real-time verification is minimal compared to the "catastrophic potential of a security breach." Prioritizing security-first strategies builds a robust and future-proof access control system.</p>
        
        <h2 id="practical-implementation-strategies">Practical implementation strategies</h2>
        <p>Strategies proven to work for security and efficiency:</p>
        <ul>
          <li>Use token-based authentication with short expiration times.</li>
          <li>Implement refresh mechanisms that require re-authentication.</li>
          <li>Store minimal, encrypted metadata instead of full permission sets.</li>
          <li>Leverage distributed caching with immediate invalidation capabilities.</li>
        </ul>
        
        <h2 id="conclusion">Conclusion</h2>
        <p>Caching authentication keys is described as a "shortcut that leads to a potential security nightmare." In the current era of cyber threats, IAM systems should prioritize real-time, dynamic access control over "marginal performance gains."</p>
        <p>The final advice is: "When it comes to security, convenience can be the enemy of protection. Strike this balance wisely."</p>
      </div>
    `,
    tableOfContents: [
      {
        id: 'stale-permissions-persist',
        title: 'Stale permissions persist',
      },
      {
        id: 'instant-compromise-surface',
        title: 'Instant compromise surface',
      },
      {
        id: 'technical-vulnerabilities-in-key-caching',
        title: 'Technical vulnerabilities in key caching',
      },
      {
        id: 'best-practices-for-secure-authentication',
        title: 'Best practices for secure authentication',
      },
      {
        id: 'performance-considerations',
        title: 'Performance considerations',
      },
      {
        id: 'practical-implementation-strategies',
        title: 'Practical implementation strategies',
      },
      {
        id: 'conclusion',
        title: 'Conclusion',
      },
    ],
    tags: ['IAM', 'Security', 'Authentication', 'Caching', 'Best Practices'],
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 'passkeys-safer-passwords',
    title: 'Passkeys, a safer and simpler alternative to passwords',
    category: 'Auth & identity',
    author: {
      name: 'Jenny Wilson',
      handle: '@jennywilson',
      avatar: '/images/TeamAvatar-2.png',
      socialMedia: [
        { title: 'X', link: 'https://twitter.com/jennywilson' },
        { title: 'LinkedIn', link: 'https://linkedin.com/in/jennywilson' },
        { title: 'Link', link: 'https://medium.com/@jennywilson' },
      ],
    },
    date: 'December 20, 2024',
    image: '/images/BlogImg-1.jpg',
    excerpt:
      'Discover how passkeys are revolutionizing authentication by eliminating passwords while providing stronger security through biometric and device-based authentication.',
    content:
      'Passkeys represent a paradigm shift in digital authentication, moving away from the traditional password-based system that has plagued users and security teams for decades...',
    rawHtml: `
      <div>
        <p>Passkeys represent a paradigm shift in digital authentication, moving away from the traditional password-based system that has plagued users and security teams for decades.</p>
        
        <h2 id="what-are-passkeys">What are Passkeys?</h2>
        <p>Passkeys are a new authentication method that uses public-key cryptography to provide secure, passwordless authentication. They eliminate the need for users to remember complex passwords while providing stronger security than traditional authentication methods.</p>
        
        <h2 id="how-passkeys-work">How Passkeys Work</h2>
        <p>When you create a passkey, your device generates a unique cryptographic key pair. The private key stays securely on your device, while the public key is shared with the service you're authenticating to. This creates a secure, phishing-resistant authentication method.</p>
        
        <h2 id="benefits-of-passkeys">Benefits of Passkeys</h2>
        <ul>
          <li><strong>Enhanced Security:</strong> Resistant to phishing, credential stuffing, and other common attacks</li>
          <li><strong>Better User Experience:</strong> No need to remember or type passwords</li>
          <li><strong>Cross-Platform:</strong> Works across devices and platforms</li>
          <li><strong>Biometric Integration:</strong> Uses fingerprint, face recognition, or device PIN</li>
        </ul>
        
        <h2 id="implementation-considerations">Implementation Considerations</h2>
        <p>Implementing passkeys requires careful planning around user onboarding, device management, and fallback authentication methods. Organizations should consider gradual rollout strategies and comprehensive user education programs.</p>
      </div>
    `,
    tableOfContents: [
      {
        id: 'what-are-passkeys',
        title: 'What are Passkeys?',
      },
      {
        id: 'how-passkeys-work',
        title: 'How Passkeys Work',
      },
      {
        id: 'benefits-of-passkeys',
        title: 'Benefits of Passkeys',
      },
      {
        id: 'implementation-considerations',
        title: 'Implementation Considerations',
      },
    ],
    tags: ['Passkeys', 'Biometric', 'Authentication', 'Security', 'UX'],
    readTime: '6 min read',
  },
  {
    id: 'engineering-career-ladder',
    title: 'So you want to write an Engineering career ladder?',
    category: 'Company',
    author: {
      name: 'Robert Fox',
      handle: '@robertfox',
      avatar: '/images/TeamAvatar-3.png',
      socialMedia: [
        { title: 'LinkedIn', link: 'https://linkedin.com/in/robertfox' },
        { title: 'X', link: 'https://twitter.com/robertfox' },
        { title: 'Link', link: 'https://dev.to/robertfox' },
      ],
    },
    date: 'December 19, 2024',
    image: '/images/BlogImg-2.jpg',
    excerpt:
      'A comprehensive guide to creating effective engineering career ladders that promote growth, clarity, and retention in your development teams.',
    content:
      'Creating an engineering career ladder is one of the most impactful things you can do for your development team. It provides clarity, motivation, and a clear path for growth...',
    rawHtml: `
      <div>
        <p>Creating an engineering career ladder is one of the most impactful things you can do for your development team. It provides clarity, motivation, and a clear path for growth that benefits both individual contributors and the organization as a whole.</p>
        
        <h2 id="why-career-ladders-matter">Why Career Ladders Matter</h2>
        <p>A well-defined career ladder helps engineers understand their current position, what's expected of them, and how they can advance. This clarity reduces uncertainty and provides motivation for professional development.</p>
        
        <h2 id="key-components-of-a-career-ladder">Key Components of a Career Ladder</h2>
        <ul>
          <li><strong>Level Definitions:</strong> Clear descriptions of each level and expectations</li>
          <li><strong>Skills Matrix:</strong> Technical and soft skills required at each level</li>
          <li><strong>Promotion Criteria:</strong> Objective measures for advancement</li>
          <li><strong>Compensation Ranges:</strong> Salary bands aligned with levels</li>
        </ul>
        
        <h2 id="implementation-best-practices">Implementation Best Practices</h2>
        <p>Start with your current team structure and work backwards. Gather input from engineers at all levels, benchmark against industry standards, and ensure the ladder supports both individual contributor and management tracks.</p>
      </div>
    `,
    tableOfContents: [
      {
        id: 'why-career-ladders-matter',
        title: 'Why Career Ladders Matter',
      },
      {
        id: 'key-components-of-a-career-ladder',
        title: 'Key Components of a Career Ladder',
      },
      {
        id: 'implementation-best-practices',
        title: 'Implementation Best Practices',
      },
    ],
    tags: [
      'Engineering',
      'Career Development',
      'Management',
      'HR',
      'Leadership',
    ],
    readTime: '10 min read',
  },
  {
    id: 'api-rate-limiting-techniques',
    title: 'Top techniques for effective API rate limiting',
    category: 'Auth & identity',
    author: {
      name: 'Alex Kim',
      handle: '@alexkim',
      avatar: '/images/TeamAvatar-4.png',
      socialMedia: [
        { title: 'Link', link: 'https://github.com/alexkim' },
        { title: 'LinkedIn', link: 'https://linkedin.com/in/alexkim' },
        { title: 'X', link: 'https://twitter.com/alexkim' },
      ],
    },
    date: 'December 20, 2024',
    image: '/images/BlogImg-3.jpg',
    excerpt:
      'Learn the most effective strategies for implementing API rate limiting to protect your services from abuse while maintaining optimal performance for legitimate users.',
    content:
      'API rate limiting is a critical component of modern web security and performance management. When implemented correctly, it protects your services from abuse while ensuring legitimate users have optimal access...',
    rawHtml: `
      <div>
        <p>API rate limiting is a critical component of modern web security and performance management. When implemented correctly, it protects your services from abuse while ensuring legitimate users have optimal access.</p>
        
        <h2 id="token-bucket-algorithm">Token Bucket Algorithm</h2>
        <p>The token bucket algorithm provides a flexible approach to rate limiting by allowing bursts of traffic while maintaining an overall rate limit. Tokens are added to a bucket at a fixed rate, and requests consume tokens from the bucket.</p>
        
        <h2 id="sliding-window-log">Sliding Window Log</h2>
        <p>This approach maintains a log of request timestamps within a sliding time window, providing accurate rate limiting that prevents clients from exceeding limits by spreading requests evenly.</p>
        
        <h2 id="distributed-rate-limiting">Distributed Rate Limiting</h2>
        <p>For microservices architectures, distributed rate limiting using Redis or similar technologies ensures consistent enforcement across multiple service instances.</p>
        
        <h2 id="adaptive-rate-limiting">Adaptive Rate Limiting</h2>
        <p>Advanced implementations can dynamically adjust rate limits based on client behavior, server load, and other contextual factors to provide optimal user experience while maintaining security.</p>
      </div>
    `,
    tableOfContents: [
      {
        id: 'token-bucket-algorithm',
        title: 'Token Bucket Algorithm',
      },
      {
        id: 'sliding-window-log',
        title: 'Sliding Window Log',
      },
      {
        id: 'distributed-rate-limiting',
        title: 'Distributed Rate Limiting',
      },
      {
        id: 'adaptive-rate-limiting',
        title: 'Adaptive Rate Limiting',
      },
    ],
    tags: ['API', 'Rate Limiting', 'Security', 'Performance', 'Best Practices'],
    readTime: '7 min read',
  },
  {
    id: 'zero-trust-architecture',
    title: 'Building a Zero Trust Architecture for Modern IAM',
    category: 'Security',
    author: {
      name: 'Emma Thompson',
      handle: '@emmathompson',
      avatar: '/images/TeamAvatar-5.png',
      socialMedia: [
        { title: 'LinkedIn', link: 'https://linkedin.com/in/emmathompson' },
        { title: 'X', link: 'https://twitter.com/emmathompson' },
        { title: 'Link', link: 'https://medium.com/@emmathompson' },
      ],
    },
    date: 'December 18, 2024',
    image: '/images/BlogImg-4.jpg',
    excerpt:
      'Explore how to implement Zero Trust principles in your identity and access management strategy to create a more secure and resilient security posture.',
    content:
      'Zero Trust Architecture represents a fundamental shift in how we approach security, moving from perimeter-based defenses to a model where trust is never assumed and always verified...',
    rawHtml: `
      <div>
        <p>Zero Trust Architecture represents a fundamental shift in how we approach security, moving from perimeter-based defenses to a model where trust is never assumed and always verified.</p>
        
        <h2 id="core-principles-of-zero-trust">Core Principles of Zero Trust</h2>
        <ul>
          <li><strong>Verify Explicitly:</strong> Authenticate and authorize based on all available data points</li>
          <li><strong>Use Least Privilege Access:</strong> Limit user access with just-in-time and just-enough-access principles</li>
          <li><strong>Assume Breach:</strong> Design systems with the assumption that attackers are already inside</li>
        </ul>
        
        <h2 id="iam-components-for-zero-trust">IAM Components for Zero Trust</h2>
        <p>Modern IAM systems must support continuous authentication, risk-based access decisions, and micro-segmentation to effectively implement Zero Trust principles.</p>
        
        <h2 id="implementation-roadmap">Implementation Roadmap</h2>
        <p>Start with identity governance, implement strong authentication, then progressively add context-aware access controls and continuous monitoring capabilities.</p>
      </div>
    `,
    tableOfContents: [
      {
        id: 'core-principles-of-zero-trust',
        title: 'Core Principles of Zero Trust',
      },
      {
        id: 'iam-components-for-zero-trust',
        title: 'IAM Components for Zero Trust',
      },
      {
        id: 'implementation-roadmap',
        title: 'Implementation Roadmap',
      },
    ],
    tags: ['Zero Trust', 'IAM', 'Security', 'Architecture', 'Compliance'],
    readTime: '9 min read',
  },
  {
    id: 'multi-factor-authentication-guide',
    title: 'The Complete Guide to Multi-Factor Authentication',
    category: 'Auth & identity',
    author: {
      name: 'David Park',
      handle: '@davidpark',
      avatar: '/images/TeamAvatar-6.png',
      socialMedia: [
        { title: 'X', link: 'https://twitter.com/davidpark' },
        { title: 'LinkedIn', link: 'https://linkedin.com/in/davidpark' },
        { title: 'Link', link: 'https://dev.to/davidpark' },
      ],
    },
    date: 'December 17, 2024',
    image: '/images/BlogImg-5.jpg',
    excerpt:
      "Everything you need to know about implementing and managing multi-factor authentication to significantly enhance your organization's security posture.",
    content:
      'Multi-Factor Authentication (MFA) has become a cornerstone of modern cybersecurity, providing an additional layer of protection beyond traditional passwords...',
    rawHtml: `
      <div>
        <p>Multi-Factor Authentication (MFA) has become a cornerstone of modern cybersecurity, providing an additional layer of protection beyond traditional passwords.</p>
        
        <h2 id="mfa-factors-explained">MFA Factors Explained</h2>
        <ul>
          <li><strong>Knowledge Factors:</strong> Something you know (passwords, PINs)</li>
          <li><strong>Possession Factors:</strong> Something you have (security keys, mobile devices)</li>
          <li><strong>Inherence Factors:</strong> Something you are (biometrics, behavioral patterns)</li>
        </ul>
        
        <h2 id="choosing-the-right-mfa-methods">Choosing the Right MFA Methods</h2>
        <p>Evaluate factors based on security requirements, user experience, deployment complexity, and total cost of ownership to select the optimal MFA solution for your organization.</p>
        
        <h2 id="mfa-implementation-best-practices">MFA Implementation Best Practices</h2>
        <p>Phased rollout, comprehensive user education, and fallback mechanisms are essential for successful MFA implementation that balances security and usability.</p>
      </div>
    `,
    tableOfContents: [
      {
        id: 'mfa-factors-explained',
        title: 'MFA Factors Explained',
      },
      {
        id: 'choosing-the-right-mfa-methods',
        title: 'Choosing the Right MFA Methods',
      },
      {
        id: 'mfa-implementation-best-practices',
        title: 'MFA Implementation Best Practices',
      },
    ],
    tags: [
      'MFA',
      'Authentication',
      'Security',
      'Best Practices',
      'Implementation',
    ],
    readTime: '12 min read',
  },
  {
    id: 'cloud-security-compliance',
    title: 'Navigating Cloud Security Compliance in 2024',
    category: 'Security',
    author: {
      name: 'Lisa Wang',
      handle: '@lisawang',
      avatar: '/images/TeamAvatar-7.png',
      socialMedia: [
        { title: 'LinkedIn', link: 'https://linkedin.com/in/lisawang' },
        { title: 'X', link: 'https://twitter.com/lisawang' },
        { title: 'Link', link: 'https://github.com/lisawang' },
      ],
    },
    date: 'December 16, 2024',
    image: '/images/BlogImg-6.jpg',
    excerpt:
      'Stay ahead of evolving compliance requirements with our comprehensive guide to cloud security standards and best practices for 2024.',
    content:
      'As organizations continue their digital transformation journey, cloud security compliance has become more complex and critical than ever before...',
    rawHtml: `
      <div>
        <p>As organizations continue their digital transformation journey, cloud security compliance has become more complex and critical than ever before.</p>
        
        <h2 id="key-compliance-frameworks">Key Compliance Frameworks</h2>
        <ul>
          <li><strong>GDPR:</strong> Data protection and privacy for EU citizens</li>
          <li><strong>SOC 2:</strong> Security, availability, processing integrity</li>
          <li><strong>ISO 27001:</strong> Information security management</li>
          <li><strong>HIPAA:</strong> Healthcare data protection</li>
        </ul>
        
        <h2 id="cloud-specific-challenges">Cloud-Specific Challenges</h2>
        <p>Shared responsibility models, data residency requirements, and continuous compliance monitoring present unique challenges in cloud environments that require specialized approaches.</p>
        
        <h2 id="automated-compliance-monitoring">Automated Compliance Monitoring</h2>
        <p>Leverage cloud-native tools and third-party solutions to implement continuous compliance monitoring, automated reporting, and real-time alerting for compliance violations.</p>
      </div>
    `,
    tableOfContents: [
      {
        id: 'key-compliance-frameworks',
        title: 'Key Compliance Frameworks',
      },
      {
        id: 'cloud-specific-challenges',
        title: 'Cloud-Specific Challenges',
      },
      {
        id: 'automated-compliance-monitoring',
        title: 'Automated Compliance Monitoring',
      },
    ],
    tags: ['Cloud Security', 'Compliance', 'GDPR', 'SOC2', 'Best Practices'],
    readTime: '11 min read',
  },
  {
    id: 'developer-experience-iam',
    title: 'Improving Developer Experience with Modern IAM',
    category: 'Company',
    author: {
      name: 'Ryan Foster',
      handle: '@ryanfoster',
      avatar: '/images/TeamAvatar-8.png',
      socialMedia: [
        { title: 'X', link: 'https://twitter.com/ryanfoster' },
        { title: 'LinkedIn', link: 'https://linkedin.com/in/ryanfoster' },
        { title: 'Link', link: 'https://medium.com/@ryanfoster' },
      ],
    },
    date: 'December 15, 2024',
    image: '/images/BlogImg-7.jpg',
    excerpt:
      'Learn how to balance security requirements with developer productivity by implementing IAM solutions that developers actually want to use.',
    content:
      'Developer Experience (DX) has become a critical factor in the success of modern software projects. When it comes to IAM, the challenge is balancing security requirements with developer productivity...',
    rawHtml: `
      <div>
        <p>Developer Experience (DX) has become a critical factor in the success of modern software projects. When it comes to IAM, the challenge is balancing security requirements with developer productivity.</p>
        
        <h2 id="common-iam-pain-points-for-developers">Common IAM Pain Points for Developers</h2>
        <ul>
          <li>Complex authentication flows and SDK integration</li>
          <li>Inconsistent permission models across services</li>
          <li>Poor documentation and testing capabilities</li>
          <li>Lengthy onboarding and credential management</li>
        </ul>
        
        <h2 id="iam-developer-experience-best-practices">IAM Developer Experience Best Practices</h2>
        <p>Provide comprehensive SDKs, clear documentation, local development tools, and self-service capabilities to empower developers while maintaining security standards.</p>
        
        <h2 id="measuring-developer-experience">Measuring Developer Experience</h2>
        <p>Track metrics like integration time, authentication success rates, and developer satisfaction scores to continuously improve your IAM developer experience.</p>
      </div>
    `,
    tableOfContents: [
      {
        id: 'common-iam-pain-points-for-developers',
        title: 'Common IAM Pain Points for Developers',
      },
      {
        id: 'iam-developer-experience-best-practices',
        title: 'IAM Developer Experience Best Practices',
      },
      {
        id: 'measuring-developer-experience',
        title: 'Measuring Developer Experience',
      },
    ],
    tags: ['Developer Experience', 'IAM', 'Productivity', 'Security', 'UX'],
    readTime: '8 min read',
  },
  {
    id: 'identity-governance-framework',
    title: 'Building an Effective Identity Governance Framework',
    category: 'Auth & identity',
    author: {
      name: 'Jennifer Liu',
      handle: '@jenniferliu',
      avatar: '/images/TeamAvatar-9.png',
      socialMedia: [
        { title: 'LinkedIn', link: 'https://linkedin.com/in/jenniferliu' },
        { title: 'X', link: 'https://twitter.com/jenniferliu' },
        { title: 'Link', link: 'https://dev.to/jenniferliu' },
      ],
    },
    date: 'December 14, 2024',
    image: '/images/BlogImg-8.jpg',
    excerpt:
      'Discover the essential components of a robust identity governance framework that ensures compliance, security, and operational efficiency.',
    content:
      'Identity Governance is the foundation of effective access management, providing the policies, processes, and technologies needed to manage user identities and access rights...',
    rawHtml: `
      <div>
        <p>Identity Governance is the foundation of effective access management, providing the policies, processes, and technologies needed to manage user identities and access rights.</p>
        
        <h2 id="core-components-of-identity-governance">Core Components of Identity Governance</h2>
        <ul>
          <li><strong>Identity Lifecycle Management:</strong> Automated provisioning and deprovisioning</li>
          <li><strong>Access Certification:</strong> Regular review and validation of user access</li>
          <li><strong>Role-Based Access Control:</strong> Structured permission models</li>
          <li><strong>Policy Management:</strong> Centralized security policies and rules</li>
        </ul>
        
        <h2 id="implementing-access-certification">Implementing Access Certification</h2>
        <p>Establish regular access review cycles, define clear certification criteria, and automate reminder workflows to maintain continuous compliance and security.</p>
        
        <h2 id="measuring-governance-effectiveness">Measuring Governance Effectiveness</h2>
        <p>Track metrics like orphaned accounts, segregation of duty violations, and certification completion rates to measure and improve your identity governance program.</p>
      </div>
    `,
    tableOfContents: [
      {
        id: 'core-components-of-identity-governance',
        title: 'Core Components of Identity Governance',
      },
      {
        id: 'implementing-access-certification',
        title: 'Implementing Access Certification',
      },
      {
        id: 'measuring-governance-effectiveness',
        title: 'Measuring Governance Effectiveness',
      },
    ],
    tags: [
      'Identity Governance',
      'Compliance',
      'Access Management',
      'Policies',
      'Framework',
    ],
    readTime: '10 min read',
  },
];

export const RegisterPageFeatures: RegisterPageFeature[] = [
  {
    icon: ShieldIcon,
    title: 'Advanced Security',
    description: 'Ensures security with multi-factor authentication (MFA).',
  },
  {
    icon: LoaderIcon,
    title: 'Flexible Access',
    description: 'You can access all your applications with one click.',
  },
];

export const INTEGRATIONS: Integration[] = [
  {
    logo: Productivity5Icon,
    title: 'GitHub',
    category: 'Development',
  },
  {
    logo: SlackIcon,
    title: 'Slack',
    category: 'Communication & Collaboration',
    isBuiltIn: true,
  },
  {
    logo: Integration1Icon,
    title: 'Notion',
    category: 'Communication & Collaboration',
  },
  {
    logo: ShopifyIcon,
    title: 'Shopify',
    category: 'E-Commerce',
    isBuiltIn: true,
  },
  {
    logo: Integration2Icon,
    title: 'GitLab',
    category: 'Development',
  },
  {
    logo: Integration3Icon,
    title: 'Dropbox',
    category: 'Cloud Storage',
    isBuiltIn: true,
  },
  {
    logo: ZoomIcon,
    title: 'Zoom',
    category: 'Communication',
  },
  {
    logo: Integration4Icon,
    title: 'Google Drive',
    category: 'Cloud Storage',
  },
  {
    logo: Integration5Icon,
    title: 'SourceTree',
    category: 'Communication & Collaboration',
  },
  {
    logo: Integration6Icon,
    title: 'Zapier',
    category: 'Productivity',
  },
  {
    logo: Integration7Icon,
    title: 'Microsoft OneDrive',
    category: 'Files',
  },
  {
    logo: PythonIcon,
    title: 'Python',
    category: 'Development',
  },
  {
    logo: ReactJSIcon,
    title: 'React',
    category: 'Development',
  },
  {
    logo: VueIcon,
    title: 'Vue',
    category: 'Development',
  },
  {
    logo: HtmlIcon,
    title: 'HTML 5',
    category: 'Development',
  },
];

// Integration Categories
export const INTEGRATION_CATEGORIES = [
  'All',
  'Files',
  'Communication & Collaboration',
  'Productivity',
  'E-Commerce',
  'Cloud Storage',
  'Customer Relationship Management',
  'Development',
];

// Privacy Policy Links
export const PRIVACY_POLICY_LINKS: LegalLink[] = [
  { id: 'introduction', name: 'Introduction' },
  { id: 'applicability', name: 'Applicability of this privacy policy' },
  { id: 'personal-information', name: 'Personal information we collect' },
  { id: 'how-we-use', name: 'How we use your personal information' },
  { id: 'job-applicants', name: 'Job Applicants' },
  { id: 'legal-bases', name: 'Legal bases for processing' },
  { id: 'sharing-information', name: 'How we share your personal information' },
  { id: 'other-sites', name: 'Other sites, mobile applications and services' },
  { id: 'security-practices', name: 'Security practices' },
  { id: 'changes-policy', name: 'Changes to this privacy policy' },
];

// Terms & Services Links
export const TERMS_AND_SERVICES_LINKS: LegalLink[] = [
  { id: 'changes-to-terms', name: 'Changes to the terms of use' },
  { id: 'accessing-website', name: 'Accessing the website' },
  { id: 'intellectual-property', name: 'Intellectual property rights' },
  { id: 'trademarks', name: 'Trademarks' },
  { id: 'prohibited-use', name: 'Prohibited use' },
  { id: 'no-reliance', name: 'No reliance on information posted' },
  { id: 'privacy', name: 'Privacy' },
];

// Cookie Policy Links
export const COOKIE_POLICY_LINKS: LegalLink[] = [
  { id: 'what-are-cookies', name: 'What are cookies?' },
  { id: 'why-we-use-cookies', name: 'Why we use cookies' },
  {
    id: 'website-data-collection',
    name: 'Website data collection preferences',
  },
  { id: 'third-party-cookies', name: 'Third-party cookies' },
  { id: 'how-to-manage', name: 'How to manage cookies' },
  { id: 'your-consent', name: 'Your consent' },
  { id: 'updates-to-policy', name: 'Updates to this policy' },
];

// Privacy Policy Raw HTML Content
export const PRIVACY_POLICY_RAW_HTML = `
  <div>
    <h1 id="introduction">Introduction</h1>
    <p>Ignita, Inc. ('Ignita', 'we', 'us', or 'our') is committed to protecting your privacy. This Privacy Policy explains (1) what personal information we collect, (2) how we use and share your personal information, and (3) your choices concerning our privacy and information practices.</p>
    
    <h1 id="applicability">Applicability of this privacy policy</h1>
    <p>Ignita provides a software platform for authentication and identity management. This Privacy Policy applies to personal information we collect via our website(s), including <a href="https://ignita.com" id="PRIVACY_POLICY_LINKS">https://ignita.com</a>, and any products or services that reference this Privacy Policy (collectively, the "Services").</p>
    
    <p>This Privacy Policy does not apply to personal information we process on behalf of our customers as a service provider. In those cases, our processing of personal information is governed by separate agreements with our customers. If you wish to manage your personal information that we process on behalf of a customer, please contact the Ignita customer directly.</p>
    
    <p>Our Services are designed for businesses, not for personal use. This Privacy Policy pertains to individuals acting as representatives of businesses.</p>
    
    <h1 id="personal-information">Personal information we collect</h1>
    
    <h2>Information you provide to us</h2>
    <ul>
      <li><strong>Business Contact Information.</strong> Details like name, contact details, and role(s) collected from representatives of customers, suppliers, or business partners during agreements.</li>
      <li><strong>Feedback or correspondence.</strong> Information provided when contacting Ignita with questions, feedback, reviews, or online correspondence.</li>
      <li><strong>Usage information.</strong> Data about how Services are used and interacted with.</li>
      <li><strong>Marketing information.</strong> Information provided when requesting a demo, downloading a whitepaper, subscribing to a mailing list, and preferences for communications about activities, services, publications, and engagement details.</li>
      <li><strong>Other information</strong> that may be collected, used in accordance with this policy or as disclosed at collection time.</li>
    </ul>
    
    <h2>Information we obtain from third parties</h2>
    <p>We may maintain pages on social media platforms (e.g., Facebook, Twitter, Instagram) and other third-party platforms. Your interactions with us on these platforms are subject to the platform provider's privacy policy. We may also obtain personal information from marketing partners, publicly-available sources, and data providers.</p>
    
    <h2>Automatic data collection</h2>
    <p>We and our service providers may automatically log information about your device and how you interact with our Services and communications, such as:</p>
    <ul>
      <li><strong>Device data.</strong> Includes operating system, settings, manufacturer, model, browser type, screen resolution, RAM, disk size, CPU usage, device type (e.g., phone, tablet), IP address, unique identifiers (for advertising), language settings, mobile device carrier, radio/network information (e.g., WiFi, LTE, 4G), and general location (city, state, geographic area).</li>
      <li><strong>Online activity data.</strong> Includes pages/screens viewed, time spent, browsing history, navigation paths, activity on pages/screens, access times, duration of access, and whether marketing emails were opened or links clicked.</li>
      <li><strong>Email Open/Click Information.</strong> Pixels in email campaigns collect email, IP address, date/time of opening, or clicking links.</li>
    </ul>
    
    <h3>We use the following tools for automatic data collection:</h3>
    <ul>
      <li><strong>Cookies.</strong> Text files stored on a device to identify browsers, store settings, aid navigation, remember preferences, enable functionality, understand user activity, and facilitate online advertising.</li>
      <li><strong>Local storage technologies.</strong> Like HTML5, providing cookie-equivalent functionality to store larger data amounts on devices, outside of browsers, for specific applications.</li>
      <li><strong>Web beacons.</strong> Also known as pixel tags or clear GIFs, used to indicate webpage/email access or content viewing/clicking.</li>
    </ul>
    
    <h1 id="how-we-use">How we use your personal information</h1>
    
    <h2>To operate our Services</h2>
    <ul>
      <li>Deliver, maintain, secure, and enhance our Services.</li>
      <li>Provide you with relevant information about our Services.</li>
      <li>Keep you informed by sending announcements, updates, security notifications, and administrative or support messages.</li>
      <li>Address your inquiries, respond to your feedback, and handle your requests.</li>
    </ul>
    
    <h2>Marketing and Advertising</h2>
    <p>We may send you direct marketing communications (e.g., special promotions, offers, events via email or in-app alerts). You can opt out as explained in the "Opt Out of Marketing Communications" section.</p>
    
    <h2>Research and Development</h2>
    <p>We use your personal information for research and development to evaluate and enhance our Services and business. This includes creating aggregated, de-identified, or anonymized data, ensuring it cannot be linked back to individuals, and sharing it with third parties for legitimate business purposes.</p>
    
    <h2>Compliance and Protection</h2>
    <ul>
      <li>Adhere to applicable laws, lawful requests, and legal procedures, such as responding to subpoenas or government inquiries.</li>
      <li>Safeguard the rights, privacy, safety, and property of you, us, and others, including by pursuing or defending legal claims.</li>
      <li>Audit internal practices for compliance with legal, contractual, and safety requirements.</li>
      <li>Enforce the terms and conditions governing our Services.</li>
      <li>Detect, prevent, investigate, and address fraudulent, harmful, unauthorized, unethical, or illegal activities, including cyberattacks or identity theft.</li>
    </ul>
    
    <h1 id="job-applicants">Job applicants</h1>
    <p>We collect personal information (business and personal contact, professional credentials, skills, educational and work history, diversity information) from job applicants via the careers portion of our website. This information is used for recruitment, processing applications, monitoring statistics, website administration, and for legal compliance or investigations.</p>
    
    <h1 id="legal-bases">Legal bases for processing</h1>
    <p>We work to protect information and ensure platform security, including independent audits. We acknowledge that no internet transmission or electronic storage method is 100% secure, meaning absolute security cannot be guaranteed. For more information about our security measures, visit: <a href="https://www.ignita.com/security" id="PRIVACY_POLICY_LINKS">https://www.ignita.com/security</a>.</p>
    
    <h1 id="sharing-information">How we share your personal information</h1>
    
    <h2>Service Providers</h2>
    <p>We may share your personal information with third-party entities and individuals who perform services or support operations, including legal advisors, financial institutions, auditors, insurance providers, and vendors for hosting, analytics, email delivery, marketing, and database management.</p>
    
    <h2>Authorities and Other Parties</h2>
    <p>We may disclose your personal information to law enforcement, government bodies, or private entities if deemed necessary to comply with legal obligations or for protection purposes.</p>
    
    <h2>Business Transactions</h2>
    <p>In the event of a business transaction (merger, acquisition, reorganization, sale of assets, corporate restructuring, bankruptcy, dissolution), personal information may be sold, transferred, or shared as part of business assets, with measures taken to ensure the receiving party upholds this Privacy Policy.</p>
    
    <h2>Affiliates</h2>
    <p>We may share your personal information with current and future Affiliates (entities controlling, controlled by, or under common control with Ignita), who will handle it in alignment with this policy.</p>
    
    <h1 id="other-sites">Other sites, mobile applications and services</h1>
    <p>Our Services may include links to third-party websites, mobile apps, or online platforms, and these links do not imply endorsement or affiliation.</p>
    
    <p>Our content might appear on platforms we do not own or operate.</p>
    
    <p>We do not oversee or control third-party platforms and are not accountable for their practices. We recommend reviewing the privacy policies of any third-party services you interact with.</p>
    
    <h1 id="security-practices">Security practices</h1>
    <p>We implement organizational, technical, and administrative safeguards to protect personal information from unauthorized access, misuse, loss, disclosure, alteration, or destruction. We reiterate that no data transmission or storage method is entirely secure, and absolute security cannot be guaranteed.</p>
    
    <p>If required by law to notify of a data-related incident, we may contact you via provided information (email, phone) in compliance with regulations.</p>
    
    <h1 id="changes-policy">Changes to this privacy policy</h1>
    <p>We may update this policy, with significant changes notified by revising the date at the top and publishing the updated version. Other notification means (email, in-app message) may also be used.</p>
    
    <p>Revisions become effective upon posting or as specified, and continued use of Services signifies acceptance of the updated policy.</p>
  </div>
`;

// Terms and Conditions Raw HTML Content
export const TERMS_AND_CONDITIONS_RAW_HTML = `
  <div>
    <p>By agreeing to (or issuing a purchase order in relation to) a Services quote, order form, or other ordering document or Services-related agreement with <strong>Ignitia</strong> or one of its channel partners, or by proceeding through an online sign-up or subscription flow that references these terms (each an "Order Form"), or otherwise registering for, accessing, or using the Services, the individual or entity ("Customer") unconditionally accepts and agrees to all terms of this Agreement.</p>
    
    <p>By entering into this agreement on behalf of a company or other legal entity, the Customer represents having the authority to bind such entity and its affiliates to the terms, and "Customer" shall refer to such entity and its affiliates.</p>
    
    <h1 id="changes-to-terms">Changes to the terms of use</h1>
    <p>The Terms of Use may be revised and updated at Ignitia's sole discretion. All changes are effective immediately upon posting, and continued use of the Website after posting revised terms signifies acceptance of those changes.</p>
    
    <h1 id="accessing-website">Accessing the website</h1>
    <p>Ignitia reserves the right to terminate, alter, or amend the Website, any service, or material provided on the Website, at its sole discretion without notice. Ignitia will not be liable if any part of the Website is unavailable for any reason or period.</p>
    
    <h1 id="intellectual-property">Intellectual property rights</h1>
    <p>The Website and its entire contents, features, and functionality (including information, software, text, displays, images, video, audio, design, selection, and arrangement) are owned by Ignitia, its licensors, or other providers. These are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property rights laws. All rights not specifically granted are reserved by Ignitia.</p>
    
    <p>Personal use of the Website is permitted, but reproduction, distribution, modification, creation of derivative works, public display, public performance, republishing, downloading, storing, or transmitting any material from the Website is prohibited, except for personal use. If social media features are provided, users may take actions enabled by those features.</p>
    
    <p>No right, title, or interest in the Website or its content is transferred to the user, and all rights not expressly granted are reserved by Ignitia. Any use not expressly permitted by these Terms of Use is a breach and may violate copyright, trademark, and other laws.</p>
    
    <h1 id="trademarks">Trademarks</h1>
    <p>All trademarks, service marks, logos, and trade names on the Website (including "Ignitia" and the Ignitia logo) ("Marks") are the exclusive property of Ignitia or its licensors and are protected by intellectual property and trademark laws and treaties. The use, copying, reproduction, republishing, uploading, posting, transmitting, distributing, or modifying any Marks, including in advertising or publicity, without Ignitia's prior written consent is prohibited. Use of Marks on any other website is also prohibited without express written consent.</p>
    
    <h1 id="prohibited-use">Prohibited use</h1>
    <p>The Website may only be used for lawful purposes and in accordance with these Terms of Use. Users agree not to use the Website for:</p>
    <ul>
      <li>Violating any applicable federal, state, local, or international law or regulation (including export laws).</li>
      <li>Sending, knowingly receiving, uploading, downloading, using, or re-using any material that does not comply with these Terms of Use.</li>
      <li>Transmitting or procuring the sending of any advertising or promotional material, including "junk mail," "chain letters," "spam," or similar solicitations.</li>
      <li>Engaging in conduct that restricts or inhibits anyone's use or enjoyment of the Website, or which may harm Ignitia or its users, or expose them to liability.</li>
      <li>If the user is a competitor, or for purposes of monitoring the Website's availability, performance, or functionality, or for any other benchmarking or competitive purposes.</li>
    </ul>
    
    <h1 id="no-reliance">No reliance on information posted</h1>
    <p>Information on the Website is for general purposes only, and Ignitia does not warrant its accuracy, completeness, timeliness, or usefulness. Reliance on such information is at the user's own risk, and Ignitia disclaims all liability and responsibility arising from such reliance.</p>
    
    <p>Ignitia may periodically update or correct information, and the Website may contain typographical errors, technical inaccuracies, or omissions. Ignitia makes no representation or warranty regarding accuracy and disclaims any obligation to update information. Ignitia reserves the right to make additions, deletions, or modifications to any information without prior notice.</p>
    
    <p>The Website may include third-party content and materials. All statements and opinions in such content are solely those of the provider and do not necessarily reflect Ignitia's opinion. Ignitia is not responsible or liable for the content or accuracy of any third-party materials.</p>
    
    <h1 id="privacy">Privacy</h1>
    <p>Ignitia's Privacy Policy, located at <a href="https://ignitia.com/privacy" id="TERMS_AND_SERVICES_LINKS">https://ignitia.com/privacy</a>, describes the collection, use, and disclosure of personal information in connection with the Website. The Privacy Policy is expressly incorporated into these Terms of Use, and by using the Website, users agree to the collection, use, and disclosure practices outlined in the Privacy Policy.</p>
  </div>
`;

// Cookie Policy Raw HTML Content
export const COOKIE_POLICY_RAW_HTML = `
  <div>
    <p>At Ignitia, we value your privacy and are committed to being transparent about how we use cookies and similar technologies on our platform. This Cookie Policy explains what cookies are, how and why we use them, and how you can manage your preferences.</p>
    
    <h1 id="what-are-cookies">What are cookies?</h1>
    <p>Cookies are small text files stored on your device (computer, smartphone, or tablet) when you visit a website. They help the website recognize your device, enhance your browsing experience, and improve functionality.</p>
    
    <h1 id="why-we-use-cookies">Why we use cookies</h1>
    
    <h2>Essential Cookies</h2>
    <p>To enable core functionalities of our platform, such as authentication and access to secure areas.</p>
    
    <h2>Performance and Analytics Cookies</h2>
    <p>To gather statistical data, such as page visits, time spent on the platform, and error tracking.</p>
    
    <h2>Functionality Cookies</h2>
    <p>To remember your preferences, such as language settings or customized layouts.</p>
    
    <h2>Targeting and Advertising Cookies</h2>
    <p>To deliver relevant content and advertisements based on your interests and usage patterns.</p>
    
    <h1 id="website-data-collection">Website data collection preferences</h1>
    
    <h2>Essential</h2>
    <p>To understand user behaviour in order to provide you with a more relevant browsing experience or personalise the content on our site. For example, we collect information about which pages you visit to help us present more relevant information.</p>
    
    <h2>Marketing and Analytics</h2>
    <p>To understand user behaviour in order to provide you with a more relevant browsing experience or personalise the content on our site. For example, we collect information about which pages you visit to help us present more relevant information.</p>
    
    <h2>Advertising</h2>
    <p>To personalize and measure the effectiveness of advertising on our site and other websites. For example, we may serve you a personalized ad based on the pages you visit on our site.</p>
    
    <h1 id="third-party-cookies">Third-party cookies</h1>
    <p>We may also use third-party cookies provided by trusted partners to enhance the functionality and analytics of the platform. These third parties may include analytics providers like Google Analytics or advertising networks.</p>
    
    <h1 id="how-to-manage">How to manage cookies</h1>
    <p>You may use the Website only for lawful purposes and in accordance with these Terms of Use. You agree not to use the Website:</p>
    <ul>
      <li>In any way that violates any applicable federal, state, local or international law or regulation (including, without limitation, any laws regarding the export of data or software to and from the US or other countries).</li>
      <li>To send, knowingly receive, upload, download, use or re-use any material which does not comply with these Terms of Use.</li>
      <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter" or "spam" or any other similar solicitation.</li>
      <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Website, or which, as determined by us, may harm Ignitia or users of the Website or expose them to liability.</li>
      <li>If you are a competitor, or for purposes of monitoring the Website's availability, performance or functionality, or for any other benchmarking or competitive purposes.</li>
    </ul>
    
    <h1 id="your-consent">Your consent</h1>
    <p>By continuing to use the Ignitia platform, you consent to our use of cookies in accordance with this Cookie Policy.</p>
    
    <h1 id="updates-to-policy">Updates to this policy</h1>
    <p>We may update this Cookie Policy from time to time to reflect changes in technology, laws, or our business operations. Any updates will be posted on this page, and significant changes will be communicated to you directly.</p>
  </div>
`;
