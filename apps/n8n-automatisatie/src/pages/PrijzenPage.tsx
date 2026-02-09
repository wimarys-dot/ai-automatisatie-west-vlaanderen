import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BreadcrumbSchema, WebPageSchema } from '@repo/ui';
import PricingSection from '@/components/PricingSection';

const PrijzenPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>n8n Prijzen | Transparante pakketprijzen | n8n-automatisatie.be</title>
        <meta name="description" content="Transparante n8n automatisering prijzen. Starter €990, Professional €2.490, Enterprise op maat. Geen verborgen kosten. Inclusief managed hosting opties." />
        <link rel="canonical" href="https://n8n-automatisatie.be/prijzen" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://n8n-automatisatie.be/' },
        { name: 'Prijzen', url: 'https://n8n-automatisatie.be/prijzen' },
      ]} />
      <WebPageSchema
        name="n8n Prijzen & Pakketten"
        description="Transparante n8n automatisering prijzen voor Belgische bedrijven."
        url="https://n8n-automatisatie.be/prijzen"
      />

      <div className="pt-24">
        <PricingSection />
        <div className="max-w-4xl mx-auto px-4 pb-16 flex flex-wrap justify-center gap-4">
          <Link to="/diensten" className="text-brand font-bold hover:underline">Bekijk onze diensten</Link>
          <span className="text-text-muted">|</span>
          <Link to="/diensten/managed-hosting" className="text-brand font-bold hover:underline">Managed hosting</Link>
          <span className="text-text-muted">|</span>
          <Link to="/cases" className="text-brand font-bold hover:underline">Succesverhalen</Link>
        </div>
      </div>
    </>
  );
};

export default PrijzenPage;
