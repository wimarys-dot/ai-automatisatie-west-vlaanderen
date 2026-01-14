
import React, { useState } from 'react';
import { View } from '../App';

interface NavbarProps {
  setView: (view: View) => void;
  currentView: View;
}

const Navbar: React.FC<NavbarProps> = ({ setView, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string; view: View }[] = [
    { label: 'Home', view: 'home' },
    { label: 'n8n Expert', view: 'n8n' },
    { label: 'AI Agents', view: 'agents' },
    { label: 'MCP Protocol', view: 'mcp' },
    { label: 'Sectoren', view: 'sector' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => setView('home')}
          >
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-black text-black transition-transform group-hover:rotate-6">
              AI
            </div>
            <span className="text-xl font-extrabold tracking-tighter text-white">
              ai-automatisatie<span className="text-[#ff6d5a]">.be</span>
            </span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-10 text-sm font-bold text-zinc-400">
            {navItems.map((item) => (
              <button 
                key={item.view}
                onClick={() => setView(item.view)}
                className={`transition-colors hover:text-white ${currentView === item.view ? 'text-white' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="bg-[#ff6d5a] hover:bg-[#ff8575] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-[#ff6d5a]/20">
            Gratis Audit
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
