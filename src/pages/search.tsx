import Layout from '@theme/Layout';
import React, { useMemo, useState } from 'react';

interface Site {
  name: string;
  tag: string;
  searchUrl: string;
  color: string;
}

const sites: Site[] = [
  {
    name: 'IB Notes',
    tag: 'HL/SL',
    searchUrl: 'https://academics.wyattau.com/search',
    color: '#4FC3F7',
  },
  {
    name: 'DSE Notes',
    tag: 'HKDSE',
    searchUrl: 'https://academics.wyattau.com/search',
    color: '#4FC3F7',
  },
  {
    name: 'A-Level Notes',
    tag: 'A*',
    searchUrl: 'https://alevel.wyattau.com/search',
    color: '#81C784',
  },
  {
    name: 'GCSE Notes',
    tag: '9-1',
    searchUrl: 'https://qualifications.wyattau.com/search',
    color: '#FFB74D',
  },
  {
    name: 'AP Notes',
    tag: 'College Board',
    searchUrl: 'https://qualifications.wyattau.com/search',
    color: '#FFB74D',
  },
  {
    name: 'Scottish Highers',
    tag: 'SQA',
    searchUrl: 'https://qualifications.wyattau.com/search',
    color: '#FFB74D',
  },
  {
    name: 'Irish LC',
    tag: 'SEC',
    searchUrl: 'https://qualifications.wyattau.com/search',
    color: '#FFB74D',
  },
  {
    name: 'C++ Notes',
    tag: 'C++20/23',
    searchUrl: 'https://programming.wyattau.com/search',
    color: '#CE93D8',
  },
  {
    name: 'Java Notes',
    tag: 'JDK 21+',
    searchUrl: 'https://programming.wyattau.com/search',
    color: '#CE93D8',
  },
  {
    name: 'Python Notes',
    tag: '3.12+',
    searchUrl: 'https://programming.wyattau.com/search',
    color: '#CE93D8',
  },
  {
    name: 'Rust Notes',
    tag: '2024',
    searchUrl: 'https://programming.wyattau.com/search',
    color: '#CE93D8',
  },
  {
    name: 'Dart Notes',
    tag: 'Flutter',
    searchUrl: 'https://programming.wyattau.com/search',
    color: '#CE93D8',
  },
  {
    name: 'Git',
    tag: 'Workflow',
    searchUrl: 'https://wyattsnotes.wyattau.com/search',
    color: '#90A4AE',
  },
  {
    name: 'Linux',
    tag: 'POSIX',
    searchUrl: 'https://wyattsnotes.wyattau.com/search',
    color: '#90A4AE',
  },
  {
    name: 'Networking',
    tag: 'TCP/IP',
    searchUrl: 'https://wyattsnotes.wyattau.com/search',
    color: '#90A4AE',
  },
  {
    name: 'Databases',
    tag: 'SQL',
    searchUrl: 'https://wyattsnotes.wyattau.com/search',
    color: '#90A4AE',
  },
  {
    name: 'Security',
    tag: 'InfoSec',
    searchUrl: 'https://wyattsnotes.wyattau.com/search',
    color: '#90A4AE',
  },
  {
    name: 'TrueNAS',
    tag: 'NAS',
    searchUrl: 'https://wyattsnotes.wyattau.com/search',
    color: '#90A4AE',
  },
];

export default function SearchPage(): React.ReactElement {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) {
      return sites;
    }

    const q = query.toLowerCase();

    return sites.filter((s) => s.name.toLowerCase().includes(q) || s.tag.toLowerCase().includes(q));
  }, [query]);

  return (
    <Layout title="Search - Wyatt's Notes" description="Search across all Wyatt's Notes subjects">
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Search</h1>
        <p style={{ color: 'var(--ifm-color-secondary)', marginBottom: '2rem' }}>
          Select a subject to search, or use the filter below.
        </p>
        <input
          type="text"
          placeholder="Filter subjects..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            fontSize: '1rem',
            borderRadius: 8,
            border: '1px solid var(--ifm-color-emphasis-300)',
            background: 'var(--ifm-background-color)',
            color: 'var(--ifm-font-color-base)',
            marginBottom: '2rem',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1rem',
          }}
        >
          {filtered.map((site) => (
            <a
              key={site.name}
              href={`${site.searchUrl}?q=${encodeURIComponent(String(query))}`}
              style={{
                display: 'block',
                padding: '1.25rem',
                borderRadius: 8,
                border: '1px solid var(--ifm-color-emphasis-200)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = site.color;
                e.currentTarget.style.boxShadow = `0 2px 12px ${site.color}22`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-200)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.25rem' }}>
                {site.name}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--ifm-color-secondary)' }}>
                {site.tag}
              </div>
            </a>
          ))}
        </div>
        {filtered.length === 0 && (
          <p style={{ color: 'var(--ifm-color-secondary)', textAlign: 'center', padding: '2rem' }}>
            No subjects match your filter.
          </p>
        )}
      </main>
    </Layout>
  );
}
