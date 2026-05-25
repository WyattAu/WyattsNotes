# Build Profiling (2026-05-25)

## Build Times

| Site | Config | Files | Lines | Build Time | Server | Client |
|------|--------|-------|-------|------------|--------|--------|
| Main | docusaurus.config.ts | 154 | 14K | 5m 01s | 1.6m | 4.8m |
| IB | docusaurus.ib.config.ts | 286 | 233K | 17s | ~8s | ~9s |

## Observations

1. **Main site is 17x slower than IB** despite having 16x fewer content lines.
2. Main site has more plugins: service-worker, image-zoom, panzoom, 2 docs plugins, blog.
3. IB has just 1 docs plugin.
4. Client compilation is the bottleneck (4.8m for main).
5. KaTeX warnings appear during build (6 instances of "comment has no terminating newline").

## Bottleneck Analysis

- Client webpack compile: 4.81m (96% of total time)
- Server webpack compile: 1.61m (32% of total time)
- These overlap, so total wall time is max(client, server) + overhead

## Recommendations

1. The main site includes 2 docs plugins (infrastructure + tools). Consider splitting into separate sites if build time becomes a concern.
2. Service worker plugin adds file scanning overhead but is necessary.
3. Image zoom and panzoom plugins add minimal overhead.
4. Docusaurus 3.10.1 is available (current: 3.10.0). Update may include performance improvements.
