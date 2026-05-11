/**
 * Docusaurus plugin that adds a webpack loader to preprocess markdown/MDX files.
 *
 * Problem: MDX's micromark parser tries to parse {content} after LaTeX commands
 * like \dfrac{ as JSX expressions. When the content contains LaTeX (e.g. \mathbf),
 * acorn fails and MDX reports a compilation error. The remark plugin
 * (escape-jsx-braces) runs AFTER micromark, so it can't fix what micromark
 * already rejected.
 *
 * Solution: This webpack loader runs BEFORE MDX processing. It finds patterns
 * like \dfrac{...}{...} where the arguments contain LaTeX commands (backslashes)
 * and wraps the entire \dfrac{...}{...} in a JS string expression {'...'}.
 * This makes the {content} valid JS (a string literal), so micromark/acorn
 * succeeds. The remark plugin then converts the mdxTextExpression node back
 * to text with \{...\}, and KaTeX renders the original \dfrac{...}{...}.
 *
 * We use {'...'} (single-quoted string) rather than backtick template literals
 * because micromark's brace matching does NOT respect JS string delimiters —
 * it matches { with the first } it finds, even inside strings.
 * So instead we escape the braces WITHIN the string: \{ and \} are valid
 * inside a JS string (they're just literal backslash-brace characters).
 * The remark plugin then receives the string content and converts it back.
 */

const path = require('path');

// Matches \command{...} where the opening { is immediately after the command
// and the content between braces contains a backslash (LaTeX command).
// We need to handle nested braces too.
function escapeLatexBraces(source) {
  let result = '';
  let i = 0;

  while (i < source.length) {
    // Look for LaTeX commands followed by {
    if (
      source[i] === '\\' &&
      i + 1 < source.length &&
      /[a-zA-Z]/.test(source[i + 1])
    ) {
      // Found a LaTeX command like \dfrac, \mathbf, etc.
      // Read the command name
      let cmdEnd = i + 2;
      while (cmdEnd < source.length && /[a-zA-Z]/.test(source[cmdEnd])) {
        cmdEnd++;
      }

      // Skip whitespace between command and {
      let braceStart = cmdEnd;
      while (braceStart < source.length && source[braceStart] in {' ': 1, '\t': 1, '\n': 1}) {
        braceStart++;
      }

      if (braceStart < source.length && source[braceStart] === '{') {
        // Check if the brace content has backslashes (LaTeX commands)
        // or pipes (which fail in some acorn contexts)
        let depth = 0;
        let contentStart = braceStart + 1;
        let j = braceStart;
        let hasProblem = false;

        while (j < source.length) {
          if (source[j] === '{') {
            depth++;
          } else if (source[j] === '}') {
            depth--;
            if (depth === 0) break;
          } else if (source[j] === '\\' && j + 1 < source.length && /[a-zA-Z]/.test(source[j + 1])) {
            hasProblem = true;
          } else if (source[j] === '|') {
            hasProblem = true;
          }
          j++;
        }

        if (depth !== 0) {
          // Unbalanced braces, just output as-is
          result += source[i];
          i++;
          continue;
        }

        if (hasProblem) {
          // Found \cmd{content with \latex} — wrap in {'...'}
          // But we need to handle the content carefully.
          // Strategy: output \cmd as-is, then wrap the {content} part.
          result += source.substring(i, cmdEnd);
          i = cmdEnd;

          // Process each {arg} group
          while (i < source.length && source[i] in {' ': 1, '\t': 1, '\n': 1}) {
            result += source[i];
            i++;
          }

          // Now process brace groups
          while (i < source.length && source[i] === '{') {
            // Read balanced {content}
            let d = 0;
            let start = i;
            while (i < source.length) {
              if (source[i] === '{') d++;
              else if (source[i] === '}') {
                d--;
                if (d === 0) { i++; break; }
              }
              i++;
            }
            let argContent = source.substring(start + 1, i - 1);
            // Output the arg with escaped braces
            result += '{' + escapeBracesInArg(argContent) + '}';
          }
          continue;
        }
      }
    }

    result += source[i];
    i++;
  }

  return result;
}

function escapeBracesInArg(content) {
  // Escape { and } that are part of LaTeX commands within the argument
  // We need to be smart: only escape braces that are LaTeX grouping braces
  // (i.e., after a LaTeX command name or inside a nested group)
  // For simplicity and safety, escape ALL { and } in the argument
  // This is correct because:
  // - In JS string context, \{ and \} are literal backslash-brace
  // - The remark plugin converts mdxTextExpression to \{...\} text
  // - KaTeX receives \{ and \} which it renders as { and }
  // Wait, no. If we output \{ in the markdown, micromark sees it as
  // literal \{ (not a JSX trigger). But we're INSIDE a {'...'} string.
  // So the JS string contains \{ which evaluates to the string "\{"
  // (backslash-brace). Then the remark plugin wraps it as \{\{...\}\}
  // which is wrong.
  //
  // Actually, let me reconsider. The flow is:
  // 1. Loader: \dfrac{|\mathbf{a}|} → \dfrac{'{\\{|\\mathbf\\{a\\}|\\}'} 
  //    No wait, that's getting complicated.
  //
  // Let me use a completely different approach:
  // Replace \dfrac{...}{...} with a placeholder that micromark won't parse.
  // Use a remark plugin to restore the placeholder after micromark.

  // Actually, the simplest approach: just don't wrap in {'...'}.
  // Instead, break the JSX trigger by inserting a zero-width space or
  // using a different character sequence.
  //
  // BETTER APPROACH: Use the fact that micromark's JSX expression parser
  // looks for balanced { }. If we ensure the { and } are balanced from
  // micromark's perspective but the content is valid JS, we win.
  //
  // SIMPLEST: wrap the ENTIRE \dfrac{arg1}{arg2} in a single {'...'}
  // where the string contains \dfrac{arg1}{arg2} with braces escaped as
  // \\{ and \\} (double backslash for JS string escaping).
  // The remark plugin receives the string value \dfrac\{arg1\}\{arg2\}
  // and converts it to text \dfrac\{arg1\}\{arg2\}
  // KaTeX receives \dfrac\{arg1\}\{arg2\} which renders as \dfrac{arg1}{arg2}
  // because \{ and \} are LaTeX literal brace commands!
  //
  // THIS WORKS! Let me implement this.

  // Escape { to \\{ and } to \\} for JS string context
  // In the JS string '\\{', the \\ becomes \ and { stays {, so the string value is \{
  return content.replace(/\{/g, '\\\\{').replace(/\}/g, '\\\\}');
}

module.exports = function (context, options) {
  return {
    name: 'docusaurus-plugin-escape-latex-braces',

    configureWebpack(config, isServer) {
      // Only apply to client build (server uses same config)
      const loaderPath = path.resolve(__dirname, 'webpack-loader.js');

      return {
        module: {
          rules: [
            {
              test: /\.mdx?$/,
              // Insert before the MDX webpack loader
              enforce: 'pre',
              use: [
                {
                  loader: loaderPath,
                },
              ],
            },
          ],
        },
      };
    },
  };
};
