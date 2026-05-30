import React, { useCallback, useEffect, useMemo, useState } from 'react';

export interface DiagnosticQuestion {
  id: string;
  topic: string;
  difficulty: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface TopicResult {
  topic: string;
  correct: number;
  total: number;
  score: number;
  level: 'strong' | 'moderate' | 'weak';
}

export interface DiagnosticResult {
  subject: string;
  totalQuestions: number;
  totalCorrect: number;
  overallScore: number;
  topicResults: TopicResult[];
  strengths: string[];
  weaknesses: string[];
  recommendedTopics: string[];
  timeSpentMs: number;
}

interface DiagnosticTestProps {
  subject: string;
  questions: DiagnosticQuestion[];
  onComplete: (results: DiagnosticResult) => void;
}

const LABELS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] as const;

function getLevel(score: number): 'strong' | 'moderate' | 'weak' {
  if (score >= 0.8) return 'strong';
  if (score >= 0.5) return 'moderate';
  return 'weak';
}

function getLevelColor(level: 'strong' | 'moderate' | 'weak'): string {
  if (level === 'strong') return '#2ecc71';
  if (level === 'moderate') return '#f39c12';
  return '#e74c3c';
}

function pickNextQuestion(
  pool: DiagnosticQuestion[],
  asked: Set<string>,
  topicScores: Map<string, { correct: number; total: number }>,
): DiagnosticQuestion | null {
  const remaining = pool.filter((q) => !asked.has(q.id));
  if (remaining.length === 0) return null;

  const avgDiff = Array.from(topicScores.values()).length > 0
    ? Array.from(topicScores.values()).reduce((s, t) => s + (t.correct / t.total) * 5, 0)
      / Array.from(topicScores.values()).length
    : 3;

  const targetDiff = Math.max(1, Math.min(5, Math.round(avgDiff)));

  let candidates = remaining.filter((q) => q.difficulty === targetDiff);
  if (candidates.length === 0) candidates = remaining;

  const weakTopics = Array.from(topicScores.entries())
    .filter(([, s]) => s.total > 0 && s.correct / s.total < 0.6)
    .map(([t]) => t);

  if (weakTopics.length > 0) {
    const weakCandidates = candidates.filter((q) => weakTopics.includes(q.topic));
    if (weakCandidates.length > 0) candidates = weakCandidates;
  }

  return candidates[Math.floor(Math.random() * candidates.length)] ?? remaining[0];
}

function formatTime(ms: number): string {
  const secs = Math.floor(ms / 1000);
  const mins = Math.floor(secs / 60);
  const rem = secs % 60;
  return mins > 0 ? `${mins}:${String(rem).padStart(2, '0')}` : `${rem}s`;
}

export function DiagnosticTest({ subject, questions, onComplete }: DiagnosticTestProps) {
  const maxQuestions = Math.min(questions.length, 15);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [askedIds, setAskedIds] = useState<Set<string>>(new Set());
  const [answers, setAnswers] = useState<Map<string, number>>(new Map());
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [topicScores, setTopicScores] = useState<Map<string, { correct: number; total: number }>>(
    new Map(),
  );
  const [startTime] = useState(Date.now());
  const [elapsed, setElapsed] = useState(0);
  const [showTimer, setShowTimer] = useState(true);

  const questionOrder = useMemo(() => {
    const order: string[] = [];
    const asked = new Set<string>();
    const scores = new Map<string, { correct: number; total: number }>();

    for (let i = 0; i < maxQuestions; i++) {
      const next = pickNextQuestion(questions, asked, scores);
      if (!next) break;
      order.push(next.id);
      asked.add(next.id);
      const prev = scores.get(next.topic) ?? { correct: 0, total: 0 };
      scores.set(next.topic, prev);
    }
    return order;
  }, [questions, maxQuestions]);

  const currentQuestionId = questionOrder[currentIndex] ?? null;
  const currentQuestion = currentQuestionId
    ? questions.find((q) => q.id === currentQuestionId) ?? null
    : null;

  useEffect(() => {
    if (!showTimer || showResults) return;
    const interval = setInterval(() => setElapsed(Date.now() - startTime), 1000);
    return () => clearInterval(interval);
  }, [showTimer, showResults, startTime]);

  const handleSelect = useCallback((index: number) => {
    if (!submitted) setSelected(index);
  }, [submitted]);

  const handleSubmit = useCallback(() => {
    if (selected === null || !currentQuestion) return;
    setSubmitted(true);
    const newAnswers = new Map(answers);
    newAnswers.set(currentQuestion.id, selected);
    setAnswers(newAnswers);
    const newAsked = new Set(askedIds);
    newAsked.add(currentQuestion.id);
    setAskedIds(newAsked);
    const prev = topicScores.get(currentQuestion.topic) ?? { correct: 0, total: 0 };
    setTopicScores(
      new Map(topicScores).set(currentQuestion.topic, {
        correct: prev.correct + (selected === currentQuestion.correctIndex ? 1 : 0),
        total: prev.total + 1,
      }),
    );
  }, [selected, currentQuestion, answers, askedIds, topicScores]);

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= questionOrder.length) {
      setShowResults(true);
      return;
    }
    setCurrentIndex((i) => i + 1);
    setSelected(null);
    setSubmitted(false);
  }, [currentIndex, questionOrder.length]);

  useEffect(() => {
    if (!showResults) return;
    const topicMap = new Map<string, { correct: number; total: number }>();
    for (const [qid, ans] of answers) {
      const q = questions.find((qq) => qq.id === qid);
      if (!q) continue;
      const prev = topicMap.get(q.topic) ?? { correct: 0, total: 0 };
      topicMap.set(q.topic, {
        correct: prev.correct + (ans === q.correctIndex ? 1 : 0),
        total: prev.total + 1,
      });
    }
    const topicResults: TopicResult[] = Array.from(topicMap.entries()).map(([topic, s]) => ({
      topic,
      correct: s.correct,
      total: s.total,
      score: s.total > 0 ? s.correct / s.total : 0,
      level: getLevel(s.total > 0 ? s.correct / s.total : 0),
    }));
    topicResults.sort((a, b) => a.score - b.score);
    const strengths = topicResults.filter((t) => t.level === 'strong').map((t) => t.topic);
    const weaknesses = topicResults.filter((t) => t.level === 'weak').map((t) => t.topic);
    const recommendedTopics = topicResults.filter((t) => t.level !== 'strong').map((t) => t.topic);
    const totalCorrect = Array.from(answers.values()).filter((a, i) => {
      const q = questions.find((qq) => qq.id === Array.from(answers.keys())[i]);
      return q && a === q.correctIndex;
    }).length;
    const totalQuestions = answers.size;
    onComplete({
      subject,
      totalQuestions,
      totalCorrect,
      overallScore: totalQuestions > 0 ? totalCorrect / totalQuestions : 0,
      topicResults,
      strengths,
      weaknesses,
      recommendedTopics,
      timeSpentMs: elapsed,
    });
  }, [showResults]);

  const result: DiagnosticResult | null = useMemo(() => {
    if (!showResults || answers.size === 0) return null;
    const topicMap = new Map<string, { correct: number; total: number }>();
    for (const [qid, ans] of answers) {
      const q = questions.find((qq) => qq.id === qid);
      if (!q) continue;
      const prev = topicMap.get(q.topic) ?? { correct: 0, total: 0 };
      topicMap.set(q.topic, {
        correct: prev.correct + (ans === q.correctIndex ? 1 : 0),
        total: prev.total + 1,
      });
    }
    const topicResults: TopicResult[] = Array.from(topicMap.entries()).map(([topic, s]) => ({
      topic,
      correct: s.correct,
      total: s.total,
      score: s.total > 0 ? s.correct / s.total : 0,
      level: getLevel(s.total > 0 ? s.correct / s.total : 0),
    }));
    topicResults.sort((a, b) => a.score - b.score);
    const strengths = topicResults.filter((t) => t.level === 'strong').map((t) => t.topic);
    const weaknesses = topicResults.filter((t) => t.level === 'weak').map((t) => t.topic);
    const recommended = topicResults.filter((t) => t.level !== 'strong').map((t) => t.topic);
    let totalCorrect = 0;
    for (const [qid, ans] of answers) {
      const q = questions.find((qq) => qq.id === qid);
      if (q && ans === q.correctIndex) totalCorrect++;
    }
    return {
      subject,
      totalQuestions: answers.size,
      totalCorrect,
      overallScore: answers.size > 0 ? totalCorrect / answers.size : 0,
      topicResults,
      strengths,
      weaknesses,
      recommendedTopics: recommended,
      timeSpentMs: elapsed,
    };
  }, [showResults, answers, questions, subject, elapsed]);

  const containerStyle: React.CSSProperties = {
    maxWidth: 700,
    margin: '1.5rem auto',
    padding: 24,
    border: '2px solid var(--ifm-color-emphasis-300)',
    borderRadius: 12,
    background: 'var(--ifm-background-surface-color)',
    fontFamily: 'var(--ifm-font-family-base)',
  };

  const progressBarBg: React.CSSProperties = {
    width: '100%',
    height: 8,
    borderRadius: 4,
    background: 'var(--ifm-color-emphasis-200)',
    marginBottom: 16,
  };

  const progressBarFill: React.CSSProperties = {
    height: '100%',
    borderRadius: 4,
    background: 'var(--ifm-color-primary)',
    transition: 'width 0.3s',
    width: `${((currentIndex + (submitted ? 1 : 0)) / questionOrder.length) * 100}%`,
  };

  if (showResults && result) {
    const pct = (s: number) => `${Math.round(s * 100)}%`;
    return (
      <div style={containerStyle}>
        <h3 style={{ marginBottom: 4 }}>{subject} — Diagnostic Results</h3>
        <p style={{ color: 'var(--ifm-color-emphasis-700)', marginBottom: 16 }}>
          {result.totalCorrect}/{result.totalQuestions} correct ({pct(result.overallScore)})
          {showTimer && ` in ${formatTime(elapsed)}`}
        </p>
        <h4 style={{ marginBottom: 8 }}>Topic Breakdown</h4>
        {result.topicResults.map((t) => (
          <div key={t.topic} style={{ marginBottom: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
              <span
                style={{
                  fontWeight: 600,
                  color: getLevelColor(t.level),
                }}
              >
                {t.topic}
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--ifm-font-color-base)' }}>
                {t.correct}/{t.total} — {pct(t.score)}
              </span>
            </div>
            <div style={progressBarBg}>
              <div
                style={{
                  ...progressBarFill,
                  width: `${t.score * 100}%`,
                  background: getLevelColor(t.level),
                }}
              />
            </div>
          </div>
        ))}
        {result.strengths.length > 0 && (
          <div style={{ marginTop: 16 }}>
            <h4 style={{ color: '#2ecc71', marginBottom: 4 }}>Strengths</h4>
            <ul style={{ paddingLeft: 20, margin: 0 }}>
              {result.strengths.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        )}
        {result.weaknesses.length > 0 && (
          <div style={{ marginTop: 12 }}>
            <h4 style={{ color: '#e74c3c', marginBottom: 4 }}>Needs Improvement</h4>
            <ul style={{ paddingLeft: 20, margin: 0 }}>
              {result.weaknesses.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        )}
        {result.recommendedTopics.length > 0 && (
          <div style={{ marginTop: 12 }}>
            <h4 style={{ color: '#f39c12', marginBottom: 4 }}>Recommended Study Topics</h4>
            <ul style={{ paddingLeft: 20, margin: 0 }}>
              {result.recommendedTopics.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  if (!currentQuestion) return null;

  const isCorrect = submitted && selected === currentQuestion.correctIndex;

  const optionStyle = (index: number): React.CSSProperties => {
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
      if (index === currentQuestion.correctIndex) {
        base.borderColor = '#2ecc71';
        base.background = 'rgba(46,204,113,0.12)';
      } else if (index === selected && index !== currentQuestion.correctIndex) {
        base.borderColor = '#e74c3c';
        base.background = 'rgba(231,76,60,0.12)';
      }
    }
    return base;
  };

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
        <h3 style={{ margin: 0 }}>{subject}</h3>
        {showTimer && (
          <span style={{ fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-700)' }}>
            {formatTime(elapsed)}
          </span>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <span
          style={{
            display: 'inline-block',
            padding: '2px 10px',
            borderRadius: 4,
            fontSize: '0.75rem',
            fontWeight: 600,
            background: 'var(--ifm-color-primary)',
            color: '#fff',
          }}
        >
          {currentQuestion.topic}
        </span>
        <span style={{ fontSize: '0.75rem', color: 'var(--ifm-color-emphasis-700)' }}>
          Difficulty {currentQuestion.difficulty}/5
        </span>
      </div>
      <div style={progressBarBg}>
        <div style={progressBarFill} />
      </div>
      <p style={{ fontSize: '0.8rem', color: 'var(--ifm-color-emphasis-700)', marginBottom: 12 }}>
        Question {currentIndex + 1} of {questionOrder.length}
      </p>
      <div
        style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: 16, color: 'var(--ifm-font-color-base)' }}
        dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
      />
      <div role="group" aria-label="Answer options">
        {currentQuestion.options.map((opt, i) => (
          <button
            key={i}
            type="button"
            disabled={submitted}
            onClick={() => handleSelect(i)}
            aria-label={`Option ${LABELS[i]}: ${opt}`}
            style={optionStyle(i)}
          >
            <span style={{ fontWeight: 600, marginRight: 8 }}>{LABELS[i]}.</span>
            {opt}
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
            background: selected === null ? 'var(--ifm-color-emphasis-300)' : 'var(--ifm-color-primary)',
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
        <>
          <div
            style={{
              marginTop: 16,
              padding: 16,
              borderRadius: 8,
              background: isCorrect ? 'rgba(46,204,113,0.1)' : 'rgba(231,76,60,0.1)',
              border: `1px solid ${isCorrect ? '#2ecc71' : '#e74c3c'}`,
            }}
          >
            <strong style={{ color: isCorrect ? '#2ecc71' : '#e74c3c' }}>
              {isCorrect ? 'Correct!' : 'Incorrect.'}
            </strong>
            <div
              style={{ marginTop: 8, lineHeight: 1.6, color: 'var(--ifm-font-color-base)' }}
              dangerouslySetInnerHTML={{ __html: currentQuestion.explanation }}
            />
          </div>
          <button
            type="button"
            onClick={handleNext}
            style={{
              marginTop: 12,
              padding: '10px 24px',
              border: 'none',
              borderRadius: 8,
              background: 'var(--ifm-color-primary)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            {currentIndex + 1 >= questionOrder.length ? 'View Results' : 'Next Question'}
          </button>
        </>
      )}
    </div>
  );
}
