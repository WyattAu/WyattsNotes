/**
 * Register custom MDX components for use in .mdx content files.
 *
 * Usage in MDX:
 *   <Geogebra appletId="abc123" title="Quadratic Explorer" />
 *   <PhetSimulation simulationId="projectile-motion" title="Projectile Motion" />
 *   <DesmosGraph calculatorUrl="https://www.desmos.com/calculator/abc123" />
 */

import { DesmosGraph } from '@site/src/components/interactive/DesmosGraph';
import { Geogebra } from '@site/src/components/interactive/Geogebra';
import { PhetSimulation } from '@site/src/components/interactive/PhetSimulation';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MDXComponentType = Record<string, any>;

export default function MDXContentInit(): { MDXComponents: MDXComponentType } {
  return {
    MDXComponents: {
      Geogebra,
      PhetSimulation,
      DesmosGraph,
    },
  };
}
