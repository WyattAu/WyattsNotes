#!/usr/bin/env node
/**
 * Preprocesses .md/.mdx files to replace LaTeX command brace arguments
 * with placeholders that MDX's micromark parser won't try to parse as JSX.
 *
 * Uses printable ASCII placeholders (no null bytes) to avoid issues with
 * micromark splitting text nodes at null boundaries.
 *
 * Placeholders:
 *   LBRACE_PLACEHOLDER = '⦃LB⦄'  (rare Unicode chars unlikely in LaTeX)
 *   RBRACE_PLACEHOLDER = '⦃RB⦄'
 *
 * The companion remark plugin (in index.js) restores these to { and }.
 */

const fs = require('fs');
const path = require('path');

const LBRACE = '◆LB◆';
const RBRACE = '◆RB◆';

// Structural commands: only escape braces when content contains
// backslash commands or pipes (which MDX misinterprets).
const STRUCTURAL_CMDS = new Set([
  'dfrac',
  'tfrac',
  'cfrac',
  'frac',
  'binom',
  'choose',
  'brace',
  'brack',
  'sqrt',
  'overbrace',
  'underbrace',
  'overset',
  'underset',
  'begin',
]);

// Text-formatting commands: ALWAYS escape braces unconditionally.
// Their {arg} is never meant as JSX — MDX should never see these braces.
const TEXT_CMDS = new Set([
  'mathrm',
  'mathbf',
  'mathit',
  'mathsf',
  'mathtt',
  'text',
  'textrm',
  'textbf',
  'textit',
  'operatorname',
  'boldsymbol',
  'mathcal',
  'mathbb',
  'tag',
  'label',
]);

// Commands that take exactly TWO brace arguments (e.g. \frac{num}{den}).
const TWO_ARG_CMDS = new Set([
  'dfrac',
  'tfrac',
  'cfrac',
  'frac',
  'binom',
  'choose',
  'brace',
  'brack',
  'overset',
  'underset',
]);

const TOP_LEVEL_CMDS = new Set([...STRUCTURAL_CMDS, ...TEXT_CMDS]);

function readBalancedBraces(source, start) {
  let depth = 0;
  let i = start;
  while (i < source.length) {
    if (source[i] === '{') depth++;
    else if (source[i] === '}') {
      depth--;
      if (depth === 0) return { end: i + 1, content: source.substring(start + 1, i) };
    }
    i++;
  }
  return null;
}

function hasProblematicContent(content) {
  for (let i = 0; i < content.length - 1; i++) {
    if (content[i] === '\\' && /[a-zA-Z]/.test(content[i + 1])) return true;
  }
  return content.includes('|');
}

function processCommandBraces(source) {
  const parts = [];
  let i = 0;

  while (i < source.length) {
    if (source[i] === '\\' && i + 1 < source.length && /[a-zA-Z]/.test(source[i + 1])) {
      const cmdStart = i;
      let cmdEnd = i + 2;
      while (cmdEnd < source.length && /[a-zA-Z]/.test(source[cmdEnd])) cmdEnd++;

      const cmdName = source.substring(cmdStart + 1, cmdEnd);

      if (TOP_LEVEL_CMDS.has(cmdName)) {
        let pos = cmdEnd;
        while (pos < source.length && ' \t\n'.includes(source[pos])) pos++;

        if (pos < source.length && source[pos] === '{') {
          const braceGroups = [];
          let scanPos = pos;
          let allValid = true;

          const maxGroups = TWO_ARG_CMDS.has(cmdName) ? 2 : 1;

          for (let g = 0; g < maxGroups && scanPos < source.length; g++) {
            while (scanPos < source.length && ' \t\n'.includes(source[scanPos])) scanPos++;
            if (scanPos >= source.length || source[scanPos] !== '{') break;

            const result = readBalancedBraces(source, scanPos);
            if (!result) {
              allValid = false;
              break;
            }

            braceGroups.push(result);
            scanPos = result.end;
          }

          if (allValid && braceGroups.length > 0) {
            parts.push(source.substring(cmdStart, cmdEnd));
            let endPos = cmdEnd;

            for (const group of braceGroups) {
              const wsStart = endPos;
              while (endPos < source.length && ' \t\n'.includes(source[endPos])) endPos++;
              parts.push(source.substring(wsStart, endPos));

              parts.push(LBRACE + group.content + RBRACE);
              endPos = group.end;
            }

            i = endPos;
            continue;
          }
        }
      }

      parts.push(source.substring(cmdStart, cmdEnd));
      i = cmdEnd;
      continue;
    }

    parts.push(source[i]);
    i++;
  }

  return parts.join('');
}

/**
 * Pass 2: Escape ALL remaining { and } inside math regions ($...$ and $$...$$).
 * This prevents MDX from parsing standalone braces as JSX expressions,
 * which would break remark-math's ability to create math/inlineMath nodes.
 * Braces preceded by \ (i.e. \{ and \}) are LaTeX escaped braces — left as-is.
 */
function escapeMathRegionBraces(source) {
  const parts = [];
  let i = 0;

  while (i < source.length) {
    // Skip fenced code blocks (``` ... ```)
    if (source.startsWith('```', i)) {
      const end = source.indexOf('```', i + 3);
      if (end !== -1) {
        parts.push(source.substring(i, end + 3));
        i = end + 3;
        continue;
      }
    }

    // Skip inline code (` ... `)
    if (source[i] === '`' && source[i + 1] !== '`') {
      const end = source.indexOf('`', i + 1);
      if (end !== -1) {
        parts.push(source.substring(i, end + 1));
        i = end + 1;
        continue;
      }
    }

    // Skip escaped dollar signs (\$)
    if (source[i] === '\\' && i + 1 < source.length && source[i + 1] === '$') {
      parts.push('\\$');
      i += 2;
      continue;
    }

    // Display math $$...$$
    if (source[i] === '$' && i + 1 < source.length && source[i + 1] === '$') {
      const end = source.indexOf('$$', i + 2);
      if (end !== -1) {
        const content = source.substring(i + 2, end);
        parts.push('$$');
        parts.push(escapeBraces(content));
        parts.push('$$');
        i = end + 2;
        continue;
      }
    }

    // Inline math $...$ — find closing $ not preceded by \
    if (source[i] === '$') {
      const end = findClosingDollar(source, i + 1);
      if (end !== -1) {
        const content = source.substring(i + 1, end);
        parts.push('$');
        parts.push(escapeBraces(content));
        parts.push('$');
        i = end + 1;
        continue;
      }
    }

    parts.push(source[i]);
    i++;
  }

  return parts.join('');
}

function escapeBraces(content) {
  return content.replace(/(?<!\\)\{/g, LBRACE).replace(/(?<!\\)\}/g, RBRACE);
}

function findClosingDollar(source, start) {
  let i = start;
  while (i < source.length) {
    if (source[i] === '\\' && i + 1 < source.length) {
      i += 2; // Skip escaped character
      continue;
    }
    if (source[i] === '$') {
      // Don't match $$ (display math) as inline math close
      if (i + 1 < source.length && source[i + 1] === '$') return -1;
      return i;
    }
    i++;
  }
  return -1;
}

function processSource(source) {
  // Pass 1: Escape braces around LaTeX command arguments
  let result = processCommandBraces(source);
  // Pass 2: Escape ALL remaining braces inside math regions.
  // This prevents MDX from parsing standalone braces as JSX expressions,
  // which would break remark-math's ability to create math/inlineMath nodes.
  result = escapeMathRegionBraces(result);
  return result;
}

function processFile(filepath) {
  const content = fs.readFileSync(filepath, 'utf8');
  const processed = processSource(content);
  if (processed !== content) {
    fs.writeFileSync(filepath, processed);
    return true;
  }
  return false;
}

function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error('Usage: node scripts/escape-latex-braces.js <file_or_dir> [...]');
    process.exit(1);
  }

  let totalFiles = 0,
    modifiedFiles = 0;

  for (const arg of args) {
    const stat = fs.statSync(arg);
    if (stat.isDirectory()) {
      const entries = fs.readdirSync(arg, { recursive: true, withFileTypes: false });
      for (const entry of entries) {
        const filepath = path.join(arg, entry);
        if (/\.mdx?$/.test(filepath)) {
          totalFiles++;
          if (processFile(filepath)) modifiedFiles++;
        }
      }
    } else if (/\.mdx?$/.test(arg)) {
      totalFiles++;
      if (processFile(arg)) modifiedFiles++;
    }
  }

  console.log(`Processed ${totalFiles} files, modified ${modifiedFiles}`);
}

main();
