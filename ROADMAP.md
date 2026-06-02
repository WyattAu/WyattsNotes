# Wyatt's Notes -- Technical Roadmap

> Last updated: 2026-06-02 Version: 2.0 -- full rewrite consolidating 12 completed audit phases into
> forward-looking roadmap

---

## Table of Contents

1. [Current State Summary](#current-state-summary)
2. [Phase 1: Test Coverage Expansion](#phase-1-test-coverage-expansion)
3. [Phase 2: Security Hardening](#phase-2-security-hardening)
4. [Phase 3: Performance Optimization](#phase-3-performance-optimization)
5. [Phase 4: Content Expansion](#phase-4-content-expansion)
6. [Phase 5: Platform Features](#phase-5-platform-features)
7. [Phase 6: Scalability](#phase-6-scalability)
8. [Phase 7: Advanced Features](#phase-7-advanced-features)
9. [Technical Debt Register](#technical-debt-register)
10. [Appendix A: Site Inventory](#appendix-a-site-inventory)
11. [Appendix B: Secrets Inventory](#appendix-b-secrets-inventory)
12. [Appendix C: Dependency Health](#appendix-c-dependency-health)
13. [Appendix D: Test Coverage Summary](#appendix-d-test-coverage-summary)

---

## Current State Summary

### Infrastructure Metrics

| Metric                 | Value                                                       |
| ---------------------- | ----------------------------------------------------------- |
| Sub-sites              | 9 deployed on Cloudflare Pages                              |
| Content files          | 1,211 documentation files                                   |
| Content lines          | ~862,000 lines                                              |
| Subjects covered       | 27                                                          |
| Interactive pages      | 131+ practice and flashcard .mdx pages across 20+ sections  |
| Algolia search indices | 8                                                           |
| Hosting                | Cloudflare Pages (wrangler)                                 |
| License                | AGPLv3                                                      |
| Stack                  | Docusaurus 3.10, React 19, TypeScript 5.9, Node 22, pnpm 10 |

### Quality Gates

| Check                  | Result                                                                   |
| ---------------------- | ------------------------------------------------------------------------ |
| Unit tests             | 288/288 passing (27 files)                                               |
| TypeScript             | 0 errors                                                                 |
| ESLint                 | 0 errors, 2 warnings (async without await in Playwright)                 |
| Links verified         | 3,016 verified, 0 broken                                                 |
| Descriptions           | 1,211/1,211 files pass (120-160 chars, 0 duplicates, 0 vague qualifiers) |
| MDX validation         | 0 errors                                                                 |
| Content depth sections | 897 files verified (6 stub/landing exemptions)                           |
| Algolia content gaps   | 0                                                                        |
| Security audit         | PASS (0 high/critical vulnerabilities)                                   |
| Content validation     | PASS                                                                     |
| KaTeX math rendering   | 14 subjects, 0 errors                                                    |
| Lighthouse (avg)       | Performance 82, Accessibility 96, Best Practices 92, SEO 100             |

### Technology Stack

| Layer          | Technology                                                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Framework      | Docusaurus 3.10 with @docusaurus/faster (SWC + Rspack)                                                                         |
| UI             | React 19, TypeScript 5.9, Emotion (CSS-in-JS)                                                                                  |
| Math           | KaTeX (server + client rendering), LaTeX brace escaping                                                                        |
| Diagrams       | Mermaid (client-only rendering)                                                                                                |
| Search         | Algolia DocSearch (cross-site, faceted, analytics-enabled)                                                                     |
| Testing        | Vitest (unit + property), Playwright (E2E + visual regression)                                                                 |
| CI/CD          | GitHub Actions (lint, typecheck, build, test, security, content validation, link checking, Lighthouse, E2E, uptime monitoring) |
| Offline        | Service worker (Workbox generateSW), build-ID cache versioning                                                                 |
| Error tracking | Sentry (DSN via environment variable)                                                                                          |
| Analytics      | Cloudflare Web Analytics (privacy-respecting, no cookies)                                                                      |
| Deployment     | wrangler to Cloudflare Pages with path-based triggers, concurrency groups, build caching                                       |

### Interactive Components

| Component       | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| DesmosGraph     | Graphing calculator embed with parameter detection                      |
| Geogebra        | Interactive geometry algebra embed                                      |
| PhetSimulation  | PhET interactive science simulation embed                               |
| CircuitBuilder  | Circuit simulator for physics (26 tests)                                |
| PeriodicTable   | 118-element periodic table with color-coded categories, tooltips, modal |
| FlashcardDeck   | Spaced repetition flashcards with SM-2 algorithm                        |
| DiagnosticTest  | Adaptive diagnostic assessment component                                |
| PracticeProblem | Auto-graded MCQ practice problems                                       |

---

## Phase 1: Test Coverage Expansion

**Duration:** 2-4 weeks **Goal:** Increase unit test coverage from 69% to 80%+ on critical paths;
expand E2E coverage for interactive components.

### 1.1 Unit Test Coverage Improvement

| Task                                                                | Target Metric          |
| ------------------------------------------------------------------- | ---------------------- |
| Increase line coverage on critical rendering paths (components/)    | 69% -> 80%             |
| Increase branch coverage on data transformation utilities           | 72% -> 85%             |
| Add render tests replacing renderToString-only tests with jsdom/RTL | Replace 6 stub renders |
| Add snapshot tests for MDXComponents output consistency             | 5 component snapshots  |

### 1.2 E2E Tests for Interactive Components

| Component       | Test Scenarios                                                | Priority |
| --------------- | ------------------------------------------------------------- | -------- |
| Mermaid         | Diagram renders on load, theme switch re-renders, empty state | P1       |
| KaTeX           | Inline math renders, display math renders, error state        | P1       |
| FlashcardDeck   | Card flip, SM-2 interval calculation, reset, completion       | P1       |
| PracticeProblem | MCQ selection, grading, score display, navigation             | P1       |
| DiagnosticTest  | Adaptive branching, result computation, restart               | P2       |
| DesmosGraph     | Graph load, parameter parsing failure fallback                | P2       |
| PeriodicTable   | Modal open/close, category filter, tooltip display            | P2       |

### 1.3 Theme Persistence Tests

- Dark/light toggle persists across navigation
- Theme preference survives page reload
- System preference detection on first visit
- Service worker cache serves correct theme assets

### 1.4 Property-Based Testing Expansion

| Component/Module       | Properties Under Test                                                    | Library    |
| ---------------------- | ------------------------------------------------------------------------ | ---------- |
| FlashcardDeck SM-2     | Interval monotonicity, ease clamping [1.3, 2.5], repetition count bound  | fast-check |
| DiagnosticTest         | Score always in [0, 1], question count invariant, no duplicate questions | fast-check |
| ReadingProgress        | Progress in [0, 1], scroll direction invariant, idempotent updates       | fast-check |
| URL construction utils | No double slashes, valid query params, protocol preservation             | fast-check |
| LaTeX brace escaping   | Round-trip identity f(f(x)) = x for all valid LaTeX                      | fast-check |

### 1.5 Success Criteria

| Metric                              | Current | Target |
| ----------------------------------- | ------- | ------ |
| Line coverage                       | 69%     | 80%+   |
| Branch coverage                     | 72%     | 85%+   |
| E2E interactive component scenarios | 0       | 15+    |
| Property-based test count           | 16      | 30+    |

---

## Phase 2: Security Hardening

**Duration:** 2-3 weeks **Goal:** Eliminate mutable third-party action references, move secrets to
environment variables, add runtime content sanitization.

### 2.1 GitHub Actions Pinning

| Task                                                             | Scope          |
| ---------------------------------------------------------------- | -------------- |
| Pin all third-party GitHub Actions to commit SHAs                | 13 workflows   |
| Remove mutable `@v4`, `@v6` tag references                       | All actions    |
| Add Dependabot `github-actions` config for SHA update automation | dependabot.yml |

### 2.2 Wrangler Version Pinning

| Task                                                    | Scope         |
| ------------------------------------------------------- | ------------- |
| Pin wrangler to exact version in all 9 deploy workflows | deploy-\*.yml |
| Replace `npx wrangler` with `npx wrangler@<version>`    | 9 workflows   |
| Add wrangler version check step before deploy           | All deploys   |

### 2.3 Secret Management

| Secret                     | Current Location | Target Location      |
| -------------------------- | ---------------- | -------------------- |
| ALGOLIA_SEARCH_API_KEY     | Client-side JS   | Environment variable |
| SENTRY_DSN                 | Env var (OK)     | No change            |
| CLOUDFLARE_ANALYTICS_TOKEN | Env var (OK)     | No change            |

### 2.4 Content Sanitization

- Add DOMPurify dependency
- Wrap all `dangerouslySetInnerHTML` usage in DOMPurify.sanitize()
- Audit all components using dangerouslySetInnerHTML:
  - MDXComponents.tsx (custom HTML rendering)
  - Any remark/rehype plugin output
- Configure DOMPurify ALLOWED_TAGS for educational content (math, code, tables)

### 2.5 Content Security Policy

| Directive   | Current Policy       | Hardened Policy                     |
| ----------- | -------------------- | ----------------------------------- |
| default-src | strict               | strict (no change)                  |
| script-src  | Self + analytics     | Self + analytics + nonce            |
| style-src   | Self + unsafe-inline | Self + nonce (remove unsafe-inline) |
| connect-src | Analytics + Algolia  | Explicit domain whitelist           |
| frame-src   | Desmos/GeoGebra/PhET | Explicit domain whitelist           |

### 2.6 Supply Chain Automation

- Weekly automated `pnpm audit --audit-level=high`
- Dependabot security updates (npm + github-actions)
- Auto-merge for patch-level updates (existing)
- GitHub Issues creation for unpatchable vulnerabilities (existing)

---

## Phase 3: Performance Optimization

**Duration:** 2-3 weeks **Goal:** Eliminate duplicate CI builds, add bundle size regression
detection, optimize image pipeline.

### 3.1 Build Artifact Sharing

| Problem                                            | Solution                                                                 |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| Lighthouse workflow rebuilds from source           | Download build artifacts from CI build job via actions/download-artifact |
| Separate deploy workflows each build independently | Shared build step with matrix artifact upload/download                   |
| Typecheck + build run sequentially in CI           | Parallel execution with shared node_modules cache                        |

### 3.2 Bundle Size Regression Detection

| Metric                | Current Baseline | Regression Threshold |
| --------------------- | ---------------- | -------------------- |
| JS bundle (per site)  | 593-645 KB       | +5% per PR           |
| CSS bundle (per site) | 552-556 KB       | +5% per PR           |
| Total build size      | Varies per site  | +10% per PR          |
| Individual chunk size | N/A              | 200 KB hard limit    |

Implementation:

- Extend check-bundle-size.mjs to run as PR gate
- Comment on PR with size diff table
- Block merge on threshold violation

### 3.3 Image Optimization Pipeline

| Task                                | Tool/Format          |
| ----------------------------------- | -------------------- |
| Convert PNG/JPG to WebP             | sharp                |
| Generate AVIF variants              | sharp (avif codec)   |
| Create responsive srcset attributes | Custom remark plugin |
| Lazy-load below-fold images         | loading="lazy"       |
| Add width/height to prevent CLS     | remark-image-size    |

### 3.4 Build Tooling Evaluation

| Option          | Current                  | Proposed                                   | Expected Improvement       |
| --------------- | ------------------------ | ------------------------------------------ | -------------------------- |
| Bundler         | Webpack (via Docusaurus) | Rspack (@docusaurus/faster already active) | 2-3x build speed (partial) |
| CSS processing  | PostCSS                  | Evaluate Lightning CSS                     | 5-10x CSS processing       |
| MDX compilation | @mdx-js/mdx              | Evaluate tcdoc                             | Latency reduction          |

### 3.5 Lighthouse CI Optimization

- Use local build artifacts instead of deploying to Cloudflare first
- Reduce Lighthouse runs to affected sites only (path-based triggers)
- Parallel Lighthouse execution for multi-site PRs

---

## Phase 4: Content Expansion

**Duration:** Ongoing **Goal:** Expand qualification coverage, university notes, programming
languages, and multi-lingual content.

### 4.1 Qualification Coverage Expansion

| Qualification           | Current State       | Target State          | Priority |
| ----------------------- | ------------------- | --------------------- | -------- |
| A-Level Further Maths   | Partial stubs       | Full topic coverage   | High     |
| IB Additional Subjects  | Core subjects done  | Extend to all HL/SL   | High     |
| DSE Full Coverage       | 6 interactive pages | Complete all subjects | Medium   |
| AP (Advanced Placement) | 5 guides            | Full exam prep        | Medium   |
| Indian CBSE/ISC         | Intro stub          | Core subjects         | Low      |
| Australian HSC/VCE      | Intro stub          | Core subjects         | Low      |

### 4.2 University Notes Expansion

| Subject Area     | Current Coverage                                    | Target Coverage                                             |
| ---------------- | --------------------------------------------------- | ----------------------------------------------------------- |
| Mathematics      | Abstract algebra, number theory, linear algebra     | Complex analysis, topology, measure theory, PDEs            |
| Physics          | Electromagnetism, quantum mechanics, thermodynamics | Statistical mechanics, general relativity, particle physics |
| Computer Science | N/A                                                 | Algorithms, data structures, OS, networking                 |

### 4.3 Programming Language Expansion

| Language | Current Lines | Target Lines | Priority |
| -------- | ------------- | ------------ | -------- |
| Swift    | 0             | 5,000+       | High     |
| Ruby     | 0             | 5,000+       | Medium   |
| Haskell  | 0             | 5,000+       | Medium   |
| Elixir   | 0             | 5,000+       | Low      |

### 4.4 Cross-Language Content

- Leverage existing LanguageSwitcher.tsx component
- Priority languages: ZH, JA, KO, DE, FR, ES
- Translation pipeline (translation-pipeline.mjs exists)
- Target: top 50 most-visited pages in ZH first

### 4.5 Video Content Integration

- Embed infrastructure (iframeComponent already supports lazy-loaded iframes)
- YouTube/Vimeo embeds for worked examples
- Screen recording pipeline for step-by-step solutions
- Video metadata in MDX front matter

---

## Phase 5: Platform Features

**Duration:** 3-6 months **Goal:** Transform from static documentation site to interactive learning
platform.

### 5.1 User Authentication

| Feature                 | Implementation Approach                             |
| ----------------------- | --------------------------------------------------- |
| User accounts           | OAuth2 (Google, GitHub) via Next.js API or Supabase |
| Study progress tracking | Server-side progress store, local backup            |
| Preference persistence  | Theme, language, subject interests                  |
| Session management      | JWT tokens, HTTP-only cookies                       |

### 5.2 Collaborative Note Editing

| Feature                         | Technology Options                    |
| ------------------------------- | ------------------------------------- |
| Real-time collaborative editing | Yjs + WebRTC, or Supabase Realtime    |
| Version history per section     | Git-based versioning or CRDT          |
| Content review workflow         | GitHub PR-based (existing CODEOWNERS) |
| Edit suggestion queue           | Server-side queue with approval flow  |

### 5.3 AI-Powered Features

| Feature                     | Architecture                                            |
| --------------------------- | ------------------------------------------------------- |
| Content recommendations     | Collaborative filtering + content embeddings            |
| Study path generation       | Graph-based prerequisite traversal                      |
| Practice problem generation | LLM with structured output validation                   |
| Explanation simplification  | Multi-level explanation generation (GCSE -> University) |

### 5.4 Progressive Web App Enhancements

| Feature            | Current State           | Target State                                |
| ------------------ | ----------------------- | ------------------------------------------- |
| Offline content    | Service worker precache | Stale-while-revalidate with background sync |
| Push notifications | Infrastructure exists   | Study reminders, new content alerts         |
| Install prompt     | Manifest exists         | Custom install UX                           |
| Background sync    | N/A                     | Offline progress sync                       |

### 5.5 Content API

| Endpoint                     | Method | Description                                |
| ---------------------------- | ------ | ------------------------------------------ |
| /api/v1/subjects             | GET    | List all subjects with metadata            |
| /api/v1/subjects/{id}/topics | GET    | List topics within a subject               |
| /api/v1/content/{id}         | GET    | Retrieve content by ID                     |
| /api/v1/search               | GET    | Programmatic search (delegates to Algolia) |

---

## Phase 6: Scalability

**Duration:** 6-12 months **Goal:** Prepare infrastructure for 10x content growth and global
audience.

### 6.1 Edge-Side Rendering

| Approach               | Trade-offs                                          |
| ---------------------- | --------------------------------------------------- |
| Cloudflare Workers SSR | Low latency, limited Node.js API surface            |
| Vercel Edge Runtime    | Full Next.js compatibility, vendor lock-in          |
| Keep static SSG        | Current approach, zero server cost, limited dynamic |

### 6.2 CDN and Caching Strategy

| Asset Type     | Current TTL | Optimized TTL | Cache Key Strategy       |
| -------------- | ----------- | ------------- | ------------------------ |
| HTML pages     | No cache    | s-maxage=3600 | Content hash + path      |
| JS/CSS bundles | 1 year      | 1 year (OK)   | Content hash (immutable) |
| Images         | 1 year      | 1 year (OK)   | Content hash + format    |
| API responses  | N/A         | max-age=60    | Version + query hash     |

### 6.3 Internationalization Infrastructure

| Component            | Status          | Next Steps                           |
| -------------------- | --------------- | ------------------------------------ |
| LanguageSwitcher     | Implemented     | Connect to translated content        |
| Translation pipeline | Script exists   | Automate with CI triggers            |
| RTL support          | Not implemented | Add CSS logical properties           |
| Locale routing       | Not implemented | Docusaurus i18n plugin configuration |

### 6.4 Content Contribution Workflow

- Automated PR template with subject-area assignment (CODEOWNERS exists)
- Content quality CI gates (descriptions, depth, links, MDX validation)
- Automated merge for trusted contributors
- Content review SLA targets

### 6.5 Mobile App Integration

| Platform    | Technology                      | Status          |
| ----------- | ------------------------------- | --------------- |
| iOS         | React Native (Expo)             | Scaffold exists |
| Android     | React Native (Expo)             | Scaffold exists |
| Web         | Docusaurus (current)            | Production      |
| Shared code | Monorepo with shared components | Planned         |

---

## Phase 7: Advanced Features

**Duration:** 12+ months **Goal:** Establish competitive learning platform capabilities.

### 7.1 Interactive Exam Simulation

| Feature               | Description                                          |
| --------------------- | ---------------------------------------------------- |
| Timed exam mode       | Countdown timer, auto-submit, section-by-section     |
| Mark-and-review       | Flag questions for review before submission          |
| Score breakdown       | Per-topic performance analysis                       |
| Historical comparison | Compare performance across attempts                  |
| Exam paper generation | Random selection from question bank by topic weights |

### 7.2 Adaptive Learning Algorithms

| Algorithm                  | Application                                  |
| -------------------------- | -------------------------------------------- |
| Spaced repetition (SM-2)   | Already implemented in FlashcardDeck         |
| Bayesian knowledge tracing | Estimate topic mastery probability per user  |
| Item response theory       | Calibrate question difficulty from user data |
| Leitner system variant     | Optimize review scheduling for weak topics   |

### 7.3 Community Features

| Feature                | Implementation                                |
| ---------------------- | --------------------------------------------- |
| Discussion per topic   | Threaded comments (Disqus, or custom)         |
| Q&A system             | Stack Overflow-style question/answer          |
| User-contributed notes | Pull request workflow with review gates       |
| Reputation system      | Contribution points, subject expertise badges |

### 7.4 Content Versioning and Change Tracking

| Requirement                  | Approach                          |
| ---------------------------- | --------------------------------- |
| Content diff per revision    | Git-based diff (inherent in repo) |
| Changelog per subject        | Automated from commit history     |
| Rollback to specific version | Git revert + redeploy             |
| Content attribution          | Git blame integration             |

### 7.5 Analytics Dashboard

| Metric                      | Data Source          |
| --------------------------- | -------------------- |
| Study time per subject      | Local storage events |
| Practice problem accuracy   | Server-side events   |
| Flashcard retention rates   | SM-2 interval data   |
| Content completion progress | Section scroll depth |
| Peak study hours            | Aggregate timestamps |

---

## Technical Debt Register

### Priority 1 -- Critical

| ID     | Item                                              | Component             | Notes                                                                               |
| ------ | ------------------------------------------------- | --------------------- | ----------------------------------------------------------------------------------- |
| TD-001 | Deduplicate origin whitelist in WyattsNotesWidget | WyattsNotesWidget.tsx | Same origin list defined in multiple locations; extract to shared constant          |
| TD-002 | Implement voltmeter rendering in CircuitBuilder   | CircuitBuilder.tsx    | Voltmeter type exists in schema but renders as empty node; implement or remove type |

### Priority 2 -- High

| ID     | Item                                                                   | Component          | Notes                                                                               |
| ------ | ---------------------------------------------------------------------- | ------------------ | ----------------------------------------------------------------------------------- |
| TD-003 | DRY DiagnosticTest result computation logic                            | DiagnosticTest.tsx | Result scoring duplicated across adaptive branching paths; extract to pure function |
| TD-004 | Convert scripts to shared modules (eliminate fix vs check duplication) | scripts/           | fix-descriptions.py, check-descriptions.mjs share logic; extract common validation  |

### Priority 3 -- Medium

| ID     | Item                                                     | Component             | Notes                                                                       |
| ------ | -------------------------------------------------------- | --------------------- | --------------------------------------------------------------------------- |
| TD-005 | Extract PeriodicTable sub-components from single file    | PeriodicTable.tsx     | Element modal, tooltip renderer, category legend should be separate modules |
| TD-006 | Add comprehensive dark mode support to WyattsNotesWidget | WyattsNotesWidget.tsx | Widget only supports light theme; add CSS custom property inheritance       |

---

## Appendix A: Site Inventory

| Site           | Domain                           | Config File                               | Docs                  | Interactive Pages | Build Size  | Status |
| -------------- | -------------------------------- | ----------------------------------------- | --------------------- | ----------------- | ----------- | ------ |
| Main           | wyattsnotes.wyattau.com          | docusaurus.config.ts                      | infrastructure, tools | 0                 | ~115K lines | Live   |
| A-Level        | alevel.wyattau.com               | docusaurus.alevel.config.ts               | redirect              | 0                 | Minimal     | Live   |
| A-Level MP     | alevel-maths-physics.wyattau.com | docusaurus.alevel-maths-physics.config.ts | alevel (MP split)     | 6                 | ~174K lines | Live   |
| A-Level Sci    | alevel-sciences.wyattau.com      | docusaurus.alevel-sciences.config.ts      | alevel (sciences)     | 5                 | ~174K lines | Live   |
| Qualifications | qualifications.wyattau.com       | docusaurus.qualifications.config.ts       | gcse, ap, highers     | 3                 | ~89K lines  | Live   |
| Programming    | programming.wyattau.com          | docusaurus.programming.config.ts          | cpp, languages        | 7                 | ~183K lines | Live   |
| University     | university.wyattau.com           | docusaurus-university-{subject}.config.ts | university            | 0                 | ~56K lines  | Live   |
| Academics      | academics.wyattau.com            | deploy-academics.yml                      | redirect to ib        | 0                 | Minimal     | Live   |
| IB             | ib.wyattau.com                   | docusaurus.ib.config.ts                   | ib                    | 33                | ~143K lines | Live   |
| DSE            | dse.wyattau.com                  | docusaurus.dse.config.ts                  | dse                   | 6                 | ~101K lines | Live   |

---

## Appendix B: Secrets Inventory

| Secret                     | Used By                      | Purpose                     |
| -------------------------- | ---------------------------- | --------------------------- |
| CLOUDFLARE_API_TOKEN       | All 9 deploy workflows       | Deploy to Cloudflare Pages  |
| CLOUDFLARE_ACCOUNT_ID      | All 9 deploy workflows       | Cloudflare account identity |
| SENTRY_DSN                 | All 8 deploy workflows       | Error tracking              |
| ALGOLIA_APP_ID             | ci.yml, algolia-index.yml    | Search indexing             |
| ALGOLIA_WRITE_KEY          | ci.yml, algolia-index.yml    | Search indexing             |
| LHCI_GITHUB_APP_TOKEN      | ci.yml                       | Lighthouse CI               |
| GITHUB_TOKEN               | ci.yml (lychee link checker) | API rate limiting           |
| GOOGLE_SITE_VERIFICATION   | All 8 deploy workflows       | Google Search Console       |
| BING_SITE_VERIFICATION     | All 8 deploy workflows       | Bing Webmaster Tools        |
| CLOUDFLARE_ANALYTICS_TOKEN | All 8 deploy workflows       | Cloudflare Web Analytics    |

---

## Appendix C: Dependency Health

| Category        | Count | Notes                                      |
| --------------- | ----- | ------------------------------------------ |
| Dependencies    | 20    | React 19, Docusaurus 3.10, KaTeX, rehype   |
| DevDependencies | 35    | Vitest, Playwright, ESLint, TypeScript 5.9 |
| pnpm overrides  | 13    | Security fixes for transitive dependencies |
| Vulnerabilities | 0     | All high/critical overridden               |

---

## Appendix D: Test Coverage Summary

| File                            | Tests   | Type     |
| ------------------------------- | ------- | -------- |
| DesmosGraph.render.test.tsx     | 6       | Render   |
| Geogebra.render.test.tsx        | 5       | Render   |
| PhetSimulation.render.test.tsx  | 4       | Render   |
| iframeComponent.render.test.tsx | 5       | Render   |
| TOCSidebar/render.test.tsx      | 4       | Render   |
| DesmosGraph.test.ts             | 11      | Logic    |
| Geogebra.test.ts                | 8       | Logic    |
| PhetSimulation.test.ts          | 7       | Logic    |
| iframeComponent.test.ts         | 9       | Logic    |
| webpack-loader.test.ts          | 19      | Logic    |
| ReadingProgress.test.ts         | 10      | Logic    |
| DocItemFooter.test.ts           | 8       | Logic    |
| property.test.ts                | 18      | Property |
| fix-consecutive-math.test.ts    | 25      | Logic    |
| CircuitBuilder.test.ts          | 26      | Logic    |
| service-worker.test.ts          | 17      | Logic    |
| PeriodicTable.test.ts           | 16      | Logic    |
| PracticeProblem.test.ts         | 8       | Logic    |
| DiagnosticTest.test.ts          | 11      | Logic    |
| FlashcardDeck.test.ts           | 30      | Logic    |
| WyattsNotesWidget.test.tsx      | 8       | Logic    |
| LanguageSwitcher.test.tsx       | 9       | Logic    |
| AIRecommendations.test.tsx      | 6       | Logic    |
| KatexLoader.test.ts             | 3       | Logic    |
| MDXComponents.test.tsx          | 3       | Logic    |
| Mermaid.test.tsx                | 3       | Logic    |
| Root.test.ts                    | 5       | Logic    |
| **Total**                       | **288** | **All**  |
