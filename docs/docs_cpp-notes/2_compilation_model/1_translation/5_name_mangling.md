---
title: Name Mangling
date: 2025-12-12T02:56:28.878Z
tags:
  - cpp
categories:
  - cpp
slug: mangling
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Linkers were originally designed for C and Fortran, languages where function names are unique identifiers. C++, however, introduces features that break this assumption:

1. **Overloading:** `void print(int)` and `void print(float)` share the same name.
2. **Namespaces:** `std::sort` and `boost::sort` share the same name.
3. **Templates:** `vector<int>` and `vector<float>` generate distinct code for the same class template.

To enforce uniqueness in the global symbol table, C++ compilers perform **Name Mangling** (also called Decoration). They encode the function signature (Scope, Name, Arguments) into a strict ASCII string.

Understanding mangling is required to decipher linker errors ("Undefined reference to `_ZN3foo3barEi`") and to design interoperability interfaces (FFI).

## 1. The Itanium C++ ABI (GCC / Clang)

The **Itanium C++ ABI** is the standard mangling scheme used by GCC, Clang, and the majority of the Unix ecosystem (Linux, macOS, BSD, Android). It is designed to be parseable and logical.

### Structure

A mangled name generally follows this pattern:
`_Z` + `[N for Nested]` + `[Name Length][Name]...` + `[E for End]` + `[Argument Types]`

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

:::info Return Types
The Itanium ABI generally does **not** encode the return type of a function, as C++ does not support overloading based solely on return type. Exception: Template functions and `auto` return type deduction may trigger return type encoding.
:::

## 2. The Microsoft ABI (MSVC)

The Microsoft Visual C++ compiler uses a proprietary mangling scheme. It is significantly more verbose and includes information not found in Itanium (such as Access Control levels and Calling Conventions).

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

## 3. Disabling Mangling (`extern "C"`)

To allow C code, Rust, Python (ctypes), or Java (JNI) to call a C++ function, you must disable mangling. This forces the linker to use the "C" representation (the bare function name).

```cpp
extern "C" void my_api_func(int x);
```

- **Mangled:** `my_api_func` (or `_my_api_func` on some systems).
- **Restriction:** `extern "C"` functions cannot be overloaded or templated.

### Architectural Best Practice: The API Boundary

When designing a shared library (`.dll`/`.so`) for general consumption, wrap the interface in `extern "C"` block to provide a stable ABI.

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

## Architectural Implications

### 1. Linker Errors

When the linker reports `Undefined reference to ...`, look closely at the mangled name (or the demangled output).

- If the arguments match but the return type is missing (Itanium), it confirms the ABI does not track return types.
- If the error mentions `std::__cxx11::string` but your code uses `std::string`, you have a GCC Dual-ABI mismatch (Module 1.3).

### 2. Binary Size (Templates)

Heavy template usage results in massive symbol names. A `std::map<std::string, std::vector<MyCustomClass>>` might result in a mangled string that is 400+ characters long.

- **Impact:** This bloats the string table of the binary, increasing executable size on disk.
- **Mitigation:** `extern template` (Module 16.5) prevents instantiating the same symbols in every object file.

### 3. ABI Incompatibility

Because Itanium and MSVC use fundamentally different encoding logic, it is **impossible** to link an object file compiled with Clang (GNU CLI) on Windows against a library compiled with MSVC, unless using C-linkage (`extern "C"`). Clang-CL exists specifically to mimic the MSVC mangling scheme to allow compatibility.

```

```
