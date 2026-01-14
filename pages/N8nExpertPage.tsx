import React from 'react';

const N8nExpertPage: React.FC = () => {
  return (
    <div className="animate-fade-in py-12 md:py-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-20 relative">
          {/* Authority Badge */}
          <div className="absolute -top-8 md:-top-12 left-0 bg-[#ff6d5a]/10 px-4 py-2 rounded-full border border-[#ff6d5a]/30 flex items-center gap-2">
            <span className="text-[10px] font-black text-[#ff6d5a] tracking-widest uppercase">Specialist op</span>
            <span className="text-[10px] font-black text-white tracking-widest uppercase italic">n8n-expert.be</span>
          </div>

          <div className="text-[#ff6d5a] font-black tracking-[0.4em] uppercase text-[10px] mb-4 mt-12">Core Competence</div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-tight md:leading-none">
            DE <span className="text-[#ff6d5a] italic">n8n</span> EXPERT.<br/>
            WAREGEM TOT BRUGGE.
          </h1>
          <p className="text-base md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
            Stop met betalen voor Zapier per taak. Met n8n automatiseren we uw volledige bedrijf op een schaalbare, kosten-efficiënte manier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20 md:mb-32">
          <div className="bg-[#18181b] p-10 rounded-[2.5rem] border border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">n8n vs Zapier</h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-4 text-sm">
                <span className="text-zinc-500">Kosten bij opschalen</span>
                <span className="text-red-400 font-bold">Zapier: Hoog</span>
                <span className="text-[#ff6d5a] font-bold">n8n: Vast</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-4 text-sm">
                <span className="text-zinc-500">Data Privacy</span>
                <span className="text-zinc-400">Cloud Hosting</span>
                <span className="text-[#7c3aed] font-bold">Self-Hosted</span>
              </div>
            </div>
          </div>

          <div className="bg-[#ff6d5a]/5 border border-[#ff6d5a]/20 p-10 rounded-[2.5rem] relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl">🐳</div>
             <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Docker Expertise</h3>
             <p className="text-zinc-400 mb-8">
               Wij installeren n8n lokaal of in de cloud via Docker voor maximale performance.
             </p>
             <code className="block bg-black/40 p-6 rounded-2xl text-[#ff6d5a] text-xs font-mono">
               docker-compose up -d n8n
             </code>
          </div>
        </div>

        <div className="py-24 border-t border-white/5 text-center">
          <h2 className="text-4xl font-black text-white mb-12 uppercase">Klaar voor de switch?</h2>
          <button className="bg-[#ff6d5a] text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-[#ff6d5a]/20">
            START UW n8n MIGRATIE
          </button>
        </div>
      </section>
    </div>
  );
};

export default N8nExpertPage;