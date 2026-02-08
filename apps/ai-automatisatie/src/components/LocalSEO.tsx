import React from 'react';

const LocalSEO: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#09090b]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7c3aed]/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Specialist uit <span className="text-[#ff6d5a]">West-Vlaanderen</span>.</h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Wij spreken de taal van de West-Vlaamse ondernemer. Geen dure woorden uit Silicon Valley, maar pragmatische n8n-oplossingen die direct renderen in regio Roeselare-Kortrijk.
            </p>
            <ul className="space-y-4">
              {[
                "Korte communicatielijnen",
                "Kennis van de lokale KMO-markt",
                "Expertise in n8n & MCP",
                "Focus op ROI en tijdswinst"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-white font-medium">
                  <svg className="w-5 h-5 mr-3 text-[#ff6d5a]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#18181b] border border-white/10 p-10 rounded-[2.5rem] text-center relative overflow-hidden">
            <div className="node-socket -top-1 left-1/2 -translate-x-1/2"></div>
            <h3 className="text-2xl font-bold text-white mb-4">Live Demo</h3>
            <p className="text-zinc-400 mb-8">Ontdek hoe onze n8n modules uw bedrijf transformeren in een kort gesprek.</p>
            <button className="w-full bg-[#ff6d5a] hover:bg-[#ff8575] text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg shadow-[#ff6d5a]/20 hover:scale-105">
              Boek Demo Gesprek
            </button>
            <p className="mt-6 text-sm text-zinc-400">Of ga naar onze expert-site: <a href="#" className="text-[#ff6d5a] font-bold hover:underline">n8n-expert.be</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEO;