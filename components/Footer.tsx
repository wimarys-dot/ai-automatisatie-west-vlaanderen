import React from 'react';
import { View } from '../App';

interface FooterProps {
  setView: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer id="contact" className="pt-24 pb-12 bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div 
              className="flex items-center space-x-3 mb-6 cursor-pointer group w-fit"
              onClick={() => setView('home')}
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-black text-black group-hover:rotate-6 transition-transform">AI</div>
              <span className="text-xl font-black tracking-tight text-white">ai-automatisatie<span className="text-[#ff6d5a]">.be</span></span>
            </div>
            <p className="text-zinc-500 max-w-sm mb-6">
              Wij helpen West-Vlaamse ondernemers de voorsprong te nemen met n8n en AI. Geen complexiteit, wel resultaat.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Expertise</h4>
            <ul className="space-y-4 text-zinc-500 text-sm font-medium">
              <li><button onClick={() => setView('n8n')} className="hover:text-[#ff6d5a] transition-colors">n8n Workflow Design</button></li>
              <li><button onClick={() => setView('agents')} className="hover:text-[#ff6d5a] transition-colors">AI Agents</button></li>
              <li><button onClick={() => setView('mcp')} className="hover:text-[#ff6d5a] transition-colors">MCP Protocol</button></li>
              <li><button onClick={() => setView('sector')} className="hover:text-[#ff6d5a] transition-colors">Sectoren</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Regio</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li>Roeselare</li>
              <li>Kortrijk</li>
              <li>Brugge</li>
              <li>Waregem</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 uppercase tracking-[0.2em] gap-4">
          <p>© 2026 AI-AUTOMATISATIE.BE. West-Vlaamse Slagkracht.</p>
          <div className="flex gap-8">
            <span className="text-[#ff6d5a]/50 italic">Geen woorden, maar daden.</span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;