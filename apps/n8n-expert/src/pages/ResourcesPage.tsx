import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AuditTool } from '@repo/ui';

const resources = [
  {
    title: 'n8n Cheat Sheet',
    desc: 'Alle essentiële n8n nodes, expressions en shortcuts op één pagina. Download als PDF.',
    icon: '📋',
    type: 'PDF',
  },
  {
    title: 'Workflow Template Library',
    desc: 'Kant-en-klare workflow templates voor veelvoorkomende automatiseringen. Direct importeerbaar in n8n.',
    icon: '📦',
    type: 'Templates',
  },
  {
    title: 'ROI Calculator',
    desc: 'Bereken de verwachte return on investment van uw n8n automatisering project.',
    icon: '🧮',
    type: 'Tool',
  },
];

const ResourcesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Resources | Cheat Sheet, Templates & ROI Calculator | n8n-expert.be</title>
        <meta name="description" content="Gratis n8n resources: cheat sheet, workflow template library en ROI calculator. Tools om uw automatisering te versnellen." />
      </Helmet>

      <div className="pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              <span className="text-brand">Resources</span> & Tools
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Gratis tools en resources om het maximale uit n8n te halen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {resources.map((r, i) => (
              <div key={i} className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-surface-border-hover transition-all text-center">
                <div className="text-5xl mb-5">{r.icon}</div>
                <span className="text-xs font-bold text-brand bg-brand/10 px-3 py-1 rounded-full mb-4 inline-block">{r.type}</span>
                <h3 className="text-xl font-bold text-text-primary mb-3">{r.title}</h3>
                <p className="text-text-secondary text-sm mb-6">{r.desc}</p>
                <button className="bg-brand hover:bg-brand-hover text-white px-6 py-3 rounded-full font-bold transition-all text-sm">
                  Bekijk resource
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Reuse the Audit Tool from the shared UI package */}
        <AuditTool />
      </div>
    </>
  );
};

export default ResourcesPage;
