import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from '@repo/ui';

const checkItems = [
  {
    title: 'Credentials & API Key Management',
    desc: 'Controle op veilige opslag van credentials, rotatie van API keys en gebruik van environment variables in plaats van hardcoded waarden.',
    icon: '🔑',
  },
  {
    title: 'Workflow Access Control',
    desc: 'Analyse van wie toegang heeft tot welke workflows, of er onnodige permissies zijn toegekend en of gevoelige workflows voldoende afgeschermd zijn.',
    icon: '🛡️',
  },
  {
    title: 'Data Encryption in Transit en at Rest',
    desc: 'Verificatie dat alle data-overdracht via HTTPS verloopt en dat opgeslagen gegevens versleuteld zijn conform moderne standaarden.',
    icon: '🔐',
  },
  {
    title: 'Node Configuratie & Vulnerability Scan',
    desc: 'Doorlichting van alle node configuraties op bekende kwetsbaarheden, verouderde integraties en onveilige instellingen in uw n8n omgeving.',
    icon: '🔍',
  },
  {
    title: 'User Management & Permissions',
    desc: 'Evaluatie van gebruikersrollen, multi-user toegang en het principe van least privilege binnen uw n8n installatie.',
    icon: '👥',
  },
  {
    title: 'Backup & Disaster Recovery',
    desc: 'Beoordeling van backup-strategieen, recovery procedures en de veerkracht van uw automatiseringen bij uitval of dataverlies.',
    icon: '💾',
  },
];

const faqs = [
  {
    question: 'What is n8n Workflow Analyzer?',
    answer: 'De n8n Workflow Analyzer is een ingebouwde tool die uw workflows controleert op veelvoorkomende fouten, performance issues en security risico\'s. Onze security audit gaat verder dan de standaard analyzer door ook credentials, toegangscontrole en infrastructuur te beoordelen.',
  },
  {
    question: 'Hoe vaak moet ik een security audit doen?',
    answer: 'Wij raden aan om minimaal elk kwartaal een security audit uit te voeren. Bij significante wijzigingen aan uw n8n omgeving, zoals nieuwe integraties of uitbreiding van het team, is een tussentijdse audit aan te raden.',
  },
  {
    question: 'Kan ik zelf een security audit uitvoeren?',
    answer: 'U kunt zelf een basis check doen met de ingebouwde n8n Workflow Analyzer. Voor een grondige security audit is echter specialistische kennis nodig van n8n architectuur, credential management en netwerk security. Onze experts bieden een volledig rapport met concrete actiepunten.',
  },
];

const SecurityAuditPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>n8n Security Audit | Beveilig uw Workflows | n8n-expert.be</title>
        <meta
          name="description"
          content="Professionele n8n security audit: bescherm uw workflows tegen kwetsbaarheden. Uitgebreide security analysis van credentials, access control, node configuratie en meer. Plan uw audit vandaag."
        />
        <link rel="canonical" href="https://n8n-expert.be/consultancy/security-audit" />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://n8n-expert.be' },
          { name: 'Consultancy', url: 'https://n8n-expert.be/consultancy' },
          { name: 'Security Audit', url: 'https://n8n-expert.be/consultancy/security-audit' },
        ]}
      />

      <ServiceSchema
        name="n8n Security Audit"
        description="Professionele security audit voor n8n workflows: credential management, access control, data encryption, node vulnerability scanning en disaster recovery analyse."
        url="https://n8n-expert.be/consultancy/security-audit"
        provider="n8n-expert.be"
      />

      <FAQSchema faqs={faqs} />

      <div className="pt-28 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <header className="mb-16">
            <div className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-4">
              Security
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-text-primary mb-8 tracking-tighter leading-tight">
              n8n Security Audit: <span className="text-brand">Bescherm</span> uw Automatiseringen
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl leading-relaxed">
              Een n8n security audit is essentieel om uw workflows te beschermen tegen kwetsbaarheden en datalekken. Onze experts analyseren uw volledige n8n omgeving op security risico's: van credential management en access control tot node configuratie en data encryption. Door proactief kwetsbaarheden te identificeren voorkomt u kostbare incidenten en zorgt u ervoor dat uw automatiseringen voldoen aan de hoogste beveiligingsstandaarden.
            </p>
          </header>

          {/* Wat controleert onze security audit? */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-10">
              Wat controleert onze <span className="text-brand">security audit</span>?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {checkItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-surface-border-hover transition-all"
                >
                  <div className="flex items-start gap-5">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-text-primary mb-2">{item.title}</h3>
                      <p className="text-text-secondary text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Security Audit Rapport */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
              Security Audit <span className="text-brand">Rapport</span>
            </h2>
            <div className="bg-surface-card border border-surface-border rounded-2xl p-8 md:p-12">
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Na de audit ontvangt u een uitgebreid rapport met een helder overzicht van alle bevindingen. Het rapport bevat:
              </p>
              <ul className="space-y-4">
                {[
                  'Een risico-classificatie per bevinding (kritiek, hoog, medium, laag)',
                  'Gedetailleerde beschrijving van elke kwetsbaarheid met bewijs',
                  'Concrete aanbevelingen en stapsgewijze remediation instructies',
                  'Een prioriteitenlijst zodat u de grootste risico\'s als eerste aanpakt',
                  'Best practice checklist voor doorlopende security monitoring',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-text-secondary">
                    <span className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-10">
              Veelgestelde <span className="text-brand">Vragen</span>
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-surface-card border border-surface-border rounded-2xl p-8"
                >
                  <h3 className="text-xl font-bold text-text-primary mb-3">{faq.question}</h3>
                  <p className="text-text-secondary">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-8">Gerelateerde pagina's</h2>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/consultancy"
                className="bg-surface-card hover:bg-surface-card/80 border border-surface-border text-text-primary px-6 py-3 rounded-full text-sm font-medium transition-all"
              >
                Alle consultancy diensten
              </Link>
              <Link
                to="/portfolio"
                className="bg-surface-card hover:bg-surface-card/80 border border-surface-border text-text-primary px-6 py-3 rounded-full text-sm font-medium transition-all"
              >
                Bekijk ons portfolio
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-surface-border">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Plan uw <span className="text-brand">security audit</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Wacht niet tot het te laat is. Laat uw n8n omgeving doorlichten door een expert en krijg duidelijke actiepunten om uw workflows te beveiligen.
            </p>
            <Link
              to="/consultancy"
              className="inline-block bg-brand hover:bg-brand-hover text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-brand/20 hover:scale-105"
            >
              Plan uw security audit
            </Link>
          </section>
        </article>
      </div>
    </>
  );
};

export default SecurityAuditPage;
