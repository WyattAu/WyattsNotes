#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const IMG_DIR = path.join(ROOT, 'static/img');
const SIZE_THRESHOLD = 100 * 1024;

const RASTER_EXTS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.avif']);
const CONVERTIBLE_EXTS = new Set(['.png', '.jpg', '.jpeg']);
const SVG_EXTS = new Set(['.svg']);

const images = [];
const oversized = [];
const webpCandidates = [];
let svgCount = 0;
let totalBytes = 0;

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(full);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      const stat = fs.statSync(full);
      const rel = path.relative(ROOT, full);

      if (RASTER_EXTS.has(ext)) {
        images.push({ path: rel, size: stat.size, ext });
        totalBytes += stat.size;
        if (stat.size > SIZE_THRESHOLD) {
          oversized.push({ path: rel, size: stat.size, ext });
        }
        if (CONVERTIBLE_EXTS.has(ext)) {
          webpCandidates.push({ path: rel, size: stat.size, ext });
        }
      } else if (SVG_EXTS.has(ext)) {
        svgCount++;
        totalBytes += stat.size;
      }
    }
  }
}

walkDir(IMG_DIR);

console.log('=== Image Optimization Report ===\n');
console.log(`Scanned: static/img/`);
console.log(`  Total raster images: ${images.length}`);
console.log(`  SVG images:          ${svgCount}`);
console.log(`  Total size:          ${formatBytes(totalBytes)}\n`);

if (oversized.length === 0) {
  console.log('No images exceed 100 KB threshold.');
} else {
  console.log(`=== Images Over 100 KB (${oversized.length}) ===\n`);
  for (const img of oversized.sort((a, b) => b.size - a.size)) {
    console.log(`  ${formatBytes(img.size).padStart(10)}  ${img.path}`);
  }
  console.log('');
}

if (webpCandidates.length === 0) {
  console.log('All raster images already use WebP or AVIF.');
} else {
  const webpTotal = webpCandidates.reduce((s, i) => s + i.size, 0);
  console.log(`=== WebP Conversion Candidates (${webpCandidates.length}) ===`);
  console.log(`  Current combined size: ${formatBytes(webpTotal)}`);
  console.log(`  Estimated WebP savings: ~${formatBytes(Math.round(webpTotal * 0.3))}\n`);

  for (const img of webpCandidates.sort((a, b) => b.size - a.size)) {
    const pct = Math.round(img.size / 1024);
    console.log(`  ${formatBytes(img.size).padStart(10)}  ${img.path}`);
  }
  console.log('');
}

const pngCount = images.filter((i) => i.ext === '.png').length;
const jpgCount = images.filter((i) => ['.jpg', '.jpeg'].includes(i.ext)).length;
const webpCount = images.filter((i) => i.ext === '.webp').length;

console.log('=== Format Breakdown ===');
console.log(`  PNG:  ${pngCount}`);
console.log(`  JPG:  ${jpgCount}`);
console.log(`  WebP: ${webpCount}`);
console.log(`  GIF:  ${images.filter((i) => i.ext === '.gif').length}`);
console.log(`  SVG:  ${svgCount}`);
console.log(`\n=== Summary ===`);
console.log(`  Images over 100 KB: ${oversized.length}`);
console.log(`  WebP candidates:     ${webpCandidates.length}`);
console.log(`  Estimated savings:  ~${formatBytes(Math.round(webpCandidates.reduce((s, i) => s + i.size, 0) * 0.3))}`);
