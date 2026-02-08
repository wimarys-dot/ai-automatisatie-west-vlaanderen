export interface NavItem {
  label: string;
  path: string;
}

export interface SiteConfig {
  name: string;
  domain: string;
  tagline: string;
  email: string;
  phone?: string;
  logo: {
    text: string;
    accent: string;
  };
  navItems: NavItem[];
  ctaLabel: string;
  ctaAction: string;
  webhookUrl: string;
  ga4Id?: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; path: string }[];
}

export interface FooterConfig {
  columns: FooterColumn[];
  tagline: string;
  copyright: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface HowToStep {
  name: string;
  text: string;
}
