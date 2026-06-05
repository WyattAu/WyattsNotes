import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { PracticeProblem } from './PracticeProblem';

const defaultProps = {
  question: 'What is 2 + 2?',
  options: ['3', '4', '5', '6'],
  correctAnswer: 1,
  explanation: '2 + 2 equals 4.',
  difficulty: 'easy' as const,
};

describe('PracticeProblem interactions', () => {
  it('selects an option on click and highlights it', async () => {
    render(<PracticeProblem {...defaultProps} />);

    const optionB = screen.getByLabelText(/Option B/);

    await userEvent.click(optionB);

    // Selected option should have aria-checked
    expect(optionB).toHaveAttribute('aria-checked', 'true');
  });

  it('submits correct answer and shows Correct!', async () => {
    render(<PracticeProblem {...defaultProps} />);

    await userEvent.click(screen.getByLabelText(/Option B/));
    await userEvent.click(screen.getByRole('button', { name: /Submit/i }));

    expect(screen.getByText('Correct!')).toBeInTheDocument();
    expect(screen.getByText('2 + 2 equals 4.')).toBeInTheDocument();
  });

  it('submits incorrect answer and shows Incorrect', async () => {
    render(<PracticeProblem {...defaultProps} />);

    await userEvent.click(screen.getByLabelText(/Option A/));
    await userEvent.click(screen.getByRole('button', { name: /Submit/i }));

    expect(screen.getByText(/Incorrect/)).toBeInTheDocument();
  });

  it('does not submit when no option is selected', async () => {
    render(<PracticeProblem {...defaultProps} />);

    const submitBtn = screen.getByRole('button', { name: /Submit/i });

    await userEvent.click(submitBtn);

    // Should not show results
    expect(screen.queryByText('Correct!')).not.toBeInTheDocument();
    expect(screen.queryByText(/Incorrect/)).not.toBeInTheDocument();
  });

  it('marks correct option green after submit', async () => {
    render(<PracticeProblem {...defaultProps} />);

    await userEvent.click(screen.getByLabelText(/Option C/)); // wrong
    await userEvent.click(screen.getByRole('button', { name: /Submit/i }));

    // Correct option (B) should show green styling
    const optionB = screen.getByLabelText(/Option B/);

    expect(optionB).toHaveStyle({ borderColor: '#2ecc71' });
  });

  it('marks wrong selected option red after submit', async () => {
    render(<PracticeProblem {...defaultProps} />);

    await userEvent.click(screen.getByLabelText(/Option A/)); // wrong
    await userEvent.click(screen.getByRole('button', { name: /Submit/i }));

    const optionA = screen.getByLabelText(/Option A/);

    expect(optionA).toHaveStyle({ borderColor: '#e74c3c' });
  });

  it('supports correct field (DSE format)', async () => {
    render(
      <PracticeProblem
        questions={[
          {
            question: 'What is 2 + 2?',
            options: ['3', '4', '5', '6'],
            correct: 1,
            explanation: '2 + 2 equals 4.',
            difficulty: 'easy' as const,
          },
        ]}
      />,
    );

    await userEvent.click(screen.getByLabelText(/Option B/));
    await userEvent.click(screen.getByRole('button', { name: /Submit/i }));

    expect(screen.getByText('Correct!')).toBeInTheDocument();
  });

  it('renders multiple questions in multi-question mode', () => {
    const multiProps = {
      questions: [
        {
          question: 'Q1?',
          options: ['A', 'B', 'C', 'D'],
          correctAnswer: 0,
          explanation: 'E1',
          difficulty: 'easy' as const,
        },
        {
          question: 'Q2?',
          options: ['A', 'B', 'C', 'D'],
          correctAnswer: 2,
          explanation: 'E2',
          difficulty: 'medium' as const,
        },
      ],
    };

    render(<PracticeProblem {...multiProps} />);

    expect(screen.getByText('Q1?')).toBeInTheDocument();
    expect(screen.getByText('Q2?')).toBeInTheDocument();
  });
});

describe('PracticeProblem accessibility', () => {
  it('navigates options with arrow keys', async () => {
    render(<PracticeProblem {...defaultProps} />);

    const optionA = screen.getByLabelText(/Option A/);

    await userEvent.click(optionA);
    optionA.focus();

    // ArrowDown should move to next option
    await userEvent.keyboard('{ArrowDown}');
    const optionB = screen.getByLabelText(/Option B/);

    expect(optionB).toHaveFocus();
  });

  it('submits with Enter key', async () => {
    render(<PracticeProblem {...defaultProps} />);

    await userEvent.click(screen.getByLabelText(/Option B/));
    await userEvent.keyboard('{Enter}');

    expect(screen.getByText('Correct!')).toBeInTheDocument();
  });
});
