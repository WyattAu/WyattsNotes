#!/usr/bin/env node
/**
 * Preprocesses .md/.mdx files to escape braces inside LaTeX command
 * arguments that MDX's micromark parser can't parse as valid JS.
 *
 * Ported from the webpack loader (src/plugins/escape-jsx-braces/webpack-loader.js).
 * Same logic, runs as a standalone script for the university build pipeline.
 *
 * Problem 1: \dfrac{|\mathbf{a}|}{|\mathbf{n}|} — micromark sees \dfrac{...}
 * and tries to parse {|\mathbf{a}|} as JSX. Acorn fails on \mathbf.
 *
 * Problem 2: \mathrm{PMK{}} — MDX sees the inner {} as an empty JSX
 * expression. The brace depth counter never reaches 0 because the
 * empty group {} inside makes the outer group unbalanced from the
 * parser's perspective.
 *
 * Solution: Replace { with \{ and } with \} inside LaTeX command
 * arguments when the content contains backslashes, pipes, or nested
 * braces. For commands where the first brace group is always a simple
 * text argument (like \mathrm, \text, etc.), always escape regardless.
 *
 * The companion remark plugin (escape-jsx-braces) then handles
 * mdxTextExpression nodes and escapes remaining braces in text nodes.
 *
 * KaTeX interprets \{ and \} as literal braces in math mode, but inside
 * \dfrac arguments, \{...\} creates a LaTeX group (same as {...}).
 * So \dfrac\{|\mathbf{a}|\}\{|\mathbf{n}|\} renders identically to
 * \dfrac{|\mathbf{a}|}{|\mathbf{n}|}.
 *
 * IMPORTANT: This script only escapes INNER braces of command arguments.
 * The OUTER { and } delimiters are left as-is. MDX parses {E} as JSX
 * expression `E` (a valid identifier). The remark plugin then converts
 * these mdxTextExpression nodes back to \{E\} for KaTeX.
 */

const fs = require('fs');
const path = require('path');

// Commands whose first argument is a simple text label that should
// always have its inner braces escaped. These never need nested braces
// in their first argument for valid LaTeX rendering.
const ALWAYS_ESCAPE_CMDS = new Set([
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
]);

// Commands whose arguments may contain other LaTeX commands with
// their own brace groups. Only escape when nested braces, backslashes,
// or pipes are detected inside the argument.
const CONDITIONAL_ESCAPE_CMDS = new Set([
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

const ALL_CMDS = new Set([...ALWAYS_ESCAPE_CMDS, ...CONDITIONAL_ESCAPE_CMDS]);

function processSource(source) {
  let i = 0;
  const parts = [];

  while (i < source.length) {
    // Look for backslash followed by a command name
    if (source[i] === '\\' && i + 1 < source.length && /[a-zA-Z]/.test(source[i + 1])) {
      // Read the full command name
      const cmdStart = i;
      let cmdEnd = i + 1;
      while (cmdEnd < source.length && /[a-zA-Z]/.test(source[cmdEnd])) {
        cmdEnd++;
      }
      const cmdName = source.substring(cmdStart + 1, cmdEnd);
      const shouldAlwaysEscape = ALWAYS_ESCAPE_CMDS.has(cmdName);
      const shouldConditionalEscape = CONDITIONAL_ESCAPE_CMDS.has(cmdName);

      if (shouldAlwaysEscape || shouldConditionalEscape) {
        // Skip whitespace
        let pos = cmdEnd;
        while (pos < source.length && source[pos] in { ' ': 1, '\t': 1, '\n': 1 }) {
          pos++;
        }

        if (pos < source.length && source[pos] === '{') {
          if (shouldAlwaysEscape) {
            // Always escape the first brace group for text commands.
            parts.push(source.substring(cmdStart, cmdEnd));
            i = cmdEnd;

            // Skip whitespace to opening brace
            while (i < source.length && source[i] in { ' ': 1, '\t': 1, '\n': 1 }) {
              parts.push(source[i]);
              i++;
            }

            if (i < source.length && source[i] === '{') {
              // Read the brace group, only tracking depth for the outer level
              let depth = 0;
              const start = i;
              while (i < source.length) {
                if (source[i] === '{') depth++;
                else if (source[i] === '}') {
                  depth--;
                  if (depth === 0) {
                    i++;
                    break;
                  }
                }
                i++;
              }

              const argContent = source.substring(start + 1, i - 1);
              // Escape all { and } in the argument content
              const escaped = argContent.replace(/\{/g, '\\{').replace(/\}/g, '\\}');
              parts.push('{' + escaped + '}');
            }
            continue;
          }

          // Conditional escape: check if the brace group has problems
          let depth = 0;
          let j = pos;
          let hasProblem = false;

          while (j < source.length) {
            if (source[j] === '{') {
              depth++;
              if (depth > 1) hasProblem = true;
            } else if (source[j] === '}') {
              depth--;
              if (depth === 0) break;
            } else if (
              source[j] === '\\' &&
              j + 1 < source.length &&
              /[a-zA-Z]/.test(source[j + 1])
            ) {
              hasProblem = true;
            } else if (source[j] === '|') {
              hasProblem = true;
            }
            j++;
          }

          if (depth !== 0) {
            // Unbalanced braces — treat as problematic and escape
            hasProblem = true;
            // Re-scan: read only the first balanced group (depth 1->0)
            depth = 0;
            j = pos;
            while (j < source.length) {
              if (source[j] === '{') {
                depth++;
                if (depth > 1) {
                  // Skip the inner empty group entirely
                  let innerDepth = 1;
                  j++;
                  while (j < source.length && innerDepth > 0) {
                    if (source[j] === '{') innerDepth++;
                    else if (source[j] === '}') innerDepth--;
                    j++;
                  }
                  continue;
                }
              } else if (source[j] === '}') {
                depth--;
                if (depth === 0) break;
              }
              j++;
            }
          }

          if (hasProblem) {
            // Output the command name as-is
            parts.push(source.substring(cmdStart, cmdEnd));
            i = cmdEnd;

            // Process each brace group, escaping { and } inside
            while (i < source.length) {
              // Skip whitespace
              while (i < source.length && source[i] in { ' ': 1, '\t': 1, '\n': 1 }) {
                parts.push(source[i]);
                i++;
              }

              if (i >= source.length || source[i] !== '{') break;

              // Read balanced {content}
              let d = 0;
              const start = i;
              let foundClose = false;
              while (i < source.length) {
                if (source[i] === '{') d++;
                else if (source[i] === '}') {
                  d--;
                  if (d === 0) {
                    i++;
                    foundClose = true;
                    break;
                  }
                }
                i++;
              }

              if (!foundClose) {
                // Truly unbalanced braces — output rest of content as-is
                parts.push(source.substring(start));
                break;
              }

              const argContent = source.substring(start + 1, i - 1);
              // Escape { and } in the argument content
              const escaped = argContent.replace(/\{/g, '\\{').replace(/\}/g, '\\}');
              parts.push('{' + escaped + '}');
            }
            continue;
          }
        }
      }

      // Not a problematic command, output as-is
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
