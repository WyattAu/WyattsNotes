---
title: Dependency Resolution
description:
  'C++: Dependency Resolution — The C++ Package Management Problem; The ABI Matrix; Distribution Models; 1. System Package Managers (The "Distro" Model).'
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

The total number of valid ABI configurations for a single library on a single platform with two
compilers, two standard libraries, and three build types is $2 \times 2 \times 3 = 12$. Across three
platforms and two architectures, this becomes $12 \times 3 \times 2 = 72$. This combinatorial
explosion is why binary package management for C++ is fundamentally harder than for languages with a
single runtime.

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
complexity.

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

### Proof: Why Lockfiles Are Necessary

Consider a project that depends on `LibA >= 1.0.0` and `LibB >= 2.0.0`. Both libraries have released
new versions: `LibA 1.5.0` and `LibB 2.3.0`.

Without a lockfile:

- **Developer A** resolves the graph on Monday and gets `LibA 1.4.0` and `LibB 2.2.0`.
- **Developer B** resolves the graph on Wednesday and gets `LibA 1.5.0` and `LibB 2.3.0`.
- Both developers build "the same" project but with different dependency versions. If `LibA 1.5.0`
  introduced a behavioral change, the two developers will observe different program behavior.
- **CI** may resolve a third combination, producing a binary that neither developer tested.

With a lockfile:

- The lockfile records `LibA = 1.4.0` and `LibB = 2.2.0`. Every developer and CI agent uses these
  exact versions regardless of when they build.
- Updating a dependency is an explicit act (modify the manifest, regenerate the lockfile, commit the
  lockfile). This makes dependency updates auditable via version control.

The lockfile is the only mechanism that guarantees build reproducibility in the presence of version
ranges and floating dependencies.

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

Per [SemVer 2.0.0](https://semver.org/):

- **MAJOR:** Breaking changes.
- **MINOR:** Backward-compatible additions.
- **PATCH:** Backward-compatible bug fixes.

C++ libraries rarely follow SemVer strictly because the concept of "breaking change" is
ABI-dependent. A library that changes a private member variable may break ABI compatibility without
changing the public API. This makes SemVer an imperfect fit for C++ binary dependencies.

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
+-- fmt (depth 1)
+-- spdlog (depth 1)
    +-- fmt (depth 2, already resolved)
```

### Graph Size in Practice

| Project Type         | Direct Deps | Total (with transitive) |
| -------------------- | ----------- | ----------------------- |
| Small CLI tool       | 2-5         | 5-15                    |
| Medium application   | 10-20       | 30-80                   |
| Large framework (Qt) | 5-10        | 200+                    |

Managing transitive dependencies is why SAT solving and lockfiles matter: a change at depth 3 can
cascade to affect the entire build.

### Package Naming Conventions

Package names across different registries follow different conventions:

| Package       | Conan                  | vcpkg           | System (apt)         |
| :------------ | :--------------------- | :-------------- | :------------------- |
| fmt           | `fmt/10.1.1`           | `fmt`           | `libfmt-dev`         |
| nlohmann_json | `nlohmann_json/3.11.2` | `nlohmann-json` | `nlohmann-json3-dev` |
| OpenSSL       | `openssl/3.1.2`        | `openssl`       | `libssl-dev`         |
| zlib          | `zlib/1.2.13`          | `zlib`          | `zlib1g-dev`         |

The inconsistency in naming (`nlohmann_json` vs `nlohmann-json` vs `nlohmann-json3-dev`) is a
consequence of the fragmented ecosystem. When migrating between package managers, name mapping is
often the first manual step.

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
two versions of `JsonLib` into the same executable violates the ODR [N4950 S6.3], resulting in
linker errors or runtime undefined behavior (segfaults).

### The Solution (SAT Solving)

C++ Package managers must perform **SAT (Boolean Satisfiability) Solving** to find a single version
of `JsonLib` that satisfies the constraints of both `LibA` and `LibB`.

- If `LibA` requires `JsonLib >= 1.0` and `LibB` requires `JsonLib >= 2.0`, the solver selects
  `2.0`.
- If `LibA` requires `JsonLib < 2.0` and `LibB` requires `JsonLib >= 2.0`, the build **must fail**
  before compilation begins.

This is a fundamental advantage of SAT-based resolution over greedy approaches: the solver can prove
that no valid solution exists and report a precise conflict, rather than silently producing a broken
build.

## Best Practice Recommendation

For the architecture described in this course, we adhere to the following hierarchy:

1. **Default:** **vcpkg (Manifest Mode)**. It offers the best balance of usability, ODR safety (via
   strict baseline versioning), and ABI compliance (source-based).
2. **Lightweight:** **CPM.cmake**. For projects with very few dependencies where setting up vcpkg is
   overkill. This can be used with conan to enable building source-based packages when library
   updates are not propagated to vcpkg or conan.
3. **Scale:** **Conan**. Only when build times become the primary bottleneck (~30+ minutes) and
   binary caching is mandatory.

## Security: Supply Chain Attack Vectors

C++ dependency management introduces supply chain risks that differ from interpreted languages.
Because C++ compiles to native machine code, a compromised dependency can execute arbitrary code
with the full privileges of the host process -- there is no sandbox or bytecode verifier.

### Attack Vectors

1. **Dependency Confusion (Typosquatting):** An attacker publishes a package with a name similar to
   a popular library (e.g., `nlohmann-json` vs `nlohmann_json`). If the package manager resolves
   names incorrectly, the malicious package is fetched instead.
2. **Compromised maintainer account:** The maintainer's account is breached, and a backdoored
   version is pushed. This happened to `event-stream` (Node.js, 2018) and `xz-utils` (C, 2024).
3. **Compromised build infrastructure:** The CI/CD pipeline that produces binary artifacts is
   compromised, injecting malicious code into cached binaries.
4. **Transitive dependency injection:** A legitimate package adds a new transitive dependency that
   is malicious.

### Mitigation Strategies

- **Pin dependencies to exact SHAs:** Never use floating versions like `>= 1.0.0` in production.
  Lock to a specific Git commit SHA in `vcpkg.json` or `conan.lock`.
- **Audit the lockfile diff:** When updating dependencies, review the full resolved graph diff, not
  just the direct dependency changes. A transitive dependency update can introduce a vulnerability.
- **Reproduce from source:** Use source-based package managers (vcpkg, CPM.cmake) to ensure you are
  building from auditable source, not downloading opaque binary artifacts.
- **Use `export CMAKE_VERIFY_INTERFACE_HEADER_SETS ON`** (CMake 3.29+) to verify that exported
  headers form a self-consistent interface, catching tampering at configure time.

## Practical CMake Integration Example

The following `CMakeLists.txt` demonstrates a robust vcpkg integration with property propagation:

```cmake
cmake_minimum_required(VERSION 3.28)
project(MyApp LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

find_package(fmt CONFIG REQUIRED)
find_package(nlohmann_json CONFIG REQUIRED)

add_executable(app src/main.cpp)

target_link_libraries(app PRIVATE fmt::fmt nlohmann_json::nlohmann_json)

# Verify that linked targets actually exported what they claim
set(CMAKE_VERIFY_INTERFACE_HEADER_SETS ON)
```

When CMake locates packages via vcpkg's toolchain file
(`cmake -DCMAKE_TOOLCHAIN_FILE=[vcpkg root]/scripts/buildsystems/vcpkg.cmake`), it resolves the
dependency graph, compiles from source, and links against the resulting libraries. The
`CMAKE_VERIFY_INTERFACE_HEADER_SETS` check ensures that the installed package headers form a valid
interface, catching common packaging errors and potential tampering.

## Common Pitfalls

- **Mixing package managers:** Using both vcpkg and Conan for the same project can cause ODR
  violations. Pick one and stick with it, or use Conan's CMake integration to consume vcpkg packages
  through a unified interface.
- **Unpinned versions:** Relying on `master` or `HEAD` branches breaks reproducibility. Always pin
  to a specific tag or commit SHA.
- **Ignoring transitive dependencies:** A dependency's dependency may introduce a vulnerable
  library. Audit the full resolved graph, not just direct dependencies.
- **Assuming ABI compatibility:** Two packages compiled with different standard library
  implementations (libstdc++ vs libc++) are binary-incompatible even if they use the same compiler
  version.
- **Not committing the lockfile:** A lockfile that is not in version control provides no
  reproducibility guarantee. Always commit `vcpkg.json`, `conan.lock`, or equivalent to the
  repository.
- **Overriding dependencies without understanding the cascade:** Using vcpkg overrides or Conan
  `requires` to force a specific version of a transitive dependency may break the dependency that
  originally required it. Always verify that the override satisfies all constraints.

## Transitive Dependency Resolution in Practice

When a package manager resolves the dependency graph, it must handle transitive dependencies
correctly. Consider a project with the following dependency structure:

```text
my-app
+-- spdlog/2.1.0
|   +-- fmt/10.1.0 (required: >= 9.0.0)
+-- nlohmann_json/3.11.2
    +-- (no dependencies)
```

The package manager must ensure that:

1. `fmt 10.1.0` is built with the same compiler flags as `spdlog 2.1.0` and `my-app`.
2. `fmt 10.1.0` is built exactly once and shared by all consumers.
3. If `spdlog` were updated to `2.2.0` which requires `fmt >= 10.2.0`, the resolver would either
   upgrade `fmt` to `10.2.0` (satisfying both constraints) or report a conflict if `10.2.0` is not
   available.

### Dependency Graph Depth and Build Time Impact

The depth of the dependency graph directly affects build time. Each level of transitive dependency
adds to the serial portion of the build (if dependencies must be built in order) or to the parallel
portion (if they are independent).

For source-based package managers, the first build of a project with 30 transitive dependencies may
take 10-30 minutes, depending on the complexity of the dependencies. Binary caching reduces this to
seconds.

### Version Conflicts in Transitive Dependencies

A version conflict occurs when two direct (or transitive) dependencies require incompatible versions
of the same transitive dependency. The package manager's resolution algorithm determines how this is
handled:

| Package Manager | Conflict Behavior                                                                              |
| :-------------- | :--------------------------------------------------------------------------------------------- |
| **vcpkg**       | Fails at configure time with a clear error message                                             |
| **Conan 2.x**   | SAT solver finds a compatible version or reports a conflict with the unsatisfiable constraints |
| **CPM.cmake**   | First-wins: the first resolved version is used, potentially violating later constraints        |

The "first-wins" behavior of CPM.cmake is a known limitation. It means that if `LibA` (resolved
first) requires `fmt >= 9.0` and `LibB` (resolved second) requires `fmt >= 10.0`, CPM.cmake may use
`fmt 9.x` if that is the first version it encounters, violating `LibB`'s constraint. This is why
CPM.cmake is recommended only for projects with simple dependency graphs.

## CMake `find_package` vs Package Manager Integration

CMake provides two mechanisms for locating dependencies: `find_package()` and package
manager-specific integration. Understanding the difference is critical:

### `find_package()` (System/Search-based)

```cmake
find_package(fmt CONFIG REQUIRED)
target_link_libraries(app PRIVATE fmt::fmt)
```

`find_package()` searches for installed packages using CMake's search heuristics (platform-specific
paths, `CMAKE_PREFIX_PATH`, registry). It does not download or build anything; it only locates
pre-installed packages.

### Package Manager Integration (vcpkg, Conan)

```cmake
# vcpkg: find_package works because vcpkg's toolchain file installs packages into a known location
find_package(fmt CONFIG REQUIRED)

# Conan: uses CMake generators to create find modules
find_package(fmt CONFIG REQUIRED)
```

Both vcpkg and Conan integrate with CMake by either:

- Providing a toolchain file that adds their install prefix to CMake's search paths (vcpkg), or
- Generating CMake find modules that `find_package()` can discover (Conan).

The key point is that `find_package()` is the common interface. The package manager handles
downloading, building, and installing dependencies behind the scenes, and `find_package()` locates
the result.

### Which to Use

- **System dependencies** (cmake, ninja, compilers): Use `find_package()` directly.
- **Project dependencies** (fmt, nlohmann_json, Boost): Use a package manager (vcpkg or Conan) that
  integrates with `find_package()`.
- **Simple projects with 1-3 dependencies:** CPM.cmake's `FetchContent` approach is viable.
- **Do not** mix `find_package()` with manual `add_subdirectory()` for the same dependency across
  different targets in the same project.

## Reproducible Builds Across Machines

Achieving reproducible builds across different developer machines and CI agents requires three
conditions:

1. **Same source code:** Version controlled (Git SHA).
2. **Same toolchain:** Same compiler version, flags, and standard library. Use a toolchain file
   (CMake) or profile (Conan) to pin these.
3. **Same dependencies:** Lockfile-pinned versions (vcpkg baseline or Conan lockfile).

The build is reproducible if and only if all three conditions are met. A missing lockfile means
condition 3 is violated. A compiler upgrade on one machine means condition 2 is violated.

### Verifying Reproducibility

For source-based package managers, you can verify reproducibility by comparing the build artifacts:

```bash
# Build on machine A
cmake -S . -B build -DCMAKE_TOOLCHAIN_FILE=/path/to/vcpkg.cmake
cmake --build build

# Build on machine B (same source, same lockfile, same compiler)
cmake -S . -B build -DCMAKE_TOOLCHAIN_FILE=/path/to/vcpkg.cmake
cmake --build build

# Compare (should be bit-for-bit identical with -O0)
diff <(sha256sum build/app) <(ssh machine-b 'sha256sum build/app')
```

Deterministic builds require `-O0` (no optimization, which may vary with compiler version) and
timestamps to be stripped from the binary. Use `-frandom-seed=0` and `-Wl,--build-id=none` for
bit-exact reproducibility.

## Binary Caching Strategies

Binary caching is the primary mechanism for reducing build times in production CI environments. The
concept is simple: if a dependency has already been built with identical inputs, download the
pre-built artifact instead of rebuilding from source.

### Content-Addressable Caching

The cache key is typically a hash of:

1. Source code content (Git SHA of the dependency).
2. Compiler version and flags (`-std=c++23`, `-O2`, `-fPIC`).
3. Platform triplet (os-arch-compiler-runtime).
4. CMake toolchain file content.
5. Dependency's own dependencies (transitive cache key).

If any of these inputs change, the cache key changes and the binary must be rebuilt.

### Cache Storage Backends

| Backend              | Tool Support                  | Use Case                         |
| :------------------- | :---------------------------- | :------------------------------- |
| **Local filesystem** | vcpkg, Conan                  | Developer machines (single-user) |
| **HTTP server**      | vcpkg (NuGet), Conan (remote) | CI/CD shared cache               |
| **Amazon S3**        | Conan (S3 remote)             | Cloud-based CI                   |
| **Azure Blob**       | vcpkg (NuGet), Conan          | Azure DevOps                     |
| **NFS mount**        | vcpkg (binary cache), Conan   | On-premise CI farm               |

### vcpkg Binary Caching

vcpkg supports multiple binary cache backends via the `X_VCPKG_ASSET_SOURCES` environment variable
or CMake variable:

```cmake
# Use a local binary cache directory
set(VCPKG_BINARY_SOURCES "clear;files,${CMAKE_BINARY_DIR}/vcpkg_cache,readwrite")

# Use an HTTP-based NuGet feed
set(VCPKG_BINARY_SOURCES "clear;nuget,https://my-company-nuget.example.com/v3/index.json,readwrite")
```

The `clear` prefix removes all previously configured sources, preventing unintended accumulation of
cache backends across nested CMake projects.

### Conan Binary Packages

Conan uses a package ID (a hash of the profile settings and options) to identify binary artifacts.
Packages are uploaded to a remote and downloaded by consumers:

```bash
# Create a package and upload to remote
conan create . -pr:b default -pr:h default
conan upload mylib/1.0.0 -r=my-remote

# Consumer downloads the pre-built package
conan install . --requires mylib/1.0.0 -r=my-remote
```

If the consumer's profile hash does not match any uploaded package, Conan falls back to building
from source and optionally uploading the result.

## Cross-Compilation and Dependency Management

Cross-compilation introduces additional complexity because the host machine (running the build) and
the target machine (running the binary) have different ABIs. Package managers must handle this
explicitly.

### vcpkg Triplets

vcpkg uses **triplets** to specify the target platform:

```bash
# Build for ARM64 Linux from x86_64 Linux
vcpkg install fmt --triplet arm64-linux

# Build for Windows from Linux
vcpkg install fmt --triplet x64-windows
```

The triplet file specifies the target architecture, OS, and CRT. vcpkg ships with predefined
triplets for common platforms and supports custom triplets.

### Conan Profiles

Conan uses **profiles** to specify both the host and build platforms:

```ini
# profiles/arm64-linux
[settings]
os=Linux
arch=armv8
compiler=gcc
compiler.version=13
compiler.libcxx=libstdc++11
build_type=Release
```

```bash
# Build on x86_64, target ARM64
conan install . -pr:h arm64-linux -pr:b x86_64-linux
```

The `-pr:h` flag specifies the host profile (target), and `-pr:b` specifies the build profile (where
the compiler runs). This is necessary when cross-compiling because the dependency may need to run a
build step (e.g., code generation) on the host machine.

## Monorepo Dependency Management

In a monorepo, dependencies between projects within the same repository are managed differently from
external dependencies:

```cmake
# Internal dependency (same repo)
add_subdirectory(../libs/utils)

# External dependency (package manager)
find_package(fmt CONFIG REQUIRED)
```

The challenge is that internal dependencies change frequently (with every commit), while external
dependencies change rarely. Build caching for internal dependencies requires a different strategy:

1. **Content-addressable caching:** Hash the source files of the internal dependency. If the hash
   changes, invalidate the cached binary.
2. **CMake package export:** Internal libraries can export themselves via `install(EXPORT ...)` and
   be consumed via `find_package()` within the monorepo, providing the same interface as external
   packages.

## See Also

- [CPM.cmake](2_cpm.md)
- [vcpkg](3_vcpkg.md)
- [Conan](4_conan.md)
- [Binary Caching](6_binary_caching.md)
- [Property Propagation](5_property_propagation.md)
- [Cross-compilation Toolchains](../1_compiler_and_standards/4_crosscompilation_toolchains.md)
