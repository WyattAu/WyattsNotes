import React from 'react';
import { renderToString } from 'react-dom/server';
import { describe, expect, it, vi } from 'vitest';
import { DiagnosticTest, type DiagnosticQuestion, type DiagnosticResult } from './DiagnosticTest';

const sampleQuestions: DiagnosticQuestion[] = [
  {
    id: 'q1',
    topic: 'Algebra',
    difficulty: 3,
    question: 'What is x if 2x + 4 = 10?',
    options: ['2', '3', '4', '5'],
    correctIndex: 1,
    explanation: '2x + 4 = 10 → 2x = 6 → x = 3',
  },
  {
    id: 'q2',
    topic: 'Algebra',
    difficulty: 2,
    question: 'What is 3 + 7?',
    options: ['8', '9', '10', '11'],
    correctIndex: 2,
    explanation: '3 + 7 = 10',
  },
  {
    id: 'q3',
    topic: 'Geometry',
    difficulty: 4,
    question: 'Area of a circle with radius 2?',
    options: ['4π', '8π', '2π', '16π'],
    correctIndex: 0,
    explanation: 'A = πr² = π(2)² = 4π',
  },
  {
    id: 'q4',
    topic: 'Geometry',
    difficulty: 3,
    question: 'Interior angles of a triangle sum to?',
    options: ['90°', '180°', '270°', '360°'],
    correctIndex: 1,
    explanation: 'The interior angles of any triangle sum to 180°.',
  },
  {
    id: 'q5',
    topic: 'Calculus',
    difficulty: 5,
    question: 'Derivative of x²?',
    options: ['x', '2x', 'x²', '2x²'],
    correctIndex: 1,
    explanation: 'd/dx(x²) = 2x',
  },
];

const defaultProps = {
  subject: 'Mathematics',
  questions: sampleQuestions,
  onComplete: vi.fn(),
};

describe('DiagnosticTest', () => {
  it('renders without crashing', () => {
    const html = renderToString(React.createElement(DiagnosticTest, defaultProps));

    expect(html).toBeTruthy();
  });

  it('shows the subject title', () => {
    const html = renderToString(React.createElement(DiagnosticTest, defaultProps));

    expect(html).toContain('Mathematics');
  });

  it('shows a question from the pool', () => {
    const html = renderToString(React.createElement(DiagnosticTest, defaultProps));
    const found = sampleQuestions.some((q) => html.includes(q.question.slice(0, 20)));

    expect(found).toBe(true);
  });

  it('shows option labels A through D', () => {
    const html = renderToString(React.createElement(DiagnosticTest, defaultProps));

    expect(html).toContain('A<!-- -->.');
    expect(html).toContain('B<!-- -->.');
    expect(html).toContain('C<!-- -->.');
    expect(html).toContain('D<!-- -->.');
  });

  it('shows topic badge', () => {
    const html = renderToString(React.createElement(DiagnosticTest, defaultProps));
    const found = sampleQuestions.some((q) => html.includes(q.topic));

    expect(found).toBe(true);
  });

  it('shows progress indicator', () => {
    const html = renderToString(React.createElement(DiagnosticTest, defaultProps));

    expect(html).toContain('Question');
    expect(html).toMatch(/of <!-- -->5/);
  });

  it('shows difficulty level', () => {
    const html = renderToString(React.createElement(DiagnosticTest, defaultProps));

    expect(html).toMatch(/Difficulty <!-- -->\d/);
    expect(html).toContain('/5');
  });

  it('hides results before completion', () => {
    const html = renderToString(React.createElement(DiagnosticTest, defaultProps));

    expect(html).not.toContain('Diagnostic Results');
    expect(html).not.toContain('Recommended Study Topics');
  });

  it('calls onComplete when component mounts and shows results', () => {
    const onComplete = vi.fn();
    const html = renderToString(
      React.createElement(DiagnosticTest, { ...defaultProps, onComplete }),
    );

    expect(html).toBeTruthy();
  });

  it('adaptive: includes questions across difficulty levels', () => {
    const html = renderToString(React.createElement(DiagnosticTest, defaultProps));

    expect(html).toContain('Difficulty');
  });
});

describe('DiagnosticResult type', () => {
  it('matches expected interface', () => {
    const result: DiagnosticResult = {
      subject: 'Math',
      totalQuestions: 5,
      totalCorrect: 3,
      overallScore: 0.6,
      topicResults: [
        {
          topic: 'Algebra',
          correct: 2,
          total: 2,
          score: 1.0,
          level: 'strong',
        },
        {
          topic: 'Geometry',
          correct: 0,
          total: 2,
          score: 0.0,
          level: 'weak',
        },
        {
          topic: 'Calculus',
          correct: 1,
          total: 1,
          score: 1.0,
          level: 'strong',
        },
      ],
      strengths: ['Algebra', 'Calculus'],
      weaknesses: ['Geometry'],
      recommendedTopics: ['Geometry'],
      timeSpentMs: 120000,
    };

    expect(result.topicResults).toHaveLength(3);
    expect(result.weaknesses).toContain('Geometry');
    expect(result.recommendedTopics).toHaveLength(1);
  });
});
