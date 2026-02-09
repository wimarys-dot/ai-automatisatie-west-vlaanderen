import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BreadcrumbSchema, ServiceSchema } from '@repo/ui';
import ConsultancyServices from '@/components/ConsultancyServices';

const ConsultancyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>n8n Consultant België | Expert Advies & Architectuur Review | n8n-expert.be</title>
        <meta
          name="description"
          content="Ervaren n8n consultant in België. Expert advies, architectuur reviews, performance optimalisatie en security audits voor uw workflow automation. Specialist in AI agents en schaalbare n8n oplossingen."
        />
        <meta
          name="keywords"
          content="n8n consultant, n8n advies, n8n expert België, workflow automation consultant, n8n architectuur review, n8n security audit, AI agents consultant"
        />
        <link rel="canonical" href="https://n8n-expert.be/consultancy" />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://n8n-expert.be/' },
          { name: 'Consultancy', url: 'https://n8n-expert.be/consultancy' },
        ]}
      />

      <ServiceSchema
        name="n8n Consultancy & Advies"
        description="Professionele n8n consultancy diensten: audit, advies, architectuur review, performance optimalisatie en security assessment door een gecertificeerde n8n expert in België."
        url="https://n8n-expert.be/consultancy"
        provider="n8n-expert.be"
        areaServed={['België', 'Vlaanderen', 'Brussel', 'Wallonië']}
      />

      <div className="pt-24">
        <ConsultancyServices />

        {/* Bottom CTA */}
        <section className="py-20 bg-surface-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Klaar om uw <span className="text-brand">n8n omgeving</span> te optimaliseren?
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
              Plan een vrijblijvend gesprek en ontdek hoe een ervaren n8n consultant uw workflow automation
              naar het volgende niveau tilt. Van audit tot implementatie &mdash; ik help u bij elke stap.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href="#contact"
                className="bg-brand hover:bg-brand-hover text-text-inverted px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-brand/20 hover:scale-105"
              >
                Neem contact op
              </a>
              <Link
                to="/portfolio"
                className="bg-surface-bg hover:bg-surface-border border border-surface-border text-text-primary px-10 py-5 rounded-full font-bold text-lg transition-all"
              >
                Bekijk portfolio
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultancyPage;
