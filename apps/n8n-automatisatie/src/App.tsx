import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar, Footer, FloatingCTA } from '@repo/ui';
import type { SiteConfig, FooterConfig } from '@repo/types';

import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';
import IntegrationsShowcase from '@/components/IntegrationsShowcase';
import PricingSection from '@/components/PricingSection';
import UseCases from '@/components/UseCases';

const DienstenPage = lazy(() => import('@/pages/DienstenPage'));
const PrijzenPage = lazy(() => import('@/pages/PrijzenPage'));
const IntegratiesPage = lazy(() => import('@/pages/IntegratiesPage'));
const UseCasesPage = lazy(() => import('@/pages/UseCasesPage'));
const CasesPage = lazy(() => import('@/pages/CasesPage'));

const siteConfig: SiteConfig = {
  name: 'n8n Automatisatie',
  domain: 'n8n-automatisatie.be',
  tagline: 'n8n Automatisering voor Belgische Bedrijven',
  email: 'info@n8n-automatisatie.be',
  logo: {
    text: 'n8n',
    accent: 'n8n-automatisatie.be',
  },
  navItems: [
    { label: 'Home', path: '/' },
    { label: 'Diensten', path: '/diensten' },
    { label: 'Integraties', path: '/integraties' },
    { label: 'Prijzen', path: '/prijzen' },
    { label: 'Use Cases', path: '/use-cases' },
    { label: 'Cases', path: '/cases' },
  ],
  ctaLabel: 'Offerte aanvragen',
  ctaAction: '#contact',
  webhookUrl: 'https://connect.pabbly.com/webhook-listener/webhook/IjU3NjAwNTY1MDYzZTA0MzAi_pc/IjU3NjcwNTZjMDYzMzA0MzQ1MjY4NTUzNTUxMzci_pc',
};

const footerConfig: FooterConfig = {
  columns: [
    {
      title: 'Diensten',
      links: [
        { label: 'Implementatie', path: '/diensten' },
        { label: 'Integraties', path: '/integraties' },
        { label: 'Prijzen', path: '/prijzen' },
        { label: 'Cases', path: '/cases' },
      ],
    },
    {
      title: 'Use Cases',
      links: [
        { label: 'CRM Automatisering', path: '/use-cases' },
        { label: 'Facturatie', path: '/use-cases' },
        { label: 'E-commerce', path: '/use-cases' },
        { label: 'HR & Onboarding', path: '/use-cases' },
      ],
    },
    {
      title: 'Netwerk',
      links: [
        { label: 'ai-automatisatie.be', path: 'https://ai-automatisatie.be' },
        { label: 'n8n-expert.be', path: 'https://n8n-expert.be' },
      ],
    },
  ],
  tagline: 'Automatiseer slimmer, niet harder.',
  copyright: '\u00A9 2026 N8N-AUTOMATISATIE.BE. Belgische kwaliteit.',
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
    <ServiceCards />
    <UseCases />
    <IntegrationsShowcase />
    <PricingSection />
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
                <Route path="/diensten" element={<DienstenPage />} />
                <Route path="/prijzen" element={<PrijzenPage />} />
                <Route path="/integraties" element={<IntegratiesPage />} />
                <Route path="/use-cases" element={<UseCasesPage />} />
                <Route path="/cases" element={<CasesPage />} />
              </Routes>
            </Suspense>
          </main>
          <FloatingCTA />
          <Footer
            config={footerConfig}
            logo={siteConfig.logo}
            description="Uw n8n automatisering partner in België. Van implementatie tot managed hosting."
            webhookUrl={siteConfig.webhookUrl}
            email={siteConfig.email}
          />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
