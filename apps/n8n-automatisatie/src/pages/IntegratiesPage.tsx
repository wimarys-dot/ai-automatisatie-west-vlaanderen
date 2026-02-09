import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BreadcrumbSchema, WebPageSchema } from '@repo/ui';
import IntegrationsShowcase from '@/components/IntegrationsShowcase';

const IntegratiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>n8n Integraties | 400+ tools verbinden | n8n-automatisatie.be</title>
        <meta name="description" content="n8n integraties met Belgische en internationale software: Teamleader, Exact Online, Shopify, HubSpot en 400+ andere tools. API-koppelingen op maat." />
        <link rel="canonical" href="https://n8n-automatisatie.be/integraties" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://n8n-automatisatie.be/' },
        { name: 'Integraties', url: 'https://n8n-automatisatie.be/integraties' },
      ]} />
      <WebPageSchema
        name="n8n Integraties - 400+ Tools Verbinden"
        description="Verbind al uw bedrijfssoftware met n8n integraties."
        url="https://n8n-automatisatie.be/integraties"
      />

      <div className="pt-24">
        <IntegrationsShowcase />
        <div className="max-w-4xl mx-auto px-4 pb-16 flex flex-wrap justify-center gap-4">
          <Link to="/diensten" className="text-brand font-bold hover:underline">Onze diensten</Link>
          <span className="text-text-muted">|</span>
          <Link to="/use-cases" className="text-brand font-bold hover:underline">Use cases</Link>
          <span className="text-text-muted">|</span>
          <Link to="/prijzen" className="text-brand font-bold hover:underline">Bekijk prijzen</Link>
        </div>
      </div>
    </>
  );
};

export default IntegratiesPage;
