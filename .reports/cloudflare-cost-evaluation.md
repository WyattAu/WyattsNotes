# Cloudflare Pages Cost Evaluation

> Generated 2026-05-30. WyattsNotes production deployment cost analysis.

---

## Current Usage

| Metric               | Value                              |
| --------------------- | ---------------------------------- |
| Total sites           | 11 (8 content, 1 redirect, 2 DNS pending) |
| Content files         | 1,370 (.md)                        |
| Total content lines   | ~1.06M                             |
| Deploy workflows      | 9 (path-triggered)                  |
| Algolia indices       | 8                                  |
| CI/CD workflows       | 13 total                           |
| JS bundle per site    | 593-645 KB                         |
| CSS bundle per site   | 552-556 KB                         |
| Estimated monthly builds | ~20-30 (well under limits)       |

### Per-Site Bandwidth Estimate

| Site           | Build Output (approx) | Est. Monthly Bandwidth |
| -------------- | --------------------- | ---------------------- |
| Main           | ~2 MB                 | ~2 GB                  |
| A-Level MP     | ~3 MB                 | ~3 GB                  |
| A-Level Sci    | ~3 MB                 | ~3 GB                  |
| Qualifications | ~2 MB                 | ~2 GB                  |
| Programming    | ~3 MB                 | ~3 GB                  |
| University     | ~2 MB                 | ~2 GB                  |
| IB             | ~3 MB                 | ~3 GB                  |
| DSE            | ~2 MB                 | ~2 GB                  |
| Academics      | <100 KB               | <100 MB                |
| A-Level        | <100 KB               | <100 MB                |
| **Total**      | **~20 MB**            | **~20 GB**             |

Bandwidth estimates are conservative. Static HTML + JS + CSS with aggressive CDN caching (Cache-Control headers on all static assets) means most requests are served from edge cache with minimal origin bandwidth usage.

---

## Cloudflare Pages Free Tier Limits

| Resource           | Free Tier Limit     | Current Usage       | Utilization |
| ------------------ | ------------------- | ------------------- | ----------- |
| Builds per month   | 500                 | ~20-30              | ~5%         |
| Bandwidth          | Unlimited           | ~20 GB (estimated)  | N/A         |
| Requests           | Unlimited           | Low traffic         | N/A         |
| File size          | 25 MB max per file  | <1 MB per file      | ~4%         |
| Sites              | Unlimited           | 11                  | N/A         |
| Custom domains     | Unlimited (CF DNS)  | 10 *.wyattau.com    | N/A         |
| Workers invocations| 100K/day            | 0 (static only)     | 0%          |
| Width units        | N/A (no Workers)    | 0                   | 0%          |

---

## Custom Domain Assessment

All 10 active domains use custom `*.wyattau.com` domains. Cloudflare Pages free tier supports custom domains when DNS is managed through Cloudflare DNS, which is itself free. No additional cost is incurred for custom domains.

---

## Current Tier Assessment

**Verdict: Free tier is sufficient.**

| Factor             | Analysis                                      |
| ------------------ | ---------------------------------------------- |
| Build count        | ~20-30/month, limit 500 — 5% utilization      |
| Bandwidth          | Static content, ~20 GB/month — unlimited on free |
| Requests           | Unlimited on free tier                         |
| File sizes        | All files <1 MB, limit 25 MB                  |
| Custom domains     | Free via Cloudflare DNS                        |
| Workers            | Not needed (pure static)                       |
| Analytics          | Cloudflare Web Analytics (free, privacy-respecting) sufficient |
| Edge caching       | Included in free tier                          |
| SSL/TLS           | Included in free tier                          |

No paid Cloudflare features are currently required.

---

## Risk Factors

What would force a transition to paid tiers:

### Build Limit Exceeded ($20/mo Pro plan)

- Current: ~20-30 builds/month
- Trigger: >500 builds/month
- Scenario: CI becomes noisy with frequent Dependabot/PR builds. Mitigation: path-based triggers already in place on all 9 deploy workflows, concurrency groups cancel redundant runs.
- Risk level: **Low**

### Workers Features Needed ($5+/mo)

- Current: 0 Worker invocations
- Trigger: Server-side logic (API routes, A/B testing, edge functions)
- Scenario: Adding dynamic features like search API, user auth, or personalization
- Risk level: **Low** (project is static-first by design)

### Advanced Analytics ($5+/mo)

- Current: Cloudflare Web Analytics (free)
- Trigger: Need Real User Monitoring (RUM), heatmaps, session replay
- Scenario: Need for detailed performance analytics beyond basic page views
- Risk level: **Low** (Cloudflare Web Analytics is adequate)

### R2 Storage ($0.015/GB/month + operations)

- Current: No R2 usage
- Trigger: User uploads, large file storage, generated PDFs
- Risk level: **None** currently

---

## Comparison with Alternatives

| Platform          | Cost     | Bandwidth  | Builds      | Custom Domains | Key Limitation            |
| ----------------- | -------- | ---------- | ----------- | -------------- | -------------------------- |
| **Cloudflare Pages** | **$0**  | **Unlimited** | 500/mo     | Unlimited      | 25 MB file limit           |
| Vercel Hobby      | $0       | 100 GB     | Unlimited   | 1 custom + 1 branch | 100 GB bandwidth cap   |
| Vercel Pro        | $20/mo   | 1 TB       | Unlimited   | Unlimited      | Overkill for static        |
| Netlify Starter   | $0       | 100 GB     | 300/mo      | Custom (paid)  | 300 build limit            |
| Netlify Pro       | $19/mo   | 400 GB     | Unlimited   | Unlimited      | Overkill for static        |
| GitHub Pages      | $0       | 100 GB     | Unlimited   | Custom (paid)  | Single site only, no redirects |
| AWS S3 + CloudFront | ~$5/mo | $0.09/GB  | N/A (custom) | CNAME + ACM cert | Manual CI, no builds       |

**Net savings vs Vercel Pro: $240/year**
**Net savings vs Netlify Pro: $228/year**

---

## Yearly Cost Projection

| Year | Expected Cost | Notes                                     |
| ---- | ------------- | ----------------------------------------- |
| 2026 | $0            | Free tier, ~20-30 builds/month           |
| 2027 | $0            | Free tier, possible content expansion     |
| 2028 | $0            | Free tier unless Workers needed           |

**3-year projected total: $0**

---

## Recommendations

1. **Stay on free tier.** All usage metrics are well within limits.
2. **Monitor build count monthly.** Alert at 400+ builds to avoid hitting 500 limit.
3. **Keep path-based triggers.** Already implemented on all 9 deploy workflows — prevents unnecessary builds.
4. **Maintain CDN cache headers.** Already configured — reduces origin bandwidth and improves performance.
5. **Use Cloudflare Web Analytics.** Already integrated (needs CLOUDFLARE_ANALYTICS_TOKEN secret) — adequate for traffic monitoring without paid analytics tools.
6. **Re-evaluate if Workers needed.** If dynamic features are added (search API, auth), cost model changes to $5+/mo for Workers.

---

*Addresses ROADMAP item 8.4.1: "Evaluate Cloudflare Pages usage and costs"*
