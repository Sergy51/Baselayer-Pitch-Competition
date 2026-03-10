import { chromium } from 'playwright';
import { join, resolve } from 'path';
import { mkdirSync, readFileSync } from 'fs';

const ROOT = resolve('.');
const DECK_URL = `file://${join(ROOT, 'clearterms_deck.html')}`;
const OUT_DIR = join(ROOT, 'Export');
mkdirSync(OUT_DIR, { recursive: true });

const WIDTH = 1280;
const HEIGHT = 720;

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  // Load deck and wait for iframes
  await page.goto(DECK_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000); // let iframes fully load

  const totalSlides = await page.evaluate(() => document.querySelectorAll('.slide').length);
  console.log(`Total slides in deck: ${totalSlides}`);

  let pageNum = 1;

  async function screenshot(label) {
    const path = join(OUT_DIR, `page_${String(pageNum).padStart(2, '0')}.png`);
    // Hide nav dots and counter for clean export
    await page.evaluate(() => {
      document.getElementById('navDots').style.display = 'none';
      document.getElementById('slideCounter').style.display = 'none';
    });
    await page.screenshot({ path, type: 'png' });
    // Restore nav
    await page.evaluate(() => {
      document.getElementById('navDots').style.display = '';
      document.getElementById('slideCounter').style.display = '';
    });
    console.log(`  Page ${pageNum}: ${label}`);
    pageNum++;
  }

  // Navigate to a specific deck slide
  async function goToSlide(n) {
    await page.evaluate((idx) => goTo(idx), n);
    await page.waitForTimeout(300);
  }

  // Send message to iframe inside current slide
  async function sendToIframe(slideIdx, msg) {
    await page.evaluate(({ idx, message }) => {
      const slide = document.querySelectorAll('.slide')[idx];
      const iframe = slide && slide.querySelector('iframe');
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage(message, '*');
      }
    }, { idx: slideIdx, message: msg });
  }

  for (let i = 0; i < totalSlides; i++) {
    await goToSlide(i);

    if (i === 1) {
      // History artifact — 4 manual steps + final state
      // Step 0: initial state (already reset by goTo)
      await sendToIframe(1, 'reset');
      await page.waitForTimeout(500);
      await screenshot('History — Step 0: Clean customer card');

      // Step 1: shipment appears
      await sendToIframe(1, 'next');
      await page.waitForTimeout(500);
      await screenshot('History — Step 1: $80K shipment');

      // Step 2: unpaid
      await sendToIframe(1, 'next');
      await page.waitForTimeout(500);
      await screenshot('History — Step 2: Invoice unpaid');

      // Step 3: right panel + signals auto-play
      await sendToIframe(1, 'next');
      await page.waitForTimeout(7000); // wait for all 6 signals + final title
      await screenshot('History — Step 3: All signals revealed');

    } else if (i === 2) {
      // Gap slide — 2 steps
      // Step 0: timeline only
      await sendToIframe(2, 'reset');
      await page.waitForTimeout(500);
      await screenshot('Gap — Step 0: Timeline');

      // Step 1: signals + quote
      await sendToIframe(2, 'next');
      await page.waitForTimeout(1500); // wait for animation
      await screenshot('Gap — Step 1: Signals + quote');

    } else {
      // Regular slide or non-interactive iframe (Demo, Data Layer)
      await page.waitForTimeout(500);
      await screenshot(`Slide ${i}`);
    }
  }

  // Now combine all PNGs into a single PDF
  console.log('\nCombining into PDF...');

  // Use a new page to render all screenshots as a PDF
  const pdfPage = await context.newPage();
  const imgTags = [];
  for (let p = 1; p < pageNum; p++) {
    const filePath = join(OUT_DIR, `page_${String(p).padStart(2, '0')}.png`);
    const base64 = readFileSync(filePath).toString('base64');
    imgTags.push(`<img src="data:image/png;base64,${base64}">`);
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        * { margin: 0; padding: 0; }
        @page { size: ${WIDTH}px ${HEIGHT}px; margin: 0; }
        body { margin: 0; }
        img {
          display: block;
          width: ${WIDTH}px;
          height: ${HEIGHT}px;
          page-break-after: always;
          object-fit: contain;
        }
        img:last-child { page-break-after: avoid; }
      </style>
    </head>
    <body>
      ${imgTags.join('\n')}
    </body>
    </html>
  `;

  await pdfPage.setContent(htmlContent, { waitUntil: 'networkidle' });
  const pdfPath = join(ROOT, 'ClearTerms_Pitch_Deck.pdf');
  await pdfPage.pdf({
    path: pdfPath,
    width: `${WIDTH}px`,
    height: `${HEIGHT}px`,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  console.log(`\nPDF exported to: ${pdfPath}`);
  console.log(`Total pages: ${pageNum - 1}`);

  await browser.close();
}

main().catch(e => { console.error(e); process.exit(1); });
