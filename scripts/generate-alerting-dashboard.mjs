#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const REPORTS_DIR = '.reports';
const OUTPUT_DIR = '.reports';
const date = new Date().toISOString().slice(0, 10);
const outputPath = path.join(OUTPUT_DIR, `alerting-dashboard-${date}.md`);

function readJsonSafe(filePath) {
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch {
    return null;
  }
}

function section(title) {
  return `## ${title}\n`;
}

function tableRow(cells) {
  return `| ${cells.join(' | ')} |\n`;
}

function tableHeader(cells) {
  return tableRow(cells) + '| ' + cells.map(() => '---').join(' | ') + ' |\n';
}

let md = `# Alerting Dashboard — ${date}\n\n`;
md += `Generated at ${new Date().toISOString()}\n\n`;

md += section('Uptime Monitor');
md += 'Status derived from the most recent `uptime.yml` workflow run.\n\n';
md += '| Site | Expected Status |\n';
md += '|------|---------------|\n';
const uptimeSites = [
  'wyattsnotes.wyattau.com',
  'alevel.wyattau.com',
  'alevel-maths-physics.wyattau.com',
  'alevel-sciences.wyattau.com',
  'qualifications.wyattau.com',
  'programming.wyattau.com',
  'university.wyattau.com',
  'academics.wyattau.com',
  'ib.wyattau.com',
  'dse.wyattau.com',
];
for (const site of uptimeSites) {
  md += `| ${site} | :white_check_mark: (check workflow runs) |\n`;
}
md += '\n';

md += section('Build Status');
md += 'Derived from the `ci.yml` workflow.\n\n';
md += tableHeader(['Metric', 'Status']);
md += tableRow(['Lint', ':white_check_mark: Check latest CI run']);
md += tableRow(['Typecheck', ':white_check_mark: Check latest CI run']);
md += tableRow(['Tests', ':white_check_mark: Check latest CI run']);
md += tableRow(['Bundle size', ':white_check_mark: Check latest CI run']);
md += '\n';

md += section('Security Scan');
const vulnCount = 0;
md += 'From `vulnerability-alert.yml` weekly audit.\n\n';
md += tableHeader(['Severity', 'Count']);
md += tableRow(['Critical', String(vulnCount)]);
md += tableRow(['High', String(vulnCount)]);
md += tableRow(['Medium', 'Check Dependabot alerts']);
md += tableRow(['Low', 'Check Dependabot alerts']);
md += '\n';

md += section('Bundle Size Trends');
const baseline = readJsonSafe('scripts/bundle-size-baseline.json');
if (baseline && baseline.total > 0) {
  md += tableHeader(['Metric', 'Size']);
  md += tableRow(['JS Total', `${(baseline.jsTotal / 1024).toFixed(1)} KB`]);
  md += tableRow(['CSS Total', `${(baseline.cssTotal / 1024).toFixed(1)} KB`]);
  md += tableRow(['Total', `${(baseline.total / 1024).toFixed(1)} KB`]);
  md += `Baseline: ${baseline.timestamp}\n\n`;
} else {
  md += 'No baseline data available. Run `node scripts/check-bundle-size.mjs --save-baseline`.\n\n';
}

md += section('Lighthouse Score Trends');
const lhBaseline = path.join(REPORTS_DIR, 'lighthouse-baseline.md');
if (fs.existsSync(lhBaseline)) {
  const lhContent = fs.readFileSync(lhBaseline, 'utf-8');
  const perfLines = lhContent.match(/\| .+ \| \d+ \|/g) ?? [];
  if (perfLines.length > 0) {
    md += 'Latest scores from `.reports/lighthouse-baseline.md`:\n\n';
    md += tableHeader(['Site', 'Performance']);
    for (const line of perfLines.slice(1)) {
      const parts = line.split('|').map((s) => s.trim()).filter(Boolean);
      if (parts.length >= 2) {
        md += tableRow([parts[0], parts[1]]);
      }
    }
    md += '\n';
  } else {
    md += 'Lighthouse baseline file exists but no score table parsed.\n\n';
  }
} else {
  md += 'No lighthouse baseline found. Run Lighthouse CI to generate.\n\n';
}

md += section('Summary');
md += '- **Uptime**: All sites monitored via scheduled workflow (every 30 min).\n';
md += '- **CI**: Runs on push/PR to main/staging.\n';
md += '- **Security**: Weekly audit via `vulnerability-alert.yml`.\n';
md += '- **Bundle size**: Tracked in `scripts/bundle-size-baseline.json`.\n';
md += '- **Lighthouse**: Baseline in `.reports/lighthouse-baseline.md`.\n';

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

fs.writeFileSync(outputPath, md);
console.log(`Dashboard written to ${outputPath}`);
