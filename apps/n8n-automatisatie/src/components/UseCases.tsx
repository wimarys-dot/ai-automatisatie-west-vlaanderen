import React from 'react';

const useCases = [
  {
    title: 'CRM Automatisering',
    desc: 'Automatische lead capture, follow-up sequences, en pipeline management met Teamleader, HubSpot of Salesforce.',
    result: '60% minder handmatig CRM werk',
  },
  {
    title: 'Facturatie & Boekhouding',
    desc: 'Automatische factuurverwerking, bankreconciliatie en BTW-voorbereiding met Exact Online, Yuki of Octopus.',
    result: '15u/week tijdswinst',
  },
  {
    title: 'E-commerce Flows',
    desc: 'Order processing, voorraad sync, verzendlabels en review requests voor Shopify en WooCommerce.',
    result: '85% snellere orderverwerking',
  },
  {
    title: 'HR & Onboarding',
    desc: 'Nieuwe medewerker workflows: contracten, accounts aanmaken, hardware bestellen, training planning.',
    result: 'Van 2 dagen naar 2 uur',
  },
  {
    title: 'Data Synchronisatie',
    desc: 'Real-time sync tussen al uw systemen. Geen dubbele invoer, altijd actuele data overal.',
    result: 'Zero handmatige invoer',
  },
  {
    title: 'Rapportage & Dashboards',
    desc: 'Automatische rapporten, KPI dashboards en alerts. Altijd actueel inzicht in uw bedrijf.',
    result: 'Real-time business intelligence',
  },
];

const UseCases: React.FC = () => {
  return (
    <section className="py-24 bg-surface-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Populaire <span className="text-brand">Use Cases</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Ontdek hoe Belgische bedrijven n8n gebruiken om hun processen te transformeren.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((uc, i) => (
            <div key={i} className="bg-surface-bg border border-surface-border rounded-2xl p-8 hover:border-surface-border-hover transition-all">
              <h3 className="text-lg font-bold text-text-primary mb-3">{uc.title}</h3>
              <p className="text-text-secondary text-sm mb-6">{uc.desc}</p>
              <div className="pt-4 border-t border-surface-border">
                <span className="text-brand font-bold text-sm">{uc.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
