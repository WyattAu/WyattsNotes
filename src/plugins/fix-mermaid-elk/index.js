/**
 * Docusaurus plugin to fix @mermaid-js/layout-elk ESM-only export.
 *
 * @mermaid-js/layout-elk only exports an ESM entry point (import condition),
 * but webpack's server-side bundle uses require (CJS). This causes:
 *   Module not found: "." is not exported under the conditions ["require",...]
 *
 * This plugin adds a webpack resolve alias pointing directly to the .mjs file.
 */
module.exports = function fixMermaidElk() {
  return {
    name: 'fix-mermaid-elk',
    configureWebpack(config) {
      return {
        resolve: {
          ...config.resolve,
          alias: {
            ...config.resolve?.alias,
            '@mermaid-js/layout-elk': require.resolve(
              '@mermaid-js/layout-elk/dist/mermaid-layout-elk.core.mjs',
            ),
          },
        },
      };
    },
  };
};
