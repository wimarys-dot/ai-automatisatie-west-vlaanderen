import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from '@repo/ui';

const faqs = [
  {
    q: 'Kan ik mijn bestaande n8n instance migreren?',
    a: 'Ja, wij bieden een volledige migratieservice aan. Wij nemen uw bestaande n8n instance, workflows, credentials en instellingen over naar onze managed hosting omgeving. Het migratieproces verloopt zonder downtime dankzij een parallelle setup. Gemiddeld duurt een migratie 1 tot 3 werkdagen, afhankelijk van de complexiteit van uw workflows en het aantal integraties.',
  },
  {
    q: 'Waar staan de servers?',
    a: 'Al onze servers bevinden zich in Europese datacenters, specifiek in Nederland en Duitsland. Dit garandeert volledige GDPR-compliance en lage latency voor Belgische en Nederlandse klanten. Uw data verlaat nooit de Europese Unie. Wij werken uitsluitend met gecertificeerde hosting partners die ISO 27001 en SOC 2 compliant zijn.',
  },
  {
    q: 'Kan ik mijn eigen domeinnaam gebruiken?',
    a: 'Ja, vanaf het Professional pakket kunt u uw eigen domeinnaam koppelen aan uw n8n instance. Wij regelen het SSL-certificaat en de DNS-configuratie. Zo is uw n8n omgeving bereikbaar via bijvoorbeeld n8n.uwbedrijf.be in plaats van een standaard subdomeinnaam.',
  },
  {
    q: 'Wat als ik meer resources nodig heb?',
    a: 'Opschalen is eenvoudig. U kunt op elk moment upgraden naar een hoger pakket of extra resources aanvragen. Bij het Enterprise pakket bieden wij volledig op maat gemaakte server configuraties aan. Wij monitoren proactief het resourcegebruik en adviseren u wanneer opschalen verstandig is, zodat uw workflows altijd soepel blijven draaien.',
  },
  {
    q: 'Bieden jullie voorbeeld workflows aan?',
    a: 'Ja, bij elk managed hosting pakket ontvangt u toegang tot onze workflow template bibliotheek. Deze bevat tientallen kant-en-klare n8n workflows voor veelvoorkomende use cases zoals CRM-synchronisatie, facturatie-automatisering, e-mail marketing flows en data-integraties. U kunt deze templates direct importeren en aanpassen aan uw eigen behoeften.',
  },
  {
    q: 'Hoe veilig is managed hosting?',
    a: 'Veiligheid is onze hoogste prioriteit. Wij implementeren meerdere beveiligingslagen: firewalls, DDoS-bescherming, encrypted data-at-rest en in-transit, regelmatige security audits en automatische beveiligingsupdates. Elke n8n instance draait in een geisoleerde Docker container. Dagelijkse backups worden versleuteld opgeslagen op een aparte locatie, zodat uw data altijd beschermd en herstelbaar is.',
  },
];

const ManagedHostingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>n8n Managed Hosting | Beheerde n8n Hosting in Europa | n8n-automatisatie.be</title>
        <meta
          name="description"
          content="n8n managed hosting op Europese servers. Professionele n8n hosting met support, workflow beheer, auto-updates en dagelijkse backups. Self-hosted kracht met cloud gemak. Managed n8n services vanaf €49/maand."
        />
        <link rel="canonical" href="https://n8n-automatisatie.be/diensten/managed-hosting" />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://n8n-automatisatie.be' },
          { name: 'Diensten', url: 'https://n8n-automatisatie.be/diensten' },
          { name: 'Managed Hosting', url: 'https://n8n-automatisatie.be/diensten/managed-hosting' },
        ]}
      />

      <ServiceSchema
        name="n8n Managed Hosting"
        description="Professionele n8n managed hosting op Europese servers. Inclusief dagelijkse backups, auto-updates, monitoring en support. GDPR-compliant hosting voor Belgische bedrijven."
        url="https://n8n-automatisatie.be/diensten/managed-hosting"
        provider="n8n-automatisatie.be"
        areaServed={['België', 'Nederland', 'West-Vlaanderen', 'Oost-Vlaanderen', 'Vlaams-Brabant']}
        priceRange="€49 - €199/maand"
      />

      <FAQSchema faqs={faqs.map((faq) => ({ question: faq.q, answer: faq.a }))} />

      <div className="animate-fade-in pt-32 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <header className="mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 px-4 py-1.5 rounded-full mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse"></span>
              <span className="text-xs font-bold text-brand tracking-wide uppercase">Managed Hosting</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-primary mb-8 tracking-tight leading-tight">
              n8n Managed Hosting:{' '}
              <span className="text-brand">Zorgeloos Automatiseren</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-4xl leading-relaxed">
              Wilt u de kracht van n8n benutten zonder de complexiteit van server beheer? Met onze
              managed n8n hosting draait uw n8n instance op betrouwbare Europese cloud servers,
              volledig beheerd door ons team. U profiteert van de voordelen van een self-hosted
              oplossing &mdash; volledige controle over uw workflows en data &mdash; zonder dat u
              zich zorgen hoeft te maken over updates, server configuratie of beveiliging. Of u nu
              overstapt van n8n cloud, uw huidige VPS wilt vervangen, of voor het eerst met n8n
              start: onze managed hosting services bieden een betrouwbare basis voor al uw
              automatiseringen. Wij zorgen voor de n8n hosting infrastructuur zodat u zich kunt
              focussen op wat echt telt: het bouwen van slimme workflows die uw bedrijf
              vooruit helpen.
            </p>
          </header>

          {/* Waarom Managed n8n Hosting? */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">
              Waarom Managed <span className="text-brand">n8n Hosting</span>?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: '🟢',
                  title: '99.9% Uptime Garantie',
                  desc: 'Uw n8n workflows draaien 24/7 op redundante infrastructuur. Onze uptime garantie zorgt ervoor dat uw automatiseringen altijd beschikbaar zijn wanneer u ze nodig heeft.',
                },
                {
                  icon: '🇪🇺',
                  title: 'Europese Servers (GDPR)',
                  desc: 'Al onze servers staan in de EU. Uw data en workflows blijven binnen Europa, volledig in lijn met de GDPR en Belgische privacywetgeving. Geen data-export naar de VS.',
                },
                {
                  icon: '💾',
                  title: 'Dagelijkse Backups',
                  desc: 'Elke dag wordt een volledige backup gemaakt van uw n8n instance, inclusief workflows, credentials en configuratie. Backups worden 30 dagen bewaard op een aparte locatie.',
                },
                {
                  icon: '🔄',
                  title: 'Auto-Updates & Monitoring',
                  desc: 'Wij houden uw n8n installatie up-to-date met de nieuwste versies en beveiligingspatches. 24/7 monitoring detecteert problemen voordat ze impact hebben op uw workflows.',
                },
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-surface-border-hover hover:shadow-lg transition-all text-center"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-text-primary mb-3">{benefit.title}</h3>
                  <p className="text-sm text-text-secondary">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Managed Hosting Pakketten */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 text-center">
              Managed Hosting <span className="text-brand">Pakketten</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto text-center mb-12">
              Kies het pakket dat past bij uw behoeften. Upgraden kan op elk moment zonder downtime.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Basis */}
              <div className="bg-surface-card border border-surface-border rounded-2xl p-8">
                <h3 className="text-xl font-bold text-text-primary mb-2">Basis</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-extrabold text-text-primary">&euro;49</span>
                  <span className="text-sm text-text-muted">/maand</span>
                </div>
                <p className="text-sm text-text-secondary mb-8">
                  Ideaal voor kleine bedrijven en starters met n8n.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    '1 n8n instance',
                    '5GB opslag',
                    'Email support',
                    'Dagelijkse backup',
                  ].map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-text-secondary">
                      <svg className="w-4 h-4 text-brand flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block text-center px-6 py-3 rounded-full font-bold transition-all bg-brand text-white hover:bg-brand-hover"
                >
                  Kies Basis
                </a>
              </div>

              {/* Professional */}
              <div className="relative bg-brand text-white border-2 border-brand rounded-2xl p-8 shadow-xl shadow-brand/20 scale-105">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-brand px-4 py-1 rounded-full text-xs font-bold shadow-md">
                  POPULAIRST
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-extrabold text-white">&euro;99</span>
                  <span className="text-sm text-white/70">/maand</span>
                </div>
                <p className="text-sm text-white/80 mb-8">
                  Voor groeiende bedrijven die meer nodig hebben.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    '3 n8n instances',
                    '20GB opslag',
                    'Prioriteit support',
                    'Dedicated resources',
                    'Custom domain',
                  ].map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-white/90">
                      <svg className="w-4 h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block text-center px-6 py-3 rounded-full font-bold transition-all bg-white text-brand hover:bg-white/90"
                >
                  Kies Professional
                </a>
              </div>

              {/* Enterprise */}
              <div className="bg-surface-card border border-surface-border rounded-2xl p-8">
                <h3 className="text-xl font-bold text-text-primary mb-2">Enterprise</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-extrabold text-text-primary">&euro;199</span>
                  <span className="text-sm text-text-muted">/maand</span>
                </div>
                <p className="text-sm text-text-secondary mb-8">
                  Volledig ontzorgd voor veeleisende organisaties.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Onbeperkte instances',
                    '100GB opslag',
                    '24/7 support',
                    'SLA garantie',
                    'Dedicated server',
                    'On-premise optie',
                  ].map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-text-secondary">
                      <svg className="w-4 h-4 text-brand flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block text-center px-6 py-3 rounded-full font-bold transition-all bg-brand text-white hover:bg-brand-hover"
                >
                  Kies Enterprise
                </a>
              </div>
            </div>
          </section>

          {/* Self-Hosted vs Cloud vs Managed */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Self-Hosted vs Cloud vs <span className="text-brand">Managed</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-3xl">
              Twijfelt u tussen n8n zelf hosten, n8n cloud gebruiken of managed hosting? Hier is een
              overzicht van de belangrijkste verschillen zodat u de juiste keuze maakt voor uw
              organisatie.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-surface-card border border-surface-border rounded-2xl overflow-hidden">
                <thead>
                  <tr className="border-b border-surface-border">
                    <th className="text-left p-5 text-text-muted font-medium text-sm">Kenmerk</th>
                    <th className="text-left p-5 text-text-primary font-bold text-sm">Self-Hosted</th>
                    <th className="text-left p-5 text-text-primary font-bold text-sm">n8n Cloud</th>
                    <th className="text-left p-5 text-brand font-bold text-sm">Managed Hosting</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Server beheer', 'Zelf regelen', 'n8n Inc.', 'Wij regelen alles'],
                    ['Data locatie', 'Eigen keuze', 'VS / EU (beperkt)', 'EU gegarandeerd'],
                    ['Updates', 'Handmatig', 'Automatisch', 'Automatisch + getest'],
                    ['Support', 'Community', 'Email / Chat', 'Persoonlijk + prioriteit'],
                    ['Backups', 'Zelf instellen', 'Inbegrepen', 'Dagelijks + herstel'],
                    ['Kosten', '€10-20/mnd server', 'Vanaf €20/mnd', 'Vanaf €49/mnd'],
                    ['Schaalbaarheid', 'Zelf opschalen', 'Plan upgraden', 'Wij schalen voor u'],
                    ['Technische kennis', 'Vereist (Docker/Linux)', 'Niet nodig', 'Niet nodig'],
                  ].map(([label, self, cloud, managed], idx) => (
                    <tr key={idx} className="border-b border-surface-border last:border-0">
                      <td className="p-5 text-text-primary font-medium text-sm">{label}</td>
                      <td className="p-5 text-text-secondary text-sm">{self}</td>
                      <td className="p-5 text-text-secondary text-sm">{cloud}</td>
                      <td className="p-5 text-brand font-semibold text-sm">{managed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-text-secondary mt-6">
              <strong className="text-text-primary">Onze aanbeveling:</strong> managed hosting
              combineert het beste van beide werelden. U behoudt volledige controle over uw data en
              workflows, terwijl wij het technische beheer op ons nemen. Ideaal voor bedrijven die
              willen automatiseren zonder een DevOps-team in te zetten.
            </p>
          </section>

          {/* Migratie naar Managed Hosting */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Migratie naar <span className="text-brand">Managed Hosting</span>
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-3xl">
              Of u nu overstapt van een eigen VPS, n8n cloud of een andere provider: wij maken de
              migratie naar managed hosting zo soepel mogelijk. Ons bewezen migratieproces bestaat
              uit vier stappen.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Intake & Analyse',
                  desc: 'Wij analyseren uw huidige n8n setup, workflows, integraties en server configuratie. We brengen alle afhankelijkheden in kaart en maken een gedetailleerd migratieplan.',
                },
                {
                  step: '2',
                  title: 'Omgeving Voorbereiden',
                  desc: 'Wij richten uw nieuwe managed hosting omgeving in met de juiste resources, beveiligingsinstellingen en netwerk configuratie. Uw custom domain wordt alvast geconfigureerd.',
                },
                {
                  step: '3',
                  title: 'Data & Workflow Migratie',
                  desc: 'Alle workflows, credentials, variabelen en configuratie worden overgezet naar de nieuwe omgeving. Wij testen elke workflow grondig om te garanderen dat alles correct functioneert.',
                },
                {
                  step: '4',
                  title: 'Go-Live & Monitoring',
                  desc: 'Na succesvolle testing schakelen wij over naar de nieuwe omgeving. De eerste twee weken monitoren wij extra intensief en staan wij paraat voor eventuele aanpassingen.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-surface-card border border-surface-border rounded-2xl p-6 relative hover:border-surface-border-hover transition-all"
                >
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-brand rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-3 mt-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Veelgestelde Vragen */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">
              Veelgestelde <span className="text-brand">Vragen</span>
            </h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-surface-card border border-surface-border rounded-2xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-text-primary pr-4">{faq.q}</h3>
                    <span className="text-brand text-2xl group-open:rotate-45 transition-transform flex-shrink-0">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-text-secondary leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Gerelateerde pagina's */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Meer ontdekken</h2>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/diensten"
                className="bg-text-primary/5 text-text-primary px-4 py-2 rounded-full text-sm hover:bg-text-primary/10 transition border border-surface-border"
              >
                Alle diensten
              </Link>
              <Link
                to="/prijzen"
                className="bg-text-primary/5 text-text-primary px-4 py-2 rounded-full text-sm hover:bg-text-primary/10 transition border border-surface-border"
              >
                Prijzen &amp; pakketten
              </Link>
              <Link
                to="/use-cases"
                className="bg-text-primary/5 text-text-primary px-4 py-2 rounded-full text-sm hover:bg-text-primary/10 transition border border-surface-border"
              >
                Use cases
              </Link>
              <a
                href="https://n8n-expert.be"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-text-primary/5 text-text-primary px-4 py-2 rounded-full text-sm hover:bg-text-primary/10 transition border border-surface-border"
              >
                n8n-expert.be
              </a>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-surface-border">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Start met <span className="text-brand">Managed Hosting</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Laat ons uw n8n omgeving beheren zodat u zich kunt focussen op uw business. Vraag
              vandaag nog een vrijblijvende offerte aan en ontdek welk pakket bij u past.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-block bg-brand hover:bg-brand-hover text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-brand/20 hover:scale-105"
              >
                Start met Managed Hosting
              </a>
              <Link
                to="/diensten"
                className="inline-block bg-text-primary/5 hover:bg-text-primary/10 border border-surface-border text-text-primary px-10 py-5 rounded-full font-bold text-lg transition-all"
              >
                Bekijk alle diensten
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
};

export default ManagedHostingPage;
