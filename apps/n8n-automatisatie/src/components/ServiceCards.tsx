import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Implementatie & Setup',
    desc: 'Complete n8n installatie, configuratie en integratie met uw bestaande tools. Van eerste gesprek tot productie-omgeving.',
    icon: '🔧',
    features: ['Behoefteanalyse', 'n8n installatie', 'Tool integraties', 'Go-live support'],
  },
  {
    title: 'Workflow Design',
    desc: 'Wij ontwerpen en bouwen op maat gemaakte automatiseringen die perfect aansluiten bij uw bedrijfsprocessen.',
    icon: '⚡',
    features: ['Proces mapping', 'Workflow architectuur', 'Error handling', 'Monitoring'],
  },
  {
    title: 'Migratie (Zapier/Make → n8n)',
    desc: 'Migreer van dure SaaS platformen naar self-hosted n8n. Lagere kosten, meer controle, geen limieten.',
    icon: '🔄',
    features: ['Audit huidige workflows', 'Migratie plan', '1-op-1 herplaatsing', 'Parallelle testing'],
  },
  {
    title: 'API Integraties',
    desc: 'Custom API koppelingen met Belgische en internationale software. Van Teamleader tot Exact Online.',
    icon: '🔗',
    features: ['REST & GraphQL', 'Webhook endpoints', 'OAuth setup', 'Rate limiting'],
  },
  {
    title: 'Managed Hosting',
    desc: 'Wij hosten en beheren uw n8n omgeving op Europese servers. Updates, backups en monitoring inclusief.',
    icon: '☁️',
    features: ['99.9% uptime', 'Dagelijkse backups', 'Auto-updates', 'EU data residency'],
  },
  {
    title: 'Training & Workshops',
    desc: 'Leer uw team zelf workflows bouwen en beheren. Van basis tot gevorderd, op uw locatie of online.',
    icon: '🎓',
    features: ['Hands-on training', 'Custom materiaal', 'Certificering', 'Follow-up support'],
  },
];

const ServiceCards: React.FC = () => {
  return (
    <section id="diensten" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Onze <span className="text-brand">Diensten</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Van eerste implementatie tot volledig beheer. Alles wat u nodig heeft voor succesvolle n8n automatisering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-surface-border-hover hover:shadow-lg transition-all group">
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{s.title}</h3>
              <p className="text-text-secondary text-sm mb-6">{s.desc}</p>
              <ul className="space-y-2">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-text-secondary">
                    <svg className="w-4 h-4 text-brand flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
