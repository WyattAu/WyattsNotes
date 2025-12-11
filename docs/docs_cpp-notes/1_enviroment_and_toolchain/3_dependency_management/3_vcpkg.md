---
title: vcpkg
date: 2025-12-11T04:55:37.164Z
tags:
  - cpp
categories:
  - cpp
slug: vcpkg
---

**vcpkg** is Microsoft's cross-platform package manager. While originally designed with an imperative, global installation model ("Classic Mode"), modern C++ architecture relies on **Manifest Mode**.

Manifest Mode shifts dependency management from a system-level state to a project-level state. It utilizes a declarative JSON file (`vcpkg.json`) to define the dependency graph, ensuring that checking out a repository at a specific commit guarantees the exact reproduction of the build environment, including all third-party library versions.

## The Manifest Architecture (`vcpkg.json`)

The core of this architecture is the manifest file located at the project root. It serves a role analogous to `Cargo.toml` in Rust or `package.json` in Node.js, but with mechanics adapted for C++ ABI constraints.

### Manifest Structure

Create a file named `vcpkg.json` in the project root:

```json
{
  "name": "high-perf-system",
  "version-string": "1.0.0",
  "builtin-baseline": "a1b2c3d4e5f6...",
  "dependencies": [
    "fmt",
    "nlohmann-json",
    {
      "name": "asio",
      "version>=": "1.24.0"
    },
    {
      "name": "gtest",
      "host": true
    }
  ],
  "overrides": [
    {
      "name": "fmt",
      "version": "10.1.1"
    }
  ]
}
```

### Architectural Components

1. **Builtin-Baseline:** vcpkg does not resolve versions by checking the "latest" available on the server. Instead, it uses a **Baseline**, which is a specific Git commit SHA of the vcpkg repository. The baseline defines a snapshot of the entire C++ ecosystem that is known to compile together.
2. **Dependencies:** Simple strings denote the package name. The version is implicitly determined by the baseline.
3. **Constraints (`version>=`):** These enforce a minimum version. If the baseline provides an older version, vcpkg upgrades.
4. **Host Dependencies:** The `"host": true` flag indicates a tool required for the build process itself (e.g., `protobuf` compiler) rather than a library to link against. This allows cross-compilation where the build host (x64) runs tools to generate code for the target (ARM64).
5. **Overrides:** These force a specific version, bypassing the baseline logic. This is commonly used to pin exact versions or temporarily revert a broken update.

## Registry Federation

Large-scale systems often require dependencies not present in the public Microsoft registry, such as proprietary internal libraries or forks of open-source projects. **Registry Federation** allows a project to compose dependencies from multiple disparate sources transparently.

This is configured via `vcpkg-configuration.json`, which sits alongside the manifest.

### The Registry Model

A vcpkg Registry is a Git repository containing:

1. **Ports:** Scripts (`portfile.cmake`) describing how to download and build a package.
2. **Versions:** A database mapping version numbers to Git tree objects.

### Configuring Federation

**File:** `vcpkg-configuration.json`

```json
{
  "default-registry": {
    "kind": "git",
    "repository": "https://github.com/microsoft/vcpkg",
    "baseline": "a1b2c3d4e5f6..."
  },
  "registries": [
    {
      "kind": "git",
      "repository": "https://github.com/my-company/private-cpp-registry",
      "baseline": "f9e8d7c6...",
      "packages": ["internal-logger", "proprietary-math"]
    }
  ]
}
```

### Resolution Logic

1. vcpkg parses the `packages` array of every defined registry.
2. If a dependency matches a package listed in a custom registry (e.g., `internal-logger`), vcpkg resolves it against that specific Git repository.
3. All other packages fall back to the `default-registry`.

This federation allows seamless mixing of public open-source libraries and private proprietary components within a single build graph.

## CMake Integration

vcpkg integrates into the build system via a **CMake Toolchain File**. This file intercepts `find_package()` calls and redirects them to the vcpkg-installed artifacts.

### Bootstrapping vcpkg

To ensure reproducibility, vcpkg itself should be bootstrapped locally (often as a Git submodule) rather than relying on a global installation.

```bash
git submodule add https://github.com/microsoft/vcpkg.git external/vcpkg
./external/vcpkg/bootstrap-vcpkg.sh  # (or .bat on Windows)
```

### Configuring CMake

The integration occurs at the configuration step. You must define `CMAKE_TOOLCHAIN_FILE`.

**Command Line:**

```bash
cmake -S . -B build \
  -DCMAKE_TOOLCHAIN_FILE=external/vcpkg/scripts/buildsystems/vcpkg.cmake
```

**CMake Presets (Recommended):**

In `CMakePresets.json`, set the cache variable and the environment variable to toggle Manifest Mode.

```json
{
  "configurePresets": [
    {
      "name": "vcpkg-base",
      "cacheVariables": {
        "CMAKE_TOOLCHAIN_FILE": "${sourceDir}/external/vcpkg/scripts/buildsystems/vcpkg.cmake",
        "VCPKG_TARGET_TRIPLET": "x64-linux"
      }
    }
  ]
}
```

### Linking Dependencies

Once configured, usage in `CMakeLists.txt` follows standard CMake patterns. vcpkg ensures the libraries are available on the search path.

```cmake
find_package(fmt CONFIG REQUIRED)
target_link_libraries(App PRIVATE fmt::fmt)
```

## Architectural Advantages

### 1. ODR Safety via Global Graph

Unlike package managers that allow nested dependencies (Node.js), vcpkg enforces a flat dependency graph. If `Lib A` needs `fmt 9.0` and `Lib B` needs `fmt 10.0`, vcpkg calculates a single version (10.0) for the entire graph and recompiles `Lib A` against it. This prevents **One Definition Rule (ODR)** violations and runtime ABI crashes.

### 2. Triplet-Based ABI Control

vcpkg uses **Triplets** (e.g., `x64-windows-static`, `arm64-linux`) to define the build configuration for all dependencies. This allows an architect to switch the entire dependency tree from Dynamic Linking to Static Linking, or change the CRT linkage, by modifying a single variable (`VCPKG_TARGET_TRIPLET`).

### 3. Source-Based Provenance

Because vcpkg builds from source (unless Binary Caching is active), the resulting binaries are guaranteed to use the exact compiler flags (`-O3`, `-fsanitize=address`) of the parent project, ensuring complete binary compatibility.
