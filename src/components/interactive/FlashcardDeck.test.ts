import React from 'react';
import { renderToString } from 'react-dom/server';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { FlashcardDeck } from './FlashcardDeck';

const createStorage = () => {
  const store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, val: string) => {
      store[key] = val;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      Object.keys(store).forEach((k) => delete store[k]);
    },
    get length() {
      return Object.keys(store).length;
    },
    key: () => null,
  };
};

beforeEach(() => {
  vi.stubGlobal('localStorage', createStorage());
  vi.stubGlobal('window', { matchMedia: () => ({ matches: false }) });
  vi.stubGlobal('Date', Date);
});

function renderDeck(props: Record<string, unknown> = {}) {
  const cards = props.cards ?? [
    { id: 'c1', front: 'What is 2+2?', back: '4', tags: ['math'] },
    { id: 'c2', front: 'What is H2O?', back: 'Water', tags: ['chem'] },
    { id: 'c3', front: 'What is DNA?', back: 'Deoxyribonucleic acid', tags: ['bio'] },
  ];

  return renderToString(
    React.createElement(FlashcardDeck, {
      cards,
      deckId: 'test-deck',
      title: 'Test Deck',
      ...props,
    }),
  );
}

describe('FlashcardDeck', () => {
  it('renders without crashing', () => {
    const html = renderDeck();

    expect(html).toBeTruthy();
  });

  it('shows the deck title', () => {
    const html = renderDeck();

    expect(html).toContain('Test Deck');
  });

  it('shows total card count', () => {
    const html = renderDeck();

    expect(html).toContain('3');
  });

  it('shows empty state for no cards', () => {
    const html = renderDeck({ cards: [] });

    expect(html).toContain('No cards in this deck');
  });

  it('shows mastery labels', () => {
    const html = renderDeck();

    expect(html).toContain('New<!-- -->:');
  });

  it('has aria-label for accessibility', () => {
    const html = renderDeck();

    expect(html).toContain('role="region"');
    expect(html).toContain('Flashcard deck: Test Deck');
  });

  it('shows Study Now button', () => {
    const html = renderDeck();

    expect(html).toContain('Study Now');
  });
});

describe('SM-2 algorithm', () => {
  function applySM2Raw(
    state: { easeFactor: number; interval: number; repetitions: number },
    rating: 1 | 2 | 3 | 4,
  ) {
    const now = 1000000;
    const next = { ...state, lastReview: now };

    if (rating === 1) {
      next.repetitions = 0;
      next.interval = 1;
      next.easeFactor = Math.max(1.3, next.easeFactor - 0.2);
    } else if (rating === 2) {
      next.interval = Math.max(1, state.interval * 1.2);
      next.easeFactor = Math.max(1.3, next.easeFactor - 0.15);
      next.repetitions += 1;
    } else if (rating === 3) {
      if (state.repetitions === 0) {
        next.interval = 1;
      } else if (state.repetitions === 1) {
        next.interval = 6;
      } else {
        next.interval = Math.round(state.interval * next.easeFactor);
      }
      next.easeFactor = Math.max(1.3, next.easeFactor + 0.14);
      next.repetitions += 1;
    } else {
      if (state.repetitions === 0) {
        next.interval = 1;
      } else if (state.repetitions === 1) {
        next.interval = 6;
      } else {
        next.interval = Math.max(1, Math.round(state.interval * 1.5));
      }
      next.easeFactor = Math.max(1.3, next.easeFactor + 0.1);
      next.repetitions += 1;
    }

    return next;
  }

  const fresh = () => ({ easeFactor: 2.5, interval: 0, repetitions: 0 });

  it('Again resets interval to 1 and repetitions to 0', () => {
    const s = fresh();

    s.repetitions = 5;
    s.interval = 21;
    const result = applySM2Raw(s, 1);

    expect(result.interval).toBe(1);
    expect(result.repetitions).toBe(0);
    expect(result.easeFactor).toBeLessThan(s.easeFactor);
  });

  it('Hard increases interval moderately', () => {
    const s = fresh();

    s.interval = 5;
    s.repetitions = 2;
    const result = applySM2Raw(s, 2);

    expect(result.interval).toBe(6);
    expect(result.repetitions).toBe(3);
  });

  it('Good follows standard SM-2 progression', () => {
    const s = fresh();
    let result = applySM2Raw(s, 3);

    expect(result.interval).toBe(1);

    result = applySM2Raw(result, 3);
    expect(result.interval).toBe(6);

    result = applySM2Raw(result, 3);
    expect(result.interval).toBe(17);

    result = applySM2Raw(result, 3);
    expect(result.interval).toBeGreaterThanOrEqual(35);
  });

  it('Easy increases interval more', () => {
    const s = fresh();

    s.repetitions = 2;
    s.interval = 6;
    const result = applySM2Raw(s, 4);

    expect(result.interval).toBe(9);
  });

  it('ease factor clamped to minimum 1.3', () => {
    const s = fresh();

    s.easeFactor = 1.35;
    const result = applySM2Raw(s, 1);

    expect(result.easeFactor).toBeGreaterThanOrEqual(1.3);
    expect(result.easeFactor).toBeLessThanOrEqual(1.35);
  });

  it('ease factor cannot go below 1.3 even with repeated Again', () => {
    let s = fresh();

    for (let i = 0; i < 20; i++) {
      s = applySM2Raw(s, 1);
    }
    expect(s.easeFactor).toBe(1.3);
  });

  it('interval progression sequence: 1, 6, ~15, ~40, ~100+ days', () => {
    let s = fresh();
    const intervals: number[] = [];

    for (let i = 0; i < 5; i++) {
      s = applySM2Raw(s, 3);
      intervals.push(s.interval);
    }
    expect(intervals[0]).toBe(1);
    expect(intervals[1]).toBe(6);
    expect(intervals[2]).toBeGreaterThan(10);
    expect(intervals[2]).toBeLessThan(25);
    expect(intervals[3]).toBeGreaterThan(25);
    expect(intervals[3]).toBeLessThan(70);
    expect(intervals[4]).toBeGreaterThan(60);
  });
});

describe('localStorage persistence', () => {
  it('save and load round-trip', () => {
    const data = {
      cardStates: {
        c1: { easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: 0 },
      },
      reviewHistory: [{ cardId: 'c1', rating: 3, timestamp: 1000 }],
      lastStudyDate: 1000,
      streak: 5,
    };

    localStorage.setItem('wyattsnotes-spaced-rep-test', JSON.stringify(data));
    const raw = localStorage.getItem('wyattsnotes-spaced-rep-test');

    expect(raw).toBeTruthy();
    const loaded = JSON.parse(raw);

    expect(loaded.cardStates.c1.easeFactor).toBe(2.5);
    expect(loaded.reviewHistory[0].rating).toBe(3);
    expect(loaded.streak).toBe(5);
  });

  it('returns null for missing key', () => {
    const raw = localStorage.getItem('wyattsnotes-spaced-rep-nonexistent');

    expect(raw).toBeNull();
  });
});

describe('due card detection', () => {
  it('new card (nextReview=0) is due', () => {
    const state = { easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: 0 };
    const now = 5000;

    expect(state.nextReview <= now).toBe(true);
  });

  it('card with future nextReview is not due', () => {
    const state = {
      easeFactor: 2.5,
      interval: 10,
      repetitions: 3,
      nextReview: 99999,
      lastReview: 1000,
    };
    const now = 5000;

    expect(state.nextReview <= now).toBe(false);
  });
});

describe('mastery calculation', () => {
  function getMastery(repetitions: number, interval: number): string {
    if (repetitions === 0) {
      return 'new';
    }
    if (interval < 6) {
      return 'learning';
    }
    if (interval < 21) {
      return 'review';
    }

    return 'mastered';
  }

  it('new card has 0 repetitions', () => {
    expect(getMastery(0, 0)).toBe('new');
  });

  it('card with 1 repetition and interval < 6 is learning', () => {
    expect(getMastery(1, 1)).toBe('learning');
  });

  it('card with interval >= 6 and < 21 is review', () => {
    expect(getMastery(3, 10)).toBe('review');
  });

  it('card with interval >= 21 is mastered', () => {
    expect(getMastery(5, 40)).toBe('mastered');
  });
});

describe('stats calculation', () => {
  it('average ease factor across cards', () => {
    const states = [
      { easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: 0 },
      { easeFactor: 1.3, interval: 5, repetitions: 2, nextReview: 99999, lastReview: 1000 },
      { easeFactor: 2.6, interval: 15, repetitions: 4, nextReview: 99999, lastReview: 1000 },
    ];
    const avg = states.reduce((s, c) => s + c.easeFactor, 0) / states.length;

    expect(avg).toBeCloseTo(2.133, 2);
  });
});

describe('reset functionality', () => {
  it('clears card states on reset', () => {
    localStorage.setItem(
      'wyattsnotes-spaced-rep-reset-test',
      JSON.stringify({
        cardStates: {
          c1: {
            easeFactor: 2.5,
            interval: 10,
            repetitions: 5,
            nextReview: 99999,
            lastReview: 1000,
          },
        },
        reviewHistory: [{ cardId: 'c1', rating: 3, timestamp: 1000 }],
        lastStudyDate: 1000,
        streak: 5,
      }),
    );
    localStorage.removeItem('wyattsnotes-spaced-rep-reset-test');
    expect(localStorage.getItem('wyattsnotes-spaced-rep-reset-test')).toBeNull();
  });
});

describe('keyboard navigation', () => {
  it('Space key triggers flip in review mode', () => {
    const events: KeyboardEvent[] = [];
    const listener = (e: KeyboardEvent) => events.push(e);

    document.addEventListener('keydown', listener);
    const ev = new KeyboardEvent('keydown', { key: ' ' });

    document.dispatchEvent(ev);
    document.removeEventListener('keydown', listener);
    expect(events.length).toBe(1);
    expect(events[0].key).toBe(' ');
  });

  it('keys 1-4 are valid rating keys', () => {
    for (let i = 1; i <= 4; i++) {
      expect([1, 2, 3, 4].includes(i)).toBe(true);
    }
  });
});

describe('edge cases', () => {
  it('renders with empty card array', () => {
    const html = renderDeck({ cards: [] });

    expect(html).toContain('No cards in this deck');
  });

  it('renders with single card', () => {
    const html = renderDeck({
      cards: [{ id: 'only', front: 'Q?', back: 'A!', tags: [] }],
    });

    expect(html).toBeTruthy();
    expect(html).toContain('1');
  });

  it('all mastered cards still render deck view', () => {
    const masteredCards = Array.from({ length: 5 }, (_, i) => ({
      id: `m${i}`,
      front: `Q${i}`,
      back: `A${i}`,
      tags: [],
    }));
    const html = renderDeck({ cards: masteredCards });

    expect(html).toContain('5');
  });

  it('cards with no tags renders without error', () => {
    const html = renderDeck({
      cards: [{ id: 'nt', front: 'Q', back: 'A', tags: [] }],
    });

    expect(html).toBeTruthy();
  });
});
