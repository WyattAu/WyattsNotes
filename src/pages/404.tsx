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
  { name: 'IB Notes', href: '/docs/docs_IB-notes/intro', tag: 'HL/SL' },
  { name: 'A-Level', href: '/docs/docs_ALevel-notes/intro', tag: 'A*' },
  { name: 'DSE', href: '/docs/docs_DSE-notes/intro', tag: 'HKDSE' },
  { name: 'C++', href: '/docs/docs_cpp-notes/intro', tag: 'C++20/23' },
  { name: 'Java', href: '/docs/docs_java-notes/intro', tag: 'JDK 21+' },
  { name: 'Python', href: '/docs/docs_python-notes/intro', tag: '3.12+' },
  { name: 'Rust', href: '/docs/docs_rust-notes/intro', tag: '2024' },
  { name: 'Dart', href: '/docs/docs_dart-notes/intro', tag: 'Flutter' },
  { name: 'Git', href: '/docs/docs_git-notes/intro', tag: 'Workflow' },
  { name: 'Algorithms', href: '/docs/docs_algorithms-notes/intro', tag: 'CS' },
  { name: 'Linux', href: '/docs/docs_linux-notes/intro', tag: 'POSIX' },
  { name: 'Networking', href: '/docs/docs_networking-notes/intro', tag: 'TCP/IP' },
  { name: 'Databases', href: '/docs/docs_databases-notes/intro', tag: 'SQL' },
  { name: 'Security', href: '/docs/docs_security-notes/intro', tag: 'InfoSec' },
  { name: 'TrueNAS', href: '/docs/docs_truenas-notes/intro', tag: 'NAS' },
  { name: 'Tuning', href: '/docs/docs_tuning-notes/intro', tag: 'HW' },
  { name: 'Probabilistic ML', href: '/docs/docs_ProbabilisticML-notes/intro', tag: 'Grad-level' },
  { name: 'General', href: '/docs/docs_general-notes/intro', tag: 'Meta' },
  { name: 'Licensing', href: '/docs/docs_licensing-notes/intro', tag: 'Legal' },
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
            <Link to="/search" className={styles.searchLink}>
              Advanced search
            </Link>
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
