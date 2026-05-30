# i18n Evaluation (2026-05-30)

Evaluation of internationalization (i18n) feasibility for the WyattsNotes multi-site architecture.

## 1. Current Architecture

WyattsNotes consists of 11 independent Docusaurus instances:

| Sub-site | Content Focus | Size Estimate |
|----------|--------------|----------------|
| IB | IB Diploma subjects | Large |
| DSE | HKDSE subjects | Medium |
| A-Level MP | A-Level Maths & Physics | Medium |
| A-Level Sciences | A-Level Biology, Chemistry | Medium |
| Programming | Programming tutorials | Large |
| Qualifications | Exam qualifications overview | Small |
| University | University application guides | Small |
| Main | Landing page / hub | Small |
| + 3 others | — | — |

Each site has its own `docusaurus.config.js`, `sidebar.js`, and content directory. Sites are deployed independently via separate GitHub Actions workflows.

## 2. Docusaurus i18n Support

Docusaurus provides built-in i18n via:

- **`i18n` config block** in `docusaurus.config.js` — defines `defaultLocale` and `locales` array
- **Locale folder structure** — `i18n/<locale>/docusaurus-plugin-content-docs/current/` for translated docs
- **JSON translation files** — `i18n/<locale>/docusaurus-plugin-content-pages/` for React component strings
- **`code.json`** — UI chrome strings (navbar, footer, search, theme toggle)
- **URL structure** — `/en/` (default) vs `/zh/` (translated), configurable via `localeConfigs`

Current Docusaurus version in use needs verification (`grep docusaurus package.json`).

## 3. Multi-Site i18n Challenges

Each sub-site is a separate Docusaurus instance, which means:

1. **Per-site configuration required** — `i18n` block must be added to each `docusaurus.config.js`
2. **Independent translation sets** — Content translations are not shared across sites
3. **Independent locale folders** — Each site maintains its own `i18n/` directory
4. **URL routing implications** — Each site gets its own locale-prefixed paths (e.g., `ib.wyattsnotes.com/zh/`)
5. **Search index per locale** — Algolia DocSearch needs separate indices per language per site
6. **Custom component strings** — DesmosGraph, CircuitBuilder, PracticeProblem, PeriodicTable all have hardcoded English strings that need extraction
7. **Math/Science notation** — LaTeX rendering is universal, but surrounding prose and labels need translation

## 4. Translation Pipeline Options

### 4.1 Manual (Community Contributions)

- Pros: Highest quality, free labor, community engagement
- Cons: Slow, inconsistent coverage, requires translation review process
- Setup: Crowdin or Transifex integration, or PR-based workflow with translation issue templates

### 4.2 AI-Assisted (DeepL/GPT)

- Pros: Fast initial pass, low cost, consistent terminology
- Cons: Technical math/science terms often mistranslated, no context awareness for educational content
- Setup: Script to batch-translate markdown files, then commit with review flag

### 4.3 Hybrid (AI Draft + Human Review)

- Pros: Balances speed and quality, review burden reduced
- Cons: Still requires reviewer availability, tooling overhead
- Setup: AI translates → PR auto-labeled `translation-review` → domain expert reviews → merge

**Recommendation: Hybrid approach.**

## 5. Recommended Approach

1. **Pilot site**: Start with **IB** (largest international audience) or **Qualifications** (smallest, quickest to iterate)
2. **First language**: **Chinese (ZH)** — largest non-English student base for IB content
3. **Steps**:
   1. Add `i18n` config to pilot site's `docusaurus.config.js`
   2. Extract custom component strings to `code.json` equivalents
   3. AI-translate existing markdown content to ZH
   4. Human review by ZH-speaking domain expert
   5. Deploy to a `/zh/` path on the pilot subdomain
   6. Monitor search index, broken links, and user feedback
   7. Document lessons learned, then replicate to other sites

## 6. Effort Estimate

| Task | Hours (per site, per language) |
|------|-------------------------------|
| i18n config setup | 4–8 |
| String extraction (custom components) | 8–16 |
| AI translation pipeline setup | 8–12 |
| AI translation (run time) | 2–4 |
| Human review | 16–32 |
| Testing and QA | 4–8 |
| **Total** | **42–80** |

For all 11 sites × 1 language: ~460–880 hours total. Phased rollout reduces upfront investment.

## 7. Infrastructure Requirements

- **Locale folders** — `i18n/zh/` per site with `docusaurus-plugin-content-docs`, `docusaurus-plugin-content-pages`, and `code.json`
- **Translation workflow** — Issue template for translation PRs, review labels, merge requirements
- **CI for translations** — Validate markdown structure after translation, check for broken links in locale builds
- **Custom component i18n** — Replace hardcoded strings in React components with `import {translate} from '@docusaurus/Translate'`
- **Algolia indices** — Separate index per locale per site (e.g., `wyattsnotes-ib-zh`)
- **Domain strategy** — Either path-based (`/zh/`) or subdomain-based (`zh.ib.wyattsnotes.com`)

## 8. Priority Languages

| Language | Code | Rationale | Priority |
|----------|------|-----------|----------|
| Chinese | zh | Largest non-English IB student population (China, HK, Singapore) | P0 |
| Spanish | es | Widespread globally, IB Diploma offered in Spanish | P1 |
| German | de | IB Diploma offered in German, strong European student base | P1 |
| French | fr | IB Diploma offered in French, bilingual Canadian market | P2 |
| Japanese | ja | Growing IB adoption in Japan | P3 |
| Hindi | hi | Large potential student base | P3 |
