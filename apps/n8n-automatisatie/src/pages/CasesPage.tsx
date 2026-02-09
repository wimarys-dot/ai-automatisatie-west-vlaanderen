import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CaseStudies, BreadcrumbSchema, WebPageSchema } from '@repo/ui';

const CasesPage: React.FC = () => {
  const cases = [
    {
      loc: 'Gent',
      title: 'E-commerce Order Flow',
      desc: 'Shopify orders automatisch verwerkt via n8n: voorraad update, verzendlabel gegenereerd en klant genotificeerd. Alles in 30 seconden.',
      stat: '30 sec/order',
    },
    {
      loc: 'Antwerpen',
      title: 'CRM Lead Scoring',
      desc: 'Automatische lead kwalificatie op basis van website gedrag, email opens en bedrijfsgrootte. Prioriteiten direct in Teamleader.',
      stat: '3x meer conversie',
    },
    {
      loc: 'Leuven',
      title: 'Facturatie Automatisering',
      desc: 'Exact Online gekoppeld aan projectmanagement tool. Vorderingsstaten worden automatisch opgesteld op basis van mijlpalen.',
      stat: '20u/maand bespaard',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Klant Cases | n8n Succesverhalen België | n8n-automatisatie.be</title>
        <meta name="description" content="Belgische n8n succesverhalen. Ontdek hoe bedrijven in Gent, Antwerpen en Leuven hun processen automatiseerden met n8n workflows." />
        <link rel="canonical" href="https://n8n-automatisatie.be/cases" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://n8n-automatisatie.be/' },
        { name: 'Cases', url: 'https://n8n-automatisatie.be/cases' },
      ]} />
      <WebPageSchema
        name="n8n Klant Cases & Succesverhalen"
        description="Belgische n8n succesverhalen en case studies."
        url="https://n8n-automatisatie.be/cases"
      />

      <div className="pt-24">
        <CaseStudies cases={cases} title="Belgische" highlight="Succesverhalen" />
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

export default CasesPage;
