#!/usr/bin/env node
/**
 * Deployment smoke test for university site.
 * Verifies all expected pages return 200 after deployment.
 *
 * Usage:
 *   node scripts/smoke-test-university.mjs [--base-url URL] [--fail-fast]
 *
 * Options:
 *   --base-url URL   Base URL to test (default: https://wyattsnotes-university.pages.dev)
 *   --fail-fast      Exit on first failure
 *   --timeout MS     Per-request timeout in ms (default: 10000)
 */

const BASE_URL = process.argv.includes('--base-url')
  ? process.argv[process.argv.indexOf('--base-url') + 1]
  : 'https://wyattsnotes-university.pages.dev';

const FAIL_FAST = process.argv.includes('--fail-fast');
const TIMEOUT = parseInt(
  process.argv[process.argv.indexOf('--timeout') + 1] || '10000',
  10,
);

const EXPECTED_PAGES = [
  // Intro
  '/docs/intro',

  // Mathematics — root-level flat files
  '/docs/mathematics/linear-algebra',
  '/docs/mathematics/real-analysis',
  '/docs/mathematics/probability-and-statistics',
  '/docs/mathematics/number-theory',
  '/docs/mathematics/multivariable-calculus',
  '/docs/mathematics/differential-equations',
  '/docs/mathematics/complex-analysis',
  '/docs/mathematics/abstract-algebra',
  '/docs/mathematics/probability',

  // Mathematics — numbered subdirectories (index.md)
  '/docs/mathematics/probability-and-statistics',
  '/docs/mathematics/topology',
  '/docs/mathematics/measure-theory',
  '/docs/mathematics/functional-analysis',
  '/docs/mathematics/differential-geometry',

  // Mathematics — sub-pages
  '/docs/mathematics/linear-algebra/flashcards-linear-algebra',
  '/docs/mathematics/linear-algebra/practice-linear-algebra',
  '/docs/mathematics/real-analysis/flashcards-real-analysis',
  '/docs/mathematics/real-analysis/practice-real-analysis',

  // Physics — numbered subdirectories (index.md)
  '/docs/physics/classical-mechanics',
  '/docs/physics/thermal-physics',
  '/docs/physics/electromagnetism',
  '/docs/physics/optics-and-waves',
  '/docs/physics/quantum-mechanics',
  '/docs/physics/solid-state-physics',
  '/docs/physics/particle-physics-and-cosmology',

  // Physics — sub-pages
  '/docs/physics/classical-mechanics/flashcards-classical-mechanics',
  '/docs/physics/classical-mechanics/practice-classical-mechanics',
  '/docs/physics/quantum-mechanics/quantum-mechanics-ii',

  // Computing — root-level flat files
  '/docs/computing/algorithms-and-data-structures',
  '/docs/computing/algorithms-advanced',
  '/docs/computing/computer-networks',
  '/docs/computing/computer-networks-advanced',
  '/docs/computing/databases',
  '/docs/computing/databases-advanced',
  '/docs/computing/discrete-mathematics',
  '/docs/computing/operating-systems',
  '/docs/computing/operating-systems-advanced',
  '/docs/computing/theory-of-computation',

  // Computing — numbered subdirectories (index.md)
  '/docs/computing/algorithms-and-data-structures/data-structures-advanced',
  '/docs/computing/algorithms-and-data-structures/algorithms-advanced',

  // Admissions
  '/docs/admissions/step-preparation',
  '/docs/admissions/tmua-preparation',
  '/docs/admissions/mat-preparation',
  '/docs/admissions/bmo-preparation',
  '/docs/admissions/imo-preparation',
  '/docs/admissions/flashcards-admissions',
];

async function fetchPage(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      redirect: 'follow',
      headers: { 'User-Agent': 'smoke-test/1.0' },
    });
    return res.status;
  } finally {
    clearTimeout(timer);
  }
}

async function main() {
  console.log(`\n=== University Site Smoke Test ===`);
  console.log(`Base URL: ${BASE_URL}`);
  console.log(`Pages to check: ${EXPECTED_PAGES.length}`);
  console.log(`Fail fast: ${FAIL_FAST}\n`);

  let passed = 0;
  let failed = 0;
  const failures = [];

  for (const path of EXPECTED_PAGES) {
    const url = `${BASE_URL}${path}`;
    const status = await fetchPage(url);

    if (status === 200) {
      passed++;
      process.stdout.write('✓');
    } else {
      failed++;
      const msg = `${status} ${path}`;
      failures.push(msg);
      process.stdout.write('✗');
      if (FAIL_FAST) {
        console.log(`\n❌ ${msg}`);
        process.exit(1);
      }
    }
  }

  console.log(`\n\nResults: ${passed} passed, ${failed} failed out of ${EXPECTED_PAGES.length}`);

  if (failures.length > 0) {
    console.log('\nFailed pages:');
    for (const f of failures) {
      console.log(`  ❌ ${f}`);
    }
    process.exit(1);
  } else {
    console.log('\n✅ All pages accessible!');
  }
}

main().catch((err) => {
  console.error('Fatal error:', err.message);
  process.exit(2);
});
