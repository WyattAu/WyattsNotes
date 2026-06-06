#!/usr/bin/env node
/**
 * Comprehensive deployment smoke test for university site.
 * Auto-discovers all pages from the docs directory structure.
 *
 * URL mapping rules:
 *   - Subdirectories with index.md: Docusaurus derives the slug from
 *     the frontmatter `title` (lowercased, spaces → dashes).
 *     e.g., docs/docs_university/mathematics/1-abstract-algebra/index.md
 *     (title: "Abstract Algebra") → /docs/mathematics/abstract-algebra
 *   - Standalone .md/.mdx files: filename becomes slug.
 *     e.g., docs/docs_university/admissions/bmo-preparation.md
 *     → /docs/admissions/bmo-preparation
 *   - Nested files in subdirectories: directory name (no number stripping)
 *     becomes the slug. The title-based slug only applies to index.md
 *     in the top-level subdirectory.
 *
 * Usage:
 *   node scripts/smoke-test-university.mjs [--base-url URL] [--fail-fast] [--concurrency N]
 */

import { execSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

const BASE_URL = process.argv.includes('--base-url')
  ? process.argv[process.argv.indexOf('--base-url') + 1]
  : 'https://university.wyattau.com';

const FAIL_FAST = process.argv.includes('--fail-fast');
const CONCURRENCY = parseInt(
  process.argv[process.argv.indexOf('--concurrency') + 1] || '5',
  10,
);

// Extract title from markdown frontmatter
function extractTitle(filePath) {
  try {
    const content = readFileSync(resolve(projectRoot, filePath), 'utf8');
    const match = content.match(/^title:\s*['"]?(.+?)['"]?\s*$/m);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

// Convert a frontmatter title to a URL slug
function titleToSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove non-word chars except spaces and hyphens
    .replace(/\s+/g, '-') // Spaces to hyphens
    .replace(/-+/g, '-') // Collapse multiple hyphens
    .replace(/^-|-$/g, ''); // Trim leading/trailing hyphens
}

// Auto-discover all pages with correct URL mapping
function discoverPages() {
  const stdout = execSync(
    'find docs/docs_university -name "*.md" -o -name "*.mdx"',
    { encoding: 'utf8', cwd: projectRoot },
  );

  const pages = [];

  for (const filePath of stdout.trim().split('\n').filter(Boolean)) {
    // Remove docs/docs_university/ prefix
    const relativePath = filePath.replace(/^docs\/docs_university\//, '');

    // Get the parts
    const parts = relativePath.split('/');
    // parts[0] = subject directory (mathematics, physics, etc.)
    // parts[1] = subdirectory or filename
    // parts[2] = filename if in nested dir

    const subject = parts[0];

    if (parts.length === 2) {
      // File directly in subject directory: admissions/bmo-preparation.md
      const fileName = parts[1].replace(/\.mdx?$/, '');
      pages.push(`${subject}/${fileName}`);
    } else if (parts.length >= 3) {
      const fileName = parts[parts.length - 1].replace(/\.mdx?$/, '');
      const parentDir = parts[1];

      // Check if this is index.md in a subdirectory
      if (fileName === 'index') {
        // Docusaurus derives slug from frontmatter title for index.md
        const title = extractTitle(filePath);
        if (title) {
          pages.push(`${subject}/${titleToSlug(title)}`);
        } else {
          // No title — use directory name as-is
          pages.push(`${subject}/${parentDir}`);
        }
      } else {
        // Non-index file in a subdirectory: use parent dir + filename
        // e.g., computing/2-algorithms-and-data-structures/2_data-structures-advanced.md
        // → /docs/computing/algorithms-and-data-structures/2_data-structures-advanced
        // The parent directory slug is derived from its index.md title
        const indexPath = filePath.replace(/[^/]+\.mdx?$/, 'index.md');
        const indexTitle = extractTitle(indexPath);
        const dirSlug = indexTitle ? titleToSlug(indexTitle) : parentDir;
        pages.push(`${subject}/${dirSlug}/${fileName}`);
      }
    }
  }

  return [...new Set(pages)].sort();
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
