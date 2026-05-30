#!/usr/bin/env node

import { createServer } from 'node:http';
import { readFile, readdir } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { URL } from 'node:url';

const PORT = parseInt(process.env.API_PORT || '3100', 10);
const BUILD_DIR = join(process.cwd(), 'build');
const API_KEY = process.env.CONTENT_API_KEY || 'wn_dev_key';
const CORS_ORIGINS = (process.env.CORS_ORIGINS || 'https://wyattsnotes.wyattau.com').split(',');

const SUBJECTS = [
  { slug: 'ib', name: 'IB', description: 'International Baccalaureate Diploma Programme', url: 'https://ib.wyattau.com', topic_count: 0 },
  { slug: 'dse', name: 'DSE', description: 'HKDSE', url: 'https://dse.wyattau.com', topic_count: 0 },
  { slug: 'alevel-maths-physics', name: 'A-Level Maths & Physics', description: 'A-Level Mathematics and Physics', url: 'https://alevel-maths-physics.wyattau.com', topic_count: 0 },
  { slug: 'alevel-sciences', name: 'A-Level Sciences', description: 'A-Level Chemistry, Biology, Economics, CS', url: 'https://alevel-sciences.wyattau.com', topic_count: 0 },
  { slug: 'qualifications', name: 'Qualifications', description: 'GCSE, AP, Highers, Irish LC', url: 'https://qualifications.wyattau.com', topic_count: 0 },
  { slug: 'programming', name: 'Programming', description: 'Languages and paradigms', url: 'https://programming.wyattau.com', topic_count: 0 },
  { slug: 'university', name: 'University', description: 'Undergraduate mathematics, physics, computing', url: 'https://university.wyattau.com', topic_count: 0 },
];

const rateLimitMap = new Map();
function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip) || { count: 0, resetAt: now + 60_000 };
  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + 60_000;
  }
  entry.count++;
  rateLimitMap.set(ip, entry);
  return { remaining: Math.max(0, 100 - entry.count), resetAt: entry.resetAt, limited: entry.count > 100 };
}

function json(data, meta = null, links = null, status = 200) {
  const body = JSON.stringify({ data, meta, links });
  return { status, headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }, body };
}

function paginate(arr, page, perPage) {
  page = Math.max(1, page);
  perPage = Math.min(100, Math.max(1, perPage));
  const total = arr.length;
  const totalPages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  const data = arr.slice(start, start + perPage);
  const links = {
    self: page > 1 ? `?page=${page}` : null,
    next: page < totalPages ? `?page=${page + 1}` : null,
    prev: page > 1 ? `?page=${page - 1}` : null,
  };
  const meta = { total, page, per_page: perPage, total_pages: totalPages };
  return { data, meta, links };
}

async function extractHtmlContent(html) {
  const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : 'Untitled';
  const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  const content = articleMatch ? articleMatch[1] : '';
  const clean = content
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<nav[\s\S]*?<\/nav>/gi, '')
    .trim();
  return { title, html_content: clean };
}

async function scanContentDir(subdir) {
  const dir = join(BUILD_DIR, subdir);
  let entries = [];
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch { return []; }
  const topics = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const subPath = join(dir, entry.name);
      const subEntries = await readdir(subPath, { withFileTypes: true }).catch(() => []);
      const pages = subEntries.filter(e => e.isFile() && extname(e.name) === '.html' && e.name !== 'index.html');
      if (pages.length > 0) {
        topics.push({ slug: entry.name, name: entry.name, content_count: pages.length });
      }
    }
  }
  return topics;
}

const server = createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = parsedUrl.pathname;
  const ip = req.socket.remoteAddress || 'unknown';

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': CORS_ORIGINS.includes(req.headers.origin || '') ? req.headers.origin : CORS_ORIGINS[0],
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'X-API-Key',
    });
    return res.end();
  }

  if (req.headers['x-api-key'] !== API_KEY) {
    const r = json({ code: 'UNAUTHORIZED', message: 'Invalid or missing API key' }, null, null, 401);
    res.writeHead(r.status, r.headers);
    return res.end(r.body);
  }

  const rl = checkRateLimit(ip);
  if (rl.limited) {
    const r = json({ code: 'RATE_LIMITED', message: 'Too many requests' }, null, null, 429);
    res.writeHead(r.status, {
      ...r.headers,
      'X-RateLimit-Limit': '100',
      'X-RateLimit-Remaining': '0',
      'X-RateLimit-Reset': String(rl.resetAt),
    });
    return res.end(r.body);
  }

  const corsOrigin = CORS_ORIGINS.includes(req.headers.origin || '') ? req.headers.origin : CORS_ORIGINS[0];
  const rateHeaders = {
    'X-RateLimit-Limit': '100',
    'X-RateLimit-Remaining': String(rl.remaining),
    'X-RateLimit-Reset': String(rl.resetAt),
    'Access-Control-Allow-Origin': corsOrigin,
  };

  try {
    if (pathname === '/api/v1/subjects' && req.method === 'GET') {
      const page = parseInt(parsedUrl.searchParams.get('page') || '1', 10);
      const perPage = parseInt(parsedUrl.searchParams.get('per_page') || '20', 10);
      const result = paginate(SUBJECTS, page, perPage);
      const r = json(result.data, result.meta, result.links);
      res.writeHead(r.status, { ...r.headers, ...rateHeaders });
      return res.end(r.body);
    }

    const subjectMatch = pathname.match(/^\/api\/v1\/subjects\/([^/]+)\/topics$/);
    if (subjectMatch && req.method === 'GET') {
      const subject = SUBJECTS.find(s => s.slug === subjectMatch[1]);
      if (!subject) {
        const r = json({ code: 'NOT_FOUND', message: 'Subject not found' }, null, null, 404);
        res.writeHead(r.status, { ...r.headers, ...rateHeaders });
        return res.end(r.body);
      }
      const topics = await scanContentDir(subject.slug === 'main' ? '' : subject.slug);
      const page = parseInt(parsedUrl.searchParams.get('page') || '1', 10);
      const perPage = parseInt(parsedUrl.searchParams.get('per_page') || '20', 10);
      const result = paginate(topics, page, perPage);
      const r = json(result.data, result.meta, result.links);
      res.writeHead(r.status, { ...r.headers, ...rateHeaders });
      return res.end(r.body);
    }

    const contentMatch = pathname.match(/^\/api\/v1\/content\/(.+)$/);
    if (contentMatch && req.method === 'GET') {
      const slugPath = contentMatch[1];
      const filePath = join(BUILD_DIR, slugPath + '.html');
      const html = await readFile(filePath, 'utf-8').catch(() => null);
      if (!html) {
        const r = json({ code: 'NOT_FOUND', message: 'Content not found' }, null, null, 404);
        res.writeHead(r.status, { ...r.headers, ...rateHeaders });
        return res.end(r.body);
      }
      const { title, html_content } = await extractHtmlContent(html);
      const subject = slugPath.split('/')[0];
      const topic = slugPath.split('/')[1] || '';
      const baseUrl = SUBJECTS.find(s => s.slug === subject)?.url || 'https://wyattsnotes.wyattau.com';
      const r = json({
        slug: slugPath, title, subject, topic, html_content,
        last_updated: new Date().toISOString(),
        url: `${baseUrl}/docs/${slugPath}`,
      });
      res.writeHead(r.status, { ...r.headers, ...rateHeaders });
      return res.end(r.body);
    }

    if (pathname === '/api/v1/search' && req.method === 'GET') {
      const q = parsedUrl.searchParams.get('q');
      if (!q) {
        const r = json({ code: 'INVALID_QUERY', message: 'Missing query parameter q' }, null, null, 400);
        res.writeHead(r.status, { ...r.headers, ...rateHeaders });
        return res.end(r.body);
      }
      const results = await searchContent(q);
      const page = parseInt(parsedUrl.searchParams.get('page') || '1', 10);
      const perPage = parseInt(parsedUrl.searchParams.get('per_page') || '20', 10);
      const result = paginate(results, page, perPage);
      const r = json(result.data, result.meta, result.links);
      res.writeHead(r.status, { ...r.headers, ...rateHeaders });
      return res.end(r.body);
    }

    const r = json({ code: 'NOT_FOUND', message: 'Endpoint not found' }, null, null, 404);
    res.writeHead(r.status, { ...r.headers, ...rateHeaders });
    return res.end(r.body);
  } catch (err) {
    const r = json({ code: 'INTERNAL_ERROR', message: err.message }, null, null, 500);
    res.writeHead(r.status, { ...r.headers, ...rateHeaders });
    return res.end(r.body);
  }
});

async function searchContent(query) {
  const q = query.toLowerCase();
  const results = [];
  async function walk(dir, prefix = '') {
    let entries = [];
    try { entries = await readdir(dir, { withFileTypes: true }); } catch { return; }
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      const slug = prefix ? `${prefix}/${entry.name.replace(/\.html$/, '')}` : entry.name.replace(/\.html$/, '');
      if (entry.isDirectory()) {
        await walk(fullPath, slug);
      } else if (entry.isFile() && extname(entry.name) === '.html' && entry.name !== 'index.html' && entry.name !== '404.html') {
        const html = await readFile(fullPath, 'utf-8').catch(() => '');
        if (!html) continue;
        const plain = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').toLowerCase();
        if (plain.includes(q)) {
          const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
          const title = titleMatch ? titleMatch[1].trim() : slug;
          const idx = plain.indexOf(q);
          const start = Math.max(0, idx - 80);
          const end = Math.min(plain.length, idx + q.length + 80);
          const snippet = plain.slice(start, end).trim();
          results.push({ slug, title, subject: slug.split('/')[0], snippet, url: `https://wyattsnotes.wyattau.com/docs/${slug}` });
        }
      }
    }
  }
  await walk(BUILD_DIR);
  return results.slice(0, 100);
}

server.listen(PORT, () => {
  console.log(`WyattsNotes Content API listening on port ${PORT}`);
  console.log(`Build directory: ${BUILD_DIR}`);
  console.log(`Endpoints:`);
  console.log(`  GET /api/v1/subjects`);
  console.log(`  GET /api/v1/subjects/:subject/topics`);
  console.log(`  GET /api/v1/content/:slug`);
  console.log(`  GET /api/v1/search?q=...`);
});
