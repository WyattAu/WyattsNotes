import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { DiagnosticTest, type DiagnosticQuestion } from './DiagnosticTest';

const sampleQuestions: DiagnosticQuestion[] = [
  {
    id: 'q1',
    topic: 'Algebra',
    difficulty: 3,
    question: 'What is 2x + 3 = 7?',
    options: ['x = 1', 'x = 2', 'x = 3', 'x = 4'],
    correctIndex: 1,
    explanation: 'Subtract 3 from both sides: 2x = 4, so x = 2.',
  },
  {
    id: 'q2',
    topic: 'Geometry',
    difficulty: 2,
    question: 'What is the area of a circle with radius 3?',
    options: ['9π', '6π', '3π', '12π'],
    correctIndex: 0,
    explanation: 'Area = πr² = π × 9 = 9π.',
  },
  {
    id: 'q3',
    topic: 'Algebra',
    difficulty: 4,
    question: 'Factor x² - 9?',
    options: ['(x+3)(x-3)', '(x+9)(x-1)', '(x+3)²', '(x-9)(x+1)'],
    correctIndex: 0,
    explanation: 'Difference of squares: x² - 9 = (x+3)(x-3).',
  },
  {
    id: 'q4',
    topic: 'Calculus',
    difficulty: 5,
    question: 'What is the derivative of x³?',
    options: ['x²', '3x²', '3x', 'x⁴/4'],
    correctIndex: 1,
    explanation: 'd/dx(x³) = 3x².',
  },
  {
    id: 'q5',
    topic: 'Geometry',
    difficulty: 1,
    question: 'How many sides does a triangle have?',
    options: ['2', '3', '4', '5'],
    correctIndex: 1,
    explanation: 'A triangle has 3 sides.',
  },
];

const defaultProps = {
  subject: 'Mathematics',
  questions: sampleQuestions,
  onComplete: vi.fn(),
};

beforeEach(() => {
  vi.clearAllMocks();
});

describe('DiagnosticTest SSR rendering', () => {
  it('shows the question text', () => {
    render(<DiagnosticTest {...defaultProps} />);
    expect(screen.getByText(/2x \+ 3 = 7/)).toBeInTheDocument();
  });

  it('shows topic badge', () => {
    render(<DiagnosticTest {...defaultProps} />);
    expect(screen.getByText('Algebra')).toBeInTheDocument();
  });

  it('shows progress indicator', () => {
    render(<DiagnosticTest {...defaultProps} />);
    expect(screen.getByText(/Question 1 of 5/)).toBeInTheDocument();
  });

  it('shows option buttons', () => {
    render(<DiagnosticTest {...defaultProps} />);
    // Each option shows "A." prefix
    expect(screen.getByText(/A\./)).toBeInTheDocument();
    expect(screen.getByText(/B\./)).toBeInTheDocument();
    expect(screen.getByText(/C\./)).toBeInTheDocument();
    expect(screen.getByText(/D\./)).toBeInTheDocument();
  });

  it('shows submit button', () => {
    render(<DiagnosticTest {...defaultProps} />);
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });
});

describe('DiagnosticTest interactions', () => {
  it('selects an option on click', () => {
    render(<DiagnosticTest {...defaultProps} />);
    // Click option B (index 1) — find by the button text "B."
    const buttons = screen.getAllByRole('button');
    const optionB = buttons.find((b) => b.textContent?.startsWith('B.'));

    expect(optionB).toBeTruthy();
    fireEvent.click(optionB);
  });

  it('submits correct answer and shows Correct!', () => {
    render(<DiagnosticTest {...defaultProps} />);
    const buttons = screen.getAllByRole('button');
    const optionB = buttons.find((b) => b.textContent?.startsWith('B.'));

    fireEvent.click(optionB);
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    expect(screen.getByText('Correct!')).toBeInTheDocument();
  });

  it('shows Incorrect for wrong answer', () => {
    render(<DiagnosticTest {...defaultProps} />);
    const buttons = screen.getAllByRole('button');
    const optionA = buttons.find((b) => b.textContent?.startsWith('A.'));

    fireEvent.click(optionA);
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    expect(screen.getByText(/Incorrect/)).toBeInTheDocument();
  });

  it('advances to next question on Next Question click', () => {
    render(<DiagnosticTest {...defaultProps} />);
    const buttons = screen.getAllByRole('button');
    const optionB = buttons.find((b) => b.textContent?.startsWith('B.'));

    fireEvent.click(optionB);
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    fireEvent.click(screen.getByRole('button', { name: /Next Question/ }));
    // Progress should advance to Question 2
    expect(screen.getByText(/Question 2 of 5/)).toBeInTheDocument();
  });

  it('shows View Results button after last question', () => {
    const singleQ = [sampleQuestions[0]];

    render(<DiagnosticTest subject="Quick" questions={singleQ} onComplete={vi.fn()} />);
    const buttons = screen.getAllByRole('button');
    const optionB = buttons.find((b) => b.textContent?.startsWith('B.'));

    fireEvent.click(optionB);
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    expect(screen.queryByRole('button', { name: /Next Question/ })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /View Results/ })).toBeInTheDocument();
  });

  it('does not submit when no option selected', () => {
    render(<DiagnosticTest {...defaultProps} />);
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    expect(screen.queryByText('Correct!')).not.toBeInTheDocument();
  });

  it('handles empty questions array', () => {
    const { container } = render(
      <DiagnosticTest subject="Empty" questions={[]} onComplete={vi.fn()} />,
    );

    // Component should not crash; renders minimal content
    expect(container.innerHTML).toBeDefined();
  });
});

describe('DiagnosticTest timer', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('increments elapsed time', () => {
    render(<DiagnosticTest {...defaultProps} />);
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(screen.getByText('5s')).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(55000);
    });
    expect(screen.getByText('1:00')).toBeInTheDocument();
  });
});
