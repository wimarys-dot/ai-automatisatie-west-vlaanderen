import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const StrategyTool: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<string | null>(null);
  const [location, setLocation] = useState<string>('West-Vlaanderen');

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation("uw specifieke regio in West-Vlaanderen");
      });
    }
  };

  const generateStrategy = async () => {
    if (!industry) return;
    setLoading(true);
    setStrategy(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Acteer als een 2026 AI Strategist van ai-automatisatie.be. 
        Genereer een futuristisch automatisatie-stappenplan voor een KMO in ${location}, actief in de sector: ${industry}. 
        
        Focus specifiek op:
        1. n8n workflow optimalisatie (besparing op Zapier kosten).
        2. Implementatie van AI Agents (digitale medewerkers).
        3. Gebruik van het Model Context Protocol (MCP) voor veilige lokale data-koppeling.
        
        Schrijf in een pragmatische, West-Vlaamse zakelijke toon. Noem steden zoals Roeselare, Kortrijk of Waregem waar relevant.
        Formatteer als krachtige bullet points met een duidelijke 'Eerste Stap'. Dutch language.`,
        config: {
            temperature: 0.8,
            topP: 0.95,
        }
      });
      setStrategy(response.text || "De AI-interface kon geen verbinding maken.");
    } catch (error) {
      console.error(error);
      setStrategy("Systeemfout. Probeer het later opnieuw of neem direct contact op via info@ai-automatisatie.be.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#ff6d5a] to-[#7c3aed] rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-[#18181b] rounded-[3rem] border border-white/10 p-8 md:p-12 overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div>
                <h2 className="text-4xl font-black text-white mb-2 tracking-tight uppercase italic">Strategy <span className="text-[#ff6d5a]">Lab</span></h2>
                <p className="text-zinc-400 font-medium italic">Ontvang een AI-gedreven blauwdruk voor uw onderneming.</p>
              </div>
              <button 
                onClick={detectLocation}
                className="text-[10px] font-black tracking-widest uppercase text-zinc-500 hover:text-[#ff6d5a] transition-colors flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#ff6d5a]/50"></span>
                Detecteer Locatie
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 mb-10">
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  placeholder="Uw sector (bijv. Logistiek, Metaal, Retail...)"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-[#ff6d5a]/50 focus:ring-4 focus:ring-[#ff6d5a]/10 transition-all placeholder:text-zinc-600 text-lg"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && generateStrategy()}
                />
              </div>
              <button 
                onClick={generateStrategy}
                disabled={loading}
                className="bg-[#ff6d5a] hover:bg-[#ff8575] text-white font-black py-5 px-12 rounded-2xl transition-all disabled:opacity-50 flex items-center justify-center gap-3 active:scale-95 shadow-xl shadow-[#ff6d5a]/20"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ANALYSEREN...
                  </>
                ) : 'GENEREER PLAN'}
              </button>
            </div>

            {strategy && (
              <div className="mt-8 animate-fade-in">
                <div className="p-1 rounded-3xl bg-gradient-to-br from-[#ff6d5a]/20 to-transparent">
                  <div className="bg-[#09090b] rounded-[1.4rem] p-8 border border-white/5 shadow-2xl">
                    <div className="flex items-center gap-2 mb-8 text-[#ff6d5a] text-[10px] font-black tracking-[0.3em] uppercase">
                      <span className="w-2 h-2 rounded-full bg-[#ff6d5a] animate-pulse"></span>
                      AI-Strategy Roadmap 2026
                    </div>
                    <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed space-y-4 font-light">
                      {strategy.split('\n').filter(l => l.trim() !== '').map((line, i) => (
                        <p key={i} className="flex gap-4">
                          <span className="text-[#ff6d5a] font-black">•</span>
                          {line.replace(/^[*-]\s*/, '')}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategyTool;