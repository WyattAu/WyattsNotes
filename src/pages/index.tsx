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
        files: 79,
        lines: '61.8K',
        href: 'https://academics.wyattau.com/docs/ib/intro',
        tag: 'HL/SL',
        desc: 'Diploma Programme — Maths, Physics, Chemistry, Computer Science, English, History',
      },
      {
        name: 'A-Level',
        files: 115,
        lines: '79.6K',
        href: 'https://qualifications.wyattau.com/docs/alevel/intro',
        tag: 'A*',
        desc: 'Full A* coverage — Computer Science, Maths, Physics, Economics, Further Maths',
      },
      {
        name: 'DSE',
        files: 46,
        lines: '41.9K',
        href: 'https://academics.wyattau.com/docs/dse/intro',
        tag: 'HKDSE',
        desc: 'Hong Kong Diploma of Secondary Education — Physics, Chemistry, Biology, Economics, ICT',
      },
      {
        name: 'GCSE',
        files: 26,
        lines: '18.8K',
        href: 'https://qualifications.wyattau.com/docs/qualifications/gcse/intro',
        tag: 'AQA/Edexcel/OCR',
        desc: 'General Certificate of Secondary Education — Maths, Physics, Chemistry, Biology, Computer Science',
      },
      {
        name: 'AP',
        files: 26,
        lines: '18.8K',
        href: 'https://qualifications.wyattau.com/docs/qualifications/ap/intro',
        tag: 'College Board',
        desc: 'Advanced Placement — Maths, Physics, Chemistry, Biology, Computer Science',
      },
      {
        name: 'Scottish Highers',
        files: 26,
        lines: '18.4K',
        href: 'https://qualifications.wyattau.com/docs/qualifications/scottish-highers',
        tag: 'SQA',
        desc: 'Scottish Qualifications Authority — Maths, Physics, Chemistry, Biology, Computer Science',
      },
      {
        name: 'Irish LC',
        files: 26,
        lines: '19K',
        href: 'https://qualifications.wyattau.com/docs/qualifications/ilc/intro',
        tag: 'SEC',
        desc: 'Irish Leaving Certificate — Maths, Physics, Chemistry, Biology, Computer Science',
      },
    ],
  },
  {
    label: 'Programming',
    subjects: [
      {
        name: 'C++',
        files: 122,
        lines: '83K',
        href: 'https://programming.wyattau.com/docs/cpp/intro',
        tag: 'C++20/23',
        desc: 'Systems programming — C++20/23, templates, concurrency, standard library',
      },
      {
        name: 'Java',
        files: 25,
        lines: '23.3K',
        href: 'https://programming.wyattau.com/docs/languages/java/intro',
        tag: 'JDK 21+',
        desc: 'Modern Java — OOP, collections, concurrency, JVM internals, NIO, testing, build tools',
      },
      {
        name: 'Python',
        files: 26,
        lines: '26.2K',
        href: 'https://programming.wyattau.com/docs/languages/python/intro',
        tag: '3.12+',
        desc: 'Deep reference — async, types, internals, decorators, descriptors, packaging, protocols',
      },
      {
        name: 'Rust',
        files: 17,
        lines: '15.9K',
        href: 'https://programming.wyattau.com/docs/languages/rust/intro',
        tag: '2024',
        desc: 'Systems programming — ownership, lifetimes, unsafe, async, channels, traits, Cargo, macros',
      },
      {
        name: 'Dart',
        files: 21,
        lines: '18.3K',
        href: 'https://programming.wyattau.com/docs/languages/dart/intro',
        tag: 'Flutter',
        desc: 'Dart 3 & Flutter — pattern matching, sealed classes, FFI, state management, testing',
      },
    ],
  },
  {
    label: 'Infrastructure',
    subjects: [
      {
        name: 'Linux',
        files: 19,
        lines: '17.2K',
        href: 'https://wyattsnotes.wyattau.com/docs/infrastructure/linux/intro',
        tag: 'POSIX',
        desc: 'Linux administration — CLI, scripting, file systems, LVM, disk partitioning, processes, networking',
      },
      {
        name: 'Networking',
        files: 20,
        lines: '17.3K',
        href: 'https://wyattsnotes.wyattau.com/docs/infrastructure/networking/intro',
        tag: 'TCP/IP',
        desc: 'Computer networking — OSI, TCP/UDP, DNS, BGP, routing protocols, HTTP/2/3, TLS, WebSockets',
      },
      {
        name: 'Databases',
        files: 15,
        lines: '13.6K',
        href: 'https://wyattsnotes.wyattau.com/docs/infrastructure/databases/intro',
        tag: 'SQL',
        desc: 'Databases — relational theory, normalization, SQL, indexing, transactions, NoSQL, migrations',
      },
      {
        name: 'Security',
        files: 17,
        lines: '13.8K',
        href: 'https://wyattsnotes.wyattau.com/docs/infrastructure/security/intro',
        tag: 'InfoSec',
        desc: 'Information security — cryptography, OAuth, OWASP, pen testing, supply chain, forensics',
      },
      {
        name: 'TrueNAS',
        files: 11,
        lines: '8.6K',
        href: 'https://wyattsnotes.wyattau.com/docs/infrastructure/truenas/intro',
        tag: 'NAS',
        desc: 'NAS administration — ZFS deep-dive, encryption, sharing, replication, apps, monitoring',
      },
      {
        name: 'Tuning',
        files: 9,
        lines: '7.8K',
        href: 'https://wyattsnotes.wyattau.com/docs/infrastructure/tuning/intro',
        tag: 'HW',
        desc: 'Hardware optimization — CPU, memory, GPU, storage tuning, PSU, BIOS, cooling, stress testing',
      },
    ],
  },
  {
    label: 'Tools & Research',
    subjects: [
      {
        name: 'Git',
        files: 32,
        lines: '15.6K',
        href: 'https://wyattsnotes.wyattau.com/docs/tools/git/intro',
        tag: 'Workflow',
        desc: 'Version control — objects, branching, rebasing, hooks, signing, advanced commands, CI/CD',
      },
      {
        name: 'Algorithms',
        files: 16,
        lines: '14.2K',
        href: 'https://wyattsnotes.wyattau.com/docs/tools/algorithms/intro',
        tag: 'CS',
        desc: 'Algorithm design — complexity, sorting, trees, graphs, DP, greedy, advanced data structures',
      },
      {
        name: 'Probabilistic ML',
        files: 3,
        lines: '1.7K',
        href: 'https://wyattsnotes.wyattau.com/docs/tools/probabilisticml/intro',
        tag: 'Grad-level',
        desc: 'Graduate-level — Bayesian inference, probability spaces, measure theory',
      },
      {
        name: 'General',
        files: 10,
        lines: '4.8K',
        href: 'https://wyattsnotes.wyattau.com/docs/tools/general/intro',
        tag: 'Meta',
        desc: 'Cross-topic — dev environment, productivity, open source, career guidance',
      },
      {
        name: 'Licensing',
        files: 2,
        lines: '1.1K',
        href: 'https://wyattsnotes.wyattau.com/docs/tools/licensing/intro',
        tag: 'Legal',
        desc: 'Open-source licenses — GPL, MIT, Apache, compliance, CLA, DCO',
      },
    ],
  },
];

const totalFiles = 709;
const totalLines = '491K';
const totalSubjects = 23;

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
            <a href="/search" className={styles.ctaLink}>
              Search notes
            </a>
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
