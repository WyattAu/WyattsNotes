---
title: Build Caching
date: 2025-12-10T06:21:00.670Z
tags:
  - cpp
categories:
  - cpp
slug: build-caching
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Compiling C++ is computationally expensive. Each Translation Unit (TU) must be preprocessed, parsed into an Abstract Syntax Tree (AST), optimized, and assembled into machine code. In a typical workflow, changing a single header file can force the recompilation of hundreds of source files.

**Build Caching** intercepts compiler calls. It hashes the inputs (source code, compiler flags, and environment variables). If a hash matches an entry in the local or remote cache, the compilation step is skipped entirely, and the cached object file is retrieved. This results in **zero-cost compilation** for unchanged units.

## The Caching Landscape

### 1. CCache (Compiler Cache)

- **Architecture:** Local filesystem cache.
- **Support:** GCC, Clang.
- **Platform:** Linux, macOS, MinGW.
- **Mechanism:**
  - **Preprocessor Mode:** Runs the preprocessor (`-E`) and hashes the output. Accurate but slower.
  - **Direct Mode:** Hashes the source file stats and includes. Fast but requires strict header hygiene.

### 2. Sccache (Shared Compiler Cache)

- **Maintainer:** Mozilla.
- **Architecture:** Local or **Distributed** (S3, GCS, Azure, Redis).
- **Support:** GCC, Clang, **MSVC**.
- **Mechanism:** Written in Rust, designed specifically for CI/CD environments where ephemeral build agents need access to a shared cache. It effectively supports Microsoft's PDB generation constraints.

## Installation

### CCache

<Tabs>
  <TabItem value="linux" label="Linux" default>

```bash
# Debian/Ubuntu
sudo apt install ccache

# Arch Linux
sudo pacman -S ccache

# Fedora
sudo dnf install ccache
```

  </TabItem>
  <TabItem value="macos" label="macOS">

```bash
brew install ccache
```

  </TabItem>
  <TabItem value="windows" label="Windows (MSYS2)">

```bash
pacman -S mingw-w64-ucrt-x86_64-ccache
```

  </TabItem>
</Tabs>

### Sccache

Sccache is recommended for Windows (MSVC) users or distributed CI pipelines.

<Tabs>
  <TabItem value="windows" label="Windows">

```powershell
# Via Scoop
scoop install sccache

# Via Cargo (Rust Package Manager)
cargo install sccache
```

  </TabItem>
  <TabItem value="linux" label="Linux/macOS">

```bash
# Via Brew
brew install sccache

# Via Cargo
cargo install sccache
```

  </TabItem>
</Tabs>

## CMake Integration

Modern CMake (3.4+) supports caching via the `<LANG>_COMPILER_LAUNCHER` property. This injects the caching tool command _before_ the compiler command in the build system execution.

### Strategy 1: Global Configuration (User-Level)

Do not modify the project `CMakeLists.txt`. Instead, modify the **CMake Preset** or pass the flag during configuration. This ensures developers who lack caching tools can still build the project.

**Using CMake Presets (`CMakePresets.json`):**

```json
{
  "configurePresets": [
    {
      "name": "linux-clang-ccache",
      "inherits": "base",
      "cacheVariables": {
        "CMAKE_CXX_COMPILER_LAUNCHER": "ccache",
        "CMAKE_C_COMPILER_LAUNCHER": "ccache"
      }
    }
  ]
}
```

**Using Command Line:**

```bash
cmake -S . -B build -DCMAKE_CXX_COMPILER_LAUNCHER=ccache
```

### Strategy 2: Toolchain Injection

If using a toolchain file, you can enforce caching for the specific environment.

```cmake
find_program(CCACHE_PROGRAM ccache)
if(CCACHE_PROGRAM)
    set(CMAKE_CXX_COMPILER_LAUNCHER "${CCACHE_PROGRAM}")
    set(CMAKE_C_COMPILER_LAUNCHER "${CCACHE_PROGRAM}")
endif()
```

## Configuring Sccache for MSVC

MSVC presents a unique challenge due to **PDB (Program Database)** generation. Standard PDB generation (`/Zi`) is stateful and not thread-safe for distributed caching.

To use Sccache with MSVC effectively:

1. **Force Embedded Debug Info (`/Z7`):** This embeds debug info into the `.obj` files rather than a separate `.pdb` during compilation.
2. **Start the Server:** Sccache runs as a background daemon.

### CMake Configuration for MSVC/Sccache

```cmake
if(MSVC)
    # 1. Use /Z7 instead of /Zi to allow caching
    string(REPLACE "/Zi" "/Z7" CMAKE_CXX_FLAGS_DEBUG "${CMAKE_CXX_FLAGS_DEBUG}")
    string(REPLACE "/Zi" "/Z7" CMAKE_CXX_FLAGS_RELWITHDEBINFO "${CMAKE_CXX_FLAGS_RELWITHDEBINFO}")

    # 2. Set Launcher
    find_program(SCCACHE_PROGRAM sccache)
    if(SCCACHE_PROGRAM)
        set(CMAKE_CXX_COMPILER_LAUNCHER "${SCCACHE_PROGRAM}")
    endif()
endif()
```

### Running Sccache

Before building, start the daemon:

```bash
sccache --start-server
cmake --build build
```

## Architectural Considerations for CI/CD

In Continuous Integration, build agents start with a clean filesystem. Without a remote cache, `ccache` is useless because the cache directory is empty.

### 1. Local Cache Restoration (GitHub Actions/GitLab CI)

Most CI systems allow saving/restoring directories based on a key.

**GitHub Actions Example:**

```yaml
- name: Ccache Restore
  uses: actions/cache@v3
  with:
    path: ~/.ccache
    # Key includes OS and Compiler Version to prevent ABI mismatches
    key: ccache-${{ runner.os }}-${{ matrix.compiler }}-${{ github.sha }}
    restore-keys: |
      ccache-${{ runner.os }}-${{ matrix.compiler }}-
```

### 2. Remote Backend (Sccache)

For large teams, a centralized S3 bucket ensures that if _Developer A_ compiles a file, _Developer B_ (and the CI agent) gets the cached object immediately.

**Configuration:**
Set environment variables before running the build.

```bash
export SCCACHE_BUCKET="my-company-build-cache"
export AWS_ACCESS_KEY_ID="..."
export AWS_SECRET_ACCESS_KEY="..."

# Sccache automatically detects the S3 config and writes there
sccache --start-server
```

## Verification

To ensure caching is active and effective, inspect the statistics.

**CCache:**

```bash
ccache -s
```

_Look for "Cache Hit Rate". Ideally, this is >90% on incremental builds._

**Sccache:**

```bash
sccache -s
```

**Common Failure Modes:**

1. **Timestamp Mismatches:** If the build system touches files without changing content, ccache might miss.
2. **`__TIME__` Macros:** Using `__TIME__` or `__DATE__` in source code defeats caching because the preprocessor output changes every second.
3. **Absolute Paths:** Debug symbols often contain absolute paths. Use `-fdebug-prefix-map` (GCC/Clang) to map local paths to generic ones to improve cache sharing across different users.
