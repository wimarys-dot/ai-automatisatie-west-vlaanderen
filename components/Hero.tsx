import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 md:pt-40 pb-20 overflow-hidden">
      {/* Geanimeerde achtergrond lijnen */}
      <div className="absolute top-1/4 left-0 w-full h-px overflow-hidden pointer-events-none">
        <div className="workflow-line"></div>
      </div>
      <div className="absolute top-2/3 left-0 w-full h-px overflow-hidden pointer-events-none">
        <div className="workflow-line" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Version/Badge in n8n stijl */}
          <div className="inline-flex items-center gap-2 bg-[#ff6d5a]/10 border border-[#ff6d5a]/20 px-4 py-1.5 rounded-full mb-10">
            <span className="flex h-2 w-2 rounded-full bg-[#ff6d5a] animate-pulse"></span>
            <span className="text-xs font-bold text-[#ff6d5a] tracking-wide">v2.0.26 — De Toekomst van West-Vlaanderen</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-extrabold mb-8 tracking-tight leading-[1.05] text-white max-w-5xl">
            Automatiseer alles. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6d5a] via-[#7c3aed] to-[#0ea5e9]">Zonder limieten.</span>
          </h1>

          <p className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-14 font-medium">
            De n8n expert die uw data verbindt. Wij bouwen krachtige workflows voor KMO's in Roeselare, Kortrijk en Brugge.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-24">
            <Link
              to="/n8n-expert"
              className="bg-[#ff6d5a] hover:bg-[#ff8575] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#ff6d5a]/20 hover:scale-105"
            >
              Start met automatiseren
            </Link>
            <Link
              to="/mcp-protocol"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg transition-all"
            >
              Hoe het werkt
            </Link>
          </div>

          {/* n8n Node-style Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {[
              { label: 'Trigger', title: 'n8n Workflow Hub', desc: 'Het kloppend hart van uw bedrijf.', icon: '⚡', path: '/n8n-expert', color: 'bg-[#ff6d5a]', border: 'hover:border-[#ff6d5a]/50' },
              { label: 'Action', title: 'AI Intelligentie', desc: 'Agents die voor u denken en doen.', icon: '🤖', path: '/ai-agents', color: 'bg-[#7c3aed]', border: 'hover:border-[#7c3aed]/50' },
              { label: 'Storage', title: 'MCP Protocol', desc: 'Veilige verbinding met uw databases.', icon: '💠', path: '/mcp-protocol', color: 'bg-[#0ea5e9]', border: 'hover:border-[#0ea5e9]/50' }
            ].map((node, i) => (
              <Link
                key={i}
                to={node.path}
                className={`relative group bg-[#18181b] border border-[#27272a] ${node.border} p-8 rounded-3xl text-left transition-all cursor-pointer overflow-hidden`}
              >
                {/* Node Sockets */}
                <div className="node-socket -left-1 top-1/2 -translate-y-1/2"></div>
                <div className="node-socket -right-1 top-1/2 -translate-y-1/2"></div>

                <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${node.color}`}></span>
                  {node.label}
                </div>

                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">{node.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{node.title}</h3>
                <p className="text-sm text-zinc-400">{node.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
