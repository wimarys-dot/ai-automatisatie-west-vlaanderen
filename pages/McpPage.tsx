
import React from 'react';

const McpPage: React.FC = () => {
  return (
    <div className="animate-fade-in py-12 md:py-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center mb-20 md:mb-32">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="text-[#0ea5e9] font-black tracking-widest text-[9px] md:text-[10px] uppercase mb-4">Protocol Mastery</div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-tight md:leading-none">
              MCP: DE <span className="text-[#0ea5e9]">STANDAARD</span> VOOR 2026.
            </h1>
            <p className="text-base md:text-xl text-zinc-400 mb-8 leading-relaxed">
              Model Context Protocol (MCP) is de ontbrekende schakel tussen krachtige AI modellen en uw private bedrijfsdata. Wij implementeren MCP servers die uw databases veilig ontsluiten voor AI zonder dat de data getraind wordt door Big Tech.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
               <div className="bg-white/5 px-5 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl border border-white/10 text-white font-bold text-xs md:text-sm">✓ SQL Connectivity</div>
               <div className="bg-white/5 px-5 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl border border-white/10 text-white font-bold text-xs md:text-sm">✓ Local-First Privacy</div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            {/* Achtergrond gloed nu in technisch blauw */}
            <div className="absolute inset-0 bg-[#0ea5e9]/20 blur-[60px] md:blur-[100px] rounded-full"></div>
            <div className="relative bg-[#18181b] aspect-video rounded-[1.5rem] md:rounded-[3rem] border border-white/10 flex flex-col p-6 md:p-8 overflow-hidden">
               <div className="flex justify-between items-center mb-6 md:mb-8">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <span className="text-[8px] md:text-[10px] font-mono text-zinc-500 uppercase tracking-tighter">MCP-SERVER.CONFIG</span>
               </div>
               <div className="font-mono text-[10px] md:text-sm text-[#0ea5e9] space-y-2 opacity-80 overflow-hidden">
                  <p>{`"mcpServers": {`}</p>
                  <p className="pl-4">{`"local-db": {`}</p>
                  <p className="pl-8">{`"command": "npx",`}</p>
                  <p className="pl-8 text-[#ff6d5a]">{`"args": ["@mcp/postgres"]`}</p>
                  <p className="pl-4">{`}`}</p>
                  <p>{`}`}</p>
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-16 md:mb-24">
           <div className="p-8 md:p-12 bg-[#18181b] border border-white/5 rounded-[2rem] md:rounded-[3rem] hover:border-[#0ea5e9]/30 transition-all group">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 group-hover:text-[#0ea5e9] transition-colors">Veilige Koppeling</h3>
              <p className="text-sm md:text-base text-zinc-400">
                Veel bedrijven in West-Vlaanderen hebben kostbare data in on-premise databases. MCP laat AI toe deze data te 'lezen' via een gestandaardiseerde interface, zonder dat uw security in gevaar komt.
              </p>
           </div>
           <div className="p-8 md:p-12 bg-[#18181b] border border-white/5 rounded-[2rem] md:rounded-[3rem] hover:border-[#0ea5e9]/30 transition-all group">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 group-hover:text-[#0ea5e9] transition-colors">Real-time Context</h3>
              <p className="text-sm md:text-base text-zinc-400">
                Geef uw AI Agents direct toegang tot stock-niveaus, klantengeschiedenis en technische specificaties. Geen copy-paste meer naar ChatGPT.
              </p>
           </div>
        </div>

        <div className="text-center pb-24">
          <button className="bg-[#0ea5e9] hover:bg-[#38bdf8] text-white px-10 py-4 rounded-full font-black text-lg transition-all shadow-xl shadow-[#0ea5e9]/20">
            ONTDEK MCP IMPLEMENTATIE
          </button>
        </div>
      </section>
    </div>
  );
};

export default McpPage;
