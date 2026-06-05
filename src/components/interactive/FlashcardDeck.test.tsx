import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { FlashcardDeck } from './FlashcardDeck';

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

const sampleCards = [
  {
    id: 'c1',
    front: 'What is an atom?',
    back: 'Smallest unit of matter',
    tags: ['physics'],
    difficulty: 'easy' as const,
  },
  {
    id: 'c2',
    front: 'What is a molecule?',
    back: 'Two or more atoms bonded',
    tags: ['chemistry'],
    difficulty: 'medium' as const,
  },
  {
    id: 'c3',
    front: 'What is a cell?',
    back: 'Basic unit of life',
    tags: ['biology'],
    difficulty: 'hard' as const,
  },
];

const defaultProps = {
  cards: sampleCards,
  deckId: 'test-deck',
  title: 'Science Cards',
  description: 'Basic science concepts',
};

describe('FlashcardDeck SSR rendering', () => {
  it('renders title and description', () => {
    render(<FlashcardDeck {...defaultProps} />);
    expect(screen.getByText('Science Cards')).toBeInTheDocument();
    expect(screen.getByText('Basic science concepts')).toBeInTheDocument();
  });

  it('renders mastery breakdown badges', () => {
    render(<FlashcardDeck {...defaultProps} />);
    // All 3 cards are new by default
    expect(screen.getByText('New: 3')).toBeInTheDocument();
  });

  it('renders empty state when no cards', () => {
    render(<FlashcardDeck cards={[]} deckId="empty" />);
    expect(screen.getByText(/No cards in this deck/)).toBeInTheDocument();
  });

  it('renders Study Now button', () => {
    render(<FlashcardDeck {...defaultProps} />);
    expect(screen.getByText('Study Now')).toBeInTheDocument();
  });

  it('renders Stats button', () => {
    render(<FlashcardDeck {...defaultProps} />);
    expect(screen.getByText('Stats')).toBeInTheDocument();
  });

  it('renders Settings button', () => {
    render(<FlashcardDeck {...defaultProps} />);
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });
});

describe('FlashcardDeck view navigation', () => {
  it('navigates to stats view and back', () => {
    render(<FlashcardDeck {...defaultProps} />);
    fireEvent.click(screen.getByText('Stats'));
    expect(screen.getByText('Statistics')).toBeInTheDocument();
    expect(screen.getByText('Cards Mastered')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Back'));
    expect(screen.getByText('Science Cards')).toBeInTheDocument();
  });

  it('navigates to settings view and back', () => {
    render(<FlashcardDeck {...defaultProps} />);
    fireEvent.click(screen.getByText('Settings'));
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Export Progress')).toBeInTheDocument();
    expect(screen.getByText('Import Progress')).toBeInTheDocument();
    expect(screen.getByText('Reset Deck')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Back'));
    expect(screen.getByText('Science Cards')).toBeInTheDocument();
  });
});

describe('FlashcardDeck review mode', () => {
  it('enters review mode on Study Now click', () => {
    render(<FlashcardDeck {...defaultProps} />);
    fireEvent.click(screen.getByText('Study Now'));
    expect(screen.getByText(/Card 1 of 3/)).toBeInTheDocument();
    expect(screen.getByText('Exit Review')).toBeInTheDocument();
  });

  it('shows the card front in review mode', () => {
    render(<FlashcardDeck {...defaultProps} />);
    fireEvent.click(screen.getByText('Study Now'));
    expect(screen.getByText('What is an atom?')).toBeInTheDocument();
  });

  it('exits review via Exit Review button', () => {
    render(<FlashcardDeck {...defaultProps} />);
    fireEvent.click(screen.getByText('Study Now'));
    fireEvent.click(screen.getByText('Exit Review'));
    expect(screen.getByText('Science Cards')).toBeInTheDocument();
  });
});

describe('FlashcardDeck export', () => {
  it('shows export button in settings', () => {
    render(<FlashcardDeck {...defaultProps} />);
    fireEvent.click(screen.getByText('Settings'));
    expect(screen.getByText('Export Progress')).toBeInTheDocument();
  });
});
