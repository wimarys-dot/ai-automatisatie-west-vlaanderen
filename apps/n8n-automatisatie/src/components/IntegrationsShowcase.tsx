import React from 'react';

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
];

const IntegrationsShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-surface-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            50+ <span className="text-brand">Integraties</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            n8n verbindt met honderden tools. Hier zijn de populairste Belgische en internationale integraties die wij implementeren.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {integrations.map((int, i) => (
            <div key={i} className="bg-surface-bg border border-surface-border rounded-xl p-4 text-center hover:border-surface-border-hover hover:shadow-md transition-all">
              <div className="text-sm font-bold text-text-primary mb-1">{int.name}</div>
              <div className="text-xs text-text-muted">{int.category}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-text-muted text-sm">
            En nog veel meer... n8n ondersteunt 400+ native integraties + elke API via HTTP requests.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsShowcase;
