#!/usr/bin/env node
/**
 * Preprocesses .md/.mdx files to fix patterns that cause MDX parsing errors.
 *
 * Four transformations are applied in order:
 *
 * 0. Ensure blank line after import/export before non-ESM content.
 *    MDX's ESM collector treats the line after an import/export as a continuation
 *    if it's not blank. Markdown headings/content between import and const blocks
 *    get swallowed as JS, causing "Could not parse import/exports with acorn".
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
// Transformation 0: Ensure blank line after import/export before non-ESM
// ─────────────────────────────────────────────────────────────────────────────

/**
 * MDX's ESM collector (micromark-extension-mdxjs-esm) treats the next line
 * after import/export as a continuation if it's not blank. If markdown content
 * (headings, text) appears between an import and a later const declaration,
 * the collector swallows the markdown as part of the ESM block, and acorn
 * fails to parse it.
 *
 * Fix: insert a blank line after any import/export line that is immediately
 * followed by non-blank, non-ESM content (not import/export/const/{).
 */
function ensureBlankLineAfterImport(source) {
  const lines = source.split('\n');
  const isEsmStart = (line) => /^\s*(import |export )/.test(line) || /^\s*\{/.test(line);
  const isEsmContinue = (line) => /^\s*(import |export |const |let |var |{|})/.test(line);
  const isBlank = (line) => line.trim() === '';

  // Skip frontmatter
  let frontmatterEnd = 0;
  if (lines[0]?.trim() === '---') {
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === '---') {
        frontmatterEnd = i + 1;
        break;
      }
    }
  }

  const result = [];
  for (let i = 0; i < lines.length; i++) {
    result.push(lines[i]);
    if (i >= frontmatterEnd && isEsmStart(lines[i]) && i + 1 < lines.length) {
      const nextLine = lines[i + 1];
      if (!isBlank(nextLine) && !isEsmContinue(nextLine) && !isEsmStart(nextLine)) {
        // Insert blank line
        result.push('');
      }
    }
  }
  return result.join('\n');
}

// ─────────────────────────────────────────────────────────────────────────────
// Transformation 1: Collapse multi-line const arrays to single lines
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Escape unescaped apostrophes (single quotes) inside single-quoted JS string values
 * in a collapsed export const line.
 *
 * The collapsed line has patterns like: { question: 'What is X's property?', ... }
 * The apostrophe in "X's" breaks the single-quoted string. This function escapes it.
 *
 * Algorithm: walk through the line tracking single/double quote state.
 * Inside single-quoted strings, escape any unescaped ' characters that are
 * clearly apostrophes (preceded by a letter and followed by a letter or 's').
 */
function escapeApostrophesInStrings(line) {
  let result = '';
  let i = 0;
  while (i < line.length) {
    const ch = line[i];

    // Double-quoted string: pass through unchanged (apostrophes are fine inside "")
    if (ch === '"') {
      let j = i + 1;
      while (j < line.length) {
        if (line[j] === '\\' && j + 1 < line.length) {
          j += 2; // skip escaped char
        } else if (line[j] === '"') {
          j++; // closing quote
          break;
        } else {
          j++;
        }
      }
      result += line.substring(i, j);
      i = j;
      continue;
    }

    // Single-quoted string: escape apostrophes
    if (ch === "'") {
      result += ch;
      i++;
      // Scan through the string content
      while (i < line.length) {
        if (line[i] === '\\' && i + 1 < line.length) {
          // Escaped character -- pass through
          result += line[i] + line[i + 1];
          i += 2;
        } else if (line[i] === "'") {
          // Potential closing quote or apostrophe.
          const prev = result[result.length - 1];
          const next = i + 1 < line.length ? line[i + 1] : '';
          const next2 = i + 2 < line.length ? line[i + 2] : '';
          // Possessive patterns:
          // 1. letter + ' + letter (e.g., "it's a") — mid-word apostrophe
          // 2. letter + ' + s + non-letter (e.g., "beryllium's ") — word-boundary possessive
          const isApostrophe =
            (/[a-z]/.test(prev) && /[a-z]/.test(next)) ||
            (/[a-z]/.test(prev) && next === 's' && !/[a-zA-Z]/.test(next2));

          if (isApostrophe) {
            result += '\\' + "'";
            i++;
          } else {
            result += "'";
            i++;
            break;
          }
        } else {
          result += line[i];
          i++;
        }
      }
      continue;
    }

    result += ch;
    i++;
  }
  return result;
}

function collapseConstArrays(source) {
  let lines = source.split('\n');
  const replacements = [];
  const varCounts = {}; // Track duplicate variable names

  // First pass: count occurrences of each variable name
  const firstPassLines = source.split('\n');
  for (const line of firstPassLines) {
    const m = line.match(/(?:export\s+)?const\s+(\w+)\s*=\s*\[/);
    if (m) {
      varCounts[m[1]] = (varCounts[m[1]] || 0) + 1;
    }
  }

  const varIndex = {}; // Track per-name index for renaming

  let i = 0;
  while (i < lines.length) {
    const match = lines[i].match(/^(\s*)(export\s+)?const\s+(\w+)\s*=\s*\[/);
    if (!match) {
      i++;
      continue;
    }

    const prefix = match[1];
    const hasExport = !!match[2];
    const varName = match[3];
    const startLine = i;

    // Skip if inside YAML frontmatter (before second ---)
    // Frontmatter is always at the start of the file: lines 1 = ---, line N = ---
    if (startLine < 2) {
      i++;
      continue;
    }
    let frontmatterEnd = -1;
    if (lines[0].trim() === '---') {
      for (let j = 1; j < lines.length; j++) {
        if (lines[j].trim() === '---') {
          frontmatterEnd = j + 1;
          break;
        }
      }
    }
    if (frontmatterEnd !== -1 && startLine < frontmatterEnd) {
      i++;
      continue;
    }

    // Scan forward for the closing ];
    let endLine = -1;
    for (let j = i + 1; j < lines.length; j++) {
      const trimmed = lines[j].trim();
      if (
        trimmed === '];' ||
        trimmed === ']' ||
        trimmed.endsWith('];') ||
        trimmed.endsWith(', ];')
      ) {
        endLine = j;
        break;
      }
    }

    // If no closing ]; on subsequent lines, check if the array is single-line
    // (starts and ends on the same line, e.g. "const x = [{...}];")
    if (endLine === -1) {
      const lineContent = lines[i];
      const lastBracket = lineContent.lastIndexOf(']');
      if (lastBracket > 0) {
        const after = lineContent.substring(lastBracket).trim();
        if (after === '];' || after === ']; ') {
          endLine = i;
        }
      }
    }

    if (endLine === -1) {
      i++;
      continue;
    }

    // Collect all lines from start to end
    const block = lines.slice(startLine, endLine + 1).join('\n');
    let collapsed = block
      .replace(/\n/g, ' ')
      .replace(/\r/g, '')
      .replace(/\t/g, ' ')
      .replace(/  +/g, ' ');

    if (!hasExport) {
      collapsed = prefix + 'export ' + collapsed.trimStart();
    }

    // Rename duplicate variable names to avoid MDX "already declared" errors
    let renamedVarName = varName;
    if (varCounts[varName] > 1) {
      varIndex[varName] = (varIndex[varName] || 0) + 1;
      const idx = varIndex[varName];
      renamedVarName = varName + idx;
      collapsed = collapsed.replace(
        new RegExp('(export\\s+const\\s+)' + varName + '(\\s*=)', 'g'),
        '$1' + renamedVarName + '$2',
      );
      // Also rename the JSX reference: {varName} → {renamedVarName}
      // Look ahead in the lines after the array for <Component ... {varName} />
      for (let k = endLine + 1; k < Math.min(endLine + 10, lines.length); k++) {
        if (lines[k].includes('{' + varName + '}')) {
          lines[k] = lines[k].replace(
            new RegExp('\\{' + varName + '\\}', 'g'),
            '{' + renamedVarName + '}',
          );
        }
      }
    }

    // Escape apostrophes inside single-quoted strings
    collapsed = escapeApostrophesInStrings(collapsed);

    // If the collapsed line is too long (>3000 chars), acorn fails on CI.
    // Instead of collapsing, just add 'export' to the first line of the multi-line
    // declaration and ensure a blank line after the closing ];
    const MAX_COLLAPSED_LINE_LENGTH = 3000;
    if (collapsed.length > MAX_COLLAPSED_LINE_LENGTH) {
      let multilineReplacement = block;
      if (!hasExport) {
        multilineReplacement = prefix + 'export ' + multilineReplacement.trimStart();
      }
      // Apply same renaming to multi-line version
      if (renamedVarName !== varName) {
        multilineReplacement = multilineReplacement.replace(
          new RegExp('(export\\s+const\\s+)' + varName + '(\\s*=)', 'g'),
          '$1' + renamedVarName + '$2',
        );
      }
      // Also apply apostrophe escaping to the multi-line version
      multilineReplacement = multilineReplacement
        .split('\n')
        .map((l) => escapeApostrophesInStrings(l))
        .join('\n');
      replacements.push({ startLine, endLine, replacement: multilineReplacement });
      i = endLine + 1;
      continue;
    }

    replacements.push({ startLine, endLine, replacement: collapsed });
    i = endLine + 1;
  }

  // Apply replacements in reverse order
  for (let r = replacements.length - 1; r >= 0; r--) {
    const rep = replacements[r];
    const before = lines.slice(0, rep.startLine).join('\n');
    let after = lines.slice(rep.endLine + 1).join('\n');
    // Ensure blank line after the collapsed export const to prevent MDX ESM
    // collector from swallowing the next line as continuation.
    const nextNonBlank = after.split('\n').find((l) => l.trim() !== '');
    const startsWithExport = /(?:^|\n)export\s+const\s+/.test(rep.replacement);
    if (
      startsWithExport &&
      nextNonBlank &&
      !/^\s*(import |export |const |let |var )/.test(nextNonBlank)
    ) {
      after = '\n' + after;
    }
    source = before + '\n' + rep.replacement + '\n' + after;
    lines = source.split('\n');
  }

  return lines.join('\n');
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
 *
 * Safety: stops at first newline to avoid runaway reads from unmatched
 * braces like \mathrm{word without closing }.
 */
function readBraceGroup(source, pos) {
  let depth = 0;
  const start = pos;
  while (pos < source.length) {
    const ch = source[pos];
    if (ch === '\n') break; // Safety: don't cross line boundaries
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) {
        pos++;
        return [source.substring(start + 1, pos - 1), pos];
      }
    }
    pos++;
  }
  // Unbalanced braces — return content up to newline or end
  return [source.substring(start + 1, pos), pos];
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
          // Safety: check if the brace group has a matching } on the same line
          const lineEnd = source.indexOf('\n', i);
          const searchEnd = lineEnd === -1 ? source.length : lineEnd;
          const restOfLine = source.substring(i, searchEnd);
          const closeBrace = restOfLine.lastIndexOf('}');
          if (closeBrace === -1) {
            // No matching } on this line — skip to avoid corrupting content
            parts.push(source[i]);
            i++;
            break;
          }

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
// NOTE: Transformation 5 (diamondifyStandaloneBraces) was REMOVED.
// It was too aggressive — diamondified JSX children {children} and JS
// object literals {key: value}. Standalone set notation {1,2,3} should use
// \{...\} in source. JSX expressions are handled by the remark plugin
// (src/plugins/escape-jsx-braces/index.js).
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// Orchestrator
// ─────────────────────────────────────────────────────────────────────────────
// Transformation 6: Escape apostrophes in ALL lines (not just const arrays)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Apply escapeApostrophesInStrings to every line of the source.
 *
 * This catches possessive apostrophes (e.g., "beryllium's") inside
 * single-quoted JSX attribute values on <Component> lines that are
 * NOT processed by collapseConstArrays (which only handles const
 * declarations).
 */
function escapeApostrophesAllLines(source) {
  // Skip frontmatter
  const lines = source.split('\n');
  let frontmatterEnd = 0;
  if (lines[0]?.trim() === '---') {
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === '---') {
        frontmatterEnd = i + 1;
        break;
      }
    }
  }

  let changed = false;
  const result = lines.map((line, idx) => {
    if (idx < frontmatterEnd) return line;
    // Skip lines that are pure markdown (no ' or " or JSX)
    if (!line.includes("'")) return line;
    const escaped = escapeApostrophesInStrings(line);
    if (escaped !== line) {
      changed = true;
      return escaped;
    }
    return line;
  });

  return changed ? result.join('\n') : source;
}

// ─────────────────────────────────────────────────────────────────────────────
// Transformation 7: Fix MDX-unfriendly patterns in markdown text
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Fix patterns in markdown prose that MDX interprets as JSX/HTML but cannot
 * parse correctly. Applied line-by-line, skipping frontmatter, code blocks,
 * and math delimiters.
 *
 * Three patterns:
 *
 * 1. <digit (e.g., "-1<0") — MDX interprets < as HTML tag start.
 *    "0" is not a valid tag name → "Unexpected character `0` before name".
 *    Fix: replace < with &lt; when followed by a digit.
 *
 * 2. {(non-identifier-start) (e.g., "{(G, u, v)") — MDX parses as JSX
 *    expression, acorn fails on the content.
 *    Fix: diamondify the braces so remark plugin restores them.
 *
 * 3. \<escaped sequences in text — Some content uses \< or \> as math-like
 *    notation in prose. These are fine for markdown but MDX may interpret
 *    the < as HTML. Already handled by markdown rendering.
 */

function fixMdxUnfriendlyPatterns(source) {
  const lines = source.split('\n');
  let frontmatterEnd = 0;
  if (lines[0]?.trim() === '---') {
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === '---') {
        frontmatterEnd = i + 1;
        break;
      }
    }
  }

  let inCodeBlock = false;
  let jsxDepth = 0; // Track <Component ... > nesting
  let changed = false;
  const result = lines.map((line, idx) => {
    // Track code blocks
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      return line;
    }
    if (inCodeBlock) return line;
    if (idx < frontmatterEnd) return line;

    // Track JSX tag context: lines inside <Component ... /> or </Component>
    const trimmed = line.trimStart();
    if (/<\/?[A-Z]/.test(trimmed)) {
      // Opening or closing JSX tag
      if (/<\/[A-Z]/.test(trimmed)) {
        jsxDepth = Math.max(0, jsxDepth - 1);
      } else {
        // Opening tag — check if self-closing on same line
        jsxDepth++;
        if (/\/>\s*$/.test(trimmed)) {
          jsxDepth = Math.max(0, jsxDepth - 1);
        }
      }
      // Skip ALL JSX tag lines (both opening with content and closing)
      // This prevents diamondification of JSX attributes
      return line;
    }
    if (jsxDepth > 0) return line; // Skip continuation lines inside multi-line JSX tags

    let modified = line;

    // Pattern 1: <digit — MDX interprets as HTML tag with invalid name
    // Only in markdown text (not inside JSX tags or math)
    // Match < followed by a digit, NOT preceded by & (already escaped)
    // But NOT < followed by digit inside $...$ math
    modified = modified.replace(/<(?=[0-9])(?![^$]*\$)/g, (match, offset, str) => {
      // Check if we're inside a $...$ math expression
      // Count $ signs before this position
      const before = str.substring(0, offset);
      const dollarCount = (before.match(/\$/g) || []).length;
      // If odd number of $ before, we're inside math
      if (dollarCount % 2 === 1) return match;
      // Also skip if inside inline code
      const backtickCount = (before.match(/`/g) || []).length;
      if (backtickCount % 2 === 1) return match;
      changed = true;
      return '&lt;';
    });

    // Pattern 2: { followed by ( or space or non-identifier char
    // MDX parses as JSX expression. If acorn can't parse it, build fails.
    // Diamondify these braces so the remark plugin can restore them.
    // Skip: lines that are JSX (start with <), lines with $...$ math,
    // and { that starts valid JS identifiers/expressions.
    if (
      modified.includes('{') &&
      !modified.trimStart().startsWith('<') &&
      !modified.trimStart().startsWith('"') &&
      !modified.trimStart().startsWith("'") &&
      !modified.includes('export ') &&
      !modified.includes('const ')
    ) {
      // Find { that is NOT inside $...$ math, inline code, or JSX attributes
      let newModified = '';
      let i = 0;
      let inInlineCode = false;
      let inDollarMath = false;

      while (i < modified.length) {
        const ch = modified[i];

        // Track $ math delimiters
        if (ch === '$' && (i === 0 || modified[i - 1] !== '\\')) {
          inDollarMath = !inDollarMath;
          newModified += ch;
          i++;
          continue;
        }
        if (inDollarMath) {
          newModified += ch;
          i++;
          continue;
        }

        // Track inline code
        if (ch === '`') {
          inInlineCode = !inInlineCode;
          newModified += ch;
          i++;
          continue;
        }
        if (inInlineCode) {
          newModified += ch;
          i++;
          continue;
        }

        // Handle { — check if it starts a problematic expression
        if (ch === '{') {
          const next = i + 1 < modified.length ? modified[i + 1] : '';
          // Valid JS expression starters: letter, $, _, {, [, !, ~, +, -, @
          // Problematic: (, space, digit, *, etc.
          const isValidJsStart = /[a-zA-Z$_{!~+\-@]/.test(next);

          // Find matching } to inspect content
          let depth = 1;
          let j = i + 1;
          while (j < modified.length && depth > 0) {
            if (modified[j] === '{') depth++;
            else if (modified[j] === '}') depth--;
            if (depth > 0) j++;
          }
          const braceContent = depth === 0 ? modified.substring(i + 1, j) : '';

          // Diamondify if:
          // 1. Next char is not a valid JS start (e.g., {(G, u, v)})
          // 2. Content contains ^ (LaTeX superscript, not JSX)
          // 3. Content contains comma+space (set notation like {id, (, +})
          // 4. Content is a single non-identifier char (e.g., {+}, {-}, {*})
          // BUT NOT if the line is a JSX line or const declaration
          const hasLatexPattern = /\^/.test(braceContent);
          const hasSetNotation = /,\s/.test(braceContent);
          const isSingleOperator = braceContent.length === 1 && !/[a-zA-Z0-9$_]/.test(braceContent);

          if (
            (!isValidJsStart && next !== '' && next !== '}') ||
            (braceContent && (hasLatexPattern || hasSetNotation || isSingleOperator))
          ) {
            // Diamondify this brace pair
            // Find matching }
            let depth = 1;
            let j = i + 1;
            while (j < modified.length && depth > 0) {
              if (modified[j] === '{') depth++;
              else if (modified[j] === '}') depth--;
              if (depth > 0) j++;
            }
            if (depth === 0) {
              // Found matching }
              newModified += LB + modified.substring(i + 1, j) + RB;
              i = j + 1;
              changed = true;
              continue;
            }
          }
        }

        newModified += ch;
        i++;
      }
      modified = newModified;
    }

    return modified;
  });

  return changed ? result.join('\n') : source;
}

// ─────────────────────────────────────────────────────────────────────────────

function processFile(filepath) {
  const content = fs.readFileSync(filepath, 'utf8');

  // Apply transformations in order: blank lines → collapse → autolinks → mdx-unfriendly → latex braces → superscripts → apostrophes
  let processed = ensureBlankLineAfterImport(content);
  processed = collapseConstArrays(processed);
  processed = fixAutolinks(processed);
  processed = fixMdxUnfriendlyPatterns(processed);
  processed = diamondifyLatexBraces(processed);
  processed = diamondifySuperscriptSubscript(processed);
  processed = escapeApostrophesAllLines(processed);

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
