---
title: Binary Module Interfaces
date: 2025-12-12T03:59:23.474Z
tags:
  - cpp
categories:
  - cpp
slug: bmi
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The introduction of Modules alters the C++ compilation model. In the header-based model, source files are compiled in parallel because `#include` is handled locally by the preprocessor.

In the module-based model, compilation becomes a **Directed Acyclic Graph (DAG)**. If Module B imports Module A, Module A must be compiled _first_ to generate a binary definition of its interface. This creates a synchronization point in the build process.

This module details the two critical components that enable this workflow: the **Binary Module Interface (BMI)** and the **Dependency Scanner**.

## 1. Binary Module Interfaces (BMI)

When a compiler processes a module interface unit (`.cppm` / `.ixx`), it generates two distinct outputs:

1. **The Object File (`.o` / `.obj`):** Contains the compiled machine code for the module's functions and variables. This goes to the Linker.
2. **The BMI (`.pcm` / `.ifc` / `.gcm`):** Contains a serialized representation of the Abstract Syntax Tree (AST), types, and templates exported by the module. This is consumed by the Compiler when compiling downstream importers.

### Compiler-Specific Formats

The BMI format is **not standard**. It is an implementation detail of the compiler, highly sensitive to version and configuration.

| Compiler  | Extension | Format                                 | Flag                            |
| :-------- | :-------- | :------------------------------------- | :------------------------------ |
| **Clang** | `.pcm`    | Precompiled Module                     | `-fmodule-file=<name>=<path>`   |
| **MSVC**  | `.ifc`    | Interfaces Format (Structured Storage) | `/reference <path>`             |
| **GCC**   | `.gcm`    | GCC Module                             | `-fmodule-mapper=<socket/file>` |

### Architectural Constraints

1. **Ephemeral Nature:** BMIs are transient build artifacts (like `.o` files). They should never be distributed, version controlled, or installed to `/usr/include`.
2. **Configuration Dependency:** A BMI is tied to the specific flags used to build it. Changing `-std=c++23`, `-DDEBUG`, or even `-O3` typically invalidates the BMI, requiring a rebuild of the entire module subgraph.
3. **Two-Phase Compilation:** To maximize parallelism, build systems often split module compilation into two steps:
   - **Step 1:** Generate the BMI (Fast, Semantic info only).
   - **Step 2:** Generate the Object File (Slow, Optimization and Codegen).
   - _Benefit:_ Downstream consumers only wait for Step 1.

## 2. The Dependency Scanning Problem

In legacy C++, the build system (Make/Ninja) knows the dependency graph _a priori_ or discovers it via post-compilation header scanning (`gcc -M`).

In C++20, dependencies are dynamic.

- `import A;` is a semantic instruction, not a preprocessor directive.
- The build system cannot know that `B.cpp` depends on `A` until it parses `B.cpp`.
- However, it cannot compile `B.cpp` until `A` is built.

This circular requirement necessitates a new build phase: **Scanning**.

### The P1689R5 Protocol

To standardize how build systems (CMake) interact with compilers to discover dependencies, the C++ committee adopted [P1689R5](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2022/p1689r5.html). This format defines a standard way for a compiler to run in "Scan Mode" and output dependencies as JSON.

### The Scanning Workflow

1. **Pre-Scan:** The build system invokes the compiler on _every_ source file in a lightweight scanning mode (parsing imports/exports, ignoring function bodies).
2. **Graph Construction:** The compiler outputs a JSON file listing:
   - **Provides:** What module names this file exports.
   - **Requires:** What module names this file imports.
3. **Collation:** The build system aggregates these snippets to construct the full DAG.
4. **Scheduling:** The build system generates the concrete build steps (Ninja rules) dynamically, ensuring Module A is built before Module B.

## 3. Build System Implementation (CMake & Ninja)

CMake 3.28+ and Ninja 1.11+ implement the **Dynamic Dependency (`dyndep`)** feature to handle this architecture.

### Ninja `dyndep`

Standard Ninja requires a static graph. To support modules, Ninja introduced a mechanism where a build step can generate a file that _adds new edges_ to the graph at runtime.

**The Sequence:**

1. **Scan Rule:** Ninja runs the scanner on `src/engine.cppm`.
2. **Dyndep Generation:** The scanner output (P1689 JSON) is converted into a Ninja dyndep file (`.dd`).
3. **Graph Update:** Ninja reads the `.dd` file, learns that `engine.pcm` is a prerequisite for any file importing `Engine`.
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

**Key Concept: `FILE_SET CXX_MODULES`**
CMake treats module interface units differently from standard sources. Using `FILE_SET` tells CMake:

1. These files generate BMIs.
2. These BMIs are part of the target's public interface.
3. Install these files properly (for downstream consumption).

## 4. Performance Implications

Migrating to modules changes the performance profile of the build.

### Latency (Build Time)

- **Clean Builds:** May be **slower** than headers. Because the dependency graph is deep (A -> B -> C), parallelism is restricted. The build system cannot compile C until B's interface is ready.
- **Incremental Builds:** Significantly **faster**. Changing an implementation detail in `A.cpp` does not touch `A`'s BMI. Therefore, B and C do not need to be recompiled.

### Throughput (Machine Load)

The "Scan" phase adds overhead. Every file is effectively parsed twice (once for scan, once for compile). However, the scan is extremely fast (no template instantiation, no codegen).

### Optimization Strategy

To mitigate the serialization bottleneck:

1. **Minimize Interface Surface:** Keep code in the PMIU (`.cppm`) minimal. Move logic to Implementation Units (`.cpp`).
2. **Use Partitions:** Break large modules into partitions. Partitions can often be scanned and compiled in parallel, provided they don't depend on each other.
3. **Avoid "God Modules":** A central module imported by everything acts as a synchronization barrier, stalling the entire build until it is finished.

## 5. Verification

To verify that scanning and BMI generation are working correctly, inspect the build directory (Ninja generator).

1. **Look for BMIs:**
   - **Clang/GCC:** Look for `.pcm` or `.gcm` files in `CMakeFiles/Engine.dir/`.
   - **MSVC:** Look for `.ifc` files.
2. **Inspect `dyndep` files:**
   - Look for `*.dd` files generated by Ninja. These text files describe the dynamic edges added to the graph.

```text
# Example .dd content
ninja_dyndep_version = 1
build CMakeFiles/App.dir/main.cpp.o: dyndep | CMakeFiles/Engine.dir/engine.pcm
  restat = 1
```
