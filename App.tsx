import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AuditTool from './components/AuditTool';
import LocalSEO from './components/LocalSEO';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

// Lazy load pages for code-splitting
const N8nExpertPage = lazy(() => import('./pages/N8nExpertPage'));
const AiAgentsPage = lazy(() => import('./pages/AiAgentsPage'));
const McpPage = lazy(() => import('./pages/McpPage'));
const SectorPage = lazy(() => import('./pages/SectorPage'));

// Tier 1: Educational & Comparison pages
const WatIsN8nPage = lazy(() => import('./pages/WatIsN8nPage'));
const N8nVsZapierPage = lazy(() => import('./pages/N8nVsZapierPage'));
const N8nVsMakePage = lazy(() => import('./pages/N8nVsMakePage'));
const AiAutomatiseringPage = lazy(() => import('./pages/AiAutomatiseringPage'));
const WorkflowAutomatiseringPage = lazy(() => import('./pages/WorkflowAutomatiseringPage'));
const N8nMcpPage = lazy(() => import('./pages/N8nMcpPage'));
const N8nAiAgentPage = lazy(() => import('./pages/N8nAiAgentPage'));

// Tier 2: Sector pages
const SectorAccountantsPage = lazy(() => import('./pages/sectors/AccountantsPage'));
const SectorMakelaarsPage = lazy(() => import('./pages/sectors/MakelaarsPage'));
const SectorAdvocatenPage = lazy(() => import('./pages/sectors/AdvocatenPage'));
const SectorRetailPage = lazy(() => import('./pages/sectors/RetailPage'));
const SectorBouwPage = lazy(() => import('./pages/sectors/BouwPage'));

// Tier 3: City pages
const CityBruggePage = lazy(() => import('./pages/cities/BruggePage'));
const CityKortrijkPage = lazy(() => import('./pages/cities/KortrijkPage'));
const CityOostendePage = lazy(() => import('./pages/cities/OostendePage'));
const CityRoeselarePage = lazy(() => import('./pages/cities/RoeselarePage'));
const CityIeperPage = lazy(() => import('./pages/cities/IeperPage'));

// Loading spinner for lazy-loaded pages
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-[#ff6d5a]/20 border-t-[#ff6d5a] rounded-full animate-spin" />
      <span className="text-zinc-400 text-sm">Laden...</span>
    </div>
  </div>
);

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Home page component
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
        <div className="min-h-screen bg-grid">
          <Navbar />
          <main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
              {/* Main pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/n8n-expert" element={<N8nExpertPage />} />
              <Route path="/ai-agents" element={<AiAgentsPage />} />
              <Route path="/mcp-protocol" element={<McpPage />} />
              <Route path="/sectoren" element={<SectorPage />} />

              {/* Tier 1: Educational & Comparison */}
              <Route path="/wat-is-n8n" element={<WatIsN8nPage />} />
              <Route path="/n8n-vs-zapier" element={<N8nVsZapierPage />} />
              <Route path="/n8n-vs-make" element={<N8nVsMakePage />} />
              <Route path="/ai-automatisering" element={<AiAutomatiseringPage />} />
              <Route path="/workflow-automatisering" element={<WorkflowAutomatiseringPage />} />
              <Route path="/n8n-mcp" element={<N8nMcpPage />} />
              <Route path="/n8n-ai-agent" element={<N8nAiAgentPage />} />

              {/* Tier 2: Sector pages */}
              <Route path="/sector/accountants" element={<SectorAccountantsPage />} />
              <Route path="/sector/makelaars" element={<SectorMakelaarsPage />} />
              <Route path="/sector/advocaten" element={<SectorAdvocatenPage />} />
              <Route path="/sector/retail" element={<SectorRetailPage />} />
              <Route path="/sector/bouw" element={<SectorBouwPage />} />

              {/* Tier 3: City pages */}
              <Route path="/brugge" element={<CityBruggePage />} />
              <Route path="/kortrijk" element={<CityKortrijkPage />} />
              <Route path="/oostende" element={<CityOostendePage />} />
              <Route path="/roeselare" element={<CityRoeselarePage />} />
              <Route path="/ieper" element={<CityIeperPage />} />
              </Routes>
            </Suspense>
          </main>
          <FloatingCTA />
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
