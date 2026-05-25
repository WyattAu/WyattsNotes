# Lighthouse Baseline (2026-05-25)

Generated using Lighthouse with Chromium 148.0.7778.96 on Linux.

## Performance

| Site | Score | FCP | LCP | CLS | TBT | SI |
|------|-------|-----|-----|-----|-----|------|
| Main (wyattsnotes) | 77 | 2.4s | 3.1s | 0 | 550ms | 2.6s |
| IB | 86 | 2.4s | 3.0s | 0.001 | 240ms | 2.4s |
| DSE | ~86 | 2.9s | 3.8s | 0 | ~240ms | ~2.9s |
| A-Level MP | ~86 | 2.5s | 3.1s | 0.001 | ~240ms | ~2.5s |
| A-Level Sciences | ~86 | 2.5s | 3.0s | 0 | ~240ms | ~2.5s |
| Programming | 75 | 2.5s | 3.0s | 0.001 | 640ms | 2.5s |
| Qualifications | ~86 | 2.5s | 3.1s | 0 | ~240ms | ~2.5s |
| University | 88 | 2.4s | 3.0s | 0.001 | 190ms | 2.4s |

DSE/A-Level/Qualifications estimated from single-process run (perf=0, but FCP/LCP available).

## Accessibility: 96 (all sites)

## Best Practices: 92 (all sites)

## SEO: 100 (all sites)

## Action Items

1. **TBT on Main (550ms)**: Likely caused by large JS bundle. Investigate code splitting.
2. **TBT on Programming (640ms)**: Largest site by content. Same code splitting needed.
3. **FCP > 2s on all sites**: Consider preloading critical CSS, deferring non-critical JS.
4. **Best Practices 92**: Check what's causing the 8-point gap.
