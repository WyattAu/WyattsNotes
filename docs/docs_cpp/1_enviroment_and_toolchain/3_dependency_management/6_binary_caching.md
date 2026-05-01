---
title: Binary Caching
description:
  C++: Binary Caching — The Artifact Registry Architecture; Industry Standard
  Registries; Configuration (`VCPKG_BINARY_SOURCES`).
date: 2025-12-11T05:47:27.269Z
tags:
  - cpp
categories:
  - cpp
slug: binary-caching
---

The distinction between **Compiler Caching** (Module 2.4) and **Binary Package Caching** is
critical.

- **Compiler Caching (ccache/sccache):** Accelerates the compilation of _your_ source code by
  hashing translation units. It operates at the object file (`.o`) level.
- **Binary Package Caching (vcpkg/Conan):** Accelerates the acquisition of _dependencies_ by storing
  pre-compiled libraries. It operates at the package level (`.lib`, `.dll`, headers).

Without binary caching, a Clean Build of a project involving heavy dependencies (e.g., Qt, LLVM,
Boost, Folly) entails compiling millions of lines of C++ code, often taking hours. With binary
caching, this process becomes an I/O-bound download operation, taking seconds.

## The Artifact Registry Architecture

An **Artifact Registry** serves as the storage backend for pre-compiled binaries. This ensures that
all developers and CI agents share the exact same binary artifacts, enforcing ABI consistency and
eliminating redundant compilation.

### Industry Standard Registries

1. **JFrog Artifactory:** The dominant solution in C++. It supports generic storage, Conan
   repositories, and NuGet feeds (used by vcpkg). It offers distinct repository types:
   - **Local:** Artifacts built internally.
   - **Remote:** Proxies to public registries (ConanCenter) with caching.
   - **Virtual:** An aggregation of Local and Remote for a single access point.

2. **Sonatype Nexus:** A strong alternative supporting similar repository formats (Conan, Raw,
   NuGet).

3. **Cloud Storage (S3/GCS/Azure):** For source-based managers like vcpkg, a raw blob storage bucket
   is often sufficient and more cost-effective than a dedicated artifact server.

## 1. vcpkg Binary Caching

vcpkg originally built everything from source. Modern vcpkg implements a binary caching layer that
hashes the **Package ABI** (a combination of the source version, compiler flags, and build options).

If a matching hash exists in the cache, the build is skipped, and the artifacts are extracted
directly into the project.

### Configuration (`VCPKG_BINARY_SOURCES`)

vcpkg does not use a config file for caching; it relies on the `VCPKG_BINARY_SOURCES` environment
variable. This follows the **Provider Model**.

#### Scenario A: Local Filesystem Cache (Developer Machine)

Useful for sharing builds between different projects on the same disk.

```bash
# Windows
$env:VCPKG_BINARY_SOURCES="clear;files,C:\vcpkg-cache,readwrite"

# Linux/macOS
export VCPKG_BINARY_SOURCES="clear;files,/var/cache/vcpkg,readwrite"
```

#### Scenario B: NuGet Feed (Artifactory/Azure DevOps)

vcpkg treats binary artifacts as NuGet packages. This is the standard protocol for Windows-centric
or Enterprise pipelines.

```bash
export VCPKG_BINARY_SOURCES="clear;nuget,https://artifactory.example.com/nuget/vcpkg-cache,readwrite"
```

_Note: This requires `mono` on Linux/macOS to run the NuGet executable._

#### Scenario C: Http/Blob Storage (Modern)

vcpkg recently added native support for HTTP PUT/GET, removing the need for NuGet wrapping. This is
ideal for GitHub Actions Cache or S3 presigned URLs.

```bash
export VCPKG_BINARY_SOURCES="clear;http,http://cache.internal/vcpkg/,readwrite"
```

### The CI/CD Workflow

1. **Restoration:** CI Agent checks if the hash of `vcpkg.json` + `vcpkg-configuration.json` matches
   a stored cache key.
2. **Hit:** vcpkg downloads binaries. Build time: **0s**.
3. **Miss:** vcpkg builds from source.
4. **Ingestion:** Upon successful build, vcpkg zips the artifacts and uploads them to the defined
   `readwrite` source.

## 2. Conan Remote Architecture

Conan was designed as a binary-first manager. It assumes the existence of a remote server (the
"Remote") to store packages.

### Remote Management

Remotes are prioritized lists of servers.

```bash
# List remotes
conan remote list

# Add a private Artifactory
conan remote add internal-repo https://artifactory.company.com/artifactory/api/conan/conan-local

# Authentication
conan user -p <API_KEY> -r internal-repo <USERNAME>
```

### The Upload Strategy

Unlike vcpkg (which auto-caches on build), Conan requires explicit upload steps. This prevents
broken or temporary builds from polluting the shared registry.

**CI Pipeline Step:**

```bash
# 1. Build the package locally
conan create . -pr:b=default -pr:h=linux-release

# 2. Upload to the remote (Only if build succeeds)
# --all uploads recipes and binaries
conan upload my-pkg/1.0.0 -r internal-repo --all
```

## 3. The "Producer-Consumer" CI Topology

To maximize efficiency, C++ CI pipelines should be split into **Producer** jobs and **Consumer**
jobs.

### The Producer (Nightly / Triggered)

- **Goal:** Pre-warm the cache.
- **Frequency:** Runs nightly or when `vcpkg.json` / `conanfile.py` changes.
- **Operation:**
  1. Clean environment.
  2. Build all dependencies from source with `readwrite` access to the Artifact Registry.
  3. Uploads artifacts.

### The Consumer (Pull Requests)

- **Goal:** Rapid feedback for developers.
- **Frequency:** Runs on every commit.
- **Operation:**
  1. Configured with `read-only` access to the Artifact Registry.
  2. Downloads pre-compiled dependencies.
  3. Compiles _only_ the project source code.

This topology ensures that a developer changing `main.cpp` never waits for `Qt6` to compile.

## Architectural Security

### Immutability

Artifacts in the registry should be **Immutable**. Once version `1.0.0` of a package is uploaded
with a specific hash, it should never be overwritten. If the build configuration changes (e.g.,
enabling SSL support), the Package ID changes, creating a _new_ binary artifact rather than
overwriting the old one.

### Provenance

The "Producer" CI job should sign the artifacts. Consumers should verify signatures to ensure that
the binary was built by a trusted CI agent and not injected by a compromised developer machine.

- **Conan:** Supports lockfiles (`conan.lock`) to strictly enforce dependency graph reproducibility.
- **vcpkg:** Relies on Git SHAs in the registry baseline for provenance.

## Compiler Caching: ccache and sccache

While binary package caching accelerates dependency acquisition, **compiler caching** accelerates
the compilation of your own source code by memoizing translation unit compilations.

### How Compiler Caches Work

A compiler cache intercepts invocations of the compiler (`gcc`, `clang`, `cl.exe`) and computes a
**hash key** from all inputs that affect the output object file. If a matching key exists in the
cache, the cached `.o` file is returned instead of invoking the compiler.

#### Cache Key Components

The hash is computed from:

1. **The compiler executable** itself (hash of the binary, ensuring compiler upgrades invalidate the
   cache).
2. **Source file content** (the `.cpp` file).
3. **Compiler flags** (e.g., `-std=c++23 -O2 -DNDEBUG`).
4. **Include file contents** (all `#include`d headers, recursively).
5. **Preprocessor defines** (both from flags and `#define` directives in included headers).
6. **Command-line arguments** (output file name, etc.).

If any of these inputs change, the cache misses and the compiler runs normally.

### ccache (GCC/GCC-focused)

ccache is the most widely used C/C++ compiler cache. It stores cached objects in a flat directory
structure on the local filesystem.

#### Installation and Basic Usage

```bash
# Install
sudo apt install ccache        # Debian/Ubuntu
brew install ccache            # macOS

# Configure cache size (default is 5GB)
ccache -M 20G

# Prepend ccache to compiler path (CMake)
cmake -S . -B build -DCMAKE_C_COMPILER_LAUNCHER=ccache -DCMAKE_CXX_COMPILER_LAUNCHER=ccache
```

#### Cache Statistics

```bash
ccache -s
```

**Sample output:**

```text
cache directory                     /home/user/.cache/ccache
primary config                      /home/user/.ccache/ccache.conf
cache hit (direct)                  12450
cache hit (preprocessed)            890
cache miss                          3420
cache hit rate                      79.54 %
called for link                     234
compile failed                      12
preprocessor error                  5
```

#### ccache Storage Model

ccache uses a **four-level hash directory** structure:

```text
~/.cache/ccache/
├── a/
│   ├── b1/
│   │   └── c2d3e4f5/
│   │       └── manifest  # metadata (compiler, flags)
│   │       └── result    # compressed .o file
```

This structure avoids directory bloat (thousands of files in a single directory) while keeping
lookup O(1).

### sccache (Mozilla, Rust-focused but C++ compatible)

sccache is a modern alternative to ccache written in Rust. Its key advantage is **native support for
remote caching backends**.

#### Remote Caching Backends

sccache supports:

- **S3-compatible storage** (AWS S3, MinIO, Cloudflare R2)
- **Redis** (key-value store)
- **GCS** (Google Cloud Storage)
- **Azure Blob Storage**
- **Memcached**

#### Configuration Example (S3)

```bash
# Set environment variables
export SCCACHE_BUCKET=my-build-cache
export SCCACHE_REGION=us-east-1
export SCCACHE_S3_KEY_PREFIX=cpp-project/
export AWS_ACCESS_KEY_ID=AKIA...
export AWS_SECRET_ACCESS_KEY=...

# Use with CMake
cmake -S . -B build \
  -DCMAKE_C_COMPILER_LAUNCHER=sccache \
  -DCMAKE_CXX_COMPILER_LAUNCHER=sccache
```

#### Configuration Example (Redis)

```bash
export SCCACHE_REDIS_ENDPOINT=redis://cache.internal:6379
export SCCACHE_REDIS_PASSWORD=secret

# Use with CMake
cmake -S . -B build \
  -DCMAKE_C_COMPILER_LAUNCHER=sccache \
  -DCMAKE_CXX_COMPILER_LAUNCHER=sccache
```

### Compiler-Specific Caching Notes

#### GCC

- ccache works transparently with GCC.
- GCC's `-fprofile-generate` / `-fprofile-use` (PGO) is **not** cacheable by ccache because the
  output depends on runtime profile data, not just source inputs.

#### Clang

- ccache and sccache both work with Clang.
- Clang's modules (`-fmodules`) can cause cache misses because the module cache is a side effect not
  captured in the hash key. Use `-fno-implicit-module-maps` if caching is critical.

#### MSVC

- ccache supports MSVC but with caveats. MSVC uses `#pragma once` extensively, which ccache handles
  by normalizing include paths.
- sccache has native MSVC support and is generally preferred on Windows.

## Cache Invalidation and Corruption

### Correct Invalidation

Cache entries are invalidated when any input to the hash changes. This is automatic and correct in
the common case.

### Common Causes of Unnecessary Cache Misses

1. **Timestamps in macros:** `#define BUILD_TIME __TIME__` causes every compilation to produce a
   unique hash. Use `__DATE__` and `__TIME__` only in non-cached builds.
2. **Absolute include paths:** If `#include "/home/user/project/config.h"` is used instead of a
   relative path, moving the project invalidates the cache. Prefer relative or project-relative
   includes.
3. **Random seeds:** Embedding `rand()` or UUID generation in headers at compile time breaks
   caching.

### Cache Corruption

Cache corruption occurs when the stored artifact no longer matches the expected output. This can
happen due to:

- **Disk filesystem errors:** Check with `fsck` or use `ccache -c` to clear the cache.
- **Concurrent writes:** Multiple build agents writing to the same cache backend. Use
  `SCCACHE_START_SERVER=1` to serialize access.
- **Storage backend inconsistencies:** S3 eventual consistency can rarely return stale data. sccache
  adds content verification hashes to mitigate this.

```bash
# Clear ccache entirely
ccache -C

# Clear only corrupted entries (ccache 4.x+)
ccache -X
```

## CI Pipeline Integration

### GitHub Actions: ccache Action

```yaml
- name: ccache
  uses: hendrikmuhs/ccache-action@v1
  with:
    key: ${{ github.job }}-${{ runner.os }}-${{ hashFiles('**/CMakeLists.txt') }}
    max-size: 500M
```

This action automatically caches `~/.cache/ccache` between workflow runs using GitHub Actions cache.

### GitHub Actions: sccache with GHA Cache

```yaml
- name: Run sccache-cache
  uses: mozilla-actions/sccache-action@v1

- name: Build
  env:
    SCCACHE_GHA_ENABLED: 'true'
  run: |
    cmake -S . -B build \
      -DCMAKE_C_COMPILER_LAUNCHER=sccache \
      -DCMAKE_CXX_COMPILER_LAUNCHER=sccache
    cmake --build build
```

### Benchmark Data: Cache Hit Rates

Typical cache hit rates in real-world C++ CI pipelines:

| Scenario                    | First Build (cold) | Incremental Build | Cache Hit Rate |
| --------------------------- | ------------------ | ----------------- | -------------- |
| Small project (10 files)    | 30s                | 2s                | 95%+           |
| Medium project (500 files)  | 8min               | 45s               | 85-90%         |
| Large project (5000+ files) | 45min              | 5min              | 70-80%         |
| Header-heavy (Boost, Qt)    | 90min              | 15min             | 60-75%         |

**Key observation:** Header-heavy codebases see lower hit rates because changing a widely-included
header invalidates all translation units that include it. This is a fundamental property of the C++
compilation model, not a cache limitation.

### Combined Strategy: Compiler Cache + Binary Package Cache

The optimal CI setup combines both layers:

1. **Binary package cache** (vcpkg/Conan): Eliminates dependency compilation entirely. Dependencies
   are downloaded as pre-built artifacts.
2. **Compiler cache** (ccache/sccache): Caches the project's own compilation. Only changed
   translation units are recompiled.

```yaml
# Pseudocode CI pipeline
steps:
  - restore: vcpkg binary cache # hit: 0s, miss: download/build deps
  - restore: sccache compiler cache # hit: 0s, miss: recompile
  - build: project sources
  - save: sccache compiler cache # store new .o files
  - save: vcpkg binary cache # store new packages (if deps changed)
```

This combined approach can reduce a 45-minute CI build to under 2 minutes for incremental changes.

## Common Pitfalls

1. **Forgetting to set `CMAKE_CXX_COMPILER_LAUNCHER`:** Without this, CMake invokes the compiler
   directly, bypassing the cache entirely. Verify with `ccache -s` that the "called" counter
   increases.
2. **Cache poisoning with instrumented builds:** Running `sanitize`, `coverage`, or `debug` builds
   populates the cache with instrumented `.o` files. Subsequent release builds may accidentally use
   these. Use separate cache directories or clear the cache between build types.
3. **Ignoring the cache size limit:** If the cache reaches its maximum size, ccache uses an LRU
   (Least Recently Used) eviction policy. Frequently-used cache entries may be evicted if the cache
   is too small. Monitor with `ccache -s` and adjust with `ccache -M`.

## See Also

- [Dependency Resolution](1_dependency_architectures_models.md) — How package managers resolve
  version graphs
- [vcpkg](3_vcpkg.md) — Binary caching configuration for vcpkg
- [Build Caching](../2_build_system/4_build_caching.md) — CMake and build-system-level caching
- [Code Coverage](../2_build_system/6_code_coverage.md) — Instrumented builds (should not be cached)
