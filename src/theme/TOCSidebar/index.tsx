import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import styles from './TOCSidebar.module.css';

// Import TOC interface

interface TOCItem {
  id: string;
  level: number;
  title: string;
}

interface TOCSidebarProps {
  toc: TOCItem[];
  onlyShowBottomWhenLarge?: boolean;
}

const TOCSidebar: React.FC<TOCSidebarProps> = ({ toc, onlyShowBottomWhenLarge = false }) => {
  void onlyShowBottomWhenLarge;
  const [isVisible, setVisibility] = useState<boolean>(true);

  useEffect(() => {
    const storedVisibility = localStorage.getItem('tocVisible');

    if (storedVisibility !== null) {
      setVisibility(JSON.parse(storedVisibility) as boolean);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tocVisible', JSON.stringify(isVisible));
  }, [isVisible]);

  // useTOCHighlight(isVisible); // Highlight active heading only if visible

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
                <li key={heading.id}>
                  <a href={`#${heading.id}`}>{heading.title}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </div>
  );
};

export default TOCSidebar;
