#!/usr/bin/env node
/**
 * Comprehensive deployment smoke test for university site.
 * Auto-discovers all pages from the docs directory structure.
 *
 * Usage:
 *   node scripts/smoke-test-university.mjs [--base-url URL] [--fail-fast] [--concurrency N]
 */

import { execSync } from 'child_process';

const BASE_URL = process.argv.includes('--base-url')
  ? process.argv[process.argv.indexOf('--base-url') + 1]
  : 'https://wyattsnotes-university.pages.dev';

const FAIL_FAST = process.argv.includes('--fail-fast');
const CONCURRENCY = parseInt(
  process.argv[process.argv.indexOf('--concurrency') + 1] || '5',
  10,
);

// Auto-discover all pages from the filesystem
function discoverPages() {
  const stdout = execSync(
    'find docs/docs_university -name "*.md" -o -name "*.mdx"',
    { encoding: 'utf8', cwd: new URL('..', import.meta.url) },
  );

  const pages = new Set();

  for (const filePath of stdout.trim().split('\n').filter(Boolean)) {
    // Remove docs/docs_university/ prefix
    let page = filePath.replace(/^docs\/docs_university\//, '');

    // Remove extension
    page = page.replace(/\.mdx?$/, '');

    // Convert index.md to directory URL (trailing slash)
    if (page.endsWith('/index')) {
      page = page.replace(/\/index$/, '');
    }

    // Skip empty paths
    if (!page || page === '/') continue;

    pages.add(page);
  }

  return [...pages].sort();
}

// Cloudflare Pages returns 200 for 404 pages, so we need to check content
async function checkPage(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      redirect: 'follow',
      headers: { 'User-Agent': 'smoke-test/1.0' },
    });

    if (res.status !== 200) {
      return { status: res.status, is404: true };
    }

    // Check if it's actually a 404 page (Cloudflare returns 200 with 404 HTML)
    const html = await res.text();
    const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : '';

    if (
      title.includes('Page not found') ||
      title.includes('404') ||
      html.includes('This page could not be found')
    ) {
      return { status: 200, is404: true, title };
    }

    return { status: 200, is404: false };
  } catch (err) {
    return { status: 0, is404: true, error: err.message };
  } finally {
    clearTimeout(timer);
  }
}

// Concurrency-limited runner
async function runWithConcurrency(items, fn, concurrency) {
  const results = [];
  let idx = 0;

  async function worker() {
    while (idx < items.length) {
      const i = idx++;
      results[i] = await fn(items[i], i);
    }
  }

  const workers = Array.from({ length: Math.min(concurrency, items.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

async function main() {
  const pages = discoverPages();

  console.log(`\n${'='.repeat(60)}`);
  console.log(`University Site Comprehensive Smoke Test`);
  console.log(`${'='.repeat(60)}`);
  console.log(`Base URL:    ${BASE_URL}`);
  console.log(`Total pages:  ${pages.length}`);
  console.log(`Concurrency:  ${CONCURRENCY}`);
  console.log(`Fail fast:    ${FAIL_FAST}`);
  console.log('');

  // Group pages by subject for summary
  const subjects = {};
  for (const page of pages) {
    const subject = page.split('/')[0];
    if (!subjects[subject]) subjects[subject] = 0;
    subjects[subject]++;
  }
  console.log('Pages by subject:');
  for (const [subj, count] of Object.entries(subjects).sort()) {
    console.log(`  ${subj}: ${count}`);
  }
  console.log('');

  const results = await runWithConcurrency(pages, async (page, i) => {
    const url = `${BASE_URL}/docs/${page}`;
    const result = await checkPage(url);
    return { page, url, ...result };
  }, CONCURRENCY);

  let passed = 0;
  let failed = 0;
  const failures = [];

  for (const r of results) {
    if (r.is404 || r.status !== 200) {
      failed++;
      const reason = r.error
        ? `Error: ${r.error}`
        : r.title
          ? `404 (title: ${r.title})`
          : `HTTP ${r.status}`;
      failures.push({ page: r.page, reason });
      process.stdout.write('✗');
    } else {
      passed++;
      process.stdout.write('✓');
    }
  }

  console.log(`\n\nResults: ${passed} passed, ${failed} failed out of ${pages.length}`);

  if (failures.length > 0) {
    console.log(`\nFailed pages (${failures.length}):`);
    for (const f of failures) {
      console.log(`  ❌ /docs/${f.page} — ${f.reason}`);
    }
    process.exit(1);
  } else {
    console.log('\n✅ All university pages are live and accessible!');
  }
}

main().catch((err) => {
  console.error('Fatal error:', err.message);
  process.exit(2);
});
