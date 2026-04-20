/**
 * Register custom MDX components for use in .mdx content files.
 *
 * Docusaurus automatically merges custom MDX components exported here
 * with the built-in components (Details, Admonition, CodeBlock, etc.).
 * We only need to export our custom interactive components.
 *
 * Usage in MDX:
 *   <Geogebra appletId="abc123" title="Quadratic Explorer" />
 *   <PhetSimulation simulationId="projectile-motion" title="Projectile Motion" />
 *   <DesmosGraph calculatorUrl="https://www.desmos.com/calculator/abc123" />
 */

export { DesmosGraph } from '@site/src/components/interactive/DesmosGraph';
export { Geogebra } from '@site/src/components/interactive/Geogebra';
export { PhetSimulation } from '@site/src/components/interactive/PhetSimulation';
