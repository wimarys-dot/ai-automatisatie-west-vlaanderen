import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BreadcrumbSchema, WebPageSchema } from '@repo/ui';
import UseCases from '@/components/UseCases';

const UseCasesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Workflow Automatisering Use Cases | CRM, Facturatie, E-commerce | n8n-automatisatie.be</title>
        <meta name="description" content="Ontdek hoe bedrijven workflowautomatisering inzetten: CRM automatisering, facturatie, e-commerce flows, HR onboarding, data sync en rapportage met n8n." />
        <link rel="canonical" href="https://n8n-automatisatie.be/use-cases" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://n8n-automatisatie.be/' },
        { name: 'Use Cases', url: 'https://n8n-automatisatie.be/use-cases' },
      ]} />
      <WebPageSchema
        name="Workflow Automatisering Use Cases"
        description="Praktische voorbeelden van workflowautomatisering met n8n voor Belgische bedrijven."
        url="https://n8n-automatisatie.be/use-cases"
      />

      <div className="pt-24">
        <UseCases />
      </div>
    </>
  );
};

export default UseCasesPage;
