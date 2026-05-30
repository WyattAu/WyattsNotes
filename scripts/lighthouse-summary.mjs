import fs from 'node:fs';
import path from 'node:path';

const SUMMARY_PATH = process.env.GITHUB_STEP_SUMMARY;
const LHCI_DIR = '.lighthouseci';
const REGRESSION_THRESHOLD = 5;
const PREVIOUS_RESULTS_FILE = 'scripts/lighthouse-baseline.json';

function findManifest() {
  const manifestDir = path.resolve(LHCI_DIR);

  if (!fs.existsSync(manifestDir)) {
    return null;
  }

  const files = fs.readdirSync(manifestDir).filter((f) => f.startsWith('manifest-'));

  if (files.length === 0) {
    return null;
  }

  files.sort().reverse();

  return path.join(manifestDir, files[0]);
}

function readManifestResults(manifestPath) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  const results = [];

  for (const entry of manifest) {
    if (typeof entry === 'string') {
      const resultPath = path.join(path.dirname(manifestPath), entry);

      if (fs.existsSync(resultPath)) {
        const result = JSON.parse(fs.readFileSync(resultPath, 'utf-8'));

        if (result[0] && result[0].categories) {
          const cats = result[0].categories;

          results.push({
            url: result[0].requestedUrl || result[0].finalUrl || 'unknown',
            performance: Math.round((cats.performance?.score ?? 0) * 100),
            accessibility: Math.round((cats.accessibility?.score ?? 0) * 100),
            bestPractices: Math.round((cats['best-practices']?.score ?? 0) * 100),
            seo: Math.round((cats.seo?.score ?? 0) * 100),
          });
        }
      }
    }
  }

  return results;
}

function readBaseline() {
  if (fs.existsSync(PREVIOUS_RESULTS_FILE)) {
    return JSON.parse(fs.readFileSync(PREVIOUS_RESULTS_FILE, 'utf-8'));
  }

  return {};
}

function saveBaseline(siteName, results) {
  const baseline = readBaseline();

  baseline[siteName] = results;
  fs.writeFileSync(PREVIOUS_RESULTS_FILE, JSON.stringify(baseline, null, 2) + '\n');
}

function checkRegressions(siteName, currentResults) {
  const baseline = readBaseline();
  const previous = baseline[siteName];

  if (!previous || previous.length === 0) {
    return { hasRegression: false, regressions: [] };
  }

  const regressions = [];

  for (const curr of currentResults) {
    const prev = previous.find((p) => p.url === curr.url);

    if (!prev) {
      continue;
    }

    const categories = ['performance', 'accessibility', 'bestPractices', 'seo'];

    for (const cat of categories) {
      const drop = prev[cat] - curr[cat];

      if (drop > REGRESSION_THRESHOLD) {
        regressions.push({
          url: curr.url,
          category: cat,
          previous: prev[cat],
          current: curr[cat],
          drop,
        });
      }
    }
  }

  return { hasRegression: regressions.length > 0, regressions };
}

const siteName = process.env.SITE_NAME || 'unknown';
const manifestPath = findManifest();

if (!manifestPath) {
  console.log('No Lighthouse manifest found');
  process.exit(0);
}

const results = readManifestResults(manifestPath);

if (results.length === 0) {
  console.log('No Lighthouse results found in manifest');
  process.exit(0);
}

const { hasRegression, regressions } = checkRegressions(siteName, results);

saveBaseline(siteName, results);

if (SUMMARY_PATH) {
  let markdown = `## Lighthouse Scores — ${siteName}\n\n`;

  markdown += '| URL | Perf | A11y | BP | SEO |\n';
  markdown += '|-----|------|------|----|----|\n';
  for (const r of results) {
    const shortUrl = r.url.replace(/^https?:\/\//, '').slice(0, 50);
    const fmt = (v) => (v >= 90 ? `**${v}**` : v >= 50 ? `${v}` : `*${v}*`);

    markdown += `| ${shortUrl} | ${fmt(r.performance)} | ${fmt(r.accessibility)} | ${fmt(r.bestPractices)} | ${fmt(r.seo)} |\n`;
  }

  if (regressions.length > 0) {
    markdown += '\n### :warning: Regressions Detected\n\n';
    for (const r of regressions) {
      markdown += `- **${r.category}** for ${r.url}: ${r.previous} -> ${r.current} (${r.drop} point drop)\n`;
    }
  } else {
    markdown += '\nNo regressions detected.\n';
  }

  fs.appendFileSync(SUMMARY_PATH, markdown + '\n');
}

console.log(`Lighthouse scores: ${results.length} URLs checked for ${siteName}`);
if (hasRegression) {
  console.error(`Regressions detected: ${regressions.length}`);
  process.exit(1);
}
