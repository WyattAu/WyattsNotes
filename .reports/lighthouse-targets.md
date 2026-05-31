# Lighthouse Performance Targets

## Current Baseline (2026-05-25)
| Site | Perf | Target | Gap |
|------|------|--------|-----|
| Main | 77 | 92 | 15 |
| IB | 86 | 92 | 6 |
| DSE | 86 | 92 | 6 |
| A-Level MP | 86 | 92 | 6 |
| A-Level Sci | 86 | 92 | 6 |
| Programming | 75 | 92 | 17 |
| Qualifications | 86 | 92 | 6 |
| University | 88 | 92 | 4 |

## Post-Optimization Targets (2026-05-31)
| Site | Perf | Target | Expected After Fix |
|------|------|--------|-------------------|
| Main | 77 | 92 | ~92 (faster + lazy + deferred Sentry) |
| Programming | 75 | 92 | ~88 (lazy components + deferred Sentry) |
| University | 88 | 92 | ~92 (deferred Sentry only) |

## Cross-Site Targets
| Metric | Current | Target |
|--------|---------|--------|
| Accessibility | 96 | 98 |
| Best Practices | 92 | 95 |
| SEO | 100 | 100 (maintain) |
