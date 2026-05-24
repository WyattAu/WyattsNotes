#!/usr/bin/env node

/**
 * Performance Baseline Generator
 *
 * Runs vitest with coverage and outputs key metrics to a TOML file.
 * Run after each major change to track regressions.
 *
 * Usage: node scripts/performance-baseline.mjs
 * Output: .baselines/performance-<date>.toml
 */

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.join(__dirname, '..');
const BASELINES_DIR = path.join(PROJECT_ROOT, '.baselines');

// Ensure baselines directory exists
if (!fs.existsSync(BASELINES_DIR)) {
  fs.mkdirSync(BASELINES_DIR, { recursive: true });
}

const date = new Date().toISOString().split('T')[0];
const outputFile = path.join(BASELINES_DIR, `performance-${date}.toml`);

// Run tests with coverage
console.log('Running tests with coverage...');
const startTime = Date.now();

try {
  execSync('npx vitest run --coverage --reporter=json 2>/dev/null', {
    cwd: PROJECT_ROOT,
    env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=8192' },
    timeout: 300000,
    stdio: 'pipe',
  });
} catch (e) {
  console.error('Tests failed:', e.message);
  process.exit(1);
}

const testDuration = ((Date.now() - startTime) / 1000).toFixed(1);
console.log(`Tests completed in ${testDuration}s`);

// Read coverage summary
const coveragePath = path.join(PROJECT_ROOT, 'coverage', 'coverage-summary.json');
let coverage = { total: {} };

if (fs.existsSync(coveragePath)) {
  coverage = JSON.parse(fs.readFileSync(coveragePath, 'utf-8'));
}

const total = coverage.total || {};

// Count test files and tests
let testFiles = 0;
let testCount = 0;

try {
  const jsonOutput = execSync('npx vitest run --reporter=json 2>/dev/null', {
    cwd: PROJECT_ROOT,
    env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=8192' },
    timeout: 300000,
    stdio: 'pipe',
  });
  const result = JSON.parse(jsonOutput.toString());
  testFiles = result.numTotalTestSuites || 0;
  testCount = result.numTotalTests || 0;
} catch {
  // Fallback: count from file system
  const { execSync: es } = await import('node:child_process');
  try {
    const output = es('npx vitest run --reporter=verbose 2>&1 | grep "Tests \\|Test Files"', {
      cwd: PROJECT_ROOT,
      env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=8192' },
      timeout: 300000,
      stdio: 'pipe',
    }).toString();
    const match = output.match(/Tests\s+(\d+)/);
    if (match) testCount = parseInt(match[1]);
    const filesMatch = output.match(/Test Files\s+(\d+)/);
    if (filesMatch) testFiles = parseInt(filesMatch[1]);
  } catch {
    // Ignore
  }
}

// Get git info
let gitSha = 'unknown';
let gitBranch = 'unknown';

try {
  gitSha = execSync('git rev-parse --short HEAD', { cwd: PROJECT_ROOT }).toString().trim();
  gitBranch = execSync('git rev-parse --abbrev-ref HEAD', { cwd: PROJECT_ROOT }).toString().trim();
} catch {
  // Not a git repo
}

// Generate TOML
const toml = `# Performance Baseline
# Generated: ${new Date().toISOString()}
# Git: ${gitBranch} @ ${gitSha}

[metadata]
date = "${date}"
git_sha = "${gitSha}"
git_branch = "${gitBranch}"
node_version = "${process.version}"

[tests]
total = ${testCount}
files = ${testFiles}
duration_seconds = ${testDuration}

[coverage]
lines = ${(total.lines?.pct || 0).toFixed(2)}
statements = ${(total.statements?.pct || 0).toFixed(2)}
functions = ${(total.functions?.pct || 0).toFixed(2)}
branches = ${(total.branches?.pct || 0).toFixed(2)}
`;

fs.writeFileSync(outputFile, toml);
console.log(`\nBaseline written to ${outputFile}`);
console.log(toml);
