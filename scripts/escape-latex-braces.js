#!/usr/bin/env node
/**
 * Preprocesses .md/.mdx files to replace LaTeX command brace arguments
 * with placeholders that MDX's micromark parser won't try to parse as JSX.
 *
 * Problem: \dfrac{|\mathbf{a}|}{|\mathbf{n}|} — micromark sees {content}
 * after \dfrac, tries to parse as JSX, acorn fails on LaTeX commands.
 *
 * Solution: Replace the { and } delimiters with placeholders that micromark
 * treats as regular text. The companion remark plugin (in index.js) restores
 * the placeholders to { and } during AST processing.
 *
 * Placeholders:
 *   LBRACE_PLACEHOLDER = '\x00LBRACE\x00'  (null bytes prevent collision)
 *   RBRACE_PLACEHOLDER = '\x00RBRACE\x00'
 *
 * The remark plugin converts these back to { and } in text nodes.
 */

const fs = require('fs');
const path = require('path');

const LBRACE = '\x00LB\x00';
const RBRACE = '\x00RB\x00';

const TOP_LEVEL_CMDS = new Set([
  'dfrac', 'tfrac', 'cfrac', 'frac',
  'binom', 'choose', 'brace', 'brack',
  'sqrt', 'overbrace', 'underbrace',
  'overset', 'underset',
  'begin',
]);

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

function processSource(source) {
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
          let anyProblematic = false;

          for (let g = 0; g < 2 && scanPos < source.length; g++) {
            while (scanPos < source.length && ' \t\n'.includes(source[scanPos])) scanPos++;
            if (scanPos >= source.length || source[scanPos] !== '{') break;

            const result = readBalancedBraces(source, scanPos);
            if (!result) { allValid = false; break; }

            braceGroups.push(result);
            scanPos = result.end;

            if (hasProblematicContent(result.content)) anyProblematic = true;
          }

          if (allValid && anyProblematic) {
            // Output command name
            parts.push(source.substring(cmdStart, cmdEnd));
            let endPos = cmdEnd;

            for (const group of braceGroups) {
              // Whitespace before group
              const wsStart = endPos;
              while (endPos < source.length && ' \t\n'.includes(source[endPos])) endPos++;
              parts.push(source.substring(wsStart, endPos));

              // Replace outer { } with placeholders
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

  let totalFiles = 0, modifiedFiles = 0;

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
