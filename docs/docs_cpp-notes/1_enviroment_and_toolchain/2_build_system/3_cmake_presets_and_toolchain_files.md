---
title: CMake Presets and Toolchain Files
date: 2025-12-10T06:16:47.022Z
tags:
  - cpp
categories:
  - cpp
slug: cmake-presets-toolchain-files
---

A major challenge in C++ systems engineering is **Build Reproducibility**. A developer on Linux, a developer on Windows, and a CI/CD agent should all generate the build environment using the exact same logic.

Reliance on "magic" shell scripts (`build.sh`, `configure.bat`) or lengthy command-line arguments is an anti-pattern. Modern CMake resolves this through two architectural components:

1. **Toolchain Files:** Define **WHAT** tools are used (Compilers, Sysroot, Target Architecture).
2. **CMake Presets:** Define **HOW** the build is configured (Generator, Flags, Output Directories, Environment Variables).

## 1. Toolchain Files (`*.cmake`)

As introduced in Module 1.4, the Toolchain File sets up the build environment _before_ the project configuration runs. It is strict about **compiler selection**.

While toolchain files are mandatory for cross-compilation, they are also Best Practice for enforcing specific compiler versions on local machines (e.g., forcing Clang 17 over the system GCC).

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

---

## 2. CMake Presets (`CMakePresets.json`)

Introduced in CMake 3.19, `CMakePresets.json` is a standard JSON format that replaces command-line arguments. It allows you to check your build configurations into version control.

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

- **`binaryDir`**: Defines where artifacts go. Using `${sourceDir}/build/${presetName}` ensures separate folders for Debug and Release builds, preventing cache corruption.
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

- **VS Code (CMake Tools):** The bottom status bar allows selecting a Configure Preset and a Build Preset from a dropdown list.
- **Visual Studio 2022:** Native support. Presets appear in the configuration dropdown.
- **CLion:** Automatically imports presets into run configurations.

## 4. User-Specific Presets

`CMakePresets.json` is meant to be committed to Git. However, developers often have local paths that differ (e.g., where `vcpkg` is installed).

**`CMakeUserPresets.json`** is the solution.

- It has the same format as `CMakePresets.json`.
- It is implicitly included by CMake.
- It **must be added to `.gitignore`**.

### Example: Local Vcpkg Override

A developer can create `CMakeUserPresets.json` to inject their local vcpkg path without modifying the shared project file.

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

## Architectural Best Practices

1. **Decouple OS from Logic:** Do not use `if(WIN32)` logic inside `CMakeLists.txt` for compiler flags. Use distinct Toolchain files or Presets for Windows vs Linux.
2. **Single Source of Truth:** CI pipelines (GitHub Actions, Jenkins) should run the exact same Preset command that developers run locally.
   - _Bad CI:_ `run: cmake . -DCMAKE_BUILD_TYPE=Release`
   - _Good CI:_ `run: cmake --preset ci-release`
3. **Sanitizers as Presets:** Create dedicated presets for Address Sanitizer (ASan) and Thread Sanitizer (TSan). This makes running a sanitized build as easy as `cmake --preset asan`.
