const puppeteer = require('puppeteer');
const path = require('path');

async function generateOGImage() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 1200, height: 630 });

  const htmlPath = path.join(__dirname, '../public/og-image.html');
  await page.goto(`file://${htmlPath}`);

  const outputPath = path.join(__dirname, '../public/og-image.png');
  await page.screenshot({ path: outputPath, type: 'png' });

  await browser.close();
  console.log('✅ Generated og-image.png');
}

generateOGImage().catch(console.error);
