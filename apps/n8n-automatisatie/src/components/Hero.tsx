import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 md:pt-40 pb-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 px-4 py-1.5 rounded-full mb-10">
            <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse"></span>
            <span className="text-xs font-bold text-brand tracking-wide">BELGISCHE n8n PARTNER</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-[1.05] text-text-primary max-w-5xl">
            n8n Automatisering <br/>
            <span className="text-brand">voor uw bedrijf</span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-14 font-medium">
            Van workflow design tot managed hosting. Wij implementeren n8n voor Belgische bedrijven die slimmer willen werken.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-24">
            <Link
              to="/diensten"
              className="bg-brand hover:bg-brand-hover text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-brand/20 hover:scale-105"
            >
              Bekijk onze diensten
            </Link>
            <Link
              to="/prijzen"
              className="bg-text-primary/5 hover:bg-text-primary/10 border border-surface-border text-text-primary px-10 py-5 rounded-full font-bold text-lg transition-all"
            >
              Transparante prijzen
            </Link>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {[
              { title: 'Implementatie & Setup', desc: 'Van concept tot productie in weken, niet maanden.', icon: '🚀' },
              { title: 'Workflow Design', desc: 'Op maat gemaakte automatiseringen voor uw processen.', icon: '⚡' },
              { title: 'Managed Hosting', desc: 'Wij beheren uw n8n omgeving, u focust op uw bedrijf.', icon: '☁️' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-surface-card border border-surface-border p-8 rounded-2xl text-left hover:border-surface-border-hover transition-all hover:shadow-lg"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
