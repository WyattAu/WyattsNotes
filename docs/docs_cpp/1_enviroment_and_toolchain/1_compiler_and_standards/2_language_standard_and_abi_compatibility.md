---
title: Language Standard Flags and ABI Compatibility
date: 2025-12-10T04:34:01.071Z
tags:
  - cpp
categories:
  - cpp
slug: language-standard-flags-abi-compatibility
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

Installing a compiler is insufficient for C++23 development. By default, compilers often default to
older standards (C++14 or C++17) to maintain backward compatibility. This module details the
invocation flags required to enable C++23 features and analyzes the critical concept of Application
Binary Interface (ABI) compatibility across different standard library implementations.

## Compiler Invocation Standards

To utilize C++23 features (such as `std::expected`, `std::print`, or `std::ranges::to`), specific
flags must be passed to the compiler driver.

### ISO Standard Flags

The following table outlines the flags required to enable strict C++23 support.

| Compiler          | Flag             | Description                                                                                                                               |
| :---------------- | :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| **Clang 16+**     | `-std=c++23`     | Enables ISO C++23 standard features.                                                                                                      |
| **GCC 13+**       | `-std=c++23`     | Enables ISO C++23 standard features.                                                                                                      |
| **MSVC (VS2022)** | `/std:c++latest` | Enables the latest working draft features. <br/>_(Note: `/std:c++23` is available in recent builds but may require specific VS updates)._ |

### Extension Flags vs. Strict ISO

Compilers often provide two modes: strict ISO compliance and GNU/MSVC extensions.

- **`-std=c++23`**: Strict ISO mode. Recommended for cross-platform portability.
- **`-std=gnu++23`**: ISO C++23 plus GNU extensions (e.g., Statement Expressions, Variable Length
  Arrays). This is the default behavior if `-std` is omitted in GCC, but targeting a lower standard
  version.
- **`/Permissive-`** (MSVC): Disables non-standard behavior. This is implicitly enabled by
  `/std:c++20` and later, but explicitly adding it ensures strict conformance.

**Best Practice:** Always explicitly define `-std=c++23` (or `/std:c++latest`) and disable
extensions to prevent vendor lock-in.

## Standard Library Implementations

The C++ "compiler" consists of the frontend (syntax parsing) and the Standard Library implementation
(headers and runtime binaries). These are distinct components and can be mixed in specific
configurations.

### The Three Major Implementations

1. **libstdc++ (The GNU Standard C++ Library)**
   - **Primary Platform:** Linux (Default).
   - **Maintainer:** Free Software Foundation (GCC).
   - **Characteristics:** Monolithic, extremely stable ABI.

2. **libc++ (LLVM C++ Standard Library)**
   - **Primary Platform:** macOS (Default), Android, FreeBSD.
   - **Maintainer:** LLVM Project.
   - **Characteristics:** Modular, faster compile times, modern codebase. It does not aim for binary
     compatibility with `libstdc++`.

3. **MSVC STL**
   - **Primary Platform:** Windows (MSVC).
   - **Maintainer:** Microsoft.
   - **Characteristics:** Tightly coupled with the Windows UCRT.

### Switching Implementations (Clang)

Clang allows switching the underlying standard library using the `-stdlib` flag. This is common when
testing for portability or using Clang on Linux.

```bash
# Link against LLVM's libc++ (Requires libc++-dev installed)
clang++ -std=c++23 -stdlib=libc++ main.cpp

# Link against GNU's libstdc++ (Default on Linux)
clang++ -std=c++23 -stdlib=libstdc++ main.cpp
```

:::warning
Library Availability On Linux, using `-stdlib=libc++` requires the installation of
specific library packages (e.g., `libc++-dev` and `libc++abi-dev` on Debian/Ubuntu). If these are
missing, the linker will fail to find symbols.
:::

## Application Binary Interface (ABI)

The Application Binary Interface (ABI) defines how data structures and routines are accessed in
machine code. Unlike the API (Source Compatibility), which deals with code syntax, the ABI deals
with:

1. **Data Layout:** The size, alignment, and padding of classes (e.g., `sizeof(std::string)`).
2. **Calling Convention:** How arguments are passed in registers/stack (e.g., x64 System V ABI vs.
   Microsoft x64 calling convention).
3. **Name Mangling:** How C++ symbol names are encoded into unique strings for the linker (e.g.,
   `_ZNK3MapI...`).

The Itanium C++ ABI [Itanium ABI] is the specification used by GCC and Clang on all non-Windows
platforms. It governs vtable layout, the order of base class subobjects, the construction and
destruction semantics of virtual bases, and the name mangling algorithm. Understanding this
specification is necessary for diagnosing ABI breakage.

### The Linkage Rule

**Rule:** All object files (`.o`, `.obj`) and static libraries (`.a`, `.lib`) linked into a single
executable **must** be compiled with a compatible ABI.

Violating this results in Linker Errors (best case) or runtime memory corruption (worst case).

### Proof of Binary Incompatibility

Consider two translation units compiled with different ABIs. Unit A uses `libstdc++` and Unit B uses
`libc++`. Both define a function that takes `std::string` by value:

```cpp
// unit_a.cpp — compiled with -stdlib=libstdc++
#include <string>
#include <cstddef>

extern "C" std::size_t get_string_size_libstdcxx(std::string s) {
    return s.size();
}
```

```cpp
// unit_b.cpp — compiled with -stdlib=libc++
#include <string>
#include <iostream>
#include <cstddef>

extern "C" std::size_t get_string_size_libstdcxx(std::string s);

int main() {
    std::string msg = "hello";
    // The caller (libc++) constructs a std::string with sizeof=24 (libc++ SSO buffer is 22 bytes)
    // The callee (libstdc++) expects sizeof=32 (libstdc++ SSO buffer is 15 bytes)
    // The callee reads 32 bytes from the stack, but only 24 were written.
    // This reads 8 bytes of stack garbage, causing undefined behavior.
    std::cout << get_string_size_libstdcxx(msg) << "\n";
    return 0;
}
```

This compiles and links without error because `extern "C"` suppresses name mangling. However, at
runtime, `get_string_size_libstdcxx` interprets the stack according to `libstdc++`'s `std::string`
layout, which differs from `libc++`'s layout. The `size()` call reads from the wrong offset and
returns garbage. This is undefined behavior [N4950 §6.9].

**Theorem:** Two object files compiled against different C++ standard library implementations are
binary-incompatible even when the source-level API is identical.

**Proof sketch:**

1. Each standard library implementation defines its own `std::string` layout (member order, SSO
   buffer size, alignment padding).
2. The C++ calling convention passes non-trivially-copyable class types by value via memory (caller
   allocates space, callee reads from that space).
3. If `sizeof(std::string)` differs between implementations, the callee reads bytes that were never
   written by the caller, violating memory safety.
4. Even when `sizeof` is coincidentally equal, the internal layout (offset of size field, offset of
   data pointer) differs, causing the callee to interpret data fields incorrectly.

$\therefore$ No correct program can be formed by linking object files from different standard
library ABIs. $\blacksquare$

### Common ABI Hazards

#### 1. The GCC Dual ABI (`_GLIBCXX_USE_CXX11_ABI`)

In GCC 5.1, `std::string` and `std::list` were rewritten to comply with C++11 standards (forbidding
Copy-On-Write implementations). To maintain backward compatibility with older binaries, `libstdc++`
contains **two** versions of these symbols.

- `std::__cxx11::string` (Modern, SSO-optimized).
- `std::string` (Legacy, Copy-On-Write).

This is controlled via a preprocessor macro:

- `-D_GLIBCXX_USE_CXX11_ABI=1` (Default on modern Linux distros).
- `-D_GLIBCXX_USE_CXX11_ABI=0` (Legacy mode).

**Hazard:** Linking a library built with ABI=0 against an application built with ABI=1 will fail to
link because the symbol names for `std::string` are mangled differently. This is explained in
further detail in the [Standard Library Implementation](3_standard_library_implementation.md)
section.

The root cause is that C++11 prohibited Copy-On-Write semantics for `std::basic_string` [N4950
§23.4.5]. The legacy `libstdc++` implementation used COW, which means iterators could be invalidated
by non-const operations on aliased strings. The new ABI uses Small String Optimization (SSO)
instead, eliminating this class of bugs at the cost of breaking binary compatibility.

#### 2. MSVC vs. MinGW vs. Clang (Windows)

Windows has two distinct ecosystem ABIs:

1. **MSVC ABI:** Used by Visual Studio.
2. **Itanium/GNU ABI:** Used by MinGW-w64.

**Hazard:** You cannot generally link a C++ static library built with MinGW (`libfoo.a`) into an
MSVC project (`project.exe`). They use different name mangling and exception handling mechanisms
(table-based vs. DWARF/SJLJ).

**Clang on Windows Exception:** Clang on Windows can simulate either ABI depending on the driver:

- `clang++.exe` (MinGW-style): Targets GNU ABI.
- `clang-cl.exe`: Targets MSVC ABI (acts as a drop-in replacement for `cl.exe`).

### Verification Strategy

To determine which ABI and Standard Library your environment is using, compile and run the following
inspection code.

```cpp
#include <iostream>
#include <vector>

int main() {
    std::cout << "Compiler and ABI Inspection:\n";

    // 1. Check Standard Version
    std::cout << "Standard (__cplusplus): " << __cplusplus << "\n";

    // 2. Check Standard Library
#if defined(_LIBCPP_VERSION)
    std::cout << "Library: libc++ (Version " << _LIBCPP_VERSION << ")\n";
#elif defined(__GLIBCXX__)
    std::cout << "Library: libstdc++ (Timestamp " << __GLIBCXX__ << ")\n";
#elif defined(_MSVC_STL_VERSION)
    std::cout << "Library: MSVC STL (Version " << _MSVC_STL_VERSION << ")\n";
#else
    std::cout << "Library: Unknown\n";
#endif

    // 3. Check GCC Dual ABI Status (Linux/MinGW only)
#if defined(_GLIBCXX_USE_CXX11_ABI)
    std::cout << "GLIBCXX ABI: " << _GLIBCXX_USE_CXX11_ABI << "\n";
#endif

    return 0;
}
```

### CMake Integration

In this course, we abstract these flags using CMake to ensure cross-platform consistency. Do not
manually type `-std=c++23` in the terminal during development. Configure your `CMakeLists.txt` as
follows:

```cmake
cmake_minimum_required(VERSION 3.25)
project(Cpp23Architecture)

# Force C++23 Standard
set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF) # Disables GNU extensions (Strict ISO)

add_executable(app main.cpp)
```

This configuration automatically translates to:

- `-std=c++23` on GCC/Clang.
- `/std:c++latest` (or `/std:c++23`) on MSVC.

## Detailed C++ Standard Feature Overview

### C++11 — The Modern C++ Foundation

C++11 introduced the most significant set of changes since the original standard. Key features:

- `auto` type deduction, range-based for loops, `nullptr`, `enum class`
- Move semantics (`std::move`, `std::forward`, rvalue references)
- Smart pointers (`std::unique_ptr`, `std::shared_ptr`, `std::weak_ptr`)
- Lambda expressions, `std::function`, `std::bind`
- `constexpr`, `static_assert`, `decltype`
- Variadic templates, template aliases
- `<thread>`, `<mutex>`, `<condition_variable>`, `<future>`
- Uniform initialization (`{}` syntax), `std::initializer_list`

### C++14 — Bug Fixes and Refinements

Incremental improvements over C++11:

- Generic lambdas (`auto` parameters), captured-by-move lambdas
- `std::make_unique`, `std::exchange`, `std::integer_sequence`
- Return type deduction (`auto f() { return 42; }`)
- Relaxed `constexpr` (allows loops, local variables)
- `[[deprecated]]` attribute, variable templates

### C++17 — Major New Features

- Structured bindings (`auto [a, b] = pair;`)
- `std::optional`, `std::variant`, `std::any`
- `std::filesystem`, `std::string_view`
- `if constexpr`, fold expressions, `std::apply`
- Guaranteed copy elision (prvalues are not objects until materialized)
- `std::invoke`, `std::byte`, nested namespaces (`A::B::C`)
- `__has_include`, `<charconv>` (`std::from_chars`, `std::to_chars`)

### C++20 — The "Big Four"

- Concepts (`template&lt;std::integral T&gt;`), requires clauses
- Ranges (`std::views::filter`, `std::views::transform`, range adapters)
- Coroutines (`co_await`, `co_yield`, `co_return`)
- Modules (`export module foo;`, `import foo;`)

Also: Three-way comparison (`<=>`), `std::format`, designated initializers, `std::span`,
`std::jthread`, calendar/time zone libraries.

### C++23 — Refinements and Completeness

- `std::print`, `std::println` (free-function formatting)
- `std::expected&lt;T, E&gt;` (error handling without exceptions)
- `std::flat_map`, `std::flat_set` (sorted associative containers using contiguous storage)
- `std::mdspan` (multidimensional view)
- `std::move_only_function`
- `#embed` directive (binary resource inclusion)
- `auto` in function parameters, deducing `this`

### C++26 Preview (as of 2025)

- `std::reflection` (compile-time reflection)
- `std::text_encoding` (text encoding detection)
- Patches for contracts, `std::expected` monadic operations
- Linear algebra (`std::linalg`)
- Hazard pointers and RCU (lock-free data structures)

## Compiler Version Support Matrix

| Feature | GCC Min | Clang Min | MSVC Min |
| :------ | :------ | :-------- | :------- |
| C++11   | 4.8     | 3.3       | VS 2013  |
| C++14   | 5.0     | 3.4       | VS 2015  |
| C++17   | 7.0     | 5.0       | VS 2017  |
| C++20   | 10.0    | 10.0      | VS 2019  |
| C++23   | 13.0    | 16.0      | VS 2022  |

### Feature-Level Support Details

Different compilers achieve "full" C++23 support at different versions. The table above shows the
minimum version for basic support, but some features require newer versions:

| C++23 Feature             | GCC Min | Clang Min | MSVC Min | Notes                                     |
| :------------------------ | :------ | :-------- | :------- | :---------------------------------------- |
| `std::print`              | 14.0    | 18.0      | 19.40    | Requires OS-level terminal support        |
| `std::expected`           | 13.0    | 16.0      | 19.38    | Widely available                          |
| `std::flat_map`           | 14.0    | 17.0      | 19.40    | Requires sorted associative container     |
| `std::mdspan`             | 14.0    | 18.0      | 19.40    | Multidimensional view                     |
| `std::move_only_function` | 13.0    | 18.0      | 19.38    | Move-only callable wrapper                |
| `std::generator`          | 14.0    | 18.0      | N/A      | Coroutine-based generator                 |
| `std::ranges::to`         | 14.0    | 18.0      | 19.40    | Range-to-container conversion             |
| `#embed`                  | N/A     | 19.0      | N/A      | Resource embedding                        |
| `deducing this`           | N/A     | 18.0      | N/A      | Explicit object member functions          |
| `auto` in parameters      | N/A     | N/A       | N/A      | Not yet implemented in any major compiler |
| `std::format` full spec   | 14.0    | 17.0      | 19.38    | Many format specifiers added in C++23     |

## ABI Stability Between Compiler Versions

### What Changes Between ABI Versions

An ABI break occurs when the binary interface of a compiled entity changes in a way that is
incompatible with previously compiled code. Common causes:

1. **Name mangling changes.** GCC 5.1 changed the mangling of `std::string` and `std::list` (the
   dual ABI issue described above).
2. **Layout changes.** Adding virtual functions changes the vtable layout. Changing member order or
   size changes the object layout.
3. **Calling convention changes.** Rare, but possible when new register classes are added (e.g.,
   AVX-512 register passing).
4. **Standard library changes.** Adding members to standard library types (e.g., `std::vector` grew
   additional member variables in some implementations).

### ABI-Breaking Changes Across Standards

The following table catalogs known ABI-breaking changes introduced by various C++ standards in
`libstdc++` and `libc++`.

| Change                            | Standard | Implementation | Effect                                      |
| :-------------------------------- | :------- | :------------- | :------------------------------------------ |
| `std::string` COW to SSO          | C++11    | libstdc++      | Dual ABI; `sizeof(std::string)` changed     |
| `std::list` size field removal    | C++11    | libstdc++      | Dual ABI; `O(1)` size() required node count |
| `std::vector` bool specialization | C++20    | libstdc++      | Minor layout changes in some configurations |
| `std::optional` union member      | C++23    | libc++         | ABI version bump via `_LIBCPP_ABI_VERSION`  |
| `std::function` small buffer      | C++14    | libc++         | Layout change in libc++ ABI v2              |
| `std::shared_ptr` control block   | C++20    | MSVC STL       | Debug-only layout change (IDL sensitive)    |
| `std::locale::facet` refcount     | C++11    | libstdc++      | Atomic refcount changed layout              |
| `std::type_info` / RTTI           | C++11    | All            | vtable changes for virtual bases            |

### ABI Breakage Examples

```cpp
// v1 of library (libfoo.so):
struct Config {
    int timeout = 30;
    bool verbose = false;
};

// v2 of library (libfoo.so):
struct Config {
    int timeout = 30;
    bool verbose = false;
    int retries = 3;  // NEW FIELD — changes sizeof(Config)
};

// Application compiled against v1, linked against v2:
// - If application passes Config by value, the callee reads past the allocated memory
// - If application accesses retries, it reads garbage from adjacent stack/heap
// This is an ABI break even though the source API "looks" compatible.
```

This is a concrete instance of the One Definition Rule (ODR) violation at the binary level [N4950
§6.3]. The ODR requires that every entity with external linkage have exactly one definition across
all translation units. When the definition of `Config` changes between library version v1 and v2,
but the consumer was compiled against v1, the binary contains two incompatible definitions of
`Config` in the same program. The linker does not detect this because the struct has no mangled
symbol (it is not a function or global variable).

### The `-fabi-version` Flags (GCC)

GCC provides flags to control the ABI version used during compilation. These are relevant when
building code that must interoperate with older binaries.

```bash
# GCC 5+: default is ABI version 11 (dual ABI with CXX11 ABI enabled)
g++ -std=c++23 -fabi-version=11 code.cpp

# Force legacy ABI (equivalent to -D_GLIBCXX_USE_CXX11_ABI=0)
g++ -std=c++23 -fabi-version=10 code.cpp

# Check the current ABI version
echo | g++ -dM -E - | grep __GXX_ABI_VERSION
# Output: #define __GXX_ABI_VERSION 1017
```

ABI version 10 corresponds to the pre-C++11 ABI (COW `std::string`). ABI version 11 is the modern
C++11 ABI. There is no ABI version 12 or higher as of GCC 14; GCC has maintained ABI version 11
stability since GCC 5.1.

### Cross-Compiler ABI Compatibility Matrix

| Scenario                                                   | Compatible? | Notes                                                |
| :--------------------------------------------------------- | :---------- | :--------------------------------------------------- |
| GCC 13 $\leftrightarrow$ GCC 14 (same `-std`)              | Yes         | Same `libstdc++` ABI                                 |
| Clang 16 $\leftrightarrow$ GCC 13 (Linux, `libstdc++`)     | Usually     | Must use same `libstdc++` version and `-std` flag    |
| Clang 16 (`libc++`) $\leftrightarrow$ GCC 13 (`libstdc++`) | **No**      | Different standard library ABIs                      |
| MSVC 2022 $\leftrightarrow$ MinGW-w64 (Windows)            | **No**      | Different name mangling, exception handling, C++ ABI |
| GCC Linux $\leftrightarrow$ Clang Linux (`libstdc++`)      | Usually     | Same `libstdc++.so` must be used at runtime          |
| MSVC 2019 $\leftrightarrow$ MSVC 2022                      | Usually     | MSVC STL aims for ABI stability, but not guaranteed  |

:::warning
Mixing Clang and GCC on Linux with the same `libstdc++` is generally safe for the same
C++ standard version. However, some ABI-affecting flags (like `-D_GLIBCXX_USE_CXX11_ABI`) must be
consistent across all object files in the final binary.
:::

## MSVC ABI Differences

MSVC uses a different C++ ABI from the Itanium ABI used by GCC/Clang. Key differences:

1. **Name mangling.** MSVC uses a different mangling scheme (decorated names like
   `??0Config@@QAE@XZ` vs. GCC's `_ZN6ConfigC1Ev`).
2. **Exception handling.** MSVC uses table-based exception handling (similar to DWARF) for C++
   exceptions on x64, not Structured Exception Handling (SEH). GCC/Clang use DWARF (Linux) or SjLj
   (some platforms).
3. **`sizeof` differences.** Some types have different sizes across ABIs (e.g., `long` is 4 bytes on
   Windows, 8 bytes on Linux x86-64).
4. **vtable layout.** The vtable structure, RTTI layout, and thunk mechanisms differ.
5. **Debug iterator support.** MSVC STL includes debug iterator checks in debug builds that change
   iterator sizes.

```cpp
#include <iostream>

int main() {
    std::cout << "sizeof(long): " << sizeof(long) << "\n";
    std::cout << "sizeof(pointer): " << sizeof(void*) << "\n";
    // On Windows (MSVC): sizeof(long) = 4, sizeof(pointer) = 8
    // On Linux x86-64 (GCC/Clang): sizeof(long) = 8, sizeof(pointer) = 8
}
```

The `sizeof(long)` difference is a consequence of the different data models: Windows uses the LLP64
model (`long` is 32 bits, `long long` is 64 bits), while Linux uses the LP64 model (`long` is 64
bits). This is defined by the System V AMD64 ABI specification [System V ABI] and the Microsoft x64
calling convention [MSVC x64 ABI] respectively.

## Common Pitfalls

- **Defaulting to an older standard.** GCC defaults to C++14 (or C++17 in newer versions), Clang
  defaults to C++14. Always explicitly set `-std=c++23` in your build system.
- **Mixing `-std=c++23` and `-std=c++17` object files.** While the ABI is usually backward
  compatible (C++23 builds can link C++17 objects), the reverse is not guaranteed.
- **Using GNU extensions unconditionally.** `-std=gnu++23` enables extensions like VLAs and
  statement expressions that are not portable. Use `-std=c++23` for strict ISO compliance.
- **Assuming `sizeof(long)` is portable.** It is 4 bytes on Windows, 8 bytes on Linux. Use `int64_t`
  or `long long` for fixed-width types.
- **Forgetting to set `CMAKE_CXX_EXTENSIONS OFF`.** Without this, CMake defaults to GNU extensions,
  which may introduce non-portable constructs.
- **Passing C++ types across `extern "C"` boundaries.** `extern "C"` suppresses name mangling but
  does not change the calling convention for C++ class types. Passing `std::string`, `std::vector`,
  or any non-POD type through an `extern "C"` function is undefined behavior if the caller and
  callee use different standard library ABIs. Use opaque handles or plain C types at ABI boundaries.
- **ABI version drift in long-lived projects.** If a library is compiled once with GCC 5 and never
  recompiled, but the application is upgraded to GCC 14, the two may have incompatible ABI
  assumptions. Rebuild all dependencies when upgrading the toolchain.

## ABI and Inline Namespace Versioning

The C++ Standard Library uses **inline namespaces** to embed ABI version information directly into
symbol names without changing the user-facing API. This is how `libstdc++` and `libc++` manage ABI
evolution without breaking existing binaries.

### How Inline Namespaces Work

An inline namespace [N4950 S9.8.2] is a nested namespace whose members are automatically accessible
from the enclosing namespace. However, the mangled symbol name includes the inline namespace name,
providing ABI versioning without API changes:

```cpp
#include <iostream>

int main() {
    // User code sees std::string
    // But the mangled symbol is std::__cxx11::basic_string<char, ...>
    std::string s = "hello";
    std::cout << s << "\n";
}
```

The `_GLIBCXX_USE_CXX11_ABI` macro controls whether the old ABI namespace or the new ABI namespace
is selected. When `=1` (default), `std::string` resolves to `std::__cxx11::basic_string`. When `=0`,
it resolves to the legacy `std::basic_string` with Copy-On-Write semantics.

### libc++ ABI Versioning

libc++ uses `_LIBCPP_ABI_VERSION` for similar purposes. When libc++ changes the layout of a standard
type (e.g., `std::optional` grew a union member in a newer version), the ABI version is bumped, and
the new layout is placed in a new inline namespace. Old binaries continue to link against the old
inline namespace symbols.

```bash
# Inspect the inline namespaces in libc++
nm -C /usr/lib/libc++.so | grep basic_string
# Output includes: std::__1::basic_string<char, ...>
# The __1 is the inline namespace (ABI version 1)
```

### Inline Namespace Mechanics: Formal Treatment

Consider the following simplified representation of how `libstdc++` implements the dual ABI:

```cpp
// Inside <string> (simplified):
namespace std {
    // Legacy ABI (inline namespace removed, so symbols mangle as std::basic_string)
    inline namespace __cxx11 {
        template&lt;typename CharT, ...&gt;
        class basic_string { /* SSO implementation */ };
    }
}
```

When `_GLIBCXX_USE_CXX11_ABI=1`, `basic_string` is defined inside `std::__cxx11`. The mangled name
for `std::string` becomes `_ZNSt7__cxx11basic_stringIcSt11char_traitsIcESaIcEE` (includes the
`__cxx11` tag). When `_GLIBCXX_USE_CXX11_ABI=0`, the `basic_string` definition is placed directly in
`std`, and the mangled name omits the `__cxx11` component.

The linker treats these as entirely different symbols. An object file compiled with ABI=0 references
`_ZStplIcSt11char_traitsIcESaIcEENSt7__cxx11basic_stringIT_T0_T1_EERKS8_S9_` while an object file
compiled with ABI=1 references the same function but without the `__cxx11` inline namespace
qualifier. The linker reports "undefined reference" because it cannot find a match.

### Practical Implications

1. **Never mix ABI versions in the same binary.** If one library was compiled with
   `_GLIBCXX_USE_CXX11_ABI=0` and another with `=1`, the linker sees two distinct `std::string`
   types and will report "undefined reference" or "multiple definition" errors.
2. **System libraries are compiled with the distro's default ABI.** On Ubuntu 22.04, system
   libraries use ABI=1. Recompiling your own code with ABI=0 and linking against system `.so` files
   will fail.
3. **ABI version is embedded in the symbol name.** You can verify ABI compatibility by inspecting
   symbol names with `nm -C` or `objdump -T`.

## ABI Inspecting Tools

Verifying ABI compatibility is an essential diagnostic skill. The following tools allow you to
inspect the binary interface of compiled artifacts.

### `nm`: Symbol Table Inspection

```bash
# List symbols in a shared library (demangled)
nm -DC /usr/lib/x86_64-linux-gnu/libstdc++.so.6 | grep basic_string

# Show undefined symbols in an object file
nm -u app.o

# Show defined symbols
nm app.o | grep " T "
```

### `objdump`: ELF Section and Symbol Inspection

```bash
# Show all dynamic symbols with their versions
objdump -T /usr/lib/x86_64-linux-gnu/libstdc++.so.6 | head -30

# Show the dynamic relocation entries
objdump -R app

# Disassemble a specific function
objdump -d -M intel app | grep -A20 "<main>:"
```

### `readelf`: Structured ELF Inspection

```bash
# Show the program headers (including INTERP for dynamic linker)
readelf -l app

# Show the dynamic section (DT_NEEDED entries)
readelf -d app

# Show symbol version requirements
readelf -V app

# Show section headers (verify .text, .rodata, .data sizes)
readelf -S app
```

### `abi-compliance-checker` (Advanced)

For library maintainers, the `abi-compliance-checker` tool from the ABI Compliance Checker suite can
automatically detect ABI breaks between two versions of a library:

```bash
# Install
sudo apt install abi-compliance-checker abi-dumper

# Dump ABI descriptors for two versions
abi-dumper libfoo.so.1 -o abi1.xml -lver 1.0
abi-dumper libfoo.so.2 -o abi2.xml -lver 2.0

# Compare
abi-compliance-checker -l libfoo -old abi1.xml -new abi2.xml
```

This tool checks for:

- Added/removed symbols
- Changed symbol visibility
- Modified vtable layout
- Changed type sizes
- Modified function signatures

### C++ Standard Header ABI Differences

Different C++ standard library implementations may implement the same header with different internal
types. The following table shows the `sizeof` differences for key types across implementations:

| Type                                  | libstdc++ (64-bit) | libc++ (64-bit) | MSVC STL (64-bit) |
| :------------------------------------ | :----------------- | :-------------- | :---------------- |
| `sizeof(std::string)`                 | 32                 | 24              | 32                |
| `sizeof(std::vector<T>)`              | 24                 | 24              | 24                |
| `sizeof(std::optional<T>)` (no-value) | 24 (for int)       | 16 (for int)    | 16 (for int)      |
| `sizeof(std::shared_ptr<T>)`          | 16                 | 16              | 16                |
| `sizeof(std::unique_ptr<T>)`          | 8                  | 8               | 8                 |
| `sizeof(std::function<void()>)`       | 32                 | 32              | 48                |

The `std::function` size difference is particularly notable: MSVC STL allocates 48 bytes for the
small buffer optimization (SBO), while libstdc++ and libc++ allocate 32 bytes. A `std::function`
that captures more state than fits in the SBO buffer triggers heap allocation, so the threshold
differs between implementations.

## Cross-Platform ABI Checklist

When distributing a C++ library that must work across platforms, verify the following:

- [ ] All object files use the same C++ standard version (or compatible versions).
- [ ] All object files use the same standard library implementation (`libstdc++`, `libc++`, or MSVC
      STL).
- [ ] The `_GLIBCXX_USE_CXX11_ABI` macro is consistent across all compilation units (GCC only).
- [ ] No GNU extensions are used in public headers (or extensions are enabled uniformly).
- [ ] The struct layout is identical across platforms (verify with `static_assert(sizeof(T) == N)`).
- [ ] The calling convention matches (System V AMD64 ABI on Linux, Microsoft x64 on Windows).
- [ ] Exception handling mechanism matches (DWARF/SJLJ/LSDA on GCC/Clang, table-based on MSVC x64).

## See Also

- [Installing a Compiler](1_installing_compiler.md)
- [Standard Library Implementation](3_standard_library_implementation.md)
- [Cross-compilation Toolchains](4_crosscompilation_toolchains.md)
- [Linker Configuration](5_linker_configuration.md)

## Further Reading

- **[Itanium C++ ABI](https://itanium-cxx-abi.github.io/cxx-abi/abi.html)** -- The formal
  specification of the C++ ABI used by GCC and Clang on non-Windows platforms. This document defines
  name mangling, vtable layout, exception handling tables, and class layout rules. Understanding
  this specification is essential for debugging ABI breakage.
- **[System V AMD64 ABI](https://gitlab.com/x86-psABIs/x86-64-ABI)** -- The calling convention
  specification for x86-64 Linux systems. Defines register usage, stack frame layout, and argument
  passing rules.
- **[N4950](https://wg21.link/N4950)** -- The C++23 working draft standard. The authoritative
  reference for language and library behavior.
- **[Compiler Explorer (godbolt.org)](https://godbolt.org)** -- Online tool for inspecting compiler
  output (assembly, AST, preprocessed source) across multiple compilers. Essential for verifying
  that compiler flags produce the expected code generation.
