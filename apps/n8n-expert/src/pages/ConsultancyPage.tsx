import React from 'react';
import { Helmet } from 'react-helmet-async';
import ConsultancyServices from '@/components/ConsultancyServices';

const ConsultancyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>n8n Consultancy | Audit, Advies & Architectuur Review | n8n-expert.be</title>
        <meta name="description" content="Professionele n8n consultancy: audit, architectuur review, performance optimalisatie en security assessment door een ervaren expert." />
      </Helmet>
      <div className="pt-24">
        <ConsultancyServices />
      </div>
    </>
  );
};

export default ConsultancyPage;
