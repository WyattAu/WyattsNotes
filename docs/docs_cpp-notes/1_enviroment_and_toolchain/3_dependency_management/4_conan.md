---
title: Conan
date: 2025-12-11T05:01:52.356Z
tags:
  - cpp
categories:
  - cpp
slug: conan
---

**Conan** is a decentralized, open-source package manager designed specifically for C++'s complex binary compatibility requirements. Unlike vcpkg, which defaults to a source-based model, Conan operates on a **Binary-First** model.

Compiling dependencies like Qt, Boost, or LLVM from source for every CI run or developer machine is inefficient. Conan resolves this by caching pre-compiled binaries for specific configurations (Operating System, Compiler, Architecture, Build Type). If a matching binary exists on the remote server, Conan downloads it; otherwise, it builds from source and caches the result.

## The Binary Compatibility Graph

The core architectural innovation of Conan is the **Package ID**.

When a project requests a dependency (e.g., `fmt/10.1.0`), Conan computes a SHA-1 hash (the Package ID) based on the input configuration:

1. **Settings:** Global project configuration (OS, Arch, Compiler Version, C++ Standard).
2. **Options:** Package-specific configuration (Shared/Static, `fPIC`, `with_ssl`).
3. **Requirements:** Version of transitive dependencies.

### Resolution Logic

1. **Compute Hash:** The client calculates the Package ID required for the current environment.
2. **Query Remote:** The client asks the remote registry (ConanCenter or Artifactory) if a binary artifact with that ID exists.
3. **Retrieval:**
   - **Hit:** Download the binary (headers and libs).
   - **Miss:** Download the recipe (`conanfile.py`), build from source locally, and (optionally) upload the new binary to the remote.

## Profile Configuration

A **Conan Profile** is a text file that defines the "Settings" used to calculate the Package ID. It represents the target platform's state.

Conan 2.0 mandates a separation between two contexts to support cross-compilation:

1. **Build Profile:** The machine running the build (e.g., x86_64 Linux CI Agent).
2. **Host Profile:** The machine that will run the artifacts (e.g., ARM64 Embedded Device).

### Anatomy of a Profile

Profiles are stored in `~/.conan2/profiles/`. A standard profile named `linux-clang-release` might look like this:

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

Dependencies are declared in a `conanfile.txt` (declarative) or `conanfile.py` (imperative) at the project root.

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

Conan 2.0 integration relies on generating a **CMake Toolchain File** that injects the dependency paths into the build system. This process decouples the package manager from the build system.

### Workflow

1. **Install Dependencies:**
   Run Conan to resolve the graph and generate toolchains.

   ```bash
   conan install . --output-folder=build --build=missing -pr:h=linux-clang-release -pr:b=default
   ```

   - `-pr:h`: Host profile (Target).
   - `-pr:b`: Build profile (Build Agent).
   - `--build=missing`: Build from source if binary is not found.

2. **Configure CMake:**
   Pass the generated toolchain to CMake.

   ```bash
   cmake -S . -B build -DCMAKE_TOOLCHAIN_FILE=build/conan_toolchain.cmake -DCMAKE_BUILD_TYPE=Release
   ```

3. **Build:**

   ```bash
   cmake --build build
   ```

### CMakeLists.txt Configuration

Inside `CMakeLists.txt`, treat Conan packages as standard targets. The `CMakeDeps` generator creates config files for `find_package`.

```cmake
cmake_minimum_required(VERSION 3.25)
project(App LANGUAGES CXX)

find_package(fmt REQUIRED)
find_package(nlohmann_json REQUIRED)

add_executable(App main.cpp)
target_link_libraries(App PRIVATE fmt::fmt nlohmann_json::nlohmann_json)
```

## Remote Architecture and Artifactory

In a professional environment, reliance on the public `ConanCenter` is often restricted due to security or availability concerns. Organizations deploy **JFrog Artifactory** or **Sonatype Nexus** as private Conan remotes.

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
