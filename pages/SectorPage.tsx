import React from 'react';

const SectorPage: React.FC = () => {
  const sectors = [
    { name: "Productie & Industrie", icon: "🏭", focus: "ERP-n8n koppeling" },
    { name: "Logistiek", icon: "🚛", focus: "Route optimalisatie" },
    { name: "Professional Services", icon: "⚖️", focus: "Document verwerking" },
    { name: "Retail & E-commerce", icon: "🛒", focus: "Stock management" }
  ];

  return (
    <div className="animate-fade-in py-12 md:py-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">
            FOCUS OP <span className="text-[#ff6d5a]">LOKALE KMO's</span>
          </h1>
          <p className="text-xl text-zinc-400">
            Wij helpen specifieke sectoren in West-Vlaanderen om de sprong naar 2026 te maken met modulaire automatisatie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          {sectors.map((s, i) => (
            <div key={i} className="group relative bg-[#18181b] border border-white/5 p-12 rounded-[2.5rem] hover:border-[#ff6d5a]/40 transition-all overflow-hidden">
               <div className="node-socket -top-1 left-12"></div>
               <div className="absolute top-0 right-0 p-12 text-6xl opacity-10 group-hover:scale-125 transition-transform">{s.icon}</div>
               <h3 className="text-3xl font-bold text-white mb-2">{s.name}</h3>
               <p className="text-[#ff6d5a] font-bold text-xs uppercase tracking-widest mb-6">Focus: {s.focus}</p>
               <p className="text-zinc-400 leading-relaxed text-sm max-w-sm">
                 Maatwerk oplossingen met de West-Vlaamse mentaliteit: Geen woorden, maar daden.
               </p>
            </div>
          ))}
        </div>

        <div className="bg-[#ff6d5a] rounded-[3rem] p-16 text-center shadow-2xl shadow-[#ff6d5a]/20">
           <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase">Uw sector niet vermeld?</h2>
           <button className="bg-white text-[#ff6d5a] px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all">
              VRAAG EEN ANALYSE AAN
           </button>
        </div>
      </section>
    </div>
  );
};

export default SectorPage;