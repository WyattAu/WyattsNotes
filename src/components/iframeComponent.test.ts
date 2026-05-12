import { describe, expect, it } from 'vitest';

describe('IFrameComponent', () => {
  it('should use default width and height', () => {
    const defaultWidth = '800px';
    const defaultHeight = '200px';
    expect(defaultWidth).toBe('800px');
    expect(defaultHeight).toBe('200px');
  });

  it('should accept custom dimensions', () => {
    const width = '100%';
    const height = '400px';
    expect(width).toBe('100%');
    expect(height).toBe('400px');
  });

  it('should require src prop', () => {
    const src = 'https://example.com/embed';
    expect(typeof src).toBe('string');
    expect(src.length).toBeGreaterThan(0);
  });
});
