/**
 * Custom MDX component overrides.
 *
 * This swizzled file imports all built-in MDX components from the original
 * theme via @theme-original/MDXComponents and adds custom interactive
 * components (DesmosGraph, Geogebra, PhetSimulation) for use in MDX content.
 *
 * The @theme-original alias is created by Docusaurus webpack when a component
 * is swizzled -- it points to the version provided by the theme package.
 * See: @docusaurus/core/lib/webpack/aliases/index.js -> createAliasesForTheme
 */
import OriginalMDXComponents from '@theme-original/MDXComponents';
import { DesmosGraph } from '../../components/interactive/DesmosGraph';
import { Geogebra } from '../../components/interactive/Geogebra';
import { PhetSimulation } from '../../components/interactive/PhetSimulation';

const MDXComponents = {
  ...OriginalMDXComponents,
  DesmosGraph,
  Geogebra,
  PhetSimulation,
};

export default MDXComponents;
