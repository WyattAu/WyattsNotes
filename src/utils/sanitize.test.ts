import { describe, expect, it } from 'vitest';
import { sanitizeHtml } from './sanitize';

describe('sanitizeHtml', () => {
  it('preserves safe HTML elements', () => {
    const input = '<p>Hello <strong>world</strong></p>';

    expect(sanitizeHtml(input)).toBe(input);
  });

  it('preserves KaTeX math markup', () => {
    const input =
      '<math><mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>';

    expect(sanitizeHtml(input)).toBe(input);
  });

  it('preserves inline code', () => {
    const input = '<code>const x = 1;</code>';

    expect(sanitizeHtml(input)).toBe(input);
  });

  it('strips script tags', () => {
    const input = '<p>Hello</p><script>alert("xss")</script>';

    expect(sanitizeHtml(input)).toBe('<p>Hello</p>');
  });

  it('strips event handler attributes', () => {
    const input = '<p onclick="alert(1)">Hello</p>';

    expect(sanitizeHtml(input)).toBe('<p>Hello</p>');
  });

  it('strips javascript: URIs', () => {
    const input = '<a href="javascript:alert(1)">click</a>';
    const result = sanitizeHtml(input);

    expect(result).not.toContain('javascript:');
  });

  it('strips iframe tags', () => {
    const input = '<iframe src="https://evil.com"></iframe>';

    expect(sanitizeHtml(input)).toBe('');
  });

  it('strips object/embed tags', () => {
    const input = '<object data="evil.swf"></object><embed src="evil.swf">';
    const result = sanitizeHtml(input);

    expect(result).not.toContain('<object');
    expect(result).not.toContain('<embed');
  });

  it('preserves SVG elements', () => {
    const input =
      '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="red"></circle></svg>';

    expect(sanitizeHtml(input)).toContain('<svg');
    expect(sanitizeHtml(input)).toContain('<circle');
    expect(sanitizeHtml(input)).toContain('fill="red"');
  });

  it('strips SVG with script references', () => {
    const input =
      '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="red"/><foreignObject><script>alert(1)</script></foreignObject></svg>';
    const result = sanitizeHtml(input);

    expect(result).not.toContain('script');
    expect(result).not.toContain('foreignObject');
  });

  it('preserves links with safe href', () => {
    const input = '<a href="https://example.com">link</a>';

    expect(sanitizeHtml(input)).toBe(input);
  });

  it('handles empty string', () => {
    expect(sanitizeHtml('')).toBe('');
  });

  it('handles plain text without HTML', () => {
    expect(sanitizeHtml('Hello, world!')).toBe('Hello, world!');
  });

  it('preserves br tags', () => {
    const input = 'Line 1<br/>Line 2';

    expect(sanitizeHtml(input)).toContain('<br>');
    expect(sanitizeHtml(input)).toContain('Line 1');
    expect(sanitizeHtml(input)).toContain('Line 2');
  });

  it('strips img tags with onerror', () => {
    const input = '<img src="x" onerror="alert(1)" />';
    const result = sanitizeHtml(input);

    expect(result).not.toContain('onerror');
    // img is not in allowed tags
    expect(result).toBe('');
  });

  it('preserves sub/sup for chemistry notation', () => {
    const input = 'H<sub>2</sub>O and x<sup>2</sup>';

    expect(sanitizeHtml(input)).toBe(input);
  });

  it('preserves tables', () => {
    const input =
      '<table><thead><tr><th>Col</th></tr></thead><tbody><tr><td>Val</td></tr></tbody></table>';

    expect(sanitizeHtml(input)).toBe(input);
  });

  it('strips style tags (not attributes)', () => {
    const input = '<style>body{background:url(evil)}</style><p>Hello</p>';
    const result = sanitizeHtml(input);

    expect(result).not.toContain('<style');
    expect(result).toContain('<p>Hello</p>');
  });

  it('preserves inline style attributes', () => {
    const input = '<p style="color: red">Hello</p>';

    expect(sanitizeHtml(input)).toBe(input);
  });

  it('strips form elements', () => {
    const input = '<form action="evil"><input type="text"/></form>';
    const result = sanitizeHtml(input);

    expect(result).not.toContain('<form');
    expect(result).not.toContain('<input');
  });
});
