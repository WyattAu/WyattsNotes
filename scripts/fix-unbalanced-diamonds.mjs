#!/usr/bin/env node
/**
 * Fix unbalanced diamond placeholders (◆LB◆/◆RB◆) in math regions.
 * 
 * Strategy: For each math region ($$...$$ or $...$), track diamond brace depth.
 * If depth > 0 at end: insert missing ◆RB◆ before closing delimiter.
 * If depth < 0 at end: insert missing ◆LB◆ after opening delimiter.
 * 
 * Uses character-by-character parsing to correctly handle $$ vs $.
 */

import fs from 'fs';
import path from 'path';

const LB = '\u25c6LB\u25c6';
const RB = '\u25c6RB\u25c6';

function walk(dir) {
  const files = [];
  for (const f of fs.readdirSync(dir)) {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) walk(fp).forEach(x => files.push(x));
    else if (/\.(md|mdx)$/.test(f)) files.push(fp);
  }
  return files;
}

function fixFile(filePath) {
  const c = fs.readFileSync(filePath, 'utf8');
  const result = [];
  let i = 0;
  let fileFixes = 0;

  while (i < c.length) {
    // Check for $$ (display math) - must check before $
    if (c[i] === '$' && i + 1 < c.length && c[i + 1] === '$') {
      const regionStart = i;
      i += 2; // skip opening $$
      
      // Find closing $$
      let depth = 0;
      const contentStart = i;
      while (i < c.length && !(c[i] === '$' && i + 1 < c.length && c[i + 1] === '$')) {
        if (c.slice(i, i + 5) === LB) { depth++; i += 5; }
        else if (c.slice(i, i + 5) === RB) { depth--; i += 5; }
        else { i++; }
      }
      
      if (i < c.length) {
        const content = c.slice(contentStart, i);
        if (depth > 0) {
          result.push('$$');
          result.push(content);
          result.push(RB.repeat(depth));
          result.push('$$');
          fileFixes += depth;
        } else if (depth < 0) {
          result.push('$$');
          result.push(LB.repeat(-depth));
          result.push(content);
          result.push('$$');
          fileFixes += -depth;
        } else {
          result.push(c.slice(regionStart, i + 2));
        }
        i += 2; // skip closing $$
      } else {
        result.push(c.slice(regionStart));
        break;
      }
    } else if (c[i] === '$') {
      // Inline math
      const regionStart = i;
      i++; // skip opening $
      
      let depth = 0;
      const contentStart = i;
      while (i < c.length && c[i] !== '$') {
        if (c.slice(i, i + 5) === LB) { depth++; i += 5; }
        else if (c.slice(i, i + 5) === RB) { depth--; i += 5; }
        else { i++; }
      }
      
      if (i < c.length) {
        const content = c.slice(contentStart, i);
        if (depth > 0) {
          result.push('$');
          result.push(content);
          result.push(RB.repeat(depth));
          result.push('$');
          fileFixes += depth;
        } else if (depth < 0) {
          result.push('$');
          result.push(LB.repeat(-depth));
          result.push(content);
          result.push('$');
          fileFixes += -depth;
        } else {
          result.push(c.slice(regionStart, i + 1));
        }
        i++; // skip closing $
      } else {
        result.push(c.slice(regionStart));
        break;
      }
    } else {
      result.push(c[i]);
      i++;
    }
  }

  if (fileFixes > 0) {
    fs.writeFileSync(filePath, result.join(''));
  }
  return fileFixes;
}

// Process all university files
const files = walk('docs/docs_university');
let totalFixed = 0;
let totalFiles = 0;

// Run multiple passes until no more fixes needed
for (let pass = 0; pass < 5; pass++) {
  let passFixed = 0;
  for (const f of files) {
    const fixes = fixFile(f);
    if (fixes > 0) {
      passFixed += fixes;
      if (pass === 0) {
        console.log(`  ${f.replace('docs/docs_university/', '')}: +${fixes}`);
      }
    }
  }
  totalFixed += passFixed;
  if (passFixed === 0) {
    console.log(`Pass ${pass + 1}: no more fixes needed`);
    break;
  }
  console.log(`Pass ${pass + 1}: ${passFixed} fixes`);
}

// Verify
let unbalanced = 0;
for (const f of files) {
  const c = fs.readFileSync(f, 'utf8');
  const lb = (c.match(/\u25c6LB\u25c6/g) || []).length;
  const rb = (c.match(/\u25c6RB\u25c6/g) || []).length;
  if (lb !== rb) {
    unbalanced++;
    console.log(`STILL UNBALANCED: ${f.replace('docs/docs_university/', '')}: LB=${lb} RB=${rb} diff=${lb - rb}`);
  }
}

console.log(`\nTotal fixes: ${totalFixed}`);
console.log(`Remaining unbalanced files: ${unbalanced}/${files.length}`);
