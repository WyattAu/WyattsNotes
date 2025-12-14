---
title: Preprocessing and AST Generation, and Object Code
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Understanding the translation stages are critical for debugging compilation errors, optimizing build times, and understanding.

The pipeline processes one **Translation Unit (TU)** at a time. A TU is the output of the preprocessor (a single source file plus all included headers).

## Stage 1: The Preprocessor

The preprocessor is a legacy text-manipulation engine inherited from C. It operates on source text _before_ the compiler understands C++ syntax. It does not know what a `class` or `function` is; it only knows tokens.

### Mechanics

1. **File Inclusion (`#include`):** The preprocessor locates the target file and recursively copy-pastes its entire contents into the current file. This explains why C++ compilation is slow: a single `.cpp` file often expands to tens of thousands of lines of code after headers are merged.
2. **Macro Expansion (`#define`):** Token replacement. This happens blindly, disregarding scope or namespaces.
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

The output (`main.i`) is the exact text the compiler frontend receives. If a syntax error occurs "inside a macro," inspecting this file reveals the generated code causing the issue.

## Stage 2: The Frontend (AST Generation)

Once the preprocessor generates the TU, the compiler frontend (Clang/GCC) takes over. This stage validates the code against the C++ Language Standard.

### 1. Lexical Analysis (Tokenization)

The source stream is converted into a sequence of tokens (`kw_int`, `identifier_main`, `l_paren`, `r_paren`).

### 2. Syntax and Semantic Analysis

The tokens are assembled into an **Abstract Syntax Tree (AST)**.

- **Syntax:** Does the code follow the grammar? (e.g., matching braces, semicolons).
- **Semantics:** Does the code make sense? (e.g., type checking, overload resolution, access control).

**Template Note:** At this stage, templates are parsed for basic syntax, but they are not fully instantiated until they are used.

### Inspection (Clang)

Clang allows direct visualization of the AST. This is invaluable for understanding how the compiler interprets complex templates or precedence rules.

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

The AST is translated into an **Intermediate Representation**. This is an architecture-agnostic assembly language. This is where the majority of optimizations (inlining, loop unrolling, vectorization) occur.

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

Reading the optimized IR confirms whether high-level C++ abstractions (like `std::vector` or lambdas) were successfully compiled away into efficient scalar operations ("Zero-Cost Abstractions").

## Stage 4: The Backend (Code Generation)

The Backend maps the generic IR to the specific Instruction Set Architecture (ISA) of the target machine (x86_64, ARM64, WASM).

1. **Instruction Selection:** Mapping IR operations to machine opcodes.
2. **Register Allocation:** Mapping infinite IR registers to the limited physical CPU registers (RAX, RDI, etc.).
3. **Instruction Scheduling:** Reordering instructions to optimize pipeline throughput.

### Output: Assembly

To see the final assembly before it is encoded into binary:

```bash
# -S: Compile only; do not assemble or link
# -masm=intel: Use Intel syntax (dest, source) instead of AT&T
g++ -S -masm=intel -O3 main.cpp -o main.s
```

## Stage 5: The Object File

The Assembler converts the textual assembly (`.s`) into a relocatable object file (`.o` or `.obj`). This file contains machine code, but it is not executable. It contains placeholders for memory addresses (symbols) that are outside the current TU.

### Binary Formats

- **ELF (Executable and Linkable Format):** Linux, BSD, Android.
- **PE/COFF (Portable Executable):** Windows.
- **Mach-O:** macOS, iOS.

### Anatomy of an Object File

An object file is divided into **Sections**. Understanding these is essential for systems programming and embedded work.

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

The compiler produces a collection of **Object Files**. These files contain optimized machine code but rely on "Undefined Symbols" (like `std::cout` or function calls to other files). They cannot run yet. Resolving these symbols is the job of the **Linker**.
