---
title: Conan
date: 2025-12-11T05:01:52.356Z
tags:
  - cpp
categories:
  - cpp
slug: conan
---

**Conan** is a decentralized, open-source package manager designed specifically for C++'s complex
binary compatibility requirements. Unlike vcpkg, which defaults to a source-based model, Conan
operates on a **Binary-First** model.

Compiling dependencies like Qt, Boost, or LLVM from source for every CI run or developer machine is
inefficient. Conan resolves this by caching pre-compiled binaries for specific configurations
(Operating System, Compiler, Architecture, Build Type). If a matching binary exists on the remote
server, Conan downloads it; otherwise, it builds from source and caches the result.

## The Binary Compatibility Graph

The core architectural innovation of Conan is the **Package ID**.

When a project requests a dependency (e.g., `fmt/10.1.0`), Conan computes a SHA-1 hash (the Package
ID) based on the input configuration:

1. **Settings:** Global project configuration (OS, Arch, Compiler Version, C++ Standard).
2. **Options:** Package-specific configuration (Shared/Static, `fPIC`, `with_ssl`).
3. **Requirements:** Version of transitive dependencies.

### Resolution Logic

1. **Compute Hash:** The client calculates the Package ID required for the current environment.
2. **Query Remote:** The client asks the remote registry (ConanCenter or Artifactory) if a binary
   artifact with that ID exists.
3. **Retrieval:**
   - **Hit:** Download the binary (headers and libs).
   - **Miss:** Download the recipe (`conanfile.py`), build from source locally, and (optionally)
     upload the new binary to the remote.

## Profile Configuration

A **Conan Profile** is a text file that defines the "Settings" used to calculate the Package ID. It
represents the target platform's state.

Conan 2.0 mandates a separation between two contexts to support cross-compilation:

1. **Build Profile:** The machine running the build (e.g., x86_64 Linux CI Agent).
2. **Host Profile:** The machine that will run the artifacts (e.g., ARM64 Embedded Device).

### Anatomy of a Profile

Profiles are stored in `~/.conan2/profiles/`. A standard profile named `linux-clang-release` might
look like this:

```ini
[settings]
os=Linux
arch=x86_64
compiler=clang
compiler.version=16
compiler.libcxx=libstdc++11
compiler.cppstd=23
build_type=Release

[options]
# Force all dependencies to be static by default
*:shared=False
# Specific override
openssl/*:shared=True

[tool_requires]
# Inject build tools into the environment
cmake/3.27.0
ninja/1.11.1
```

### Profile Composition

Profiles supports inheritance using the `include()` directive, allowing architectural layering.

**base_linux:**

```ini
[settings]
os=Linux
compiler=gcc
compiler.version=13
compiler.libcxx=libstdc++11
```

**debug_x64:**

```ini
include(base_linux)
[settings]
arch=x86_64
build_type=Debug
```

## Dependency Specification

Dependencies are declared in a `conanfile.txt` (declarative) or `conanfile.py` (imperative) at the
project root.

### The Declarative Approach (`conanfile.txt`)

For consumption-only workflows, `conanfile.txt` is sufficient.

```ini
[requires]
fmt/10.1.1
nlohmann_json/3.11.2
spdlog/1.12.0

[generators]
# Generates CMake toolchain files and target definitions
CMakeDeps
CMakeToolchain

[options]
spdlog/*:header_only=True
```

### The Imperative Approach (`conanfile.py`)

For complex logic (e.g., conditional dependencies based on OS), use Python.

```python
from conan import ConanFile

class SystemRecipe(ConanFile):
    settings = "os", "compiler", "build_type", "arch"
    generators = "CMakeDeps", "CMakeToolchain"

    def requirements(self):
        self.requires("fmt/10.1.1")
        if self.settings.os == "Windows":
            self.requires("pthreads4w/3.0.0")

    def layout(self):
        # Standardizes build folder structures (cmake_layout)
        from conan.tools.cmake import cmake_layout
        cmake_layout(self)
```

## CMake Integration

Conan 2.0 integration relies on generating a **CMake Toolchain File** that injects the dependency
paths into the build system. This process decouples the package manager from the build system.

### Workflow

1. **Install Dependencies:** Run Conan to resolve the graph and generate toolchains.

   ```bash
   conan install . --output-folder=build --build=missing -pr:h=linux-clang-release -pr:b=default
   ```

   - `-pr:h`: Host profile (Target).
   - `-pr:b`: Build profile (Build Agent).
   - `--build=missing`: Build from source if binary is not found.

2. **Configure CMake:** Pass the generated toolchain to CMake.

   ```bash
   cmake -S . -B build -DCMAKE_TOOLCHAIN_FILE=build/conan_toolchain.cmake -DCMAKE_BUILD_TYPE=Release
   ```

3. **Build:**

   ```bash
   cmake --build build
   ```

### CMakeLists.txt Configuration

Inside `CMakeLists.txt`, treat Conan packages as standard targets. The `CMakeDeps` generator creates
config files for `find_package`.

```cmake
cmake_minimum_required(VERSION 3.25)
project(App LANGUAGES CXX)

find_package(fmt REQUIRED)
find_package(nlohmann_json REQUIRED)

add_executable(App main.cpp)
target_link_libraries(App PRIVATE fmt::fmt nlohmann_json::nlohmann_json)
```

## Remote Architecture and Artifactory

In a professional environment, reliance on the public `ConanCenter` is often restricted due to
security or availability concerns. Organizations deploy **JFrog Artifactory** or **Sonatype Nexus**
as private Conan remotes.

### Remote Configuration

```bash
# Add a private remote
conan remote add internal-artifacts https://artifactory.company.com/artifactory/api/conan/conan-local

# Authenticate
conan user -p <password> -r internal-artifacts <username>
```

### The CI/CD Pipeline Flow

1. **Build Job:**
   - Checkout Source.
   - `conan create .` (Builds the package locally).
   - `conan upload <package> -r internal-artifacts`.
2. **Consumer Job:**
   - `conan install . -r internal-artifacts`.
   - Conan detects the pre-built binary in Artifactory matching the CI profile.
   - Downloads binary (seconds) instead of compiling (minutes).

---

## Creating Packages (`conan create`)

The `conan create` command is the primary mechanism for building and publishing Conan packages. It
executes a five-stage pipeline defined in your `conanfile.py`:

### The Five Stages of `conan create`

| Stage     | Method in `conanfile.py` | Purpose                                                  |
| :-------- | :----------------------- | :------------------------------------------------------- |
| `layout`  | `layout()`               | Configure source/build/package folder structure          |
| `source`  | `source()`               | Download/extract source code from remote                 |
| `build`   | `build()`                | Compile the library (invoke CMake, Make, etc.)           |
| `package` | `package()`              | Copy build artifacts (headers, libs) into package folder |
| `test`    | `test()`                 | Run consumer tests against the built package             |

```python
from conan import ConanFile
from conan.tools.cmake import CMake, cmake_layout, CMakeToolchain, CMakeDeps
from conan.tools.files import copy
import os

class MyLibConan(ConanFile):
    name = "mylib"
    version = "1.0.0"
    license = "MIT"
    author = "Team"
    settings = "os", "compiler", "build_type", "arch"
    exports_sources = "src/*", "CMakeLists.txt", "include/*"
    generators = "CMakeDeps", "CMakeToolchain"

    def layout(self):
        cmake_layout(self)

    def requirements(self):
        self.requires("fmt/10.1.1")

    def build(self):
        cmake = CMake(self)
        cmake.configure()
        cmake.build()

    def package(self):
        cmake = CMake(self)
        cmake.install()

    def package_info(self):
        # Defines the CMake target name that consumers will use
        self.cpp_info.libs = ["mylib"]
        self.cpp_info.bindirs = ["lib"]
        self.cpp_info.includedirs = ["include"]
```

### Package ID Calculation

When `conan create` runs, it computes a SHA-1 hash from the combined settings, options, and
transitive dependency versions. Two machines with identical profiles will compute the same Package
ID and can share binaries.

```bash
# Inspect the computed package ID
conan inspect . -a package_id

# View the dependency graph with package IDs
conan graph info . --format=dot
```

### `package_info()` — The Contract with Consumers

The `package_info()` method is critical: it defines what consumers see when they
`find_package(mylib)`. It specifies:

- **`self.cpp_info.libs`**: Library files to link (without prefix/suffix).
- **`self.cpp_info.system_libs`**: System libraries (e.g., `pthread`, `dl`, `ws2_32`).
- **`self.cpp_info.defines`**: Preprocessor definitions consumers should inherit.
- **`self.cpp_info.cxxflags`**: Compiler flags to propagate.
- **`self.cpp_info.bindirs` / `includedirs`**: Search paths for binaries and headers.

```python
def package_info(self):
    self.cpp_info.libs = ["mylib"]
    if self.settings.os == "Linux":
        self.cpp_info.system_libs = ["pthread", "dl"]
    elif self.settings.os == "Windows":
        self.cpp_info.system_libs = ["ws2_32"]
    if self.settings.build_type == "Debug":
        self.cpp_info.defines.append("MYLIB_DEBUG")
```

---

## CMake Toolchain Integration Details

### What `CMakeToolchain` Generates

The `CMakeToolchain` generator creates a `conan_toolchain.cmake` file that sets CMake variables
before the project's `CMakeLists.txt` is processed. This file configures:

| CMake Variable                            | Purpose                                       |
| :---------------------------------------- | :-------------------------------------------- |
| `CMAKE_C_COMPILER` / `CMAKE_CXX_COMPILER` | Compiler executable path (from build profile) |
| `CMAKE_BUILD_TYPE`                        | Build type (Debug, Release, RelWithDebInfo)   |
| `CMAKE_POSITION_INDEPENDENT_CODE`         | Set to ON when building shared libraries      |
| `BUILD_SHARED_LIBS`                       | Controlled by the `*:shared` option           |
| `CMAKE_PREFIX_PATH`                       | Paths to dependency package folders           |

### What `CMakeDeps` Generates

`CMakeDeps` creates `FindXXX.cmake` or `XXXConfig.cmake` files in the build directory, enabling
`find_package()`:

```
build/
  Generators/
    fmt/
      fmtConfig.cmake          ← find_package(fmt) uses this
      fmtTargets.cmake         ← defines fmt::fmt target
    nlohmann_json/
      nlohmann_jsonConfig.cmake
```

### Two-Phase Workflow (CMake Presets Integration)

Conan 2.x integrates with CMake presets to eliminate manual toolchain passing:

```bash
# Step 1: Install dependencies and generate CMakePresets.json
conan install . --output-folder=build --build=missing

# Step 2: CMake automatically picks up the preset
cmake --preset conan-release
cmake --build --preset conan-release
```

This is the recommended workflow for Conan 2.x. The `conan install` command generates a
`CMakePresets.json` in the build folder that configures the toolchain and build directories.

---

## Version Ranges and Conflict Resolution

### Version Ranges

Conan supports semantic version ranges in dependency specifications:

```ini
[requires]
fmt/[>=10.0 <11.0]    # Accept any 10.x version
boost/[>=1.82.0]      # Accept 1.82.0 and above
```

Version ranges resolve to the **latest matching version** on the remote. This is useful for getting
patch updates without manually bumping versions.

### Conflict Resolution

When two dependencies require different versions of the same package, Conan raises a conflict error:

```
ERROR: Conflict in mylib/1.0.0:
    Requirement fmt/10.0.0 conflicts with fmt/9.1.0 required by other_lib/2.0.0
```

Resolution strategies:

1. **Narrow the version range** to force compatibility:

   ```ini
   [requires]
   fmt/10.1.1    # Pin exact version
   ```

2. **Use `conan lock`** to lock the entire dependency graph:

   ```bash
   conan lock create . --lockfile=conan.lock
   conan install . --lockfile=conan.lock --lockfile-out=conan.lock
   ```

   The lock file records exact versions and package IDs for every transitive dependency, ensuring
   reproducible builds across machines and time.

3. **Override** a specific dependency version:
   ```bash
   conan install . --build=missing -o 'other_lib/*:fmt_version=10.1.1'
   ```

---

## Binary Cache and Local Cache

### The Conan 2.x Cache Structure

Conan 2.x stores all data in `~/.conan2/`:

```
~/.conan2/
  cache/                    # Local binary package storage
    pkg/                    # Organized by recipe reference
      <hash>/
        <package_id_hash>/  # Package artifacts
  profiles/                 # Profile files
  remotes.json              # Remote registry configuration
```

Each package is identified by its **reference** (`fmt/10.1.1`) and **package ID** (a SHA-1 hash of
settings/options). The cache deduplicates packages across projects: if two projects depend on
`fmt/10.1.1` with the same compiler settings, they share the same cached binary.

### Cache Management Commands

```bash
# List all cached packages
conan list "*"

# Search for a specific package
conan search "fmt/*" -r conancenter

# Remove a specific package from cache
conan remove "fmt/10.0.0*"

# Remove all cached binaries (force rebuild from source)
conan remove "*" -p -b

# Inspect package contents
conan cache path fmt/10.1.1:<package_id_hash>
```

---

## Conan vs vcpkg: Architectural Trade-offs

| Aspect             | Conan                                              | vcpkg                                           |
| :----------------- | :------------------------------------------------- | :---------------------------------------------- |
| **Binary model**   | Binary-first: downloads pre-built binaries         | Source-first: compiles from source by default   |
| **Package format** | Python-based `conanfile.py` (flexible)             | `vcpkg.json` + `portfile.cmake` (CMake-centric) |
| **C++ Standard**   | Separate build/host profiles for cross-compilation | Triplets (simpler but less flexible)            |
| **Registry**       | Any remote (JFrog, S3, local filesystem)           | Built-in GitHub catalog                         |
| **Binary caching** | Built-in, per-configuration SHA-1 based            | Binary caching via NuGet feeds or Azure         |
| **Versioning**     | Semantic version ranges                            | Versions in port manifest                       |
| **Ecosystem**      | Widely used in embedded, gaming, enterprise        | Microsoft-backed, strong on Windows             |

Conan's binary-first approach makes it significantly faster for CI pipelines where the same
dependency is built repeatedly. vcpkg's source-first approach guarantees reproducibility (you always
build from source on your exact toolchain) but at the cost of build time.

---

## Common Pitfalls

- **Not using `conan lock` for CI.** Without a lock file, CI builds can silently pick up new
  dependency versions that pass on one configuration but break on another. Always generate a lock
  file and commit it to version control.
- **Mixing build and host profiles in native builds.** On native (non-cross-compiled) builds, both
  the build and host profiles should match. If they differ, Conan may download a binary built for
  the wrong platform, causing cryptic runtime crashes.
- **Forgetting `--build=missing`.** If a binary does not exist on the remote and you do not specify
  `--build=missing`, Conan fails with a "binary not found" error. Use `--build=missing` for local
  development and `--build=never` for CI (where all binaries should come from the remote).
- **Not pinning the CMake version in `tool_requires`.** Different CMake versions generate different
  project files. If your CI uses CMake 3.28 but your local machine uses CMake 3.25, the generated
  build files may differ. Pin CMake in your profile: `cmake/3.28.1` in `[tool_requires]`.
- **Using `conanfile.txt` for complex projects.** The declarative format does not support
  conditional dependencies, custom build steps, or `test()` methods. Once your project needs
  OS-specific dependencies or custom packaging logic, migrate to `conanfile.py`.
- **Ignoring ABI compatibility.** Conan's Package ID does not capture ABI changes caused by compiler
  flags like `-D_GLIBCXX_USE_CXX11_ABI`. If two TUs are compiled with different ABI settings,
  linking them causes crashes. Ensure your profile captures all ABI-affecting settings.
