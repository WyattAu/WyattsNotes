---
title: Cherry-Pick
slug: cherry-pick
---

## What Cherry-Pick Does

`git cherry-pick` applies the **diff** introduced by a specific commit onto the current branch as a
**brand-new commit**. It does not move or copy the original commit object — it computes the patch
that the source commit introduced (relative to its parent), then creates a new commit on the target
branch with that same patch applied.

This distinction is critical. The original commit and the cherry-picked commit share the same
author, message, and diff, but they have **different SHAs** because they have different parent
commits and (usually) different committer timestamps. They are distinct objects in the DAG.

### How It Differs from Merge and Rebase

| Operation     | What it does                                                 | Commit topology change                      |
| ------------- | ------------------------------------------------------------ | ------------------------------------------- |
| `merge`       | Creates a merge commit joining two branch histories          | New merge commit, preserves both histories  |
| `rebase`      | Replays a sequence of commits onto a new base                | Rewrites all replayed commits with new SHAs |
| `cherry-pick` | Applies one or more specific commits onto the current branch | New commits with new SHAs, no merge commit  |

Merge preserves the full topological relationship between branches. Rebase rewrites an entire
sequence linearly. Cherry-pick is surgical — it extracts individual commits without regard to branch
topology.

Internally, cherry-pick operates identically to a single-step rebase. `git cherry-pick <sha>` is
roughly equivalent to `git rebase --onto HEAD <sha>^ <sha>`. The difference is one of intent: rebase
is for moving an entire branch, cherry-pick is for selecting individual commits.

## Basic Usage

### Picking a Single Commit

```bash
# Check out the target branch
$ git checkout main

# Apply a specific commit from another branch
$ git cherry-pick a3f2b1c

# The commit a3f2b1c is now applied as a new commit on main
$ git log --oneline -3
f7e8d9c (HEAD -> main) Fix authentication timeout
b1c2d3e Merge pull request #42
a4b5c6d Add rate limiting middleware
```

The new commit has a different SHA but the same author, author date, and commit message as the
original.

### Picking Multiple Commits

```bash
# Cherry-pick multiple commits in order
$ git cherry-pick a3f2b1c b4c5d6e e7f8a9b

# Cherry-pick a range (inclusive of both endpoints)
$ git cherry-pick A..B
# Note: A..B means "all commits reachable from B but not from A"
# This EXCLUDES commit A itself

# To include A, use the three-dot syntax or specify it explicitly
$ git cherry-pick A^..B
# This includes A and everything up to B
```

The difference between `A..B` and `A^..B` is a common source of confusion:

| Syntax  | Meaning                                        | Includes A? |
| ------- | ---------------------------------------------- | ----------- |
| `A..B`  | Commits reachable from B, not reachable from A | No          |
| `A^..B` | Commits from A's parent through B              | Yes         |

```bash
# Practical example: cherry-pick everything from commit X through Y, inclusive
$ git cherry-pick X^..Y
```

### Picking from Another Branch Without Checking Out

```bash
# Cherry-pick using branch reference instead of SHA
$ git cherry-pick feature/login-fix

# Cherry-pick a range from another branch
$ git cherry-pick feature/branch~3..feature/branch
```

### Commit Message and Author Control

```bash
# Edit the commit message during cherry-pick
$ git cherry-pick -e a3f2b1c

# Cherry-pick but keep the original committer info as well
# (by default, cherry-pick preserves the original author but sets committer to you)
$ git cherry-pick -x a3f2b1c
# This appends "(cherry picked from commit a3f2b1c)" to the message

# Sign the cherry-picked commit
$ git cherry-pick -S a3f2b1c

# Cherry-pick without committing (apply changes to working tree only)
$ git cherry-pick --no-commit a3f2b1c
```

The `-x` flag is worth understanding in depth. When you use `-x`, Git appends a trailer to the
commit message:

```
Fix authentication timeout

(cherry picked from commit a3f2b1c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a)
```

This creates a traceable link back to the original commit, which is valuable for auditing and for
understanding the provenance of changes. Many organizations require `-x` in their contribution
guidelines.

### Reversing a Cherry-Pick

```bash
# Revert the changes introduced by a cherry-picked commit
$ git revert <new-sha>

# Or revert the original commit on its original branch
$ git revert a3f2b1c
```

## Conflict Handling

When the target branch has changes that conflict with the patch being applied, cherry-pick halts and
requires manual resolution. The mechanics are identical to merge conflict resolution, but the state
file is different.

### The CHERRY_PICK_HEAD File

During conflict resolution, Git writes the SHA of the commit being cherry-picked to
`.git/CHERRY_PICK_HEAD`:

```bash
# During a conflict:
$ cat .git/CHERRY_PICK_HEAD
a3f2b1c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a
```

This file exists for the same reason `MERGE_HEAD` exists during a merge — it tells Git (and any
tools reading the repository) that an operation is in progress and which commit is being applied.
Git also sets `.git/MERGE_MSG` with the commit message from the cherry-picked commit, so the message
is preserved through conflict resolution.

### Resolving Conflicts

```bash
# 1. Cherry-pick encounters a conflict
$ git cherry-pick a3f2b1c
error: could not apply a3f2b1c... Fix authentication timeout
hint: after resolving the conflicts, mark the corrected paths
hint: with 'git add <path>' or 'git rm <path>'

# 2. Examine conflicts
$ git status
both modified:   src/auth/handler.go
both modified:   src/auth/middleware.go

# 3. Resolve conflicts in each file
$ vim src/auth/handler.go src/auth/middleware.go

# 4. Mark files as resolved
$ git add src/auth/handler.go src/auth/middleware.go

# 5. Continue the cherry-pick
$ git cherry-pick --continue
```

### Aborting and Quitting

```bash
# Abort: restore the branch to its state before the cherry-pick
$ git cherry-pick --abort
# Deletes CHERRY_PICK_HEAD, resets HEAD and index to pre-cherry-pick state

# Quit: keep any successful cherry-picks, abort the current one
# Only meaningful when cherry-picking multiple commits
$ git cherry-pick --quit
# Useful when cherry-picking a range and you want to keep the ones that succeeded
```

The difference between `--abort` and `--quit` matters when cherry-picking multiple commits. If you
are cherry-picking A, B, C and the conflict occurs at B:

- `--abort`: rolls back everything, including the successful cherry-pick of A.
- `--quit`: keeps A's cherry-pick on the branch, drops the operation entirely (B and C are not
  applied).

### Skipping a Conflicting Commit

```bash
# Skip the current commit (keep the branch as-is, move to the next)
$ git cherry-pick --skip
# Only available in Git 2.35+
```

For older Git versions, you can achieve the same effect by resetting the index and continuing:

```bash
# Reset the index to HEAD (discard the failed patch)
$ git reset HEAD
# Continue to the next commit in the cherry-pick sequence
$ git cherry-pick --continue
```

## Cherry-Picking Merges

Cherry-picking a merge commit is fundamentally different from cherry-picking a regular commit
because a merge commit has **two parents**. Git does not know which parent's changes you want — the
diff of a merge commit is relative to the first parent, but that may not be what you intend.

### The `--mainline` Flag

```bash
# Cherry-pick a merge commit, using parent 1 as the base for the diff
$ git cherry-pick --mainline 1 a3f2b1c

# Cherry-pick a merge commit, using parent 2 as the base for the diff
$ git cherry-pick --mainline 2 a3f2b1c
```

The `--mainline` flag tells Git which parent to use as the base when computing the diff. This
determines what changes the merge commit "introduces":

- `--mainline 1` (default): The diff is computed as the changes between the merge commit and its
  first parent. This captures everything that was different in the merged branch.
- `--mainline 2`: The diff is computed against the second parent, which captures the changes from
  the first parent's branch that the merge did not include.

### Why Cherry-Picking Merges Is Dangerous

Cherry-picking a merge commit almost never does what you want because:

1. **Merge commits are semantic, not functional**. The value of a merge commit is in the topology it
   creates — it joins two histories. The actual diff of a merge commit relative to either parent is
   often the empty set (if the merge was a clean fast-forward equivalent) or a large combined diff
   that includes conflict resolutions.

2. **Conflict resolutions are not portable**. If the merge commit required manual conflict
   resolution, those resolutions are specific to the state of both branches at the time of the
   merge. Applying them to a different branch context will produce incorrect results.

3. **The diff may be empty or enormous**. If the merge was a trivial merge (no conflicts,
   fast-forward equivalent), the diff against the first parent is empty. If the merge was complex,
   the diff may include unintended changes.

The correct approach is to cherry-pick the individual commits from the merged branch, not the merge
commit itself.

```bash
# WRONG: cherry-picking a merge commit
$ git cherry-pick a3f2b1c  # a3f2b1c is a merge commit

# RIGHT: cherry-pick the individual commits from the merged branch
$ git log --oneline --first-parent a3f2b1c^..a3f2b1c
# Identify the commits you want, then cherry-pick them individually
$ git cherry-pick b1c2d3e c4d5e6f
```

## Cherry-Pick vs Rebase

### Decision Framework

| Factor              | Use Cherry-Pick                               | Use Rebase                             |
| ------------------- | --------------------------------------------- | -------------------------------------- |
| Scope               | One or a few specific commits                 | Entire branch or large sequence        |
| Intent              | Selectively bring changes across branches     | Move a branch to a new base            |
| Commit order        | You control which commits and in what order   | Preserves original order of the branch |
| History cleanliness | Can create a messy DAG with scattered commits | Produces a clean linear history        |
| Merge conflicts     | Resolve per commit                            | Resolve once per conflicting commit    |
| Traceability        | Needs `-x` for provenance tracking            | Branch topology provides context       |

### When to Cherry-Pick

```bash
# Hotfix: a critical bug fix on release/v2.1 needs to go to main
$ git checkout main
$ git cherry-pick release/v2.1

# Backport: a security fix from main to a maintenance branch
$ git checkout release/v1.9
$ git cherry-pick a3f2b1c

# Selective: you need one commit from a large PR, not the whole thing
$ git checkout feature/api
$ git cherry-pick abc1234
```

### When to Rebase Instead

```bash
# Your feature branch has fallen behind main and you want to integrate
$ git checkout feature/auth
$ git rebase main

# You want to squash or reorder commits before merging
$ git rebase -i main
```

Rebase is the correct tool when you want to maintain the full history of a branch. Cherry-pick is
correct when you need to extract specific commits without pulling in the entire branch history.

### Rebase Can Replace Cherry-Pick (But Not Always)

Technically, you can achieve cherry-pick's effect with rebase:

```bash
# These are approximately equivalent:
$ git cherry-pick a3f2b1c
$ git rebase --onto HEAD a3f2b1c^ a3f2b1c
```

But rebase operates on the entire state of the branch. If you are on `main` and want one commit from
`feature`, `git rebase --onto` requires you to specify the correct base and range, which is more
error-prone than a simple cherry-pick.

## Dangers of Cherry-Pick

### Duplicate Commits

Cherry-pick creates a new commit with a different SHA but the same changes. If the same commit is
later merged through normal branch topology, Git does not detect the duplication:

```bash
# On main:
$ git cherry-pick a3f2b1c   # Creates new commit d4e5f6a with same changes

# Later, someone merges the feature branch that contains a3f2b1c:
$ git merge feature/login
# a3f2b1c's changes are now in main TWICE: once via cherry-pick (d4e5f6a),
# once via merge (a3f2b1c). Git does not deduplicate.
```

This is particularly insidious because the duplicate changes may not cause an immediate conflict —
Git applies them cleanly since the second application is a no-op for most files. But the history now
contains two commits making the same change, which confuses code review, bisect, and blame.

### Commit Graph Divergence

Cherry-pick severs the topological relationship between the source commit and its new location. The
cherry-picked commit has no parent link to the original commit or its ancestors:

```
Before cherry-pick:
  main:    A --- B --- C
                \
  feature:       D --- E --- F

After cherry-pick of E onto main:
  main:    A --- B --- C --- E'
                \
  feature:       D --- E --- F
```

`E'` on `main` and `E` on `feature` have no relationship in the DAG. `git log --graph` shows them as
unrelated commits. There is no merge base connecting them. This makes it difficult to answer "is
this change already in main?" without manual inspection.

### Breaking git bisect

Cherry-picked commits break `git bisect` because bisect relies on a clean linear history where each
commit represents a discrete state change. When the same logical change exists in multiple commits
across different branches:

1. Bisect may identify the cherry-picked commit as the culprit instead of the original.
2. The original commit may be in a range that bisect never examines.
3. If the cherry-picked commit has a slightly different context (due to conflict resolution during
   the pick), bisect may land on a commit that does not actually compile.

### Breaking git blame

`git blame` traces line changes to their most recent commit on the current branch. If a fix was
cherry-picked, blame shows the cherry-picked commit (new SHA) rather than the original commit. This
severs the link between the code and its original context — the PR, the code review, and the
discussion around the original commit.

```bash
# On feature branch, commit a3f2b1c fixed a bug in line 42
# That commit was cherry-picked to main as d4e5f6a

$ git blame src/auth/handler.go -L 42,42
d4e5f6a (Author Name 2025-06-01 42) return nil, err

# d4e5f6a is the cherry-picked SHA — the original a3f2b1c is not shown
# To find the original, you need the -x flag or manual searching
```

### Losing Commit Context

Commits exist within a context of surrounding changes. A commit that introduces a function may
depend on commits that introduce its callers, its types, or its tests. Cherry-picking a commit in
isolation may produce code that does not compile or has broken references.

```bash
# Commit A: adds type UserSession
# Commit B: adds function GetSession(user UserSession) error
# Commit C: adds tests for GetSession

# Cherry-picking B without A produces a compile error (undefined type)
$ git cherry-pick B
error: undefined: UserSession
```

## Common Workflows

### Hotfix from Release to Main

The canonical cherry-pick workflow is the hotfix: a critical bug is discovered in production (on the
release branch), fixed there, and the fix needs to be applied to main and potentially other active
branches.

```bash
# 1. Fix the bug on the release branch
$ git checkout release/v2.1
# Make the fix, commit it
$ git commit -m "fix: resolve authentication timeout under high load"
# SHA: a3f2b1c

# 2. Cherry-pick to main
$ git checkout main
$ git cherry-pick -x a3f2b1c
# New commit on main: d4e5f6a

# 3. Cherry-pick to other active release branches
$ git checkout release/v2.2
$ git cherry-pick -x a3f2b1c
$ git checkout release/v3.0
$ git cherry-pick -x a3f2b1c

# 4. Push all branches
$ git push origin main release/v2.1 release/v2.2 release/v3.0
```

Using `-x` here is critical — it records the provenance of each cherry-picked commit, so anyone
reading the log can trace the fix back to its origin.

### Backporting a Series of Commits

When a feature spans multiple commits and needs to be backported to a maintenance branch:

```bash
# Identify the range of commits to backport
$ git log --oneline main~5..main
f7e8d9a feat: add session encryption
e1f2a3b fix: handle empty session tokens
b4c5d6e refactor: extract session validation

# Cherry-pick the entire range (oldest first)
$ git checkout release/v1.9
$ git cherry-pick b4c5d6e^..f7e8d9a

# Or specify the commits individually for more control
$ git cherry-pick b4c5d6e e1f2a3b f7e8d9a
```

### Pulling a Specific Commit from a PR

When a PR contains multiple commits but you only need one:

```bash
# Fetch the PR branch
$ git fetch origin pull/123/head:pr-123

# Inspect the commits
$ git log --oneline pr-123
a1b2c3d feat: add OAuth2 support
d4e5f6a chore: update dependencies
f7e8a9b fix: correct token validation  # This is the one you need

# Cherry-pick just that commit
$ git checkout main
$ git cherry-pick f7e8a9b

# Clean up
$ git branch -D pr-123
```

### Cherry-Picking from an Upstream Fork

```bash
# Add the upstream remote if not already present
$ git remote add upstream https://github.com/upstream/repo.git

# Fetch upstream branches
$ git fetch upstream

# Cherry-pick a specific commit from upstream's main
$ git cherry-pick upstream/main  # latest commit on upstream/main

# Or cherry-pick a specific SHA
$ git cherry-pick abc1234
```

### Reverting a Cherry-Pick

If a cherry-picked fix causes problems on the target branch:

```bash
# Revert the cherry-picked commit on main
$ git checkout main
$ git revert d4e5f6a  # The cherry-picked commit's SHA on main

# Note: reverting on main does NOT revert the original on the release branch
# The original commit a3f2b1c on release/v2.1 is untouched
```

## Cherry-Pick and Signed Commits

### How Signing Interacts with Cherry-Pick

When you cherry-pick a signed commit, the new commit is **not automatically signed** with the
original author's key. The signature is part of the commit object, and the new commit is a different
object:

```bash
# Original signed commit on feature branch
$ git verify-commit a3f2b1c
Good "gpg" signature from "Developer <dev@example.com>"

# Cherry-pick to main
$ git checkout main
$ git cherry-pick a3f2b1c

# The new commit is NOT signed (unless commit.gpgsign is true)
$ git verify-commit d4e5f6a
error: no signature found
```

If `commit.gpgsign = true` is set in your configuration, Git signs the cherry-picked commit with
**your** key, not the original author's key. This is correct behavior — you are the committer, and
the signature proves that you (the committer) applied this change, not that the original author did.

### Preserving Author Information

Cherry-pick always preserves the original author name, email, and author date. It sets the committer
to you with the current timestamp:

```bash
$ git log --format=fuller d4e5f6a
commit d4e5f6a...
Author:     Developer <dev@example.com>
AuthorDate: Mon Jun 2 10:00:00 2025
Commit:     You <you@example.com>
CommitterDate: Tue Jun 3 14:30:00 2025

Fix authentication timeout
```

If you want to override the author (e.g., when cherry-picking your own commits), you can use
environment variables:

```bash
# Cherry-pick and override the committer date to match the author date
$ GIT_COMMITTER_DATE="$(git log -1 --format=%aI a3f2b1c)" git cherry-pick a3f2b1c

# Cherry-pick and set a different author
$ git cherry-pick --author="You <you@example.com>" a3f2b1c
```

### Signed Tags and Cherry-Pick

Cherry-pick operates on commits, not tags. If you cherry-pick a commit that a signed tag points to,
the tag is not transferred:

```bash
# Tag points to a commit on the release branch
$ git tag -v v2.1.1
Good signature from "Release Manager <release@example.com>"
object a3f2b1c...

# Cherry-pick the commit to main
$ git checkout main
$ git cherry-pick a3f2b1c

# The tag v2.1.1 still points to a3f2b1c on the release branch
# The cherry-picked commit d4e5f6a on main has no tag
```

## Common Pitfalls

### Cherry-Picking into a Branch That Already Has the Commit

If you cherry-pick a commit into a branch that already contains it (e.g., through a previous merge),
Git applies the patch, finds no changes, and creates an empty commit:

```bash
$ git cherry-pick a3f2b1c
# On branch main
# nothing to commit, working tree clean
# The previous cherry-pick (now empty) is not committed
```

Git detects this and skips the commit with a message indicating it was already applied. However, if
the commit was modified by a previous merge (conflict resolution changed the content), the
cherry-pick may produce unexpected results — a non-empty commit with changes that duplicate or
conflict with existing code.

### Cherry-Picking Reverts

A revert commit undoes the changes of its parent. Cherry-picking a revert to a different branch
undoes changes that may not exist there, or undoes changes that were applied differently:

```bash
# On release branch: commit A introduces a feature, commit B reverts it
# Cherry-picking B to main undoes A's changes on main,
# but A on main may have different surrounding code
$ git cherry-pick B  # Dangerous: the revert context may not match
```

### Cherry-Pick Order Matters

When cherry-picking multiple commits, the order must be topologically correct. Picking a commit
before its dependencies (commits it builds on) will produce conflicts or broken code:

```bash
# Commit B depends on commit A (B calls a function introduced in A)
# WRONG order:
$ git cherry-pick B  # Fails: undefined function from A
$ git cherry-pick A  # Now A is applied after B

# CORRECT order:
$ git cherry-pick A
$ git cherry-pick B
```

Git does not enforce topological ordering during cherry-pick. It applies commits in the order you
specify them. This is unlike rebase, which preserves the original commit order.

### Forgetting `-x` in Shared Repositories

Without `-x`, cherry-picked commits have no traceable link to their origin. In a large team, this
makes it impossible to answer "where did this change come from?" without manually searching the
history of all branches. Always use `-x` when cherry-picking in a shared repository.

### Cherry-Picking During a Rebase

You should not start a cherry-pick while a rebase is in progress. Both operations manipulate the
branch tip and use overlapping state files. If you need to cherry-pick during a rebase, complete or
abort the rebase first.

### Accumulating Technical Debt

Cherry-pick is a pragmatic tool, but overuse creates hidden dependencies between branches. If branch
A relies on cherry-picks from branch B, and branch B is later rewritten or deleted, the provenance
of those changes is lost. Over time, the DAG becomes a web of disconnected commits with no clear
lineage. Prefer merge or rebase for structural changes; reserve cherry-pick for true hotfixes and
backports.

### Not Communicating Cherry-Picks to the Team

Cherry-picks are invisible in the branch topology. A merge shows up clearly in `git log --graph`. A
cherry-pick does not. If you cherry-pick a fix to main, notify the team — especially the author of
the original commit, who may not realize their fix is being applied elsewhere and may re-merge the
same changes.
