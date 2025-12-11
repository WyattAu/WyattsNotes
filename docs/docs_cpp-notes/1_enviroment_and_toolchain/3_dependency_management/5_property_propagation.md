---
title: Property Propagation
date: 2025-12-11T05:21:57.536Z
tags:
  - cpp
categories:
  - cpp
slug: property-propagation
---

In legacy C++ build systems (Makefiles, Visual Studio Solutions), build settings like "Include Directories" and "Preprocessor Definitions" were often global or applied loosely to directory scopes. This led to "Include Hell," where a consumer relied on a transitive dependency's headers, causing build breakages when the dependency graph changed.

Modern CMake (3.0+) resolves this via the **Target-Centric Model**. Every library or executable is an object (Target) that encapsulates two distinct sets of data:

1. **Build Requirements:** What the target needs to build itself.
2. **Usage Requirements:** What a consumer needs to link against the target.

This module analyzes how these properties propagate through the dependency graph using Visibility Scopes.

## The Visibility Scopes

When declaring properties (`target_include_directories`, `target_compile_definitions`) or dependencies (`target_link_libraries`), CMake requires a scope keyword.

### 1. PRIVATE (Encapsulation)

- **Semantics:** The property is required **only** to build the target itself. It is not propagated to consumers.
- **Mechanism:** Populates the target's `INCLUDE_DIRECTORIES` (or relevant property) but **not** the `INTERFACE_` variants.
- **Use Case:** Implementation details. If `LibA` uses `Boost.Asio` internally in its `.cpp` files but does not expose Asio headers in its public `.h` files, the dependency is `PRIVATE`.

### 2. INTERFACE (Propagation)

- **Semantics:** The property is **not** required to build the target (or the target has no source), but it is required by consumers.
- **Mechanism:** Populates the target's `INTERFACE_` properties but not the build properties.
- **Use Case:**
  - **Header-Only Libraries:** There is no binary to compile, so `PRIVATE` build requirements do not exist.
  - **Forward Declarations:** `LibA` forward declares a type in its header, but the consumer must include the full definition.

### 3. PUBLIC (Transitivity)

- **Semantics:** The property is required for **both** building the target and by consumers.
- **Mechanism:** Populates both the build properties and the `INTERFACE_` properties.
- **Use Case:** Public API dependencies. If `LibA` includes `<fmt/core.h>` in its public header `liba.h`, then any consumer of `LibA` must also have access to `fmt`'s include path.

## The Propagation Graph

Consider a linear dependency chain: **App $\rightarrow$ Engine $\rightarrow$ Core**.

### Scenario A: Strict Encapsulation (Private)

```cmake
# Core/CMakeLists.txt
add_library(Core src/core.cpp)
# Core uses OpenSSL internally.
target_link_libraries(Core PRIVATE OpenSSL::Crypto)
```

- **Core:** Links against OpenSSL. Has OpenSSL include paths.
- **Engine:** Links against Core. Does **not** inherit OpenSSL include paths.
- **App:** Links against Engine. Does **not** see OpenSSL.

_Result:_ Clean build graph. Changing OpenSSL versions only triggers a rebuild of `Core`.

### Scenario B: Transitive Leakage (Public)

```cmake
# Core/CMakeLists.txt
add_library(Core src/core.cpp)
# Core exposes OpenSSL types in core.h
target_link_libraries(Core PUBLIC OpenSSL::Crypto)

# Engine/CMakeLists.txt
target_link_libraries(Engine PUBLIC Core)
```

- **Core:** Links OpenSSL.
- **Engine:** Links Core **and** inherits OpenSSL requirements automatically.
- **App:** Links Engine. Inherits Core requirements **and** OpenSSL requirements.

_Result:_ `App` can include `<openssl/ssl.h>` without explicitly asking for it. This indicates a tightly coupled architecture.

## Interface Libraries

An `INTERFACE` library is a CMake target that produces no binary artifact (`.a` / `.lib`). It functions purely as a container for Usage Requirements. This is an architectural pattern for standardizing project configuration.

### Pattern 1: The Project Options Target

Instead of setting global flags (`CMAKE_CXX_FLAGS`), create a meta-target that defines the standard compilation environment.

```cmake
add_library(ProjectOptions INTERFACE)

target_compile_features(ProjectOptions INTERFACE cxx_std_23)

target_compile_options(ProjectOptions INTERFACE
    $<$<CXX_COMPILER_ID:MSVC>:/W4 /permissive->
    $<$<CXX_COMPILER_ID:Clang>:-Wall -Wextra -Wpedantic>
)

target_compile_definitions(ProjectOptions INTERFACE
    PROJECT_ARCH_X64
)
```

**Usage:**
Every target in the system simply links against this interface.

```cmake
add_library(Physics src/physics.cpp)
target_link_libraries(Physics PRIVATE ProjectOptions)
```

### Pattern 2: Header-Only Dependencies

When using a header-only library (like `nlohmann_json` or `Eigen`), the target definition is purely structural.

```cmake
add_library(JsonLib INTERFACE)
target_include_directories(JsonLib INTERFACE include/)
```

## Build Interface vs. Install Interface

A critical nuance in property propagation is the difference between directory layouts during development (Build Tree) versus after deployment (Install Tree).

- **Build Tree:** Headers are located in `${CMAKE_CURRENT_SOURCE_DIR}/include`.
- **Install Tree:** Headers are located in `${CMAKE_INSTALL_PREFIX}/include`.

If you hardcode the include path, installed consumers will fail to find headers. You must use **Generator Expressions** to distinguish these states.

```cmake
target_include_directories(CoreSystem PUBLIC
    # Used when building the project locally
    $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>

    # Used by consumers importing the installed package
    $<INSTALL_INTERFACE:include>
)
```

## System Includes (Warning Suppression)

When linking third-party dependencies, you often want to inherit their Include Directories but suppress compiler warnings generated by their code.

CMake provides the `SYSTEM` attribute for this purpose.

```cmake
# Using explicit SYSTEM property
target_include_directories(CoreSystem SYSTEM PUBLIC ${Boost_INCLUDE_DIRS})
```

When checking targets, dependencies marked as `SYSTEM` are passed to the compiler via `-isystem` (Clang/GCC) or `/external:I` (MSVC). This instructs the compiler to treat them as system headers, disabling warnings for those specific paths while maintaining visibility.

## Architectural Best Practices

1. **Default to PRIVATE:** Start with `PRIVATE` visibility for all dependencies. Only escalate to `PUBLIC` if a type from the dependency appears in your public headers.
2. **Avoid Global State:** Never use `include_directories()` or `link_libraries()`. These apply to the directory scope and break the encapsulation of the dependency graph.
3. **Use Interface Targets:** Centralize warning levels, sanitizers, and architecture flags into an `INTERFACE` target rather than repeating variables across multiple `CMakeLists.txt` files.
