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
 * v3: Protects fenced code blocks, HTML comments, and single-line inline
 * code spans containing $ from the state machine. This prevents false
 * positives when $ appears inside code regions.
 *
 * Usage:
 *   node scripts/fix-consecutive-math.mjs <file-or-directory> [--dry-run]
 */

import fs from 'fs';
import path from 'path';

const DRY_RUN = process.argv.includes('--dry-run');

/**
 * Pre-process content to protect code regions from the state machine.
 * Handles: fenced code blocks (```) and HTML comments (<!-- -->).
 * Also protects single-line inline code spans (`...`) that contain $ signs.
 *
 * Inline code spans are only protected when:
 * - They are on a single line (no newlines between backticks)
 * - They contain at least one $ character
 * This avoids over-matching stray backticks in prose while still
 * protecting cases like `$2b$12$hash` inside inline code.
 *
 * Returns the content with protected regions replaced by placeholders,
 * plus a map to restore them afterward.
 */
function protectCodeRegions(content) {
  const blocks = [];
  let result = '';
  let i = 0;

  while (i < content.length) {
    // Check for fenced code block ```
    if (
      content[i] === '`' &&
      content[i + 1] === '`' &&
      content[i + 2] === '`'
    ) {
      const start = i;
      i += 3;
      while (i < content.length) {
        if (
          content[i] === '`' &&
          content[i + 1] === '`' &&
          content[i + 2] === '`'
        ) {
          i += 3;
          break;
        }
        i++;
      }
      const placeholder = `\x00CODEBLOCK${blocks.length}\x00`;
      blocks.push(content.substring(start, i));
      result += placeholder;
    }
    // Check for single-line inline code span containing $
    else if (
      content[i] === '`' &&
      content[i + 1] !== '`' &&
      content[i + 2] !== '`'
    ) {
      const start = i;
      i += 1;
      const lineEnd = content.indexOf('\n', i);
      const searchLimit = lineEnd === -1 ? content.length : lineEnd;
      let foundClose = false;
      while (i < searchLimit) {
        if (content[i] === '`') {
          i += 1;
          foundClose = true;
          break;
        }
        i++;
      }
      if (foundClose) {
        const span = content.substring(start, i);
        // Only protect if it contains $ (avoid false matches on stray backticks)
        if (span.includes('$')) {
          const placeholder = `\x00CODEBLOCK${blocks.length}\x00`;
          blocks.push(span);
          result += placeholder;
        } else {
          result += span;
        }
      } else {
        // No matching backtick on same line — not a code span, output as-is
        result += content.substring(start, searchLimit);
        i = searchLimit;
      }
    }
    // Check for HTML comments <!-- ... -->
    else if (
      content[i] === '<' &&
      content[i + 1] === '!' &&
      content[i + 2] === '-' &&
      content[i + 3] === '-'
    ) {
      const start = i;
      i += 4;
      while (i < content.length) {
        if (
          content[i] === '-' &&
          content[i + 1] === '-' &&
          content[i + 2] === '>'
        ) {
          i += 3;
          break;
        }
        i++;
      }
      const placeholder = `\x00CODEBLOCK${blocks.length}\x00`;
      blocks.push(content.substring(start, i));
      result += placeholder;
    }
    else {
      result += content[i];
      i++;
    }
  }

  return { text: result, blocks };
}

/**
 * Restore code regions from placeholders.
 */
function restoreCodeRegions(text, blocks) {
  return text.replace(/\x00CODEBLOCK(\d+)\x00/g, (_, id) => blocks[parseInt(id)]);
}

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

  // Protect code blocks and inline code from the state machine
  const { text, blocks } = protectCodeRegions(raw);
  const { content, fixes } = fixConsecutiveMath(text);

  // Restore code regions
  const finalContent = restoreCodeRegions(content, blocks);

  if (fixes > 0) {
    if (DRY_RUN) {
      console.log(`  [DRY-RUN] ${filePath}: ${fixes} fixes would be applied`);
    } else {
      fs.writeFileSync(filePath, finalContent, 'utf8');
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

// Export for testing, while keeping CLI behavior intact
export { fixConsecutiveMath, protectCodeRegions, restoreCodeRegions };

// Main (only run when executed directly, not when imported)
if (process.argv[1] && import.meta.url === `file://${process.argv[1]}`) {
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
}
