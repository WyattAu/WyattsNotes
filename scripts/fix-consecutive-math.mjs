#!/usr/bin/env node
/**
 * Fix consecutive inline math expressions that get merged into block math by KaTeX.
 *
 * Problem: $expr1$$expr2$ is parsed by KaTeX as a single block math expression,
 * causing "Can't use function '$' in math mode" errors.
 *
 * Solution: Insert ", " between consecutive $...$ expressions.
 *
 * Uses a state-machine parser to correctly distinguish:
 * - Display math: $$...$$ (preserved)
 * - Consecutive inline: $a$$b$ (fixed to $a$, $b$)
 * - Normal inline: $a$ text $b$ (preserved)
 *
 * Usage:
 *   node scripts/fix-consecutive-math.mjs <file-or-directory> [--dry-run]
 */

import fs from 'fs';
import path from 'path';

const DRY_RUN = process.argv.includes('--dry-run');

/**
 * State-machine parser for math delimiters.
 *
 * States:
 *   TEXT     - outside any math
 *   INLINE   - inside $...$
 *   DISPLAY  - inside $$...$$
 *
 * Transitions:
 *   TEXT + $  -> check next char:
 *     if $ -> DISPLAY (display math $$)
 *     else -> INLINE (inline math $)
 *   INLINE + $ -> TEXT (end inline math)
 *     but check: if next char is $ and prev char before the opening $ was
 *     non-whitespace -> this is consecutive inline, insert separator
 *   DISPLAY + $ -> check next char:
 *     if $ -> TEXT (end display math $$)
 *     else -> stay in DISPLAY (escaped $ inside display math)
 */
function fixConsecutiveMath(content) {
  let fixes = 0;
  const result = [];
  let i = 0;
  let state = 'TEXT'; // TEXT | INLINE | DISPLAY

  while (i < content.length) {
    if (content[i] === '$') {
      if (state === 'TEXT') {
        // Opening $
        if (i + 1 < content.length && content[i + 1] === '$') {
          // Display math $$
          result.push('$$');
          i += 2;
          state = 'DISPLAY';
        } else {
          // Inline math $
          result.push('$');
          i += 1;
          state = 'INLINE';
        }
      } else if (state === 'INLINE') {
        if (i + 1 < content.length && content[i + 1] === '$') {
          // $...$$ detected. The $$ could be:
          // 1. Consecutive inline: $a$$b$   → fix to $a$, $b$
          // 2. Display math:       $a$$\frac{b}{c}$$  → leave alone
          //
          // Heuristic: look for closing $$ in the rest of the line,
          // skipping the first 2 chars (the $$ itself).
          const lineEnd = content.indexOf('\n', i + 2);
          const restOfLine = lineEnd === -1
            ? content.substring(i + 2)
            : content.substring(i + 2, lineEnd);
          const displayClose = restOfLine.indexOf('$$', 2);

          if (displayClose !== -1 && displayClose > 5) {
            // Likely display math: $expr$$content$$
            // Output $$ (the closing $ of inline + opening $$ of display)
            // and enter DISPLAY state
            result.push('$$');
            i += 2;
            state = 'DISPLAY';
          } else if (displayClose === -1) {
            // No closing $$ → consecutive inline
            result.push('$, ');
            fixes++;
            i += 1;
            state = 'TEXT';
          } else {
            // Short content between $$ (<=5) → consecutive inline
            result.push('$, ');
            fixes++;
            i += 1;
            state = 'TEXT';
          }
        } else {
          result.push('$');
          i += 1;
          state = 'TEXT';
        }
      } else if (state === 'DISPLAY') {
        // Inside display math, look for closing $$
        if (i + 1 < content.length && content[i + 1] === '$') {
          // Closing $$
          result.push('$$');
          i += 2;
          state = 'TEXT';
        } else {
          // Single $ inside display math - keep as-is
          result.push('$');
          i += 1;
        }
      }
    } else {
      result.push(content[i]);
      i += 1;
    }
  }

  return { content: result.join(''), fixes };
}

function processFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { content, fixes } = fixConsecutiveMath(raw);

  if (fixes > 0) {
    if (DRY_RUN) {
      console.log(`  [DRY-RUN] ${filePath}: ${fixes} fixes would be applied`);
    } else {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  [FIXED] ${filePath}: ${fixes} fixes`);
    }
    return fixes;
  }
  return 0;
}

function processDirectory(dirPath) {
  let totalFixes = 0;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      totalFixes += processDirectory(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
      totalFixes += processFile(fullPath);
    }
  }

  return totalFixes;
}

// Main
const nonFlagArgs = process.argv.slice(2).filter(a => !a.startsWith('--'));
const target = nonFlagArgs[0];
if (!target) {
  console.error('Usage: node scripts/fix-consecutive-math.mjs <file-or-directory> [--dry-run]');
  process.exit(1);
}

const targetPath = path.resolve(target);
if (!fs.existsSync(targetPath)) {
  console.error(`Error: ${targetPath} does not exist`);
  process.exit(1);
}

console.error(`Fixing consecutive inline math in: ${targetPath}${DRY_RUN ? ' (DRY RUN)' : ''}`);

const stat = fs.statSync(targetPath);
let totalFixes;
if (stat.isDirectory()) {
  totalFixes = processDirectory(targetPath);
} else {
  totalFixes = processFile(targetPath);
}

console.error(`\nTotal fixes: ${totalFixes}`);
