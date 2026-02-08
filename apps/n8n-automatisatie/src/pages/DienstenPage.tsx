import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceCards from '@/components/ServiceCards';

const DienstenPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>n8n Diensten | Implementatie, Hosting & Training | n8n-automatisatie.be</title>
        <meta name="description" content="Onze n8n diensten: implementatie, workflow design, migratie van Zapier/Make, API integraties, managed hosting en training voor Belgische bedrijven." />
      </Helmet>
      <div className="pt-24">
        <ServiceCards />
      </div>
    </>
  );
};

export default DienstenPage;
