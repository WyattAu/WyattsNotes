# Roadmap

**Repository:** WyattAu/WyattsNotes
**Last Updated:** 2026-05-12
**Scope:** Full monorepo across 8 Docusaurus sub-sites (main, academics, alevel-maths-physics, alevel-sciences, dse, ib, programming, university, qualifications)

---

## Current State Summary

| Metric | Value |
| --- | --- |
| Content files | 1,207 markdown files |
| Relative links | 3,016 (0 broken) |
| MDX validation errors | 0 |
| TypeScript errors | 0 |
| ESLint errors | 0 |
| Sub-sites | 9 (main + 8 content deployments) |
| Subjects covered | 23 (IB, A-Level, DSE, GCSE, AP, Scottish Highers, Irish LC, C++, Java, Python, Rust, Dart, Linux, Networking, Databases, Security, TrueNAS, Tuning, Git, Algorithms, Probabilistic ML, General, Licensing) |
| Approximate content | 491K lines across 709 files |

### Quality Gates Status

All automated quality gates pass:

- TypeScript typecheck (`tsc --noEmit`)
- ESLint with strict rules (`--max-warnings=0`)
- Prettier formatting
- markdownlint (MD001, MD003, MD004, MD007, MD024, MD033, MD034, MD041, MD046)
- MDX validation (emoji detection, admonition formatting, raw HTML, trailing blanks)
- Link checker (relative links, directory resolution, anchor validation, slug-aware fallback)
- Lychee external link checker (CI only)
- Content standard enforcement (CONTENT_STANDARD.md)

---

## Phase 1: Content Completion (Near-Term)

### 1.1 Probabilistic ML Expansion

**Status:** 3 files, 1.7K lines. Severely underdeveloped relative to depth tier requirements.

**Completed from restructure plan:**
- Accuracy fix: "Absolutely Continuous Random Element" now includes formal definition with
  measurability and null set semantics
- Accuracy fix: "Space of Probability Measures" already matches corrected specification

**Remaining tasks:**
- [ ] Execute definitions restructure plan (`.spec/definitions_restructure_spec.md`)
  - Phase 2: Fix 7 accuracy issues (Event definition, Equivalence Relation context, Lipschitz constant, a.e. measurability assumption, absolute continuity wording, Space of Probability Measures notation, RCP vs RCD distinction)
  - Phase 3: Add 6 missing definitions (LOTUS, CLT, Reparameterization Trick, Positive Definite Kernels + Moore-Aronszajn, Stochastic Processes + SDEs, Jensen-Shannon Divergence)
  - Phase 4: Reorganize chapters (move Covariance Matrix, merge Bochner definitions, create Probability Metrics & Info Theory section)
- [ ] Expand to meet Tier 4 depth requirements (150+ lines per file)
- [ ] Add worked examples for all major theorems
- [ ] Cross-reference with university maths/physics content

### 1.2 Licensing Section

**Status:** 2 files, 1.1K lines. Minimal content.

**Tasks:**
- [ ] Expand GPL, MIT, Apache coverage with actual license text analysis
- [ ] Add compliance workflows (CLA, DCO, contributor agreements)
- [ ] Add practical guidance for choosing licenses
- [ ] Cross-reference with TrueNAS and infrastructure content

### 1.3 General / Meta Section

**Status:** 10 files, 4.8K lines.

**Tasks:**
- [ ] Review for depth tier compliance
- [ ] Ensure dev environment setup is current (Node 22, pnpm 10)
- [ ] Add productivity tooling recommendations

### 1.4 University Content Expansion

**Priority:** High. University notes are the most technically demanding content.

**Tasks:**
- [ ] Complete Real Analysis coverage
- [ ] Expand Quantum Mechanics notes
- [ ] Add Algorithms and Data Structures university-level content
- [ ] Ensure all proofs meet Tier 4 standards (precise definitions, complete proofs or detailed sketches)

---

## Phase 2: Performance and Infrastructure (Mid-Term)

### 2.1 Build Performance

**Problem:** TypeScript compilation and ESLint are slow on large monorepo (1,207 content files + 9 sub-site configs).

**Tasks:**
- [ ] Benchmark current build times per sub-site
- [ ] Investigate incremental typecheck (`tsc --build` with project references)
- [ ] Evaluate turborepo or nx for monorepo task orchestration
- [ ] Split tsconfig.json per sub-site to reduce typecheck scope
- [ ] Add build time tracking to CI (compare against baseline)

### 2.2 Lighthouse Score Optimization

**Current targets (lighthouserc.js):**
- Performance: >= 0.9
- Accessibility: >= 0.9
- Best Practices: >= 0.9
- SEO: >= 0.9

**Tasks:**
- [ ] Run Lighthouse CI on production and identify regressions
- [ ] Optimize JS bundle size (target: < 500KB scripts, < 100KB stylesheets)
- [ ] Audit font loading (Merriweather, Inter, JetBrains Mono) for FOIT/FOUT
- [ ] Implement image lazy loading audit (Desmos, GeoGebra, PhET iframes)
- [ ] Review service worker caching strategy effectiveness

### 2.3 Search Infrastructure

**Tasks:**
- [ ] Audit Algolia index freshness (daily cron vs on-deploy indexing)
- [ ] Add search analytics (track query volume, zero-result queries)
- [ ] Implement search result ranking improvements
- [ ] Add faceted search (filter by subject, qualification level)

---

## Phase 3: Content Quality Automation (Mid-Term)

### 3.1 Automated Depth Tier Checking

**Status:** DONE. Implemented `check-depth-tiers.py`.
- Scans 1,207 files across 9 sub-directories
- Classifies into 4 tiers with configurable minimum line counts
- Validates required sections (Common Pitfalls, Worked Examples, Summary)
- Reports per-directory issue counts
- Integrated into CI `content-validation` job

**Results:** 1,915 findings identified (mostly tier 2 missing required sections across docs_alevel and docs_ib).

### 3.2 Hand-Wave Detection

**Status:** DONE. Implemented `check-handwaves.py`.
- Scans for 18 patterns across 3 categories: HANDWAVE, VAGUE, HEDGE
- Uses precompiled regexes and parallel processing (ProcessPoolExecutor)
- Skips code fences, inline code, display math blocks
- Informational only (exit 0) to avoid CI noise during remediation

**Results:** 2,396 findings across 775 files (787 handwaves, 1,604 vague, 5 hedges).

### 3.3 Description Quality

**Status:** DONE. Implemented `check-descriptions.py`.
- Validates 120-160 character bounds per CONTENT_STANDARD.md
- Detects duplicate descriptions across the site
- Flags vague trailing qualifiers

**Results:** 842 too short, 92 too long, 711 duplicates, 0 vague.

### 3.4 Forward-Reference Detection

**Status:** DONE. Implemented `check-forward-refs.py`.
- Detects formal definitions (bold text, theorem/lemma/proposition labels)
- Flags terms used in math mode before their definition line
- Skips standard notation (single letters, common operators)
- Uses parallel processing

### 3.5 Search Index Coverage

**Status:** DONE. Implemented `check-search-index-coverage.py`.
- Cross-references Algolia indices with docusaurus configs
- Identifies 2 coverage gaps (docs_infrastructure, docs_tools served by main index)
- 7 naming mismatches between config paths and index names

---

## Phase 4: Architecture Improvements (Long-Term)

### 4.1 Monorepo Tooling

**Current state:** 9 Docusaurus configs in root directory, shared `src/` and `docs/`.

**Tasks:**
- [ ] Evaluate pnpm workspaces for shared dependency management
- [ ] Consider extracting shared components to a local package
- [ ] Standardize config generation (reduce duplication across 9 docusaurus configs)
- [ ] Add shared tailwind/postcss config

### 4.2 Testing Infrastructure

**Status:** DONE. Vitest configured with 35 tests across 6 test files.

**Test coverage:**
- DesmosGraph: parseExpression logic, parameter detection, aspect ratio, guard clauses (8 tests)
- Geogebra: URL construction, aspect ratio, default dimensions (3 tests)
- PhetSimulation: URL construction, hyphenated IDs, aspect ratio (3 tests)
- IFrameComponent: default dimensions, src prop validation (3 tests)
- ReadingProgress: scroll percentage computation, clamping, threshold rendering (5 tests)
- escape-jsx-braces webpack loader: brace escaping for 9 test cases (9 tests)

**Tasks:**
- [ ] Add @testing-library/react component render tests (requires jsdom setup for Docusaurus)
- [ ] Add E2E tests (Playwright) for critical user flows
- [ ] Increase coverage threshold to >= 80%
- [ ] Add snapshot tests for interactive embeds

### 4.3 Custom Plugin Testing

**Status:** DONE. 9 tests for escape-jsx-braces webpack loader.
- Tests: simple expressions, parameter detection, x/y exclusion, e/i exclusion,
  pipe escaping, deeply nested braces, multiple commands, unbalanced braces,
  empty source, whitespace handling

---

## Phase 5: Content Expansion (Long-Term)
  - Theme toggle persists via cookie
- [ ] Integrate test runner into CI pipeline
- [ ] Add coverage thresholds (>= 80% for src/)

### 4.3 Custom Plugin Consolidation

**Current state:** 3 custom plugins in `src/plugins/`.

**Tasks:**
- [ ] Add unit tests for escape-jsx-braces webpack loader
- [ ] Add unit tests for fix-mermaid-elk resolve alias
- [ ] Document plugin architecture in ADR format
- [ ] Evaluate whether escape-jsx-braces can be replaced with remark plugin alone

---

## Phase 5: Content Expansion (Long-Term)

### 5.1 New Subject Areas

**Candidates based on site structure and demand:**
- [ ] Haskell / Functional Programming
- [ ] Go / Systems Programming
- [ ] Kotlin / Android Development
- [ ] Computer Architecture (deeper than current infrastructure coverage)
- [ ] Operating Systems (deeper than current Linux coverage)
- [ ] Discrete Mathematics (standalone, not just as part of qualifications)
- [ ] Number Theory
- [ ] Complex Analysis
- [ ] Differential Equations
- [ ] Thermodynamics (deeper than current physics coverage)

### 5.2 Multimedia Content

**Tasks:**
- [ ] Evaluate video embed support (YouTube, Vimeo) with consistent component API
- [ ] Add interactive code playgrounds (Python, Java, C++) via web containers
- [ ] Implement diagram auto-generation from text descriptions

### 5.3 Internationalization

**Tasks:**
- [ ] Evaluate Docusaurus i18n for Chinese (Simplified) translations
- [ ] Assess demand for other languages
- [ ] Implement translation workflow (Crowdin, local, or community-driven)

---

## Phase 6: Operational Excellence (Ongoing)

### 6.1 Dependency Management

**Tasks:**
- [ ] Monitor Dependabot for security updates
- [ ] Quarterly dependency audit (remove unused, update outdated)
- [ ] Pin all sub-dependencies in pnpm-lock.yaml
- [ ] Evaluate fast-xml-parser override (currently pinned to >= 4.5.4)

### 6.2 Security

**Tasks:**
- [ ] Regular security.txt and humans.txt updates
- [ ] Sentry error monitoring review (currently sampling at 10%)
- [ ] CSP header audit for all sub-sites
- [ ] Evaluate Subresource Integrity (SRI) for CDN-loaded scripts

### 6.3 Documentation of Infrastructure

**Tasks:**
- [ ] Document deployment pipeline (GitHub Actions -> gh-pages)
- [ ] Document Algolia indexing workflow
- [ ] Document sub-site architecture and DNS configuration
- [ ] Create incident response runbook

---

## Risk Register

| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| Docusaurus major version upgrade breaks plugins | Medium | High | Pin versions, test in staging branch |
| Algolia free tier limits exceeded | Low | Medium | Monitor usage, evaluate self-hosted alternative (Meilisearch) |
| Content accuracy drift (mathematical errors) | Medium | High | Expand automated validation, peer review process |
| Build times become prohibitive | Medium | Medium | Incremental builds, per-site CI splits |
| Contributor onboarding friction | Medium | Low | Improve CONTRIBUTING.md, add setup scripts |
| pnpm/npm ecosystem changes | Low | Medium | Pin package manager version in .nvmrc and CI |

---

## Success Metrics

| Metric | Current | Target (6 months) | Target (12 months) |
| --- | --- | --- | --- |
| Content files | 1,207 | 1,400+ | 1,800+ |
| Broken links | 0 | 0 | 0 |
| MDX validation errors | 0 | 0 | 0 |
| TypeScript errors | 0 | 0 | 0 |
| Test coverage (src/) | 0% | 60% | 80% |
| Lighthouse performance | TBD | >= 0.9 | >= 0.95 |
| Build time (full) | TBD | < 5 min | < 3 min |
| Subjects covered | 23 | 28 | 35 |
| Automated quality checks | 6 | 10 | 12 |
