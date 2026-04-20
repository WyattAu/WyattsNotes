/**
 * Register custom MDX components for use in .mdx content files.
 *
 * IMPORTANT: We must spread the parent MDXComponents to preserve all
 * built-in Docusaurus components (Details, Admonition, CodeBlock, etc.).
 * Only override/add our custom interactive components.
 *
 * Usage in MDX:
 *   <Geogebra appletId="abc123" title="Quadratic Explorer" />
 *   <PhetSimulation simulationId="projectile-motion" title="Projectile Motion" />
 *   <DesmosGraph calculatorUrl="https://www.desmos.com/calculator/abc123" />
 */

import { DesmosGraph } from '@site/src/components/interactive/DesmosGraph';
import { Geogebra } from '@site/src/components/interactive/Geogebra';
import { PhetSimulation } from '@site/src/components/interactive/PhetSimulation';
import MDXComponents from '@theme-init/MDXComponents';

export default function MDXContentInit() {
  return {
    MDXComponents: {
      ...MDXComponents,
      Geogebra,
      PhetSimulation,
      DesmosGraph,
    },
  };
}
