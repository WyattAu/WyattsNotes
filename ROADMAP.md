# Wyatt's Notes -- Production Roadmap

> Updated 2026-05-14. Reflects state after full audit and 6-commit fix series.

---

## Current State

| Metric              | Value                                                                 |
| ------------------- | --------------------------------------------------------------------- |
| Total content files | 1,211 (.md)                                                           |
| Total content lines | ~864K                                                                 |
| Subjects            | 28                                                                    |
| Sub-sites           | 11 (7 content, 2 redirect, 2 not deployed)                            |
| CI/CD workflows     | 14 (1 CI, 9 deploy, 1 test-deploy, 1 Algolia, 1 Lighthouse, 1 uptime) |
| Test suite          | 69 tests (7 files), 7 E2E tests (2 files)                             |
| Algolia indices     | 8                                                                     |
| Hosting             | Cloudflare Pages (wrangler)                                           |
| License             | AGPLv3                                                                |
| Stack               | Docusaurus 3.10, React 19, TypeScript 5.9, Node 22, pnpm 10           |

### Content Distribution

| Directory              | Files | Lines | Sub-site(s)                   |
| ---------------------- | ----- | ----- | ----------------------------- |
| `docs_alevel/`         | 286   | 174K  | A-Level MP + A-Level Sciences |
| `docs_ib/`             | 211   | 143K  | IB                            |
| `docs_dse/`            | 141   | 101K  | DSE                           |
| `docs_qualifications/` | 138   | 89K   | Qualifications                |
| `docs_languages/`      | 125   | 100K  | Programming (languages)       |
| `docs_cpp/`            | 122   | 84K   | Programming (C++)             |
| `docs_infrastructure/` | 91    | 79K   | Main                          |
| `docs_tools/`          | 63    | 38K   | Main                          |
| `docs_university/`     | 34    | 56K   | University                    |

### Quality Metrics (post-audit)

| Metric                      | Status |
| --------------------------- | ------ |
| Tests (69/69)               | Pass   |
| Typecheck (0 errors)        | Pass   |
| Lint (0 errors, 0 warnings) | Pass   |
| Links (2,184 verified)      | Pass   |
| Descriptions (1,211/1,211)  | Pass   |
| Handwave phrases (0)        | Pass   |
| Algolia coverage (100%)     | Pass   |
| MDX validation (0 errors)   | Pass   |

---

## Completed (This Audit -- 6 commits)

### Infrastructure Fixes

- Fixed all 9 deploy workflows: removed duplicate `pnpm version` spec from `pnpm/action-setup@v6`
  (root cause of all deploys failing since May 13)
- Fixed CI/CD: timeout-minutes, lighthouse workflow names, IB/DSE lighthouse jobs, ALGOLIA_APP_ID
  secret
- Removed duplicate `continue-on-error: true` restoration commit

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
- Fixed 8 lint warnings, 7 emoji violations, Python script quality (file handle leaks, dead code)
- Overrode 13 high-severity transitive vulnerabilities via pnpm overrides

### Documentation

- Created ROADMAP.md
- Updated shared config comment (line 71): main now uses escape-jsx-braces

---

## Phase 0: CI/CD Hardening (Immediate -- Next 24h)

### 0.1 Verify All Deploys Green

Push triggered all 9 deploy workflows + CI. Monitor results.

- [ ] All 9 deploy workflows pass
- [ ] CI pipeline passes (all 7 jobs)
- [ ] If any fail: diagnose, fix, push again

### 0.2 Remove `continue-on-error` from CI Build

The CI `validate` job has `continue-on-error: true` on the build step. This masks build failures.

- [ ] Confirm all deploys pass with the latest fixes
- [ ] Set `continue-on-error: false` in `.github/workflows/ci.yml` validate job
- [ ] Monitor 3+ CI runs for green builds

### 0.3 Fix Broken Audit Jobs

The CI pipeline has two audit jobs that conflict:

| Job                | Issue                                                                            |
| ------------------ | -------------------------------------------------------------------------------- |
| `security`         | Runs `pnpm audit --audit-level=high` with `continue-on-error: true` -- soft-fail |
| `dependency-audit` | Runs `pnpm audit --audit-level=high` with hard fail                              |
| Both               | npm audit endpoint retired (HTTP 410) -- both are effectively no-ops             |

- [ ] Remove duplicate `pnpm audit` from `security` job (keep only `dependency-audit`)
- [ ] Replace `pnpm audit` with `pnpm audit --registry=https://registry.npmjs.org` or remove
      entirely (Dependabot covers this)
- [ ] Alternatively, add `pnpm dlx pnpm-audit` or switch to `npm audit` in a temp npm project

### 0.4 Consolidate Duplicate Algolia Scripts

Two scripts serve the same purpose:

| Script                      | Used By             | Format |
| --------------------------- | ------------------- | ------ |
| `scripts/index-algolia.js`  | `ci.yml`            | CJS    |
| `scripts/algolia-index.mjs` | `algolia-index.yml` | ESM    |

- [ ] Audit both scripts, identify differences
- [ ] Consolidate into single script
- [ ] Update both workflow references

### 0.5 Fix Dependabot PRs

- [ ] Investigate `react 19.2.0 -> 19.2.6` CI failure
- [ ] Investigate `actions/upload-artifact 4 -> 7` test-deploy failure
- [ ] Merge or close both PRs

### 0.6 Fix Uptime Monitor

Currently only checks 6 of 9+ sites. Missing: `ib`, `dse`, `alevel-maths-physics`,
`alevel-sciences`.

- [ ] Add IB and DSE to uptime monitor (once DNS is configured)
- [ ] Add `alevel-maths-physics.wyattau.com` and `alevel-sciences.wyattau.com`
- [ ] Update lighthouse workflow to include A-Level MP and A-Level Sciences URLs

---

## Phase 1: Deployment Completion (1-3 days)

### 1.1 Deploy IB and DSE

Content and deploy workflows exist. Missing: DNS records.

- [ ] Add Cloudflare DNS records for `ib.wyattau.com` (CNAME to `wyattsnotes.pages.dev`)
- [ ] Add Cloudflare DNS records for `dse.wyattau.com` (CNAME to `wyattsnotes.pages.dev`)
- [ ] Verify deploy workflows trigger and succeed
- [ ] Update landing page links from GitHub source to live URLs
- [ ] Fix `academics.wyattau.com` redirect target (currently points to dead `ib.wyattau.com`)

### 1.2 Reduce Redirect Site Overhead

The `academics` deploy uses 64GB swap and `--max-old-space-size=14336` for a meta-refresh redirect.

- [ ] Replace Docusaurus build with a static HTML file + `_redirects` or `_headers`
- [ ] Or use Cloudflare Page Rules / Redirect Rules instead of a separate deploy
- [ ] Same for `alevel.wyattau.com` redirect

### 1.3 Clean Up Orphaned Sidebar

`sidebars/sidebar_alevel.ts` exists but is not referenced by any config (the alevel configs use
`sidebar_alevel_sciences.ts` and `sidebar_alevel_maths_physics.ts`).

- [ ] Delete `sidebars/sidebar_alevel.ts` or document why it exists

---

## Phase 2: Config Consistency (1-2 days)

### 2.1 Migrate Qualifications Config to Shared Factory

`docusaurus.qualifications.config.ts` does not use `sharedConfig()` factory -- it has inline
presets, markdown, and theme config that duplicate `sharedConfig()`.

- [ ] Refactor to use `sharedConfig()` like all other sub-site configs
- [ ] Verify build output is identical before/after

### 2.2 Audit Plugin Duplicates

After fixes, verify no plugin is loaded twice across all configs:

- [ ] `docusaurus-plugin-image-zoom` -- should be in `sharedPlugins()` only
- [ ] `@r74tech/docusaurus-plugin-panzoom` -- should be in `sharedPlugins()` only (main config has
      local copy, which is correct since main doesn't use `sharedPlugins()`)
- [ ] Add a CI check or pre-commit hook to detect duplicate plugin IDs

### 2.3 Normalize Deploy Workflow Resources

Deploy workflows have inconsistent memory/swap settings:

| Workflow             | `--max-old-space-size` | Swap | Timeout |
| -------------------- | ---------------------- | ---- | ------- |
| Main                 | 11264                  | 32GB | 30m     |
| IB                   | 11264                  | 32GB | 60m     |
| DSE                  | 11264                  | 16GB | 60m     |
| A-Level MP           | 11264                  | 32GB | 90m     |
| A-Level Sciences     | 11264                  | 16GB | 90m     |
| Programming          | 7168                   | 16GB | 45m     |
| Qualifications       | 7168                   | 16GB | 60m     |
| University           | 11264                  | 16GB | 45m     |
| Academics (redirect) | 14336                  | 64GB | 60m     |

- [ ] Profile actual memory usage per build
- [ ] Set consistent limits based on actual needs (smaller sites need less)
- [ ] Reduce timeouts to minimum viable (adds up to 7h of total workflow time)

---

## Phase 3: Content Quality (1-4 weeks)

### 3.1 Fix 54 Empty Descriptions

Pre-commit hook reports 54 files with 0-char descriptions (all in single-quoted YAML, likely from
the frontmatter fix batch). These have `description: ''` which is valid but below the 120-char
minimum.

- [ ] Run `scripts/fix-all-descriptions.py` or write descriptions manually for high-traffic pages
- [ ] Priority: IB chemistry (10 files), IB physics (6 files), IB computer-science (4 files)

### 3.2 Depth Tier Completion

55 sections are below their target depth tier:

| Category         | Count | Priority |
| ---------------- | ----- | -------- |
| A-Level index    | 32    | Medium   |
| IB index/subject | 8     | High     |
| DSE index        | 4     | High     |
| Tools            | 6     | Low      |
| Languages        | 3     | Medium   |
| C++              | 2     | Low      |

- [ ] Prioritize IB subjects (student-facing, exam-relevant)
- [ ] A-Level index pages are low priority (just category landing pages)

### 3.3 Stale A-Level Subjects

Four A-Level subjects have placeholder-only content (1 file, ~25 lines each):

| Subject    | Files | Lines | Notes             |
| ---------- | ----- | ----- | ----------------- |
| English    | 1     | 26    | Single intro file |
| Geography  | 1     | 25    | Single intro file |
| History    | 1     | 26    | Single intro file |
| Psychology | 1     | 27    | Single intro file |

- [ ] Decide: remove, mark as "coming soon", or write content
- [ ] If keeping, add to Phase 5 content roadmap with estimated effort

### 3.4 Trailing Whitespace Cleanup

101 files with trailing whitespace (informational, not blocking).

- [ ] Run automated fix: `prettier --write "docs/**/*.md"` (prettier removes trailing whitespace)
- [ ] Commit as cleanup

---

## Phase 4: Performance & Reliability (1-2 weeks)

### 4.1 Build Performance

Current build times range from 2-10 minutes per sub-site, with some using 11-14GB heap.

- [ ] Profile build bottleneck (MDX compilation vs. webpack bundling vs. KaTeX rendering)
- [ ] Evaluate Docusaurus build cache (`docusaurus build --cache`)
- [ ] Consider shared webpack cache across deploy workflows
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

- [ ] Enable Algolia analytics to track popular queries
- [ ] Tune relevance based on click-through data
- [ ] Add faceted search (by subject, exam board, difficulty level)
- [ ] Add search result thumbnails/previews

### 5.2 Interactive Components

Existing: DesmosGraph, Geogebra, PhetSimulation, IFrameComponent.

- [ ] Expand Desmos usage to more maths/physics pages
- [ ] Add GeoGebra for geometry topics
- [ ] Add interactive periodic table for chemistry
- [ ] Add circuit simulator for physics/electronics

### 5.3 Practice & Assessment

- [ ] Auto-graded practice problems (multiple choice, numerical input)
- [ ] Exam-style question banks per subject
- [ ] Spaced repetition integration
- [ ] Diagnostic test expansion (DSE has them, add for IB/A-Level)

### 5.4 Dark Mode Polish

- [ ] Verify all Mermaid diagrams render in dark mode
- [ ] Verify KaTeX renders correctly in dark mode
- [ ] Verify code blocks have proper syntax highlighting in both modes
- [ ] Audit custom CSS for dark mode coverage

### 5.5 Print Stylesheet

`static/css/print.css` exists. Verify and improve.

- [ ] Test print output for key pages
- [ ] Ensure LaTeX renders in print (KaTeX output is HTML/CSS, should work)
- [ ] Add print-friendly formatting for formula sheets

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

| ID     | Description                                        | Priority | Effort  | Phase |
| ------ | -------------------------------------------------- | -------- | ------- | ----- |
| TD-001 | CI build `continue-on-error: true` masks failures  | Critical | Low     | 0     |
| TD-002 | Duplicate `pnpm audit` jobs (one soft, one hard)   | High     | Low     | 0     |
| TD-003 | Two Algolia indexing scripts doing the same thing  | Medium   | Low     | 0     |
| TD-004 | `qualifications` config not using shared factory   | Medium   | Medium  | 2     |
| TD-005 | Orphaned `sidebar_alevel.ts`                       | Low      | Trivial | 1     |
| TD-006 | Academics redirect uses 64GB swap for meta-refresh | Medium   | Low     | 1     |
| TD-007 | 54 files with empty descriptions                   | Medium   | Medium  | 3     |
| TD-008 | Inconsistent deploy workflow memory/swap/timeout   | Low      | Low     | 2     |
| TD-009 | E2E tests only cover main site (7 tests, 5 sites)  | Medium   | Medium  | 4     |
| TD-010 | `sidebar_alevel.ts` orphaned                       | Low      | Trivial | 1     |
| TD-011 | Stale A-Level subjects (EN/Geog/Hist/Psych)        | Low      | High    | 3     |
| TD-012 | Build times 2-10 min per sub-site                  | Medium   | High    | 4     |

---

## Appendix A: Site Inventory

| Site           | Domain                           | Config                                    | Docs                    | Build Size  | Status                    |
| -------------- | -------------------------------- | ----------------------------------------- | ----------------------- | ----------- | ------------------------- |
| Main           | wyattsnotes.wyattau.com          | docusaurus.config.ts                      | infrastructure, tools   | ~115K lines | Live                      |
| A-Level        | alevel.wyattau.com               | docusaurus.alevel.config.ts               | redirect                | Minimal     | Live (redirect)           |
| A-Level MP     | alevel-maths-physics.wyattau.com | docusaurus.alevel-maths-physics.config.ts | alevel (MP split)       | ~174K lines | Live                      |
| A-Level Sci    | alevel-sciences.wyattau.com      | docusaurus.alevel-sciences.config.ts      | alevel (sciences split) | ~174K lines | Live                      |
| Qualifications | qualifications.wyattau.com       | docusaurus.qualifications.config.ts       | gcse, ap, highers, ilc  | ~89K lines  | Live                      |
| Programming    | programming.wyattau.com          | docusaurus.programming.config.ts          | cpp, languages          | ~183K lines | Live                      |
| University     | university.wyattau.com           | docusaurus.university.config.ts           | university              | ~56K lines  | Live                      |
| Academics      | academics.wyattau.com            | docusaurus.academics.config.ts            | redirect to ib          | Minimal     | Live (dead redirect)      |
| IB             | ib.wyattau.com                   | docusaurus.ib.config.ts                   | ib                      | ~143K lines | **Not deployed** (no DNS) |
| DSE            | dse.wyattau.com                  | docusaurus.dse.config.ts                  | dse                     | ~101K lines | **Not deployed** (no DNS) |

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
