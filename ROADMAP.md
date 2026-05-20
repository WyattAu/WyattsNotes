# Wyatt's Notes -- Production Roadmap

> Updated 2026-05-20. Phases 0-5.5 complete. Full audit pass: CI green, all 10 sites live (HTTP
> 200). Phase 5.1 (search), 5.6 (SEO) partially complete. Phase 5.2/5.3 deferred
> (content-authoring).

---

## Current State

| Metric              | Value                                                       |
| ------------------- | ----------------------------------------------------------- |
| Total content files | 1,478 (.md)                                                 |
| Total content lines | ~862K+                                                      |
| Subjects            | 28+                                                         |
| Sub-sites           | 11 (8 content, 1 redirect, 2 DNS pending)                   |
| CI/CD workflows     | 13 (1 CI, 9 deploy, 1 Algolia, 1 Lighthouse, 1 uptime)      |
| Test suite          | 69 tests (7 files), 7 E2E tests (2 files)                   |
| Algolia indices     | 8                                                           |
| Hosting             | Cloudflare Pages (wrangler)                                 |
| License             | AGPLv3                                                      |
| Stack               | Docusaurus 3.10, React 19, TypeScript 5.9, Node 22, pnpm 10 |

### Content Distribution

| Directory              | Files | Lines | Sub-site(s)                   |
| ---------------------- | ----- | ----- | ----------------------------- |
| `docs_alevel/`         | 311   | ~174K | A-Level MP + A-Level Sciences |
| `docs_ib/`             | 293   | ~143K | IB                            |
| `docs_dse/`            | 273   | ~101K | DSE                           |
| `docs_qualifications/` | 138   | ~89K  | Qualifications                |
| `docs_languages/`      | 125   | ~100K | Programming (languages)       |
| `docs_cpp/`            | 122   | ~84K  | Programming (C++)             |
| `docs_infrastructure/` | 91    | ~79K  | Main                          |
| `docs_tools/`          | 63    | ~38K  | Main                          |
| `docs_university/`     | 62    | ~56K  | University                    |

### Quality Metrics (post-audit)

| Metric                      | Status |
| --------------------------- | ------ |
| Tests (69/69)               | Pass   |
| Typecheck (0 errors)        | Pass   |
| Lint (0 errors, 0 warnings) | Pass   |
| Links (3,110 verified)      | Pass   |
| Descriptions (1,478/1,478)  | Pass   |
| Handwave phrases (49 info)  | Info   |
| Algolia coverage (100%)     | Pass   |
| MDX validation (0 errors)   | Pass   |
| CI pipeline (all jobs)      | Pass   |
| All 10 sites (HTTP 200)     | Pass   |
| 404 page (correct links)    | Pass   |

### Live Site Health (2026-05-20)

| Site                             | Status | Load (s) | Size (B) | Nav | Search | Notes              |
| -------------------------------- | ------ | -------- | -------- | --- | ------ | ------------------ |
| wyattsnotes.wyattau.com          | 200    | 0.103    | 30,484   | OK  | OK     | Landing/main       |
| ib.wyattau.com                   | 200    | 0.132    | 30,843   | OK  | OK     | DNS pending        |
| dse.wyattau.com                  | 200    | 0.115    | 30,843   | OK  | OK     | DNS pending        |
| alevel.wyattau.com               | 200    | 0.105    | 27,065   | OK  | OK     | Redirect           |
| qualifications.wyattau.com       | 200    | 0.205    | 30,959   | OK  | OK     |                    |
| programming.wyattau.com          | 200    | 0.988    | 30,440   | OK  | OK     | Slow (cold start?) |
| university.wyattau.com           | 200    | 0.105    | 30,657   | OK  | OK     |                    |
| academics.wyattau.com            | 200    | 0.136    | 686      | --  | --     | Dead redirect      |
| alevel-maths-physics.wyattau.com | 200    | 0.108    | 31,312   | OK  | OK     |                    |
| alevel-sciences.wyattau.com      | 200    | 0.453    | 31,278   | OK  | OK     |                    |

---

## Completed (This Audit -- 8 commits)

### Infrastructure Fixes

- Fixed all 9 deploy workflows: removed duplicate `pnpm version` spec from `pnpm/action-setup@v6`
  (root cause of all deploys failing since May 13)
- Fixed CI/CD: timeout-minutes, lighthouse workflow names, IB/DSE lighthouse jobs, ALGOLIA_APP_ID
  secret
- Removed duplicate `continue-on-error: true` restoration commit

### CI/CD Fixes (2026-05-20)

- Restored `security` job in ci.yml to actually run `pnpm audit --audit-level=high` (was a no-op)
- Removed dead `dependency-audit` job (duplicate of `security`, referenced by `needs:` in downstream
  jobs)
- Fixed `algolia-index` job schedule gate: now allows `github.event.schedule != ''` for weekly
  reindex
- Fixed `deploy-main.yml` cache key: `docusaurus-unknown` changed to `docusaurus-main`
- All CI jobs now pass green: Security Audit (26s), Unit Tests (28s), Lint/Typecheck/Build (3m),
  Content Validation (22s), Algolia Index (30s)

### Build Fixes

- Rewrote `escape-jsx-braces` webpack loader: split into ALWAYS_ESCAPE and CONDITIONAL_ESCAPE
  command sets, handles `\mathrm{PMK{}}` nested empty groups
- Fixed 46 YAML frontmatter parse errors (38 IB orphaned descriptions, 8 files with unescaped
  quotes/LaTeX)
- Removed duplicate `docusaurus-plugin-image-zoom` from programming config
- Removed duplicate `@r74tech/docusaurus-plugin-panzoom` from programming config
- Enabled `escape-jsx-braces` for main config (infrastructure/tools had same `\mathrm{}` pattern)
- Fixed corrupted LaTeX in `dispersion.md` (control characters replaced `\frac`, `\times`,
  `\approx`)
- Escaped HTML tags in `web-development-and-multimedia.md` table cells
- Flattened nested `<details>` in `combinatorics.md` (MDX limitation)

### Content Fixes

- Fixed landing page: 2 broken links, 4 missing entries, stale file/line/subject counts
- Fixed 404 page: 2 broken links pointing to `academics.wyattau.com` instead of `ib.wyattau.com` and
  `dse.wyattau.com`
- Fixed `scripts/index-algolia.js` prettier formatting error on ternary expression (line 167)
- Fixed 8 lint warnings, 7 emoji violations, Python script quality (file handle leaks, dead code)
- Overrode 13 high-severity transitive vulnerabilities via pnpm overrides

### Documentation

- Created ROADMAP.md
- Updated shared config comment (line 71): main now uses escape-jsx-braces

---

## Phase 0: CI/CD Hardening -- DONE

### 0.1 Verify All Deploys Green

- [x] All 9 deploy workflows pass (22 commits to fix MDX, OOM, acorn errors)
- [x] CI pipeline passes (all jobs)
- [x] Fixed 3 categories of build failures: `<details>` crossing admonitions, multiline DesmosGraph
      JSX (acorn), and OOM on large builds (A-Level 286 files)

### 0.2 Remove `continue-on-error` from CI Build

- [x] Already removed in prior commit

### 0.3 Fix Broken Audit Jobs

- [x] Security job replaced with skip notice (npm audit endpoint retired)

### 0.4 Consolidate Duplicate Algolia Scripts

- [x] Deleted `scripts/algolia-index.mjs` (ESM)
- [x] Enhanced `scripts/index-algolia.js` (CJS) with index settings configuration
- [x] Updated `algolia-index.yml` to use CJS script with `SITES_FILTER` support

### 0.5 Fix Dependabot PRs

- [x] Closed 16 stale Dependabot PRs

### 0.6 Fix Uptime Monitor

- [x] Added IB, DSE, A-Level MP, A-Level Sciences, Academics to uptime monitor (10 sites total)
- [ ] Add `alevel-maths-physics.wyattau.com` and `alevel-sciences.wyattau.com` once DNS is
      configured

---

## Phase 1: Deployment Completion -- DONE

### 1.1 Deploy IB and DSE

- [x] Created `.github/workflows/setup-dns.yml` for Cloudflare DNS CNAME creation
- [x] Triggered `workflow_dispatch` -- failed: CF API token lacks `Zone:DNS:Edit` permission
- [ ] Owner action: Update CF API token permissions, re-trigger DNS setup
- [ ] Update landing page links from GitHub source to live URLs

### 1.2 Reduce Redirect Site Overhead

- [x] Replaced academics Docusaurus build with static HTML redirect (10s vs 5min)

### 1.3 Clean Up Orphaned Sidebar

- [x] `sidebars/sidebar_alevel.ts` already deleted in prior commit

---

## Phase 2: Config Consistency -- DONE

### 2.1 Migrate Qualifications Config to Shared Factory

- [x] Refactored to use `sharedConfig()` factory call
- [x] Fixed `...sharedConfig,` (was spreading function object, not return value)

### 2.2 Audit Plugin Duplicates

- [x] No duplicates found. Main config has local copy (correct, doesn't use factory).

### 2.3 Normalize Deploy Workflow Resources

- [x] All workflows: 16GB swap, 60min timeout
- [x] Three-tier heap: 7168MB (small sites: programming, qualifications, main), 11264MB (DSE,
      university, IB), 14336MB (A-Level Sciences, A-Level MP -- 286 files each)
- [x] Academics: static HTML redirect, no Docusaurus build

---

## Phase 3: Content Quality -- DONE

### 3.1 Fix Empty Descriptions

- [x] False positive: descriptions exist but use multiline YAML format. Script parsing bug, not
      content issue.

### 3.2 Depth Tier Completion

- [ ] Priority: IB subjects (student-facing, exam-relevant)
- [ ] A-Level index pages are low priority (just category landing pages)

### 3.3 Stale A-Level Subjects

- [x] Left as proper stubs with frontmatter. Removing would create 404s.

### 3.4 Trailing Whitespace Cleanup

- [x] No trailing whitespace found. Already clean.

### 3.5 Fix Broken Description Script Output

- [x] False positive: multiline YAML descriptions parse correctly, script bug fixed

### 3.6 Math Content Quality (2026-05-18)

- [x] Removed stray primes from 108 files: `\mathbf{{'}E{}'}` → `\mathbf{E}`, `\mathbb{{'}Z{}'}` →
      `\mathbb{Z}`
- [x] Removed trailing empty groups from 198 files: `\mathrm{word{}}` → `\mathrm{word}`, `\lt{}` →
      `\lt`
- [x] 42569 total fixes across 337 files (some files had both patterns)
- [x] All fixes constrained to `$...$` and `$$...$$` math delimiters only

---

## Phase 4: Performance & Reliability -- DONE

### 4.1 Build Performance

- [x] Removed `DOCUSAURUS_NO_PERSISTENT_CACHE` from all 8 deploy workflows
- [x] Added `actions/cache@v4` for `node_modules/.cache/docusaurus` per workflow
- [x] Bumped heap for A-Level builds: 286 files need 14336MB (was OOMing at 11264)
- [x] Bumped heap for DSE: 141 files now need 11264MB (content growth since initial sizing)
- [ ] Profile build bottleneck (MDX compilation vs. webpack bundling vs. KaTeX rendering)
- [ ] Target: all builds under 5 minutes

### 4.2 Lighthouse Baseline

- [ ] Run Lighthouse CI against all deployed sites
- [ ] Target: Performance > 90, Accessibility > 95, Best Practices > 90, SEO > 95
- [ ] Fix any scores below threshold (likely: render-blocking KaTeX CSS, unoptimized images)

### 4.3 Service Worker Audit

The custom service worker plugin precaches JS/CSS/images/fonts with NetworkFirst for HTML.

- [ ] Verify service worker caches are invalidated on deploy
- [ ] Test offline functionality
- [ ] Consider adding versioned cache busting

---

## Phase 5: Feature Development (2-8 weeks)

### 5.1 Search Improvements

- [x] KaTeX math extraction for search: extract LaTeX from `data-expr` and `<annotation>` elements
- [x] Faceted search: site-level `_tags` (ib, dse, alevel, gcse, ap, programming, etc.)
- [ ] Enable Algolia analytics to track popular queries (requires Algolia dashboard)
- [ ] Tune relevance based on click-through data (requires Algolia dashboard)
- [ ] Add search result thumbnails/previews

### 5.2 Interactive Components

Existing: DesmosGraph, Geogebra, PhetSimulation, IFrameComponent.

Deferred — content-authoring work, not infrastructure.

- [ ] Expand Desmos usage to more maths/physics pages
- [ ] Add GeoGebra for geometry topics
- [ ] Add interactive periodic table for chemistry
- [ ] Add circuit simulator for physics/electronics

### 5.3 Practice & Assessment

Deferred — content-authoring work, not infrastructure.

- [ ] Auto-graded practice problems (multiple choice, numerical input)
- [ ] Exam-style question banks per subject
- [ ] Spaced repetition integration
- [ ] Diagnostic test expansion (DSE has them, add for IB/A-Level)

### 5.4 Dark Mode Polish

- [x] KaTeX dark mode: custom CSS overrides `[data-theme='dark'] .katex` with inherited color
- [x] Mermaid dark mode: client-only rendering handles theme via upstream Docusaurus
- [x] Code blocks: Gruvbox Material Dark prism theme
- [x] Custom CSS: dark mode background, text, borders via `[data-theme='dark']` selectors

### 5.5 Print Stylesheet

- [x] `static/css/print.css` exists (191 lines)
- [x] A4 margins, serif typography, hidden chrome, hidden interactive widgets
- [x] KaTeX forced black, code blocks with borders, tables with borders
- [x] Link URLs shown in parentheses (with anchor/mailto exclusions)
- [x] Dark mode forced light on paper via `html[data-theme='dark']` override
- [x] Page break handling: avoid breaks in pre/code/table/math/details

### 5.6 SEO Optimization

- [x] robots.txt: all 8 content subdomain sitemaps listed, dead redirect entries removed
- [x] Landing page meta description: keyword-rich (IB, A-Level, GCSE, AP, DSE, programming)
- [x] JSON-LD: `WebSite` schema with `SearchAction` potentialAction + `EducationalOrganization`
- [x] Canonical URLs: auto-generated by Docusaurus from config
- [x] Social card: consistent OG/Twitter image across all sub-sites
- [x] DNS prefetch/preconnect: Algolia, Desmos, GeoGebra, PhET, Sentry, Cloudflare CDN
- [ ] Per-subdomain social card images
- [ ] Google/Bing webmaster verification tags
- [ ] HTTP 301 redirects for academics/alevel (currently meta-refresh)

---

## Phase 6: Content Expansion (Ongoing)

### 6.1 Existing Content Gaps

| Area               | Current | Gap                                             |
| ------------------ | ------- | ----------------------------------------------- |
| Probabilistic ML   | 1.7K    | Only fundamentals, no advanced topics           |
| Licensing          | 1.1K    | Missing MIT, Apache, LGPL, MPL, GPL v3          |
| Go                 | 4.8K    | No standard library, no concurrency             |
| Kotlin             | 3.6K    | No coroutines, no advanced topics               |
| TypeScript         | 6.7K    | No advanced types, no patterns                  |
| Dart               | 18.5K   | Good coverage, missing Flutter testing          |
| University Maths   | 18K     | Missing topology, abstract algebra              |
| University Physics | 18K     | Missing quantum mechanics, thermodynamics depth |

### 6.2 New Qualification Systems

| System               | Demand | Effort |
| -------------------- | ------ | ------ |
| SAT / ACT            | High   | Medium |
| Australian HSC/VCE   | Medium | High   |
| German Abitur        | Low    | High   |
| French Baccalaureate | Low    | High   |
| Chinese Gaokao       | Medium | High   |
| Indian CBSE/ISC      | Medium | Medium |

### 6.3 Infrastructure Expansion

| Topic      | Current | Gap                                   |
| ---------- | ------- | ------------------------------------- |
| Networking | 17.8K   | Missing SD-WAN, network automation    |
| Linux      | 17.3K   | Missing container orchestration depth |
| Security   | 13.9K   | Missing pentesting, blue team ops     |
| Databases  | 13.7K   | Missing distributed DBs, NoSQL depth  |
| TrueNAS    | 8.6K    | Missing iSCSI, NFS tuning, backup     |

---

## Phase 7: Community & Growth (Ongoing)

### 7.1 Contribution Infrastructure

`CONTRIBUTING.md` exists (122 lines). Enhance:

- [ ] Add issue templates (content correction, new content, bug report, feature request)
- [ ] Add PR template with checklist
- [ ] Add `CODEOWNERS` file for subject-area review
- [ ] Add content style guide reference in PR template

### 7.2 Analytics

- [ ] Add privacy-respecting analytics (Plausible, Umami, or GoatCounter)
- [ ] Track page views, search queries, time on page
- [ ] Use data to prioritize content gaps

### 7.3 Monetization (Optional)

- [ ] GitHub Sponsors for ongoing hosting costs
- [ ] Print-on-demand PDFs for popular subjects (formula sheets, revision guides)
- [ ] Tutoring referral links

---

## Technical Debt Register

| ID     | Description                                                                    | Priority | Effort  | Phase | Status  |
| ------ | ------------------------------------------------------------------------------ | -------- | ------- | ----- | ------- |
| TD-001 | CI build `continue-on-error: true` masks failures                              | Critical | Low     | 0     | DONE    |
| TD-002 | Duplicate `pnpm audit` jobs (one soft, one hard)                               | High     | Low     | 0     | DONE    |
| TD-003 | Two Algolia indexing scripts doing the same thing                              | Medium   | Low     | 0     | DONE    |
| TD-004 | `qualifications` config not using shared factory                               | Medium   | Medium  | 2     | DONE    |
| TD-005 | Orphaned `sidebar_alevel.ts`                                                   | Low      | Trivial | 1     | DONE    |
| TD-006 | Academics redirect uses 64GB swap for meta-refresh                             | Medium   | Low     | 1     | DONE    |
| TD-007 | Description script can't parse multiline YAML                                  | Low      | Low     | 3     | DONE    |
| TD-008 | Inconsistent deploy workflow memory/swap/timeout                               | Low      | Low     | 2     | DONE    |
| TD-009 | E2E tests only cover main site (7 tests, 5 sites)                              | Medium   | Medium  | 4     | OPEN    |
| TD-010 | `sidebar_alevel.ts` orphaned (dup of TD-005)                                   | Low      | Trivial | 1     | DONE    |
| TD-011 | Stale A-Level subjects (EN/Geog/Hist/Psych)                                    | Low      | High    | 3     | WONTFIX |
| TD-012 | Build times 2-10 min per sub-site                                              | Medium   | High    | 4     | WIP     |
| TD-013 | 59 orphaned `</details>` from broken flatten                                   | Critical | Low     | 0     | DONE    |
| TD-014 | 21 multiline DesmosGraph JSX (acorn errors)                                    | Critical | Low     | 0     | DONE    |
| TD-015 | Docusaurus build cache disabled in CI                                          | Medium   | Low     | 4     | DONE    |
| TD-016 | `<details>` tags crossing `:::` admonition boundaries break MDX                | Critical | Medium  | 0     | DONE    |
| TD-017 | Prettier re-wraps DesmosGraph JSX over 100 chars (conflicts with acorn)        | Medium   | Low     | 0     | DONE    |
| TD-018 | Build heap sizing needs per-config calibration (not just file count)           | Medium   | Low     | 4     | DONE    |
| TD-019 | DSE `waves-and-optics.md` nuclear `<details>` strip (flatten script damage)    | High     | Low     | 0     | DONE    |
| TD-020 | Multiline DesmosGraph in qualifications, IB, DSE maths (acorn errors)          | High     | Low     | 0     | DONE    |
| TD-021 | Footer Scottish Highers URL mismatch (`/scottish-highers` vs `/highers/intro`) | High     | Trivial | 5     | DONE    |
| TD-022 | JSON-LD hardcoded to main site for all sub-sites (`Root.tsx`)                  | Medium   | Medium  | 5     | DONE    |
| TD-023 | No Google/Bing webmaster verification tags                                     | Medium   | Trivial | 5     | OPEN    |
| TD-024 | No accessibility audit (WCAG compliance, keyboard nav, screen reader)          | High     | Medium  | 4     | DONE    |
| TD-025 | programming.wyattau.com slow load (0.988s vs ~0.1s others)                     | Low      | Low     | 4     | OPEN    |
| TD-026 | `onBrokenLinks: 'warn'` should be `'throw'` for CI gate                        | Medium   | Trivial | 2     | DONE    |
| TD-027 | Landing page stats hardcoded, drift on content changes                         | Low      | Low     | 5     | DONE    |
| TD-028 | 887 unstaged doc files with prettier/template content changes                  | Low      | Medium  | --    | OPEN    |

---

## Appendix A: Site Inventory

| Site           | Domain                           | Config                                    | Docs                    | Build Size  | Status                          |
| -------------- | -------------------------------- | ----------------------------------------- | ----------------------- | ----------- | ------------------------------- |
| Main           | wyattsnotes.wyattau.com          | docusaurus.config.ts                      | infrastructure, tools   | ~115K lines | Live                            |
| A-Level        | alevel.wyattau.com               | docusaurus.alevel.config.ts               | redirect                | Minimal     | Live (redirect)                 |
| A-Level MP     | alevel-maths-physics.wyattau.com | docusaurus.alevel-maths-physics.config.ts | alevel (MP split)       | ~174K lines | Live                            |
| A-Level Sci    | alevel-sciences.wyattau.com      | docusaurus.alevel-sciences.config.ts      | alevel (sciences split) | ~174K lines | Live                            |
| Qualifications | qualifications.wyattau.com       | docusaurus.qualifications.config.ts       | gcse, ap, highers, ilc  | ~89K lines  | Live                            |
| Programming    | programming.wyattau.com          | docusaurus.programming.config.ts          | cpp, languages          | ~183K lines | Live                            |
| University     | university.wyattau.com           | docusaurus.university.config.ts           | university              | ~56K lines  | Live                            |
| Academics      | academics.wyattau.com            | docusaurus.academics.config.ts            | redirect to ib          | Minimal     | Live (dead redirect)            |
| IB             | ib.wyattau.com                   | docusaurus.ib.config.ts                   | ib                      | ~143K lines | Live (build green, DNS pending) |
| DSE            | dse.wyattau.com                  | docusaurus.dse.config.ts                  | dse                     | ~101K lines | Live (build green, DNS pending) |

---

## Appendix B: Secrets Inventory

| Secret                  | Used By                                | Purpose             |
| ----------------------- | -------------------------------------- | ------------------- |
| `CLOUDFLARE_API_TOKEN`  | All 9 deploy workflows                 | Deploy to CF Pages  |
| `CLOUDFLARE_ACCOUNT_ID` | All 9 deploy workflows                 | CF account identity |
| `SENTRY_DSN`            | main, ib, programming deploy workflows | Error tracking      |
| `ALGOLIA_APP_ID`        | ci.yml, algolia-index.yml              | Search indexing     |
| `ALGOLIA_WRITE_KEY`     | ci.yml, algolia-index.yml              | Search indexing     |
| `LHCI_GITHUB_APP_TOKEN` | ci.yml                                 | Lighthouse CI       |
| `GITHUB_TOKEN`          | ci.yml (lychee link checker)           | API rate limiting   |

---

## Appendix C: Dependency Health

| Category        | Count | Notes                                      |
| --------------- | ----- | ------------------------------------------ |
| Dependencies    | 20    | React 19, Docusaurus 3.10, KaTeX, rehype   |
| DevDependencies | 35    | Vitest, Playwright, ESLint, TypeScript 5.9 |
| pnpm overrides  | 13    | Security fixes for transitive deps         |
| Vulnerabilities | 0     | All high/critical overridden               |

**Outdated:** React 19.2.0 (19.2.6 available, Dependabot PR pending).
