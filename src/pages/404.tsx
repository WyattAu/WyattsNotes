import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import SearchBar from '@theme/SearchBar';
import React from 'react';
import styles from './404.module.css';

interface Subject {
  name: string;
  href: string;
  tag: string;
}

const subjects: Subject[] = [
  {
    name: 'IB Notes',
    href: 'https://academics.wyattau.com/docs/ib/intro',
    tag: 'HL/SL',
  },
  {
    name: 'A-Level',
    href: 'https://academics.wyattau.com/docs/alevel/intro',
    tag: 'A*',
  },
  { name: 'DSE', href: 'https://academics.wyattau.com/docs/dse/intro', tag: 'HKDSE' },
  {
    name: 'C++',
    href: 'https://programming.wyattau.com/docs/cpp/0_intro',
    tag: 'C++20/23',
  },
  {
    name: 'Java',
    href: 'https://programming.wyattau.com/docs/languages/java/intro',
    tag: 'JDK 21+',
  },
  {
    name: 'Python',
    href: 'https://programming.wyattau.com/docs/languages/python/intro',
    tag: '3.12+',
  },
  {
    name: 'Rust',
    href: 'https://programming.wyattau.com/docs/languages/rust/intro',
    tag: '2024',
  },
  {
    name: 'Dart',
    href: 'https://programming.wyattau.com/docs/languages/dart/01-intro',
    tag: 'Flutter',
  },
  { name: 'Git', href: '/docs/tools/git/intro', tag: 'Workflow' },
  { name: 'Algorithms', href: '/docs/tools/algorithms/intro', tag: 'CS' },
  { name: 'Linux', href: '/docs/infrastructure/linux/intro', tag: 'POSIX' },
  { name: 'Networking', href: '/docs/infrastructure/networking/intro', tag: 'TCP/IP' },
  { name: 'Databases', href: '/docs/infrastructure/databases/intro', tag: 'SQL' },
  { name: 'Security', href: '/docs/infrastructure/security/intro', tag: 'InfoSec' },
  { name: 'TrueNAS', href: '/docs/infrastructure/truenas/intro', tag: 'NAS' },
  { name: 'Tuning', href: '/docs/infrastructure/tuning/intro', tag: 'HW' },
  { name: 'Probabilistic ML', href: '/docs/tools/probabilisticml/intro', tag: 'Grad-level' },
  { name: 'General', href: '/docs/tools/general/intro', tag: 'Meta' },
  { name: 'Licensing', href: '/docs/tools/licensing/intro', tag: 'Legal' },
];

export default function NotFoundPage(): React.ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`404: Not Found | ${siteConfig.title}`} description="Page not found" noFooter>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <Heading as="h1" className={styles.errorCode}>
            404
          </Heading>
          <p className={styles.errorMessage}>This page does not exist.</p>
          <p className={styles.errorHint}>
            The URL may be misspelled or the page has been moved. Try searching for what you need.
          </p>
          <div className={styles.searchWrapper}>
            <SearchBar />
            <a href="/search" className={styles.searchLink}>
              Advanced search
            </a>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <h2 className={styles.groupLabel}>Browse all subjects</h2>
        <div className={styles.grid}>
          {subjects.map((subject) => (
            <Link key={subject.name} to={subject.href} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardName}>{subject.name}</span>
                <span className={styles.cardTag}>{subject.tag}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>
            &copy; {new Date().getFullYear()} Wyatt Au &middot; <Link to="/privacy">Privacy</Link>{' '}
            &middot;{' '}
            <a
              href="https://github.com/WyattAu/WyattsNotes"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{' '}
            &middot;{' '}
            <a
              href="https://www.gnu.org/licenses/agpl-3.0.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              AGPLv3
            </a>
          </span>
        </div>
      </footer>
    </Layout>
  );
}
