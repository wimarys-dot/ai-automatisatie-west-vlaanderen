import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const integrations = [
  { name: 'Teamleader', category: 'CRM' },
  { name: 'Exact Online', category: 'Boekhouding' },
  { name: 'Yuki', category: 'Boekhouding' },
  { name: 'Octopus', category: 'Boekhouding' },
  { name: 'Billit', category: 'Facturatie' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Odoo', category: 'ERP' },
  { name: 'Shopify', category: 'E-commerce' },
  { name: 'WooCommerce', category: 'E-commerce' },
  { name: 'Lightspeed', category: 'Retail' },
  { name: 'Sendcloud', category: 'Verzending' },
  { name: 'Mollie', category: 'Betalingen' },
  { name: 'Mailchimp', category: 'Marketing' },
  { name: 'ActiveCampaign', category: 'Marketing' },
  { name: 'Slack', category: 'Communicatie' },
  { name: 'Microsoft 365', category: 'Productiviteit' },
  { name: 'Google Workspace', category: 'Productiviteit' },
  { name: 'WhatsApp Business', category: 'Communicatie' },
  { name: 'Notion', category: 'Productiviteit' },
  { name: 'Airtable', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Stripe', category: 'Betalingen' },
  { name: 'Zendesk', category: 'Klantenservice' },
  { name: 'Salesforce', category: 'CRM' },
];

const categories = [
  {
    title: 'CRM & Sales',
    desc: 'Automatiseer uw volledige sales pipeline. Van lead capture tot deal closing, alles naadloos verbonden.',
    tools: ['Teamleader', 'HubSpot', 'Salesforce', 'Pipedrive'],
  },
  {
    title: 'Boekhouding',
    desc: 'Koppel uw boekhoudsoftware voor automatische factuurverwerking, bankreconciliatie en BTW-aangifte.',
    tools: ['Exact Online', 'Yuki', 'Octopus', 'Billit'],
  },
  {
    title: 'E-commerce',
    desc: 'Stroomlijn uw webshop met geautomatiseerde orderverwerking, voorraadsynchronisatie en betalingen.',
    tools: ['Shopify', 'WooCommerce', 'Lightspeed', 'Mollie'],
  },
  {
    title: 'Communicatie',
    desc: 'Verbind al uw communicatiekanalen en automatiseer notificaties, berichten en interne updates.',
    tools: ['Slack', 'WhatsApp', 'Microsoft Teams', 'Gmail'],
  },
  {
    title: 'Productiviteit',
    desc: 'Synchroniseer data tussen uw productiviteitstools en elimineer dubbele invoer voorgoed.',
    tools: ['Google Sheets', 'Notion', 'Airtable', 'Monday'],
  },
  {
    title: 'Databases & API',
    desc: 'Maak directe koppelingen met databases en externe API\'s voor real-time data synchronisatie.',
    tools: ['PostgreSQL', 'MySQL', 'REST API', 'GraphQL'],
  },
];

const IntegrationsShowcase: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Hoeveel integraties heeft n8n?',
      a: 'n8n heeft meer dan 400 native integraties (nodes) en dit aantal groeit continu. Naast de ingebouwde nodes kunt u via de HTTP Request node met vrijwel elke API verbinden. De actieve open-source community draagt ook regelmatig nieuwe nodes bij, waardoor het ecosysteem steeds uitgebreider wordt.',
    },
    {
      q: 'Kan n8n met mijn software verbinden?',
      a: 'In de meeste gevallen wel. Met 400+ native integraties zijn de populairste tools al gedekt. Heeft uw software een API? Dan kunnen wij via de HTTP Request node een custom koppeling bouwen. Zelfs legacy systemen zonder API kunnen vaak via workarounds (zoals database connecties of file-based integraties) worden verbonden.',
    },
    {
      q: 'Wat als er geen native integratie is?',
      a: 'Dan gebruiken we de krachtige HTTP Request node van n8n. Hiermee kunnen we verbinden met elke REST of GraphQL API. Wij configureren de authenticatie, data mapping en foutafhandeling. Het resultaat is even betrouwbaar als een native integratie, volledig op maat voor uw use case.',
    },
    {
      q: 'Hoe veilig zijn de integraties?',
      a: 'Zeer veilig. n8n slaat credentials versleuteld op en communiceert via HTTPS. Bij self-hosting verlaat uw data nooit uw eigen servers. Wij configureren OAuth2 waar mogelijk, gebruiken API keys met minimale rechten en zetten rate limiting in om misbruik te voorkomen. Alle integraties worden grondig getest voordat ze live gaan.',
    },
  ];

  return (
    <section className="py-24 bg-surface-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            n8n Integraties: 400+ Tools <span className="text-brand">Verbinden</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
            n8n is een krachtig open-source workflow automation platform met meer dan 400 native
            integraties (nodes). Verbind al uw favoriete apps, tools en cloud services in geautomatiseerde
            workflows. Van CRM en boekhouding tot e-commerce en databases: met n8n kunt u vrijwel alles
            automatiseren. Elke node is een bouwsteen die u visueel verbindt, zodat data automatisch
            tussen uw systemen stroomt zonder handmatige tussenkomst.
          </p>
        </div>

        {/* Integraties grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
          {integrations.map((int, i) => (
            <div key={i} className="bg-white border border-surface-border rounded-xl p-4 text-center hover:border-brand hover:shadow-md transition-all">
              <div className="text-sm font-bold text-text-primary mb-1">{int.name}</div>
              <div className="text-xs text-text-muted">{int.category}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-20">
          <p className="text-text-muted text-sm">
            En nog veel meer... n8n ondersteunt 400+ native integraties + elke API via HTTP requests.
          </p>
        </div>

        {/* Categorieën */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-10 text-center">
            Populaire n8n Integratie <span className="text-brand">Categorieën</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white border border-surface-border rounded-2xl p-6 hover:border-brand hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-text-primary mb-2">{cat.title}</h3>
                <p className="text-text-secondary text-sm mb-4">{cat.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((tool, j) => (
                    <span key={j} className="px-3 py-1 bg-surface-card border border-surface-border rounded-full text-xs font-medium text-text-secondary">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Custom API */}
        <section className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 text-center">
            Custom API <span className="text-brand">Integraties</span>
          </h2>
          <div className="bg-white border border-surface-border rounded-2xl p-8 md:p-10">
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Niet elke tool heeft een native n8n node, maar dat is geen probleem. Met de krachtige HTTP
              Request node van n8n kunt u verbinden met elke REST API of GraphQL endpoint. Dit opent
              de deur naar onbeperkte mogelijkheden voor workflow automation. Wij configureren de
              authenticatie (OAuth2, API keys, Bearer tokens), data transformatie en foutafhandeling
              zodat uw custom integratie net zo betrouwbaar werkt als een native node.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Heeft u een Belgische niche-applicatie of een intern systeem met een API? Wij bouwen
              de koppeling op maat. Onze ervaring met tientallen custom API integraties zorgt ervoor
              dat ook uw specifieke tools naadloos onderdeel worden van uw geautomatiseerde workflows.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-10 text-center">
            Veelgestelde <span className="text-brand">Vragen</span> over Integraties
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-surface-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-white/80 transition-colors"
                >
                  <span className="font-bold text-text-primary pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-brand flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="p-5 pt-0 bg-white">
                    <p className="text-text-secondary leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/diensten"
              className="px-6 py-3 bg-white border border-surface-border rounded-full text-text-primary font-semibold hover:border-brand transition-colors"
            >
              Onze Diensten
            </Link>
            <Link
              to="/use-cases"
              className="px-6 py-3 bg-white border border-surface-border rounded-full text-text-primary font-semibold hover:border-brand transition-colors"
            >
              Bekijk Use Cases
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IntegrationsShowcase;
