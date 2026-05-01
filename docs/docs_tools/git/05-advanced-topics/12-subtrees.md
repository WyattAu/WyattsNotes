---
title: Git Subtrees
description:
  Git Subtrees — What Subtrees Are; How Subtrees Store Data; Adding a Subtree;
  Basic Syntax with worked examples and exam-style questions.
slug: git-subtrees
---

## What Subtrees Are

`git subtree` merges a repository into a subdirectory of another repository. Unlike submodules,
which maintain a reference to an external repository, subtrees embed the external project's files
(and optionally its history) directly into the parent repository's object database.

There are two key variants:

- **`--squash`**: Collapses the upstream repository's history into a single synthetic commit. The
  parent repo records "added subtree at commit X" as one commit. This keeps the parent history clean
  but loses the upstream's individual commit history.
- **Without `--squash`**: Replays every upstream commit into the parent repository. The full history
  is interleaved — parent commits and subtree commits are mixed together in the log. This preserves
  provenance but pollutes the parent's history.

Subtrees are implemented as a set of Git commands built on top of `git merge` and `git read-tree`.
They are not a separate Git object type. The subtree's files are regular files in the parent
repository's tree. There is no special mode bit (unlike submodules, which use mode `160000`). To
Git, the subtree is just a directory with files in it.

### How Subtrees Store Data

```
parent-repo/
├── src/
│   ├── app.py
│   └── utils.py
├── vendor/lib/              <-- subtree (regular directory, regular files)
│   ├── lib.c
│   ├── lib.h
│   └── Makefile
└── README.md
```

There is no `.gitmodules` file. There is no `.git` directory inside `vendor/lib/`. The files exist
as normal blobs in the parent repository's object database. Any Git operation on the parent
(touching files in `vendor/lib/`, committing changes, branching, merging) works exactly the same as
it would for any other directory.

## Adding a Subtree

### Basic Syntax

```bash
git subtree add \
  --prefix=<subdirectory> \
  [--squash] \
  <repository-url> \
  <branch-or-ref> \
  [--message=<message>]
```

### With Squashed History

```bash
$ git subtree add --prefix=vendor/lib --squash https://github.com/org/library.git main
git fetch https://github.com/org/library.git main
warning: no common commits
Author: Your Name <you@example.com>
Date:   Mon Jun 2 10:00:00 2025 +0000

    Squashed 'vendor/lib/' content from commit a3f2b1c

 a3f2b1c Initial commit for library
 lib.c  | 45 +++++++++++++
 lib.h  | 23 +++++++
 Makefile | 18 +++++++
 3 files changed, 86 insertions(+)
 create mode 100644 vendor/lib/lib.c
 create mode 100644 vendor/lib/lib.h
 create mode 100644 vendor/lib/Makefile
```

With `--squash`, the framework creates a single merge commit whose tree contains the subtree files.
The synthetic commit message records the upstream commit SHA that was squashed. This is critical —
it is the bookmark that `git subtree pull` uses to find the starting point for the next pull.

### With Full History

```bash
$ git subtree add --prefix=vendor/lib https://github.com/org/library.git main
```

Without `--squash`, every upstream commit is replayed as a separate commit in the parent repository.
The commit messages are preserved, and `git log` shows the full interleaved history:

```bash
$ git log --oneline vendor/lib/
e5f6a7b Fix buffer overflow in parser
d4c5e6f Add unit tests
c3d4e5f Implement core parsing logic
b2c3d4e Initial commit for library
```

### From a Local Repository

```bash
$ git subtree add --prefix=vendor/lib ../shared-library main
```

Local paths work identically to remote URLs. The repository is fetched via the local Git protocol.

### With a Specific Tag or Commit

```bash
$ git subtree add --prefix=vendor/lib --squash https://github.com/org/library.git v2.1.0
$ git subtree add --prefix=vendor/lib --squash https://github.com/org/library.git a3f2b1c
```

### What Happens Internally

1. `git fetch <repo-url> <ref>` — fetches the upstream branch/tag.
2. `git read-tree --prefix=<dir> -u FETCH_HEAD` — reads the fetched tree into the index at the
   specified prefix, updating the working tree.
3. `git commit` — commits the result.

With `--squash`, step 2 uses a synthetic merge base instead of replaying individual commits. The
merge commit's message contains the upstream SHA: `Squashed '<prefix>/' content from commit <sha>`.

## Pulling Updates

### Basic Syntax

```bash
git subtree pull \
  --prefix=<subdirectory> \
  [--squash] \
  <repository-url> \
  <branch-or-ref>
```

### Pulling with Squashed History

```bash
$ git subtree pull --prefix=vendor/lib --squash https://github.com/org/library.git main
```

The framework finds the last upstream SHA from the previous squash commit message, fetches the
latest upstream, and creates a new squash commit containing only the changes since the last pull.
The result is a linear series of squash commits in the parent:

```bash
$ git log --oneline -- vendor/lib/
f7g8h9i Squashed 'vendor/lib/' content from commit x1y2z3
d4e5f6g Squashed 'vendor/lib/' content from commit a3f2b1c
```

### Pulling with Full History

```bash
$ git subtree pull --prefix=vendor/lib https://github.com/org/library.git main
```

New upstream commits are replayed on top of the existing history. The parent's log now shows the new
upstream commits interleaved with any local commits.

### Handling Conflicts During Pull

If you modified files in the subtree directory locally, and the upstream also modified those files,
you will get merge conflicts:

```bash
$ git subtree pull --prefix=vendor/lib --squash https://github.com/org/library.git main
Auto-merging vendor/lib/lib.c
CONFLICT (content): Merge conflict in vendor/lib/lib.c
Automatic squash merge failed; fix conflicts and then commit the result.
```

Resolve the conflicts, stage the files, and complete the merge:

```bash
$ # Edit vendor/lib/lib.c to resolve conflicts
$ git add vendor/lib/lib.c
$ git commit
```

### Tracking the Upstream

There is no automatic tracking. You must provide the same `<repository-url>` and `<ref>` on every
`subtree pull`. If you want Git to remember the upstream, add a remote:

```bash
$ git remote add lib-upstream https://github.com/org/library.git
$ git subtree pull --prefix=vendor/lib --squash lib-upstream main
```

This is the recommended approach. Name the remote descriptively so it is clear which subtree it
corresponds to.

## Pushing Changes

### Basic Syntax

```bash
git subtree push \
  --prefix=<subdirectory> \
  <repository-url> \
  <branch-or-ref>
```

### Pushing Local Changes Upstream

```bash
$ git subtree push --prefix=vendor/lib lib-upstream main
```

This command extracts all changes in the `vendor/lib/` prefix that have been made locally, creates a
temporary branch containing only those changes, and pushes that branch to the upstream repository.

Internally, `git subtree push`:

1. Runs `git subtree split --prefix=vendor/lib` to create a new branch containing only the subtree
   commits.
2. Pushes that branch to the upstream remote.

### Prerequisites for Pushing

You must have push access to the upstream repository. If you do not, the push will fail with a
permission error. This is by design — subtrees assume a trust relationship between the parent and
upstream repositories.

### What Gets Pushed

Only changes under the specified prefix are pushed. Changes in other directories of the parent
repository are not included. The push creates a linear history on the upstream branch containing
only commits that touched files in the subtree directory.

### The `--squash` Complication

If you used `--squash` when adding and pulling the subtree, the upstream repository sees squash
commits, not the original individual commits. This means:

- The upstream history is a series of "Squashed content from commit X" commits.
- Individual commit messages from the parent are not preserved on the upstream side.
- If multiple developers are pushing to the same upstream from different parent repos, the squash
  commits will conflict.

For bidirectional workflows (pull from upstream AND push to upstream), avoid `--squash`. Use full
history instead.

## Subtree vs Submodules

### Detailed Comparison

| Dimension                | Submodules                                                    | Subtrees                                                  |
| ------------------------ | ------------------------------------------------------------- | --------------------------------------------------------- |
| **Storage model**        | Parent stores a commit reference (mode 160000)                | Parent stores the actual files as regular blobs           |
| **History**              | Separate history in each submodule repo                       | Interleaved with parent (or squashed into single commits) |
| **Clone behavior**       | Requires `--recurse-submodules`; directories empty without it | Single clone; everything is in one repo                   |
| **Repository size**      | Minimal (only references)                                     | Larger (full file content stored in parent)               |
| **Update workflow**      | `git submodule update --remote` + `git add` + commit          | `git subtree pull --prefix=...`                           |
| **Push workflow**        | Work in submodule repo, push from there                       | `git subtree push --prefix=...`                           |
| **Branching/merging**    | Submodule has its own branches; must manage separately        | No separate branches; subtree files are part of parent    |
| **Detached HEAD**        | `git submodule update` checks out in detached HEAD            | Not applicable (no separate checkout)                     |
| **Complexity**           | High (two repos, two sets of commands, `.gitmodules`)         | Lower (single repo, single set of commands)               |
| **CI/CD**                | Must run `git submodule update --init --recursive`            | No special CI handling needed                             |
| **Offline work**         | Cannot update submodules without network                      | Already have all files; can work offline                  |
| **Contributor friction** | High — new contributors forget submodule init                 | Low — clone and go                                        |
| **Removing**             | `git rm` + `git submodule deinit` + clean `.git/modules`      | `git rm -rf <prefix>` + `git remote rm`                   |
| **Best for**             | Large, independently-developed dependencies                   | Vendor libraries, shared code, small dependencies         |

### When to Use Subtrees

- **Vendor dependencies** — embedding a third-party library whose source you want to modify or
  audit.
- **Shared code between projects** — a common library used by multiple internal projects where you
  want to push changes back.
- **Monorepo migration** — gradually extracting subdirectories into separate repos (or vice versa).
- **Simplicity** — when you want a single clone, single branch, and no submodule friction.

### When to Use Submodules

- **Large dependencies** — when the upstream repository is large and you do not want it in your
  repo's object database.
- **Independent development** — when the upstream is actively developed by a separate team and you
  want to track specific commits without merging their entire history.
- **Multiple consumers** — when many projects depend on the same upstream and you want to update
  them independently.
- **Sparse checkout** — when you only need a subset of the upstream's files.

## Extracting a Subdirectory

The inverse of `git subtree add` is `git subtree split`. It creates a new branch (or updates an
existing one) containing only the history of a specific subdirectory.

### Basic Syntax

```bash
git subtree split \
  --prefix=<subdirectory> \
  --branch=<new-branch-name> \
  [--rejoin] \
  [--onto=<branch>]
```

### Creating a New Repository from a Subdirectory

```bash
# 1. In the parent repository, split the subdirectory into a new branch
$ git subtree split --prefix=vendor/lib -b lib-only

# 2. Create a new bare repository from that branch
$ git init --bare /tmp/lib-repo.git
$ cd /tmp/lib-repo.git
$ git pull ../parent-repo lib-only

# Or push to a remote directly
$ git subtree split --prefix=vendor/lib -b lib-only
$ git push origin lib-only:main
```

### The `--rejoin` Flag

The `--rejoin` flag merges the split branch back into the current branch as a subtree merge. This is
used when you have made changes to the subtree locally and want to push them upstream:

```bash
# Split the subtree directory into a separate branch
$ git subtree split --prefix=vendor/lib --rejoin -b lib-only
```

After `--rejoin`, the current branch has a new merge commit that ties the split history back to the
parent. This enables subsequent `git subtree push` operations to find the correct starting point.

### Limitations of Split

- `git subtree split` must replay every commit that touched the subdirectory. On repositories with
  tens of thousands of commits, this can take minutes.
- The split only includes commits that modified files in the prefix. If a commit touched both the
  subtree and other files, the split creates a new commit containing only the subtree changes.
- Squash commits from `git subtree add --squash` are treated as single commits during split. The
  individual upstream history that was squashed is not recoverable.

### Recovering from a Split Gone Wrong

If a split produces unexpected results (wrong files, missing commits), delete the temporary branch
and try again:

```bash
$ git branch -D lib-only
$ git subtree split --prefix=vendor/lib -b lib-only
```

## Removing a Subtree

Removing a subtree is simpler than removing a submodule. Since the files are regular files in the
parent repository, you remove them like any other directory:

### Step-by-Step Removal

```bash
# 1. Remove the subtree directory
$ git rm -rf vendor/lib
rm 'vendor/lib/lib.c'
rm 'vendor/lib/lib.h'
rm 'vendor/lib/Makefile'

# 2. Commit the removal
$ git commit -m "Remove vendor/lib subtree"

# 3. Remove the remote reference (if you added one)
$ git remote rm lib-upstream

# 4. Clean up any dangling objects (optional)
$ git gc --prune=now
```

### Partial Removal

If you want to remove the subtree tracking but keep the files:

```bash
# The files are already regular files — just leave them.
# Remove the remote reference:
$ git remote rm lib-upstream
# The files in vendor/lib/ remain as normal tracked files.
```

There is no `.gitmodules` to clean up, no `.git/modules/` directory to delete. The removal is
exactly the same as removing any directory from a Git repository.

### After Removal, the Upstream Still Has Your Pushes

If you pushed changes upstream via `git subtree push`, those commits remain in the upstream
repository. Removing the subtree from the parent does not revert the upstream. Coordinate with the
upstream maintainers if you need to revert pushed changes.

## Common Workflows

### Vendor Dependencies

The canonical use case: embedding a third-party library as source code.

```bash
# Add a library as a subtree
$ git remote add lib-upstream https://github.com/org/library.git
$ git subtree add --prefix=vendor/lib --squash lib-upstream v2.1.0

# Make local modifications
$ vim vendor/lib/lib.c
$ git add vendor/lib/lib.c
$ git commit -m "fix: patch buffer overflow in vendor lib"

# Pull upstream updates (merging your local changes with theirs)
$ git subtree pull --prefix=vendor/lib --squash lib-upstream main

# Push your patches back upstream (if you have access)
$ git subtree push --prefix=vendor/lib lib-upstream main
```

### Monorepo Management

Using subtrees to compose a monorepo from separate repositories:

```bash
# Create the monorepo
$ mkdir monorepo && cd monorepo
$ git init

# Add each component as a subtree
$ git remote add frontend https://github.com/org/frontend.git
$ git remote add backend https://github.com/org/backend.git
$ git remote add shared https://github.com/org/shared-lib.git

$ git subtree add --prefix=packages/frontend --squash frontend main
$ git subtree add --prefix=packages/backend --squash backend main
$ git subtree add --prefix=packages/shared --squash shared main

# Pull updates from individual components
$ git subtree pull --prefix=packages/frontend --squash frontend main
$ git subtree pull --prefix=packages/backend --squash backend main

# Push changes from the monorepo back to individual repos
$ git subtree push --prefix=packages/frontend frontend main
```

### Sharing Code Between Projects

Two projects share a common library. Changes made in either project are pushed back to the shared
library:

```bash
# In project-a
$ git remote add shared https://github.com/org/shared-lib.git
$ git subtree add --prefix=libs/shared --squash shared main

# Make changes to the shared library
$ vim libs/shared/utils.py
$ git add libs/shared/utils.py
$ git commit -m "feat: add retry logic to shared utils"

# Push changes back to the shared library
$ git subtree push --prefix=libs/shared shared main

# In project-b, pull the latest changes
$ git subtree pull --prefix=libs/shared --squash shared main
```

### Bootstrapping a New Project from an Existing Subdirectory

```bash
# Extract a subdirectory from an existing repo into a new standalone repo
$ git subtree split --prefix=packages/api -b api-standalone
$ git push origin api-standalone:main
```

## Common Pitfalls

### The `--squash` Tradeoff

This is the single most important decision when using subtrees, and getting it wrong causes
significant pain later.

**Using `--squash`**:

- Clean parent history (one commit per pull).
- Fast pulls (no replaying of upstream commits).
- Cannot push meaningful history upstream (push creates a flat, synthetic history).
- Cannot use `git log` in the subtree to see individual upstream commits.
- If you later decide you need full history, you cannot recover it from the squashed commits.

**Not using `--squash`**:

- Full upstream history preserved in the parent.
- Can push and pull with full history.
- Parent history is polluted with upstream commits.
- `git log` shows interleaved commits from the parent and the upstream.
- Pulls are slower (every upstream commit is replayed).

**Recommendation**: Use `--squash` for one-way dependencies (you pull from upstream but never push
back). Use full history for bidirectional workflows (you both pull and push). This decision should
be made at the time of `git subtree add` and must remain consistent — mixing squashed and
non-squashed operations on the same subtree leads to conflicts.

### Merge Conflicts on Pull

If you modified files in the subtree directory and the upstream also modified those same files,
`git subtree pull` produces merge conflicts. The conflict resolution is a standard Git merge
conflict — edit the files, stage them, commit. But the experience is worse than a normal merge
because:

- The conflict markers appear in files you may not fully understand (they are upstream code).
- If you used `--squash`, the conflict is between your local changes and a squash commit containing
  all upstream changes since the last pull. This can be a large diff.
- If you did not use `--squash`, the conflict is between your local changes and individual upstream
  commits, which can be easier to resolve incrementally.

### Large Repository Bloat

Every file in the subtree is stored in the parent repository's object database. If the upstream
repository is large (hundreds of megabytes of source, binary assets, or large history), your parent
repository grows by the same amount. This is unavoidable — it is the cost of embedding the files.

Mitigate by:

- Using `--squash` to avoid storing the full upstream history.
- Using `--depth=1` when fetching to minimize the number of objects pulled.
- Periodically running `git gc --aggressive` to reclaim space from unreachable objects.

### Forgetting the Remote URL

The `git subtree pull` and `git subtree push` commands require the repository URL every time. If you
do not add a named remote, you must type the full URL on every command — and it must match exactly
what you used for `git subtree add`:

```bash
# WRONG: different URL (even if it resolves to the same repo)
$ git subtree add --prefix=vendor/lib --squash https://github.com/org/library.git main
$ git subtree pull --prefix=vendor/lib --squash git@github.com:org/library.git main
# Error: the merge base cannot be found because the URLs differ

# CORRECT: use the same URL, or better, use a named remote
$ git remote add lib-upstream https://github.com/org/library.git
$ git subtree add --prefix=vendor/lib --squash lib-upstream main
$ git subtree pull --prefix=vendor/lib --squash lib-upstream main
```

### `git subtree split` Performance

`git subtree split` replays every commit in the repository's history that touched the prefix. On a
repository with 100,000 commits, this can take 10+ minutes. There is no way to speed this up — it is
an inherent limitation of the algorithm. If you need to split frequently, consider using
`git filter-repo` instead, which is significantly faster.

### Concurrent Pushes from Multiple Parent Repos

If two parent repositories both use subtrees pointing to the same upstream, and both push changes,
the upstream will have conflicting histories. Git cannot resolve this automatically. The second push
will fail with a non-fast-forward error, and the pusher must pull, resolve conflicts, and push
again. This is fundamentally a coordination problem — subtrees assume a single source of truth for
the upstream.

### Deleting and Re-adding a Subtree

If you `git rm -rf vendor/lib` and later `git subtree add --prefix=vendor/lib` again, the framework
cannot reuse the previous history. The new subtree add starts fresh. If you need to re-add a
subtree, consider whether `git subtree pull` (to update the existing subtree) is what you actually
want.

### Subtree Commands Are Slow for Large Prefixes

`git subtree add`, `pull`, and `push` all involve `git fetch`, `git read-tree`, and `git merge`. For
large subtrees (thousands of files), these operations can be slow. The framework does not support
partial subtree operations — you always operate on the entire prefix. If performance is a concern
and the upstream is large, submodules may be a better choice.

### No Automatic Tracking

Unlike submodules (which have `.gitmodules` to record the URL and path), subtrees have no metadata
file. The framework relies on the squash commit message (or the interleaved history) to track the
upstream state. If the squash commit message is edited or the history is rewritten, the framework
loses track of the upstream merge base, and subsequent `git subtree pull` operations may fail or
produce incorrect results.

### Windows Path Separator Issues

On Windows, Git may use backslashes in paths, but `git subtree` expects forward slashes in the
`--prefix` argument:

```bash
# WRONG on Windows (may fail depending on Git version)
$ git subtree add --prefix=vendor\lib --squash https://github.com/org/library.git main

# CORRECT: always use forward slashes
$ git subtree add --prefix=vendor/lib --squash https://github.com/org/library.git main
```
