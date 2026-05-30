# Spaced Repetition System — Design Document

**Status:** Draft
**Date:** 2026-05-30
**Scope:** Future integration with WyattsNotes

---

## 1. System Requirements

### Card Format

```typescript
interface Flashcard {
  id: string;
  front: string;       // question / prompt
  back: string;        // answer / explanation
  subject: string;     // e.g. "gcse/maths", "ib/physics", "sat/reading"
  topic: string;       // e.g. "quadratic-equations", "circle-theorems"
  difficulty: 'easy' | 'medium' | 'hard';
  sourceUrl: string;   // link to the source doc page
  createdAt: number;   // unix timestamp
}
```

### Card Types

| Type | Front | Back | Use Case |
|------|-------|------|----------|
| **Basic** | Term or question | Definition or answer | Vocabulary, formulas, facts |
| **Cloze** | Sentence with `{{blank}}` | Full sentence | Key concepts, definitions |
| **Image** | Diagram or graph label | Annotated answer | Geometry, circuit diagrams |
| **Problem** | Exam-style question | Worked solution | Practice problems from question banks |

### Subject Tagging

Cards are tagged with a hierarchical subject path (`gcse/maths/number`, `ib/physics/mechanics`)
enabling filtered study sessions by qualification, subject, and topic.

### Difficulty Tracking

Each card carries a difficulty rating. On review, the user's self-assessment updates an
ease factor that influences scheduling intervals.

---

## 2. Algorithm

### SM-2 (SuperMemo 2) — Recommended

The core scheduling algorithm from Piotr Wozniak's SuperMemo:

```
For each card, store:
  - interval:  days until next review
  - easeFactor: multiplier (starts at 2.5)
  - repetitions: consecutive correct reviews

On review, user selects quality q (0–5):
  0 = complete blackout
  1 = incorrect, remembered upon seeing answer
  2 = incorrect but seemed easy once shown
  3 = correct with serious difficulty
  4 = correct with hesitation
  5 = perfect recall

If q >= 3 (correct):
  if repetitions == 0: interval = 1
  if repetitions == 1: interval = 6
  else: interval = interval * easeFactor

  easeFactor = easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  easeFactor = max(1.3, easeFactor)
  repetitions += 1

If q < 3 (incorrect):
  repetitions = 0
  interval = 1
```

### Leitner System — Alternative (simpler)

Five boxes representing increasing review intervals (1 day, 3 days, 7 days, 21 days, 60 days).
Correct answers promote the card one box. Incorrect answers demote to box 1.

| Box | Interval | Cards |
|-----|----------|-------|
| 1 | 1 day | New and failed cards |
| 2 | 3 days | Once correct |
| 3 | 7 days | Twice correct |
| 4 | 21 days | Three times correct |
| 5 | 60 days | Four+ times correct |

**Trade-off:** Leitner is simpler to implement and explain but less precise than SM-2.
Recommend SM-2 for the initial implementation since it is well-documented and produces
better scheduling for heterogeneous card difficulty.

---

## 3. Storage

### LocalStorage (Recommended for MVP)

- Stores card data, scheduling state, and review history in the browser.
- No server required — works offline.
- Limitation: ~5-10 MB, shared with other site data.
- Sync across devices is not available.

### IndexedDB (Recommended for full version)

- Higher capacity (~hundreds of MB).
- Supports complex queries (filter by subject, due date range).
- Still client-side and offline-capable.

### Server-Side (Future)

- Enable cross-device sync via a simple API.
- Store card data in a database (e.g., Turso/SQLite, Cloudflare D1).
- Authentication via GitHub OAuth (consistent with the existing Cloudflare deployment).
- Local-first: always write locally first, sync when online.

### Recommended Approach

Start with **LocalStorage** for MVP. Migrate to **IndexedDB** when card count exceeds ~1000 or
when per-subject study dashboards require query support. Add server-side sync as a
post-MVP feature.

---

## 4. UI Design

### Flashcard Modal

A modal overlay triggered from any page:

- **Front face:** Question/prompt displayed prominently.
- **Flip button:** Reveals the answer (keyboard shortcut: Space).
- **Rating buttons:** Again / Hard / Good / Easy (keyboard shortcuts: 1/2/3/4).
- **Progress bar:** Cards reviewed / cards due in current session.
- **Close:** Returns to the page. Progress is auto-saved.

### Progress Tracking

Per-subject dashboard showing:

- Cards due today
- Cards learned (new)
- Retention rate (last 7 days)
- Streak counter
- Heatmap of study activity

### Review Scheduling

- Due cards surfaced on the sidebar as a badge.
- "Study now" button starts a review session filtered to the current page's subject.
- Overdue cards prioritised in the review queue.

---

## 5. Content Generation

### Manual Card Creation

Authors create cards in markdown frontmatter:

```yaml
---
type: flashcard
front: "What is the quadratic formula?"
back: "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$"
subject: gcse/maths
topic: quadratic-equations
difficulty: easy
---
```

### Auto-Generation Pipeline

Extract key terms from existing documentation:

1. **Parse markdown headings and bold text** — each heading or bolded term becomes a potential card front.
2. **Extract the following paragraph** — becomes the card back.
3. **Generate cloze deletions** — replace key terms with `{{blank}}`.
4. **Convert practice problems** — extract `PracticeProblem` component instances as problem-type cards.
5. **Batch review** — authors review and edit auto-generated cards before publishing.

### Source Integration

Cards link back to their source page via `sourceUrl`, so users can navigate from a flashcard to the
full explanatory content.

---

## 6. Integration Points

### PracticeProblem Component

The existing `PracticeProblem` component (`src/components/interactive/PracticeProblem.tsx`) serves
exam-style questions. Integration paths:

- **Import:** Parse question bank markdown files and generate problem-type flashcards automatically.
- **Embed:** Add a "Study this topic" button below PracticeProblem sets that launches a flashcard
  session for the current topic.
- **Reuse props:** Flashcard problem type uses the same `{ question, options, correctAnswer, explanation }`
  interface.

### Per-Page Study Mode

- Each docs page detects flashcards tagged with its subject path.
- A floating "Review due cards" button appears when cards are due.
- Clicking opens the flashcard modal pre-filtered to the current page's topic.
- Sidebar shows a card count badge per section.

### Docusaurus Plugin

A custom Docusaurus plugin processes flashcard frontmatter during build:
- Aggregates all flashcards into a JSON index.
- Embeds the index in the client bundle.
- Generates per-subject flashcard pages.

---

## 7. MVP Scope

### Included in MVP

- LocalStorage-backed card storage.
- SM-2 scheduling algorithm.
- Flashcard modal with flip and rate functionality.
- Keyboard shortcuts (Space to flip, 1-4 to rate).
- Manual card creation via markdown frontmatter.
- Per-page study mode (cards filtered by current page subject).
- Due-card badge in the sidebar.

### Excluded from MVP

- Cross-device sync.
- IndexedDB migration.
- Auto-generated cards from existing content.
- Per-subject dashboard with charts.
- Image-based flashcards.
- Cloze deletion type (basic and problem types only).
- Import/export functionality.

### Estimated Effort

| Component | Estimated Time |
|-----------|---------------|
| SM-2 algorithm | 2 hours |
| Flashcard modal component | 4 hours |
| LocalStorage persistence | 2 hours |
| Markdown frontmatter parsing plugin | 3 hours |
| Per-page study mode integration | 2 hours |
| Sidebar badge and routing | 2 hours |
| **Total** | **~15 hours** |
