import React from 'react';
import { Link } from 'react-router-dom';
import type { FooterConfig } from '@repo/types';
import ContactForm from '../components/ContactForm';

interface FooterProps {
  config: FooterConfig;
  logo: {
    text: string;
    accent: string;
  };
  description: string;
  webhookUrl: string;
  email: string;
  phone?: string;
  contactTitle?: string;
  contactSubtitle?: string;
}

const Footer: React.FC<FooterProps> = ({
  config,
  logo,
  description,
  webhookUrl,
  email,
  phone,
  contactTitle = 'Klaar om te automatiseren?',
  contactSubtitle = 'Vertel ons over uw uitdaging. We reageren binnen 24 uur met een vrijblijvend voorstel.',
}) => {
  return (
    <footer id="contact" className="pt-24 pb-12 bg-surface-bg border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Form Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-muted border border-brand/20 px-4 py-1.5 rounded-full mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse"></span>
              <span className="text-xs font-bold text-brand tracking-wide">GRATIS ADVIESGESPREK</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{contactTitle}</h2>
            <p className="text-text-secondary max-w-xl mx-auto mb-8">{contactSubtitle}</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm webhookUrl={webhookUrl} />
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group w-fit">
              <div className="w-10 h-10 bg-text-primary rounded-xl flex items-center justify-center font-black text-text-inverted group-hover:rotate-6 transition-transform">
                {logo.text}
              </div>
              <span className="text-xl font-black tracking-tight text-text-primary">{logo.accent}</span>
            </Link>
            <p className="text-text-secondary max-w-sm mb-6">{description}</p>
          </div>

          {config.columns.map((col, i) => (
            <div key={i}>
              <h4 className="font-bold mb-6 text-text-primary uppercase text-xs tracking-widest">{col.title}</h4>
              <ul className="space-y-4 text-text-secondary text-sm font-medium">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link to={link.path} className="hover:text-brand transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-surface-border flex flex-col md:flex-row justify-between items-center text-[10px] text-text-muted uppercase tracking-[0.2em] gap-4">
          <p>{config.copyright}</p>
          <div className="flex gap-8">
            <span className="text-brand/50 italic">{config.tagline}</span>
            <a href="#" className="hover:text-text-primary transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
