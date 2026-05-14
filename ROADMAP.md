# Wyatt's Notes — Production Roadmap

> Generated 2026-05-14. Reflects current state of the monorepo.

## Current State

| Metric         | Value                                                                         |
| -------------- | ----------------------------------------------------------------------------- |
| Total files    | 1,211 (.md/.mdx)                                                              |
| Total lines    | 862K                                                                          |
| Subjects       | 28                                                                            |
| Deployed sites | 6 (main, alevel, qualifications, programming, university, academics-redirect) |
| CI/CD          | GitHub Actions (8-job pipeline)                                               |
| Search         | Algolia (8 indices)                                                           |
| Hosting        | Cloudflare Pages (via wrangler)                                               |
| License        | AGPLv3                                                                        |

## Completed (This Audit)

- All 69 tests passing (63 original + 6 new for webpack loader)
- Typecheck clean (0 errors)
- Lint clean (0 errors, 0 warnings)
- 2,184 links verified (0 broken)
- 1,211/1,211 files have descriptions
- 0 handwave phrases
- 100% Algolia search index coverage
- Fixed 8 lint warnings, 7 emoji violations, script quality issues
- Fixed CI/CD: timeout-minutes, lighthouse workflow names, missing secrets
- Fixed webpack loader for nested braces in `\mathrm{}` (resolves MDX build errors in
  wireless-networking.md and 2_definitions.md)
- Fixed landing page: 2 broken links (IB, DSE), added 4 missing entries (Go, Kotlin, TypeScript,
  University), updated all stale file/line counts

## Known Blockers

### 1. MDX Build Still Uses `continue-on-error: true`

The webpack loader fix handles the `\mathrm{PMK{}}` pattern, but the CI build step still has
`continue-on-error: true` because there may be other MDX edge cases in the 1,211-file corpus. After
the loader fix is deployed and verified, remove `continue-on-error` and fix any remaining failures.

**Action:** Deploy loader fix, monitor CI, then set `continue-on-error: false`.

### 2. IB and DSE Not Deployed

Content exists (IB: 211 files / 142.9K lines, DSE: 141 files / 100.5K lines) with dedicated
Docusaurus configs (`docusaurus.ib.config.ts`, `docusaurus.dse.config.ts`), but:

- `ib.wyattau.com` — no DNS record
- `dse.wyattau.com` — no DNS record
- `academics.wyattau.com` — redirect stub to `ib.wyattau.com` (dead end)

Landing page now links IB and DSE to their GitHub source directories until deployment is ready.

**Action:** Add Cloudflare DNS records, create deploy workflows for IB and DSE, update landing page
links once live.

### 3. Dependabot PRs Failing

- `deps: bump react 19.2.0 → 19.2.6` — CI failed
- `ci: bump actions/upload-artifact 4 → 7` — test-deploy failed

**Action:** Review and fix these PRs. The upload-artifact v7 may need workflow syntax changes.

### 4. Pre-existing Content Issues

- 109 files with trailing whitespace (informational, not blocking)
- 55 depth tier issues (informational, not blocking)
- Some MDX files use LaTeX patterns that may need loader attention

## Phase 1: Hardening (Immediate)

### 1.1 Remove `continue-on-error` from build step

- [ ] Deploy webpack loader fix
- [ ] Run full build locally, verify 0 errors
- [ ] Remove `continue-on-error: true` from CI build step in `ci.yml`
- [ ] Monitor 3+ CI runs for green builds

### 1.2 Fix Dependabot PRs

- [ ] Investigate react 19.2.6 CI failure
- [ ] Investigate actions/upload-artifact v7 test-deploy failure
- [ ] Merge or close both PRs

### 1.3 Deploy IB and DSE

- [ ] Add Cloudflare DNS A/CNAME records for `ib.wyattau.com` and `dse.wyattau.com`
- [ ] Create `.github/workflows/deploy-ib.yml` and `deploy-dse.yml` (model on existing deploy
      workflows)
- [ ] Add IB/DSE to lighthouse monitoring workflow
- [ ] Update landing page links from GitHub to live URLs
- [ ] Update `academics.wyattau.com` redirect (currently dead-ends at `ib.wyattau.com`)

### 1.4 Trailing Whitespace Cleanup

- [ ] Run automated fix:
      `find docs -name '*.md' -o -name '*.mdx' | xargs sed -i 's/[[:space:]]*$//'`
- [ ] Commit as single cleanup PR
- [ ] Remove informational status from trailing whitespace check in pre-commit hook

## Phase 2: Content Quality

### 2.1 Depth Tier Completion

55 sections have stub depth tiers. Each needs meaningful content:

- [ ] Audit all 55 stub sections
- [ ] Prioritize by traffic (Algolia analytics) and syllabus importance
- [ ] Target: 30 sections filled within 30 days

### 2.2 Missing Intro Pages

Some sections lack `intro.md`:

- [ ] `docs/docs_languages/typescript/` — no intro.md
- [ ] `docs/docs_languages/dart/` — no intro.md
- [ ] Audit all 28 subjects for missing intro pages

### 2.3 Content Expansion

Sections with minimal content (< 5K lines) that could benefit from expansion:

- Probabilistic ML (1.7K) — significant for grad-level audience
- Licensing (1.1K) — could cover more license types
- Kotlin (3.6K) — missing advanced topics
- Go (4.8K) — missing standard library coverage

## Phase 3: Performance & Reliability

### 3.1 Build Performance

Current build time exceeds 5 minutes with `--max-old-space-size=8192`:

- [ ] Profile build bottleneck (MDX compilation vs. webpack bundling)
- [ ] Evaluate incremental builds for CI (cache Docusaurus build artifacts)
- [ ] Target: CI build under 3 minutes

### 3.2 Lighthouse Scores

- [ ] Establish baseline lighthouse scores for all 6 deployed sites
- [ ] Target: Performance > 90, Accessibility > 95, SEO > 95
- [ ] Fix any scores below threshold

### 3.3 Monitoring

- [ ] Set up uptime monitoring for all deployed sites
- [ ] Add alerting for build failures
- [ ] Track deploy success rate

## Phase 4: Feature Development

### 4.1 Search Improvements

- [ ] Evaluate Algolia click-through and conversion analytics
- [ ] Add search result relevance tuning based on popular queries
- [ ] Consider adding faceted search (by subject, exam board, difficulty)

### 4.2 User Experience

- [ ] Reading progress indicator (component exists, verify deployment)
- [ ] Dark mode polish (verify all diagrams render correctly)
- [ ] Mobile responsiveness audit
- [ ] Print stylesheet for offline study

### 4.3 Content Features

- [ ] Interactive components expansion (Desmos, GeoGebra, PhET)
- [ ] Practice problem sets with auto-grading
- [ ] Formula sheets / cheat sheets per subject
- [ ] Exam-style question banks

## Phase 5: Growth

### 5.1 New Content Areas

- [ ] SAT / ACT preparation notes
- [ ] Australian HSC / VCE
- [ ] German Abitur
- [ ] French Baccalaureate
- [ ]更多中文内容 (More Chinese-language content)

### 5.2 Community

- [ ] Contribution guide (CONTRIBUTING.md)
- [ ] Issue templates for content corrections
- [ ] PR review process for community submissions
- [ ] Recognition system for contributors

### 5.3 Monetization (Optional)

- [ ] Sponsorship via GitHub Sponsors or Open Collective
- [ ] Print-on-demand for popular subjects
- [ ] Tutoring referral program

## Appendix: Site Inventory

| Site           | Domain                           | Config                                    | Docs                            | Status                    |
| -------------- | -------------------------------- | ----------------------------------------- | ------------------------------- | ------------------------- |
| Main           | wyattsnotes.wyattau.com          | docusaurus.config.ts                      | infrastructure, tools           | Live                      |
| A-Level        | alevel.wyattau.com               | docusaurus.alevel.config.ts               | redirect → alevel-maths-physics | Live (redirect)           |
| A-Level MP     | alevel-maths-physics.wyattau.com | docusaurus.alevel-maths-physics.config.ts | alevel (MP split)               | Live                      |
| A-Level Sci    | alevel-sciences.wyattau.com      | docusaurus.alevel-sciences.config.ts      | alevel (sciences split)         | Live                      |
| Qualifications | qualifications.wyattau.com       | docusaurus.qualifications.config.ts       | gcse, ap, highers, ilc          | Live                      |
| Programming    | programming.wyattau.com          | docusaurus.programming.config.ts          | cpp, languages                  | Live                      |
| University     | university.wyattau.com           | docusaurus.university.config.ts           | university                      | Live                      |
| Academics      | academics.wyattau.com            | docusaurus.academics.config.ts            | redirect → ib.wyattau.com       | Live (dead redirect)      |
| IB             | ib.wyattau.com                   | docusaurus.ib.config.ts                   | ib                              | **Not deployed** (no DNS) |
| DSE            | dse.wyattau.com                  | docusaurus.dse.config.ts                  | dse                             | **Not deployed** (no DNS) |
