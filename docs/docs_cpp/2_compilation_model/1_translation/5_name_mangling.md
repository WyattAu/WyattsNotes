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

## 1. Why Name Mangling Is Necessary

### Proof: Overloading Requires Encoding Beyond the Name

Consider two functions in C++:

```cpp
void process(int x);
void process(double x);
```

The linker operates on a flat symbol table where each entry is a (name, address) pair. Both
functions are named `process`. Without additional encoding, the linker cannot distinguish them.

More formally, the C++ language permits function overloading [N4950 S8.4.1]: two functions in the
same scope may have the same name if their parameter-type-lists are different. Since the linker's
symbol table is a global flat map keyed by string (the symbol name), the compiler must encode the
parameter types into the name to produce unique keys.

The encoding must be **deterministic** (the same function always produces the same mangled name) and
**injective** (two functions with different signatures produce different mangled names). This is
guaranteed by the ABI specification for each platform.

### What Gets Mangled

Per the Itanium C++ ABI, the following entities are mangled:

- Top-level functions (including member functions, static member functions).
- Global variables with external or module linkage.
- Template instantiations (both function and class templates).
- Virtual table entries (`_ZTV`, `_ZTI` for RTTI).
- Typeinfo structures for `typeid` support.
- Guard variables for static local initialization (`_ZGV`).

Local variables, static variables with internal linkage, and entities in unnamed namespaces are
**not** mangled (they do not appear in the symbol table).

## 2. The Itanium C++ ABI (GCC / Clang)

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

### Substitution Compression

A critical optimization in the Itanium ABI is **substitution**. When a name appears multiple times
in a mangled symbol, subsequent occurrences are replaced with a reference (`S_`, `S0_`, `S1_`,
etc.). This prevents mangled names from growing exponentially for deeply nested types.

Consider:

```cpp
void foo(std::vector<std::string>, std::vector<std::string>);
```

Without substitution, `std::vector&lt;std::string&gt;` would be encoded twice in full. With
substitution, the second occurrence is replaced by `S_`:

```
_Z3fooSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEEESaIS5_ES5_
```

The `S5_` refers to the sixth substitution candidate (numbered starting from 0), which is
`std::vector&lt;std::__cxx11::basic_string&lt;char, ...&gt;&gt;`.

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

1. `_Z` -- mangled symbol prefix
2. `N` -- begin nested name
3. `St` -- `std::` namespace (special encoding)
4. `6vector` -- "vector" (6 chars)
5. `IiSaIiEE` -- template args: `int`, `std::allocator&lt;int&gt;`
6. `9push_back` -- "push_back" (9 chars)
7. `E` -- end nested name
8. `RKi` -- `int const&` (return type not encoded for non-template functions)

Result: `std::vector&lt;int, std::allocator&lt;int&gt;&gt;::push_back(int const&)`

### Template Argument Encoding

Template arguments are encoded within `I...E` delimiters. Each argument is encoded according to its
type:

- **Type arguments:** Encoded using the normal type encoding rules.
- **Non-type arguments (integers):** Encoded as `LiVALUEE` (literal, value, end).
- **Template template arguments:** Encoded as `IT_NAMEE` where `T_NAME` is the template name.

```cpp
template<typename T, int N>
void process(T array[N]);

// process<int, 10> mangles the template args as:
// IiLi10EE  (int, literal 10)
```

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

:::info Return Types The Itanium ABI generally does **not** encode the return type of a function, as
C++ does not support overloading based solely on return type. Exception: Template functions and
`auto` return type deduction may trigger return type encoding.
:::

## 3. The Microsoft ABI (MSVC)

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
| **Substitutions**  | `S_`, `S0_`, etc.      | Not used (names encoded in full)     |

## 4. Disabling Mangling (`extern "C"`)

To allow C code, Rust, Python (ctypes), or Java (JNI) to call a C++ function, you must disable
mangling. This forces the linker to use the "C" representation (the bare function name).

```cpp
extern "C" void my_api_func(int x);
```

- **Mangled:** `my_api_func` (or `_my_api_func` on some systems).
- **Restriction:** `extern "C"` functions cannot be overloaded or templated.

### How `extern "C"` Affects Mangling

Per [N4950 S10.5], an `extern "C"` linkage specification causes the entity to use C language
linkage. The practical effect on mangling:

1. **Functions:** The function name is used without encoding parameter types. The symbol in the
   object file is simply the function name (with a possible platform-specific prefix like `_` on
   Windows).
2. **Variables:** Similarly unmangled.
3. **No overloading:** Since the mangled name does not encode types, two `extern "C"` functions with
   the same name but different parameters would produce the same symbol, which the linker would flag
   as a duplicate definition.

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

:::warning Mixing function pointers with different linkage is undefined behavior [N4950 S10.5 p7]. A
function pointer of type `extern "C"` and one of type C++ linkage are different types, even if they
have the same parameter and return types. Passing one where the other is expected is UB.
:::

## 5. Inspection and Demangling Tools

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

## 6. Name Mangling and Linker Errors

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

### Decode Example: Step-by-Step

Given the linker error:

```
undefined reference to `_ZNK5Utils8parseArgERKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE'`
```

Step-by-step demangling:

1. `_Z` -- mangled prefix
2. `N` -- nested name
3. `K` -- const qualifier (this function is const-qualified)
4. `5Utils` -- namespace `Utils`
5. `8parseArg` -- function `parseArg`
6. `E` -- end nested name
7. `R` -- reference
8. `K` -- const
9. `NSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE` -- `const std::__cxx11::string&`

Result:
`Utils::parseArg(std::__cxx11::basic_string&lt;char, std::char_traits&lt;char&gt;, std::allocator&lt;char&gt;&gt; const&amp;) const`

The `K` after `N` indicates this is a const member function. If your declaration lacks `const`, the
mangled name will differ, causing the linker error.

## 7. RTTI and `type_info` Name Mangling

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

### Mangling in Debug Builds

In debug builds (`-g`, `-O0`), the compiler emits additional DWARF debug information (`.debug_info`
sections) that contains the demangled names. However, the symbol table still contains mangled names.
The DWARF info allows debuggers (GDB, LLDB) to map mangled symbols back to their source-level names.

Some compilers emit a `__func__` or `__PRETTY_FUNCTION__` string literal that contains the unmangled
signature. This is independent of the mangling scheme and is available even in release builds:

```cpp
void foo(int x) {
    std::cout << __PRETTY_FUNCTION__ << "\n";
    // Output: "void foo(int)"
}
```

## 8. Architectural Implications

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

### Name Length Limits

The Itanium ABI does not impose a hard limit on mangled name length. However, some toolchain
components may have practical limits:

- **ELF symbol table:** No hard limit, but extremely long names increase `.strtab` size.
- **MSVC COFF:** Internal limits may cause truncation for names exceeding ~4096 characters.
- **`nm` output:** Line wrapping may make long names hard to read. Use `nm -C` for demangled output.

## Common Pitfalls

- **Forgetting `extern "C"` for C callbacks:** C++ function pointers have different mangling than C
  function pointers. Passing a C++ function to a C API callback without `extern "C"` causes linker
  errors or undefined behavior at runtime.
- **Mismatched `const` in signatures:** `void foo(int)` and `void foo(const int)` produce different
  mangled names in some contexts (member functions), causing unexpected undefined references.
- **Dual-ABI mismatch:** Mixing GCC 4.x and GCC 5+ object files causes `std::__cxx11` symbol
  mismatches. Always recompile everything with the same compiler.
- **Trusting `type_info::name()`:** The output is implementation-defined. Use `abi::__cxa_demangle`
  for portable, human-readable type names.
- **Assuming ABI compatibility between Itanium and MSVC:** Object files compiled with different ABI
  schemes cannot be linked. Use `extern "C"` for cross-compiler interop.
- **Inline functions in headers without `inline`:** Defining a non-inline function in a header
  included by multiple TUs causes duplicate symbol errors because each TU produces a mangled symbol
  with the same name (but in different COMDAT groups if the linker supports it).

## 9. Mangling and Inline Namespaces

Inline namespaces [N4950 S9.8.2] affect mangling because they contribute to the qualified name. An
inline namespace is encoded as part of the nested name:

```cpp
namespace V1 {
    inline namespace Detail {
        struct Config { int value; };
    }
}
```

The mangled name for `V1::Config` is `_ZN2V16ConfigE` (the inline namespace `Detail` does not appear
in the mangled name for most lookup contexts). However, the full mangled name for
`V1::Detail::Config` would include `Detail`. The exact behavior depends on whether the lookup
resolves through the inline namespace or directly.

Inline namespaces are commonly used for versioning ABI-compatible changes in library headers:

```cpp
namespace lib {
    inline namespace v2 {
        void process(int x);
    }
    // v1::process(int) still accessible as lib::process(int) for backward compatibility
}
```

## 10. Mangling and Lambdas

Lambda closures produce unnamed types with compiler-generated names. These names are mangled
uniquely using a counter based on the lexical scope:

```cpp
auto f = [](int x) { return x * 2; };
```

The closure type is mangled as something like `_ZZ1fvENK3$_0clEi` (lambda in function `f`, 0th
lambda, `operator()` taking `int`). The exact encoding is compiler-specific but follows the general
pattern of including the enclosing function name and a lambda index.

This is relevant when debugging: if a lambda appears in a linker error (unlikely but possible if the
lambda captures something that requires a global symbol), the mangled name will include the
compiler-generated type name, which is unreadable without demangling.

## 11. Mangling and Concepts (C++20)

Concepts [N4950 S7.5] do not produce mangled names in the symbol table because they are compile-time
constraints, not runtime entities. However, concept names appear in **constraint mangling** for
constrained templates.

When a template has a constrained `requires` clause, the constraint is not encoded in the mangled
name. Two function templates with the same name and parameters but different constraints produce the
same mangled name, which would be an ODR violation if both were defined:

```cpp
template<typename T>
    requires std::integral<T>
void process(T x);

template<typename T>
    requires std::floating_point<T>
void process(T x);  // Same mangled name as above: _Z7processIiEvT_ (for int)
```

This is not a practical problem because the compiler rejects the second definition as a redefinition
at compile time. The standard prohibits defining two templates with the same name and parameter list
but different constraints [N4950 S13.7.3 p6].

## 12. Mangling and `noexcept` Specifications

Per the Itanium ABI, `noexcept` is part of the function type and **does** affect mangling in C++17
and later. A `noexcept` function and a potentially-throwing function with the same name and
parameters produce different mangled names:

```cpp
void foo(int x);              // _Z3fooi
void bar(int x) noexcept;     // _Z3barNi (note the 'N' suffix for noexcept)
```

This can cause subtle linker errors when a function is declared `noexcept` in one TU but not in
another. The mangled names differ, and the linker reports an undefined reference. The fix is to
ensure the `noexcept` specification is consistent across all declarations.

:::warning In C++17, `noexcept` became part of the type system. This means function pointer types
are different if their `noexcept` specification differs. A `void(*)(int)` and a
`void(*)(int) noexcept` are different types and cannot be implicitly converted.
:::

## 13. Practical Mangling Debugging Workflow

When encountering an obscure linker error involving a mangled name, follow this systematic workflow:

1. **Copy the mangled name** from the linker error output.
2. **Demangle it** using `c++filt` or `llvm-cxxfilt`:
   ```bash
   echo '_ZNK5Utils8parseArgERKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE' | c++filt
   ```
3. **Identify the namespace, class, and function** from the demangled name.
4. **Search the source code** for the function declaration. Check:
   - Is the function declared in the TU that references it?
   - Is the correct `extern "C"` linkage specified (if applicable)?
   - Are the parameter types an exact match (including `const`, `&`, `&&`)?
   - Is the `noexcept` specification consistent?
5. **Check the library/object file** that should provide the symbol:
   ```bash
   nm -C libutils.a | grep "Utils::parseArg"
   ```
6. **If the symbol exists but the linker cannot find it**, check link order (libraries after object
   files) and visibility (`-fvisibility=hidden`).

## 14. Mangling Reference: Complete Type Encoding Table

The following table provides a comprehensive reference for Itanium ABI type encodings:

| Source Type          | Mangled | Notes                  |
| :------------------- | :------ | :--------------------- |
| `void`               | `v`     |                        |
| `bool`               | `b`     |                        |
| `char`               | `c`     |                        |
| `signed char`        | `a`     |                        |
| `unsigned char`      | `h`     |                        |
| `short`              | `s`     |                        |
| `unsigned short`     | `t`     |                        |
| `int`                | `i`     |                        |
| `unsigned int`       | `j`     |                        |
| `long`               | `l`     |                        |
| `unsigned long`      | `m`     |                        |
| `long long`          | `x`     |                        |
| `unsigned long long` | `y`     |                        |
| `__int128`           | `n`     |                        |
| `float`              | `f`     |                        |
| `double`             | `d`     |                        |
| `long double`        | `e`     |                        |
| `float _Complex`     | `Cf`    | C99 complex            |
| `double _Complex`    | `Cd`    | C99 complex            |
| `T*`                 | `PT`    | P = pointer            |
| `T&`                 | `RT`    | R = lvalue reference   |
| `T&&`                | `OT`    | O = rvalue reference   |
| `T const`            | `KT`    | K = const              |
| `T volatile`         | `VT`    | V = volatile           |
| `T const volatile`   | `VK`    |                        |
| `T[]`                | `AT_`   | Array of unknown bound |
| `T[N]`               | `AT_N`  | Array of N elements    |

This table covers the most common encodings. The full specification is in the Itanium C++ ABI
document, section 5.1.5.

## 15. Mangling and Structured Bindings (C++17)

Structured bindings [N4950 S9.7] do not introduce new mangled names. The compiler decomposes the
structured binding into individual references to the underlying object's members or tuple elements.
These references are local to the scope and do not appear in the symbol table.

## 16. Mangling and Coroutines (C++20)

Coroutine-related symbols are mangled with special prefixes:

- `_ZSt16coro_resume_pv` -- `std::coro_resume(void*)`
- `_ZSt17coro_destroy_pv` -- `std::coro_destroy(void*)`
- `_ZSt12coro_done_pv` -- `std::coro_done(void*)`

The coroutine frame itself is a compiler-generated struct with a mangled name based on the coroutine
function's signature. The frame type is internal to the compiler and does not appear in the public
symbol table.

## See Also

- [Linker](./3_linker.md)
- [Binary Formats](./4_binary_formats.md)
- [Symbol Visibility](./2_symbol_visibility.md)
- [Preprocessing and the AST](./1_preprocessing_ast_object.md)
