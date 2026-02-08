import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar, Footer, FloatingCTA } from '@repo/ui';
import type { SiteConfig, FooterConfig } from '@repo/types';

import Hero from '@/components/Hero';
import ConsultancyServices from '@/components/ConsultancyServices';
import BlogPreview from '@/components/BlogPreview';
import PortfolioSection from '@/components/PortfolioSection';

const ConsultancyPage = lazy(() => import('@/pages/ConsultancyPage'));
const KennisbankPage = lazy(() => import('@/pages/KennisbankPage'));
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage'));
const ResourcesPage = lazy(() => import('@/pages/ResourcesPage'));

const siteConfig: SiteConfig = {
  name: 'n8n Expert',
  domain: 'n8n-expert.be',
  tagline: 'Uw n8n Expert',
  email: 'info@n8n-expert.be',
  logo: {
    text: 'E',
    accent: 'n8n-expert.be',
  },
  navItems: [
    { label: 'Home', path: '/' },
    { label: 'Consultancy', path: '/consultancy' },
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Resources', path: '/resources' },
  ],
  ctaLabel: 'Plan consultatie',
  ctaAction: '#contact',
  webhookUrl: 'https://connect.pabbly.com/webhook-listener/webhook/IjU3NjAwNTY1MDYzZTA0MzAi_pc/IjU3NjcwNTZjMDYzMzA0MzQ1MjY4NTUzNTUxMzci_pc',
};

const footerConfig: FooterConfig = {
  columns: [
    {
      title: 'Consultancy',
      links: [
        { label: 'Audit & Advies', path: '/consultancy' },
        { label: 'Architectuur Review', path: '/consultancy' },
        { label: 'Performance', path: '/consultancy' },
        { label: 'Security Assessment', path: '/consultancy' },
      ],
    },
    {
      title: 'Kennisbank',
      links: [
        { label: 'Tutorials', path: '/kennisbank' },
        { label: 'Best Practices', path: '/kennisbank' },
        { label: 'Vergelijkingen', path: '/kennisbank' },
        { label: 'Resources', path: '/resources' },
      ],
    },
    {
      title: 'Netwerk',
      links: [
        { label: 'ai-automatisatie.be', path: 'https://ai-automatisatie.be' },
        { label: 'n8n-automatisatie.be', path: 'https://n8n-automatisatie.be' },
      ],
    },
  ],
  tagline: 'Kennis is de sleutel tot automatisering.',
  copyright: '\u00A9 2026 N8N-EXPERT.BE. Expert kwaliteit.',
};

const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-brand/20 border-t-brand rounded-full animate-spin" />
      <span className="text-text-muted text-sm">Laden...</span>
    </div>
  </div>
);

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const HomePage: React.FC = () => (
  <>
    <Hero />
    <ConsultancyServices />
    <PortfolioSection />
    <BlogPreview />
  </>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen">
          <Navbar
            navItems={siteConfig.navItems}
            logo={siteConfig.logo}
            ctaLabel={siteConfig.ctaLabel}
            ctaAction={siteConfig.ctaAction}
          />
          <main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/consultancy" element={<ConsultancyPage />} />
                <Route path="/kennisbank" element={<KennisbankPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
              </Routes>
            </Suspense>
          </main>
          <FloatingCTA />
          <Footer
            config={footerConfig}
            logo={siteConfig.logo}
            description="Persoonlijke n8n consultancy en kennisautoriteit. Expert advies voor uw automatisering strategie."
            webhookUrl={siteConfig.webhookUrl}
            email={siteConfig.email}
          />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
