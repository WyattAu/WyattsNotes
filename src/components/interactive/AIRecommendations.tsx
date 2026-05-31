import React, { useCallback, useEffect, useRef, useState } from 'react';

export interface AIRecommendationsProps {
  currentSlug: string;
  category?: string;
  maxResults?: number;
}

interface Recommendation {
  slug: string;
  title: string;
  description: string;
  score: number;
  category: string;
}

const API_BASE = 'http://localhost:3456';

const FALLBACK: Record<string, string[]> = {
  physics: [
    '1_kinematics',
    '1_thermodynamics',
    '2_wave-properties',
    '1_gravitational-fields',
    '1_quantum-and-nuclear-physics',
  ],
  biology: ['1_cell-biology', '1_molecular-biology', '1_genetics', '1_ecology', '1_evolution'],
  chemistry: [],
  economics: [
    '1_supply-and-demand',
    '2_elasticity',
    '3_market-failure',
    '1_national-income',
    '1_game-theory-and-behavioural',
  ],
  psychology: [
    'memory-models',
    'attachment-theory',
    'brain-imaging-techniques',
    'depression',
    'social-identity-theory',
  ],
  geography: [
    'demographic-transition-model',
    'drainage-basins-and-hydrology',
    'atmospheric-systems',
    'urbanisation-trends-and-patterns',
    'measuring-development',
  ],
};

function formatScore(score: number): string {
  return `${Math.round(score * 100)}%`;
}

function getReasonLabel(score: number): string {
  if (score > 0.3) {
    return 'Highly related content';
  }
  if (score > 0.15) {
    return 'Related topic';
  }

  return 'Tangentially related';
}

export function AIRecommendations({
  currentSlug,
  category,
  maxResults = 5,
}: AIRecommendationsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  useEffect(() => {
    const el = containerRef.current;

    if (!el) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || loading) {
      return;
    }
    setLoading(true);
    const params = new URLSearchParams({ q: currentSlug, n: String(maxResults + 2) });

    if (category) {
      params.set('category', category);
    }
    fetch(`${API_BASE}/search?${params}`)
      .then((r) => r.json())
      .then((data) =>
        setRecommendations(
          (data.results || [])
            .filter((r: Recommendation) => r.slug !== currentSlug)
            .slice(0, maxResults),
        ),
      )
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [visible, currentSlug, category, maxResults]);

  const handleDismiss = useCallback((slug: string) => {
    setDismissed((prev) => new Set(prev).add(slug));
    setRecommendations((prev) => prev.filter((r) => r.slug !== slug));
  }, []);

  const shown = recommendations.filter((r) => !dismissed.has(r.slug));

  if (!visible) {
    return <div ref={containerRef} style={{ minHeight: '20px' }} />;
  }

  const fallbackList = category ? FALLBACK[category] || FALLBACK.physics : FALLBACK.physics;

  const styles: Record<string, React.CSSProperties> = {
    container: { padding: '24px 0' },
    heading: { fontSize: '18px', fontWeight: 700, marginBottom: '16px', color: '#2c3e50' },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '12px',
    },
    card: {
      border: '1px solid #e8e8e8',
      borderRadius: '8px',
      padding: '16px',
      background: '#fafafa',
      transition: 'box-shadow 0.2s',
      cursor: 'pointer',
    },
    cardHover: { boxShadow: '0 2px 8px rgba(0,0,0,0.08)' },
    title: { fontSize: '14px', fontWeight: 600, color: '#2c3e50', marginBottom: '4px' },
    desc: { fontSize: '13px', color: '#666', lineHeight: '1.4', marginBottom: '8px' },
    score: { fontSize: '12px', color: '#999', marginBottom: '8px' },
    reason: {
      fontSize: '12px',
      color: '#3498db',
      fontStyle: 'italic',
      marginBottom: '8px',
      display: expandedSlug ? 'block' : 'none',
    },
    actions: { display: 'flex', gap: '8px' },
    btnSmall: {
      fontSize: '11px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      padding: '2px 8px',
      background: '#fff',
      color: '#666',
      cursor: 'pointer',
    },
    loading: { color: '#888', fontSize: '14px' },
    fallbackCard: {
      border: '1px solid #e8e8e8',
      borderRadius: '8px',
      padding: '12px 16px',
      background: '#f0f8ff',
      fontSize: '13px',
      color: '#2c3e50',
    },
  };

  return (
    <div ref={containerRef} style={styles.container}>
      <h3 style={styles.heading}>Recommended for You</h3>
      {loading && <div style={styles.loading}>Finding related content...</div>}
      {error && !loading && (
        <div>
          <div style={{ fontSize: '13px', color: '#888', marginBottom: '12px' }}>
            AI recommendations unavailable. Showing popular topics instead.
          </div>
          <div style={styles.grid}>
            {fallbackList.slice(0, maxResults).map((slug) => (
              <a key={slug} href={slug} style={styles.fallbackCard}>
                {slug.replace(/_/g, ' ')}
              </a>
            ))}
          </div>
        </div>
      )}
      {!error && !loading && shown.length > 0 && (
        <div style={styles.grid}>
          {shown.map((r) => (
            <div key={r.slug} style={styles.card} className="ai-rec-card">
              <div style={styles.title}>{r.title}</div>
              <div style={styles.desc}>{r.description || 'No description available'}</div>
              <div style={styles.score}>Similarity: {formatScore(r.score)}</div>
              <div
                style={{ ...styles.reason, display: expandedSlug === r.slug ? 'block' : 'none' }}
              >
                {getReasonLabel(r.score)}: This topic shares concepts with the page you are viewing.
              </div>
              <div style={styles.actions}>
                <button
                  style={styles.btnSmall}
                  onClick={() => setExpandedSlug(expandedSlug === r.slug ? null : r.slug)}
                >
                  {expandedSlug === r.slug ? 'Hide' : 'Why this?'}
                </button>
                <button style={styles.btnSmall} onClick={() => handleDismiss(r.slug)}>
                  Not relevant
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {!error && !loading && shown.length === 0 && (
        <div style={{ fontSize: '13px', color: '#888' }}>
          No recommendations available for this page.
        </div>
      )}
    </div>
  );
}
