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
  const baseUrl = url.split('/').slice(0, 3).join('/');
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    "name": name,
    "description": description,
    "url": url,
    "provider": {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": provider,
      "url": baseUrl
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
  about?: Array<{ name: string; sameAs?: string }>;
  mentions?: Array<{ name: string; sameAs?: string }>;
}

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  headline,
  description,
  url,
  datePublished = "2024-01-01",
  dateModified = "2025-02-01",
  author = "AI Automatisatie",
  about,
  mentions
}) => {
  const baseUrl = url.split('/').slice(0, 3).join('/');
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    "headline": headline,
    "description": description,
    "url": url,
    "mainEntityOfPage": {
      "@id": `${url}#webpage`
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": author,
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": author,
      "url": baseUrl
    },
    "inLanguage": "nl-BE"
  };

  if (about && about.length > 0) {
    schema.about = about.map(item => {
      const thing: Record<string, string> = { "@type": "Thing", "name": item.name };
      if (item.sameAs) thing.sameAs = item.sameAs;
      return thing;
    });
  }

  if (mentions && mentions.length > 0) {
    schema.mentions = mentions.map(item => {
      const thing: Record<string, string> = { "@type": "Thing", "name": item.name };
      if (item.sameAs) thing.sameAs = item.sameAs;
      return thing;
    });
  }

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

// WebPage Schema for individual pages
interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}

export const WebPageSchema: React.FC<WebPageSchemaProps> = ({
  name,
  description,
  url,
  datePublished = "2024-01-01",
  dateModified = "2025-02-01"
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    "url": url,
    "name": name,
    "description": description,
    "isPartOf": {
      "@id": `${url.split('/').slice(0, 3).join('/')}/#website`
    },
    "about": {
      "@id": `${url.split('/').slice(0, 3).join('/')}/#organization`
    },
    "inLanguage": "nl-BE",
    "datePublished": datePublished,
    "dateModified": dateModified
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Review/Testimonial Schema
interface ReviewSchemaProps {
  reviewBody: string;
  author: string;
  authorType?: 'Person' | 'Organization';
  itemReviewed?: string;
  ratingValue?: number;
}

export const ReviewSchema: React.FC<ReviewSchemaProps> = ({
  reviewBody,
  author,
  authorType = 'Person',
  itemReviewed = "AI Automatisatie West-Vlaanderen",
  ratingValue = 5
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "reviewBody": reviewBody,
    "author": {
      "@type": authorType,
      "name": author
    },
    "itemReviewed": {
      "@type": "Organization",
      "name": itemReviewed
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": ratingValue,
      "bestRating": 5
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
