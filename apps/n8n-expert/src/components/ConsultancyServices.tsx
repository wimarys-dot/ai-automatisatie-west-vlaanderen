import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Audit & Advies',
    desc: 'Een grondige analyse van uw huidige automatiseringen, workflows en bedrijfsprocessen. Als n8n consultant breng ik in kaart waar de grootste kansen liggen voor automation en AI-integratie. U ontvangt concreet n8n advies met heldere prioriteiten en een realistische roadmap.',
    icon: '🔍',
    deliverables: [
      'Uitgebreid proces analyse rapport',
      'Opportunity matrix met ROI per workflow',
      'Implementatie roadmap (korte & lange termijn)',
      'ROI projectie met concrete besparingen',
      'Tool- en integratie aanbevelingen',
      'Risico assessment',
    ],
  },
  {
    title: 'Architectuur Review',
    desc: 'Laat uw bestaande n8n setup reviewen door een gecertificeerde expert. Ik identificeer bottlenecks, security risico\'s, schaalbaarheid issues en code quality problemen in uw workflows. Ideaal voor organisaties die hun n8n omgeving naar het volgende niveau willen tillen.',
    icon: '🏗️',
    deliverables: [
      'Compleet architectuur diagram',
      'Performance & load test rapport',
      'Security vulnerability assessment',
      'Schaalbaarheid analyse',
      'Gedetailleerd optimalisatie plan',
      'Technische schuld inventarisatie',
    ],
  },
  {
    title: 'Performance Optimalisatie',
    desc: 'Uw n8n workflows draaien trager dan verwacht? Als specialist in workflow automation identificeer ik de exacte oorzaak van performance problemen. Van database queries en API rate limiting tot memory management en parallel execution &mdash; ik optimaliseer uw setup voor maximale snelheid en betrouwbaarheid.',
    icon: '⚡',
    deliverables: [
      'Performance benchmark rapport',
      'Gedetailleerde bottleneck analyse',
      'Optimalisatie implementatie',
      'Before/after metrics dashboard',
      'Monitoring & alerting setup',
      'Capaciteitsplanning advies',
    ],
  },
  {
    title: 'Security Assessment',
    desc: 'Zijn uw API keys, credentials en data flows veilig? Een complete security audit van uw n8n omgeving, inclusief credential management, data encryptie, netwerk configuratie en compliance checks. Essentieel voor bedrijven die werken met gevoelige klantdata of onder GDPR vallen.',
    icon: '🔒',
    deliverables: [
      'Uitgebreid security scan rapport',
      'Vulnerability assessment met severity levels',
      'Credential management review',
      'GDPR compliance check',
      'Remediation plan met prioriteiten',
      'Security best practices handleiding',
    ],
    link: '/consultancy/security-audit',
    linkLabel: 'Meer over Security Audit',
  },
];

const reasons = [
  {
    title: 'Diepgaande n8n Expertise',
    desc: 'Als certified n8n expert partner beschik ik over de meest actuele kennis van het platform, inclusief geavanceerde features, custom nodes en de nieuwste AI-integraties.',
  },
  {
    title: 'Belgische Markt Kennis',
    desc: 'Ervaring met lokale tools zoals Teamleader, Exact Online, CodaBox, Billit en Belgische boekhoudsystemen. Ik ken de specifieke noden van Belgische KMO\'s en grotere organisaties.',
  },
  {
    title: 'AI Agents & Geavanceerde Automatisering',
    desc: 'Niet alleen standaard workflows &mdash; ik bouw intelligente AI agents die autonoom complexe taken uitvoeren, data analyseren en beslissingen nemen op basis van uw bedrijfsregels.',
  },
  {
    title: 'Van Advies tot Implementatie',
    desc: 'Geen theoretisch advies dat in een la belandt. Ik combineer strategisch n8n advies met hands-on technische implementatie, zodat elke aanbeveling ook daadwerkelijk wordt uitgevoerd.',
  },
  {
    title: 'Langetermijn Partnership',
    desc: 'Automatisering is geen eenmalig project. Ik bied doorlopende ondersteuning, monitoring en optimalisatie zodat uw n8n workflows blijven presteren naarmate uw bedrijf groeit.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Intake & Analyse',
    desc: 'Grondige intake van uw huidige processen, systemen en doelstellingen. We brengen samen in kaart waar de grootste impact mogelijk is.',
  },
  {
    step: '02',
    title: 'Strategisch Advies',
    desc: 'Op basis van de analyse ontvangt u een helder adviesrapport met concrete aanbevelingen, prioriteiten en een implementatie roadmap.',
  },
  {
    step: '03',
    title: 'Implementatie & Bouw',
    desc: 'Hands-on bouwen van uw workflows, integraties en AI agents. Inclusief testing, documentatie en kennisoverdracht aan uw team.',
  },
  {
    step: '04',
    title: 'Monitoring & Optimalisatie',
    desc: 'Doorlopende monitoring van uw automation omgeving. Proactieve optimalisatie en uitbreiding naarmate uw behoeften evolueren.',
  },
];

const faqs = [
  {
    q: 'Wat kun je met n8n?',
    a: 'Met n8n kunt u vrijwel elk bedrijfsproces automatiseren. Van eenvoudige data synchronisatie tussen tools tot complexe AI-gestuurde workflows die autonoom beslissingen nemen. Denk aan lead processing, facturatie automation, klantenservice bots, data pipelines, rapportage en meer. n8n ondersteunt 400+ integraties en kan via custom code en API\'s met elk systeem verbinden.',
  },
  {
    q: 'Is n8n makkelijk te leren?',
    a: 'n8n heeft een visuele workflow editor die de drempel verlaagt, maar voor geavanceerde use cases zoals AI agents, custom nodes en enterprise architectuur is technische expertise essentieel. De basis kun je snel leren, maar het verschil tussen een werkende en een robuuste, schaalbare oplossing vraagt om ervaring en diepgaande kennis van het platform.',
  },
  {
    q: 'Wat kost n8n?',
    a: 'n8n biedt een gratis self-hosted versie en betaalde cloud plannen. De self-hosted versie is volledig gratis (u betaalt alleen hosting). n8n Cloud start vanaf €20/maand voor het Starter plan. Voor enterprise gebruik zijn er custom prijzen. De totale kosten hangen af van uw hosting, het aantal workflows en of u een expert inschakelt voor setup en onderhoud.',
  },
  {
    q: 'Wat is beter dan n8n?',
    a: 'Er is geen universeel "betere" tool &mdash; het hangt af van uw use case. n8n onderscheidt zich door self-hosting mogelijkheden, volledige data controle en de flexibiliteit van custom code nodes. Vergeleken met Zapier en Make biedt n8n meer technische vrijheid tegen lagere kosten. Voor puur no-code gebruikers kan Make intuïtiever zijn, maar voor complexe en schaalbare automation is n8n vaak de beste keuze.',
  },
  {
    q: 'Heb ik programmeerervaring nodig voor n8n?',
    a: 'Voor basis workflows niet &mdash; n8n\'s visuele editor maakt drag-and-drop automatisering mogelijk. Maar voor geavanceerde scenario\'s zoals custom nodes, complexe data transformaties en API-integraties is JavaScript/TypeScript kennis een groot voordeel. Een n8n consultant kan deze technische complexiteit voor u afhandelen.',
  },
  {
    q: 'Hoe schaalbaar is n8n?',
    a: 'n8n is zeer schaalbaar. Met queue mode en meerdere workers kunt u duizenden workflows parallel draaien. Enterprise klanten verwerken miljoenen executions per maand. De schaalbaarheid hangt af van uw infrastructure setup &mdash; met de juiste architectuur (Kubernetes, load balancing, database optimalisatie) zijn er praktisch geen limieten.',
  },
];

const ConsultancyServices: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            n8n <span className="text-brand">Consultancy & Advies</span> voor Belgische Bedrijven
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Als ervaren n8n consultant en specialist bied ik strategisch advies en technische expertise voor
            organisaties die het maximum uit hun workflow automation willen halen. Van een grondige audit van uw
            bestaande workflows tot het ontwerpen van geavanceerde AI agents &mdash; ik help u bij elke stap.
            Met diepgaande kennis van n8n, data-integraties en de nieuwste automation tools lever ik advies
            dat direct tot resultaat leidt. Geen theoretisch verhaal, maar concrete code en implementeerbare oplossingen.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {services.map((s, i) => (
            <div key={i} className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-surface-border-hover transition-all">
              <div className="flex items-start gap-5">
                <div className="text-4xl">{s.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-primary mb-3">{s.title}</h3>
                  <p className="text-text-secondary text-sm mb-6">{s.desc}</p>
                  <div>
                    <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">Deliverables</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {s.deliverables.map((d, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-text-secondary">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                  {s.link && (
                    <Link to={s.link} className="inline-flex items-center gap-2 text-brand font-semibold text-sm mt-4 hover:underline">
                      {s.linkLabel}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Waarom kiezen voor een n8n consultant? */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-4">
            Waarom kiezen voor een <span className="text-brand">n8n consultant</span>?
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
            Een specialist maakt het verschil tussen een werkende workflow en een schaalbare, onderhoudbare automation strategie.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <div key={i} className="bg-surface-card border border-surface-border rounded-2xl p-6 hover:border-surface-border-hover transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand/10 text-brand font-bold text-sm">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-text-primary">{r.title}</h3>
                </div>
                <p className="text-text-secondary text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ons Consultancy Proces */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">
            Ons <span className="text-brand">Consultancy Proces</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <div key={i} className="relative bg-surface-card border border-surface-border rounded-2xl p-6 hover:border-surface-border-hover transition-all">
                <div className="text-3xl font-extrabold text-brand/20 mb-3">{s.step}</div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{s.title}</h3>
                <p className="text-text-secondary text-sm">{s.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-brand/30">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">
            Veelgestelde vragen over <span className="text-brand">n8n</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-surface-card border border-surface-border rounded-2xl overflow-hidden hover:border-surface-border-hover transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-bold text-text-primary pr-4">{faq.q}</h3>
                  <svg
                    className={`w-5 h-5 text-brand flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-text-secondary">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Internal + cross-site links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
          <Link to="/portfolio" className="text-brand font-semibold hover:underline">
            Bekijk onze projecten &rarr;
          </Link>
          <Link to="/kennisbank" className="text-brand font-semibold hover:underline">
            Ontdek de kennisbank &rarr;
          </Link>
          <a
            href="https://n8n-automatisatie.be/diensten"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-brand transition-colors"
          >
            n8n implementatie diensten op n8n-automatisatie.be &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConsultancyServices;
