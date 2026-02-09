import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar, Footer, FloatingCTA, AuditTool, CaseStudies } from '@repo/ui';
import type { SiteConfig, FooterConfig } from '@repo/types';

import Hero from '@/components/Hero';
import Services from '@/components/Services';
import LocalSEO from '@/components/LocalSEO';

// Lazy load pages
const N8nExpertPage = lazy(() => import('@/pages/N8nExpertPage'));
const AiAgentsPage = lazy(() => import('@/pages/AiAgentsPage'));
const McpPage = lazy(() => import('@/pages/McpPage'));
const SectorPage = lazy(() => import('@/pages/SectorPage'));
const WatIsN8nPage = lazy(() => import('@/pages/WatIsN8nPage'));
const N8nVsZapierPage = lazy(() => import('@/pages/N8nVsZapierPage'));
const N8nVsMakePage = lazy(() => import('@/pages/N8nVsMakePage'));
const AiAutomatiseringPage = lazy(() => import('@/pages/AiAutomatiseringPage'));
const WorkflowAutomatiseringPage = lazy(() => import('@/pages/WorkflowAutomatiseringPage'));
const N8nMcpPage = lazy(() => import('@/pages/N8nMcpPage'));
const N8nAiAgentPage = lazy(() => import('@/pages/N8nAiAgentPage'));
const SectorAccountantsPage = lazy(() => import('@/pages/sectors/AccountantsPage'));
const SectorMakelaarsPage = lazy(() => import('@/pages/sectors/MakelaarsPage'));
const SectorAdvocatenPage = lazy(() => import('@/pages/sectors/AdvocatenPage'));
const SectorRetailPage = lazy(() => import('@/pages/sectors/RetailPage'));
const SectorBouwPage = lazy(() => import('@/pages/sectors/BouwPage'));
const CityBruggePage = lazy(() => import('@/pages/cities/BruggePage'));
const CityKortrijkPage = lazy(() => import('@/pages/cities/KortrijkPage'));
const CityOostendePage = lazy(() => import('@/pages/cities/OostendePage'));
const CityRoeselarePage = lazy(() => import('@/pages/cities/RoeselarePage'));
const CityIeperPage = lazy(() => import('@/pages/cities/IeperPage'));

const siteConfig: SiteConfig = {
  name: 'AI Automatisatie West-Vlaanderen',
  domain: 'ai-automatisatie.be',
  tagline: 'n8n Expert West-Vlaanderen',
  email: 'info@ai-automatisatie.be',
  logo: {
    text: 'AI',
    accent: 'ai-automatisatie.be',
  },
  navItems: [
    { label: 'Home', path: '/' },
    { label: 'n8n Expert', path: '/n8n-expert' },
    { label: 'AI Agents', path: '/ai-agents' },
    { label: 'MCP Protocol', path: '/mcp-protocol' },
    { label: 'Sectoren', path: '/sectoren' },
  ],
  ctaLabel: 'Gratis Audit',
  ctaAction: '#audit',
  webhookUrl: 'https://connect.pabbly.com/webhook-listener/webhook/IjU3NjAwNTY1MDYzZTA0MzAi_pc/IjU3NjcwNTZjMDYzMzA0MzQ1MjY4NTUzNTUxMzci_pc',
  ga4Id: 'G-PR045QQEX1',
};

const footerConfig: FooterConfig = {
  columns: [
    {
      title: 'Expertise',
      links: [
        { label: 'n8n Workflow Design', path: '/n8n-expert' },
        { label: 'AI Agents', path: '/ai-agents' },
        { label: 'MCP Protocol', path: '/mcp-protocol' },
        { label: 'Sectoren', path: '/sectoren' },
      ],
    },
    {
      title: 'Kennisbank',
      links: [
        { label: 'Wat is n8n?', path: '/wat-is-n8n' },
        { label: 'n8n vs Zapier', path: '/n8n-vs-zapier' },
        { label: 'n8n vs Make', path: '/n8n-vs-make' },
        { label: 'AI Automatisering', path: '/ai-automatisering' },
      ],
    },
    {
      title: 'Regio',
      links: [
        { label: 'Roeselare', path: '/roeselare' },
        { label: 'Kortrijk', path: '/kortrijk' },
        { label: 'Brugge', path: '/brugge' },
        { label: 'Oostende', path: '/oostende' },
        { label: 'Ieper', path: '/ieper' },
      ],
    },
    {
      title: 'Netwerk',
      links: [
        { label: 'n8n-automatisatie.be', path: 'https://n8n-automatisatie.be' },
        { label: 'n8n-expert.be', path: 'https://n8n-expert.be' },
      ],
    },
  ],
  tagline: 'Geen woorden, maar daden.',
  copyright: '\u00A9 2026 AI-AUTOMATISATIE.BE. West-Vlaamse Slagkracht.',
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
    <Services />
    <AuditTool />
    <CaseStudies />
    <LocalSEO />
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
                <Route path="/n8n-expert" element={<N8nExpertPage />} />
                <Route path="/ai-agents" element={<AiAgentsPage />} />
                <Route path="/mcp-protocol" element={<McpPage />} />
                <Route path="/sectoren" element={<SectorPage />} />
                <Route path="/wat-is-n8n" element={<WatIsN8nPage />} />
                <Route path="/n8n-vs-zapier" element={<N8nVsZapierPage />} />
                <Route path="/n8n-vs-make" element={<N8nVsMakePage />} />
                <Route path="/ai-automatisering" element={<AiAutomatiseringPage />} />
                <Route path="/workflow-automatisering" element={<WorkflowAutomatiseringPage />} />
                <Route path="/n8n-mcp" element={<N8nMcpPage />} />
                <Route path="/n8n-ai-agent" element={<N8nAiAgentPage />} />
                <Route path="/sector/accountants" element={<SectorAccountantsPage />} />
                <Route path="/sector/makelaars" element={<SectorMakelaarsPage />} />
                <Route path="/sector/advocaten" element={<SectorAdvocatenPage />} />
                <Route path="/sector/retail" element={<SectorRetailPage />} />
                <Route path="/sector/bouw" element={<SectorBouwPage />} />
                <Route path="/brugge" element={<CityBruggePage />} />
                <Route path="/kortrijk" element={<CityKortrijkPage />} />
                <Route path="/oostende" element={<CityOostendePage />} />
                <Route path="/roeselare" element={<CityRoeselarePage />} />
                <Route path="/ieper" element={<CityIeperPage />} />
              </Routes>
            </Suspense>
          </main>
          <FloatingCTA />
          <Footer
            config={footerConfig}
            logo={siteConfig.logo}
            description="Wij helpen West-Vlaamse ondernemers de voorsprong te nemen met n8n en AI. Geen complexiteit, wel resultaat."
            webhookUrl={siteConfig.webhookUrl}
            email={siteConfig.email}
          />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
