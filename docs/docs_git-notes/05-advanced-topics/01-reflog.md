---
title: Reflog
date: 2025-06-03T08:00:00.000Z
tags:
  - git
  - advanced
  - reflog
categories:
  - CS
slug: reflog
---

## What is the Reflog

The **reflog** (reference log) is Git's built-in safety net. It records every change to the HEAD reference and to each branch reference, creating a chronological audit trail of all movements in the repository. Even after operations that appear destructive — `git reset --hard`, `git rebase`, `git commit --amend` — the reflog retains a record of where the references were before.

Think of the reflog as Git's **undo history**. While `git log` shows the commit history (the DAG), the reflog shows the **reference movement history**.

## How the Reflog Works

Every time a reference moves, Git appends an entry to the reflog:

```
a3f2b1c0 HEAD@{0}: rebase -i (finish): returning to refs/heads/feature
b7e9d4f5 HEAD@{1}: rebase -i (pick): Add authentication middleware
c1d2e3f4 HEAD@{2}: rebase -i (start): checkout HEAD~5
a3f2b1c0 HEAD@{3}: checkout: moving from main to feature
```

Each entry contains:

| Field                             | Meaning                                    |
| --------------------------------- | ------------------------------------------ |
| `a3f2b1c0`                        | The commit hash the reference moved **to** |
| `HEAD@{0}`                        | The reflog index (0 = most recent)         |
| `rebase -i (finish)`              | The operation that caused the move         |
| `returning to refs/heads/feature` | Additional context                         |

### Reflog Storage

The reflog is stored as plain text files:

| File                           | Records movements of              |
| ------------------------------ | --------------------------------- |
| `.git/logs/HEAD`               | HEAD (covers all branch switches) |
| `.git/logs/refs/heads/main`    | The `main` branch                 |
| `.git/logs/refs/heads/feature` | The `feature` branch              |

```bash
# View the raw reflog file
$ cat .git/logs/HEAD
```

## Using the Reflog

### Viewing the Reflog

```bash
# Show HEAD's reflog
$ git reflog

# Show a specific branch's reflog
$ git reflog show main

# Show with dates (more readable)
$ git reflog --date=iso

# Show with relative dates
$ git reflog --date=relative

# Show all reflogs across all refs
$ git reflog --all
```

### Reflog Syntax

Reflog entries can be used anywhere a commit hash is expected:

```bash
# HEAD@{N} — the Nth previous position of HEAD
$ git show HEAD@{3}

# branch@{N} — the Nth previous position of a branch
$ git show main@{2}

# @{N} — shorthand for HEAD@{N}
$ git show @{5}
```

### Common Recovery Scenarios

#### 1. Recovering from `git reset --hard`

```bash
# You accidentally reset too far
$ git reset --hard HEAD~3
# Oops — you wanted to go back only 1 commit

# Find the correct position in the reflog
$ git reflog
a3f2b1c0 HEAD@{0}: reset: moving to HEAD~3
b7e9d4f5 HEAD@{1}: commit: Add login page  ← this is where you want to be

# Restore to that position
$ git reset --hard HEAD@{1}
```

#### 2. Recovering from a Bad Rebase

```bash
# A rebase went wrong and introduced conflicts you can't resolve
$ git rebase --abort
# But you already committed some rebased changes

# Find the pre-rebase state
$ git reflog
c1d2e3f4 HEAD@{2}: rebase -i (start): checkout HEAD~5  ← before rebase
a3f2b1c0 HEAD@{3}: commit: Original commit 3          ← what you want

# Reset to the pre-rebase state
$ git reset --hard HEAD@{2}
```

#### 3. Recovering a Dropped Stash

```bash
$ git stash drop
# Oops — you needed that stash

# Find the stash in the reflog (stashes are stored as special commits)
$ git reflog stash
d4e5f6a stash@{0}: On feature: WIP auth module
a3f2b1c stash@{1}: On main: experimental changes

# Restore the dropped stash
$ git stash apply stash@{1}
```

#### 4. Finding a Lost Commit

```bash
# You switched branches and lost a commit
$ git switch main
# Where did my commit go?

# Search the reflog for your commit message
$ git reflog --all | grep "Add login page"
b7e9d4f5 HEAD@{1}: commit: Add login page

# Create a branch pointing to it
$ git branch recovered-work b7e9d4f5
```

## Reflog Expiry and Garbage Collection

Reflog entries do not persist forever. By default:

| Setting                      | Default | Meaning                                               |
| ---------------------------- | ------- | ----------------------------------------------------- |
| `gc.reflogExpire`            | 90 days | Reflog entries older than this are expired            |
| `gc.reflogExpireUnreachable` | 30 days | Entries pointing to unreachable commits expire sooner |
| `gc.pruneExpire`             | 2 weeks | Unreachable objects are pruned                        |

### When Objects Are Actually Deleted

An object is only deleted when:

1. It is **unreachable** (not referenced by any branch, tag, stash, or reflog entry).
2. `git gc --prune` has been run (or `git gc` runs automatically).
3. The reflog entries pointing to it have expired.

```bash
# Show unreachable objects (not yet deleted)
$ git fsck --unreachable

# Manually run garbage collection
$ git gc --prune=now

# WARNING: This permanently deletes unreachable objects
```

:::warning

`git gc --prune=now` is permanent. After running this, any commits that were only reachable via expired reflog entries are gone forever. Use with extreme caution.

:::

## Reflog Best Practices

### 1. Know the Reflog Exists

The reflog is the single most important recovery tool in Git. Memorize `git reflog` — it will save you from almost any accidental data loss.

### 2. Increase Reflog Retention for Important Branches

```bash
# Keep reflog entries for 1 year on important branches
$ git config gc.reflogExpire main.1.year.ago
```

### 3. Don't Panic

Almost nothing in Git is truly permanent until garbage collection runs. If you accidentally delete, reset, rebase, or amend something, the reflog is your first line of defense.
