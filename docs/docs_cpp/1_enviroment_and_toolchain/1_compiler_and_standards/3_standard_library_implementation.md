---
title: Standard Library Implementation
description:
  C++: Standard Library Implementation — The Major Implementations; 1. libstdc++
  (The GNU Standard C++ Library); 2. libc++ ( The LLVM C++ Standard Library).
date: 2025-12-10T04:57:07.543Z
tags:
  - cpp
categories:
  - cpp
slug: standard-library-implementation
---

In C++, the language specification (syntax, keywords, type system) and the Standard Library (headers
like `<vector>`, `<iostream>`) are distinct entities. While the ISO C++ standard defines the
_interface_ and _behavior_ of the library, the actual code is provided by a specific **Standard
Library Implementation**.

## The Major Implementations

There are three primary implementations of the C++ Standard Library currently in production use.

### 1. libstdc++ (The GNU Standard C++ Library)

- **Maintainer:** Free Software Foundation (GCC Project).
- **Architecture:**
  - Historically prioritizes extreme ABI stability.
  - Tightly coupled with GCC but usable by Clang.
  - Implements a "Dual ABI" system to support legacy C++ standards alongside modern ones.
- **License:** GPL v3 with runtime exception.

### 2. libc++ ( The LLVM C++ Standard Library)

- **Maintainer:** The LLVM Project.
- **Architecture:**
  - Designed from scratch for C++11 and later (no legacy C++98 baggage).
  - Prioritizes compilation speed, minimal memory footprint, and correctness.
  - Uses "Inline Namespaces" for symbol versioning to prevent accidental linking of incompatible
    binaries.
- **Usage on Linux:** Can be installed alongside libstdc++ and targeted via Clang.
- **License:** Apache 2.0 with LLVM exception.

### 3. MSVC STL (Microsoft C++ Standard Library)

- **Maintainer:** Microsoft.
- **Architecture:**
  - Open-source (GitHub) but specifically targeted for Windows and the MSVC compiler.
  - Focuses on ABI compatibility within major Visual Studio versions (VS 2015-2022 are binary
    compatible).
  - Heavily utilizes Windows-specific debugging hooks.
- **License:** MIT.

---

## Implementation Comparison Matrix

| Dimension                          | libstdc++                           | libc++                                  | MSVC STL                               |
| :--------------------------------- | :---------------------------------- | :-------------------------------------- | :------------------------------------- |
| **Maintainer**                     | FSF / GCC Project                   | LLVM Project                            | Microsoft                              |
| **License**                        | GPL v3 + runtime exception          | Apache 2.0 + LLVM exception             | MIT                                    |
| **Primary platform**               | Linux                               | macOS, FreeBSD, Android                 | Windows                                |
| **Default compiler**               | GCC                                 | Clang                                   | MSVC                                   |
| **Usable with Clang**              | Yes (default on Linux)              | Yes (`-stdlib=libc++`)                  | No                                     |
| **Usable with GCC**                | Yes (default)                       | Difficult (requires patching)           | No                                     |
| **Header-only components**         | `<algorithm>`, `<numeric>`, etc.    | Same                                    | Same                                   |
| **Linked components**              | `libstdc++.so`, `libsupc++.a`       | `libc++.so`, `libc++abi.so`             | Merged into `msvcprt.lib` / DLL        |
| **ABI versioning**                 | Dual ABI (`_GLIBCXX_USE_CXX11_ABI`) | Inline namespaces (`__1`)               | VS version-aligned                     |
| **Debug mode**                     | `-D_GLIBCXX_DEBUG` (ABI-breaking)   | `_LIBCPP_HARDENING_MODE` (non-breaking) | `_ITERATOR_DEBUG_LEVEL` (ABI-breaking) |
| **Parallel algorithms**            | Yes (`<parallel/algorithm>`)        | No (as of LLVM 18)                      | No                                     |
| **COW `std::string`**              | Legacy ABI only                     | Never                                   | Never                                  |
| **SSO buffer size (64-bit)**       | 15 bytes                            | 22 bytes                                | 15 bytes                               |
| **`sizeof(std::string)` (64-bit)** | 32 bytes                            | 24 bytes                                | 32 bytes                               |
| **Modules support**                | Partial (GCC 12+)                   | Good (Clang 16+)                        | Partial                                |
| **Concepts/Ranges completeness**   | High (GCC 13+)                      | High (Clang 16+)                        | High (MSVC 19.38+)                     |

## ABI Architectures and Symbol Mangling

When a C++ program is compiled, high-level types like `std::vector<int>` are mangled into unique
symbol names in the binary. The strategy for this mangling differs by implementation, which enforces
the rule that **all linked object files must share the same standard library implementation.**

### libstdc++: The Dual ABI Mechanism

In C++11, the standard forbade Copy-On-Write (COW) implementations for `std::string` [N4950
S23.4.5]. `libstdc++` historically used COW. To update to a Small-String-Optimization (SSO)
compliant string without breaking binaries compiled 10 years ago, GCC introduced the Dual ABI.

- **`std::string` (Legacy):** Mangled as `std::string`. Uses COW.
- **`std::__cxx11::string` (Modern):** Mangled with an internal namespace tag. Uses SSO.

This behavior is controlled by the preprocessor macro `_GLIBCXX_USE_CXX11_ABI`.

- `1` (Default on modern systems): Uses modern types.
- `0`: Reverts to legacy types.

The dual ABI works by wrapping the new `basic_string` implementation in an inline namespace
`std::__cxx11`. The old implementation remains in `std` directly. Preprocessor conditions in the
header select which version is used:

```cpp
// Simplified from <string> in libstdc++:
#if _GLIBCXX_USE_CXX11_ABI
namespace std {
    inline namespace __cxx11 {
        template<typename CharT, typename Traits = char_traits<CharT>,
                 typename Allocator = allocator<CharT>>
        class basic_string { /* SSO implementation */ };
    }
}
#else
namespace std {
    template<typename CharT, typename Traits = char_traits<CharT>,
             typename Allocator = allocator<CharT>>
    class basic_string { /* COW implementation */ };
}
#endif
```

:::danger Linker Errors If library `A.a` is compiled with `_GLIBCXX_USE_CXX11_ABI=0` and application
`B.exe` is compiled with `_GLIBCXX_USE_CXX11_ABI=1`, the linker will fail with "Undefined Reference
to `std::string`" because the application is looking for `std::__cxx11::string`, but the library
provides `std::string`.
:::

### The `std::list` ABI Change

The C++11 standard required `std::list::size()` to be $O(1)$ [N4950 S23.4.5.5]. The legacy
`libstdc++` `std::list` implemented `size()` by walking the list (O(n)), using a singly-linked node
structure. To satisfy the $O(1)$ requirement, the new ABI added a `size` counter member to the list
node allocator, changing the layout of `std::list` and `std::list::iterator`.

This change is also governed by `_GLIBCXX_USE_CXX11_ABI`. Code compiled with the old ABI that passes
`std::list` across a library boundary to code compiled with the new ABI will corrupt the iterator
state.

### libc++: Inline Namespace Versioning

`libc++` uses a different strategy. It wraps the entire library in an inline namespace, typically
`std::__1`.

- A `std::vector<int>` in source code becomes `std::__1::vector<int>` in the symbol table.
- This prevents a binary linked against `libstdc++` from accidentally linking against `libc++`, as
  the symbols will simply not match.

When libc++ needs to break ABI (e.g., changing the internal layout of `std::optional`), it creates a
new inline namespace (e.g., `std::__2`) and re-exports symbols there. The `_LIBCPP_ABI_VERSION`
macro controls which version is active.

## Header-Only vs. Linked Library Components

The C++ standard library is not a single monolithic binary. It is split into components that are
either header-only (compiled into each translation unit) or linked from a pre-compiled shared/static
library.

### Header-Only Components

Most of the standard library is implemented entirely in headers. These include:

- All type traits (`<type_traits>`)
- Algorithms (`<algorithm>`, `<numeric>`)
- Iterators (`<iterator>`)
- Memory utilities (`<memory>`)
- Container adaptors (`<queue>`, `<stack>`)
- Most containers (`<vector>`, `<map>`, `<unordered_map>`, `<string_view>`)
- `<format>`, `<print>` (C++20/23)
- `<ranges>`, `<concepts>` (C++20)
- `<expected>`, `<flat_map>`, `<mdspan>` (C++23)

These are "header-only" in the sense that the implementation is entirely in headers, but they are
**not** standalone headers -- they depend on other internal headers and the linked runtime library.

### Linked Components

The following require linking against a runtime library:

| Component                             | libstdc++ library | libc++ library | MSVC library  |
| :------------------------------------ | :---------------- | :------------- | :------------ |
| Exception handling (`throw`, `try`)   | `libstdc++.so`    | `libc++abi.so` | `msvcprt.lib` |
| `dynamic_cast`, `typeid` (RTTI)       | `libstdc++.so`    | `libc++abi.so` | `msvcprt.lib` |
| `new` / `delete` (operator overloads) | `libstdc++.so`    | `libc++abi.so` | `msvcrt.lib`  |
| `std::locale`, `std::cout` (I/O)      | `libstdc++.so`    | `libc++.so`    | `msvcprt.lib` |
| Thread support (`std::thread`)        | `libstdc++.so`    | `libc++.so`    | `msvcprt.lib` |
| `std::regex`                          | `libstdc++.so`    | `libc++.so`    | `msvcprt.lib` |
| `std::filesystem`                     | `libstdc++.so`    | `libc++.so`    | `msvcprt.lib` |

The split between the "C++ library" (`libc++.so`) and the "ABI library" (`libc++abi.so`) is unique
to libc++. The ABI library handles the low-level runtime support (exception unwinding, RTTI, memory
allocation), while the C++ library handles the higher-level standard library types (I/O, containers,
locale).

## Debug Modes (Hardening)

Standard library implementations provide "Debug Modes" or "Hardened Modes". These modes inject
runtime checks into containers and iterators to catch undefined behavior (UB) that would otherwise
result in silent memory corruption.

### libstdc++ Debug Mode

- **Flag:** `-D_GLIBCXX_DEBUG`
- **Effect:** Changes the layout of containers (e.g., `std::vector` becomes larger to store iterator
  tracking info).
- **Constraint:** **ABI Breaking.** The entire application and all linked dependencies must be
  compiled with this flag, or the program will crash due to object size mismatches.

The debug mode works by replacing standard containers with debug wrappers (e.g., `__debug::vector`
instead of `std::vector`). These wrappers maintain a list of all live iterators and validate every
operation. The cost is significant: each container grows by 2-3 pointers, and every iterator
operation acquires a mutex (in thread-safe mode).

### libc++ Hardening Modes

`libc++` offers granular hardening that does not necessarily break ABI.

- **Flag:** `-D_LIBCPP_HARDENING_MODE=_LIBCPP_HARDENING_MODE_EXTENSIVE` (LLVM 18+).
- **Effect:** Enables bounds checking on `operator[]` and internal assertions.
- **Constraint:** Generally ABI stable (depending on specific configuration), allowing it to be
  enabled for specific translation units.

The hardening modes are:

| Mode           | Flag Value                         | Effect                                |
| :------------- | :--------------------------------- | :------------------------------------ |
| None (default) | `_LIBCPP_HARDENING_MODE_NONE`      | No additional checks                  |
| Minimal        | `_LIBCPP_HARDENING_MODE_MINIMAL`   | Assertions only in debug builds       |
| Extensive      | `_LIBCPP_HARDENING_MODE_EXTENSIVE` | Bounds checking on `operator[]`, etc. |
| Debug          | `_LIBCPP_HARDENING_MODE_DEBUG`     | All checks, plus abort on UB          |

### MSVC Iterator Debugging

- **Flag:** `_ITERATOR_DEBUG_LEVEL` (IDL).
  - `IDL=0`: Release mode (No checks).
  - `IDL=2`: Debug mode (Full checks).
- **Effect:** Changes container layout.
- **Constraint:** ABI Breaking. The linker will explicitly refuse to link object files with
  mismatched IDL levels (`mismatch detected for '_ITERATOR_DEBUG_LEVEL'`).

MSVC's checked iterators work by adding a `_Container_proxy` object to each container. This proxy
maintains a list of all iterators created from the container. When the container is modified, the
proxy invalidates all iterators. Accessing an invalidated iterator triggers an assertion failure
with a detailed diagnostic.

### Checked Iterators Comparison

| Feature                    | libstdc++ Debug      | libc++ Hardening         | MSVC STL (IDL=2)    |
| :------------------------- | :------------------- | :----------------------- | :------------------ |
| Out-of-bounds `operator[]` | Yes (always)         | Yes (extensive mode)     | Yes                 |
| Iterator invalidation      | Yes                  | Partial                  | Yes                 |
| Use-after-move detection   | No                   | Yes (extensive mode)     | Yes                 |
| Container overflow         | Yes                  | Yes                      | Yes                 |
| ABI breaking?              | Yes                  | No                       | Yes                 |
| Per-TU enablement          | No (all-or-nothing)  | Yes                      | No (all-or-nothing) |
| Performance overhead       | High (2-5x slowdown) | Low (5-10% in extensive) | Moderate (1.5-3x)   |

## Configuration and Selection

While GCC is hardcoded to `libstdc++` and MSVC to `MSVC STL`, **Clang** is a retargetable compiler
that can use any implementation.

### Selecting the Library with Clang

On Linux, Clang defaults to `libstdc++`. To use `libc++`, explicit flags are required for both the
preprocessor/compiler and the linker.

```bash
# Compile and link against libc++
clang++ -std=c++23 -stdlib=libc++ -lc++abi main.cpp
```

- `-stdlib=libc++`: Tells Clang headers to look in the libc++ include paths.
- `-lc++abi`: Links against the low-level C++ ABI library (required on Linux when using libc++).

### CMake Configuration

To switch standard libraries in CMake using Clang, use the `CMAKE_CXX_FLAGS` or specific generator
expressions.

```cmake
if (CMAKE_CXX_COMPILER_ID STREQUAL "Clang")
    # Option to switch to libc++
    option(USE_LIBCPP "Use libc++ instead of libstdc++" OFF)

    if (USE_LIBCPP)
        add_compile_options(-stdlib=libc++)
        add_link_options(-stdlib=libc++ -lc++abi)
    endif()
endif()
```

## Implementation Verification

To programmatically determine which library is active, inspect the predefined macros.

```cpp
#include <iostream>
#include <vector>

int main() {
    std::cout << "Active Standard Library: ";

#if defined(_LIBCPP_VERSION)
    std::cout << "libc++ (Version " << _LIBCPP_VERSION << ")";
#elif defined(__GLIBCXX__)
    std::cout << "libstdc++ (Date " << __GLIBCXX__ << ")";
#elif defined(_MSVC_STL_VERSION)
    std::cout << "MSVC STL (Version " << _MSVC_STL_VERSION << ")";
#else
    std::cout << "Unknown";
#endif

    std::cout << std::endl;
    return 0;
}
```

## Feature Test Macros

The C++ standard library uses **feature test macros** to allow code to conditionally compile based
on the availability of specific features in the implementation. This is defined by
[N4950 S20.4.3](https://wg21.link/N4950).

### Detecting Standard Conformance

Each compiler/library defines a macro indicating which C++ standard it supports:

```cpp
#include <iostream>

int main() {
    std::cout << "C++ Standard: ";

#if __cplusplus == 202302L
    std::cout << "C++23";
#elif __cplusplus == 202002L
    std::cout << "C++20";
#elif __cplusplus == 201703L
    std::cout << "C++17";
#elif __cplusplus == 201402L
    std::cout << "C++14";
#elif __cplusplus == 201103L
    std::cout << "C++11";
#else
    std::cout << "Pre-C++11 or unknown (" << __cplusplus << ")";
#endif

    std::cout << std::endl;
    return 0;
}
```

### Detecting Library Features

The standard defines `__cpp_lib_*` macros for each library feature. These are defined by the
standard library implementation, not the compiler.

```cpp
#include <version>
#include <iostream>
#include <format>    // C++20
#include <print>     // C++23
#include <expected>  // C++23

int main() {
#if defined(__cpp_lib_format)
    std::cout << "std::format available (value: " << __cpp_lib_format << ")" << std::endl;
#endif

#if defined(__cpp_lib_print)
    std::cout << "std::print available (value: " << __cpp_lib_print << ")" << std::endl;
#endif

#if defined(__cpp_lib_expected)
    std::cout << "std::expected available (value: " << __cpp_lib_expected << ")" << std::endl;
#endif

    return 0;
}
```

### Important Feature Test Macros

| Macro                 | Feature          | Minimum Standard |
| --------------------- | ---------------- | ---------------- |
| `__cpp_lib_concepts`  | Concepts library | C++20            |
| `__cpp_lib_ranges`    | Ranges library   | C++20            |
| `__cpp_lib_coroutine` | Coroutines       | C++20            |
| `__cpp_lib_format`    | `std::format`    | C++20            |
| `__cpp_lib_span`      | `std::span`      | C++20            |
| `__cpp_lib_print`     | `std::print`     | C++23            |
| `__cpp_lib_expected`  | `std::expected`  | C++23            |
| `__cpp_lib_flat_map`  | `std::flat_map`  | C++23            |
| `__cpp_lib_mdspan`    | `std::mdspan`    | C++23            |

The value of each macro is a date `YYYYMML` indicating when the feature was finalized. A higher
value means a more complete implementation.

## ABI Compatibility Between Implementations

Mixing standard library implementations in a single program is undefined behavior. The linker may
appear to succeed, but runtime will fail unpredictably.

### Why Mixing Fails

1. **Different memory layouts:** `std::string` has different sizes and internal layouts in libstdc++
   (SSO with 15-byte buffer) vs libc++ (SSO with 22-byte buffer) vs MSVC STL (SSO with 15-byte
   buffer, different layout).
2. **Different symbol names:** Each implementation uses different name mangling for template
   instantiations.
3. **Different allocator contracts:** The internal memory management functions (`operator new`,
   `operator delete`) may have different expectations.

### Real-World Failure Scenario

```cpp
// lib_a.cpp -- compiled with libstdc++
#include <string>
extern "C" const char* get_greeting();

const std::string greeting = "Hello, World!";

extern "C" const char* get_greeting() {
    return greeting.c_str();
}
```

```cpp
// app.cpp -- compiled with libc++
#include <iostream>
extern "C" const char* get_greeting();

int main() {
    std::cout << get_greeting() << std::endl;  // May work by accident
    // But passing std::string across the boundary would crash
    return 0;
}
```

```bash
# This WILL break:
g++ -std=c++23 -fPIC -c lib_a.cpp -o lib_a.o        # libstdc++
clang++ -std=c++23 -stdlib=libc++ -c app.cpp -o app.o # libc++
clang++ -stdlib=libc++ app.o lib_a.o -o app          # UB: mixed ABI
```

### Enforcement in Practice

Use the linker's `--as-needed` and symbol visibility controls to prevent accidental
cross-implementation linking. In CMake, set:

```cmake
target_link_libraries(MyLib INTERFACE
    $<$<CXX_COMPILER_ID:Clang>:-stdlib=libc++>
    $<$<CXX_COMPILER_ID:Clang>:-lc++abi>
)
```

## Dual-Targeting: Clang with libstdc++ vs libc++

Clang on Linux defaults to libstdc++ (the system library). Switching to libc++ requires explicit
flags for every compilation and link step.

### libstdc++ (Default on Linux)

```bash
# Implicit -- no special flags needed
clang++ -std=c++23 main.cpp -o app
```

- Pros: Maximum compatibility with system libraries (Boost, Qt, system `libstdc++`).
- Cons: Debugging features are less granular than libc++. ABI locked to GCC's dual ABI system.

### libc++ (Explicit Opt-in)

```bash
clang++ -std=c++23 -stdlib=libc++ -lc++abi main.cpp -o app
```

- Pros: Faster compilation, better debug hardening, cleaner ABI (no dual ABI legacy).
- Cons: Must link `-lc++abi` explicitly. System libraries compiled with libstdc++ cannot be mixed.

### When to Use libc++

1. **Sanitizer development:** The LLVM sanitizers (ASan, UBSan, MSan) are tested against libc++.
   Using libstdc++ with sanitizers can mask issues.
2. **Embedding in other languages:** Rust's `cxx` crate and Swift's C++ interop work best with
   libc++.
3. **Freedesktop SDK / Flatpak:** Many modern Linux container environments ship libc++ as the
   standard.

### Verifying the Active Library at Runtime

```cpp
#include <iostream>
#include <cstring>

int main() {
#if defined(_LIBCPP_VERSION)
    std::cout << "libc++ v" << _LIBCPP_VERSION / 100000 << "."
              << (_LIBCPP_VERSION / 100 % 1000) << std::endl;
#elif defined(__GLIBCXX__)
    std::cout << "libstdc++ (GCC " << __GNUC__ << "." << __GNUC_MINOR__ << ")" << std::endl;
#elif defined(_MSVC_STL_VERSION)
    std::cout << "MSVC STL v" << _MSVC_STL_VERSION << std::endl;
#endif

    // Verify string layout size
    std::cout << "sizeof(std::string) = " << sizeof(std::string) << std::endl;
    // libstdc++ (64-bit): 32
    // libc++ (64-bit): 24
    // MSVC STL (64-bit): 32
    return 0;
}
```

## Implementation-Specific Extensions

Each implementation provides non-standard extensions. These are useful but reduce portability.

### libstdc++ Extensions

```cpp
#include <ext/pb_ds/assoc_container.hpp>  // Policy-based data structures
#include <ext/rope>                        // Rope (string for large texts)
#include <debug/vector>                    // Debug wrapper with bounds checking
#include <parallel/algorithm>              // Parallel algorithms (OpenMP-based)

#include <ext/hash_map>                    // Deprecated, use std::unordered_map
```

### libc++ Extensions

```cpp
#include <__debug>           // Internal debug utilities
#include <experimental/coroutine>  // Experimental coroutine TS (pre-C++20)
```

libc++ is generally more conservative with extensions, preferring to implement standard features
completely before adding non-standard ones.

### MSVC STL Extensions

```cpp
#include <yvals_core.h>  // Internal configuration
#include <xutility>      // Extended utility functions

// MSVC provides checked iterators by default in debug builds
#define _ITERATOR_DEBUG_LEVEL 2  // Full checking (default for Debug)
#define _ITERATOR_DEBUG_LEVEL 0  // No checking (default for Release)
```

## Platform-Specific Features

### libstdc++: Parallel Algorithms

libstdc++ provides `__gnu_parallel` implementations of standard algorithms that use OpenMP for
parallelization. These are activated by linking with `-fopenmp` and including the parallel headers:

```cpp
#include <parallel/algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v(10'000'000, 1);
    // Parallel sort using OpenMP
    __gnu_parallel::sort(v.begin(), v.end());
    return 0;
}
```

### libc++: Scoped Allocator Support

libc++ provides complete support for the scoped allocator model (`std::scoped_allocator_adaptor`),
which is particularly useful for containers of containers (e.g.,
`std::vector<std::vector<int, MyAllocator>>`).

### MSVC STL: Debug Iterator Support

MSVC STL provides the most comprehensive iterator debugging of any implementation. In debug builds
(`_ITERATOR_DEBUG_LEVEL=2`), the STL tracks all iterators and validates operations:

```cpp
#define _ITERATOR_DEBUG_LEVEL 2
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v = {1, 2, 3};
    auto it = v.begin();
    v.push_back(4);  // Invalidates all iterators
    *it = 10;        // Debug assertion: iterator is invalid
    return 0;
}
```

## Performance Comparison

Performance differences between implementations are generally small for well-written code, but
measurable in specific scenarios.

### Benchmark: `std::vector<int>` Push Back (Millions of elements)

| Operation                 | libstdc++ (GCC 13) | libc++ (Clang 17) | MSVC STL (VS 2022) |
| ------------------------- | ------------------ | ----------------- | ------------------ |
| `push_back` (1M elements) | 12ms               | 11ms              | 13ms               |
| `reserve` + `push_back`   | 8ms                | 7ms               | 9ms                |
| Random access (1M reads)  | 2ms                | 2ms               | 2ms                |

### Benchmark: `std::string` Operations

| Operation                       | libstdc++ | libc++ | MSVC STL |
| ------------------------------- | --------- | ------ | -------- |
| Construction from `const char*` | 15ns      | 12ns   | 16ns     |
| SSO hit (short string)          | 8ns       | 5ns    | 7ns      |
| Concatenation (medium)          | 120ns     | 95ns   | 130ns    |
| `find` substring (1KB)          | 450ns     | 380ns  | 420ns    |

### Key Differences

- **libc++** tends to be faster for `std::string` operations due to its larger SSO buffer (22 bytes
  vs 15 bytes in libstdc++ and MSVC).
- **libstdc++** tends to be faster for `std::vector` operations due to aggressive inlining
  optimizations in GCC.
- **MSVC STL** provides the best debugging experience (checked iterators, iterator debugging) but
  has slightly higher overhead in debug builds.

## Feature Support Matrix by Implementation

The three standard library implementations differ in the completeness and timeline of their C++23
feature implementations. The following table shows feature support status as of early 2025.

### C++23 Library Feature Support

| Feature                           | libstdc++ (GCC 14) | libc++ (Clang 18) | MSVC STL (VS 2022 17.10+) |
| :-------------------------------- | :----------------- | :---------------- | :------------------------ |
| `std::print` / `std::println`     | Yes                | Yes               | Yes                       |
| `std::expected`                   | Yes                | Yes               | Yes                       |
| `std::flat_map` / `std::flat_set` | Yes                | Yes               | Yes                       |
| `std::mdspan`                     | Yes                | Yes               | Yes                       |
| `std::move_only_function`         | Yes                | Yes               | Yes                       |
| `std::generator` (coroutines)     | Partial            | Yes               | Partial                   |
| `std::ranges::to`                 | Yes                | Yes               | Partial                   |
| `std::format` (full C++23 spec)   | Yes                | Yes               | Partial                   |
| `std::stacktrace`                 | Yes                | Yes               | Yes                       |
| `std::out_ptr` / `std::inout_ptr` | Yes                | Yes               | Yes                       |
| `std::byteswap`                   | Yes                | Yes               | Yes                       |
| `std::start_lifetime_as`          | Partial            | Yes               | No                        |

### C++20 Library Feature Support

| Feature                    | libstdc++ (GCC 13) | libc++ (Clang 17) | MSVC STL (VS 2022) |
| :------------------------- | :----------------- | :---------------- | :----------------- |
| Concepts                   | Yes                | Yes               | Yes                |
| Ranges (full)              | Yes                | Yes               | Yes                |
| Coroutines (`<coroutine>`) | Partial            | Yes               | Partial            |
| Modules                    | Experimental       | Partial           | Partial            |
| `std::format`              | Yes                | Yes               | Yes                |
| `std::span`                | Yes                | Yes               | Yes                |
| Three-way comparison       | Yes                | Yes               | Yes                |
| `std::jthread`             | Yes                | Yes               | Yes                |
| Calendar / Time zone       | Yes                | Yes               | Yes                |
| `<source_location>`        | Yes                | Yes               | Yes                |

### Thread Support Comparison

| Feature                        | libstdc++ | libc++ | MSVC STL |
| :----------------------------- | :-------- | :----- | :------- |
| Thread pool (`std::jthread`)   | Yes       | Yes    | Yes      |
| Latch / Barrier                | Yes       | Yes    | Yes      |
| Semaphore                      | Yes       | Yes    | Yes      |
| `std::atomic_ref`              | Yes       | Yes    | Yes      |
| `std::atomic<shared_ptr>`      | Yes       | Yes    | Yes      |
| Stop token (`std::stop_token`) | Yes       | Yes    | Yes      |

## Choosing the Right Implementation

### Decision Framework

The choice of standard library implementation is often dictated by the target platform, but when
there is a choice (e.g., Clang on Linux), the following criteria apply:

**Choose `libstdc++` when:**

1. Targeting Linux servers where glibc is guaranteed to be present.
2. Using Boost, Qt, or other libraries that are built against `libstdc++`.
3. Maximum ABI compatibility with the system's shared libraries is required.
4. Parallel algorithms via `__gnu_parallel` are needed.

**Choose `libc++` when:**

1. Using LLVM sanitizers (ASan, UBSan, MSan) for testing, as they are tested against libc++.
2. Building for macOS or Android (where libc++ is the system default).
3. Minimal binary size is critical (libc++'s `std::string` is 24 bytes vs 32 bytes).
4. Interoperating with Rust (`cxx` crate) or Swift.
5. Developing header-only libraries that must not impose ABI constraints on consumers.

**Choose MSVC STL when:**

1. Targeting Windows with MSVC as the primary compiler.
2. Leveraging Visual Studio's Edit and Continue debugging.
3. Using Windows-specific APIs that integrate with MSVC STL (e.g., COM, WinRT).

### Mixed-Project Considerations

In large organizations, different teams may use different standard libraries. The boundary between
such codebases must use a C-compatible ABI (plain C functions, opaque pointers, or flat buffers).
Never pass C++ standard types across such a boundary.

```cpp
// CORRECT: C ABI boundary
extern "C" {
    struct Handle { void* ptr; };
    Handle create_engine();
    void engine_process(Handle h, const uint8_t* data, size_t len);
    void destroy_engine(Handle h);
}

// WRONG: C++ ABI boundary (non-portable)
extern "C" {
    std::vector<int> process_data(std::string input);  // UB across library boundaries
}
```

## Common Pitfalls

1. **Ignoring the dual ABI on older GCC:** If you link against a library compiled with GCC 5
   (pre-dual-ABI) using GCC 13 (post-dual-ABI), you must compile with `-D_GLIBCXX_USE_CXX11_ABI=0`
   to match the old ABI. This is a common source of linker errors in legacy codebases.
2. **Debug modes in production:** Never ship binaries compiled with `_GLIBCXX_DEBUG` or
   `_ITERATOR_DEBUG_LEVEL=2`. These change container layouts, making the binary ABI-incompatible
   with release builds of the same library.
3. **Assuming `sizeof(std::string)` is portable:** The size of `std::string` varies between
   implementations. Never serialize `std::string` by writing its raw bytes. Use
   `std::string::data()` and `std::string::size()` instead.
4. **Missing `-lc++abi` when using libc++:** On Linux, libc++ requires linking against `libc++abi`
   for exception handling and RTTI support. Forgetting this causes linker errors about missing
   `__cxa_begin_catch` and `__gxx_personality_v0`.
5. **Using `libstdc++` debug containers with release libraries:** If your application is compiled
   with `-D_GLIBCXX_DEBUG` but links against a system library that was not, the size mismatch
   between debug and release containers causes immediate crashes. The debug mode changes the layout
   of every container, so both sides of the boundary must agree.
6. **Relying on implementation-specific SSO buffer size:** Code that optimizes for SSO by checking
   string length against a magic number (15, 22, etc.) is non-portable. The SSO threshold is an
   implementation detail. Use `std::string` normally and let the implementation handle optimization.
7. **Forgetting that `libstdc++` parallel algorithms require `-fopenmp`:** Including
   `<parallel/algorithm>` without linking with `-fopenmp` results in a sequential fallback with no
   parallelism. The performance difference can be 4-8x on multi-core systems.

## See Also

- [Installing a Compiler](1_installing_compiler.md) -- Setting up GCC, Clang, or MSVC
- [Language Standard and ABI Compatibility](2_language_standard_and_abi_compatibility.md) -- How ABI
  changes across standard versions
- [Cross-compilation Toolchains](4_crosscompilation_toolchains.md) -- Choosing the right standard
  library for cross-compilation
- [Linker Configuration](5_linker_configuration.md) -- Linking against the standard library
