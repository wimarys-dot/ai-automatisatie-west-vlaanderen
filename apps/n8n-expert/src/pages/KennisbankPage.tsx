import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BreadcrumbSchema, WebPageSchema } from '@repo/ui';

const featuredArticles = [
  {
    icon: '\uD83C\uDF93',
    category: 'Tutorial',
    title: 'n8n Tutorial Nederlands: Complete Gids',
    excerpt:
      'Leer n8n stap voor stap in het Nederlands. Van installatie tot uw eerste workflow: alles wat u nodig heeft om te starten met workflow automation.',
    path: '/kennisbank/n8n-tutorial',
  },
  {
    icon: '\u26A1',
    category: 'Best Practices',
    title: '10 n8n Best Practices',
    excerpt:
      'Bouw betrouwbare en onderhoudbare workflows met bewezen best practices. Error handling, naamgeving, structuur en meer.',
    path: '/kennisbank/best-practices',
  },
  {
    icon: '\uD83D\uDD27',
    category: 'Voorbeelden',
    title: '10 Workflow Voorbeelden',
    excerpt:
      'Praktische n8n workflow voorbeelden die u direct kunt toepassen. Van CRM-sync tot AI-gestuurde e-mailverwerking.',
    path: '/kennisbank/workflow-voorbeelden',
  },
];

const KennisbankPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          n8n Kennisbank | Tutorials, Best Practices &amp; Workflow Voorbeelden | n8n-expert.be
        </title>
        <meta
          name="description"
          content="De n8n kennisbank van n8n-expert.be: Nederlandstalige tutorials, best practices en workflow voorbeelden. Leer n8n van een certified expert en start direct met automatiseren."
        />
        <link rel="canonical" href="https://n8n-expert.be/kennisbank" />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://n8n-expert.be/' },
          { name: 'Kennisbank', url: 'https://n8n-expert.be/kennisbank' },
        ]}
      />
      <WebPageSchema
        name="n8n Kennisbank"
        description="Nederlandstalige n8n tutorials, best practices en workflow voorbeelden. De complete kennisbank voor n8n workflow automation."
        url="https://n8n-expert.be/kennisbank"
      />

      <div className="pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              n8n <span className="text-brand">Kennisbank</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Uw complete Nederlandstalige kennisbron voor n8n workflow automation.
              Tutorials, best practices en concrete voorbeelden &mdash; geschreven
              door een certified n8n expert zodat u direct aan de slag kunt.
            </p>
          </div>

          {/* Featured Articles Grid */}
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            Uitgelichte <span className="text-brand">artikelen</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {featuredArticles.map((article, i) => (
              <Link
                key={i}
                to={article.path}
                className="group bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-surface-border-hover transition-all"
              >
                <div className="text-4xl mb-5">{article.icon}</div>
                <span className="text-xs font-bold text-brand bg-brand/10 px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-text-primary mt-4 mb-3 group-hover:text-brand transition-colors">
                  {article.title}
                </h3>
                <p className="text-text-secondary text-sm mb-6 line-clamp-2">
                  {article.excerpt}
                </p>
                <span className="text-brand font-bold text-sm">
                  Lees meer &rarr;
                </span>
              </Link>
            ))}
          </div>

          {/* Meer resources */}
          <div className="bg-surface-card border border-surface-border rounded-2xl p-8 md:p-12 mb-24">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              Meer <span className="text-brand">resources</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl">
              Naast de kennisbank bieden wij ook trainingen, templates en persoonlijk advies.
              Ontdek wat het beste bij uw situatie past.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/resources"
                className="group flex items-start gap-4 bg-surface-bg border border-surface-border rounded-2xl p-6 hover:border-surface-border-hover transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 text-2xl">
                  {'\uD83D\uDCDA'}
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1 group-hover:text-brand transition-colors">
                    Training &amp; Resources
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Beginner tot advanced trainingen, workflow templates, cheat sheet en ROI calculator.
                  </p>
                </div>
              </Link>
              <Link
                to="/consultancy"
                className="group flex items-start gap-4 bg-surface-bg border border-surface-border rounded-2xl p-6 hover:border-surface-border-hover transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 text-2xl">
                  {'\uD83D\uDCAC'}
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1 group-hover:text-brand transition-colors">
                    Consultancy &amp; Advies
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Persoonlijk advies, architectuur reviews, security audits en performance optimalisatie.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Cross-site link */}
          <div className="text-center mb-16">
            <p className="text-text-secondary mb-3">
              Zoekt u n8n implementatie of managed hosting?
            </p>
            <a
              href="https://n8n-automatisatie.be"
              className="text-brand font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bekijk n8n-automatisatie.be &rarr;
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default KennisbankPage;
