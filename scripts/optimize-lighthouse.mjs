#!/usr/bin/env node
// Analyze build output for Lighthouse performance issues.
// Usage: node scripts/optimize-lighthouse.mjs

import { existsSync, readdirSync, statSync, readFileSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const BUILD_DIR = join(ROOT, 'build');

const JS_THRESHOLD_KB = 100;
const CSS_RATIO_THRESHOLD = 5;

const recommendations = [];
const largeChunks = [];
const renderBlocking = [];
const cssAnalysis = [];

function fmtKb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function walk(dir, exts) {
  const files = [];
  if (!existsSync(dir)) return files;

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '__server') {
      files.push(...walk(full, exts));
    } else if (entry.isFile() && exts.some((ext) => entry.name.endsWith(ext))) {
      files.push({ path: join(dir, entry.name), size: statSync(full).size, name: entry.name });
    }
  }
  return files;
}

const jsBundles = walk(BUILD_DIR, ['.js']);
const cssBundles = walk(BUILD_DIR, ['.css']);
const htmlFiles = walk(BUILD_DIR, ['.html']);

for (const js of jsBundles) {
  if (js.size > JS_THRESHOLD_KB * 1024) {
    largeChunks.push(js);
  }
}

if (largeChunks.length > 0) {
  largeChunks.sort((a, b) => b.size - a.size);
  recommendations.push(
    `${largeChunks.length} JS chunk(s) exceed ${JS_THRESHOLD_KB} KB — consider code-splitting or lazy loading:\n` +
      largeChunks.map((c) => `  - ${c.name}: ${fmtKb(c.size)}`).join('\n'),
  );
} else {
  recommendations.push(`All JS chunks are under ${JS_THRESHOLD_KB} KB — good.`);
}

for (const html of htmlFiles) {
  const content = readFileSync(html.path, 'utf-8');
  const relPath = html.path.replace(BUILD_DIR, '');

  const scriptNoDefer = content.match(/<script\s[^>]*src="[^"]*"[^>]*(?<!async)(?<!defer)[^>]*>/gi);
  if (scriptNoDefer) {
    for (const s of scriptNoDefer) {
      if (!/async|defer/i.test(s)) {
        renderBlocking.push({ file: relPath, match: s.trim().slice(0, 80) });
      }
    }
  }

  const linkCss = content.match(/<link[^>]*rel=["']stylesheet["'][^>]*>/gi);
  if (linkCss) {
    for (const c of linkCss) {
      if (!/media=["']print["']/i.test(c)) {
        renderBlocking.push({ file: relPath, match: c.trim().slice(0, 80) });
      }
    }
  }
}

if (renderBlocking.length > 0) {
  recommendations.push(
    `${renderBlocking.length} render-blocking resource(s) found:\n` +
      renderBlocking.slice(0, 10).map((r) => `  - ${r.file}: ${r.match}`).join('\n') +
      (renderBlocking.length > 10 ? `\n  ... and ${renderBlocking.length - 10} more` : ''),
  );
} else {
  recommendations.push('No render-blocking scripts or external CSS found — good.');
}

for (const css of cssBundles) {
  cssAnalysis.push({ name: css.name, size: css.size });
}

if (cssAnalysis.length > 0) {
  cssAnalysis.sort((a, b) => b.size - a.size);
  const totalCss = cssBundles.reduce((s, c) => s + c.size, 0);

  recommendations.push(
    `CSS analysis (${fmtKb(totalCss)} total across ${cssBundles.length} files):\n` +
      cssAnalysis.slice(0, 10).map((c) => `  - ${c.name}: ${fmtKb(c.size)}`).join('\n'),
  );

  if (cssAnalysis[0].size > 100 * 1024) {
    recommendations.push(`Largest CSS file (${cssAnalysis[0].name}: ${fmtKb(cssAnalysis[0].size)}) may contain unused rules — consider purging.`);
  }
}

const totalJs = jsBundles.reduce((s, b) => s + b.size, 0);
recommendations.push(`Total JS transfer size: ${fmtKb(totalJs)} across ${jsBundles.length} files.`);

if (totalJs > 500 * 1024) {
  recommendations.push('Total JS exceeds 500 KB — consider tree-shaking unused plugins or lazy-loading heavy components.');
}

console.log('=== Lighthouse Performance Diagnostic ===\n');
for (const rec of recommendations) {
  console.log(rec);
  console.log('');
}

if (!existsSync(BUILD_DIR)) {
  console.error(`Build directory not found: ${BUILD_DIR}`);
  console.error('Run a build first: pnpm build --config <config>');
  process.exit(1);
}
