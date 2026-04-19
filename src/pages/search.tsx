import Layout from '@theme/Layout';
import React, { useEffect, useRef, useState } from 'react';

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

function getIndexColor(indexName: string): string {
  return INDICES.find((i) => i.indexName === indexName)?.color ?? '#999';
}

function getIndexLabel(indexName: string): string {
  return INDICES.find((i) => i.indexName === indexName)?.name ?? indexName;
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

export default function SearchPage(): React.ReactElement {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<AlgoliaHit[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
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
      <main ref={containerRef} style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Search</h1>
        <p style={{ color: 'var(--ifm-color-secondary)', marginBottom: '2rem' }}>
          Search across all notes — IB, A-Level, DSE, GCSE, AP, C++, and more.
        </p>
        <div style={{ position: 'relative', marginBottom: '2rem' }}>
          <input
            type="text"
            placeholder="Search notes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              paddingLeft: '2.5rem',
              fontSize: '1rem',
              borderRadius: 8,
              border: '1px solid var(--ifm-color-emphasis-300)',
              background: 'var(--ifm-background-color)',
              color: 'var(--ifm-font-color-base)',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
          <svg
            style={{
              position: 'absolute',
              left: '0.75rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--ifm-color-secondary)',
              pointerEvents: 'none',
            }}
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
          {loading && (
            <div
              style={{
                position: 'absolute',
                right: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--ifm-color-secondary)',
                fontSize: '0.85rem',
              }}
            >
              Searching...
            </div>
          )}
        </div>

        {error && (
          <div
            style={{
              padding: '1rem',
              marginBottom: '1rem',
              borderRadius: 8,
              border: '1px solid var(--ifm-color-danger)',
              color: 'var(--ifm-color-danger)',
              background: 'var(--ifm-color-danger-contrast-background)',
            }}
          >
            {error}
          </div>
        )}

        {query.trim() && !loading && results.length === 0 && !error && (
          <p style={{ color: 'var(--ifm-color-secondary)', textAlign: 'center', padding: '2rem' }}>
            No results found for &quot;{query}&quot;
          </p>
        )}

        {results.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {results.map((hit) => {
              const indexName = (hit as Record<string, unknown>)._indexName as string;
              const color = getIndexColor(indexName);
              const label = getIndexLabel(indexName);
              const breadcrumb = getBreadcrumb(hit);
              const snippet = getSnippet(hit);

              return (
                <a
                  key={hit.objectID}
                  href={hit.url}
                  style={{
                    display: 'block',
                    padding: '1rem 1.25rem',
                    borderRadius: 8,
                    border: '1px solid var(--ifm-color-emphasis-200)',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.boxShadow = `0 2px 12px ${color}22`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-200)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.25rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        padding: '0.1rem 0.4rem',
                        borderRadius: 4,
                        background: `${color}22`,
                        color: color,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {label}
                    </span>
                    {breadcrumb && (
                      <span style={{ fontSize: '0.8rem', color: 'var(--ifm-color-secondary)' }}>
                        {breadcrumb}
                      </span>
                    )}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                    {hit.title}
                  </div>
                  {snippet && (
                    <div
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--ifm-color-secondary)',
                        lineHeight: 1.5,
                      }}
                      dangerouslySetInnerHTML={{ __html: snippet }}
                    />
                  )}
                </a>
              );
            })}
          </div>
        )}

        {!query.trim() && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '1rem',
            }}
          >
            {INDICES.map((index) => (
              <div
                key={index.indexName}
                style={{
                  padding: '1.25rem',
                  borderRadius: 8,
                  border: '1px solid var(--ifm-color-emphasis-200)',
                }}
              >
                <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.25rem' }}>
                  {index.name}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--ifm-color-secondary)' }}>
                  Type to search across this section
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </Layout>
  );
}
