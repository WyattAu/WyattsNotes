#!/usr/bin/env node
/**
 * Algolia Indexer for Wyatt's Notes
 *
 * Crawls each deployed sub-site, extracts page content from the HTML,
 * and pushes records to the corresponding Algolia index.
 *
 * Usage: ALGOLIA_WRITE_KEY=<key> node scripts/algolia-index.mjs
 *
 * Environment variables:
 *   ALGOLIA_WRITE_KEY  - Algolia API key with write access
 *   ALGOLIA_APP_ID     - Algolia application ID (default: SJ0ASLWZCS)
 */

import { algoliasearch } from 'algoliasearch';

const APP_ID = process.env.ALGOLIA_APP_ID || 'SJ0ASLWZCS';
const WRITE_KEY = process.env.ALGOLIA_WRITE_KEY;

if (!WRITE_KEY) {
  console.error('Error: ALGOLIA_WRITE_KEY environment variable is required');
  process.exit(1);
}

const SITES = [
  { name: 'main', url: 'https://wyattsnotes.wyattau.com', indexName: 'wyattsnotes_main' },
  { name: 'academics', url: 'https://academics.wyattau.com', indexName: 'wyattsnotes_academics' },
  { name: 'alevel', url: 'https://alevel.wyattau.com', indexName: 'wyattsnotes_alevel' },
  { name: 'qualifications', url: 'https://qualifications.wyattau.com', indexName: 'wyattsnotes_qualifications' },
  { name: 'programming', url: 'https://programming.wyattau.com', indexName: 'wyattsnotes_programming' },
  { name: 'university', url: 'https://university.wyattau.com', indexName: 'wyattsnotes_university' },
];

/**
 * Fetch the sitemap for a site and extract page URLs.
 */
async function getSitemapUrls(baseUrl) {
  const sitemapUrl = `${baseUrl}/sitemap.xml`;
  const response = await fetch(sitemapUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap: ${sitemapUrl} (${response.status})`);
  }

  const text = await response.text();
  const urls = [];
  const locRegex = /<loc>(.*?)<\/loc>/g;
  let match;

  while ((match = locRegex.exec(text)) !== null) {
    const url = match[1];
    // Skip non-content pages (404, search, tags, etc.)
    if (url.includes('/404') || url.includes('/search') || url.includes('/tags')) {
      continue;
    }
    urls.push(url);
  }

  return urls;
}

/**
 * Extract structured content from an HTML page.
 */
function extractContent(html, url) {
  // Remove script and style tags
  let body = html.replace(/<script[\s\S]*?<\/script>/gi, '');
  body = body.replace(/<style[\s\S]*?<\/style>/gi, '');
  body = body.replace(/<details[\s\S]*?<\/details>/gi, '');

  // Extract title
  const titleMatch = body.match(/<title>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';

  // Extract main content area (Docusaurus uses <article>)
  const articleMatch = body.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  const contentHtml = articleMatch ? articleMatch[1] : body;

  // Strip HTML tags but preserve text
  const content = contentHtml
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Extract breadcrumb / section hierarchy from nav
  const breadcrumbs = [];
  const navRegex = /<nav[^>]*class="[^"]*breadcrumb[^"]*"[^>]*>([\s\S]*?)<\/nav>/i;
  const navMatch = body.match(navRegex);
  if (navMatch) {
    const linkRegex = /<a[^>]*>(.*?)<\/a>/g;
    let linkMatch;
    while ((linkMatch = linkRegex.exec(navMatch[1])) !== null) {
      const text = linkMatch[1].replace(/<[^>]+>/g, '').trim();
      if (text) breadcrumbs.push(text);
    }
  }

  // Determine section from URL path
  const urlObj = new URL(url);
  const pathParts = urlObj.pathname.split('/').filter(Boolean);

  return {
    title,
    url,
    content: content.slice(0, 8000), // Algolia limit
    section: breadcrumbs.length > 0 ? breadcrumbs.join(' > ') : pathParts.slice(0, 3).join(' > '),
    hierarchy: {
      lvl0: breadcrumbs[0] || pathParts[0] || '',
      lvl1: breadcrumbs[1] || pathParts[1] || '',
      lvl2: breadcrumbs[2] || pathParts[2] || '',
      lvl3: breadcrumbs[3] || '',
    },
  };
}

/**
 * Index a single site to Algolia.
 */
async function indexSite(client, site) {
  console.log(`\n[${site.name}] Fetching sitemap from ${site.url}/sitemap.xml`);
  const urls = await getSitemapUrls(site.url);
  console.log(`[${site.name}] Found ${urls.length} pages to index`);

  const index = client.initIndex(site.indexName);
  const records = [];
  const batchSize = 50;

  for (let i = 0; i < urls.length; i += 5) {
    // Fetch 5 pages concurrently
    const batch = urls.slice(i, i + 5);
    const results = await Promise.allSettled(
      batch.map(async (url) => {
        const response = await fetch(url);
        if (!response.ok) return null;
        const html = await response.text();
        const content = extractContent(html, url);
        return {
          objectID: Buffer.from(url).toString('base64url'),
          ...content,
        };
      }),
    );

    for (const result of results) {
      if (result.status === 'fulfilled' && result.value) {
        records.push(result.value);
      }
    }

    process.stdout.write(`\r[${site.name}] Processed ${Math.min(i + 5, urls.length)}/${urls.length} pages`);
  }

  console.log(`\r[${site.name}] Processed ${records.length}/${urls.length} pages`);

  // Push to Algolia in batches
  for (let i = 0; i < records.length; i += batchSize) {
    const batch = records.slice(i, i + batchSize);
    await index.saveObjects(batch);
    process.stdout.write(`\r[${site.name}] Indexed ${Math.min(i + batchSize, records.length)}/${records.length} records`);
  }

  console.log(`\r[${site.name}] Indexed ${records.length} records to ${site.indexName}`);
  return records.length;
}

async function main() {
  const client = algoliasearch(APP_ID, WRITE_KEY);

  // Configure indices
  for (const site of SITES) {
    const index = client.initIndex(site.indexName);
    await index.setSettings({
      searchableAttributes: ['title', 'section', 'content', 'hierarchy.lvl0', 'hierarchy.lvl1'],
      attributesToHighlight: ['title', 'content'],
      attributesToSnippet: ['content:20'],
      attributesToRetrieve: ['title', 'url', 'section', 'hierarchy'],
      ranking: ['words', 'typo', 'attribute', 'proximity', 'exact', 'custom'],
      customRanking: ['desc(weight.page_rank)', 'desc(weight.position)'],
    });
    console.log(`Configured index: ${site.indexName}`);
  }

  // Index each site
  let totalRecords = 0;
  for (const site of SITES) {
    try {
      const count = await indexSite(client, site);
      totalRecords += count;
    } catch (err) {
      console.error(`\n[${site.name}] Error: ${err.message}`);
    }
  }

  console.log(`\nDone. Total records indexed: ${totalRecords}`);
}

main().catch((err) => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
