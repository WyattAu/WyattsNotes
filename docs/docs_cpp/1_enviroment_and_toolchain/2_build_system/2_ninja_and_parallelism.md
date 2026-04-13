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

## The Ninja Build Graph

Ninja models the build as a Directed Acyclic Graph (DAG) where:

- **Nodes** are files (source files, object files, executables, BMIs).
- **Edges** represent build rules (compile, link, copy).
- **Edge direction** represents the "produced-by" relationship: `main.o` --&gt; `main.cpp` means
  `main.o` is produced from `main.cpp`.

### Proof: DAG-Based Parallelism Is Correct

A build system must satisfy two invariants for correctness:

1. **Dependency completeness:** Every input of a build edge must be built (or be a source file)
   before the edge executes.
2. **No redundant work:** A target is rebuilt only if at least one of its inputs has changed.

Ninja's DAG-based scheduling satisfies both invariants by construction:

**Invariant 1 (Dependency completeness):** Ninja performs a topological sort of the DAG before
execution. A topological sort of a DAG produces a linear ordering where every node appears after all
its predecessors. When Ninja executes edges in this order, every input is guaranteed to be available
before the edge that consumes it runs.

Formally, for every edge $e: (I_1, I_2, \ldots, I_n) \to O$, the topological sort ensures that
$I_1, I_2, \ldots, I_n$ all precede $O$ in the execution order. This is a theorem of graph theory:
topological orderings exist for all DAGs and only for DAGs. If the dependency graph contained a
cycle, no topological ordering would exist, and Ninja would correctly report a cycle error.

**Invariant 2 (No redundant work):** For each edge, Ninja compares the timestamps (or content
hashes) of all inputs against the timestamp of the output. If all inputs are older than the output
and the command string has not changed, the edge is skipped. This is the standard "make" check,
applied globally across the single dependency graph.

The parallelism follows from the topological sort: if two edges have no ancestor-descendant
relationship (they are incomparable in the partial order), they can execute concurrently. Ninja uses
a work-stealing thread pool to maximize the number of concurrent edges at any point in the build.

### Implicit Dependencies

Ninja distinguishes between **explicit** and **implicit** dependencies:

- **Explicit dependencies:** Listed in the `build.ninja` file. These are the primary inputs (e.g.,
  `main.cpp` for `main.o`).
- **Implicit dependencies:** Discovered at build time from compiler-emitted `.d` files (header
  dependencies). These are recorded in `.ninja_deps` and integrated into the graph.

The separation is critical: explicit dependencies are sufficient for a clean build, but implicit
dependencies are required for correct incremental builds. Without implicit dependencies, changing a
header would not trigger recompilation of the TUs that include it.

```ninja
# build.ninja (generated by CMake)
build CMakeFiles/App.dir/main.cpp.o: CXX_COMPILER ../main.cpp || CMakeFiles/App.dir/main.cpp.o.d
  IMPLICIT_DEPENDS = CXX_COMPILER#include_directories
```

The `|| main.cpp.o.d` syntax tells Ninja to load additional dependencies from the `.d` file after
the build step. This is how header dependencies are discovered incrementally.

### Build Edge Analysis

Ninja's correctness relies on three checks per build edge:

1. **Input existence:** All inputs must exist. If an input is missing, Ninja reports an error.
2. **Input freshness:** If any input's mtime is newer than the output's mtime, the edge is dirty.
3. **Command string match:** If the command used to build the output has changed (different flags,
   different compiler), the edge is dirty even if file timestamps suggest otherwise.

The third check is the most commonly overlooked. If you change a `-D` flag in `CMakeLists.txt`,
CMake regenerates `build.ninja` with a new command string for the affected edges. Ninja detects that
the command string changed and rebuilds those edges, even though no source file was modified.

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
   explicitly enumerated in `build.ninja`. This means Ninja never scans directories -- the build
   generator (CMake) does this once during configuration.

3. **No implicit rules.** Every build edge is explicitly stated. Ninja does not infer how to build a
   `.o` from a `.cpp` -- the rule is written out verbatim for every file. This eliminates the
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

## Dependency Scanning

Ninja relies on the build generator (CMake) and the compiler to discover dependencies. This is a
two-phase process:

### Phase 1: CMake Scanning (Configuration Time)

CMake scans all source files listed in `add_executable`/`add_library` to discover direct `#include`
dependencies. This produces the initial `build.ninja` with explicit header dependencies.

### Phase 2: Compiler Scanning (Build Time)

During compilation, the compiler emits a `.d` file (via `-MD -MF`) listing all headers included by
the source file, including transitive includes. Ninja reads this `.d` file and integrates the
dependencies into `.ninja_deps`. On subsequent builds, Ninja uses this complete dependency
information for incremental rebuild correctness.

For C++20 modules, the dependency scanning is more complex because `import` directives are semantic
(not preprocessing). CMake uses the P1689 protocol to run the compiler in a lightweight scan mode
that discovers module dependencies without full compilation.

## Comparison with GNU Make

| Feature                      | Ninja                                | GNU Make                                 |
| :--------------------------- | :----------------------------------- | :--------------------------------------- |
| Startup time (large project) | &lt;1s                               | 5-30s (recursive Make)                   |
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
| Module support               | Via dyndep (P1689)                   | None                                     |
| Cross-platform               | Linux, macOS, Windows                | Linux, macOS, Windows (via MinGW)        |

### Performance Comparison

For a representative C++ project with 1000 source files and 5000 header dependencies:

| Metric                    | Ninja | GNU Make (recursive) | Speedup |
| :------------------------ | :---- | :------------------- | :------ |
| Cold build (no artifacts) | 45s   | 48s                  | 1.1x    |
| Null build (no changes)   | 0.02s | 8s                   | 400x    |
| Header change (1 file)    | 2s    | 12s                  | 6x      |
| Source change (1 file)    | 1.5s  | 3s                   | 2x      |
| Graph load time           | 0.01s | 5s                   | 500x    |

The most dramatic difference is in the **null build** (no files changed). Ninja loads the binary
dependency database, checks timestamps, and exits almost instantly. Make must re-parse every
Makefile recursively and re-evaluate every dependency, even when nothing has changed.

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
   on -- it relies on the compiler to emit this information. If the compiler is invoked incorrectly
   (missing `-MMD` flag), dependencies will be missing, leading to incorrect incremental builds.

2. **No implicit rules.** Every file must be listed explicitly. For hand-written build files, this
   is tedious. In practice, CMake or Meson generates the file list, so this is rarely a problem.

3. **No conditional logic.** Ninja cannot express `if/else` or platform detection. All platform
   logic must be handled by the build generator (CMake).

4. **Limited to single-platform builds.** A `build.ninja` file contains platform-specific paths and
   commands. Cross-platform builds require separate `build.ninja` files for each platform.

5. **No built-in test runner.** Ninja does not know about tests. CMake's `ctest` or a separate test
   runner must be used.

## Integration with Meson

Meson is another build generator that produces `build.ninja` files natively. Meson's syntax is more
concise than CMake's and is designed specifically for Ninja:

```meson
# meson.build
project('myapp', 'cpp')

executable('app',
  'src/main.cpp',
  'src/utils.cpp',
  dependencies: [
    dependency('fmt', version: '>=10.0'),
    dependency('nlohmann_json'),
  ],
  install: true,
)
```

```bash
# Configure and build
meson setup build
ninja -C build
```

Meson generates `build.ninja` directly (no intermediate CMake step). For projects that do not need
CMake's cross-platform complexity, Meson + Ninja is a lighter alternative.

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

This is critical for **C++20 modules**: when a source file `import`s a module, the dependency on the
module's BMI cannot be known at CMake configuration time. The `dyndep` mechanism allows the build
tool to report the dependency after the BMI has been generated.

```ninja
# Conceptual dyndep usage for C++ modules
build CMakeFiles/App.dir/main.cpp.o: CXX_COMPILER ../main.cpp
  dyndep = CMakeFiles/App.dir/main.cpp.o.dd
```

CMake 3.28+ generates `.dd` (dyndep) files based on the P1689 scanning output. These files tell
Ninja that `main.cpp.o` depends on `Engine.pcm` (the BMI for the `Engine` module). Ninja reads the
`.dd` file at build time and adds the BMI dependency to the graph dynamically.

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
- **Not using job pools for LTO builds.** LTO linking can consume 10-50 GB of RAM per process.
  Without a link pool limiting concurrency, running `-j 32` with LTO will OOM the machine.
- **Assuming Ninja handles C++ modules automatically.** C++20 modules require explicit CMake
  configuration (`CMAKE_CXX_SCAN_FOR_MODULES ON`) and a compatible Ninja version (1.11+). Older
  Ninja versions do not support `dyndep` for modules.

## Ninja and Build Caching Integration

Ninja is often combined with build caching systems (ccache, sccache, buildcache) to avoid redundant
compilation across different build directories or CI runs.

### ccache Integration

ccache wraps the compiler and caches object files based on a hash of the source code, compiler
flags, and include files:

```cmake
# CMake: use ccache via CMAKE_CXX_COMPILER_LAUNCHER
find_program(CCACHE_PROGRAM ccache)
if(CCACHE_PROGRAM)
    set(CMAKE_CXX_COMPILER_LAUNCHER ${CCACHE_PROGRAM})
    set(CMAKE_C_COMPILER_LAUNCHER ${CCACHE_PROGRAM})
endif()
```

Ninja does not know about ccache. It sees the ccache invocation as the compile command. If the cache
hits, ccache returns the pre-built object file almost instantly. If the cache misses, ccache invokes
the real compiler and stores the result.

### sccache for Distributed Caching

sccache (Mozilla's ccache replacement) supports distributed caching via S3, Redis, or Memcached.
This allows CI runners to share compilation results:

```bash
# Point sccache to an S3 bucket
export SCCACHE_BUCKET=my-build-cache
export SCCACHE_REGION=us-east-1
export SCCACHE_S3_KEY_PREFIX=ninja-builds/

# CMake integration
cmake -S . -B build -G Ninja \
    -DCMAKE_CXX_COMPILER_LAUNCHER=sccache \
    -DCMAKE_C_COMPILER_LAUNCHER=sccache
```

When combined with Ninja, sccache eliminates redundant compilation across CI runs, even when the
build directory is clean. Ninja's fast startup and DAG analysis complement sccache's caching by
minimizing the overhead of determining which targets need building.

### Interaction Between Ninja's Restat and Caching

Ninja supports a `restat` flag on build edges that tells Ninja to re-check the output's timestamp
after the command runs. If the output's timestamp did not change (e.g., because ccache returned a
cached object file that is older than the inputs), Ninja does not propagate the rebuild to
downstream targets.

This interaction is usually correct: if ccache returns a cached object file, the downstream targets
that depend on it do not need rebuilding. However, if the cached object file was built with
different flags (cache poisoning), the `restat` optimization can mask the inconsistency. Use
`CCACHE_RECACHE=1` to bypass the cache when investigating build inconsistencies.

## Ninja and Custom Commands

Ninja supports arbitrary commands via custom rules, not just compilation and linking. CMake
generates custom rules for:

- **Code generation:** Protobuf (`protoc`), FlatBuffers, Flex/Bison.
- **Asset processing:** Image compression, shader compilation.
- **Documentation generation:** Doxygen, Sphinx.

These custom commands are first-class build edges in the Ninja graph. They participate in
parallelism and incremental rebuilds like any other edge.

```cmake
# CMake: custom command for code generation
add_custom_command(
    OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/parser.cpp
    COMMAND bison -d -o ${CMAKE_CURRENT_BINARY_DIR}/parser.cpp
                   ${CMAKE_CURRENT_SOURCE_DIR}/grammar.y
    DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/grammar.y
    COMMENT "Generating parser from grammar.y"
)

add_custom_target(generate_parser DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/parser.cpp)
add_executable(app main.cpp ${CMAKE_CURRENT_BINARY_DIR}/parser.cpp)
add_dependencies(app generate_parser)
```

Ninja compiles `main.cpp` and runs `bison` in parallel (if there are no other dependencies), then
links the result. If `grammar.y` changes, only the bison step and the subsequent compile/link run.

## Ninja Build Graph Inspection

For complex projects, visualizing the build graph helps identify bottlenecks and unnecessary
dependencies:

```bash
# Generate a DOT file of the dependency graph
ninja -t graph all > build_graph.dot

# Render with graphviz
dot -Tpng build_graph.dot -o build_graph.png
```

The DOT output shows every build edge and its dependencies. For large projects, the graph is
unwieldy; use `dot -Tpng | display` or filter the graph to show only the critical path.

To find the critical path (the longest chain of dependencies that determines minimum build time):

```bash
# List all targets with their dependency depths
ninja -t targets all | awk -F: '{print $2}' | sort | uniq -c | sort -rn | head -20
```

This shows which targets have the most transitive dependencies, indicating the critical path.

## Ninja Subninja and Include

Ninja supports two composition mechanisms for `build.ninja` files:

- **`include`**: Textually includes another `.ninja` file (like C's `#include`). Variables and rules
  from the included file are available in the includer.
- **`subninja`**: Loads another `.ninja` file as a sub-graph. The sub-graph's build edges are added
  to the parent graph, but its variables are scoped (not visible to the parent).

```ninja
# build.ninja (top-level)
subninja lib1/rules.ninja
subninja lib2/rules.ninja

build all: phony lib1/lib1.a lib2/lib2.a
```

CMake uses `subninja` to integrate generated sub-projects into the main `build.ninja`. This allows
each CMake target to have its own set of rules and variables without polluting the global namespace.

## See Also

- [CMake Targets, Properties, and Generators](./1_cmake_targets_properties_generator.md)
- [CMake Presets and Toolchain Files](./3_cmake_presets_and_toolchain_files.md)
- [Build Caching](./4_build_caching.md)
- [Unit Tests](./5_unit_tests.md)
