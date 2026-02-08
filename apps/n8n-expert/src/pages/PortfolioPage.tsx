import React from 'react';
import { Helmet } from 'react-helmet-async';
import PortfolioSection from '@/components/PortfolioSection';

const PortfolioPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | n8n Project Showcases | n8n-expert.be</title>
        <meta name="description" content="Portfolio van succesvolle n8n projecten. Enterprise migraties, AI-powered oplossingen en multi-system integraties." />
      </Helmet>
      <div className="pt-24">
        <PortfolioSection />
      </div>
    </>
  );
};

export default PortfolioPage;
