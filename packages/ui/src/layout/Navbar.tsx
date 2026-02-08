import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { NavItem } from '@repo/types';

interface NavbarProps {
  navItems: NavItem[];
  logo: {
    text: string;
    accent: string;
  };
  ctaLabel: string;
  ctaAction: string;
}

const Navbar: React.FC<NavbarProps> = ({ navItems, logo, ctaLabel, ctaAction }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleCTA = () => {
    if (ctaAction.startsWith('#')) {
      const section = document.getElementById(ctaAction.slice(1));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = `/${ctaAction}`;
      }
    } else {
      window.location.href = ctaAction;
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-surface-bg/80 backdrop-blur-xl border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-text-primary rounded-xl flex items-center justify-center font-black text-text-inverted transition-transform group-hover:rotate-6">
              {logo.text}
            </div>
            <span className="text-xl font-extrabold tracking-tighter text-text-primary">
              {logo.accent}
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-10 text-sm font-bold text-text-muted">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors hover:text-text-primary ${location.pathname === item.path ? 'text-text-primary' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-text-primary p-2"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <button
            onClick={handleCTA}
            className="hidden lg:block bg-brand hover:bg-brand-hover text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-brand/20"
          >
            {ctaLabel}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-surface-border mt-2 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 text-sm font-bold transition-colors hover:text-brand ${location.pathname === item.path ? 'text-brand' : 'text-text-secondary'}`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => { setIsMenuOpen(false); handleCTA(); }}
              className="mt-4 w-full bg-brand hover:bg-brand-hover text-white px-6 py-3 rounded-full text-sm font-bold transition-all"
            >
              {ctaLabel}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
