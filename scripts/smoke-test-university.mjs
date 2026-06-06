#!/usr/bin/env node
/**
 * Comprehensive deployment smoke test for university site.
 * Fetches the live sitemap to get authoritative URL list,
 * then verifies every page returns a valid 200 with real content.
 *
 * Usage:
 *   node scripts/smoke-test-university.mjs [--base-url URL] [--fail-fast] [--concurrency N]
 */

const BASE_URL = process.argv.includes('--base-url')
  ? process.argv[process.argv.indexOf('--base-url') + 1]
  : 'https://university.wyattau.com';

const FAIL_FAST = process.argv.includes('--fail-fast');
const CONCURRENCY = parseInt(
  process.argv[process.argv.indexOf('--concurrency') + 1] || '5',
  10,
);

// Fetch sitemap and extract page paths
async function fetchSitemapPages() {
  const res = await fetch(`${BASE_URL}/sitemap.xml`, {
    headers: { 'User-Agent': 'smoke-test/1.0' },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch sitemap: HTTP ${res.status}`);
  }
  const xml = await res.text();

  // Extract all <loc> URLs
  const locRegex = /<loc>([^<]+)<\/loc>/g;
  const urls = [];
  let match;
  while ((match = locRegex.exec(xml)) !== null) {
    urls.push(match[1]);
  }

  // Filter to only /docs/ pages (skip /, /404, /privacy, /search, /tags)
  return urls
    .filter((url) => url.startsWith(`${BASE_URL}/docs/`))
    .map((url) => url.replace(`${BASE_URL}`, '')); // Strip base URL
}

// Also discover expected pages from filesystem for comparison
import { execSync } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

function discoverFilesystemPages() {
  const stdout = execSync(
    'find docs/docs_university -name "*.md" -o -name "*.mdx"',
    { encoding: 'utf8', cwd: projectRoot },
  );
  return stdout.trim().split('\n').filter(Boolean).length;
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
  console.log(`\n${'='.repeat(60)}`);
  console.log(`University Site Comprehensive Smoke Test`);
  console.log(`${'='.repeat(60)}`);
  console.log(`Base URL:    ${BASE_URL}`);
  console.log(`Concurrency:  ${CONCURRENCY}`);
  console.log(`Fail fast:    ${FAIL_FAST}`);
  console.log('');

  const fsPageCount = discoverFilesystemPages();
  console.log(`Filesystem pages: ${fsPageCount} (.md/.mdx files)`);
  console.log('');

  const pages = await fetchSitemapPages();
  console.log(`Sitemap pages:  ${pages.length}`);

  if (pages.length === 0) {
    console.log('\n⚠️  No /docs/ pages found in sitemap — site may not be deployed yet.');
    process.exit(2);
  }

  // Group by top-level subject
  const subjects = {};
  for (const page of pages) {
    const subject = page.replace(/^\/docs\//, '').split('/')[0];
    if (!subjects[subject]) subjects[subject] = 0;
    subjects[subject]++;
  }
  console.log('\nPages by subject:');
  for (const [subj, count] of Object.entries(subjects).sort()) {
    console.log(`  ${subj}: ${count}`);
  }

  // Coverage estimate
  const expected = fsPageCount; // Rough count of content files
  const coverage = ((pages.length / expected) * 100).toFixed(1);
  console.log(`\nSitemap coverage: ~${coverage}% of ${expected} content files`);
  console.log('');

  const results = await runWithConcurrency(pages, async (page, i) => {
    const url = `${BASE_URL}${page}`;
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
      console.log(`  ❌ ${f.page} — ${f.reason}`);
    }
    process.exit(1);
  } else {
    console.log('\n✅ All sitemap pages are live and accessible!');
  }
}

main().catch((err) => {
  console.error('Fatal error:', err.message);
  process.exit(2);
});
