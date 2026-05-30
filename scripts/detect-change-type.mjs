#!/usr/bin/env node

import { execSync } from 'node:child_process';

const CONTENT_EXTS = ['.md', '.mdx'];
const CODE_EXTS = ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'];
const CONFIG_FILES = [
  'docusaurus.config.ts',
  'docusaurus.main.config.ts',
  'docusaurus.ib.config.ts',
  'docusaurus.dse.config.ts',
  'docusaurus.alevel.config.ts',
  'docusaurus.qualifications.config.ts',
  'docusaurus.programming.config.ts',
  'docusaurus.university.config.ts',
  'docusaurus.academics.config.ts',
  'tsconfig.json',
  'eslint.config.ts',
  'tailwind.config.ts',
  'postcss.config.js',
  'webpack.config.js',
];
const DEPENDENCY_FILES = ['package.json', 'pnpm-lock.yaml'];

function classifyFile(file) {
  const base = file.replace(/^.*\//, '');
  if (DEPENDENCY_FILES.includes(base) || base === 'package.json') return 'dependency';
  if (CONFIG_FILES.some((c) => file.endsWith(c))) return 'config';
  if (CODE_EXTS.some((e) => file.endsWith(e))) return 'code';
  if (CONTENT_EXTS.some((e) => file.endsWith(e))) return 'content';
  if (file.startsWith('static/') || file.startsWith('src/')) return 'code';
  return 'content';
}

function getChangedFiles() {
  const event = process.env.GITHUB_EVENT_NAME;
  const base = process.env.GITHUB_EVENT_NAME === 'pull_request' ? process.env.GITHUB_BASE_REF : 'HEAD~1';

  try {
    const target = base === 'HEAD~1' ? 'HEAD~1 HEAD' : `${base}...HEAD`;
    return execSync(`git diff --name-only ${target}`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] })
      .trim()
      .split('\n')
      .filter(Boolean);
  } catch {
    return [];
  }
}

function main() {
  const files = getChangedFiles();

  if (files.length === 0) {
    console.log('change-type=none');
    return;
  }

  const types = new Set(files.map(classifyFile));

  if (types.has('dependency')) console.log('change-type=dependency');
  else if (types.has('code') || types.has('config')) console.log('change-type=code');
  else console.log('change-type=content');
}

main();
