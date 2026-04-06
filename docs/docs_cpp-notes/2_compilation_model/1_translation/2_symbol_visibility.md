---
title: Symbol Visibility
date: 2025-12-11T21:24:11.468Z
tags:
  - cpp
categories:
  - cpp
slug: symbol-visibility
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

While the compiler processes one Translation Unit (TU) at a time, the **Linker** fuses them
together. To do this, it must determine which names (symbols) in `A.cpp` refer to the same entities
in `B.cpp`. This logic is governed by **Linkage**.

Simultaneously, the C++ standard enforces strict rules on how many times an entity can be defined,
known as the **One Definition Rule (ODR)**. Violating these rules results in Linker Errors or, more
dangerously, runtime Undefined Behavior.

## The One Definition Rule (ODR)

The ODR is the fundamental law of physical C++ architecture. It has two distinct clauses:

### 1. ODR within a Translation Unit

A specific entity (class, enum, function, variable) can be declared multiple times but defined only
once within a single `.cpp` file (after preprocessor expansion).

- _Enforcement:_ Compiler Error ("Redefinition of 'x'").

### 2. ODR within a Program

A non-inline function or variable with **External Linkage** defined in one TU must not be defined in
any other TU.

- _Enforcement:_ Linker Error ("Multiple Definition" / "Symbol already defined").

:::danger
The ODR Violation Trap If two different TUs define the same class/struct `Foo` (e.g., via
copy-pasted headers), but the definitions differ (e.g., different member order or types), the linker
**may not detect this**. This is **Undefined Behavior**. The runtime may crash or corrupt memory
because code in TU 'A' assumes one memory layout while code in TU 'B' assumes another.
:::

## Linkage Types

Linkage describes how a name interacts across translation unit boundaries.

### 1. No Linkage

The name can only be referred to from the scope it is in.

- **Examples:** Local variables inside a function, parameters, classes defined inside functions.
- **Impact:** Invisible to the linker.

### 2. Internal Linkage

The name is accessible from anywhere within the **current TU**, but it is invisible to other TUs.
The linker sees the symbol but marks it as local.

- **Syntax:**
  - **Legacy C:** `static` keyword on globals/functions.
  - **Modern C++:** Anonymous Namespaces.

```cpp
// Legacy Style (Deprecated for C++ code)
static int helper_val = 42;
static void helper_func() {}

// Modern Style (Anonymous Namespace)
namespace {
    int helper_val = 42;
    void helper_func() {}
}
```

**Best Practice:** Always give helper functions and local constants Internal Linkage. This reduces
the global symbol table size, speeds up linking, and allows the compiler to perform more aggressive
inlining.

### 3. External Linkage

The name is accessible from other TUs. The linker expects to resolve references to this symbol from
other object files.

- **Syntax:** Default for non-static global functions and variables.
- **Declaration:** `extern int global_counter;` (in header).
- **Definition:** `int global_counter = 0;` (in **one** `.cpp`).

### 4. Module Linkage (C++20 Modules)

Names declared in a module interface unit (`.cppm`) have module linkage unless exported. They are
visible to the module's implementation units but not to importers of the module unless explicitly
`export`ed.

## The `inline` Keyword and ODR

In C++, `inline` does **not** primarily mean "optimize this function call away."

**Architectural Definition:** `inline` instructs the linker that **multiple definitions are
permitted**.

If `header.h` contains a function definition:

```cpp
// header.h
void log(const char* msg) { ... } // Violation if included in multiple .cpp files
```

If included in `A.cpp` and `B.cpp`, the linker sees two symbols named `log`.

- Without `inline`: Linker Error (Multiple Definition).
- With `inline`: The linker picks one definition and discards the rest. It trusts that they are
  identical.

**C++17 Inline Variables:** Before C++17, `static const` members required out-of-line definitions in
a `.cpp` file. C++17 allows `inline` variables, enabling header-only static members.

```cpp
struct Configuration {
    // Defined and initialized purely in the header
    static inline int timeout_ms = 5000;
};
```

## Symbol Visibility (Shared Libraries / DLLs)

Linkage is a C++ Standard concept. **Visibility** is an Operating System / Loader concept. It
determines which symbols with External Linkage are actually exposed in the Dynamic Symbol Table of a
Shared Library (`.so` / `.dll`).

### The Visibility Asymmetry

- **Windows (PE/COFF):** Symbols are **Hidden by Default**. You must explicitly `export` them to
  make them usable by consumers of the DLL.
- **Linux (ELF):** Symbols are **Visible by Default**. Everything with external linkage is exported
  unless you hide it.

### Unified Architecture (Best Practice)

To create portable libraries, we force Linux to behave like Windows (Hidden by Default). This
reduces binary size, improves load times, and prevents symbol collisions.

**1. Compiler Flags:** Compile with `-fvisibility=hidden` (GCC/Clang). This hides everything.

**2. Attribute Macros:** Explicitly tag only the API classes/functions you intend to publish.

```cpp
#if defined(_WIN32)
  #if defined(MYLIB_EXPORT_BUILD)
    #define MYLIB_API __declspec(dllexport)
  #else
    #define MYLIB_API __declspec(dllimport)
  #endif
#else
  #define MYLIB_API __attribute__((visibility("default")))
#endif

// Usage
class MYLIB_API PublicWidget { ... }; // Exported
class InternalHelper { ... };         // Hidden (Internal Linkage equivalent for DSO)
```

**3. CMake Configuration:**

```cmake
add_library(MyLib SHARED src/lib.cpp)
set_target_properties(MyLib PROPERTIES
    CXX_VISIBILITY_PRESET hidden
    VISIBILITY_INLINES_HIDDEN YES
    DEFINE_SYMBOL MYLIB_EXPORT_BUILD # CMake auto-defines this when compiling the lib
)
```

## Inspection and Verification

You must be able to inspect object files to verify linkage and visibility.

### Linux / macOS (`nm`)

The `nm` tool lists symbols. The character case indicates scope.

- **`T` / `D` (Uppercase):** Global (External Linkage).
- **`t` / `d` (Lowercase):** Local (Internal Linkage).
- **`U`:** Undefined (Must be linked).

```bash
nm -C main.o
```

**Example Output:**

```text
0000000000000000 t (anonymous namespace)::helper_func()  <-- Internal
0000000000000020 T main                                  <-- External
                 U std::cout                             <-- Undefined
```

### Windows (`dumpbin`)

Use the Visual Studio command prompt.

```cmd
dumpbin /SYMBOLS main.obj
```

Look for `External` vs `Static` in the attribute column.

### Link Map Files

To diagnose deep ODR or visibility issues, instruct the linker to generate a **Map File**. This text
file lists every symbol in the final binary and which object file provided it.

**CMake:**

```cmake
if(MSVC)
    target_link_options(App PRIVATE /MAP:app.map)
else()
    target_link_options(App PRIVATE -Wl,-Map=app.map)
endif()
```

---

## Linkage in Detail

### Internal Linkage Mechanics

When the compiler assigns internal linkage to a symbol, it emits that symbol with the `STB_LOCAL`
binding in the ELF symbol table. The linker treats local symbols as invisible to other object files.
This has important consequences:

1. **Name collisions are impossible:** Two TUs can each define a `static` function called `helper()`
   without conflict.
2. **The compiler can optimize more aggressively:** Since the symbol cannot be referenced from
   outside the TU, the compiler knows all call sites and can inline, dead-code eliminate, or
   specialize the function.
3. **Symbol table size is reduced:** The dynamic linker processes fewer symbols at startup.

```cpp
// a.cpp
namespace {
    int compute(int x) { return x * x; }  // Internal linkage
}

int a_func(int x) { return compute(x); }

// b.cpp
namespace {
    int compute(int x) { return x + x; }  // Different function, same name — no conflict
}

int b_func(int x) { return compute(x); }
```

Both TUs compile and link successfully. Each TU has its own private `compute` function.

### Anonymous Namespaces vs `static`

In C++, anonymous namespaces and `static` are functionally equivalent for functions and variables,
but anonymous namespaces have advantages for types:

```cpp
// Option A: static (works for functions and variables only)
static struct Helper { void run() {} } helper;  // Clang/GCC accept with warning

// Option B: anonymous namespace (works for everything)
namespace {
    struct Helper { void run() {} };  // Clean: type is hidden
    Helper helper;
}
```

The anonymous namespace is the preferred modern approach because:

- It works for class/struct/enum definitions (unlike `static`).
- It is idiomatically C++ (rather than inherited C).
- It guarantees unique naming even across nested scopes.

### `extern` and Tentative Definitions

The `extern` keyword declares a variable without defining it. The definition must exist in exactly
one TU:

```cpp
// header.h
extern int global_counter;  // Declaration (no storage allocated)

// counter.cpp
int global_counter = 0;     // Definition (storage allocated here)
```

A **tentative definition** is a declaration without an initializer at file scope:

```cpp
int tentative_var;  // Tentative definition: may become a definition
int tentative_var;  // OK in C (tentative definitions can repeat), ill-formed in C++ if already defined
```

In C++, multiple tentative definitions in the same TU are ill-formed [N4950 §6.6.2]. Use `extern`
declarations in headers and exactly one definition in a `.cpp` file.

### `inline` Variables and Linkage (C++17)

C++17 extended `inline` from functions to variables. An `inline` variable can be defined in a header
and included in multiple TUs without violating the ODR:

```cpp
// config.h (included in multiple TUs)
struct Config {
    static inline int timeout_ms = 5000;  // OK: inline variable, one definition rule relaxed
    static inline const char* name = "default";
    static inline std::array<int, 3> defaults = {1, 2, 3};
};
```

The compiler and linker cooperate: each TU emits a definition, and the linker picks one (they must
all be identical). The `inline` keyword tells the linker "multiple definitions are expected; merge
them."

Without `inline`, a static member defined in a header would cause "multiple definition" errors when
included in multiple TUs (unless it was `const` or `constexpr`, which already had special ODR
exemptions).

---

## Visibility in Depth

### ELF Symbol Visibility Levels

The ELF specification defines four visibility levels:

| Visibility  | ELF Constant    | Behavior                                                      |
| :---------- | :-------------- | :------------------------------------------------------------ |
| `default`   | `STV_DEFAULT`   | Visible to all DSOs and the executable                        |
| `hidden`    | `STV_HIDDEN`    | Not visible outside the defining DSO (prevents PLT/GOT entry) |
| `internal`  | `STV_INTERNAL`  | Like hidden, but also prevents symbol interposition           |
| `protected` | `STV_PROTECTED` | Visible, but cannot be preempted by other DSOs                |

**`-fvisibility=hidden`** sets the default visibility to `STV_HIDDEN` for all external symbols. You
then opt-in specific symbols with `__attribute__((visibility("default")))`.

**`STV_INTERNAL`** is a stronger form of hidden. It guarantees that the symbol will always be
resolved within the defining DSO, even if another DSO defines the same symbol. This enables the
linker to convert GOT-relative accesses to direct PC-relative accesses (avoiding the GOT entirely),
which is slightly faster.

**`STV_PROTECTED`** is rarely used. It means the symbol is visible outside the DSO but cannot be
preempted (replaced by a definition in another DSO or via `LD_PRELOAD`). This is useful for
performance when you want to export a symbol but avoid the overhead of PLT/GOT indirection.

### Function-Level Visibility

Visibility can be set per-function or per-variable using attributes:

```cpp
// This function is exported (visible in the DSO's dynamic symbol table)
__attribute__((visibility("default")))
void public_api() {}

// This function is hidden (not exported, even if -fvisibility is not set)
__attribute__((visibility("hidden")))
void internal_helper() {}

// Class-level: all members inherit the class visibility
class __attribute__((visibility("default"))) PublicWidget {
public:
    void method1();  // exported
    void method2();  // exported
};
```

### Inlines and Visibility

By default, `inline` functions defined in headers are **not** exported from DSOs, even with
`default` visibility. They are compiled into each TU that includes the header. However, if a
`-fvisibility=hidden` compilation is in effect, inlines in a shared library are still available to
consumers through the header — they are compiled into the consumer's TU.

The CMake property `VISIBILITY_INLINES_HIDDEN YES` explicitly hides inline functions from the DSO's
export table, reducing symbol table size:

```cmake
set_target_properties(MyLib PROPERTIES
    CXX_VISIBILITY_PRESET hidden
    VISIBILITY_INLINES_HIDDEN YES
)
```

### Windows DLL Export/Import Model

Windows uses a different mechanism: `__declspec(dllexport)` and `__declspec(dllimport)`:

```cpp
// When BUILDING the DLL:
#define MYLIB_API __declspec(dllexport)

// When CONSUMING the DLL:
#define MYLIB_API __declspec(dllimport)
```

The `dllexport` attribute places the symbol in the DLL's export table (analogous to the ELF dynamic
symbol table). The `dllimport` attribute tells the compiler that the symbol is defined in a DLL,
enabling it to generate an indirect call through the IAT (Import Address Table).

CMake's `DEFINE_SYMBOL` property automatically defines the build symbol when compiling the library's
own sources:

```cmake
add_library(MyLib SHARED src/lib.cpp)
set_target_properties(MyLib PROPERTIES
    DEFINE_SYMBOL MYLIB_EXPORT_BUILD
)
# When compiling MyLib's sources, CMake adds -DMYLIB_EXPORT_BUILD
# The header's #if defined(MYLIB_EXPORT_BUILD) selects __declspec(dllexport)
```

### Cross-Platform Visibility Macro Pattern

The canonical pattern for portable library visibility:

```cpp
// mylib_export.h
#pragma once

#if defined(_WIN32)
    #if defined(MYLIB_BUILDING)
        #define MYLIB_EXPORT __declspec(dllexport)
    #else
        #define MYLIB_EXPORT __declspec(dllimport)
    #endif
#else
    #if defined(MYLIB_BUILDING)
        #define MYLIB_EXPORT __attribute__((visibility("default")))
    #else
        #define MYLIB_EXPORT
    #endif
#endif

// Classes and functions to export
class MYLIB_EXPORT Engine { /* ... */ };
MYLIB_EXPORT void startup();
```

In CMake, define `MYLIB_BUILDING` when compiling the library:

```cmake
add_library(MyLib SHARED src/lib.cpp)
target_compile_definitions(MyLib PRIVATE MYLIB_BUILDING)
```

---

## The ODR and ABI Stability

### ABI Stability and Symbol Versioning

When a shared library is updated, its exported symbols may change signature or layout. ELF supports
**symbol versioning** to maintain backward compatibility:

```bash
# View symbol versions
readelf -V ./libmylib.so
```

```
Version definition section:
  0x0000: Rev: 1  Index: 1  Name: libmylib.so
  0x0010: Rev: 1  Index: 2  Name: MYLIB_1.0
  0x0020: Rev: 1  Index: 3  Name: MYLIB_2.0
```

A consumer compiled against `MYLIB_1.0` can still use `MYLIB_2.0` if the version script preserves
the old symbols. This is how `glibc` maintains compatibility across decades.

### ODR Violations in Practice

ODR violations are particularly insidious because the linker often does not detect them. Consider:

```cpp
// a.h (included by a.cpp)
struct Point {
    double x, y;
};

// b.h (included by b.cpp) — different layout, same name
struct Point {
    double y, x;  // Swapped!
};
```

If `a.cpp` and `b.cpp` are linked together and share a `Point` object through external linkage, one
TU treats the first 8 bytes as `x` and the second 8 bytes as `y`, while the other TU interprets them
in reverse order. The linker sees a single symbol `Point` and sees no error. This is **undefined
behavior** and typically manifests as corrupted floating-point values or subtle numerical errors.

**Mitigation strategies:**

1. Never copy-paste struct definitions. Always include the same header.
2. Use `-Wodr` (GCC/Clang) to detect ODR violations at link time (limited effectiveness).
3. Use C++20 Modules, which enforce a single definition point per module interface.
4. Use `-fvisibility=hidden` to minimize the symbol surface and reduce collision risk.

---

## Common Pitfalls

- **Using `static` for constants in headers instead of `inline`.** In C++17 and later, prefer
  `static inline` or `inline` for header-only constants. `static` creates a separate copy in every
  TU, increasing binary size and potentially causing identity comparison failures (`&a != &b` when
  they should be the same object).
- **Forgetting `-fvisibility=hidden` on Linux shared libraries.** Without it, every external-linkage
  symbol in your library is exported, polluting the global symbol namespace and slowing down dynamic
  linking. Large projects (Chromium, Firefox) enforce hidden visibility by default.
- **Mismatched export macros.** If the DLL consumer uses `__declspec(dllimport)` but the symbol is
  not actually exported from the DLL, the linker fails with an unresolved external symbol error.
  Ensure the `DEFINE_SYMBOL` CMake property matches the macro name in your header.
- **Relying on undefined behavior when violating the ODR.** The ODR is not a "soft rule." Violations
  are undefined behavior per [N4950 §6.6]. The program may appear to work in debug builds but fail
  in optimized builds where the compiler makes assumptions based on the ODR (e.g., assuming two
  definitions of `inline` function are identical and merging them incorrectly).
- **Not checking symbol tables after refactoring.** After removing a function or renaming a class,
  check `nm -C libmylib.so` to verify that stale symbols are not being exported. Stale exports
  increase binary size and can confuse consumers who accidentally use deprecated symbols.

:::
