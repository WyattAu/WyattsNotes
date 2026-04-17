import ReadingProgress from '@site/src/theme/ReadingProgress';
import Layout from '@theme-original/Layout';
import React from 'react';

type LayoutProps = React.ComponentProps<typeof Layout>;

export default function LayoutWrapper(props: LayoutProps): React.ReactElement {
  return (
    <>
      <Layout {...props} />
      <ReadingProgress />
    </>
  );
}
