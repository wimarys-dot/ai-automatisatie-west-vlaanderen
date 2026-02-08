import React, { useState } from 'react';

interface AuditData {
  sector: string;
  stad: string;
  grootte: string;
  tools: string[];
  uitdaging: string;
}

interface AuditResult {
  opportunities: {
    title: string;
    description: string;
    hoursSaved: number;
    priority: 'hoog' | 'medium' | 'laag';
    workflow: string;
  }[];
  totalHoursSaved: number;
  summary: string;
  nextStep: string;
}

const SECTORS = [
  { value: 'accountants', label: 'Accountancy & Boekhouding' },
  { value: 'makelaars', label: 'Vastgoed & Makelaardij' },
  { value: 'advocaten', label: 'Advocatuur & Juridisch' },
  { value: 'bouw', label: 'Bouw & Aanneming' },
  { value: 'installatie', label: 'Installatiebedrijf (HVAC, Elektro, Loodgieter)' },
  { value: 'retail', label: 'Retail & E-commerce' },
  { value: 'horeca', label: 'Horeca & Toerisme' },
  { value: 'voeding', label: 'Voedingsindustrie' },
  { value: 'landbouw', label: 'Landbouw & Agri' },
  { value: 'garage', label: 'Garage & Automotive' },
  { value: 'productie', label: 'Productie & Industrie' },
  { value: 'transport', label: 'Transport & Logistiek' },
  { value: 'zorg', label: 'Zorg & Welzijn' },
  { value: 'anders', label: 'Anders' },
];

const CITIES = [
  { value: 'brugge', label: 'Brugge' },
  { value: 'kortrijk', label: 'Kortrijk' },
  { value: 'roeselare', label: 'Roeselare' },
  { value: 'oostende', label: 'Oostende' },
  { value: 'ieper', label: 'Ieper' },
  { value: 'waregem', label: 'Waregem' },
  { value: 'knokke', label: 'Knokke-Heist' },
  { value: 'anders', label: 'Andere gemeente' },
];

const SIZES = [
  { value: '1-5', label: '1-5 medewerkers', desc: 'Micro-onderneming' },
  { value: '5-20', label: '5-20 medewerkers', desc: 'Kleine KMO' },
  { value: '20-50', label: '20-50 medewerkers', desc: 'Middelgrote KMO' },
  { value: '50+', label: '50+ medewerkers', desc: 'Grote onderneming' },
];

const TOOLS = [
  // Algemeen
  { value: 'excel', label: 'Excel / Google Sheets' },
  { value: 'outlook', label: 'Outlook / Microsoft 365' },
  { value: 'gmail', label: 'Gmail / Google Workspace' },
  // Boekhouding & Admin
  { value: 'exact', label: 'Exact Online' },
  { value: 'yuki', label: 'Yuki' },
  { value: 'octopus', label: 'Octopus' },
  { value: 'billit', label: 'Billit / Doccle' },
  // CRM & Sales
  { value: 'teamleader', label: 'Teamleader' },
  { value: 'odoo', label: 'Odoo' },
  { value: 'hubspot', label: 'HubSpot / Salesforce' },
  // Sector-specifiek
  { value: 'kleos', label: 'Kleos / Legal Office' },
  { value: 'whise', label: 'Whise / Omnicasa' },
  { value: 'shopify', label: 'Shopify / WooCommerce / Lightspeed' },
  { value: 'bouwsoft', label: 'Bouwsoft / ArchiSnapper' },
  // Communicatie
  { value: 'whatsapp', label: 'WhatsApp Business' },
  { value: 'slack', label: 'Slack / Teams' },
  // Anders
  { value: 'geen', label: 'Vooral handmatig / papier' },
];

const CHALLENGES = [
  { value: 'tijd', label: 'Tijdgebrek', desc: 'Te veel manueel werk, te weinig tijd voor groei' },
  { value: 'fouten', label: 'Fouten & inconsistentie', desc: 'Menselijke fouten bij data-invoer of communicatie' },
  { value: 'groei', label: 'Schaalbaarheid', desc: 'Processen kunnen de groei niet bijhouden' },
  { value: 'kosten', label: 'Hoge kosten', desc: 'Te veel uitgaven aan software of personeel' },
  { value: 'integratie', label: 'Losse systemen', desc: 'Tools werken niet samen, data zit overal' },
];

const SECTOR_CONTEXT: Record<string, { processes: string; painPoints: string; commonTools: string; automations: string }> = {
  accountants: {
    processes: `Typische processen in een accountantskantoor:
- Boekhouding en BTW-aangiftes verwerken
- Jaarrekeningen opstellen en neerleggen
- Loonadministratie en sociale documenten
- Klantcommunicatie en documentverzameling
- Deadlines beheren (BTW, vennootschapsbelasting, personenbelasting)
- Facturen verwerken en bankreconciliatie`,
    painPoints: `Grootste frustraties:
- Klanten die documenten te laat aanleveren
- Manueel overtypen van facturen en bankuittreksels
- Deadline stress door seizoenspieken
- Veel heen-en-weer communicatie voor ontbrekende stukken`,
    commonTools: 'Exact Online, Yuki, Octopus, Billit, Doccle, CodaBox, Teamleader, Admin Consult',
    automations: `Relevante automatiseringen:
- Automatisch documenten ophalen via CodaBox/Doccle
- Factuurherkenning en -verwerking (OCR)
- Automatische herinneringen voor ontbrekende documenten
- BTW-deadline notificaties naar klanten
- Bankreconciliatie automatiseren
- Loonbrieven automatisch versturen`
  },
  makelaars: {
    processes: `Typische processen in een vastgoedkantoor:
- Panden innemen en fotograferen
- Advertenties plaatsen op Immoweb, Zimmo, Logic-Immo
- Bezichtigingen plannen en opvolgen
- Biedingen verwerken en onderhandelen
- Compromis en akte opvolging
- Syndicbeheer (voor syndicus kantoren)`,
    painPoints: `Grootste frustraties:
- Manueel panden publiceren op meerdere portalen
- No-shows bij bezichtigingen
- Trage communicatie met notarissen
- Administratie rond compromis en voorwaarden
- Opvolging van leads die niet converteren`,
    commonTools: 'Whise, Omnicasa, Immoweb, Zimmo, Outlook, WhatsApp, DocuSign, Microsoft 365',
    automations: `Relevante automatiseringen:
- Automatisch publiceren naar alle portalen vanuit CRM
- Bezichtiging herinneringen (SMS/WhatsApp)
- Lead scoring en automatische opvolging
- Automatische matching pand-zoeker
- Document generatie (compromis voorbereiden)
- Notaris communicatie workflow`
  },
  advocaten: {
    processes: `Typische processen in een advocatenkantoor:
- Dossieropvolging en deadline management
- Urenregistratie en facturatie
- Juridische documenten opstellen (conclusies, contracten, dagvaardingen)
- Client intake en conflict check
- Correspondentie met rechtbank, tegenpartij, cliënt
- Juridisch onderzoek en kennisbeheer`,
    painPoints: `Grootste frustraties:
- Urenregistratie vergeten of onnauwkeurig
- Deadlines missen (verjaringstermijnen, conclusietermijnen)
- Veel tijd aan administratie ipv juridisch werk
- Documenten terugvinden in grote dossiers
- Cliënt updates en communicatie bijhouden`,
    commonTools: 'Kleos, Cicero LawPack, Legal Office, Basecone, Outlook, Teams, CodaBox, Litera',
    automations: `Relevante automatiseringen:
- Automatische deadline tracking en herinneringen
- Urenregistratie vanuit agenda/email
- Document generatie met templates
- Client portal voor dossierstatus
- Automatische conflict check bij nieuwe zaken
- Factuur generatie vanuit urenregistratie`
  },
  bouw: {
    processes: `Typische processen in een bouwbedrijf:
- Offertes en prijsberekeningen opstellen
- Werfplanning en personeelsinzet
- Materiaalbestellingen en voorraadbeheer
- Werfverslagen en oplevering
- Facturatie (voorschotten, vorderingsstaten)
- Onderaannemers coördineren`,
    painPoints: `Grootste frustraties:
- Offertes maken kost veel tijd
- Werfplanning wijzigt constant
- Materiaal bestellen op laatste moment
- Werfverslagen bijhouden op papier
- Facturatie loopt achter op werken`,
    commonTools: 'Bouwsoft, ArchiSnapper, PlanRadar, Exact, Teamleader, Excel, WhatsApp groepen',
    automations: `Relevante automatiseringen:
- Offerte generatie vanuit meetstaten
- Automatische werfplanning updates naar team
- Materiaal herbestelling bij lage voorraad
- Digitale werfverslagen met foto-upload
- Vorderingsstaten automatisch genereren
- Onderaannemer beschikbaarheid check`
  },
  retail: {
    processes: `Typische processen in retail/e-commerce:
- Voorraadbeheer en herbestellingen
- Bestellingen verwerken en verzenden
- Klantenservice en retourverwerking
- Productinformatie beheren (PIM)
- Marketing en promoties
- Boekhouding en BTW`,
    painPoints: `Grootste frustraties:
- Voorraad sync tussen webshop en winkel
- Veel manueel werk bij bestellingen
- Productinfo updaten op meerdere kanalen
- Klantvragen beantwoorden kost veel tijd
- Retouren verwerken is complex`,
    commonTools: 'Shopify, WooCommerce, Lightspeed, Exact, Sendcloud, Mollie, Mailchimp, Zendesk',
    automations: `Relevante automatiseringen:
- Automatische voorraad sync
- Order fulfillment workflow
- Verzendlabel generatie en tracking
- Geautomatiseerde klantenservice (FAQ bot)
- Review requests na levering
- Herbestelling alerts`
  },
  horeca: {
    processes: `Typische processen in horeca:
- Reserveringen beheren
- Personeelsplanning en roosters
- Voorraad en bestellingen bij leveranciers
- Kassa en betalingen
- Reviews en online reputatie
- Boekhouding en BTW`,
    painPoints: `Grootste frustraties:
- No-shows bij reserveringen
- Personeelsplanning is puzzelwerk
- Voorraad handmatig bijhouden
- Reviews op verschillende platformen monitoren
- Administratie na sluitingstijd`,
    commonTools: 'Lightspeed, Trivec, Resengo, Formitable, Strobbo, Deliverect, TheFork',
    automations: `Relevante automatiseringen:
- Reserveringsbevestigingen en herinneringen
- No-show opvolging en policy
- Automatische personeelsplanning
- Voorraad alerts en herbestellingen
- Review aggregatie en response
- Leverancier bestellingen automatiseren`
  },
  productie: {
    processes: `Typische processen in productie/industrie:
- Productieorders en planning
- Kwaliteitscontrole en metingen
- Voorraadbeheer grondstoffen
- Machinebeheer en onderhoud
- Personeelsregistratie en ploegen
- Klantorders en levering`,
    painPoints: `Grootste frustraties:
- Productie stilstand door tekort materiaal
- Kwaliteitsproblemen te laat ontdekken
- Machine onderhoud vergeten
- Handmatige rapportage en registratie
- Communicatie tussen kantoor en werkvloer`,
    commonTools: 'SAP, Odoo, Exact, AFAS, Excel, ERP systemen, MES systemen',
    automations: `Relevante automatiseringen:
- Productieorder workflow automatisering
- Kwaliteitscontrole checklists en alerts
- Preventief onderhoud scheduling
- Voorraad monitoring en alerts
- Shift handover automatisering
- KPI dashboards en rapportage`
  },
  transport: {
    processes: `Typische processen in transport/logistiek:
- Ritplanning en routeoptimalisatie
- CMR documenten en vrachtbrieven
- Chauffeur communicatie en tracking
- Facturatie per rit/klant
- Voertuigbeheer en onderhoud
- Douane en compliance`,
    painPoints: `Grootste frustraties:
- Ritplanning wijzigt constant
- Papieren CMR's en vrachtbrieven
- Chauffeurs bereiken onderweg
- Facturatie achterstand
- Brandstofkosten monitoring`,
    commonTools: 'Transics, AddSecure, Webfleet, Exact, Billit, TMS systemen, Track & trace',
    automations: `Relevante automatiseringen:
- Automatische ritplanning optimalisatie
- Digitale CMR en eCMR workflow
- Real-time chauffeur updates
- Automatische facturatie na levering
- Brandstof en kilometerregistratie
- Onderhoud planning alerts`
  },
  zorg: {
    processes: `Typische processen in zorg/welzijn:
- Patiënt/cliënt registratie en dossiers
- Afspraken en planning
- Rapportage en overdracht
- Medicatie en behandeling opvolging
- Facturatie en RIZIV/mutualiteit
- Communicatie met familie/mantelzorgers`,
    painPoints: `Grootste frustraties:
- Administratie neemt tijd weg van zorg
- Dubbele registratie in verschillende systemen
- Afspraak no-shows
- Rapportage en overdracht tijdrovend
- RIZIV facturatie complex`,
    commonTools: 'Careconnect, Cura, Mediris, Hector, Outlook, Microsoft 365, eHealth platformen',
    automations: `Relevante automatiseringen:
- Afspraakherinneringen (SMS/email)
- Intake formulieren digitaliseren
- Automatische rapportage templates
- Medicatie herinneringen
- RIZIV facturatie workflow
- Familie updates automatiseren`
  },
  voeding: {
    processes: `Typische processen in de voedingsindustrie:
- Productie planning en batch management
- Kwaliteitscontrole en HACCP registraties
- Traceerbaarheid van grondstoffen tot eindproduct
- Voorraadbeheer en houdbaarheidsdatums
- Leveranciersmanagement en inkoop
- Verpakking en labeling
- Klantorders en leverschema's`,
    painPoints: `Grootste frustraties:
- HACCP en kwaliteitsregistraties kosten veel tijd
- Traceerbaarheid bij recall is nachtmerrie
- Houdbaarheidsdatums handmatig bijhouden
- Productie afstemmen op variabele vraag
- Voedselveiligheid audits voorbereiden`,
    commonTools: 'SAP, Odoo, Exact, Excel, ERP systemen, HACCP software, weegschalen, labelprinters',
    automations: `Relevante automatiseringen:
- Automatische HACCP registraties en temperatuurlogs
- Batch traceerbaarheid workflow
- Houdbaarheidsdatum alerts en FIFO beheer
- Productielijn status dashboards
- Kwaliteitscontrole checklists met foto's
- Automatische certificaat en label generatie`
  },
  landbouw: {
    processes: `Typische processen in landbouw & agri:
- Teeltplanning en gewasrotatie
- Machinepark beheer en onderhoud
- Gewasbescherming en bemesting registratie
- Oogst planning en opbrengst registratie
- Veebeheer en gezondheidsmonitoring (veehouders)
- Subsidie aanvragen en mestboekhouding
- Verkoop aan veilingen, coöperaties of directe klanten`,
    painPoints: `Grootste frustraties:
- Veel administratie voor subsidies en regelgeving
- Mestboekhouding en bemestingsnormen
- Seizoensgebonden pieken in werkdruk
- Weer-afhankelijke planning
- Machinepark onderhoud vergeten`,
    commonTools: 'Excel, CropVision, 365FarmNet, Agromanager, boekhoudpakket, weerstation, GPS tractors',
    automations: `Relevante automatiseringen:
- Automatische gewasbeschermingsregistratie
- Mestboekhouding automatiseren
- Machine onderhoud alerts op basis van uren/ha
- Weer-gebaseerde planning notificaties
- Oogstregistratie met weegbrug koppeling
- Subsidie deadline herinneringen`
  },
  garage: {
    processes: `Typische processen in een garage/automotive:
- Werkplaatsplanning en werkorders
- Onderdelenbestelling en voorraadbeheer
- Offertes en facturen voor reparaties
- Voertuig intake en diagnose
- APK/Keuring planning
- Klantcommunicatie over voortgang
- Garantie en recall afhandeling`,
    painPoints: `Grootste frustraties:
- Onderdelen bestellen bij juiste leverancier
- Klanten informeren over status reparatie
- Werkplaats efficiënt plannen
- Offertes maken kost te veel tijd
- Keuring herinneringen naar klanten`,
    commonTools: 'Wincaros, Carware, DMS systemen, TecDoc, PartsPoint, Exact, WhatsApp',
    automations: `Relevante automatiseringen:
- Automatische APK/keuring herinneringen
- Werkorder status updates naar klant (SMS/WhatsApp)
- Onderdelenbestelling via TecDoc koppeling
- Digitale voertuig intake met foto's
- Offerte generatie vanuit diagnose
- Vervangend vervoer planning`
  },
  installatie: {
    processes: `Typische processen bij installatiebedrijven:
- Offerte aanvragen en calculatie
- Werkplanning en monteurs inroosteren
- Materiaallijsten en bestellingen
- Service en onderhoudscontracten
- Storingsdienst en interventies
- Oplevering en certificaten
- Facturatie na uitvoering`,
    painPoints: `Grootste frustraties:
- Calculaties en offertes kosten veel tijd
- Monteurs efficiënt inplannen is puzzelwerk
- Materiaal vergeten = extra rit
- Service contracten opvolgen
- Storingen snel dispatchen`,
    commonTools: 'Teamleader, Jobber, SimplyBook, Exact, Excel, WhatsApp groepen, routeplanner',
    automations: `Relevante automatiseringen:
- Offerte generatie vanuit standaard calculaties
- Intelligente werkplanning op basis van locatie/skills
- Automatische materiaallijst per opdracht
- Service contract herinneringen
- Storingsmelding → dispatch workflow
- Digitale werkbonnen met handtekening`
  },
  anders: {
    processes: 'Algemene bedrijfsprocessen: administratie, facturatie, klantcommunicatie, planning, rapportage',
    painPoints: 'Veelvoorkomende uitdagingen: tijdgebrek, manueel werk, systemen die niet samenwerken, fouten door handmatige invoer',
    commonTools: 'Excel, Google Workspace, Microsoft 365, Teamleader, Exact, Mailchimp',
    automations: `Algemene automatiseringen:
- Email en communicatie workflows
- Facturatie en boekhouding
- Klant onboarding
- Rapportage en dashboards
- Data synchronisatie tussen systemen`
  }
};

const AuditTool: React.FC = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<AuditData>({
    sector: '',
    stad: '',
    grootte: '',
    tools: [],
    uitdaging: '',
  });
  const [result, setResult] = useState<AuditResult | null>(null);
  const [rawResponse, setRawResponse] = useState<string>('');

  const totalSteps = 5;

  const canProceed = () => {
    switch (step) {
      case 1: return data.sector !== '';
      case 2: return data.stad !== '';
      case 3: return data.grootte !== '';
      case 4: return data.tools.length > 0;
      case 5: return data.uitdaging !== '';
      default: return false;
    }
  };

  const toggleTool = (tool: string) => {
    setData(prev => ({
      ...prev,
      tools: prev.tools.includes(tool)
        ? prev.tools.filter(t => t !== tool)
        : [...prev.tools, tool]
    }));
  };

  const generateAudit = async () => {
    setLoading(true);
    setResult(null);

    const sectorLabel = SECTORS.find(s => s.value === data.sector)?.label || data.sector;
    const stadLabel = CITIES.find(c => c.value === data.stad)?.label || data.stad;
    const grootteLabel = SIZES.find(s => s.value === data.grootte)?.label || data.grootte;
    const toolsLabels = data.tools.map(t => TOOLS.find(tool => tool.value === t)?.label || t).join(', ');
    const uitdagingLabel = CHALLENGES.find(c => c.value === data.uitdaging)?.label || data.uitdaging;
    const uitdagingDesc = CHALLENGES.find(c => c.value === data.uitdaging)?.desc || '';

    // Get sector-specific context
    const sectorContext = SECTOR_CONTEXT[data.sector] || SECTOR_CONTEXT['anders'];

    const prompt = `Je bent een ervaren AI automatisering consultant van ai-automatisatie.be, specialist in n8n workflows voor West-Vlaamse KMO's. Je hebt diepgaande kennis van specifieke sectoren.

**SECTORKENNIS - ${sectorLabel.toUpperCase()}:**

${sectorContext.processes}

${sectorContext.painPoints}

Veelgebruikte software in deze sector: ${sectorContext.commonTools}

${sectorContext.automations}

---

**BEDRIJFSPROFIEL:**
- Sector: ${sectorLabel}
- Locatie: ${stadLabel}, West-Vlaanderen
- Grootte: ${grootteLabel}
- Hun huidige tools: ${toolsLabels}
- Grootste uitdaging: ${uitdagingLabel} - ${uitdagingDesc}

---

**OPDRACHT:**
Genereer een gepersonaliseerde automatisatie-audit. Combineer je sectorkennis met hun specifieke tools en uitdaging.

**BELANGRIJKE REGELS:**
1. Focus op automatiseringen die ECHT relevant zijn voor ${sectorLabel.toLowerCase()}
2. Verwijs naar hun specifieke tools (${toolsLabels}) waar mogelijk
3. Houd rekening met hun bedrijfsgrootte (${grootteLabel})
4. Los hun specifieke uitdaging op: ${uitdagingLabel}
5. Wees concreet - geen generieke marketing-achtige suggesties
6. Schattingen moeten realistisch zijn voor een bedrijf in ${stadLabel}

**OUTPUT FORMAT (STRICT JSON):**
{
  "opportunities": [
    {
      "title": "Specifieke automatisering titel",
      "description": "Concrete beschrijving van wat er geautomatiseerd wordt, welke tools gekoppeld worden, en wat het resultaat is. Max 2 zinnen.",
      "hoursSaved": 4,
      "priority": "hoog",
      "workflow": "Beschrijvende workflow naam"
    }
  ],
  "totalHoursSaved": 12,
  "summary": "Samenvatting van bevindingen specifiek voor dit ${sectorLabel.toLowerCase()} in ${stadLabel}. Max 3 zinnen.",
  "nextStep": "Concrete eerste stap die ze morgen kunnen nemen"
}

Geef exact 3 opportunities. hoursSaved is per WEEK. priority is "hoog", "medium" of "laag".

Antwoord ALLEEN met valid JSON.`;

    try {
      const response = await fetch('https://llm-proxy.wimarys.workers.dev/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'meta-llama/Meta-Llama-3.1-8B-Instruct',
          messages: [
            { role: 'system', content: 'Je bent een expert AI automatisering consultant. Antwoord altijd in valid JSON format.' },
            { role: 'user', content: prompt }
          ],
          temperature: 0.7,
          max_tokens: 1500,
        })
      });

      const json = await response.json();
      const content = json.choices?.[0]?.message?.content || '';
      setRawResponse(content);

      // Parse JSON from response
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]) as AuditResult;
        setResult(parsed);
      } else {
        throw new Error('Invalid JSON response');
      }
    } catch (error) {
      console.error('Audit error:', error);
      setRawResponse(`Er ging iets mis: ${error instanceof Error ? error.message : 'Onbekende fout'}. Probeer het opnieuw.`);
    } finally {
      setLoading(false);
    }
  };

  const resetAudit = () => {
    setStep(1);
    setData({ sector: '', stad: '', grootte: '', tools: [], uitdaging: '' });
    setResult(null);
    setRawResponse('');
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'hoog': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'laag': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-zinc-500/20 text-text-secondary border-zinc-500/30';
    }
  };

  return (
    <section id="audit" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-muted border border-brand/20 px-4 py-1.5 rounded-full mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse"></span>
            <span className="text-xs font-bold text-brand tracking-wide">GRATIS AUDIT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Ontdek uw <span className="text-brand">besparingspotentieel</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Beantwoord 5 korte vragen en ontvang direct een gepersonaliseerde automatisatie-audit met concrete besparingen.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand via-accent to-blue-500 rounded-3xl blur opacity-20"></div>

          <div className="relative bg-surface-card border border-surface-border rounded-3xl p-8 md:p-10">
            {/* Progress bar */}
            {!result && (
              <div className="mb-8">
                <div className="flex justify-between text-xs text-text-muted mb-2">
                  <span>Stap {step} van {totalSteps}</span>
                  <span>{Math.round((step / totalSteps) * 100)}%</span>
                </div>
                <div className="h-1 bg-surface-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand to-accent transition-all duration-500"
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Step 1: Sector */}
            {step === 1 && !result && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold text-text-primary mb-6">In welke sector is uw bedrijf actief?</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {SECTORS.map(sector => (
                    <button
                      key={sector.value}
                      onClick={() => setData({ ...data, sector: sector.value })}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        data.sector === sector.value
                          ? 'bg-brand/10 border-brand text-text-primary'
                          : 'bg-surface-bg border-surface-border text-text-secondary hover:border-surface-border-hover'
                      }`}
                    >
                      {sector.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: City */}
            {step === 2 && !result && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold text-text-primary mb-6">Waar is uw bedrijf gevestigd?</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {CITIES.map(city => (
                    <button
                      key={city.value}
                      onClick={() => setData({ ...data, stad: city.value })}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        data.stad === city.value
                          ? 'bg-brand/10 border-brand text-text-primary'
                          : 'bg-surface-bg border-surface-border text-text-secondary hover:border-surface-border-hover'
                      }`}
                    >
                      {city.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Size */}
            {step === 3 && !result && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold text-text-primary mb-6">Hoe groot is uw team?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {SIZES.map(size => (
                    <button
                      key={size.value}
                      onClick={() => setData({ ...data, grootte: size.value })}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        data.grootte === size.value
                          ? 'bg-brand/10 border-brand text-text-primary'
                          : 'bg-surface-bg border-surface-border text-text-secondary hover:border-surface-border-hover'
                      }`}
                    >
                      <div className="font-medium text-text-primary">{size.label}</div>
                      <div className="text-sm text-text-muted">{size.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Tools */}
            {step === 4 && !result && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold text-text-primary mb-2">Welke tools gebruikt u dagelijks?</h3>
                <p className="text-text-muted text-sm mb-6">Selecteer alle tools die van toepassing zijn</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {TOOLS.map(tool => (
                    <button
                      key={tool.value}
                      onClick={() => toggleTool(tool.value)}
                      className={`p-3 rounded-xl border text-left transition-all text-sm ${
                        data.tools.includes(tool.value)
                          ? 'bg-brand/10 border-brand text-text-primary'
                          : 'bg-surface-bg border-surface-border text-text-secondary hover:border-surface-border-hover'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {data.tools.includes(tool.value) && (
                          <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                        {tool.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Challenge */}
            {step === 5 && !result && !loading && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold text-text-primary mb-6">Wat is uw grootste uitdaging?</h3>
                <div className="space-y-3">
                  {CHALLENGES.map(challenge => (
                    <button
                      key={challenge.value}
                      onClick={() => setData({ ...data, uitdaging: challenge.value })}
                      className={`w-full p-4 rounded-xl border text-left transition-all ${
                        data.uitdaging === challenge.value
                          ? 'bg-brand/10 border-brand text-text-primary'
                          : 'bg-surface-bg border-surface-border text-text-secondary hover:border-surface-border-hover'
                      }`}
                    >
                      <div className="font-medium text-text-primary">{challenge.label}</div>
                      <div className="text-sm text-text-muted">{challenge.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Loading */}
            {loading && (
              <div className="py-12 text-center animate-fade-in">
                <div className="w-16 h-16 border-4 border-brand/20 border-t-[#ff6d5a] rounded-full animate-spin mx-auto mb-6"></div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Uw audit wordt gegenereerd...</h3>
                <p className="text-text-muted">Onze AI analyseert uw bedrijfsprofiel</p>
              </div>
            )}

            {/* Error state */}
            {!loading && !result && rawResponse && (
              <div className="py-8 animate-fade-in">
                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-red-400 mb-2">Er ging iets mis</h3>
                  <p className="text-text-secondary text-sm">{rawResponse}</p>
                </div>
                <button
                  onClick={resetAudit}
                  className="w-full bg-surface-border hover:bg-surface-border text-text-primary px-6 py-4 rounded-xl font-bold transition-all"
                >
                  Opnieuw proberen
                </button>
              </div>
            )}

            {/* Result */}
            {result && (
              <div className="animate-fade-in">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary">Uw Automatisatie Audit</h3>
                    <p className="text-text-muted">Gepersonaliseerd voor uw bedrijf</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-brand">{result.totalHoursSaved}u</div>
                    <div className="text-xs text-text-muted uppercase tracking-wider">per week te besparen</div>
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-surface-bg border border-surface-border rounded-2xl p-6 mb-6">
                  <p className="text-text-secondary">{result.summary}</p>
                </div>

                {/* Opportunities */}
                <div className="space-y-4 mb-8">
                  {result.opportunities.map((opp, i) => (
                    <div key={i} className="bg-surface-bg border border-surface-border rounded-2xl p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-brand/20 rounded-lg flex items-center justify-center text-brand font-bold">
                            {i + 1}
                          </div>
                          <h4 className="font-bold text-text-primary">{opp.title}</h4>
                        </div>
                        <span className={`px-2 py-1 rounded-lg text-xs font-bold uppercase border ${getPriorityColor(opp.priority)}`}>
                          {opp.priority}
                        </span>
                      </div>
                      <p className="text-text-secondary text-sm mb-4">{opp.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-text-muted">
                          <span className="text-brand font-bold">{opp.hoursSaved} uur</span> besparing per week
                        </span>
                        <span className="text-text-muted">{opp.workflow}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Next Step */}
                <div className="bg-gradient-to-r from-brand/10 to-accent/10 border border-brand/20 rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-wider mb-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    Volgende stap
                  </div>
                  <p className="text-text-primary">{result.nextStep}</p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="flex-1 bg-brand hover:bg-brand-hover text-white px-6 py-4 rounded-xl font-bold text-center transition-all"
                  >
                    Gratis gesprek inplannen
                  </a>
                  <button
                    onClick={resetAudit}
                    className="flex-1 bg-surface-border hover:bg-surface-border text-text-primary px-6 py-4 rounded-xl font-bold transition-all"
                  >
                    Nieuwe audit
                  </button>
                </div>
              </div>
            )}

            {/* Navigation */}
            {!result && !loading && (
              <div className="flex justify-between mt-8 pt-6 border-t border-surface-border">
                <button
                  onClick={() => setStep(s => Math.max(1, s - 1))}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    step === 1
                      ? 'text-text-muted cursor-not-allowed'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-border'
                  }`}
                  disabled={step === 1}
                >
                  Vorige
                </button>

                {step < totalSteps ? (
                  <button
                    onClick={() => setStep(s => s + 1)}
                    disabled={!canProceed()}
                    className={`px-8 py-3 rounded-xl font-bold transition-all ${
                      canProceed()
                        ? 'bg-brand hover:bg-brand-hover text-white'
                        : 'bg-surface-border text-text-muted cursor-not-allowed'
                    }`}
                  >
                    Volgende
                  </button>
                ) : (
                  <button
                    onClick={generateAudit}
                    disabled={!canProceed()}
                    className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${
                      canProceed()
                        ? 'bg-brand hover:bg-brand-hover text-white'
                        : 'bg-surface-border text-text-muted cursor-not-allowed'
                    }`}
                  >
                    Genereer mijn audit
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditTool;
