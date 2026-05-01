---
title: Binary Module Interfaces
description:
  "C++: Binary Module Interfaces — What BMIs Are and Why They Matter; Formal Basis; Compiler-Specific Formats; BMI Generation with GCC and Clang."
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

### Formal Basis

Per [N4950 S10.2], a module interface unit is a translation unit that contains a module-declaration
and exports declarations. The compiler must make the exported interface available to importers. The
BMI is the implementation-defined artifact that serves this purpose. The standard does not mandate
the BMI format, only the semantic contract: an importer must see the same interface as if it had
textually included the module's declarations [N4950 S15.5].

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

### Module Partition Rules

Module partitions [N4950 S10.2.4] allow a module to be split across multiple translation units while
presenting a single logical interface. Partitions are named using dot-separated syntax:

```cpp
// engine.cppm (primary module interface)
export module Engine;
import :Core;      // import partition Core
import :Graphics;  // import partition Graphics

export namespace Engine {
    void run();  // re-exported from :Core
}
```

```cpp
// engine_core.cppm (module partition interface)
export module Engine:Core;

export void run() { /* ... */ }
```

```cpp
// engine_graphics.cppm (module partition interface)
export module Engine:Graphics;

export void render() { /* ... */ }
```

```cpp
// engine_graphics_impl.cpp (module partition implementation unit)
module Engine:Graphics;  // NOTE: no 'export' -- this is an implementation unit

void internal_render_detail() { /* ... */ }
```

**Key rules:**

1. The primary module interface must import all partition interfaces it wishes to export.
2. A partition implementation unit (`module M:P;` without `export`) contributes to the module but
   does not export any declarations.
3. Partitions cannot be imported by TUs outside the module. Only the primary module interface is
   externally visible.
4. The partition implementation unit has the same module linkage as the module interface [N4950
   S10.2.4 p3], meaning entities defined there have module linkage and are not externally visible.

### Proof: Modules Enforce the One Definition Rule

The ODR [N4950 S6.3] requires that every program shall contain exactly one definition of every
non-inline function or variable. In the header model, the ODR is enforced only informally: if two
TUs include headers that define the same entity differently, the linker _may_ detect this via
duplicate symbols, but often the violation is silent.

Modules enforce the ODR structurally:

1. **Single compilation point:** A module interface unit is compiled exactly once, producing exactly
   one BMI. All importers load the same BMI, guaranteeing they see the same definition.
2. **No textual duplication:** Unlike headers, which are textually included in every TU, module
   declarations are loaded from the BMI. There is no opportunity for a TU to see a different
   version.
3. **Module linkage:** Entities with module linkage [N4950 S10.2.3] are visible only within the
   module's own TUs. Two modules cannot accidentally define the same module-linkage entity because
   name lookup is module-scoped.

This structural enforcement is a fundamental advantage of modules over headers. The ODR violation
that silently corrupts binaries in header-based code becomes impossible in module-based code.

### Module Implementation Units

An implementation unit [N4950 S10.2.2] is a translation unit that contributes definitions to a
module but is not part of the module's interface:

```cpp
// math_utils_impl.cpp (module implementation unit)
module MathUtils;  // no 'export' -- implementation unit

int factorial_impl(int n) {
    return n &lt;= 1 ? 1 : n * factorial_impl(n - 1);
}
```

Implementation units do **not** produce BMIs. They are compiled directly to object files. They can
access all declarations from the module interface (both exported and non-exported) but consumers of
the module cannot see any entity defined only in the implementation unit.

This is the module analog of putting function definitions in a `.cpp` file: the implementation is
hidden, and changes to it do not trigger recompilation of importers (because no BMI changes).

### Export and Import Semantics

The `export` keyword has precise semantics defined by the standard [N4950 S15.5]:

- `export` makes a declaration part of the module's interface, visible to importers.
- `export` can be applied to declarations, namespaces, and using-directives.
- `export import M;` re-exports all exported entities from module `M`.
- A declaration without `export` in a module interface is **module-attached**: it has module
  linkage, is visible within the module's TUs, but is invisible to importers.

```cpp
export module Geometry;

export double circle_area(double radius);  // visible to importers

double circle_circumference(double radius);  // module-linkage only
```

A TU that writes `import Geometry;` can call `circle_area` but not `circle_circumference`. The
latter is available only within other TUs that are part of the `Geometry` module (the interface unit
and any implementation units).

### Module Linkage

Entities defined in a module have **module linkage** [N4950 S10.2.3], a new linkage form introduced
by modules:

- An entity with module linkage is unique within the module but not externally visible.
- Two different modules can each define an entity with the same name at module linkage without
  conflict.
- Module linkage is distinct from internal linkage (`static`) and external linkage.

This allows modules to define internal helper functions without polluting the global symbol table or
risking ODR violations with other modules:

```cpp
export module Math;
namespace detail {
    int helper(int x) { return x * 2; }  // module linkage
}
export int compute(int x) { return detail::helper(x); }
```

The function `detail::helper` has module linkage. It will not appear in the object file's symbol
table (it may be inlined or internalized by the compiler). No other module can reference it, and no
ODR concern arises even if another module defines its own `detail::helper`.

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

### Proof: Module Dependency Graph Must Be a DAG

Per [N4950 S10.2], a module-import-declaration names a module. The standard does not explicitly
require acyclic imports, but the compilation model implicitly requires it:

1. Module B imports Module A. To compile B, the compiler must load A's BMI.
2. A's BMI exists only after A's interface unit is compiled.
3. Therefore, A must be compiled before B.

If Module A imports Module B and Module B imports Module A (a cycle), then A requires B's BMI to
compile, and B requires A's BMI to compile. Neither can be compiled first. The dependency graph is
not a DAG, and compilation is impossible.

Build system scanners detect this condition and report it as an error before any compilation begins.
This is a significant improvement over the header model, where circular includes can cause infinite
recursion in the preprocessor (caught only by include guards) or subtle ODR violations.

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
  old BMI causes downstream consumers to load an incompatible BMI, producing bizarre errors. Always
  clean the build directory when changing compiler flags or upgrading the compiler.
- **Circular module dependencies:** Module A imports Module B and Module B imports Module A is
  illegal. Restructure using partitions or shared utility modules. The build system scanner should
  catch this, but some scanners may report it as a confusing "module not found" error.
- **Missing `export`:** Forgetting `export` on a declaration in a module interface means it is
  module-local and invisible to importers, causing "no member named" errors. This is the most common
  beginner mistake with modules.
- **Macro use in module interface:** Macros from the global module fragment are visible inside the
  module but not to importers. If an importer needs a macro, use `export` or define it in the
  importer's own GMF.
- **Partition interface not imported by primary interface:** A partition that is not imported by the
  primary module interface is invisible to importers, even if the partition is compiled
  successfully. This produces "no module named" errors at import time.
- **Implementation unit accidentally exported:** Writing `export module M:P;` makes it a partition
  interface, not an implementation unit. An implementation unit uses `module M:P;` (no `export`).

## 8. BMI File Size and Build Disk Pressure

BMI files are significantly larger than the source files they represent. A 500-line module interface
might produce a 2-5 MB `.pcm` file because the BMI contains the serialized AST, template
instantiation information, name lookup tables, and debug metadata.

In a project with 100 modules, this can mean 200-500 MB of BMI artifacts in the build directory.
Combined with the object files, the total build artifact size can exceed 1 GB. This has practical
implications:

1. **CI disk pressure:** CI runners with limited storage may fill up during module-heavy builds.
   Ensure CI cleanup jobs remove stale BMIs from previous builds.
2. **NFS/shared filesystem builds:** BMI files are accessed frequently during compilation (read by
   downstream TUs). On NFS mounts, the latency of reading large BMIs can dominate build time. Prefer
   local builds or SSD-backed shared storage.
3. **`.gitignore` hygiene:** BMI files (`.pcm`, `.ifc`, `.gcm`) must never be committed. Add them to
   `.gitignore` and verify they are not tracked with `git ls-files '*.pcm'`.

## 9. BMI and Template Instantiation Boundaries

A critical subtlety of BMI design is where template instantiation occurs. When Module B imports
Module A, and Module A exports a template `foo<T>`, the BMI for Module A must contain enough
information for Module B to instantiate `foo<int>` if needed. This means:

- **The full template definition** must be present in the BMI, not just the declaration.
- **All types referenced by the template** must also be in the BMI (transitive type information).
- **Concept constraints** used by the template must be available for constraint checking in
  importers.

This is why BMIs for headers like `<vector>` are so large — they must carry the full definitions of
dozens of internal templates (allocators, iterators, node types) so that downstream TUs can
instantiate `std::vector<T>` without re-parsing the header.

For your own modules, this means that exporting a template-heavy interface (e.g., a generic
`Transform<T, U>` pipeline) significantly increases the BMI size and the compilation cost for all
importers. Prefer **non-template interfaces** with implementation units for the template-heavy
internals, exporting only the concrete type aliases.

## 10. BMI Caching Invalidation Rules

The exact rules for BMI invalidation are compiler-specific but follow a general pattern:

| Change                                | BMI Invalidated? | Downstream Rebuild? |
| :------------------------------------ | :--------------- | :------------------ |
| Module interface source modified      | Yes              | Yes                 |
| Module implementation source modified | No               | No                  |
| Imported module's BMI changed         | Yes              | Yes                 |
| Compiler flag `-D` changed            | Yes              | Yes                 |
| Compiler version changed              | Yes              | Yes                 |
| Optimization level `-O` changed       | Usually yes      | Yes                 |

The transitive nature of invalidation is critical: if Module C imports Module B which imports Module
A, a change to A's interface invalidates B's BMI, which invalidates C's BMI. This cascade is why
"god modules" (modules imported by everything) are so destructive to incremental build times.

Build systems track this via the P1689 dependency metadata. Each compiled TU records the set of BMI
files it consumed. If any of those BMIs are newer than the TU's object file, the TU is recompiled.

## 11. Debugging BMI-Related Build Failures

BMI-related errors are among the most difficult to diagnose in C++ module builds. Common symptoms
and their causes:

| Symptom                  | Likely Cause                                          |
| :----------------------- | :---------------------------------------------------- |
| "module file not found"  | BMI path not passed to compiler (`-fmodule-file`)     |
| "incompatible module"    | BMI compiled with different flags or compiler version |
| "ambiguous symbol"       | Same entity exported from two imported modules        |
| "entity not found"       | Missing `export` on the declaration                   |
| Infinite compilation     | Circular dependency (should be caught by scanner)     |
| "module already defined" | Module compiled twice (check CMake source lists)      |

**Diagnostic workflow:**

1. Check that the BMI file exists at the expected path using `ls build/**/*.pcm`.
2. Verify the compiler flags used to build the BMI match the consumer's flags (`-std=c++23`,
   `-D...`).
3. Inspect the `dyndep` files (Ninja) to confirm the DAG is correct and acyclic.
4. Use `clang++ --show-module-info` to dump BMI metadata and verify the exported symbol set.

## 12. Module Partitions and Build Parallelism

Module partitions offer a significant parallelism opportunity. Consider a module with three
independent partitions:

```text
Engine (primary interface)
+-- :Core
+-- :Graphics
+-- :Audio
```

If these partitions do not import each other, they can be compiled in parallel. The build graph
becomes:

```
[Engine:Core.pcm] ----+
[Engine:Graphics.pcm] --+--> [Engine.pcm] --> [consumer.o]
[Engine:Audio.pcm] ---+
```

All three partition BMIs are independent leaf nodes in the DAG. Ninja (or any DAG-aware scheduler)
can compile all three simultaneously. The primary interface BMI depends on all three, but its
compilation starts as soon as the last partition BMI finishes.

If partitions import each other (e.g., `:Graphics` imports `:Core`), the parallelism is reduced:

```
[Engine:Core.pcm] --> [Engine:Graphics.pcm] --+
[Engine:Audio.pcm] --------------------------+--> [Engine.pcm] --> [consumer.o]
```

**Best practice:** Design partition dependency graphs to be as flat as possible. Avoid chains of
partition imports (`:A` imports `:B` imports `:C`). Flat dependency graphs maximize parallelism and
minimize the critical path through the build.

## 13. Module Interface vs Implementation Partition Trade-offs

When splitting a module into partitions, each partition interface (`.cppm`) produces a BMI, while
partition implementation units (`.cpp`) do not. This distinction has build-time implications:

| Design Choice                                       | BMI Count | Parallelism              | Interface Visibility           |
| :-------------------------------------------------- | :-------- | :----------------------- | :----------------------------- |
| Everything in primary interface                     | 1         | None (single bottleneck) | Full                           |
| All partitions as interface units                   | N+1       | High (flat graph)        | Full                           |
| 1 interface partition + N implementation partitions | 2         | High                     | Limited to interface partition |

The third option is often optimal for large modules: put the public API in a single partition
interface, and move all implementation details into implementation partitions. This produces only
two BMIs (primary + one interface partition) while still allowing parallel compilation of the
implementation units.

```cpp
// engine.cppm (primary)
export module Engine;
import :API;  // Single interface partition

// engine_api.cppm (interface partition)
export module Engine:API;
export void run();
export void shutdown();

// engine_render.cpp (implementation partition, no BMI)
module Engine:API;
void run() { /* ... */ }

// engine_audio.cpp (implementation partition, no BMI)
module Engine:API;
void shutdown() { /* ... */ }
```

## 14. BMI and the Export Macro Problem

C++ codebases commonly use export macros for DLL/shared library symbol visibility:

```cpp
// In the header model:
#ifdef BUILDING_ENGINE
  #define ENGINE_API __declspec(dllexport)
#else
  #define ENGINE_API __declspec(dllimport)
#endif

class ENGINE_API Engine { /* ... */ };
```

In the module model, `dllexport`/`dllimport` attributes do not apply to module-exported entities.
Per [N4950 S15.5.2], entities exported via `export` have their visibility determined by the module
system, not by `__declspec`. This means:

- The `ENGINE_API` macro must be removed from module interface files.
- Visibility is controlled via compiler flags (`-fvisibility=hidden`) and explicit
  `__attribute__((visibility("default")))` on specific declarations if needed.
- For shared library distribution, the module interface source (`.cppm`) must be shipped alongside
  the library so consumers can rebuild the BMI with their own visibility settings.

This is an unresolved friction point in the module ecosystem. Libraries that rely heavily on export
macros require significant refactoring to adopt modules.

## See Also

- [Header Units](./3_header_unit.md)
- [The C Runtime (CRT)](./4_c_runtime.md)
- [C++20/23 Modules Overview](./1_cpp_23.md)
- [Linker](../1_translation/3_linker.md)
- [Name Mangling](../1_translation/5_name_mangling.md)
