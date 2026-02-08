import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 md:pt-40 pb-20 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 px-4 py-1.5 rounded-full mb-10">
            <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse"></span>
            <span className="text-xs font-bold text-brand tracking-wide">CERTIFIED n8n EXPERT</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-[1.05] text-text-primary max-w-5xl">
            Uw <span className="text-brand">n8n Expert</span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-6 font-medium">
            Persoonlijke consultancy, architectuur reviews en strategisch advies voor organisaties die het maximum uit n8n willen halen.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-14 text-sm text-text-muted">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              50+ projecten afgeleverd
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              5+ jaar ervaring
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              100% klanttevredenheid
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              to="/consultancy"
              className="bg-brand hover:bg-brand-hover text-text-inverted px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-brand/20 hover:scale-105"
            >
              Plan een consultatie
            </Link>
            <Link
              to="/kennisbank"
              className="bg-surface-card hover:bg-surface-border border border-surface-border text-text-primary px-10 py-5 rounded-full font-bold text-lg transition-all"
            >
              Bekijk kennisbank
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
