---
title: CMake Presets and Toolchain Files
description:
  "C++: CMake Presets and Toolchain Files — 1. Toolchain Files (`*.cmake`); Anatomy of a Robust Toolchain File; toolchain-clang.cmake; 1. Force Compilers."
date: 2025-12-10T06:16:47.022Z
tags:
  - cpp
categories:
  - cpp
slug: cmake-presets-toolchain-files
---

A major challenge in C++ systems engineering is **Build Reproducibility**. A developer on Linux, a
developer on Windows, and a CI/CD agent should all generate the build environment using the exact
same logic.

Reliance on "magic" shell scripts (`build.sh`, `configure.bat`) or lengthy command-line arguments is
an anti-pattern. Modern CMake resolves this through two architectural components:

1. **Toolchain Files:** Define **WHAT** tools are used (Compilers, Sysroot, Target Architecture).
2. **CMake Presets:** Define **HOW** the build is configured (Generator, Flags, Output Directories,
   Environment Variables).

## 1. Toolchain Files (`*.cmake`)

As introduced in Module 1.4, the Toolchain File sets up the build environment _before_ the project
configuration runs. It is strict about **compiler selection**.

While toolchain files are mandatory for cross-compilation, they are also Best Practice for enforcing
specific compiler versions on local machines (e.g., forcing Clang 17 over the system GCC).

### Anatomy of a Robust Toolchain File

Create a file named `cmake/toolchain-clang.cmake`:

```cmake
# toolchain-clang.cmake
set(CMAKE_SYSTEM_NAME Linux)

# 1. Force Compilers
# Use CACHE STRING to allow overriding if absolutely necessary, but default to specific binaries.
set(CMAKE_C_COMPILER clang CACHE STRING "C Compiler")
set(CMAKE_CXX_COMPILER clang++ CACHE STRING "C++ Compiler")

# 2. Set Standard Linker (LLD)
# We use the generic flag, relying on Clang to find the linker.
set(CMAKE_EXE_LINKER_FLAGS_INIT "-fuse-ld=lld" CACHE STRING "Linker Flags")
set(CMAKE_MODULE_LINKER_FLAGS_INIT "-fuse-ld=lld" CACHE STRING "Linker Flags")
set(CMAKE_SHARED_LINKER_FLAGS_INIT "-fuse-ld=lld" CACHE STRING "Linker Flags")

# 3. Convenience Variables
set(CMAKE_FIND_ROOT_PATH_MODE_PROGRAM NEVER)
set(CMAKE_FIND_ROOT_PATH_MODE_LIBRARY ONLY)
set(CMAKE_FIND_ROOT_PATH_MODE_INCLUDE ONLY)
```

### Toolchain File Execution Order

Understanding when a toolchain file is processed relative to the project's `CMakeLists.txt` is
critical:

1. CMake processes command-line arguments (`-D`).
2. CMake processes the toolchain file.
3. CMake processes the first `project()` call in `CMakeLists.txt`.
4. The `CMAKE_SYSTEM_NAME` variable is checked. If it differs from the host, CMake enters
   cross-compilation mode and changes `CMAKE_FIND_ROOT_PATH` behavior.

**Key implication:** Variables set in the toolchain file are available before `project()` is called.
This is the only way to force compiler selection before CMake auto-detects compilers.

### CMAKE_FIND_ROOT_PATH Modes

When cross-compiling, `find_package` and `find_library` search the target sysroot, not the host
filesystem. The mode variables control this:

| Variable                            | Value   | Behavior                                                         |
| :---------------------------------- | :------ | :--------------------------------------------------------------- |
| `CMAKE_FIND_ROOT_PATH_MODE_PROGRAM` | `NEVER` | Always searches the host (programs run on the host during build) |
| `CMAKE_FIND_ROOT_PATH_MODE_LIBRARY` | `ONLY`  | Only searches the sysroot (libraries are for the target)         |
| `CMAKE_FIND_ROOT_PATH_MODE_INCLUDE` | `ONLY`  | Only searches the sysroot (headers are for the target)           |

---

## 2. CMake Presets (`CMakePresets.json`)

Introduced in CMake 3.19, `CMakePresets.json` is a standard JSON format that replaces command-line
arguments. It allows you to check your build configurations into version control.

Instead of typing:

```bash
cmake -S . -B build/debug -G Ninja -DCMAKE_BUILD_TYPE=Debug -DCMAKE_TOOLCHAIN_FILE=cmake/toolchain-clang.cmake
```

You type:

```bash
cmake --preset debug
```

### The Architecture of a Preset File

A `CMakePresets.json` file lives at the root of your repository. It contains three main sections:

1. **Configure Presets:** Arguments for the generation step (`cmake -S ...`).
2. **Build Presets:** Arguments for the compilation step (`cmake --build ...`).
3. **Test Presets:** Arguments for CTest (`ctest ...`).

### Inheritance and DRY

Presets support inheritance to keep configurations Don't-Repeat-Yourself (DRY).

```json
{
  "version": 6,
  "cmakeMinimumRequired": {
    "major": 3,
    "minor": 25
  },
  "configurePresets": [
    {
      "name": "base",
      "hidden": true,
      "generator": "Ninja",
      "binaryDir": "${sourceDir}/build/${presetName}",
      "cacheVariables": {
        "CMAKE_EXPORT_COMPILE_COMMANDS": "ON"
      }
    },
    {
      "name": "linux-clang-debug",
      "displayName": "Linux Clang Debug",
      "description": "Debug build using Clang Toolchain",
      "inherits": "base",
      "toolchainFile": "${sourceDir}/cmake/toolchain-clang.cmake",
      "cacheVariables": {
        "CMAKE_BUILD_TYPE": "Debug"
      }
    },
    {
      "name": "linux-clang-release",
      "displayName": "Linux Clang Release",
      "inherits": "linux-clang-debug",
      "cacheVariables": {
        "CMAKE_BUILD_TYPE": "Release"
      }
    },
    {
      "name": "ci-sanitizer",
      "inherits": "linux-clang-debug",
      "cacheVariables": {
        "ENABLE_ASAN": "ON",
        "ENABLE_UBSAN": "ON"
      }
    }
  ],
  "buildPresets": [
    {
      "name": "debug",
      "configurePreset": "linux-clang-debug",
      "configuration": "Debug",
      "jobs": 8
    },
    {
      "name": "release",
      "configurePreset": "linux-clang-release",
      "configuration": "Release",
      "verbose": true
    }
  ]
}
```

### Key JSON Fields explained

- **`binaryDir`**: Defines where artifacts go. Using `${sourceDir}/build/${presetName}` ensures
  separate folders for Debug and Release builds, preventing cache corruption.
- **`toolchainFile`**: Links the Preset (Workflow) to the Toolchain (Compiler).
- **`cacheVariables`**: These map directly to `-DVAR=VALUE`.
- **`environment`**: Sets env vars (e.g., `PATH` or `CCACHE_DIR`) only for the scope of the build.

## 3. Workflow Integration

### Command Line Usage

1. **List Available Presets:**

   ```bash
   cmake --list-presets
   ```

2. **Configure (Generate Build System):**

   ```bash
   cmake --preset linux-clang-debug
   ```

   _This creates the `build/linux-clang-debug` directory._

3. **Build (Compile):**

   ```bash
   cmake --build --preset debug
   ```

   _Note: The build preset maps back to the configure preset defined in JSON._

### IDE Integration

Most modern IDEs detect `CMakePresets.json` automatically.

- **VS Code (CMake Tools):** The bottom status bar allows selecting a Configure Preset and a Build
  Preset from a dropdown list.
- **Visual Studio 2022:** Native support. Presets appear in the configuration dropdown.
- **CLion:** Automatically imports presets into run configurations.

## 4. User-Specific Presets

`CMakePresets.json` is meant to be committed to Git. However, developers often have local paths that
differ (e.g., where `vcpkg` is installed).

**`CMakeUserPresets.json`** is the solution.

- It has the same format as `CMakePresets.json`.
- It is implicitly included by CMake.
- It **must be added to `.gitignore`**.

### Example: Local Vcpkg Override

A developer can create `CMakeUserPresets.json` to inject their local vcpkg path without modifying
the shared project file.

```json
{
  "version": 6,
  "configurePresets": [
    {
      "name": "my-local-dev",
      "inherits": "linux-clang-debug",
      "cacheVariables": {
        "CMAKE_TOOLCHAIN_FILE": "/home/user/vcpkg/scripts/buildsystems/vcpkg.cmake"
      }
    }
  ]
}
```

## 5. Cross-Compilation Toolchain Deep Dive

Cross-compilation is the primary use case for toolchain files. The toolchain file must describe the
target platform, the compiler, and the sysroot.

### Android NDK Toolchain

```cmake
# cmake/toolchain-android.cmake
set(CMAKE_SYSTEM_NAME Android)
set(CMAKE_SYSTEM_VERSION 31)  # API level
set(CMAKE_ANDROID_ARCH_ABI arm64-v8a)
set(CMAKE_ANDROID_NDK "$ENV{ANDROID_NDK_HOME}")
set(CMAKE_ANDROID_STL_TYPE c++_shared)

set(CMAKE_C_COMPILER "${CMAKE_ANDROID_NDK}/toolchains/llvm/prebuilt/linux-x86_64/bin/aarch64-linux-android31-clang")
set(CMAKE_CXX_COMPILER "${CMAKE_ANDROID_NDK}/toolchains/llvm/prebuilt/linux-x86_64/bin/aarch64-linux-android31-clang++")
```

### Embedded ARM Toolchain (Bare Metal)

```cmake
# cmake/toolchain-arm-cortex-m4.cmake
set(CMAKE_SYSTEM_NAME Generic)
set(CMAKE_SYSTEM_PROCESSOR arm)

set(CMAKE_C_COMPILER arm-none-eabi-gcc)
set(CMAKE_CXX_COMPILER arm-none-eabi-g++)
set(CMAKE_ASM_COMPILER arm-none-eabi-gcc)

set(CMAKE_FIND_ROOT_PATH_MODE_PROGRAM NEVER)
set(CMAKE_FIND_ROOT_PATH_MODE_LIBRARY ONLY)
set(CMAKE_FIND_ROOT_PATH_MODE_INCLUDE ONLY)

# Bare metal: no OS, no standard library
set(CMAKE_TRY_COMPILE_TARGET_TYPE STATIC_LIBRARY)
```

### macOS Cross-Compilation to iOS

```cmake
# cmake/toolchain-ios.cmake
set(CMAKE_SYSTEM_NAME iOS)
set(CMAKE_OSX_DEPLOYMENT_TARGET 15.0)

set(CMAKE_C_COMPILER xcrun -sdk iphoneos clang)
set(CMAKE_CXX_COMPILER xcrun -sdk iphoneos clang++)

set(CMAKE_OSX_ARCHITECTURES arm64)
```

## 6. Preset Conditions

CMake 3.24+ supports **conditions** on presets, allowing the same preset file to work across
different platforms by selectively enabling or disabling presets:

```json
{
  "version": 6,
  "configurePresets": [
    {
      "name": "linux-base",
      "hidden": true,
      "condition": {
        "type": "equals",
        "lhs": "${hostSystemName}",
        "rhs": "Linux"
      },
      "generator": "Ninja",
      "cacheVariables": {
        "CMAKE_BUILD_TYPE": "Release"
      }
    },
    {
      "name": "windows-base",
      "hidden": true,
      "condition": {
        "type": "equals",
        "lhs": "${hostSystemName}",
        "rhs": "Windows"
      },
      "generator": "Ninja Multi-Config",
      "cacheVariables": {
        "CMAKE_CXX_STANDARD": "23"
      }
    },
    {
      "name": "dev",
      "inherits": ["linux-base", "windows-base"],
      "cacheVariables": {
        "ENABLE_TESTS": "ON"
      }
    }
  ]
}
```

### Condition Types

| Type        | Description        | Example                    |
| :---------- | :----------------- | :------------------------- |
| `equals`    | String equality    | lhs equals rhs             |
| `notEquals` | String inequality  | lhs not equal to rhs       |
| `matches`   | Regex match        | lhs matches regex pattern  |
| `inList`    | Member of list     | lhs is in rhs (JSON array) |
| `notInList` | Not member of list | lhs is not in rhs          |
| `allOf`     | Logical AND        | All nested conditions true |
| `anyOf`     | Logical OR         | Any nested condition true  |
| `not`       | Logical NOT        | Negated condition          |

## 7. Environment Variables in Presets

Presets can set environment variables for the scope of CMake invocation. This is critical for
configuring tool paths without polluting the user's shell:

```json
{
  "version": 6,
  "configurePresets": [
    {
      "name": "ccache-debug",
      "inherits": "linux-clang-debug",
      "environment": {
        "CCACHE_DIR": "${sourceDir}/.ccache",
        "CCACHE_MAXSIZE": "5G"
      },
      "cacheVariables": {
        "CMAKE_C_COMPILER_LAUNCHER": "ccache",
        "CMAKE_CXX_COMPILER_LAUNCHER": "ccache"
      }
    }
  ]
}
```

The `environment` block sets variables only during CMake execution. They do not leak into the user's
shell or into subsequent build steps (unless the build system propagates them).

### Variable Expansion

Preset files support variable expansion using `${}`:

| Variable             | Description                                          |
| :------------------- | :--------------------------------------------------- |
| `${sourceDir}`       | Path to the directory containing `CMakePresets.json` |
| `${sourceParentDir}` | Parent of `sourceDir`                                |
| `${presetName}`      | Name of the current preset                           |
| `${hostSystemName}`  | OS name (Linux, Windows, Darwin)                     |
| `${fileDir}`         | Directory of the preset file                         |
| `$env{VAR}`          | Environment variable from the host                   |

## 8. Install and Package Presets

CMake 3.25+ supports **install presets** and **package presets** for standardizing the install and
CPack workflows:

```json
{
  "version": 6,
  "installPresets": [
    {
      "name": "local",
      "configurePreset": "linux-clang-release",
      "destination": "${sourceDir}/install",
      "prefix": "${sourceDir}/install"
    }
  ],
  "packagePresets": [
    {
      "name": "deb",
      "configurePreset": "linux-clang-release",
      "generators": ["DEB"],
      "configurations": ["Release"]
    },
    {
      "name": "tgz",
      "configurePreset": "linux-clang-release",
      "generators": ["TGZ"],
      "configurations": ["Release"]
    }
  ]
}
```

Usage:

```bash
cmake --install --preset local
cpack --preset deb
cpack --preset tgz
```

## 9. Preset Schema Versioning

The `version` field in `CMakePresets.json` determines which features are available:

| Version | Minimum CMake | Key Features                                               |
| :------ | :------------ | :--------------------------------------------------------- |
| 1       | 3.19          | Basic configure presets                                    |
| 2       | 3.20          | Build presets                                              |
| 3       | 3.21          | Test presets, environment                                  |
| 4       | 3.21          | Include files                                              |
| 5       | 3.24          | Conditions, install presets                                |
| 6       | 3.25          | Package presets, configure preset `inherits` from multiple |

### Preset Include Files

For large projects, presets can be split across multiple files using the `include` field:

```json
{
  "version": 6,
  "include": ["cmake/presets/base.json", "cmake/presets/linux.json", "cmake/presets/windows.json"],
  "configurePresets": [
    {
      "name": "dev",
      "inherits": "linux-debug"
    }
  ]
}
```

The included files must have `"version"` and `"configurePresets"` (or `"buildPresets"`, etc.) at the
top level. Included presets are merged into the including file's namespace.

## Architectural Best Practices

1. **Decouple OS from Logic:** Do not use `if(WIN32)` logic inside `CMakeLists.txt` for compiler
   flags. Use distinct Toolchain files or Presets for Windows vs Linux.
2. **Single Source of Truth:** CI pipelines (GitHub Actions, Jenkins) should run the exact same
   Preset command that developers run locally.
   - _Bad CI:_ `run: cmake . -DCMAKE_BUILD_TYPE=Release`
   - _Good CI:_ `run: cmake --preset ci-release`
3. **Sanitizers as Presets:** Create dedicated presets for Address Sanitizer (ASan) and Thread
   Sanitizer (TSan). This makes running a sanitized build as easy as `cmake --preset asan`.

## Common Pitfalls

### 1. `binaryDir` Collisions

If two presets use the same `binaryDir`, switching between them corrupts the CMake cache. Always
include `${presetName}` in the `binaryDir`:

```json
{
  "name": "bad-debug",
  "binaryDir": "${sourceDir}/build"
}
// BAD: debug and release both use the same directory

{
  "name": "good-debug",
  "binaryDir": "${sourceDir}/build/${presetName}"
}
// GOOD: each preset gets its own directory
```

### 2. Toolchain File Path in User Presets

If a user preset overrides `CMAKE_TOOLCHAIN_FILE` via `cacheVariables`, it takes precedence over the
shared preset's `toolchainFile` field. This is correct behavior but can be confusing. Use
`toolchainFile` in the user preset instead of `cacheVariables` for clarity.

### 3. Preset Inheritance Chain Length

Deeply nested inheritance (A inherits B inherits C inherits D) makes debugging difficult. Limit
inheritance to 2-3 levels. Use `include` files for organization rather than deep inheritance chains.

### 4. Condition Evaluation Errors

Conditions reference variables like `${hostSystemName}`. If a preset with a condition has a typo or
references an undefined variable, CMake silently skips the preset (it evaluates the condition as
false). Use `cmake --list-presets` to verify that all expected presets are visible.

### 5. `CMAKE_BUILD_TYPE` vs Multi-Config Generators

Single-config generators (Ninja, Unix Makefiles) require `CMAKE_BUILD_TYPE` to be set. Multi-config
generators (Visual Studio, Ninja Multi-Config) ignore `CMAKE_BUILD_TYPE` and use the `--config` flag
instead. If you target both platforms, use generator-specific presets:

```json
{
  "name": "linux-release",
  "generator": "Ninja",
  "cacheVariables": {
    "CMAKE_BUILD_TYPE": "Release"
  }
},
{
  "name": "windows-release",
  "generator": "Ninja Multi-Config",
  "buildPresets": [
    {
      "name": "windows-release",
      "configuration": "Release"
    }
  ]
}
```
