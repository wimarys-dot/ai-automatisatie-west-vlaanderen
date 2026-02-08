import React from 'react';
import { Helmet } from 'react-helmet-async';
import IntegrationsShowcase from '@/components/IntegrationsShowcase';

const IntegratiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>n8n Integraties | 400+ tools verbinden | n8n-automatisatie.be</title>
        <meta name="description" content="n8n integraties met Belgische en internationale software: Teamleader, Exact Online, Shopify, HubSpot en 400+ andere tools." />
      </Helmet>
      <div className="pt-24">
        <IntegrationsShowcase />
      </div>
    </>
  );
};

export default IntegratiesPage;
