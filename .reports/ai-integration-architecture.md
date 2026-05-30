# AI Integration Architecture — WyattsNotes

## Overview

This document defines the AI integration architecture for WyattsNotes, an educational content platform.
Four AI-powered features are planned: semantic search, content recommendations, practice problem
generation, and explanation simplification. All features prioritise student privacy — no personal data
leaves the client without explicit consent.

---

## 1. Semantic Search

### Architecture

```
┌──────────┐    ┌──────────────┐    ┌────────────────┐
│ Markdown │───▶│ TF-IDF /     │───▶│ embeddings.json │
│   Files  │    │ Embedding    │    │  (pre-computed) │
└──────────┘    │  Generator   │    └───────┬────────┘
                └──────────────┘            │
                                           ▼
┌──────────┐    ┌──────────────┐    ┌────────────────┐
│  Query   │───▶│ Vectorize    │───▶│ Cosine Similarity│───▶ Ranked Results
│  Text    │    │  Query       │    │     Search       │
└──────────┘    └──────────────┘    └────────────────┘
```

### API Design

```
GET /api/search?q=<query>&n=10&category=<optional>
Response: {
  results: [{ slug, title, description, score, category }],
  query: string,
  total: number,
  latency_ms: number
}
```

### Data Flow

1. Build phase: Markdown files → strip frontmatter → TF-IDF vectorization → store vectors in JSON
2. Query phase: User query → vectorize → cosine similarity against all stored vectors → rank by score → return top-N
3. Optional upgrade: Replace TF-IDF with OpenAI `text-embedding-3-small` for higher quality

### Cost Estimates (OpenAI Embeddings)

| Metric | Value |
|--------|-------|
| Model | text-embedding-3-small |
| Price | $0.02 / 1M tokens |
| ~200 IB docs × ~3K tokens each = 600K tokens | $0.012 per full re-index |
| ~100 queries/day × 20 tokens = 2K tokens/day | $0.00004/day ($0.015/year) |
| **Total annual estimate** | **~$0.03** |

TF-IDF approach: $0 (no API calls).

### Privacy

- Embeddings are computed from public educational content only — no user data
- Query text is processed server-side but not logged or stored
- No PII transmitted to third parties

### Implementation

- Phase 1: Pure Node.js TF-IDF vectorizer (`scripts/semantic-search-server.mjs`)
- Phase 1+: Optional OpenAI embeddings backend for production

---

## 2. Content Recommendations

### Architecture

```
┌─────────────┐     ┌───────────────────┐     ┌────────────────┐
│ Current Page │────▶│ Embedding Lookup   │────▶│ Similarity Match│
│   (slug)     │     │ (from index)       │     │  Top-K results  │
└─────────────┘     └───────────────────┘     └───────┬────────┘
                                                       │
┌─────────────┐     ┌───────────────────┐              ▼
│ User History │────▶│ Category Boost    │     ┌────────────────┐
│  (optional)  │     │ (same subject +)  │────▶│ Ranked Sidebar  │
└─────────────┘     └───────────────────┘     └────────────────┘
```

### API Design

```
GET /api/recommendations?slug=<current>&n=5&category=<optional>
Response: {
  recommendations: [{ slug, title, description, score, reason }],
  fallback: "Popular in Physics" | null
}
```

### Data Flow

1. User visits page → component sends current slug to API
2. API looks up embedding for current page
3. Computes cosine similarity with all other pages in same category (boosted) and other categories
4. Filters out current page, returns top-N
5. If API unavailable → fallback to static "Popular in [Category]" list

### Cost Estimates

Uses pre-computed embeddings — no additional API cost. Zero per-request cost for TF-IDF approach.
With OpenAI embeddings at re-index only: included in Phase 1 estimate (~$0.03/year).

### Privacy

- User reading history is optional and stored client-side only (localStorage)
- Category boosting happens server-side without tracking individual users
- "Not relevant" feedback is anonymous and aggregated

### Implementation

- Phase 2: `AIRecommendations.tsx` component with IntersectionObserver lazy loading
- Fallback to static curated lists per subject

---

## 3. Practice Problem Generation

### Architecture

```
┌──────────────┐     ┌─────────────────┐     ┌───────────────┐
│ Content Page  │────▶│ Key Concept     │────▶│ GPT Prompt     │
│ (markdown)    │     │ Extraction      │     │ Construction   │
└──────────────┘     └─────────────────┘     └───────┬───────┘
                                                      │
                                                      ▼
┌──────────────┐     ┌─────────────────┐     ┌───────────────┐
│ Validation   │◀────│ Answer Check   │◀────│ OpenAI API     │
│ (schema,     │     │ (correctness)   │     │ (gpt-4o-mini) │
│  difficulty)  │     └─────────────────┘     └───────────────┘
└──────┬───────┘
       ▼
┌──────────────┐
│ Cached in    │
│ JSON store   │
└──────────────┘
```

### API Design

```
POST /api/generate-problems
Body: { slug: string, count: 5, difficulty: 'easy'|'medium'|'hard' }
Response: {
  problems: [{
    id: string,
    question: string,
    options: string[],
    correctIndex: number,
    explanation: string,
    difficulty: string,
    concepts: string[]
  }]
}
```

### Data Flow

1. Teacher/admin triggers problem generation for a topic (or batch during build)
2. System extracts key concepts from content (headings, bold terms, equations)
3. Constructs structured prompt with content context, difficulty level, and format constraints
4. Sends to OpenAI API → parses response → validates schema
5. Stores validated problems in static JSON — served without API calls to students

### Cost Estimates (OpenAI GPT-4o-mini)

| Metric | Value |
|--------|-------|
| Model | gpt-4o-mini |
| Price | $0.15 / 1M input, $0.60 / 1M output |
| Per topic (~3K tokens in, ~1K tokens out) | ~$0.001 |
| 100 topics × 5 problems each | ~$0.10 |
| **Total for full content set** | **~$0.10** |
| Regeneration / updates | ~$0.10 per batch |

### Privacy

- Problems generated server-side from public content only
- No student interaction data sent to AI
- Generated problems cached as static JSON — students never hit AI API directly
- Student answers stored locally in browser only (for spaced repetition)

### Implementation

- Phase 3: Generation script + static JSON store + enhanced `PracticeProblem` component
- Difficulty calibration via keyword analysis of content complexity

---

## 4. Explanation Simplification

### Architecture

```
┌───────────────┐     ┌─────────────────┐     ┌───────────────┐
│ Content       │────▶│ Level Selector  │────▶│ Prompt Builder │
│ Section       │     │ (beg/int/adv)   │     │ + Examples     │
└───────────────┘     └─────────────────┘     └───────┬───────┘
                                                      │
                                                      ▼
┌───────────────┐     ┌─────────────────┐     ┌───────────────┐
│ Pre-computed  │◀────│ Cache Check     │◀────│ OpenAI API     │
│ Explanations  │     │ (slug+level)    │     │ (gpt-4o-mini) │
└───────┬───────┘     └─────────────────┘     └───────────────┘
        │
        ▼
┌───────────────┐
│ Render in     │
│ Toggle UI     │
└───────────────┘
```

### API Design

```
GET /api/explain?slug=<slug>&level=beginner|intermediate|advanced&section=<optional>
Response: {
  original: string,
  simplified: string,
  level: string,
  concepts_used: string[]
}
```

### Data Flow

1. User clicks "Simplify" or selects level on a content section
2. Client checks localStorage cache for (slug + level) pair
3. If cached → render immediately; if not → fetch from API
4. API checks server-side cache (pre-computed during build for popular pages)
5. If no cache → call OpenAI with content + level instructions → cache result → return
6. User preference stored in localStorage for future pages

### Cost Estimates (OpenAI GPT-4o-mini)

| Metric | Value |
|--------|-------|
| Per explanation (~2K tokens in, ~1K tokens out) | ~$0.001 |
| Pre-compute: 100 popular pages × 3 levels | ~$0.30 |
| On-demand: ~50/day | ~$0.05/day ($18/year) |
| **With full pre-computation** | **~$0.30 one-time** |
| **On-demand only** | **~$18/year** |

### Privacy

- Content sent to API is public educational material — not user-generated
- User level preference stored client-side only
- No student questions or interactions transmitted
- Consent dialog shown before first AI-powered simplification

### Implementation

- Phase 4: Pre-computation script + "Simplify" toggle component + level selector
- Cache-first strategy: pre-compute during CI/CD for known popular pages

---

## Implementation Phases

### Phase 1 — Semantic Search (Current)

- [x] TF-IDF vectorizer script (`scripts/semantic-search-server.mjs`)
- [x] CLI: `--index`, `--search`, `--serve` modes
- [x] HTTP API on port 3456
- [ ] Integration with Docusaurus search plugin
- [ ] Optional OpenAI embeddings backend

### Phase 2 — Content Recommendations

- [x] `AIRecommendations.tsx` component
- [ ] Recommendation API endpoint
- [ ] Category boosting algorithm
- [ ] Static fallback lists per subject
- [ ] Anonymous feedback collection ("Not relevant")

### Phase 3 — Practice Problem Generation

- [ ] Key concept extraction from markdown
- [ ] GPT prompt templates per difficulty level
- [ ] Problem generation script (batch + on-demand)
- [ ] Static JSON problem store
- [ ] Enhanced `PracticeProblem` component with AI problems
- [ ] Difficulty calibration validation

### Phase 4 — Explanation Simplification

- [ ] Pre-computation pipeline (CI/CD integration)
- [ ] "Simplify" toggle component per content section
- [ ] Level selector (beginner / intermediate / advanced)
- [ ] Client + server cache layer
- [ ] Consent dialog for first use

---

## Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Embedding approach | TF-IDF first, OpenAI optional | Zero cost, no dependencies, good enough for educational content |
| AI model | gpt-4o-mini | Best cost/quality ratio for text tasks |
| Problem serving | Static JSON, not real-time AI | Privacy, cost, latency, offline support |
| Cache strategy | Build-time pre-computation | Zero latency for users, minimal API cost |
| User data | Client-side only (localStorage) | Privacy-first, no server-side user tracking |
| Search server | Standalone Node.js | Decoupled from Docusaurus build, can run independently |
