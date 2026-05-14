import { describe, expect, it } from 'vitest';

// Replicate the webpack loader logic for testing. Must stay in sync with
// src/plugins/escape-jsx-braces/webpack-loader.js
function escapeLatexBraces(source: string): string {
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
  const parts: string[] = [];
  const whitespace = new Set([' ', '\t', '\n']);

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

        while (pos < source.length && whitespace.has(source[pos])) {
          pos++;
        }

        if (pos < source.length && source[pos] === '{') {
          if (shouldAlwaysEscape) {
            parts.push(source.substring(cmdStart, cmdEnd));
            i = cmdEnd;

            while (i < source.length && whitespace.has(source[i])) {
              parts.push(source[i]);
              i++;
            }

            if (i < source.length && source[i] === '{') {
              let depth = 0;
              const start = i;

              while (i < source.length) {
                if (source[i] === '{') {
                  depth++;
                } else if (source[i] === '}') {
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
              if (depth > 1) {
                hasProblem = true;
              }
            } else if (source[j] === '}') {
              depth--;
              if (depth === 0) {
                break;
              }
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
                    if (source[j] === '{') {
                      innerDepth++;
                    } else if (source[j] === '}') {
                      innerDepth--;
                    }
                    j++;
                  }
                  continue;
                }
              } else if (source[j] === '}') {
                depth--;
                if (depth === 0) {
                  break;
                }
              }
              j++;
            }
          }

          if (hasProblem) {
            parts.push(source.substring(cmdStart, cmdEnd));
            i = cmdEnd;

            while (i < source.length) {
              while (i < source.length && whitespace.has(source[i])) {
                parts.push(source[i]);
                i++;
              }

              if (i >= source.length || source[i] !== '{') {
                break;
              }

              let d = 0;
              const start = i;
              let foundClose = false;

              while (i < source.length) {
                if (source[i] === '{') {
                  d++;
                } else if (source[i] === '}') {
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

describe('escape-jsx-braces webpack loader', () => {
  it('should escape braces in \\dfrac with nested LaTeX', () => {
    const input = '\\dfrac{\\mathbf{a}}{\\mathbf{n}}';
    const result = escapeLatexBraces(input);

    expect(result).toBe('\\dfrac{\\mathbf\\{a\\}}{\\mathbf\\{n\\}}');
  });

  it('should not escape braces in simple \\dfrac without nested commands', () => {
    const input = '\\dfrac{1}{2}';
    const result = escapeLatexBraces(input);

    // No backslash or pipe inside braces, so no escaping
    expect(result).toBe('\\dfrac{1}{2}');
  });

  it('should escape braces when pipe is present inside command args', () => {
    const input = '\\dfrac{|\\mathbf{a}|}{n}';
    const result = escapeLatexBraces(input);

    expect(result).toContain('\\mathbf\\{a\\}');
  });

  it('should leave non-problematic commands untouched', () => {
    const input = 'Hello \\alpha world';
    const result = escapeLatexBraces(input);

    expect(result).toBe(input);
  });

  it('should handle multiple commands on the same line', () => {
    const input = '$\\dfrac{\\mathbf{a}}{n}$ and $\\frac{1}{x}$';
    const result = escapeLatexBraces(input);

    expect(result).toBe('$\\dfrac{\\mathbf\\{a\\}}{n}$ and $\\frac{1}{x}$');
  });

  it('should handle \\begin{equation} with nested content', () => {
    const input = '\\begin{equation} E = mc^2 \\end{equation}';
    const result = escapeLatexBraces(input);

    // \begin has no backslash inside {equation}, no pipe, so no escaping
    expect(result).toBe(input);
  });

  it('should handle empty source', () => {
    const result = escapeLatexBraces('');

    expect(result).toBe('');
  });

  it('should handle unbalanced braces gracefully', () => {
    const input = '\\dfrac{unclosed';
    const result = escapeLatexBraces(input);

    // Unbalanced braces are output as-is
    expect(result).toContain('\\dfrac{unclosed');
  });

  it('should handle deeply nested braces', () => {
    const input = '\\dfrac{\\mathbf{\\textbf{a}}}{\\mathbf{n}}';
    const result = escapeLatexBraces(input);

    // Both inner braces should be escaped since they contain LaTeX commands
    expect(result).toContain('\\textbf\\{a\\}');
    expect(result).toContain('\\mathbf\\{n\\}');
  });

  it('should skip whitespace between command and brace', () => {
    const input = '\\dfrac {\\mathbf{x}} {y}';
    const result = escapeLatexBraces(input);

    expect(result).toBe('\\dfrac {\\mathbf\\{x\\}} {y}');
  });

  it('should escape empty group inside \\mathrm (\\mathrm{PMK{}})', () => {
    const input = '\\mathrm{PMK{}}';
    const result = escapeLatexBraces(input);

    // The {} inside \mathrm is escaped to \{\}
    expect(result).toBe('\\mathrm{PMK\\{\\}}');
  });

  it('should escape nested empty groups in complex \\mathrm expressions', () => {
    const input =
      '\\mathrm{PMK{} = \\mathrm{PBKDF2-HMAC-SHA1{}(\\mathrm{passphrase{}, \\mathrm{SSID{}, 4096, 256\\mathrm{ bits{})';
    const result = escapeLatexBraces(input);

    // All inner {} should be escaped
    expect(result).toContain('PMK\\{\\}');
    expect(result).toContain('PBKDF2-HMAC-SHA1\\{\\}');
    expect(result).toContain('passphrase\\{\\}');
    expect(result).toContain('SSID\\{\\}');
    expect(result).toContain('bits\\{\\}');
  });

  it('should not escape simple \\mathrm without nested braces', () => {
    const input = '\\mathrm{dB}';
    const result = escapeLatexBraces(input);

    // No nested braces, but still goes through always-escape path.
    // Content "dB" has no inner braces to escape, so output unchanged.
    expect(result).toBe('\\mathrm{dB}');
  });

  it('should not escape \\left\\{ and \\right\\} set delimiters', () => {
    const input = '\\left\\{ x \\right\\}';
    const result = escapeLatexBraces(input);

    // \left and \right are not in the command lists
    expect(result).toBe(input);
  });

  it('should handle \\text with nested braces like \\mathrm', () => {
    const input = '\\text{hello{}}';
    const result = escapeLatexBraces(input);

    // \text is in ALWAYS_ESCAPE_CMDS
    expect(result).toBe('\\text{hello\\{\\}}');
  });

  it('should escape nested depth > 1 in conditional commands', () => {
    const input = '\\mathbb{F{}}';
    const result = escapeLatexBraces(input);

    // \mathbb is conditional; depth > 1 triggers hasProblem
    expect(result).toBe('\\mathbb{F\\{\\}}');
  });
});
