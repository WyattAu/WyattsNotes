import { describe, it, expect } from 'vitest';
import {
  fixConsecutiveMath,
  protectCodeRegions,
  restoreCodeRegions,
} from '../scripts/fix-consecutive-math.mjs';

/**
 * Helper: run the full pipeline (protect + fix + restore).
 * This mirrors what processFile() does.
 */
function fixFile(content: string) {
  const { text, blocks } = protectCodeRegions(content);
  const { content: fixed, fixes } = fixConsecutiveMath(text);
  return { content: restoreCodeRegions(fixed, blocks), fixes };
}

describe('fix-consecutive-math v3', () => {
  describe('fixConsecutiveMath (core state machine)', () => {
    it('should fix consecutive inline math $a$$b$', () => {
      const input = 'text $a$$b$ more text';
      const { content, fixes } = fixConsecutiveMath(input);
      expect(content).toBe('text $a$, $b$ more text');
      expect(fixes).toBe(1);
    });

    it('should preserve display math $$...$$ on single line', () => {
      const input = '$$X \\rightarrow Y \\iff \\forall t_1, t_2$$';
      const { content, fixes } = fixConsecutiveMath(input);
      expect(content).toBe(input);
      expect(fixes).toBe(0);
    });

    it('should preserve display math $$...$$ on separate lines', () => {
      const input = 'Some text\n\n$$\n\\mathrm{HMAC(K, m)}\n$$\n\nMore text';
      const { content, fixes } = fixConsecutiveMath(input);
      expect(content).toBe(input);
      expect(fixes).toBe(0);
    });

    it('should fix $X \\rightarrow Y$$X$ consecutive inline', () => {
      const input = 'FD $X \\rightarrow Y$$X$ is a superkey';
      const { content, fixes } = fixConsecutiveMath(input);
      expect(content).toBe('FD $X \\rightarrow Y$, $X$ is a superkey');
      expect(fixes).toBe(1);
    });

    it('should handle $a$ text $b$ (normal inline, no fix needed)', () => {
      const input = 'where $a$ is the first and $b$ is the second';
      const { content, fixes } = fixConsecutiveMath(input);
      expect(content).toBe(input);
      expect(fixes).toBe(0);
    });

    it('should handle single $ inside display math', () => {
      const input = '$$f(x) = \\frac{$1}{2}$$';
      const { content, fixes } = fixConsecutiveMath(input);
      expect(content).toBe(input);
      expect(fixes).toBe(0);
    });

    it('should handle empty input', () => {
      const { content, fixes } = fixConsecutiveMath('');
      expect(content).toBe('');
      expect(fixes).toBe(0);
    });

    it('should handle no math delimiters', () => {
      const input = 'Just plain text with no math at all';
      const { content, fixes } = fixConsecutiveMath(input);
      expect(content).toBe(input);
      expect(fixes).toBe(0);
    });
  });

  describe('code region protection', () => {
    it('should protect fenced code blocks from state machine', () => {
      const input = 'Before\n```python\ncost = $2b$12$hash\n```\nAfter';
      const { content, fixes } = fixFile(input);
      expect(content).toBe(input);
      expect(fixes).toBe(0);
    });

    it('should protect inline code spans containing $ from state machine', () => {
      const input = 'The hash is `$2b$12$R9h/cIPz0gi...` and then $$\nHMAC\n$$ more';
      const { content, fixes } = fixFile(input);
      expect(content).toBe(input);
      expect(fixes).toBe(0);
    });

    it('should NOT protect inline code spans without $', () => {
      const input = '`code` $a$$b$ more';
      const { content, fixes } = fixFile(input);
      expect(content).toBe('`code` $a$, $b$ more');
      expect(fixes).toBe(1);
    });

    it('should fix consecutive inline but preserve display math after code block', () => {
      const input = '```python\nimport hmac\n```\n\n$$\n\\mathrm{HMAC(K, m)}\n$$';
      const { content, fixes } = fixFile(input);
      expect(content).toBe(input);
      expect(fixes).toBe(0);
    });

    it('should preserve HTML comments', () => {
      const input = '<!-- $hidden$ --> $$\ndisplay\n$$';
      const { content, fixes } = fixFile(input);
      expect(content).toBe(input);
      expect(fixes).toBe(0);
    });

    it('should handle the full crypto.md pattern', () => {
      const input = [
        '- **Output**: 60 characters (e.g., `$2b$12$R9h/cIPz0gi...`)',
        '',
        '```python',
        'import hmac',
        '```',
        '',
        '$$',
        '\\mathrm{HMAC(K, m) = H\\Big((K\' \\oplus \\mathrm{opad})}',
        '$$',
      ].join('\n');
      const { content, fixes } = fixFile(input);
      expect(content).toBe(input);
      expect(fixes).toBe(0);
    });

    it('should fix consecutive inline in prose while protecting code regions', () => {
      const input = [
        'The value $X \\rightarrow Y$$X$ is important.',
        '',
        '```',
        'cost = $2b$12$hash',
        '```',
        '',
        '$a$$b$ are consecutive.',
      ].join('\n');
      const expected = [
        'The value $X \\rightarrow Y$, $X$ is important.',
        '',
        '```',
        'cost = $2b$12$hash',
        '```',
        '',
        '$a$, $b$ are consecutive.',
      ].join('\n');
      const { content, fixes } = fixFile(input);
      expect(content).toBe(expected);
      expect(fixes).toBe(2);
    });

    it('should handle stray backticks in prose without over-matching', () => {
      const input = [
        'Text with ` stray backtick.',
        '',
        'Then $a$$b$ are consecutive.',
      ].join('\n');
      const expected = [
        'Text with ` stray backtick.',
        '',
        'Then $a$, $b$ are consecutive.',
      ].join('\n');
      const { content, fixes } = fixFile(input);
      expect(content).toBe(expected);
      expect(fixes).toBe(1);
    });

    it('should handle the economics file pattern with stray backtick', () => {
      const input = [
        '` stray backtick before content.',
        '',
        '**Problem 2.** Taylor Rule with $r^* = 2\\%$$\\pi^* = 2\\%$And',
        'Coefficients 0.5.',
      ].join('\n');
      const expected = [
        '` stray backtick before content.',
        '',
        '**Problem 2.** Taylor Rule with $r^* = 2\\%$, $\\pi^* = 2\\%$And',
        'Coefficients 0.5.',
      ].join('\n');
      const { content, fixes } = fixFile(input);
      expect(content).toBe(expected);
      expect(fixes).toBe(1);
    });
  });

  describe('protectCodeRegions', () => {
    it('should replace fenced code blocks with placeholders', () => {
      const { text, blocks } = protectCodeRegions('a\n```\ncode\n```\nb');
      expect(blocks).toHaveLength(1);
      expect(blocks[0]).toBe('```\ncode\n```');
      expect(text).not.toContain('code');
      expect(text).toContain('\x00CODEBLOCK0\x00');
    });

    it('should replace inline code spans containing $ with placeholders', () => {
      const { text, blocks } = protectCodeRegions('a `$x$` b');
      expect(blocks).toHaveLength(1);
      expect(blocks[0]).toBe('`$x$`');
      expect(text).not.toContain('$x$');
      expect(text).toContain('\x00CODEBLOCK0\x00');
    });

    it('should NOT replace inline code spans without $', () => {
      const { text, blocks } = protectCodeRegions('a `code` b');
      expect(blocks).toHaveLength(0);
      expect(text).toBe('a `code` b');
    });

    it('should replace HTML comments with placeholders', () => {
      const { text, blocks } = protectCodeRegions('a<!-- $x$ -->b');
      expect(blocks).toHaveLength(1);
      expect(blocks[0]).toBe('<!-- $x$ -->');
      expect(text).not.toContain('$x$');
    });

    it('should handle nested backticks in fenced blocks', () => {
      const input = '```\n`inline`\n```';
      const { text, blocks } = protectCodeRegions(input);
      expect(blocks).toHaveLength(1);
      expect(blocks[0]).toBe(input);
    });

    it('should not match inline code spans across lines', () => {
      const input = '`not\ncode`';
      const { text, blocks } = protectCodeRegions(input);
      expect(blocks).toHaveLength(0);
      expect(text).toBe(input);
    });
  });

  describe('restoreCodeRegions', () => {
    it('should restore all placeholders', () => {
      const { text, blocks } = protectCodeRegions('a `$x$` b');
      const restored = restoreCodeRegions(text, blocks);
      expect(restored).toBe('a `$x$` b');
    });

    it('should handle multiple blocks', () => {
      const { text, blocks } = protectCodeRegions('a `$1$` b `$2$` c');
      const restored = restoreCodeRegions(text, blocks);
      expect(restored).toBe('a `$1$` b `$2$` c');
    });
  });
});
