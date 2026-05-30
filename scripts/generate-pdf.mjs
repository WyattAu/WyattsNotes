#!/usr/bin/env node

import puppeteer from 'puppeteer';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = process.env.PDF_BASE_URL || 'http://localhost:3000';

const args = process.argv.slice(2);
let subject = null;
let output = null;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--subject' && args[i + 1]) subject = args[++i];
  if (args[i] === '--output' && args[i + 1]) output = args[++i];
}

if (!subject) {
  console.error('Usage: node generate-pdf.mjs --subject <subject> --output <file.pdf>');
  process.exit(1);
}

output = output || path.join(__dirname, '..', 'pdf-output', `${subject}.pdf`);
fs.mkdirSync(path.dirname(output), { recursive: true });

async function generatePDF() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();

  await page.setViewport({ width: 210 * 3.78, height: 297 * 3.78 });
  await page.goto(`${BASE_URL}/docs/${subject}`, { waitUntil: 'networkidle0', timeout: 60000 });

  const title = await page.evaluate(() => document.querySelector('h1')?.textContent || subject);
  const today = new Date().toISOString().split('T')[0];

  const coverHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;
                height:100vh;font-family:'Inter',sans-serif;text-align:center;padding:2cm;">
      <h1 style="font-size:2.5rem;margin-bottom:1rem;">${title}</h1>
      <p style="font-size:1.2rem;color:#666;">WyattsNotes Study Guide</p>
      <p style="margin-top:2rem;color:#999;">Generated: ${today}</p>
    </div>
  `;

  const printCSS = `
    @page { size: A4; margin: 2cm; }
    body { font-family: 'Inter', system-ui, sans-serif; font-size: 11pt; line-height: 1.6; }
    nav, footer, .theme-doc-sidebar-container, .navbar,
    button[class*="toggleButton"], .pagination-nav, .theme-doc-toc-desktop { display: none !important; }
    main { max-width: 100% !important; padding: 0 !important; margin: 0 !important; }
    article { box-shadow: none !important; padding: 0 !important; border-radius: 0 !important; }
    img { max-width: 100%; page-break-inside: avoid; }
    table { page-break-inside: avoid; }
    pre { page-break-inside: avoid; white-space: pre-wrap; word-wrap: break-word; font-size: 9pt; }
    h1, h2, h3 { page-break-after: avoid; }
    .mermaid svg { max-width: 100%; }
  `;

  await page.addStyleTag({ content: printCSS });

  const pages = await page.evaluate(async (baseUrl, subj) => {
    const links = Array.from(document.querySelectorAll('a[href*="/docs/"]'))
      .map((a) => a.getAttribute('href'))
      .filter((h) => h && h.includes(subj))
      .filter((h, i, arr) => arr.indexOf(h) === i)
      .map((h) => baseUrl + h);

    const tocHTML = `
      <div style="padding:1cm 0;">
        <h2 style="margin-bottom:0.5rem;">Table of Contents</h2>
        <ol style="line-height:2;">
          ${links.map((l) => `<li>${l.split('/').pop().replace(/-/g, ' ')}</li>`).join('')}
        </ol>
      </div>`;

    return { links, tocHTML };
  }, BASE_URL, subject);

  const pdf = await page.pdf({
    path: output,
    format: 'A4',
    margin: { top: '2cm', bottom: '2cm', left: '2cm', right: '2cm' },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div></div>',
    footerTemplate: '<div style="font-size:9px;text-align:center;width:100%;color:#999;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
  });

  console.log(`PDF generated: ${output} (${(Buffer.byteLength(pdf) / 1024).toFixed(0)} KB)`);
  await browser.close();
}

generatePDF().catch((err) => {
  console.error('Failed to generate PDF:', err);
  process.exit(1);
});
