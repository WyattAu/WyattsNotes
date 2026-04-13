---
title: Build Caching
date: 2025-12-10T06:21:00.670Z
tags:
  - cpp
categories:
  - cpp
slug: build-caching
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

Compiling C++ is computationally expensive. Each Translation Unit (TU) must be preprocessed, parsed
into an Abstract Syntax Tree (AST), optimized, and assembled into machine code. In a typical
workflow, changing a single header file can force the recompilation of hundreds of source files.

**Build Caching** intercepts compiler calls. It hashes the inputs (source code, compiler flags, and
environment variables). If a hash matches an entry in the local or remote cache, the compilation
step is skipped entirely, and the cached object file is retrieved. This results in **zero-cost
compilation** for unchanged units.

## 1. The Caching Landscape

### 1.1 CCache (Compiler Cache)

- **Architecture:** Local filesystem cache.
- **Support:** GCC, Clang.
- **Platform:** Linux, macOS, MinGW.
- **Mechanism:**
  - **Preprocessor Mode:** Runs the preprocessor (`-E`) and hashes the output. Accurate but slower.
  - **Direct Mode:** Hashes the source file stats and includes. Fast but requires strict header
    hygiene.

### 1.2 Sccache (Shared Compiler Cache)

- **Maintainer:** Mozilla.
- **Architecture:** Local or **Distributed** (S3, GCS, Azure, Redis).
- **Support:** GCC, Clang, **MSVC**.
- **Mechanism:** Written in Rust, designed specifically for CI/CD environments where ephemeral build
  agents need access to a shared cache. It effectively supports Microsoft's PDB generation
  constraints.

### 1.3 BuildCache

- **Architecture:** Local or remote (HTTP/S3-compatible).
- **Support:** GCC, Clang, MSVC.
- **Mechanism:** Written in Rust. Key differentiator: supports **remote execution** of compiler
  jobs, not just cache storage. Can distribute compilation across the network.

### 1.4 Bazel / bazel-remote

- **Architecture:** Content-addressable cache with remote backends.
- **Mechanism:** Bazel builds include caching as a first-class concept. The `bazel-remote` project
  provides a gRPC/HTTP cache server. Bazel's caching is fine-grained — it caches individual build
  actions, not just compiler invocations.

### Comparison Table

| Feature             | CCache          | Sccache        | BuildCache   | Bazel          |
| :------------------ | :-------------- | :------------- | :----------- | :------------- |
| Language            | C/C++           | C/C++, Rust    | C/C++, Rust  | Any (Starlark) |
| Remote backend      | No (local only) | S3, GCS, Azure | HTTP, S3     | gRPC, HTTP     |
| MSVC support        | No              | Yes            | Yes          | Via rules_msvc |
| Remote execution    | No              | No             | Yes          | Yes            |
| Cache key           | Content hash    | Content hash   | Content hash | Content hash   |
| Precompiled headers | Limited         | Yes            | Yes          | Yes            |
| Locking             | Filesystem      | Internal       | Internal     | Internal       |

## 2. Installation

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

## 3. How Caching Works: Hash Computation

The cache key is a cryptographic hash of all inputs that affect compilation output. Understanding
what goes into this hash is critical for debugging cache misses.

### CCache Preprocessor Mode

In preprocessor mode, ccache runs the full preprocessor and hashes the resulting `.i` file plus the
compiler flags. The hash input is:

$$
\text{hash} = H(\text{preprocessed source}, \text{compiler path}, \text{flags}, \text{include paths})
$$

This is robust but slow: preprocessing can take 30-50% of total compilation time for heavily
templated C++ code.

### CCache Direct Mode

In direct mode, ccache hashes the source file directly and recursively hashes all `#include`d
headers using their file content (not preprocessor output). It falls back to preprocessor mode if it
detects macros that might affect the output (e.g., `#define` in the including file).

$$
\text{hash} = H(\text{source}, \{H(\text{header}_1), H(\text{header}_2), \ldots\}, \text{flags})
$$

Direct mode is significantly faster but can produce false positives (cache hits when the output
would differ) if the compiler's include resolution differs from ccache's. The `-o` flag in direct
mode sets the level of safety.

### Proof of Cache Correctness

**Claim:** If the cache key matches, the cached object file is semantically identical to the output
of a fresh compilation.

**Proof:**

1. The cache key is a cryptographic hash (SHA-256 in ccache) of all inputs that affect compilation
   output: source code content, all included header content, compiler flags, compiler binary path,
   and the compiler's output of `--version`.
2. A cryptographic hash function $H$ has the property that $H(x) = H(y) \implies x = y$ (collision
   resistance). In practice, SHA-256 has no known collisions.
3. If the cache key for the current compilation matches a stored key, then by collision resistance,
   all inputs are identical.
4. Compilation is a deterministic function of its inputs (source, flags, compiler binary).
   Therefore, the output must be identical. QED.

**Caveat:** This proof assumes the compiler itself is deterministic. In practice, compilers can
produce non-deterministic output due to:

- Hash randomization (e.g., `-frandom-seed` or missing `-fno-guess-branch-probability`).
- Parallel compilation with shared file system state.
- Address Space Layout Randomization (ASLR) affecting debug info.

These sources of non-determinism must be controlled for the cache to be correct.

## 4. CMake Integration

Modern CMake (3.4+) supports caching via the `<LANG>_COMPILER_LAUNCHER` property. This injects the
caching tool command _before_ the compiler command in the build system execution.

### Strategy 1: Global Configuration (User-Level)

Do not modify the project `CMakeLists.txt`. Instead, modify the **CMake Preset** or pass the flag
during configuration. This ensures developers who lack caching tools can still build the project.

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

### Strategy 3: Per-Target Caching

Not all targets benefit equally from caching. Frequently-modified targets may not see cache hits at
all, while stable dependency targets benefit enormously. You can selectively enable caching:

```cmake
# Only cache compilation of third-party dependencies
if(NOT PROJECT_IS_TOP_LEVEL)
    find_program(CCACHE_PROGRAM ccache)
    if(CCACHE_PROGRAM)
        set(CMAKE_CXX_COMPILER_LAUNCHER "${CCACHE_PROGRAM}")
    endif()
endif()
```

## 5. Configuring Sccache for MSVC

MSVC presents a unique challenge due to **PDB (Program Database)** generation. Standard PDB
generation (`/Zi`) is stateful and not thread-safe for distributed caching.

To use Sccache with MSVC effectively:

1. **Force Embedded Debug Info (`/Z7`):** This embeds debug info into the `.obj` files rather than a
   separate `.pdb` during compilation.
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

## 6. Architectural Considerations for CI/CD

In Continuous Integration, build agents start with a clean filesystem. Without a remote cache,
`ccache` is useless because the cache directory is empty.

### 6.1 Local Cache Restoration (GitHub Actions/GitLab CI)

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

### 6.2 Remote Backend (Sccache)

For large teams, a centralized S3 bucket ensures that if _Developer A_ compiles a file, _Developer
B_ (and the CI agent) gets the cached object immediately.

**Configuration:** Set environment variables before running the build.

```bash
export SCCACHE_BUCKET="my-company-build-cache"
export AWS_ACCESS_KEY_ID="..."
export AWS_SECRET_ACCESS_KEY="..."

# Sccache automatically detects the S3 config and writes there
sccache --start-server
```

### 6.3 Redis Backend (Sccache)

For on-premise infrastructure, Redis provides a low-latency cache backend:

```bash
export SCCACHE_REDIS="redis://cache.internal:6379"
sccache --start-server
```

### 6.4 Azure Blob Storage

```bash
export SCCACHE_AZURE_BLOB_CONNECTION_STRING="..."
sccache --start-server
```

## 7. Cache Eviction and Size Management

Caches grow without bound unless explicitly managed. Each cached object is typically 100 KB to 10 MB
depending on the translation unit. A large C++ project with 500 TUs can easily consume 2-5 GB of
cache.

### CCache Size Configuration

```bash
# Set maximum cache size to 10 GB
ccache -M 10G

# Set maximum number of files
ccache -F 50000

# Clear the cache entirely
ccache -C

# View current statistics
ccache -s
```

### Sccache Size Configuration

```bash
# Sccache uses a configurable cache size (default 10 GB)
sccache --set-max-size 10G
```

### LRU vs Content-Addressable Eviction

Both ccache and sccache use content-addressable storage: the cache key is a hash of the input, and
the value is the output object file. When the cache exceeds its size limit, both tools use an LRU
(Least Recently Used) eviction policy. This means infrequently used cache entries are evicted first,
which is generally optimal for development workflows.

**Proof that LRU is optimal for development:**

1. In a development workflow, recently compiled files are the most likely to be recompiled (you are
   working on them).
2. Files that have not been accessed in a long time are unlikely to be recompiled soon.
3. LRU evicts the least recently accessed entries, preserving the entries most likely to be needed.
4. This is an instance of the **stack algorithm** (Belady's optimal page replacement), which is
   optimal for the class of workloads where future accesses follow a recency pattern. QED.

## 8. Verification

To ensure caching is active and effective, inspect the statistics.

**CCache:**

```bash
ccache -s
```

_Look for "Cache Hit Rate". Ideally, this is &gt;90% on incremental builds._

**Sccache:**

```bash
sccache -s
```

### Interpreting CCache Statistics

```
cache directory                     /home/user/.ccache
primary config                      /home/user/.ccache/ccache.conf
secondary config      (readonly)    /etc/ccache.conf
stats updated                       Fri Apr  4 12:00:00 2026
cache hit (direct)                  1234
cache hit (preprocessed)            56
cache miss                          89
cache hit ratio                     93.53%
called for link                     12
compile failed                      3
preprocessor error                  1
unsupported source language         0
no input file                       0
cleanups performed                  0
files in cache                      10234
cache size                          4.2 GB
max cache size                      10.0 GB
```

Key fields:

- **cache hit (direct):** Direct mode hit — fastest path, no preprocessing.
- **cache hit (preprocessed):** Preprocessed mode hit — slower but still avoids compilation.
- **cache miss:** Input was not in cache, full compilation occurred.
- **cache hit ratio:** Below 80% suggests something is defeating the cache (see pitfalls).

## 9. Incremental vs Clean Builds

### Incremental Builds

An incremental build recompiles only the translation units whose dependencies have changed. The
build system tracks file modification times and recompiles when a source or header is newer than the
corresponding object file.

### Clean Builds (`cmake --fresh`)

CMake 3.25+ supports `cmake --fresh` which re-runs the configure step from scratch, then performs a
clean build. This is useful when the build system state is corrupted or when switching branches with
significant CMake changes:

```bash
cmake --fresh -S . -B build
cmake --build build
```

### Build Reproducibility

A build is reproducible if the same source code, compiler, and flags produce byte-identical output
every time. Reproducibility is a prerequisite for effective caching:

```bash
# Ensure reproducible builds
cmake -DCMAKE_CXX_FLAGS="-fdebug-prefix-map=${PWD}=." \
      -DCMAKE_C_FLAGS="-fdebug-prefix-map=${PWD}=." \
      -B build
```

Key factors that affect reproducibility:

1. **Timestamps in debug info:** Use `-fdebug-prefix-map` to strip absolute paths.
2. **`__TIME__` and `__DATE__`:** Avoid using these macros; use build-system-provided version info.
3. **Random seeds:** Use `-frandom-seed=0` or `-fno-guess-branch-probability`.
4. **File system ordering:** Some build systems iterate over files in directory order, which varies
   across platforms.

## Common Pitfalls

### 1. Timestamp Mismatches

If the build system touches files without changing content, ccache might miss. This happens when
build systems regenerate headers or configuration files on every invocation.

**Diagnosis:** Use `ccache -s` to monitor hit rates. If the miss rate is unexpectedly high, check
for files being regenerated with identical content.

**Fix:** Use `ccache -C` to clear the cache and rebuild. Ensure build systems don't regenerate files
unnecessarily.

### 2. `__TIME__` and `__DATE__` Macros

Using `__TIME__` or `__DATE__` in source code defeats caching because the preprocessor output
changes every second.

```cpp
// BAD: Changes every compilation
const char* build_time = __TIME__;

// GOOD: Use a build-system-provided definition that only changes when the build ID changes
const char* build_id = BUILD_VERSION;
```

**Fix:** Pass version information via compiler definitions (`-DBUILD_VERSION="1.2.3"`) that only
change on actual releases.

### 3. Absolute Paths in Debug Symbols

Debug symbols often contain absolute paths. Use `-fdebug-prefix-map` (GCC/Clang) to map local paths
to generic ones to improve cache sharing across different users.

```bash
cmake -DCMAKE_CXX_FLAGS="-fdebug-prefix-map=${PWD}=." -B build
```

### 4. Random or Non-Deterministic Code

Code that includes random elements (UUIDs, timestamps in generated code) produces different output
on every compilation. Isolate such code into separate translation units that are not cached.

### 5. `__FILE__` Macro

The `__FILE__` macro expands to the source file path, which varies between build directories. Use
`-fmacro-prefix-map` to normalize:

```bash
cmake -DCMAKE_CXX_FLAGS="-fmacro-prefix-map=${PWD}=src" -B build
```

### 6. Non-Reproducible Builds

If different compilers or compiler versions are used (e.g., GCC 12 on one machine, GCC 13 on
another), the cached objects are incompatible. Ensure all cache participants use the same compiler
version.

### 7. Cache Poisoning

If a compilation succeeds but produces a corrupted object file (due to a compiler bug, filesystem
error, or OOM during compilation), the corrupted output is cached. Subsequent cache hits will
retrieve the corrupted object. Mitigation:

1. Use `ccache -C` to clear the cache when you suspect corruption.
2. Monitor build failures for patterns that suggest cache corruption.
3. Use sccache with a remote backend that can be purged centrally.

## 10. Distributed Caching Architecture

For large organizations, a centralized cache provides the greatest benefit. The typical architecture
is:

```
Developer A ──┐                    ┌── CI Agent 1
Developer B ──┼── S3 Bucket ──────┼── CI Agent 2
Developer C ──┘   (cache backend)  └── CI Agent 3
```

### Cost Analysis

Cached compilation costs approximately USD 0.02 per GB per month on S3 (Standard storage). For a 50
GB cache accessed by 100 developers, the monthly storage cost is approximately USD 1.00. The
bandwidth costs for cache reads depend on hit rate and team size, but are typically under USD
10/month for a medium-sized team. This is negligible compared to developer time saved.

### Cache Warmup Strategy

When onboarding a new developer or setting up a new CI runner, the cache is cold (empty). To warm
the cache:

1. Run a full clean build on one machine.
2. The cache is now populated with all object files.
3. All subsequent builds (by any agent) will hit the cache.

```bash
# Full clean build to warm the cache
cmake --build build --clean-first
ccache -s  # Verify cache is populated
```

### Cache Partitioning Strategy

For organizations with many independent projects, a single monolithic cache can grow unboundedly.
Partition the cache by project or team:

```bash
# Per-project cache directory
export CCACHE_DIR="/mnt/cache/${PROJECT_NAME}"
export CCACHE_MAXSIZE=20G
```

This prevents one project's cache from evicting another project's entries.

## 11. Advanced: CCache Sloppiness

The `CCACHE_SLOPPINESS` environment variable relaxes ccache's strictness, trading correctness for
higher hit rates. Use with extreme caution:

```bash
# Allow caching even when __TIME__, __DATE__, or __FILE__ change
export CCACHE_SLOPPINESS="time_macros,include_file_mtime,include_file_ctime,file_macro"
```

Available sloppiness options:

- `time_macros`: Ignore `__TIME__` and `__DATE__` changes.
- `file_macro`: Ignore `__FILE__` path differences.
- `include_file_mtime`: Ignore header modification time changes.
- `pch_defines`: Ignore differences in precompiled header defines.
- `locale`: Ignore locale settings (affects string literals in some locales).
- `system_headers`: Don't hash system headers (risky — system header updates won't invalidate
  cache).

### When to Use Sloppiness

Sloppiness should be used only as a last resort. Each option trades correctness for hit rate:

- `time_macros`: Safe if your build timestamps are not embedded in the binary for auditing.
- `file_macro`: Safe if you do not use `__FILE__` for logging or error reporting.
- `system_headers`: Dangerous. A system header update (e.g., glibc security patch) will not
  invalidate the cache, potentially building against an outdated header.

## 12. CCache Configuration File

For persistent configuration, create `~/.ccache/ccache.conf`:

```
max_size = 10G
max_files = 50000
temporary_dir = /tmp/ccache-tmp
compression = true
compression_level = 6
```

The `compression` option reduces disk usage at the cost of slight CPU overhead. For SSD-based
systems, the I/O savings usually outweigh the compression cost.

### CCache Environment Variables

| Variable               | Purpose                                            | Default          |
| :--------------------- | :------------------------------------------------- | :--------------- |
| `CCACHE_DIR`           | Cache storage directory                            | `~/.ccache`      |
| `CCACHE_MAXSIZE`       | Maximum cache size                                 | 5G               |
| `CCACHE_MAXFILES`      | Maximum number of cache files                      | Unlimited        |
| `CCACHE_TEMPDIR`       | Temporary directory for in-progress operations     | `CCACHE_DIR/tmp` |
| `CCACHE_COMPRESS`      | Enable/disable compression                         | `false`          |
| `CCACHE_COMPRESSLEVEL` | Compression level (1-9)                            | 6                |
| `CCACHE_SLOPPINESS`    | Relax correctness checks for higher hit rates      | (empty)          |
| `CCACHE_DEBUG`         | Enable debug logging                               | (disabled)       |
| `CCACHE_LOGFILE`       | Log file path                                      | (stderr)         |
| `CCACHE_NOHASHDIR`     | Ignore directory components in the hash            | `false`          |
| `CCACHE_PREFIX_KEY`    | Additional hash key (e.g., compiler flags)         | (empty)          |
| `CCACHE_BASEDIR`       | Base directory for path normalization              | (empty)          |
| `CCACHE_DISABLE`       | Disable ccache entirely (pass through to compiler) | `false`          |

### CCache with Precompiled Headers

Precompiled headers (PCH) complicate caching because the PCH file depends on the same headers as the
TU, and the cache key must account for this dependency. ccache supports PCH caching with the
`pch_defines` sloppiness option and by detecting `#include` of PCH files:

```bash
# Enable PCH-aware caching
export CCACHE_SLOPPINESS="pch_defines"
```

Without this sloppiness, changes to the PCH defines may not properly invalidate the cache for TUs
that include the PCH.

## 13. Sccache Advanced Configuration

### Sccache Statistics

```bash
sccache -s
```

Output example:

```
Compile requests                     1234
Compile requests executed            800
Cache hits                           600
Cache misses                         200
Cache timeouts                       0
Cache read errors                    0
Forced recaches                      0
Cache write errors                   0
Compilation failures                 5
Cache errors                         0
Average cache write rate             12.5 MiB/s
Average cache read rate              85.2 MiB/s
Cache location                      Local disk: /home/user/.cache/sccache
```

### Sccache and Rust

sccache also caches Rust compilation (cargo). This makes it useful for mixed C++/Rust projects:

```bash
export RUSTC_WRAPPER=sccache
cargo build
```

### Sccache Debugging

When sccache produces unexpected cache misses, enable debug logging:

```bash
SCCACHE_LOG=debug sccache --start-server
# Check the log:
journalctl --user -u sccache  # or check stderr
```

Common causes of unexpected misses:

1. Different compiler flags between invocations (e.g., different `-D` definitions).
2. Different compiler binary path (e.g., `/usr/bin/cc` vs `/usr/bin/gcc`).
3. File content differences in headers (even whitespace changes).
4. Environment variables that affect compilation (e.g., `LC_ALL`).

## 14. Build Caching and Reproducibility

### Reproducible Builds: Formal Requirements

A build is reproducible if, given the same source code, compiler, flags, and toolchain, the output
is byte-identical every time. This is a prerequisite for meaningful caching in a distributed
environment.

The following conditions must hold for reproducible builds:

1. **Deterministic compiler output:** The compiler must produce the same object file given the same
   inputs. Use `-frandom-seed=0` to disable randomization in GCC/Clang.
2. **Deterministic file ordering:** Filesystem iteration order must not affect the build. Use
   `-DCMAKE_EXPORT_COMPILE_COMMANDS=ON` to ensure deterministic TU ordering.
3. **No timestamps in output:** Avoid `__TIME__`, `__DATE__`, and similar macros. Use build-system-
   provided version definitions.
4. **No absolute paths in debug info:** Use `-fdebug-prefix-map` and `-fmacro-prefix-map`.
5. **Same compiler version:** All cache participants must use the exact same compiler version.

### Verifying Reproducibility

```bash
# Build twice and compare
cmake --build build1
cp -r build1 build2
rm -rf build2/**/*.o
cmake --build build2
diff <(find build1 -name '*.o' -exec md5sum {} \; | sort) \
     <(find build2 -name '*.o' -exec md5sum {} \; | sort)
```

If the diff is empty, the builds are reproducible. Any difference indicates a source of
non-determinism that will cause cache misses in a distributed environment.

## See Also

- [CMake Presets and Toolchain Files](../2_build_system/3_cmake_presets_and_toolchain_files.md)
- [Ninja and Parallelism](../2_build_system/2_ninja_and_parallelism.md)
