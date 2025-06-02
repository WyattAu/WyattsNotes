// src/theme/TOCSidebar/index.tsx
import React, { FC, useState, useEffect } from 'react';
import TOCHeading from '@theme/TOCHeading';

import clsx from 'clsx';
import useTOCHighlight from '@theme/hooks/useTOCHighlight';

// Import TOC interface
import type { TOCItem } from '@docusaurus/types';

interface TOCSidebarProps {
  toc: TOCItem[];
  onlyShowBottomWhenLarge?: boolean;
}

const TOCSidebar: FC<TOCSidebarProps> = ({ toc, onlyShowBottomWhenLarge = false }) => {
  const [isVisible, setVisibility] = useState<boolean>(true);

  useEffect(() => {
    const storedVisibility = localStorage.getItem('tocVisible');
    if (storedVisibility !== null) {
      setVisibility(JSON.parse(storedVisibility));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tocVisible', JSON.stringify(isVisible));
  }, [isVisible]);

  useTOCHighlight(isVisible); // Highlight active heading only if visible

  return (
    <div className={clsx('col col--3 col--offset-9')}>
      <aside className="sideCol TOCSidebar" role="complementary">
        <div className={clsx(styles.sidebar, isVisible ? styles.visible : styles.hidden)}>
          <button
            aria-label="Toggle TOC"
            className={clsx('button button--secondary button--sm', styles.btnToggle)}
            onClick={() => setVisibility((v) => !v)}
          >
            {isVisible ? 'Hide TOC' : 'Show TOC'}
          </button>

          {isVisible && toc.length > 0 && (
            <ul className="theme-doc-toc">
              {toc.map((heading) => (
                <TOCHeading
                  key={heading.id}
                  id={heading.id}
                  level={heading.level}
                >
                  {heading.title}
                </TOCHeading>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </div>
  );
};

export default TOCSidebar;
