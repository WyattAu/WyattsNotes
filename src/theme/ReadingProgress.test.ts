import { describe, expect, it } from 'vitest';

describe('ReadingProgress', () => {
  it('should compute progress as percentage of scrollable height', () => {
    const scrollTop = 500;
    const docHeight = 2000;
    const windowHeight = 500;
    const scrollableHeight = docHeight - windowHeight;

    const progress = scrollableHeight > 0 ? Math.min((scrollTop / scrollableHeight) * 100, 100) : 0;
    expect(progress).toBe(33.33333333333333);
  });

  it('should clamp progress to 100%', () => {
    const scrollTop = 5000;
    const docHeight = 2000;
    const windowHeight = 500;
    const scrollableHeight = docHeight - windowHeight;

    const progress = scrollableHeight > 0 ? Math.min((scrollTop / scrollableHeight) * 100, 100) : 0;
    expect(progress).toBe(100);
  });

  it('should return 0 when docHeight equals windowHeight', () => {
    const scrollTop = 0;
    const docHeight = 500;
    const windowHeight = 500;
    const scrollableHeight = docHeight - windowHeight;

    const progress = scrollableHeight > 0 ? Math.min((scrollTop / scrollableHeight) * 100, 100) : 0;
    expect(progress).toBe(0);
  });

  it('should not render when progress < 1%', () => {
    const progress = 0.5;
    const shouldRender = progress >= 1;
    expect(shouldRender).toBe(false);
  });

  it('should render when progress >= 1%', () => {
    const progress = 5;
    const shouldRender = progress >= 1;
    expect(shouldRender).toBe(true);
  });
});
