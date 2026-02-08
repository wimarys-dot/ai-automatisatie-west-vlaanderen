#!/usr/bin/env node

const https = require('https');
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const API_KEY = process.env.ZAI_API_KEY || '316edf17afa9437cb35890caaa424976.XTQXSshBobway9I3';

// Infographic configurations
const INFOGRAPHICS = {
  'n8n-cheatsheet': {
    prompt: `Create a single-page infographic cheat sheet for n8n workflow automation.

Include these sections:
1. HEADER: "n8n Cheat Sheet" with n8n logo
2. ESSENTIAL NODES (6 items): HTTP Request, Webhook, Set, IF, Code, Schedule Trigger - with icons and one-line descriptions
3. KEYBOARD SHORTCUTS: Ctrl+Enter (Execute), Ctrl+S (Save), Tab (Add node), Ctrl+Z (Undo)
4. WORKFLOW PATTERN: Simple 3-step example: Trigger → Process → Output
5. BEST PRACTICES: 5 bullet points about workflow organization

Style requirements:
- Dark theme with #121212 background
- Accent color: #ff6d5a (coral/orange)
- Secondary accent: #7c3aed (purple)
- Modern minimal design
- 720x960px poster format
- Use icons, minimal text
- Professional and clean`,
    filename: 'n8n-cheatsheet.png'
  },

  'n8n-vs-zapier': {
    prompt: `Create a single-page comparison infographic: n8n vs Zapier.

Include these sections:
1. HEADER: "n8n vs Zapier" comparison title
2. COMPARISON TABLE with these criteria (show winner for each):
   - Pricing: n8n (self-hosted free) vs Zapier (starts $20/mo)
   - Integrations: Both 500+
   - Self-hosting: n8n YES vs Zapier NO
   - Code flexibility: n8n HIGH vs Zapier LIMITED
   - Learning curve: n8n MEDIUM vs Zapier EASY
   - Enterprise features: n8n YES vs Zapier YES
3. BEST FOR section: When to choose each
4. VERDICT: "Choose n8n for control & cost, Zapier for simplicity"

Style requirements:
- Dark theme with #121212 background
- Use #ff6d5a for n8n, #FF4F00 for Zapier
- 720x960px poster format
- Use checkmarks, X marks, comparison bars
- Professional infographic style`,
    filename: 'n8n-vs-zapier.png'
  },

  'n8n-vs-make': {
    prompt: `Create a single-page comparison infographic: n8n vs Make (Integromat).

Include these sections:
1. HEADER: "n8n vs Make" comparison title
2. COMPARISON TABLE with these criteria:
   - Pricing: n8n (self-hosted free) vs Make (starts $9/mo)
   - Visual builder: Both excellent
   - Self-hosting: n8n YES vs Make NO
   - AI capabilities: n8n NATIVE vs Make LIMITED
   - Data handling: n8n UNLIMITED vs Make OPERATION LIMITS
   - Community: n8n OPEN SOURCE vs Make PROPRIETARY
3. BEST FOR section: When to choose each
4. VERDICT: "Choose n8n for AI workflows & unlimited data"

Style requirements:
- Dark theme with #121212 background
- Use #ff6d5a for n8n, #6A0DAD for Make
- 720x960px poster format
- Visual comparison style with icons
- Professional infographic design`,
    filename: 'n8n-vs-make.png'
  },

  'accountants-roi': {
    prompt: `Create a single-page ROI infographic for accountants considering automation.

Include these sections:
1. HEADER: "Automatisering ROI voor Accountants" (Dutch)
2. TIME SAVINGS TABLE (5 rows):
   - Factuur verwerking: 5 min → 0 min (98% besparing)
   - BTW aangifte prep: 4 uur → 30 min (88% besparing)
   - Bank reconciliatie: 2 uur → 15 min (87% besparing)
   - Document opvolging: 3 emails → automatisch (100%)
   - Jaarrekening data: 8 uur → 1 uur (87%)
3. ROI CALCULATION:
   - 15 uur/week bespaard × €40 = €600/week
   - Jaarlijks: €28.000+ besparing
   - Investering: €5.000-15.000 eenmalig
   - ROI: 6-10x in jaar 1
4. CALL TO ACTION: "Start met automatiseren"

Style:
- Dark theme #121212 background
- Accent #ff6d5a
- 720x960px
- Use Euro symbols, percentages, bar charts
- Dutch language`,
    filename: 'accountants-roi.png'
  },

  'workflow-automation': {
    prompt: `Create a single-page infographic about workflow automation benefits.

Include these sections:
1. HEADER: "Workflow Automatisering" with workflow icon
2. WHAT IS IT: Brief 2-line explanation
3. BENEFITS (5 icons with labels):
   - Tijdsbesparing (Time savings)
   - Foutreductie (Error reduction)
   - Schaalbaarheid (Scalability)
   - Consistentie (Consistency)
   - Focus op kernwerk (Focus on core work)
4. PROCESS FLOW: Simple 5-step visual
   Trigger → Verzamel data → Verwerk → Actie → Rapporteer
5. INDUSTRIES: Icons for Accountants, Makelaars, Advocaten, Retail, Bouw

Style:
- Dark theme #121212
- Accent #ff6d5a, secondary #7c3aed
- 720x960px poster
- Minimal, icon-heavy design
- Dutch language`,
    filename: 'workflow-automation.png'
  }
};

async function callZaiApi(prompt) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      agent_id: 'slides_glm_agent',
      messages: [{
        role: 'user',
        content: [{ type: 'text', text: prompt }]
      }],
      stream: true
    });

    const options = {
      hostname: 'api.z.ai',
      port: 443,
      path: '/api/v1/agents',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    let fullResponse = '';

    const req = https.request(options, (res) => {
      console.log('API Status:', res.statusCode);

      res.on('data', (chunk) => {
        fullResponse += chunk.toString();
        process.stdout.write('.');
      });

      res.on('end', () => {
        console.log('\nAPI response complete');
        resolve(fullResponse);
      });
    });

    req.on('error', reject);
    req.setTimeout(300000); // 5 min timeout
    req.write(data);
    req.end();
  });
}

function extractHtmlFromResponse(response) {
  // Extract add_slide output chunks
  const pattern = /"tool_name":"add_slide","output":"([^"]+)"/g;
  let html = '';
  let match;

  while ((match = pattern.exec(response)) !== null) {
    html += match[1];
  }

  if (!html) {
    throw new Error('No HTML found in response');
  }

  // Unescape the HTML
  html = html
    .replace(/\\\\n/g, '\n')
    .replace(/\\n/g, '\n')
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\')
    .replace(/\\([^\\])/g, '$1');

  return html;
}

async function renderHtmlToPng(html, outputPath) {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Set viewport to poster size
  await page.setViewport({ width: 720, height: 960 });

  // Set HTML content
  await page.setContent(html, { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait for fonts and images
  await new Promise(r => setTimeout(r, 2000));

  // Take screenshot
  await page.screenshot({
    path: outputPath,
    fullPage: true,
    type: 'png'
  });

  await browser.close();
  console.log(`Saved: ${outputPath}`);
}

async function generateInfographic(name) {
  const config = INFOGRAPHICS[name];
  if (!config) {
    console.error(`Unknown infographic: ${name}`);
    console.log('Available:', Object.keys(INFOGRAPHICS).join(', '));
    process.exit(1);
  }

  console.log(`\nGenerating: ${name}`);
  console.log('Calling Z.ai API...');

  try {
    const response = await callZaiApi(config.prompt);

    console.log('Extracting HTML...');
    const html = extractHtmlFromResponse(response);

    // Save HTML for debugging
    const htmlPath = path.join(__dirname, '..', 'public', 'infographics', config.filename.replace('.png', '.html'));
    fs.writeFileSync(htmlPath, html);
    console.log(`HTML saved to: ${htmlPath}`);

    // Ensure output directory exists
    const outputDir = path.join(__dirname, '..', 'public', 'infographics');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(outputDir, config.filename);

    console.log('Rendering to PNG...');
    await renderHtmlToPng(html, outputPath);

    console.log(`✓ Generated: ${config.filename}`);
    return outputPath;

  } catch (error) {
    console.error(`Error generating ${name}:`, error.message);
    throw error;
  }
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === '--all') {
    // Generate all infographics
    console.log('Generating all infographics...');
    for (const name of Object.keys(INFOGRAPHICS)) {
      try {
        await generateInfographic(name);
      } catch (error) {
        console.error(`Failed: ${name}`);
      }
    }
  } else {
    // Generate specific infographic
    await generateInfographic(args[0]);
  }
}

main().catch(console.error);
