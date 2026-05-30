#!/usr/bin/env node

require('dotenv-flow').config();

const { algoliasearch } = require('algoliasearch');

const APP_ID = process.env.ALGOLIA_APP_ID || 'SJ0ASLWZCS';
const WRITE_KEY = process.env.ALGOLIA_WRITE_KEY;

if (!WRITE_KEY) {
  console.error('Error: ALGOLIA_WRITE_KEY environment variable is required');
  process.exit(1);
}

// All sub-sites. CI can pass SITES_FILTER env var to only index specific sites
// (e.g., SITES_FILTER=ib,dse after a push touching docs_ib/ and docs_dse/).
const ALL_SITES = [
  {
    name: 'Main',
    sitemapUrl: 'https://wyattsnotes.wyattau.com/sitemap.xml',
    indexName: 'wyattsnotes_main',
    key: 'main',
    tags: ['infrastructure', 'tools'],
  },
  {
    name: 'IB',
    sitemapUrl: 'https://ib.wyattau.com/sitemap.xml',
    indexName: 'wyattsnotes_ib',
    key: 'ib',
    contentDir: 'docs/docs_ib',
    tags: ['ib', 'diploma', 'hl', 'sl'],
  },
  {
    name: 'DSE',
    sitemapUrl: 'https://dse.wyattau.com/sitemap.xml',
    indexName: 'wyattsnotes_dse',
    key: 'dse',
    contentDir: 'docs/docs_dse',
    tags: ['dse', 'hkdse', 'hong-kong'],
  },
  {
    name: 'A-Level Maths/Physics',
    sitemapUrl: 'https://alevel-maths-physics.wyattau.com/sitemap.xml',
    indexName: 'wyattsnotes_alevel_maths_physics',
    key: 'alevel-maths-physics',
    contentDir: 'docs/docs_alevel',
    tags: ['alevel', 'a-level', 'a-star', 'maths', 'physics', 'further-maths'],
  },
  {
    name: 'A-Level Sciences',
    sitemapUrl: 'https://alevel-sciences.wyattau.com/sitemap.xml',
    indexName: 'wyattsnotes_alevel_sciences',
    key: 'alevel-sciences',
    contentDir: 'docs/docs_alevel',
    tags: ['alevel', 'a-level', 'a-star', 'chemistry', 'biology', 'economics', 'computer-science'],
  },
  {
    name: 'Qualifications',
    sitemapUrl: 'https://qualifications.wyattau.com/sitemap.xml',
    indexName: 'wyattsnotes_qualifications',
    key: 'qualifications',
    tags: ['gcse', 'ap', 'highers', 'irish-lc', 'ilc'],
  },
  {
    name: 'Programming',
    sitemapUrl: 'https://programming.wyattau.com/sitemap.xml',
    indexName: 'wyattsnotes_programming',
    key: 'programming',
    tags: ['programming', 'cpp', 'python', 'rust', 'java', 'typescript', 'go', 'kotlin', 'dart'],
  },
  {
    name: 'University',
    sitemapUrl: 'https://university.wyattau.com/sitemap.xml',
    indexName: 'wyattsnotes_university',
    key: 'university',
    tags: ['university', 'degree', 'undergraduate', 'admissions'],
  },
];

// Determine which sites to index
let SITES = ALL_SITES;
const filter = process.env.SITES_FILTER;
if (filter) {
  const keys = filter.split(',').map((k) => k.trim().toLowerCase());
  SITES = ALL_SITES.filter((s) => keys.includes(s.key));
  console.log(`Filtering to sites: ${SITES.map((s) => s.name).join(', ')}`);
}

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

function extractContent(html, url, siteTags) {
  let body = html.replace(/<script[\s\S]*?<\/script>/gi, '');
  body = body.replace(/<style[\s\S]*?<\/style>/gi, '');
  body = body.replace(/<details[\s\S]*?<\/details>/gi, '');

  const titleMatch = body.match(/<title>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';

  const articleMatch = body.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  const contentHtml = articleMatch ? articleMatch[1] : body;

  // Extract math content from KaTeX elements before stripping HTML
  // KaTeX stores LaTeX source in data-expr or in <annotation> elements
  const mathExpressions = [];
  const katexRegex = /<span[^>]*class="katex[^"]*"[^>]*>(?:[\s\S]*?)<\/span>/gi;
  let katexMatch;
  while ((katexMatch = katexRegex.exec(contentHtml)) !== null) {
    const katexHtml = katexMatch[0];
    // Try data-expr attribute first
    const exprMatch = katexHtml.match(/data-expr="([^"]*)"/);
    if (exprMatch) {
      // Decode HTML entities in the LaTeX source
      const expr = exprMatch[1]
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
      mathExpressions.push(expr);
      continue;
    }
    // Fallback: extract from <annotation> element (KaTeX semantic output)
    const annMatch = katexHtml.match(/<annotation[^>]*>([\s\S]*?)<\/annotation>/i);
    if (annMatch) {
      mathExpressions.push(annMatch[1].trim());
    }
  }

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

  // Append extracted math expressions to content for searchability
  const mathSuffix = mathExpressions.length > 0 ? '\n\n' + mathExpressions.join(' ') : '';

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

  const deepestLvl = Math.max(0, ...Object.keys(hierarchy).map((k) => (hierarchy[k] ? parseInt(k.replace('lvl', ''), 10) : -1)));

  return {
    objectID: url.pathname,
    url: url.href,
    title,
    content: (content + mathSuffix).slice(0, 8000),
    hierarchy,
    _tags: siteTags || [],
    nbHits: 0,
    _score: 0,
    site: siteTags?.[0] || '',
    weight_page: 1,
    weight_level: deepestLvl,
    weight_position: Object.values(hierarchy).filter(Boolean).length > 1 ? 2 : 0,
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
        return extractContent(html, url, site.tags);
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
  const isFullReindex = process.argv.includes('--full');
  if (isFullReindex) {
    console.log('Full reindex mode: clearing all target indices before indexing');
  }

  const client = algoliasearch(APP_ID, WRITE_KEY);

  // Configure index settings (from algolia-index.mjs consolidation)
  for (const site of SITES) {
    try {
      await client.setSettings({
        indexName: site.indexName,
        indexSettings: {
          searchableAttributes: [
            'title',
            'hierarchy.lvl0',
            'hierarchy.lvl1',
            'hierarchy.lvl2',
            'hierarchy.lvl3',
            'hierarchy.lvl4',
            'content',
            '_tags',
          ],
          attributesForFaceting: ['filterOnly(_tags)', 'filterOnly(site)'],
          attributesToHighlight: ['title', 'content'],
          attributesToSnippet: ['content:20'],
          attributesToRetrieve: ['title', 'url', 'content', 'hierarchy', '_tags', 'nbHits', '_score'],
          customRanking: [
            'desc(weight_page)',
            'desc(weight_level)',
            'desc(weight_position)',
            'desc(nbHits)',
          ],
          highlightPreTag: '<mark>',
          highlightPostTag: '</mark>',
          minWordSizefor1Typo: 4,
          minWordSizefor2Typos: 8,
          typoTolerance: true,
          ignorePlurals: true,
          removeStopWords: ['en'],
          exactOnSingleWord: 'attribute',
          alternativesAsExact: ['ignorePlurals', 'singleWordSynonym'],
          clickAnalytics: true,
          enableAnalytics: true,
        },
      });
      console.log(`[${site.name}] Configured index: ${site.indexName}`);
    } catch (err) {
      console.error(`[${site.name}] Failed to configure index: ${err.message}`);
    }
  }

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

// Export for programmatic use (e.g., CI change detection)
module.exports = { ALL_SITES, SITES };

main().catch((err) => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
