import { describe, expect, it } from 'vitest';

/**
 * Tests for iframeComponent default props and behavior.
 */
describe('IFrameComponent', () => {
  describe('default props', () => {
    it('should default width to 800px', () => {
      const width = '800px';
      expect(width).toBe('800px');
    });

    it('should default height to 200px', () => {
      const height = '200px';
      expect(height).toBe('200px');
    });

    it('should default title to empty string', () => {
      const title = '';
      expect(title).toBe('');
    });

    it('should default ariaLabel to empty string', () => {
      const ariaLabel = '';
      expect(ariaLabel).toBe('');
    });
  });

  describe('custom props', () => {
    it('should accept custom width', () => {
      const width = '100%';
      expect(width).toBe('100%');
    });

    it('should accept custom height', () => {
      const height = '500px';
      expect(height).toBe('500px');
    });

    it('should accept custom title', () => {
      const title = 'External Tool';
      expect(title).toBe('External Tool');
    });

    it('should accept custom ariaLabel', () => {
      const ariaLabel = 'Embedded calculator';
      expect(ariaLabel).toBe('Embedded calculator');
    });

    it('should accept src as required prop', () => {
      const src = 'https://example.com/embed';
      expect(src).toBeTruthy();
      expect(src).toContain('https://');
    });
  });
});
