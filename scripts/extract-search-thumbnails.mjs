#!/usr/bin/env node

import { readFile, readdir, stat } from 'node:fs/promises';
import { join, relative, basename, extname } from 'node:path';

const SITE_URL = 'https://wyattsnotes.wyattau.com';
const DOCS_DIR = new URL('../docs', import.meta.url);
const STATIC_IMG_DIR = new URL('../static/img', import.meta.url);

const IMAGE_RE = /!\[([^\]]*)\]\(([^)]+)\)/;
const SUPPORTED_EXT = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']);

async function walkDir(dir, base = dir) {
  const entries = [];
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const d of dirents) {
    const full = join(dir, d.name);
    if (d.isDirectory()) {
      entries.push(...(await walkDir(full, base)));
    } else if (d.isFile() && (extname(d.name) === '.md' || extname(d.name) === '.mdx')) {
      entries.push({ path: full, rel: relative(base, full) });
    }
  }
  return entries;
}

function slugFromPath(relPath) {
  const stripped = relPath.replace(/\.(md|mdx)$/, '');
  return '/' + stripped.replace(/\\/g, '/');
}

function resolveImageUrl(src, mdRelDir) {
  if (src.startsWith('http://') || src.startsWith('https://')) return src;
  if (src.startsWith('/')) {
    const clean = src.replace(/^\/img\//, 'img/');
    if (clean.startsWith('img/')) return `${SITE_URL}/${clean}`;
    return `${SITE_URL}${src}`;
  }
  const resolved = join(mdRelDir, src).replace(/\\/g, '/');
  if (resolved.startsWith('img/') || resolved.startsWith('static/img/')) {
    const clean = resolved.replace(/^static\//, '');
    return `${SITE_URL}/${clean}`;
  }
  return `${SITE_URL}/${resolved}`;
}

async function extractFirstImage(filePath, relDir) {
  const content = await readFile(filePath, 'utf-8');
  const match = content.match(IMAGE_RE);
  if (!match) return null;
  const alt = match[1];
  const src = match[2].split(/[ \t]/)[0];
  const url = resolveImageUrl(src, relDir);
  return { alt, src, url };
}

async function main() {
  const files = await walkDir(DOCS_DIR);
  const mapping = {};
  let scanned = 0;
  let withImages = 0;

  for (const { path: fp, rel } of files) {
    scanned++;
    const slug = slugFromPath(rel);
    const relDir = join('docs', rel).replace(/\\/g, '/').substring(0, rel.lastIndexOf('/'));
    const image = await extractFirstImage(fp, relDir);
    if (image) {
      mapping[slug] = { image_url: image.url, alt: image.alt };
      withImages++;
    }
  }

  const output = { meta: { generated: new Date().toISOString(), scanned, with_images: withImages }, thumbnails: mapping };
  process.stdout.write(JSON.stringify(output, null, 2) + '\n');
}

main().catch((err) => {
  console.error('Fatal:', err.message);
  process.exit(1);
});
