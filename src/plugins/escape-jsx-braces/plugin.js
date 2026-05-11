/**
 * Docusaurus plugin that preprocesses markdown files to escape braces
 * inside LaTeX command arguments that MDX can't parse as valid JS.
 *
 * Uses a webpack loader (enforce: 'pre') that runs before the MDX loader.
 */

const path = require('path');

module.exports = function (context, options) {
  return {
    name: 'docusaurus-plugin-escape-latex-braces',

    configureWebpack() {
      const loaderPath = path.resolve(__dirname, 'webpack-loader.js');

      return {
        module: {
          rules: [
            {
              test: /\.mdx?$/,
              enforce: 'pre',
              use: [{ loader: loaderPath }],
            },
          ],
        },
      };
    },
  };
};
