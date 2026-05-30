import fs from 'node:fs';
import path from 'node:path';

const BASELINE_FILE = 'scripts/bundle-size-baseline.json';
const THRESHOLD = 0.1;
const BUILD_DIR = 'build';

const args = process.argv.slice(2);
const saveBaseline = args.includes('--save-baseline');

function findBundles(dir) {
  const jsBundles = [];
  const cssBundles = [];

  function walk(d) {
    if (!fs.existsSync(d)) {
      return;
    }
    const entries = fs.readdirSync(d, { withFileTypes: true });

    for (const entry of entries) {
      const full = path.join(d, entry.name);

      if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '__server') {
        walk(full);
      } else if (entry.isFile()) {
        const size = fs.statSync(full).size;

        if (entry.name.endsWith('.js')) {
          jsBundles.push({ path: path.relative(BUILD_DIR, full), size });
        } else if (entry.name.endsWith('.css')) {
          cssBundles.push({ path: path.relative(BUILD_DIR, full), size });
        }
      }
    }
  }

  walk(dir);

  return { jsBundles, cssBundles };
}

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

const buildDir = path.resolve(BUILD_DIR);

if (!fs.existsSync(buildDir)) {
  console.log(`Build directory not found: ${buildDir}`);
  if (saveBaseline) {
    fs.writeFileSync(
      BASELINE_FILE,
      JSON.stringify(
        { jsTotal: 0, cssTotal: 0, total: 0, timestamp: new Date().toISOString() },
        null,
        2,
      ) + '\n',
    );
    console.log(`Empty baseline saved to ${BASELINE_FILE}`);
  }
  process.exit(saveBaseline ? 0 : 0);
}

const { jsBundles, cssBundles } = findBundles(buildDir);
const jsTotal = jsBundles.reduce((sum, b) => sum + b.size, 0);
const cssTotal = cssBundles.reduce((sum, b) => sum + b.size, 0);
const total = jsTotal + cssTotal;

const current = { jsTotal, cssTotal, total, timestamp: new Date().toISOString() };

if (saveBaseline) {
  fs.writeFileSync(BASELINE_FILE, JSON.stringify(current, null, 2) + '\n');
  console.log(
    `Baseline saved: JS ${formatBytes(jsTotal)}, CSS ${formatBytes(cssTotal)}, Total ${formatBytes(total)}`,
  );
  process.exit(0);
}

let baseline = null;

if (fs.existsSync(BASELINE_FILE)) {
  baseline = JSON.parse(fs.readFileSync(BASELINE_FILE, 'utf-8'));
}

const summaryPath = process.env.GITHUB_STEP_SUMMARY;
let markdown = '## Bundle Size Check\n\n';

markdown += '| Metric | Current | Baseline | Change |\n';
markdown += '|--------|---------|----------|--------|\n';

if (baseline) {
  const totalChange = total - baseline.total;
  const pctChange = baseline.total > 0 ? ((totalChange / baseline.total) * 100).toFixed(1) : 'N/A';

  const fmtDelta = (curr, base) => {
    const diff = curr - base;

    if (diff === 0) {
      return '—';
    }
    const sign = diff > 0 ? '+' : '';

    return `${sign}${formatBytes(diff)}`;
  };

  markdown += `| JS | ${formatBytes(jsTotal)} | ${formatBytes(baseline.jsTotal)} | ${fmtDelta(jsTotal, baseline.jsTotal)} |\n`;
  markdown += `| CSS | ${formatBytes(cssTotal)} | ${formatBytes(baseline.cssTotal)} | ${fmtDelta(cssTotal, baseline.cssTotal)} |\n`;
  markdown += `| **Total** | **${formatBytes(total)}** | **${formatBytes(baseline.total)}** | **${fmtDelta(total, baseline.total)} (${pctChange}%)** |\n`;

  const exceedsThreshold = baseline.total > 0 && totalChange / baseline.total > THRESHOLD;

  if (exceedsThreshold) {
    markdown += `\n:warning: Bundle size exceeds baseline by more than ${THRESHOLD * 100}%!\n`;
    if (summaryPath) {
      fs.appendFileSync(summaryPath, markdown + '\n');
    }
    console.error(
      `Bundle size regression: ${formatBytes(total)} vs ${formatBytes(baseline.total)} (${pctChange}% increase)`,
    );
    process.exit(1);
  } else {
    markdown += `\n:white_check_mark: Bundle size within acceptable range.\n`;
  }
} else {
  markdown += `| JS | ${formatBytes(jsTotal)} | N/A | N/A |\n`;
  markdown += `| CSS | ${formatBytes(cssTotal)} | N/A | N/A |\n`;
  markdown += `| **Total** | **${formatBytes(total)}** | N/A | N/A |\n`;
  markdown += '\nNo baseline found. Run with `--save-baseline` to establish one.\n';
}

if (summaryPath) {
  fs.appendFileSync(summaryPath, markdown + '\n');
}

console.log(
  `Bundle size: JS ${formatBytes(jsTotal)}, CSS ${formatBytes(cssTotal)}, Total ${formatBytes(total)}`,
);
