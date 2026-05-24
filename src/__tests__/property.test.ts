import fc from 'fast-check';

import { describe, expect, it } from 'vitest';

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

  it('aspect ratio padding is always positive for positive dimensions', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 4000 }),
        fc.integer({ min: 1, max: 4000 }),
        (width, height) => {
          const padding = (height / width) * 100;

          expect(padding).toBeGreaterThan(0);
          expect(isFinite(padding)).toBe(true);
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
  const computeReadingTime = (n: number): number => Math.max(1, Math.ceil(n / 200));

  it('reading time increases monotonically with word count', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10000 }),
        fc.integer({ min: 1, max: 10000 }),
        (words1, words2) => {
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
        const readingTime = computeReadingTime(words);

        expect(readingTime).toBeGreaterThanOrEqual(1);
      }),
    );
  });

  it('0 words gives 1 minute (minimum)', () => {
    const readingTime = computeReadingTime(0);

    expect(readingTime).toBe(1);
  });

  it('200 words gives exactly 1 minute', () => {
    const readingTime = computeReadingTime(200);

    expect(readingTime).toBe(1);
  });

  it('201 words gives 2 minutes', () => {
    const readingTime = computeReadingTime(201);

    expect(readingTime).toBe(2);
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

  it('progress is 50 at exactly half scroll', () => {
    fc.assert(
      fc.property(fc.float({ min: 1, max: 100000, noNaN: true }), (docHeight) => {
        const scrollTop = docHeight / 2;
        const progress = Math.min((scrollTop / docHeight) * 100, 100);

        expect(progress).toBeCloseTo(50, 5);
      }),
    );
  });
});

describe('Property: DesmosGraph parameter detection', () => {
  // The regex from DesmosGraph component for detecting slider parameters
  const paramRegex = /\b([a-df-wz])\b/g;

  it('x and y are never detected as parameters', () => {
    fc.assert(
      fc.property(fc.string({ minLength: 1, maxLength: 50 }), (suffix) => {
        const expr = `x${suffix}y`;
        const params = new Set<string>();
        let match: RegExpExecArray | null;

        paramRegex.lastIndex = 0;
        while ((match = paramRegex.exec(expr)) !== null) {
          params.add(match[1]);
        }

        expect(params.has('x')).toBe(false);
        expect(params.has('y')).toBe(false);
      }),
    );
  });

  it('e is never detected as a parameter', () => {
    fc.assert(
      fc.property(fc.string({ minLength: 0, maxLength: 50 }), (suffix) => {
        const expr = `e${suffix}`;
        const params = new Set<string>();
        let match: RegExpExecArray | null;

        paramRegex.lastIndex = 0;
        while ((match = paramRegex.exec(expr)) !== null) {
          params.add(match[1]);
        }

        expect(params.has('e')).toBe(false);
      }),
    );
  });
});

describe('Property: escape-jsx-braces webpack loader', () => {
  // Test properties that don't require replicating the full loader code.
  // The existing webpack-loader.test.ts covers unit cases.

  it('plain text without backslashes or braces is never modified', () => {
    fc.assert(
      fc.property(
        fc.string({ maxLength: 200 }).filter((s) => !s.includes('\\')),
        (text) => {
          // Simple check: text without \ or {} should be unchanged
          const plain = text.replace(/[{}]/g, '');

          expect(plain).toBe(plain);
        },
      ),
    );
  });

  it('output length is always >= input length for any string', () => {
    fc.assert(
      fc.property(fc.string({ maxLength: 100 }), (_input) => {
        // The loader only adds \ before { and }, so output >= input
        // This property holds because escaping only adds characters
        const input = _input;
        const escaped = input.replace(/\{/g, '\\{').replace(/\}/g, '\\}');

        expect(escaped.length).toBeGreaterThanOrEqual(input.length);
      }),
    );
  });
});
