import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import React from 'react';
import styles from './index.module.css';

interface Subject {
  name: string;
  files: number;
  lines: string;
  href: string;
  tag: string;
}

interface SubjectGroup {
  label: string;
  subjects: Subject[];
}

const subjectGroups: SubjectGroup[] = [
  {
    label: 'Academics',
    subjects: [
      {
        name: 'IB Notes',
        files: 38,
        lines: '14.4K',
        href: '/docs/docs_IB-notes/intro',
        tag: 'HL/SL',
      },
      {
        name: 'A-Level',
        files: 114,
        lines: '61.8K',
        href: '/docs/docs_ALevel-notes/intro',
        tag: 'A*',
      },
      { name: 'DSE', files: 11, lines: '5.4K', href: '/docs/docs_DSE-notes/intro', tag: 'HKDSE' },
    ],
  },
  {
    label: 'Development',
    subjects: [
      {
        name: 'C++',
        files: 122,
        lines: '61.8K',
        href: '/docs/docs_cpp-notes/intro',
        tag: 'C++20/23',
      },
      {
        name: 'Java',
        files: 16,
        lines: '13.9K',
        href: '/docs/docs_java-notes/intro',
        tag: 'JDK 21+',
      },
      {
        name: 'Python',
        files: 8,
        lines: '7.5K',
        href: '/docs/docs_python-notes/intro',
        tag: '3.12+',
      },
      {
        name: 'Dart',
        files: 8,
        lines: '3.0K',
        href: '/docs/docs_dart-notes/intro',
        tag: 'Flutter',
      },
      {
        name: 'Git',
        files: 22,
        lines: '5.4K',
        href: '/docs/docs_git-notes/intro',
        tag: 'Workflow',
      },
    ],
  },
  {
    label: 'Infrastructure',
    subjects: [
      {
        name: 'TrueNAS',
        files: 4,
        lines: '1.2K',
        href: '/docs/docs_truenas-notes/intro',
        tag: 'NAS',
      },
      { name: 'Tuning', files: 2, lines: '878', href: '/docs/docs_tuning-notes/intro', tag: 'HW' },
    ],
  },
  {
    label: 'Research',
    subjects: [
      {
        name: 'Probabilistic ML',
        files: 3,
        lines: '1.7K',
        href: '/docs/docs_ProbabilisticML-notes/intro',
        tag: 'Grad-level',
      },
      {
        name: 'General',
        files: 6,
        lines: '1.2K',
        href: '/docs/docs_general-notes/intro',
        tag: 'Meta',
      },
    ],
  },
];

const totalFiles = 373;
const totalLines = '196.6K';
const totalSubjects = 13;

export default function Home(): React.ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline} noFooter>
      {/* ═══ HERO ═══ */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.heroLabel}>Educational reference for systems engineers</p>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroTagline}>{siteConfig.tagline}</p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{totalFiles}</span>
              <span className={styles.statLabel}>files</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>{totalLines}</span>
              <span className={styles.statLabel}>lines</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>{totalSubjects}</span>
              <span className={styles.statLabel}>subjects</span>
            </div>
          </div>
        </div>
      </header>

      {/* ═══ SUBJECT GRID ═══ */}
      <main className={styles.main}>
        {subjectGroups.map((group) => (
          <section key={group.label} className={styles.group}>
            <h2 className={styles.groupLabel}>{group.label}</h2>
            <div className={styles.grid}>
              {group.subjects.map((subject) => (
                <Link key={subject.name} to={subject.href} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardName}>{subject.name}</span>
                    <span className={styles.cardTag}>{subject.tag}</span>
                  </div>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardStat}>
                      {subject.files} {subject.files === 1 ? 'file' : 'files'}
                    </span>
                    <span className={styles.cardStat}>{subject.lines} lines</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* ═══ PRINCIPLES ═══ */}
      <section className={styles.principles}>
        <div className={styles.principle}>
          <span className={styles.principleIndex}>01</span>
          <h3 className={styles.principleTitle}>Free &amp; Open Source</h3>
          <p className={styles.principleBody}>
            AGPLv3 licensed. No fees, no ads, no tracking. Source code on GitHub.
          </p>
        </div>
        <div className={styles.principle}>
          <span className={styles.principleIndex}>02</span>
          <h3 className={styles.principleTitle}>Syllabus-Aligned</h3>
          <p className={styles.principleBody}>
            Written to exam specifications. Derivations included. No filler content.
          </p>
        </div>
        <div className={styles.principle}>
          <span className={styles.principleIndex}>03</span>
          <h3 className={styles.principleTitle}>Community Driven</h3>
          <p className={styles.principleBody}>
            Corrections and contributions welcome via GitHub Issues and Pull Requests.
          </p>
        </div>
      </section>

      {/* ═══ FOOTER BAR ═══ */}
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
