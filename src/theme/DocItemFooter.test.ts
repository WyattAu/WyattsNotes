import { describe, expect, it } from 'vitest';

/**
 * Tests for the getReadingTime logic extracted from DocItemFooter.
 *
 * The actual function reads from document.querySelector('article') and
 * is not directly importable, so we replicate the core algorithm here
 * to verify correctness of the word-counting and rounding logic.
 */
function computeReadingTime(text: string, wordsPerMinute = 200): string {
  const words = text.split(/\s+/).filter((w) => w.length > 0).length;

  return `${Math.max(1, Math.ceil(words / wordsPerMinute))} min read`;
}

describe('DocItemFooter / getReadingTime', () => {
  it('should return 1 min for empty text (minimum)', () => {
    expect(computeReadingTime('')).toBe('1 min read');
  });

  it('should return 1 min for text under 200 words', () => {
    const text = 'word '.repeat(50).trim();

    expect(computeReadingTime(text)).toBe('1 min read');
  });

  it('should return 1 min for exactly 200 words', () => {
    const text = 'word '.repeat(200).trim();

    expect(computeReadingTime(text)).toBe('1 min read');
  });

  it('should return 2 min for 201 words', () => {
    const text = 'word '.repeat(201).trim();

    expect(computeReadingTime(text)).toBe('2 min read');
  });

  it('should return 4 min for 800 words', () => {
    const text = 'word '.repeat(800).trim();

    expect(computeReadingTime(text)).toBe('4 min read');
  });

  it('should handle text with multiple spaces between words', () => {
    const text = 'hello   world    foo   bar';

    expect(computeReadingTime(text)).toBe('1 min read');
  });

  it('should handle text with newlines and tabs', () => {
    const text = 'hello\nworld\tfoo bar';

    expect(computeReadingTime(text)).toBe('1 min read');
  });

  it('should filter out empty strings from split', () => {
    const text = '   ';

    expect(computeReadingTime(text)).toBe('1 min read');
  });
});
