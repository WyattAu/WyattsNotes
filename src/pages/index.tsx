import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import type { ReactNode } from 'react';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  // Define buttons in an array for better maintainability
  const links = [
    { label: 'IB Notes', to: '/docs_IB-notes/intro' },
    { label: 'A Level Notes', to: '/docs_ALevel-notes/intro' },
    { label: 'DSE Notes', to: '/docs_DSE-notes/intro' },
    { label: 'General Notes', to: '/docs_general-notes/intro' },
  ];

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        {}
        <div className={styles.buttonGroup}>
          {links.map((link, index) => (
            <Link
              key={index}
              className={clsx('button button--secondary button--lg shadow--md', styles.heroButton)}
              to={link.to}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
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
