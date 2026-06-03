/**
 * Docusaurus plugin: mdx-preprocessing
 *
 * Adds a webpack pre-loader that preprocesses .md/.mdx files before MDX
 * parsing. The loader (escape-jsx-braces/webpack-loader.js) handles:
 *
 *   - Collapsing multi-line const/export const array declarations to single
 *     lines (MDX's ESM collector truncates multi-line declarations)
 *   - Converting <URL> markdown autolinks to [url](url) syntax
 *   - Escaping LaTeX braces that MDX parses as JSX expressions
 *   - Escaping ^{...}/_{...} superscript/subscript patterns
 *
 * This MUST run before @docusaurus/mdx-loader (enforce: 'pre').
 */

const path = require('path');

module.exports = function mdxPreprocessingPlugin() {
  return {
    name: 'mdx-preprocessing',
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              test: /\.mdx?$/,
              enforce: 'pre',
              use: [
                {
                  loader: path.resolve(__dirname, '../escape-jsx-braces/webpack-loader.js'),
                },
              ],
            },
          ],
        },
      };
    },
  };
};
