# Rollback Test Procedure

> Step-by-step procedure for testing Cloudflare Pages deployment rollback.
> Based on the incident response runbook in `.github/INCIDENT_RESPONSE.md`.

---

## Prerequisites

| Requirement | Verification |
|-------------|-------------|
| GitHub CLI (`gh`) installed and authenticated | `gh auth status` |
| Cloudflare API token with Pages deploy permissions | Stored in `CLOUDFLARE_API_TOKEN` |
| Wrangler CLI installed | `wrangler --version` |
| Test branch created from `main` | `git checkout -b test/rollback-YYYY-MM-DD` |
| All sites building successfully on `main` | `gh run list --workflow=CI --limit 1` shows green |
| Notepad/timing tool ready | Record start/end times per scenario |

```bash
# Setup test branch
git checkout main
git pull origin main
git checkout -b test/rollback-$(date +%Y-%m-%d)
```

---

## Test Scenario 1: Content Rollback

**Objective:** Verify reverting a commit with broken content restores the site.

### Step 1 — Introduce Broken Content

```bash
# Pick a visible page and break it
echo "# BROKEN TEST PAGE" > docs/docs_ib/test-rollback-broken.md
git add docs/docs_ib/test-rollback-broken.md
git commit -m "test: inject broken content for rollback test"
git push origin test/rollback-$(date +%Y-%m-%d)
```

### Step 2 — Verify Broken

```bash
# Wait for deploy to complete (check CI workflow)
gh run list --workflow="Deploy IB to Cloudflare Pages" --limit 1
# Once deployed, check the broken content is live
curl -s https://wyattsnotes-ib.wyattau.com/test-rollback-broken
# Expected: "BROKEN TEST PAGE" visible
```

Record: `[ ] Broken content confirmed live at ____`

### Step 3 — Revert and Verify Fix

```bash
git revert HEAD --no-edit
git push origin test/rollback-$(date +%Y-%m-%d)
# Wait for redeploy
gh run list --workflow="Deploy IB to Cloudflare Pages" --limit 1
curl -s -o /dev/null -w "%{http_code}" https://wyattsnotes-ib.wyattau.com/test-rollback-broken
# Expected: 404 (page removed)
```

Record: `[ ] Revert deployed, broken content gone at ____`

---

## Test Scenario 2: Config Rollback

**Objective:** Verify reverting a bad Docusaurus config restores the build.

### Step 1 — Introduce Broken Config

```bash
# Break a docusaurus config
sed -i 's/organizationName:/organizationName: BREAK/g' docusaurus.config.ts
git add docusaurus.config.ts
git commit -m "test: inject broken config for rollback test"
git push origin test/rollback-$(date +%Y-%m-%d)
```

### Step 2 — Verify Broken Build

```bash
gh run list --workflow=CI --limit 1
# Expected: build fails
# Verify site still serves last good deployment (Cloudflare Pages caches)
curl -s -o /dev/null -w "%{http_code}" https://wyattsnotes.wyattau.com
# Expected: 200 (cached good deploy still live)
```

Record: `[ ] Build failure confirmed, site still serves cached good deploy at ____`

### Step 3 — Revert and Verify Fix

```bash
git revert HEAD --no-edit
git push origin test/rollback-$(date +%Y-%m-%d)
gh run list --workflow=CI --limit 1
# Expected: build succeeds after revert
```

Record: `[ ] Config revert deployed successfully at ____`

---

## Test Scenario 3: Dependency Rollback

**Objective:** Verify reverting a breaking dependency update restores the build.

### Step 1 — Introduce Breaking Dependency

```bash
# Add a nonexistent or incompatible version of a dependency
pnpm add --save-dev left-pad@0.0.1 || true
# Or manually edit package.json with a bad version
git add package.json pnpm-lock.yaml
git commit -m "test: inject breaking dependency for rollback test"
git push origin test/rollback-$(date +%Y-%m-%d)
```

### Step 2 — Verify Broken

```bash
gh run list --workflow=CI --limit 1
# Expected: install or build fails
```

Record: `[ ] Dependency breakage confirmed at ____`

### Step 3 — Revert and Verify Fix

```bash
git revert HEAD --no-edit
git push origin test/rollback-$(date +%Y-%m-%d)
gh run list --workflow=CI --limit 1
# Expected: build succeeds with original lockfile
```

Record: `[ ] Dependency revert deployed successfully at ____`

---

## Test Scenario 4: Full Site Rollback via Cloudflare Dashboard

**Objective:** Verify redeploying a previous known-good version from Cloudflare.

### Step 1 — Find Last Known-Good Deployment

```bash
# List recent deployments
wrangler pages deployment list --project-name wyattsnotes-main
# Note the deployment ID of the last known-good version
```

Record last good deployment ID: `________________`

### Step 2 — Promote Previous Deployment

```bash
# Via Cloudflare Dashboard:
# 1. Go to Cloudflare Dashboard > Pages > wyattsnotes-main
# 2. Click "Deployments"
# 3. Find the known-good deployment
# 4. Click "..." > "Retry deployment" or use rollback
#
# Via API (alternative):
# curl -X POST "https://api.cloudflare.com/client/v4/accounts/$CF_ACCOUNT_ID/pages/projects/wyattsnotes-main/deployments/$DEPLOYMENT_ID/retry" \
#   -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"
```

### Step 3 — Verify Site Is Live

```bash
curl -s -o /dev/null -w "%{http_code}" https://wyattsnotes.wyattau.com
# Expected: 200
```

Record: `[ ] Full rollback via Cloudflare completed at ____`

---

## Test Scenario 5: Multi-Site Failure

**Objective:** Verify rollback when multiple sites are broken simultaneously.

### Step 1 — Break Multiple Sites

```bash
echo "# BROKEN" > docs/docs_ib/test-multi.md
echo "# BROKEN" > docs/docs_dse/test-multi.md
echo "# BROKEN" > docs/docs_university/test-multi.md
git add docs/
git commit -m "test: inject multi-site breakage for rollback test"
git push origin test/rollback-$(date +%Y-%m-%d)
```

### Step 2 — Verify All Affected

```bash
for site in ib dse university; do
  echo -n "$site: "
  curl -s -o /dev/null -w "%{http_code}" https://wyattsnotes-${site}.wyattau.com/test-multi
  echo
done
```

Record: `[ ] Multi-site breakage confirmed at ____`

### Step 3 — Revert All

```bash
git revert HEAD --no-edit
git push origin test/rollback-$(date +%Y-%m-%d)
# Monitor all deploy workflows
gh run list --limit 5
# Wait for all sites to redeploy
```

Record: `[ ] Multi-site revert deployed successfully at ____`

---

## Verification Checklist

Run after each scenario to confirm the site is fully healthy:

```bash
# HTTP status check
curl -s -o /dev/null -w "%{http_code}" https://wyattsnotes.wyattau.com
# Expected: 200

curl -s -o /dev/null -w "%{http_code}" https://wyattsnotes.wyattau.com/ib
# Expected: 200

# Correct content check
curl -s https://wyattsnotes.wyattau.com | grep -q "<title>"
# Expected: title tag present

# Search functionality
curl -s "https://wyattsnotes.wyattau.com/search" -o /dev/null -w "%{http_code}"
# Expected: 200

# No broken test artifacts
curl -s -o /dev/null -w "%{http_code}" https://wyattsnotes.wyattau.com/test-rollback-broken
# Expected: 404 (cleaned up)

# Console errors (manual browser check)
# Open DevTools on each site, check Console tab for errors
```

- [ ] All sites return HTTP 200
- [ ] Correct content on homepage
- [ ] Search loads without errors
- [ ] No test artifacts remain
- [ ] No console errors in browser
- [ ] Lighthouse score not degraded

---

## Expected Results

| Scenario | Target Recovery Time | Notes |
|----------|----------------------|-------|
| 1. Content Rollback | < 5 min | Single commit revert + deploy |
| 2. Config Rollback | < 5 min | Single commit revert + build + deploy |
| 3. Dependency Rollback | < 5 min | Single commit revert + install + build + deploy |
| 4. Full Site Rollback | < 3 min | Cloudflare dashboard rollback, no build needed |
| 5. Multi-Site Failure | < 10 min | Revert + parallel deploys |

**Total estimated drill time:** ~30 minutes for all scenarios.

---

## Documented Test Results

| Field | Value |
|-------|-------|
| Test Date | ________________________________ |
| Tester | ________________________________ |
| Branch Used | `test/rollback-________________` |
| Scenario 1 Result | Pass / Fail: ____ |
| Scenario 2 Result | Pass / Fail: ____ |
| Scenario 3 Result | Pass / Fail: ____ |
| Scenario 4 Result | Pass / Fail: ____ |
| Scenario 5 Result | Pass / Fail: ____ |
| Issues Found | ________________________________ |
| Follow-up Actions | ________________________________ |
