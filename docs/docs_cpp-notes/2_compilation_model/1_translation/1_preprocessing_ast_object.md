---
title: Preprocessing and AST Generation, and Object Code
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

Understanding the translation stages are critical for debugging compilation errors, optimizing build
times, and understanding.

The pipeline processes one **Translation Unit (TU)** at a time. A TU is the output of the
preprocessor (a single source file plus all included headers).

## Stage 1: The Preprocessor

The preprocessor is a legacy text-manipulation engine inherited from C. It operates on source text
_before_ the compiler understands C++ syntax. It does not know what a `class` or `function` is; it
only knows tokens.

### Mechanics

1. **File Inclusion (`#include`):** The preprocessor locates the target file and recursively
   copy-pastes its entire contents into the current file. This explains why C++ compilation is slow:
   a single `.cpp` file often expands to tens of thousands of lines of code after headers are
   merged.
2. **Macro Expansion (`#define`):** Token replacement. This happens blindly, disregarding scope or
   namespaces.
3. **Conditional Compilation (`#ifdef`):** Text is stripped or kept based on conditions.

### Inspection

To debug macro expansion or header inclusion issues, you can stop the pipeline after preprocessing.

<Tabs>
  <TabItem value="gcc_clang" label="GCC / Clang" default>

```bash
# -E: Run preprocessor only
# -P: Disable linemarker generation (cleaner output)
clang++ -E -P main.cpp -o main.i
```

  </TabItem>
  <TabItem value="msvc" label="MSVC">

```cmd
:: /P: Preprocess to a file (.i)
cl /P main.cpp
```

  </TabItem>
</Tabs>

The output (`main.i`) is the exact text the compiler frontend receives. If a syntax error occurs
"inside a macro," inspecting this file reveals the generated code causing the issue.

## Stage 2: The Frontend (AST Generation)

Once the preprocessor generates the TU, the compiler frontend (Clang/GCC) takes over. This stage
validates the code against the C++ Language Standard.

### 1. Lexical Analysis (Tokenization)

The source stream is converted into a sequence of tokens (`kw_int`, `identifier_main`, `l_paren`,
`r_paren`).

### 2. Syntax and Semantic Analysis

The tokens are assembled into an **Abstract Syntax Tree (AST)**.

- **Syntax:** Does the code follow the grammar? (e.g., matching braces, semicolons).
- **Semantics:** Does the code make sense? (e.g., type checking, overload resolution, access
  control).

**Template Note:** At this stage, templates are parsed for basic syntax, but they are not fully
instantiated until they are used.

### Inspection (Clang)

Clang allows direct visualization of the AST. This is invaluable for understanding how the compiler
interprets complex templates or precedence rules.

```bash
# -Xclang -ast-dump: Dump the AST to stdout
# -fsyntax-only: Do not generate code
clang++ -Xclang -ast-dump -fsyntax-only main.cpp
```

**Example Output:**

```text
FunctionDecl 0x... <line:3:1, line:5:1> line:3:5 main 'int ()'
`-CompoundStmt 0x... <col:12, line:5:1>
  `-ReturnStmt 0x... <line:4:5, col:12>
    `-IntegerLiteral 0x... <col:12> 'int' 0
```

## Stage 3: Intermediate Representation (IR)

The AST is translated into an **Intermediate Representation**. This is an architecture-agnostic
assembly language. This is where the majority of optimizations (inlining, loop unrolling,
vectorization) occur.

- **GCC:** Uses GIMPLE and RTL.
- **LLVM (Clang):** Uses LLVM IR (`.ll`).

LLVM IR is a Static Single Assignment (SSA) based language. It models an infinite-register machine.

### Inspection

<Tabs>
  <TabItem value="clang" label="Clang (LLVM IR)" default>

```bash
# -emit-llvm: Generate LLVM bitcode/text
# -S: Output as text (assembly/IR) rather than binary
# -O3: Apply optimizations to the IR
clang++ -S -emit-llvm -O3 main.cpp -o main.ll
```

  </TabItem>
  <TabItem value="gcc" label="GCC (GIMPLE)">

```bash
# -fdump-tree-all: Dumps internal tree representations
g++ -fdump-tree-all main.cpp
```

  </TabItem>
</Tabs>

Reading the optimized IR confirms whether high-level C++ abstractions (like `std::vector` or
lambdas) were successfully compiled away into efficient scalar operations ("Zero-Cost
Abstractions").

## Stage 4: The Backend (Code Generation)

The Backend maps the generic IR to the specific Instruction Set Architecture (ISA) of the target
machine (x86_64, ARM64, WASM).

1. **Instruction Selection:** Mapping IR operations to machine opcodes.
2. **Register Allocation:** Mapping infinite IR registers to the limited physical CPU registers
   (RAX, RDI, etc.).
3. **Instruction Scheduling:** Reordering instructions to optimize pipeline throughput.

### Output: Assembly

To see the final assembly before it is encoded into binary:

```bash
# -S: Compile only; do not assemble or link
# -masm=intel: Use Intel syntax (dest, source) instead of AT&T
g++ -S -masm=intel -O3 main.cpp -o main.s
```

## Stage 5: The Object File

The Assembler converts the textual assembly (`.s`) into a relocatable object file (`.o` or `.obj`).
This file contains machine code, but it is not executable. It contains placeholders for memory
addresses (symbols) that are outside the current TU.

### Binary Formats

- **ELF (Executable and Linkable Format):** Linux, BSD, Android.
- **PE/COFF (Portable Executable):** Windows.
- **Mach-O:** macOS, iOS.

### Anatomy of an Object File

An object file is divided into **Sections**. Understanding these is essential for systems
programming and embedded work.

| Section       | Description        | Content                                                                                                     |
| :------------ | :----------------- | :---------------------------------------------------------------------------------------------------------- |
| **`.text`**   | Executable Code    | The actual machine instructions (read-only, executable).                                                    |
| **`.data`**   | Initialized Data   | Global/Static variables with non-zero values (read-write).                                                  |
| **`.bss`**    | Uninitialized Data | Global/Static variables initialized to zero. Does not take space on disk; allocated at runtime.             |
| **`.rodata`** | Read-Only Data     | String literals, constants, switch tables (`const static`).                                                 |
| **`.symtab`** | Symbol Table       | List of functions/variables defined in this file (exported) and required by this file (imported/undefined). |

### Inspection Tools

Analyze the contents of object files to debug linking errors or binary size bloat.

<Tabs>
  <TabItem value="linux" label="Linux (ELF)" default>

```bash
# Headers and Sections
readelf -h -S main.o

# Symbol Table (Defined vs Undefined)
nm -C main.o
# 'T' = Text (Defined), 'U' = Undefined (Needs Linking)

# Disassembly
objdump -d -C -M intel main.o
```

  </TabItem>
  <TabItem value="macos" label="macOS (Mach-O)">

```bash
# Sections
otool -l main.o

# Symbols
nm -m main.o
```

  </TabItem>
  <TabItem value="windows" label="Windows (COFF)">

```cmd
# Headers and Sections
dumpbin /HEADERS main.obj

# Symbols
dumpbin /SYMBOLS main.obj
```

  </TabItem>
</Tabs>

The compiler produces a collection of **Object Files**. These files contain optimized machine code
but rely on "Undefined Symbols" (like `std::cout` or function calls to other files). They cannot run
yet. Resolving these symbols is the job of the **Linker**.

---

## Translation Phases Defined by the Standard

The C++ standard [N4950 §5.1.1] defines the translation of a source file into an executable as a
sequence of **translation phases** (also called "phases of translation"). These are numbered 1
through 9:

| Phase | Description                                                                                                  |
| :---- | :----------------------------------------------------------------------------------------------------------- |
| 1     | Physical source file characters are mapped to the source character set                                       |
| 2     | Line splicing: backslash-newline sequences are deleted, joining physical lines                               |
| 3     | Tokenization and preprocessing: comments replaced by whitespace, preprocessing directives executed           |
| 4     | Preprocessing directives are executed, macros expanded, `#include` files recursively included                |
| 5     | Each source character set member that cannot be represented is mapped to an implementation-defined character |
| 6     | Adjacent string literal tokens are concatenated                                                              |
| 7     | Whitespace and comment removal (except within ` preprocessing` directives), token conversion                 |
| 8     | Each preprocessing token is converted to a regular token (the compiler proper begins)                        |
| 9     | Linkage: all external references are resolved, program image is generated                                    |

Phases 1-4 constitute preprocessing. Phase 8 is where the compiler frontend performs semantic
analysis and builds the AST. Phase 9 is linking.

---

## The Preprocessor in Depth

### Translation Units and Header Units

A **Translation Unit (TU)** [N4950 §5.1.1] is the output of phases 1-7: a single preprocessed source
file. The compiler processes one TU at a time, which is why the C++ model is called "separate
compilation."

The boundary between TUs is at the `.cpp` file level. When you compile `a.cpp` and `b.cpp`
separately, each is an independent TU. The compiler knows nothing about `b.cpp` when compiling
`a.cpp`. This is why declarations (in headers) must be consistent across TUs — the linker cannot
detect type mismatches.

### Macro Pitfalls

Macros are textual substitution with no understanding of C++ scope, types, or namespaces. This
causes a category of bugs that no other C++ feature can produce.

**Problem 1: Argument evaluation side effects.**

```cpp
#include <cstdio>

#define MAX(a, b) ((a) > (b) ? (a) : (b))

int main() {
    int x = 1;
    int y = MAX(x++, x++);  // UB: x++ is evaluated twice
    std::printf("y = %d, x = %d\n", y, x);
    // Possible output: y = 3, x = 4 (x incremented twice in one expression)
}
```

**Problem 2: Operator precedence.**

```cpp
#include <cstdio>

#define SQUARE(x) x * x

int main() {
    int result = SQUARE(1 + 2);  // Expands to: 1 + 2 * 1 + 2 = 5, not 9
    std::printf("result = %d\n", result);  // Prints 5
}
```

Fixing with extra parentheses (`#define SQUARE(x) ((x) * (x))`) helps but doesn't solve the
side-effect problem. The modern C++ solution is to use `constexpr` functions or `inline` functions
instead:

```cpp
constexpr int square(int x) { return x * x; }  // Safe: evaluates argument once
```

**Problem 3: Name shadowing.**

```cpp
#include <vector>

#define VALUE 42

int main() {
    // If any header or code defines a variable or macro named VALUE,
    // the preprocessor silently replaces it everywhere
    int VALUE = 10;  // Expands to: int 42 = 10; — compile error
}
```

### Predefined Macros

Compilers define a set of macros that identify the platform, compiler version, and C++ standard.
These are essential for writing portable code.

```cpp
#include <iostream>

int main() {
    std::cout << "Compiler: "
#ifdef __clang__
              << "Clang " << __clang_major__ << "." << __clang_minor__
#elif defined(__GNUC__)
              << "GCC " << __GNUC__ << "." << __GNUC_MINOR__
#elif defined(_MSC_VER)
              << "MSVC " << _MSC_VER
#endif
              << "\n";

    std::cout << "C++ Standard: " << __cplusplus << "\n";
    // C++11: 201103L, C++14: 201402L, C++17: 201703L, C++20: 202002L, C++23: 202302L

    std::cout << "Platform: "
#ifdef _WIN32
              << "Windows"
#elif defined(__linux__)
              << "Linux"
#elif defined(__APPLE__)
              << "macOS"
#endif
              << "\n";
}
```

**Important:** Never use `__cplusplus` alone to detect compiler features. Use feature-test macros
defined by the standard (e.g., `__cpp_constexpr`, `__cpp_concepts`):

```cpp
#if __cpp_concepts >= 201907L
    // Concepts are available
    template<typename T>
    concept Addable = requires(T a, T b) { a + b; };
#endif
```

### Include Guards vs `#pragma once`

Traditional include guards use preprocessor conditionals to prevent multiple inclusion:

```cpp
// my_header.h
#ifndef MY_HEADER_H
#define MY_HEADER_H

// ... header contents ...

#endif // MY_HEADER_H
```

`#pragma once` is a non-standard but universally supported directive that achieves the same result
more concisely:

```cpp
// my_header.h
#pragma once

// ... header contents ...
```

Both approaches prevent the same header from being included multiple times in a TU. `#pragma once`
is faster (the preprocessor can short-circuit based on the file's inode rather than tokenizing to
find the guard), but it is not part of the C++ standard. Every major compiler supports it, and C++20
Modules will eventually eliminate the need for both approaches.

---

## The AST in Depth

### How the Compiler Represents C++ Constructs

The AST is a tree where each node represents a language construct. Understanding the AST structure
helps debug surprising compiler behavior.

```cpp
// input.cpp
const int* p = nullptr;
```

```bash
clang++ -Xclang -ast-dump -fsyntax-only input.cpp
```

The AST for this declaration includes:

```
VarDecl 0x... <line:1:1, col:20> col:15 p 'const int *' cinit
|-ValueStmt 0x...
| `-ImplicitCastExpr 0x... 'const int *' <NullToPointer>
|   `-CXXNullPtrLiteralExpr 0x... 'std::nullptr_t'
```

Note: the type is `const int *` (pointer to const int), not `const int*` (const pointer to int). The
AST makes the actual type binding unambiguous, even though the human-readable syntax can be
confusing.

### Name Mangling

The compiler encodes function signatures, namespaces, and template arguments into a single string
called the **mangled name**. This is what appears in the object file's symbol table. Name mangling
is necessary because the linker only sees flat strings, not C++ scope.

```cpp
// code.cpp
namespace math {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
}
```

```bash
nm -C code.o
# _ZN4math3addEdd  →  math::add(double, double)
# _ZN4math3addEii  →  math::add(int, int)
```

The mangling scheme is compiler-specific (Itanium ABI for GCC/Clang, MSVC ABI for MSVC). Use `nm -C`
(demangle) or `c++filt` to decode mangled names.

The Itanium ABI mangling encodes:

- `_Z` prefix
- `N` for nested names
- Length-prefixed identifiers (`4math` = "math", `3add` = "add")
- Type encodings (`i` = int, `d` = double, `St` = std::)

```bash
c++filt _ZN4math3addEii
# Output: math::add(int, int)
```

---

## Intermediate Representation in Depth

### LLVM IR Structure

LLVM IR is a typed, SSA-based assembly language. Every value is computed exactly once and assigned
to a register (`%0`, `%1`, etc.). This makes dataflow analysis trivial for the optimizer.

```cpp
// sum.cpp
int sum(int n) {
    int total = 0;
    for (int i = 0; i < n; ++i)
        total += i;
    return total;
}
```

```bash
clang++ -S -emit-llvm -O2 sum.cpp -o sum.ll
```

Key IR concepts visible in the output:

| Concept      | IR Representation                                     |
| :----------- | :---------------------------------------------------- |
| Function     | `define i32 @sum(i32 %n)`                             |
| SSA register | `%0 = add i32 %total.0, %i.0`                         |
| Basic block  | `entry:`, `for.body:`, `for.end:`                     |
| PHI node     | `%total.0 = phi i32 [ 0, %entry ], [ %1, %for.body ]` |
| Branch       | `br i1 %cmp, label %for.body, label %for.end`         |

At `-O2`, the optimizer may recognize this as a closed-form formula and emit a multiplication
instead of a loop:

```llvm
define i32 @sum(i32 %n) {
entry:
  %cmp = icmp sgt i32 %n, 0
  %nminus1 = select i1 %cmp, i32 %n, i32 0
  %mul = mul i32 %nminus1, %n
  %div = lshr i32 %mul, 1
  ret i32 %div
}
```

The loop has been replaced with `n*(n-1)/2` — a textbook example of loop optimization. This is why
reading the optimized IR is critical: it confirms that your high-level abstractions compiled away to
efficient code.

### GCC GIMPLE

GCC uses a different IR called GIMPLE. It is a simplified form of C where every statement is an
assignment, a function call, or a branch — no complex expressions.

```bash
g++ -fdump-tree-optimized sum.cpp
```

The output shows the same optimization (loop elimination) in GCC's representation.

---

## Object Files in Depth

### Relocation Entries

When the compiler generates an object file, it cannot know the final addresses of symbols defined in
other translation units. It emits **relocation entries** — instructions to the linker saying "patch
this offset with the final address of symbol X."

```bash
# View relocations in an object file
readelf -r main.o
```

Each relocation entry specifies:

- **Offset:** Where in the section to patch.
- **Type:** How to apply the patch (absolute, PC-relative, GOT-relative, etc.).
- **Symbol:** Which symbol's address to use.
- **Addend:** An optional constant offset.

The linker resolves these relocations by computing the final virtual address of each symbol and
writing it into the appropriate location in the machine code.

### Common Object File Pitfalls

- **Debug builds without `-g` produce useless backtraces.** The compiler emits DWARF debug info
  (`.debug_info`, `.debug_line`) only when `-g` is specified. Without it, `gdb` and `addr2line`
  cannot map addresses to source lines.
- **Not using `-fPIC` for shared library code.** Position-Independent Code generates PC-relative
  addressing instead of absolute addressing. Without it, the loader must perform text relocations
  (patching code sections at load time), which is slow and prevents code segment sharing across
  processes.
- **Stripping before creating a debug link.** Always run `objcopy --only-keep-debug` before `strip`,
  and use `objcopy --add-gnu-debuglink` to associate the debug file with the stripped binary.
  Otherwise, you lose the ability to debug crashes in production.
