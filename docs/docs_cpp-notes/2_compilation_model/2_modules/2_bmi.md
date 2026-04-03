---
title: Binary Module Interfaces
date: 2025-12-12T03:59:23.474Z
tags:
  - cpp
categories:
  - cpp
slug: bmi
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

The introduction of Modules alters the C++ compilation model. In the header-based model, source
files are compiled in parallel because `#include` is handled locally by the preprocessor.

In the module-based model, compilation becomes a **Directed Acyclic Graph (DAG)**. If Module B
imports Module A, Module A must be compiled _first_ to generate a binary definition of its
interface. This creates a synchronization point in the build process.

This module details the two critical components that enable this workflow: the **Binary Module
Interface (BMI)** and the **Dependency Scanner**.

## 1. Binary Module Interfaces (BMI)

When a compiler processes a module interface unit (`.cppm` / `.ixx`), it generates two distinct
outputs:

1. **The Object File (`.o` / `.obj`):** Contains the compiled machine code for the module's
   functions and variables. This goes to the Linker.
2. **The BMI (`.pcm` / `.ifc` / `.gcm`):** Contains a serialized representation of the Abstract
   Syntax Tree (AST), types, and templates exported by the module. This is consumed by the Compiler
   when compiling downstream importers.

### What BMIs Are and Why They Matter

A BMI is a **precompiled module interface**. It captures everything a downstream translation unit
needs to know about a module without re-parsing its source:

- All exported declarations (types, functions, variables, templates).
- Template definitions that may be instantiated by importers.
- Any type information needed for name lookup and overload resolution.

Without BMIs, the compiler would need to re-parse the module interface for every TU that imports it,
negating the performance benefit of modules. The BMI replaces the role that precompiled headers
(PCH) attempted to fill, but with semantic correctness guarantees that PCH lacks.

### Compiler-Specific Formats

The BMI format is **not standard**. It is an implementation detail of the compiler, highly sensitive
to version and configuration.

| Compiler  | Extension | Format                                 | Flag                            |
| :-------- | :-------- | :------------------------------------- | :------------------------------ |
| **Clang** | `.pcm`    | Precompiled Module                     | `-fmodule-file=<name>=<path>`   |
| **MSVC**  | `.ifc`    | Interfaces Format (Structured Storage) | `/reference <path>`             |
| **GCC**   | `.gcm`    | GCC Module                             | `-fmodule-mapper=<socket/file>` |

### BMI Generation with GCC and Clang

<Tabs>
  <TabItem value="clang" label="Clang" default>

Clang generates BMIs (`.pcm` files) using the `--precompile` flag or as a side effect of compiling a
module interface unit.

```bash
# Step 1: Generate BMI only
clang++ -std=c++23 --precompile math_utils.cppm -o math_utils.pcm

# Step 2: Compile the BMI to an object file
clang++ -std=c++23 -c math_utils.pcm -o math_utils.o

# Step 3: Compile a consumer that imports the module
clang++ -std=c++23 -fmodule-file=math_utils=math_utils.pcm -c main.cpp -o main.o
```

Alternatively, Clang can perform both steps in one invocation:

```bash
clang++ -std=c++23 -c math_utils.cppm -o math_utils.o
# This generates both math_utils.pcm and math_utils.o
```

  </TabItem>
  <TabItem value="gcc" label="GCC">

GCC uses a socket-based module mapper for BMI management. The workflow is more involved:

```bash
# GCC requires a module mapper (file or socket-based)
# Step 1: Compile the module interface (generates .gcm)
g++ -std=c++23 -fmodules-ts -c math_utils.cppm -o math_utils.o

# Step 2: The .gcm file is generated alongside the .o file
# Step 3: Consumers find the BMI via the module mapper
g++ -std=c++23 -fmodules-ts -fmodule-mapper=module.cache -c main.cpp -o main.o
```

GCC module support is still experimental as of GCC 14. The `-fmodules-ts` flag is required and
behavior may change between releases.

  </TabItem>
</Tabs>

### Module Dependency Scanning

The build system must discover which modules a source file imports before it can schedule
compilation. This is the **dependency scanning** problem.

The scanner parses each source file in a lightweight mode (no template instantiation, no codegen)
and extracts:

- **Provides:** Module names this file exports (interface units and partition units).
- **Requires:** Module names this file imports.

This information is used to construct the DAG that determines compilation order.

### BMI Caching in Build Systems

Build systems cache BMIs to avoid redundant recompilation. The cache key typically includes:

- The source file content hash.
- Compiler version and flags (`-std=c++23`, `-DDEBUG`, `-O2`).
- The BMIs of all imported modules (transitive dependencies).

If any of these inputs change, the BMI is invalidated and all downstream importers must be
recompiled. This is analogous to how a change in a header file triggers recompilation of all TUs
that include it, but with the critical difference that the BMI is a single artifact rather than a
textual inclusion processed independently by each TU.

**Ninja** stores BMI paths in `dyndep` files and tracks them as build edges. If a BMI is newer than
a dependent `.o` file, Ninja recompiles the dependent.

### Architectural Constraints

1. **Ephemeral Nature:** BMIs are transient build artifacts (like `.o` files). They should never be
   distributed, version controlled, or installed to `/usr/include`.
2. **Configuration Dependency:** A BMI is tied to the specific flags used to build it. Changing
   `-std=c++23`, `-DDEBUG`, or even `-O3` typically invalidates the BMI, requiring a rebuild of the
   entire module subgraph.
3. **Two-Phase Compilation:** To maximize parallelism, build systems often split module compilation
   into two steps:
   - **Step 1:** Generate the BMI (Fast, Semantic info only).
   - **Step 2:** Generate the Object File (Slow, Optimization and Codegen).
   - _Benefit:_ Downstream consumers only wait for Step 1.

## 2. The Dependency Scanning Problem

In legacy C++, the build system (Make/Ninja) knows the dependency graph _a priori_ or discovers it
via post-compilation header scanning (`gcc -M`).

In C++20, dependencies are dynamic.

- `import A;` is a semantic instruction, not a preprocessor directive.
- The build system cannot know that `B.cpp` depends on `A` until it parses `B.cpp`.
- However, it cannot compile `B.cpp` until `A` is built.

This circular requirement necessitates a new build phase: **Scanning**.

### The P1689R5 Protocol

To standardize how build systems (CMake) interact with compilers to discover dependencies, the C++
committee adopted [P1689R5](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2022/p1689r5.html).
This format defines a standard way for a compiler to run in "Scan Mode" and output dependencies as
JSON.

### The Scanning Workflow

1. **Pre-Scan:** The build system invokes the compiler on _every_ source file in a lightweight
   scanning mode (parsing imports/exports, ignoring function bodies).
2. **Graph Construction:** The compiler outputs a JSON file listing:
   - **Provides:** What module names this file exports.
   - **Requires:** What module names this file imports.
3. **Collation:** The build system aggregates these snippets to construct the full DAG.
4. **Scheduling:** The build system generates the concrete build steps (Ninja rules) dynamically,
   ensuring Module A is built before Module B.

## 3. Build System Implementation (CMake & Ninja)

CMake 3.28+ and Ninja 1.11+ implement the **Dynamic Dependency (`dyndep`)** feature to handle this
architecture.

### Ninja `dyndep`

Standard Ninja requires a static graph. To support modules, Ninja introduced a mechanism where a
build step can generate a file that _adds new edges_ to the graph at runtime.

**The Sequence:**

1. **Scan Rule:** Ninja runs the scanner on `src/engine.cppm`.
2. **Dyndep Generation:** The scanner output (P1689 JSON) is converted into a Ninja dyndep file
   (`.dd`).
3. **Graph Update:** Ninja reads the `.dd` file, learns that `engine.pcm` is a prerequisite for any
   file importing `Engine`.
4. **Execution:** Ninja schedules the compilation of `Engine`.

### CMake Configuration

To enable this logic, your project must specify C++20 or C++23.

```cmake
cmake_minimum_required(VERSION 3.28)
project(ModularSystem LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_SCAN_FOR_MODULES ON) # Default in 3.28+

add_library(Engine)
target_sources(Engine
    PUBLIC
        FILE_SET CXX_MODULES FILES
            src/engine.cppm
            src/engine_graphics.cppm
    PRIVATE
        src/engine_impl.cpp
)
```

**Key Concept: `FILE_SET CXX_MODULES`** CMake treats module interface units differently from
standard sources. Using `FILE_SET` tells CMake:

1. These files generate BMIs.
2. These BMIs are part of the target's public interface.
3. Install these files properly (for downstream consumption).

## 4. Performance Impact on Build Times

Migrating to modules changes the performance profile of the build significantly.

### Clean Builds

Clean builds may be **slower** than headers. Because the dependency graph is deep (A -&gt; B -&gt;
C), parallelism is restricted. The build system cannot compile C until B's interface is ready. The
scanning phase also adds overhead as every file is parsed twice.

However, the trade-off improves as the project grows. For large codebases, the cost of serial BMI
generation is outweighed by the reduction in redundant parsing that headers would require.

### Incremental Builds

Incremental builds are significantly **faster**. Changing an implementation detail in `A.cpp` does
not touch `A`'s BMI. Therefore, B and C do not need to be recompiled. In the header model, a change
to any header included by B and C triggers their recompilation, even if the change is in a section
they do not use.

### Throughput (Machine Load)

The "Scan" phase adds overhead. Every file is effectively parsed twice (once for scan, once for
compile). However, the scan is extremely fast (no template instantiation, no codegen).

### Optimization Strategy

To mitigate the serialization bottleneck:

1. **Minimize Interface Surface:** Keep code in the PMIU (`.cppm`) minimal. Move logic to
   Implementation Units (`.cpp`).
2. **Use Partitions:** Break large modules into partitions. Partitions can often be scanned and
   compiled in parallel, provided they don't depend on each other.
3. **Avoid "God Modules":** A central module imported by everything acts as a synchronization
   barrier, stalling the entire build until it is finished.
4. **Two-Phase Compilation:** Generate BMIs before object files so downstream consumers can start as
   soon as the BMI is ready.

## 5. Current Toolchain Support Status

Module support varies significantly across compilers as of 2025:

| Compiler  | Version        | `import std;` | BMI Format | Scanning (P1689) | Status           |
| :-------- | :------------- | :------------ | :--------- | :--------------- | :--------------- |
| **Clang** | 18+            | Yes           | `.pcm`     | Yes              | Production-ready |
| **GCC**   | 14+            | Experimental  | `.gcm`     | Partial          | Experimental     |
| **MSVC**  | VS 2022 17.10+ | Yes           | `.ifc`     | Yes (CMake)      | Production-ready |

### Clang

The most mature implementation. Clang 18+ supports `import std;` via the LLVM libc++ standard
library module. BMI generation and P1689 scanning work reliably with CMake 3.28+.

### GCC

GCC module support is marked experimental. The `-fmodules-ts` flag enables basic module compilation,
but many edge cases remain (partitions, header units, `import std;` via libstdc++ module). BMI
format and caching behavior may change between releases.

### MSVC

MSVC has strong module support via the `.ifc` format. Visual Studio 2022 17.10+ supports
`import std;` natively. Integration with CMake and MSBuild is well-tested.

## 6. Practical Limitations and Workarounds

### Limitation: No BMI Distribution

BMIs cannot be distributed in packages. If library A ships as a shared library, consumers cannot
import it as a module unless they also have the module interface source and rebuild the BMI
themselves.

**Workaround:** Ship the `.cppm` interface source alongside the library. The build system will
compile the BMI on the consumer side.

### Limitation: Diagnostic Quality

Errors in module interfaces can produce cryptic diagnostics because the compiler is operating on a
serialized AST rather than source text. Error locations may point to the BMI rather than the
original source.

**Workaround:** Keep module interfaces small and well-tested. Use implementation units for complex
logic.

### Limitation: IDE Support

Many IDEs (as of 2025) do not fully support module-based projects. Syntax highlighting,
go-to-definition, and IntelliSense may not work for module imports.

**Workaround:** Use Clangd 18+ which has the most complete module support among language servers.

### Limitation: Build System Complexity

CMake module support requires CMake 3.28+ and Ninja 1.11+. Older build systems (Make, Autotools)
have no module support.

**Workaround:** Use CMake with the Ninja generator for module-based projects.

## 7. Verification

To verify that scanning and BMI generation are working correctly, inspect the build directory (Ninja
generator).

1. **Look for BMIs:**
   - **Clang/GCC:** Look for `.pcm` or `.gcm` files in `CMakeFiles/Engine.dir/`.
   - **MSVC:** Look for `.ifc` files.
2. **Inspect `dyndep` files:**
   - Look for `*.dd` files generated by Ninja. These text files describe the dynamic edges added to
     the graph.

```text
# Example .dd content
ninja_dyndep_version = 1
build CMakeFiles/App.dir/main.cpp.o: dyndep | CMakeFiles/Engine.dir/engine.pcm
  restat = 1
```

## Common Pitfalls

- **BMI version mismatch:** Rebuilding a module with different compiler flags but not cleaning the
  old BMI causes downstream consumers to load an incompatible BMI, producing bizarre errors.
- **Circular module dependencies:** Module A imports Module B and Module B imports Module A is
  illegal. Restructure using partitions or shared utility modules.
- **Missing `export`:** Forgetting `export` on a declaration in a module interface means it is
  module-local and invisible to importers, causing "no member named" errors.
- **Macro use in module interface:** Macros from the global module fragment are visible inside the
  module but not to importers. If an importer needs a macro, use `export` or define it in the
  importer's own GMF.

## See Also

- [Header Units](./3_header_unit.md)
- [The C Runtime (CRT)](./4_c_runtime.md)
- [Translation Units and Preprocessing](../1_translation/1_translation_unit.md)
