import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuditTool, BreadcrumbSchema, WebPageSchema } from '@repo/ui';

const resources = [
  {
    title: 'n8n Cheat Sheet',
    desc: 'Alle essentiële n8n nodes, expressions en shortcuts op één pagina. De perfecte referentie voor beginners en gevorderden.',
    icon: '📋',
    type: 'PDF',
  },
  {
    title: 'Workflow Template Library',
    desc: 'Kant-en-klare workflow templates voor veelvoorkomende automatiseringen. Direct importeerbaar in uw n8n instance.',
    icon: '📦',
    type: 'Templates',
  },
  {
    title: 'ROI Calculator',
    desc: 'Bereken de verwachte return on investment van uw n8n automatisering project. Inclusief tijdswinst en kostenbesparing.',
    icon: '🧮',
    type: 'Tool',
  },
];

const trainings = [
  {
    title: 'n8n Beginner Training',
    desc: 'Leer de basis van n8n: nodes, triggers, workflows bouwen en data transformeren. Geschikt voor iedereen zonder programmeerervaring.',
    duration: '1 dag',
    level: 'Beginner',
  },
  {
    title: 'n8n Advanced Workshop',
    desc: 'Geavanceerde onderwerpen: sub-workflows, error handling, API integraties, custom functions en AI agents bouwen met n8n.',
    duration: '1 dag',
    level: 'Advanced',
  },
  {
    title: 'n8n AI Agents Masterclass',
    desc: 'Bouw intelligente AI agents met n8n. Integreer OpenAI, Claude en andere LLMs in uw workflows voor slimme automatisering.',
    duration: '½ dag',
    level: 'Expert',
  },
];

const ResourcesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>n8n Training & Resources | Courses, Templates & Tools | n8n-expert.be</title>
        <meta name="description" content="n8n training en resources: beginner tot advanced courses, workflow templates, cheat sheet en ROI calculator. Leer n8n van een certified expert." />
        <link rel="canonical" href="https://n8n-expert.be/resources" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://n8n-expert.be/' },
        { name: 'Resources', url: 'https://n8n-expert.be/resources' },
      ]} />
      <WebPageSchema
        name="n8n Training & Resources"
        description="n8n training, courses en gratis resources voor workflow automatisering."
        url="https://n8n-expert.be/resources"
      />

      <div className="pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              n8n <span className="text-brand">Training</span> & Resources
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Van beginner courses tot advanced workshops: leer n8n van een certified expert. Plus gratis tools en templates om direct mee aan de slag te gaan.
            </p>
          </div>

          {/* Training Section */}
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            n8n <span className="text-brand">Trainingen</span> & Courses
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {trainings.map((t, i) => (
              <div key={i} className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-surface-border-hover transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-brand bg-brand/10 px-3 py-1 rounded-full">{t.level}</span>
                  <span className="text-xs text-text-muted">{t.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{t.title}</h3>
                <p className="text-text-secondary text-sm mb-6">{t.desc}</p>
                <Link to="/consultancy" className="text-brand font-bold text-sm hover:underline">
                  Training aanvragen →
                </Link>
              </div>
            ))}
          </div>

          {/* Resources Section */}
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            Gratis <span className="text-brand">Resources</span>
          </h2>
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

          {/* Learning Path */}
          <div className="bg-surface-card border border-surface-border rounded-2xl p-8 md:p-12 mb-24">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              Aanbevolen <span className="text-brand">Learning Path</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/10 text-brand font-bold flex items-center justify-center shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">Start met de Tutorial</h3>
                  <p className="text-text-secondary text-sm">Leer de basics in onze <Link to="/kennisbank/n8n-tutorial" className="text-brand hover:underline">complete Nederlandstalige n8n tutorial</Link>.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/10 text-brand font-bold flex items-center justify-center shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">Bekijk Voorbeelden</h3>
                  <p className="text-text-secondary text-sm">Ontdek <Link to="/kennisbank/workflow-voorbeelden" className="text-brand hover:underline">10 praktische workflow voorbeelden</Link> voor uw bedrijf.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/10 text-brand font-bold flex items-center justify-center shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">Volg Best Practices</h3>
                  <p className="text-text-secondary text-sm">Bouw professioneel met onze <Link to="/kennisbank/best-practices" className="text-brand hover:underline">10 n8n best practices</Link>.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cross-site links */}
          <div className="text-center mb-16">
            <p className="text-text-secondary mb-3">Zoekt u n8n implementatie of managed hosting?</p>
            <a href="https://n8n-automatisatie.be/diensten" className="text-brand font-bold hover:underline" target="_blank" rel="noopener noreferrer">
              Bekijk n8n-automatisatie.be →
            </a>
          </div>
        </div>

        {/* Reuse the Audit Tool from the shared UI package */}
        <AuditTool />
      </div>
    </>
  );
};

export default ResourcesPage;
