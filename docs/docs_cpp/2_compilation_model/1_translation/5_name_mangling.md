---
title: Name Mangling
date: 2025-12-12T02:56:28.878Z
tags:
  - cpp
categories:
  - cpp
slug: mangling
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

Linkers were originally designed for C and Fortran, languages where function names are unique
identifiers. C++, however, introduces features that break this assumption:

1. **Overloading:** `void print(int)` and `void print(float)` share the same name.
2. **Namespaces:** `std::sort` and `boost::sort` share the same name.
3. **Templates:** `vector<int>` and `vector<float>` generate distinct code for the same class
   template.

To enforce uniqueness in the global symbol table, C++ compilers perform **Name Mangling** (also
called Decoration). They encode the function signature (Scope, Name, Arguments) into a strict ASCII
string.

Understanding mangling is required to decipher linker errors ("Undefined reference to
`_ZN3foo3barEi`") and to design interoperability interfaces (FFI).

## 1. The Itanium C++ ABI (GCC / Clang)

The **Itanium C++ ABI** is the standard mangling scheme used by GCC, Clang, and the majority of the
Unix ecosystem (Linux, macOS, BSD, Android). It is designed to be parseable and logical.

### Structure

A mangled name generally follows this pattern: `_Z` + `[N for Nested]` + `[Name Length][Name]...` +
`[E for End]` + `[Argument Types]`

### Encoding Logic

Consider the function:

```cpp
namespace net {
    class Socket {
        void connect(int port, bool ssl);
    };
}
```

**Mangled Output:** `_ZN3net6Socket7connectEib`

1. `_Z`: Prefix marking a mangled symbol.
2. `N`: Start of nested scope (Namespace/Class).
3. `3net`: Identifier "net" (3 characters).
4. `6Socket`: Identifier "Socket" (6 characters).
5. `7connect`: Identifier "connect" (7 characters).
6. `E`: End of nested scope.
7. `i`: First argument type `int`.
8. `b`: Second argument type `bool`.

### Reading and Parsing Mangled Names (Itanium)

The Itanium ABI defines a complete grammar for mangled names. Key type encodings:

| Source Type             | Mangled                                       | Notes                              |
| :---------------------- | :-------------------------------------------- | :--------------------------------- |
| `void`                  | `v`                                           |                                    |
| `bool`                  | `b`                                           |                                    |
| `int`                   | `i`                                           |                                    |
| `unsigned int`          | `j`                                           |                                    |
| `long long`             | `x`                                           |                                    |
| `float`                 | `f`                                           |                                    |
| `double`                | `d`                                           |                                    |
| `char const*`           | `PKc`                                         | `P` = pointer, `K` = const         |
| `std::string`           | `NSt6basic_stringIcSt11char_traitsIcESaIcEEE` | Full qualified name                |
| `int&`                  | `Ri`                                          | `R` = lvalue reference             |
| `int&&`                 | `Oi`                                          | `O` = rvalue reference             |
| `int const&`            | `RKi`                                         |                                    |
| `...` (variadic)        | `z`                                           |                                    |
| `template&lt;int N&gt;` | `IiE`                                         | `I` starts template args, `E` ends |

### Parsing Example: `std::vector<int>::push_back(int const&)`

Step by step through `_ZNSt6vectorIiSaIiEE9push_backERKi`:

1. `_Z` — mangled symbol prefix
2. `N` — begin nested name
3. `St` — `std::` namespace (special encoding)
4. `6vector` — "vector" (6 chars)
5. `IiSaIiEE` — template args: `int`, `std::allocator&lt;int&gt;`
6. `9push_back` — "push_back" (9 chars)
7. `E` — end nested name
8. `RKi` — `int const&` (return type not encoded for non-template functions)

Result: `std::vector&lt;int, std::allocator&lt;int&gt;&gt;::push_back(int const&)`

### Template Instantiation Mangling

Template instantiations produce some of the longest mangled names. Each template argument is fully
encoded, recursively:

```cpp
template<typename T>
void process(std::map<std::string, std::vector<T>>);
```

An instantiation like `process&lt;int&gt;(...)` produces a deeply nested mangling because `std::map`
and `std::vector` each carry their full template argument lists. For complex types, mangled names
can exceed 1000 characters.

```bash
# View the longest mangled names in a binary
nm -C ./app | awk '{ print length, $0 }' | sort -rn | head -20
```

:::info
Return Types The Itanium ABI generally does **not** encode the return type of a function, as
C++ does not support overloading based solely on return type. Exception: Template functions and
`auto` return type deduction may trigger return type encoding.
:::

## 2. The Microsoft ABI (MSVC)

The Microsoft Visual C++ compiler uses a proprietary mangling scheme. It is significantly more
verbose and includes information not found in Itanium (such as Access Control levels and Calling
Conventions).

### Structure

The pattern generally begins with `?` and relies on special characters (`@`, `$`) as delimiters.

Consider the same function:

```cpp
namespace net {
    class Socket {
        void connect(int port, bool ssl);
    };
}
```

**Mangled Output (Approximate):** `?connect@Socket@net@@QEAAXH_N@Z`

1. `?`: Start of mangled symbol.
2. `connect`: Function name.
3. `@`: Delimiter.
4. `Socket@net`: Scope (reversed order: Class, then Namespace).
5. `@@`: End of scope list.
6. `QEAA`: Access qualifiers (public/private) and calling convention (e.g., `__cdecl`, `__stdcall`).
7. `X`: Return type (`void`). **Note: MSVC encodes return types.**
8. `H`: First argument `int`.
9. `_N`: Second argument `bool`.
10. `@Z`: End of signature.

### Key MSVC Mangling Differences from Itanium

| Aspect             | Itanium (GCC/Clang)    | MSVC                                 |
| :----------------- | :--------------------- | :----------------------------------- |
| **Prefix**         | `_Z`                   | `?`                                  |
| **Return type**    | Not encoded (usually)  | Always encoded                       |
| **Access control** | Not encoded            | Encoded (public, private, protected) |
| **Calling conv.**  | Not encoded            | Encoded (`A` = cdecl, `G` = stdcall) |
| **Scope order**    | Outermost to innermost | Innermost to outermost (reversed)    |
| **Namespace std**  | `St`                   | `?A` or `std@@`                      |

## 3. Disabling Mangling (`extern "C"`)

To allow C code, Rust, Python (ctypes), or Java (JNI) to call a C++ function, you must disable
mangling. This forces the linker to use the "C" representation (the bare function name).

```cpp
extern "C" void my_api_func(int x);
```

- **Mangled:** `my_api_func` (or `_my_api_func` on some systems).
- **Restriction:** `extern "C"` functions cannot be overloaded or templated.

### Architectural Best Practice: The API Boundary

When designing a shared library (`.dll`/`.so`) for general consumption, wrap the interface in
`extern "C"` block to provide a stable ABI.

```cpp
#ifdef __cplusplus
extern "C" {
#endif

    MYLIB_API void initialize_system();
    MYLIB_API int process_data(void* ptr);

#ifdef __cplusplus
}
#endif
```

### `extern "C"` as a Mangling Escape Hatch

A common pattern is to use `extern "C"` as an opaque function pointer type when interfacing with C
APIs that require callbacks:

```cpp
// C library expects a function pointer with C linkage
extern "C" typedef void (*CallbackFunc)(int);

// C++ function with C linkage for the callback
extern "C" void my_callback(int value) {
    // Can use C++ features inside
    std::vector<int> v;
    v.push_back(value);
}

// Register with C API
c_library_register_callback(my_callback);
```

## 4. Inspection and Demangling Tools

You rarely decode mangled names manually. Use the toolchain utilities to translate them.

<Tabs>
  <TabItem value="linux" label="Linux / macOS (Itanium)" default>

### Demangling with `c++filt`

`c++filt` is part of GNU Binutils (or LLVM). It accepts a mangled name and prints the C++ signature.

```bash
$ c++filt _ZN3net6Socket7connectEib
net::Socket::connect(int, bool)
```

### Demangling with `llvm-cxxfilt`

`llvm-cxxfilt` is the LLVM equivalent. It supports the same Itanium mangling and can also demangle
Rust symbols:

```bash
$ llvm-cxxfilt _ZN3net6Socket7connectEib
net::Socket::connect(int, bool)

# Pipe nm output through c++filt for readable output
$ nm ./app | c++filt
```

### Inspecting Binaries (`nm`)

The `nm` tool accepts a `--demangle` (or `-C`) flag.

```bash
$ nm -C ./app
0000000000001149 T net::Socket::connect(int, bool)
```

  </TabItem>
  <TabItem value="windows" label="Windows (MSVC)">

### Demangling with `undname`

Visual Studio provides `undname.exe`.

```cmd
> undname ?connect@Socket@net@@QEAAXH_N@Z
void __cdecl net::Socket::connect(int,bool)
```

### Inspecting Binaries (`dumpbin`)

`dumpbin` requires explicit flags to show symbols.

```cmd
> dumpbin /SYMBOLS app.obj
```

_Note: `dumpbin` output is often raw; piping it to a text file for analysis is recommended._

  </TabItem>
</Tabs>

## 5. Name Mangling and Linker Errors

When the linker reports `Undefined reference to ...`, look closely at the mangled name (or the
demangled output). The mangling encodes the exact signature, making it possible to diagnose
mismatches.

### Mismatched Signatures

If the linker reports:

```
undefined reference to `net::Socket::connect(int, bool)'
```

But your code declares:

```cpp
void connect(int port);  // Missing bool parameter
```

The mangled names will differ (`_ZN3net6Socket7connectEib` vs `_ZN3net6Socket7connectEi`), and the
linker will correctly report the missing symbol.

### Dual-ABI Mismatch (GCC)

GCC 5 introduced a new ABI for `std::string` (using `std::__cxx11::basic_string`). If you link code
compiled with GCC 4 against a library compiled with GCC 5+, the mangled names for `std::string`
parameters will differ:

```
undefined reference to `foo(std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > const&)'
```

**Fix:** Recompile all code with the same compiler version, or define `_GLIBCXX_USE_CXX11_ABI=0` to
use the old ABI.

### Missing `extern "C"`

If a C library exports `init` but your C++ code declares `extern void init();` without `extern "C"`,
the compiler mangles the reference:

```
undefined reference to `_Z4initv'
```

But the library exports the unmangled symbol `init`. The fix is `extern "C" void init();`.

## 6. RTTI and `type_info` Name Mangling

RTTI (`typeid`, `dynamic_cast`) relies on mangled names internally. The `std::type_info::name()`
member function returns a **compiler-specific, mangled representation** of the type name:

```cpp
#include <iostream>
#include <typeinfo>

int main() {
    std::cout << typeid(int).name() << "\n";           // "i" (GCC/Clang)
    std::cout << typeid(std::string).name() << "\n";   // "NSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE"
    return 0;
}
```

**Important:** The output of `name()` is not guaranteed to be human-readable or portable. For a
demangled name, use `abi::__cxa_demangle` (GCC/Clang) or `typeid(T).name()` with `c++filt`:

```cpp
#include <iostream>
#include <typeinfo>
#include <cxxabi.h>
#include <cstdlib>

std::string demangle(const char* mangled) {
    int status = 0;
    char* demangled = abi::__cxa_demangle(mangled, nullptr, nullptr, &status);
    std::string result(demangled ? demangled : mangled);
    std::free(demangled);
    return result;
}

int main() {
    std::cout << demangle(typeid(std::string).name()) << "\n";
    // Output: std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >
    return 0;
}
```

## 7. Architectural Implications

### Binary Size (Templates)

Heavy template usage results in massive symbol names. A
`std::map&lt;std::string, std::vector&lt;MyCustomClass&gt;&gt;` might result in a mangled string
that is 400+ characters long.

- **Impact:** This bloats the string table of the binary, increasing executable size on disk.
- **Mitigation:** `extern template` prevents instantiating the same symbols in every object file.

```cpp
// In header:
extern template class std::vector<MyClass>;

// In one .cpp file:
template class std::vector<MyClass>;  // Explicit instantiation
```

### ABI Incompatibility

Because Itanium and MSVC use fundamentally different encoding logic, it is **impossible** to link an
object file compiled with Clang (GNU CLI) on Windows against a library compiled with MSVC, unless
using C-linkage (`extern "C"`). Clang-CL exists specifically to mimic the MSVC mangling scheme to
allow compatibility.

### DSO Symbol Visibility

On ELF platforms, symbols are exported from shared libraries by default. This means all mangled C++
symbols are visible in the dynamic symbol table, increasing binary size and load time. Use
`-fvisibility=hidden` and explicit `__attribute__((visibility("default")))` to control which symbols
are exported:

```cmake
# CMake: hide all symbols by default
set(CMAKE_CXX_VISIBILITY_PRESET hidden)
set(CMAKE_VISIBILITY_INLINES_HIDDEN ON)
```

## Common Pitfalls

- **Forgetting `extern "C"` for C callbacks:** C++ function pointers have different mangling than C
  function pointers. Passing a C++ function to a C API callback without `extern "C"` causes linker
  errors or undefined behavior at runtime.
- **Mismatched `const` in signatures:** `void foo(int)` and `void foo(const int)` produce different
  mangled names in some contexts (member functions), causing unexpected undefined references.
- **Dual-ABI mismatch:** Mixing GCC 4.x and GCC 5+ object files causes `std::__cxx11` symbol
  mismatches.
- **Trusting `type_info::name()`:** The output is implementation-defined. Use `abi::__cxa_demangle`
  for portable, human-readable type names.

## See Also

- [Linker](./3_linker.md)

:::
