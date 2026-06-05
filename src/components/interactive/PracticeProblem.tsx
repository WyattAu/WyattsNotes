import React, { useCallback, useEffect, useRef, useState } from 'react';
import { sanitizeHtml } from '../../utils/sanitize';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface PracticeQuestionData {
  question: string;
  options: string[];
  correct?: number;
  correctAnswer?: number;
  explanation: string;
  difficulty?: Difficulty;
}

export interface PracticeProblemProps {
  question?: string;
  options?: string[];
  correctAnswer?: number;
  explanation?: string;
  difficulty?: Difficulty;
  /** Array of questions (DSE/Qualifications format) - renders all questions */
  questions?: PracticeQuestionData[];
}

const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  easy: '#2ecc71',
  medium: '#f39c12',
  hard: '#e74c3c',
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function PracticeProblem(props: PracticeProblemProps) {
  // If `questions` array is passed, render all questions as a quiz
  if (props.questions && props.questions.length > 0) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {props.questions.map((q, idx) => (
          <PracticeProblemItem
            key={idx}
            question={q.question}
            options={q.options}
            correctAnswer={q.correctAnswer ?? q.correct ?? 0}
            explanation={q.explanation}
            difficulty={q.difficulty ?? 'medium'}
          />
        ))}
      </div>
    );
  }

  // Single question mode (GCSE format)
  return (
    <PracticeProblemItem
      question={props.question ?? ''}
      options={props.options ?? []}
      correctAnswer={props.correctAnswer ?? 0}
      explanation={props.explanation ?? ''}
      difficulty={props.difficulty ?? 'medium'}
    />
  );
}

/** Internal component that renders a single practice problem */
function PracticeProblemItem({
  question,
  options,
  correctAnswer,
  explanation,
  difficulty,
}: {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: Difficulty;
  key?: number;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusedIndex = selected ?? -1;
  const isCorrect = submitted && selected === correctAnswer;

  useEffect(() => {
    if (focusedIndex >= 0 && buttonRefs.current[focusedIndex]) {
      buttonRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (submitted) {
        return;
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        setSelected((prev) => (prev === null ? 0 : Math.min(prev + 1, options.length - 1)));
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        setSelected((prev) => (prev === null ? options.length - 1 : Math.max(prev - 1, 0)));
      } else if (e.key === 'Enter' && selected !== null) {
        e.preventDefault();
        setSubmitted(true);
      }
    },
    [submitted, selected, options.length],
  );

  const handleSubmit = () => {
    if (selected !== null) {
      setSubmitted(true);
    }
  };

  const getOptionStyle = (index: number): React.CSSProperties => {
    const base: React.CSSProperties = {
      display: 'block',
      width: '100%',
      padding: '12px 16px',
      margin: '6px 0',
      border: '2px solid var(--ifm-color-emphasis-300)',
      borderRadius: '8px',
      background: 'var(--ifm-background-surface-color)',
      color: 'var(--ifm-font-color-base)',
      fontSize: '1rem',
      textAlign: 'left',
      cursor: submitted ? 'default' : 'pointer',
      transition: 'border-color 0.15s, background 0.15s',
      fontFamily: 'inherit',
    };

    if (!submitted && selected === index) {
      base.borderColor = 'var(--ifm-color-primary)';
      base.background = 'var(--ifm-color-primary-soft)';
    }
    if (submitted) {
      if (index === correctAnswer) {
        base.borderColor = DIFFICULTY_COLORS.easy;
        base.background = 'rgba(46,204,113,0.12)';
      } else if (index === selected && index !== correctAnswer) {
        base.borderColor = DIFFICULTY_COLORS.hard;
        base.background = 'rgba(231,76,60,0.12)';
      }
    }

    return base;
  };

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      role="radiogroup"
      aria-label="Practice problem options"
      style={{
        maxWidth: 700,
        margin: '1.5rem auto',
        padding: 24,
        border: '2px solid var(--ifm-color-emphasis-300)',
        borderRadius: 12,
        background: 'var(--ifm-background-surface-color)',
        fontFamily: 'var(--ifm-font-family-base)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <span
          style={{
            display: 'inline-block',
            padding: '2px 10px',
            borderRadius: 4,
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            background: DIFFICULTY_COLORS[difficulty],
            color: '#fff',
          }}
        >
          {difficulty}
        </span>
      </div>

      <p
        style={{
          fontSize: '1.15rem',
          fontWeight: 600,
          marginBottom: 16,
          color: 'var(--ifm-font-color-base)',
        }}
      >
        {escapeHtml(question)}
      </p>

      <div role="group" aria-label="Answer options">
        {options.map((opt, i) => (
          <button
            key={i}
            ref={(el) => {
              buttonRefs.current[i] = el;
            }}
            type="button"
            role="radio"
            aria-checked={selected === i}
            aria-label={`Option ${String.fromCharCode(65 + i)}: ${escapeHtml(String(opt))}`}
            tabIndex={selected === i ? 0 : -1}
            disabled={submitted}
            onClick={() => !submitted && setSelected(i)}
            style={getOptionStyle(i)}
          >
            <span style={{ fontWeight: 600, marginRight: 8 }}>{String.fromCharCode(65 + i)}.</span>
            {typeof opt === 'string' ? opt : ''}
          </button>
        ))}
      </div>

      {!submitted && (
        <button
          type="button"
          disabled={selected === null}
          onClick={handleSubmit}
          style={{
            marginTop: 12,
            padding: '10px 24px',
            border: 'none',
            borderRadius: 8,
            background:
              selected === null ? 'var(--ifm-color-emphasis-300)' : 'var(--ifm-color-primary)',
            color: '#fff',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: selected === null ? 'not-allowed' : 'pointer',
            opacity: selected === null ? 0.6 : 1,
          }}
        >
          Submit
        </button>
      )}

      {submitted && (
        <div
          style={{
            marginTop: 16,
            padding: 16,
            borderRadius: 8,
            background: isCorrect ? 'rgba(46,204,113,0.1)' : 'rgba(231,76,60,0.1)',
            border: `1px solid ${isCorrect ? DIFFICULTY_COLORS.easy : DIFFICULTY_COLORS.hard}`,
          }}
        >
          <strong style={{ color: isCorrect ? DIFFICULTY_COLORS.easy : DIFFICULTY_COLORS.hard }}>
            {isCorrect ? 'Correct!' : 'Incorrect.'}
          </strong>
          <div
            style={{ marginTop: 8, lineHeight: 1.6, color: 'var(--ifm-font-color-base)' }}
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(explanation) }}
          />
        </div>
      )}
    </div>
  );
}
export default PracticeProblem;
