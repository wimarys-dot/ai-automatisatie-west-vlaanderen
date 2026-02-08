import React from 'react';

const projects = [
  {
    title: 'Enterprise Workflow Migratie',
    client: 'Productiebedrijf, Vlaanderen',
    desc: 'Migratie van 45 Zapier workflows naar self-hosted n8n. Resultaat: 70% kostenbesparing en volledige data controle.',
    tags: ['Migratie', 'Enterprise', 'Self-hosted'],
    metric: '€24.000/jaar bespaard',
  },
  {
    title: 'AI-Powered Customer Service',
    client: 'E-commerce, België',
    desc: 'Intelligente chatbot met n8n als orchestrator. Automatische categorisatie, routing en response generatie.',
    tags: ['AI', 'Chatbot', 'E-commerce'],
    metric: '80% tickets geautomatiseerd',
  },
  {
    title: 'Multi-System Data Hub',
    client: 'Accountantskantoor, Oost-Vlaanderen',
    desc: 'Centraal data platform dat Exact Online, CodaBox en klantportaal real-time synchroniseert.',
    tags: ['Data Sync', 'Accountancy', 'API'],
    metric: '20u/week bespaard',
  },
];

const PortfolioSection: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            <span className="text-brand">Portfolio</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Een selectie van projecten die de kracht van strategische n8n implementatie tonen.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <div key={i} className="bg-surface-card border border-surface-border rounded-2xl p-8 md:p-10 hover:border-surface-border-hover transition-all">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="text-xs font-bold text-text-muted uppercase tracking-widest mb-2">{project.client}</div>
                  <h3 className="text-2xl font-bold text-text-primary mb-3">{project.title}</h3>
                  <p className="text-text-secondary mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-xs font-bold text-brand bg-brand/10 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="md:text-right">
                  <div className="text-2xl font-extrabold text-brand">{project.metric}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
