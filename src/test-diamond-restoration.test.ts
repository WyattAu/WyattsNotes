import { describe, it, expect } from 'vitest';

// Manual test — load the remark plugin and test diamond restoration
// by simulating what remark-math and our plugin do

describe('escape-jsx-braces diamond restoration', () => {
  it('handles diamond placeholders in math node values', () => {
    // Simulate what the remark plugin does
    // The math node value contains diamonds from the escape script
    const mathNodeValue = '\\frac{◆LB◆a◆RB◆}{◆LB◆b◆RB◆}';

    // Apply the same restoration logic as the plugin
    const restored = mathNodeValue
      .replace(/\u29C3LB\u29C4/g, '{')
      .replace(/\u29C3RB\u29C4/g, '}')
      .replace(/\uE000/g, '{')
      .replace(/\uE001/g, '}')
      .replace(/\u25C6LB\u25C6/g, '{')
      .replace(/\u25C6RB\u25C6/g, '}');

    console.log('Input:', JSON.stringify(mathNodeValue));
    console.log('Restored:', JSON.stringify(restored));

    expect(restored).toBe('\\frac{a}{b}');
    expect(restored).not.toContain('◆');
  });

  it('handles text node with diamonds restored AFTER brace escaping', () => {
    // Simulate text node processing order:
    // Step 1: escape { and } to \{ and \}
    // Step 2: restore diamonds to { and }
    let textNodeValue = 'some ◆LB◆text◆RB◆ here';

    // Step 1 (line 95 of plugin)
    textNodeValue = textNodeValue.replace(/(?<!\\)\{/g, '\\{').replace(/(?<!\\)\}/g, '\\}');

    // Step 2 (lines 102-108 of plugin)
    textNodeValue = textNodeValue
      .replace(/\u29C3LB\u29C4/g, '{')
      .replace(/\u29C3RB\u29C4/g, '}')
      .replace(/\uE000/g, '{')
      .replace(/\uE001/g, '}')
      .replace(/\u25C6LB\u25C6/g, '{')
      .replace(/\u25C6RB\u25C6/g, '}');

    console.log('Text restored:', JSON.stringify(textNodeValue));
    // Diamonds become raw braces — these are in a text node, not math
    expect(textNodeValue).toBe('some {text} here');
  });

  it('LB and RB constants match the regex pattern', () => {
    const LB = '\u25C6LB\u25C6';
    const RB = '\u25C6RB\u25C6';
    console.log('LB repr:', JSON.stringify(LB), 'length:', LB.length);
    console.log('RB repr:', JSON.stringify(RB), 'length:', RB.length);

    const regexLB = /\u25C6LB\u25C6/;
    const regexRB = /\u25C6RB\u25C6/;

    expect(regexLB.test(LB)).toBe(true);
    expect(regexRB.test(RB)).toBe(true);

    // Test the actual replacement
    const test = `◆LB◆hello◆RB◆`;
    const result = test.replace(/\u25C6LB\u25C6/g, '{').replace(/\u25C6RB\u25C6/g, '}');
    console.log('Replace test:', JSON.stringify(test), '->', JSON.stringify(result));
    expect(result).toBe('{hello}');
  });
});
