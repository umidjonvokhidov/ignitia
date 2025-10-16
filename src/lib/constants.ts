import {SVGProps} from "react";

// Import Framework icons
import NextJSIcon from "@/public/icons/Nextjs.svg";
import FlutterIcon from "@/public/icons/Flutter.svg";
import JavaScriptIcon from "@/public/icons/Javascript.svg";
import ReactIcon from "@/public/icons/React.svg";
import VueJSIcon from "@/public/icons/VueJS.svg";
import KotlinIcon from "@/public/icons/Kotlin.svg";

// Import Social Proof Company Logos
import CompanyLogo from "@/public/icons/CompanyLogo.svg";
import CompanyLogo1 from "@/public/icons/CompanyLogo-1.svg";
import CompanyLogo2 from "@/public/icons/CompanyLogo-2.svg";
import CompanyLogo3 from "@/public/icons/CompanyLogo-3.svg";
import CompanyLogo4 from "@/public/icons/CompanyLogo-4.svg";
import CompanyLogo5 from "@/public/icons/CompanyLogo-5.svg";
import CompanyLogo6 from "@/public/icons/CompanyLogo-6.svg";

// Import Integration icons
import MessengersIcon from "@/public/icons/Messengers.svg";
import DesignIcon from "@/public/icons/Design.svg";
import ProductivityIcon from "@/public/icons/Productivity.svg";
import Productivity1Icon from "@/public/icons/Productivity-1.svg";
import Messengers1Icon from "@/public/icons/Messengers-1.svg";
import Productivity2Icon from "@/public/icons/Productivity-2.svg";
import Productivity3Icon from "@/public/icons/Productivity-3.svg";
import FinanceIcon from "@/public/icons/Finance.svg";
import Productivity4Icon from "@/public/icons/Productivity-4.svg";
import CodingIcon from "@/public/icons/Coding.svg";
import Productivity5Icon from "@/public/icons/Productivity-5.svg";
import Productivity6Icon from "@/public/icons/Productivity-6.svg";
import Productivity7Icon from "@/public/icons/Productivity-7.svg";

// Import Contact Section Icons
import MailIcon from "@/public/icons/mail.svg";
import FileTextIcon from "@/public/icons/file-text.svg";
import OctagonIcon from "@/public/icons/octagon.svg";

// Import Social Media Icons
import FacebookIcon from "@/public/icons/facebook-2.svg";
import XIcon from "@/public/icons/X.svg";
import LinkedInIcon from "@/public/icons/linkedin.svg";
import YoutubeIcon from "@/public/icons/Youtube.svg";

// Import Company Logo Icons (company-logo with lowercase naming)
import companylogo from "@/public/icons/company-logo.svg";
import companylogo1 from "@/public/icons/company-logo-1.svg";
import companylogo2 from "@/public/icons/company-logo-2.svg";
import companylogo3 from "@/public/icons/company-logo-3.svg";
import companylogo4 from "@/public/icons/company-logo-4.svg";
import companylogo5 from "@/public/icons/company-logo-5.svg";
import companylogo6 from "@/public/icons/company-logo-6.svg";
import companylogo7 from "@/public/icons/company-logo-7.svg";
import companylogo8 from "@/public/icons/company-logo-8.svg";
import companylogo9 from "@/public/icons/company-logo-9.svg";
import companylogo10 from "@/public/icons/company-logo-10.svg";
import companylogo11 from "@/public/icons/company-logo-11.svg";

// Import About Feature Icons
import PocketIcon from "@/public/icons/pocket.svg";
import GlobeIcon from "@/public/icons/globe.svg";
import LockIcon from "@/public/icons/lock.svg";

// Import Pricing Advantage Icons
import LockAdvantageIcon from "@/public/icons/lock.svg";
import UserCircleIcon from "@/public/icons/user-circle.svg";
import KeyIcon from "@/public/icons/key.svg";
import FileIcon from "@/public/icons/file.svg";
import LayersTwoIcon from "@/public/icons/layers-two-01.svg";
import HeadphonesIcon from "@/public/icons/headphones.svg";

import SlackIcon from "@/public/icons/slack.svg";
import Integration1Icon from "@/public/icons/Integration-1.svg";
import ShopifyIcon from "@/public/icons/shopify.svg";
import Integration2Icon from "@/public/icons/Integration-2.svg";
import Integration3Icon from "@/public/icons/Integration-3.svg";
import ZoomIcon from "@/public/icons/zoom.svg";
import Integration4Icon from "@/public/icons/Integration-4.svg";
import Integration5Icon from "@/public/icons/Integration-5.svg";
import Integration6Icon from "@/public/icons/Integration-6.svg";
import Integration7Icon from "@/public/icons/Integration-7.svg";
import PythonIcon from "@/public/icons/python.svg";
import ReactJSIcon from "@/public/icons/react-js.svg";
import VueIcon from "@/public/icons/vue.svg";
import HtmlIcon from "@/public/icons/html.svg";


export const NAVIGATION_LINKS: NavLink[] = [
  {
    label: "Products",
    href: "/products",
    hasDropdown: true,
  },
  {
    label: "Solutions",
    href: "/solutions", 
    hasDropdown: true,
  },  
  {
    label: "Developers",
    href: "/developers",
  },
  {
    label: "Pricing",
    href: "/pricing",
  }
];

export const PRODUCTS_DROPDOWN: NavDropdown = {
  title: "Products",
  items: [
    {
      title: "Identity Management",
      description: "Comprehensive user identity lifecycle management with seamless UX",
      href: "/products/identity-management"
    },
    {
      title: "Access Control",
      description: "Granular access control and authorization with modular deployment",
      href: "/products/access-control"
    },
    {
      title: "Single Sign-On (SSO)",
      description: "Secure, scalable SSO solution for enterprise applications",
      href: "/products/sso"
    },
    {
      title: "Multi-Factor Authentication",
      description: "Advanced MFA with adaptive security and user-friendly experience",
      href: "/products/mfa"
    },
    {
      title: "API Security",
      description: "Secure API access management with pay-as-you-go scalability",
      href: "/products/api-security"
    }
  ]
};

export const SOLUTIONS_DROPDOWN: NavDropdown = {
  title: "Solutions",
  items: [
    {
      title: "Enterprise IAM",
      description: "Scalable identity management for large organizations with modular deployment",
      href: "/solutions/enterprise"
    },
    {
      title: "Startup Solutions",
      description: "Cost-effective IAM with pay-as-you-go model for growing businesses",
      href: "/solutions/startups"
    },
    {
      title: "Cloud-Native IAM",
      description: "Seamless cloud deployment with adaptable architecture",
      href: "/solutions/cloud-native"
    },
    {
      title: "Healthcare Compliance",
      description: "HIPAA-compliant identity management with seamless UX",
      href: "/solutions/healthcare"
    },
    {
      title: "Financial Services",
      description: "Secure, scalable IAM solutions for financial institutions",
      href: "/solutions/finance"
    },
    {
      title: "Government & Public Sector",
      description: "Compliant identity management for government organizations",
      href: "/solutions/government"
    }
  ]
};

export const FRAMEWORKS: Framework[] = [
  {
    name: "Next.js",
    icon: NextJSIcon,
  },
  {
    name: "Flutter",
    icon: FlutterIcon, 
  },
  {
    name: "JavaScript",
    icon: JavaScriptIcon,
  },
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "Vue.js",
    icon: VueJSIcon,
  },
  {
    name: "Kotlin",
    icon: KotlinIcon,
  }
];


export const SOCIAL_PROOF_LOGOS: SocialProof[] = [
  {
    name: "Adobe",
    icon: CompanyLogo,
  },
  {
    name: "Evernote",
    icon: CompanyLogo1,
  },
  {
    name: "PayPal",
    icon: CompanyLogo2,
  },
  {
    name: "Amazon",
    icon: CompanyLogo3,
  },
  {
    name: "Framer",
    icon: CompanyLogo4,
  },
  {
    name: "Asana",
    icon: CompanyLogo5,
  },
  {
    name: "Intercom",
    icon: CompanyLogo6,
  }
];


export const ABOUT_CARDS: AboutCard[] = [
  {
    logo: CompanyLogo3, // Amazon
    title: "50%",
    description: "higher conversion rates"
  },
  {
    logo: CompanyLogo4, // Framer
    title: "5x",
    description: "faster onboarding process"
  },
  {
    logo: CompanyLogo6, // Intercom
    title: "30%",
    description: "reduction in compliance costs"
  }
];


export const FEATURES_ACCORDION: FeatureItem[] = [
  {
    title: "Seamless Single Sign-On (SSO)",
    description: "allowing users to log in once and securely access all connected applications.",
  },
  {
    title: "Advanced Multi-Factor Authentication (MFA)",
    description: "Ignitia employs advanced security measures, including encryption, multi-factor authentication, and compliance with industry standards such as SOC2 and GDPR. These ensure that your data and user identities are always secure.",
  },
  {
    title: "Flexible Role-Based Access Control (RBAC)",
    description: "Ignitia employs advanced security measures, including encryption, multi-factor authentication, and compliance with industry standards such as SOC2 and GDPR. These ensure that your data and user identities are always secure.",
  },
  {
    title: "Comprehensive Audit Logs & Analytics",
    description: "Ignitia employs advanced security measures, including encryption, multi-factor authentication, and compliance with industry standards such as SOC2 and GDPR. These ensure that your data and user identities are always secure.",
  }
];


export const INTEGRATION_ICONS: IntegrationItem[] = [
  {
    name: "Slack",
    icon: MessengersIcon,
    col: 1,
    row: 1,
    mdcol: 1,
    mdrow:1,
    lgcol: 1,
    lgrow: 1,
  },
  {
    name: "Framer",
    icon: DesignIcon,
    col: 3,
    row: 1,
    mdcol: 3,
    mdrow:1,
    lgcol: 3,
    lgrow: 1,
  },
  {
    name: "Trello",
    icon: ProductivityIcon,
    col: 6,
    row: 1,
    mdcol: 6,
    mdrow:1,
    lgcol: 6,
    lgrow: 1,
  },
  {
    name: "Dropbox",
    icon: Productivity1Icon,
    col: 7,
    row: 1,
    mdcol: 7,
    mdrow:1,
    lgcol: 7,
    lgrow: 1,
  },
  {
    name: "Discord",
    icon: Messengers1Icon,
    col: 10,
    row: 1,
    mdcol: 10,
    mdrow:1,
    lgcol: 10,
    lgrow: 1,
  },
  {
    name: "Zendesk",
    icon: Productivity2Icon,
    col: 2,
    row: 2,
    mdcol: 2,
    mdrow: 2,
    lgcol: 2,
    lgrow: 2,
  },
  {
    name: "Mailchimp",
    icon: Productivity3Icon,
    col: 3,
    row: 2,
    mdcol: 3,
    mdrow: 2,
    lgcol: 3,
    lgrow: 2,
  },
  {
    name: "PayPal",
    icon: FinanceIcon,
    col: 8,
    row: 2,
    mdcol: 8,
    mdrow: 2,
    lgcol: 8,
    lgrow: 2,
  },
  {
    name: "GitLab",
    icon: Productivity4Icon,
    col: 10,
    row: 2,
    mdcol: 10,
    mdrow: 2,
    lgcol: 10,
    lgrow: 2,
  },
  {
    name: "React",
    icon: CodingIcon,
    col: 1,
    row: 3,
    mdcol: 1,
    mdrow: 3,
    lgcol: 1,
    lgrow: 3,
  },
  {
    name: "GitHub",
    icon: Productivity5Icon,
    col: 4,
    row: 3,
    mdcol: 4,
    mdrow: 3,
    lgcol: 4,
    lgrow: 3,
  },
  {
    name: "Loom",
    icon: Productivity6Icon,
    col: 6,
    row: 3,
    mdcol: 6,
    mdrow: 3,
    lgcol: 6,
    lgrow: 3,
  },
  {
    name: "Notion",
    icon: Productivity7Icon,
    col: 9,
    row: 3,
    mdcol: 9,
    mdrow: 3,
    lgcol: 9,
    lgrow: 3,
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Basic",
    description: "Perfect for small teams or startups getting started with secure identity management.",
    price: "$49",
    features: [
      "Basic security features",
      "Email support"
    ],
    href: "/plans/basic"
  },
  {
    name: "Launch",
    description: "Designed for growing businesses looking to enhance security and scalability.",
    price: "$349",
    features: [
      "Advanced security (MFA, SSO)",
      "Analytics dashboard",
      "Integration with third-party tools"
    ],
    isPopular: true,
    href: "/plans/launch"
  },
  {
    name: "Scale",
    description: "Built for enterprises requiring robust security, compliance, and unlimited scalability.",
    price: "$649",
    features: [
      "Advanced security suite (MFA, SSO, biometrics)",
      "Custom workflows",
      "API access for custom solutions"
    ],
    href: "/plans/scale"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    avatar: "/images/AvatarTestimonial.png",
    name: "Sarah Mansy",
    title: "CTO",
    company: "TechWave Solutions",
    quote: "Ignitia's SSO and MFA are seamless and scalable. Perfect for our growing team!"
  },
  {
    avatar: "/images/AvatarTestimonial-1.png",
    name: "James Loki",
    title: "Director of IT",
    company: "MediSecure Healthcare",
    quote: "Ignitia's security features and compliance tools are top-notch. A game-changer!"
  },
  {
    avatar: "/images/AvatarTestimonial-2.png",
    name: "Jenny Wilson",
    title: "Founder",
    company: "BrightSpark Retail",
    quote: "Ignitia simplifies access management and scales effortlessly with our needs."
  }
];

export const CONTACT_SECTIONS: ContactSectionItem[] = [
  {
    icon: MailIcon,
    title: "Email",
    content: "support@ignitiateam.com",
  },
  {
    icon: FileTextIcon,
    title: "Media Inquiries",
    content: "press@ignitiateam.com",
  },
  {
    icon: OctagonIcon,
    title: "Brand Kit",
    content: "Download",
    href: "/brand-kit",
  },
];

export const FAQ_DATA: FAQCategory[] = [
  {
    category: "General",
    items: [
      {
        title: "What is Ignitia?",
        description: "Ignitia is an identity and access management (IAM) platform designed to simplify user authentication and secure access for businesses."
      },
      {
        title: "Who is Ignitia for?",
        description: "Ignitia is an identity and access management (IAM) platform designed to simplify user authentication and secure access for businesses."
      },
      {
        title: "How do I start using Ignitia?",
        description: "Ignitia is an identity and access management (IAM) platform designed to simplify user authentication and secure access for businesses."
      },
      {
        title: "Does Ignitia work with cloud-based platforms?",
        description: "Ignitia is an identity and access management (IAM) platform designed to simplify user authentication and secure access for businesses."
      },
      {
        title: "Can Ignitia be customized for my business?",
        description: "Ignitia is an identity and access management (IAM) platform designed to simplify user authentication and secure access for businesses."
      }
    ]
  },
  {
    category: "Security",
    items: [
      {
        title: "How does Ignitia ensure data security?",
        description: "Ignitia employs advanced security measures, including encryption, multi-factor authentication, and compliance with industry standards such as SOC2 and GDPR. These ensure that your data and user identities are always secure."
      },
      {
        title: "What compliance standards does Ignitia meet?",
        description: "Ignitia is designed to meet various compliance standards, including GDPR, HIPAA, and SOC2, ensuring your organization adheres to critical regulatory requirements."
      },
      {
        title: "Does Ignitia support Multi-Factor Authentication (MFA)?",
        description: "Yes, Ignitia offers robust Multi-Factor Authentication (MFA) options, including biometric, TOTP, and push notifications, to add an extra layer of security to user accounts."
      },
      {
        title: "How is user data encrypted?",
        description: "All user data is encrypted using industry-standard AES-256 encryption both in transit and at rest, ensuring maximum protection of sensitive information."
      },
      {
        title: "Does Ignitia support Single Sign-On (SSO)?",
        description: "Yes, Ignitia provides comprehensive SSO capabilities, allowing users to authenticate once and access all connected applications seamlessly."
      }
    ]
  },
  {
    category: "Features",
    items: [
      {
        title: "What are the core features of Ignitia?",
        description: "Ignitia's core features include Single Sign-On (SSO), Multi-Factor Authentication (MFA), Role-Based Access Control (RBAC), API security, and comprehensive audit logs."
      },
      {
        title: "Can I integrate Ignitia with my existing applications?",
        description: "Yes, Ignitia provides extensive API documentation and SDKs to facilitate seamless integration with your existing applications and services."
      },
      {
        title: "Does Ignitia offer role-based access control?",
        description: "Absolutely. Ignitia's RBAC feature allows you to define granular permissions and roles, ensuring users only access the resources they need for their job functions."
      },
      {
        title: "What analytics and reporting features are available?",
        description: "Ignitia provides comprehensive analytics dashboards, audit logs, and reporting features to help you monitor user activity and maintain compliance."
      },
      {
        title: "Can I customize the user interface?",
        description: "Yes, Ignitia offers white-label solutions and customizable UI components to match your brand identity and user experience requirements."
      }
    ]
  },
  {
    category: "Pricing",
    items: [
      {
        title: "What is Ignitia's pricing model?",
        description: "Ignitia operates on a flexible pay-as-you-go model, allowing you to scale your usage up or down based on your business needs without long-term commitments."
      },
      {
        title: "Are there different pricing tiers?",
        description: "Yes, Ignitia offers several pricing tiers, including Basic ($49/month), Launch ($349/month), and Scale ($649/month) plans, each tailored to different organizational sizes and feature requirements."
      },
      {
        title: "Can I get a free trial?",
        description: "Ignitia offers a free tier for basic usage and free trials for our premium plans, allowing you to explore our features before committing."
      },
      {
        title: "Is there a discount for annual billing?",
        description: "Yes, we offer a 15% discount for annual billing across all our paid plans, helping you save while committing to long-term usage."
      },
      {
        title: "What happens if I exceed my plan limits?",
        description: "If you exceed your plan limits, we'll notify you and provide options to upgrade or purchase additional capacity to ensure uninterrupted service."
      }
    ]
  },
  {
    category: "Support",
    items: [
      {
        title: "What kind of support does Ignitia offer?",
        description: "Ignitia provides comprehensive support, including email support for all plans, priority support for professional tiers, and 24/7 dedicated support for enterprise clients."
      },
      {
        title: "Where can I find documentation?",
        description: "Our extensive documentation, including API guides, tutorials, and FAQs, is available in the Developers section of our website."
      },
      {
        title: "How can I contact support?",
        description: "You can contact our support team via email at support@ignitiateam.com or through the contact form on our website."
      },
      {
        title: "Do you offer training and onboarding?",
        description: "Yes, we provide comprehensive onboarding assistance, training sessions, and best practice guides to help your team get the most out of Ignitia."
      },
      {
        title: "What is your response time for support requests?",
        description: "Response times vary by plan: Basic plans receive responses within 24 hours, Launch plans within 8 hours, and Scale plans receive priority support with 2-hour response times."
      }
    ]
  }
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Products",
    links: [
      { name: "User Management", href: "/products/user-management" },
      { name: "Product Overview", href: "/products/overview" },
      { name: "Login & Authentication", href: "/products/authentication" }
    ]
  },
  {
    title: "Solutions",
    links: [
      { name: "Deployment Options", href: "/solutions/deployment" },
      { name: "Migrate to Ignitia", href: "/solutions/migration" },
      { name: "Scalability", href: "/solutions/scalability" },
      { name: "Security", href: "/solutions/security" },
      { name: "Privacy & GDPR Compliance", href: "/solutions/privacy" }
    ]
  },
  {
    title: "Developers",
    links: [
      { name: "Documentation", href: "/developers/docs" },
      { name: "Changelog", href: "/developers/changelog", isNew: true },
      { name: "Open Source", href: "/developers/open-source" },
      { name: "Status", href: "/developers/status" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact Us", href: "/contact" },
      { name: "Customer Stories", href: "/customer-stories" }
    ]
  }
];

export const FOOTER_LEGAL_LINKS: FooterLegalLink[] = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Condition", href: "/terms-conditions" },
  { name: "Cookie Policy", href: "/cookie-policy" }
];


export const FOOTER_SOCIAL_LINKS: FooterSocialLink[] = [
  {
    name: "Facebook",
    icon: FacebookIcon,
    href: "https://facebook.com/ignitia"
  },
  {
    name: "X (Twitter)",
    icon: XIcon,
    href: "https://x.com/ignitia"
  },
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    href: "https://linkedin.com/company/ignitia"
  },
  {
    name: "YouTube",
    icon: YoutubeIcon,
    href: "https://youtube.com/@ignitia"
  }
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
    title: "Reliable",
    description: "Ignitia has built scalable infrastructure to support your growth."
  },
  {
    icon: GlobeIcon,
    title: "Scalable",
    description: "Our failover and deduplication features make scaling easy."
  },
  {
    icon: LockIcon,
    title: "Secure",
    description: "Ignitia ensures strong security and helps you meet industry standards."
  }
];


export const TEAM_MEMBERS: TeamMember[] = [
  {
    avatar: "/images/TeamAvatar.png",
    name: "Sarah Mansy",
    title: "CEO & Co-Founder",
    socialMedia: {
      facebook: "https://facebook.com/sarahmansy",
      x: "https://x.com/sarahmansy",
      linkedin: "https://linkedin.com/in/sarahmansy"
    }
  },
  {
    avatar: "/images/TeamAvatar-1.png",
    name: "James Loki",
    title: "CTO & Co-Founder",
    socialMedia: {
      instagram: "https://instagram.com/jamesloki",
      facebook: "https://facebook.com/jamesloki",
      x: "https://x.com/jamesloki",
      linkedin: "https://linkedin.com/in/jamesloki"
    }
  },
  {
    avatar: "/images/TeamAvatar-2.png",
    name: "Jenny Wilson",
    title: "Head of Product",
    socialMedia: {
      facebook: "https://facebook.com/jennywilson",
      x: "https://x.com/jennywilson",
      linkedin: "https://linkedin.com/in/jennywilson"
    }
  },
  {
    avatar: "/images/TeamAvatar-3.png",
    name: "Robert Fox",
    title: "Lead Designer",
    socialMedia: {
      instagram: "https://instagram.com/robertfox",
      facebook: "https://facebook.com/robertfox",
      x: "https://x.com/robertfox",
      linkedin: "https://linkedin.com/in/robertfox"
    }
  },
  {
    avatar: "/images/TeamAvatar-4.png",
    name: "Esther Howard",
    title: "Marketing Manager",
    socialMedia: {
      facebook: "https://facebook.com/estherhoward",
      x: "https://x.com/estherhoward",
      linkedin: "https://linkedin.com/in/estherhoward"
    }
  },
  {
    avatar: "/images/TeamAvatar-5.png",
    name: "Brooklyn Simmons",
    title: "Sales Manager",
    socialMedia: {
      instagram: "https://instagram.com/brooklynsimmons",
      facebook: "https://facebook.com/brooklynsimmons",
      x: "https://x.com/brooklynsimmons",
      linkedin: "https://linkedin.com/in/brooklynsimmons"
    }
  },
  {
    avatar: "/images/TeamAvatar-6.png",
    name: "Guy Hawkins",
    title: "Software Engineer",
    socialMedia: {
      instagram: "https://instagram.com/guyhawkins",
      facebook: "https://facebook.com/guyhawkins",
      x: "https://x.com/guyhawkins",
      linkedin: "https://linkedin.com/in/guyhawkins"
    }
  },
  {
    avatar: "/images/TeamAvatar-7.png",
    name: "Leslie Alexander",
    title: "QA Engineer",
    socialMedia: {
      facebook: "https://facebook.com/lesliealexander",
      x: "https://x.com/lesliealexander",
      linkedin: "https://linkedin.com/in/lesliealexander"
    }
  }
];

export const PRICING_PLAN_MAIN: PricingPlanMain[] = [
  {
    name: "Basic",
    price: "$49 / month",
    description: "Perfect for small teams or startups getting started with secure identity management.",
    features: {
      projects: "10 projects",
      storage: "0.5 GB storage"
    },
    addons: [
      {
        name: "Private Cloud",
        price: "+$10 / month"
      },
      {
        name: "Adaptive MFA",
        price: "+$10 / month"
      }
    ],
    href: "/plans/basic"
  },
  {
    name: "Launch",
    price: "$369 / month",
    description: "Designed for growing businesses looking to enhance security and scalability.",
    features: {
      projects: "100 projects",
      storage: "15 GB storage"
    },
    addons: [
      {
        name: "Private Cloud",
        price: "+$10 / month"
      },
      {
        name: "Adaptive MFA",
        price: "+$10 / month"
      }
    ],
    isPopular: true,
    href: "/plans/launch"
  },
  {
    name: "Scale",
    price: "$649 / month",
    description: "Built for enterprises requiring robust security, compliance, and unlimited scalability.",
    features: {
      projects: "100 projects",
      storage: "50 GB storage"
    },
    addons: [
      {
        name: "Private Cloud",
        price: "+$10 / month"
      },
      {
        name: "Adaptive MFA",
        price: "+$10 / month"
      }
    ],
    href: "/plans/scale"
  }
];


export const PRICING_ADVANTAGES: PricingAdvantage[] = [
  {
    icon: LockAdvantageIcon,
    title: "Multi-Factor Authentication (MFA)",
    description: "Ensure top-notch security for your organization with MFA included in every plan. Protect user accounts with SMS, email, or app-based authentication for an additional layer of security."
  },
  {
    icon: UserCircleIcon,
    title: "Customizable User Roles",
    description: "Manage access effectively with customizable user roles. Assign permissions tailored to individual or team needs, ensuring the right people access the right resources."
  },
  {
    icon: KeyIcon,
    title: "Single Sign-On (SSO)",
    description: "Simplify user access with SSO integration across all major platforms. Enable seamless and secure login experiences while reducing password management overhead."
  },
  {
    icon: FileIcon,
    title: "Comprehensive Audit Logs",
    description: "Maintain transparency and compliance with detailed audit logs. Track user activities, login attempts, and security events across your platform for peace of mind."
  },
  {
    icon: LayersTwoIcon,
    title: "Seamless App Integrations",
    description: "Connect effortlessly with your favorite tools and platforms. Our wide array of integrations ensures your team's workflows remain uninterrupted and efficient."
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Get assistance whenever you need it with round-the-clock support included in all plans. Our dedicated team is here to resolve issues and answer your questions quickly."
  }
];

export const PRICING_PLAN_FEATURES: PricingPlanFeatures = {
  plans: {
    personal: { name: "Personal", price: "Free" },
    launch: { name: "Launch", price: "$349 / month" },
    scale: { name: "Scale", price: "$649 / month" }
  },
  features: [
    {
      name: "Password",
      personal: true,
      launch: true,
      scale: true
    },
    {
      name: "Passkeys",
      personal: true,
      launch: true,
      scale: true
    },
    {
      name: "Social Connections",
      personal: "3",
      launch: "Unlimited",
      scale: "Unlimited"
    },
    {
      name: "Custom Social Connections",
      personal: true,
      launch: true,
      scale: true
    },
    {
      name: "Multi-Factor Authentication",
      personal: true,
      launch: true,
      scale: true
    },
    {
      name: "Custom Profile Fields",
      personal: true,
      launch: true,
      scale: true
    },
    {
      name: "Account Linking",
      personal: true,
      launch: true,
      scale: true
    },
    {
      name: "User Import",
      personal: true,
      launch: true,
      scale: true
    },
    {
      name: "Bulk User Import",
      personal: true,
      launch: true,
      scale: true
    },
    {
      name: "Fully Managed Captcha",
      personal: false,
      launch: true,
      scale: true
    },
    {
      name: "GDPR-compliant EU Data Storage",
      personal: false,
      launch: true,
      scale: true
    },
    {
      name: "Brute Force Protection",
      personal: true,
      launch: true,
      scale: true
    },
    {
      name: "Custom Domains",
      personal: false,
      launch: true,
      scale: true
    },
    {
      name: "Included Custom Domains",
      personal: false,
      launch: "10",
      scale: "20"
    },
    {
      name: "Multi-Language",
      personal: true,
      launch: true,
      scale: true
    },
    {
      name: "Community Support",
      personal: true,
      launch: true,
      scale: true
    },
    {
      name: "VIP Community",
      personal: false,
      launch: true,
      scale: true
    },
    {
      name: "Standard Support",
      personal: false,
      launch: true,
      scale: true
    },
    {
      name: "User Data Export",
      personal: true,
      launch: true,
      scale: true
    }
  ]
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "caching-keys-iam-security",
    title: "The Perils of Caching Keys in IAM: A Security Nightmare",
    category: "Security",
    author: {
      name: "James Loki",
      handle: "@jamesloki",
      avatar: "/images/TeamAvatar-1.png"
    },
    date: "December 24, 2024",
    image: "/images/blog/matrix-code-security.jpg",
    excerpt: "Caching authentication keys in IAM systems can transform a security architecture from a fortress into a house of cards. Learn why security-first strategies should always take precedence over performance gains.",
    content: "Caching seems like an attractive performance optimization in IAM for faster authentication and reduced database load. However, caching authentication and authorization keys can transform a security architecture from a fortress into a house of cards...",
    rawHtml: `
      <div class="prose max-w-none">
        <p class="text-lg text-gray-700 mb-6">Caching seems like an attractive performance optimization in IAM for faster authentication and reduced database load. However, caching authentication and authorization keys can transform a security architecture from a fortress into a house of cards.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Stale permissions persist</h2>
        <p class="text-gray-700 mb-4">Cached authentication keys can lead to unauthorized access if an employee's roles change or they are terminated, as access might persist until the cache expires, even after revocation.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Instant compromise surface</h2>
        <p class="text-gray-700 mb-4">If an attacker gains access to a cached key store, they immediately get a comprehensive map of potential access points, dramatically expanding the attack surface.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Technical Vulnerabilities in Key Caching</h2>
        <h3 class="text-xl font-semibold mt-6 mb-3">Token Replay and Replay Attacks</h3>
        <p class="text-gray-700 mb-4">Intercepted or stolen cached keys can be reused multiple times before cache invalidation, granting extended unauthorized access.</p>
        
        <h3 class="text-xl font-semibold mt-6 mb-3">Race Conditions in Distributed Systems</h3>
        <p class="text-gray-700 mb-4">In distributed environments, cached keys can cause complex race conditions where permission updates don't immediately propagate across all cached instances, leading to inconsistent and unpredictable access control.</p>
        
        <h3 class="text-xl font-semibold mt-6 mb-3">Insufficient Hashing Methods leading to Credential Bypass</h3>
        <p class="text-gray-700 mb-4">Choosing the right parameters for computing hash keys is crucial. Using methods like CRC32, which has a small target space, can lead to key collisions and credential bypass scenarios.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Best practices for secure authentication</h2>
        <p class="text-gray-700 mb-4">Instead of caching keys, implement these security-first strategies:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="text-gray-700 mb-2"><strong>Short-lived Tokens:</strong> Use time-bound access tokens with minimal lifespans.</li>
          <li class="text-gray-700 mb-2"><strong>Real-time Verification:</strong> Validate permissions at each critical access point.</li>
          <li class="text-gray-700 mb-2"><strong>Centralized Authorization:</strong> Maintain a single source of truth for access rights.</li>
          <li class="text-gray-700 mb-2"><strong>Dynamic Permission Checks:</strong> Evaluate permissions in real-time during each request.</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Performance considerations</h2>
        <p class="text-gray-700 mb-4">The post addresses the concern about performance, stating that modern IAM systems and cloud infrastructure have evolved. The performance hit of real-time verification is minimal compared to the "catastrophic potential of a security breach." Prioritizing security-first strategies builds a robust and future-proof access control system.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Practical implementation strategies</h2>
        <p class="text-gray-700 mb-4">Strategies proven to work for security and efficiency:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="text-gray-700 mb-2">Use token-based authentication with short expiration times.</li>
          <li class="text-gray-700 mb-2">Implement refresh mechanisms that require re-authentication.</li>
          <li class="text-gray-700 mb-2">Store minimal, encrypted metadata instead of full permission sets.</li>
          <li class="text-gray-700 mb-2">Leverage distributed caching with immediate invalidation capabilities.</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
        <p class="text-gray-700 mb-4">Caching authentication keys is described as a "shortcut that leads to a potential security nightmare." In the current era of cyber threats, IAM systems should prioritize real-time, dynamic access control over "marginal performance gains."</p>
        <p class="text-gray-700 mb-4">The final advice is: "When it comes to security, convenience can be the enemy of protection. Strike this balance wisely."</p>
      </div>
    `,
    tableOfContents: [
      {
        title: "Stale permissions persist",
        paragraphs: ["Cached authentication keys can lead to unauthorized access if an employee's roles change or they are terminated, as access might persist until the cache expires, even after revocation."]
      },
      {
        title: "Instant compromise surface",
        paragraphs: ["If an attacker gains access to a cached key store, they immediately get a comprehensive map of potential access points, dramatically expanding the attack surface."]
      },
      {
        title: "Technical vulnerabilities in key caching",
        paragraphs: [
          "Token Replay and Replay Attacks: Intercepted or stolen cached keys can be reused multiple times before cache invalidation, granting extended unauthorized access.",
          "Race Conditions in Distributed Systems: In distributed environments, cached keys can cause complex race conditions where permission updates don't immediately propagate across all cached instances, leading to inconsistent and unpredictable access control.",
          "Insufficient Hashing Methods leading to Credential Bypass: Choosing the right parameters for computing hash keys is crucial. Using methods like CRC32, which has a small target space, can lead to key collisions and credential bypass scenarios."
        ]
      },
      {
        title: "Best practices for secure authentication",
        paragraphs: [
          "Short-lived Tokens: Use time-bound access tokens with minimal lifespans.",
          "Real-time Verification: Validate permissions at each critical access point.",
          "Centralized Authorization: Maintain a single source of truth for access rights.",
          "Dynamic Permission Checks: Evaluate permissions in real-time during each request."
        ]
      },
      {
        title: "Performance considerations",
        paragraphs: ["The post addresses the concern about performance, stating that modern IAM systems and cloud infrastructure have evolved. The performance hit of real-time verification is minimal compared to the 'catastrophic potential of a security breach.' Prioritizing security-first strategies builds a robust and future-proof access control system."]
      },
      {
        title: "Practical implementation strategies",
        paragraphs: [
          "Use token-based authentication with short expiration times.",
          "Implement refresh mechanisms that require re-authentication.",
          "Store minimal, encrypted metadata instead of full permission sets.",
          "Leverage distributed caching with immediate invalidation capabilities."
        ]
      },
      {
        title: "Conclusion",
        paragraphs: [
          "Caching authentication keys is described as a 'shortcut that leads to a potential security nightmare.' In the current era of cyber threats, IAM systems should prioritize real-time, dynamic access control over 'marginal performance gains.'",
          "The final advice is: 'When it comes to security, convenience can be the enemy of protection. Strike this balance wisely.'"
        ]
      }
    ],
    tags: ["IAM", "Security", "Authentication", "Caching", "Best Practices"],
    readTime: "8 min read",
    featured: true
  },
  {
    id: "passkeys-safer-passwords",
    title: "Passkeys, a safer and simpler alternative to passwords",
    category: "Auth & identity",
    author: {
      name: "Jenny Wilson",
      handle: "@jennywilson",
      avatar: "/images/TeamAvatar-2.png"
    },
    date: "December 20, 2024",
    image: "/images/blog/fingerprint-biometric.jpg",
    excerpt: "Discover how passkeys are revolutionizing authentication by eliminating passwords while providing stronger security through biometric and device-based authentication.",
    content: "Passkeys represent a paradigm shift in digital authentication, moving away from the traditional password-based system that has plagued users and security teams for decades...",
    rawHtml: `
      <div class="prose max-w-none">
        <p class="text-lg text-gray-700 mb-6">Passkeys represent a paradigm shift in digital authentication, moving away from the traditional password-based system that has plagued users and security teams for decades.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">What are Passkeys?</h2>
        <p class="text-gray-700 mb-4">Passkeys are a new authentication method that uses public-key cryptography to provide secure, passwordless authentication. They eliminate the need for users to remember complex passwords while providing stronger security than traditional authentication methods.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">How Passkeys Work</h2>
        <p class="text-gray-700 mb-4">When you create a passkey, your device generates a unique cryptographic key pair. The private key stays securely on your device, while the public key is shared with the service you're authenticating to. This creates a secure, phishing-resistant authentication method.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Benefits of Passkeys</h2>
        <ul class="list-disc pl-6 mb-4">
          <li class="text-gray-700 mb-2"><strong>Enhanced Security:</strong> Resistant to phishing, credential stuffing, and other common attacks</li>
          <li class="text-gray-700 mb-2"><strong>Better User Experience:</strong> No need to remember or type passwords</li>
          <li class="text-gray-700 mb-2"><strong>Cross-Platform:</strong> Works across devices and platforms</li>
          <li class="text-gray-700 mb-2"><strong>Biometric Integration:</strong> Uses fingerprint, face recognition, or device PIN</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Implementation Considerations</h2>
        <p class="text-gray-700 mb-4">Implementing passkeys requires careful planning around user onboarding, device management, and fallback authentication methods. Organizations should consider gradual rollout strategies and comprehensive user education programs.</p>
      </div>
    `,
    tableOfContents: [
      {
        title: "What are Passkeys?",
        paragraphs: ["Passkeys are a new authentication method that uses public-key cryptography to provide secure, passwordless authentication. They eliminate the need for users to remember complex passwords while providing stronger security than traditional authentication methods."]
      },
      {
        title: "How Passkeys Work",
        paragraphs: ["When you create a passkey, your device generates a unique cryptographic key pair. The private key stays securely on your device, while the public key is shared with the service you're authenticating to. This creates a secure, phishing-resistant authentication method."]
      },
      {
        title: "Benefits of Passkeys",
        paragraphs: [
          "Enhanced Security: Resistant to phishing, credential stuffing, and other common attacks",
          "Better User Experience: No need to remember or type passwords",
          "Cross-Platform: Works across devices and platforms",
          "Biometric Integration: Uses fingerprint, face recognition, or device PIN"
        ]
      },
      {
        title: "Implementation Considerations",
        paragraphs: ["Implementing passkeys requires careful planning around user onboarding, device management, and fallback authentication methods. Organizations should consider gradual rollout strategies and comprehensive user education programs."]
      }
    ],
    tags: ["Passkeys", "Biometric", "Authentication", "Security", "UX"],
    readTime: "6 min read"
  },
  {
    id: "engineering-career-ladder",
    title: "So you want to write an Engineering career ladder?",
    category: "Company",
    author: {
      name: "Robert Fox",
      handle: "@robertfox",
      avatar: "/images/TeamAvatar-3.png"
    },
    date: "December 19, 2024",
    image: "/images/blog/coding-laptop-purple.jpg",
    excerpt: "A comprehensive guide to creating effective engineering career ladders that promote growth, clarity, and retention in your development teams.",
    content: "Creating an engineering career ladder is one of the most impactful things you can do for your development team. It provides clarity, motivation, and a clear path for growth...",
    rawHtml: `
      <div class="prose max-w-none">
        <p class="text-lg text-gray-700 mb-6">Creating an engineering career ladder is one of the most impactful things you can do for your development team. It provides clarity, motivation, and a clear path for growth that benefits both individual contributors and the organization as a whole.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Why Career Ladders Matter</h2>
        <p class="text-gray-700 mb-4">A well-defined career ladder helps engineers understand their current position, what's expected of them, and how they can advance. This clarity reduces uncertainty and provides motivation for professional development.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Key Components of a Career Ladder</h2>
        <ul class="list-disc pl-6 mb-4">
          <li class="text-gray-700 mb-2"><strong>Level Definitions:</strong> Clear descriptions of each level and expectations</li>
          <li class="text-gray-700 mb-2"><strong>Skills Matrix:</strong> Technical and soft skills required at each level</li>
          <li class="text-gray-700 mb-2"><strong>Promotion Criteria:</strong> Objective measures for advancement</li>
          <li class="text-gray-700 mb-2"><strong>Compensation Ranges:</strong> Salary bands aligned with levels</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Implementation Best Practices</h2>
        <p class="text-gray-700 mb-4">Start with your current team structure and work backwards. Gather input from engineers at all levels, benchmark against industry standards, and ensure the ladder supports both individual contributor and management tracks.</p>
      </div>
    `,
    tableOfContents: [
      {
        title: "Why Career Ladders Matter",
        paragraphs: ["A well-defined career ladder helps engineers understand their current position, what's expected of them, and how they can advance. This clarity reduces uncertainty and provides motivation for professional development."]
      },
      {
        title: "Key Components of a Career Ladder",
        paragraphs: [
          "Level Definitions: Clear descriptions of each level and expectations",
          "Skills Matrix: Technical and soft skills required at each level",
          "Promotion Criteria: Objective measures for advancement",
          "Compensation Ranges: Salary bands aligned with levels"
        ]
      },
      {
        title: "Implementation Best Practices",
        paragraphs: ["Start with your current team structure and work backwards. Gather input from engineers at all levels, benchmark against industry standards, and ensure the ladder supports both individual contributor and management tracks."]
      }
    ],
    tags: ["Engineering", "Career Development", "Management", "HR", "Leadership"],
    readTime: "10 min read"
  },
  {
    id: "api-rate-limiting-techniques",
    title: "Top techniques for effective API rate limiting",
    category: "Auth & identity",
    author: {
      name: "Alex Kim",
      handle: "@alexkim",
      avatar: "/images/TeamAvatar-4.png"
    },
    date: "December 20, 2024",
    image: "/images/blog/microchip-circuit.jpg",
    excerpt: "Learn the most effective strategies for implementing API rate limiting to protect your services from abuse while maintaining optimal performance for legitimate users.",
    content: "API rate limiting is a critical component of modern web security and performance management. When implemented correctly, it protects your services from abuse while ensuring legitimate users have optimal access...",
    rawHtml: `
      <div class="prose max-w-none">
        <p class="text-lg text-gray-700 mb-6">API rate limiting is a critical component of modern web security and performance management. When implemented correctly, it protects your services from abuse while ensuring legitimate users have optimal access.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Token Bucket Algorithm</h2>
        <p class="text-gray-700 mb-4">The token bucket algorithm provides a flexible approach to rate limiting by allowing bursts of traffic while maintaining an overall rate limit. Tokens are added to a bucket at a fixed rate, and requests consume tokens from the bucket.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Sliding Window Log</h2>
        <p class="text-gray-700 mb-4">This approach maintains a log of request timestamps within a sliding time window, providing accurate rate limiting that prevents clients from exceeding limits by spreading requests evenly.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Distributed Rate Limiting</h2>
        <p class="text-gray-700 mb-4">For microservices architectures, distributed rate limiting using Redis or similar technologies ensures consistent enforcement across multiple service instances.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Adaptive Rate Limiting</h2>
        <p class="text-gray-700 mb-4">Advanced implementations can dynamically adjust rate limits based on client behavior, server load, and other contextual factors to provide optimal user experience while maintaining security.</p>
      </div>
    `,
    tableOfContents: [
      {
        title: "Token Bucket Algorithm",
        paragraphs: ["The token bucket algorithm provides a flexible approach to rate limiting by allowing bursts of traffic while maintaining an overall rate limit. Tokens are added to a bucket at a fixed rate, and requests consume tokens from the bucket."]
      },
      {
        title: "Sliding Window Log",
        paragraphs: ["This approach maintains a log of request timestamps within a sliding time window, providing accurate rate limiting that prevents clients from exceeding limits by spreading requests evenly."]
      },
      {
        title: "Distributed Rate Limiting",
        paragraphs: ["For microservices architectures, distributed rate limiting using Redis or similar technologies ensures consistent enforcement across multiple service instances."]
      },
      {
        title: "Adaptive Rate Limiting",
        paragraphs: ["Advanced implementations can dynamically adjust rate limits based on client behavior, server load, and other contextual factors to provide optimal user experience while maintaining security."]
      }
    ],
    tags: ["API", "Rate Limiting", "Security", "Performance", "Best Practices"],
    readTime: "7 min read"
  },
  {
    id: "zero-trust-architecture",
    title: "Building a Zero Trust Architecture for Modern IAM",
    category: "Security",
    author: {
      name: "Emma Thompson",
      handle: "@emmathompson",
      avatar: "/images/TeamAvatar-5.png"
    },
    date: "December 18, 2024",
    image: "/images/blog/ai-microchip.jpg",
    excerpt: "Explore how to implement Zero Trust principles in your identity and access management strategy to create a more secure and resilient security posture.",
    content: "Zero Trust Architecture represents a fundamental shift in how we approach security, moving from perimeter-based defenses to a model where trust is never assumed and always verified...",
    rawHtml: `
      <div class="prose max-w-none">
        <p class="text-lg text-gray-700 mb-6">Zero Trust Architecture represents a fundamental shift in how we approach security, moving from perimeter-based defenses to a model where trust is never assumed and always verified.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Core Principles of Zero Trust</h2>
        <ul class="list-disc pl-6 mb-4">
          <li class="text-gray-700 mb-2"><strong>Verify Explicitly:</strong> Authenticate and authorize based on all available data points</li>
          <li class="text-gray-700 mb-2"><strong>Use Least Privilege Access:</strong> Limit user access with just-in-time and just-enough-access principles</li>
          <li class="text-gray-700 mb-2"><strong>Assume Breach:</strong> Design systems with the assumption that attackers are already inside</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">IAM Components for Zero Trust</h2>
        <p class="text-gray-700 mb-4">Modern IAM systems must support continuous authentication, risk-based access decisions, and micro-segmentation to effectively implement Zero Trust principles.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Implementation Roadmap</h2>
        <p class="text-gray-700 mb-4">Start with identity governance, implement strong authentication, then progressively add context-aware access controls and continuous monitoring capabilities.</p>
      </div>
    `,
    tableOfContents: [
      {
        title: "Core Principles of Zero Trust",
        paragraphs: [
          "Verify Explicitly: Authenticate and authorize based on all available data points",
          "Use Least Privilege Access: Limit user access with just-in-time and just-enough-access principles",
          "Assume Breach: Design systems with the assumption that attackers are already inside"
        ]
      },
      {
        title: "IAM Components for Zero Trust",
        paragraphs: ["Modern IAM systems must support continuous authentication, risk-based access decisions, and micro-segmentation to effectively implement Zero Trust principles."]
      },
      {
        title: "Implementation Roadmap",
        paragraphs: ["Start with identity governance, implement strong authentication, then progressively add context-aware access controls and continuous monitoring capabilities."]
      }
    ],
    tags: ["Zero Trust", "IAM", "Security", "Architecture", "Compliance"],
    readTime: "9 min read"
  },
  {
    id: "multi-factor-authentication-guide",
    title: "The Complete Guide to Multi-Factor Authentication",
    category: "Auth & identity",
    author: {
      name: "David Park",
      handle: "@davidpark",
      avatar: "/images/TeamAvatar-6.png"
    },
    date: "December 17, 2024",
    image: "/images/blog/golden-padlock.jpg",
    excerpt: "Everything you need to know about implementing and managing multi-factor authentication to significantly enhance your organization's security posture.",
    content: "Multi-Factor Authentication (MFA) has become a cornerstone of modern cybersecurity, providing an additional layer of protection beyond traditional passwords...",
    rawHtml: `
      <div class="prose max-w-none">
        <p class="text-lg text-gray-700 mb-6">Multi-Factor Authentication (MFA) has become a cornerstone of modern cybersecurity, providing an additional layer of protection beyond traditional passwords.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">MFA Factors Explained</h2>
        <ul class="list-disc pl-6 mb-4">
          <li class="text-gray-700 mb-2"><strong>Knowledge Factors:</strong> Something you know (passwords, PINs)</li>
          <li class="text-gray-700 mb-2"><strong>Possession Factors:</strong> Something you have (security keys, mobile devices)</li>
          <li class="text-gray-700 mb-2"><strong>Inherence Factors:</strong> Something you are (biometrics, behavioral patterns)</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Choosing the Right MFA Methods</h2>
        <p class="text-gray-700 mb-4">Evaluate factors based on security requirements, user experience, deployment complexity, and total cost of ownership to select the optimal MFA solution for your organization.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">MFA Implementation Best Practices</h2>
        <p class="text-gray-700 mb-4">Phased rollout, comprehensive user education, and fallback mechanisms are essential for successful MFA implementation that balances security and usability.</p>
      </div>
    `,
    tableOfContents: [
      {
        title: "MFA Factors Explained",
        paragraphs: [
          "Knowledge Factors: Something you know (passwords, PINs)",
          "Possession Factors: Something you have (security keys, mobile devices)",
          "Inherence Factors: Something you are (biometrics, behavioral patterns)"
        ]
      },
      {
        title: "Choosing the Right MFA Methods",
        paragraphs: ["Evaluate factors based on security requirements, user experience, deployment complexity, and total cost of ownership to select the optimal MFA solution for your organization."]
      },
      {
        title: "MFA Implementation Best Practices",
        paragraphs: ["Phased rollout, comprehensive user education, and fallback mechanisms are essential for successful MFA implementation that balances security and usability."]
      }
    ],
    tags: ["MFA", "Authentication", "Security", "Best Practices", "Implementation"],
    readTime: "12 min read"
  },
  {
    id: "cloud-security-compliance",
    title: "Navigating Cloud Security Compliance in 2024",
    category: "Security",
    author: {
      name: "Lisa Wang",
      handle: "@lisawang",
      avatar: "/images/TeamAvatar-7.png"
    },
    date: "December 16, 2024",
    image: "/images/blog/cloud-icon-well.jpg",
    excerpt: "Stay ahead of evolving compliance requirements with our comprehensive guide to cloud security standards and best practices for 2024.",
    content: "As organizations continue their digital transformation journey, cloud security compliance has become more complex and critical than ever before...",
    rawHtml: `
      <div class="prose max-w-none">
        <p class="text-lg text-gray-700 mb-6">As organizations continue their digital transformation journey, cloud security compliance has become more complex and critical than ever before.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Key Compliance Frameworks</h2>
        <ul class="list-disc pl-6 mb-4">
          <li class="text-gray-700 mb-2"><strong>GDPR:</strong> Data protection and privacy for EU citizens</li>
          <li class="text-gray-700 mb-2"><strong>SOC 2:</strong> Security, availability, processing integrity</li>
          <li class="text-gray-700 mb-2"><strong>ISO 27001:</strong> Information security management</li>
          <li class="text-gray-700 mb-2"><strong>HIPAA:</strong> Healthcare data protection</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Cloud-Specific Challenges</h2>
        <p class="text-gray-700 mb-4">Shared responsibility models, data residency requirements, and continuous compliance monitoring present unique challenges in cloud environments that require specialized approaches.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Automated Compliance Monitoring</h2>
        <p class="text-gray-700 mb-4">Leverage cloud-native tools and third-party solutions to implement continuous compliance monitoring, automated reporting, and real-time alerting for compliance violations.</p>
      </div>
    `,
    tableOfContents: [
      {
        title: "Key Compliance Frameworks",
        paragraphs: [
          "GDPR: Data protection and privacy for EU citizens",
          "SOC 2: Security, availability, processing integrity",
          "ISO 27001: Information security management",
          "HIPAA: Healthcare data protection"
        ]
      },
      {
        title: "Cloud-Specific Challenges",
        paragraphs: ["Shared responsibility models, data residency requirements, and continuous compliance monitoring present unique challenges in cloud environments that require specialized approaches."]
      },
      {
        title: "Automated Compliance Monitoring",
        paragraphs: ["Leverage cloud-native tools and third-party solutions to implement continuous compliance monitoring, automated reporting, and real-time alerting for compliance violations."]
      }
    ],
    tags: ["Cloud Security", "Compliance", "GDPR", "SOC2", "Best Practices"],
    readTime: "11 min read"
  },
  {
    id: "developer-experience-iam",
    title: "Improving Developer Experience with Modern IAM",
    category: "Company",
    author: {
      name: "Ryan Foster",
      handle: "@ryanfoster",
      avatar: "/images/TeamAvatar-8.png"
    },
    date: "December 15, 2024",
    image: "/images/blog/laptop-keyboard-typing.jpg",
    excerpt: "Learn how to balance security requirements with developer productivity by implementing IAM solutions that developers actually want to use.",
    content: "Developer Experience (DX) has become a critical factor in the success of modern software projects. When it comes to IAM, the challenge is balancing security requirements with developer productivity...",
    rawHtml: `
      <div class="prose max-w-none">
        <p class="text-lg text-gray-700 mb-6">Developer Experience (DX) has become a critical factor in the success of modern software projects. When it comes to IAM, the challenge is balancing security requirements with developer productivity.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Common IAM Pain Points for Developers</h2>
        <ul class="list-disc pl-6 mb-4">
          <li class="text-gray-700 mb-2">Complex authentication flows and SDK integration</li>
          <li class="text-gray-700 mb-2">Inconsistent permission models across services</li>
          <li class="text-gray-700 mb-2">Poor documentation and testing capabilities</li>
          <li class="text-gray-700 mb-2">Lengthy onboarding and credential management</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">IAM Developer Experience Best Practices</h2>
        <p class="text-gray-700 mb-4">Provide comprehensive SDKs, clear documentation, local development tools, and self-service capabilities to empower developers while maintaining security standards.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Measuring Developer Experience</h2>
        <p class="text-gray-700 mb-4">Track metrics like integration time, authentication success rates, and developer satisfaction scores to continuously improve your IAM developer experience.</p>
      </div>
    `,
    tableOfContents: [
      {
        title: "Common IAM Pain Points for Developers",
        paragraphs: [
          "Complex authentication flows and SDK integration",
          "Inconsistent permission models across services",
          "Poor documentation and testing capabilities",
          "Lengthy onboarding and credential management"
        ]
      },
      {
        title: "IAM Developer Experience Best Practices",
        paragraphs: ["Provide comprehensive SDKs, clear documentation, local development tools, and self-service capabilities to empower developers while maintaining security standards."]
      },
      {
        title: "Measuring Developer Experience",
        paragraphs: ["Track metrics like integration time, authentication success rates, and developer satisfaction scores to continuously improve your IAM developer experience."]
      }
    ],
    tags: ["Developer Experience", "IAM", "Productivity", "Security", "UX"],
    readTime: "8 min read"
  },
  {
    id: "identity-governance-framework",
    title: "Building an Effective Identity Governance Framework",
    category: "Auth & identity",
    author: {
      name: "Jennifer Liu",
      handle: "@jenniferliu",
      avatar: "/images/TeamAvatar-9.png"
    },
    date: "December 14, 2024",
    image: "/images/blog/security-layers.jpg",
    excerpt: "Discover the essential components of a robust identity governance framework that ensures compliance, security, and operational efficiency.",
    content: "Identity Governance is the foundation of effective access management, providing the policies, processes, and technologies needed to manage user identities and access rights...",
    rawHtml: `
      <div class="prose max-w-none">
        <p class="text-lg text-gray-700 mb-6">Identity Governance is the foundation of effective access management, providing the policies, processes, and technologies needed to manage user identities and access rights.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Core Components of Identity Governance</h2>
        <ul class="list-disc pl-6 mb-4">
          <li class="text-gray-700 mb-2"><strong>Identity Lifecycle Management:</strong> Automated provisioning and deprovisioning</li>
          <li class="text-gray-700 mb-2"><strong>Access Certification:</strong> Regular review and validation of user access</li>
          <li class="text-gray-700 mb-2"><strong>Role-Based Access Control:</strong> Structured permission models</li>
          <li class="text-gray-700 mb-2"><strong>Policy Management:</strong> Centralized security policies and rules</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Implementing Access Certification</h2>
        <p class="text-gray-700 mb-4">Establish regular access review cycles, define clear certification criteria, and automate reminder workflows to maintain continuous compliance and security.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Measuring Governance Effectiveness</h2>
        <p class="text-gray-700 mb-4">Track metrics like orphaned accounts, segregation of duty violations, and certification completion rates to measure and improve your identity governance program.</p>
      </div>
    `,
    tableOfContents: [
      {
        title: "Core Components of Identity Governance",
        paragraphs: [
          "Identity Lifecycle Management: Automated provisioning and deprovisioning",
          "Access Certification: Regular review and validation of user access",
          "Role-Based Access Control: Structured permission models",
          "Policy Management: Centralized security policies and rules"
        ]
      },
      {
        title: "Implementing Access Certification",
        paragraphs: ["Establish regular access review cycles, define clear certification criteria, and automate reminder workflows to maintain continuous compliance and security."]
      },
      {
        title: "Measuring Governance Effectiveness",
        paragraphs: ["Track metrics like orphaned accounts, segregation of duty violations, and certification completion rates to measure and improve your identity governance program."]
      }
    ],
    tags: ["Identity Governance", "Compliance", "Access Management", "Policies", "Framework"],
    readTime: "10 min read"
  }
];


export const INTEGRATIONS: Integration[] = [
  {
    logo: Productivity5Icon,
    title: "GitHub",
    category: "Development"
  },
  {
    logo: SlackIcon,
    title: "Slack",
    category: "Communication & Collaboration",
    isBuiltIn: true
  },
  {
    logo: Integration1Icon,
    title: "Notion",
    category: "Communication & Collaboration"
  },
  {
    logo: ShopifyIcon,
    title: "Shopify",
    category: "E-Commerce",
    isBuiltIn: true
  },
  {
    logo: Integration2Icon,
    title: "GitLab",
    category: "Development"
  },
  {
    logo: Integration3Icon,
    title: "Dropbox",
    category: "Cloud Storage",
    isBuiltIn: true
  },
  {
    logo: ZoomIcon,
    title: "Zoom",
    category: "Communication"
  },
  {
    logo: Integration4Icon,
    title: "Google Drive",
    category: "Cloud Storage"
  },
  {
    logo: Integration5Icon,
    title: "SourceTree",
    category: "Communication & Collaboration"
  },
  {
    logo: Integration6Icon,
    title: "Zapier",
    category: "Productivity"
  },
  {
    logo: Integration7Icon,
    title: "Microsoft OneDrive",
    category: "Files"
  },
  {
    logo: PythonIcon,
    title: "Python",
    category: "Development"
  },
  {
    logo: ReactJSIcon,
    title: "React",
    category: "Development"
  },
  {
    logo: VueIcon,
    title: "Vue",
    category: "Development"
  },
  {
    logo: HtmlIcon,
    title: "HTML 5",
    category: "Development"
  }
];

// Integration Categories
export const INTEGRATION_CATEGORIES = [
  "All",
  "Files",
  "Communication & Collaboration",
  "Productivity",
  "E-Commerce",
  "Cloud Storage",
  "Customer Relationship Management",
  "Development"
];


// Privacy Policy Links
export const PRIVACY_POLICY_LINKS: PolicyLink[] = [
  { id: "introduction", name: "Introduction" },
  { id: "applicability", name: "Applicability of this privacy policy" },
  { id: "personal-information", name: "Personal information we collect" },
  { id: "how-we-use", name: "How we use your personal information" },
  { id: "job-applicants", name: "Job Applicants" },
  { id: "legal-bases", name: "Legal bases for processing" },
  { id: "sharing-information", name: "How we share your personal information" },
  { id: "other-sites", name: "Other sites, mobile applications and services" },
  { id: "security-practices", name: "Security practices" },
  { id: "changes-policy", name: "Changes to this privacy policy" }
];

// Terms & Services Links
export const TERMS_AND_SERVICES_LINKS: PolicyLink[] = [
  { id: "changes-to-terms", name: "Changes to the terms of use" },
  { id: "accessing-website", name: "Accessing the website" },
  { id: "intellectual-property", name: "Intellectual property rights" },
  { id: "trademarks", name: "Trademarks" },
  { id: "prohibited-use", name: "Prohibited use" },
  { id: "no-reliance", name: "No reliance on information posted" },
  { id: "privacy", name: "Privacy" }
];

// Cookie Policy Links
export const COOKIE_POLICY_LINKS: PolicyLink[] = [
  { id: "what-are-cookies", name: "What are cookies?" },
  { id: "why-we-use-cookies", name: "Why we use cookies" },
  { id: "website-data-collection", name: "Website data collection preferences" },
  { id: "third-party-cookies", name: "Third-party cookies" },
  { id: "how-to-manage", name: "How to manage cookies" },
  { id: "your-consent", name: "Your consent" },
  { id: "updates-to-policy", name: "Updates to this policy" }
];


