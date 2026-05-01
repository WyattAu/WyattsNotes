---
title: Filter-Repo (History Rewriting)
description:
  Filter-Repo (History Rewriting) — What filter-repo Is; Why filter-branch Was
  Problematic. with additional techniques and methods.
slug: filter-repo
---

## What filter-repo Is

`git-filter-repo` is a Python-based tool for rewriting Git repository history. It is the modern,
recommended replacement for `git filter-branch`, which has been deprecated since Git 2.24 (December
2019). `git-filter-repo` was written by Elijah Newren, a Git core contributor, and addresses the
fundamental design flaws of `filter-branch`.

### Why filter-branch Was Problematic

`git filter-branch` suffered from several architectural issues that made it dangerous in practice:

- **Slow**: Rewrote every commit sequentially using shell commands, making it unusably slow on large
  repositories.
- **Did not clean up properly**: Left behind `.git/refs/original/` backup refs and failed to expire
  reflogs, meaning rewritten objects persisted and `git gc` would not reclaim disk space.
- **No safety checks**: Could operate on a repository with a dirty working tree, leading to data
  loss.
- **State leakage**: Used shell environment variables for inter-process communication, which was
  fragile and could be poisoned by the user's shell configuration.
- **No rename detection**: Could not track file renames, so rewriting a file's path would break
  history.

`git-filter-repo` fixes all of these. It operates directly on Git's fast-import/fast-export format
(bypassing the object database entirely during rewriting), automatically cleans up refs and reflogs,
refuses to run on dirty working trees, and supports rename detection.

### Core Design

`git-filter-repo` works by:

1. Exporting the repository history using `git fast-export --all`.
2. Streaming the export through Python callbacks that modify commits, blobs, trees, and tags.
3. Re-importing the modified history using `git fast-import`.
4. Cleaning up all refs, reflogs, and the original object database.

This pipeline approach means it never needs to read the full object database into memory — it
processes objects as a stream, making it both fast and memory-efficient.

## Installation

### pip Install (Recommended)

```bash
# Install from PyPI
$ pip install git-filter-repo

# Verify installation
$ git filter-repo --version
git-filter-repo 2.45.0
```

### Standalone Download

If you cannot install via pip (e.g., in a container without Python packaging):

```bash
# Download the standalone script
$ curl -o git-filter-repo https://raw.githubusercontent.com/newren/git-filter-repo/main/git-filter-repo

# Make it executable
$ chmod +x git-filter-repo

# Move it to your PATH
$ sudo mv git-filter-repo /usr/local/bin/

# Verify
$ git filter-repo --version
```

The standalone script is a single Python file with no external dependencies beyond Python 3 and Git
itself.

### Platform-Specific Notes

```bash
# On Debian/Ubuntu, the system package is outdated — use pip instead
$ sudo apt install git-filter-repo   # May be an old version
$ pip install git-filter-repo         # Always the latest

# On macOS
$ brew install git-filter-repo

# In Docker, add to your Dockerfile
RUN pip install git-filter-repo

# Check which git-filter-repo you are using
$ which git-filter-repo
/home/user/.local/bin/git-filter-repo
```

## Common Operations

### Operation Reference Table

| Operation                        | Command                                                      | Effect                                                                 |
| -------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------- |
| Remove a file from all history   | `git filter-repo --path path/to/file --invert-paths`         | Deletes the file and all commits that only touched that file           |
| Keep only specific files         | `git filter-repo --path path/to/keep --path another/file`    | Removes everything except the specified paths                          |
| Extract subdirectory as new repo | `git filter-repo --subdirectory-filter path/`                | Rewrites history as if the repo had always been just that subdirectory |
| Rewrite author name/email        | `git filter-repo --mailmap .mailmap`                         | Replaces author/committer names and emails based on a mailmap file     |
| Replace text in all files        | `git filter-repo --replace-text expressions.txt`             | Performs string replacements across all blobs in history               |
| Remove large blobs               | `git filter-repo --strip-blobs-bigger-than 10M`              | Removes any blob larger than the specified size                        |
| Remove blobs by name             | `git filter-repo --strip-blobs-with-ids file.txt`            | Removes specific blobs listed in a file (one SHA per line)             |
| Replace blob content             | `git filter-repo --blob-callback 'return blob.replace(...)'` | Python callback for arbitrary blob modifications                       |
| Rename files                     | `git filter-repo --path-rename old/path:new/path`            | Renames files/directories across all history                           |
| Add a prefix to all paths        | `git filter-repo --prefix new-prefix/`                       | Prepends a directory prefix to all file paths                          |

### Removing a File from All History

```bash
# Remove a sensitive file from the entire history
$ git filter-repo --path config/production.yml --invert-paths

# Remove multiple files
$ git filter-repo --path secret.key --path .env --invert-paths

# Remove all files matching a glob pattern
$ git filter-repo --path-glob '*.pem' --invert-paths
```

The `--invert-paths` flag inverts the selection: `--path X --invert-paths` means "keep everything
except X." Without `--invert-paths`, `--path X` means "keep only X."

After removing files, commits that become empty (they only touched the removed files) are also
removed. This is usually the desired behavior, but it can be surprising if you expected those
commits to remain.

### Extracting a Subdirectory as a New Repository

```bash
# Clone the original repo (filter-repo requires a fresh clone)
$ git clone https://github.com/org/monorepo.git my-subproject
$ cd my-subproject

# Extract a subdirectory as the new root
$ git filter-repo --subdirectory-filter packages/api/

# The repo now contains only the contents of packages/api/
# All commit history is rewritten to reflect this
$ git log --oneline
a3f2b1c Add rate limiting
b4c5d6e Initial API setup
```

This is the standard approach for splitting a monorepo into individual repositories. The
`--subdirectory-filter` flag removes all paths except those under the specified directory and
rewrites the root to be that directory.

### Rewriting Author Information

Using a `.mailmap` file (the standard Git mailmap format):

```bash
# Create a .mailmap file
$ cat > .mailmap << 'EOF'
New Name <new@email.com> <old@email.com>
Correct Name <correct@email.com> Old Name <old@email.com>
EOF

# Run filter-repo with the mailmap
$ git filter-repo --mailmap .mailmap
```

The mailmap format is `<new-name> <new-email> <old-name> <old-email>`. You can omit the new name or
new email if you only want to change one field:

```
# Change only the email
<new@email.com> Old Name <old@email.com>

# Change only the name
New Name <existing@email.com> <old@email.com>
```

For more complex transformations, use Python callbacks:

```bash
# Rewrite all author emails to lowercase
$ git filter-repo --email-callback 'return email.lower()'

# Replace a specific domain
$ git filter-repo --email-callback 'return email.replace("@oldcompany.com", "@newcompany.com")'

# Rewrite author names
$ git filter-repo --name-callback 'return name.replace("John Doe", "Jane Doe")'
```

### Replacing Text in All Files

```bash
# Create an expressions file
$ cat > expressions.txt << 'EOF'
literal:old-password-123==>new-secure-value
regex:API_KEY=[A-Za-z0-9]+==>API_KEY=REDACTED
glob:*.cfg==>config-backup/
EOF

# Run the replacement
$ git filter-repo --replace-text expressions.txt
```

### Removing Large Binary Files

```bash
# Remove blobs larger than 10MB
$ git filter-repo --strip-blobs-bigger-than 10M

# Remove blobs larger than 1MB
$ git filter-repo --strip-blobs-bigger-than 1M

# Remove blobs larger than 500KB (use K suffix)
$ git filter-repo --strip-blobs-bigger-than 500K

# List what would be removed (dry run)
$ git filter-repo --strip-blobs-bigger-than 10M --dry-run
```

### Renaming Files Across History

```bash
# Rename a file in all commits
$ git filter-repo --path-rename old-name.txt:new-name.txt

# Move a directory in all commits
$ git filter-repo --path-rename src/lib/:libs/

# Add a prefix to all paths
$ git filter-repo --prefix my-project/
```

## Expressions File Format

The `--replace-text` and `--replace-refs` flags accept an expressions file with specific syntax
rules:

### Line Syntax

```
literal:TEXT_TO_FIND==>REPLACEMENT
regex:PATTERN==>REPLACEMENT
glob:PATTERN==>REPLACEMENT
```

- `literal:` — exact string match (no regex interpretation)
- `regex:` — Python-compatible regular expression
- `glob:` — glob pattern matching
- `==>` — separator between match and replacement (can be omitted if only matching, not replacing)
- If no `==>REPLACEMENT` is provided, matching lines/blobs are **deleted entirely**

### Examples

```bash
# expressions.txt for common secret removal
$ cat > expressions.txt << 'EOF'
# Remove AWS access keys (literal match)
literal:AKIAIOSFODNN7EXAMPLE==>

# Replace database connection strings
regex:postgresql://[^:]+:[^@]+@([^/]+)==>postgresql://REDACTED:REDACTED@\1

# Remove .env files entirely
glob:.env==>
EOF
```

### Replacement References

In regex replacements, `\1`, `\2`, etc. reference captured groups:

```
# Mask the password but keep the username and host
regex:mysql://([^:]+):([^@]+)@(.*)==>mysql://\1:REDACTED@\3
```

### Per-Blob vs Per-Line

By default, `--replace-text` operates on entire blobs. To operate line-by-line (useful for removing
lines containing secrets while keeping the rest of the file):

```bash
# Replace text line-by-line (lines matching are replaced or removed)
$ git filter-repo --replace-text expressions.txt
```

## filter-branch vs filter-repo

### Feature Comparison

| Feature                    | `filter-branch`                          | `filter-repo`                                 |
| -------------------------- | ---------------------------------------- | --------------------------------------------- |
| Speed                      | Slow (shell-based, sequential)           | Fast (Python, streaming via fast-export)      |
| Safety                     | Runs on dirty working trees              | Refuses to run unless working tree is clean   |
| Cleanup                    | Leaves `.git/refs/original/` backup refs | Automatically removes backup refs and reflogs |
| Rename detection           | None                                     | Full rename detection support                 |
| Blob callback              | Limited (shell commands)                 | Full Python callback API                      |
| Dry run                    | Not supported                            | `--dry-run` flag                              |
| Progress reporting         | Minimal                                  | Detailed progress with `--force`              |
| Large repo support         | Often runs out of memory or time         | Handles repos with millions of commits        |
| Maintenance status         | Deprecated since Git 2.24                | Actively maintained                           |
| Repository state after run | Dirty (needs manual cleanup)             | Clean (fully gc'd)                            |

### Performance Comparison

On a repository with 50,000 commits and 10,000 files:

| Operation            | `filter-branch` | `filter-repo` |
| -------------------- | --------------- | ------------- |
| Remove a file        | 45 minutes      | 2 minutes     |
| Rewrite author info  | 30 minutes      | 90 seconds    |
| Remove large blobs   | 60 minutes      | 3 minutes     |
| Extract subdirectory | 50 minutes      | 2.5 minutes   |

These numbers are approximate and depend on hardware, but the order-of-magnitude difference is
consistent. `filter-repo` is 15-30x faster because it avoids creating intermediate Git objects — it
streams modifications directly through the fast-import/fast-export pipeline.

### Why filter-branch Is Still in Git

`filter-branch` is still shipped with Git for backward compatibility, but its man page includes a
prominent warning directing users to `git-filter-repo`. Running `git filter-branch` produces a
deprecation notice:

```
WARNING: git-filter-branch has a glut of gotchas generating mangled history
         and rewrites that are hard to forensically investigate.
         Use git-filter-repo instead.
```

## Use Cases

### Removing Secrets and Credentials from History

This is the most common use case. A secret (API key, password, certificate) was committed to the
repository and needs to be removed from all history, not just the current working tree:

```bash
# 1. Clone the repository fresh (filter-repo requires a fresh clone)
$ git clone https://github.com/org/repo.git repo-clean
$ cd repo-clean

# 2. Remove the file containing secrets
$ git filter-repo --path config/secrets.yml --invert-paths

# 3. Or replace specific text across all files
$ cat > expressions.txt << 'EOF'
literal:AKIAIOSFODNN7EXAMPLE==>REDACTED
literal:wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY==>REDACTED
EOF
$ git filter-repo --replace-text expressions.txt

# 4. Verify the secret is gone from all history
$ git log --all -p | grep -i "AKIAIOSFODNN7EXAMPLE"
# (should return nothing)
```

**Critical**: After removing secrets, you must **rotate the compromised credentials immediately**.
Even though the secret is removed from Git history, it may have been:

- Cached by GitHub/GitLab's internal systems
- Cloned by other users
- Included in forked repositories
- Captured by CI/CD logs
- Mirrored to other hosting services

Removing the secret from Git is necessary but not sufficient. Always rotate.

### Extracting a Subdirectory as a New Monorepo

```bash
# 1. Clone the monorepo
$ git clone https://github.com/org/monorepo.git
$ cd monorepo

# 2. Extract the subdirectory
$ git filter-repo --subdirectory-filter packages/api-server

# 3. Update the remote to point to the new repository
$ git remote set-url origin https://github.com/org/api-server.git

# 4. Push the new history
$ git push --force origin main
```

### Rewriting Author Names After a Company Change

```bash
# Scenario: employee changed name and email
$ cat > .mailmap << 'EOF'
Jane Smith <jane.smith@newcompany.com> John Doe <john.doe@oldcompany.com>
EOF

$ git filter-repo --mailmap .mailmap

# Verify
$ git log --format='%an <%ae>' | sort -u
Jane Smith <jane.smith@newcompany.com>
Other Developer <other@company.com>
```

### Removing Large Binary Files

Large binary files (images, datasets, compiled artifacts) bloat a repository and slow down clones.
Removing them from history is a common cleanup task:

```bash
# Identify the largest files in the repository
$ git rev-list --objects --all \
  | git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' \
  | sed -n 's/^blob //p' \
  | sort --numeric-sort --key=2 --reverse \
  | head -20

# Remove blobs larger than 5MB
$ git filter-repo --strip-blobs-bigger-than 5M

# Verify the size reduction
$ du -sh .git
# Before: 2.3G
# After: 340M
```

### Repo Splitting

When splitting a monorepo, you often need to extract multiple subdirectories into separate
repositories:

```bash
# For each subdirectory you want to extract:
$ git clone https://github.com/org/monorepo.git /tmp/extract-frontend
$ cd /tmp/extract-frontend
$ git filter-repo --subdirectory-filter packages/frontend
# Push to the new frontend repository

$ git clone https://github.com/org/monorepo.git /tmp/extract-backend
$ cd /tmp/extract-backend
$ git filter-repo --subdirectory-filter packages/backend
# Push to the new backend repository
```

Note that each extraction must be done from a fresh clone because `filter-repo` modifies the
repository in-place and refuses to run on a repository that has already been filtered (unless you
use `--force`).

## After Rewriting

### Cleaning Up

`git-filter-repo` automatically handles most cleanup, but you should verify:

```bash
# filter-repo automatically:
# - Removes .git/refs/original/
# - Expires all reflogs
# - Runs git gc

# Verify the cleanup was successful
$ git reflog
# (should be empty or very short)

$ git fsck
# (should report no issues)

# Check for any remaining large objects
$ git rev-list --objects --all \
  | git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' \
  | sed -n 's/^blob //p' \
  | awk '$3 > 10000000 {print}' \
  | sort --numeric-sort --key=2 --reverse
```

If for some reason the cleanup was not complete (e.g., you interrupted the process):

```bash
# Manual cleanup
$ git reflog expire --expire=now --all
$ git gc --prune=now --aggressive
```

### Force Pushing

After rewriting history, you must force push to the remote because all commit SHAs have changed:

```bash
# Force push to overwrite the remote history
$ git push --force origin main

# Force push all branches
$ git push --force --all origin

# Force push all tags
$ git push --force --tags origin
```

**Never force push to a shared branch without coordination.** All collaborators must be notified and
must re-clone or rebase their local branches.

### Notifying Collaborators

After rewriting history, every collaborator with a local clone must either re-clone or rebase:

```bash
# Option 1: Re-clone (simplest, safest)
$ git clone https://github.com/org/repo.git repo-fresh

# Option 2: Rebase local branches onto the new history
$ git fetch origin
$ git rebase origin/main
# Resolve any conflicts (rebasing onto rewritten history will show conflicts
# for every commit that was modified, since the base commits have changed)
```

The rebase approach is painful for large numbers of commits because every commit will likely
conflict (the parent SHAs have all changed, so Git cannot fast-forward). Re-cloning is strongly
recommended.

### Verifying the Rewrite

After rewriting, verify that the repository is in a consistent state:

```bash
# Check that the current working tree matches what you expect
$ git diff HEAD  # Should be empty (no uncommitted changes)

# Check that the file was removed from all history
$ git log --all --full-history -- path/to/removed/file
# Should return nothing

# Check that the repo builds and tests pass
$ make test

# Check that the commit count is reasonable
$ git rev-list --count HEAD
# Compare with the original (some commits may have been removed if they
# only touched deleted files)

# Check author information
$ git log --format='%an <%ae>' | sort -u
```

## Dangers

### All Commit SHAs Change

This is the fundamental consequence of history rewriting. Every commit that was modified (which is
usually all of them, since changing a file in any commit changes its tree hash, which changes its
commit hash, which cascades to all descendant commits) gets a new SHA.

```
Before:
  A -- B -- C -- D -- E

After removing a file from commit B:
  A' -- B' -- C' -- D' -- E'
```

The content of commits D and E may be identical to before, but their SHAs are different because
their ancestors changed.

### Force Push Is Destructive

Force pushing overwrites the remote history. If any collaborator has based work on the old history,
their branches will diverge:

```bash
# Collaborator's local branch points to old commits:
# local:  A -- B -- C -- D -- E
# remote: A'-- B'-- C'-- D'-- E'

# After git pull, they get a merge conflict:
$ git pull
# CONFLICT: divergent histories
```

### Forks and Mirrors Are Not Updated

Rewriting history on the main repository does not update forks, mirrors, or copies. The old history
(including any secrets you removed) remains accessible in:

- GitHub/GitLab forks
- CI/CD system caches
- Mirror repositories (GitLab mirrors, internal mirrors)
- Backup systems
- Local clones on any machine

You must audit and update all of these independently. GitHub provides a "Contact GitHub Support"
option to request removal of cached objects from forks, but this is not guaranteed and may take
time.

### Tags Become Invalid

Annotated tags point to specific commit SHAs. After rewriting, the old SHAs no longer exist, so old
tags become dangling references. `git-filter-repo` rewrites tags automatically, but you must
force-push them:

```bash
$ git push --force --tags origin
```

### Signed Commits Become Invalid

Commit signatures cover the commit's content including its tree hash and parent hash. After
rewriting, the tree and parent hashes change, so the signature is no longer valid. All rewritten
commits lose their signatures:

```bash
# Before rewriting:
$ git verify-commit HEAD
Good "gpg" signature from "Developer <dev@example.com>"

# After rewriting:
$ git verify-commit HEAD
error: no signature found
```

If `commit.gpgsign = true`, you can re-sign all commits during the rewrite using a callback, but
this is complex and not recommended for most use cases.

### CI/CD Build Caches

Many CI/CD systems cache Git objects to speed up builds. After a history rewrite, these caches
contain the old (pre-rewrite) objects. Clear all caches:

```bash
# GitHub Actions: caches are stored per-branch and per-workflow
# Clear them via GitHub UI: Actions > Caches > delete

# GitLab CI: clear runner caches
# Settings > CI/CD > Runners > clear cache

# Jenkins: clear workspace and caches
# Manage Jenkins > Manage Nodes > clear workspace
```

## Common Pitfalls

### Running on a Non-Fresh Clone

`git-filter-repo` refuses to run on a repository that has remote refs pointing to a URL. This is a
safety mechanism to prevent accidental pushes of rewritten history. You must clone the repository
first:

```bash
# WRONG: running on an existing clone with remotes
$ git filter-repo --path secret.key --invert-paths
# ERROR: Need a fresh clone

# CORRECT: clone first
$ git clone https://github.com/org/repo.git /tmp/repo-clean
$ cd /tmp/repo-clean
$ git filter-repo --path secret.key --invert-paths
```

If you must run on an existing clone, use `--force`, but understand the risks:

```bash
$ git filter-repo --path secret.key --invert-paths --force
```

### Forgetting to Remove the Expressions File

The expressions file used with `--replace-text` may itself contain the secrets you are trying to
remove. Do not commit this file:

```bash
# Add expressions.txt to .gitignore
$ echo "expressions.txt" >> .gitignore

# Or use a file outside the repository
$ git filter-repo --replace-text /tmp/expressions.txt
```

### Not Verifying the Result

After running `filter-repo`, always verify that:

- The secret is completely removed from all history
- The repository builds and tests pass
- No unintended files or commits were removed
- The commit history is coherent (no orphaned commits, no broken chains)

```bash
# Verify no secrets remain
$ git log --all -p | grep -i "SECRET_PATTERN"
$ git rev-list --all | xargs git grep "SECRET_PATTERN"

# Verify the build works
$ make build && make test
```

### Running on a Branch Instead of a Full Clone

`git-filter-repo` operates on the entire repository by default. If you only want to rewrite a
specific branch, you must use `--refs`:

```bash
# Only rewrite the main branch
$ git filter-repo --path secret.key --invert-paths --refs main

# Only rewrite specific branches
$ git filter-repo --path secret.key --invert-paths --refs main --refs develop
```

Without `--refs`, filter-repo rewrites all branches, which may not be what you want if you have
release branches that intentionally contain different versions of files.

### Assuming Removal Is Sufficient for Security

Removing a secret from Git history does not make it safe. The secret was exposed at the time of the
commit and may have been:

- Observed by other contributors with repository access
- Included in email notifications (GitHub sends commit emails)
- Cached by Git hosting provider internal systems
- Pulled by external mirrors or CI systems
- Captured in browser history or API logs

Always rotate the credential. Treat Git history rewriting as a cleanup step, not a security fix.

### Using filter-branch Instead of filter-repo

Some tutorials and Stack Overflow answers still recommend `git filter-branch`. This is outdated
advice. `filter-branch` is deprecated, slow, and leaves behind data that it should have cleaned up.
Always use `git-filter-repo` for new work.

### Not Backing Up Before Rewriting

`git-filter-repo` is destructive and irreversible. Before running it, create a backup:

```bash
# Create a bare clone as a backup
$ git clone --bare https://github.com/org/repo.git /tmp/repo-backup.git

# Or copy the .git directory
$ cp -a .git /tmp/repo-backup.git

# Then run filter-repo
$ git filter-repo --path secret.key --invert-paths
```

### Ignoring Submodules and Nested Repositories

`git-filter-repo` does not recurse into submodules. If a secret exists in a submodule, you must run
`filter-repo` on the submodule repository independently:

```bash
# Filter the main repo
$ git filter-repo --path secret.key --invert-paths

# Filter each submodule separately
$ cd path/to/submodule
$ git filter-repo --path secret.key --invert-paths
```

### Forgetting to Update CI/CD Pipeline References

After rewriting history, any CI/CD pipelines that reference specific commit SHAs will break. Update:

- Pipeline trigger configurations (branch names, tag patterns)
- Deployment scripts that pin to specific commits
- Release notes that reference commit SHAs
- Issue tracker links that reference commits
