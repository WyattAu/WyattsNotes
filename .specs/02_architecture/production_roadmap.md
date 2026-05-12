# Production Roadmap: WyattsNotes

**Version:** 2.0 **Date:** 2026-05-12 **Scope:** Path from current state through production
hardening to future expansion **Related:** ROADMAP.md (high-level),
`.specs/00_requirements/full_audit_report.md` (current state)

---

## State Transition Diagram

```
Current (v1.0-alpha)          v1.0-beta           v1.0.0              v1.x+           v2.0+
 ┌─────────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
 │ Quality Gates    │     │ Prod Hardening│     │  Stable GA   │     │  Expansion   │     │  Platform    │
 │ 63 vulns         │ ──► │ 0 vulns       │ ──► │ SLOs met     │ ──► │ 35 subjects  │ ──► │ i18n, Video  │
 │ Test hang        │     │ Tests pass    │     │ 80% coverage │     │ E2E tests    │     │ Community    │
 │ 4 stubs          │     │ Docs complete │     │ CI <15 min   │     │ Multi-region │     │ API, SDK     │
 └─────────────────┘     └──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
      Week 0-2              Week 2-6            Week 6-8             Month 3-12          Year 2+
```

---

## Phase 0: Critical Remediation (Week 0-2)

**Goal:** Stabilize development environment. Eliminate all blocking issues.

### 0.1 Security Hardening

- [ ] **P0.1.1** Run `pnpm update` to pull latest compatible patches for all dependencies
- [ ] **P0.1.2** Add `pnpm.overrides` to `package.json` for unpatchable transitive deps
- [ ] **P0.1.3** Add `pnpm audit` as blocking CI job (currently: not in CI)
- [ ] **P0.1.4** Enable Dependabot security alerts on critical/ high severity
- [ ] **P0.1.5** Generate SBOM in SPDX format: `.specs/01_5_supply_chain/sbom.spdx`
- [ ] **P0.1.6** Implement Subresource Integrity (SRI) for CDN-loaded scripts
- [ ] **P0.1.7** Audit CSP headers across all 9 sub-sites for consistency

### 0.2 Test Infrastructure Repair

- [ ] **P0.2.1** Add `"engines": { "node": ">=22 <27" }` to `package.json`
- [ ] **P0.2.2** Add `"engines": { "pnpm": ">=10 <11" }` to `package.json`
- [ ] **P0.2.3** Add Node version check to pre-commit hook (warn if mismatch)
- [ ] **P0.2.4** Investigate and fix Node 26 vitest/jsdom compatibility
- [ ] **P0.2.5** Verify all 64 tests pass on Node 22 (CI baseline)
- [ ] **P0.2.6** Set minimum coverage thresholds: 40% lines, 30% branches
- [ ] **P0.2.7** Enable `--coverage` in test:coverage npm script

### 0.3 Documentation Gaps

- [ ] **P0.3.1** Expand README.md: architecture diagram, build instructions, sub-site URLs
- [ ] **P0.3.2** Expand SECURITY.md: supported versions, disclosure timeline, scope
- [ ] **P0.3.3** Update CONTRIBUTING.md: Node 22, pnpm install steps, pre-commit docs
- [ ] **P0.3.4** Fix all 1,648 university frontmatter descriptions (120-160 chars, unique)
- [ ] **P0.3.5** Remove or document 4 phantom A-Level stubs per CONTENT_STANDARD Section 12

### 0.4 Build System

- [ ] **P0.4.1** Verify makefile pnpm migration (completed in audit)
- [ ] **P0.4.2** Fix `benchmark-builds.sh` timeout (investigate hang on Docusaurus build with
      Node 26)
- [ ] **P0.4.3** Establish baseline build times for each sub-site
- [ ] **P0.4.4** Add build time tracking to CI (compare against baseline)
- [ ] **P0.4.5** Move Algolia credentials to environment variables in shared config

---

## Phase 1: Production Hardening (Week 2-6)

**Goal:** Achieve production-grade reliability. All quality gates pass blocking.

### 1.1 Continuous Integration

- [ ] **1.1.1** Set CI pipeline SLA: <15 minutes total (5 parallel jobs)
- [ ] **1.1.2** Add `pnpm audit` as blocking CI job (exit non-zero on high+)
- [ ] **1.1.3** Add `pnpm test -- --coverage` with coverage thresholds to CI
- [ ] **1.1.4** Add `pnpm lint` (full project) to CI
- [ ] **1.1.5** Add `pnpm format --check` to CI
- [ ] **1.1.6** Add `cspell` to CI
- [ ] **1.1.7** Add `markdownlint` to CI
- [ ] **1.1.8** Implement incremental typecheck (`tsc --build` with project references)
- [ ] **1.1.9** Split tsconfig.json per sub-site for faster typecheck

### 1.2 Testing Strategy

- [ ] **1.2.1** Add component render tests using @testing-library/react
- [ ] **1.2.2** Add snapshot tests for interactive embeds (DesmosGraph, Geogebra, PhetSimulation)
- [ ] **1.2.3** Add E2E tests with Playwright for critical flows:
  - Navigation across all 9 sub-sites
  - Search functionality (per-site Algolia + cross-site search page)
  - Interactive embed rendering (Desmos, GeoGebra, PhET)
  - Reading progress persistence
  - Service worker offline support
- [ ] **1.2.4** Target: 60% code coverage (6 months), 80% (12 months)
- [ ] **1.2.5** Add property-based testing for interactive component URL construction

### 1.3 Performance

- [ ] **1.3.1** Execute Lighthouse CI on all 6 public sub-sites
- [ ] **1.3.2** Target: Performance >=0.90, Accessibility >=0.90, Best Practices >=0.90, SEO >=0.90
- [ ] **1.3.3** Optimize JS bundle: target <500KB scripts, <100KB stylesheets
- [ ] **1.3.4** Implement image lazy loading audit for iframe embeds (Desmos, GeoGebra, PhET)
- [ ] **1.3.5** Audit font loading: Merriweather, Inter, JetBrains Mono (FOIT/FOUT mitigation)
- [ ] **1.3.6** Implement service worker caching strategy audit
- [ ] **1.3.7** Add performance regression detection to CI (compare against baseline)
- [ ] **1.3.8** Evaluate TailwindCSS tree-shaking (currently declared but not actively used)

### 1.4 Reliability

- [ ] **1.4.1** Define SLOs:
  - Uptime: 99.9% (monthly)
  - Page load (P95): <3s
  - Search latency (P95): <500ms
  - Build pipeline: <15 minutes
- [ ] **1.4.2** Implement uptime monitoring with alerting (UptimeRobot or Cloudflare analytics)
- [ ] **1.4.3** Document incident response runbook
- [ ] **1.4.4** Define rollback procedure for failed deploys
- [ ] **1.4.5** Implement canary deployment strategy (deploy to staging subdomain first)
- [ ] **1.4.6** Add Sentry error rate alerting (currently sampling at 10%)
- [ ] **1.4.7** Implement automated rollback on deploy failure

### 1.5 Observability

- [ ] **1.5.1** Add build time tracking (wall clock per sub-site) to CI artifacts
- [ ] **1.5.2** Add Lighthouse score tracking over time
- [ ] **1.5.3** Add search analytics: query volume, zero-result queries, click-through rate
- [ ] **1.5.4** Add content freshness monitoring (last-modified dates)
- [ ] **1.5.5** Implement broken external link monitoring (extend lychee to periodic CI job)
- [ ] **1.5.6** Add Sentry performance monitoring (transaction traces)

---

## Phase 2: Content Quality (Week 4-12)

### 2.1 University Content Expansion

- [ ] **2.1.1** Complete Real Analysis: add worked examples (2 minimum), common pitfalls (3 minimum)
- [ ] **2.1.2** Expand Quantum Mechanics: add proof sketches for all theorems
- [ ] **2.1.3** Expand Algorithms and Data Structures to university depth
- [ ] **2.1.4** Add missing university disciplines:
  - Linear Algebra (proof-based)
  - Abstract Algebra (groups, rings, fields)
  - Topology
  - Differential Geometry
  - Complex Analysis
  - Probability Theory (measure-theoretic)
- [ ] **2.1.5** Target: 150+ university content files (currently 33)
- [ ] **2.1.6** Ensure all Tier 4 pages have: precise definitions, theorem proofs, 2+ worked
      examples, 3+ common pitfalls

### 2.2 Content Quality Automation

- [ ] **2.2.1** Make `check-depth-tiers.py` blocking for Tier 4 (university) content
- [ ] **2.2.2** Make `check-descriptions.py` blocking (exit non-zero on failures)
- [ ] **2.2.3** Fix all 1,915 depth tier findings systematically by directory
- [ ] **2.2.4** Add mathematical notation consistency checker
- [ ] **2.2.5** Add cross-reference validation (verify cross-site URLs resolve)
- [ ] **2.2.6** Add slug consistency validation (no slug collisions across sites)
- [ ] **2.2.7** Implement concept drift detection across multi-site content

### 2.3 Search Infrastructure

- [ ] **2.3.1** Add Algolia indices for `docs_infrastructure` and `docs_tools`
- [ ] **2.3.2** Resolve 7 naming mismatches between config paths and index names
- [ ] **2.3.3** Move Algolia credentials to environment variables
- [ ] **2.3.4** Add Algolia crawler config to repository for version control
- [ ] **2.3.5** Add search analytics dashboard
- [ ] **2.3.6** Evaluate self-hosted alternative (Meilisearch) for Algolia free tier limits

### 2.4 Licensing Content

- [ ] **2.4.1** Add Creative Commons licenses (CC BY, CC BY-SA, CC BY-NC)
- [ ] **2.4.2** Add dual licensing section (MySQL/Oracle model, Qt model)
- [ ] **2.4.3** Add compliance workflows (CLA, DCO, contributor agreements)

---

## Phase 3: Operational Excellence (Week 4-8)

### 3.1 Dependency Management

- [ ] **3.1.1** Configure Dependabot: weekly npm updates, monthly GitHub Actions updates
- [ ] **3.1.2** Implement quarterly dependency audit (remove unused, update outdated)
- [ ] **3.1.3** Pin all sub-dependencies via pnpm.overrides where necessary
- [ ] **3.1.4** Evaluate fast-xml-parser override (currently pinned to >=4.5.4)
- [ ] **3.1.5** Add license compliance check to CI (ensure all deps have compatible licenses)

### 3.2 Deployment Pipeline

- [ ] **3.2.1** Document deployment architecture (GitHub Actions -> Cloudflare Pages)
- [ ] **3.2.2** Document DNS configuration for all 9 sub-sites
- [ ] **3.2.3** Document Algolia indexing workflow
- [ ] **3.2.4** Create incident response runbook
- [ ] **3.2.5** Implement staging environment for pre-production validation
- [ ] **3.2.6** Add deployment smoke tests (HTTP 200 on all sub-sites post-deploy)
- [ ] **3.2.7** Implement blue-green deployment for zero-downtime updates

### 3.3 Security Posture

- [ ] **3.3.1** Annual penetration test on all sub-sites
- [ ] **3.3.2** Regular security.txt and humans.txt review
- [ ] **3.3.3** CSP header audit across all 9 sub-sites
- [ ] **3.3.4** Implement rate limiting on search endpoints
- [ ] **3.3.5** Add security headers audit to CI (check for missing HSTS, X-Frame-Options, etc.)
- [ ] **3.3.6** Implement Subresource Integrity (SRI) for all CDN scripts

### 3.4 Compliance

- [ ] **3.4.1** Generate SBOM in SPDX 2.3 format
- [ ] **3.4.2** Implement WCAG 2.1 AA accessibility audit
- [ ] **3.4.3** Add accessibility linting (eslint-plugin-jsx-a11y)
- [ ] **3.4.4** Document GDPR compliance (no user data collected, analytics configuration)
- [ ] **3.4.5** Add cookie consent if analytics/tracking introduced

---

## Phase 4: Content Expansion (Month 3-12)

### 4.1 New Subjects

- [ ] **4.1.1** Haskell functional programming
- [ ] **4.1.2** Go systems programming
- [ ] **4.1.3** Computer Architecture (deeper than current infrastructure coverage)
- [ ] **4.1.4** Operating Systems (deeper than current Linux coverage)
- [ ] **4.1.5** Discrete Mathematics (standalone, proof-based)
- [ ] **4.1.6** Number Theory
- [ ] **4.1.7** Complex Analysis
- [ ] **4.1.8** Differential Equations
- [ ] **4.1.9** Thermodynamics (deeper than current physics coverage)

### 4.2 Multimedia Content

- [ ] **4.2.1** Video embed support (YouTube, Vimeo) with consistent component API
- [ ] **4.2.2** Interactive code playgrounds (Python, Java, C++) via web containers
- [ ] **4.2.3** Diagram auto-generation from text descriptions (Mermaid.js expansion)
- [ ] **4.2.4** 3D visualization for physics concepts (Three.js integration)

### 4.3 Internationalization

- [ ] **4.3.1** Evaluate Docusaurus i18n for Chinese (Simplified) translations
- [ ] **4.3.2** Assess demand for other languages (Japanese, Korean, Arabic)
- [ ] **4.3.3** Implement translation workflow (Crowdin or community-driven)
- [ ] **4.3.4** Translation quality assurance pipeline (TQA Level 3 minimum for technical content)
- [ ] **4.3.5** Cross-lingual knowledge graph for concept mapping across languages

### 4.4 Content Metrics

- [ ] **4.4.1** Target: 1,400+ content files (6 months), 1,800+ (12 months)
- [ ] **4.4.2** Target: 28 subjects (6 months), 35 subjects (12 months)
- [ ] **4.4.3** Maintain 0 broken links throughout expansion
- [ ] **4.4.4** Maintain 0 TypeScript, 0 ESLint, 0 MDX validation errors

---

## Phase 5: Platform Evolution (Year 2+)

### 5.1 Architecture

- [ ] **5.1.1** Migrate to pnpm workspaces for shared dependency management
- [ ] **5.1.2** Evaluate turborepo or nx for monorepo task orchestration
- [ ] **5.1.3** Implement incremental builds (only rebuild changed sub-sites)
- [ ] **5.1.4** Evaluate Next.js or Astro for dynamic content capabilities
- [ ] **5.1.5** Implement API layer for content as a service
- [ ] **5.1.6** Evaluate GraphQL endpoint for content queries

### 5.2 Community

- [ ] **5.2.1** Implement community contribution workflow (GitHub Discussions)
- [ ] **5.2.2** Add contributor recognition system (all-contributors)
- [ ] **5.2.3** Create contributor onboarding guide with video walkthrough
- [ ] **5.2.4** Implement automated content review pipeline for community PRs
- [ ] **5.2.5** Establish content editorial board for quality review

### 5.3 AI Integration

- [ ] **5.3.1** Evaluate AI-assisted content generation for repetitive sections
- [ ] **5.3.2** Implement AI-powered search (semantic search beyond keyword matching)
- [ ] **5.3.3** Add content recommendation engine (related topics, learning paths)
- [ ] **5.3.4** Implement automated difficulty assessment for content pages
- [ ] **5.3.5** Add personalized learning path generation

### 5.4 Monetization (Optional)

- [ ] **5.4.1** Evaluate print-on-demand for curated content bundles
- [ ] **5.4.2** Evaluate sponsorship model for infrastructure costs
- [ ] **5.4.3** Maintain AGPLv3 core with optional commercial license for enterprise

---

## Risk Register

| Risk                                         | L   | I   | Mitigation                                                     | Contingency                                            |
| -------------------------------------------- | --- | --- | -------------------------------------------------------------- | ------------------------------------------------------ |
| Docusaurus 4.0 breaks plugin ecosystem       | M   | H   | Pin versions in pnpm.overrides, test in staging branch         | Fork critical plugins, contribute fixes upstream       |
| Algolia free tier limits exceeded            | L   | M   | Monitor usage monthly, evaluate Meilisearch                    | Self-host Meilisearch on Cloudflare Workers            |
| Content accuracy drift (mathematical errors) | M   | H   | Peer review process, automated validation, community reporting | Editorial board review cycle                           |
| Build times become prohibitive (>15 min)     | M   | M   | Incremental builds, per-site CI splits, turborepo              | Pre-built cache layers, parallel sub-site builds       |
| Contributor onboarding friction              | M   | L   | Improve CONTRIBUTING.md, add setup scripts, video walkthrough  | Dedicated onboarding issue template                    |
| Node.js ecosystem breaking change            | L   | M   | Pin versions in .nvmrc, CI matrix test, engines field          | Containerized development environment (Nix flake)      |
| Cloudflare Pages outage                      | L   | H   | Multi-region deployment, status page monitoring                | Static fallback on alternative CDN                     |
| Dependency supply chain attack               | L   | H   | Dependabot monitoring, pnpm audit CI, lockfile integrity       | Rollback to last known good, incident response runbook |

---

## Success Metrics

| Metric                 | Current | 3mo Target | 6mo Target | 12mo Target | 24mo Target |
| ---------------------- | ------- | ---------- | ---------- | ----------- | ----------- |
| Content files          | 1,207   | 1,300      | 1,400      | 1,800       | 2,500+      |
| Subjects covered       | 23      | 26         | 28         | 35          | 40+         |
| Broken links           | 0       | 0          | 0          | 0           | 0           |
| MDX validation errors  | 0       | 0          | 0          | 0           | 0           |
| TypeScript errors      | 0       | 0          | 0          | 0           | 0           |
| Test coverage (src/)   | 0%      | 40%        | 60%        | 80%         | 90%         |
| Security vulns (high)  | 27      | 0          | 0          | 0           | 0           |
| Lighthouse performance | UNK     | >=0.85     | >=0.90     | >=0.95      | >=0.98      |
| Build time (full)      | UNK     | <15min     | <10min     | <5min       | <3min       |
| CI pipeline time       | UNK     | <20min     | <15min     | <10min      | <5min       |
| Uptime                 | UNK     | 99.9%      | 99.9%      | 99.95%      | 99.99%      |
| Page load P95          | UNK     | <5s        | <3s        | <2s         | <1s         |
| Search latency P95     | UNK     | <1s        | <500ms     | <300ms      | <200ms      |

---

## Decision Records

### ADR-001: Node.js Version Policy

**Status:** Proposed **Context:** Node 26 causes vitest/jsdom hang. Project currently requires
Node 22. **Decision:** Support Node 22 LTS as primary target. Add `engines` field to `package.json`.
Investigate Node 26 compatibility as secondary priority. **Consequences:** Contributors must use
Node 22. CI must run on Node 22.

### ADR-002: Pre-Commit vs CI Boundary

**Status:** Accepted **Context:** Pre-commit must be fast to avoid developer friction. Some checks
are slow. **Decision:** Pre-commit runs: lint-staged, typecheck, vitest, MDX validation, link
checking, depth tiers, descriptions, forward refs. CI additionally runs: full ESLint, cspell,
markdownlint, pnpm audit, Lighthouse. **Consequences:** Pre-commit ~30-60s. CI ~10-15min. Security
vulns caught in CI, not local.

### ADR-003: A-Level Humanities Stubs

**Status:** Proposed **Context:** 4 A-Level stubs (Psychology, Geography, History, English) created
as placeholders. CONTENT_STANDARD.md Section 12 prohibits humanities as standalone topics.
**Decision:** Keep stubs but mark as "exam-aligned qualification content." Add explicit scope
annotation in frontmatter. Expand only if aligned to exam specifications. **Consequences:** Stubs
remain. Content must be exam-aligned, not general humanities.

### ADR-004: Algolia Credential Storage

**Status:** Proposed **Context:** `docusaurus.shared.config.ts` contains hardcoded `ALGOLIA_APP_ID`
and `ALGOLIA_SEARCH_KEY`. **Decision:** Move to environment variables. Keep defaults for local
development in `.env.example`. CI uses GitHub Secrets. **Consequences:** Local dev requires `.env`
file. CI unchanged (already uses secrets for deploy keys).

---

## Appendix A: Sub-Site Architecture

```
                    wyattsnotes.com (main)
                    ├── Landing page
                    ├── Blog (release notes)
                    ├── docs_infrastructure/ (91 files)
                    └── docs_tools/ (63 files)

    ┌───────────────┼───────────────┬───────────────┬───────────────┐
    │               │               │               │               │
ib.wyattau.com  dse.wyattau.com  alevel.wyattau.com  alevel-sciences  programming
(IB: 223 files) (DSE: 147)       (Maths+Physics)     .wyattau.com     .wyattau.com
                                  (A-Level: 281)      (8 subjects)    (C++ + langs)

qualifications.wyattau.com     university.wyattau.com    academics.wyattau.com
(GCSE, AP, Highers, ILC)      (33 files, expanding)     (redirect -> ib)
```

## Appendix B: Quality Gate Pipeline

```
Developer Push
    │
    ▼
┌──────────────────────────────────────────────────────┐
│ PRE-COMMIT HOOK (~30-60s)                            │
│ ├── lint-staged (eslint --fix + prettier --write)    │
│ ├── tsc --noEmit (typecheck)                         │
│ ├── vitest run (unit tests, 64 tests)                │
│ ├── validate-mdx.py (emojis, admonitions, HTML)      │
│ ├── check-links.py (3,016 links)                     │
│ ├── check-depth-tiers.py (blocking)                  │
│ ├── check-descriptions.py (blocking)                 │
│ ├── check-forward-refs.py (blocking)                 │
│ ├── check-handwaves.py (informational)               │
│ └── check-search-index-coverage.py (informational)   │
└──────────────┬───────────────────────────────────────┘
               │ PASS
               ▼
┌──────────────────────────────────────────────────────┐
│ CI PIPELINE (~10-15min, 5 parallel jobs)             │
│ ├── Job 1: Lint + Typecheck + Build (all 9 configs)  │
│ ├── Job 2: Unit Tests + Coverage                     │
│ ├── Job 3: Security Audit (pnpm audit + CodeQL)      │
│ ├── Job 4: Content Validation (7 Python scripts)     │
│ └── Job 5: External Link Check (lychee)              │
└──────────────┬───────────────────────────────────────┘
               │ ALL PASS
               ▼
┌──────────────────────────────────────────────────────┐
│ DEPLOY (per sub-site)                                │
│ ├── Build sub-site with production config            │
│ ├── Deploy to Cloudflare Pages via wrangler          │
│ ├── Smoke test (HTTP 200)                            │
│ ├── Lighthouse audit                                 │
│ └── Algolia re-index                                 │
└──────────────────────────────────────────────────────┘
```

## Appendix C: Security Posture

| Layer                    | Tool                   | Frequency                       |
| ------------------------ | ---------------------- | ------------------------------- |
| Dependency audit         | `pnpm audit`           | Every commit (CI)               |
| Static analysis          | ESLint security rules  | Every commit                    |
| Supply chain             | Dependabot             | Weekly (npm), Monthly (Actions) |
| CSP headers              | Manual audit           | Quarterly                       |
| Penetration testing      | Manual                 | Annually                        |
| Vulnerability disclosure | SECURITY.md            | Continuous                      |
| External links           | lychee                 | Every CI run                    |
| Code scanning            | CodeQL (GitHub)        | Every push                      |
| Secrets detection        | GitHub secret scanning | Every push                      |

---

_This roadmap supersedes ROADMAP.md. All future planning should reference this document as the
authoritative source._
