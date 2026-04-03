---
title: Submodules
date: 2025-06-03T11:00:00.000Z
tags:
  - git
  - advanced
  - submodules
categories:
  - CS
slug: submodules
---

## What Are Submodules

Git submodules allow you to embed one Git repository inside another. The parent repository records a **reference** to a specific commit of the submodule repository — not the files themselves. This enables you to:

- Include external libraries or dependencies as source code.
- Share code across multiple projects.
- Track third-party dependencies at specific versions.

## How Submodules Work

A submodule is essentially a **Git repository within a subdirectory** of your main repository, tracked by a special entry in the parent's `.gitmodules` file and tree:

```
parent-repo/
├── .gitmodules          # Records submodule paths and URLs
├── src/
│   └── lib/             # Submodule directory
│       ├── .git         # Pointer to .git/modules/lib/
│       ├── README.md
│       └── lib.c
└── main.c
```

### `.gitmodules` File

```ini
[submodule "src/lib"]
    path = src/lib
    url = https://github.com/org/library.git
    branch = main
```

### Tree Entry

The parent repository's tree records the submodule as a special entry with mode `160000` (a Gitlink — a commit reference, not a file or directory):

```bash
$ git ls-tree HEAD src/lib
160000 commit a3f2b1c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6  src/lib
```

This means the parent repository knows **only** that `src/lib` should be at commit `a3f2b1c`. It does not store any of the submodule's files.

## Basic Operations

### Adding a Submodule

```bash
# Add a submodule at a specific path
$ git submodule add https://github.com/org/library.git src/lib

# Add at a specific commit
$ git submodule add -b v2.0 https://github.com/org/library.git src/lib

# Add from a local path
$ git submodule add ../shared-lib src/lib
```

### Cloning with Submodules

```bash
# Clone the parent repository (submodules are empty by default)
$ git clone https://github.com/user/project.git

# Initialize and clone all submodules
$ git submodule init
$ git submodule update

# Or do both in one step
$ git clone --recurse-submodules https://github.com/user/project.git

# Initialize submodules after cloning
$ git submodule update --init --recursive
```

:::warning

If you clone without `--recurse-submodules`, your submodule directories will be **empty**. Running `git submodule update --init` fills them. This is a common source of confusion for new developers.

:::

### Updating Submodules

```bash
# Update all submodules to their recorded commits
$ git submodule update

# Fetch the latest changes from remote submodules
$ git submodule update --remote

# Update a specific submodule
$ git submodule update --remote src/lib

# Merge remote changes into the submodule's current branch
$ cd src/lib
$ git merge origin/main
cd ..
$ git add src/lib
$ git commit -m "Update library to latest"
```

### Removing a Submodule

```bash
# Three-step removal (Git < 1.8.3)
$ git submodule deinit src/lib
$ git rm src/lib
$ rm -rf .git/modules/src/lib

# Modern (Git >= 1.8.3)
$ git rm src/lib
```

## The Submodule Workflow Problem

Submodules are notoriously difficult to work with. The core problem is that the parent repository and each submodule are **independent Git repositories** with their own branches, commits, and remotes. Keeping them synchronized requires discipline.

### Common Pitfalls

| Pitfall               | Description                                                                  | Solution                                                       |
| --------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **Detached HEAD**     | `git submodule update` checks out the recorded commit in detached HEAD state | Create a branch: `cd src/lib && git checkout -b tracking main` |
| **Stale submodules**  | After `git pull` on the parent, submodules may point to old commits          | Always run `git submodule update` after pulling                |
| **Forgotten commits** | Changes in a submodule are not visible to the parent until committed         | `git add src/lib && git commit` in the parent                  |
| **Nested submodules** | Submodules within submodules add complexity                                  | Use `--recursive` flag everywhere                              |
| **Large clones**      | Many submodules significantly increase clone time                            | Use `--depth=1 --shallow-submodules`                           |

## Alternatives to Submodules

### Git Subtree

`git subtree` merges a subproject's history directly into the parent repository. Unlike submodules, the subproject's files are stored in the parent's object database:

```bash
# Add a subtree
$ git subtree add --prefix=src/lib https://github.com/org/library.git main --squash

# Pull upstream changes
$ git subtree pull --prefix=src/lib https://github.com/org/library.git main --squash

# Push local changes upstream
$ git subtree push --prefix=src/lib https://github.com/org/library.git main
```

| Feature                 | Submodule                           | Subtree                         |
| ----------------------- | ----------------------------------- | ------------------------------- |
| Repository independence | Full independence                   | History merged into parent      |
| Clone complexity        | Requires `--recurse-submodules`     | Single repository               |
| Commit granularity      | Separate commits per submodule      | Single commit per subtree merge |
| History preservation    | Preserves full submodule history    | Can squash with `--squash`      |
| Size                    | Minimal (only references)           | Larger (full file history)      |
| Branch management       | Each submodule has its own branches | No separate branches            |

### Package Managers

For most dependency management, a language-specific package manager is preferable to submodules:

| Language | Tool            |
| -------- | --------------- |
| C/C++    | Conan, vcpkg    |
| Rust     | Cargo           |
| Node.js  | npm, yarn, pnpm |
| Python   | pip, poetry     |
| Java     | Maven, Gradle   |
| Go       | Go modules      |

Use submodules only when you need:

- Source-level control over the dependency (patches, debugging).
- A specific commit (not a versioned release).
- The dependency is not available in a package registry.

## Best Practices

1. **Pin to specific commits**, not branches. Branches are mutable; commits are immutable.
2. **Document submodule commands** in your README so new developers know how to initialize them.
3. **Use `git submodule update --init --recursive`** in CI scripts.
4. **Consider subtree or package managers** before reaching for submodules — they are often simpler.
5. **Add a `Makefile` target** for submodule management:

```makefile
.PHONY: submodule-init submodule-update

submodule-init:
    git submodule update --init --recursive

submodule-update:
    git submodule update --remote --recursive
    git add src/lib
    git commit -m "Update submodules"
```
