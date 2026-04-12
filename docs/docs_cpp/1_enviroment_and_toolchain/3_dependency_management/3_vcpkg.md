---
title: vcpkg
date: 2025-12-11T04:55:37.164Z
tags:
  - cpp
categories:
  - cpp
slug: vcpkg
---

**vcpkg** is Microsoft's cross-platform package manager. While originally designed with an
imperative, global installation model ("Classic Mode"), modern C++ architecture relies on **Manifest
Mode**.

Manifest Mode shifts dependency management from a system-level state to a project-level state. It
utilizes a declarative JSON file (`vcpkg.json`) to define the dependency graph, ensuring that
checking out a repository at a specific commit guarantees the exact reproduction of the build
environment, including all third-party library versions.

## The Manifest Architecture (`vcpkg.json`)

The core of this architecture is the manifest file located at the project root. It serves a role
analogous to `Cargo.toml` in Rust or `package.json` in Node.js, but with mechanics adapted for C++
ABI constraints.

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

1. **Builtin-Baseline:** vcpkg does not resolve versions by checking the "latest" available on the
   server. Instead, it uses a **Baseline**, which is a specific Git commit SHA of the vcpkg
   repository. The baseline defines a snapshot of the entire C++ ecosystem that is known to compile
   together.
2. **Dependencies:** Simple strings denote the package name. The version is implicitly determined by
   the baseline.
3. **Constraints (`version>=`):** These enforce a minimum version. If the baseline provides an older
   version, vcpkg upgrades.
4. **Host Dependencies:** The `"host": true` flag indicates a tool required for the build process
   itself (e.g., `protobuf` compiler) rather than a library to link against. This allows
   cross-compilation where the build host (x64) runs tools to generate code for the target (ARM64).
5. **Overrides:** These force a specific version, bypassing the baseline logic. This is commonly
   used to pin exact versions or temporarily revert a broken update.

## Registry Federation

Large-scale systems often require dependencies not present in the public Microsoft registry, such as
proprietary internal libraries or forks of open-source projects. **Registry Federation** allows a
project to compose dependencies from multiple disparate sources transparently.

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
2. If a dependency matches a package listed in a custom registry (e.g., `internal-logger`), vcpkg
   resolves it against that specific Git repository.
3. All other packages fall back to the `default-registry`.

This federation allows seamless mixing of public open-source libraries and private proprietary
components within a single build graph.

## CMake Integration

vcpkg integrates into the build system via a **CMake Toolchain File**. This file intercepts
`find_package()` calls and redirects them to the vcpkg-installed artifacts.

### Bootstrapping vcpkg

To ensure reproducibility, vcpkg itself should be bootstrapped locally (often as a Git submodule)
rather than relying on a global installation.

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

Once configured, usage in `CMakeLists.txt` follows standard CMake patterns. vcpkg ensures the
libraries are available on the search path.

```cmake
find_package(fmt CONFIG REQUIRED)
target_link_libraries(App PRIVATE fmt::fmt)
```

## Architectural Advantages

### 1. ODR Safety via Global Graph

Unlike package managers that allow nested dependencies (Node.js), vcpkg enforces a flat dependency
graph. If `Lib A` needs `fmt 9.0` and `Lib B` needs `fmt 10.0`, vcpkg calculates a single version
(10.0) for the entire graph and recompiles `Lib A` against it. This prevents **One Definition Rule
(ODR)** violations and runtime ABI crashes.

### 2. Triplet-Based ABI Control

vcpkg uses **Triplets** (e.g., `x64-windows-static`, `arm64-linux`) to define the build
configuration for all dependencies. This allows an architect to switch the entire dependency tree
from Dynamic Linking to Static Linking, or change the CRT linkage, by modifying a single variable
(`VCPKG_TARGET_TRIPLET`).

### 3. Source-Based Provenance

Because vcpkg builds from source (unless Binary Caching is active), the resulting binaries are
guaranteed to use the exact compiler flags (`-O3`, `-fsanitize=address`) of the parent project,
ensuring complete binary compatibility.

## Manifest Mode vs. Classic Mode

### Classic Mode (Deprecated)

In classic mode, vcpkg operates as a global package manager. Packages are installed into a shared
directory and selected via environment variables.

```bash
# Classic mode (legacy, not recommended)
vcpkg install fmt:x64-windows
vcpkg integrate install  # modifies system-wide CMake settings
```

**Problems with Classic Mode:**

- **Global state:** Multiple projects share the same vcpkg installation, leading to version
  conflicts.
- **Non-reproducible:** `vcpkg install fmt` installs the latest version, which changes over time.
- **No dependency graph isolation:** Each project's dependencies bleed into each other.

### Manifest Mode (Recommended)

Manifest mode (enabled by default since vcpkg 2022.11.12) ties dependencies to the project via
`vcpkg.json` in the project root. This is the only mode discussed in this document.

```bash
# Manifest mode (automatic when vcpkg.json exists)
vcpkg install  # reads vcpkg.json, installs to vcpkg_installed/
```

## Triplets and Platform Targeting

A **triplet** is a string that defines the target platform, architecture, and linkage model. vcpkg
uses triplets to control how every dependency is built.

### Common Triplets

| Triplet              | OS              | Architecture | Linkage       | CRT     |
| -------------------- | --------------- | ------------ | ------------- | ------- |
| `x64-windows`        | Windows         | x86_64       | Dynamic (DLL) | MD/MDd  |
| `x64-windows-static` | Windows         | x86_64       | Static (LIB)  | MT/MTd  |
| `x64-linux`          | Linux           | x86_64       | Dynamic (SO)  | default |
| `x64-linux-static`   | Linux           | x86_64       | Static (A)    | default |
| `arm64-windows`      | Windows         | ARM64        | Dynamic (DLL) | MD/MDd  |
| `arm64-linux`        | Linux           | ARM64        | Dynamic (SO)  | default |
| `x64-mingw-dynamic`  | Windows (MinGW) | x86_64       | Dynamic       | default |
| `wasm32-emscripten`  | WebAssembly     | wasm32       | Static        | N/A     |

### Setting the Target Triplet

```bash
# Via environment variable
export VCPKG_TARGET_TRIPLET=x64-linux-static

# Via CMake
cmake -S . -B build \
  -DCMAKE_TOOLCHAIN_FILE=external/vcpkg/scripts/buildsystems/vcpkg.cmake \
  -DVCPKG_TARGET_TRIPLET=x64-linux-static
```

### Custom Triplets

For embedded or specialized targets, create a custom triplet file:

**File:** `triplets/my-custom-linux.cmake`

```cmake
set(VCPKG_TARGET_ARCHITECTURE arm64)
set(VCPKG_CRT_LINKAGE dynamic)
set(VCPKG_LIBRARY_LINKAGE static)
set(VCPKG_CMAKE_SYSTEM_NAME Linux)

# Pass additional CMake variables to all port builds
set(VCPKG_CMAKE_CONFIGURE_OPTIONS
    -DENABLE_NEON=ON
    -DCMAKE_POSITION_INDEPENDENT_CODE=ON
)
```

```bash
vcpkg install fmt:my-custom-linux
```

## Common Workflows

### Adding a Dependency

Edit `vcpkg.json` and add the package name. Then reconfigure CMake:

```bash
# vcpkg.json already updated with "spdlog"
cmake --build build  # triggers vcpkg to download and build spdlog
```

Or use the CLI (modifies `vcpkg.json` automatically):

```bash
vcpkg add spdlog
```

### Installing All Dependencies

```bash
# Install all dependencies from vcpkg.json
vcpkg install

# Install for a specific triplet
vcpkg install --triplet arm64-linux
```

### Removing a Dependency

```bash
vcpkg remove spdlog
```

Or manually remove the entry from `vcpkg.json` and reconfigure.

### Updating Dependencies

```bash
# Check what can be updated
vcpkg update

# Update all dependencies to their latest versions within the baseline
vcpkg upgrade

# Update and rebuild everything (aggressive, may break)
vcpkg upgrade --no-dry-run
```

### Searching for Packages

```bash
vcpkg search json
# Output:
# nlohmann-json        3.11.3     JSON for Modern C++
# json-c               0.17       JSON manipulation in C
# rapidjson             1.1.0     Fast JSON parser/generator
```

## Overlay Ports

When a library is not available in the public vcpkg registry, or you need a custom fork, you can use
**overlay ports**. An overlay port is a local directory containing a portfile that takes priority
over the registry.

### Overlay Structure

```text
Project/
├── vcpkg.json
├── vcpkg-overlays/
│   └── my-custom-lib/
│       ├── portfile.cmake
│       └── vcpkg.json
```

**vcpkg-overlays/my-custom-lib/portfile.cmake:**

```cmake
vcpkg_from_github(
    OUT_SOURCE_PATH SOURCE_PATH
    REPO mycompany/custom-lib
    REF v2.1.0
    SHA512 abc123...
)

vcpkg_cmake_configure(
    SOURCE_PATH "${SOURCE_PATH}"
    OPTIONS
        -DBUILD_TESTS=OFF
)

vcpkg_cmake_install()
vcpkg_cmake_config_fixup()
```

### Using the Overlay

```bash
cmake -S . -B build \
  -DCMAKE_TOOLCHAIN_FILE=external/vcpkg/scripts/buildsystems/vcpkg.cmake \
  -DVCPKG_OVERLAY_PORTS=vcpkg-overlays
```

vcpkg resolves `my-custom-lib` from the overlay directory first, falling back to the public registry
for all other packages.

## Binary Caching with NuGet

vcpkg packages binary artifacts as NuGet packages for storage and distribution. This is the most
common binary caching backend in enterprise environments.

### Enabling NuGet Binary Cache

```bash
# Linux/macOS
export VCPKG_BINARY_SOURCES="clear;nuget,https://artifactory.example.com/nuget/vcpkg-cache,readwrite"

# Windows
$env:VCPKG_BINARY_SOURCES="clear;nuget,https://artifactory.example.com/nuget/vcpkg-cache,readwrite"
```

### How It Works

1. After building a package, vcpkg zips the artifacts (`include/`, `lib/`, `bin/`).
2. It packages the zip as a NuGet package with the ABI hash as the version.
3. It pushes the package to the configured NuGet feed.
4. On subsequent builds, vcpkg queries the feed for a matching ABI hash before compiling.

### Local Filesystem Cache (Quick Start)

For a single developer machine, a local filesystem cache avoids redundant rebuilds across projects:

```bash
export VCPKG_BINARY_SOURCES="clear;files,$HOME/.cache/vcpkg,readwrite"
```

## Private Registries

Organizations with proprietary libraries can host private vcpkg registries. A registry is a Git
repository containing port definitions and version metadata.

### Registry Structure

```text
private-registry/
├── ports/
│   ├── internal-logger/
│   │   ├── portfile.cmake
│   │   └── vcpkg.json
│   └── proprietary-math/
│       ├── portfile.cmake
│       └── vcpkg.json
└── versions/
    └── internal-logger/
        └── baseline.json
```

### Configuring a Private Registry

In `vcpkg-configuration.json`:

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
      "repository": "https://github.com/mycompany/private-cpp-registry",
      "baseline": "f9e8d7c6...",
      "packages": ["internal-logger", "proprietary-math"]
    }
  ]
}
```

When vcpkg encounters `internal-logger` in the dependency list, it fetches the port definition from
the private registry instead of the public Microsoft registry.

## Common Pitfalls

1. **Mixing triplets in the same build tree:** If you change `VCPKG_TARGET_TRIPLET` without clearing
   the build directory, stale artifacts from the previous triplet may cause linker errors. Always
   delete `build/` and `vcpkg_installed/` when changing triplets.
2. **Forgetting `--triplet` for CLI commands:** `vcpkg install fmt` installs the default triplet,
   which may not match your project's triplet. Always specify: `vcpkg install fmt:x64-linux-static`.
3. **Overlay port SHA512 mismatch:** When using overlays, the `SHA512` in `portfile.cmake` must
   match the downloaded archive. If you update the archive without updating the hash, vcpkg will
   fail with a checksum error.
4. **NuGet mono dependency on Linux/macOS:** vcpkg's NuGet binary cache requires `mono` on
   non-Windows platforms. Install it via `brew install mono` or `apt install mono-complete`.

## See Also

- [Dependency Resolution](1_dependency_architectures_models.md) — How vcpkg resolves the dependency
  graph
- [CPM.cmake](2_cpm.md) — Lightweight alternative for smaller projects
- [Binary Caching](6_binary_caching.md) — Detailed binary caching strategies
- [Property Propagation](5_property_propagation.md) — How vcpkg-integrated libraries propagate build
  properties
