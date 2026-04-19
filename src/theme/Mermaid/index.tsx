/**
 * Swizzled Mermaid component — client-only rendering.
 *
 * Problem: The upstream @docusaurus/theme-mermaid calls useColorMode()
 * during the React render phase via useMermaidConfig(). During SSG,
 * some pages are rendered outside the <ColorModeProvider> context,
 * causing a ReactContextError that crashes the entire static generation.
 *
 * ErrorBoundary does NOT catch this — it only handles runtime errors
 * thrown in lifecycle methods or event handlers, not hook errors
 * during the synchronous render phase on the server.
 *
 * Fix: Defer the entire Mermaid render to the client. On the server
 * (and during hydration), render an inert placeholder. After mount,
 * swap in the real Mermaid component which now runs inside the
 * proper React context tree.
 */

import MermaidOriginal from '@docusaurus/theme-mermaid';
import type { Props } from '@theme/Mermaid';
import React, { useEffect, useState } from 'react';

export default function Mermaid(props: Props): React.JSX.Element {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Server-side: render an empty container that matches the Mermaid
  // wrapper dimensions so layout doesn't shift on hydration.
  if (!mounted) {
    return <div className="docusaurus-mermaid-container" style={{ minHeight: '1rem' }} />;
  }

  return <MermaidOriginal {...props} />;
}
