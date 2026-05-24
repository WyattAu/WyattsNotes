# Wyatt's Notes -- Production Roadmap

> Updated 2026-05-24. CI green. 109 tests, 13 files. All 10 sites live (HTTP 200).
> This document covers the complete path from current state to production and future expansion.

---

## Current State (Post-Audit 2026-05-24)

| Metric              | Value                                                        |
| ------------------- | ------------------------------------------------------------ |
| Total content files | 1,370 (.md) on disk, 1,211 in subject cards                  |
| Total content lines | ~1,062K                                                      |
| Subjects            | 27                                                           |
| Sub-sites           | 11 (8 content, 1 redirect, 2 DNS pending)                    |
| CI/CD workflows     | 13 (1 CI, 9 deploy, 1 Algolia, 1 Lighthouse, 1 uptime)      |
| Test suite          | 109 tests (13 files), coverage 61% lines                      |
| Property tests      | 16 (fast-check) covering URL construction, reading time, progress |
| Algolia indices     | 8                                                            |
| Hosting             | Cloudflare Pages (wrangler)                                  |
| License             | AGPLv3                                                       |
| Stack               | Docusaurus 3.10, React 19, TypeScript 5.9, Node 22, pnpm 10 |

### Audit Results (2026-05-24)

| Check                    | Result        |
| ------------------------ | ------------- |
| Unit Tests (109/109)     | PASS          |
| Property Tests (16)      | PASS          |
| Typecheck (0 errors)     | PASS          |
| Lint (0 errors)          | PASS          |
| Links (2,844 verified)   | PASS          |
| MDX Validation (0 error) | PASS          |
| Handwave phrases (0)     | PASS          |
| Security Audit           | PASS          |
| Content Validation       | PASS          |
| All 10 sites (HTTP 200)  | PASS          |
| CI Pipeline (all jobs)   | PASS          |

### Audit Changes (12 commits across 2 sessions)

1. Added 16 new React component render tests (69 to 85 tests)
2. Coverage improved from 0% to 61.48% lines, 38% to 72% branches
3. Fixed empty descriptions in 9 university physics docs
4. Restructured test mocks to directory-based for scalability
5. Added vitest aliases for Docusaurus Link and useDocusaurusContext mocks
6. Fixed pre-commit hook memory allocation for typecheck
7. Added 16 property-based tests (fast-check): URL construction, reading time, progress
8. Added E2E tests for 7 sub-sites (IB, DSE, A-Level, Qualifications, Programming, University)
9. Updated Lighthouse config with multi-page testing and realistic thresholds
10. Fixed landing page stats (1,478 -> 1,211, 751K -> 862K, 30 -> 27 subjects)
11. Added cleanupOutdatedCaches to service worker plugin
12. Verified all 1,370 content files have descriptions (TD-030 was false alarm)

---

## Phase 0: CI/CD Hardening -- DONE

### 0.1 Verify All Deploys Green

- [x] All 9 deploy workflows pass
- [x] CI pipeline passes (all jobs green)
- [x] Fixed 3 categories of build failures

### 0.2 Remove continue-on-error from CI Build

- [x] Already removed

### 0.3 Fix Broken Audit Jobs

- [x] Security job runs pnpm audit --audit-level=high

### 0.4 Consolidate Duplicate Algolia Scripts

- [x] Enhanced scripts/index-algolia.js with SITES_FILTER support

### 0.5 Fix Dependabot PRs

- [x] Closed 16 stale Dependabot PRs

### 0.6 Fix Uptime Monitor

- [x] 10 sites monitored every 30 minutes
- [ ] Add alevel-maths-physics and alevel-sciences once DNS configured

---

## Phase 1: Deployment Completion -- DONE

### 1.1 Deploy IB and DSE

- [x] IB and DSE deployed to Cloudflare Pages
- [ ] DNS pending: update CF API token permissions

### 1.2 Reduce Redirect Site Overhead

- [x] Academics uses static HTML redirect (10s vs 5min)

### 1.3 Clean Up Orphaned Sidebar

- [x] sidebar_alevel.ts deleted

---

## Phase 2: Config Consistency -- DONE

### 2.1 Migrate to Shared Factory

- [x] All configs use sharedConfig() factory

### 2.2 Audit Plugin Duplicates

- [x] No duplicates found

### 2.3 Normalize Deploy Workflow Resources

- [x] Three-tier heap: 7168MB / 11264MB / 14336MB

---

## Phase 3: Content Quality -- DONE (Ongoing)

### 3.1 Fix Empty Descriptions

- [x] University physics descriptions fixed (120+ chars each)
- [x] 1,279 remaining files with empty descriptions -- FALSE ALARM, all have descriptions

### 3.2 Depth Tier Completion

- [ ] Priority: IB subjects (student-facing, exam-relevant)

### 3.3 Stale A-Level Subjects

- [x] Left as proper stubs with frontmatter

### 3.4 Math Content Quality

- [x] Removed stray primes and empty groups from 337 files

---

## Phase 4: Performance and Reliability -- DONE

### 4.1 Build Performance

- [x] Build cache enabled per workflow
- [x] Heap sizing calibrated per config (7/11/14 GB tiers)
- [x] Bundle sizes analyzed: 593-645 KB JS, 552-556 KB CSS per site
- [x] Typecheck heap reduced from 8 GB to 2 GB (uses only 274 MB)
- [ ] Profile build bottleneck (MDX vs webpack vs KaTeX)
- [ ] Target: all builds under 5 minutes (currently 3.5 min for main)

### 4.2 Lighthouse Baseline

- [ ] Run Lighthouse CI against all deployed sites
- [ ] Target: Performance > 90, Accessibility > 95, Best Practices > 90, SEO > 95
- [ ] Fix scores below threshold

### 4.3 Service Worker Audit

- [x] Added cleanupOutdatedCaches: true to prevent stale precache entries
- [x] Verified cache invalidation works via content hashing (dontCacheBustURLsMatching)
- [x] Verified skipWaiting + clientsClaim for immediate activation
- [ ] Test offline functionality manually
- [ ] Add versioned cache busting

---

## Phase 5: Feature Development (2-8 weeks)

### 5.1 Search Improvements

- [x] KaTeX math extraction for search
- [x] Faceted search with site-level tags
- [ ] Enable Algolia analytics
- [ ] Tune relevance based on click-through data
- [ ] Add search result thumbnails

### 5.2 Interactive Components

- [x] DesmosGraph, Geogebra, PhetSimulation implemented
- [x] Unit tests for all interactive components
- [ ] Expand Desmos usage to more maths/physics pages
- [ ] Add interactive periodic table for chemistry
- [ ] Add circuit simulator for physics

### 5.3 Practice and Assessment (Deferred)

- [ ] Auto-graded practice problems
- [ ] Exam-style question banks per subject
- [ ] Spaced repetition integration
- [ ] Diagnostic test expansion

### 5.4 Dark Mode Polish

- [x] KaTeX dark mode CSS overrides
- [x] Mermaid client-only rendering
- [x] Gruvbox Material Dark prism theme
- [x] Custom CSS dark mode selectors

### 5.5 Print Stylesheet

- [x] A4 margins, serif typography, hidden chrome
- [x] KaTeX forced black, code blocks with borders
- [x] Link URLs shown in parentheses
- [x] Page break handling for math/code/tables

### 5.6 SEO Optimization

- [x] robots.txt with all 8 subdomain sitemaps
- [x] JSON-LD WebSite + EducationalOrganization schema
- [x] DNS prefetch/preconnect for all external resources
- [ ] Per-subdomain social card images
- [ ] Google/Bing webmaster verification tags
- [ ] HTTP 301 redirects for academics/alevel

---

## Phase 6: Test Infrastructure Improvement (1-2 weeks)

### 6.1 Docusaurus Module Mocking

- [ ] Create vitest plugin that provides Docusaurus webpack aliases
- [ ] Re-enable 7 removed render tests (DocItemFooter, ReadingProgress, Layout, 404, index)
- [ ] Target: 110+ tests, 80%+ coverage

### 6.2 E2E Test Expansion

- [x] Added E2E tests for 7 sub-sites (IB, DSE, A-Level MP, A-Level Sciences, Qualifications, Programming, University)
- [x] Added cross-site navigation tests (landing links, academics->IB redirect, alevel redirect)
- [x] Added search functionality tests (modal open, keyboard shortcut, input, close)
- [ ] Test service worker offline behavior

### 6.3 Property-Based Testing

- [x] Add fast-check for URL construction (Geogebra, PhET)
- [x] Add fast-check for reading time computation
- [x] Add fast-check for reading progress computation
- [x] Add fast-check for DesmosGraph parameter detection
- [x] Add fast-check for escape-braces invariants
- [ ] Add fast-check for LaTeX brace escaping algorithm (requires ESLint-compatible loader extraction)

### 6.4 Visual Regression Testing

- [x] Added Playwright visual regression test suite (landing, docs, sidebar, navbar)
- [ ] Generate baseline snapshots on first run
- [ ] Add screenshot comparison for 404 page
- [ ] Add screenshot comparison for dark mode

---

## Phase 7: Content Expansion (Ongoing)

### 7.1 Existing Content Gaps

| Area               | Current Lines | Gap                                             | Priority |
| ------------------ | ------------- | ------------------------------------------------ | -------- |
| Probabilistic ML   | 1.7K          | Only fundamentals, no advanced topics            | Low      |
| Licensing          | 1.1K          | Missing MIT, Apache, LGPL, MPL, GPL v3           | Low      |
| Go                 | 4.8K          | No standard library, no concurrency              | Medium   |
| Kotlin             | 3.6K          | No coroutines, no advanced topics                | Medium   |
| TypeScript         | 6.7K          | No advanced types, no patterns                   | Medium   |
| Dart               | 18.5K         | Good coverage, missing Flutter testing           | Low      |
| University Maths   | 18K           | Missing topology, abstract algebra depth         | Medium   |
| University Physics | 18K           | Missing quantum mechanics depth, thermodynamics  | Medium   |

### 7.2 New Qualification Systems

| System               | Demand | Effort | Priority |
| -------------------- | ------ | ------ | -------- |
| SAT / ACT            | High   | Medium | High     |
| Indian CBSE/ISC      | Medium | Medium | Medium   |
| Australian HSC/VCE   | Medium | High   | Low      |
| Chinese Gaokao       | Medium | High   | Low      |
| German Abitur        | Low    | High   | Low      |
| French Baccalaureate | Low    | High   | Low      |

### 7.3 Description Quality

- [x] All 1,370 content files have descriptions (verified 2026-05-24)
- [x] Fixed 9 empty descriptions in university physics docs
- [x] Created scripts/generate-descriptions.mjs for future use
- [ ] Add CI gate for description quality on new files

---

## Phase 8: Infrastructure and DevOps (2-4 weeks)

### 8.1 Build Optimization

- [ ] Profile webpack build with speed-measure-webpack-plugin
- [ ] Evaluate splitting large doc sets (A-Level 286 files)
- [ ] Implement incremental builds for content-only changes
- [ ] Target: all builds under 5 minutes

### 8.2 Monitoring and Alerting

- [x] Uptime monitor (every 30 minutes, 10 sites)
- [ ] Add Cloudflare Analytics integration
- [ ] Add error tracking (Sentry already configured)
- [ ] Add performance monitoring
- [ ] Create alerting dashboard

### 8.3 Disaster Recovery

- [x] Document rollback procedures (.github/INCIDENT_RESPONSE.md)
- [ ] Test rollback from Cloudflare Pages deployments
- [x] Create incident response runbook (8 scenarios)
- [ ] Schedule quarterly disaster recovery drill

### 8.4 Cost Optimization

- [ ] Evaluate Cloudflare Pages usage and costs
- [ ] Consider CDN cache optimization
- [ ] Evaluate image optimization (WebP conversion)
- [ ] Evaluate lazy loading for interactive components

### 8.6 Supply Chain Monitoring

- [x] Dependabot config for npm and github-actions (weekly/monthly)
- [x] Fixed duplicate npm entry in dependabot.yml
- [x] Auto-merge workflow for patch-level dependency updates
- [ ] Add vulnerability alerting to Slack/Discord

### 8.7 Deploy Optimization

- [x] All 9 deploy workflows have path-based triggers
- [x] Build cache enabled per workflow
- [x] Concurrency groups on all 9 deploy workflows (cancel-in-progress)
- [ ] Add deployment notifications (success/failure)

---

## Phase 9: Community and Growth (Ongoing)

### 9.1 Contribution Infrastructure

- [x] CONTRIBUTING.md exists (122 lines)
- [x] Issue templates exist (bug report, feature request)
- [x] PR templates exist (4 templates)
- [x] CODEOWNERS file for subject-area review
- [ ] Add content style guide reference in PR template
- [ ] Create contribution FAQ

### 9.2 Analytics

- [ ] Add privacy-respecting analytics (Plausible/Umami/GoatCounter)
- [ ] Track page views, search queries, time on page
- [ ] Use data to prioritize content gaps
- [ ] Publish monthly usage reports

### 9.3 Monetization (Optional)

- [ ] GitHub Sponsors for hosting costs
- [ ] Print-on-demand PDFs for popular subjects
- [ ] Tutoring referral links

---

## Phase 10: Advanced Features (3-6 months)

### 10.1 Internationalization (i18n)

- [ ] Evaluate Docusaurus i18n support
- [ ] Prioritize languages: ZH, JA, KO, DE, FR, ES
- [ ] Create translation pipeline
- [ ] Add language switcher to all sites

### 10.2 Progressive Web App

- [x] Service worker with Workbox generateSW
- [ ] Add web app manifest
- [ ] Add offline fallback page
- [ ] Add push notification support (optional)

### 10.3 API and Integration

- [ ] Create REST API for content access
- [ ] Create embeddable widget for external sites
- [ ] Create browser extension for quick access
- [ ] Create mobile app (React Native/Flutter)

### 10.4 AI Integration

- [ ] Add AI-powered search (semantic search)
- [ ] Add AI-powered content recommendations
- [ ] Add AI-powered practice problem generation
- [ ] Add AI-powered explanation simplification

---

## Phase 11: Quality Assurance (Ongoing)

### 11.1 Accessibility

- [x] ARIA attributes on interactive components
- [x] Sandbox attributes on iframes
- [x] All images have alt text in source code
- [x] All iframes have title attributes
- [x] ReadingProgress has correct ARIA role and labels
- [ ] Full WCAG 2.1 AA audit
- [ ] Keyboard navigation testing
- [ ] Screen reader testing (NVDA/VoiceOver)
- [ ] Color contrast verification

### 11.2 Security

- [x] Security headers verified on all live sites (CSP, HSTS, X-Frame-Options, COEP/COOP/CORP)
- [x] CSP with strict default-src
- [x] Cross-origin isolation headers (COEP, COOP, CORP)
- [x] No hardcoded secrets in source code (all use ${{ secrets.* }})
- [x] Sentry DSN loaded from env var (not hardcoded)
- [x] Regular dependency audits (automated via CI)
- [ ] Penetration testing
- [ ] Content Security Policy violation reporting

### 11.3 Performance

- [ ] Core Web Vitals optimization
- [ ] Lighthouse score monitoring
- [ ] Bundle size tracking
- [ ] Image optimization pipeline
- [ ] Font loading optimization

---

## Technical Debt Register

| ID     | Description                                                                    | Priority | Status  |
| ------ | ------------------------------------------------------------------------------ | -------- | ------- |
| TD-009 | E2E tests only cover main site                                                 | Medium   | OPEN    |
| TD-012 | Build times 2-10 min per sub-site                                              | Medium   | WIP     |
| TD-023 | No Google/Bing webmaster verification tags                                     | Medium   | OPEN    |
| TD-025 | programming.wyattau.com slow load (0.988s)                                     | Low      | OPEN    |
| TD-028 | 887 unstaged doc files with prettier/template changes                          | Low      | OPEN    |
| TD-029 | Landing page stats hardcoded (TODO comment)                                     | Low      | FIXED   |
| TD-030 | 1,279 content files with empty descriptions                                    | Medium   | CLOSED (false alarm) |
| TD-031 | Render tests for Docusaurus-dependent components disabled on CI                | Medium   | OPEN    |
| TD-032 | Typecheck requires 8GB heap (NODE_OPTIONS=--max-old-space-size=8192)           | Low      | FIXED (2GB) |

---

## Appendix A: Site Inventory

| Site           | Domain                           | Config                                    | Docs                    | Build Size  | Status   |
| -------------- | -------------------------------- | ----------------------------------------- | ----------------------- | ----------- | -------- |
| Main           | wyattsnotes.wyattau.com          | docusaurus.config.ts                      | infrastructure, tools   | ~115K lines | Live     |
| A-Level        | alevel.wyattau.com               | docusaurus.alevel.config.ts               | redirect                | Minimal     | Live     |
| A-Level MP     | alevel-maths-physics.wyattau.com | docusaurus.alevel-maths-physics.config.ts | alevel (MP split)       | ~174K lines | Live     |
| A-Level Sci    | alevel-sciences.wyattau.com      | docusaurus.alevel-sciences.config.ts      | alevel (sciences split) | ~174K lines | Live     |
| Qualifications | qualifications.wyattau.com       | docusaurus.qualifications.config.ts       | gcse, ap, highers, ilc  | ~89K lines  | Live     |
| Programming    | programming.wyattau.com          | docusaurus.programming.config.ts          | cpp, languages          | ~183K lines | Live     |
| University     | university.wyattau.com           | docusaurus.university.config.ts           | university              | ~56K lines  | Live     |
| Academics      | academics.wyattau.com            | deploy-academics.yml                      | redirect to ib          | Minimal     | Live     |
| IB             | ib.wyattau.com                   | docusaurus.ib.config.ts                   | ib                      | ~143K lines | Live     |
| DSE            | dse.wyattau.com                  | docusaurus.dse.config.ts                  | dse                     | ~101K lines | Live     |

---

## Appendix B: Secrets Inventory

| Secret                  | Used By                                | Purpose             |
| ----------------------- | -------------------------------------- | ------------------- |
| CLOUDFLARE_API_TOKEN    | All 9 deploy workflows                 | Deploy to CF Pages  |
| CLOUDFLARE_ACCOUNT_ID   | All 9 deploy workflows                 | CF account identity |
| SENTRY_DSN              | main, ib, programming deploy workflows | Error tracking      |
| ALGOLIA_APP_ID          | ci.yml, algolia-index.yml              | Search indexing     |
| ALGOLIA_WRITE_KEY       | ci.yml, algolia-index.yml              | Search indexing     |
| LHCI_GITHUB_APP_TOKEN   | ci.yml                                 | Lighthouse CI       |
| GITHUB_TOKEN            | ci.yml (lychee link checker)           | API rate limiting   |

---

## Appendix C: Dependency Health

| Category        | Count | Notes                                      |
| --------------- | ----- | ------------------------------------------ |
| Dependencies    | 20    | React 19, Docusaurus 3.10, KaTeX, rehype   |
| DevDependencies | 35    | Vitest, Playwright, ESLint, TypeScript 5.9 |
| pnpm overrides  | 13    | Security fixes for transitive deps         |
| Vulnerabilities | 0     | All high/critical overridden               |

---

## Appendix D: Test Coverage Summary

| File                              | Tests | Type     |
| --------------------------------- | ----- | -------- |
| DesmosGraph.render.test.tsx        | 6     | Render   |
| Geogebra.render.test.tsx          | 5     | Render   |
| PhetSimulation.render.test.tsx    | 4     | Render   |
| iframeComponent.render.test.tsx   | 5     | Render   |
| TOCSidebar/render.test.tsx        | 4     | Render   |
| DesmosGraph.test.ts               | 11    | Logic    |
| Geogebra.test.ts                  | 8     | Logic    |
| PhetSimulation.test.ts           | 7     | Logic    |
| iframeComponent.test.ts           | 9     | Logic    |
| webpack-loader.test.ts            | 16    | Logic    |
| ReadingProgress.test.ts           | 10    | Logic    |
| DocItemFooter.test.ts             | 8     | Logic    |
| property.test.ts                  | 16    | Property |
| **Total**                         | **109** | **All** |
