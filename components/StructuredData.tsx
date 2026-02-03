import React from 'react';
import { Helmet } from 'react-helmet-async';

// FAQ Schema
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Service Schema
interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  provider?: string;
  areaServed?: string[];
  priceRange?: string;
}

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description,
  url,
  provider = "AI Automatisatie West-Vlaanderen",
  areaServed = ["Brugge", "Kortrijk", "Oostende", "Roeselare", "Ieper"],
  priceRange = "€€"
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": "https://ai-automatisatie.be"
    },
    "areaServed": areaServed.map(city => ({
      "@type": "City",
      "name": city
    })),
    "priceRange": priceRange
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// HowTo Schema
interface HowToStep {
  name: string;
  text: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration e.g., "PT30M"
}

export const HowToSchema: React.FC<HowToSchemaProps> = ({
  name,
  description,
  steps,
  totalTime
}) => {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  };

  if (totalTime) {
    schema.totalTime = totalTime;
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Article Schema
interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  headline,
  description,
  url,
  datePublished = "2024-01-01",
  dateModified = new Date().toISOString().split('T')[0],
  author = "AI Automatisatie"
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "url": url,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://ai-automatisatie.be"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AI Automatisatie West-Vlaanderen",
      "url": "https://ai-automatisatie.be"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Local Business for City Pages
interface LocalBusinessSchemaProps {
  city: string;
  description: string;
  url: string;
}

export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  city,
  description,
  url
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `AI Automatisatie ${city}`,
    "description": description,
    "url": url,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "West-Vlaanderen",
      "addressCountry": "BE"
    },
    "areaServed": {
      "@type": "City",
      "name": city
    },
    "priceRange": "€€"
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
