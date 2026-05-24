# Incident Response Runbook

> Emergency procedures for the WyattsNotes Docusaurus monorepo.
> Covers deployment failures, site outages, security incidents, and content issues.

---

## Contacts

| Role | Resource |
|------|----------|
| Repository Owner | @WyattAu on GitHub |
| Hosting Provider | Cloudflare Pages Dashboard |
| DNS Provider | Cloudflare DNS |

---

## 1. Site Down (All Sites)

### Symptoms
- All `*.wyattau.com` sites return 5xx or timeout
- Uptime monitor triggers alerts

### Response (Target: < 15 min)

1. Check Cloudflare status: https://www.cloudflarestatus.com
2. Check GitHub Actions: `gh run list --workflow=CI --limit 5`
3. Check if DNS is resolving: `dig wyattsnotes.wyattau.com`
4. If Cloudflare outage: wait for resolution, no action needed
5. If deploy failure: see Section 2

### Rollback

```bash
# List recent Cloudflare deployments
wrangler pages deployment list --project-name wyattsnotes-main

# Rollback to previous deployment (Cloudflare Pages dashboard)
# Or re-deloy from last known good commit
git log --oneline -10  # Find last good commit
git checkout <commit>  # Checkout
# Manually trigger deploy workflow from that commit
```

---

## 2. Single Site Down

### Symptoms
- One sub-site returns 5xx, others fine
- Uptime monitor shows single site failure

### Response (Target: < 10 min)

1. Identify which site is affected
2. Check the corresponding deploy workflow:
   ```bash
   gh run list --workflow="Deploy <Site> to Cloudflare Pages" --limit 3
   ```
3. If deploy failed, check the logs:
   ```bash
   JOB_ID=$(gh run view <RUN_ID> --json jobs --jq '.jobs[0].databaseId')
   gh api repos/WyattAu/WyattsNotes/actions/jobs/$JOB_ID/logs
   ```
4. Common fixes:
   - Build OOM: increase `NODE_OPTIONS=--max-old-space-size` in workflow
   - Content error: fix the offending `.md` file
   - API token expired: rotate `CLOUDFLARE_API_TOKEN` secret

---

## 3. CI Pipeline Failure

### Symptoms
- Push to main fails CI checks
- Pull requests cannot merge

### Response (Target: < 30 min)

1. Check which job failed:
   ```bash
   CI_RUN=$(gh run list --workflow=CI --limit 1 --json databaseId --jq '.[0].databaseId')
   gh run view $CI_RUN
   ```

2. **Lint failure**: Run `pnpm lint` locally, fix errors
3. **Typecheck failure**: Run `NODE_OPTIONS='--max-old-space-size=2048' tsc --noEmit`
4. **Unit test failure**: Run `pnpm test` locally, fix failing tests
5. **Content validation**: Run `python3 scripts/validate-mdx.py` and `python3 scripts/check-links.py`
6. **Security audit**: Run `pnpm audit`, update vulnerable deps

### Emergency Bypass

```bash
# ONLY for non-code changes (docs, config comments)
git commit --no-verify -m "fix: description"
git push origin main
```

---

## 4. Security Incident

### Symptoms
- Vulnerability alert from GitHub Dependabot
- Suspicious activity in deployment logs
- CSP violation reports
- Supply chain attack notification

### Response (Target: < 1 hour)

#### Vulnerable Dependency

```bash
# Check what's vulnerable
pnpm audit
# Update the dependency
pnpm update <package>
# Verify fix
pnpm audit
git add pnpm-lock.yaml && git commit -m "security: update <package>"
```

#### Compromised Secret

1. Immediately rotate the secret in GitHub Settings > Secrets
2. If Cloudflare API token: regenerate in Cloudflare dashboard
3. If Algolia key: regenerate in Algolia dashboard
4. Update all workflow files that use the secret
5. Force-push to trigger new deployments

#### Supply Chain Attack (Dependency)

1. `echo "<package>" >> .pnpmfile.cjs` to block the package
2. Pin to last known good version in `pnpm.overrides`
3. Audit all code from the compromised package
4. Consider replacing with alternative

---

## 5. Content Emergency

### Symptoms
- Incorrect content live on site
- Offensive or dangerous content
- Copyright violation reported

### Response (Target: < 1 hour)

1. Fix the content in the source `.md` file
2. Push to main (triggers deploy)
3. If deploy is slow, use GitHub web editor for faster fix
4. For immediate takedown: remove file and push

---

## 6. Build Performance Degradation

### Symptoms
- Builds timing out (>10 min)
- OOM kills during build
- CI queue backing up

### Response

1. Check if content grew significantly:
   ```bash
   find docs -name "*.md" | wc -l
   ```
2. Check build heap size in deploy workflow
3. Increase heap tier if needed:
   - Small sites (< 100 files): 7 GB
   - Medium sites (100-200 files): 11 GB
   - Large sites (> 200 files): 14 GB
4. Consider splitting large doc sets

---

## 7. Disaster Recovery (Full Reconstruction)

### If repository is lost

1. Restore from GitHub (has backups)
2. Clone from any fork
3. Verify all branches present

### If all Cloudflare deployments are lost

1. Re-run all deploy workflows from main:
   ```bash
   for workflow in "Deploy Main Site" "Deploy IB" "Deploy DSE" \
     "Deploy A-Level Maths & Physics" "Deploy A-Level Sciences" \
     "Deploy Qualifications" "Deploy Programming" "Deploy University" \
     "Deploy Academics"; do
     gh workflow run "$workflow"
   done
   ```
2. Verify all sites return HTTP 200:
   ```bash
   for site in wyattsnotes ib dse alevel-maths-physics alevel-sciences \
     qualifications programming university academics; do
     curl -sI "https://$site.wyattau.com" | head -1
   done
   ```

### If Algolia indices are lost

1. Re-run the Algolia indexing workflow:
   ```bash
   gh workflow run "Index to Algolia"
   ```
2. Or run locally:
   ```bash
   ALGOLIA_APP_ID=SJ0ASLWZCS ALGOLIA_WRITE_KEY=<key> node scripts/index-algolia.js
   ```

---

## 8. Post-Incident Checklist

After resolving any incident:

- [ ] Document root cause in GitHub Issue
- [ ] Update this runbook if new failure mode discovered
- [ ] Add regression test if applicable
- [ ] Review monitoring/alerting thresholds
- [ ] Update ADR if architectural change needed
