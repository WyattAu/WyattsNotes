---
title: Remove Commit History
date: 2025-06-02T21:52:46.700Z
description:
  'Git version control: Remove Commit History — Proposed Solution... Covering essential concepts and
  techniques for practic.'
tags:
  - git
categories:
  - CS
slug: remove-commit-history
---

## Proposed Solution

- Clone Git repository
- Create orphan branch
- `git checkout --orphan temp`
- Stage all changes
- `git add -A`
- `git commit -m "init commit (cleaned history)"`
- Delete old branch
- `git branch -D main`
- Rename current temp branch to main
- `git branch -m main`
- Force-push current branch to GitHub
- `git push -f origin main`
- Delete all other branches and tags if needed
  ```bash
  git tag | xargs git tag -d  # Delete local tags
  git push origin --delete --tags  # Delete remote tags
  git push origin --delete old-branch  # Repeat for historical branches
  ```

## Common Pitfalls

1. Neglecting to normalise database designs, leading to data redundancy and update anomalies.

2. Misunderstanding the difference between a stack (LIFO) and a queue (FIFO) in data structure
   applications.

3. Forgetting that $O(n \log n)$ average-case for quicksort becomes $O(n^2)$ worst-case on already
   sorted input.

4. Mixing up Big O, Big $\Omega$, and Big $\Theta$ notation — Big O is an upper bound, not
   necessarily tight.

### When to Use This Approach

- **Removing sensitive data**: passwords, API keys, or private keys accidentally committed to the
  repository history.
- **Starting fresh**: when a repository's history is cluttered with merge conflicts, broken commits,
  or irrelevant experimental branches.
- **Reducing repository size**: large binary files bloating the `.git` directory.

### Alternative: `git filter-branch`

For selective history rewriting (removing specific files without losing all history):

```bash
# Remove a file from all commits
git filter-branch --force --index-filter   'git rm --cached --ignore-unmatch path/to/sensitive-file'   --prune-empty -- --all

# Clean up and force-push
git reflog expire --expire=now --all
git gc --prune=now --aggressive
git push --force --all
```

### Alternative: BFG Repo-Cleaner

For faster history cleaning on large repositories:

```bash
# Install BFG
# https://rtyley.github.io/bfg-repo-cleaner/

# Clone a fresh bare copy
git clone --mirror git@github.com:user/repo.git

# Remove files larger than 10MB
java -jar bfg.jar --strip-blobs-bigger-than 10M repo.git

# Remove a specific file
java -jar bfg.jar --delete-sensitive-file config/secrets.yaml repo.git

# Clean up
cd repo.git
git reflog expire --expire=now --all
git gc --prune=now --aggressive
git push
```

### Warning

These operations are **destructive**. Anyone who has cloned or forked the repository will have
mismatched histories. Coordinate with all contributors before rewriting history. Force-pushing to
shared branches should only be done during agreed maintenance windows.
