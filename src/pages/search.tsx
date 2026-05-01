import Layout from '@theme/Layout';
import React, { useEffect, useRef, useState } from 'react';
import styles from './search.module.css';

const ALGOLIA_APP_ID = 'SJ0ASLWZCS';
const ALGOLIA_SEARCH_KEY = 'a540fa6255600d7ed9eaf06406c2a272';

interface AlgoliaHit {
  objectID: string;
  title: string;
  url: string;
  content?: string;
  section?: string;
  hierarchy?: {
    lvl0?: string;
    lvl1?: string;
    lvl2?: string;
    lvl3?: string;
  };
  _snippetResult?: Record<string, { value: string }>;
}

interface IndexConfig {
  name: string;
  indexName: string;
  color: string;
}

const INDICES: IndexConfig[] = [
  { name: 'Infrastructure & Tools', indexName: 'wyattsnotes_main', color: '#90A4AE' },
  { name: 'IB & DSE', indexName: 'wyattsnotes_academics', color: '#4FC3F7' },
  { name: 'A-Level', indexName: 'wyattsnotes_alevel', color: '#81C784' },
  { name: 'Qualifications', indexName: 'wyattsnotes_qualifications', color: '#FFB74D' },
  { name: 'Programming', indexName: 'wyattsnotes_programming', color: '#CE93D8' },
];

const INDEX_COLOR_MAP = Object.fromEntries(INDICES.map((i) => [i.indexName, i.color]));

const INDEX_LABEL_MAP = Object.fromEntries(INDICES.map((i) => [i.indexName, i.name]));

function getIndexColor(indexName: string): string {
  return INDEX_COLOR_MAP[indexName] ?? '#999';
}

function getBreadcrumb(hit: AlgoliaHit): string {
  if (hit.hierarchy) {
    const parts = [
      hit.hierarchy.lvl0,
      hit.hierarchy.lvl1,
      hit.hierarchy.lvl2,
      hit.hierarchy.lvl3,
    ].filter(Boolean);

    if (parts.length > 1) {
      return parts.slice(0, -1).join(' > ');
    }

    return parts[0] ?? '';
  }
  if (hit.section) {
    return hit.section;
  }

  return '';
}

function getSnippet(hit: AlgoliaHit): string {
  if (hit._snippetResult?.content?.value) {
    return hit._snippetResult.content.value;
  }
  if (hit.content) {
    return hit.content.length > 200 ? hit.content.slice(0, 200) + '...' : hit.content;
  }

  return '';
}

function SearchInput({ query, setQuery, isLoading }: { query: string; setQuery: (q: string) => void; isLoading: boolean }) {
  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        placeholder="Search notes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus
        className={styles.searchInput}
      />
      <svg
        className={styles.searchIcon}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      {isLoading && (
        <div className={styles.loadingIndicator}>
          Searching...
        </div>
      )}
    </div>
  );
}

const SearchResultCard = React.memo(function SearchResultCard({ hit }: { hit: AlgoliaHit & { _indexName: string } }) {
  const indexName = hit._indexName;
  const color = getIndexColor(indexName);
  const label = INDEX_LABEL_MAP[indexName] ?? indexName;
  const breadcrumb = getBreadcrumb(hit);
  const snippet = getSnippet(hit);

  return (
    <a
      key={hit.objectID}
      href={hit.url}
      className={styles.resultCard}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.boxShadow = `0 2px 12px ${color}22`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-200)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div className={styles.cardHeader}>
        <span
          className={styles.cardLabel}
          style={{ background: `${color}22`, color }}
        >
          {label}
        </span>
        {breadcrumb && (
          <span className={styles.breadcrumb}>
            {breadcrumb}
          </span>
        )}
      </div>
      <div className={styles.cardTitle}>
        {hit.title}
      </div>
      {snippet && (
        <div
          className={styles.cardSnippet}
          dangerouslySetInnerHTML={{ __html: snippet }}
        />
      )}
    </a>
  );
});

function IndexGrid() {
  return (
    <div className={styles.indexGrid}>
      {INDICES.map((index) => (
        <div key={index.indexName} className={styles.indexCard}>
          <div className={styles.indexCardTitle}>
            {index.name}
          </div>
          <div className={styles.indexCardSubtitle}>
            Type to search across this section
          </div>
        </div>
      ))}
    </div>
  );
}

function SearchEmptyState({ query, isLoading }: { query: string; isLoading: boolean }) {
  if (isLoading || !query.trim()) {
    return null;
  }
  return (
    <p className={styles.noResults}>
      No results found for &quot;{query}&quot;
    </p>
  );
}

export default function SearchPage(): React.ReactElement {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<AlgoliaHit[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setError(null);

      return;
    }

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    searchTimeoutRef.current = setTimeout(async () => {
      if (abortRef.current) {
        abortRef.current.abort();
      }

      const controller = new AbortController();

      abortRef.current = controller;
      setLoading(true);
      setError(null);

      try {
        const indexNames = INDICES.map((i) => i.indexName);
        const requests = indexNames.map((indexName) => ({
          indexName,
          params: {
            query: query.trim(),
            hitsPerPage: 8,
            attributesToSnippet: ['content:20'],
            highlightPreTag: '<mark>',
            highlightPostTag: '</mark>',
          },
        }));

        const response = await fetch(
          `https://${ALGOLIA_APP_ID}-dsn.algolia.net/1/indexes/*/queries`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Algolia-Application-Id': ALGOLIA_APP_ID,
              'X-Algolia-API-Key': ALGOLIA_SEARCH_KEY,
            },
            body: JSON.stringify({ requests }),
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error(`Algolia API error: ${response.status}`);
        }

        const data = await response.json();
        const hits: AlgoliaHit[] = [];

        for (const result of data.results) {
          for (const hit of result.hits) {
            hits.push({
              ...hit,
              _indexName: result.index,
            } as AlgoliaHit & { _indexName: string });
          }
        }

        setResults(hits);
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') {
          return;
        }
        setError(err instanceof Error ? err.message : 'Search failed');
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [query]);

  useEffect(() => {
    return () => {
      if (abortRef.current) {
        abortRef.current.abort();
      }
    };
  }, []);

  return (
    <Layout
      title="Search - Wyatt's Notes"
      description="Search across all Wyatt's Notes subjects and notes"
    >
      <main className={styles.main}>
        <h1 className={styles.heading}>Search</h1>
        <p className={styles.subtitle}>
          Search across all notes — IB, A-Level, DSE, GCSE, AP, C++, and more.
        </p>
        <SearchInput query={query} setQuery={setQuery} isLoading={loading} />
        {error && (
          <div className={styles.errorBox}>
            {error}
          </div>
        )}
        <SearchEmptyState query={query} isLoading={loading} />
        {results.length > 0 && (
          <div className={styles.resultsContainer}>
            {results.map((hit) => (
              <SearchResultCard key={hit.objectID} hit={hit as AlgoliaHit & { _indexName: string }} />
            ))}
          </div>
        )}
        {!query.trim() && <IndexGrid />}
      </main>
    </Layout>
  );
}
