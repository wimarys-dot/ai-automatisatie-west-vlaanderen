import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BreadcrumbSchema, WebPageSchema } from '@repo/ui';
import PortfolioSection from '@/components/PortfolioSection';

const PortfolioPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | n8n Project Showcases | n8n-expert.be</title>
        <meta name="description" content="Portfolio van succesvolle n8n projecten. Enterprise migraties, AI-powered oplossingen en multi-system integraties door een certified n8n expert." />
        <link rel="canonical" href="https://n8n-expert.be/portfolio" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://n8n-expert.be/' },
        { name: 'Portfolio', url: 'https://n8n-expert.be/portfolio' },
      ]} />
      <WebPageSchema
        name="n8n Expert Portfolio - Project Showcases"
        description="Portfolio van succesvolle n8n projecten en automatiseringen."
        url="https://n8n-expert.be/portfolio"
      />

      <div className="pt-24">
        <PortfolioSection />
        <div className="max-w-4xl mx-auto px-4 pb-16 flex flex-wrap justify-center gap-4">
          <Link to="/consultancy" className="text-brand font-bold hover:underline">Consultancy diensten</Link>
          <span className="text-text-muted">|</span>
          <Link to="/kennisbank" className="text-brand font-bold hover:underline">Kennisbank</Link>
          <span className="text-text-muted">|</span>
          <a href="https://n8n-automatisatie.be/cases" target="_blank" rel="noopener noreferrer" className="text-brand font-bold hover:underline">Meer cases op n8n-automatisatie.be</a>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
