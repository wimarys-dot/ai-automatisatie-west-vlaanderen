
import React from 'react';
import { View } from '../App';

interface ServicesProps {
  setView: (view: View) => void;
}

const Services: React.FC<ServicesProps> = ({ setView }) => {
  const services = [
    {
      title: "n8n Workflow Design",
      category: "CORE ENGINE",
      desc: "Wij migreren uw Zapier chaos naar een gestructureerde n8n omgeving. Lagere kosten, meer controle.",
      icon: "⚡",
      color: "text-[#ff6d5a]",
      view: 'n8n' as View
    },
    {
      title: "Agentic AI Modules",
      category: "COGNITION",
      desc: "Implementatie van autonome agents die uw CRM en inbox beheren zoals een menselijke collega.",
      icon: "🤖",
      color: "text-[#7c3aed]",
      view: 'agents' as View
    },
    {
      title: "MCP Data Bridge",
      category: "CONNECTIVITY",
      desc: "Koppel uw lokale SQL of Excel data veilig aan AI modellen via het Model Context Protocol.",
      icon: "💠",
      color: "text-[#0ea5e9]",
      view: 'mcp' as View
    }
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Onze <span className="text-[#ff6d5a]">Modules</span></h2>
          <p className="text-zinc-500 text-xl max-w-2xl font-medium">
            Modulaire oplossingen die naadloos op elkaar aansluiten voor maximale impact in uw West-Vlaamse KMO.
          </p>
        </div>
        
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div 
              key={idx} 
              onClick={() => setView(s.view)}
              className={`group flex flex-col md:flex-row items-center gap-8 bg-[#18181b] border border-[#27272a] p-10 rounded-[2.5rem] transition-all cursor-pointer relative ${
                s.view === 'mcp' ? 'hover:border-[#0ea5e9]/40' : s.view === 'agents' ? 'hover:border-[#7c3aed]/40' : 'hover:border-[#ff6d5a]/40'
              }`}
            >
              <div className="node-socket -top-1 left-1/2 -translate-x-1/2 hidden md:block"></div>
              <div className="node-socket -bottom-1 left-1/2 -translate-x-1/2 hidden md:block"></div>

              <div className={`text-5xl md:text-6xl ${s.color} group-hover:scale-110 transition-transform duration-500`}>
                {s.icon}
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="text-[10px] font-bold text-zinc-500 tracking-[0.3em] mb-2 uppercase">{s.category}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-zinc-400 text-lg max-w-2xl">{s.desc}</p>
              </div>

              <div className="flex items-center gap-4">
                 <button className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full text-sm font-bold transition-all">
                    Details bekijken
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
