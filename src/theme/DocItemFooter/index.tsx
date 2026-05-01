import React, { useEffect, useState } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import DocItemFooter from '@theme-original/DocItemFooter';

function getReadingTime(): string {
  if (!ExecutionEnvironment.canUseDOM) return '';

  const article = document.querySelector('article');
  if (!article) return '';

  const text = article.textContent || '';
  const words = text.split(/\s+/).filter((w) => w.length > 0).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min read`;
}

export default function DocItemFooterWrapper(props: any): React.ReactElement {
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
            opacity: 0.6,
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
