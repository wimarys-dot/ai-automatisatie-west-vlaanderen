import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WorkflowBenefits from '../components/infographics/WorkflowBenefits';

const SectorPage: React.FC = () => {
  const mainSectors = [
    {
      name: 'Accountants & Boekhouders',
      icon: '📊',
      focus: 'Document verwerking',
      link: '/sector/accountants',
      desc: 'Automatiseer factuurverwerking, BTW aangiftes en klantcommunicatie.'
    },
    {
      name: 'Makelaars & Vastgoed',
      icon: '🏠',
      focus: 'Lead management',
      link: '/sector/makelaars',
      desc: 'Van bezichtiging tot verkoop - geautomatiseerde vastgoed workflows.'
    },
    {
      name: 'Advocaten & Juridisch',
      icon: '⚖️',
      focus: 'Document automatisering',
      link: '/sector/advocaten',
      desc: 'Dossier management, deadline tracking en veilige klantcommunicatie.'
    },
    {
      name: 'Retail & E-commerce',
      icon: '🛒',
      focus: 'Omnichannel sync',
      link: '/sector/retail',
      desc: 'Voorraad, orders en klantcommunicatie over alle kanalen.'
    },
    {
      name: 'Bouw & Constructie',
      icon: '🏗️',
      focus: 'Project management',
      link: '/sector/bouw',
      desc: 'Werfverslagen, planning en leverancier communicatie geautomatiseerd.'
    },
  ];

  const additionalSectors = [
    { name: 'Productie & Industrie', icon: '🏭', focus: 'ERP-n8n koppeling' },
    { name: 'Logistiek', icon: '🚛', focus: 'Route optimalisatie' },
    { name: 'Horeca', icon: '🍽️', focus: 'Reserveringen & reviews' },
    { name: 'Gezondheidszorg', icon: '🏥', focus: 'Afspraakbeheer' },
    { name: 'Landbouw', icon: '🌾', focus: 'Administratie & subsidies' },
    { name: 'Onderwijs', icon: '📚', focus: 'Communicatie & planning' },
  ];

  const cities = [
    { name: 'Brugge', link: '/brugge', desc: 'Toerisme, horeca en haven' },
    { name: 'Kortrijk', link: '/kortrijk', desc: 'Textiel, tech en startups' },
    { name: 'Oostende', link: '/oostende', desc: 'Kust, maritiem en offshore' },
    { name: 'Roeselare', link: '/roeselare', desc: 'Voeding en industrie' },
    { name: 'Ieper', link: '/ieper', desc: 'Westhoek en landbouw' },
  ];

  const benefits = [
    { title: 'Lokale Expertise', desc: 'Wij kennen de West-Vlaamse markt en mentaliteit' },
    { title: 'Branche Kennis', desc: 'Ervaring met de specifieke software en processen per sector' },
    { title: 'Snelle Service', desc: 'Korte lijnen en persoonlijk contact' },
    { title: 'Maatwerk', desc: 'Oplossingen afgestemd op uw specifieke situatie' },
  ];

  return (
    <>
      <Helmet>
        <title>Sectoren | Automatisering per Branche | West-Vlaanderen</title>
        <meta name="description" content="AI automatisering voor specifieke sectoren in West-Vlaanderen. Accountants, makelaars, advocaten, retail, bouw en meer. Maatwerk oplossingen met lokale expertise." />
        <link rel="canonical" href="https://ai-automatisatie.be/sectoren" />
      </Helmet>

      <div className="animate-fade-in pt-32 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <header className="mb-16 md:mb-24">
            <div className="max-w-3xl">
              <div className="text-[#ff6d5a] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Branche Expertise</div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
                Focus op <span className="text-[#ff6d5a]">Lokale KMO's</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed">
                Wij helpen specifieke sectoren in West-Vlaanderen om de sprong naar slimme automatisering te maken. Geen one-size-fits-all, maar maatwerk per branche.
              </p>
            </div>
          </header>

          {/* Main Sectors with dedicated pages */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Sectoren met gespecialiseerde oplossingen</h2>
            <p className="text-zinc-400 text-lg mb-12">
              Voor deze sectoren hebben wij uitgebreide ervaring en kant-en-klare oplossingen:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainSectors.map((sector, idx) => (
                <Link
                  key={idx}
                  to={sector.link}
                  className="group bg-[#18181b] border border-white/5 p-8 rounded-[2rem] hover:border-[#ff6d5a]/40 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{sector.icon}</div>
                    <span className="text-[#ff6d5a] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff6d5a] transition-colors">
                    {sector.name}
                  </h3>
                  <p className="text-[#ff6d5a] font-bold text-xs uppercase tracking-widest mb-4">
                    Focus: {sector.focus}
                  </p>
                  <p className="text-zinc-400 text-sm">{sector.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Additional Sectors */}
          <section className="mb-16 md:mb-24">
            <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Andere sectoren</h2>
              <p className="text-zinc-400 text-lg mb-8">
                Wij werken ook met bedrijven in deze sectoren. De automatiseringsprincipes zijn universeel toepasbaar:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {additionalSectors.map((sector, idx) => (
                  <div key={idx} className="bg-white/5 p-4 rounded-xl flex items-center gap-4">
                    <span className="text-2xl">{sector.icon}</span>
                    <div>
                      <h3 className="text-white font-bold">{sector.name}</h3>
                      <p className="text-zinc-400 text-sm">{sector.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Regional Coverage */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Actief in heel West-Vlaanderen</h2>
            <p className="text-zinc-400 text-lg mb-12">
              Wij bedienen bedrijven in alle grote steden van West-Vlaanderen met lokale service:
            </p>
            <div className="grid md:grid-cols-5 gap-4">
              {cities.map((city, idx) => (
                <Link
                  key={idx}
                  to={city.link}
                  className="bg-gradient-to-br from-[#ff6d5a]/10 to-transparent border border-[#ff6d5a]/20 p-6 rounded-2xl hover:border-[#ff6d5a]/40 transition-all text-center"
                >
                  <h3 className="text-white font-bold mb-2">{city.name}</h3>
                  <p className="text-zinc-400 text-xs">{city.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Waarom sectorfocus?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-zinc-400 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Approach */}
          <section className="mb-16 md:mb-24">
            <div className="bg-gradient-to-br from-[#7c3aed]/10 to-transparent border border-[#7c3aed]/20 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Onze aanpak per sector</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Elke sector heeft unieke uitdagingen en software. Onze aanpak:
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">1. Analyse</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li className="flex items-start gap-3">
                      <span className="text-[#ff6d5a]">✓</span>
                      <span>In kaart brengen huidige processen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#ff6d5a]">✓</span>
                      <span>Identificeren van bottlenecks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#ff6d5a]">✓</span>
                      <span>Software inventarisatie</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">2. Implementatie</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li className="flex items-start gap-3">
                      <span className="text-[#ff6d5a]">✓</span>
                      <span>Sector-specifieke workflows bouwen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#ff6d5a]">✓</span>
                      <span>Integratie met branche software</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#ff6d5a]">✓</span>
                      <span>Training en documentatie</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Workflow Benefits Infographic */}
          <WorkflowBenefits />

          {/* Related Pages */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-2xl font-bold text-white mb-6">Meer over onze diensten</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/wat-is-n8n" className="bg-[#18181b] hover:bg-[#1f1f23] border border-white/5 p-6 rounded-2xl transition-all">
                <h3 className="text-white font-bold mb-2">Wat is n8n?</h3>
                <p className="text-zinc-400 text-sm">Het platform achter onze automatisering</p>
              </Link>
              <Link to="/ai-automatisering" className="bg-[#18181b] hover:bg-[#1f1f23] border border-white/5 p-6 rounded-2xl transition-all">
                <h3 className="text-white font-bold mb-2">AI Automatisering</h3>
                <p className="text-zinc-400 text-sm">Hoe AI uw processen kan verbeteren</p>
              </Link>
              <Link to="/n8n-expert" className="bg-[#18181b] hover:bg-[#1f1f23] border border-white/5 p-6 rounded-2xl transition-all">
                <h3 className="text-white font-bold mb-2">n8n Expert</h3>
                <p className="text-zinc-400 text-sm">Ontdek onze expertise</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#ff6d5a] rounded-[2.5rem] p-12 md:p-16 text-center shadow-2xl shadow-[#ff6d5a]/20">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Uw sector niet vermeld?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Geen probleem. Automatisering is toepasbaar in elke sector. Wij analyseren graag uw specifieke situatie en mogelijkheden.
            </p>
            <Link
              to="/n8n-expert"
              className="inline-block bg-white text-[#ff6d5a] px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-all"
            >
              Vraag een analyse aan
            </Link>
          </section>
        </article>
      </div>
    </>
  );
};

export default SectorPage;
