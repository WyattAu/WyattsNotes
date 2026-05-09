/**
 * Remark plugin to escape curly braces that MDX interprets as JSX expressions.
 *
 * MDX parses {Word} as JSX before remark-math can process LaTeX math.
 * This plugin replaces { and } with their escaped versions in non-code content,
 * then the MDX processor renders them as literal braces.
 *
 * The escape sequence is: \{ → {'\\{'} and \} → {'\\}'}
 * MDX processes {'{'} as the string "{" and {'}'} as "}".
 */
const visit = require('unist-util-visit');
const escapeOpeningBrace = (text) => text.replace(/\{/g, "{'\\{'}");
const escapeClosingBrace = (text) => (text) => text.replace(/\}/g, "{'\\}'}");

module.exports = function escapeJsxBraces() {
  return (tree) => {
    visit(tree, 'text', (node) => {
      node.value = escapeOpeningBrace(escapeClosingBrace(node.value));
    });
  };
};
