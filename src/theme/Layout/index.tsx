import Layout from '@theme-original/Layout';
import React from 'react';
import ReadingProgress from '../ReadingProgress';

type LayoutProps = React.ComponentProps<typeof Layout>;

export default function LayoutWrapper(props: LayoutProps): React.ReactElement {
  return (
    <>
      <Layout {...props} />
      <ReadingProgress />
    </>
  );
}
