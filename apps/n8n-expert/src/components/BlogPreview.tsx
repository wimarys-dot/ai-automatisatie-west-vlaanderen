import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  {
    title: 'n8n Best Practices: 10 regels voor schaalbare workflows',
    category: 'Best Practices',
    date: '15 jan 2026',
    excerpt: 'De belangrijkste principes voor het bouwen van onderhoudbare en schaalbare n8n workflows.',
    slug: '/kennisbank/best-practices',
  },
  {
    title: 'n8n vs Zapier vs Make: De ultieme vergelijking 2026',
    category: 'Vergelijkingen',
    date: '10 jan 2026',
    excerpt: 'Een objectieve vergelijking op prijs, features, schaalbaarheid en self-hosting mogelijkheden.',
    slug: '/kennisbank/vergelijking',
  },
  {
    title: 'AI Agents bouwen met n8n: een praktische gids',
    category: 'Tutorials',
    date: '5 jan 2026',
    excerpt: 'Stap voor stap een intelligente AI agent bouwen die uw bedrijfsprocessen automatiseert.',
    slug: '/kennisbank/ai-agents-tutorial',
  },
];

const BlogPreview: React.FC = () => {
  return (
    <section className="py-24 bg-surface-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-text-primary mb-4">
              Uit de <span className="text-brand">Kennisbank</span>
            </h2>
            <p className="text-text-secondary text-lg">Tutorials, best practices en actuele inzichten.</p>
          </div>
          <Link to="/kennisbank" className="hidden md:inline-flex items-center gap-2 text-brand font-bold hover:underline">
            Alle artikelen
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <Link
              key={i}
              to={article.slug}
              className="group bg-surface-bg border border-surface-border rounded-2xl overflow-hidden hover:border-surface-border-hover transition-all"
            >
              <div className="h-48 bg-gradient-to-br from-brand/10 to-accent/10 flex items-center justify-center">
                <span className="text-6xl opacity-20">📝</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-brand bg-brand/10 px-2 py-1 rounded">{article.category}</span>
                  <span className="text-xs text-text-muted">{article.date}</span>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-brand transition-colors">{article.title}</h3>
                <p className="text-text-secondary text-sm">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
