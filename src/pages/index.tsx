import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, { useState } from 'react';

import styles from './index.module.css';

type NavigationItem =
  | { type: 'single'; label: string; to: string }
  | { type: 'group'; label: string; items: Array<{ label: string; to: string }> };

interface GroupModalProps {
  title: string;
  items: { label: string; to: string }[];
  onClose: () => void;
}

function GroupModal({ title, items, onClose }: GroupModalProps) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3>{title}</h3>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className={styles.modalContent}>
          {items.map((item, index) => (
            <Link
              key={index}
              className={clsx(
                'button button--secondary button--lg shadow--md',
                styles.heroButton,
                styles.modalButton,
              )}
              to={item.to}
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const navItems: NavigationItem[] = [
    {
      type: 'group',
      label: 'Year 12-13 Syllabus',
      items: [
        { label: 'IB Notes', to: '/docs/docs_IB-notes/intro' },
        { label: 'A Level Notes', to: '/docs/docs_ALevel-notes/intro' },
        { label: 'DSE Notes', to: '/docs/docs_DSE-notes/intro' },
      ],
    },
    {
      type: 'group',
      label: 'Development Tools',
      items: [
        { label: 'C++ Notes', to: '/docs/docs_cpp-notes/intro' },
        { label: 'Dart Notes', to: '/docs/docs_dart-notes/intro' },
        { label: 'Java Notes', to: '/docs/docs_java-notes/intro' },
        { label: 'Python Notes', to: '/docs/docs_python-notes/intro' },
        { label: 'Git Notes', to: '/docs/docs_git-notes/intro' },
      ],
    },
    {
      type: 'group',
      label: 'Operating System',
      items: [{ label: 'TrueNAS', to: '/docs/docs_truenas-notes/intro' }],
    },
    {
      type: 'group',
      label: 'Others',
      items: [
        { label: 'Licensing Notes', to: '/docs/docs_licensing-notes/intro' },
        { label: 'Tuning', to: '/docs/docs_tuning-notes/intro' },
        { label: 'Contributing Help', to: '/docs/docs_general-notes/intro' },
      ],
    },
  ];

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttonGroup}>
          {navItems.map((item, index) => (
            <div key={index} className={styles.navItemContainer}>
              {item.type === 'group' ? (
                <>
                  <button
                    className={clsx(
                      'button button--secondary button--lg shadow--md',
                      styles.heroButton,
                      styles.groupButton,
                    )}
                    onClick={() => setOpenGroup(item.label)}
                  >
                    {item.label}
                  </button>
                  {openGroup === item.label && (
                    <GroupModal
                      title={item.label}
                      items={item.items}
                      onClose={() => setOpenGroup(null)}
                    />
                  )}
                </>
              ) : (
                <Link
                  className={clsx(
                    'button button--secondary button--lg shadow--md',
                    styles.heroButton,
                  )}
                  to={item.to}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default function Home(): React.ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title} - Home`} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
