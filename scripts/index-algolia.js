#!/usr/bin/env node

require('dotenv-flow').config();

const { algoliasearch } = require('algoliasearch');

const APP_ID = process.env.ALGOLIA_APP_ID || 'SJ0ASLWZCS';
const WRITE_KEY = process.env.ALGOLIA_WRITE_KEY;

if (!WRITE_KEY) {
  console.error('Error: ALGOLIA_WRITE_KEY environment variable is required');
  process.exit(1);
}

const SITES = [
  {
    name: 'IB',
    sitemapUrl: 'https://ib.wyattau.com/sitemap.xml',
    indexName: 'wyattsnotes_ib',
  },
  {
    name: 'DSE',
    sitemapUrl: 'https://dse.wyattau.com/sitemap.xml',
    indexName: 'wyattsnotes_dse',
  },
  {
    name: 'A-Level Maths/Physics',
    sitemapUrl: 'https://alevel-maths-physics.wyattau.com/sitemap.xml',
    indexName: 'wyattsnotes_alevel_maths_physics',
  },
  {
    name: 'A-Level Sciences',
    sitemapUrl: 'https://alevel-sciences.wyattau.com/sitemap.xml',
    indexName: 'wyattsnotes_alevel_sciences',
  },
];

const EXCLUDED_PATHS = ['/blog/', '/tags/', '/search', '/404', '/privacy'];

function isContentUrl(url) {
  return !EXCLUDED_PATHS.some((p) => url.pathname.includes(p));
}

async function fetchSitemap(sitemapUrl) {
  const response = await fetch(sitemapUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap: ${sitemapUrl} (${response.status})`);
  }
  const text = await response.text();
  const locRegex = /<loc>(.*?)<\/loc>/g;
  const urls = [];
  let match;
  while ((match = locRegex.exec(text)) !== null) {
    try {
      const parsed = new URL(match[1]);
      if (isContentUrl(parsed)) {
        urls.push(parsed);
      }
    } catch {
      // skip invalid URLs
    }
  }
  return urls;
}

function extractContent(html, url) {
  let body = html.replace(/<script[\s\S]*?<\/script>/gi, '');
  body = body.replace(/<style[\s\S]*?<\/style>/gi, '');
  body = body.replace(/<details[\s\S]*?<\/details>/gi, '');

  const titleMatch = body.match(/<title>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';

  const articleMatch = body.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  const contentHtml = articleMatch ? articleMatch[1] : body;

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

  const hierarchy = { lvl0: '', lvl1: '', lvl2: '', lvl3: '', lvl4: '' };
  const headingRegex = /<h([1-5])[^>]*>([\s\S]*?)<\/h\1>/gi;
  let hMatch;
  let currentLvl = -1;
  while ((hMatch = headingRegex.exec(contentHtml)) !== null) {
    const lvl = parseInt(hMatch[1], 10) - 1;
    const text = hMatch[2]
      .replace(/<[^>]+>/g, '')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, ' ')
      .trim();
    if (lvl <= 4) {
      hierarchy[`lvl${lvl}`] = text;
      currentLvl = lvl;
    }
    for (let i = currentLvl + 1; i <= 4; i++) {
      hierarchy[`lvl${i}`] = '';
    }
  }

  return {
    objectID: url.pathname,
    url: url.href,
    title,
    content: content.slice(0, 8000),
    hierarchy,
  };
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function indexSite(client, site) {
  console.log(`\n[${site.name}] Fetching sitemap from ${site.sitemapUrl}`);
  const urls = await fetchSitemap(site.sitemapUrl);
  console.log(`[${site.name}] Found ${urls.length} content pages`);

  let totalIndexed = 0;

  for (let i = 0; i < urls.length; i += 10) {
    const batch = urls.slice(i, i + 10);
    const results = await Promise.allSettled(
      batch.map(async (url) => {
        const response = await fetch(url.href);
        if (!response.ok) return null;
        const html = await response.text();
        return extractContent(html, url);
      }),
    );

    const records = [];
    for (const result of results) {
      if (result.status === 'fulfilled' && result.value) {
        records.push(result.value);
      }
    }

    if (records.length > 0) {
      await client.saveObjects({ indexName: site.indexName, objects: records });
    }
    totalIndexed += records.length;
    console.log(
      `[${site.name}] Indexed ${totalIndexed} records for ${site.name} (${Math.min(i + 10, urls.length)}/${urls.length} pages processed)`,
    );

    if (i + 10 < urls.length) {
      await sleep(500);
    }
  }

  return totalIndexed;
}

async function main() {
  const client = algoliasearch(APP_ID, WRITE_KEY);

  const results = {};
  let grandTotal = 0;

  for (const site of SITES) {
    try {
      const count = await indexSite(client, site);
      results[site.name] = count;
      grandTotal += count;
    } catch (err) {
      console.error(`[${site.name}] Error: ${err.message}`);
      results[site.name] = 0;
    }
  }

  console.log('\n===== Summary =====');
  for (const site of SITES) {
    console.log(`  ${site.name}: ${results[site.name]} records`);
  }
  console.log(`  Total: ${grandTotal} records`);
}

main().catch((err) => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
