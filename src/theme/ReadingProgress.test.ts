import { describe, expect, it } from 'vitest';

/**
 * Tests for the reading progress computation logic.
 *
 * The actual component uses window.scrollY and document heights,
 * so we test the pure computation formula directly.
 */
function computeProgress(scrollTop: number, docHeight: number): number {
  if (docHeight <= 0) return 0;
  return Math.min((scrollTop / docHeight) * 100, 100);
}

describe('ReadingProgress', () => {
  it('should return 0 when scrollTop is 0', () => {
    expect(computeProgress(0, 1000)).toBe(0);
  });

  it('should return 50 at halfway point', () => {
    expect(computeProgress(500, 1000)).toBe(50);
  });

  it('should return 100 at the bottom', () => {
    expect(computeProgress(1000, 1000)).toBe(100);
  });

  it('should clamp to 100 when scrollTop exceeds docHeight', () => {
    expect(computeProgress(1500, 1000)).toBe(100);
  });

  it('should return 0 when docHeight is 0', () => {
    expect(computeProgress(500, 0)).toBe(0);
  });

  it('should return 0 when docHeight is negative', () => {
    expect(computeProgress(500, -100)).toBe(0);
  });

  it('should handle fractional scroll positions', () => {
    const result = computeProgress(333.33, 1000);
    expect(result).toBeCloseTo(33.333, 1);
  });

  it('should return 0 when both are 0', () => {
    expect(computeProgress(0, 0)).toBe(0);
  });
});

describe('ReadingProgress / visibility thresholds', () => {
  it('should be hidden when progress is below 1%', () => {
    const progress = computeProgress(0, 100000);
    expect(progress).toBeLessThan(1);
  });

  it('should be visible when progress is at least 1%', () => {
    const progress = computeProgress(100, 10000);
    expect(progress).toBeGreaterThanOrEqual(1);
  });
});
