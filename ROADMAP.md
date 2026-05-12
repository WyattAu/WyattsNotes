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

**Tasks:**
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

**Problem:** Content depth tier compliance (line counts, section completeness) requires manual review.

**Tasks:**
- [ ] Implement `check-depth-tiers.py` script
  - Parse frontmatter for tier classification
  - Count body lines (excluding frontmatter)
  - Verify mandatory sections present (Common Pitfalls, Worked Examples, etc.)
  - Output per-file compliance report
- [ ] Integrate into CI pipeline
- [ ] Add to pre-commit hook (warning-only for new files)

### 3.2 Hand-Wave Detection

**Problem:** Phrases like "obviously", "clearly", "intuitively" without justification violate CONTENT_STANDARD.md.

**Tasks:**
- [ ] Implement `check-handwaves.py` script
  - Scan for blacklisted phrases outside code fences and math blocks
  - Flag occurrences with file:line references
  - Integrate into CI
- [ ] Expand phrase list based on CONTENT_STANDARD.md Section 6

### 3.3 Mathematical Correctness Validation

**Tasks:**
- [ ] Evaluate KaTeX rendering consistency across all 1,207 files
- [ ] Implement cross-file definition consistency checker (detect conflicting definitions)
- [ ] Add forward-reference detection (concept used before defined)

### 3.4 Description Quality

**Problem:** Frontmatter descriptions must be 120-160 characters, unique, rigorous.

**Tasks:**
- [ ] Implement `check-descriptions.py` script
  - Verify character count bounds
  - Check uniqueness across site
  - Flag vague qualifiers and trailing ellipses
- [ ] Integrate into CI

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

**Current state:** No test framework configured. `makefile` has `test` target but no test runner.

**Tasks:**
- [ ] Add Vitest for React component testing
  - DesmosGraph: test parseExpression, slider detection, calculator URL fallback
  - Geogebra: test URL construction
  - PhetSimulation: test URL construction
  - ReadingProgress: test scroll calculation
  - SearchPage: test Algolia API integration (mocked)
- [ ] Add component snapshot tests for interactive embeds
- [ ] Add end-to-end tests (Playwright) for critical user flows
  - Landing page renders
  - Search returns results
  - Navigation between sub-sites
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
