#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const SITES = [
  { name: 'Main', key: 'main', url: 'https://wyattsnotes.wyattau.com' },
  { name: 'IB', key: 'ib', url: 'https://ib.wyattau.com' },
  { name: 'DSE', key: 'dse', url: 'https://dse.wyattau.com' },
  { name: 'A-Level MP', key: 'alevel', url: 'https://alevel.wyattau.com' },
  { name: 'A-Level Sciences', key: 'alevel-sciences', url: 'https://alevel.wyattau.com' },
  { name: 'Programming', key: 'programming', url: 'https://programming.wyattau.com' },
  { name: 'Qualifications', key: 'qualifications', url: 'https://qualifications.wyattau.com' },
  { name: 'University', key: 'university', url: 'https://university.wyattau.com' },
];

const BASELINE_FILE = path.join(ROOT, '.reports', 'lighthouse-targets.md');
const LHCI_BASELINE_JSON = path.join(ROOT, 'scripts', 'lighthouse-baseline.json');

function readLhciBaseline() {
  if (!fs.existsSync(LHCI_BASELINE_JSON)) return {};
  return JSON.parse(fs.readFileSync(LHCI_BASELINE_JSON, 'utf-8'));
}

function generateBaselineMarkdown(lhciData) {
  const today = new Date().toISOString().split('T')[0];
  const KNOWN = {
    main: 77, ib: 86, dse: 86, alevel: 86,
    'alevel-sciences': 86, programming: 75, qualifications: 86, university: 88,
  };

  let md = `# Lighthouse Performance Targets\n\n`;
  md += `## Current Baseline (${today})\n\n`;
  md += `| Site | Perf | Target | Gap |\n`;
  md += `|------|------|--------|-----|\n`;

  for (const site of SITES) {
    const perf = lhciData[site.key]
      ? Math.round((lhciData[site.key][0]?.categories?.performance?.score ?? 0) * 100)
      : KNOWN[site.key];
    const gap = Math.max(0, 92 - perf);
    md += `| ${site.name} | ${perf} | 92 | ${gap} |\n`;
  }

  md += `\n## Post-Optimization Targets (2026-05-31)\n\n`;
  md += `| Site | Perf | Target | Expected After Fix |\n`;
  md += `|------|------|--------|-------------------|\n`;
  md += `| Main | 77 | 92 | ~92 (faster + lazy + deferred Sentry) |\n`;
  md += `| Programming | 75 | 92 | ~88 (lazy components + deferred Sentry) |\n`;
  md += `| University | 88 | 92 | ~92 (deferred Sentry only) |\n`;

  md += `\n## Cross-Site Targets\n\n`;
  md += `| Metric | Current | Target |\n`;
  md += `|--------|---------|--------|\n`;
  md += `| Accessibility | 96 | 98 |\n`;
  md += `| Best Practices | 92 | 95 |\n`;
  md += `| SEO | 100 | 100 (maintain) |\n`;

  return md;
}

const lhciData = readLhciBaseline();
const markdown = generateBaselineMarkdown(lhciData);

fs.writeFileSync(BASELINE_FILE, markdown + '\n');
console.log(`Baseline written to ${BASELINE_FILE}`);
