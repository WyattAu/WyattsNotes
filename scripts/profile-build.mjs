#!/usr/bin/env node
// Profile Docusaurus build and output timing data.
// Usage: node scripts/profile-build.mjs --site <config-file>
// Example: node scripts/profile-build.mjs --site docusaurus.config.ts

import { execSync } from 'child_process';
import { existsSync, mkdirSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

function parseArgs() {
  const args = process.argv.slice(2);
  let config = 'docusaurus.config.ts';

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--site' && args[i + 1]) {
      config = args[++i];
    }
  }

  return { config };
}

function countFiles(dir, exts) {
  if (!existsSync(dir)) return 0;
  let count = 0;

  function walk(d) {
    for (const entry of readdirSync(d, { withFileTypes: true })) {
      const full = join(d, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (exts.some((ext) => entry.name.endsWith(ext))) count++;
    }
  }

  walk(dir);
  return count;
}

function extractWebpackTime(output) {
  const match = output.match(/webpack[^\n]*compiled\s+(?:successfully|with warnings)[^\n]*in\s+([\d.]+)\s*(s|ms|sec)/i);
  if (match) {
    const val = parseFloat(match[1]);
    return match[2] === 'ms' ? val : val * 1000;
  }

  const buildMatch = output.match(/Build (?:complete|finished)[^\n]*?([\d.]+)\s*(s|sec|ms)/i);
  if (buildMatch) {
    const val = parseFloat(buildMatch[1]);
    return buildMatch[2] === 'ms' ? val : val * 1000;
  }

  return null;
}

const { config } = parseArgs();
const configPath = resolve(ROOT, config);

if (!existsSync(configPath)) {
  console.error(`Config file not found: ${configPath}`);
  process.exit(1);
}

const mdxCount = countFiles(join(ROOT, 'docs'), ['.md', '.mdx']);
const blogCount = countFiles(join(ROOT, 'blog_release-notes'), ['.md', '.mdx']);

console.log(`Profiling build with config: ${config}`);
console.log(`MDX/MD files found: ${mdxCount} docs, ${blogCount} blog posts`);
console.log('');

const phases = { bootstrap: 0, mdx: 0, webpack: 0, total: 0 };
let buildOutput = '';

const buildStart = Date.now();

const mdxStart = Date.now();
try {
  const mdxFiles = execSync(
    `find "${join(ROOT, 'docs')}" "${join(ROOT, 'blog_release-notes')}" -name "*.md" -o -name "*.mdx" 2>/dev/null | wc -l`,
    { encoding: 'utf-8', timeout: 10000 },
  );
  phases.mdx = Date.now() - mdxStart;
} catch {
  phases.mdx = Date.now() - mdxStart;
}

const webpackStart = Date.now();
try {
  buildOutput = execSync(
    `NODE_OPTIONS="--max-old-space-size=4096" npx docusaurus build --config ${config}`,
    {
      cwd: ROOT,
      stdio: 'pipe',
      timeout: 600000,
      env: { ...process.env, WEBPACK_PROFILE: '1', NODE_OPTIONS: '--max-old-space-size=4096' },
      maxBuffer: 50 * 1024 * 1024,
    },
  ).toString();
} catch (err) {
  buildOutput = (err.stdout || '').toString() + (err.stderr || '').toString();
}
phases.webpack = Date.now() - webpackStart;
phases.total = Date.now() - buildStart;

const webpackTimeMs = extractWebpackTime(buildOutput);

const results = {
  timestamp: new Date().toISOString(),
  config,
  totalMs: phases.total,
  webpackMs: webpackTimeMs || phases.webpack,
  mdxScanMs: phases.mdx,
  fileCounts: { docs: mdxCount, blog: blogCount },
  webpackTimeFromOutput: webpackTimeMs !== null,
  memoryUsage: process.memoryUsage(),
};

const fmt = (ms) => `${(ms / 1000).toFixed(2)}s`;

console.log('┌──────────────────────────────────────────────────┐');
console.log('│              Build Profile Summary                │');
console.log('├──────────────────┬───────────────────────────────┤');
console.log(`│ Total build time  │ ${fmt(results.totalMs).padEnd(27)}│`);
console.log(`│ Webpack compile   │ ${fmt(results.webpackMs).padEnd(27)}│`);
console.log(`│ MDX file scan     │ ${fmt(results.mdxScanMs).padEnd(27)}│`);
console.log(`│ Docs MDX files    │ ${String(results.fileCounts.docs).padEnd(27)}│`);
console.log(`│ Blog MDX files    │ ${String(results.fileCounts.blog).padEnd(27)}│`);
console.log(`│ Peak RSS          │ ${((results.memoryUsage.rss / 1024 / 1024).toFixed(1) + ' MB').padEnd(27)}│`);
console.log('└──────────────────┴───────────────────────────────┘');

const reportsDir = join(ROOT, '.reports');
if (!existsSync(reportsDir)) mkdirSync(reportsDir, { recursive: true });

const outFile = join(reportsDir, `build-profile-${Date.now()}.json`);
writeFileSync(outFile, JSON.stringify(results, null, 2) + '\n');
console.log(`\nResults saved to ${outFile}`);
