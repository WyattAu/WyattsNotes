---
title: Ninja Build System and Parrallelism
date: 2025-12-10T06:02:22.685Z
tags:
  - cpp
categories:
  - cpp
slug: ninja-build-system-parrallelism
---

The build system is responsible for orchestrating the execution of compilers, linkers, and custom
commands to transform source code into artifacts. While CMake generates the build instructions, it
does not execute them.

**Ninja** is a small build system with a specific focus on speed. It differs from the legacy **GNU
Make** by lacking high-level language features (conditionals, loops). Instead, it relies on a build
generator (CMake) to produce a low-level dependency graph (the `build.ninja` file), which Ninja
executes with minimal overhead.

## Architectural Advantages over Make

Legacy build systems like Make typically perform "Recursive Make," where a Makefile invokes other
Makefiles in subdirectories. This creates fragmented dependency graphs, preventing the build system
from seeing the global state of the build.

Ninja operates on a **Single Global Dependency Graph**.

1. **Zero-Overhead Startup:** Ninja uses a custom binary format for its dependency database
   (`.ninja_deps`). It can load dependency graphs of 100,000+ nodes in sub-second time, whereas Make
   builds parse text files recursively, leading to significant I/O latency.
2. **Global Parallelism:** Because Ninja sees the entire graph, it can parallelize build steps
   across unrelated directories. Make can only parallelize within the current directory context.
3. **Dependency Handling:** Ninja understands compiler-emitted dependency information (header
   includes) natively, updating the dependency graph dynamically without full re-evaluation.

## Installation

Ensure Ninja is available in the system PATH.

### Windows (MSYS2 UCRT64)

```bash
pacman -S mingw-w64-ucrt-x86_64-ninja
```

### Linux

```bash
# Debian/Ubuntu
sudo apt install ninja-build

# RHEL/Fedora
sudo dnf install ninja-build

# Arch Linux
sudo pacman -S ninja
```

### macOS

```bash
brew install ninja
```

## CMake Integration

To use Ninja, the CMake Generator must be explicitly set.

### Command Line Invocation

Pass `-G Ninja` during the configuration step:

```bash
cmake -S . -B build -G Ninja
```

### Persistent Environment Configuration

To avoid typing `-G Ninja` repeatedly, set the `CMAKE_GENERATOR` environment variable.

**Linux/macOS (.bashrc / .zshrc):**

```bash
export CMAKE_GENERATOR="Ninja"
```

**Windows (PowerShell Profile):**

```powershell
$env:CMAKE_GENERATOR = "Ninja"
```

## Parallelism Control

Ninja defaults to running commands in parallel based on the number of logical CPU cores available
(typically $N + 2$ or $1.1 \times N$). However, blindly maximizing CPU usage can crash builds due to
memory exhaustion, particularly during the linking phase (LTO).

### 1. Manual Job Control (`-j`)

Override the automatic concurrency level:

```bash
# Limit to 4 concurrent jobs
cmake --build build -- -j 4
```

### 2. Load Balancing (`-l`) (Linux/macOS)

Ninja can verify the system load average before starting new jobs. If the load is too high, it
pauses.

```bash
# Do not start new jobs if system load > 12.0
ninja -l 12.0
```

### 3. CMake Job Pools (Architectural Control)

For large C++ projects, compiling is CPU-bound, but linking is Memory-bound. Running 32 concurrent
linkers will likely invoke the OOM (Out of Memory) killer on the OS.

CMake allows defining **Job Pools** to restrict concurrency for specific types of tasks (Compile vs.
Link).

#### Defining Pools in CMake

```cmake
cmake_minimum_required(VERSION 3.25)
project(HighPerfSystem)

# Define a property for the Ninja generator
# Syntax: name=concurrency
set_property(GLOBAL PROPERTY JOB_POOLS
    compile_pool=30
    link_pool=4
)

# Set default pools for all targets
set(CMAKE_JOB_POOL_COMPILE compile_pool)
set(CMAKE_JOB_POOL_LINK link_pool)

add_executable(App main.cpp huge.cpp)
```

In this configuration, Ninja will run up to 30 compilers simultaneously, but never more than 4
linkers, preventing memory exhaustion while maximizing CPU throughput.

## The `build.ninja` File

CMake generates a `build.ninja` file in the build directory. While not intended for manual editing,
understanding its structure helps in debugging build issues.

It consists of three primary constructs:

1. **Rules:** Definitions of how to run a command (e.g., how to run `clang++`).

   ```ninja
   rule CXX_COMPILER
     depfile = $DEP_FILE
     deps = gcc
     command = /usr/bin/clang++ $DEFINES $INCLUDES $FLAGS -MD -MT $out -MF $DEP_FILE -o $out -c $in
   ```

2. **Build Statements:** Specific edges in the dependency graph.

   ```ninja
   build CMakeFiles/App.dir/main.cpp.o: CXX_COMPILER ../main.cpp
     FLAGS = -std=c++23 -O3
     OBJECT_DIR = CMakeFiles/App.dir
   ```

3. **Phony Targets:** Aliases for convenience.

   ```ninja
   build all: phony CMakeFiles/App.dir/main.cpp.o
   build clean: phony CMakeFiles/clean.util
   ```

## Analyzing Build Performance

Ninja includes a tool to analyze the build log (`.ninja_log`), which records the start and end time
of every task.

### 1. Generate Build Trace

Use the chrome-tracing tool to visualize the build waterfall.

```bash
# Must run from the build directory
ninja -t chrome_profiler > trace.json
```

Load `trace.json` into `chrome://tracing` (or Edge) to identify bottlenecks (e.g., one specific file
taking 40 seconds to compile, blocking the linker).

### 2. Clean Dead Dependencies

Over time, the dependency log (`.ninja_deps`) can grow large. To compact it:

```bash
ninja -t recompact
```

## Ninja's Design Philosophy

Ninja was designed with a single goal: **minimize the time between "I changed a file" and "the build
result is ready"**. It achieves this through several architectural decisions.

### Minimal I/O

Ninja's primary performance advantage over Make is its approach to I/O:

1. **Binary dependency database.** Ninja stores dependency information in `.ninja_deps`, a compact
   binary format. Loading a dependency graph with 100,000+ nodes takes milliseconds, whereas Make
   parses text-based Makefiles recursively, incurring significant filesystem I/O.

2. **No globbing.** Ninja does not support `$(wildcard *.cpp)` or equivalent. All file lists must be
   explicitly enumerated in `build.ninja`. This means Ninja never scans directories — the build
   generator (CMake) does this once during configuration.

3. **No implicit rules.** Every build edge is explicitly stated. Ninja does not infer how to build a
   `.o` from a `.cpp` — the rule is written out verbatim for every file. This eliminates the
   pattern-matching overhead that Make performs on every build.

### Single Global Dependency Graph

Unlike recursive Make (where each subdirectory has its own Makefile with its own dependency graph),
Ninja operates on a **single flat dependency graph**. This means:

- Ninja can see all dependencies across the entire project.
- Parallelism is global: a file in `src/core/` and a file in `src/ui/` can compile simultaneously if
  they have no shared dependencies, regardless of directory structure.
- Incremental rebuilds are always correct: if `src/core/types.h` changes, Ninja knows exactly which
  `.cpp` files in any subdirectory depend on it.

### Build Correctness

Ninja guarantees correct incremental builds by tracking:

1. **File modification timestamps.** Ninja rebuilds a target if any of its inputs are newer than the
   output.
2. **Compiler-emitted dependencies.** When a source file `#include`s a header, the compiler records
   this dependency in a `.d` file. Ninja reads these `.d` files and integrates them into the graph.
3. **Command strings.** If the command used to build a target changes (e.g., different compiler
   flags), Ninja rebuilds the target even if the input file timestamps are unchanged.

## The `.ninja` File Format

The `build.ninja` file is the low-level build description that Ninja executes. While CMake generates
this file, understanding its format is useful for debugging build issues and for projects that use
Ninja directly.

### Variables and Scoping

```ninja
# Global variables
cc = /usr/bin/clang++
cflags = -std=c++23 -O2

# A rule definition
rule compile
  # $in and $out are implicit variables provided by Ninja
  command = $cc $cflags -c $in -o $out
  description = CC $out

# Build edge: build output from inputs using a rule
build src/main.o: compile src/main.cpp
  cflags = -std=c++23 -O2 -DDEBUG  # local override of cflags

# Phony target (like Make's .PHONY)
build all: phony src/main.o
build clean: phony
```

### Response Files

On Windows, command lines are limited to 8191 characters. Large C++ projects easily exceed this
limit when passing long include paths or many source files. Ninja handles this via **response
files** (also called "rspfiles"):

```ninja
rule link
  # Write the command arguments to a file, then pass @file to the linker
  rspfile = $out.rsp
  rspfile_content = $in
  command = link.exe @CMakeFiles/$out.rsp -OUT:$out $libs

build app.exe: link obj1.obj obj2.obj obj3.obj ... obj100.obj
```

Ninja writes the arguments to `$out.rsp`, then passes `@CMakeFiles/$out.rsp` to the linker. This
avoids the command-line length limit entirely.

### Pools

Ninja pools limit concurrency for specific types of work:

```ninja
# Define a pool with max 4 concurrent jobs
pool link_pool
  depth = 4

# Assign a build edge to the pool
rule link
  command = lld $in -o $out
  pool = link_pool

build app: link main.o utils.o
```

## Comparison with GNU Make

| Feature                      | Ninja                                | GNU Make                                 |
| :--------------------------- | :----------------------------------- | :--------------------------------------- |
| Startup time (large project) | &lt;1s                               | 5–30s (recursive Make)                   |
| Dependency tracking          | Compiler-emitted `.d` files (native) | Manual or via `-MMD` flags               |
| Parallelism                  | Global (full graph visible)          | Per-directory (recursive Make)           |
| Implicit rules               | None (explicit only)                 | Pattern rules, suffix rules              |
| Globbing / wildcards         | None                                 | `$(wildcard)`, `%` patterns              |
| Conditional logic            | None (handled by generator)          | `ifeq`, `ifdef`, `$(if ...)`             |
| Functions / macros           | None                                 | `$(call)`, `$(foreach)`, `$(eval)`       |
| Response files               | Built-in                             | Manual (`@file` syntax)                  |
| Job pools                    | Built-in                             | Not native (requires parallel extension) |
| Configuration                | Generated (CMake, Meson, Bazel)      | Hand-written Makefiles                   |
| Build correctness            | Always correct (global graph)        | Fragile with recursive Make              |

### When to Use Make Instead of Ninja

Despite Ninja's speed advantages, there are cases where GNU Make is more appropriate:

1. **Simple projects with few files.** Make's startup overhead is negligible for small projects, and
   Make is available on virtually every Unix system without installation.
2. **Projects without a build generator.** If you are writing build rules by hand, Make's built-in
   functions (pattern rules, conditionals, `$(call)`) are more expressive than raw `.ninja` syntax.
3. **Cross-platform compatibility on obscure systems.** Make has been ported to more platforms than
   Ninja.
4. **Dependency on Make-specific features.** If your build process relies on GNU Make extensions
   like `$(eval)`, `$(shell)`, or `$(file)`, migrating to Ninja requires significant effort.

## Ninja's Limitations

1. **No built-in dependency discovery.** Ninja cannot determine which headers a `.cpp` file depends
   on — it relies on the compiler to emit this information. If the compiler is invoked incorrectly
   (missing `-MMD` flag), dependencies will be missing, leading to incorrect incremental builds.

2. **No implicit rules.** Every file must be listed explicitly. For hand-written build files, this
   is tedious. In practice, CMake or Meson generates the file list, so this is rarely a problem.

3. **No conditional logic.** Ninja cannot express `if/else` or platform detection. All platform
   logic must be handled by the build generator (CMake).

4. **Limited to single-platform builds.** A `build.ninja` file contains platform-specific paths and
   commands. Cross-platform builds require separate `build.ninja` files for each platform.

5. **No built-in test runner.** Ninja does not know about tests. CMake's `ctest` or a separate test
   runner must be used.

## Interactive Output with the `console` Pool

By default, Ninja captures all command output and only displays it if a command fails. This is ideal
for CI but problematic for interactive builds where you want to see compiler warnings or test output
in real time.

Ninja provides a built-in `console` pool that ensures only one command runs at a time with its
output going directly to the terminal, bypassing Ninja's output capture:

```ninja
# CMake automatically uses this for user-facing targets
pool console
  depth = 1

build run_tests: CUSTOM_COMMAND test_binary
  pool = console
```

When CMake generates `build.ninja`, it assigns the `console` pool to targets like `RUN_TESTS` and
custom commands that the user invokes directly. This means `ctest` output appears in real time
rather than being buffered and displayed only on failure.

## Dynamic Dependencies (`dyndep`)

Ninja supports **dynamic dependencies** via the `dyndep` feature, which allows a build edge to
declare that its dependencies are determined at build time rather than at configuration time.

This is critical for **generated header files**: when a source file `#include`s a header that is
generated by another build step, the dependency cannot be known at CMake configuration time. The
`dyndep` mechanism allows the build tool to report the dependency after the header has been
generated.

```ninja
# Conceptual dyndep usage
rule GENERATE_HEADER
  command = python gen.py $in -o $out
  dyndep = $out.ddi

build generated.h: GENERATE_HEADER template.txt
build main.o: compile main.cpp | generated.h
  dyndep = main.o.ddi
```

CMake 3.20+ supports this for Fortran module dependencies and Unity build generated headers. For
C++, CMake uses the traditional compiler dependency tracking (`.d` files) instead, which is
sufficient for most cases since the compiler emits header dependencies as part of compilation.

## Useful `ninja -t` Subcommands

Beyond profiling and recompaction, Ninja provides several diagnostic tools via the `-t` flag:

```bash
# Show all targets in the dependency graph
ninja -t targets all

# Query which inputs a specific target depends on
ninja -t query build/CMakeFiles/App.dir/main.cpp.o

# Show the command that would run for a target (dry-run)
ninja -t commands build/CMakeFiles/App.dir/main.cpp.o

# Explain why a target needs rebuilding
ninja -t explain build/CMakeFiles/App.dir/main.cpp.o

# List all inputs referenced by the build graph
ninja -t inputs
```

The `explain` tool is particularly useful for debugging unexpected rebuilds: it reports whether the
rebuild was triggered by a missing output, a changed command string, or an input file timestamp
change. Combined with `-d explain` (which prints explanations during the build), this can quickly
identify stale dependency issues.

## Common Pitfalls

- **Editing `build.ninja` by hand.** Changes will be overwritten the next time CMake reconfigures.
  Edit `CMakeLists.txt` instead.
- **Stale `.ninja_log` or `.ninja_deps`.** If the build database becomes corrupted (e.g., after a
  git rebase or force checkout), delete the build directory and reconfigure.
- **Running Ninja from the wrong directory.** Ninja must be run from the build directory (or with
  `-C build_dir`). Running from the source directory will fail.
- **Load average on single-core machines.** The `-l` flag checks system load average, which is
  always 0 on a single-core machine with 0 load. On single-core systems, use `-j 1` instead.
- **CMake cache mismatch.** If you switch generators (e.g., from Make to Ninja) without deleting the
  build directory, CMake may use cached values from the old generator. Always start fresh when
  switching generators.
