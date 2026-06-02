import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  tags: string[];
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface FlashcardDeckProps {
  cards: Flashcard[];
  deckId: string;
  title?: string;
  description?: string;
}

type Rating = 1 | 2 | 3 | 4;

interface CardState {
  easeFactor: number;
  interval: number;
  repetitions: number;
  nextReview: number;
  lastReview: number;
}

interface ReviewEntry {
  cardId: string;
  rating: Rating;
  timestamp: number;
}

interface DeckData {
  cardStates: Record<string, CardState>;
  reviewHistory: ReviewEntry[];
  lastStudyDate: number | null;
  streak: number;
}

type View = 'deck' | 'review' | 'stats' | 'settings';

const DEFAULT_EASE = 2.5;
const MIN_EASE = 1.3;
const STORAGE_PREFIX = 'wyattsnotes-spaced-rep-';

function createDefaultState(): CardState {
  return {
    easeFactor: DEFAULT_EASE,
    interval: 0,
    repetitions: 0,
    nextReview: 0,
    lastReview: 0,
  };
}

function applySM2(state: CardState, rating: Rating, now: number): CardState {
  const next = { ...state, lastReview: now };

  if (rating === 1) {
    next.repetitions = 0;
    next.interval = 1;
    next.easeFactor = Math.max(MIN_EASE, next.easeFactor - 0.2);
  } else if (rating === 2) {
    next.interval = Math.max(1, state.interval * 1.2);
    next.easeFactor = Math.max(MIN_EASE, next.easeFactor - 0.15);
    next.repetitions += 1;
  } else if (rating === 3) {
    if (state.repetitions === 0) {
      next.interval = 1;
    } else if (state.repetitions === 1) {
      next.interval = 6;
    } else {
      next.interval = Math.round(state.interval * next.easeFactor);
    }
    next.easeFactor = Math.max(
      MIN_EASE,
      next.easeFactor + (0.1 - (5 - 3) * (0.08 + (5 - 3) * 0.02)),
    );
    next.repetitions += 1;
  } else {
    if (state.repetitions === 0) {
      next.interval = 1;
    } else if (state.repetitions === 1) {
      next.interval = 6;
    } else {
      next.interval = Math.max(1, Math.round(state.interval * 1.5));
    }
    next.easeFactor = Math.max(
      MIN_EASE,
      next.easeFactor + (0.1 - (5 - 4) * (0.08 + (5 - 4) * 0.02)),
    );
    next.repetitions += 1;
  }

  next.nextReview = now + next.interval * 60 * 1000;

  return next;
}

function loadDeck(deckId: string): DeckData | null {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + deckId);

    if (!raw) {
      return null;
    }

    return JSON.parse(raw) as DeckData;
  } catch {
    return null;
  }
}

function saveDeck(deckId: string, data: DeckData): void {
  try {
    localStorage.setItem(STORAGE_PREFIX + deckId, JSON.stringify(data));
  } catch {
    /* quota exceeded — silently fail */
  }
}

function isDue(state: CardState, now: number): boolean {
  return state.nextReview <= now;
}

function getMasteryLevel(state: CardState): 'new' | 'learning' | 'review' | 'mastered' {
  if (state.repetitions === 0) {
    return 'new';
  }
  if (state.interval < 6) {
    return 'learning';
  }
  if (state.interval < 21) {
    return 'review';
  }

  return 'mastered';
}

function calculateStreak(data: DeckData): number {
  if (!data.lastStudyDate) {
    return 0;
  }
  const streak = data.streak ?? 0;
  const lastDate = new Date(data.lastStudyDate).toDateString();
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  if (lastDate === today || lastDate === yesterday) {
    return streak;
  }

  return 0;
}

const MASTERY_LABELS: Record<string, string> = {
  new: 'New',
  learning: 'Learning',
  review: 'Reviewing',
  mastered: 'Mastered',
};

const MASTERY_COLORS: Record<string, string> = {
  new: 'var(--ifm-color-emphasis-300)',
  learning: '#f39c12',
  review: '#3498db',
  mastered: '#2ecc71',
};

const RATING_CONFIG: { key: Rating; label: string; color: string; shortcut: string }[] = [
  { key: 1, label: 'Again', color: '#e74c3c', shortcut: '1' },
  { key: 2, label: 'Hard', color: '#f39c12', shortcut: '2' },
  { key: 3, label: 'Good', color: '#2ecc71', shortcut: '3' },
  { key: 4, label: 'Easy', color: '#3498db', shortcut: '4' },
];

const RatingButton: React.FC<{
  config: (typeof RATING_CONFIG)[number];
  onClick: (rating: Rating) => void;
  disabled: boolean;
}> = ({ config, onClick, disabled }) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onClick(config.key)}
      aria-label={`${config.label} (${config.shortcut})`}
      style={{
        flex: 1,
        padding: '10px 8px',
        border: 'none',
        borderRadius: 8,
        background: config.color,
        color: '#fff',
        fontWeight: 600,
        fontSize: '0.9rem',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'opacity 0.15s',
      }}
    >
      {config.label}
      <span style={{ display: 'block', fontSize: '0.7rem', opacity: 0.8, marginTop: 2 }}>
        {config.shortcut}
      </span>
    </button>
  );
};

export function FlashcardDeck({ cards, deckId, title, description }: FlashcardDeckProps) {
  const [deckData, setDeckData] = useState<DeckData | null>(() => loadDeck(deckId));
  const [view, setView] = useState<View>('deck');
  const [flipped, setFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dueQueue, setDueQueue] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const now = Date.now();

  const cardStates = useMemo(() => {
    const states: Record<string, CardState> = {};

    for (const card of cards) {
      states[card.id] = deckData?.cardStates[card.id] ?? createDefaultState();
    }

    return states;
  }, [cards, deckData]);

  const dueCards = useMemo(() => {
    return cards.filter((c) => isDue(cardStates[c.id], now));
  }, [cards, cardStates, now]);

  const masteryBreakdown = useMemo(() => {
    const counts = { new: 0, learning: 0, review: 0, mastered: 0 };

    for (const card of cards) {
      counts[getMasteryLevel(cardStates[card.id])]++;
    }

    return counts;
  }, [cards, cardStates]);

  const masteredCount = masteryBreakdown.mastered;
  const masteryPercent = cards.length > 0 ? Math.round((masteredCount / cards.length) * 100) : 0;

  const avgEase = useMemo(() => {
    if (cards.length === 0) {
      return DEFAULT_EASE;
    }
    const sum = cards.reduce((acc, c) => acc + cardStates[c.id].easeFactor, 0);

    return sum / cards.length;
  }, [cards, cardStates]);

  const streak = useMemo(() => {
    return deckData ? calculateStreak(deckData) : 0;
  }, [deckData]);

  const totalReviews = deckData?.reviewHistory.length ?? 0;

  const persistData = useCallback(
    (next: DeckData) => {
      saveDeck(deckId, next);
      setDeckData(next);
    },
    [deckId],
  );

  const startReview = useCallback(() => {
    const due = cards.filter((c) => isDue(cardStates[c.id], Date.now()));

    if (due.length === 0) {
      return;
    }
    setDueQueue(due.map((c) => c.id));
    setCurrentIndex(0);
    setFlipped(false);
    setView('review');
    setTimeout(() => cardRef.current?.focus(), 50);
  }, [cards, cardStates]);

  const handleRate = useCallback(
    (rating: Rating) => {
      if (currentIndex >= dueQueue.length) {
        return;
      }
      const cardId = dueQueue[currentIndex];
      const prevState = cardStates[cardId] ?? createDefaultState();
      const newState = applySM2(prevState, rating, Date.now());

      const entry: ReviewEntry = { cardId, rating, timestamp: Date.now() };
      const lastStudyDate = Date.now();
      const prevStreak = deckData ? calculateStreak(deckData) : 0;
      const lastDate = deckData?.lastStudyDate
        ? new Date(deckData.lastStudyDate).toDateString()
        : '';
      const today = new Date().toDateString();
      const newStreak = lastDate === today ? prevStreak : prevStreak + 1;

      const next: DeckData = {
        cardStates: { ...(deckData?.cardStates ?? {}), [cardId]: newState },
        reviewHistory: [...(deckData?.reviewHistory ?? []), entry],
        lastStudyDate,
        streak: newStreak,
      };

      persistData(next);

      if (currentIndex + 1 < dueQueue.length) {
        setCurrentIndex((i) => i + 1);
        setFlipped(false);
      } else {
        setView('deck');
        setDueQueue([]);
      }
    },
    [currentIndex, dueQueue, cardStates, deckData, persistData],
  );

  const handleReset = useCallback(() => {
    const next: DeckData = {
      cardStates: {},
      reviewHistory: [],
      lastStudyDate: null,
      streak: 0,
    };

    persistData(next);
    setView('deck');
  }, [persistData]);

  const handleExport = useCallback(() => {
    const data = deckData ?? { cardStates: {}, reviewHistory: [], lastStudyDate: null, streak: 0 };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = url;
    a.download = `${deckId}-progress.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [deckData, deckId]);

  const handleImport = useCallback(() => {
    const input = document.createElement('input');

    input.type = 'file';
    input.accept = '.json';
    input.onchange = () => {
      const file = input.files?.[0];

      if (!file) {
        return;
      }
      const reader = new FileReader();

      reader.onload = () => {
        try {
          const data = JSON.parse(reader.result as string) as DeckData;

          if (data.cardStates) {
            persistData(data);
          }
        } catch {
          /* invalid JSON */
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }, [persistData]);

  useEffect(() => {
    if (view !== 'review') {
      return;
    }
    const handler = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (flipped && e.key >= '1' && e.key <= '4') {
        e.preventDefault();
        handleRate(Number(e.key) as Rating);
      }
    };

    document.addEventListener('keydown', handler);

    return () => document.removeEventListener('keydown', handler);
  }, [view, flipped, handleRate]);

  const currentCardId = dueQueue[currentIndex] ?? null;
  const currentCard = currentCardId ? cards.find((c) => c.id === currentCardId) : null;

  const renderFlipCard = () => {
    if (!currentCard) {
      return null;
    }
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const containerFlipStyle: React.CSSProperties = {
      perspective: 1000,
      width: '100%',
      maxWidth: 520,
      margin: '0 auto',
    };

    const cardStyle: React.CSSProperties = {
      position: 'relative',
      width: '100%',
      minHeight: 220,
      transition: prefersReducedMotion ? 'none' : 'transform 0.6s',
      transformStyle: 'preserve-3d',
      transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
    };

    const faceBase: React.CSSProperties = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      minHeight: 220,
      backfaceVisibility: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '28px 24px',
      borderRadius: 12,
      border: '2px solid var(--ifm-color-emphasis-300)',
      background: 'var(--ifm-background-surface-color)',
      boxSizing: 'border-box',
    };

    const backFace: React.CSSProperties = {
      ...faceBase,
      transform: 'rotateY(180deg)',
    };

    return (
      <div style={containerFlipStyle}>
        <div
          ref={cardRef}
          tabIndex={0}
          role="button"
          aria-label={
            flipped ? 'Card answer shown. Rate your recall.' : 'Card question. Press Space to flip.'
          }
          onClick={() => setFlipped((f) => !f)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setFlipped((f) => !f);
            }
          }}
          style={cardStyle}
        >
          <div style={faceBase}>
            <div
              style={{
                fontSize: '0.75rem',
                color: 'var(--ifm-color-emphasis-500)',
                marginBottom: 8,
              }}
            >
              QUESTION
            </div>
            <div
              style={{ fontSize: '1.1rem', fontWeight: 600, textAlign: 'center', lineHeight: 1.6 }}
            >
              {currentCard.front}
            </div>
          </div>
          <div style={backFace}>
            <div
              style={{
                fontSize: '0.75rem',
                color: 'var(--ifm-color-emphasis-500)',
                marginBottom: 8,
              }}
            >
              ANSWER
            </div>
            <div
              style={{ fontSize: '1.1rem', fontWeight: 600, textAlign: 'center', lineHeight: 1.6 }}
            >
              {currentCard.back}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderProgressBar = () => (
    <div style={{ width: '100%', maxWidth: 520, margin: '12px auto 0' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.8rem',
          marginBottom: 4,
        }}
      >
        <span style={{ color: 'var(--ifm-font-color-base)' }}>Mastery</span>
        <span style={{ color: 'var(--ifm-font-color-base)' }}>{masteryPercent}%</span>
      </div>
      <div style={{ height: 8, borderRadius: 4, background: 'var(--ifm-color-emphasis-200)' }}>
        <div
          style={{
            height: '100%',
            borderRadius: 4,
            background: 'var(--ifm-color-primary)',
            transition: 'width 0.3s',
            width: `${masteryPercent}%`,
          }}
        />
      </div>
    </div>
  );

  const renderDeckView = () => (
    <div style={{ textAlign: 'center' }}>
      {title && <h3 style={{ margin: '0 0 4px', color: 'var(--ifm-font-color-base)' }}>{title}</h3>}
      {description && (
        <p
          style={{
            margin: '0 0 16px',
            fontSize: '0.9rem',
            color: 'var(--ifm-font-color-emphasis-700)',
          }}
        >
          {description}
        </p>
      )}

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          justifyContent: 'center',
          marginBottom: 16,
        }}
      >
        <StatBox label="Total Cards" value={cards.length} />
        <StatBox label="Due Today" value={dueCards.length} highlight={dueCards.length > 0} />
        <StatBox label="Mastered" value={masteredCount} />
        <StatBox label="Streak" value={`${streak}d`} />
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          justifyContent: 'center',
          marginBottom: 20,
        }}
      >
        {Object.entries(masteryBreakdown).map(([level, count]) => (
          <span
            key={level}
            style={{
              display: 'inline-block',
              padding: '4px 12px',
              borderRadius: 12,
              fontSize: '0.8rem',
              fontWeight: 600,
              background: MASTERY_COLORS[level],
              color: level === 'new' ? 'var(--ifm-font-color-base)' : '#fff',
            }}
          >
            {MASTERY_LABELS[level]}: {count}
          </span>
        ))}
      </div>

      {renderProgressBar()}

      <div
        style={{
          marginTop: 20,
          display: 'flex',
          gap: 10,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <ActionButton
          label="Study Now"
          disabled={dueCards.length === 0}
          onClick={startReview}
          primary
        />
        <ActionButton label="Stats" onClick={() => setView('stats')} />
        <ActionButton label="Settings" onClick={() => setView('settings')} />
      </div>
    </div>
  );

  const renderReviewMode = () => (
    <div>
      <div
        style={{
          textAlign: 'center',
          marginBottom: 12,
          fontSize: '0.85rem',
          color: 'var(--ifm-font-color-emphasis-700)',
        }}
      >
        Card {currentIndex + 1} of {dueQueue.length}
      </div>
      {renderFlipCard()}
      <div
        style={{
          display: 'flex',
          gap: 8,
          marginTop: 20,
          maxWidth: 520,
          margin: '20px auto 0',
          opacity: flipped ? 1 : 0.3,
          pointerEvents: flipped ? 'auto' : 'none',
          transition: 'opacity 0.2s',
        }}
      >
        {RATING_CONFIG.map((cfg, idx) => (
          <RatingButton key={idx} config={cfg} onClick={handleRate} disabled={!flipped} />
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <button
          type="button"
          onClick={() => {
            setView('deck');
            setDueQueue([]);
          }}
          style={{
            padding: '8px 20px',
            border: '1px solid var(--ifm-color-emphasis-300)',
            borderRadius: 8,
            background: 'transparent',
            color: 'var(--ifm-font-color-base)',
            cursor: 'pointer',
            fontSize: '0.85rem',
          }}
        >
          Exit Review
        </button>
      </div>
    </div>
  );

  const renderStats = () => (
    <div style={{ textAlign: 'center' }}>
      <h3 style={{ margin: '0 0 16px', color: 'var(--ifm-font-color-base)' }}>Statistics</h3>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          justifyContent: 'center',
          marginBottom: 16,
        }}
      >
        <StatBox label="Cards Mastered" value={masteredCount} />
        <StatBox
          label="Cards Learning"
          value={masteryBreakdown.learning + masteryBreakdown.review}
        />
        <StatBox label="Cards New" value={masteryBreakdown.new} />
        <StatBox label="Review Streak" value={`${streak} days`} />
        <StatBox label="Total Reviews" value={totalReviews} />
        <StatBox label="Avg Ease Factor" value={avgEase.toFixed(2)} />
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          justifyContent: 'center',
          marginBottom: 20,
        }}
      >
        {Object.entries(masteryBreakdown).map(([level, count]) => (
          <span
            key={level}
            style={{
              display: 'inline-block',
              padding: '4px 12px',
              borderRadius: 12,
              fontSize: '0.8rem',
              fontWeight: 600,
              background: MASTERY_COLORS[level],
              color: level === 'new' ? 'var(--ifm-font-color-base)' : '#fff',
            }}
          >
            {MASTERY_LABELS[level]}: {count}
          </span>
        ))}
      </div>
      <ActionButton label="Back" onClick={() => setView('deck')} />
    </div>
  );

  const renderSettings = () => (
    <div style={{ textAlign: 'center' }}>
      <h3 style={{ margin: '0 0 16px', color: 'var(--ifm-font-color-base)' }}>Settings</h3>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
        <ActionButton label="Export Progress" onClick={handleExport} />
        <ActionButton label="Import Progress" onClick={handleImport} />
        <ActionButton label="Reset Deck" onClick={handleReset} danger />
      </div>
      <div style={{ marginTop: 20 }}>
        <ActionButton label="Back" onClick={() => setView('deck')} />
      </div>
    </div>
  );

  if (cards.length === 0) {
    return (
      <div
        role="region"
        aria-label="Flashcard deck empty"
        style={{
          maxWidth: 600,
          margin: '1.5rem auto',
          padding: 24,
          textAlign: 'center',
          border: '2px solid var(--ifm-color-emphasis-300)',
          borderRadius: 12,
          background: 'var(--ifm-background-surface-color)',
          color: 'var(--ifm-font-color-base)',
          fontFamily: 'var(--ifm-font-family-base)',
        }}
      >
        No cards in this deck.
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={title ? `Flashcard deck: ${title}` : 'Flashcard deck'}
      style={{
        maxWidth: 600,
        margin: '1.5rem auto',
        padding: 24,
        border: '2px solid var(--ifm-color-emphasis-300)',
        borderRadius: 12,
        background: 'var(--ifm-background-surface-color)',
        color: 'var(--ifm-font-color-base)',
        fontFamily: 'var(--ifm-font-family-base)',
      }}
    >
      {view === 'deck' && renderDeckView()}
      {view === 'review' && renderReviewMode()}
      {view === 'stats' && renderStats()}
      {view === 'settings' && renderSettings()}
    </div>
  );
}

function StatBox({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string | number;
  highlight?: boolean;
}) {
  return (
    <div
      style={{
        padding: '12px 16px',
        borderRadius: 8,
        background: highlight ? 'rgba(231,76,60,0.1)' : 'var(--ifm-color-emphasis-100)',
        border: `1px solid ${highlight ? '#e74c3c' : 'var(--ifm-color-emphasis-200)'}`,
        minWidth: 90,
      }}
    >
      <div style={{ fontSize: '1.3rem', fontWeight: 700 }}>{value}</div>
      <div style={{ fontSize: '0.75rem', color: 'var(--ifm-font-color-emphasis-700)' }}>
        {label}
      </div>
    </div>
  );
}

function ActionButton({
  label,
  onClick,
  primary,
  danger,
  disabled,
}: {
  label: string;
  onClick: () => void;
  primary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '10px 24px',
        border: primary ? 'none' : '1px solid var(--ifm-color-emphasis-300)',
        borderRadius: 8,
        background: primary
          ? disabled
            ? 'var(--ifm-color-emphasis-300)'
            : 'var(--ifm-color-primary)'
          : danger
            ? 'rgba(231,76,60,0.1)'
            : 'var(--ifm-background-surface-color)',
        color: primary ? '#fff' : danger ? '#e74c3c' : 'var(--ifm-font-color-base)',
        fontWeight: 600,
        fontSize: '0.95rem',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {label}
    </button>
  );
}

export default FlashcardDeck;
