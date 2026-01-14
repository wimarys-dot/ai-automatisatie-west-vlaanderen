import React from 'react';

const AiAgentsPage: React.FC = () => {
  return (
    <div className="animate-fade-in py-12 md:py-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block px-4 py-1 bg-[#ff6d5a]/10 border border-[#ff6d5a]/20 rounded-full text-[#ff6d5a] text-[10px] font-black tracking-widest uppercase mb-6">Trending +400%</div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-tight">
            INTELLIGENT <span className="text-[#ff6d5a]">AGENTS</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-medium">
            Uw eerste digitale werknemer staat klaar. Geen simpele chatbots, maar autonome agents die actie ondernemen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 md:mb-32">
          {[
            { title: "Sales Agent", role: "Lead Kwalificatie", desc: "Verwerkt 24/7 inkomende leads en boekt direct afspraken in." },
            { title: "Support Agent", role: "Automated Help", desc: "Begrijpt complexe vragen en haalt antwoorden uit uw interne data." },
            { title: "Ops Agent", role: "Proces Monitoring", desc: "Grijpt autonoom in bij vertragingen in uw logistieke flows." }
          ].map((agent, i) => (
            <div key={i} className="bg-[#18181b] border border-white/5 p-10 rounded-[2.5rem] hover:border-[#ff6d5a]/40 transition-all group relative">
              <div className="node-socket -left-1 top-10"></div>
              <div className="w-12 h-12 bg-[#ff6d5a] rounded-xl mb-6 flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform">0{i+1}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{agent.title}</h3>
              <div className="text-[#7c3aed] text-[10px] font-black uppercase mb-4 tracking-wider">{agent.role}</div>
              <p className="text-zinc-400 leading-relaxed text-sm">{agent.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#18181b] rounded-[3rem] p-12 border border-white/5 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Deep Intelligence</h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              In 2026 bouwen we agents die gebruik maken van de nieuwste LLM's zoals DeepSeek en Gemini 3. Onze agents draaien naadloos binnen uw n8n-workflows.
            </p>
            <button className="bg-[#ff6d5a] hover:bg-[#ff8575] text-white font-black py-4 px-10 rounded-full transition-all">
              ONTWIKKEL MIJN AGENT
            </button>
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 bg-[#7c3aed]/10 border border-[#7c3aed]/30 rounded-[2rem] flex items-center justify-center text-5xl animate-pulse">
            🤖
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiAgentsPage;