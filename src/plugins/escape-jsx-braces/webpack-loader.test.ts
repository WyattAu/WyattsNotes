import { describe, expect, it } from 'vitest';

// Replicate the webpack loader logic for testing
function escapeLatexBraces(source: string): string {
  const PROBLEMATIC_CMDS = [
    'dfrac',
    'tfrac',
    'cfrac',
    'frac',
    'binom',
    'sqrt',
    'mathbf',
    'mathrm',
    'mathcal',
    'mathbb',
    'mathsf',
    'mathit',
    'mathnormal',
    'boldsymbol',
    'text',
    'textbf',
    'textit',
    'textrm',
    'begin',
    'underbrace',
    'overbrace',
    'overset',
    'underset',
  ];

  let i = 0;
  const parts: string[] = [];

  while (i < source.length) {
    if (source[i] === '\\' && i + 1 < source.length && /[a-zA-Z]/.test(source[i + 1])) {
      const cmdStart = i;
      let cmdEnd = i + 1;
      while (cmdEnd < source.length && /[a-zA-Z]/.test(source[cmdEnd])) {
        cmdEnd++;
      }
      const cmdName = source.substring(cmdStart + 1, cmdEnd);

      if (PROBLEMATIC_CMDS.includes(cmdName)) {
        let pos = cmdEnd;
        while (
          pos < source.length &&
          ((source[pos] in { ' ': 1, '\t': 1, '\n': 1 }) as Record<string, number>)
        ) {
          pos++;
        }

        if (pos < source.length && source[pos] === '{') {
          let depth = 0;
          let j = pos;
          let hasProblem = false;

          while (j < source.length) {
            if (source[j] === '{') depth++;
            else if (source[j] === '}') {
              depth--;
              if (depth === 0) break;
            } else if (
              source[j] === '\\' &&
              j + 1 < source.length &&
              /[a-zA-Z]/.test(source[j + 1])
            ) {
              hasProblem = true;
            } else if (source[j] === '|') {
              hasProblem = true;
            }
            j++;
          }

          if (depth !== 0) {
            parts.push(source[i]);
            i++;
            continue;
          }

          if (hasProblem) {
            parts.push(source.substring(cmdStart, cmdEnd));
            i = cmdEnd;

            while (i < source.length) {
              while (
                i < source.length &&
                ((source[i] in { ' ': 1, '\t': 1, '\n': 1 }) as Record<string, number>)
              ) {
                parts.push(source[i]);
                i++;
              }

              if (i >= source.length || source[i] !== '{') break;

              let d = 0;
              const start = i;
              while (i < source.length) {
                if (source[i] === '{') d++;
                else if (source[i] === '}') {
                  d--;
                  if (d === 0) {
                    i++;
                    break;
                  }
                }
                i++;
              }

              const argContent = source.substring(start + 1, i - 1);
              const escaped = argContent.replace(/\{/g, '\\{').replace(/\}/g, '\\}');
              parts.push('{' + escaped + '}');
            }
            continue;
          }
        }
      }

      parts.push(source.substring(cmdStart, cmdEnd));
      i = cmdEnd;
      continue;
    }

    parts.push(source[i]);
    i++;
  }

  return parts.join('');
}

describe('escape-jsx-braces webpack loader', () => {
  it('should escape braces in \\dfrac with nested LaTeX', () => {
    const input = '\\dfrac{\\mathbf{a}}{\\mathbf{n}}';
    const result = escapeLatexBraces(input);

    expect(result).toBe('\\dfrac{\\mathbf\\{a\\}}{\\mathbf\\{n\\}}');
  });

  it('should not escape braces in simple \\dfrac without nested commands', () => {
    const input = '\\dfrac{1}{2}';
    const result = escapeLatexBraces(input);

    // No backslash or pipe inside braces, so no escaping
    expect(result).toBe('\\dfrac{1}{2}');
  });

  it('should escape braces when pipe is present inside command args', () => {
    const input = '\\dfrac{|\\mathbf{a}|}{n}';
    const result = escapeLatexBraces(input);

    expect(result).toContain('\\mathbf\\{a\\}');
  });

  it('should leave non-problematic commands untouched', () => {
    const input = 'Hello \\alpha world';
    const result = escapeLatexBraces(input);

    expect(result).toBe(input);
  });

  it('should handle multiple commands on the same line', () => {
    const input = '$\\dfrac{\\mathbf{a}}{n}$ and $\\frac{1}{x}$';
    const result = escapeLatexBraces(input);

    expect(result).toBe('$\\dfrac{\\mathbf\\{a\\}}{n}$ and $\\frac{1}{x}$');
  });

  it('should handle \\begin{equation} with nested content', () => {
    const input = '\\begin{equation} E = mc^2 \\end{equation}';
    const result = escapeLatexBraces(input);

    // \begin has no backslash inside {equation}, no pipe, so no escaping
    expect(result).toBe(input);
  });

  it('should handle empty source', () => {
    const result = escapeLatexBraces('');

    expect(result).toBe('');
  });

  it('should handle unbalanced braces gracefully', () => {
    const input = '\\dfrac{unclosed';
    const result = escapeLatexBraces(input);

    // Unbalanced braces are output as-is
    expect(result).toContain('\\dfrac{unclosed');
  });

  it('should handle deeply nested braces', () => {
    const input = '\\dfrac{\\mathbf{\\textbf{a}}}{\\mathbf{n}}';
    const result = escapeLatexBraces(input);

    // Both inner braces should be escaped since they contain LaTeX commands
    expect(result).toContain('\\textbf\\{a\\}');
    expect(result).toContain('\\mathbf\\{n\\}');
  });

  it('should skip whitespace between command and brace', () => {
    const input = '\\dfrac {\\mathbf{x}} {y}';
    const result = escapeLatexBraces(input);

    expect(result).toBe('\\dfrac {\\mathbf\\{x\\}} {y}');
  });
});
