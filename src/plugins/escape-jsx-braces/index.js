/**
 * Remark plugin to escape curly braces that MDX interprets as JSX expressions.
 *
 * Handles THREE cases:
 *
 * 1. mdxTextExpression nodes: MDX consumed {expr} as a JSX expression.
 *    - If expr looks like a LaTeX environment name (simple identifier like
 *      "aligned", "cases", "pmatrix"), restore as {expr} (raw braces) since
 *      these are almost certainly part of \begin{...}/\end{...} in math blocks.
 *    - Otherwise, replace with \{expr\} so KaTeX sees braces as group delimiters.
 *
 * 2. Placeholder nodes: The preprocessing script (scripts/escape-latex-braces.js)
 *    replaced { and } around LaTeX command arguments with ⦃LB⦄ and ⦃RB⦄
 *    placeholders, or ◆LB◆/◆RB◆ diamond placeholders. Restore these to { and }
 *    AFTER brace escaping so they are NOT double-escaped.
 *
 * 3. Remaining literal braces in text nodes: { and } that MDX didn't parse
 *    as JSX. Replace with \{ \} which KaTeX renders as literal braces.
 *
 * ORDER MATTERS: escape braces first (step 3), then restore placeholders (step 2).
 * This ensures placeholder-restored braces are treated as LaTeX group delimiters
 * by KaTeX, while remaining literal braces are escaped for safe rendering.
 */
const visit = require('unist-util-visit');

// LaTeX environment names that appear in \begin{...}/\end{...}.
// These are always simple identifiers that MDX can parse as valid JS expressions.
// We restore them with raw braces so KaTeX renders them correctly.
const LATEX_ENV_NAMES = new Set([
  'aligned',
  'align',
  'align*',
  'cases',
  'gather',
  'gather*',
  'pmatrix',
  'bmatrix',
  'vmatrix',
  'matrix',
  'array',
  'equation',
  'equation*',
  'split',
  'multline',
  'multline*',
  'flalign',
  'flalign*',
  'eqnarray',
  'eqnarray*',
  'tabular',
  'table',
  'center',
  'displaymath',
  'CD',
]);

module.exports = function escapeJsxBraces() {
  return (tree) => {
    // Collect mdxTextExpression nodes to replace
    const replacements = [];

    visit(tree, 'mdxTextExpression', (node, index, parent) => {
      if (parent && typeof index === 'number') {
        replacements.push({ parent, index, node });
      }
    });

    // Replace mdxTextExpression nodes
    if (replacements.length > 0) {
      console.error(`[escape-jsx-braces] mdxTextExpression nodes found: ${replacements.length}`);
    }
    for (const { parent, index, node } of replacements) {
      const expr = node.value || '';

      if (LATEX_ENV_NAMES.has(expr.trim())) {
        // LaTeX environment name: restore with raw braces for KaTeX
        parent.children.splice(index, 1, {
          type: 'text',
          value: '{' + expr + '}',
          // Mark so step 3 doesn't re-escape these braces
          _latexEnv: true,
        });
      } else {
        // Other expression: escape braces for safety
        parent.children.splice(index, 1, {
          type: 'text',
          value: '\\{' + expr + '\\}',
        });
      }
    }

    // Process all text nodes
    let textDiamondCount = 0;
    visit(tree, 'text', (node) => {
      // Skip nodes we inserted for LaTeX environments
      if (node._latexEnv) return;

      // Step 1: Escape remaining literal braces (skip already-escaped \{ and \})
      node.value = node.value.replace(/(?<!\\)\{/g, '\\{').replace(/(?<!\\)\}/g, '\\}');

      // Step 2: Restore placeholders — the webpack loader (or source preprocessing)
      // replaced { and } inside math contexts with private-use-area characters
      // to prevent MDX from parsing them as JSX expressions.
      // Support both old (multi-char) and new (single-char) placeholder formats,
      // as well as diamond placeholders (U+25C6) used by the preprocessing script.
      const before = node.value;
      node.value = node.value
        .replace(/\u29C3LB\u29C4/g, '{')
        .replace(/\u29C3RB\u29C4/g, '}')
        .replace(/\uE000/g, '{')
        .replace(/\uE001/g, '}')
        .replace(/\u25C6LB\u25C6/g, '{')
        .replace(/\u25C6RB\u25C6/g, '}');
      if (before !== node.value) textDiamondCount++;
    });
    if (textDiamondCount > 0) {
      console.error(`[escape-jsx-braces] text nodes with diamonds restored: ${textDiamondCount}`);
    }

    // Also restore placeholders in math nodes (inlineMath and math).
    // The remark-math plugin parses $...$ as inlineMath and $$...$$ as math.
    // These nodes have a 'value' property with the raw LaTeX content.
    // The preprocessing script replaces braces inside math blocks with
    // placeholders to prevent MDX from parsing them as JSX.
    // We must restore them before KaTeX processes the math server-side.
    //
    // CRITICAL: mdast-util-math's fromMarkdown handler also pre-populates
    // node.data.hChildren with HAST elements containing the raw math text.
    // rehype-katex reads from these HAST children (via toText()), NOT from
    // node.value. So we must restore diamonds in BOTH places.
    const restoreDiamonds = (str) =>
      str
        .replace(/\u29C3LB\u29C4/g, '{')
        .replace(/\u29C3RB\u29C4/g, '}')
        .replace(/\uE000/g, '{')
        .replace(/\uE001/g, '}')
        .replace(/\u25C6LB\u25C6/g, '{')
        .replace(/\u25C6RB\u25C6/g, '}');

    let mathCount = 0;
    let diamondCount = 0;
    visit(tree, ['math', 'inlineMath'], (node) => {
      mathCount++;
      if (typeof node.value === 'string') {
        const before = node.value;
        node.value = restoreDiamonds(node.value);
        if (before !== node.value) diamondCount++;

        // Also restore in hChildren (pre-populated by mdast-util-math)
        if (node.data && node.data.hChildren) {
          for (const child of node.data.hChildren) {
            if (child.type === 'element' && child.children) {
              for (const textChild of child.children) {
                if (textChild.type === 'text' && typeof textChild.value === 'string') {
                  const hBefore = textChild.value;
                  textChild.value = restoreDiamonds(textChild.value);
                  if (hBefore !== textChild.value) diamondCount++;
                }
              }
            } else if (child.type === 'text' && typeof child.value === 'string') {
              const hBefore = child.value;
              child.value = restoreDiamonds(child.value);
              if (hBefore !== child.value) diamondCount++;
            }
          }
        }
      }
    });
    if (mathCount > 0 || diamondCount > 0) {
      console.error(`[escape-jsx-braces] math nodes: ${mathCount}, restored diamonds in: ${diamondCount}`);
    }
  };
};
