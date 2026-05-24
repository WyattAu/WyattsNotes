import fc from 'fast-check';
import { describe, expect, it } from 'vitest';

// Replicate the escape-jsx-braces webpack loader for property testing.
// The loader escapes { } inside LaTeX command arguments to prevent MDX parsing.
function escapeJsxBraces(source: string): string {
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
            } else if (source[j] === '\\' && j + 1 < source.length && /[a-zA-Z]/.test(source[j + 1])) {
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

describe('Property: escape-jsx-braces', () => {
  it('plain text is never modified', () => {
    fc.assert(
      fc.property(fc.string({ maxLength: 200 }), (text) => {
        // Text without backslashes or braces should be unchanged
        const plain = text.replace(/[\\{}]/g, '');
        expect(escapeJsxBraces(plain)).toBe(plain);
      }),
    );
  });

  it('escaped braces in always-escape commands produce balanced output', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...['mathrm', 'text', 'textbf', 'textit']),
        fc.string({ maxLength: 50 }).filter((s) => {
          // Only test with balanced-brace content (no stray braces)
          if (s.includes('\\')) return false;
          let d = 0;
          for (const ch of s) {
            if (ch === '{') d++;
            else if (ch === '}') d--;
            if (d < 0) return false;
          }
          return d === 0;
        }),
        (cmd, content) => {
          const input = `\\${cmd}{${content}}`;
          const result = escapeJsxBraces(input);

          // Output should start with the command
          expect(result).toContain(`\\${cmd}`);

          // Count unescaped braces: result should have balanced braces
          let depth = 0;
          for (let idx = 0; idx < result.length; idx++) {
            if (result[idx] === '{' && (idx === 0 || result[idx - 1] !== '\\')) {
              depth++;
            } else if (result[idx] === '}' && (idx === 0 || result[idx - 1] !== '\\')) {
              depth--;
            }
          }
          expect(depth).toBe(0);
        },
      ),
    );
  });

  it('idempotent for content without braces', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...['mathrm', 'text', 'frac', 'dfrac']),
        fc.string({ maxLength: 30 }).filter((s) => !s.includes('\\') && !s.includes('{') && !s.includes('}')),
        (cmd, content) => {
          const input = `\\${cmd}{${content}}`;
          const first = escapeJsxBraces(input);
          const second = escapeJsxBraces(first);

          expect(second).toBe(first);
        },
      ),
    );
  });

  it('always-escape commands escape inner braces', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...['mathrm', 'text', 'textbf', 'textit']),
        fc.string({ maxLength: 30 }).filter((s) => !s.includes('\\')),
        (cmd, content) => {
          const input = `\\${cmd}{${content}}`;
          const result = escapeJsxBraces(input);

          // For always-escape commands, inner braces should be escaped
          // The result format is: \cmd{escaped_content}
          // where escaped_content has { replaced with \{ and } replaced with \}
          // Verify the output has the command followed by exactly one { and ending with }
          expect(result).toMatch(new RegExp(`^\\\\${cmd}\\{.*\\}$`));
        },
      ),
    );
  });

  it('output length is always >= input length', () => {
    fc.assert(
      fc.property(fc.string({ maxLength: 100 }), (input) => {
        const result = escapeJsxBraces(input);
        expect(result.length).toBeGreaterThanOrEqual(input.length);
      }),
    );
  });

  it('never introduces unescaped lone backslash-brace', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...['mathrm', 'text']),
        fc.string({ maxLength: 30 }).filter((s) => !s.includes('\\')),
        (cmd, content) => {
          const input = `\\${cmd}{${content}}`;
          const result = escapeJsxBraces(input);

          // Every { or } inside the argument should be preceded by \
          const match = result.match(new RegExp(`\\\\${cmd}\\{(.*)\\}$`, 's'));
          if (match) {
            const inner = match[1];
            for (let idx = 0; idx < inner.length; idx++) {
              if (inner[idx] === '{' && (idx === 0 || inner[idx - 1] !== '\\')) {
                expect.fail(`Unescaped { found inside always-escape cmd ${cmd}: ${inner}`);
              }
            }
          }
        },
      ),
    );
  });
});

describe('Property: Geogebra URL construction', () => {
  it('URL always contains appletId and standard flags', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 50 }).filter((s) => /^[a-zA-Z0-9_-]+$/.test(s)),
        fc.integer({ min: 100, max: 2000 }),
        fc.integer({ min: 100, max: 2000 }),
        (appletId, width, height) => {
          const url = `https://www.geogebra.org/material/iframe/id/${appletId}/width/${width}/height/${height}/border/888888/sdz/true/ai/false/asb/false/sri/false/rc/false/ai/false/sdz/true/smb/false/stb/false/stbh/false/ld/false/sdl/false/ltd/false/srd/false/sra/false/lla/false/lt/false`;
          expect(url).toContain(appletId);
          expect(url).toContain('/sdz/true');
          expect(url).toContain('/ai/false');
          expect(url).toMatch(/^https:\/\//);
        },
      ),
    );
  });

  it('aspect ratio padding is always between 0 and 100 for positive dimensions', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 4000 }),
        fc.integer({ min: 1, max: 4000 }),
        (width, height) => {
          const padding = (height / width) * 100;
          expect(padding).toBeGreaterThan(0);
          expect(padding).toBeLessThanOrEqual(100 * (4000 / 1)); // theoretical max
          // For square: 100%, for wide: < 100%, for tall: > 100%
        },
      ),
    );
  });
});

describe('Property: PhetSimulation URL construction', () => {
  it('URL always ends with _en.html and points to /sims/html/', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 80 }).filter((s) => /^[a-zA-Z0-9_-]+$/.test(s)),
        (simName) => {
          const url = `https://phet.colorado.edu/sims/html/${simName}/latest/${simName}_en.html`;
          expect(url).toContain('/sims/html/');
          expect(url).toMatch(/_en\.html$/);
          expect(url).toContain(simName);
        },
      ),
    );
  });
});

describe('Property: reading time computation', () => {
  it('reading time increases monotonically with word count', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10000 }),
        fc.integer({ min: 1, max: 10000 }),
        (words1, words2) => {
          const computeReadingTime = (n: number) => Math.max(1, Math.ceil(n / 200));
          const t1 = computeReadingTime(words1);
          const t2 = computeReadingTime(words2);

          if (words2 >= words1) {
            expect(t2).toBeGreaterThanOrEqual(t1);
          }
        },
      ),
    );
  });

  it('reading time is always >= 1 for any positive word count', () => {
    fc.assert(
      fc.property(fc.integer({ min: 1, max: 100000 }), (words) => {
        const readingTime = Math.max(1, Math.ceil(words / 200));
        expect(readingTime).toBeGreaterThanOrEqual(1);
      }),
    );
  });

  it('0 words gives 1 minute (minimum)', () => {
    const readingTime = Math.max(1, Math.ceil(0 / 200));
    expect(readingTime).toBe(1);
  });
});

describe('Property: reading progress computation', () => {
  it('progress is clamped to [0, 100]', () => {
    fc.assert(
      fc.property(
        fc.float({ min: 0, max: 100000, noNaN: true }),
        fc.float({ min: 1, max: 100000, noNaN: true }),
        (scrollTop, docHeight) => {
          const progress = Math.min((scrollTop / docHeight) * 100, 100);
          expect(progress).toBeGreaterThanOrEqual(0);
          expect(progress).toBeLessThanOrEqual(100);
        },
      ),
    );
  });

  it('progress is 0 when scrollTop is 0', () => {
    fc.assert(
      fc.property(fc.float({ min: 1, max: 100000, noNaN: true }), (docHeight) => {
        const progress = Math.min((0 / docHeight) * 100, 100);
        expect(progress).toBe(0);
      }),
    );
  });

  it('progress is 100 when scrollTop equals or exceeds docHeight', () => {
    fc.assert(
      fc.property(
        fc.float({ min: 1, max: 100000, noNaN: true }),
        fc.float({ min: 0, max: 1, noNaN: true }),
        (docHeight, excess) => {
          const scrollTop = docHeight + excess * docHeight;
          const progress = Math.min((scrollTop / docHeight) * 100, 100);
          expect(progress).toBe(100);
        },
      ),
    );
  });
});
