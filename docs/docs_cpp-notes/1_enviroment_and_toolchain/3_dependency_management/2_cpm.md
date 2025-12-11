---
title: CPM.cmake
date: 2025-12-11T04:34:32.158Z
tags:
  - cpp
categories:
  - cpp
slug: cpm-cmake
---

**CPM.cmake** (CMake Package Manager) provides a lightweight abstraction over the standard CMake `FetchContent` module. It bridges the gap between manual vendoring (git submodules) and full-scale package managers (vcpkg/Conan).

In the context of this course, CPM.cmake is the preferred distribution model for:

1. **Small-to-Medium Projects:** Where the overhead of configuring vcpkg manifests is unjustified.
2. **Library Development:** Where the library itself has dependencies and aims to be easily consumable by other CMake projects.
3. **Bleeding Edge Dependencies:** When a library update is required that has not yet propagated to vcpkg or Conan registries.

## Architectural Mechanism

CPM.cmake operates strictly on the **Source-Based Model**.

1. **Resolution:** It resolves dependencies via Git repositories (GitHub/GitLab) or URL archives.
2. **Retrieval:** It checks a local cache directory. If the requested version is missing, it downloads the source.
3. **Integration:** It invokes `add_subdirectory()` on the downloaded source.
4. **Graph Merger:** The dependency's CMake targets are added directly to the main project's build graph.

### The ABI Guarantee

Because dependencies are compiled as sub-projects of the main build, they inherit the **exact global build configuration**.

- Same Compiler (Clang/GCC/MSVC).
- Same Standard Flags (`-std=c++23`).
- Same Sanitizer Configuration (ASan/UBSan).
- Same Runtime Library (UCRT/glibc).

This architecture creates a mathematical guarantee of ABI compatibility, eliminating the "Mismatch Linker Error" class of bugs.

## Bootstrapping (Zero-Dependency Setup)

CPM.cmake is distributed as a single CMake script. The standard practice is to "bootstrap" it—downloading it automatically during the CMake configure phase if it does not exist. This ensures the project is self-contained.

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

Dependencies are declared using `CPMAddPackage`. This function handles version checking, caching, and target creation.

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
3. **GIT_TAG:** A specific commit hash or tag. **Best Practice:** Always pin to a specific tag or hash for reproducibility. Prevent using `master` or `HEAD`.
4. **OPTIONS:** These are passed as CMake Cache Variables to the dependency. This is critical for controlling the build (e.g., disabling examples, docs, and tests of dependencies to save build time).

## The CPM Source Cache (`CPM_SOURCE_CACHE`)

By default, `FetchContent` and CPM download sources into the `build/_deps` directory. This has two significant drawbacks:

1. **Redundant Downloads:** Deleting the `build` folder requires re-downloading all dependencies.
2. **Disk Usage:** Multiple projects using `fmt` will duplicate the source code.

To resolve this, configure the **CPM Source Cache**. This is an environment variable pointing to a directory outside the build tree.

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
3. If not found, it downloads to that path, ensuring future builds (even of different projects) reuse the source.

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

A frequent requirement in systems programming is debugging a library within the context of the application. CPM allows overriding a dependency with a local path using a CMake CLI flag, bypassing the network fetch.

**Scenario:** Debugging `spdlog` inside `App`.

```bash
cmake -S . -B build -DCPM_spdlog_SOURCE=/home/user/workspace/spdlog-fork
```

When this flag is detected, CPM ignores the `GITHUB_REPOSITORY` argument and calls `add_subdirectory(/home/user/workspace/spdlog-fork)`.

## Limitations

While efficient for small-to-medium graphs, CPM scales poorly when:

1. **Diamond Dependencies Occur:** If Lib A wants `fmt 9.0` and Lib B wants `fmt 10.0`, CPM attempts to enforce a single version (usually the first one defined). Manual intervention via `CPMAddPackage` overrides is required to resolve the conflict via SAT solving logic manually.
2. **Build Times Explode:** Since every dependency is built from source, a clean build of a project with 50 dependencies may take an unacceptable amount of time. (Mitigation: Use `ccache`).
3. **Non-CMake Projects:** CPM relies on the dependency having a `CMakeLists.txt`. For libraries using only Makefiles or premake, CPM cannot easily integrate them into the build graph.
