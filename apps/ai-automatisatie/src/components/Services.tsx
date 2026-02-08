import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: "n8n Workflow Design",
      category: "CORE ENGINE",
      desc: "Wij migreren uw Zapier chaos naar een gestructureerde n8n omgeving. Lagere kosten, meer controle.",
      icon: "⚡",
      color: "text-[#ff6d5a]",
      path: '/n8n-expert',
      hoverBorder: 'hover:border-[#ff6d5a]/40'
    },
    {
      title: "Agentic AI Modules",
      category: "COGNITION",
      desc: "Implementatie van autonome agents die uw CRM en inbox beheren zoals een menselijke collega.",
      icon: "🤖",
      color: "text-[#7c3aed]",
      path: '/ai-agents',
      hoverBorder: 'hover:border-[#7c3aed]/40'
    },
    {
      title: "MCP Data Bridge",
      category: "CONNECTIVITY",
      desc: "Koppel uw lokale SQL of Excel data veilig aan AI modellen via het Model Context Protocol.",
      icon: "💠",
      color: "text-[#0ea5e9]",
      path: '/mcp-protocol',
      hoverBorder: 'hover:border-[#0ea5e9]/40'
    }
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Onze <span className="text-[#ff6d5a]">Modules</span></h2>
          <p className="text-zinc-400 text-xl max-w-2xl font-medium">
            Modulaire oplossingen die naadloos op elkaar aansluiten voor maximale impact in uw West-Vlaamse KMO.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((s, idx) => (
            <Link
              key={idx}
              to={s.path}
              className={`group flex flex-col md:flex-row items-center gap-8 bg-[#18181b] border border-[#27272a] p-10 rounded-[2.5rem] transition-all cursor-pointer relative ${s.hoverBorder}`}
            >
              <div className="node-socket -top-1 left-1/2 -translate-x-1/2 hidden md:block"></div>
              <div className="node-socket -bottom-1 left-1/2 -translate-x-1/2 hidden md:block"></div>

              <div className={`text-5xl md:text-6xl ${s.color} group-hover:scale-110 transition-transform duration-500`}>
                {s.icon}
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="text-[10px] font-bold text-zinc-400 tracking-[0.3em] mb-2 uppercase">{s.category}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-zinc-400 text-lg max-w-2xl">{s.desc}</p>
              </div>

              <div className="flex items-center gap-4">
                 <span className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full text-sm font-bold transition-all">
                    Details bekijken
                 </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
