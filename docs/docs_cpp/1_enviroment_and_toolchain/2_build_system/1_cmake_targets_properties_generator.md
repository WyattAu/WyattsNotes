---
title: CMake Targets Properties and Generator Expressions
description: >-
  C++: CMake Targets Properties and Generator Expressions — The Target-Centric Model; 1. Defining Targets; 1. Executable: Compiles sources into a binary.
date: 2025-12-10T05:41:36.284Z
tags:
  - cpp
categories:
  - cpp
slug: cmake-targets-properties-generator-expressions
---

Legacy CMake (versions pre-3.0) relied on global state variables and directory-scope commands (e.g.,
`include_directories`, `add_definitions`). This approach prevents modularity and leaks compilation
flags across unrelated parts of a project.

**Modern CMake** (3.0+) is strictly **Target-Centric**. It models the build process as a directed
acyclic graph (DAG) where nodes are **Targets** (executables, libraries) and edges are
**Properties** (compiler flags, include paths) that propagate according to strict rules.

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

The core mechanism of Modern CMake is the propagation of build requirements. When linking libraries,
you must specify the scope of the dependency.

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

Properties define how a target is built. Instead of modifying global flags (`CMAKE_CXX_FLAGS`),
modify target-specific properties.

### Standard C++ Versioning

Do not use compiler flags (`-std=c++23`) directly. Use compile features to ensure compiler-agnostic
configuration.

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

Generator Expressions are a DSL (Domain Specific Language) evaluated **during build system
generation**, not during CMake configuration. They allow logic based on the build configuration
(Debug/Release), target platform, or compiler ID.

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

When distributing a library, consumers need different include paths than the developer building the
library.

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

This generates a visual representation of the DAG, allowing you to verify that `PRIVATE` and
`PUBLIC` linkages are propagating correctly.

## ALIAS Targets

ALIAS targets provide an indirection layer. They allow consumers to reference a target by a stable
name regardless of how the underlying target was defined (static, shared, or object library).

```cmake
# Define the real target
add_library(MyLib STATIC src/lib.cpp)

# Create an alias
add_library(MyCompany::MyLib ALIAS MyLib)

# Consumers use the namespaced alias
target_link_libraries(App PRIVATE MyCompany::MyLib)
```

### Why ALIAS Matters

1. **Encapsulation:** Consumers never need to know whether `MyLib` is static or shared. The
   `CMakeLists.txt` can change from `STATIC` to `SHARED` without modifying any consumer.
2. **Namespace convention:** Using `Namespace::Target` follows the same convention as `find_package`
   exported targets (e.g., `fmt::fmt`, `Boost::system`), providing a uniform interface.
3. **Subdirectory isolation:** If `MyLib` is defined in a subdirectory, targets outside that
   subdirectory cannot reference it directly (by name) unless an alias is created in the parent
   scope.

**Constraint:** ALIAS targets cannot be used in `target_link_libraries` with `INTERFACE` or
`PRIVATE` visibility if the alias was created in a different directory scope. Always create the
alias in the same scope or a parent scope where it will be consumed.

## OBJECT Libraries

OBJECT libraries compile source files into object files (`.o` / `.obj`) but do not archive them into
a static library or link them into a shared library. The object files are consumed by other targets.

```cmake
# Compile common utilities into object files
add_library(CommonObjects OBJECT
    src/utils.cpp
    src/logger.cpp
)

# Multiple targets can consume the same objects
add_library(StaticLib STATIC $<TARGET_OBJECTS:CommonObjects>)
add_executable(App1 src/app1.cpp $<TARGET_OBJECTS:CommonObjects>)
add_executable(App2 src/app2.cpp $<TARGET_OBJECTS:CommonObjects>)
```

### OBJECT Library Properties

Properties on OBJECT libraries do not propagate to consumers via `target_link_libraries`. Instead,
the consumer inherits only the object files. If `CommonObjects` has `PUBLIC` include directories,
consumers linking `$<TARGET_OBJECTS:CommonObjects>` will **not** see those includes. You must
explicitly apply the properties:

```cmake
add_library(CommonObjects OBJECT src/utils.cpp)
target_include_directories(CommonObjects PUBLIC include)

# App1 needs the includes explicitly
add_executable(App1 src/app1.cpp $<TARGET_OBJECTS:CommonObjects>)
target_include_directories(App1 PRIVATE include)  # Must duplicate
```

This is a known limitation of OBJECT libraries. For shared include directories across multiple
consumers, prefer an INTERFACE library (described below).

## INTERFACE Libraries in Depth

INTERFACE libraries are pure property containers. They have no compiled output — they exist solely
to propagate build requirements to their consumers.

```cmake
# A header-only library
add_library(HeaderOnlyLib INTERFACE)

target_include_directories(HeaderOnlyLib INTERFACE include)
target_compile_features(HeaderOnlyLib INTERFACE cxx_std_23)

# A "meta-library" that bundles requirements
add_library(StrictWarnings INTERFACE)
target_compile_options(StrictWarnings INTERFACE
    $<$<CXX_COMPILER_ID:MSVC>:/W4 /WX /permissive->
    $<$<NOT:$<CXX_COMPILER_ID:MSVC>>:-Wall -Wextra -Wpedantic -Werror>
)
```

### INTERFACE Libraries for Compiler Sanitizers

A practical pattern is using INTERFACE libraries to encapsulate sanitizer flags:

```cmake
add_library(SanitizerAddress INTERFACE)
target_compile_options(SanitizerAddress INTERFACE -fsanitize=address -fno-omit-frame-pointer)
target_link_options(SanitizerAddress INTERFACE -fsanitize=address)

add_library(SanitizerUBSan INTERFACE)
target_compile_options(SanitizerUBSan INTERFACE -fsanitize=undefined)
target_link_options(SanitizerUBSan INTERFACE -fsanitize=undefined)

# Usage
add_executable(App src/main.cpp)
target_link_libraries(App PRIVATE SanitizerAddress)
```

This pattern is superior to modifying `CMAKE_CXX_FLAGS` because it applies sanitizers only to
specific targets and integrates cleanly with the transitive dependency system.

## Advanced Generator Expressions

### Boolean and Logical Operators

Generator expressions support boolean logic for complex conditions:

```cmake
# Logical NOT
$<$<NOT:$<CXX_COMPILER_ID:MSVC>>:-Wall>

# Logical AND
$<$<AND:$<CXX_COMPILER_ID:Clang>,$<PLATFORM_ID:Linux>>:-fsanitize=address>

# Logical OR
$<$<OR:$<CONFIG:Debug>,$<CONFIG:RelWithDebInfo>>:-g>

# Boolean output: 1 or 0
$<$<BOOL:${ENABLE_FEATURE}>:FEATURE_ENABLED>
```

### String Operations

```cmake
# Convert to upper/lower case
$<UPPER_CASE:${PROJECT_NAME}>
$<LOWER_CASE:${PROJECT_NAME}>

# String comparison
$<STREQUAL:${CMAKE_BUILD_TYPE},Debug>
```

### Target-Based Expressions

Generator expressions can query properties of other targets:

```cmake
# Get the include directories of another target
$<TARGET_PROPERTY:OtherTarget,INCLUDE_DIRECTORIES>

# Get the output file of a target
$<TARGET_FILE:MyExecutable>

# Get the linker language of a target
$<TARGET_PROPERTY:MyLib,LINKER_LANGUAGE>

# Condition on whether a target exists
$<TARGET_EXISTS:OptionalTarget>
```

### Output-Related Expressions

```cmake
# Output directory
$<TARGET_FILE_DIR:App>

# Output name without extension
$<TARGET_NAME:App>

# Suffix (.exe on Windows, empty on Linux)
$<TARGET_SUFFIX:App>

# Useful for copy commands in custom targets
add_custom_command(TARGET App POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy
        $<TARGET_FILE:App>
        $<TARGET_FILE_DIR:App>/../deploy/$<TARGET_FILE_NAME:App>
)
```

### Link-Only Options

`target_link_options` (CMake 3.13+) allows setting linker-specific flags with generator expressions:

```cmake
# Link-only flags do not leak to dependent targets
target_link_options(Engine PRIVATE
    $<$<CXX_COMPILER_ID:Clang>:-fuse-ld=lld>
    $<$<CXX_COMPILER_ID:GNU>:-fuse-ld=gold>
    $<$<CXX_COMPILER_ID:MSVC>:/LTCG>
)

# Link-time optimization
target_link_options(Engine PRIVATE
    $<$<CONFIG:Release>:-flto>
)
```

## Transitive Dependency Resolution Rules

When target `A` links to target `B`, the build properties propagate according to strict rules:

```
A links PRIVATE B:
  - A gets B's INTERFACE properties for compiling A's sources
  - A's consumers do NOT get any of B's properties

A links PUBLIC B:
  - A gets B's INTERFACE properties for compiling A's sources
  - A's consumers ALSO get B's INTERFACE properties

A links INTERFACE B:
  - A does NOT use B's properties for its own compilation
  - A's consumers get B's INTERFACE properties
```

### Property Propagation Chain

Consider a three-level dependency chain: `App` &rarr; `Engine` &rarr; `fmt`

```cmake
add_library(fmt INTERFACE)  # Simplified
target_compile_definitions(fmt INTERFACE FMT_HEADER_ONLY)

add_library(Engine src/engine.cpp)
target_link_libraries(Engine PUBLIC fmt)  # Engine's public headers use fmt

add_executable(App src/main.cpp)
target_link_libraries(App PRIVATE Engine)
```

The result:

- `Engine` sees `FMT_HEADER_ONLY` when compiling its sources.
- `App` sees `FMT_HEADER_ONLY` when compiling its sources (because `Engine` propagated it as
  PUBLIC).
- If a consumer links `App`, they do **not** see `FMT_HEADER_ONLY` (because `App` linked `Engine` as
  PRIVATE).

### PRIVATE vs. INTERFACE Dependencies for Implementation Details

A common architectural mistake is making implementation-only dependencies PUBLIC:

```cmake
# BAD: spdlog is only used inside Engine's .cpp files
target_link_libraries(Engine PUBLIC spdlog)

# GOOD: spdlog is an implementation detail
target_link_libraries(Engine PRIVATE spdlog)
```

Making `spdlog` PUBLIC means every consumer of `Engine` — and every consumer of those consumers —
must also be able to find `spdlog`. This creates a transitive dependency explosion that slows builds
and makes the project harder to integrate.

## `target_sources` with File Sets (CMake 3.23+)

CMake 3.23 introduced **file sets** for organizing source files by their role (headers, sources,
modules):

```cmake
add_library(Engine)

target_sources(Engine
    PUBLIC
        FILE_SET public_headers
        TYPE HEADERS
        BASE_DIRS include
        FILES
            include/engine/engine.h
            include/engine/renderer.h
    PRIVATE
        src/engine.cpp
        src/renderer.cpp
)
```

File sets integrate with the install command to automatically install the correct headers:

```cmake
install(TARGETS Engine
    FILE_SET public_headers
)
```

This replaces the manual `install(DIRECTORY include/ DESTINATION include)` pattern and ensures that
only headers declared in the file set are installed.

## Common Pitfalls

### 1. Mixing Global and Target Commands

Never mix legacy global commands with target-centric commands in the same project:

```cmake
# BAD: Global state leaks to all targets in the directory
include_directories(include)
add_definitions(-DDEBUG)

# GOOD: Target-specific properties
target_include_directories(Engine PUBLIC include)
target_compile_definitions(Engine PRIVATE DEBUG=1)
```

### 2. Generator Expression Evaluation Timing

Generator expressions are evaluated during the **build system generation** phase (when CMake
produces Ninja files, Makefiles, or `.sln` files), not during the **configuration** phase. This
means you cannot inspect generator expression results with `message()`:

```cmake
# This prints the literal string "$<CONFIG:Debug>", not "Debug"
message($<CONFIG:Debug>)

# To conditionally print, use CMake's if()
if(CMAKE_BUILD_TYPE STREQUAL "Debug")
    message("Building in Debug mode")
endif()
```

### 3. Missing `target_link_options` for Link Flags

Using `target_compile_options` for linker flags (like `-fuse-ld=lld`) is incorrect. Compiler options
are passed during compilation; linker options require `target_link_options`:

```cmake
# BAD: -fuse-ld is a linker flag, not a compiler flag
target_compile_options(App PRIVATE -fuse-ld=lld)

# GOOD: Linker flags go through target_link_options
target_link_options(App PRIVATE -fuse-ld=lld)
```

### 4. INTERFACE Libraries Cannot Have Sources

INTERFACE libraries cannot have source files. If you need to share both properties and compiled
objects, use an OBJECT library combined with an INTERFACE library:

```cmake
# WRONG
add_library(Combined INTERFACE)
target_sources(Combined src/impl.cpp)  # ERROR

# CORRECT: Separate concerns
add_library(CombinedObjects OBJECT src/impl.cpp)
add_library(CombinedProps INTERFACE)
target_include_directories(CombinedProps INTERFACE include)
```

### 5. Overriding Properties via `set_target_properties`

Use `set_target_properties` only for properties that do not have a dedicated `target_*` command. For
example, setting `CXX_STANDARD` via `set_target_properties` is acceptable, but setting include
directories this way is wrong:

```cmake
# WRONG: Include directories should use target_include_directories
set_target_properties(Engine PROPERTIES
    INCLUDE_DIRECTORIES "${CMAKE_CURRENT_SOURCE_DIR}/include"
)

# CORRECT
target_include_directories(Engine PUBLIC include)
```

The `target_*` commands handle transitive propagation correctly; `set_target_properties` does not.
