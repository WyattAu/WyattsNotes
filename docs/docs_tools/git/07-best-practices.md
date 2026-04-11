---
title: Best Practices
date: 2025-06-03T16:00:00.000Z
tags:
  - git
  - best-practices
  - configuration
categories:
  - CS
slug: best-practices
---

## Recommended Global Configuration

```bash
# Identity
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Default branch
git config --global init.defaultBranch main

# Pull strategy: rebase instead of merge (cleaner history)
git config --global pull.rebase true

# Rebase autosquash (for fixup workflow)
git config --global rebase.autoSquash true

# Default editor
git config --global core.editor "vim"

# Credential caching
git config --global credential.helper cache --timeout=3600

# Push: only push the current branch
git config --global push.default current

# Diff: use better diff algorithm
git config --global diff.algorithm histogram

# Rerere: remember conflict resolutions
git config --global rerere.enabled true
git config --global rerere.autoupdate true

# Transfer: optimize for large repos
git config --global core.compression 9
git config --global pack.threads 0

# Status: show submodule summary
git config --global status.submoduleSummary true

# Alias: common shortcuts
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.lg "log --oneline --graph --all"
git config --global alias.last "log -1 HEAD"
git config --global alias.unstage "restore --staged"
git config --global alias.amend "commit --amend --no-edit"
```

## Commit Discipline

### The Atomic Commit Principle

Each commit should represent **one logical change**. This means:

```bash
# Bad: one commit with unrelated changes
git add src/auth.c src/utils.c docs/README.md
git commit -m "Various improvements"

# Good: separate commits for each logical change
git add src/auth.c
git commit -m "feat(auth): add JWT token validation"

git add src/utils.c
git commit -m "fix(utils): handle null pointer in string_split"

git add docs/README.md
git commit -m "docs: update installation instructions"
```

### Why Atomic Commits Matter

| Reason                  | Explanation                                                             |
| ----------------------- | ----------------------------------------------------------------------- |
| **Bisectability**       | `git bisect` can pinpoint the exact commit that introduced a bug        |
| **Revertibility**       | `git revert <hash>` undoes one specific change without affecting others |
| **Reviewability**       | Reviewers can understand each change in isolation                       |
| **Cherry-picking**      | Individual fixes can be cherry-picked to release branches               |
| **History archaeology** | Future developers can understand _why_ each change was made             |

### Staging Partial Changes

Use `git add -p` to stage specific hunks of a file:

```bash
$ git add -p src/auth.c
# Stage this hunk [y,n,q,a,d,/,s,e,?]?
# y - stage this hunk
# n - do not stage this hunk
# s - split the hunk into smaller pieces
# e - manually edit the hunk
```

## `.gitignore` Best Practices

### What to Ignore

```gitignore
# Build artifacts
/build/
/dist/
*.o
*.so
*.dll
*.exe

# Dependencies
/node_modules/
/vendor/
.venv/

# IDE
.idea/
.vscode/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Environment
.env
.env.local
.env.*.local

# Secrets
*.pem
*.key
credentials.json
```

### What NOT to Ignore

- Configuration files that others need (`.eslintrc.json`, `tsconfig.json`).
- Lockfiles (`package-lock.json`, `yarn.lock`, `Cargo.lock`).
- `.gitignore` itself.

### Global `.gitignore`

For files that should be ignored in all repositories (OS-specific files, editor files):

```bash
# Configure a global gitignore
$ git config --global core.excludesfile ~/.gitignore_global

# ~/.gitignore_global
.DS_Store
Thumbs.db
*.swp
.vscode/
```

## Security

### Never Commit Secrets

Secrets (API keys, passwords, tokens) should **never** be committed to a Git repository, even in private repos:

```bash
# Use environment variables
export API_KEY="your-key-here"

# Or use a secrets manager
# - HashiCorp Vault
# - AWS Secrets Manager
# - .env files (gitignored)
```

### Scan for Committed Secrets

```bash
# Use git-secrets (AWS)
$ git secrets --install
$ git secrets --register-aws

# Use truffleHog (open source)
$ trufflehog git file://.git --only-verified
```

### Signed Commits

Sign commits with GPG or SSH to verify authorship:

```bash
# GPG signing
$ git config --global user.signingkey YOUR_GPG_KEY_ID
$ git config --global commit.gpgsign true

# SSH signing (Git 2.34+)
$ git config --global gpg.format ssh
$ git config --global user.signingkey ~/.ssh/id_ed25519.pub
$ git config --global commit.gpgsign true
```

## Performance

### For Large Repositories

```bash
# Partial clone (fetch only needed objects)
$ git clone --filter=blob:none https://github.com/user/large-repo.git

# Shallow clone (limited history)
$ git clone --depth=1 https://github.com/user/repo.git

# Sparse checkout (only specific directories)
$ git clone --sparse https://github.com/user/monorepo.git
$ cd monorepo
$ git sparse-checkout set src/packages/core

# File system monitoring (Git 2.36+)
$ git config core.fsmonitor true  # Uses watchman or fsmonitor-watchman
```

### Optimizing `git status`

```bash
# Enable untracked cache
$ git config core.untrackedCache true

# Enable fsmonitor for faster status (requires watchman)
$ git config core.fsmonitor true
```

## Working with Worktrees

`git worktree` allows you to have multiple working directories from the same repository, each on a different branch:

```bash
# Create a worktree for a feature branch
$ git worktree add ../feature-auth feature-auth

# Now you can work in both directories simultaneously
$ cd ../feature-auth
# ... make changes, commit ...
$ cd ../main-repo
# ... continue working on main ...
```

Use cases:

- Run long tests on one branch while developing on another.
- Compare two branches side-by-side in your IDE.
- Hotfix production while continuing feature work.

```bash
# List worktrees
$ git worktree list

# Remove a worktree
$ git worktree remove ../feature-auth
```

## Common Aliases

```bash
# Shortcuts
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status

# Enhanced log
git config --global alias.lg "log --oneline --graph --all --decorate"

# Show the last commit
git config --global alias.last "log -1 HEAD --stat"

# Diff staged changes
git config --global alias.dc "diff --cached"

# Unstage a file
git config --global alias.unstage "restore --staged"

# Amend without editing message
git config --global alias.amend "commit --amend --no-edit"

# Show which branches contain a commit
git config --global alias.contains "branch --contains"

# Quick stash with message
git config --global alias.save "stash push -m"
```
