---
title: Stash
description:
  Stash — Basic Commands; Apply and remove from the stack (LIFO); Drop and
  Clear;. do other work. with worked examples and exam-style questions.
date: 2025-06-03T09:00:00.000Z
tags:
  - git
  - advanced
  - stash
categories:
  - CS
slug: stash
---

## What is Stash

`git stash` temporarily shelves changes in your working directory and index, restoring your repository to a clean state (matching HEAD). It is a stack-based mechanism — you can push multiple stashes and pop them in LIFO order.

### When to Use Stash

- Switching branches with uncommitted work you cannot commit yet.
- Pulling remote changes that conflict with your local work.
- Running a quick test on a clean working directory.
- Context-switching between tasks.

:::warning

Stash is **not a substitute for branches**. Stashes are stored as commits in the object database, but they are not visible in `git log` and can be accidentally dropped. If your changes are substantial, commit them on a branch instead.

:::

## How Stash Works Internally

A stash is stored as a special commit with a **tree of your working directory + index changes**. Each stash entry is actually a merge commit with two (or three) parents:

```mermaid
gitGraph
    commit id: "W (working tree changes)"
    commit id: "I (index changes)"
    checkout W
    merge I id: "S (stash commit)"
```

- **Parent 1**: The commit HEAD was at when the stash was created.
- **Parent 2**: The index state (if `--keep-index` was used).
- **Working tree changes**: Stored as the stash commit's tree.

```bash
# Inspect a stash entry
$ git stash show -p stash@{0}
# Shows the diff that the stash represents

# Show the stash as a commit
$ git log --oneline --graph stash@{0}
```

## Basic Commands

### Save a Stash

```bash
# Stash all tracked changes (working directory + index)
$ git stash

# Stash with a message (recommended for multiple stashes)
$ git stash push -m "WIP: auth middleware"

# Stash only tracked files (ignore untracked files)
$ git stash push

# Stash including untracked files
$ git stash push -u
# Or: git stash --include-untracked

# Stash everything (tracked + untracked + ignored)
$ git stash push --all
```

### Keep Index While Stashing

```bash
# Stash working directory changes but keep staged changes in the index
$ git stash push --keep-index
```

This is useful when you want to test only your staged changes:

```bash
$ git add .
$ git stash push --keep-index -m "Test staged changes"
$ npm test  # Test only the staged changes
$ git stash pop  # Restore everything
```

### List Stashes

```bash
$ git stash list
stash@{0}: On feature-auth: WIP: login page
stash@{1}: On main: experimental refactor
stash@{2}: On feature-auth: WIP: auth middleware
```

### Apply a Stash

```bash
# Apply the most recent stash (keep it in the stack)
$ git stash apply

# Apply a specific stash
$ git stash apply stash@{1}

# Apply and remove from the stack (LIFO)
$ git stash pop

# Apply stash to a different branch
$ git switch feature-auth
$ git stash apply stash@{0}
```

### Drop and Clear

```bash
# Drop the most recent stash
$ git stash drop

# Drop a specific stash
$ git stash drop stash@{1}

# Clear all stashes
$ git stash clear
```

## Partial Stash

You can stash specific files or hunks:

```bash
# Stash specific files
$ git stash push src/auth.c src/login.c -m "Auth changes"

# Interactive stash (choose hunks)
$ git stash push -p
```

## Create a Branch from a Stash

If a stash was created on a branch that has since diverged, applying it may cause conflicts. Creating a branch from the stash applies it in a clean context:

```bash
$ git stash branch stash-branch-name stash@{0}
# Creates a new branch from the stash's base commit
# Applies the stash
# Drops the stash from the stack
```

## Stash and Git Hooks

The stash command does **not** run pre-commit hooks. This is by design — stashing is a temporary operation, not a commit. However, this means:

- Linters and formatters configured as pre-commit hooks will not run on stashed changes.
- Tests configured as pre-commit hooks will not validate stashed changes.

If you need hook validation before stashing, commit to a temporary branch instead:

```bash
$ git switch -c temp-wip
$ git add -A
$ git commit -m "WIP"
$ git switch main
# ... do other work ...
$ git switch temp-wip
# ... continue working ...
```

## Stash Limitations

| Limitation                            | Workaround                                                     |
| ------------------------------------- | -------------------------------------------------------------- |
| Cannot stash merge conflicts          | Resolve conflicts or abort merge first                         |
| Stashes are not visible in `git log`  | Use `git stash list` and `git stash show -p`                   |
| Stashes can be accidentally dropped   | Use descriptive messages; reflog retains dropped stashes       |
| Binary files in stashes take up space | Use `git stash --keep-index` to avoid re-staging binaries      |
| No automatic expiry                   | Periodically `git stash clear` or `git stash drop` old entries |
