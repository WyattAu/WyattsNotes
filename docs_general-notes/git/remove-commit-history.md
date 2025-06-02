---
title: Remove Commit History
date: 2025-06-02T21:52:46.700Z
description: The method for removing commit history
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
  - 
    ```
        git tag | xargs git tag -d  # Delete local tags
        git push origin --delete --tags  # Delete remote tags
        git push origin --delete old-branch  # Repeat for historical branches
    ```
