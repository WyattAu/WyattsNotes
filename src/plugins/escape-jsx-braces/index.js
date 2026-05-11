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
 *    \x00RB\x00 placeholders. Restore these to { and } AFTER brace escaping
 *    so they are NOT double-escaped.
 *
 * 3. Remaining literal braces in text nodes: { and } that MDX didn't parse
 *    as JSX. Replace with \{ \} which KaTeX renders as literal braces.
 *
 * ORDER MATTERS: escape braces first (step 3), then restore placeholders (step 2).
 * This ensures placeholder-restored braces are treated as LaTeX group delimiters
 * by KaTeX, while remaining literal braces are escaped for safe rendering.
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
      // Step 1: Escape remaining literal braces (skip already-escaped \{ and \})
      node.value = node.value.replace(/(?<!\\)\{/g, '\\{').replace(/(?<!\\)\}/g, '\\}');
      
      // Step 2: Restore placeholders (these braces should NOT be escaped
      // because they are LaTeX group delimiters for commands like \dfrac)
      node.value = node.value.replace(/\x00LB\x00/g, '{').replace(/\x00RB\x00/g, '}');
    });
  };
};
