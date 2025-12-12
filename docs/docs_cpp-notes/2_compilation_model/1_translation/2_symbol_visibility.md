---
title: Symbol Visibility
date: 2025-12-11T21:24:11.468Z
tags:
  - cpp
categories:
  - cpp
slug: symbol-visibility
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

While the compiler processes one Translation Unit (TU) at a time, the **Linker** fuses them together. To do this, it must determine which names (symbols) in `A.cpp` refer to the same entities in `B.cpp`. This logic is governed by **Linkage**.

Simultaneously, the C++ standard enforces strict rules on how many times an entity can be defined, known as the **One Definition Rule (ODR)**. Violating these rules results in Linker Errors or, more dangerously, runtime Undefined Behavior.

## The One Definition Rule (ODR)

The ODR is the fundamental law of physical C++ architecture. It has two distinct clauses:

### 1. ODR within a Translation Unit

A specific entity (class, enum, function, variable) can be declared multiple times but defined only once within a single `.cpp` file (after preprocessor expansion).

- _Enforcement:_ Compiler Error ("Redefinition of 'x'").

### 2. ODR within a Program

A non-inline function or variable with **External Linkage** defined in one TU must not be defined in any other TU.

- _Enforcement:_ Linker Error ("Multiple Definition" / "Symbol already defined").

:::danger The ODR Violation Trap
If two different TUs define the same class/struct `Foo` (e.g., via copy-pasted headers), but the definitions differ (e.g., different member order or types), the linker **may not detect this**.
This is **Undefined Behavior**. The runtime may crash or corrupt memory because code in TU 'A' assumes one memory layout while code in TU 'B' assumes another.
:::

## Linkage Types

Linkage describes how a name interacts across translation unit boundaries.

### 1. No Linkage

The name can only be referred to from the scope it is in.

- **Examples:** Local variables inside a function, parameters, classes defined inside functions.
- **Impact:** Invisible to the linker.

### 2. Internal Linkage

The name is accessible from anywhere within the **current TU**, but it is invisible to other TUs. The linker sees the symbol but marks it as local.

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

**Best Practice:** Always give helper functions and local constants Internal Linkage. This reduces the global symbol table size, speeds up linking, and allows the compiler to perform more aggressive inlining.

### 3. External Linkage

The name is accessible from other TUs. The linker expects to resolve references to this symbol from other object files.

- **Syntax:** Default for non-static global functions and variables.
- **Declaration:** `extern int global_counter;` (in header).
- **Definition:** `int global_counter = 0;` (in **one** `.cpp`).

### 4. Module Linkage (C++20 Modules)

Names declared in a module interface unit (`.cppm`) have module linkage unless exported. They are visible to the module's implementation units but not to importers of the module unless explicitly `export`ed.

## The `inline` Keyword and ODR

In C++, `inline` does **not** primarily mean "optimize this function call away."

**Architectural Definition:** `inline` instructs the linker that **multiple definitions are permitted**.

If `header.h` contains a function definition:

```cpp
// header.h
void log(const char* msg) { ... } // Violation if included in multiple .cpp files
```

If included in `A.cpp` and `B.cpp`, the linker sees two symbols named `log`.

- Without `inline`: Linker Error (Multiple Definition).
- With `inline`: The linker picks one definition and discards the rest. It trusts that they are identical.

**C++17 Inline Variables:**
Before C++17, `static const` members required out-of-line definitions in a `.cpp` file. C++17 allows `inline` variables, enabling header-only static members.

```cpp
struct Configuration {
    // Defined and initialized purely in the header
    static inline int timeout_ms = 5000;
};
```

## Symbol Visibility (Shared Libraries / DLLs)

Linkage is a C++ Standard concept. **Visibility** is an Operating System / Loader concept. It determines which symbols with External Linkage are actually exposed in the Dynamic Symbol Table of a Shared Library (`.so` / `.dll`).

### The Visibility Asymmetry

- **Windows (PE/COFF):** Symbols are **Hidden by Default**. You must explicitly `export` them to make them usable by consumers of the DLL.
- **Linux (ELF):** Symbols are **Visible by Default**. Everything with external linkage is exported unless you hide it.

### Unified Architecture (Best Practice)

To create portable libraries, we force Linux to behave like Windows (Hidden by Default). This reduces binary size, improves load times, and prevents symbol collisions.

**1. Compiler Flags:**
Compile with `-fvisibility=hidden` (GCC/Clang). This hides everything.

**2. Attribute Macros:**
Explicitly tag only the API classes/functions you intend to publish.

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

To diagnose deep ODR or visibility issues, instruct the linker to generate a **Map File**. This text file lists every symbol in the final binary and which object file provided it.

**CMake:**

```cmake
if(MSVC)
    target_link_options(App PRIVATE /MAP:app.map)
else()
    target_link_options(App PRIVATE -Wl,-Map=app.map)
endif()
```
