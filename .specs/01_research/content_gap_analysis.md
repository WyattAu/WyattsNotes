# Content Gap Analysis — WyattsNotes

**Date:** 2026-05-12
**Status:** Initial scan complete. Phase 5 stubs created for 4 phantom A-Level subjects.

## Summary

| Section       | Subjects / Topics | Files | Lines  | Completeness |
| ------------- | ----------------- | ----- | ------ | ------------ |
| A-Level       | 7 (+4 phantom)    | 281   | ~85K   | 70%          |
| IB            | 10                | 223   | ~60K   | 60%          |
| DSE           | 6                 | 147   | ~40K   | 40%          |
| University    | 4                 | 33    | ~12K   | 15%          |
| Languages     | 7                 | 157   | ~45K   | 55%          |
| C++           | 9 (structured)    | 155   | ~50K   | 75%          |
| Qualifications | 4               | 162   | ~48K   | 50%          |

Total across all active content sections: ~1,158 files, ~340K lines.

## A-Level Sciences — 4 Phantom Subjects

**Status:** RESOLVED (2026-05-12). Directories and sidebar entries created.

The `docusaurus.alevel-sciences.config.ts` `include` filter lists 8 subjects but only 4 had content:

| Subject          | Status        | Files |
| ---------------- | ------------- | ----- |
| biology          | Content exists | 20    |
| chemistry        | Content exists | 36    |
| computer-science | Content exists | 43    |
| economics        | Content exists | 23    |
| psychology       | STUB CREATED  | 1     |
| geography        | STUB CREATED  | 1     |
| history          | STUB CREATED  | 1     |
| english          | STUB CREATED  | 1     |

Placeholder `index.md` files created with topic outlines. No substantive content yet.

## IB — Core Components Missing

IB requires 6 subject groups plus 3 core components (TOK, EE, CAS). The site covers 10 subjects across groups 1-6 but has zero core component coverage:

- **Theory of Knowledge (TOK)** — mandatory for all IB students
- **Extended Essay (EE)** — 4,000-word independent research paper
- **Creativity, Activity, Service (CAS)** — experiential learning requirement

Also notable IB subject gaps: Business Management, Digital Society, Environmental Systems & Societies (ESS), Film, Philosophy, Music, Visual Arts, Theatre, Language B subjects, Design Technology, Global Politics, Sports Science.

## DSE — Core Subjects Missing

HKDSE requires 4 core subjects (Chinese, English, Maths, Liberal Studies). Only Maths is covered. The other 3 core subjects and most elective subjects are absent:

- **Chinese Language** (core) — compulsory for all Hong Kong students
- **English Language** (core) — compulsory
- **Liberal Studies / CSD** (core) — compulsory
- Electives: BAFS, Chinese History, Literature, Visual Arts, Ethics, Health Management, Music, PE, Tourism

## University — Severely Underdeveloped

Only 33 files across 4 broad topics (admissions, computing, mathematics, physics). This section is a skeleton — it needs:

- Entire missing disciplines: Chemistry, Biology, Engineering, Statistics, Economics, Philosophy, History, Law
- Depth within existing topics: Mathematics has 9 files (vs typical undergrad math curriculum with 30+ courses)
- Structure: No clear course/module hierarchy within topics
- Real Analysis is the most glaring sub-gap within mathematics

## Languages — JavaScript Missing

7 languages covered but JavaScript (the most widely used programming language) is absent. TypeScript exists as a standalone topic but doesn't cover vanilla JS fundamentals.

Also missing: C, C#, Swift, Ruby, PHP, Haskell, Scala, Elixir, Lua, Zig, OCaml, R, SQL, Julia, Bash.

## C++ — Most Complete Section

The C++ curriculum is the best-structured section with 9 progressive chapters from environment setup through concurrency. Gaps are incremental (C++20/23 features, build systems, testing, networking, embedded) rather than structural.

## Qualifications — Needs Subject-Level Structure

4 qualification types (AP, GCSE, Highers, ILC) exist as flat collections. Missing:
- Subject-specific subdirectories within each qualification (e.g., `gcse/maths/`, `ap/chemistry/`)
- Common missing qualifications: iGCSE, IB MYP, Cambridge Pre-U, BTEC, T-Levels, National 5

## Recommended Action Priority

1. **A-Level phantom stubs** — DONE (Phase 5, 2026-05-12)
2. **IB Core (TOK/EE/CAS)** — Create stubs with topic outlines
3. **DSE core subjects** — Chinese, English, Liberal Studies stubs
4. **University mathematics** — Expand real analysis, linear algebra, abstract algebra
5. **JavaScript** — Create `docs/docs_languages/javascript/` with fundamentals coverage
