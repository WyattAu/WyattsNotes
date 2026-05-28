#!/usr/bin/env node
/**
 * Fix consecutive inline math $a$$b$ by inserting ", " between them.
 * 
 * Uses a character-by-character state machine that tracks:
 * - TEXT: outside math
 * - INLINE: inside $...$
 * - DISPLAY: inside $$...$$
 * 
 * When transitioning from INLINE to TEXT (closing $), if the very next
 * character is $ (opening new inline), insert ", " separator.
 */

import fs from 'fs';
import path from 'path';

function walk(dir) {
  const files = [];
  for (const f of fs.readdirSync(dir)) {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) walk(fp).forEach(x => files.push(x));
    else if (/\.(md|mdx)$/.test(f)) files.push(fp);
  }
  return files;
}

function fixFile(content) {
  let fixes = 0;
  const result = [];
  let i = 0;
  let state = 'TEXT'; // TEXT, INLINE, DISPLAY

  while (i < content.length) {
    if (content[i] === '$') {
      if (state === 'TEXT') {
        if (i + 1 < content.length && content[i + 1] === '$') {
          // Opening $$
          result.push('$$');
          i += 2;
          state = 'DISPLAY';
        } else {
          // Opening $
          result.push('$');
          i += 1;
          state = 'INLINE';
        }
      } else if (state === 'INLINE') {
        // Closing $ of inline math
        result.push('$');
        i += 1;
        state = 'TEXT';
        // Check if next non-whitespace char is $ (consecutive inline)
        // Skip whitespace to check
        let j = i;
        while (j < content.length && content[j] === ' ') j++;
        if (j < content.length && content[j] === '$' && !(j + 1 < content.length && content[j + 1] === '$')) {
          // Next is $ (not $$), so this is consecutive inline
          // Insert separator if there isn't one already
          if (j === i) {
            // No space between — insert ", "
            result.push(', ');
            fixes++;
          }
          // If there's already a space, no need to add separator
        }
      } else if (state === 'DISPLAY') {
        if (i + 1 < content.length && content[i + 1] === '$') {
          // Closing $$
          result.push('$$');
          i += 2;
          state = 'TEXT';
        } else {
          // Lone $ inside display math
          result.push(content[i]);
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

const dir = process.argv[2] || 'docs/docs_university';
const files = walk(dir);
let total = 0;

for (const f of files) {
  const c = fs.readFileSync(f, 'utf8');
  const { content, fixes } = fixFile(c);
  if (fixes > 0) {
    fs.writeFileSync(f, content);
    total += fixes;
    console.log(`${f.replace('docs/docs_university/', '')}: ${fixes} fixes`);
  }
}

console.log(`\nTotal: ${total} consecutive math fixes`);
