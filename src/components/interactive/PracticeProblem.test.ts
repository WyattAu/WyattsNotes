import { describe, expect, it } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { PracticeProblem } from './PracticeProblem';

const defaultProps = {
  question: 'What is 2 + 2?',
  options: ['3', '4', '5', '6'],
  correctAnswer: 1,
  explanation: '2 + 2 equals 4.',
  difficulty: 'easy' as const,
};

describe('PracticeProblem', () => {
  it('renders without crashing', () => {
    const html = renderToString(React.createElement(PracticeProblem, defaultProps));
    expect(html).toBeTruthy();
  });

  it('shows the question text', () => {
    const html = renderToString(React.createElement(PracticeProblem, defaultProps));
    expect(html).toContain('What is 2 + 2?');
  });

  it('renders all four options in aria-labels', () => {
    const html = renderToString(React.createElement(PracticeProblem, defaultProps));
    expect(html).toContain('Option A: 3');
    expect(html).toContain('Option B: 4');
    expect(html).toContain('Option C: 5');
    expect(html).toContain('Option D: 6');
  });

  it('displays the difficulty badge', () => {
    const html = renderToString(React.createElement(PracticeProblem, defaultProps));
    expect(html).toContain('easy');
  });

  it('renders option labels A through D', () => {
    const html = renderToString(React.createElement(PracticeProblem, defaultProps));
    expect(html).toContain('A<!-- -->.');
    expect(html).toContain('B<!-- -->.');
    expect(html).toContain('C<!-- -->.');
    expect(html).toContain('D<!-- -->.');
  });

  it('shows submit button', () => {
    const html = renderToString(React.createElement(PracticeProblem, defaultProps));
    expect(html).toContain('Submit');
  });

  it('uses radiogroup role for accessibility', () => {
    const html = renderToString(React.createElement(PracticeProblem, defaultProps));
    expect(html).toContain('role="radiogroup"');
  });

  it('hides explanation before submit (SSR default)', () => {
    const html = renderToString(React.createElement(PracticeProblem, defaultProps));
    expect(html).not.toContain('Correct!');
    expect(html).not.toContain('Incorrect.');
    expect(html).not.toContain('2 + 2 equals 4.');
  });
});
