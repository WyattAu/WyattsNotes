---
title: Pull Requests
description:
  Pull Requests — What is a Pull Request; Anatomy of a Good Pull Request; Title;
  Description with worked examples and exam-style questions.
date: 2025-06-03T15:00:00.000Z
tags:
  - git
  - workflows
  - code-review
  - pull-requests
categories:
  - CS
slug: pull-requests
---

## What is a Pull Request

A pull request (PR) — called a **merge request** in GitLab — is a proposal to merge a branch into another branch, usually accompanied by a code review discussion. While `git merge` is a local operation, a pull request is a **platform feature** (GitHub, GitLab, Gitea) that adds:

- A web interface for reviewing diffs.
- Discussion threads on specific lines of code.
- Automated CI checks.
- Approval workflows.
- Audit trail of who reviewed and when.

## Anatomy of a Good Pull Request

### Title

The title should be a concise summary of the change:

```
feat(auth): add JWT token refresh mechanism
fix(parser): handle null input without segfault
refactor(api): extract validation into separate module
docs(readme): update installation instructions for macOS
```

### Description

A good PR description answers:

1. **What** does this PR change?
2. **Why** is this change needed? (Context, motivation, issue reference)
3. **How** was it implemented? (Design decisions, alternatives considered)
4. **How to test**? (Steps for the reviewer to verify)

Template:

```markdown
## Summary

Brief description of the change.

## Motivation

Why this change is needed. Reference to issue: Closes #42.

## Changes

- Added JWT token refresh middleware
- Updated token expiry from 1h to 15min
- Added refresh token rotation

## Testing

1. Login with valid credentials
2. Wait for access token to expire (or reduce expiry for testing)
3. Verify that requests succeed (token was automatically refreshed)
4. Verify that refresh token was rotated

## Screenshots

(If applicable)

## Checklist

- [ ] Tests pass
- [ ] No linting errors
- [ ] Documentation updated
- [ ] Breaking changes documented
```

### Size

Small PRs are easier to review, faster to merge, and safer to revert. Aim for:

| Metric        | Target   | Maximum  |
| ------------- | -------- | -------- |
| Lines changed | < 200    | < 400    |
| Files changed | < 10     | < 20     |
| Review time   | < 30 min | < 1 hour |

If a PR exceeds these limits, consider splitting it into multiple smaller PRs.

## Code Review

### Reviewing PRs

When reviewing a PR, focus on:

| Category        | What to Check                                                                           |
| --------------- | --------------------------------------------------------------------------------------- |
| **Correctness** | Does the code do what the PR claims? Are there edge cases?                              |
| **Design**      | Does the change fit the existing architecture? Is the abstraction appropriate?          |
| **Readability** | Is the code understandable? Are variable/function names clear?                          |
| **Testing**     | Are there tests for the new behavior? Do existing tests still pass?                     |
| **Security**    | Does the change introduce any vulnerabilities? (Input validation, authentication, etc.) |
| **Performance** | Does the change introduce any regressions? (N+1 queries, unnecessary copies, etc.)      |

### Writing Review Comments

**Be constructive and specific:**

| Bad                      | Good                                                                   |
| ------------------------ | ---------------------------------------------------------------------- |
| "This is wrong"          | "This condition is inverted — `x < 0` should be `x >= 0`"              |
| "Use a better algorithm" | "A binary search would reduce this from $O(n)$ to $O(\log n)$"         |
| "This is hard to read"   | "Extract this into a named function `is_valid_email` with a docstring" |

**Distinguish blocking from non-blocking comments:**

```markdown
🚫 **Required**: This must be fixed before merging.

- The null check is missing — this will crash if `user` is null.

💬 **Suggestion**: Consider this improvement (non-blocking).

- You could use `String::from_utf8_lossy` instead of `unsafe { String::from_utf8_unchecked }`.

❓ **Question**: I'm not sure about this — please clarify.

- Why is the timeout set to 30 seconds? Is this documented somewhere?
```

## CI Integration

### Required Status Checks

Configure GitHub to require certain checks before a PR can be merged:

1. **Tests**: `npm test`, `cargo test`, `pytest`, etc.
2. **Linting**: `eslint`, `clang-tidy`, `flake8`, etc.
3. **Type checking**: `tsc --noEmit`, `mypy`, etc.
4. **Build**: `npm run build`, `cargo build`, etc.
5. **Security**: `npm audit`, `snyk test`, etc.

### Branch Protection Rules

For the `main` branch, configure:

| Rule                      | Purpose                                            |
| ------------------------- | -------------------------------------------------- |
| Require PR before merging | All changes must be reviewed                       |
| Require approvals (1+)    | At least one person must approve                   |
| Require status checks     | All CI checks must pass                            |
| Require up-to-date branch | PR must be rebased on latest `main` before merging |
| Require signed commits    | Commits must be GPG/SSH signed                     |
| Require linear history    | No merge commits (force rebase)                    |
| Restrict who can push     | Only authorized users can bypass PRs               |

### Auto-Merge

After all checks pass and approvals are granted, enable auto-merge:

```bash
# Via GitHub CLI
$ gh pr merge 42 --auto --squash
```

## Merging Strategies on Platforms

| Strategy                  | Git Command                          | When to Use                                  |
| ------------------------- | ------------------------------------ | -------------------------------------------- |
| **Create a merge commit** | `git merge --no-ff`                  | Preserves full history; good for large teams |
| **Squash and merge**      | `git merge --squash`                 | Linear history; one commit per PR            |
| **Rebase and merge**      | `git rebase` + `git merge --ff-only` | Linear history; preserves individual commits |

### Squash and Merge: Implications

Squash and merge creates a single commit from all commits in the PR. This has consequences:

- **Pros**: Clean, linear history; easy to `git bisect`; PR is a single unit.
- **Cons**: Individual commit messages are lost; cannot easily revert a specific commit within the PR.

:::tip

If you use squash and merge, ensure your PR title and description are comprehensive — they become the only commit message for the entire change.

:::

## Reverting a PR

### After a Merge Commit

```bash
$ git revert -m 1 <merge-commit-hash>
```

The `-m 1` flag tells Git to keep the first parent (the branch you merged into), effectively undoing the entire feature.

### After a Squash and Merge

```bash
$ git revert <squash-commit-hash>
```

Single commit — straightforward revert.

## PR Etiquette

1. **Self-review** before requesting review — fix obvious issues yourself.
2. **Keep PRs small** — review under 400 lines of changes.
3. **Respond promptly** to review comments.
4. **Push fixes** to the same branch — don't open a new PR.
5. **Don't force-push** after someone has reviewed your code.
6. **Thank reviewers** for their time and feedback.
