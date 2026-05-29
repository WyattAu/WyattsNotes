#!/usr/bin/env node
/**
 * Preprocesses .md/.mdx files to replace braces inside LaTeX command
 * arguments with diamond placeholders (◆LB◆/◆RB◆) that MDX won't
 * try to parse as JSX expressions.
 *
 * Problem: MDX's micromark parser treats {content} as JSX expressions.
 * LaTeX commands like \frac{Q_{\mathrm{enc}}}{\varepsilon_0} contain
 * braces that MDX can't parse as valid JS.
 *
 * Solution: Replace { with ◆LB◆ and } with ◆RB◆ inside LaTeX command
 * arguments. The remark plugin (escape-jsx-braces) restores these to
 * { and } inside math/inlineMath nodes, so KaTeX receives correct
 * LaTeX with raw braces.
 *
 * Why diamonds, not \{ \}:
 * KaTeX interprets \{ and \} as LITERAL brace characters, not group
 * delimiters. So \mathbf\{E\} renders as "{E}" literally, not bold E.
 * Diamond placeholders are invisible to both MDX and KaTeX — they get
 * restored to { and } only inside math nodes by the remark plugin.
 *
 * Why ALWAYS diamondify (not conditional):
 * Even simple {a} inside \frac{a}{b} gets parsed by MDX as JSX
 * expression "a". The remark plugin converts mdxTextExpression nodes
 * to \{a\}, which KaTeX renders as literal "{a}". So ALL command
 * arguments must have braces diamondified.
 */

const fs = require('fs');
const path = require('path');

// Diamond placeholder characters (U+25C6)
const LB = '\u25C6LB\u25C6';
const RB = '\u25C6RB\u25C6';

// ALL commands whose brace groups must be diamondified.
const ESCAPE_CMDS = new Set([
  // Text commands
  'mathrm',
  'text',
  'textbf',
  'textit',
  'textrm',
  'mathsf',
  'mathit',
  'mathnormal',
  'mathbf',
  'mathcal',
  'mathbb',
  'boldsymbol',
  'operatorname',
  'mathtt',
  'tag',
  'label',
  // Structural commands
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
  'sum',
  'prod',
  'int',
  'lim',
]);

/**
 * Replace { with ◆LB◆ and } with ◆RB◆ in a string.
 */
function diamondifyBraces(content) {
  return content.replace(/\{/g, LB).replace(/\}/g, RB);
}

/**
 * Read a balanced brace group starting at position pos (which must be '{').
 * Returns [content, endPos] where content is the string between braces
 * and endPos is the position after the closing '}'.
 */
function readBraceGroup(source, pos) {
  let depth = 0;
  const start = pos;
  while (pos < source.length) {
    if (source[pos] === '{') depth++;
    else if (source[pos] === '}') {
      depth--;
      if (depth === 0) {
        pos++;
        return [source.substring(start + 1, pos - 1), pos];
      }
    }
    pos++;
  }
  // Unbalanced braces — return rest of string
  return [source.substring(start + 1), source.length];
}

/**
 * Process source text, replacing braces in LaTeX command arguments
 * with diamond placeholders.
 */
function processSource(source) {
  let i = 0;
  const parts = [];

  while (i < source.length) {
    // Look for backslash followed by a command name
    if (source[i] === '\\' && i + 1 < source.length && /[a-zA-Z]/.test(source[i + 1])) {
      const cmdStart = i;
      let cmdEnd = i + 1;
      while (cmdEnd < source.length && /[a-zA-Z]/.test(source[cmdEnd])) {
        cmdEnd++;
      }
      const cmdName = source.substring(cmdStart + 1, cmdEnd);

      if (ESCAPE_CMDS.has(cmdName)) {
        // Diamondify ALL brace groups for this command
        parts.push(source.substring(cmdStart, cmdEnd));
        i = cmdEnd;

        // Skip whitespace
        while (i < source.length && /\s/.test(source[i])) {
          parts.push(source[i]);
          i++;
        }

        // Process each brace group
        while (i < source.length && source[i] === '{') {
          const [argContent, endPos] = readBraceGroup(source, i);
          parts.push(LB + diamondifyBraces(argContent) + RB);
          i = endPos;
          // Skip whitespace between args
          while (i < source.length && /\s/.test(source[i])) {
            parts.push(source[i]);
            i++;
          }
        }
        continue;
      }

      // Not a known command, output as-is
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
