#!/usr/bin/env node
/**
 * Preprocesses .md/.mdx files to fix patterns that cause MDX parsing errors.
 *
 * Three transformations are applied in order:
 *
 * 1. Collapse multi-line const/export const array declarations to single lines.
 *    MDX's ESM collector only collects lines starting with `import`, `export`,
 *    or `{`. A multi-line declaration only has its first line collected; acorn
 *    receives incomplete JS and fails with "Could not parse import/exports".
 *
 * 2. Convert <URL> markdown autolinks to [url](url) syntax.
 *    MDX parses <https://example.com> as a JSX tag and fails on the `/`.
 *
 * 3. Replace braces inside LaTeX command arguments with diamond placeholders
 *    (◆LB◆/◆RB◆) that MDX won't try to parse as JSX expressions.
 *    The remark plugin (escape-jsx-braces) restores these inside math nodes.
 *
 * 4. Replace ^{...} and _{...} LaTeX superscript/subscript patterns with
 *    diamond placeholders. MDX parses these as JSX expressions and fails
 *    when the content is not valid JS (e.g., e^{-0.0693 x 20}).
 *
 * Why diamonds, not \{ \}:
 * KaTeX interprets \{ and \} as LITERAL brace characters, not group
 * delimiters. Diamond placeholders are invisible to both MDX and KaTeX —
 * they get restored to { and } only inside math nodes by the remark plugin.
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

// ─────────────────────────────────────────────────────────────────────────────
// Transformation 1: Collapse multi-line const/export const array declarations
// ─────────────────────────────────────────────────────────────────────────────

function collapseConstArrays(source) {
  const re = /^(\s*)(export\s+)?const\s+(\w+)\s*=\s*\[/gm;
  const replacements = [];

  let match;
  while ((match = re.exec(source)) !== null) {
    const prefix = match[1];
    const hasExport = !!match[2];
    const bracketStart = match.index + match[0].length - 1;

    // Skip if inside YAML frontmatter (before second ---)
    let frontmatterEnd = -1;
    if (source.startsWith('---')) {
      const end = source.indexOf('---', 3);
      if (end !== -1 && source[end + 3] === '\n') {
        frontmatterEnd = end + 4;
      } else if (end !== -1) {
        frontmatterEnd = end + 3;
      }
    }
    if (frontmatterEnd !== -1 && match.index < frontmatterEnd) continue;

    // Character-by-character scan from [ to matching ]
    let pos = bracketStart;
    let depth = 0;
    let inString = null;
    let inTemplate = false;
    let templateExprDepth = 0;
    let endPos = -1;

    while (pos < source.length) {
      const ch = source[pos];

      if (inString) {
        if (ch === '\\' && pos + 1 < source.length) {
          pos += 2;
          continue;
        }
        if (ch === inString) {
          inString = null;
        }
        pos++;
        continue;
      }

      if (inTemplate) {
        if (ch === '\\' && pos + 1 < source.length) {
          pos += 2;
          continue;
        }
        if (ch === '`' && templateExprDepth === 0) {
          inTemplate = false;
          pos++;
          continue;
        }
        if (ch === '$' && pos + 1 < source.length && source[pos + 1] === '{') {
          templateExprDepth++;
          pos += 2;
          continue;
        }
        if (ch === '{') {
          templateExprDepth++;
          pos++;
          continue;
        }
        if (ch === '}') {
          templateExprDepth--;
          pos++;
          continue;
        }
        pos++;
        continue;
      }

      if (ch === '"' || ch === "'" || ch === '`') {
        if (ch === '`') {
          inTemplate = true;
        } else {
          inString = ch;
        }
        pos++;
        continue;
      }

      if (ch === '[') depth++;
      else if (ch === ']') {
        depth--;
        if (depth === 0) {
          endPos = pos;
          break;
        }
      }

      pos++;
    }

    if (endPos === -1) continue;

    const originalBlock = source.substring(match.index, endPos + 1);
    let collapsed = originalBlock
      .replace(/\n/g, ' ')
      .replace(/\r/g, '')
      .replace(/\t/g, ' ')
      .replace(/  +/g, ' ');

    if (!hasExport) {
      collapsed = prefix + 'export ' + collapsed.trimStart();
    }

    replacements.push({
      start: match.index,
      end: endPos + 1,
      replacement: collapsed,
    });
  }

  // Apply replacements in reverse order to preserve offsets
  for (let i = replacements.length - 1; i >= 0; i--) {
    const r = replacements[i];
    source = source.substring(0, r.start) + r.replacement + source.substring(r.end);
  }

  return source;
}

// ─────────────────────────────────────────────────────────────────────────────
// Transformation 2: Convert <URL> autolinks to markdown links
// ─────────────────────────────────────────────────────────────────────────────

function fixAutolinks(source) {
  return source.replace(/<(https?:\/\/[^>\s]+)>/g, '[$1]($1)');
}

// ─────────────────────────────────────────────────────────────────────────────
// Transformation 3: Diamondify braces inside LaTeX command arguments
// ─────────────────────────────────────────────────────────────────────────────

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

function diamondifyLatexBraces(source) {
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

// ─────────────────────────────────────────────────────────────────────────────
// Transformation 4: Diamondify ^{...} and _{...} superscript/subscript patterns
// ─────────────────────────────────────────────────────────────────────────────

function diamondifySuperscriptSubscript(source) {
  const output = [];
  let pos = 0;

  while (pos < source.length) {
    if (
      source[pos] === '{' &&
      pos > 0 &&
      source[pos - 1] !== '\\' &&
      (source[pos - 1] === '^' || source[pos - 1] === '_') &&
      (pos < 2 || source[pos - 2] !== '\\')
    ) {
      // Read balanced brace group
      let depth = 1;
      let j = pos + 1;
      while (j < source.length && depth > 0) {
        if (source[j] === '{') depth++;
        else if (source[j] === '}') depth--;
        j++;
      }
      if (depth === 0) {
        const inner = source.substring(pos + 1, j - 1);
        output.push(LB + inner + RB);
        pos = j;
        continue;
      }
    }
    output.push(source[pos]);
    pos++;
  }

  return output.join('');
}

// ─────────────────────────────────────────────────────────────────────────────
// Orchestrator
// ─────────────────────────────────────────────────────────────────────────────

function processFile(filepath) {
  const content = fs.readFileSync(filepath, 'utf8');

  // Apply transformations in order: collapse → autolinks → latex braces → superscripts
  let processed = collapseConstArrays(content);
  processed = fixAutolinks(processed);
  processed = diamondifyLatexBraces(processed);
  processed = diamondifySuperscriptSubscript(processed);

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
