import React from 'react';
import { Helmet } from 'react-helmet-async';
import PricingSection from '@/components/PricingSection';

const PrijzenPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>n8n Prijzen | Transparante pakketprijzen | n8n-automatisatie.be</title>
        <meta name="description" content="Transparante n8n automatisering prijzen. Starter €990, Professional €2.490, Enterprise op maat. Geen verborgen kosten." />
      </Helmet>
      <div className="pt-24">
        <PricingSection />
      </div>
    </>
  );
};

export default PrijzenPage;
