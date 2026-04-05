---
title: GitHub Actions CI/CD Patterns
slug: github-actions-patterns
---

## What is GitHub Actions

GitHub Actions is an event-driven continuous integration and continuous deployment (CI/CD) platform
embedded directly into GitHub repositories. Workflows are defined as YAML files stored in
`.github/workflows/` and are triggered by repository events such as pushes, pull requests, issue
comments, scheduled cron expressions, and manual dispatches.

### Core Concepts

| Concept      | Description                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| **Workflow** | An automated process defined in a YAML file under `.github/workflows/`                                                   |
| **Event**    | A specific activity that triggers a workflow run (e.g., `push`, `pull_request`, `schedule`)                              |
| **Job**      | A set of steps executed on the same runner; jobs run in parallel unless linked with `needs`                              |
| **Step**     | An individual task within a job — either a `run` (shell command) or `uses` (action reference)                            |
| **Action**   | A reusable unit of code packaged for use in workflows, sourced from the Marketplace or custom                            |
| **Runner**   | The server that executes the workflow — GitHub-hosted (`ubuntu-latest`, `windows-latest`, `macos-latest`) or self-hosted |
| **Artifact** | A file or collection of files produced during a workflow run, persisted after the run completes                          |
| **Secret**   | An encrypted environment variable accessible only within the workflow context                                            |

### Runner Taxonomy

GitHub-hosted runners are ephemeral virtual machines provisioned per job and destroyed after
completion. They come in three operating system families:

| Runner identifier  | OS                  | Architecture | Notes                            |
| ------------------ | ------------------- | ------------ | -------------------------------- |
| `ubuntu-latest`    | Ubuntu 24.04 LTS    | x64          | Most common; fastest startup     |
| `ubuntu-24.04-arm` | Ubuntu 24.04        | arm64        | For ARM-native workloads         |
| `windows-latest`   | Windows Server 2022 | x64          | Uses PowerShell as default shell |
| `macos-latest`     | macOS 14 (Sonoma)   | arm64 (M1)   | 10× billing multiplier vs ubuntu |
| `macos-13`         | macOS Ventura       | x64          | Intel-based macOS                |

Self-hosted runners allow execution on custom infrastructure and are not subject to the 6-hour job
timeout or IP egress restrictions, but require the operator to manage security, isolation, and
cleanup.

### Actions Marketplace

The [Actions Marketplace](https://github.com/marketplace?type=actions) provides community-maintained
and official actions. First-party actions live under the `actions/` organization (e.g.,
`actions/checkout@v4`, `actions/cache@v4`, `actions/upload-artifact@v4`). Third-party actions should
be audited for supply-chain security before adoption.

---

## Basic Workflow Structure

Every workflow file begins with `name` and `on` (or `true` in some schemas) at the top level,
followed by `jobs`. Each job has an identifier, runs on a `runs-on` runner, and contains an ordered
list of `steps`.

### Minimal Anatomy

```yaml
name: CI Pipeline
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Run a shell command
        run: echo "Hello from $GITHUB_SHA"
```

### Step Anatomy

A step is either an action reference (`uses`) or a shell command (`run`). The two are mutually
exclusive within a single step.

| Key                 | Purpose                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| `name`              | Human-readable label displayed in the workflow run log                                     |
| `uses`              | Reference to an action (`owner/repo@ref` or `./local/path`)                                |
| `run`               | Shell command to execute; shell defaults to `bash` on Linux/macOS, `pwsh` on Windows       |
| `with`              | Input parameters passed to an `uses` action                                                |
| `env`               | Environment variables scoped to the step                                                   |
| `if`                | Conditional expression; step is skipped when the expression evaluates to `false`           |
| `id`                | Unique identifier so subsequent steps can reference outputs via `steps.&lt;id&gt;.outputs` |
| `timeout-minutes`   | Maximum time before the step is killed (overrides job-level timeout)                       |
| `continue-on-error` | If `true`, the workflow treats a failure in this step as a success                         |

### Environment Variables

Variables can be set at four levels of decreasing precedence: step-level `env`, job-level `env`,
workflow-level `env`, and runner-level environment.

```yaml
name: Environment Variables Demo
on: push

env:
  GLOBAL_VAR: 'set at workflow level'

jobs:
  demo:
    runs-on: ubuntu-latest
    env:
      JOB_VAR: 'set at job level'
    steps:
      - name: Step-level override
        env:
          STEP_VAR: 'set at step level'
        run: |
          echo "GLOBAL_VAR=$GLOBAL_VAR"
          echo "JOB_VAR=$JOB_VAR"
          echo "STEP_VAR=$STEP_VAR"
          echo "GITHUB_SHA=$GITHUB_SHA"
          echo "RUNNER_OS=$RUNNER_OS"
```

### Complete Lint-and-Test Example

```yaml
name: Lint and Test
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lint-and-test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: ['3.11', '3.12', '3.13']
    steps:
      - uses: actions/checkout@v4

      - name: Set up Python ${{ matrix.python-version }}
        uses: actions/setup-python@v5
        with:
          python-version: ${{ matrix.python-version }}

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements-dev.txt

      - name: Lint with ruff
        run: ruff check .

      - name: Type check with mypy
        run: mypy src/

      - name: Run tests
        run: pytest --cov=src --cov-report=xml --junitxml=test-results.xml

      - name: Upload coverage
        if: matrix.python-version == '3.13'
        uses: actions/upload-artifact@v4
        with:
          name: coverage-report
          path: coverage.xml
```

---

## Trigger Patterns

The `on` key defines what events activate the workflow. Triggers can be filtered by branch, tag,
path, file type, or event type.

### Push and Pull Request Triggers

```yaml
on:
  push:
    branches: [main, develop]
    tags: ['v*']

  pull_request:
    types: [opened, synchronize, reopened]
    branches: [main]
```

The `synchronize` type fires when the source branch of a pull request is updated (new commits
pushed). This is critical for ensuring that CI re-runs when additional commits are added.

### Path Filtering

Path filters limit execution to changes within specific directories or file patterns. A workflow
with `paths` triggers only when at least one modified file matches the filter.

```yaml
on:
  pull_request:
    paths:
      - 'src/**'
      - 'tests/**'
      - 'pyproject.toml'
      - 'requirements*.txt'

  push:
    paths-ignore:
      - '**.md'
      - 'docs/**'
      - '.github/workflows/docs.yml'
```

Path filtering operates on the **full diff** against the base ref. On a pull request, the base is
the target branch. On a push, the base is the previous commit on the same branch. For the first
commit on a new branch, all files are considered changed.

### Scheduled Triggers (Cron)

```yaml
on:
  schedule:
    - cron: '0 0 * * 1' # Every Monday at 00:00 UTC
    - cron: '0 6 * * 1-5' # Weekdays at 06:00 UTC
```

Cron syntax follows POSIX: `minute hour day-of-month month day-of-week`. GitHub Actions cron is not
guaranteed to run at the exact minute — scheduled workflows are queued and may be delayed under
heavy load. If a scheduled run is skipped due to infrastructure issues, GitHub does not re-schedule
it.

### Manual Dispatch

```yaml
on:
  workflow_dispatch:
    inputs:
      environment:
        description: 'Target environment'
        required: true
        default: 'staging'
        type: choice
        options:
          - staging
          - production
      debug:
        description: 'Enable debug logging'
        required: false
        type: boolean
        default: false
```

The `workflow_dispatch` event enables a "Run workflow" button in the GitHub Actions tab. Input
values are accessible via `${{ github.event.inputs.environment }}` (legacy) or
`${{ inputs.environment }}` (preferred in newer API versions).

### Repository Dispatch

```yaml
on:
  repository_dispatch:
    types: [deploy-trigger, rebuild-cache]
```

Repository dispatch allows one workflow to trigger another via the GitHub API
(`POST /repos/{owner}/{repo}/dispatches`). The receiving workflow filters on `types`. This is the
primary mechanism for cross-repository orchestration in monorepo setups.

### Trigger Combinations

Multiple events can be combined in a single workflow:

```yaml
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: '0 0 * * *'
  workflow_dispatch:
```

When combining `push` and `pull_request` triggers, use `${{ github.event_name }}` to differentiate
behavior at runtime.

---

## Job Dependencies

By default, all jobs in a workflow run in parallel. The `needs` keyword creates a directed acyclic
graph (DAG) of dependencies.

### Sequential Jobs

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Building..."

  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: echo "Testing..."
```

The `test` job only begins after `build` completes successfully.

### Fan-In Pattern

Multiple jobs can converge into a single downstream job:

```yaml
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Linting..."

  unit-test:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Unit tests..."

  integration-test:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Integration tests..."

  deploy:
    needs: [lint, unit-test, integration-test]
    runs-on: ubuntu-latest
    if: success()
    steps:
      - run: echo "Deploying..."
```

`deploy` waits for all three upstream jobs. If any upstream job fails, `deploy` is skipped by
default (implicit `if: success()`).

### Conditional Execution on Upstream Status

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - run: exit 1
        name: Simulate failure

  notify-on-failure:
    needs: build
    if: failure()
    runs-on: ubuntu-latest
    steps:
      - run: echo "Build failed, sending notification"

  always-run:
    needs: build
    if: always()
    runs-on: ubuntu-latest
    steps:
      - run: echo "This always runs"
```

| Condition function | Meaning                                   |
| ------------------ | ----------------------------------------- |
| `success()`        | All dependency jobs succeeded (default)   |
| `failure()`        | At least one dependency job failed        |
| `always()`         | Run regardless of dependency job outcomes |
| `cancelled()`      | The workflow was cancelled                |

### Concurrency Control

Concurrency groups ensure that only one workflow run (or job) proceeds at a time within a named
group. This is essential for preventing race conditions in deployment workflows.

```yaml
concurrency:
  group: deploy-${{ github.ref }}
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying to ${{ github.ref }}"
```

When a new run is triggered with the same concurrency group key, `cancel-in-progress: true` aborts
any in-progress run sharing that key. Setting it to `false` (the default) queues the new run until
the existing one completes.

For pull requests, use the PR number to scope concurrency:

```yaml
concurrency:
  group: ci-${{ github.event.pull_request.number }}
  cancel-in-progress: true
```

This ensures each PR gets its own concurrency slot, while pushes to the same branch are serialized.

---

## Caching

Caching intermediate build artifacts (dependencies, compiled objects) across workflow runs
dramatically reduces execution time. GitHub Actions provides the `actions/cache@v4` action for this
purpose.

### Cache Key Strategy

```yaml
- uses: actions/cache@v4
  with:
    path: ~/.cache/pip
    key: pip-${{ runner.os }}-${{ hashFiles('**/requirements*.txt') }}
    restore-keys: |
      pip-${{ runner.os }}-
      pip-
```

| Key component  | Purpose                                                |
| -------------- | ------------------------------------------------------ |
| `key`          | Primary cache key; exact match required                |
| `restore-keys` | Fallback prefix keys used when no exact match is found |
| `path`         | File or directory to cache                             |

Cache lookup proceeds as follows:

1. An exact match for `key` is sought. If found, the cache is restored and marked as a **cache
   hit**.
2. If no exact match, `restore-keys` are searched in order by most recent creation date. The first
   match is restored and marked as a **partial hit**.
3. If no match at all, no cache is restored (cache miss). A new cache entry is written at the end of
   the job using the `key`.

### Language-Specific Cache Patterns

**Python (pip):**

```yaml
- name: Cache pip
  uses: actions/cache@v4
  with:
    path: ~/.cache/pip
    key: ${{ runner.os }}-pip-${{ hashFiles('**/requirements*.txt') }}
    restore-keys: ${{ runner.os }}-pip-
```

**Python (uv):**

```yaml
- name: Cache uv
  uses: actions/cache@v4
  with:
    path: ~/.cache/uv
    key: ${{ runner.os }}-uv-${{ hashFiles('**/uv.lock') }}
```

**Node.js (npm):**

```yaml
- name: Cache npm
  uses: actions/cache@v4
  with:
    path: ~/.npm
    key: ${{ runner.os }}-npm-${{ hashFiles('**/package-lock.json') }}
    restore-keys: ${{ runner.os }}-npm-
```

**Rust (cargo):**

```yaml
- name: Cache cargo registry and build
  uses: actions/cache@v4
  with:
    path: |
      ~/.cargo/registry
      ~/.cargo/git
      target
    key: ${{ runner.os }}-cargo-${{ hashFiles('**/Cargo.lock') }}
    restore-keys: ${{ runner.os }}-cargo-
```

**Go (Go modules):**

```yaml
- name: Cache Go modules
  uses: actions/cache@v4
  with:
    path: |
      ~/go/pkg/mod
      ~/.cache/go-build
    key: ${{ runner.os }}-go-${{ hashFiles('**/go.sum') }}
    restore-keys: ${{ runner.os }}-go-
```

### Cache Invalidation

Caches are immutable once written. To invalidate, change the `key` — typically by bumping a version
prefix:

```yaml
key: v2-${{ runner.os }}-pip-${{ hashFiles('**/requirements*.txt') }}
```

GitHub evicts repository caches using a least-recently-used (LRU) policy when the total cache size
exceeds 10 GB. Branches can only access caches from the default branch or the same branch.

---

## Artifacts

Artifacts are persistent files produced during a workflow run. Unlike caches, artifacts are intended
for human consumption or cross-job data transfer and are retained after the run completes.

### Uploading Artifacts

```yaml
- name: Upload build output
  uses: actions/upload-artifact@v4
  with:
    name: build-artifacts
    path: dist/
    retention-days: 14
    if-no-files-found: error
    compression-level: 6
```

| Parameter           | Description                                             |
| ------------------- | ------------------------------------------------------- |
| `name`              | Artifact name (unique within the run)                   |
| `path`              | File or directory to upload; supports glob patterns     |
| `retention-days`    | Days to retain (default 90, max 90 on free plans)       |
| `if-no-files-found` | Behavior when no files match: `warn`, `error`, `ignore` |
| `compression-level` | 0 (none) to 9 (max); default 6                          |

### Downloading Artifacts

```yaml
- name: Download all artifacts
  uses: actions/download-artifact@v4
  with:
    path: all-artifacts/
    merge-multiple: true
```

To download a specific artifact:

```yaml
- name: Download build artifacts
  uses: actions/download-artifact@v4
  with:
    name: build-artifacts
    path: dist/
```

### Sharing Data Between Jobs

Artifacts are the primary mechanism for passing data between jobs (since each job runs on a fresh
runner):

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: make build
      - uses: actions/upload-artifact@v4
        with:
          name: binary
          path: bin/app

  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/download-artifact@v4
        with:
          name: binary
          path: bin/
      - run: ./bin/app --run-tests
```

### Artifact Size Limits

| Limit                           | Value                                 |
| ------------------------------- | ------------------------------------- |
| Single artifact max size        | 5 GB                                  |
| Total artifacts per run         | No hard cap (storage billing applies) |
| Max number of artifacts per run | 500                                   |

---

## Common CI Patterns

### Linting and Type Checking

Linting should be a fast, early gate in the pipeline. Run linters and type checkers in parallel when
possible.

**Python (ruff + mypy):**

```yaml
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.13'
      - run: pip install ruff mypy
      - run: ruff check --output-format=github .
      - run: ruff format --check .
      - run: mypy src/
```

**JavaScript/TypeScript (eslint):**

```yaml
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: npm
      - run: npm ci
      - run: npx eslint . --format github
```

The `--output-format=github` (ruff) and `--format github` (eslint) flags emit annotations that
GitHub renders inline in pull request diffs.

### Running Tests with Coverage

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.13'
      - run: pip install -e ".[dev]"
      - name: Run tests with coverage
        run: |
          pytest \
            --cov=src \
            --cov-report=term-missing \
            --cov-report=xml:coverage.xml \
            --junitxml=test-results.xml
      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v4
        with:
          files: coverage.xml
          fail_ci_if_error: true
```

### Security Scanning

```yaml
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Run Trivy vulnerability scanner
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          scan-ref: '.'
          severity: 'CRITICAL,HIGH'
          exit-code: 1

      - name: Python dependency audit
        run: |
          pip install pip-audit
          pip-audit -r requirements.txt

      - name: npm audit
        run: npm audit --audit-level=high
```

### Branch Protection Integration

Branch protection rules can require specific workflow jobs to pass before allowing a merge. To use
this:

1. Navigate to **Settings &gt; Branches &gt; Branch protection rules**
2. Select the target branch (e.g., `main`)
3. Enable **Require status checks to pass before merging**
4. Add the job names as required checks (e.g., `lint`, `test`, `security`)

Jobs must have unique names across the workflow for status checks to identify them correctly.

### Matrix Testing

Matrix strategies run a job multiple times with different variable combinations. This is the
standard approach for testing across language versions, operating systems, or dependency versions.

```yaml
jobs:
  test:
    runs-on: ${{ matrix.os }}
    strategy:
      fail-fast: false
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        python-version: ['3.11', '3.12', '3.13']
        exclude:
          - os: macos-latest
            python-version: '3.11'
        include:
          - os: ubuntu-latest
            python-version: '3.13'
            experimental: true
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: ${{ matrix.python-version }}
      - run: python --version
```

| Matrix option  | Purpose                                                           |
| -------------- | ----------------------------------------------------------------- |
| `fail-fast`    | If `true` (default), cancel all in-progress jobs on first failure |
| `exclude`      | Remove specific combinations from the matrix                      |
| `include`      | Add specific combinations to the matrix                           |
| `max-parallel` | Limit the number of concurrent matrix job runs                    |

---

## CD/Deployment Patterns

### Deploy to GitHub Pages

```yaml
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4

      - name: Build site
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: build/

      - name: Deploy to Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Docker Build and Push

```yaml
jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Log in to GitHub Container Registry
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ghcr.io/${{ github.repository }}
          tags: |
            type=ref,event=branch
            type=semver,pattern={{version}}
            type=sha

      - name: Build and push
        uses: docker/build-push-action@v6
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
          cache-from: type=gha
          cache-to: type=gha,mode=max
```

### Release Automation

```yaml
jobs:
  release:
    runs-on: ubuntu-latest
    if: startsWith(github.ref, 'refs/tags/v')
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4

      - name: Build distribution
        run: python -m build

      - name: Create GitHub Release
        uses: softprops/action-gh-release@v2
        with:
          generate_release_notes: true
          files: dist/*

      - name: Publish to PyPI
        uses: pypa/gh-action-pypi-publish@release/v1
        with:
          password: ${{ secrets.PYPI_API_TOKEN }}
```

### Blue-Green Deployment

Blue-green deployment maintains two identical production environments. At any time, one is active
("blue") and the other is idle ("green"). A new release deploys to the idle environment, and traffic
is switched atomically.

```yaml
jobs:
  deploy-green:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to green environment
        run: |
          aws s3 sync dist/ s3://app-green-${{ vars.ENVIRONMENT }}/
          echo "Deployed to green"

  switch-traffic:
    needs: deploy-green
    runs-on: ubuntu-latest
    steps:
      - name: Health check on green
        run: |
          curl --fail --retry 5 --retry-delay 10 \
            https://green.${{ vars.DOMAIN }}/healthz

      - name: Switch traffic to green
        run: |
          aws route53 change-resource-record-sets \
            --hosted-zone-id ${{ secrets.HOSTED_ZONE_ID }} \
            --change-batch '{
              "Changes": [{
                "Action": "UPSERT",
                "ResourceRecordSet": {
                  "Name": "app.${{ vars.DOMAIN }}",
                  "Type": "CNAME",
                  "TTL": 60,
                  "ResourceRecords": [{"Value": "green.${{ vars.DOMAIN }}"}]
                }
              }]
            }'
```

### Canary Deployment

Canary deployment routes a small percentage of traffic to the new version, monitors for errors, and
gradually increases traffic if metrics are healthy.

```yaml
jobs:
  deploy-canary:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy canary (5% traffic)
        run: |
          kubectl apply -f k8s/canary-deployment.yaml
          kubectl apply -f k8s/canary-service.yaml

  promote:
    needs: deploy-canary
    runs-on: ubuntu-latest
    steps:
      - name: Monitor error rate
        run: |
          sleep 300
          ERROR_RATE=$(curl -s "${{ vars.MONITORING_URL }}/error-rate" || echo "100")
          if (( $(echo "$ERROR_RATE > 1.0" | bc -l) )); then
            echo "Error rate too high: $ERROR_RATE%"
            kubectl delete -f k8s/canary-deployment.yaml
            exit 1
          fi

      - name: Promote canary to full rollout
        run: |
          kubectl apply -f k8s/production-deployment.yaml
          kubectl delete -f k8s/canary-deployment.yaml
```

---

## Reusable Workflows

Reusable workflows allow teams to centralize workflow logic in a single file and reference it from
multiple workflows, potentially across repositories.

### Calling a Reusable Workflow

```yaml
jobs:
  call-lint:
    uses: ./.github/workflows/reusable-lint.yml
    with:
      python-version: '3.13'
    secrets: inherit
```

### Defining a Reusable Workflow

```yaml
name: Reusable Lint Workflow
on:
  workflow_call:
    inputs:
      python-version:
        description: 'Python version to use'
        required: false
        type: string
        default: '3.13'
      fail-on-error:
        description: 'Fail the workflow on lint errors'
        required: false
        type: boolean
        default: true
    outputs:
      lint-result:
        description: 'Lint result status'
        value: ${{ jobs.lint.outputs.result }}
    secrets:
      optional-secret:
        description: 'An optional secret'
        required: false

jobs:
  lint:
    runs-on: ubuntu-latest
    outputs:
      result: ${{ steps.lint-step.outputs.exit_code }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: ${{ inputs.python-version }}
      - run: pip install ruff mypy
      - id: lint-step
        run: |
          ruff check . 2>&1 | tee lint-output.txt
          echo "exit_code=$?" >> $GITHUB_OUTPUT
```

### Cross-Repository Reusable Workflows

A workflow in repository `A` can call a reusable workflow in repository `B`:

```yaml
jobs:
  call-external:
    uses: my-org/shared-ci/.github/workflows/lint.yml@main
    with:
      python-version: '3.12'
    secrets: inherit
```

The calling repository must have access to the source repository, and the `secrets: inherit` keyword
passes all repository and organization secrets to the reusable workflow.

### Composite Actions

For reusable logic smaller than a full workflow, composite actions package multiple steps into a
single action defined by an `action.yml` file:

```yaml
name: 'Setup Python Environment'
description: 'Set up Python with caching'
inputs:
  python-version:
    description: 'Python version'
    required: true
runs:
  using: 'composite'
  steps:
    - uses: actions/setup-python@v5
      with:
        python-version: ${{ inputs.python-version }}
    - shell: bash
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements-dev.txt
```

Use in a workflow:

```yaml
steps:
  - uses: ./.github/actions/setup-python-env
    with:
      python-version: '3.13'
```

---

## Secrets Management

### GitHub Secrets

Secrets are encrypted environment variables stored at the repository, environment, or organization
level. They are decrypted and injected into the workflow runtime and are not exposed to forked
repository pull requests.

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy with secret
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        run: aws s3 sync dist/ s3://${{ vars.BUCKET_NAME }}/
```

### Secret Scoping

| Scope        | Visibility                           | Use case                                  |
| ------------ | ------------------------------------ | ----------------------------------------- |
| Repository   | All workflows in the repository      | Deploy credentials, API tokens            |
| Environment  | Workflows using that environment     | Per-environment secrets (staging vs prod) |
| Organization | All repositories in the organization | Shared SSO tokens, registry credentials   |

Environment-level secrets require the job to specify the `environment` key:

```yaml
jobs:
  deploy-prod:
    runs-on: ubuntu-latest
    environment:
      name: production
      url: https://app.example.com
    steps:
      - run: deploy --token ${{ secrets.PROD_API_KEY }}
```

### GITHUB_TOKEN

GitHub automatically provides a `GITHUB_TOKEN` secret on every workflow run. This is a short-lived
(job-scoped) token that authenticates API calls back to the repository.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
      - name: Push to registry
        run: |
          echo "${{ secrets.GITHUB_TOKEN }}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin
```

Default `GITHUB_TOKEN` permissions are read-only. To grant write access, declare `permissions` at
the workflow or job level:

| Permission      | Scope                                  |
| --------------- | -------------------------------------- |
| `contents`      | Repository content (commits, releases) |
| `pull-requests` | Pull request operations                |
| `issues`        | Issue operations                       |
| `packages`      | Container and package registry         |
| `id-token`      | OIDC token generation (for cloud auth) |
| `actions`       | Workflow operations                    |
| `pages`         | GitHub Pages deployment                |

### Variables vs Secrets

Variables (`vars`) are non-secret, plain-text configuration values stored alongside secrets. They
are appropriate for non-sensitive configuration such as deployment URLs, environment names, or
feature flags.

```yaml
env:
  DEPLOY_TARGET: ${{ vars.DEPLOY_TARGET }}
  API_ENDPOINT: ${{ vars.API_ENDPOINT }}
```

Variables are visible to anyone with read access to the repository, unlike secrets which are
write-only.

---

## Environment Protection Rules

Environment protection rules add governance gates that must be satisfied before a job targeting that
environment can proceed.

### Required Reviewers

```yaml
jobs:
  deploy-production:
    runs-on: ubuntu-latest
    environment:
      name: production
    steps:
      - run: echo "This waits for approval"
```

When configured, the workflow run pauses in a "waiting" state until at least one required reviewer
approves. Reviewers must have write access to the repository.

### Required Status Checks

Branch protection can require specific workflow jobs to pass. Combine this with environment
protection for defense-in-depth:

1. **Branch protection**: requires `test`, `lint`, and `security` jobs to pass
2. **Environment protection**: requires manual approval for the `production` environment

### Wait Timer

A wait timer introduces a mandatory delay between the workflow trigger and job execution:

- Configured in **Settings &gt; Environments &gt; [environment name] &gt; Protection rules**
- Range: 0 to 43,200 minutes (30 days)
- Use case: cool-down period before production deployments, allowing reviewers time to inspect
  changes

### Branch Restrictions

Deployment protection can be combined with branch restrictions to ensure only specific branches can
deploy to an environment:

1. **Settings &gt; Environments &gt; production &gt; Deployment branches and tags**
2. Select "Selected branches and tags" and choose the allowed branches (e.g., `main`, `release/*`)

### Deployment Protection with OIDC

GitHub Actions supports OIDC (OpenID Connect) for authentication to cloud providers without storing
long-lived credentials:

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - name: Configure AWS credentials via OIDC
        uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: ${{ secrets.AWS_ROLE_ARN }}
          role-session-name: github-actions-${{ github.run_id }}
          aws-region: us-east-1

      - name: Deploy
        run: aws s3 sync dist/ s3://my-bucket/
```

The OIDC exchange eliminates the need for `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` secrets
entirely, replacing them with a short-lived token scoped to the specific workflow run.

---

## Common Pitfalls

### Shell Quoting in YAML

Multiline `run` blocks in YAML are prone to quoting issues. The pipe (`|`) operator preserves
newlines and is the safest choice for multi-line scripts:

```yaml
# Correct: pipe preserves newlines
- run: |
    echo "line 1"
    echo "line 2"

# Dangerous: > folds newlines into spaces
- run: >
    echo "line 1" echo "line 2"

# Correct: single-line with explicit semicolons
- run: echo "step 1" && echo "step 2"
```

Embedding JSON inside YAML requires extra care with nested quotes. Use the `>` operator with
explicit escaping or pipe to a heredoc:

```yaml
- run: |
    curl -X POST https://api.example.com \
      -H "Content-Type: application/json" \
      -d '{"key": "value"}'
```

### Windows/Linux Path Differences

Windows uses backslash separators and drive letters (`C:\`). Linux/macOS use forward slashes (`/`).
Hardcoded paths break cross-platform workflows.

```yaml
# Fragile — breaks on Windows
- run: rm -rf build/

# Cross-platform using GitHub environment variables
- run: |
    echo "$HOME"               # Works on Linux/macOS
    echo "$USERPROFILE"        # Windows equivalent
    echo "$GITHUB_WORKSPACE"   # Works on all platforms
```

Use `actions/cache` and `actions/upload-artifact` path inputs, which handle path normalization
internally. Avoid constructing paths manually.

### GITHUB_TOKEN Permissions

The default `GITHUB_TOKEN` has read-only permissions. If a workflow needs to push commits, create
releases, or write to the package registry, permissions must be explicitly declared:

```yaml
# At the top level (applies to all jobs)
permissions:
  contents: write
  pull-requests: write

# Or per-job
jobs:
  release:
    runs-on: ubuntu-latest
    permissions:
      contents: write
```

On pull requests from **forked repositories**, the `GITHUB_TOKEN` is read-only and severely
restricted regardless of the permissions declaration. This is a security measure to prevent fork PRs
from exfiltrating secrets or modifying the upstream repository.

### Action Version Pinning

Pinning actions by tag (e.g., `@v4`) is convenient but vulnerable to supply-chain attacks if the tag
is moved. Pinning by commit SHA is the most secure approach:

```yaml
# Less secure: tag-based (mutable)
- uses: actions/checkout@v4

# Most secure: SHA-based (immutable)
- uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683
```

However, SHA-based pinning makes updates manual and opaque. A balanced approach uses dependabot to
automatically update action versions:

```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: 'github-actions'
    directory: '/'
    schedule:
      interval: 'weekly'
```

### Workflow Timeout

Jobs have a default timeout of 360 minutes (6 hours) on GitHub-hosted runners. Set an explicit
`timeout-minutes` at the job level to catch hung processes:

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    timeout-minutes: 30
    steps:
      - name: Run test suite
        timeout-minutes: 20
        run: pytest
```

### Runner Resource Limits

GitHub-hosted runners have finite resources:

| Resource       | Limit (2-core runner) | Limit (larger runners) |
| -------------- | --------------------- | ---------------------- |
| CPU            | 2 cores               | Up to 64 cores         |
| Memory         | 7 GB RAM              | Up to 512 GB RAM       |
| Disk (SSD)     | 14 GB free            | Up to 32 TB            |
| Network egress | ~250 Mbps             | Same                   |

Long-running builds that compile large codebases, run heavy test suites, or process large datasets
should consider self-hosted runners or larger runner types.

### Cost Management

GitHub Actions bills per minute of runner usage, with multipliers per OS:

| Runner  | Multiplier |
| ------- | ---------- |
| Linux   | 1×         |
| Windows | 2×         |
| macOS   | 10×        |

Cost optimization strategies:

- Use `paths` filters to avoid unnecessary workflow runs
- Use `concurrency` with `cancel-in-progress: true` to avoid redundant runs
- Cache dependencies aggressively to reduce build times
- Prefer Linux runners unless Windows/macOS is explicitly required
- Set `timeout-minutes` on every job to cap runaway costs
- Use `actions/cache@v4` instead of re-downloading dependencies on every run
- Evaluate whether a matrix strategy is testing combinations that provide diminishing returns

### Fork PR Workflows and Secrets

Pull requests from forks run in the context of the fork, which means:

- Repository secrets are **not** available (even with `secrets: inherit`)
- The `GITHUB_TOKEN` has read-only access to the upstream repository
- `write` permissions on `GITHUB_TOKEN` are silently downgraded to `read`

If a workflow must access secrets on fork PRs, use a separate workflow triggered by
`pull_request_target`, which runs in the context of the base repository. However, this introduces a
security risk: an untrusted fork can exfiltrate secrets by modifying the checked-out code. Always
pin the checkout ref explicitly:

```yaml
on:
  pull_request_target:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          ref: ${{ github.event.pull_request.head.sha }}
      # WARNING: running untrusted code with repository secrets
```

This pattern should only be used when the build step does not execute user-supplied code (e.g.,
building a container image from a Dockerfile without running it).

### Mutable Checkout Ref on pull_request_target

When using `pull_request_target`, the default checkout is the base branch, not the PR head. To check
out the PR head:

```yaml
- uses: actions/checkout@v4
  with:
    ref: ${{ github.event.pull_request.head.sha }}
    repository: ${{ github.event.pull_request.head.repo.full_name }}
```

This is safe only when the subsequent steps do not execute arbitrary code from the PR (e.g., running
a static analysis tool on the source code, not running the source code itself).
