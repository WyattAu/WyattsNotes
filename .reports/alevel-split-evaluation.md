# A-Level Doc Set Splitting Evaluation

Generated: 2026-05-30

## Current Structure

| Sub-site | Config File | Subjects | Deploy URL |
|---|---|---|---|
| A-Level MP | `docusaurus.alevel-maths-physics.config.ts` | maths, further-maths, physics | `alevel-maths-physics.wyattau.com` |
| A-Level Sciences | `docusaurus.alevel-sciences.config.ts` | biology, chemistry, CS, economics, psychology, geography, history, english | `alevel-sciences.wyattau.com` |

Both configs point `path` to `docs/docs_alevel` and use `include` filters to select subjects.

## File Counts Per Subject

| Subject | Files | Lines (md/mdx) | Sub-site |
|---|---|---|---|
| maths | 65 | ~36,856 | MP |
| further-maths | 32 | ~22,938 | MP |
| physics | 63 | ~30,582 | MP |
| **MP total** | **160** | **~90,376** | |
| biology | 20 | ~31,035 | Sciences |
| chemistry | 36 | ~26,569 | Sciences |
| computer-science | 43 | ~24,309 | Sciences |
| economics | 23 | ~20,526 | Sciences |
| psychology | 10 | ~3,983 | Sciences |
| geography | 11 | ~3,756 | Sciences |
| english | 9 | ~2,250 | Sciences |
| history | 8 | ~1,963 | Sciences |
| **Sciences total** | **160** | **~114,391** | |

## Build Size Comparison

- **MP sub-site**: ~90K lines — compact, fastest to build
- **Sciences sub-site**: ~114K lines — larger, but biology alone is 31K lines due to heavy image/diagram content
- **Combined would be**: ~205K lines — too large for a single Docusaurus build in CI

## Current Split Assessment

### Maths + Physics pairing: GOOD

**Pros:**
- Natural disciplinary pairing — heavy math overlap (mechanics, vectors, calculus)
- Students frequently take both; shared audience
- Balanced at ~90K lines — builds efficiently
- Further-maths fits logically here (maths extension)

**Cons:**
- None significant. This is the most natural grouping.

### Sciences grouping: ACCEPTABLE, but imbalanced

**Pros:**
- Keeps all remaining A-levels in one deployable unit
- Reduces number of sub-sites (2 vs potentially 5+)

**Cons:**
- Biology dominates at 31K lines, nearly as large as maths alone
- Humanities subjects (english, history, geography, psychology) are a poor fit under "Sciences" naming
- The `english`, `history`, `geography` subjects have very small file counts (8-11 files), suggesting early/incomplete content
- Economics and CS are STEM but not natural sciences — taxonomy mismatch

## Alternative Splits Considered

### Option A: Per-subject sub-sites (8-11 sites)

Would create: `alevel-maths`, `alevel-further-maths`, `alevel-physics`, `alevel-biology`, `alevel-chemistry`, `alevel-cs`, `alevel-economics`, `alevel-humanities`, etc.

- **Pros**: Each subject fully independent, parallel builds, single-subject deploy on change
- **Cons**: 10+ config files to maintain, navbar cross-linking explodes, Algolia index fragmentation, CI cost scales linearly

**Verdict**: Overkill for current content sizes. Only justified if individual subjects exceed ~80K lines.

### Option B: Three-way split (MP / Sciences / Humanities)

Split sciences into `alevel-sciences` (biology, chemistry) + `alevel-humanities` (english, history, geography, psychology, economics, CS).

- **Pros**: Better naming, more balanced sizes (~58K sciences, ~56K humanities)
- **Cons**: Economics/CS don't cleanly fit "humanities"; adds a third config to maintain; navbar linking more complex

**Verdict**: Marginal improvement. Not worth the maintenance cost.

### Option C: Current split (status quo)

Keep MP + Sciences as-is.

- **Pros**: Simplest, battle-tested, already deployed with working cross-links
- **Cons**: Sciences naming is misleading for non-science subjects

## Recommendation

**Keep the current split.** Rationale:

1. The MP grouping is optimal — no reason to change.
2. The Sciences grouping, while imperfectly named, keeps maintenance overhead low.
3. Content sizes are manageable for both sub-sites (90K and 114K lines).
4. If renaming is desired, consider changing "A-Level Sciences" to "A-Level Sciences & Humanities" or "A-Level Other Subjects" — but this is cosmetic only.
5. If any single subject within Sciences grows past ~60K lines, revisit splitting at that point.

The only actionable suggestion: rename the tagline/title in `docusaurus.alevel-sciences.config.ts` from "A-Level Biology, Chemistry, Computer Science, Economics & More" to something more inclusive, or rename the sub-site entirely. The current tagline already says "& More" which is a reasonable compromise.
