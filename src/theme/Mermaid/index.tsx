/**
 * Swizzled Mermaid component -- client-only rendering.
 *
 * Problem: The upstream @docusaurus/theme-mermaid calls useColorMode()
 * during the React render phase via useMermaidConfig(). During SSG,
 * some pages are rendered outside the <ColorModeProvider> context,
 * causing a ReactContextError that crashes the entire static generation.
 *
 * ErrorBoundary does NOT catch this -- it only handles runtime errors
 * thrown in lifecycle methods or event handlers, not hook errors
 * during the synchronous render phase on the server.
 *
 * Fix: Defer the entire Mermaid render to the client. On the server
 * (and during hydration), render an inert placeholder. After mount,
 * render the Mermaid diagram using the client-side hooks directly.
 *
 * IMPORTANT: We must NOT import from '@docusaurus/theme-mermaid' (the
 * default export) because that is the theme PLUGIN (server-side), not
 * the React component. Importing it pulls @docusaurus/utils and other
 * Node.js-only modules into the webpack client bundle, causing
 * "Module not found: Can't resolve 'fs'" errors.
 *
 * Instead, we use the './client' subpath export which is explicitly
 * marked for browser consumption in the package's exports map.
 */

import ErrorBoundary from '@docusaurus/ErrorBoundary';
import {
  MermaidContainerClassName,
  useMermaidRenderResult,
} from '@docusaurus/theme-mermaid/client';
import type { Props } from '@theme/Mermaid';
import React, { useEffect, useRef, useState } from 'react';

function MermaidRenderResult({
  renderResult,
}: {
  renderResult: { svg: string; bindFunctions?: (div: HTMLElement | null) => void };
}): React.JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = ref.current;

    renderResult.bindFunctions?.(div);
  }, [renderResult]);

  return (
    <div
      ref={ref}
      className={MermaidContainerClassName}
      style={{ maxWidth: '100%' }}
      dangerouslySetInnerHTML={{ __html: renderResult.svg }}
    />
  );
}

export default function Mermaid(props: Props): React.JSX.Element {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Server-side and during hydration: render an inert placeholder.
  // The actual Mermaid diagram renders client-only after mount,
  // inside the proper React context tree (ColorModeProvider).
  if (!mounted) {
    return <div className={MermaidContainerClassName} style={{ minHeight: '1rem' }} />;
  }

  // @ts-expect-error -- @docusaurus/ErrorBoundary types declare children as required
  // but TS react JSX mode doesn't infer JSX children into Props.
  return (
    <ErrorBoundary fallback={() => <div />}>
      <MermaidClientWrapper {...props} />
    </ErrorBoundary>
  );
}

/**
 * Client-only wrapper that uses the upstream useMermaidRenderResult hook.
 * This component is only rendered after mount, so useColorMode() inside
 * the hook will find the ColorModeProvider context.
 */
function MermaidClientWrapper(props: Props): React.JSX.Element {
  const renderResult = useMermaidRenderResult({ text: props.value });

  if (renderResult === null) {
    return <div className={MermaidContainerClassName} style={{ minHeight: '1rem' }} />;
  }

  return <MermaidRenderResult renderResult={renderResult} />;
}
