---
title: Advanced Git Commands
description:
  "Git version control: Advanced Git Commands — git replace; Basic Syntax; Replace one object with another; Replace using an edited version of the original."
date: 2026-04-07T00:00:00.000Z
tags:
  - Git
categories:
  - Git
slug: advanced-git-commands
---

This document covers Git commands and features that are powerful but less frequently used in
day-to-day workflows. These tools solve specific problems around metadata, history manipulation,
repository integrity, and multi-tree management.

## git replace

### Overview

`git replace` allows you to tell Git to use one object in place of another without rewriting the
object database. When Git encounters the original object, it transparently substitutes the
replacement. This is a non-destructive mechanism for altering how history appears.

**Definition.** A replacement ref is a reference stored under `refs/replace/` that maps an original
object hash to a replacement object hash. Git resolves these references during object lookups,
presenting the replacement as if it were the original.

### Basic Syntax

```bash
# Replace one object with another
git replace <original-object> <replacement-object>

# Replace using an edited version of the original
git replace --edit <object>

# Graft: make a commit appear to have a different parent
git replace --graft <commit> [<parent>...]

# List all replacements
git replace -l

# Delete a specific replacement
git replace -d <object>

# Delete all replacements
git replace -d $(git replace -l)
```

### How It Works

When you run `git replace A B`, Git creates a ref at `refs/replace/A` pointing to `B`. During any
object lookup, Git checks whether the requested object has an entry under `refs/replace/`. If it
does, Git returns the replacement instead.

```
refs/replace/
  a3f2b1c0...  ->  d4e5f6a7...   (commit replacement)
  b7c8d9e0...  ->  e1f2a3b4...   (blob replacement)
```

This means:

- The original object still exists in the object store, unchanged.
- The replacement object must already exist in the object store.
- The replacement is local by default; it is not pushed unless you explicitly push `refs/replace/`.

### Viewing Replacements

```bash
# List all replacement refs
$ git replace -l

# Show what an object is replaced with
$ git cat-file -p $(git replace -l | head -1)

# Show a replaced commit as it appears after replacement
$ git log --no-replace-objects -1 <original-commit>
# vs.
$ git log -1 <original-commit>
```

The `--no-replace-objects` flag disables replacement resolution, letting you see the raw original
object.

### Grafting History with `--graft`

Grafting re-parents a commit, making it appear as if it has different parents. This is useful for
stitching together unrelated histories.

```bash
# Make commit C appear as if root-commit is its parent (joining two histories)
git replace --graft <commit-C> <root-commit>

# Make a commit appear as a root commit (no parents)
git replace --graft <commit>

# Make a commit appear to have two parents (octopus merge)
git replace --graft <commit> <parent1> <parent2>
```

:::info

Grafts created with `git replace --graft` are stored as replacement commit objects under
`refs/replace/`. They differ from the older `~/.git/info/grafts` mechanism, which was not ref-based
and could not be pushed or shared.

:::

### Editing an Object for Replacement

```bash
# Create an edited replacement for a commit
git replace --edit <commit>

# This opens your editor with the commit's contents.
# You can modify the commit message, author, committer, or parent list.
# Git creates a new commit object and registers it as the replacement.
```

Use cases for `--edit`:

- Fixing a typo in a commit message deep in history.
- Correcting author email or name.
- Changing the commit message to reference an issue tracker.

### Use Cases

#### Rewriting History Without Rebase

Suppose commit `abc1234` has a bad message, but it is 50 commits deep with many branches depending
on it. An interactive rebase would be disruptive. Instead:

```bash
# Create a new commit with the same tree but different message
git commit-tree abc1234^{tree} -p abc1234^ -m "Correct commit message"
# Outputs: def5678...

# Register the replacement
git replace abc1234 def5678
```

Now `git log` shows `def5678` with the corrected message, but the original `abc1234` remains in the
object store. All child commits still reference `abc1234` internally, but Git transparently shows
`def5678`.

#### Combining Commits

You can replace two adjacent commits with a single squashed commit:

```bash
# Create a new commit with the combined changes
git merge-tree --write-tree $(git hash-file -t commit first^) first second
# Then create the commit object
git commit-tree <tree-hash> -p second^ -m "Combined: first and second"
```

#### Fixing Author Info

```bash
# Edit the commit to fix the author
git replace --edit <commit>
# In the editor, change the author line
```

### Making Replacements Permanent

Replacements are transient by default. To bake them into the object store permanently:

```bash
# Rewrite history to make replacements permanent
git filter-branch --all -- --no-replace-objects

# Or with git-filter-repo (preferred)
git filter-repo --replace-refs delete-no-add
```

:::warning

Once you push `refs/replace/` to a shared repository, all collaborators will see the replaced
history. If the replacement changes commit hashes, downstream branches may break. Coordinate with
your team before pushing replacement refs.

:::

### Comparison Table

| Operation             | Mechanism                 | Permanence        | Pushes by default |
| --------------------- | ------------------------- | ----------------- | ----------------- |
| `git replace`         | Ref under `refs/replace/` | Transient (local) | No                |
| `git replace --graft` | Replacement commit ref    | Transient (local) | No                |
| `~/.git/info/grafts`  | Grafts file (legacy)      | Local only        | No                |
| `git rebase`          | New commit objects        | Permanent         | Yes               |
| `git filter-branch`   | Rewrites object store     | Permanent         | Yes               |

---

## git notes

### Overview

`git notes` attaches arbitrary metadata to Git objects (typically commits) without modifying the
objects themselves. Notes are stored as ordinary Git objects in a special ref, making them versioned
and distributable.

**Definition.** A Git note is a blob object associated with a specific commit, stored in a tree
under `refs/notes/commits`. The mapping from commit to note is maintained through a tree structure
where each path component corresponds to characters of the commit hash.

### Basic Syntax

```bash
# Add a note to a commit
git notes add [-m "message" | -F <file>] [<object>]

# Show the note for a commit
git notes show [<object>]

# List all notes
git notes list

# Edit the note for a commit (opens editor)
git notes edit [<object>]

# Remove a note
git notes remove [<object>]

# Copy notes from one commit to another
git notes copy <from-object> <to-object>

# Append to an existing note
git notes append [-m "message"] [<object>]

# Merge notes from another ref
git notes merge <notes-ref>

# Prune empty note refs
git notes prune
```

### How Notes Are Stored

Notes live under `refs/notes/commits`. The tree structure maps commit hashes to note blobs using a
directory tree keyed by hex characters of the commit hash:

```
refs/notes/commits  ->  tree
  ab/                ->  tree
    c3d4e5f6...      ->  blob (note content for commit abc3d4e5f6...)
  de/                ->  tree
    f7a8b9c0...      ->  blob (note content for commit def7a8b9c0...)
```

This structure enables efficient lookups without scanning all notes.

### Adding and Viewing Notes

```bash
# Add a note to the current HEAD
$ git notes add -m "Reviewed by Sarah, approved with minor nits"
[notes/commits abc1234] Notes added to HEAD

# Add a note to a specific commit
$ git notes add -m "Build #4521 failed: test_timeout" a3f2b1c0

# Show the note
$ git notes show HEAD
Reviewed by Sarah, approved with minor nits

# List all notes (shows commit hash and note blob hash)
$ git notes list
a3f2b1c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6 b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6
```

### Editing and Removing Notes

```bash
# Edit a note in your configured editor
$ git notes edit HEAD

# Remove a note entirely
$ git notes remove HEAD

# Remove a note from a specific commit
$ git notes remove a3f2b1c0
```

### Appending to Notes

```bash
# Append additional information to an existing note
$ git notes append -m "Follow-up: regression confirmed in v2.3.1"
```

If no note exists for the commit, `append` behaves like `add`.

### Merging Notes

When notes from different branches diverge, you can merge them:

```bash
# Merge notes from another notes ref
$ git notes merge refs/notes/commits-from-other-branch

# Merge with a specific strategy
$ git notes merge -s ours refs/notes/commits-from-other-branch
$ git notes merge -s theirs refs/notes/commits-from-other-branch
$ git notes merge -s cat-sort-uniq refs/notes/commits-from-other-branch
```

Available merge strategies:

| Strategy        | Behavior                                   |
| --------------- | ------------------------------------------ |
| `ours`          | Discard incoming notes, keep local         |
| `theirs`        | Discard local notes, take incoming         |
| `manual`        | Leave conflicts for manual resolution      |
| `cat-sort-uniq` | Concatenate, sort lines, remove duplicates |

### Note Namespaces

You can maintain multiple sets of notes using different refs:

```bash
# Create a notes ref for CI results
$ git notes --ref=refs/notes/ci add -m "Build passed, all 847 tests green" HEAD

# View CI notes
$ git notes --ref=refs/notes/ci show HEAD

# Create a notes ref for code review
$ git notes --ref=refs/notes/reviews add -m "LGTM" HEAD

# List notes in a specific namespace
$ git notes --ref=refs/notes/reviews list
```

### Showing Notes in git log

By default, `git log` does not display notes. Use `--notes` to include them:

```bash
# Show notes alongside commit messages
$ git log --notes

# Show notes from a specific namespace
$ git log --notes=refs/notes/ci

# Show notes from all namespaces
$ git log --notes=*

# Show notes with a custom format
$ git log --format="%h %s%n%N" --notes
```

The `%N` format specifier expands to the note content. `%n` expands to a newline.

### Pushing and Fetching Notes

Notes refs are not pushed or fetched by default:

```bash
# Push notes
$ git push origin refs/notes/commits

# Fetch notes
$ git fetch origin refs/notes/commits:refs/notes/commits

# Push all notes refs
$ git push origin 'refs/notes/*:refs/notes/*'

# Configure a remote to push notes automatically
$ git config remote.origin.push refs/notes/*:refs/notes/*
```

### Use Cases

#### Code Review Notes

```bash
# After reviewing a commit, attach the review summary
$ git notes add -m "Code review: 3 issues found
- Missing null check on line 42
- Use enum instead of int for status field
- Consider extracting helper function" a3f2b1c0
```

#### CI/CD Results

```bash
# In a CI pipeline, attach build results to the commit
$ git notes --ref=refs/notes/ci add -m "CI Result: SUCCESS
Build: #1234
Duration: 4m 32s
Tests: 847/847 passed
Coverage: 87.3%" HEAD
```

#### Linking to Issue Trackers

```bash
# Attach issue tracker references to commits
$ git notes add -m "Jira: PROJ-1234
Status: Closed
Resolution: Fixed" HEAD
```

#### Supplementary Documentation

```bash
# Add rationale for non-obvious changes
$ git notes add -m "Why this approach:
The naive solution would iterate O(n^2), but we can reduce this
to O(n log n) by using a balanced BST. Benchmarked on 10M records:
- Naive: 45s
- BST: 0.3s" HEAD
```

:::warning

Notes are mutable and not cryptographically tied to the commit they annotate. Anyone with push
access to `refs/notes/commits` can modify notes. Do not rely on notes for security-critical
metadata.

:::

---

## git describe

### Overview

`git describe` produces a human-readable name for a commit based on the nearest annotated tag. It is
primarily used for generating version strings in build systems.

**Definition.** `git describe` finds the most recent annotated tag that is an ancestor of the given
commit, then appends the number of additional commits and an abbreviated object name to uniquely
identify the commit.

### Basic Syntax

```bash
# Describe the current HEAD
git describe

# Describe a specific commit
git describe <commit>

# Describe using all tags (not just annotated ones)
git describe --tags

# Describe using all refs (branches, tags, etc.)
git describe --all

# Set the minimum abbreviation length
git describe --abbrev=<n>

# Use the longest match instead of the nearest tag
git describe --long

# Always show the full abbreviated hash (equivalent to --abbrev=40)
git describe --always

# Mark the working tree as dirty if there are uncommitted changes
git describe --dirty

# Append a suffix for dirty trees
git describe --dirty=-modified

# Exclude certain patterns from matching
git describe --match=<pattern>

# Only match tags that contain the pattern
git describe --contains

# Find the tag the commit is pointed at by
git describe --abbrev=0
```

### Output Format

```
v2.3.1-14-ga3f2b1c
```

Breakdown:

| Component | Meaning                                                     |
| --------- | ----------------------------------------------------------- |
| `v2.3.1`  | The nearest annotated tag that is an ancestor of the commit |
| `-14`     | 14 commits after the tag                                    |
| `-g`      | Literal "g" (for "git")                                     |
| `a3f2b1c` | Abbreviated commit hash                                     |

If the commit itself is tagged, `git describe` outputs just the tag name:

```
v2.3.1
```

### Flags Reference

| Flag                  | Effect                                                      |
| --------------------- | ----------------------------------------------------------- |
| `--tags`              | Use lightweight tags in addition to annotated tags          |
| `--all`               | Use any ref, not just tags                                  |
| `--abbrev=<n>`        | Use at least n hex digits (default: 7, or auto-detected)    |
| `--abbrev=0`          | Show only the tag name, no commit count or hash             |
| `--long`              | Always show the commit count and abbreviated hash           |
| `--always`            | Fall back to abbreviated hash if no tag is found            |
| `--dirty`             | Append `-dirty` if working tree has modifications           |
| `--dirty=<suffix>`    | Append custom suffix instead of `-dirty`                    |
| `--match=<pattern>`   | Only consider tags matching the glob pattern                |
| `--exclude=<pattern>` | Exclude tags matching the glob pattern                      |
| `--contains`          | Find the tag that contains the commit (tag is a descendant) |
| `--first-parent`      | Follow only the first parent when traversing                |

### Using in Build Versioning

`git describe` is ideal for embedding version information in binaries:

```makefile
# Makefile
VERSION := $(shell git describe --dirty --always --tags)
CFLAGS := -DVERSION=\"$(VERSION)\"
```

```python
# Python
import subprocess

def get_version():
    try:
        return subprocess.check_output(
            ["git", "describe", "--dirty", "--always", "--tags"],
            stderr=subprocess.DEVNULL
        ).decode().strip()
    except subprocess.CalledProcessError:
        return "unknown"

__version__ = get_version()
```

```bash
# Shell script
VERSION=$(git describe --dirty --always --tags 2>/dev/null || echo "unknown")
echo "Building version: $VERSION"
```

### Examples

```bash
# On a tagged commit
$ git describe
v2.3.1

# 5 commits after v2.3.1
$ git describe
v2.3.1-5-ga3f2b1c

# Working tree has uncommitted changes
$ git describe --dirty
v2.3.1-5-ga3f2b1c-dirty

# Only show tag, no suffix
$ git describe --abbrev=0
v2.3.1

# Use any ref, not just tags
$ git describe --all
heads/main-14-ga3f2b1c

# Find tag containing this commit (useful for "which release is this in?")
$ git describe --contains a3f2b1c
v2.4.0~2

# Match only release tags
$ git describe --match 'v[0-9]*'
v2.3.1-5-ga3f2b1c

# Exclude pre-release tags
$ git describe --exclude '*-rc*' --exclude '*-beta*'
v2.3.1-5-ga3f2b1c
```

:::info

`git describe` only considers **annotated** tags by default. Lightweight tags (created with
`git tag <name>` without `-a` or `-s`) are ignored unless you pass `--tags`. This is a deliberate
design choice: annotated tags carry metadata (tagger, date, message) that makes them suitable for
release identification.

:::

---

## .gitattributes

### Overview

`.gitattributes` is a configuration file that assigns attributes to paths in a repository. It
controls how Git handles specific files: line ending conversion, diff generation, merge behavior,
binary detection, and more.

**Definition.** A `.gitattributes` file maps path patterns to attribute lists. Each line has the
format `pattern attribute1 attribute2=value`. Git evaluates `.gitattributes` files hierarchically:
the one in the repository root, then those in subdirectories, with more specific paths taking
precedence.

### File Location and Hierarchy

```
repo/
  .gitattributes            # Root: applies to all paths
  src/
    .gitattributes          # src/: applies to paths under src/
    lib/
      .gitattributes        # src/lib/: most specific, wins for paths under src/lib/
```

Git also reads from:

| Location                           | Scope                     |
| ---------------------------------- | ------------------------- |
| `.gitattributes` in repo root      | All files in the repo     |
| `.gitattributes` in subdirectories | Files in that subtree     |
| `$GIT_DIR/info/attributes`         | Local repo, not committed |
| `~/.gitattributes`                 | User-global, all repos    |
| `/etc/gitattributes`               | System-wide               |

### Syntax

```gitattributes
# Comment lines start with #
# Blank lines are ignored
# Patterns use glob syntax

# Binary files
*.png binary
*.jpg binary
*.pdf binary

# Line ending settings
*.sh text eol=lf
*.bat text eol=crlf
*.txt text

# Diff driver
*.md diff=markdown
*.proto diff=protobuf

# Merge driver
*.lock merge=ours
*.json merge=json

# Export expansion
VERSION export-subst

# Linguist overrides
vendor/* linguist-generated
docs/_build/* linguist-generated
*.haml linguist-language=Ruby

# Whitespace handling
*.c whitespace=blank-at-eol
*.py whitespace=trailing-space

# Negation pattern
*.txt text
!important.txt -text
```

### Attribute Flags

Attributes can be set, unset, or set to a value:

| Syntax                 | Meaning                           |
| ---------------------- | --------------------------------- |
| `text`                 | Set the attribute                 |
| `-text`                | Unset the attribute               |
| `text` (after `!text`) | Unset the attribute (explicitly)  |
| `diff=markdown`        | Set attribute to value `markdown` |

### Line Ending Normalization

The `text` attribute controls CRLF/LF conversion:

| Setting         | Behavior                                                               |
| --------------- | ---------------------------------------------------------------------- |
| `text`          | Convert CRLF to LF on commit; convert to OS-native on checkout         |
| `text eol=lf`   | Convert CRLF to LF on commit; LF on checkout (force Unix line endings) |
| `text eol=crlf` | Convert LF to CRLF on checkout (force Windows line endings)            |
| `-text`         | No conversion at all (binary-like)                                     |
| `binary`        | Equivalent to `-text -diff`                                            |

```gitattributes
# Force LF for everything (recommended for cross-platform projects)
* text=auto eol=lf

# Windows-specific files keep CRLF
*.bat text eol=crlf
*.cmd text eol=crlf

# Shell scripts always use LF
*.sh text eol=lf
```

:::info

The `text=auto` setting enables line ending normalization only if Git detects that the file is text
(not binary). Using `* text=auto eol=lf` in the root `.gitattributes` is the recommended practice
for cross-platform projects. It normalizes committed files to LF while letting Windows developers
check out with CRLF if their `core.autocrlf` is set.

:::

### Binary Detection

```gitattributes
# Mark files as binary (disables diff and merge)
*.png binary
*.jpg binary
*.gif binary
*.ico binary
*.pdf binary
*.zip binary
*.gz binary
*.tar binary
*.woff binary
*.woff2 binary
*.ttf binary
*.eot binary
*.exe binary
*.dll binary
*.so binary
*.dylib binary

# The `binary` attribute is a shorthand for:
# -text -diff
```

### Custom Diff Drivers

You can define custom diff drivers for specific file types:

```bash
# Configure a diff driver in .gitconfig
$ git config diff.markdown.textconv pandoc --from=markdown --to=plain
$ git config diff.protobuf.textconv protoc --decode_raw
```

```gitattributes
# Use the custom diff driver
*.md diff=markdown
*.proto diff=protobuf
```

```bash
# View the diff
$ git diff  # Will use pandoc for .md files, protoc for .proto files
```

### Custom Merge Drivers

```bash
# Define a merge driver in .gitconfig
$ git config merge.json.name "JSON merge driver"
$ git config merge.json.driver "json-merge-tool %O %A %B %L"
$ git config merge.json.recursive binary
```

```gitattributes
# Use the merge driver
*.json merge=json
```

Available built-in merge strategies:

| Driver         | Behavior                                 |
| -------------- | ---------------------------------------- |
| `merge=ours`   | Keep our version, ignore theirs entirely |
| `merge=binary` | No merging; conflict on any modification |

### Export-Subst

The `export-subst` attribute enables keyword expansion in `git archive` output:

```gitattributes
# Enable export-subst for the version file
VERSION export-subst
```

```
# In the VERSION file
Version: $Format:%h$
Tag: $Format:%D$
Date: $Format:%ci$
Author: $Format:%an$
```

```bash
$ git archive --format=tar.gz HEAD > release.tar.gz
# VERSION file in the archive will have expanded values:
# Version: a3f2b1c
# Tag: HEAD -> main
# Date: 2026-04-07 10:30:00 +0000
# Author: Jane Developer
```

Available format specifiers:

| Specifier | Expands to                             |
| --------- | -------------------------------------- |
| `%H`      | Full commit hash                       |
| `%h`      | Abbreviated commit hash                |
| `%D`      | Ref names (tags, branches)             |
| `%ci`     | Commit date in ISO 8601 format         |
| `%an`     | Author name                            |
| `%ae`     | Author email                           |
| `%cn`     | Committer name                         |
| `%ce`     | Committer email                        |
| `%s`      | Subject (first line of commit message) |
| `%b`      | Body (rest of commit message)          |

### Whitespace Rules

```gitattributes
# Detect trailing whitespace errors
*.c whitespace=trailing-space

# Detect blank-at-EOL
*.py whitespace=blank-at-eol

# Detect space-before-tab
*.java whitespace=space-before-tab

# Detect indentation with spaces for files that use tabs
Makefile whitespace=indent-with-non-tab
```

| Whitespace Attribute  | Error Detected                                                |
| --------------------- | ------------------------------------------------------------- |
| `trailing-space`      | Trailing whitespace, blank lines with whitespace              |
| `space-before-tab`    | Spaces before tab characters                                  |
| `indent-with-non-tab` | Indentation using spaces when tab width is expected           |
| `cr-at-eol`           | Carriage return at end of line (not an error, just detection) |
| `blank-at-eol`        | Trailing whitespace at end of line                            |
| `blank-at-eof`        | Blank lines at end of file                                    |

### Linguist-Generated (GitHub Specific)

```gitattributes
# Tell GitHub Linguist not to count these for language stats
vendor/* linguist-generated
node_modules/* linguist-generated
*_pb2.py linguist-generated
*.pb.go linguist-generated
docs/_build/* linguist-generated

# Override detected language
*.haml linguist-language=Ruby
*.cubescript linguist-language=C
```

### Diagnostics

```bash
# Check which attributes apply to a file
$ git check-attr -a -- src/main.c
src/main.c: text: auto
src/main.c: diff: cpp
src/main.c: eol: lf

# Check a specific attribute
$ git check-attr text -- README.md
README.md: text: auto

# Check what binary detection says
$ git check-attr binary -- image.png
image.png: binary: set
```

:::warning

Changes to `.gitattributes` do not retroactively normalize files already committed with the wrong
line endings. After adding or modifying `.gitattributes`, you must re-normalize existing files:

```bash
# Renormalize all files according to new .gitattributes
$ git add --renormalize .
$ git commit -m "Normalize line endings per .gitattributes"
```

:::

---

## .gitmodules

### Overview

The `.gitmodules` file records the configuration for submodules in a repository. It is a plain-text
INI-style file that maps submodule names to their paths and URLs.

### File Format

```ini
[submodule "libs/json"]
    path = libs/json
    url = https://github.com/nlohmann/json.git
    branch = main
    shallow = true

[submodule "libs/catch2"]
    path = libs/catch2
    url = https://github.com/catchorg/Catch2.git
    branch = v3.x
```

### Common Operations

```bash
# Add a submodule
git submodule add <url> <path>
git submodule add -b <branch> <url> <path>
git submodule add --depth 1 <url> <path>

# Initialize and clone submodules (after git clone)
git submodule update --init
git submodule update --init --recursive

# Update all submodules to latest remote state
git submodule update --remote

# Update a specific submodule
git submodule update --remote libs/json

# Check submodule status
git submodule status

# List all submodules
git submodule foreach --recursive 'echo $path'
```

### Tracking Branches

By default, submodules track a specific commit (detached HEAD). You can configure a tracking branch:

```bash
# Add with a tracking branch
git submodule add -b main https://github.com/org/repo.git libs/repo

# Configure an existing submodule to track a branch
git config -f .gitmodules submodule.libs/repo.branch main
git submodule update --remote libs/repo
```

:::info

Even with a tracking branch configured, the parent repository records a specific commit hash, not a
branch name. The tracking branch simply tells `git submodule update --remote` which branch to fetch
from.

:::

### Shallow Submodules

```bash
# Add a shallow submodule (single commit)
git submodule add --depth 1 <url> <path>

# Configure an existing submodule as shallow
git config -f .gitmodules submodule.libs/repo.shallow true
```

### Removing a Submodule

```bash
# 1. Deinitialize the submodule
git submodule deinit -f libs/repo

# 2. Remove the submodule from Git tracking
git rm -f libs/repo

# 3. Remove the submodule's data
rm -rf .git/modules/libs/repo

# 4. Commit the changes
git commit -m "Remove libs/repo submodule"
```

:::warning

Simply `rm -rf` the submodule directory without running `git submodule deinit` and `git rm` leaves
stale configuration in `.gitmodules` and `.git/modules/`. This causes errors for anyone cloning the
repository. Always follow the full removal procedure.

:::

### Common Pitfalls

| Pitfall                                          | Solution                                                                              |
| ------------------------------------------------ | ------------------------------------------------------------------------------------- |
| Submodule directory empty after clone            | Run `git submodule update --init --recursive`                                         |
| Submodule shows "modified" after `git pull`      | Submodules track commits, not branches; run `git submodule update --init --recursive` |
| Forgot to commit `.gitmodules` changes           | Stage `.gitmodules` and the submodule path before committing                          |
| Stale submodule in `.git/modules/` after removal | Manually remove `.git/modules/<name>`                                                 |
| Submodule at wrong commit                        | `cd libs/repo && git checkout <commit>` then `cd ../.. && git add libs/repo`          |

---

## git bundle

### Overview

`git bundle` creates a single file that contains a packfile along with header information about the
refs it contains. Bundles can be transported via any medium (USB, email, HTTP) and then cloned or
fetched from as if they were a remote.

**Definition.** A Git bundle is a self-contained binary file encoding a Git packfile and a ref
index. It represents a slice of repository history defined by a set of prerequisites (commits that
must already exist) and a set of included refs.

### Creating Bundles

```bash
# Bundle the entire repository
git bundle create repo.bundle --all

# Bundle a specific branch
git bundle create feature.bundle main

# Bundle a range of commits
git bundle create changes.bundle origin/main..HEAD

# Bundle with specific tags
git bundle create release.bundle --all --tags

# Bundle since a specific commit
git bundle create incremental.bundle a3f2b1c0..HEAD
```

### Verifying Bundles

```bash
# Verify a bundle can be applied to the current repository
$ git bundle verify repo.bundle
The bundle contains 1 ref
a3f2b1c0 HEAD
The bundle requires these 0 ref(s) to satisfy prerequisites
repo.bundle is okay
```

```bash
# Verify a bundle with prerequisites
$ git bundle verify changes.bundle
The bundle contains 1 ref
b7c8d9e0 HEAD
The bundle requires these 1 ref(s) to satisfy prerequisites
a3f2b1c0
```

If prerequisites are missing, `git bundle verify` reports which commits are needed.

### Cloning from Bundles

```bash
# Clone from a bundle (creates a new repository)
git clone repo.bundle my-repo

# The cloned repository has the bundle configured as a remote
$ cd my-repo
$ git remote -v
origin  /path/to/repo.bundle (fetch)
origin  /path/to/repo.bundle (push)
```

### Fetching from Bundles

```bash
# Fetch refs from a bundle into an existing repository
git fetch repo.bundle

# Fetch a specific ref
git fetch repo.bundle refs/heads/feature:refs/heads/feature

# Unbundle (extract without updating refs)
git bundle unbundle repo.bundle
```

### Incremental Bundles

For large repositories, you can create incremental bundles that only contain new commits:

```bash
# First bundle: everything
git bundle create full.bundle --all

# Second bundle: only new commits since the first bundle
git bundle create incr1.bundle origin/main..main

# Third bundle: only new commits since the second bundle
git bundle create incr2.bundle incr1.bundle..main
```

### Use Cases

#### Offline Transfer

```bash
# Machine A (with internet): create bundle
$ git bundle create project.bundle --all

# Transfer via USB, SCP, or sneakernet
$ scp project.bundle user@offline-machine:/tmp/

# Machine B (offline): clone from bundle
$ git clone /tmp/project.bundle project
```

#### Air-Gapped Environments

In security-sensitive environments where machines have no network access:

```bash
# On the build server (has internet access)
$ git bundle create deps.bundle --all
$ cp deps.bundle /media/usb/

# On the air-gapped machine
$ git clone /media/usb/deps.bundle source
$ git fetch /media/usb/incremental.bundle
```

#### CI Artifact Storage

```bash
# In CI: store the build commit as a bundle artifact
$ git bundle create build-$CI_BUILD_ID.bundle HEAD

# Later: verify the exact state that produced the build
$ git bundle verify build-1234.bundle
```

:::warning

Bundles do not include refs that are not reachable from the specified refs. If you need all branches
and tags, always use `--all`. If you need to include unreachable objects (e.g., dangling commits),
use `git bundle create repo.bundle --all --reflog`.

:::

---

## git worktree

### Overview

`git worktree` manages multiple working directories linked to the same repository. Each worktree can
be checked out to a different branch, enabling parallel work without stashing or committing
incomplete changes.

**Definition.** A linked worktree is a separate directory tree that shares the same object database,
refs, and configuration as the main repository. Each worktree has its own working directory, index
(staging area), and `HEAD`, but all write operations go to the same `.git` directory.

### Basic Syntax

```bash
# Create a new worktree
git worktree add <path> <branch>
git worktree add -b <new-branch> <path> <start-point>
git worktree add --detach <path> <start-point>

# List all worktrees
git worktree list

# Remove a worktree
git worktree remove <path>

# Prune stale worktree admin files
git worktree prune

# Lock a worktree (prevent removal)
git worktree lock <path>
git worktree lock --reason "active hotfix" <path>

# Unlock a worktree
git worktree unlock <path>
```

### Creating Worktrees

```bash
# Create a worktree for an existing branch
$ git worktree add ../hotfix-worktree hotfix/urgent-fix
Preparing worktree (checking out 'hotfix/urgent-fix')
HEAD is now at a3f2b1c Fix critical auth bypass

# Create a worktree with a new branch
$ git worktree add -b feature/oauth2 ../oauth2-worktree main

# Create a detached worktree (for inspecting a commit)
$ git worktree add --detach ../inspect-worktree a3f2b1c
```

### Directory Structure

```
repo/                              # Main worktree
  .git/                            # Full .git directory
  src/
  README.md

../hotfix-worktree/                # Linked worktree
  .git                             # File (not directory) pointing to repo/.git/worktrees/hotfix-worktree
  src/
  README.md
```

The `.git` file in the linked worktree contains:

```
gitdir: /path/to/repo/.git/worktrees/hotfix-worktree
```

Internally, the main repository maintains worktree metadata:

```
repo/.git/
  worktrees/
    hotfix-worktree/
      HEAD
      index
      logs/
      commondir  # Points to main .git
      gitdir     # Points back to linked worktree
```

### Listing Worktrees

```bash
$ git worktree list
/path/to/repo            a3f2b1c0 [main]
/path/to/hotfix-worktree b7c8d9e0 [hotfix/urgent-fix]
/path/to/oauth2-worktree def56789 [feature/oauth2]
```

### Removing Worktrees

```bash
# Remove a worktree (must have a clean working directory)
$ git worktree remove ../hotfix-worktree

# Force remove (discards uncommitted changes)
$ git worktree remove --force ../hotfix-worktree

# Prune admin files for deleted worktrees
$ git worktree prune
```

### Bare Repository Worktrees

Worktrees are particularly powerful with bare repositories. You can create a bare repo as a central
hub and check out working directories from it:

```bash
# Create a bare repository
$ git clone --bare https://github.com/org/project.git project.git

# Create worktrees from the bare repo
$ git -C project.git worktree add ../project-main main
$ git -C project.git worktree add ../project-dev develop

# Now you have two working directories from the same bare repo
```

### Use Cases

#### Parallel Branch Development

```bash
# You are working on a feature, but need to switch to a hotfix
# Instead of stashing your feature work:

$ git worktree add ../hotfix hotfix/critical-bug
$ cd ../hotfix
# Fix the bug, commit, push
$ cd ../repo
# Your feature work is untouched
```

#### Code Review

```bash
# Create a worktree to review someone's PR without disturbing your work
$ git worktree add --detach ../review origin/pr/42
$ cd ../review
# Run tests, inspect code
$ cd ../repo
$ git worktree remove ../review
```

#### Building Multiple Versions

```bash
# Build from multiple branches simultaneously
$ git worktree add ../build-v2.3 v2.3
$ git worktree add ../build-v2.4 v2.4
$ make -C ../build-v2.3 release
$ make -C ../build-v2.4 release
```

### Limitations and Constraints

| Constraint                                          | Details                                                         |
| --------------------------------------------------- | --------------------------------------------------------------- |
| Branch can only be checked out in one worktree      | Git prevents checking out the same branch in multiple worktrees |
| No nested worktrees                                 | You cannot create a worktree inside another worktree            |
| `core.bare` must be unset for main worktree         | Bare repos can only have linked worktrees, not a main worktree  |
| `git init` and `git clone` create the main worktree | You cannot convert a standalone repo into a linked worktree     |

:::warning

If you delete a worktree directory manually (e.g., `rm -rf ../hotfix-worktree`) instead of using
`git worktree remove`, Git leaves stale administrative files. Run `git worktree prune` to clean them
up. The branch that was checked out in the deleted worktree may remain locked until you prune.

:::

---

## git reflog

### Overview

The reflog records every movement of branch tips and HEAD. It is Git's primary recovery mechanism
for operations that seem destructive, such as `git reset --hard`, `git rebase`, or
`git commit --amend`.

### Basic Syntax

```bash
# Show HEAD's reflog
git reflog

# Show a specific ref's reflog
git reflog show <ref>

# Show reflog for a branch
git reflog show main

# Limit the number of entries
git reflog -20

# Show reflog with date
git reflog --date=iso

# Show reflog with relative dates
git reflog --date=relative
```

### Reflog Entry Format

```
a3f2b1c0 HEAD@{0}: commit: Add user authentication module
b7c8d9e0 HEAD@{1}: rebase -i (finish): returning to refs/heads/feature
c1d2e3f4 HEAD@{2}: rebase -i (pick): Refactor database queries
d4e5f6a7 HEAD@{3}: rebase -i (start): checkout HEAD~5
a3f2b1c0 HEAD@{4}: checkout: moving from main to feature
b7c8d9e0 HEAD@{5}: commit: Fix login redirect loop
e1f2a3b4 HEAD@{6}: checkout: moving from hotfix to main
```

### Reflog Addressing

You can address any commit using `HEAD@{n}` or `branch@{n}`:

```bash
# Checkout the commit HEAD was at 3 moves ago
$ git checkout HEAD@{3}

# Reset to the state main was at 5 moves ago
$ git reset --hard main@{5}

# Cherry-pick a commit from the reflog
$ git cherry-pick HEAD@{2}

# Show the diff between current state and 5 moves ago
$ git diff HEAD@{5}
```

### Recovering Lost Commits

```bash
# Scenario: you ran `git reset --hard HEAD~3` and lost 3 commits
$ git reflog
a3f2b1c0 HEAD@{0}: reset: moving to HEAD~3
d4e5f6a7 HEAD@{1}: commit: Third lost commit
c1d2e3f4 HEAD@{2}: commit: Second lost commit
b7c8d9e0 HEAD@{3}: commit: First lost commit
...

# Recover: reset back to before the destructive operation
$ git reset --hard HEAD@{1}

# Or: create a new branch at the lost state
$ git branch recovered-work HEAD@{1}
```

### Recovering After Rebase

```bash
# Scenario: interactive rebase went wrong, commits are rearranged or dropped
$ git reflog
e1f2a3b4 HEAD@{0}: rebase -i (finish): returning to refs/heads/feature
a3f2b1c0 HEAD@{1}: rebase -i (pick): Rewritten commit
b7c8d9e0 HEAD@{2}: rebase -i (start): checkout HEAD~3
b7c8d9e0 HEAD@{3}: commit: Original commit 1
c1d2e3f4 HEAD@{4}: commit: Original commit 2
d4e5f6a7 HEAD@{5}: commit: Original commit 3

# Abort the rebase by resetting to before it started
$ git reset --hard HEAD@{3}
```

### Reflog Expiry and Garbage Collection

The reflog has a default expiry period. After expiry, entries are removed and the objects they
reference become eligible for garbage collection.

```bash
# Default expiry: 90 days for reachable entries, 30 days for unreachable
$ git config gc.reflogExpire
90.days

$ git config gc.reflogExpireUnreachable
30.days

# Increase the expiry period
$ git config gc.reflogExpire 180.days
$ git config gc.reflogExpireUnreachable 90.days

# Disable reflog expiry entirely (reflog entries kept forever)
$ git config gc.reflogExpire never
$ git config gc.reflogExpireUnreachable never

# Expire reflog entries immediately (DANGEROUS)
$ git reflog expire --expire=now --all

# Expire reflog entries older than a specific date
$ git reflog expire --expire=2026-01-01 --all
```

:::warning

Setting `gc.reflogExpire` to `never` means reflog entries are never pruned. This prevents garbage
collection from reclaiming objects referenced only by the reflog. Over time, this can significantly
increase repository size. For large repositories, consider a reasonable expiry period (e.g., 365
days) instead.

:::

### Reflog and `git gc`

`git gc` runs `git reflog expire` as part of its process. Objects that are only reachable through
expired reflog entries become eligible for removal.

```bash
# Run garbage collection (also expires old reflog entries)
$ git gc

# Run gc without expiring reflog
$ git gc --no-reflog

# Dry run: see what would be collected
$ git gc --prune=now --dry-run
```

---

## git fsck

### Overview

`git fsck` (filesystem check) verifies the integrity and connectivity of the Git object database. It
detects corrupt objects, dangling references, and other repository health issues.

### Basic Syntax

```bash
# Full integrity check
git fsck

# Full check including all objects
git fsck --full

# Check connectivity (reachable from refs)
git fsck --connectivity-only

# Check a specific object
git fsck <object>

# Check with verbose output
git fsck -v

# Check packed objects
git fsck --no-reflogs

# Also check reflogs
git fsck --reflogs

# Do not consider reflogs as reachable
git fsck --no-reflogs
```

### What It Checks

| Check                | Description                                     |
| -------------------- | ----------------------------------------------- |
| Missing objects      | References point to objects that do not exist   |
| Corrupt objects      | Object content does not match its hash          |
| Dangling blobs       | Blobs not reachable from any tree               |
| Dangling trees       | Trees not reachable from any commit             |
| Dangling commits     | Commits not reachable from any ref              |
| Unreachable objects  | Objects not reachable from any ref or reflog    |
| Invalid tree entries | Tree entries with invalid mode or filename      |
| Invalid parent links | Commits referencing non-existent parent commits |
| Tag signature        | Verification of signed tags (with `--tag`)      |

### Common Output

```bash
$ git fsck --full
dangling blob 3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2
dangling commit a3f2b1c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6
dangling tree b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6
```

### Handling Dangling Objects

Dangling objects are not necessarily a problem. They are created by normal operations:

- `git add` then `git reset` creates a dangling blob.
- Deleted branches leave dangling commits.
- Aborted rebases leave dangling commits and trees.

```bash
# View a dangling blob
$ git cat-file -p 3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2

# View a dangling commit
$ git log --oneline a3f2b1c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6

# Recover a dangling commit as a branch
$ git branch recovered a3f2b1c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6

# Remove all dangling objects (run gc after verifying you do not need them)
$ git prune
$ git gc
```

### Detecting Corruption

```bash
# Check for corrupt objects
$ git fsck --full 2>&1 | grep -i "corrupt\|error\|missing"
error: object a3f2b1c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6: corrupted pack file

# Identify which pack file contains the corrupt object
$ git verify-pack -v .git/objects/pack/*.idx 2>&1 | grep a3f2b1c0

# Re-fetch the corrupt object from the remote
$ git fetch origin
# Or: if the remote does not have it, restore from a backup
```

### Fixing Corruption

```bash
# Step 1: Identify the problem
$ git fsck --full

# Step 2: If a pack file is corrupt, remove it and re-fetch
$ rm .git/objects/pack/corrupt-file.pack
$ rm .git/objects/pack/corrupt-file.idx
$ git fetch --all
$ git repack

# Step 3: If individual objects are corrupt
$ git fsck --full 2>&1 | grep "corrupt\|missing" | while read _ _ hash; do
    echo "Attempting to recover $hash"
    git cat-file -t "$hash" 2>/dev/null || echo "Object $hash is unrecoverable"
  done

# Step 4: If recovery is impossible, remove the corrupt ref
$ git update-ref -d refs/heads/broken-branch
```

:::warning

`git fsck` does not modify the repository. It only reports issues. Always fix corruption
methodically: identify, back up, then repair. If the `.git` directory itself is corrupted (e.g.,
from disk failure), restore from backup before attempting Git-level repairs.

:::

---

## git rerere

### Overview

`git rerere` (Reuse Recorded Resolution) remembers how you resolved merge conflicts and
automatically applies the same resolution when the same conflict arises again. This is particularly
valuable for long-lived feature branches that repeatedly merge from the main branch.

### Enabling rerere

```bash
# Enable globally
$ git config --global rerere.enabled true

# Enable per-repository
$ git config rerere.enabled true

# Also auto-update the index with the recorded resolution
$ git config rerere.autoupdate true
```

### How It Works

1. A merge conflict occurs. You resolve it manually.
2. `rerere` records the pre-conflict state (ours/theirs/base) and your resolution in
   `.git/rr-cache/`.
3. The next time the same files conflict with the same base content, `rerere` detects the match and
   applies the recorded resolution automatically.

### Inspecting rerere State

```bash
# Check the current status of rerere
$ git rerere status

# Show recorded resolutions
$ git rerere diff

# Run rerere manually (after resolving conflicts)
$ git rerere
```

### The rr-cache Directory

```
.git/rr-cache/
  a3f2b1c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6/
    preimage       # The conflict markers before resolution
    postimage      # The resolved content
    thisimage      # The current state (during conflict)
```

### Typical Workflow

```bash
# First occurrence: merge conflict in src/parser.c
$ git merge main
CONFLICT (content): Merge conflict in src/parser.c

# Resolve the conflict in your editor
$ vim src/parser.c

# Stage the resolution
$ git add src/parser.c

# rerere records the resolution automatically
$ git commit -m "Merge main into feature-branch"

# ... time passes, main has new commits ...

# Second occurrence: same conflict arises again
$ git merge main
CONFLICT (content): Merge conflict in src/parser.c
# rerere has already resolved this for you
Auto-resolving conflict in src/parser.c using recorded resolution

# Verify and continue
$ git add src/parser.c
$ git commit -m "Merge main into feature-branch"
```

### Use Cases

#### Long-Lived Feature Branches

If a feature branch lives for weeks and you merge `main` into it regularly, the same conflicts tend
to recur. `rerere` eliminates the need to resolve them repeatedly.

#### Maintaining Patches Across Branches

If you maintain a set of patches (e.g., vendor patches) that you rebase periodically, `rerere`
remembers how to resolve the recurring conflicts.

#### Team Conflict Resolution

If multiple developers encounter the same conflict, share the `.git/rr-cache/` directory to
propagate resolutions:

```bash
# Copy rerere cache to another clone
$ cp -r .git/rr-cache/ /path/to/other-clone/.git/rr-cache/
```

### Configuration Options

| Option              | Default | Description                                 |
| ------------------- | ------- | ------------------------------------------- |
| `rerere.enabled`    | `false` | Enable rerere                               |
| `rerere.autoupdate` | `false` | Automatically stage the recorded resolution |
| `rerere.autogc`     | `true`  | Run `git gc` on rr-cache when it gets large |

:::info

`rerere` works by hashing the conflict markers (the base, ours, and theirs sections). If the
conflict context changes even slightly, `rerere` will not match and you will need to resolve
manually. The resolution is then recorded for future use.

:::

---

## git format-patch and git am

### Overview

`git format-patch` generates patch files from commits in a format suitable for email-based code
review. `git am` (apply mailbox) applies those patches, recreating the original commits with their
metadata (author, date, message).

### Creating Patches with format-patch

```bash
# Create a patch for the last commit
$ git format-patch -1

# Create patches for the last 3 commits
$ git format-patch -3

# Create patches for all commits on a branch since divergence from main
$ git format-patch main..HEAD

# Create patches for a specific range
$ git format-patch a3f2b1c0..b7c8d9e0

# Output patches to a specific directory
$ git format-patch -o /tmp/patches main..HEAD

# Create patches with a different subject prefix
$ git format-patch --subject-prefix="PATCH v2" main..HEAD

# Create a single patch containing all commits (diffstat summary)
$ git format-patch --cover-letter -1

# Number patches starting from a specific number
$ git format-patch -3 -v 2
```

### Patch File Format

The output of `git format-patch` is an email-compatible format:

```
From a3f2b1c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6 Mon Sep 17 00:00:00 2001
From: Jane Developer <jane@example.com>
Date: Mon, 7 Apr 2026 10:30:00 +0000
Subject: [PATCH 1/3] Add authentication middleware

This commit adds JWT-based authentication middleware to the API
gateway. The middleware validates tokens on every request and
populates the request context with user information.

Signed-off-by: Jane Developer <jane@example.com>
---
 src/middleware/auth.go | 87 +++++++++++++++++++++++++++++++
 tests/auth_test.go     | 45 +++++++++++++++
 2 files changed, 132 insertions(+)
 create mode 100644 src/middleware/auth.go
 create mode 100644 tests/auth_test.go

diff --git a/src/middleware/auth.go b/src/middleware/auth.go
new file mode 100644
index 0000000..a3f2b1c
--- /dev/null
+++ b/src/middleware/auth.go
@@ -0,0 +1,87 @@
+package middleware
+
+// ... file content ...
```

### Applying Patches with git am

```bash
# Apply a single patch
$ git am /tmp/0001-Add-authentication-middleware.patch

# Apply all patches in a directory (in order)
$ git am /tmp/patches/*.patch

# Apply a patch from stdin (mbox format)
$ git am < /tmp/patch-series.mbox

# Abort a failed application
$ git am --abort

# Continue after resolving conflicts
$ git am --continue

# Skip the current patch
$ git am --skip

# Apply patches without committing (just stage)
$ git am --3way /tmp/0001-*.patch

# Apply with signoff
$ git am --signoff /tmp/patches/*.patch

# Apply and keep subject line intact
$ git am --keep-cr /tmp/patches/*.patch
```

### Cover Letters

```bash
# Generate a cover letter template along with patches
$ git format-patch --cover-letter -3

# This creates 0000-cover-letter.patch (empty, for you to fill in)
# and 0001-*.patch, 0002-*.patch, 0003-*.patch
```

The cover letter template:

```
From a3f2b1c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6 Mon Sep 17 00:00:00 2001
From: Jane Developer <jane@example.com>
Date: Mon, 7 Apr 2026 10:30:00 +0000
Subject: [PATCH 0/3] *** SUBJECT HERE ***

*** BLURB HERE ***

Jane Developer (3):
  Add authentication middleware
  Add rate limiting
  Add request logging

 src/middleware/auth.go     | 87 +++++++++++++++++++++++++
 src/middleware/rate.go     | 56 +++++++++++++++
 src/middleware/logging.go  | 43 +++++++++++
 3 files changed, 186 insertions(+)
```

### Maintaining a Patch Series

```bash
# Create patches from your branch
$ git format-patch -o patches/ main..HEAD

# Send for review, receive feedback, make changes

# Recreate patches with updated version number
$ git format-patch -o patches/ -v 2 main..HEAD

# When patches are accepted, apply them to the target branch
$ git checkout main
$ git am patches/*.patch
```

### Handling Conflicts in git am

```bash
# Apply with 3-way merge (safer)
$ git am --3way patches/0001-*.patch

# If conflict occurs:
$ git status
# Fix conflicts in the files listed
$ git add <resolved-files>
$ git am --continue

# If the patch is fundamentally wrong:
$ git am --abort
```

:::warning

`git am` creates new commits. The commit hashes will differ from the original because the committer
information (not author) will be different. If you need to preserve exact commit hashes, use
`git cherry-pick` or `git merge` instead.

:::

---

## git send-email

### Overview

`git send-email` sends patches created by `git format-patch` as emails. This is the primary code
contribution workflow for the Linux kernel and many other open-source projects.

### Prerequisites

You need a working email sending setup. Common transports:

```bash
# SMTP configuration
$ git config sendemail.smtpEncryption tls
$ git config sendemail.smtpServer smtp.gmail.com
$ git config sendemail.smtpServerPort 587
$ git config sendemail.smtpUser your-email@gmail.com
$ git config sendemail.smtpPass your-app-password

# Or use sendmail
$ git config sendemail.sendmailcmd /usr/sbin/sendmail

# Set the from address
$ git config sendemail.from "Your Name <your-email@example.com>"
```

:::info

Gmail requires an "App Password" rather than your account password. Generate one at Google Account
security settings. Other providers may have similar requirements.

:::

### Basic Usage

```bash
# Send the last commit as a patch
$ git format-patch -1 --stdout | git send-email --to maintainer@example.com \
    --cc reviewer@example.com

# Send patches from files
$ git format-patch -3
$ git send-email --to maintainer@example.com 0001-*.patch 0002-*.patch 0003-*.patch

# Send all patches in a directory
$ git send-email --to maintainer@example.com --to-list patches/

# Send with a cover letter
$ git format-patch --cover-letter -5
$ git send-email --to maintainer@example.com 0000-*.patch 0001-*.patch

# Dry run (print what would be sent without sending)
$ git send-email --to maintainer@example.com --dry-run 0001-*.patch

# Send with In-Reply-To (for threading)
$ git send-email --to maintainer@example.com --in-reply-to="<message-id@example.com>" 0001-*.patch
```

### Addressing and Threading

```bash
# Add Cc recipients
$ git send-email --cc reviewer1@example.com --cc reviewer2@example.com 0001-*.patch

# Cc everyone who authored the patches
$ git send-email --cc-cmd "./scripts/get-maintainer.pl" 0001-*.patch

# Set the In-Reply-To header for proper threading
$ git send-email --in-reply-to="<20260407103000.12345@example.com>" 0001-*.patch

# Suppress Cc from the patch body (Signed-off-by, etc.)
$ git send-email --suppress-cc=cc 0001-*.patch

# Suppress Cc from body, sob, and misc-cmds
$ git send-email --suppress-cc=body,sob,misc-cmd 0001-*.patch
```

### Cc Suppression Options

| Flag                     | Suppresses Cc from                 |
| ------------------------ | ---------------------------------- |
| `--suppress-cc=author`   | Patch author                       |
| `--suppress-cc=sob`      | Signed-off-by trailers             |
| `--suppress-cc=cc`       | Cc lines in patch body             |
| `--suppress-cc=bodycc`   | Cc, Acked-by, Reviewed-by trailers |
| `--suppress-cc=body`     | Entire patch body                  |
| `--suppress-cc=misc-cmd` | Output of --cc-cmd                 |
| `--suppress-cc=all`      | All of the above                   |

### Common Workflow

```bash
# 1. Create patches
$ git format-patch --cover-letter -5 -o outgoing/

# 2. Review the patches
$ ls outgoing/
0000-cover-letter.patch
0001-fix-memory-leak-in-parser.patch
0002-add-bounds-checking.patch
0003-refactor-tokenizer.patch
0004-update-tests.patch
0005-update-documentation.patch

# 3. Edit the cover letter
$ vim outgoing/0000-cover-letter.patch

# 4. Dry run
$ git send-email --to maintainer@project.org \
    --cc list@project.org \
    --dry-run outgoing/*.patch

# 5. Send
$ git send-email --to maintainer@project.org \
    --cc list@project.org \
    outgoing/*.patch
```

### Configuration Reference

| Config Key                 | Description                                |
| -------------------------- | ------------------------------------------ |
| `sendemail.from`           | Default From address                       |
| `sendemail.to`             | Default To address                         |
| `sendemail.smtpServer`     | SMTP server hostname                       |
| `sendemail.smtpServerPort` | SMTP server port                           |
| `sendemail.smtpEncryption` | `ssl`, `tls`, or `none`                    |
| `sendemail.smtpUser`       | SMTP username                              |
| `sendemail.smtpPass`       | SMTP password (or use credential helper)   |
| `sendemail.chainReplyTo`   | Chain emails as replies to cover letter    |
| `sendemail.thread`         | Enable threading                           |
| `sendemail.confirm`        | `auto`, `always`, `never`, `cc`, `compose` |

:::warning

Always use `--dry-run` before actually sending patches, especially for public mailing lists. An
accidental send to hundreds of subscribers is difficult to undo. Double-check recipient lists and
patch content before sending.

:::

---

## Common Pitfalls

### Forgetting the `--` Separator

Git uses `--` to disambiguate between branch names and file paths. Without it, Git may misinterpret
arguments.

```bash
# Dangerous: if a file named "main" exists, this checks out the file, not the branch
$ git checkout main

# Correct: unambiguous checkout of the branch
$ git checkout main

# Dangerous: if a branch named "test.c" exists, this is ambiguous
$ git checkout test.c
# error: pathspec 'test.c' did not match any file(s) known to git

# Correct: explicitly disambiguate
$ git checkout -- test.c        # Checkout the file
$ git checkout test.c --        # Treated as branch (but still ambiguous)
$ git switch test.c             # Modern: explicitly switches to branch

# The -- separator in diff
$ git diff main -- src/file.c   # Diff between branch "main" and file "src/file.c" in working tree
$ git diff -- main src/file.c   # Diff between two commits/files (ambiguous without context)
```

:::warning

If you have both a file and a branch with the same name, always use `git switch` for branches and
`git restore` for files. These modern commands eliminate the ambiguity that `git checkout` suffers
from.

:::

### Ambiguous Argument Errors

Git throws "ambiguous argument" errors when a name matches multiple objects:

```bash
# If both a tag and a branch are named "v2.0"
$ git checkout v2.0
error: ambiguous argument 'v2.0': both revision and filename

# Disambiguate using full ref notation
$ git checkout refs/heads/v2.0    # Branch
$ git checkout refs/tags/v2.0     # Tag

# Or use --detach for tags
$ git checkout v2.0^{commit}      # The commit the tag points to

# Show all objects that match a prefix
$ git rev-parse v2.0
```

### Submodule State Desynchronization

Submodules track specific commits, not branches. This leads to common issues:

```bash
# After pulling the parent repo, submodule directories may be empty
$ git pull
# Submodule paths show as modified but you did not change them
$ git status
modified: libs/json (new commits)

# The submodule is at a different commit than the parent records
$ cd libs/json && git log --oneline -3
# Shows commits that the parent does not know about

# Fix: update submodules to match the parent's recorded state
$ git submodule update --init --recursive

# Or: update the parent to track the submodule's current state
$ git add libs/json
$ git commit -m "Update json submodule to latest"
```

:::warning

Running `git pull` in the parent repository does not automatically update submodules. You must
explicitly run `git submodule update --init --recursive` after pulling. Configure
`submodule.recurse` to automate this:

```bash
$ git config submodule.recurse true
```

This makes `git pull`, `git checkout`, and `git switch` also update submodules recursively.

:::

### Worktree and Branch Conflicts

Each branch can only be checked out in one worktree at a time:

```bash
$ git worktree add ../wt2 main
fatal: 'main' is already checked out at '/path/to/repo'

# Solution: use a different branch
$ git worktree add -b main-fix ../wt2 main

# Solution: detach HEAD
$ git worktree add --detach ../wt2 main
```

### Reflog Expiry Leading to Data Loss

If reflog entries expire before you recover lost commits, those commits are permanently
garbage-collected:

```bash
# Scenario: you ran a destructive operation 6 months ago
$ git reflog
# Only shows the last 90 days (default)

# The lost commits may already be garbage-collected
$ git fsck
# No dangling commits found

# Prevention: increase reflog expiry
$ git config gc.reflogExpire 365.days
$ git config gc.reflogExpireUnreachable 365.days

# Or: immediately create a branch for important states
$ git branch backup-before-rebase HEAD
```

### Force Push Conflicts

Force pushing rewrites remote history, causing issues for collaborators:

```bash
# After rebasing, the remote branch history differs from local
$ git push origin feature
# error: failed to push some refs

# DANGEROUS: force push overwrites remote history
$ git push --force origin feature

# SAFER: force-with-lease only pushes if the remote has not changed
$ git push --force-with-lease origin feature
```

| Command                        | Behavior                                                                              |
| ------------------------------ | ------------------------------------------------------------------------------------- |
| `git push --force`             | Unconditionally overwrites the remote branch                                          |
| `git push --force-with-lease`  | Only overwrites if the remote ref matches your tracking branch                        |
| `git push --force-if-includes` | Like force-with-lease, but also checks that your local branch includes the remote tip |

:::warning

`git push --force` is a destructive operation. It discards commits on the remote that are not in
your local history. Any collaborator who has based work on those commits will encounter conflicts.
Always prefer `--force-with-lease` unless you are certain you are the only person working on the
branch.

:::

### Detached HEAD State

```bash
# Checking out a tag or specific commit puts you in detached HEAD
$ git checkout v2.3.1
HEAD is now at a3f2b1c0 v2.3.1
# You are not on any branch

# Any commits made here will be lost when you switch branches
$ echo "fix" >> file.txt
$ git commit -am "Hotfix on tag"
# Switching branches abandons this commit

# Solution: always create a branch first
$ git checkout -b hotfix/v2.3.1 v2.3.1

# Solution: if you already made commits, find them in the reflog
$ git reflog
$ git branch hotfix/v2.3.1 HEAD@{1}
```

### Partial Staging Accidents

```bash
# Accidentally staging everything instead of specific files
$ git add .    # Stages ALL changes

# Use --patch for fine-grained staging
$ git add --patch src/file.c
# Interactively choose which hunks to stage

# Or use git restore to unstage
$ git restore --staged unwanted-file.c
```

### Binary File Conflicts

Git cannot merge binary files. Any modification to a binary file results in a conflict:

```bash
# During merge:
CONFLICT (content): Merge conflict in image.png

# Choose one version
$ git checkout --ours image.png    # Keep our version
$ git checkout --theirs image.png  # Keep their version
$ git add image.png
$ git commit

# Prevent binary conflicts with merge driver
# In .gitattributes:
*.png merge=binary
```

The `binary` merge driver marks the file as unmergeable, and Git will simply keep whichever version
was last modified (based on the merge strategy). This avoids generating conflict markers in binary
files.
