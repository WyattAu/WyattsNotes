/**
 * Webpack loader: preprocesses .md/.mdx files to escape braces inside
 * LaTeX command arguments that MDX's micromark can't parse as valid JS.
 *
 * Problem: \dfrac{|\mathbf{a}|}{|\mathbf{n}|} — micromark sees \dfrac{...}
 * and tries to parse {|\mathbf{a}|} as JSX. Acorn fails on \mathbf.
 *
 * Solution: Replace { with \{ inside LaTeX command arguments when the
 * content contains backslashes or pipes. The remark plugin (escape-jsx-braces)
 * then skips these already-escaped braces and leaves them as-is for KaTeX.
 *
 * KaTeX interprets \{ and \} as literal braces in math mode, but inside
 * \dfrac arguments, \{...\} creates a LaTeX group (same as {...}).
 * So \dfrac\{|\mathbf{a}|\}\{|\mathbf{n}|\} renders identically to
 * \dfrac{|\mathbf{a}|}{|\mathbf{n}|}.
 */

module.exports = function (source) {
  // List of LaTeX commands whose arguments commonly contain other LaTeX commands
  // that would fail acorn parsing. Only escape braces for these commands.
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
    'sum',
    'prod',
    'int',
    'lim',
  ];

  const result = source;
  let i = 0;
  const parts = [];

  while (i < source.length) {
    // Look for backslash followed by a command name
    if (source[i] === '\\' && i + 1 < source.length && /[a-zA-Z]/.test(source[i + 1])) {
      // Read the full command name
      const cmdStart = i;
      let cmdEnd = i + 1;
      while (cmdEnd < source.length && /[a-zA-Z]/.test(source[cmdEnd])) {
        cmdEnd++;
      }
      const cmdName = source.substring(cmdStart + 1, cmdEnd);

      // Check if this command has { that needs escaping
      if (PROBLEMATIC_CMDS.includes(cmdName)) {
        // Skip whitespace
        let pos = cmdEnd;
        while (pos < source.length && source[pos] in { ' ': 1, '\t': 1, '\n': 1 }) {
          pos++;
        }

        if (pos < source.length && source[pos] === '{') {
          // Check if the brace group contains backslashes or pipes
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
            // Unbalanced braces, output as-is
            parts.push(source[i]);
            i++;
            continue;
          }

          if (hasProblem) {
            // Output the command name as-is
            parts.push(source.substring(cmdStart, cmdEnd));
            i = cmdEnd;

            // Process each brace group, escaping { and } inside
            while (i < source.length) {
              // Skip whitespace
              while (i < source.length && source[i] in { ' ': 1, '\t': 1, '\n': 1 }) {
                parts.push(source[i]);
                i++;
              }

              if (i >= source.length || source[i] !== '{') break;

              // Read balanced {content}
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
              // Escape { and } in the argument content
              const escaped = argContent.replace(/\{/g, '\\{').replace(/\}/g, '\\}');
              parts.push('{' + escaped + '}');
            }
            continue;
          }
        }
      }

      // Not a problematic command, output as-is
      parts.push(source.substring(cmdStart, cmdEnd));
      i = cmdEnd;
      continue;
    }

    parts.push(source[i]);
    i++;
  }

  return parts.join('');
};
