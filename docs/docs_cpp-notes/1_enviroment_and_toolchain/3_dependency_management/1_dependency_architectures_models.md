---
title: Dependency Resolution
date: 2025-12-11T03:49:07.185Z
tags:
  - cpp
categories:
  - cpp
slug: dependency-resolution-architectures-distribution-models
---

Unlike languages with a unified ecosystem (Rust/Cargo, Node/NPM, Python/Pip), C++ does not utilize a
centralized registry or a standard package manager. This fragmentation is not an oversight but a
consequence of the language's compilation model: C++ compiles directly to machine code, heavily
dependent on the Application Binary Interface (ABI).

To manage dependencies effectively, one must select a **Distribution Model** that aligns with the
project's requirements regarding reproducibility, build time, and ABI compatibility.

## The C++ Package Management Problem

In bytecode or interpreted languages, dependencies are often distributed as generic artifacts
compatible with any runtime version. In C++, a library compiled with GCC 11 in Debug mode is
binary-incompatible with the same library compiled with MSVC in Release mode.

### The ABI Matrix

A single C++ library source (e.g., `fmt`) can result in dozens of incompatible binary artifacts
based on:

1. **Operating System:** Windows, Linux, macOS.
2. **Architecture:** x86_64, ARM64.
3. **Compiler:** GCC, Clang, MSVC.
4. **Runtime Library:** libstdc++, libc++, MSVCRT (Dynamic/Static).
5. **Standard Version:** C++17, C++20, C++23.
6. **Build Configuration:** Debug, Release, RelWithDebInfo.

Successful dependency management requires a system capable of resolving this matrix or bypassing it
entirely via source compilation.

## Distribution Models

### 1. System Package Managers (The "Distro" Model)

- **Tools:** `apt`, `pacman`, `brew`, `choco`.
- **Mechanism:** Libraries are installed globally into system paths (`/usr/lib`, `/usr/include`).
- **Architecture:**
  - **Pre-built Binaries:** The package maintainer decides the compiler and flags.
  - **Shared Linkage:** Typically provides shared objects (`.so`, `.dll`) linked dynamically.
- **Critical Drawbacks:**
  - **ABI Mismatch:** The system library might use `libstdc++` while you wish to use `libc++`.
  - **Version Locking:** You are restricted to the version provided by the OS repository (often
    outdated).
  - **Non-Reproducible:** A developer on Ubuntu 22.04 will have different library versions than a
    developer on Ubuntu 24.04.

**Verdict:** Unsuitable for most application development. Valid only for system-level dependencies
(drivers, libc).

### 5. Hybrid Models

Many real-world C++ organizations combine multiple models:

- **Source-based for proprietary libraries** + binary caching for public dependencies (e.g., vcpkg
  with NuGet binary cache).
- **CPM.cmake for CI** + Conan for release builds with binary artifacts.
- **System packages for tooling** (cmake, ninja, clang) + vcpkg for project dependencies.

The choice of distribution model is not binary; it is a spectrum based on the project's scale, CI
infrastructure maturity, and ABI requirements.

## Package Manager Taxonomy

Package managers can be classified along several axes:

### Source-Based vs. Binary vs. Registry-Based

| Axis                 | Source-Based                     | Binary-Based                  | Registry-Based                                           |
| -------------------- | -------------------------------- | ----------------------------- | -------------------------------------------------------- |
| **Mechanism**        | Downloads source, builds locally | Downloads pre-built artifacts | Resolves metadata from a registry, may build or download |
| **ABI Guarantee**    | Always correct (same compiler)   | Depends on profile matching   | Depends on implementation                                |
| **First Build Time** | Slow (compiles all deps)         | Fast (downloads)              | Variable                                                 |
| **Infrastructure**   | None (just Git)                  | Requires artifact server      | Requires registry server                                 |
| **Examples**         | CPM.cmake, vcpkg (default)       | Conan (primary mode)          | Cargo, npm, vcpkg (with binary cache)                    |

### Feature Matrix of C++ Package Managers

| Feature               | vcpkg                  | Conan 2.x            | CPM.cmake          | Buck2      | xmake            |
| --------------------- | ---------------------- | -------------------- | ------------------ | ---------- | ---------------- |
| **Resolution**        | Baseline + constraints | SAT solver (libsolv) | First-wins         | SAT solver | Version ranges   |
| **Binary Caching**    | NuGet / HTTP / files   | Built-in (remotes)   | None               | Built-in   | Optional         |
| **Registry**          | Git-based (ports)      | ConanCenter / custom | GitHub repos       | Custom     | Community repos  |
| **CMake Integration** | Toolchain file         | CMake generators     | `add_subdirectory` | Native     | Native           |
| **Cross-Compilation** | Triplets               | Profiles + settings  | Inherits host      | Profiles   | Platform configs |
| **Lockfile**          | `vcpkg.json` baseline  | `conan.lock`         | None (Git SHA)     | Lockfile   | Lockfile         |
| **Language**          | CMake (portfiles)      | Python (conanfile)   | CMake              | Starlark   | Lua              |

## Lockfile Formats and Determinism

A lockfile captures the exact resolved dependency graph at a point in time, ensuring that every
build from that lockfile produces the same result.

### vcpkg Baseline Locking

vcpkg does not use a traditional lockfile. Instead, it pins the entire ecosystem to a Git commit SHA
(the baseline). This is equivalent to locking every dependency's version simultaneously.

```json
{
  "name": "my-project",
  "version-string": "1.0.0",
  "builtin-baseline": "a1b2c3d4e5f6789012345678abcdef12"
}
```

When `builtin-baseline` is set, the versions of all dependencies are resolved against the vcpkg
registry at that specific commit. Updating a single dependency requires changing the baseline or
using overrides.

### Conan Lockfiles

Conan generates explicit lockfiles that capture the full resolved graph:

```text
# conan.lock (simplified)
[graph_root]
    my-project/1.0.0
    requires: fmt/10.1.1, nlohmann-json/3.11.2

[packages]
    fmt/10.1.1:abc123def456
    nlohmann-json/3.11.2:789abc012def
```

The lockfile is consumed with `conan install . --lockfile=conan.lock --lockfile-out=conan.lock`,
ensuring that the exact same versions and binary package IDs are used across all machines and CI
agents.

### Determinism Guarantees

- **Source determinism:** Same source code is fetched (Guaranteed by SHA/pinned tags).
- **Build determinism:** Same compiler flags produce the same binary (Guaranteed by source-based
  models).
- **Binary determinism:** Same pre-built artifact is downloaded (Guaranteed by content-addressable
  hashing in Conan/vcpkg binary caches).

## Version Constraint Semantics

Different ecosystems use different version constraint syntaxes. Understanding these is critical when
reading dependency specifications.

### Semantic Versioning (`MAJOR.MINOR.PATCH`)

Per [N4950 (no direct clause, but industry standard)](https://semver.org/):

- **MAJOR:** Breaking changes.
- **MINOR:** Backward-compatible additions.
- **PATCH:** Backward-compatible bug fixes.

### Constraint Operators

| Operator      | Example              | Matches                  | Does Not Match |
| ------------- | -------------------- | ------------------------ | -------------- |
| **Exact**     | `=1.2.3`             | 1.2.3                    | 1.2.4, 1.3.0   |
| **Caret** `^` | `^1.2.3`             | $\geq$ 1.2.3, &lt; 2.0.0 | 2.0.0          |
| **Tilde** `~` | `~1.2.3`             | $\geq$ 1.2.3, &lt; 1.3.0 | 1.3.0          |
| **Range**     | `>=1.0.0 &lt; 2.0.0` | 1.5.0                    | 2.0.0          |
| **Wildcard**  | `1.*`                | 1.0.0, 1.9.9             | 2.0.0          |

**Caret** allows changes that do not modify the left-most non-zero digit. This is the default in
Cargo and Conan.

**Tilde** allows patch-level changes only. This provides tighter control, suitable for dependencies
where minor version bumps may introduce regressions.

### vcpkg Version Constraints

vcpkg uses its own constraint syntax:

```json
{
  "name": "fmt",
  "version>=": "10.1.0"
}
```

Supported operators: `version>=`, `version>`, `version<=`, `version<`, `version=`. Combined with the
baseline mechanism, this allows upgrading specific packages while keeping the rest of the ecosystem
frozen.

## Transitive Dependency Graphs

A dependency graph is a directed acyclic graph (DAG) where nodes are packages and edges represent
"depends on" relationships.

### Depth Metrics

- **Direct dependencies:** Packages you explicitly list in your manifest.
- **Transitive dependencies:** Dependencies of your dependencies, pulled in automatically.
- **Graph depth:** The longest path from the root to a leaf node.

For a typical C++ project using vcpkg:

```text
my-app (root)
├── fmt (depth 1)
└── spdlog (depth 1)
    └── fmt (depth 2, already resolved)
```

### Graph Size in Practice

| Project Type         | Direct Deps | Total (with transitive) |
| -------------------- | ----------- | ----------------------- |
| Small CLI tool       | 2-5         | 5-15                    |
| Medium application   | 10-20       | 30-80                   |
| Large framework (Qt) | 5-10        | 200+                    |

Managing transitive dependencies is why SAT solving and lockfiles matter: a change at depth 3 can
cascade to affect the entire build.

## Dependency Resolution Algorithms

### SAT Solving (Boolean Satisfiability)

Modern package managers (Conan 2.x, vcpkg) reduce version resolution to a Boolean satisfiability
problem. Each possible version of each package becomes a Boolean variable. Constraints become
clauses in a CNF (Conjunctive Normal Form) formula.

**Example transformation:**

- `LibA requires fmt >= 9.0` becomes: `(fmt_9_0 OR fmt_9_1 OR fmt_10_0 OR ...)`
- `LibB requires fmt < 10.0` becomes: `(fmt_9_0 OR fmt_9_1)`

The solver finds an assignment that satisfies all clauses simultaneously. If no assignment exists,
the solver reports a conflict.

Conan 2.x uses **libsolv**, the same SAT solver used by RPM and openSUSE's Zypper, which can resolve
graphs with thousands of packages in milliseconds.

### DNF (Disjunctive Normal Form) Fallback

Some simpler resolvers (early vcpkg, CPM.cmake) use a greedy approach: they resolve dependencies
depth-first and accept the first version that satisfies the immediate constraints. This is faster
but can produce suboptimal or conflicting results.

### Resolution Comparison

| Strategy              | Optimality               | Speed                            | Conflict Reporting                 |
| --------------------- | ------------------------ | -------------------------------- | ---------------------------------- |
| **SAT solver**        | Guaranteed optimal       | Moderate (ms for typical graphs) | Precise conflict sets              |
| **Greedy/first-wins** | May miss valid solutions | Fast                             | Vague ("version conflict")         |
| **Backtracking**      | Optimal (exhaustive)     | Slow (worst case exponential)    | Can report why each attempt failed |

## Common Pitfalls

1. **Mixing package managers:** Using both vcpkg and Conan for the same project can cause ODR
   violations. Pick one and stick with it, or use Conan's CMake integration to consume vcpkg
   packages through a unified interface.
2. **Unpinned versions:** Relying on `master` or `HEAD` branches breaks reproducibility. Always pin
   to a specific tag or commit SHA.
3. **Ignoring transitive dependencies:** A dependency's dependency may introduce a vulnerable
   library. Audit the full resolved graph, not just direct dependencies.
4. **Assuming ABI compatibility:** Two packages compiled with different standard library
   implementations (libstdc++ vs libc++) are binary-incompatible even if they use the same compiler
   version.

## See Also

- [CPM.cmake](2_cpm.md) — Lightweight source-based package management
- [vcpkg](3_vcpkg.md) — Microsoft's source-based package manager
- [Binary Caching](6_binary_caching.md) — Accelerating builds with pre-compiled artifacts
- [Property Propagation](5_property_propagation.md) — How build properties flow through the
  dependency graph
- [Cross-compilation Toolchains](../1_compiler_and_standards/4_crosscompilation_toolchains.md) —
  Building for different target architectures

### 2. Vendoring (Submodules / Copy-Paste)

- **Tools:** Git Submodules, Monorepos.
- **Mechanism:** Source code of dependencies is committed directly into the project repository or
  checked out into a subdirectory.
- **Architecture:**
  - **Source Compilation:** Dependencies are built as part of the main project build graph.
  - **Total Control:** Exact commits are locked.
- **Critical Drawbacks:**
  - **Repo Bloat:** Cloning the project becomes slow.
  - **Transitive Complexity:** If Lib A and Lib B both vendor Lib C, managing version conflicts
    (Diamond Dependency) requires manual intervention.
  - **Build Time:** Every clean build recompiles the entire world.

**Verdict:** Valid for very small projects or massive monorepos (Google style), but scales poorly
for mid-sized projects without tooling.

### 3. Source-Based Package Managers

- **Tools:** vcpkg, CPM.cmake.
- **Mechanism:** The tool downloads dependency source code and compiles it locally using the _exact
  same compiler and flags_ as the main project.
- **Architecture:**
  - **ABI Guarantee:** Since the dependency is built _contextually_ with the project, ABI
    compatibility is mathematically guaranteed.
  - **Semantic Versioning:** Allows specifying constraints (`fmt >= 9.0`).
- **Trade-off:** Significantly increased build times on the first run, as all dependencies must be
  compiled from scratch.

**Verdict:** The recommended default for modern C++ development due to robustness and simplicity.

### 4. Binary Package Managers

- **Tools:** Conan.
- **Mechanism:** Contributors specify profiles (compiler, flags, OS) and upload links of pre-built
  binaries to a central repository. Allowing binaries to be downloaded and linked directly into the
  project.
- **Architecture:**
  - **Profile Matching:** The client calculates a hash of the current compiler settings and requests
    a binary matching that hash.
  - **Fallback:** If no binary matches, it falls back to building from source.
- **Trade-off:** Requires complex infrastructure setup (Artifactory, remotes) and rigorous profile
  management.

**Verdict:** An alternative that can reduce build times locally and for CI, but adds significant
complexity and seems breaks frequently with my experience.

## The Diamond Dependency Problem

A critical architectural challenge in C++ dependency management is the **Diamond Dependency**
combined with the **One Definition Rule (ODR)**.

**Scenario:**

- `App` depends on `LibA` and `LibB`.
- `LibA` depends on `JsonLib v1.0`.
- `LibB` depends on `JsonLib v2.0`.

### The Problem

In languages like Node.js (npm), `LibA` and `LibB` can each receive their own copy of `JsonLib`
(nested `node_modules`). In C++, this is impossible if the symbols are exported globally. Linking
two versions of `JsonLib` into the same executable violates the ODR, resulting in linker errors or
runtime undefined behavior (segfaults).

### The Solution (SAT Solving)

C++ Package managers must perform **SAT (Boolean Satisfiability) Solving** to find a single version
of `JsonLib` that satisfies the constraints of both `LibA` and `LibB`.

- If `LibA` requires `JsonLib >= 1.0` and `LibB` requires `JsonLib >= 2.0`, the solver selects
  `2.0`.
- If `LibA` requires `JsonLib < 2.0` and `LibB` requires `JsonLib >= 2.0`, the build **must fail**
  before compilation begins.

## Best Practice Recommendation

For the architecture described in this course, we adhere to the following hierarchy:

1. **Default:** **vcpkg (Manifest Mode)**. It offers the best balance of usability, ODR safety (via
   strict baseline versioning), and ABI compliance (source-based).
2. **Lightweight:** **CPM.cmake**. For projects with very few dependencies where setting up vcpkg is
   overkill. This can be used with conan to enable building source-based packages when library
   updates are not propagated to vcpkg or conan.
3. **Scale:** **Conan**. Only when build times become the primary bottleneck (~30+ minutes) and
   binary caching is mandatory.
