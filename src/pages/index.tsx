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
  desc: string;
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
        desc: 'Diploma Programme notes — Computer Science, Maths, Physics, English',
      },
      {
        name: 'A-Level',
        files: 114,
        lines: '62.4K',
        href: '/docs/docs_ALevel-notes/intro',
        tag: 'A*',
        desc: 'Full A* coverage — Computer Science, Maths, Physics, Economics, Further Maths',
      },
      {
        name: 'DSE',
        files: 11,
        lines: '5.4K',
        href: '/docs/docs_DSE-notes/intro',
        tag: 'HKDSE',
        desc: 'Hong Kong Diploma of Secondary Education — exam-aligned reference',
      },
    ],
  },
  {
    label: 'Development',
    subjects: [
      {
        name: 'C++',
        files: 122,
        lines: '62.3K',
        href: '/docs/docs_cpp-notes/intro',
        tag: 'C++20/23',
        desc: 'Systems programming — C++20/23, templates, concurrency, standard library',
      },
      {
        name: 'Java',
        files: 16,
        lines: '13.9K',
        href: '/docs/docs_java-notes/intro',
        tag: 'JDK 21+',
        desc: 'Modern Java — JDK 21+, I/O, concurrency, generics, reflection',
      },
      {
        name: 'Python',
        files: 18,
        lines: '19.1K',
        href: '/docs/docs_python-notes/intro',
        tag: '3.12+',
        desc: 'Deep reference — async, types, internals, decorators, generators, metaclasses',
      },
      {
        name: 'Rust',
        files: 8,
        lines: '6.5K',
        href: '/docs/docs_rust-notes/intro',
        tag: '2024',
        desc: 'Systems programming — ownership, borrowing, lifetimes, traits, async, Cargo',
      },
      {
        name: 'Dart',
        files: 20,
        lines: '16.5K',
        href: '/docs/docs_dart-notes/intro',
        tag: 'Flutter',
        desc: 'Dart 3 & Flutter — pattern matching, sealed classes, state management, testing',
      },
      {
        name: 'Git',
        files: 31,
        lines: '13.3K',
        href: '/docs/docs_git-notes/intro',
        tag: 'Workflow',
        desc: 'Version control — objects, branching, rebasing, hooks, signing, CI/CD',
      },
      {
        name: 'Algorithms',
        files: 8,
        lines: '6.4K',
        href: '/docs/docs_algorithms-notes/intro',
        tag: 'CS',
        desc: 'Algorithm design — complexity, sorting, graphs, dynamic programming, patterns',
      },
    ],
  },
  {
    label: 'Infrastructure',
    subjects: [
      {
        name: 'Linux',
        files: 9,
        lines: '6.8K',
        href: '/docs/docs_linux-notes/intro',
        tag: 'POSIX',
        desc: 'Linux administration — CLI, file systems, process management, systemd, security',
      },
      {
        name: 'Networking',
        files: 8,
        lines: '6.4K',
        href: '/docs/docs_networking-notes/intro',
        tag: 'TCP/IP',
        desc: 'Computer networking — OSI, TCP/UDP, DNS, HTTP, TLS, troubleshooting',
      },
      {
        name: 'Databases',
        files: 7,
        lines: '5.4K',
        href: '/docs/docs_databases-notes/intro',
        tag: 'SQL',
        desc: 'Database fundamentals — relational theory, SQL, indexing, transactions, NoSQL',
      },
      {
        name: 'Security',
        files: 7,
        lines: '5.0K',
        href: '/docs/docs_security-notes/intro',
        tag: 'InfoSec',
        desc: 'Information security — cryptography, authentication, web security, incident response',
      },
      {
        name: 'TrueNAS',
        files: 10,
        lines: '7.1K',
        href: '/docs/docs_truenas-notes/intro',
        tag: 'NAS',
        desc: 'NAS administration — ZFS deep-dive, sharing, replication, apps, monitoring',
      },
      {
        name: 'Tuning',
        files: 8,
        lines: '6.4K',
        href: '/docs/docs_tuning-notes/intro',
        tag: 'HW',
        desc: 'Hardware optimization — CPU, memory, GPU, storage tuning, cooling, stress testing',
      },
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
        desc: 'Graduate-level — Bayesian inference, probability spaces, measure theory',
      },
      {
        name: 'General',
        files: 10,
        lines: '4.8K',
        href: '/docs/docs_general-notes/intro',
        tag: 'Meta',
        desc: 'Cross-topic — dev environment, productivity, open source, career guidance',
      },
      {
        name: 'Licensing',
        files: 2,
        lines: '1.1K',
        href: '/docs/docs_licensing-notes/intro',
        tag: 'Legal',
        desc: 'Open-source licenses — GPL, MIT, Apache, compliance, CLA, DCO',
      },
    ],
  },
];

const totalFiles = 450;
const totalLines = '263K';
const totalSubjects = 19;

export default function Home(): React.ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline} noFooter>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.heroLabel}>Educational reference for systems engineers</p>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroTagline}>{siteConfig.tagline}</p>

          <div className={styles.heroCta}>
            <Link to="#subjects" className={styles.ctaButton}>
              Browse subjects
            </Link>
            <Link to="/search" className={styles.ctaLink}>
              Search notes
            </Link>
          </div>

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

      <main className={styles.main} id="subjects">
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
                  <p className={styles.cardDesc}>{subject.desc}</p>
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
