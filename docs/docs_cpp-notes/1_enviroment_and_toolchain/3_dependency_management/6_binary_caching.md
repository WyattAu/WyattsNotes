---
title: Binary Caching
date: 2025-12-11T05:47:27.269Z
tags:
  - cpp
categories:
  - cpp
slug: binary-caching
---

The distinction between **Compiler Caching** (Module 2.4) and **Binary Package Caching** is critical.

- **Compiler Caching (ccache/sccache):** Accelerates the compilation of _your_ source code by hashing translation units. It operates at the object file (`.o`) level.
- **Binary Package Caching (vcpkg/Conan):** Accelerates the acquisition of _dependencies_ by storing pre-compiled libraries. It operates at the package level (`.lib`, `.dll`, headers).

Without binary caching, a Clean Build of a project involving heavy dependencies (e.g., Qt, LLVM, Boost, Folly) entails compiling millions of lines of C++ code, often taking hours. With binary caching, this process becomes an I/O-bound download operation, taking seconds.

## The Artifact Registry Architecture

An **Artifact Registry** serves as the storage backend for pre-compiled binaries. This ensures that all developers and CI agents share the exact same binary artifacts, enforcing ABI consistency and eliminating redundant compilation.

### Industry Standard Registries

1. **JFrog Artifactory:** The dominant solution in C++. It supports generic storage, Conan repositories, and NuGet feeds (used by vcpkg). It offers distinct repository types:
   - **Local:** Artifacts built internally.
   - **Remote:** Proxies to public registries (ConanCenter) with caching.
   - **Virtual:** An aggregation of Local and Remote for a single access point.

2. **Sonatype Nexus:** A strong alternative supporting similar repository formats (Conan, Raw, NuGet).

3. **Cloud Storage (S3/GCS/Azure):** For source-based managers like vcpkg, a raw blob storage bucket is often sufficient and more cost-effective than a dedicated artifact server.

## 1. vcpkg Binary Caching

vcpkg originally built everything from source. Modern vcpkg implements a binary caching layer that hashes the **Package ABI** (a combination of the source version, compiler flags, and build options).

If a matching hash exists in the cache, the build is skipped, and the artifacts are extracted directly into the project.

### Configuration (`VCPKG_BINARY_SOURCES`)

vcpkg does not use a config file for caching; it relies on the `VCPKG_BINARY_SOURCES` environment variable. This follows the **Provider Model**.

#### Scenario A: Local Filesystem Cache (Developer Machine)

Useful for sharing builds between different projects on the same disk.

```bash
# Windows
$env:VCPKG_BINARY_SOURCES="clear;files,C:\vcpkg-cache,readwrite"

# Linux/macOS
export VCPKG_BINARY_SOURCES="clear;files,/var/cache/vcpkg,readwrite"
```

#### Scenario B: NuGet Feed (Artifactory/Azure DevOps)

vcpkg treats binary artifacts as NuGet packages. This is the standard protocol for Windows-centric or Enterprise pipelines.

```bash
export VCPKG_BINARY_SOURCES="clear;nuget,https://artifactory.example.com/nuget/vcpkg-cache,readwrite"
```

_Note: This requires `mono` on Linux/macOS to run the NuGet executable._

#### Scenario C: Http/Blob Storage (Modern)

vcpkg recently added native support for HTTP PUT/GET, removing the need for NuGet wrapping. This is ideal for GitHub Actions Cache or S3 presigned URLs.

```bash
export VCPKG_BINARY_SOURCES="clear;http,http://cache.internal/vcpkg/,readwrite"
```

### The CI/CD Workflow

1. **Restoration:** CI Agent checks if the hash of `vcpkg.json` + `vcpkg-configuration.json` matches a stored cache key.
2. **Hit:** vcpkg downloads binaries. Build time: **0s**.
3. **Miss:** vcpkg builds from source.
4. **Ingestion:** Upon successful build, vcpkg zips the artifacts and uploads them to the defined `readwrite` source.

## 2. Conan Remote Architecture

Conan was designed as a binary-first manager. It assumes the existence of a remote server (the "Remote") to store packages.

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

Unlike vcpkg (which auto-caches on build), Conan requires explicit upload steps. This prevents broken or temporary builds from polluting the shared registry.

**CI Pipeline Step:**

```bash
# 1. Build the package locally
conan create . -pr:b=default -pr:h=linux-release

# 2. Upload to the remote (Only if build succeeds)
# --all uploads recipes and binaries
conan upload my-pkg/1.0.0 -r internal-repo --all
```

## 3. The "Producer-Consumer" CI Topology

To maximize efficiency, C++ CI pipelines should be split into **Producer** jobs and **Consumer** jobs.

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

Artifacts in the registry should be **Immutable**. Once version `1.0.0` of a package is uploaded with a specific hash, it should never be overwritten. If the build configuration changes (e.g., enabling SSL support), the Package ID changes, creating a _new_ binary artifact rather than overwriting the old one.

### Provenance

The "Producer" CI job should sign the artifacts. Consumers should verify signatures to ensure that the binary was built by a trusted CI agent and not injected by a compromised developer machine.

- **Conan:** Supports lockfiles (`conan.lock`) to strictly enforce dependency graph reproducibility.
- **vcpkg:** Relies on Git SHAs in the registry baseline for provenance.
