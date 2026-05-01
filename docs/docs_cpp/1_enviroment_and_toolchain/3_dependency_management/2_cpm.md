---
title: CPM.cmake
description:
  "C++: CPM.cmake — Architectural Mechanism; The ABI Guarantee; Proof of Reproducibility Guarantee; Bootstrapping (Zero-Dependency Setup)."
date: 2025-12-11T04:34:32.158Z
tags:
  - cpp
categories:
  - cpp
slug: cpm-cmake
---

**CPM.cmake** (CMake Package Manager) provides a lightweight abstraction over the standard CMake
`FetchContent` module. It bridges the gap between manual vendoring (git submodules) and full-scale
package managers (vcpkg/Conan).

In the context of this course, CPM.cmake is the preferred distribution model for:

1. **Small-to-Medium Projects:** Where the overhead of configuring vcpkg manifests is unjustified.
2. **Library Development:** Where the library itself has dependencies and aims to be easily
   consumable by other CMake projects.
3. **Bleeding Edge Dependencies:** When a library update is required that has not yet propagated to
   vcpkg or Conan registries.

## Architectural Mechanism

CPM.cmake operates strictly on the **Source-Based Model**.

1. **Resolution:** It resolves dependencies via Git repositories (GitHub/GitLab) or URL archives.
2. **Retrieval:** It checks a local cache directory. If the requested version is missing, it
   downloads the source.
3. **Integration:** It invokes `add_subdirectory()` on the downloaded source.
4. **Graph Merger:** The dependency's CMake targets are added directly to the main project's build
   graph.

### The ABI Guarantee

Because dependencies are compiled as sub-projects of the main build, they inherit the **exact global
build configuration**.

- Same Compiler (Clang/GCC/MSVC).
- Same Standard Flags (`-std=c++23`).
- Same Sanitizer Configuration (ASan/UBSan).
- Same Runtime Library (UCRT/glibc).

This architecture creates a mathematical guarantee of ABI compatibility, eliminating the "Mismatch
Linker Error" class of bugs.

### Proof of Reproducibility Guarantee

**Claim:** Given identical `CPMAddPackage` calls with pinned `GIT_TAG` values and identical CMake
cache, any two machines produce bit-for-bit identical build outputs.

**Proof sketch:**

1. Each `CPMAddPackage(NAME foo GIT_TAG abc123)` resolves to a deterministic Git commit. A Git
   commit SHA uniquely identifies a tree of source files [Git internals].
2. CPM computes a cache key as `NAME + version/tag`. For a pinned tag, this key is invariant across
   machines.
3. `FetchContent_Declare` downloads the archive for the pinned commit. The archive contents are
   deterministic (Git packs are content-addressed).
4. `add_subdirectory` compiles the source with the global CMake configuration. If the global
   configuration is identical (same compiler, same flags, same toolchain), the compiler produces
   identical object files.
5. The linker combines these object files deterministically given the same input order.

$\therefore$ The output is deterministic given the same pinned versions and build configuration.
$\blacksquare$

**Limitations:** This proof assumes pinned tags (immutable references). If a branch name is used as
`GIT_TAG`, the resolved commit may differ between machines at different times, breaking
reproducibility. Always pin to tags or commit SHAs.

## Bootstrapping (Zero-Dependency Setup)

CPM.cmake is distributed as a single CMake script. The standard practice is to "bootstrap" it --
downloading it automatically during the CMake configure phase if it does not exist. This ensures the
project is self-contained.

Create `cmake/CPM.cmake` or include this block in your root `CMakeLists.txt`:

```cmake
set(CPM_DOWNLOAD_VERSION 0.40.0)

if(CPM_SOURCE_CACHE)
  set(CPM_DOWNLOAD_LOCATION "${CPM_SOURCE_CACHE}/cpm/CPM_${CPM_DOWNLOAD_VERSION}.cmake")
elseif(DEFINED ENV{CPM_SOURCE_CACHE})
  set(CPM_DOWNLOAD_LOCATION "$ENV{CPM_SOURCE_CACHE}/cpm/CPM_${CPM_DOWNLOAD_VERSION}.cmake")
else()
  set(CPM_DOWNLOAD_LOCATION "${CMAKE_BINARY_DIR}/cmake/CPM_${CPM_DOWNLOAD_VERSION}.cmake")
endif()

if(NOT (EXISTS ${CPM_DOWNLOAD_LOCATION}))
  message(STATUS "Downloading CPM.cmake to ${CPM_DOWNLOAD_LOCATION}")
  file(DOWNLOAD
       https://github.com/cpm-cmake/CPM.cmake/releases/download/v${CPM_DOWNLOAD_VERSION}/CPM.cmake
       ${CPM_DOWNLOAD_LOCATION}
  )
endif()

include(${CPM_DOWNLOAD_LOCATION})
```

## Adding Packages

Dependencies are declared using `CPMAddPackage`. This function handles version checking, caching,
and target creation.

### Basic Syntax

```cmake
CPMAddPackage(
  NAME fmt
  GITHUB_REPOSITORY fmtlib/fmt
  GIT_TAG 10.1.1
  OPTIONS
    "FMT_INSTALL OFF"  # Do not install fmt when installing our project
    "FMT_TEST OFF"     # Do not build fmt's tests
)

# Link against the target defined by fmt's CMakeLists.txt
target_link_libraries(MyApplication PRIVATE fmt::fmt)
```

### Analysis

1. **NAME:** The logical name used for caching.
2. **GITHUB_REPOSITORY:** Shorthand for `https://github.com/user/repo`.
3. **GIT_TAG:** A specific commit hash or tag. **Best Practice:** Always pin to a specific tag or
   hash for reproducibility. Prevent using `master` or `HEAD`.
4. **OPTIONS:** These are passed as CMake Cache Variables to the dependency. This is critical for
   controlling the build (e.g., disabling examples, docs, and tests of dependencies to save build
   time).

## The CPM Source Cache (`CPM_SOURCE_CACHE`)

By default, `FetchContent` and CPM download sources into the `build/_deps` directory. This has two
significant drawbacks:

1. **Redundant Downloads:** Deleting the `build` folder requires re-downloading all dependencies.
2. **Disk Usage:** Multiple projects using `fmt` will duplicate the source code.

To resolve this, configure the **CPM Source Cache**. This is an environment variable pointing to a
directory outside the build tree.

### Configuration

**Linux/macOS (.bashrc / .zshrc):**

```bash
export CPM_SOURCE_CACHE=$HOME/.cache/CPM
```

**Windows (PowerShell Profile):**

```powershell
[System.Environment]::SetEnvironmentVariable("CPM_SOURCE_CACHE", "$env:LOCALAPPDATA\CPM", "User")
```

**CMake Behavior with Cache:**

1. CMake checks `$CPM_SOURCE_CACHE/fmt/10.1.1`.
2. If found, it uses `add_subdirectory` directly from that path.
3. If not found, it downloads to that path, ensuring future builds (even of different projects)
   reuse the source.

## Package Configuration Pattern

To maintain a clean root `CMakeLists.txt`, abstract dependency logic into a dedicated module.

**File Structure:**

```text
Project/
  CMakeLists.txt
  cmake/
    dependencies.cmake
  src/
```

**cmake/dependencies.cmake:**

```cmake
# Centralized dependency declaration
CPMAddPackage(
  NAME nlohmann_json
  GITHUB_REPOSITORY nlohmann/json
  VERSION 3.11.2
)

CPMAddPackage(
  NAME spdlog
  GITHUB_REPOSITORY gabime/spdlog
  VERSION 1.12.0
  OPTIONS "SPDLOG_BUILD_EXAMPLE OFF"
)
```

**Root CMakeLists.txt:**

```cmake
cmake_minimum_required(VERSION 3.25)
project(App)

include(cmake/CPM.cmake)         # Bootstrap
include(cmake/dependencies.cmake) # Load Libs

add_executable(App main.cpp)
target_link_libraries(App PRIVATE nlohmann_json::nlohmann_json spdlog::spdlog)
```

## Local Overrides

A frequent requirement in systems programming is debugging a library within the context of the
application. CPM allows overriding a dependency with a local path using a CMake CLI flag, bypassing
the network fetch.

**Scenario:** Debugging `spdlog` inside `App`.

```bash
cmake -S . -B build -DCPM_spdlog_SOURCE=/home/user/workspace/spdlog-fork
```

When this flag is detected, CPM ignores the `GITHUB_REPOSITORY` argument and calls
`add_subdirectory(/home/user/workspace/spdlog-fork)`.

This mechanism is invaluable for debugging: you can modify the dependency's source code in-place,
rebuild the application, and test fixes without modifying the project's dependency declarations.

## CPM.cmake Internals: How It Works

### How CPMAddPackage Works

CPM.cmake is a single-file CMake script (approximately 2000 lines) that wraps `FetchContent`. When
`CPMAddPackage` is called, it performs the following steps:

1. **Parse arguments:** Extract `NAME`, `GITHUB_REPOSITORY`, `GIT_TAG`, `VERSION`, `OPTIONS`, etc.
2. **Compute cache key:** Generate a deterministic key from `NAME` + version/tag. If `VERSION` is
   specified but not `GIT_TAG`, CPM tries common tag prefixes (`v`, `V`, no prefix) to map the
   version to a Git tag.
3. **Check local cache:** Look in `CPM_SOURCE_CACHE/<name>/<version>` and in
   `${CMAKE_BINARY_DIR}/_deps/<name>-<hash>/`.
4. **Download if missing:** Use `FetchContent_Declare` + `FetchContent_Populate` to download the
   source from the Git repository or URL.
5. **Set CMake options:** Apply `OPTIONS` as `-D<OPTION>` cache variables to the dependency's CMake
   configuration.
6. **Integrate:** Call `add_subdirectory()` on the fetched source, adding all targets to the main
   build graph.
7. **Return target names:** Set `<name>_ADDED`, `<name>_SOURCE_DIR`, and `<name>_BINARY_DIR`
   variables for the caller.

### Lock Mechanism

CPM does not have a formal lockfile like vcpkg's `vcpkg.json` baseline or Conan's `conan.lock`.
Instead, it relies on **pinned tags in the source code** as the lock mechanism. The `GIT_TAG` field
in each `CPMAddPackage` call serves as the de facto lock.

This is weaker than a dedicated lockfile because:

1. There is no automated verification that a tag has not been force-pushed (deleted and recreated).
2. There is no mechanism to detect that a dependency has added new transitive dependencies.
3. There is no tool to audit whether all dependencies are pinned.

Mitigation: Use commit SHAs instead of tags for critical dependencies, and use CI to verify that
`CPM_SOURCE_CACHE` is populated from the expected versions.

### Offline Mode

CPM supports offline builds through two mechanisms:

1. **Pre-populated cache:** If `CPM_SOURCE_CACHE` contains all dependencies, CPM uses them without
   network access. This is the recommended approach for CI and air-gapped environments.
2. **`FETCHCONTENT_FULLY_DISCONNECTED`:** CMake 3.28+ supports this variable. When set to `ON`,
   `FetchContent` skips all downloads. If a dependency is not in the cache, CMake fails with an
   error.

```bash
# Offline CI build
export CPM_SOURCE_CACHE=/mnt/cached-deps
cmake -S . -B build -DFETCHCONTENT_FULLY_DISCONNECTED=ON
cmake --build build
```

## Limitations

While efficient for small-to-medium graphs, CPM scales poorly when:

1. **Diamond Dependencies Occur:** If Lib A wants `fmt 9.0` and Lib B wants `fmt 10.0`, CPM attempts
   to enforce a single version (usually the first one defined). Manual intervention via
   `CPMAddPackage` overrides is required to resolve the conflict via SAT solving logic manually.
2. **Build Times Explode:** Since every dependency is built from source, a clean build of a project
   with 50 dependencies may take an unacceptable amount of time. (Mitigation: Use `ccache`.)
3. **Non-CMake Projects:** CPM relies on the dependency having a `CMakeLists.txt`. For libraries
   using only Makefiles or premake, CPM cannot easily integrate them into the build graph.

### The Diamond Dependency Problem

Consider the following dependency graph:

```text
my-app
  +-- lib-a
  |     +-- fmt 10.1.0
  +-- lib-b
        +-- fmt 9.0.0
```

CPM processes `CPMAddPackage` calls in order. If `lib-a` declares `fmt 10.1.0` first, CPM adds it to
the build graph. When `lib-b` subsequently declares `fmt 9.0.0`, CPM detects the conflict and issues
a warning but does **not** automatically resolve it. The first version wins.

Resolution strategies:

1. **Manually pin a compatible version:** Declare `fmt 10.1.0` at the project root before including
   `lib-a` and `lib-b`, so both subdirectories see the same version.
2. **Use a CPM override variable:** `CPM_fmt_VERSION=10.1.0` overrides all `fmt` version requests.
3. **Migrate to Conan/vcpkg:** These tools have SAT-based solvers that can find a compatible version
   automatically.

## How CPM Downloads Packages at Configure Time

CPM operates entirely within CMake's configure phase. When `CPMAddPackage` is called, CPM performs
the following steps:

### Step-by-Step Download Process

1. **Cache Check:** CPM computes a cache key from the package `NAME` and version/tag. It checks if
   the source already exists in `CPM_SOURCE_CACHE` or `_deps`.
2. **Network Fetch:** If the source is not cached, CPM uses CMake's `FetchContent_Declare` to
   download from the specified URL or Git repository.
3. **Version Validation:** For Git-based packages, CPM checks out the specified `GIT_TAG` (tag,
   branch, or commit SHA). For URL-based packages, it extracts the archive.
4. **`add_subdirectory`:** CPM calls `add_subdirectory` on the fetched source, integrating the
   dependency's CMake targets into the main build graph.

```cmake
# What CPMAddPackage does internally (simplified):
FetchContent_Declare(fmt
    URL https://github.com/fmtlib/fmt/archive/refs/tags/10.1.1.tar.gz
)
FetchContent_MakeAvailable(fmt)
```

### Configure-Time Only

Because CPM runs at configure time, it has no concept of "build time" package resolution. All
packages are resolved before the first compilation command. This means:

- Adding a new package requires re-running `cmake -S . -B build`.
- Network failures at configure time block the entire build.
- The configure step can be slow for projects with many dependencies (network latency + CMake
  parsing for each dependency).

## Version Pinning and Branch/Tag Support

### Git Tag (Recommended)

```cmake
CPMAddPackage(
    NAME fmt
    GITHUB_REPOSITORY fmtlib/fmt
    GIT_TAG 10.1.1    # A release tag -- immutable and reproducible
)
```

Tags are immutable named references to specific commits. Pinning to a tag guarantees that every
developer gets the exact same source code.

### Commit SHA (Most Reproducible)

```cmake
CPMAddPackage(
    NAME fmt
    GITHUB_REPOSITORY fmtlib/fmt
    GIT_TAG a1b2c3d4e5f6789012345678abcdef12  # Full SHA-1 hash
)
```

Commit SHAs are the most precise pinning mechanism. Even if the tag is moved (force-pushed), the SHA
remains stable.

### Branch (Not Recommended for Production)

```cmake
CPMAddPackage(
    NAME fmt
    GITHUB_REPOSITORY fmtlib/fmt
    GIT_TAG main  # Floating reference -- changes over time
)
```

Using a branch name means the resolved commit changes every time the branch is updated. This breaks
reproducibility. Use branches only for development/testing.

### Semantic Versioning (via CPM)

CPM supports `VERSION` as a convenience that maps to a Git tag:

```cmake
CPMAddPackage(
    NAME fmt
    GITHUB_REPOSITORY fmtlib/fmt
    VERSION 10.1.1  # CPM translates this to GIT_TAG v10.1.1
)
```

CPM attempts common tag prefixes (`v`, `V`, or no prefix) when resolving versions.

## CPMAddPackage Options Reference

The full set of options for `CPMAddPackage`:

```cmake
CPMAddPackage(
    NAME              spdlog              # Logical name (required)
    VERSION           1.12.0              # Semantic version (optional)
    GIT_TAG           v1.12.0             # Git tag/branch/SHA (takes precedence over VERSION)
    GITHUB_REPOSITORY gabime/spdlog       # Shorthand for git@github.com:gabime/spdlog.git
    GITLAB_REPOSITORY group/project        # Shorthand for GitLab
    GIT_REPOSITORY    https://...          # Full Git URL (lowest priority)
    URL               https://...tar.gz    # Direct archive URL
    URL_HASH          SHA256=abc123...     # Integrity check for URL downloads
    SOURCE_DIR        ${CMAKE_BINARY_DIR}/spdlog-src  # Custom source directory
    DOWNLOAD_ONLY     TRUE                 # Fetch source but do not add_subdirectory
    EXCLUDE_FROM_ALL  TRUE                 # Exclude from 'all' target
    OPTIONS           "SPDLOG_BUILD_EXAMPLE OFF" "SPDLOG_FMT_EXTERNAL ON"
)
```

### Key Options Explained

**`DOWNLOAD_ONLY`:** Fetches the source but does not call `add_subdirectory`. Useful when the
dependency is not a CMake project but you need the source files available:

```cmake
CPMAddPackage(
    NAME googletest
    GITHUB_REPOSITORY google/googletest
    GIT_TAG v1.14.0
    DOWNLOAD_ONLY TRUE
)

# Manually add subdirectory with custom options
add_subdirectory(${googletest_SOURCE_DIR} ${googletest_BINARY_DIR})
```

**`URL` + `URL_HASH`:** For packages that do not have a Git repository, or when you want to avoid
Git overhead:

```cmake
CPMAddPackage(
    NAME tinyformat
    URL https://raw.githubusercontent.com/c42f/tinyformat/master/tinyformat.h
    DOWNLOAD_ONLY TRUE
)
```

**`EXCLUDE_FROM_ALL`:** Prevents the dependency from being built as part of `cmake --build build`
(the `all` target). The dependency is only built when a target that depends on it is built. This is
useful for test-only dependencies.

## CPM Source Cache Internals

The `CPM_SOURCE_CACHE` directory uses a predictable structure based on the package name and version:

```text
~/.cache/CPM/
  fmt/
    10.1.1/          # Source for fmt 10.1.1
      include/
      src/
      CMakeLists.txt
    10.2.0/          # Source for fmt 10.2.0
      ...
  spdlog/
    1.12.0/
      ...
  cpm/
    CPM_0.40.0.cmake  # CPM itself is cached here
```

### Cache Sharing Across Projects

When `CPM_SOURCE_CACHE` is set, all CPM-based projects on the machine share the same source cache.
This means:

- Project A downloads `fmt 10.1.1` on the first build.
- Project B uses `fmt 10.1.1` and finds it already in the cache (instant).
- No redundant downloads, no wasted disk space.

### Fallback Behavior

If `CPM_SOURCE_CACHE` is not set and the source is not in `_deps`, CPM downloads to
`${CMAKE_BINARY_DIR}/_deps/<name>-<hash>/`. This directory is inside the build tree and is deleted
when the build directory is cleaned.

### Cache Management

```bash
# Show the size of the CPM cache
du -sh ~/.cache/CPM

# Remove a specific version to force re-download
rm -rf ~/.cache/CPM/fmt/10.1.1

# Clear the entire cache
rm -rf ~/.cache/CPM
```

## Comparison with vcpkg and Conan

| Feature                | CPM.cmake                | vcpkg                  | Conan 2.x                    |
| :--------------------- | :----------------------- | :--------------------- | :--------------------------- |
| **Setup complexity**   | Single file include      | Clone + bootstrap      | pip install + profile config |
| **Package source**     | Any Git repo or URL      | vcpkg registry (ports) | ConanCenter + custom remotes |
| **Binary caching**     | Not supported            | NuGet / HTTP / files   | Built-in remote support      |
| **Version resolution** | First-wins (no SAT)      | Baseline + constraints | SAT solver (libsolv)         |
| **Transitive deps**    | Via `add_subdirectory`   | Managed by vcpkg       | Managed by Conan             |
| **Cross-compilation**  | Inherits host config     | Triplets               | Profiles                     |
| **IDE support**        | Native (CMake targets)   | Good (toolchain file)  | Good (generators)            |
| **Lock mechanism**     | Pinned tags (in source)  | `vcpkg.json` baseline  | `conan.lock` file            |
| **Offline builds**     | Pre-populated cache      | Binary cache + ports   | Pre-populated cache          |
| **Best for**           | Small-to-medium projects | Any size, teams        | Large teams, binary distro   |

### When to Prefer CPM

1. **Small projects with fewer than 10 dependencies:** The simplicity of a single
   `dependencies.cmake` file outweighs the benefits of a full package manager.
2. **Library development:** When your library is consumed by other CMake projects, CPM ensures zero
   external tooling requirements. The consumer just runs `cmake`.
3. **Bleeding-edge or unreleased dependencies:** When you need a commit from `main` that has not
   been published to any registry.
4. **Monorepo subprojects:** CPM can reference other directories in the same repository using
   `SOURCE_DIR`.

### When to Prefer vcpkg

1. **Projects with more than 15 dependencies:** The build time savings from binary caching become
   significant.
2. **Team development:** Lockfile-equivalent (baseline) ensures all developers build against the
   same dependency versions.
3. **Cross-platform projects:** Triplets provide consistent build configurations across platforms.

### When to Prefer Conan

1. **Large teams with binary distribution requirements:** Conan's binary-first model eliminates
   redundant compilation across CI agents and developer machines.
2. **Private package repositories:** Conan's remote architecture supports Artifactory, S3, and
   custom HTTP servers for proprietary libraries.
3. **Complex cross-compilation:** Conan's build/host profile separation provides explicit control
   over cross-compilation scenarios.

## Common CPM Packages

Below is a reference list of commonly used C++ libraries and their CPM declarations:

```cmake
# JSON parsing
CPMAddPackage(
    NAME nlohmann_json
    GITHUB_REPOSITORY nlohmann/json
    VERSION 3.11.3
)

# Logging
CPMAddPackage(
    NAME spdlog
    GITHUB_REPOSITORY gabime/spdlog
    VERSION 1.14.0
)

# String formatting
CPMAddPackage(
    NAME fmt
    GITHUB_REPOSITORY fmtlib/fmt
    VERSION 10.2.1
)

# Unit testing
CPMAddPackage(
    NAME googletest
    GITHUB_REPOSITORY google/googletest
    GIT_TAG v1.14.0
    OPTIONS "gtest_force_shared_crt ON"
)

# Argument parsing
CPMAddPackage(
    NAME cxxopts
    GITHUB_REPOSITORY jarro2783/cxxopts
    VERSION 3.1.1
)

# Concurrent data structures
CPMAddPackage(
    NAME concurrentqueue
    GITHUB_REPOSITORY cameron314/concurrentqueue
    VERSION 1.0.4
)

# Hashing
CPMAddPackage(
    NAME robin-hood-hashing
    GITHUB_REPOSITORY martinus/robin_hood_hashing
    VERSION 3.11.5
)
```

## Common Pitfalls

1. **`add_subdirectory` conflicts:** If two dependencies both define a target with the same name
   (e.g., both vendor `fmt`), CMake will fail with "add_library cannot create target 'fmt' because
   another target with the same name already exists." Use `EXCLUDE_FROM_ALL` and manual integration,
   or ensure dependencies use namespaced targets (`fmt::fmt`).
2. **CMake minimum version mismatch:** A dependency may require
   `cmake_minimum_required(VERSION 3.28)` while your project targets 3.20. CPM does not isolate
   CMake minimum version requirements. The highest minimum version across all dependencies wins.
3. **Network failures in CI:** CPM requires network access during the configure step. In air-gapped
   CI environments, pre-populate `CPM_SOURCE_CACHE` or use `FETCHCONTENT_FULLY_DISCONNECTED=ON`
   (CMake 3.28+) to skip downloads.
4. **No lockfile means no guaranteed reproducibility:** Unlike vcpkg (baseline) or Conan (lockfile),
   CPM has no mechanism to guarantee that two machines resolve the same versions. Pin every
   dependency to a tag or SHA.
5. **Dependency builds with wrong flags:** Because CPM uses `add_subdirectory`, the dependency's
   `CMakeLists.txt` can modify global CMake state (e.g., `add_compile_options` without target
   scope). This can inject unwanted flags into your build. Always review dependency CMakeLists for
   global state mutations.
6. **Large monorepo clones:** CPM clones the entire Git repository history by default (shallow clone
   depth is 1, but some repos have large single commits). For large dependencies like Boost,
   consider using `URL` with a release archive instead of `GITHUB_REPOSITORY` to reduce download
   time.

## CPM with ccache for Faster Rebuilds

When dependencies are built from source on every clean build, build times can be significant. Using
`ccache` (compiler cache) alongside CPM drastically reduces rebuild times by caching object files:

```bash
# Install ccache
sudo apt install ccache

# Configure CMake to use ccache
cmake -S . -B build \
    -DCMAKE_C_COMPILER_LAUNCHER=ccache \
    -DCMAKE_CXX_COMPILER_LAUNCHER=ccache
```

With `ccache`, the first build compiles all dependencies from source (normal time). Subsequent clean
builds reuse cached object files, reducing the build time from minutes to seconds for most
dependencies.

### Measuring CPM Build Impact

```cmake
# In CMakeLists.txt, time the configure and build phases
function(time_cpm_packages)
    message(STATUS "CPM dependency resolution started")
    # CPMAddPackage calls here...
    message(STATUS "CPM dependency resolution complete")
endfunction()
```

## CPM and FetchContent: Key Differences

CPM is built on top of CMake's `FetchContent` module but adds several features:

| Feature                    | FetchContent                        | CPM.cmake                               |
| :------------------------- | :---------------------------------- | :-------------------------------------- |
| **Package declaration**    | `FetchContent_Declare`              | `CPMAddPackage` (single call)           |
| **Version-to-tag mapping** | Manual                              | Automatic (`v` prefix, etc.)            |
| **Source cache**           | `_deps/` directory only             | `CPM_SOURCE_CACHE` (shared)             |
| **GitHub shorthand**       | None                                | `GITHUB_REPOSITORY`                     |
| **GitLab shorthand**       | None                                | `GITLAB_REPOSITORY`                     |
| **Options passthrough**    | Manual `set` before `MakeAvailable` | `OPTIONS` keyword                       |
| **Offline mode**           | Manual                              | Cache-based                             |
| **Download-only mode**     | Manual `FetchContent_Populate`      | `DOWNLOAD_ONLY` keyword                 |
| **Bootstrap**              | Requires pre-existing script        | Self-bootstrapping via `file(DOWNLOAD)` |

## CPM Version Compatibility

CPM.cmake versions follow semantic versioning. Key version milestones:

| Version | Feature                                     |
| :------ | :------------------------------------------ |
| 0.38.x  | Stable release, widely used                 |
| 0.39.x  | Added `FETCHCONTENT_SOURCE_DIR_*` overrides |
| 0.40.x  | Current stable, improved cache handling     |

When pinning the CPM version in the bootstrap script, use a specific version rather than `latest`:

```cmake
set(CPM_DOWNLOAD_VERSION 0.40.0)
```

## See Also

- [Dependency Resolution](1_dependency_architectures_models.md) -- Package manager taxonomy and
  version resolution
- [vcpkg](3_vcpkg.md) -- Full-featured alternative for larger projects
- [Conan](4_conan.md) -- Binary-first package manager for teams
- [Property Propagation](5_property_propagation.md) -- How `add_subdirectory` merges build
  properties
- [Binary Caching](6_binary_caching.md) -- Why CPM lacks binary caching and how to compensate
