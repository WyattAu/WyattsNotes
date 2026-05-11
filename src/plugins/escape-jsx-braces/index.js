/**
 * Remark plugin to escape curly braces that MDX interprets as JSX expressions.
 *
 * Handles THREE cases:
 *
 * 1. mdxTextExpression nodes: MDX consumed {expr} as a JSX expression.
 *    Replace with text node \{expr\} so KaTeX sees braces as group delimiters.
 *
 * 2. Placeholder nodes: The preprocessing script (scripts/escape-latex-braces.js)
 *    replaced { and } around LaTeX command arguments with \x00LB\x00 and
 *    \x00RB\x00 placeholders. Restore these to { and } in text nodes.
 *
 * 3. Remaining literal braces in text nodes: { and } that MDX didn't parse
 *    as JSX. Replace with \{ \} which KaTeX renders as literal braces.
 */
const visit = require('unist-util-visit');

const LBRACE = '\x00LB\x00';
const RBRACE = '\x00RB\x00';

module.exports = function escapeJsxBraces() {
  return (tree, vfile) => {
    // Collect mdxTextExpression nodes to replace
    const replacements = [];

    visit(tree, 'mdxTextExpression', (node, index, parent) => {
      if (parent && typeof index === 'number') {
        replacements.push({ parent, index, node });
      }
    });

    // Replace mdxTextExpression nodes with text nodes containing \{...\}
    for (const { parent, index, node } of replacements) {
      const expr = node.value || '';
      parent.children.splice(index, 1, {
        type: 'text',
        value: '\\{' + expr + '\\}',
      });
    }

    // Process all text nodes
    visit(tree, 'text', (node) => {
      // Restore placeholders
      node.value = node.value.replace(/\x00LB\x00/g, '{').replace(/\x00RB\x00/g, '}');
      // Escape remaining literal braces (skip already-escaped \{ and \})
      node.value = node.value.replace(/(?<!\\)\{/g, '\\{').replace(/(?<!\\)\}/g, '\\}');
    });
  };
};
