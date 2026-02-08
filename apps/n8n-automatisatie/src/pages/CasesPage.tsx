import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CaseStudies } from '@repo/ui';

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
        <title>Klant Cases | n8n Succesverhalen | n8n-automatisatie.be</title>
        <meta name="description" content="Belgische n8n succesverhalen. Ontdek hoe bedrijven in Gent, Antwerpen en Leuven hun processen automatiseerden." />
      </Helmet>
      <div className="pt-24">
        <CaseStudies cases={cases} title="Belgische" highlight="Succesverhalen" />
      </div>
    </>
  );
};

export default CasesPage;
