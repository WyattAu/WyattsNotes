#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const universityRoot = path.resolve('docs/docs_university');
const subjects = fs.readdirSync(universityRoot, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

console.log('=== University Docs Build Analysis ===\n');
console.log('Subject             | Files | Lines    | LaTeX $  | \\begin{} | Est. LaTeX density');
console.log('-'.repeat(85));

for (const subject of subjects) {
  const dir = path.join(universityRoot, subject);
  const files = [];

  function walk(d) {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
        files.push(full);
      }
    }
  }

  walk(dir);

  let totalLines = 0;
  let dollarCount = 0;
  let beginCount = 0;

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    totalLines += content.split('\n').length;
    dollarCount += (content.match(/\$/g) || []).length;
    beginCount += (content.match(/\\begin\{/g) || []).length;
  }

  const density = totalLines > 0 ? ((dollarCount / totalLines) * 100).toFixed(1) : '0.0';
  const name = subject.padEnd(19);
  const fileCount = String(files.length).padStart(6);
  const lines = String(totalLines).padEnd(9);
  const dollars = String(dollarCount).padEnd(8);
  const begins = String(beginCount).padEnd(9);

  console.log(`${name} |${fileCount} |${lines}| ${dollars} | ${begins}  | ${density}%`);
}

console.log('-'.repeat(85));
console.log('\nOptimization notes:');
console.log('- maths has no grid tables → can skip remarkGridTable');
console.log('- maths has no @snippet refs → can skip remarkCodeSnippets');
console.log('- KaTeX throwOnError:false prevents slow error handling');
