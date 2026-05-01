---
title: Sparse Checkout and Partial Clone
description:
  "Git sparse checkout and partial clone: restricting working directory contents and downloading only needed objects to optimise repository size and clone time."
slug: sparse-checkout-and-partial-clone
---

## The Problem

As repositories grow into monorepos containing hundreds of thousands of files, the cost of a full
clone becomes prohibitive. The problem manifests in three dimensions: **time**, **disk space**, and
**bandwidth**.

| Repository                 | Size (Full Clone) | Files | Build Time (Full Clone)             |
| -------------------------- | ----------------- | ----- | ----------------------------------- |
| Android (AOSP)             | 300+ GB           | 5M+   | N/A (not practical for individuals) |
| Chromium                   | 40+ GB            | 400K+ | 30+ min                             |
| Google (internal monorepo) | 80+ TB (shared)   | 1B+   | N/A                                 |
| Meta (Buck2)               | 70+ GB            | 500K+ | 20+ min                             |
| Microsoft (Windows)        | 300+ GB           | 4M+   | N/A                                 |

A frontend developer working on the Chromium monorepo does not need the `chrome/browser/`,
`chrome/test/`, or `third_party/ffmpeg/` directories. A backend developer does not need `ui/` or
`chrome/renderer/`. Yet a full `git clone` downloads every object in the repository regardless of
what the developer intends to work on.

This is where **sparse checkout** and **partial clone** come in. They are two complementary
mechanisms that solve different parts of the problem:

- **Sparse checkout**: Controls which directories are checked out into the working tree.
- **Partial clone**: Controls which objects are downloaded from the server.

They can be used independently or combined for maximum efficiency.

## Sparse Checkout

Sparse checkout allows you to check out only a subset of the repository's directories into your
working tree. The repository still contains all objects (commits, trees, blobs) — the working tree
is simply a filtered view of the tree at HEAD.

### Cone Mode (Default Since Git 2.37)

Cone mode is the modern and recommended approach. It works with directories (not file patterns) and
is significantly faster than non-cone mode because Git can use directory-based pathspec matching
instead of evaluating every pattern against every file.

```bash
# Initialize sparse checkout with cone mode (the default in Git 2.37+)
$ git sparse-checkout init --cone

# Set the directories you want to check out
$ git sparse-checkout set src/core src/utils docs

# Add more directories
$ git sparse-checkout add src/tests

# List the currently included directories
$ git sparse-checkout list
docs/
src/core/
src/tests/
src/utils/
```

After `git sparse-checkout init --cone`, the working tree is emptied except for the directories you
explicitly include. The `.git` directory retains all objects and refs — only the working tree is
filtered.

### How Cone Mode Works

Cone mode treats the specified directories as "root" directories. Everything under those directories
is included, and everything outside them is excluded. The matching is directory-level, not
file-level.

```
# After: git sparse-checkout set src/core docs
repo/
├── src/
│   ├── core/          # INCLUDED (matches)
│   │   ├── auth.c
│   │   └── config.c
│   ├── ui/            # EXCLUDED (not in cone)
│   └── tests/         # EXCLUDED (not in cone)
├── docs/              # INCLUDED (matches)
│   └── api.md
└── README.md          # EXCLUDED (not in cone)
```

Cone mode writes a simplified pattern file to `.git/info/sparse-checkout`:

```
# .git/info/sparse-checkout (cone mode)
/*
!/*/
/src/core/
/docs/
```

The `/*` and `!/*/` lines are the cone mode markers. Everything is excluded by default, then
specific directories are included.

### Non-Cone Mode (Legacy)

Non-cone mode accepts arbitrary gitignore-style patterns. It is slower because Git must evaluate
every file path against every pattern on every checkout operation. It is retained for backward
compatibility but should not be used for new projects.

```bash
# Initialize non-cone mode explicitly
$ git sparse-checkout init --no-cone

# Set arbitrary patterns (gitignore syntax)
$ git sparse-checkout set 'src/core/*' 'docs/*.md' '!docs/internal/*'

# .git/info/sparse-checkout (non-cone mode)
src/core/*
docs/*.md
!docs/internal/*
```

The performance difference between cone and non-cone mode is significant. On a repository with 500K
files, cone mode evaluates patterns in milliseconds. Non-cone mode with complex patterns can take
several seconds.

### Disabling Sparse Checkout

```bash
# Revert to a full working tree (check out everything)
$ git sparse-checkout disable

# The .git/info/sparse-checkout file is removed
# The working tree is repopulated with all files
```

### Sparse Checkout and Branch Switching

Sparse checkout is per-repository, not per-branch. When you switch branches, the same sparse
checkout rules apply. If a branch has files only in excluded directories, the working tree will
appear empty (but the branch switch succeeds silently).

```bash
$ git sparse-checkout set src/frontend
$ git switch main          # Works — shows only src/frontend/
$ git switch feature-api   # Works — shows only src/frontend/ (even if feature-api
                          # only changed files in src/backend/)
```

To see which files changed on a branch without expanding the sparse checkout:

```bash
# See what files differ between branches (works regardless of sparse checkout)
$ git diff main..feature-api --name-only
src/backend/api.c
src/backend/routes.c
```

### Reconfiguring Sparse Checkout

```bash
# Completely replace the directory list
$ git sparse-checkout set src/frontend src/shared

# Add directories incrementally
$ git sparse-checkout add src/backend

# Remove a directory (re-set without it)
$ git sparse-checkout set src/frontend src/shared
```

## Partial Clone

Partial clone is a server-side feature (requiring Git protocol v2) that allows the client to omit
certain objects during the initial clone. Instead of downloading all blobs (file contents), the
client downloads only the objects it needs and requests the rest on demand.

### Blobless Clone (--filter=blob:none)

The most common partial clone filter. Downloads all commits and tree objects but skips all blob
objects (file contents). When Git needs to read a file, it fetches the blob on demand.

```bash
# Clone without any file content (only metadata)
$ git clone --filter=blob:none https://github.com/org/monorepo.git
Cloning into 'monorepo'...
remote: Enumerating objects: 12345, done.
remote: Counting objects: 100% (12345/12345), done.
remote: Compressing objects: 100% (5000/5000), done.
Receiving objects: 100% (3000/3000), done.  # Much smaller!
```

The initial download includes all commit objects and tree objects (directory structures) but no file
content. When you run `git log`, `git diff`, `git status`, or `git show`, Git transparently fetches
the blobs it needs:

```bash
$ git log --oneline
# Works immediately — commit objects are local

$ git show HEAD:src/main.c
# Triggers a fetch of the blob for src/main.c at HEAD
# Future reads of this blob are cached locally

$ git diff HEAD~1 HEAD
# Fetches all blobs that differ between the two commits
```

### Treeless Clone (--filter=tree:0)

An even more aggressive filter that also omits tree objects. The client only has commit objects
initially. Trees and blobs are fetched on demand.

```bash
# Clone with only commits (no trees, no blobs)
$ git clone --filter=tree:0 https://github.com/org/monorepo.git
```

This is useful for tools that only need commit metadata (e.g., analyzing commit history, generating
changelogs). It is not suitable for active development because even `git status` requires tree
objects.

### How Partial Clone Works Internally

When you create a partial clone, Git writes the filter configuration to `.git/config`:

```bash
# .git/config
[core]
    repositoryformatversion = 0
    filemode = true
    bare = false
    logallrefupdates = true
[remote "origin"]
    url = https://github.com/org/monorepo.git
    fetch = +refs/heads/*:refs/remotes/origin/*
[extensions]
    partialClone = origin
[filter "blob:none"]
    ...
```

The `extensions.partialClone = origin` line tells Git that the `origin` remote supports lazy
fetching. When Git encounters a missing object, it checks whether a promisor remote exists, and if
so, fetches the object from that remote.

### Fetching with Filters

You can apply filters to individual `git fetch` operations, not just the initial clone:

```bash
# Fetch new commits without their blobs
$ git fetch --filter=blob:none origin

# Fetch a specific branch without blobs
$ git fetch --filter=blob:none origin feature-branch

# This is useful for updating a partial clone without downloading
# the content of files you don't need
```

## Sparse Checkout vs Partial Clone

These two features solve different problems and can be used independently or together.

| Aspect                  | Sparse Checkout                     | Partial Clone                                  |
| ----------------------- | ----------------------------------- | ---------------------------------------------- |
| What it controls        | Working tree contents               | Object database contents                       |
| What is downloaded      | All objects (commits, trees, blobs) | Only specified objects (e.g., no blobs)        |
| What is checked out     | Only specified directories          | Everything (or combined with sparse checkout)  |
| Disk usage              | Lower working tree size             | Lower `.git` object store size                 |
| Network usage           | Full download                       | Partial download (fetch on demand)             |
| Requires server support | No (client-side only)               | Yes (Git protocol v2)                          |
| Offline behavior        | Full (all objects are local)        | Limited (missing objects cause fetch failures) |

### Sparse Checkout Only

You download every object but only check out certain directories:

```bash
$ git clone https://github.com/org/monorepo.git
$ cd monorepo
$ git sparse-checkout init --cone
$ git sparse-checkout set src/frontend
# .git/objects/ is 40GB (full repo)
# Working tree is 200MB (only src/frontend/)
```

This is useful when you want full access to all history and `git grep` across the entire codebase,
but only need a small subset checked out for editing.

### Partial Clone Only

You download only some objects but check out everything that was downloaded:

```bash
$ git clone --filter=blob:none https://github.com/org/monorepo.git
$ cd monorepo
# .git/objects/ is 2GB (commits + trees, no blobs)
# Working tree is full (but files are empty until accessed)
```

This is useful when you need to browse the full directory structure and access files on demand.

## Combining Sparse Checkout + Partial Clone

The optimal approach for monorepo development is to combine both. This gives you the smallest
possible initial clone and working tree:

```bash
# Step 1: Clone with partial (no blobs) + sparse (empty working tree)
$ git clone --filter=blob:none --sparse https://github.com/org/monorepo.git
$ cd monorepo

# Step 2: Initialize cone-mode sparse checkout
$ git sparse-checkout init --cone

# Step 3: Specify the directories you need
$ git sparse-checkout set src/frontend docs

# Result:
# - .git/objects/ contains commits + trees (no blobs) — ~2GB
# - Working tree contains only src/frontend/ and docs/ — ~200MB
# - Total disk usage: ~2.2GB instead of ~40GB
# - Initial clone time: ~30 seconds instead of ~30 minutes
```

When you access files in the included directories, Git fetches their blobs on demand. Files in
excluded directories are never fetched:

```bash
$ cat src/frontend/main.ts
# First access: fetches the blob for main.ts from the remote
# Subsequent reads: uses cached blob

$ cat src/backend/api.ts
# Error: this file is in an excluded directory
# (it may not exist in the working tree at all)
```

To expand the working set later:

```bash
# Add a new directory
$ git sparse-checkout add src/backend

# The working tree now includes src/backend/
# Blobs for files in src/backend/ are fetched on demand
```

## Promisor Objects

A **promisor object** is an object that Git knows exists (because it saw a reference to it in a tree
or commit) but has not yet downloaded. It is a placeholder that promises the object can be fetched
from a promisor remote.

### How Promisor Objects Work

When you do a partial clone with `--filter=blob:none`, Git downloads all tree objects. Each tree
entry points to either a subtree or a blob. The blob SHAs are recorded locally, but the blob content
is not downloaded. These blob SHAs are promisor objects.

```bash
# In a partial clone, you can see that an object exists but is missing:
$ git cat-file -t abc1234
blob

$ git cat-file -p abc1234
fatal: bad object abc1234

# The object exists (cat-file -t succeeds because the tree records its type)
# but its content is missing (cat-file -p fails because the blob hasn't been fetched)
```

Git transparently fetches promisor objects when they are needed:

```bash
$ git log -p HEAD~1..HEAD
# Git needs the blobs to show the diff
# It automatically fetches the required blobs from the promisor remote
```

### Fetching Promisor Objects

You can manually fetch missing objects:

```bash
# Fetch all missing objects for the current HEAD
$ git fetch origin --all

# Fetch missing objects for a specific commit
$ git fetch origin <commit-sha>

# Fetch missing objects for a specific path
$ git fetch origin -- path/to/file.c
```

### Checking for Unresolved Promisors

```bash
# Check for unresolved promisor objects
$ git fsck --no-reflogs 2>&1 | grep "missing"
# If you see "missing blob <sha>", those blobs are unresolved promisors

# Fetch all missing objects
$ git fetch origin --all --prune
```

### The extensions.partialClone Config

```bash
# View the current promisor remote
$ git config extensions.partialClone
origin

# This is set automatically by git clone --filter=...
# It tells Git which remote to contact for lazy fetching
```

If you delete this config, Git will not attempt to lazy-fetch missing objects, and any operation
that needs a missing object will fail with "bad object."

## Shallow Clones vs Partial Clones

Shallow clones (`--depth`) and partial clones (`--filter`) are often confused because both reduce
the initial download size. They solve different problems.

### Shallow Clones (--depth)

A shallow clone limits the **commit history depth**. You get the latest commits but no ancestral
history.

```bash
# Shallow clone: only the most recent commit
$ git clone --depth=1 https://github.com/user/repo.git

# Shallow clone: the 5 most recent commits
$ git clone --depth=5 https://github.com/user/repo.git

# Deepen a shallow clone later
$ git fetch --deepen=10
# or unshallow completely:
$ git fetch --unshallow
```

A shallow clone with `--depth=1` downloads:

- 1 commit object
- 1 tree object (for the tip)
- All blob objects for that tree (full file contents)

So a shallow clone saves history but downloads all file content. A partial clone with
`--filter=blob:none` downloads all history but no file content. They are orthogonal.

### Comparison

| Feature                   | Shallow Clone (`--depth=1`)                         | Partial Clone (`--filter=blob:none`) |
| ------------------------- | --------------------------------------------------- | ------------------------------------ |
| What is omitted           | Ancestral commits                                   | File contents (blobs)                |
| Commit history available  | No (only tip)                                       | Yes (all commits)                    |
| File contents available   | Yes (all files at tip)                              | On demand (fetched when accessed)    |
| Can be deepened           | Yes (`git fetch --unshallow`)                       | Yes (objects fetched on demand)      |
| Can create branches       | Limited (cannot rebase onto history you don't have) | Yes (full history available)         |
| Can contribute (push PRs) | Limited                                             | Yes                                  |
| Git log across history    | No                                                  | Yes                                  |
| Git bisect                | No (not enough history)                             | Yes                                  |
| Server requirements       | None (works with any Git server)                    | Protocol v2                          |
| Best for                  | CI/CD checkouts, one-off scripts                    | Long-lived development, monorepos    |

### Combining Shallow + Partial

You can combine both for maximum space savings:

```bash
# Shallow + blobless: minimal clone for CI/CD
$ git clone --depth=1 --filter=blob:none https://github.com/org/repo.git

# This downloads: 1 commit + 1 tree = very small
# File contents are fetched on demand
# History is not available (only 1 commit)
```

This is useful in CI/CD where you only need to run a build or test and do not need history or most
file contents.

## Server-Side Requirements

Partial clone requires **Git protocol v2** support on the server. Specifically, the server must
support the `filter` capability, which allows the client to request object filtering during `fetch`
and `clone`.

### Hosting Platform Support

| Platform                  | Partial Clone Support | Protocol v2 Default | Notes                                                         |
| ------------------------- | --------------------- | ------------------- | ------------------------------------------------------------- |
| GitHub.com                | Yes (since 2020)      | Yes                 | `--filter=blob:none` and `--filter=tree:0` supported          |
| GitHub Enterprise         | Yes (3.0+)            | Yes                 | Same as GitHub.com                                            |
| GitLab.com                | Yes (since 13.5)      | Yes                 | Full support                                                  |
| GitLab Self-Managed       | Yes (13.5+)           | Yes                 | May need `gitlab_rails['gitaly_client_query_timeout']` tuning |
| Bitbucket.org             | Yes (since 2021)      | Yes                 | Supported via smart HTTP                                      |
| Bitbucket Server          | Yes (7.0+)            | Yes                 |                                                               |
| Gitea                     | Yes (1.16+)           | Yes (default 1.21+) |                                                               |
| Gerrit                    | Yes                   | Yes                 |                                                               |
| Custom (git-http-backend) | Yes (Git 2.22+)       | Configurable        | Requires `http.receivepack=true` and protocol v2              |

### Self-Hosted Server Configuration

For self-hosted Git servers using `git-http-backend` (Apache, Nginx), ensure protocol v2 is enabled:

```bash
# Verify protocol v2 is available on the server
$ GIT_PROTOCOL_FROM_USER=0 git ls-remote --symref https://git.example.com/repo.git HEAD
# If this returns refs, protocol v2 is working

# For git-http-backend, ensure the GIT_HTTP_EXPORT_ALL or
# GIT_PROJECT_ROOT environment variables are set correctly
# and the server's Git version is 2.22+
```

For SSH-based servers (plain `git-daemon` or custom setups), protocol v2 is supported by default in
Git 2.26+ and can be enabled in earlier versions:

```bash
# On the server, verify Git version
$ git --version
git version 2.30.0

# Protocol v2 is the default for SSH in Git 2.26+
# No additional configuration needed
```

### Promisor Remote Configuration

The promisor remote is configured automatically during `git clone --filter=...`. If you convert an
existing repository to a partial clone, you must set it manually:

```bash
# Convert an existing full clone to a partial clone
$ git config extensions.partialClone origin
$ git fetch --filter=blob:none origin

# This marks origin as the promisor remote
# Future fetches will use the filter
```

## CI/CD Use Cases

Sparse checkout and partial clone are particularly valuable in CI/CD, where clone speed directly
affects pipeline duration.

### Faster CI Checkouts

```bash
# Standard CI clone (slow for monorepos)
- name: Checkout code
  run: git clone https://github.com/org/monorepo.git

# Optimized: shallow + sparse (only the directories this job needs)
- name: Checkout frontend
  run: |
    git clone --filter=blob:none --sparse --depth=1 https://github.com/org/monorepo.git
    cd monorepo
    git sparse-checkout set src/frontend
```

### Job-Specific Sparse Checkouts

Different CI jobs can check out different directories:

```bash
# Frontend job
git clone --filter=blob:none --sparse https://github.com/org/monorepo.git
cd monorepo && git sparse-checkout set src/frontend
cd src/frontend && npm install && npm test

# Backend job
git clone --filter=blob:none --sparse https://github.com/org/monorepo.git
cd monorepo && git sparse-checkout set src/backend
cd src/backend && cargo test

# Documentation job
git clone --filter=blob:none --sparse https://github.com/org/monorepo.git
cd monorepo && git sparse-checkout set docs
cd docs && mkdocs build
```

### Caching Strategies

Partial clones do not benefit from traditional CI caching (which caches the entire `.git`
directory). Instead, use **sparse + shallow** clones for each job and rely on the low download size:

```bash
# CI strategy: always clone fresh, but use sparse + shallow
# The clone time for a sparse + shallow partial clone is typically
# under 10 seconds even for large monorepos

# Do NOT cache the .git directory for partial clones — the cache
# would be as large as a full clone once all promisor objects are fetched
```

### GitHub Actions Specific Example

```bash
# GitHub Actions with sparse checkout
- uses: actions/checkout@v4
  with:
    sparse-checkout: |
      src/frontend
      docs
    sparse-checkout-cone-mode: true
    fetch-depth: 1
```

### GitLab CI Specific Example

```bash
# .gitlab-ci.yml with GIT_DEPTH and sparse checkout
variables:
  GIT_DEPTH: "1"
  GIT_STRATEGY: incremental

build_frontend:
  script:
    - git sparse-checkout init --cone
    - git sparse-checkout set src/frontend
    - cd src/frontend && npm ci && npm run build
```

## Common Pitfalls

### Trying to Use Partial Clone with an Old Git Version

Partial clone requires Git 2.22+ on the client and Git 2.22+ with protocol v2 on the server. Using
an older client produces confusing errors:

```bash
$ git clone --filter=blob:none https://github.com/org/repo.git
fatal: filter 'blob:none' not supported by server

# Fix: upgrade Git
$ git --version
git version 2.19.0   # Too old

$ sudo apt install git   # or use the Git PPA for the latest version
```

### Running git log -p or git grep on a Partial Clone

Commands that need to read file contents (like `git log -p` or `git grep`) will trigger on-demand
fetches of missing blobs. On a large diff spanning many commits, this can be slow and
bandwidth-intensive:

```bash
# This triggers fetching of ALL blobs that differ between HEAD~100 and HEAD
$ git log -p HEAD~100..HEAD

# This triggers fetching of blobs matching the pattern across ALL commits
$ git grep "TODO" $(git rev-list --all)
```

For read-only analysis of a partial clone, use `--no-patch` to avoid blob fetches:

```bash
# Only show commit metadata (no blob fetches)
$ git log --oneline --no-patch HEAD~100..HEAD

# Count commits touching a path (no blob fetches — only tree objects needed)
$ git log --oneline -- src/frontend/
```

### Sparse Checkout Does Not Reduce .git Size

A common misconception is that sparse checkout reduces the `.git` directory size. It does not. All
objects (commits, trees, blobs) are downloaded regardless of the sparse checkout configuration. Only
the working tree is smaller.

```bash
$ git clone https://github.com/org/monorepo.git
$ du -sh .git
40G     .git

$ git sparse-checkout init --cone
$ git sparse-checkout set src/frontend
$ du -sh .git
40G     .git    # Unchanged!

$ du -sh .     # Working tree is smaller
40.2G   .
```

To reduce `.git` size, use partial clone:

```bash
$ git clone --filter=blob:none https://github.com/org/monorepo.git
$ du -sh .git
2G      .git    # Much smaller — no blobs
```

### Forgetting to Expand the Sparse Checkout Before Building

If your build system expects files that are not in the sparse checkout, it will fail with "file not
found" errors. This is particularly common with monorepo build tools that reference files across
packages:

```bash
# Build fails because shared libraries are not checked out
$ cd src/frontend && npm run build
ERROR: Cannot find module '../../shared/utils'

# Fix: add the missing directory to the sparse checkout
$ git sparse-checkout add src/shared
$ npm run build   # Now succeeds
```

### Partial Clone Breaks When Offline

Promisor objects cannot be fetched when you are offline. Any operation that needs a missing blob
will fail:

```bash
# You are offline (no network)
$ git show HEAD:src/main.c
fatal: bad object <sha>

# Git tries to fetch from the promisor remote, which fails
error: unable to access 'https://github.com/org/repo.git/': Could not resolve host
```

If you need to work offline, prefetch the objects you will need before going offline:

```bash
# Before going offline, prefetch all blobs for the current branch
$ git checkout main
$ git rev-list --objects HEAD | git cat-file --batch-check='%(objecttype) %(objectname)' \
  | sed -n 's/^blob //p' | git cat-file --batch

# Or use git fetch to ensure all needed objects are local
$ git fetch origin --all
```

### Combining Shallow Clone with git blame or git log

A shallow clone has limited history, so `git blame` and `git log` cannot traverse beyond the shallow
boundary:

```bash
$ git clone --depth=1 https://github.com/user/repo.git
$ cd repo

$ git log --oneline
abc1234 Latest commit   # Only 1 commit visible

$ git blame src/main.c
abc1234 1 (Author ...)  // entire file is attributed to one commit

$ git log --follow -- src/main.c
# Cannot show history before the shallow boundary
```

If you need `git blame` or `git log`, do not use shallow clones, or deepen them:

```bash
# Deepen to get more history
$ git fetch --deepen=50

# Or unshallow completely
$ git fetch --unshallow
```

### Converting an Existing Clone to a Partial Clone

Converting an existing full clone to a partial clone does not reclaim disk space — the objects are
already downloaded. The conversion only affects future fetches:

```bash
# This does NOT delete existing blobs from .git/objects/
$ git config extensions.partialClone origin
$ git fetch --filter=blob:none origin

# Existing objects remain in .git/objects/
# Only newly fetched objects will use the filter

# To reclaim space, you must prune unreachable objects
$ git reflog expire --expire=now --all
$ git gc --prune=now
```

For maximum space savings, create a fresh partial clone rather than converting an existing one.

### Using Non-Cone Mode by Accident

If you omit `--cone` on Git versions before 2.37, Git defaults to non-cone mode. This can cause
severe performance degradation on large repos:

```bash
# Before Git 2.37, this uses non-cone mode (SLOW)
$ git sparse-checkout init
$ git sparse-checkout set 'src/**'

# Always use --cone explicitly for clarity and safety
$ git sparse-checkout init --cone
$ git sparse-checkout set src
```

On Git 2.37+, `--cone` is the default, so `git sparse-checkout init` and
`git sparse-checkout init --cone` are equivalent. However, explicitly specifying `--cone` is
recommended for documentation and compatibility with older Git versions (where it is silently
accepted but not the default).
