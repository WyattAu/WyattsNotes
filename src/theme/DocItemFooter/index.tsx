import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import DocItemFooter from '@theme-original/DocItemFooter';
import React, { useEffect, useState } from 'react';

function getReadingTime(): string {
  if (!ExecutionEnvironment.canUseDOM) {
    return '';
  }

  const article = document.querySelector('article');

  if (!article) {
    return '';
  }

  const text = article.textContent || '';
  const words = text.split(/\s+/).filter((w) => w.length > 0).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min read`;
}

// DocItemFooter props are not exported as a named type from @theme-original.
// Use ComponentProps to infer them from the component.
type DocItemFooterProps = React.ComponentProps<typeof DocItemFooter>;

export default function DocItemFooterWrapper(props: DocItemFooterProps): React.ReactElement {
  const [readingTime, setReadingTime] = useState('');

  useEffect(() => {
    setReadingTime(getReadingTime());
  }, []);

  return (
    <>
      {readingTime && (
        <div
          style={{
            textAlign: 'center',
            opacity: 0.75,
            fontSize: '0.85rem',
            marginBottom: '1rem',
          }}
        >
          {readingTime}
        </div>
      )}
      <DocItemFooter {...props} />
    </>
  );
}
