---
title: The pre-commit Framework
slug: pre-commit-framework
---

## What pre-commit Is

`pre-commit` is a Python-based framework for managing and executing Git hooks in a declarative,
reproducible way. It solves the fundamental problem with raw Git hooks: they are not tracked by Git,
not shared across contributors, and each developer must manually install and maintain them.

The framework provides:

- **A declarative configuration file** (`.pre-commit-config.yaml`) that defines which hooks run,
  when they run, and what files they target. This file is committed to the repository and shared
  with all contributors.
- **Isolated execution environments** — each hook runs in its own virtual environment or container,
  so hook dependencies never conflict with project dependencies or with each other.
- **A caching layer** — hooks skip files that have not changed since the last successful run, making
  incremental commits fast.
- **Language-agnostic hook support** — hooks can be written in any language: Python, Bash, Node.js,
  Go, Rust, or run inside Docker containers. The framework does not care what the hook is, only that
  it follows the contract (exit code 0 = pass, non-zero = fail).

The `pre-commit` framework is not the same as the `pre-commit` Git hook. The framework installs
itself as the `pre-commit` hook in `.git/hooks/` and then orchestrates all configured hooks from
there. One hook file delegates to many.

## Installation

### Installing the Framework

```bash
# Install via pip
$ pip install pre-commit

# Verify
$ pre-commit --version
pre-commit 3.7.1
```

### Installing Hooks into a Repository

Installation here means "install the pre-commit framework as the Git hook." This is what makes the
hooks actually fire on `git commit`:

```bash
# Install the pre-commit hook (fires on git commit)
$ pre-commit install
pre-commit installed at .git/hooks/pre-commit

# Install the pre-push hook (fires on git push)
$ pre-commit install --hook-type pre-push
pre-commit installed at .git/hooks/pre-push

# Install the commit-msg hook (fires after the message is written)
$ pre-commit install --hook-type commit-msg

# Install all configured hook types at once
$ pre-commit install --hook-type pre-commit
$ pre-commit install --hook-type pre-push
$ pre-commit install --hook-type commit-msg

# Install hooks into a specific hook directory (non-default)
$ pre-commit install --hook-type pre-commit --config .pre-commit-config-ci.yaml
```

### Uninstalling

```bash
# Uninstall the pre-commit hook
$ pre-commit uninstall
pre-commit uninstalled

# Uninstall a specific hook type
$ pre-commit uninstall --hook-type pre-push

# Uninstall all hook types
$ pre-commit uninstall --hook-type pre-commit
$ pre-commit uninstall --hook-type pre-push
$ pre-commit uninstall --hook-type commit-msg
```

### Bootstrap Script for New Contributors

Since `pre-commit install` is a local operation (it modifies `.git/hooks/`), new contributors must
run it after cloning. Document this in the README and optionally automate it:

```bash
# In your Makefile or Justfile
.PHONY: setup
setup:
    pip install pre-commit
pre-commit install --hook-type pre-commit --hook-type commit-msg
```

## Configuration File

The `.pre-commit-config.yaml` file is the single source of truth for all hooks. It lives at the
repository root and must be committed to version control.

### Top-Level Structure

```yaml
# .pre-commit-config.yaml
minimum_pre_commit_version: '3.0.0'

# Fail the entire run if any individual hook fails (default: true)
fail_fast: false

# Default file types to pass to hooks (overrides per-hook)
default_stages: [commit, push]

# Global exclude pattern (applies to all hooks)
exclude: '^vendor/'

# Global file pattern (applies to all hooks)
files: ''

repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.6.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer

  - repo: https://github.com/psf/black
    rev: 24.4.2
    hooks:
      - id: black

  - repo: local
    hooks:
      - id: my-hook
        name: My Custom Hook
        entry: ./scripts/my-hook.sh
        language: script
        files: '\.py$'
```

### The `repos` Array

Each entry in `repos` specifies a hook repository — a Git repository containing hook definitions.
The framework clones these repos (at the pinned `rev`) and reads their hook metadata.

### Per-Repo Fields

| Field   | Required | Description                                      |
| ------- | -------- | ------------------------------------------------ |
| `repo`  | Yes      | URL of the hook repository (HTTPS or local path) |
| `rev`   | Yes      | Git ref to checkout (tag, branch, or SHA)        |
| `hooks` | Yes      | Array of hook definitions from this repo         |

### Per-Hook Fields

| Field            | Required | Description                                                                  |
| ---------------- | -------- | ---------------------------------------------------------------------------- |
| `id`             | Yes      | Hook identifier (must match an entry in the repo's `.pre-commit-hooks.yaml`) |
| `name`           | No       | Human-readable name (defaults to `id`)                                       |
| `entry`          | No       | Command to run (for local hooks; remote hooks define this in their metadata) |
| `language`       | No       | Execution environment (`system`, `python`, `node`, `docker`, etc.)           |
| `files`          | No       | Regex pattern: only run on files matching this pattern                       |
| `exclude`        | No       | Regex pattern: skip files matching this pattern                              |
| `types`          | No       | Array of file types (e.g., `[python]`, `[text]`, `[json]`)                   |
| `types_or`       | No       | Array of file types (match if file is ANY type)                              |
| `exclude_types`  | No       | Array of file types to exclude                                               |
| `args`           | No       | Additional arguments passed to the hook entry point                          |
| `stages`         | No       | Array of stages: `[commit]`, `[push]`, `[commit-msg]`, `[manual]`            |
| `pass_filenames` | No       | Whether to pass filenames as arguments (default: `true`)                     |
| `always_run`     | No       | Run even when no files match (default: `false`)                              |
| `verbose`        | No       | Print more output (default: `false`)                                         |
| `log_file`       | No       | Write hook output to this file                                               |
| `require_serial` | No       | Do not run this hook in parallel with other hooks (default: `false`)         |

### File Type Matching

The `types` field uses Git's heuristics for file type detection. This is more reliable than regex
patterns for many common cases:

```yaml
hooks:
  - id: black
    types: [python]

  - id: eslint
    types_or: [javascript, jsx, ts, tsx]

  - id: shellcheck
    types: [shell]

  - id: check-json
    types: [json]
```

Common file types: `file`, `symlink`, `directory`, `text`, `binary`, `python`, `ruby`, `javascript`,
`jsx`, `typescript`, `tsx`, `shell`, `yaml`, `json`, `toml`, `xml`, `html`, `css`, `markdown`,
`dockerfile`, `c`, `cpp`, `go`, `rust`, `java`.

### Stages

Hooks can be gated to specific Git events:

```yaml
hooks:
  - id: trailing-whitespace
    stages: [commit]

  - id: eslint
    stages: [commit, push]

  - id: commitlint
    stages: [commit-msg]
```

The `commit-msg` stage receives the commit message file path as its argument instead of filenames.
This is how conventional commit validators work.

### Local Hooks

The special `repo: local` entry defines hooks that run directly on the host system without cloning
an external repository:

```yaml
repos:
  - repo: local
    hooks:
      - id: check-branch-name
        name: Enforce branch naming convention
        entry: bash -c '[[ "$#" == 0 ]] || echo "$1" | grep -qE "^(feat|fix|chore|docs)/.+"'
        language: system
        stages: [commit-msg]
        always_run: true
        pass_filenames: false

      - id: forbid-debug-statements
        name: Check for debug statements
        entry: 'grep -rnE "(breakpoint\(\)|import pdb|import ipdb|console\.log\()"'
        language: system
        types: [python, javascript]
```

## Built-in Hooks

The `pre-commit-hooks` repository (`https://github.com/pre-commit/pre-commit-hooks`) is maintained
by the pre-core team and provides the most widely-used hooks. Pin to a specific tag:

```yaml
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.6.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-yaml
      - id: check-json
      - id: check-toml
      - id: check-merge-conflict
      - id: check-added-large-files
      - id: detect-private-key
      - id: no-commit-to-branch
      - id: mixed-line-ending
```

### Reference Table

| Hook ID                                | What It Checks                                                | Auto-Fix? | Common Arguments                            |
| -------------------------------------- | ------------------------------------------------------------- | --------- | ------------------------------------------- |
| `trailing-whitespace`                  | Trailing whitespace on any line                               | Yes       |                                             |
| `end-of-file-fixer`                    | File ends with exactly one newline                            | Yes       |                                             |
| `check-yaml`                           | Valid YAML syntax (via `pyyaml`)                              | No        | `--unsafe` to allow custom tags             |
| `check-json`                           | Valid JSON syntax                                             | No        |                                             |
| `check-toml`                           | Valid TOML syntax                                             | No        |                                             |
| `check-merge-conflict`                 | Unresolved conflict markers (`<<<<<<<`, `=======`, `>>>>>>`)  | No        | `--assume-in-merge` to check outside merges |
| `check-added-large-files`              | Files exceeding size threshold                                | No        | `--maxkb=500` (default: 500KB)              |
| `detect-private-key`                   | PEM-encoded private key material in files                     | No        |                                             |
| `no-commit-to-branch`                  | Prevents commits to protected branches                        | No        | `--branch main --branch release/*`          |
| `mixed-line-ending`                    | Inconsistent line endings (LF vs CRLF)                        | Yes       | `--fix=lf` or `--fix=crlf`                  |
| `check-case-conflict`                  | Filename case collisions (problematic on case-insensitive FS) | No        |                                             |
| `check-executables-have-shebangs`      | Executable files must have a shebang line                     | No        |                                             |
| `check-shebang-scripts-are-executable` | Files with shebangs must be executable                        | No        |                                             |
| `check-byte-order-marker`              | Detects BOM in UTF-8 files                                    | No        |                                             |
| `check-docstring-first`                | Python files: docstring before code                           | No        |                                             |
| `debug-statements`                     | Python `import pdb`, `import ipdb`, `breakpoint()`            | No        |                                             |
| `destroyed-symlinks`                   | Symlinks that point to nothing                                | No        |                                             |
| `fix-byte-order-marker`                | Removes BOM from UTF-8 files                                  | Yes       |                                             |
| `fix-encoding-pragma`                  | Adds `# -*- coding: utf-8 -*-` to Python files if needed      | Yes       |                                             |
| `name-tests-test`                      | Python test files follow naming convention                    | No        | `--pytest` to only match pytest-style names |

### Practical Configuration

```yaml
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.6.0
    hooks:
      - id: trailing-whitespace
        exclude: '\.svg$'

      - id: end-of-file-fixer

      - id: check-yaml
        args: ['--unsafe']
        exclude: '^templates/.*\.yaml$'

      - id: check-json

      - id: check-toml

      - id: check-merge-conflict

      - id: check-added-large-files
        args: ['--maxkb=1024']

      - id: detect-private-key
        exclude: '^(tests/fixtures/|examples/)'

      - id: no-commit-to-branch
        args: ['--branch', 'main', '--branch', 'master', '--branch', 'release/v*']

      - id: mixed-line-ending
        args: ['--fix=lf']

      - id: check-case-conflict

      - id: check-executables-have-shebangs

      - id: check-shebang-scripts-are-executable
```

## Popular Third-Party Hooks

### Python

```yaml
repos:
  - repo: https://github.com/astral-sh/ruff-pre-commit
    rev: v0.5.0
    hooks:
      - id: ruff
        args: ['--fix']
      - id: ruff-format

  - repo: https://github.com/psf/black
    rev: 24.4.2
    hooks:
      - id: black

  - repo: https://github.com/pycqa/isort
    rev: 5.13.2
    hooks:
      - id: isort

  - repo: https://github.com/pycqa/flake8
    rev: 7.1.0
    hooks:
      - id: flake8

  - repo: https://github.com/pycqa/pylint
    rev: v3.2.3
    hooks:
      - id: pylint
```

**Ruff vs Black**: Ruff can replace both flake8 and black (via `ruff check --fix` and
`ruff format`). If you use Ruff, you do not need black or flake8 as separate hooks. Ruff is 10-100x
faster than both because it is written in Rust.

### JavaScript / TypeScript

```yaml
repos:
  - repo: https://github.com/pre-commit/mirrors-eslint
    rev: v9.5.0
    hooks:
      - id: eslint
        types: [javascript]
        args: ['--fix']

  - repo: https://github.com/pre-commit/mirrors-prettier
    rev: v4.0.0-alpha.8
    hooks:
      - id: prettier
        types_or: [javascript, jsx, ts, tsx, css, html, json, markdown, yaml]
```

**Note**: The `mirrors-*` repositories are maintained by the pre-commit team and provide pre-built
hooks for tools that do not natively support the pre-commit framework. For ESLint, you may also use
the npm-based approach with `language: node` and `additional_dependencies`.

### Shell Scripts

```yaml
repos:
  - repo: https://github.com/shellcheck-py/shellcheck-py
    rev: v0.10.0.1
    hooks:
      - id: shellcheck
```

### Dockerfiles

```yaml
repos:
  - repo: https://github.com/hadolint/hadolint
    rev: v2.12.0
    hooks:
      - id: hadolint-docker
        args: ['--ignore', 'DL3008']
```

### Secret Detection

```yaml
repos:
  - repo: https://github.com/gitleaks/gitleaks
    rev: v8.18.2
    hooks:
      - id: gitleaks
```

### Conventional Commits

```yaml
repos:
  - repo: https://github.com/compilerla/conventional-pre-commit
    rev: v3.1.0
    hooks:
      - id: conventional-pre-commit
        stages: [commit-msg]
```

This hook validates that commit messages follow the Conventional Commits specification
(`type(scope): description`). It reads the commit message from the file path provided in the
`commit-msg` stage.

### Terraform

```yaml
repos:
  - repo: https://github.com/antonbabenko/pre-commit-terraform
    rev: v1.88.0
    hooks:
      - id: terraform_fmt
      - id: terraform_validate
      - id: terraform_docs
      - id: tflint
```

### Go

```yaml
repos:
  - repo: https://github.com/dnephin/pre-commit-golang
    rev: v0.5.1
    hooks:
      - id: go-fmt
      - id: go-vet
      - id: go-build
      - id: go-mod-tidy
```

## Writing Custom Hooks

### The Hook Contract

A hook is any executable that:

1. Receives filenames as arguments (when `pass_filenames: true`, which is the default).
2. Reads from stdin if it needs to process piped content.
3. Exits with code 0 on success, non-zero on failure.
4. Prints diagnostics to stdout or stderr (stderr is preferred for error messages).

That is the entire contract. The framework does not care what language the hook is written in.

### Bash Hook

```bash
#!/usr/bin/env bash
# scripts/check-no-debug.sh
# Reject commits that contain debug statements

set -euo pipefail

if [ $# -eq 0 ]; then
    echo "No files to check."
    exit 0
fi

found=0

for file in "$@"; do
    if [ -f "$file" ]; then
        if grep -nE '(breakpoint\(\)|import pdb|import ipdb|binding\.pry)' "$file" >/dev/null 2>&1; then
            echo "ERROR: Debug statement found in $file:"
            grep -nE '(breakpoint\(\)|import pdb|import ipdb|binding\.pry)' "$file"
            found=1
        fi
    fi
done

if [ $found -eq 1 ]; then
    exit 1
fi

exit 0
```

Register it in the config:

```yaml
repos:
  - repo: local
    hooks:
      - id: check-no-debug
        name: Check for debug statements
        entry: scripts/check-no-debug.sh
        language: script
        files: '\.(py|rb)$'
```

The `language: script` type means the entry point is a script that will be executed directly. It
must be executable (`chmod +x`).

### Python Hook

```python
#!/usr/bin/env python3
# scripts/check_todo.py
"""Check that TODO comments reference a ticket number."""

import re
import subprocess
import sys

TODO_PATTERN = re.compile(r'TODO\(([^)]+)\)')
FILES_PATTERN = re.compile(r'\.(py|js|ts|go|rs)$')

def main():
    files = sys.argv[1:]
    errors = []

    for filepath in files:
        if not FILES_PATTERN.search(filepath):
            continue
        try:
            with open(filepath, 'r') as f:
                for lineno, line in enumerate(f, 1):
                    for match in TODO_PATTERN.finditer(line):
                        ticket = match.group(1)
                        if not re.match(r'^[A-Z]+-\d+$', ticket):
                            errors.append(
                                f"{filepath}:{lineno}: TODO without valid ticket: {ticket}"
                            )
        except (OSError, UnicodeDecodeError):
            continue

    if errors:
        for error in errors:
            print(f"ERROR: {error}", file=sys.stderr)
        return 1

    return 0

if __name__ == '__main__':
    sys.exit(main())
```

Register:

```yaml
repos:
  - repo: local
    hooks:
      - id: check-todo-ticket
        name: TODOs must reference a ticket
        entry: scripts/check_todo.py
        language: python
        files: '\.(py|js|ts|go|rs)$'
```

### System Language Hooks

The `language: system` type runs the entry command directly on the host. This is useful for tools
that are already installed globally:

```yaml
repos:
  - repo: local
    hooks:
      - id: check-makefile
        name: Validate Makefile syntax
        entry: make -n -f Makefile
        language: system
        files: '^Makefile$'
        pass_filenames: false

      - id: docker-compose-validate
        name: Validate docker-compose.yaml
        entry: docker-compose config --quiet
        language: system
        files: 'docker-compose.*\.ya?ml$'
        pass_filenames: false
```

### Docker-Based Hooks

For maximum isolation, run hooks inside Docker containers:

```yaml
repos:
  - repo: local
    hooks:
      - id: terraform-fmt
        name: Format Terraform files
        entry: terraform fmt -check -diff
        language: docker_image
        types: [hcl]
        pass_filenames: true
```

### Hook That Receives stdin

Some tools expect input on stdin rather than as file arguments. Use `pass_filenames: false` and pipe
content:

```yaml
repos:
  - repo: local
    hooks:
      - id: check-xml
        name: Validate XML files
        entry: bash -c 'for f in "$@"; do xmllint --noout "$f"; done' --
        language: system
        files: '\.xml$'
```

## Running Manually

### Basic Commands

```bash
# Run all hooks against all staged files
$ pre-commit run

# Run all hooks against all files in the repository
$ pre-commit run --all-files

# Run a specific hook
$ pre-commit run trailing-whitespace

# Run a specific hook against all files
$ pre-commit run black --all-files

# Run hooks on specific files
$ pre-commit run --files src/main.py src/utils.py

# Run hooks for a specific stage
$ pre-commit run --hook-stage commit
$ pre-commit run --hook-stage push

# Run with verbose output (shows which files are passed to each hook)
$ pre-commit run --verbose

# Run with colorized output (auto-detected on TTY, force with --color)
$ pre-commit run --color always
```

### Incremental Runs

By default, `pre-commit run` (without `--all-files`) only runs on files that have changed since the
last successful run. This is the caching layer. It uses a cache file stored in the hook's
environment to track which files have been checked:

```bash
# Clear the cache and force a full run
$ pre-commit run --all-files

# Clear cache for a specific hook
$ pre-commit run trailing-whitespace --all-files
```

### Running on Unstaged Changes

```bash
# Run on all tracked files that differ from HEAD
$ pre-commit run --all-files

# Run on files changed between two refs (useful in CI)
$ pre-commit run --from-ref origin/main --to-ref HEAD
```

### Updating Hook Environments

When you modify `.pre-commit-config.yaml` (add a new hook, change a version), the framework detects
the change and reinstalls affected hooks on the next run:

```bash
# Force reinstall all hook environments
$ pre-commit clean
$ pre-commit install --hook-types
$ pre-commit run --all-files
```

## CI Integration

### GitHub Actions

```yaml
name: pre-commit
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  pre-commit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'
      - name: Install pre-commit
        run: pip install pre-commit
      - name: Run pre-commit
        run: pre-commit run --all-files
```

### Caching Hook Environments

Each hook repository is cloned and installed into a virtual environment under
`~/.cache/pre-commit/`. In CI, this means every run re-downloads and re-installs all hook
dependencies. Cache this directory:

```yaml
jobs:
  pre-commit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'
      - name: Cache pre-commit environments
        uses: actions/cache@v4
        with:
          path: ~/.cache/pre-commit
          key: pre-commit-${{ runner.os }}-${{ hashFiles('.pre-commit-config.yaml') }}
          restore-keys: |
            pre-commit-${{ runner.os }}-
      - name: Install and run
        run: |
          pip install pre-commit
          pre-commit run --all-files
```

The cache key includes the hash of `.pre-commit-config.yaml` so that cache invalidation happens
automatically when the configuration changes.

### Pre-Commit.ci

[pre-commit.ci](https://pre-commit.ci) is a hosted service that runs pre-commit hooks on pull
requests. It is free for open-source repositories and handles caching, environment setup, and
automatic fixing. When a hook makes fixes (like `trailing-whitespace` or `black`), the service
creates a commit on the PR branch with those fixes.

Enable it by adding the repository to pre-commit.ci. No CI configuration changes are needed.

### Running in Docker

```dockerfile
FROM python:3.12-slim

WORKDIR /app
COPY .pre-commit-config.yaml .
RUN pip install pre-commit && pre-commit install --install-hooks

COPY . .
CMD ["pre-commit", "run", "--all-files"]
```

### GitLab CI

```yaml
pre-commit:
  stage: test
  image: python:3.12
  cache:
    paths:
      - ~/.cache/pre-commit
  before_script:
    - pip install pre-commit
  script:
    - pre-commit run --all-files
  rules:
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
```

## Autoupdate

### Updating Hook Versions

Hook repositories release new versions. The `autoupdate` command bumps the `rev` field in your
configuration to the latest release tag or commit:

```bash
# Update all repos to their latest tags
$ pre-commit autoupdate
Updating https://github.com/pre-commit/pre-commit-hooks ... v4.5.0 -> v4.6.0
Updating https://github.com/psf/black ... 24.2.0 -> 24.4.2
Updating https://github.com/astral-sh/ruff-pre-commit ... v0.4.0 -> v0.5.0

# Preview changes without modifying the file
$ pre-commit autoupdate --freeze
Updating https://github.com/pre-commit/pre-commit-hooks ... v4.5.0 -> v4.6.0 (frozen: fef79f2b...)
Updating https://github.com/psf/black ... 24.2.0 -> 24.4.2 (frozen: 3f6f6a1e...)

# Update only specific repos
$ pre-commit autoupdate --repo https://github.com/psf/black

# Update to the latest commit on the default branch (not a tag)
$ pre-commit autoupdate --bleeding-edge
```

### Pinning vs Floating Versions

The `rev` field can be a tag, a branch, or a SHA:

```yaml
# Pin to a release tag (recommended for production)
- repo: https://github.com/pre-commit/pre-commit-hooks
  rev: v4.6.0

# Pin to a specific commit (maximum reproducibility)
- repo: https://github.com/pre-commit/pre-commit-hooks
  rev: fef79f2b3a3f8f5e0c0d1e2f3a4b5c6d7e8f9a0b

# Float to a branch (latest on that branch, NOT recommended for production)
- repo: https://github.com/pre-commit/pre-commit-hooks
  rev: main
```

**Recommendation**: Pin to release tags. Tags are immutable (once published, they do not change), so
every contributor and CI run uses the exact same hook version. Branch references are mutable — the
commit at `main` today may differ from the commit at `main` tomorrow, leading to non-reproducible
behavior.

### Automating Autoupdate in CI

Run autoupdate periodically and create a PR with the changes:

```yaml
# .github/workflows/autoupdate.yml
name: Autoupdate pre-commit hooks
on:
  schedule:
    - cron: '0 0 * * 1' # Every Monday
  workflow_dispatch:

jobs:
  autoupdate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'
      - run: pip install pre-commit
      - run: pre-commit autoupdate
      - name: Create PR if changed
        run: |
          git diff --quiet .pre-commit-config.yaml && exit 0
          git config user.name "pre-commit autoupdate bot"
          git config user.email "bot@example.com"
          git checkout -b chore/autoupdate-hooks
          git add .pre-commit-config.yaml
          git commit -m "chore: autoupdate pre-commit hooks"
          git push origin chore/autoupdate-hooks
          gh pr create \
            --title "chore: autoupdate pre-commit hooks" \
            --body "Automated pre-commit hook version updates." \
            --base main
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Common Pitfalls

### Hooks Run on Staged Content, Not the Working Tree

This is the most common source of confusion. The `pre-commit` framework stages files internally
before running hooks. If you edit a file after staging it, the hook sees the **staged** version, not
your latest edit. Fix: run `git add` again after editing.

### The Framework Creates Isolated Virtual Environments

Each hook repository gets its own virtual environment under `~/.cache/pre-commit/`. If a hook
depends on a library that your project also uses, the versions may differ. This is by design — it
prevents hook dependencies from conflicting with project dependencies. If you need a hook to use
your project's environment, use `language: system` and manage dependencies yourself.

### First Run Is Slow

The first `pre-commit run` downloads and installs all hook environments. Subsequent runs use the
cache and are fast. In CI, use caching to avoid re-downloading on every build.

### Hooks Are Bypassable with `--no-verify`

```bash
$ git commit --no-verify -m "skip hooks"
```

This bypasses all hooks. The framework cannot prevent this — it is a fundamental limitation of
client-side hooks. If you need to enforce hook execution, run `pre-commit run --all-files` in CI. CI
is the enforcement layer; local hooks are the convenience layer.

### `--all-files` in CI Masks Incremental Issues

Running `pre-commit run --all-files` in CI checks every file, not just the changed ones. This is
correct for CI (you want to catch all issues), but it means a CI failure may be caused by a file
that was not modified in the PR. Use `--from-ref origin/main --to-ref HEAD` to limit CI checks to
changed files only.

### Mirror Repositories Can Be Outdated

The `mirrors-*` repositories (e.g., `pre-commit/mirrors-eslint`) are maintained by the pre-commit
community, not by the upstream tool authors. They may lag behind the latest release. Check the
mirror repo's release page and compare with the upstream release before pinning a version.

### Multiple Hooks Modifying the Same File

When two hooks both modify the same file (e.g., `black` reformats and `isort` reorders imports), the
order matters. If `isort` runs after `black`, it may reformat in a way that `black` would change.
The framework runs hooks in the order they appear in the configuration. Order your hooks so that the
last modifier is the one whose output is canonical:

```yaml
hooks:
  - id: isort # Run first
  - id: black # Run last (its output is canonical)
```

### `fail_fast: true` Hides Other Hook Failures

Setting `fail_fast: true` at the top level causes the framework to stop at the first failing hook.
This speeds up the feedback loop locally but means you only see one error at a time. Use
`fail_fast: false` (the default) in CI to see all failures in a single run.

### Local Hooks with `language: script` Require Executable Bit

Hooks using `language: script` must be executable. The framework will fail silently or with a
permission denied error:

```bash
$ chmod +x scripts/check-no-debug.sh
```

### The `exclude` Pattern Applies to the Full File Path

When you write `exclude: 'vendor/'`, it matches the full path relative to the repository root, not
just the filename. Use `^vendor/` to anchor to the start, or test your patterns with
`pre-commit run --verbose` to see which files are being passed to each hook.
