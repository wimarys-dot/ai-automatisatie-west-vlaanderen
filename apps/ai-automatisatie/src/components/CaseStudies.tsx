import React from 'react';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      loc: "Roeselare",
      title: "Facturatie op Autopilot",
      desc: "Voor een lokaal productiebedrijf koppelden we hun ERP aan n8n. Resultaat: 85% minder administratieve fouten en 15u tijdswinst per week.",
      stat: "15u / week"
    },
    {
      loc: "Kortrijk",
      title: "Intelligente Lead-Gen Agent",
      desc: "Implementatie van een AI Agent die binnenkomende aanvragen kwalificeert en direct in het CRM plaatst op basis van prioriteit.",
      stat: "24/7 Support"
    },
    {
      loc: "Brugge",
      title: "MCP Data Koppeling",
      desc: "Veilige koppeling van lokale technische databases aan een privaat AI model voor direct inzicht in historische productiedata.",
      stat: "100% Privacy"
    }
  ];

  return (
    <section id="cases" className="py-24 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black mb-12 md:mb-16 text-center uppercase tracking-tight text-white">Lokale <span className="text-[#ff6d5a]">Impact</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="flex flex-col bg-[#18181b] border border-white/5 p-8 rounded-3xl hover:border-[#ff6d5a]/30 transition-all group relative">
              <div className="node-socket -top-1 left-8"></div>
              <span className="text-[#ff6d5a] font-bold text-sm mb-4">📍 {c.loc}</span>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#ff6d5a] transition-colors">{c.title}</h3>
              <p className="text-zinc-400 mb-8 flex-1 text-sm md:text-base">{c.desc}</p>
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Resultaat</span>
                <span className="text-base md:text-lg font-bold text-white">{c.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;