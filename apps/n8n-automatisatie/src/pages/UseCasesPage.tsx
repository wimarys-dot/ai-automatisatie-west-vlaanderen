import React from 'react';
import { Helmet } from 'react-helmet-async';
import UseCases from '@/components/UseCases';

const UseCasesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>n8n Use Cases | CRM, Facturatie, E-commerce & meer | n8n-automatisatie.be</title>
        <meta name="description" content="Populaire n8n use cases: CRM automatisering, facturatie, e-commerce flows, HR onboarding, data sync en rapportage voor Belgische bedrijven." />
      </Helmet>
      <div className="pt-24">
        <UseCases />
      </div>
    </>
  );
};

export default UseCasesPage;
