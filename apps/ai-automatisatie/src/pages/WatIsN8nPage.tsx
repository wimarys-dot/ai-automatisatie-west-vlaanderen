import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArticleSchema, BreadcrumbSchema, ExpertQuote, FAQSchema, HowToSchema, N8nCheatSheet, WebPageSchema } from '@repo/ui';

const WatIsN8nPage: React.FC = () => {
  const features = [
    { title: 'Open Source', desc: 'Volledige toegang tot de broncode. Geen vendor lock-in.', icon: '🔓' },
    { title: 'Self-Hosted', desc: 'Draai n8n op uw eigen servers voor maximale privacy.', icon: '🏠' },
    { title: 'Visual Builder', desc: 'Bouw workflows met drag-and-drop. Geen code vereist.', icon: '🎨' },
    { title: '400+ Integraties', desc: 'Verbind met alle tools die u al gebruikt.', icon: '🔗' },
  ];

  const useCases = [
    'Automatische factuurverwerking',
    'CRM data synchronisatie',
    'Email marketing automation',
    'Social media scheduling',
    'Inventory management',
    'Lead scoring en nurturing',
    'Klantenservice automatisering',
    'Data backup workflows',
    'API koppelingen bouwen',
  ];

  return (
    <>
      <Helmet>
        <title>Wat is n8n? | Open Source Workflow Automation Platform Uitgelegd</title>
        <meta name="description" content="Wat is n8n en waar staat n8n voor? Leer alles over dit open-source workflow automation platform. Self-hosted, 400+ integraties, GDPR compliant." />
        <link rel="canonical" href="https://ai-automatisatie.be/wat-is-n8n" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://ai-automatisatie.be" },
        { name: "Kennisbank", url: "https://ai-automatisatie.be/wat-is-n8n" },
        { name: "Wat is n8n?", url: "https://ai-automatisatie.be/wat-is-n8n" }
      ]} />

      <WebPageSchema
        name="Wat is n8n? | Open Source Workflow Automation Platform Uitgelegd"
        description="Wat is n8n en waar staat n8n voor? Leer alles over dit open-source workflow automation platform. Self-hosted, 400+ integraties, GDPR compliant."
        url="https://ai-automatisatie.be/wat-is-n8n"
        datePublished="2024-01-01"
        dateModified="2025-02-01"
      />

      <ArticleSchema
        headline="Wat is n8n? Complete Gids voor het Open Source Automation Platform"
        description="Leer alles over n8n: wat het is, hoe het werkt, en waarom het de beste keuze is voor workflow automatisering. Self-hosted, 400+ integraties, GDPR compliant."
        url="https://ai-automatisatie.be/wat-is-n8n"
        datePublished="2024-01-01"
        dateModified="2025-02-01"
      />

      <HowToSchema
        name="Hoe werkt n8n? Een workflow bouwen in 3 stappen"
        description="Leer hoe je een geautomatiseerde workflow bouwt in n8n met deze eenvoudige stappen."
        steps={[
          { name: "Trigger Node toevoegen", text: "Elk workflow begint met een trigger: een webhook, scheduled time, of een event in een externe app die de workflow start." },
          { name: "Action Nodes configureren", text: "Voeg nodes toe om acties uit te voeren: data ophalen, transformeren, emails versturen, of API's aanroepen. Verbind de nodes met elkaar." },
          { name: "Output instellen", text: "Configureer de output van je workflow. Het resultaat: geautomatiseerde taken die 24/7 draaien zonder handmatige interventie." }
        ]}
        totalTime="PT30M"
      />

      <FAQSchema faqs={[
        { question: "Wat is n8n?", answer: "n8n is een open-source workflow automation platform waarmee bedrijven hun processen kunnen automatiseren. De naam staat voor 'nodemation' - een samentrekking van 'node' en 'automation'." },
        { question: "Waar staat n8n voor?", answer: "De naam n8n (uitgesproken als 'n-eight-n') staat voor 'nodemation'. De 8 vervangt de acht letters tussen de n's (o-d-e-m-a-t-i-o), vergelijkbaar met hoe i18n staat voor internationalization." },
        { question: "Is n8n gratis?", answer: "Ja, n8n is open-source en kan gratis worden gedownload en self-hosted. Er is ook een betaalde cloud versie (n8n Cloud) voor wie niet zelf wil hosten." },
        { question: "Wat is het verschil tussen n8n en Zapier?", answer: "n8n is open-source en kan self-hosted worden, terwijl Zapier alleen cloud-based is. n8n heeft geen limieten op taken bij self-hosting, terwijl Zapier per taak factureert." },
        { question: "Kan n8n self-hosted worden?", answer: "Ja, n8n kan volledig self-hosted worden via Docker. Dit betekent dat uw data nooit uw servers verlaat, wat cruciaal is voor GDPR-compliance." },
        { question: "Hoeveel integraties heeft n8n?", answer: "n8n heeft meer dan 400 native integraties met populaire tools en services. Daarnaast kunnen vrijwel alle API's worden aangesloten via HTTP Request nodes." }
      ]} />

      <div className="animate-fade-in pt-32 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
        <header className="mb-16 md:mb-24">
          <div className="text-[#ff6d5a] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Kennisbank</div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
            Wat is <span className="text-[#ff6d5a]">n8n</span>?
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
            n8n is een krachtig open-source workflow automation platform en low-code integration tool waarmee bedrijven hun business process automation kunnen realiseren zonder afhankelijk te zijn van dure SaaS-oplossingen. Als self-hosted iPaaS alternatief biedt het onbeperkte workflow orchestration mogelijkheden.
          </p>

          <ExpertQuote
            quote="n8n democratiseert workflow automation. Waar enterprise iPaaS-oplossingen tienduizenden euro's per jaar kosten, biedt n8n dezelfde functionaliteit voor een fractie van de prijs - of gratis als je self-host."
            context="Over de toegankelijkheid van n8n voor KMO's"
          />
        </header>

        {/* Wat is de betekenis van n8n? */}
        <section className="prose prose-invert max-w-none mb-16">
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem] mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Wat is de betekenis van n8n?</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              De naam <strong className="text-white">n8n</strong> (uitgesproken als "n-eight-n") staat voor "nodemation" - een samentrekking van "node" en "automation". Dit verwijst naar de node-gebaseerde interface waarmee je visueel workflows kunt bouwen door verschillende nodes met elkaar te verbinden.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              n8n werd in 2019 opgericht door Jan Oberhauser in Berlijn. Het is een fair-code workflow automation tool die gebruikers in staat stelt geautomatiseerde workflows te creëren die verschillende applicaties en diensten met elkaar verbinden.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              In tegenstelling tot closed-source alternatieven zoals Zapier of Make, kunt u n8n self-hosten op uw eigen infrastructuur. Dit betekent dat uw data nooit uw servers verlaat - cruciaal voor GDPR-compliance en data privacy.
            </p>

            <ExpertQuote
              quote="Self-hosted automation is geen luxe meer, het is een noodzaak. Met toenemende privacy-regelgeving en data-soevereiniteit eisen, is n8n de logische keuze voor Europese bedrijven."
              context="Over data privacy en GDPR-compliance"
            />
          </div>
        </section>

        {/* Hoe werkt n8n? */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Hoe werkt n8n?</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem] relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#ff6d5a] rounded-full flex items-center justify-center font-bold text-white">1</div>
              <h3 className="text-xl font-bold text-white mb-3 mt-4">Trigger Node</h3>
              <p className="text-zinc-400">Elk workflow begint met een trigger: een webhook, scheduled time, of een event in een externe app.</p>
            </div>
            <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem] relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#ff6d5a] rounded-full flex items-center justify-center font-bold text-white">2</div>
              <h3 className="text-xl font-bold text-white mb-3 mt-4">Action Nodes</h3>
              <p className="text-zinc-400">Voeg nodes toe om acties uit te voeren: data ophalen, transformeren, emails versturen, API's aanroepen.</p>
            </div>
            <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem] relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#ff6d5a] rounded-full flex items-center justify-center font-bold text-white">3</div>
              <h3 className="text-xl font-bold text-white mb-3 mt-4">Output</h3>
              <p className="text-zinc-400">Het resultaat: geautomatiseerde taken die 24/7 draaien zonder handmatige interventie.</p>
            </div>
          </div>
          <p className="text-zinc-400 text-lg">
            n8n gebruikt een <strong className="text-white">visuele drag-and-drop interface</strong> waarmee u nodes met elkaar verbindt. Elke node vertegenwoordigt een actie of integratie. Door deze nodes te verbinden, creëert u een workflow die automatisch wordt uitgevoerd.
          </p>
        </section>

        {/* n8n Cheat Sheet Infographic */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">n8n Cheat Sheet</h2>
          <p className="text-zinc-400 text-lg mb-8">
            Handige referentie met de belangrijkste nodes, sneltoetsen en workflow patronen.
          </p>
          <N8nCheatSheet />
        </section>

        {/* Waarom is n8n zo populair? */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Waarom is n8n zo populair?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-[#18181b] border border-white/5 hover:border-[#ff6d5a]/40 p-8 rounded-[2rem] transition-all">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-400">{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-gradient-to-br from-[#ff6d5a]/10 to-transparent border border-[#ff6d5a]/20 p-8 rounded-[2rem]">
            <p className="text-zinc-300 text-lg">
              <strong className="text-white">n8n groeit snel</strong> omdat het de kracht van enterprise automation tools combineert met de toegankelijkheid van no-code platforms. Met meer dan 400 integraties en een actieve community is het de go-to keuze voor bedrijven die controle willen over hun automatisering.
            </p>
          </div>
        </section>

        {/* Wat kun je met n8n automatiseren? */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Wat kun je met n8n automatiseren?</h2>
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <p className="text-zinc-400 text-lg mb-8">
              n8n kan vrijwel elke repetitieve taak automatiseren. Hier zijn de meest voorkomende toepassingen:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#ff6d5a] rounded-full flex-shrink-0"></span>
                  <span className="text-zinc-300">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hoeveel kost n8n? */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Hoeveel kost n8n?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#18181b] border border-[#ff6d5a]/30 p-8 rounded-[2rem]">
              <h3 className="text-2xl font-bold text-[#ff6d5a] mb-4">Self-Hosted (Gratis)</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6d5a]">✓</span>
                  <span>Community Edition volledig gratis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6d5a]">✓</span>
                  <span>Onbeperkte workflows en executions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6d5a]">✓</span>
                  <span>Alleen serverkosten (vanaf €5/maand)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6d5a]">✓</span>
                  <span>Volledige controle over uw data</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#18181b] border border-white/10 p-8 rounded-[2rem]">
              <h3 className="text-2xl font-bold text-white mb-4">n8n Cloud</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-zinc-400">•</span>
                  <span><strong className="text-white">Starter:</strong> €20/maand</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-400">•</span>
                  <span><strong className="text-white">Pro:</strong> €50/maand</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-400">•</span>
                  <span>Geen server management nodig</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-400">•</span>
                  <span>Automatische updates en backups</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cloud vs Self-Hosted */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Cloud vs Self-Hosted: Wat is het verschil?</h2>
          <div className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-zinc-400">Aspect</th>
                    <th className="text-left p-4 text-[#ff6d5a] font-bold">Self-Hosted</th>
                    <th className="text-left p-4 text-white font-bold">Cloud</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  <tr className="border-b border-white/5">
                    <td className="p-4">Data Privacy</td>
                    <td className="p-4 text-[#ff6d5a]">100% op uw servers</td>
                    <td className="p-4">n8n servers (EU)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4">Kosten bij schaal</td>
                    <td className="p-4 text-[#ff6d5a]">Vast (serverkosten)</td>
                    <td className="p-4">Variabel per execution</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4">Onderhoud</td>
                    <td className="p-4">Zelf beheren</td>
                    <td className="p-4 text-green-400">Volledig beheerd</td>
                  </tr>
                  <tr>
                    <td className="p-4">Setup tijd</td>
                    <td className="p-4">1-2 uur</td>
                    <td className="p-4 text-green-400">5 minuten</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section - People Also Ask */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Veelgestelde vragen over n8n</h2>
          <div className="space-y-6">
            <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold text-white mb-3">Is n8n gratis te gebruiken?</h3>
              <p className="text-zinc-400">Ja, de n8n Community Edition is volledig gratis en open-source. U kunt het self-hosten op uw eigen server zonder licentiekosten. Er is ook een betaalde cloud-versie voor wie niet zelf wil hosten, vanaf €20/maand.</p>
            </div>
            <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold text-white mb-3">Heb ik programmeerkennis nodig voor n8n?</h3>
              <p className="text-zinc-400">Nee, n8n heeft een visuele drag-and-drop interface waarmee iedereen workflows kan bouwen. Voor complexere logica kunt u optioneel JavaScript of Python gebruiken, maar dit is niet verplicht.</p>
            </div>
            <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold text-white mb-3">Kan n8n Zapier vervangen?</h3>
              <p className="text-zinc-400">Absoluut. n8n biedt dezelfde functionaliteit als Zapier met meer flexibiliteit, betere error handling, en significant lagere kosten bij opschaling. Lees onze <Link to="/n8n-vs-zapier" className="text-[#ff6d5a] hover:underline">n8n vs Zapier vergelijking</Link> voor meer details.</p>
            </div>
            <div className="bg-[#18181b] border border-white/5 p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold text-white mb-3">Wat maakt n8n uniek?</h3>
              <p className="text-zinc-400">n8n onderscheidt zich door de combinatie van open-source code, self-hosting mogelijkheden, fair-code licentie, en een krachtige visuele editor. Dit geeft gebruikers volledige controle zonder vendor lock-in.</p>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Meer lezen over n8n</h2>
          <div className="flex flex-wrap gap-4">
            <Link to="/n8n-vs-zapier" className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium transition-all">
              n8n vs Zapier vergelijking →
            </Link>
            <Link to="/n8n-vs-make" className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium transition-all">
              n8n vs Make vergelijking →
            </Link>
            <Link to="/workflow-automatisering" className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium transition-all">
              Workflow automatisering uitleg →
            </Link>
            <Link to="/n8n-expert" className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium transition-all">
              Onze n8n diensten →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t border-white/5">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Klaar om te starten met n8n?</h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Wij helpen West-Vlaamse KMO's met de implementatie van n8n. Van installatie tot workflow design - wij staan voor u klaar.
          </p>
          <Link
            to="/n8n-expert"
            className="inline-block bg-[#ff6d5a] hover:bg-[#ff8575] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#ff6d5a]/20 hover:scale-105"
          >
            Neem contact op
          </Link>
        </section>
      </article>
      </div>
    </>
  );
};

export default WatIsN8nPage;
