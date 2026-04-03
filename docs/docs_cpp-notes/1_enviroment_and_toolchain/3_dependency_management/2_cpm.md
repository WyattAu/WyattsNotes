---
title: CPM.cmake
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

## Bootstrapping (Zero-Dependency Setup)

CPM.cmake is distributed as a single CMake script. The standard practice is to "bootstrap"
it—downloading it automatically during the CMake configure phase if it does not exist. This ensures
the project is self-contained.

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
├── CMakeLists.txt
├── cmake/
│   └── dependencies.cmake
└── src/
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

## Limitations

While efficient for small-to-medium graphs, CPM scales poorly when:

1. **Diamond Dependencies Occur:** If Lib A wants `fmt 9.0` and Lib B wants `fmt 10.0`, CPM attempts
   to enforce a single version (usually the first one defined). Manual intervention via
   `CPMAddPackage` overrides is required to resolve the conflict via SAT solving logic manually.
2. **Build Times Explode:** Since every dependency is built from source, a clean build of a project
   with 50 dependencies may take an unacceptable amount of time. (Mitigation: Use `ccache`).
3. **Non-CMake Projects:** CPM relies on the dependency having a `CMakeLists.txt`. For libraries
   using only Makefiles or premake, CPM cannot easily integrate them into the build graph.

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
    GIT_TAG 10.1.1    # A release tag — immutable and reproducible
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
    GIT_TAG main  # Floating reference — changes over time
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
├── fmt/
│   ├── 10.1.1/          # Source for fmt 10.1.1
│   │   ├── include/
│   │   ├── src/
│   │   └── CMakeLists.txt
│   └── 10.2.0/          # Source for fmt 10.2.0
│       └── ...
├── spdlog/
│   └── 1.12.0/
│       └── ...
└── cpm/
    └── CPM_0.40.0.cmake  # CPM itself is cached here
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

## Comparison with vcpkg and Conan

| Feature                | CPM.cmake                | vcpkg                  | Conan 2.x                    |
| ---------------------- | ------------------------ | ---------------------- | ---------------------------- |
| **Setup complexity**   | Single file include      | Clone + bootstrap      | pip install + profile config |
| **Package source**     | Any Git repo or URL      | vcpkg registry (ports) | ConanCenter + custom remotes |
| **Binary caching**     | Not supported            | NuGet / HTTP / files   | Built-in remote support      |
| **Version resolution** | First-wins (no SAT)      | Baseline + constraints | SAT solver (libsolv)         |
| **Transitive deps**    | Via `add_subdirectory`   | Managed by vcpkg       | Managed by Conan             |
| **Cross-compilation**  | Inherits host config     | Triplets               | Profiles                     |
| **IDE support**        | Native (CMake targets)   | Good (toolchain file)  | Good (generators)            |
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

## See Also

- [Dependency Resolution](1_dependency_architectures_models.md) — Package manager taxonomy and
  version resolution
- [vcpkg](3_vcpkg.md) — Full-featured alternative for larger projects
- [Property Propagation](5_property_propagation.md) — How `add_subdirectory` merges build properties
- [Binary Caching](6_binary_caching.md) — Why CPM lacks binary caching and how to compensate
