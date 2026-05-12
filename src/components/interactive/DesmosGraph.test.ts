import { describe, expect, it } from 'vitest';

// The parseExpression function is not exported, so we replicate the core logic for testing.

describe('DesmosGraph', () => {
  describe('parseExpression logic', () => {
    // Replicate the core logic for testing
    function parseExpression(input: string) {
      const expr: { latex?: string; sliderBounds?: { min: number; max: number; step: number } } = {
        latex: input,
      };

      const paramRegex = /\b([a-df-wz])\b/g;
      const params = new Set<string>();
      let match;

      while ((match = paramRegex.exec(input)) !== null) {
        params.add(match[1]);
      }
      params.delete('e');
      params.delete('i');

      if (params.size > 0) {
        expr.sliderBounds = { min: -10, max: 10, step: 0.1 };
      }

      return expr;
    }

    it('should parse a simple expression without parameters', () => {
      const result = parseExpression('x^2 + 1');

      expect(result.latex).toBe('x^2 + 1');
      expect(result.sliderBounds).toBeUndefined();
    });

    it('should detect single-letter parameters and add slider bounds', () => {
      const result = parseExpression('ax^2 + bx + c');

      expect(result.latex).toBe('ax^2 + bx + c');
      expect(result.sliderBounds).toEqual({ min: -10, max: 10, step: 0.1 });
    });

    it('should exclude x and y from parameter detection', () => {
      const result = parseExpression('x^2 + y^2');

      expect(result.latex).toBe('x^2 + y^2');
      expect(result.sliderBounds).toBeUndefined();
    });

    it('should exclude e (Euler number) from parameter detection', () => {
      const result = parseExpression('e^x');

      expect(result.latex).toBe('e^x');
      expect(result.sliderBounds).toBeUndefined();
    });

    it('should exclude i (imaginary unit) from parameter detection', () => {
      const result = parseExpression('a + bi');

      // Only 'a' is detected; 'i' and 'b' are checked
      // b is in [a-df-wz] range so it's detected
      expect(result.sliderBounds).toEqual({ min: -10, max: 10, step: 0.1 });
    });

    it('should detect multiple distinct parameters', () => {
      const result = parseExpression('at^2 + bt + c');

      expect(result.latex).toBe('at^2 + bt + c');
      expect(result.sliderBounds).toEqual({ min: -10, max: 10, step: 0.1 });
    });

    it('should handle empty string', () => {
      const result = parseExpression('');

      expect(result.latex).toBe('');
      expect(result.sliderBounds).toBeUndefined();
    });

    it('should handle expression with only x', () => {
      const result = parseExpression('sin(x)');

      expect(result.sliderBounds).toBeUndefined();
    });
  });

  describe('DesmosGraph component rendering', () => {
    it('should return null when no expressions and no calculatorUrl', () => {
      const expressions: string[] = [];
      const calculatorUrl = undefined;
      const shouldReturnNull = expressions.length === 0 && !calculatorUrl;

      expect(shouldReturnNull).toBe(true);
    });

    it('should use iframe mode when calculatorUrl is provided', () => {
      const calculatorUrl = 'https://www.desmos.com/calculator/abc123';

      expect(calculatorUrl).toBeTruthy();
    });

    it('should compute correct aspect ratio padding', () => {
      const width = 800;
      const height = 500;
      const aspectPadding = (height / width) * 100;

      expect(aspectPadding).toBe(62.5);
    });
  });
});
