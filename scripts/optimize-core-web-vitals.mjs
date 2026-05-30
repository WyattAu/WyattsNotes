#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const DOCS_DIR = path.join(ROOT, 'docs');

const IMG_MD_RE = /!\[[^\]]*\]\(([^)]+)\)\s*(?:\{[^}]*\})?/g;
const IMG_HTML_RE = /<img\s[^>]*src="([^"]+)"[^>]*>/gi;
const DIMENSION_RE = /(?:width|height)\s*=\s*["']?\d+["']?/i;
const RASTER_EXTS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp']);
const CONVERTIBLE_EXTS = new Set(['.png', '.jpg', '.jpeg']);

const missingDimensions = [];
const webpCandidates = [];

function scanMarkdown(filePath, content) {
  const shortPath = path.relative(ROOT, filePath);
  const lines = content.split('\n');

  for (const mdMatch of content.matchAll(IMG_MD_RE)) {
    const src = mdMatch[1].split(/[?#]/)[0];
    const lineIdx = lines.findIndex((l) => l.includes(mdMatch[0]));
    if (!src || !RASTER_EXTS.has(path.extname(src).toLowerCase())) continue;

    const precedingContext = mdMatch[0];
    if (!DIMENSION_RE.test(precedingContext)) {
      missingDimensions.push({ file: shortPath, line: lineIdx + 1, src });
    }
    if (CONVERTIBLE_EXTS.has(path.extname(src).toLowerCase())) {
      webpCandidates.push({ file: shortPath, line: lineIdx + 1, src });
    }
  }

  for (const htmlMatch of content.matchAll(IMG_HTML_RE)) {
    const tag = htmlMatch[0];
    const src = tag.match(/src="([^"]+)"/)?.[1]?.split(/[?#]/)[0];
    const lineIdx = lines.findIndex((l) => l.includes(tag));
    if (!src || !RASTER_EXTS.has(path.extname(src).toLowerCase())) continue;

    if (!DIMENSION_RE.test(tag)) {
      missingDimensions.push({ file: shortPath, line: lineIdx + 1, src });
    }
    if (CONVERTIBLE_EXTS.has(path.extname(src).toLowerCase())) {
      webpCandidates.push({ file: shortPath, line: lineIdx + 1, src });
    }
  }
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(full);
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      scanMarkdown(full, fs.readFileSync(full, 'utf-8'));
    }
  }
}

walkDir(DOCS_DIR);

console.log('=== Core Web Vitals: CLS Image Audit ===\n');

if (missingDimensions.length === 0) {
  console.log('All raster images have explicit dimensions.');
} else {
  console.log(`Found ${missingDimensions.length} images missing width/height (CLS risk):\n`);
  for (const { file, line, src } of missingDimensions.slice(0, 50)) {
    console.log(`  ${file}:${line}  ${src}`);
  }
  if (missingDimensions.length > 50) {
    console.log(`  ... and ${missingDimensions.length - 50} more`);
  }
}

console.log(`\n=== WebP Conversion Candidates ===\n`);

if (webpCandidates.length === 0) {
  console.log('No raster images found that would benefit from WebP.');
} else {
  console.log(`Found ${webpCandidates.length} PNG/JPG images that should use WebP:\n`);
  const seen = new Set();
  for (const { file, line, src } of webpCandidates.slice(0, 50)) {
    const key = src;
    if (seen.has(key)) continue;
    seen.add(key);
    console.log(`  ${file}:${line}  ${src}`);
  }
  if (webpCandidates.length > 50) {
    console.log(`  ... and ${webpCandidates.length - 50} more`);
  }
}

console.log(`\n=== Summary ===`);
console.log(`  Missing dimensions: ${missingDimensions.length}`);
console.log(`  WebP candidates:    ${webpCandidates.length}`);
