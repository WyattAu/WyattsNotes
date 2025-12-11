---
title: CMake Targets Properties and Generator Expressions
date: 2025-12-10T05:41:36.284Z
tags:
  - cpp
categories:
  - cpp
slug: cmake-targets-properties-generator-expressions
---

Legacy CMake (versions pre-3.0) relied on global state variables and directory-scope commands (e.g., `include_directories`, `add_definitions`). This approach prevents modularity and leaks compilation flags across unrelated parts of a project.

**Modern CMake** (3.0+) is strictly **Target-Centric**. It models the build process as a directed acyclic graph (DAG) where nodes are **Targets** (executables, libraries) and edges are **Properties** (compiler flags, include paths) that propagate according to strict rules.

## The Target-Centric Model

A **Target** represents a build artifact or a logical grouping of dependencies.

### 1. Defining Targets

```cmake
# 1. Executable: Compiles sources into a binary
add_executable(App main.cpp)

# 2. Static Library: Compiles into .a (Linux) or .lib (Windows)
add_library(MathStatic STATIC math.cpp)

# 3. Shared Library: Compiles into .so (Linux), .dylib (macOS), or .dll (Windows)
add_library(MathShared SHARED math.cpp)

# 4. Interface Library: A collection of properties/headers (No source files)
# Common for C++ template libraries or header-only libraries.
add_library(MathHeaderOnly INTERFACE)
```

### 2. Transitive Usage Requirements (Scopes)

The core mechanism of Modern CMake is the propagation of build requirements. When linking libraries, you must specify the scope of the dependency.

| Scope         | Definition                                                                                | Use Case                                                                         |
| :------------ | :---------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| **PRIVATE**   | **Build Requirement.** Used internally to build the target, but not exposed to consumers. | Implementation details (e.g., a specific math algorithm used inside a function). |
| **INTERFACE** | **Usage Requirement.** Not used to build the target itself, but required by consumers.    | Header-only libraries, or headers defining template interfaces.                  |
| **PUBLIC**    | **Both.** Used to build the target AND required by consumers.                             | Public headers included in the library's public headers.                         |

#### Implementation Example

```cmake
add_library(Engine src/engine.cpp)
add_library(Graphics src/graphics.cpp)
add_library(InternalUtils src/utils.cpp)

# 1. Engine uses Graphics in its public headers (e.g., engine.h includes graphics.h)
# Any target linking Engine MUST also know about Graphics include paths.
target_link_libraries(Engine PUBLIC Graphics)

# 2. Engine uses InternalUtils only inside engine.cpp.
# Consumers of Engine do not need to know InternalUtils exists.
target_link_libraries(Engine PRIVATE InternalUtils)

# 3. Configuring Include Directories
target_include_directories(Engine
    PUBLIC include        # Exposed to consumers
    PRIVATE src/internal  # Hidden from consumers
)
```

---

## Target Properties

Properties define how a target is built. Instead of modifying global flags (`CMAKE_CXX_FLAGS`), modify target-specific properties.

### Standard C++ Versioning

Do not use compiler flags (`-std=c++23`) directly. Use compile features to ensure compiler-agnostic configuration.

```cmake
target_compile_features(Engine PUBLIC cxx_std_23)
```

### Preprocessor Definitions

```cmake
target_compile_definitions(Engine
    PRIVATE
        ENGINE_IMPL_DEBUG=1  # Only defined when compiling Engine source
    PUBLIC
        ENGINE_ENABLE_LOGGING # Defined for Engine and all consumers
)
```

### Standard Layout

To enforce standard layout rules across different compilers:

```cmake
set_target_properties(Engine PROPERTIES
    CXX_STANDARD 23
    CXX_STANDARD_REQUIRED ON
    CXX_EXTENSIONS OFF  # Disable GNU/MSVC extensions (strict ISO)
    POSITION_INDEPENDENT_CODE ON # Required for shared libraries
)
```

---

## Generator Expressions

Generator Expressions are a DSL (Domain Specific Language) evaluated **during build system generation**, not during CMake configuration. They allow logic based on the build configuration (Debug/Release), target platform, or compiler ID.

Syntax: `$<CONDITION:VALUE>`

### Common Use Cases

#### 1. Configuration-Specific Flags

Apply optimization flags only in Release builds, and debug flags only in Debug builds.

```cmake
target_compile_options(Engine PRIVATE
    $<$<CONFIG:Debug>:-g -O0>
    $<$<CONFIG:Release>:-O3 -march=native>
)
```

#### 2. Compiler-Specific Flags

Apply flags based on the compiler ID (Clang, GNU, MSVC).

```cmake
target_compile_options(Engine PRIVATE
    $<$<CXX_COMPILER_ID:MSVC>:/W4 /permissive->
    $<$<CXX_COMPILER_ID:Clang>:-Wall -Wextra -Wpedantic>
    $<$<CXX_COMPILER_ID:GNU>:-Wall -Wextra -Wpedantic>
)
```

#### 3. Build vs. Install Interface

When distributing a library, consumers need different include paths than the developer building the library.

- **BUILD_INTERFACE:** Used when building from source.
- **INSTALL_INTERFACE:** Used when installed (e.g., to `/usr/local/include`).

```cmake
target_include_directories(Engine PUBLIC
    $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>
    $<INSTALL_INTERFACE:include>
)
```

---

## Architectural Example: A Complete Module

Below is a `CMakeLists.txt` for a strict C++23 library component following best practices.

```cmake
cmake_minimum_required(VERSION 3.25)
project(CoreSystem LANGUAGES CXX)

# 1. Define the Target
add_library(CoreSystem) # Let CMake decide Static/Shared based on BUILD_SHARED_LIBS

# 2. Add Sources
target_sources(CoreSystem
    PRIVATE
        src/logger.cpp
        src/memory.cpp
)

# 3. Define Includes (Separating Interface and Implementation)
target_include_directories(CoreSystem
    PUBLIC
        $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>
        $<INSTALL_INTERFACE:include>
    PRIVATE
        src/internal_headers
)

# 4. Define C++ Standard
target_compile_features(CoreSystem PUBLIC cxx_std_23)

# 5. Define Dependencies
find_package(fmt REQUIRED)
target_link_libraries(CoreSystem
    PUBLIC
        fmt::fmt  # Public because CoreSystem headers include fmt headers
    PRIVATE
        Threads::Threads
)

# 6. Compiler Warnings (Using GenEx for Portability)
target_compile_options(CoreSystem PRIVATE
    $<$<CXX_COMPILER_ID:MSVC>:/W4 /WX>
    $<$<NOT:$<CXX_COMPILER_ID:MSVC>>:-Wall -Wextra -Werror>
)
```

## Graph Visualization

To verify the dependency graph constructed by your targets and properties, use Graphviz.

```bash
cmake -S . -B build --graphviz=graph.dot
dot -Tpng graph.dot -o graph.png
```

This generates a visual representation of the DAG, allowing you to verify that `PRIVATE` and `PUBLIC` linkages are propagating correctly.
