#!/usr/bin/env node

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const args = process.argv.slice(2);
function getArg(name) {
  const idx = args.indexOf(`--${name}`);
  return idx !== -1 && idx + 1 < args.length ? args[idx + 1] : null;
}

const APP_ID = getArg('app-id') || process.env.ALGOLIA_APP_ID;
const API_KEY = getArg('api-key') || process.env.ALGOLIA_ANALYTICS_KEY || process.env.ALGOLIA_WRITE_KEY;
const INDEX_PREFIX = getArg('index-prefix') || 'wyattsnotes';

if (!APP_ID || !API_KEY) {
  console.error('Error: --app-id and --api-key are required (or set ALGOLIA_APP_ID / ALGOLIA_ANALYTICS_KEY env vars)');
  process.exit(1);
}

const ANALYTICS_BASE = 'https://analytics.algolia.com/2';
const HEADERS = {
  'X-Algolia-Application-Id': APP_ID,
  'X-Algolia-API-Key': API_KEY,
  'Content-Type': 'application/json',
};

const INDEX_NAMES = [
  `${INDEX_PREFIX}_main`,
  `${INDEX_PREFIX}_ib`,
  `${INDEX_PREFIX}_dse`,
  `${INDEX_PREFIX}_alevel_maths_physics`,
  `${INDEX_PREFIX}_alevel_sciences`,
  `${INDEX_PREFIX}_qualifications`,
  `${INDEX_PREFIX}_programming`,
  `${INDEX_PREFIX}_university`,
];

async function analyticsGet(endpoint, params = {}) {
  const url = new URL(`${ANALYTICS_BASE}${endpoint}`);
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, v);
  }
  const res = await fetch(url, { headers: HEADERS });
  if (!res.ok) {
    throw new Error(`Analytics API error: ${res.status} ${await res.text()}`);
  }
  return res.json();
}

async function fetchTopSearches(indexName, days = 30) {
  return analyticsGet('/searches', {
    indexId: indexName,
    limit: '100',
    startDate: daysAgo(days),
    endDate: new Date().toISOString().split('T')[0],
  });
}

async function fetchNoResultSearches(indexName, days = 30) {
  return analyticsGet('/searches/no-results', {
    indexId: indexName,
    limit: '50',
    startDate: daysAgo(days),
    endDate: new Date().toISOString().split('T')[0],
  });
}

async function fetchFilterUsage(indexName, days = 30) {
  try {
    return await analyticsGet('/filters', {
      indexId: indexName,
      limit: '20',
      startDate: daysAgo(days),
      endDate: new Date().toISOString().split('T')[0],
    });
  } catch {
    return { filters: [] };
  }
}

function daysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().split('T')[0];
}

function printSummary(data) {
  console.log('\n=== Algolia Analytics Report ===\n');
  for (const { indexName, topSearches, noResults, filters } of data) {
    console.log(`--- ${indexName} ---`);
    if (topSearches?.searches?.length) {
      console.log(`  Top searches (${topSearches.searches.length}):`);
      for (const s of topSearches.searches.slice(0, 10)) {
        const ctr = s.clickThroughRate != null ? `${(s.clickThroughRate * 100).toFixed(1)}%` : 'N/A';
        console.log(`    "${s.search}" — ${s.count || s.nbSearches || '?'} searches, CTR: ${ctr}`);
      }
    } else {
      console.log('  No search data available');
    }
    if (noResults?.searches?.length) {
      console.log(`  No-result searches (${noResults.searches.length}):`);
      for (const s of noResults.searches.slice(0, 5)) {
        console.log(`    "${s.search}" — ${s.count || s.nbSearches || '?'} queries`);
      }
    }
    if (filters?.filters?.length) {
      console.log(`  Top filters (${filters.filters.length}):`);
      for (const f of filters.filters.slice(0, 5)) {
        console.log(`    ${f.attribute}=${f.value} — ${f.count || '?'} uses`);
      }
    }
    console.log('');
  }
}

async function main() {
  console.log(`Fetching analytics for ${INDEX_NAMES.length} indices (past 30 days)...\n`);

  const report = { generatedAt: new Date().toISOString(), indexPrefix: INDEX_PREFIX, indices: [] };

  for (const indexName of INDEX_NAMES) {
    console.log(`Fetching: ${indexName}`);
    const [topSearches, noResults, filters] = await Promise.allSettled([
      fetchTopSearches(indexName),
      fetchNoResultSearches(indexName),
      fetchFilterUsage(indexName),
    ]);

    report.indices.push({
      indexName,
      topSearches: topSearches.status === 'fulfilled' ? topSearches.value : null,
      noResults: noResults.status === 'fulfilled' ? noResults.value : null,
      filters: filters.status === 'fulfilled' ? filters.value : null,
      errors: [topSearches, noResults, filters].filter((r) => r.status === 'rejected').map((r) => r.reason?.message),
    });
  }

  printSummary(report.indices);

  const date = new Date().toISOString().split('T')[0];
  const outDir = join(process.cwd(), '.reports');
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, `algolia-analytics-${date}.json`);
  writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`Report saved to ${outPath}`);
}

main().catch((err) => {
  console.error('Fatal:', err.message);
  process.exit(1);
});
