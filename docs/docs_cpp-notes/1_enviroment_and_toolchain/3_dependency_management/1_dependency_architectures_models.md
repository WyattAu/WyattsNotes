---
title: Dependency Resolution
date: 2025-12-11T03:49:07.185Z
tags:
  - cpp
categories:
  - cpp
slug: dependency-resolution-architectures-distribution-models
---

Unlike languages with a unified ecosystem (Rust/Cargo, Node/NPM, Python/Pip), C++ does not utilize a centralized registry or a standard package manager. This fragmentation is not an oversight but a consequence of the language's compilation model: C++ compiles directly to machine code, heavily dependent on the Application Binary Interface (ABI).

To manage dependencies effectively, one must select a **Distribution Model** that aligns with the project's requirements regarding reproducibility, build time, and ABI compatibility.

## The C++ Package Management Problem

In bytecode or interpreted languages, dependencies are often distributed as generic artifacts compatible with any runtime version. In C++, a library compiled with GCC 11 in Debug mode is binary-incompatible with the same library compiled with MSVC in Release mode.

### The ABI Matrix

A single C++ library source (e.g., `fmt`) can result in dozens of incompatible binary artifacts based on:

1. **Operating System:** Windows, Linux, macOS.
2. **Architecture:** x86_64, ARM64.
3. **Compiler:** GCC, Clang, MSVC.
4. **Runtime Library:** libstdc++, libc++, MSVCRT (Dynamic/Static).
5. **Standard Version:** C++17, C++20, C++23.
6. **Build Configuration:** Debug, Release, RelWithDebInfo.

Successful dependency management requires a system capable of resolving this matrix or bypassing it entirely via source compilation.

## Distribution Models

### 1. System Package Managers (The "Distro" Model)

- **Tools:** `apt`, `pacman`, `brew`, `choco`.
- **Mechanism:** Libraries are installed globally into system paths (`/usr/lib`, `/usr/include`).
- **Architecture:**
  - **Pre-built Binaries:** The package maintainer decides the compiler and flags.
  - **Shared Linkage:** Typically provides shared objects (`.so`, `.dll`) linked dynamically.
- **Critical Drawbacks:**
  - **ABI Mismatch:** The system library might use `libstdc++` while you wish to use `libc++`.
  - **Version Locking:** You are restricted to the version provided by the OS repository (often outdated).
  - **Non-Reproducible:** A developer on Ubuntu 22.04 will have different library versions than a developer on Ubuntu 24.04.

**Verdict:** Unsuitable for most application development. Valid only for system-level dependencies (drivers, libc).

### 2. Vendoring (Submodules / Copy-Paste)

- **Tools:** Git Submodules, Monorepos.
- **Mechanism:** Source code of dependencies is committed directly into the project repository or checked out into a subdirectory.
- **Architecture:**
  - **Source Compilation:** Dependencies are built as part of the main project build graph.
  - **Total Control:** Exact commits are locked.
- **Critical Drawbacks:**
  - **Repo Bloat:** Cloning the project becomes slow.
  - **Transitive Complexity:** If Lib A and Lib B both vendor Lib C, managing version conflicts (Diamond Dependency) requires manual intervention.
  - **Build Time:** Every clean build recompiles the entire world.

**Verdict:** Valid for very small projects or massive monorepos (Google style), but scales poorly for mid-sized projects without tooling.

### 3. Source-Based Package Managers

- **Tools:** vcpkg, CPM.cmake.
- **Mechanism:** The tool downloads dependency source code and compiles it locally using the _exact same compiler and flags_ as the main project.
- **Architecture:**
  - **ABI Guarantee:** Since the dependency is built _contextually_ with the project, ABI compatibility is mathematically guaranteed.
  - **Semantic Versioning:** Allows specifying constraints (`fmt >= 9.0`).
- **Trade-off:** Significantly increased build times on the first run, as all dependencies must be compiled from scratch.

**Verdict:** The recommended default for modern C++ development due to robustness and simplicity.

### 4. Binary Package Managers

- **Tools:** Conan.
- **Mechanism:** Contributors specify profiles (compiler, flags, OS) and upload links of pre-built binaries to a central repository. Allowing binaries to be downloaded and linked directly into the project.
- **Architecture:**
  - **Profile Matching:** The client calculates a hash of the current compiler settings and requests a binary matching that hash.
  - **Fallback:** If no binary matches, it falls back to building from source.
- **Trade-off:** Requires complex infrastructure setup (Artifactory, remotes) and rigorous profile management.

**Verdict:** An alternative that can reduce build times locally and for CI, but adds significant complexity and seems breaks frequently with my experience.

## The Diamond Dependency Problem

A critical architectural challenge in C++ dependency management is the **Diamond Dependency** combined with the **One Definition Rule (ODR)**.

**Scenario:**

- `App` depends on `LibA` and `LibB`.
- `LibA` depends on `JsonLib v1.0`.
- `LibB` depends on `JsonLib v2.0`.

### The Problem

In languages like Node.js (npm), `LibA` and `LibB` can each receive their own copy of `JsonLib` (nested `node_modules`). In C++, this is impossible if the symbols are exported globally. Linking two versions of `JsonLib` into the same executable violates the ODR, resulting in linker errors or runtime undefined behavior (segfaults).

### The Solution (SAT Solving)

C++ Package managers must perform **SAT (Boolean Satisfiability) Solving** to find a single version of `JsonLib` that satisfies the constraints of both `LibA` and `LibB`.

- If `LibA` requires `JsonLib >= 1.0` and `LibB` requires `JsonLib >= 2.0`, the solver selects `2.0`.
- If `LibA` requires `JsonLib < 2.0` and `LibB` requires `JsonLib >= 2.0`, the build **must fail** before compilation begins.

## Best Practice Recommendation

For the architecture described in this course, we adhere to the following hierarchy:

1. **Default:** **vcpkg (Manifest Mode)**. It offers the best balance of usability, ODR safety (via strict baseline versioning), and ABI compliance (source-based).
2. **Lightweight:** **CPM.cmake**. For projects with very few dependencies where setting up vcpkg is overkill. This can be used with conan to enable building source-based packages when library updates are not propagated to vcpkg or conan.
3. **Scale:** **Conan**. Only when build times become the primary bottleneck (~30+ minutes) and binary caching is mandatory.
