/**
 * Remark plugin to escape curly braces that MDX interprets as JSX expressions.
 *
 * MDX parses {Word} as JSX before remark-math can process LaTeX math.
 * This plugin handles TWO cases:
 *
 * 1. Text nodes: { and } still present as literal characters (MDX didn't parse
 *    them as JSX because they were in certain contexts). Replace with \{ \}
 *    which KaTeX renders as literal braces.
 *
 * 2. mdxJsxTextExpression nodes: MDX already consumed {expr} as a JSX
 *    expression node. Replace the node with a text node containing \{expr\}
 *    so remark-math/KaTeX sees the braces as LaTeX group delimiters.
 *
 * Case 2 is critical: without it, {HK} becomes a React variable reference
 * at build time, causing ReferenceError during static site generation.
 */
const visit = require('unist-util-visit');

module.exports = function escapeJsxBraces() {
  return (tree, vfile) => {
    // Collect mdxJsxTextExpression nodes to replace (can't modify during visit)
    const replacements = [];

    visit(tree, 'mdxTextExpression', (node, index, parent) => {
      if (parent && typeof index === 'number') {
        replacements.push({ parent, index, node });
      }
    });

    // Replace mdxJsxTextExpression nodes with text nodes containing \{...\}
    for (const { parent, index, node } of replacements) {
      const expr = node.value || '';
      // Replace with text node: \{expr\} renders as {expr} in KaTeX
      parent.children.splice(index, 1, {
        type: 'text',
        value: '\\{' + expr + '\\}',
      });
    }

    // Also escape remaining literal braces in text nodes
    // But don't double-escape braces already preceded by backslash
    visit(tree, 'text', (node) => {
      node.value = node.value.replace(/(?<!\\)\{/g, '\\{').replace(/(?<!\\)\}/g, '\\}');
    });
  };
};
