import OriginalMDXComponents from '@theme-original/MDXComponents';
import React, { Suspense } from 'react';

const LazyDesmosGraph = React.lazy(() =>
  import('../../components/interactive/DesmosGraph').then((m) => ({ default: m.DesmosGraph })),
);
const LazyGeogebra = React.lazy(() =>
  import('../../components/interactive/Geogebra').then((m) => ({ default: m.Geogebra })),
);
const LazyPhetSimulation = React.lazy(() =>
  import('../../components/interactive/PhetSimulation').then((m) => ({
    default: m.PhetSimulation,
  })),
);

const MDXComponents = {
  ...OriginalMDXComponents,
  DesmosGraph: (props: React.ComponentProps<typeof LazyDesmosGraph>) => (
    <Suspense fallback={null}>
      <LazyDesmosGraph {...props} />
    </Suspense>
  ),
  Geogebra: (props: React.ComponentProps<typeof LazyGeogebra>) => (
    <Suspense fallback={null}>
      <LazyGeogebra {...props} />
    </Suspense>
  ),
  PhetSimulation: (props: React.ComponentProps<typeof LazyPhetSimulation>) => (
    <Suspense fallback={null}>
      <LazyPhetSimulation {...props} />
    </Suspense>
  ),
};

export default MDXComponents;
