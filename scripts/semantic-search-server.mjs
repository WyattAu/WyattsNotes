#!/usr/bin/env node

import { createServer } from 'node:http';
import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, extname, relative, dirname } from 'node:path';
import { URL } from 'node:url';

const PORT = 3456;
const DEFAULT_SOURCE_DIR = 'docs/docs_ib';
const DEFAULT_OUTPUT = '.reports/embeddings.json';

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { mode: null, query: null, sourceDir: DEFAULT_SOURCE_DIR, output: DEFAULT_OUTPUT, topN: 10, port: PORT };
  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--index': opts.mode = 'index'; break;
      case '--search': opts.mode = 'search'; opts.query = args[++i]; break;
      case '--serve': opts.mode = 'serve'; break;
      case '--source-dir': opts.sourceDir = args[++i]; break;
      case '--output': opts.output = args[++i]; break;
      case '-n': opts.topN = parseInt(args[++i], 10); break;
      case '--port': opts.port = parseInt(args[++i], 10); break;
      case '--help':
        console.log('Usage:\n  --index [--source-dir dir] [--output file]  Build TF-IDF embeddings\n  --search <query> [--output file] [-n N]        Search embeddings\n  --serve [--port N] [--output file]               HTTP API server');
        process.exit(0);
    }
  }
  return opts;
}

function tokenize(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').split(/\s+/).filter(t => t.length > 1 && t.length < 40);
}

function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const meta = {};
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx > 0) meta[line.slice(0, idx).trim().toLowerCase()] = line.slice(idx + 1).trim().replace(/^['"]|['"]$/g, '');
  }
  return meta;
}

function collectMarkdownFiles(dir) {
  const files = [];
  if (!existsSync(dir)) return files;
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...collectMarkdownFiles(full));
    else if (extname(entry.name) === '.md' || extname(entry.name) === '.mdx') files.push(full);
  }
  return files;
}

function buildTFIDF(documents) {
  const corpusTokens = documents.map(d => tokenize(d.content));
  const df = new Map();
  for (const tokens of corpusTokens) {
    const seen = new Set(tokens);
    for (const t of seen) df.set(t, (df.get(t) || 0) + 1);
  }
  const N = corpusTokens.length;
  const idf = new Map();
  for (const [term, freq] of df) idf.set(term, Math.log((N + 1) / (freq + 1)) + 1);
  return { corpusTokens, idf };
}

function vectorize(tokens, idf) {
  const tf = new Map();
  for (const t of tokens) tf.set(t, (tf.get(t) || 0) + 1);
  const vec = new Map();
  let norm = 0;
  for (const [term, count] of tf) {
    const val = count * (idf.get(term) || 0);
    vec.set(term, val);
    norm += val * val;
  }
  norm = Math.sqrt(norm) || 1;
  for (const [term, val] of vec) vec.set(term, val / norm);
  return vec;
}

function cosineSimilarity(a, b) {
  let dot = 0;
  for (const [term, val] of a) {
    if (b.has(term)) dot += val * b.get(term);
  }
  return dot;
}

function indexDirectory(sourceDir, outputPath) {
  console.log(`Indexing: ${sourceDir}`);
  const files = collectMarkdownFiles(sourceDir);
  console.log(`Found ${files.length} markdown files`);
  const documents = files.map(f => {
    const content = readFileSync(f, 'utf-8');
    const meta = extractFrontmatter(content);
    const bodyContent = content.replace(/^---\n[\s\S]*?\n---/, '').replace(/<[^>]+>/g, ' ').replace(/\$[^$]+\$/g, '');
    return {
      slug: meta.slug || relative(sourceDir, f).replace(/\.(md|mdx)$/, ''),
      title: meta.title || relative(sourceDir, f),
      description: (meta.description || '').slice(0, 200),
      category: meta.categories?.[0] || dirname(relative(sourceDir, f)).split('/')[0] || '',
      content: bodyContent,
    };
  });
  const { corpusTokens, idf } = buildTFIDF(documents);
  const embeddings = documents.map((doc, i) => {
    const vec = vectorize(corpusTokens[i], idf);
    const terms = [];
    for (const [t, v] of vec) if (v > 0.05) terms.push({ t, v: Math.round(v * 1000) / 1000 });
    terms.sort((a, b) => b.v - a.v);
    return {
      slug: doc.slug,
      title: doc.title,
      description: doc.description,
      category: doc.category,
      topTerms: terms.slice(0, 30),
      vector: Object.fromEntries([...vec].filter(([, v]) => v > 0.01)),
    };
  });
  const data = { version: 1, generated: new Date().toISOString(), sourceDir, idf: Object.fromEntries(idf), embeddings };
  writeFileSync(outputPath, JSON.stringify(data, null, 2));
  console.log(`Wrote ${embeddings.length} embeddings to ${outputPath}`);
}

function searchEmbeddings(query, indexPath, topN) {
  const data = JSON.parse(readFileSync(indexPath, 'utf-8'));
  const idf = new Map(Object.entries(data.idf).map(([k, v]) => [k, Number(v)]));
  const queryVec = vectorize(tokenize(query), idf);
  const results = data.embeddings.map(e => {
    const docVec = new Map(Object.entries(e.vector).map(([k, v]) => [k, Number(v)]));
    return { ...e, score: cosineSimilarity(queryVec, docVec) };
  }).sort((a, b) => b.score - a.score).slice(0, topN);
  return results;
}

function startServer(outputPath, port) {
  const data = existsSync(outputPath) ? JSON.parse(readFileSync(outputPath, 'utf-8')) : null;
  if (!data) {
    console.error(`No embeddings found at ${outputPath}. Run --index first.`);
    process.exit(1);
  }
  const idf = new Map(Object.entries(data.idf).map(([k, v]) => [k, Number(v)]));
  const server = createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }
    const url = new URL(req.url, `http://localhost:${port}`);
    if (url.pathname === '/search' && url.searchParams.has('q')) {
      const query = url.searchParams.get('q');
      const n = Math.min(50, Math.max(1, parseInt(url.searchParams.get('n') || '10', 10)));
      const category = url.searchParams.get('category') || null;
      const queryVec = vectorize(tokenize(query), idf);
      const startMs = Date.now();
      let results = data.embeddings.map(e => {
        const docVec = new Map(Object.entries(e.vector).map(([k, v]) => [k, Number(v)]));
        return { slug: e.slug, title: e.title, description: e.description, category: e.category, score: cosineSimilarity(queryVec, docVec) };
      }).filter(r => r.score > 0.01);
      if (category) {
        const boosted = results.map(r => ({ ...r, score: r.category === category ? r.score * 1.3 : r.score }));
        boosted.sort((a, b) => b.score - a.score);
        results = boosted;
      } else {
        results.sort((a, b) => b.score - a.score);
      }
      results = results.slice(0, n);
      res.writeHead(200);
      res.end(JSON.stringify({ query, results, total: data.embeddings.length, latency_ms: Date.now() - startMs }, null, 2));
    } else if (url.pathname === '/health') {
      res.writeHead(200);
      res.end(JSON.stringify({ status: 'ok', embeddings: data.embeddings.length, generated: data.generated }));
    } else if (url.pathname === '/') {
      res.writeHead(200);
      res.end(JSON.stringify({ name: 'WyattsNotes Semantic Search', endpoints: ['/search?q=...&n=10&category=...', '/health'], embeddings: data.embeddings.length }));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'Not found' }));
    }
  });
  server.listen(port, () => console.log(`Semantic search API on http://localhost:${port}`));
}

const opts = parseArgs();
if (opts.mode === 'index') indexDirectory(opts.sourceDir, opts.output);
else if (opts.mode === 'search') {
  if (!opts.query) { console.error('Usage: --search "<query>"'); process.exit(1); }
  const results = searchEmbeddings(opts.query, opts.output, opts.topN);
  console.log(`Query: "${opts.query}"\n`);
  for (const r of results) console.log(`  ${(r.score * 100).toFixed(1)}%  ${r.title} (${r.slug})`);
} else if (opts.mode === 'serve') startServer(opts.output, opts.port);
else { console.error('Use --index, --search, or --serve. See --help.'); process.exit(1); }
