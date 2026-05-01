---
title: Property Propagation
description:
  C++: Property Propagation — The Visibility Scopes; 1. PRIVATE (Encapsulation);
  2. INTERFACE (Propagation); 3. PUBLIC (Transitivity).
date: 2025-12-11T05:21:57.536Z
tags:
  - cpp
categories:
  - cpp
slug: property-propagation
---

In legacy C++ build systems (Makefiles, Visual Studio Solutions), build settings like "Include
Directories" and "Preprocessor Definitions" were often global or applied loosely to directory
scopes. This led to "Include Hell," where a consumer relied on a transitive dependency's headers,
causing build breakages when the dependency graph changed.

Modern CMake (3.0+) resolves this via the **Target-Centric Model**. Every library or executable is
an object (Target) that encapsulates two distinct sets of data:

1. **Build Requirements:** What the target needs to build itself.
2. **Usage Requirements:** What a consumer needs to link against the target.

This module analyzes how these properties propagate through the dependency graph using Visibility
Scopes.

## The Visibility Scopes

When declaring properties (`target_include_directories`, `target_compile_definitions`) or
dependencies (`target_link_libraries`), CMake requires a scope keyword.

### 1. PRIVATE (Encapsulation)

- **Semantics:** The property is required **only** to build the target itself. It is not propagated
  to consumers.
- **Mechanism:** Populates the target's `INCLUDE_DIRECTORIES` (or relevant property) but **not** the
  `INTERFACE_` variants.
- **Use Case:** Implementation details. If `LibA` uses `Boost.Asio` internally in its `.cpp` files
  but does not expose Asio headers in its public `.h` files, the dependency is `PRIVATE`.

### 2. INTERFACE (Propagation)

- **Semantics:** The property is **not** required to build the target (or the target has no source),
  but it is required by consumers.
- **Mechanism:** Populates the target's `INTERFACE_` properties but not the build properties.
- **Use Case:**
  - **Header-Only Libraries:** There is no binary to compile, so `PRIVATE` build requirements do not
    exist.
  - **Forward Declarations:** `LibA` forward declares a type in its header, but the consumer must
    include the full definition.

### 3. PUBLIC (Transitivity)

- **Semantics:** The property is required for **both** building the target and by consumers.
- **Mechanism:** Populates both the build properties and the `INTERFACE_` properties.
- **Use Case:** Public API dependencies. If `LibA` includes `<fmt/core.h>` in its public header
  `liba.h`, then any consumer of `LibA` must also have access to `fmt`'s include path.

### Proof of Property Propagation Rules

**Claim:** When target `B` links against target `A` with scope `S`, the `INTERFACE_` properties of
`A` propagate to `B` if and only if `S` is `PUBLIC` or `INTERFACE`.

**Proof:**

CMake's property propagation operates on the directed graph $G = (V, E)$ where vertices are targets
and edges are `target_link_libraries` relationships. Each edge has a scope label
$\{PRIVATE,
INTERFACE, PUBLIC\}$.

Define the propagation function $P(T, S)$ where $T$ is a target and $S$ is a scope:

- If $S = PRIVATE$: $P$ sets the build properties of the dependent target but does not modify
  `INTERFACE_` properties. No propagation to downstream consumers.
- If $S = INTERFACE$: $P$ sets only the `INTERFACE_` properties of the dependent target. The
  dependent target's build properties are unchanged, but downstream consumers will see these
  `INTERFACE_` properties.
- If $S = PUBLIC$: $P$ sets both the build properties and the `INTERFACE_` properties. The dependent
  target gets the property for its own build, and all downstream consumers inherit it.

The `INTERFACE_LINK_LIBRARIES` of a target $T$ is the transitive closure of all `PUBLIC` and
`INTERFACE` edges reachable from $T$. When consumer $C$ links against $T$ with scope `S`, CMake
merges `T`'s `INTERFACE_LINK_LIBRARIES` into $C$'s link list if $S \in \{PUBLIC, INTERFACE\}$.

$\therefore$ A `PRIVATE` dependency creates a dead end in the propagation graph. Only `PUBLIC` and
`INTERFACE` edges allow information flow to downstream consumers. $\blacksquare$

**Corollary:** The transitive closure of `INTERFACE` properties from target $T$ to consumer $C$ is
the set of all targets reachable from $T$ via paths consisting entirely of `PUBLIC` or `INTERFACE`
edges.

## The Propagation Graph

Consider a linear dependency chain: **App $\to$ Engine $\to$ Core**.

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

_Result:_ `App` can include `<openssl/ssl.h>` without explicitly asking for it. This indicates a
tightly coupled architecture.

## Complete Property Scope Table

The following table enumerates every CMake property that supports visibility scopes and documents
the propagation behavior for each.

| Property                    | `PRIVATE` (build only) | `INTERFACE` (consumers only) | `PUBLIC` (both) | Target command                       |
| :-------------------------- | :--------------------- | :--------------------------- | :-------------- | :----------------------------------- |
| Include directories         | Yes                    | Yes                          | Yes             | `target_include_directories`         |
| Compile definitions         | Yes                    | Yes                          | Yes             | `target_compile_definitions`         |
| Compile features            | Yes                    | Yes                          | Yes             | `target_compile_features`            |
| Compile options             | Yes                    | Yes                          | Yes             | `target_compile_options`             |
| Link libraries              | Yes                    | Yes                          | Yes             | `target_link_libraries`              |
| Link options                | Yes                    | Yes                          | Yes             | `target_link_options`                |
| Link directories            | Yes                    | Yes                          | Yes             | `target_link_directories`            |
| Precompiled headers         | Yes                    | No                           | No              | `target_precompile_headers`          |
| Sources                     | Yes                    | No                           | No              | `target_sources`                     |
| Position independent code   | Yes                    | No                           | No              | `set_target_properties(PIC)`         |
| C++ standard level          | Yes                    | No                           | No              | `target_compile_features`            |
| System include directories  | Yes                    | Yes                          | Yes             | `target_include_directories(SYSTEM)` |
| Autogen include directories | Yes                    | No                           | No              | `target_include_directories` (Qt)    |

### Key Observations

1. **Not all properties propagate.** `target_sources`, `target_precompile_headers`, and position
   independent code settings are always `PRIVATE` and cannot be made transitive.
2. **Include directories and compile definitions are the most commonly propagated properties.**
   These are the properties that directly affect whether a consumer can compile against a library.
3. **Link libraries are the most dangerous property to propagate.** Every `PUBLIC` link library adds
   to the transitive closure, increasing compile times and binary size.

## Interface Libraries

An `INTERFACE` library is a CMake target that produces no binary artifact (`.a` / `.lib`). It
functions purely as a container for Usage Requirements. This is an architectural pattern for
standardizing project configuration.

### Pattern 1: The Project Options Target

Instead of setting global flags (`CMAKE_CXX_FLAGS`), create a meta-target that defines the standard
compilation environment.

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

**Usage:** Every target in the system simply links against this interface.

```cmake
add_library(Physics src/physics.cpp)
target_link_libraries(Physics PRIVATE ProjectOptions)
```

### Pattern 2: Header-Only Dependencies

When using a header-only library (like `nlohmann_json` or `Eigen`), the target definition is purely
structural.

```cmake
add_library(JsonLib INTERFACE)
target_include_directories(JsonLib INTERFACE include/)
```

### Pattern 3: Interface Alias for Installed Packages

When consuming an installed package via `find_package`, you can create an interface target to
standardize the consumption:

```cmake
find_package(fmt REQUIRED)

# Create an alias with our project's preferred settings
add_library(ProjFmt INTERFACE)
target_link_libraries(ProjFmt INTERFACE fmt::fmt)
target_compile_definitions(ProjFmt INTERFACE FMT_HEADER_ONLY)
```

## Build Interface vs. Install Interface

A critical nuance in property propagation is the difference between directory layouts during
development (Build Tree) versus after deployment (Install Tree).

- **Build Tree:** Headers are located in `${CMAKE_CURRENT_SOURCE_DIR}/include`.
- **Install Tree:** Headers are located in `${CMAKE_INSTALL_PREFIX}/include`.

If you hardcode the include path, installed consumers will fail to find headers. You must use
**Generator Expressions** to distinguish these states.

```cmake
target_include_directories(CoreSystem PUBLIC
    # Used when building the project locally
    $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>

    # Used by consumers importing the installed package
    $<INSTALL_INTERFACE:include>
)
```

### Why This Matters: Formal Treatment

During development, the build tree has a different directory layout than the install tree. Consider
a library `Core` with headers in `Core/include/`. During an in-tree build, the include path is
`/path/to/project/Core/include`. After installation with `DESTINATION include`, the path is
`/usr/local/include`.

If you write:

```cmake
# WRONG: hardcoded source path
target_include_directories(Core PUBLIC ${CMAKE_CURRENT_SOURCE_DIR}/include)
```

The installed package will embed an absolute path to the build machine's source directory. Any
consumer on a different machine will fail to find headers. The `$<BUILD_INTERFACE>` and
`$<INSTALL_INTERFACE>` generator expressions solve this by conditionally selecting the correct path
based on the context.

### Installation with Export

```cmake
install(TARGETS Core
    EXPORT CoreTargets
    LIBRARY DESTINATION lib
    ARCHIVE DESTINATION lib
    RUNTIME DESTINATION bin
    INCLUDES DESTINATION include
)

install(EXPORT CoreTargets
    FILE CoreTargets.cmake
    NAMESPACE Core::
    DESTINATION lib/cmake/Core
)
```

Consumers then use:

```cmake
find_package(Core REQUIRED)
target_link_libraries(MyApp PRIVATE Core::Core)
```

## System Includes (Warning Suppression)

When linking third-party dependencies, you often want to inherit their Include Directories but
suppress compiler warnings generated by their code.

CMake provides the `SYSTEM` attribute for this purpose.

```cmake
# Using explicit SYSTEM property
target_include_directories(CoreSystem SYSTEM PUBLIC ${Boost_INCLUDE_DIRS})
```

When checking targets, dependencies marked as `SYSTEM` are passed to the compiler via `-isystem`
(Clang/GCC) or `/external:I` (MSVC). This instructs the compiler to treat them as system headers,
disabling warnings for those specific paths while maintaining visibility.

## Architectural Best Practices

1. **Default to PRIVATE:** Start with `PRIVATE` visibility for all dependencies. Only escalate to
   `PUBLIC` if a type from the dependency appears in your public headers.
2. **Avoid Global State:** Never use `include_directories()` or `link_libraries()`. These apply to
   the directory scope and break the encapsulation of the dependency graph.
3. **Use Interface Targets:** Centralize warning levels, sanitizers, and architecture flags into an
   `INTERFACE` target rather than repeating variables across multiple `CMakeLists.txt` files.

## Build Property Categories

CMake classifies build properties into several categories, each with distinct propagation semantics.
Understanding these categories is essential for controlling the dependency graph precisely.

### Compile Definitions

Compile definitions (`-D` flags) propagate through `target_compile_definitions` with visibility
scopes.

```cmake
# Core library defines NDEBUG in release builds
add_library(Core src/core.cpp)
target_compile_definitions(Core PUBLIC
    CORE_VERSION="2.1.0"       # Visible to Core and all consumers
)
target_compile_definitions(Core PRIVATE
    CORE_INTERNAL_LOGGING       # Visible only to Core
)
```

**Propagation result:**

- `Core` sees both `CORE_VERSION` and `CORE_INTERNAL_LOGGING`.
- Any target linking `Core` (e.g., `Engine`) sees `CORE_VERSION` but **not**
  `CORE_INTERNAL_LOGGING`.

### Include Directories

Include directories control where the compiler searches for headers (`-I` / `-isystem` flags).

```cmake
add_library(Engine src/engine.cpp)
target_include_directories(Engine
    PUBLIC
        $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>  # Consumers need this
        $<INSTALL_INTERFACE:include>
    PRIVATE
        ${CMAKE_CURRENT_SOURCE_DIR}/src  # Only Engine needs this
)
```

**Key rule:** If a header is `#include`d in your public `.h` file, the directory containing that
header must be a `PUBLIC` include directory. If a header is only `#include`d in `.cpp` files, it
should be `PRIVATE`.

### Compile Options

Compiler flags (`-Wall`, `-O2`, `/W4`) propagate similarly.

```cmake
add_library(Physics src/physics.cpp)
target_compile_options(Physics PRIVATE
    $<$<CONFIG:Debug>:-fno-omit-frame-pointer>
    $<$<CONFIG:Release>:-O3 -march=native>
)
```

**Important:** Compiler optimization flags should almost always be `PRIVATE`. Propagating
`-march=native` to a consumer building on a different CPU would cause illegal instruction errors at
runtime.

### Link Libraries

`target_link_libraries` is the most complex propagation mechanism because it triggers transitive
property propagation from the linked target.

```cmake
add_library(Network src/network.cpp)
target_link_libraries(Network PUBLIC OpenSSL::SSL)
target_link_libraries(Network PRIVATE zstd::zstd_static)

add_library(Server src/server.cpp)
target_link_libraries(Server PUBLIC Network)
```

**Resulting propagation for `Server`:**

- Links against `Network` (direct).
- Inherently links against `OpenSSL::SSL` (transitive, because `Network` declared it `PUBLIC`).
- Does **not** link against `zstd::zstd_static` (transitive blocked by `PRIVATE` on `Network`).

## How Transitive Dependencies Affect Binary Size

Every `PUBLIC` or `INTERFACE` link library adds to the transitive closure of dependencies that the
final executable must link against. This has direct consequences for binary size.

### Static Linking Amplification

In a statically linked application, the transitive closure determines which object code is included
in the final binary.

```text
App (static)
  +-- Server
  |     +-- Network (PUBLIC)
  |     |     +-- OpenSSL::SSL (PUBLIC)   <- ~2MB
  |     |     +-- zstd (PRIVATE)          <- ~500KB (NOT linked into App)
  |     +-- Logger (PUBLIC)
  |           +-- spdlog (PUBLIC)         <- ~200KB
  +-- Framework
        +-- Core (PUBLIC)
              +-- fmt (PUBLIC)            <- ~150KB
```

**Total binary size contribution from transitive deps:** ~2.35MB (OpenSSL dominates).

If `OpenSSL::SSL` were changed to `PRIVATE` on `Network`, the binary would shrink by ~2MB, but
`Server` could no longer expose OpenSSL types in its public headers.

### Measuring Transitive Dependency Size

Use `nm` or `size` to inspect the contribution of each library:

```bash
# Show symbol sizes in the final binary
nm --size-sort -S build/app | tail -20

# Show section sizes
size build/app
# text    data     bss     dec     hex filename
# 1234567  89012   34567  1358146  14bc82 app
```

### Shared Linking: A Different Trade-off

With shared linking, transitive dependencies do not increase the executable's size (they are in
`.so`/`.dll` files). However, they increase the **runtime dependency count**, which affects
deployment complexity.

```bash
# List shared library dependencies of a binary
ldd build/app
# linux-vdso.so.1
# libssl.so.3 => /usr/lib/libssl.so.3
# libcrypto.so.3 => /usr/lib/libcrypto.so.3
# libstdc++.so.6 => /usr/lib/libstdc++.so.6
# libc.so.6 => /usr/lib/libc.so.6
```

Each `.so` listed is a transitive dependency that must be present on the deployment target.

## Example Walkthrough: A Complete Dependency Chain

Consider a realistic project with a multi-level dependency chain.

```text
my-app
  +-- http-client (our library)
       +-- libcurl (system/vcpkg)
       |     +-- OpenSSL (transitive from libcurl)
       |     +-- zlib (transitive from libcurl)
       +-- nlohmann-json (direct)
```

### Step-by-Step Propagation

**File:** `http-client/CMakeLists.txt`

```cmake
add_library(http-client
    src/http_client.cpp
)

target_include_directories(http-client
    PUBLIC
        $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>
        $<INSTALL_INTERFACE:include>
    PRIVATE
        ${CMAKE_CURRENT_SOURCE_DIR}/detail
)

target_link_libraries(http-client
    PUBLIC
        nlohmann_json::nlohmann_json    # Exposed in http_client.h
    PRIVATE
        CURL::libcurl                    # Used only in .cpp
)
```

**File:** `app/CMakeLists.txt`

```cmake
add_executable(my-app src/main.cpp)
target_link_libraries(my-app PRIVATE http-client)
```

### What `my-app` Sees

| Property                       | Propagated to `my-app`? | Reason                                             |
| :----------------------------- | :---------------------- | :------------------------------------------------- |
| `http-client` include dir      | Yes                     | `PUBLIC` on `http-client`                          |
| `nlohmann_json::nlohmann_json` | Yes                     | `PUBLIC` on `http-client`                          |
| `nlohmann_json` include dir    | Yes                     | Transitive via `PUBLIC` link                       |
| `CURL::libcurl`                | No                      | `PRIVATE` on `http-client`                         |
| `OpenSSL`                      | No                      | `PRIVATE` on `libcurl` (if set correctly by vcpkg) |
| `zlib`                         | No                      | `PRIVATE` on `libcurl` (if set correctly by vcpkg) |

**Result:** `my-app` can include `<nlohmann/json.hpp>` and `<http_client.h>` but cannot directly
include `<curl/curl.h>`. If `my-app` needs curl directly, it must add `CURL::libcurl` to its own
`target_link_libraries`.

### Changing the Design

If `http-client` should expose a `curl_easy_setopt` wrapper in its public header, the design must
change:

```cmake
target_link_libraries(http-client
    PUBLIC
        nlohmann_json::nlohmann_json
        CURL::libcurl                    # Now PUBLIC because http_client.h uses curl types
)
```

Now `my-app` inherits `CURL::libcurl`, and with it, the transitive `OpenSSL` and `zlib`
dependencies. This is the correct behavior: the compiler needs OpenSSL headers to compile code that
includes `http_client.h`.

## Generator Expressions for Conditional Propagation

CMake generator expressions allow fine-grained control over when properties propagate.

### Platform-Specific Definitions

```cmake
add_library(PlatformIO src/platform_io.cpp)
target_compile_definitions(PlatformIO PUBLIC
    $<$<PLATFORM_ID:Windows>:PLATFORM_WINDOWS>
    $<$<PLATFORM_ID:Linux>:PLATFORM_LINUX>
    $<$<PLATFORM_ID:Darwin>:PLATFORM_MACOS>
)
```

### Configuration-Specific Linking

```cmake
target_link_libraries(http-client
    PUBLIC nlohmann_json::nlohmann_json
    PRIVATE
        CURL::libcurl
        $<$<CONFIG:Debug>:address-sanitizer>   # Only linked in debug builds
)
```

### Compiler-ID Conditional Options

```cmake
add_library(Portable target src/portable.cpp)
target_compile_options(Portable PUBLIC
    $<$<CXX_COMPILER_ID:GNU>:-fno-keep-inline-dllexport>
    $<$<CXX_COMPILER_ID:Clang>:-fvisibility-inlines-hidden>
    $<$<CXX_COMPILER_ID:MSVC>:/W4>
)
```

### Feature Test Conditional Definitions

```cmake
target_compile_definitions(Portable PUBLIC
    $<$<BOOL:${USE_FEATURE_X}>:FEATURE_X_ENABLED>
)
```

### Interface Link Libraries (Head-Only Forwarding)

When a header-only library wraps another library, use `INTERFACE_LINK_LIBRARIES` to propagate the
dependency without creating a binary:

```cmake
add_library(json-wrapper INTERFACE)
target_include_directories(json-wrapper INTERFACE include/)
target_link_libraries(json-wrapper INTERFACE nlohmann_json::nlohmann_json)

# Consumers link json-wrapper and automatically get nlohmann_json
target_link_libraries(my-app PRIVATE json-wrapper)
```

## Transitive Usage Requirements and `INTERFACE_*` Properties

Every `target_link_libraries` call with `PUBLIC` or `INTERFACE` scope triggers the propagation of
all `INTERFACE_*` properties from the linked target. The complete list of propagated properties:

| Propagated Property                   | Set by                                   | Effect on consumer                     |
| :------------------------------------ | :--------------------------------------- | :------------------------------------- |
| `INTERFACE_INCLUDE_DIRECTORIES`       | `target_include_directories(... PUBLIC)` | Adds to consumer's `-I` paths          |
| `INTERFACE_COMPILE_DEFINITIONS`       | `target_compile_definitions(... PUBLIC)` | Adds to consumer's `-D` flags          |
| `INTERFACE_COMPILE_OPTIONS`           | `target_compile_options(... PUBLIC)`     | Adds to consumer's compiler flags      |
| `INTERFACE_LINK_LIBRARIES`            | `target_link_libraries(... PUBLIC)`      | Links consumer against transitive deps |
| `INTERFACE_LINK_OPTIONS`              | `target_link_options(... PUBLIC)`        | Adds to consumer's linker flags        |
| `INTERFACE_LINK_DIRECTORIES`          | `target_link_directories(... PUBLIC)`    | Adds to consumer's `-L` paths          |
| `INTERFACE_COMPILE_FEATURES`          | `target_compile_features(... PUBLIC)`    | Enables C++ features for consumer      |
| `INTERFACE_POSITION_INDEPENDENT_CODE` | `set_target_properties(PIC)`             | Enables PIC for consumer               |

This is why a single `PUBLIC` link can cause a cascade of changes: it propagates not just the link
dependency, but all of the linked target's own transitive usage requirements.

## Common Pitfalls

1. **Overusing PUBLIC:** The most common mistake is making every dependency `PUBLIC` "just in case."
   This bloats the transitive closure, increases compile times (more headers to parse), and creates
   fragile coupling. Start with `PRIVATE` and escalate only when needed.
2. **Header-only libraries as PRIVATE:** A header-only library linked as `PRIVATE` means its include
   directories are not propagated. If any header in the target's public interface includes the
   header-only library's headers, consumers will fail to compile.
3. **Mismatched `INTERFACE` and `PUBLIC` in installed packages:** When exporting a CMake package via
   `install(EXPORT ...)`, the `PUBLIC` and `INTERFACE` properties must be correctly specified. If a
   dependency is `PUBLIC` in the build tree but not exported in the install tree, installed
   consumers will get linker errors.
4. **`SYSTEM` include directories:** Using `SYSTEM` on your own project's headers (not third-party)
   can mask legitimate warnings. Reserve `SYSTEM` for external dependencies only.
5. **Generator expressions in wrong scope:** A generator expression like `$<CONFIG:Debug>` in a
   `PUBLIC` compile option propagates to consumers. If the consumer has a different configuration,
   the option may be silently ignored or incorrectly applied. Use `PRIVATE` for
   configuration-specific options.
6. **Circular transitive dependencies:** If `A` links `B` PUBLIC and `B` links `A` PUBLIC, CMake
   detects a cycle and errors. This indicates a design flaw: the two libraries should be merged or
   the dependency should be made PRIVATE on at least one side.
7. **Forgetting that `target_link_libraries` propagates more than just linking.** When you write
   `target_link_libraries(MyLib PUBLIC OtherLib)`, you are not just adding a linker dependency. You
   are also propagating all of `OtherLib`'s include directories, compile definitions, compile
   options, and link options to every consumer of `MyLib`. This can cause unexpected side effects
   like inheriting warning suppression flags or optimization flags from transitive dependencies.

## Property Propagation Debugging

When builds fail due to incorrect property propagation, use the following diagnostic techniques.

### Inspecting Target Properties

```cmake
# Print all properties of a target
get_target_property(INCLUDE_DIRS MyLib INCLUDE_DIRECTORIES)
message(STATUS "MyLib INCLUDE_DIRECTORIES: ${INCLUDE_DIRS}")

get_target_property(INTERFACE_LINK_LIBS MyLib INTERFACE_LINK_LIBRARIES)
message(STATUS "MyLib INTERFACE_LINK_LIBRARIES: ${INTERFACE_LINK_LIBS}")

get_target_property(COMPILE_DEFS MyLib COMPILE_DEFINITIONS)
message(STATUS "MyLib COMPILE_DEFINITIONS: ${COMPILE_DEFS}")
```

### Tracing the Transitive Closure

CMake does not provide a built-in command to trace the full transitive closure of properties, but
you can use generator expressions to inspect what a target sees:

```cmake
# Show the effective link libraries (including transitive)
target_link_libraries(MyApp PRIVATE
    $<$<TARGET_EXISTS:MyLib>:MyLib>
)

# Show the include directories that would propagate to MyApp
add_custom_target(debug_props
    COMMAND ${CMAKE_COMMAND}
        --install-prefix ${CMAKE_BINARY_DIR}/debug
        -P ${CMAKE_SOURCE_DIR}/cmake/debug_props.cmake
)
```

### Common Diagnostic Patterns

1. **"Cannot find -lfoo" at link time:** The library is linked with `PUBLIC` but the include
   directory is `PRIVATE`, so the consumer cannot find the headers. Or the library is linked as
   `PRIVATE` but the consumer's header includes it.
2. **"Undeclared identifier" in consumer:** A `PUBLIC` include directory is missing. The dependency
   is linked but its include paths are not propagated.
3. **Unexpected compile flags in consumer:** A dependency sets `target_compile_options(PUBLIC ...)`
   on a third-party library's target, which propagates unwanted flags. Fix by wrapping the
   third-party library in an `INTERFACE` target with only the necessary properties.

## Generator Expression Quick Reference

The following table lists commonly used generator expressions for property propagation control.

| Expression                                       | Evaluates to                           | Use case                        |
| :----------------------------------------------- | :------------------------------------- | :------------------------------ |
| `$<CONFIG:Debug>`                                | `1` in Debug, `0` otherwise            | Configuration-specific options  |
| `$<PLATFORM_ID:Linux>`                           | `1` on Linux, `0` otherwise            | Platform-specific options       |
| `$<CXX_COMPILER_ID:Clang>`                       | `1` for Clang, `0` otherwise           | Compiler-specific options       |
| `$<BUILD_INTERFACE:...>`                         | Value in build tree only               | Build-tree-only include paths   |
| `$<INSTALL_INTERFACE:...>`                       | Value in install tree only             | Install-tree-only include paths |
| `$<TARGET_EXISTS:foo>`                           | `1` if target `foo` exists             | Conditional linking             |
| `$<LINK_ONLY:foo>`                               | Link `foo` but do not add include dirs | Header-only library separation  |
| `$<STREQUAL:${CMAKE_BUILD_TYPE},Release>`        | `1` in Release builds                  | Build-type comparison           |
| `$<BOOL:${ENABLE_FEATURE}>`                      | `1` if option is truthy                | Option-based conditional        |
| `$<COMPILE_LANGUAGE:CXX>`                        | `1` for C++ sources only               | C++-only compile options        |
| `$<COMPILE_LANGUAGE:C>`                          | `1` for C sources only                 | C-only compile options          |
| `$<AND:$<CONFIG:Debug>,$<PLATFORM_ID:Linux>>`    | Logical AND                            | Complex conditions              |
| `$<OR:$<CONFIG:Debug>,$<CONFIG:RelWithDebInfo>>` | Logical OR                             | Multiple config conditions      |

## See Also

- [Dependency Resolution](1_dependency_architectures_models.md) -- How the dependency graph is
  constructed
- [vcpkg](3_vcpkg.md) -- How vcpkg manages property propagation for installed packages
- [CPM.cmake](2_cpm.md) -- How `add_subdirectory` merges dependency properties
- [Binary Caching](6_binary_caching.md) -- Binary artifacts and their dependency metadata
