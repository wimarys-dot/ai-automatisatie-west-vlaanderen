import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Form Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#ff6d5a]/10 border border-[#ff6d5a]/20 px-4 py-1.5 rounded-full mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#ff6d5a] animate-pulse"></span>
              <span className="text-xs font-bold text-[#ff6d5a] tracking-wide">GRATIS ADVIESGESPREK</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Klaar om te automatiseren?</h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-8">
              Vertel ons over uw uitdaging. We reageren binnen 24 uur met een vrijblijvend voorstel.
            </p>
            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff6d5a] to-[#7c3aed] flex items-center justify-center text-white text-xs font-bold">K</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#0ea5e9] flex items-center justify-center text-white text-xs font-bold">B</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#10b981] flex items-center justify-center text-white text-xs font-bold">M</div>
                </div>
                <span>50+ West-Vlaamse KMO's</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-zinc-700"></div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1">5.0 gemiddeld</span>
              </div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <Link
              to="/"
              className="flex items-center space-x-3 mb-6 group w-fit"
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-black text-black group-hover:rotate-6 transition-transform">AI</div>
              <span className="text-xl font-black tracking-tight text-white">ai-automatisatie<span className="text-[#ff6d5a]">.be</span></span>
            </Link>
            <p className="text-zinc-400 max-w-sm mb-6">
              Wij helpen West-Vlaamse ondernemers de voorsprong te nemen met n8n en AI. Geen complexiteit, wel resultaat.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Expertise</h4>
            <ul className="space-y-4 text-zinc-400 text-sm font-medium">
              <li><Link to="/n8n-expert" className="hover:text-[#ff6d5a] transition-colors">n8n Workflow Design</Link></li>
              <li><Link to="/ai-agents" className="hover:text-[#ff6d5a] transition-colors">AI Agents</Link></li>
              <li><Link to="/mcp-protocol" className="hover:text-[#ff6d5a] transition-colors">MCP Protocol</Link></li>
              <li><Link to="/sectoren" className="hover:text-[#ff6d5a] transition-colors">Sectoren</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Kennisbank</h4>
            <ul className="space-y-4 text-zinc-400 text-sm font-medium">
              <li><Link to="/wat-is-n8n" className="hover:text-[#ff6d5a] transition-colors">Wat is n8n?</Link></li>
              <li><Link to="/n8n-vs-zapier" className="hover:text-[#ff6d5a] transition-colors">n8n vs Zapier</Link></li>
              <li><Link to="/n8n-vs-make" className="hover:text-[#ff6d5a] transition-colors">n8n vs Make</Link></li>
              <li><Link to="/ai-automatisering" className="hover:text-[#ff6d5a] transition-colors">AI Automatisering</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Regio</h4>
            <ul className="space-y-4 text-zinc-400 text-sm font-medium">
              <li><Link to="/roeselare" className="hover:text-[#ff6d5a] transition-colors">Roeselare</Link></li>
              <li><Link to="/kortrijk" className="hover:text-[#ff6d5a] transition-colors">Kortrijk</Link></li>
              <li><Link to="/brugge" className="hover:text-[#ff6d5a] transition-colors">Brugge</Link></li>
              <li><Link to="/oostende" className="hover:text-[#ff6d5a] transition-colors">Oostende</Link></li>
              <li><Link to="/ieper" className="hover:text-[#ff6d5a] transition-colors">Ieper</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 uppercase tracking-[0.2em] gap-4">
          <p>&copy; 2026 AI-AUTOMATISATIE.BE. West-Vlaamse Slagkracht.</p>
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
