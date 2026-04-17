import ReadingProgress from '@site/src/theme/ReadingProgress';
import Layout from '@theme-original/Layout';
import type { Props } from '@theme/Layout';
import React from 'react';

export default function LayoutWrapper(props: Props): React.ReactElement {
  return (
    <>
      <Layout {...props} />
      <ReadingProgress />
    </>
  );
}
