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
2. Set the sample rate to `1.0` (100%) for all transactions during testing, then reduce to `0.1`
   (10%) for production.
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

Check the Sentry project issues page within 30 seconds. If the error appears with the correct
release tag (matching the commit SHA), the integration is working.

### Example 2: Setting Up a Slack Alert for New Issues

**Problem:** Configure Sentry to post to `#wyattsnotes-alerts` whenever a new issue is created.
**Solution:** In Sentry, go to Settings > Integrations > Slack and connect your workspace. Then
create an Alert Rule: Alerts > Create Alert > Issue alerts > New issue > Action: Send notification
to Slack > channel `#wyattsnotes-alerts`.

## Common Pitfalls

- **DSN stored in plaintext:** Never commit the DSN to the repository. Always store it as a GitHub
  Secret (`SENTRY_DSN`) and inject it at build time.
- **Performance sample rate too high in production:** A sample rate of 1.0 sends every transaction
  to Sentry, which can quickly exhaust your quota. Reduce to 0.1 (10%) for production deployments.
- **Missing source maps:** Without source maps, Sentry shows minified code in stack traces, making
  errors nearly impossible to debug. Ensure `sentry-cli` uploads source maps during the build step.
- **Alert fatigue from overly sensitive rules:** Set metric alert thresholds conservatively
  (e.g., >1% error rate over 5 minutes) to avoid flooding your notification channel with noise.

## Environment Configuration

### Development vs Production

Use separate Sentry projects for development and production:

- **Development project**: DSN stored in a `.env.local` file (gitignored). Errors from `localhost`
  are routed here so they do not pollute production data. Set `environment: 'development'` in the
  Sentry init options.
- **Production project**: DSN stored as the `SENTRY_DSN` GitHub Secret. The deploy workflow injects
  it at build time. Set `environment: 'production'`.

This separation allows you to filter issues by environment and avoids counting local development
errors against production error budgets.

## Source Map Upload

Source maps must be uploaded to Sentry so that stack traces show original source code rather than
minified output.

1. Install `@sentry/cli` as a dev dependency.
2. Create an auth token at Sentry > Settings > Auth Tokens with `org:read`, `project:releases`, and
   `project:write` permissions.
3. Store the token as a GitHub Secret named `SENTRY_AUTH_TOKEN`.
4. In the build step of the deploy workflow, after the build completes but before deployment, run:

```bash
sentry-cli releases --org <org-slug> --project wyattsnotes-main \
  associate-commit <commit-sha> --release <commit-sha>
sentry-cli releases --org <org-slug> --project wyattsnotes-main \
  files <commit-sha> upload-sourcemaps ./build/static/js --url-prefix '~/static/js'
```

Replace `<org-slug>` with your Sentry organisation slug. The `--url-prefix` value must match the
path from which the browser serves the JS files so Sentry can resolve source maps against minified
filenames.

### Verifying Source Maps

After uploading, trigger a test error and check the Sentry issue. The stack trace should show file
names, line numbers, and code snippets from the original source, not from the bundled output. If you
still see minified code, verify the `--url-prefix` matches the deployed asset path.

## Release Tracking with Git Tags

The deploy workflow tags each release with the commit SHA. For more meaningful release names:

- Use git tags: set `SENTRY_RELEASE` to the git tag (e.g., `v1.2.0`) instead of the raw SHA.
- In the Sentry dashboard, go to Releases to see which release introduced each issue. The "Suspect
  Commits" feature highlights commits that correlate with error spikes.
- Set up commit tracking: `sentry-cli releases set-commits --auto <release-name>` to automatically
  associate all commits between the current and previous release tags.

## Sampling Rate Recommendations

| Context             | Transaction Sample Rate | Error Sample Rate |
| ------------------- | ----------------------- | ----------------- |
| Development         | 1.0 (100%)              | 1.0 (100%)        |
| Production          | 0.1 (10%)               | 1.0 (100%)        |
| High-traffic events | 0.01 (1%)               | 1.0 (100%)        |

Error sample rate should remain at 1.0 in all environments because errors are relatively infrequent
and all of them matter. Transaction sampling is where you control quota usage. Adjust the production
transaction rate based on your Sentry plan's quota and your typical monthly traffic.

## Team Access and Project Management

### Member Roles

Sentry supports granular roles within an organisation:

- **Member**: Can view and create issues, but cannot modify project settings.
- **Admin**: Can manage project settings, alert rules, and team membership.
- **Manager**: Can create teams and projects, manage billing.

Assign the minimum role required. For contractors or external collaborators, use the "Member" role
and restrict access to specific projects rather than giving organisation-wide access.

### Project Organisation

- Create separate projects for each deployable unit (e.g., `wyattsnotes-main`, `wyattsnotes-admin`).
- Use teams to group projects by function (e.g., `web-team`, `infra-team`).
- Apply consistent naming conventions for projects so they sort predictably in the dashboard.

## Summary

Sentry provides error monitoring and performance tracking for WyattsNotes. Setup involves creating a
project, storing the DSN as a GitHub Secret, and configuring alert rules. Source maps are uploaded
at build time, and releases are tagged automatically via the deploy workflow. Performance monitoring
should use a reduced sample rate in production. Use separate projects and DSNs for development and
production environments to keep error data clean.
