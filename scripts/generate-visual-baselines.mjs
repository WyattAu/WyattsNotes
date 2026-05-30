#!/usr/bin/env node

import { execSync } from 'child_process';
import http from 'http';

const BASE_URL = 'http://localhost:3000';
const BASELINE_DIR = 'e2e/__screenshots__/baseline';
const TEST_FILES = [
  'e2e/visual-regression.spec.ts',
  'e2e/visual-regression-extended.spec.ts',
];

const BASELINE_IMAGES = [
  'landing-page.png',
  'docs-page.png',
  'sidebar.png',
  'navbar---.png',
  'navbar--docs-infrastructure-intro.png',
  'navbar--docs-tools-intro.png',
  'dark-mode-landing.png',
  '404-page.png',
  'mobile-landing-chromium.png',
  'mobile-landing-firefox.png',
  'mobile-landing-webkit.png',
];

function checkDevServer() {
  return new Promise((resolve) => {
    const req = http.get(BASE_URL, (res) => {
      resolve(res.statusCode === 200);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(3000, () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function main() {
  console.log('=== Visual Regression Baseline Generator ===\n');

  console.log('[1/4] Checking dev server...');
  const serverUp = await checkDevServer();
  if (!serverUp) {
    console.error(`ERROR: Dev server not running at ${BASE_URL}`);
    console.error('Start it with: pnpm run start');
    console.error('Or use a production build: pnpm run serve');
    process.exit(1);
  }
  console.log('  Dev server is running.\n');

  console.log('[2/4] Checking Playwright browsers...');
  try {
    execSync('npx playwright --version', { stdio: 'pipe' });
  } catch {
    console.error('ERROR: Playwright not found. Install with: pnpm add -D @playwright/test');
    process.exit(1);
  }
  console.log('  Playwright is available.\n');

  console.log('[3/4] Expected baseline images:');
  for (const img of BASELINE_IMAGES) {
    console.log(`  ${BASELINE_DIR}/${img}`);
  }
  console.log('');

  console.log('[4/4] Commands to generate baselines:\n');
  console.log('  Install browsers (first time only):');
  console.log('    npx playwright install\n');
  console.log('  Generate ALL baselines:');
  console.log('    npx playwright test --update-snapshots\n');
  console.log('  Generate baselines for visual tests only:');
  for (const f of TEST_FILES) {
    console.log(`    npx playwright test ${f} --update-snapshots`);
  }
  console.log('\n  Run comparison (no update):');
  console.log('    npx playwright test e2e/visual-regression.spec.ts e2e/visual-regression-extended.spec.ts\n');
  console.log('  Run with UI mode for interactive review:');
  console.log('    pnpm run test:e2e:ui\n');

  console.log('=== Notes ===');
  console.log('- Baselines are stored per-browser in:');
  console.log(`  ${BASELINE_DIR}/{chromium,firefox,webkit}/`);
  console.log('- maxDiffPixelRatio is 0.01 for most screenshots (1% tolerance)');
  console.log('- Mobile tests generate per-browser baselines');
  console.log('- Dark mode test clicks the theme toggle, ensure it exists on the page');
  console.log('- 404 test navigates to /nonexistent-page');
  console.log('- Update baselines after intentional design changes with --update-snapshots');
}

main().catch((err) => {
  console.error('Fatal:', err.message);
  process.exit(1);
});
