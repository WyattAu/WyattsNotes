/**
 * Webpack loader: preprocesses .md/.mdx files before MDX parsing.
 *
 * MDX's parser (micromark/acorn) fails on several valid markdown/LaTeX patterns.
 * This loader runs as enforce:'pre' to fix the source before MDX sees it.
 *
 * Pipeline:
 *   Pass 0:   collapseConstArrays — collapse multi-line const/export const array
 *             declarations to single lines so MDX's ESM collector captures them.
 *   Pass 0.5: fixAutolinks — convert <URL> markdown autolinks to [url](url) so
 *             MDX doesn't parse them as JSX tags.
 *   Pass 1:   escapeLatexCommandBraces — escape { and } inside LaTeX command
 *             arguments that MDX parses as JSX expressions.
 *   Pass 2:   escapeStandaloneBraces — escape standalone {text} and ^{...}/_{...}
 *             patterns with private-use-area placeholders.
 */

module.exports = function (source) {
  // ── Pass 0: Collapse multi-line const/export const array declarations ──
  //
  // MDX's ESM collector only collects lines starting with `import`, `export`,
  // or `{`. A multi-line declaration like:
  //   export const practiceQuestions = [
  //     { question: 'What...', options: [...], correct: 1, },
  //     ...
  //   ]
  // Only has the first line collected. Acorn receives incomplete JS and fails.
  // Solution: collapse the entire array declaration to a single line.
  source = collapseConstArrays(source);

  // ── Pass 0.5: Convert <URL> autolinks to markdown links ──
  //
  // In markdown, <https://example.com> is an autolink. MDX parses it as a
  // JSX tag <https://example.com/> and fails with "Unexpected character `/`".
  source = source.replace(/<(https?:\/\/[^>\s]+)>/g, '[$1]($1)');

  // ── Pass 1: Escape LaTeX command braces ──
  //
  // \dfrac{|\mathbf{a}|}{|\mathbf{n}|} — micromark sees \dfrac{...}
  // and tries to parse {|\mathbf{a}|} as JSX. Acorn fails on \mathbf.
  //
  // \mathrm{PMK{}} — MDX sees the inner {} as an empty JSX expression.
  //
  // Solution: Replace { with \{ inside LaTeX command arguments when the
  // content contains backslashes, pipes, or nested braces. For commands
  // whose first brace group is always a simple text argument (like \mathrm,
  // \text, etc.), always escape the content regardless.
  source = escapeLatexCommandBraces(source);

  // ── Pass 2: Escape standalone braces ──
  //
  // Any remaining { not part of a LaTeX command is likely set notation or
  // literal braces that MDX will try to evaluate as JavaScript.
  // Also handles ^{...} and _{...} LaTeX superscript/subscript patterns.
  // Replace with private-use-area placeholders that the remark plugin restores.
  source = escapeStandaloneBraces(source);

  return source;
};

// ─────────────────────────────────────────────────────────────────────────────
// Pass 0 implementation
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
// Pass 1 implementation
// ─────────────────────────────────────────────────────────────────────────────

function escapeLatexCommandBraces(source) {
  const ALWAYS_ESCAPE_CMDS = new Set([
    'mathrm',
    'text',
    'textbf',
    'textit',
    'textrm',
    'mathsf',
    'mathit',
    'mathnormal',
  ]);

  const CONDITIONAL_ESCAPE_CMDS = new Set([
    'dfrac',
    'tfrac',
    'cfrac',
    'frac',
    'binom',
    'sqrt',
    'mathbf',
    'mathcal',
    'mathbb',
    'boldsymbol',
    'begin',
    'underbrace',
    'overbrace',
    'overset',
    'underset',
    'sum',
    'prod',
    'int',
    'lim',
  ]);

  let i = 0;
  const parts = [];

  while (i < source.length) {
    if (source[i] === '\\' && i + 1 < source.length && /[a-zA-Z]/.test(source[i + 1])) {
      const cmdStart = i;
      let cmdEnd = i + 1;
      while (cmdEnd < source.length && /[a-zA-Z]/.test(source[cmdEnd])) {
        cmdEnd++;
      }
      const cmdName = source.substring(cmdStart + 1, cmdEnd);
      const shouldAlwaysEscape = ALWAYS_ESCAPE_CMDS.has(cmdName);
      const shouldConditionalEscape = CONDITIONAL_ESCAPE_CMDS.has(cmdName);

      if (shouldAlwaysEscape || shouldConditionalEscape) {
        let pos = cmdEnd;
        while (pos < source.length && source[pos] in { ' ': 1, '\t': 1, '\n': 1 }) {
          pos++;
        }

        if (pos < source.length && source[pos] === '{') {
          if (shouldAlwaysEscape) {
            parts.push(source.substring(cmdStart, cmdEnd));
            i = cmdEnd;

            while (i < source.length && source[i] in { ' ': 1, '\t': 1, '\n': 1 }) {
              parts.push(source[i]);
              i++;
            }

            if (i < source.length && source[i] === '{') {
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
              const escaped = argContent.replace(/\{/g, '\\{').replace(/\}/g, '\\}');
              parts.push('{' + escaped + '}');
            }
            continue;
          }

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
            hasProblem = true;
            depth = 0;
            j = pos;
            while (j < source.length) {
              if (source[j] === '{') {
                depth++;
                if (depth > 1) {
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
            parts.push(source.substring(cmdStart, cmdEnd));
            i = cmdEnd;

            while (i < source.length) {
              while (i < source.length && source[i] in { ' ': 1, '\t': 1, '\n': 1 }) {
                parts.push(source[i]);
                i++;
              }

              if (i >= source.length || source[i] !== '{') break;

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
                parts.push(source.substring(start));
                break;
              }

              const argContent = source.substring(start + 1, i - 1);
              const escaped = argContent.replace(/\{/g, '\\{').replace(/\}/g, '\\}');
              parts.push('{' + escaped + '}');
            }
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

// ─────────────────────────────────────────────────────────────────────────────
// Pass 2 implementation
// ─────────────────────────────────────────────────────────────────────────────

function escapeStandaloneBraces(source) {
  const PLACEHOLDER_LB = '\uE000';
  const PLACEHOLDER_RB = '\uE001';

  const output = [];
  let pos = 0;
  while (pos < source.length) {
    if (source[pos] === '{' && pos > 0 && source[pos - 1] !== '\\') {
      // Check if this { is preceded by ^ or _ (not \), indicating
      // LaTeX superscript/subscript like e^{-kt} or t_{1/2}.
      // MDX parses the braces as JSX and fails on non-JS content.
      if (source[pos - 1] === '^' || source[pos - 1] === '_') {
        if (pos < 2 || source[pos - 2] !== '\\') {
          let depth = 1;
          let j = pos + 1;
          while (j < source.length && depth > 0) {
            if (source[j] === '{') depth++;
            else if (source[j] === '}') depth--;
            j++;
          }
          if (depth === 0) {
            const inner = source.substring(pos + 1, j - 1);
            output.push(PLACEHOLDER_LB);
            output.push(inner);
            output.push(PLACEHOLDER_RB);
            pos = j;
            continue;
          }
        }
      }

      // Check if this is inside a JSX attribute context (preceded by =)
      let isJsxAttr = false;
      if (pos > 1 && source[pos - 1] === '=') {
        isJsxAttr = true;
      }

      if (!isJsxAttr) {
        let depth = 1;
        let j = pos + 1;
        while (j < source.length && depth > 0) {
          if (source[j] === '{' && source[j - 1] !== '\\') depth++;
          else if (source[j] === '}' && source[j - 1] !== '\\') depth--;
          j++;
        }
        if (depth === 0) {
          const inner = source.substring(pos + 1, j - 1);
          if (inner.length > 0 && inner.length < 500 && /[,\s\w]/.test(inner)) {
            output.push(PLACEHOLDER_LB);
            output.push(inner);
            output.push(PLACEHOLDER_RB);
            pos = j;
            continue;
          }
        }
      }
    }
    output.push(source[pos]);
    pos++;
  }

  return output.join('');
}
