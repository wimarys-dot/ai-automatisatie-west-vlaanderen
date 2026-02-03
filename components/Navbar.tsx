import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'n8n Expert', path: '/n8n-expert' },
    { label: 'AI Agents', path: '/ai-agents' },
    { label: 'MCP Protocol', path: '/mcp-protocol' },
    { label: 'Sectoren', path: '/sectoren' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link
            to="/"
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-black text-black transition-transform group-hover:rotate-6">
              AI
            </div>
            <span className="text-xl font-extrabold tracking-tighter text-white">
              ai-automatisatie<span className="text-[#ff6d5a]">.be</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-10 text-sm font-bold text-zinc-400">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors hover:text-white ${location.pathname === item.path ? 'text-white' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => {
              const auditSection = document.getElementById('audit');
              if (auditSection) {
                auditSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#audit';
              }
            }}
            className="bg-[#ff6d5a] hover:bg-[#ff8575] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-[#ff6d5a]/20"
          >
            Gratis Audit
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
