# Sentry Setup

Error monitoring and performance tracking for WyattsNotes.

## 1. Create Sentry Project

1. Go to [sentry.io](https://sentry.io) and sign in (or create an account).
2. Click **Projects** → **Create Project**.
3. Select **React** as the platform.
4. Name the project (e.g., `wyattsnotes-main`).
5. Set the alert frequency to match your needs (default is fine).
6. Click **Create Project**.

## 2. Get Your DSN

After creating the project, Sentry displays the **DSN** (Data Source Name) — a URL like:
```
https://examplePublicKey@o0.ingest.sentry.io/0
```
Copy this value.

## 3. Set GitHub Secret

1. Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**.
2. Click **New repository secret**.
3. Name: `SENTRY_DSN`
4. Value: paste your DSN from step 2.
5. Click **Add secret**.

## 4. Verify Error Tracking

The DSN is injected at build time via the deploy workflow environment variables. To verify:

1. Trigger a deploy to any site.
2. Open the deployed site in a browser.
3. Open DevTools console and run:
   ```js
   throw new Error('Sentry test error');
   ```
4. Check the Sentry project issues page — the error should appear within ~30 seconds.

## 5. Release Tracking

Releases are tagged automatically in the deploy workflow:
- The workflow sets `SENTRY_RELEASE` to the commit SHA.
- Sentry associates errors with that release.
- Source maps are uploaded during the build step (configured via `sentry-cli`).

## 6. Alert Rules

Configure notifications in Sentry:

1. Go to **Alerts** → **Create Alert**.
2. **Issue alerts**: Trigger when a new issue is created or an issue re-occurs.
3. **Metric alerts**: Trigger when error rate exceeds a threshold (e.g., >1% over 5 min).
4. Set up **Slack** integration:
   - Settings → Integrations → Slack → connect workspace.
   - Add alert rule to post to a channel (e.g., `#wyattsnotes-alerts`).
5. Set up **email** notifications for critical issues.

## 7. Performance Monitoring

1. In Sentry project settings, enable **Performance**.
2. Set the sample rate to `1.0` (100%) for all transactions during testing, then reduce to `0.1` (10%) for production.
3. Key transactions to monitor:
   - Page loads (FCP, LCP)
   - Client-side navigation (SPA route changes)
4. Set **performance alerts** for when transaction duration exceeds p95 threshold.

## Worked Examples

### Example 1: Verifying Error Tracking After Deployment
**Problem:** After deploying to production, confirm that Sentry is receiving errors correctly.
**Solution:** Open the deployed site in a browser, open DevTools console, and run:
```js
throw new Error('Sentry test error');
```
Check the Sentry project issues page within 30 seconds. If the error appears with the correct release tag (matching the commit SHA), the integration is working.

### Example 2: Setting Up a Slack Alert for New Issues
**Problem:** Configure Sentry to post to `#wyattsnotes-alerts` whenever a new issue is created.
**Solution:** In Sentry, go to Settings > Integrations > Slack and connect your workspace. Then create an Alert Rule: Alerts > Create Alert > Issue alerts > New issue > Action: Send notification to Slack > channel `#wyattsnotes-alerts`.

## Common Pitfalls

- **DSN stored in plaintext:** Never commit the DSN to the repository. Always store it as a GitHub Secret (`SENTRY_DSN`) and inject it at build time.
- **Performance sample rate too high in production:** A sample rate of 1.0 sends every transaction to Sentry, which can quickly exhaust your quota. Reduce to 0.1 (10%) for production deployments.
- **Missing source maps:** Without source maps, Sentry shows minified code in stack traces, making errors nearly impossible to debug. Ensure `sentry-cli` uploads source maps during the build step.
- **Alert fatigue from overly sensitive rules:** Set metric alert thresholds conservatively (e.g., >1% error rate over 5 minutes) to avoid flooding your notification channel with noise.

## Summary

Sentry provides error monitoring and performance tracking for WyattsNotes. Setup involves creating a project, storing the DSN as a GitHub Secret, and configuring alert rules. Source maps are uploaded at build time, and releases are tagged automatically via the deploy workflow. Performance monitoring should use a reduced sample rate in production.
