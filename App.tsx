
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import StrategyTool from './components/StrategyTool';
import LocalSEO from './components/LocalSEO';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import N8nExpertPage from './pages/N8nExpertPage';
import AiAgentsPage from './pages/AiAgentsPage';
import McpPage from './pages/McpPage';
import SectorPage from './pages/SectorPage';

export type View = 'home' | 'n8n' | 'agents' | 'mcp' | 'sector';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'n8n': return <N8nExpertPage />;
      case 'agents': return <AiAgentsPage />;
      case 'mcp': return <McpPage />;
      case 'sector': return <SectorPage />;
      default: return (
        <>
          <Hero setView={setCurrentView} />
          <Services setView={setCurrentView} />
          <StrategyTool />
          <CaseStudies />
          <LocalSEO />
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-grid">
      <Navbar setView={setCurrentView} currentView={currentView} />
      <main>
        {renderView()}
      </main>
      <Footer setView={setCurrentView} />
    </div>
  );
};

export default App;
