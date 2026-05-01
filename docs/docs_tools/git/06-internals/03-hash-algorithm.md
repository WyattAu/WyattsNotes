---
title: Hash Algorithm
description:
  Hash Algorithm — SHA-1: The Original Hash; SHA-1 Properties; The SHA-1
  Collision Problem; Git's Defenses Against Collision Attacks.
date: 2025-06-03T14:00:00.000Z
tags:
  - git
  - internals
  - security
  - sha256
categories:
  - CS
slug: hash-algorithm
---

## SHA-1: The Original Hash

Since its creation, Git has used **SHA-1** (Secure Hash Algorithm 1) to identify all objects. Every
blob, tree, commit, and tag is named by the 40-character hexadecimal representation of its SHA-1
hash, producing a $2^{160}$ address space.

### SHA-1 Properties

| Property             | Value                                       |
| -------------------- | ------------------------------------------- |
| Output size          | 160 bits (20 bytes, 40 hex characters)      |
| Collision resistance | $2^{80}$ (theoretical) — broken in practice |
| Preimage resistance  | $2^{160}$ (unbroken)                        |
| Speed                | Fast (hardware-accelerated on modern CPUs)  |

### The SHA-1 Collision Problem

In 2017, researchers at Google and CWI Amsterdam demonstrated the first **SHA-1 collision** (the
"SHAttered" attack). They produced two different PDF files with the same SHA-1 hash, requiring
approximately $2^{63.1}$ computations (far below the theoretical $2^{80}$).

**Does this affect Git?** Directly, not much. The attack required significant computational
resources ($\sim$6,500 CPU-years) and was specifically crafted for PDF files. However, it proved
that SHA-1's collision resistance is weaker than assumed, and future advances could make attacks
cheaper.

### Git's Defenses Against Collision Attacks

Git has several properties that make collision attacks harder than generic SHA-1 collisions:

1. **Object headers**: Git hashes `"<type> <size>\0<content>"`, not raw content. An attacker must
   collide the full header+content.
2. **Detect checks**: `git fsck` detects objects whose hash does not match their content.
3. **Collision detection**: Git includes collision detection code that detects SHAttered-style
   attacks.

## SHA-256: The Transition

Git 2.29 (September 2020) added experimental support for **SHA-256** as an alternative hash
algorithm.

### Enabling SHA-256

```bash
# Initialize a new repository with SHA-256
$ git init --object-format=sha256

# Configure globally for new repositories
$ git config --global init.defaultObjectFormat sha256

# Check the hash algorithm of an existing repository (0=SHA-1, 1=SHA-256)
$ git config core.repositoryFormatVersion
```

### SHA-256 Properties

| Property             | SHA-1              | SHA-256                     |
| -------------------- | ------------------ | --------------------------- |
| Output size          | 160 bits           | 256 bits                    |
| Collision resistance | $2^{80}$ (broken)  | $2^{128}$ (secure)          |
| Preimage resistance  | $2^{160}$ (secure) | $2^{256}$ (secure)          |
| Hash length          | 40 hex chars       | 64 hex chars                |
| Speed                | Faster             | $\sim$20% slower (software) |

### Migration Challenges

Migrating an existing repository from SHA-1 to SHA-256 is **not currently supported** by Git. This
is because:

1. **Every object hash changes**: All blobs, trees, commits, and tags get new hashes.
2. **All references break**: Branches, tags, remotes — everything must be updated.
3. **All packfiles must be regenerated**: The entire object store is invalidated.
4. **Interoperability**: SHA-256 repositories cannot interoperate with SHA-1 tools or servers.

The Git community is working on a migration path, but it is not yet production-ready. For new
repositories, enabling SHA-256 from the start is recommended.

## Hash Length Abbreviation

Git allows abbreviating hashes to the shortest unambiguous prefix:

```bash
# Full SHA-1 (40 chars)
a3f2b1c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6

# Abbreviated (minimum unambiguous length)
a3f2b1c

# Configure minimum abbreviation length
$ git config core.abbrev 12  # Require at least 12 chars
```

With SHA-256, the minimum abbreviation length is longer (more objects can share a prefix before
diverging). Git handles this automatically.

## Practical Implications

### For New Projects

```bash
# Start new projects with SHA-256
$ git init --object-format=sha256
```

This provides future-proofing at essentially zero cost (the slight speed difference is negligible
for most workflows).

### For Existing Projects

No migration path exists yet. Monitor the Git mailing list for updates. In the meantime:

- Run `git fsck` periodically to detect corruption.
- Keep your `gc.pruneExpire` settings generous to avoid accidental data loss.
- Back up your `.git` directory regularly.

### For Security-Sensitive Projects

If you are concerned about collision attacks:

1. Enable **fsck**: Run `git fsck` in CI to detect corrupted objects.
2. Sign commits: Use GPG or SSH to sign commits and tags.
3. Use SHA-256 for new repositories.

## Content-Addressable Storage: Design Rationale

Git's choice of content-addressable storage (CAS) is fundamental to its design. The implications are
far-reaching:

| Property                  | Benefit                                                                       |
| ------------------------- | ----------------------------------------------------------------------------- |
| **Deduplication**         | Identical files across commits produce one blob object                        |
| **Integrity**             | Any modification of an object changes its hash, breaking references           |
| **Distributed consensus** | Two developers can independently verify they have the same object             |
| **Deterministic builds**  | A commit hash uniquely identifies a project state                             |
| **Garbage collection**    | Unreachable objects can be safely deleted without affecting reachable objects |

The trade-off is that Git cannot efficiently store files that change slightly and frequently (e.g.,
large binary files, databases). This is why Git LFS exists — it stores the large file content
outside the object store and tracks only a pointer.
