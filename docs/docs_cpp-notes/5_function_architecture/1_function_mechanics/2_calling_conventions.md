---
title: Calling Conventions and Stack Management
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: calling-conventions-and-stack-management
---

# Calling Conventions and Stack Management

The C++ Standard does not prescribe a calling convention [N4950 §8.4.4]. On x86-64 Linux and macOS,
the **System V AMD64 ABI** governs how functions pass arguments, return values, and manage the
stack. On x86-64 Windows, the **Microsoft x64 ABI** is used instead.

## 2.1 System V AMD64 ABI: Argument Passing

Arguments are classified into four categories: INTEGER, SSE, MEMORY, and X87. The classification
determines which registers or stack slots receive each argument:

| Category | Registers / Location                 |
| :------- | :----------------------------------- |
| INTEGER  | RDI, RSI, RDX, RCX, R8, R9 (6 slots) |
| SSE      | XMM0 – XMM7 (8 slots)                |
| MEMORY   | Pushed to the stack (right to left)  |

The first 6 INTEGER-class arguments go into RDI, RSI, RDX, RCX, R8, R9 (in order). The first 8
SSE-class (floating-point) arguments go into XMM0 through XMM7. If both integer and floating-point
registers are exhausted, remaining arguments are pushed onto the stack.

```cpp
// Argument passing demonstration
#include <cstdint>

// long add(long a, long b, long c, long d, long e, long f, long g, long h);
//
// Register assignment:
//   a → RDI   b → RSI   c → RDX   d → RCX   e → R8   f → R9
//   g → [RSP+8]   h → [RSP+16]
//
// double mul(double a, double b, double c);
//
// Register assignment:
//   a → XMM0   b → XMM1   c → XMM2
//
// void mixed(int a, double b, int c, double d);
//
// Register assignment:
//   a → EDI   b → XMM0   c → ESI   d → XMM1

extern "C" int64_t add_seven(int64_t a, int64_t b, int64_t c, int64_t d,
                              int64_t e, int64_t f, int64_t g) {
    return a + b + c + d + e + f + g;
}
```

## 2.2 Return Values

| Return Type                                          | Location                                                   |
| :--------------------------------------------------- | :--------------------------------------------------------- |
| `bool`, `char`, `int`, `long`, `long long`, pointers | RAX                                                        |
| `float`, `double`                                    | XMM0                                                       |
| Small structs (≤ 16 bytes, fitting 2 registers)      | RAX + RDX                                                  |
| Large structs (> 16 bytes)                           | Hidden first argument (pointer to caller-allocated memory) |

For large return types, the caller allocates space on the stack and passes a hidden pointer as the
first argument. The callee writes the return value to this address and also returns the pointer in
RAX.

## 2.3 Stack Frame Layout

At function entry, the x86-64 stack frame typically looks like:

```
High Addresses
┌──────────────────────┐
│  Caller's frame      │
├──────────────────────┤
│  Return address (8B) │  ← pushed by CALL instruction
├──────────────────────┤
│  Saved RBP (8B)      │  ← pushed by prologue (push rbp; mov rbp, rsp)
├──────────────────────┤
│  Local variables     │
│  ...                 │
│  [RSP aligned to 16] │  ← RSP after prologue
├──────────────────────┤
│  Stack arguments     │  ← arguments 7+ (if any)
└──────────────────────┘
Low Addresses
```

The System V ABI requires that `RSP` be 16-byte aligned before a `CALL` instruction. After the call
pushes the 8-byte return address, `RSP` is 8 mod 16. The prologue typically subtracts an additional
8 bytes (or aligns the allocation) to restore 16-byte alignment.

```cpp
#include <cstdint>

// Examining the generated assembly (compile with -O1 -fno-omit-frame-pointer)
// $ g++ -S -O1 -fno-omit-frame-pointer -masm=intel example.cpp
//
//   int64_t local_sum(int64_t a, int64_t b) {
//       int64_t x = 10;
//       int64_t y = 20;
//       return a + b + x + y;
//   }
//
// Generated assembly (System V ABI, Intel syntax):
//
//   local_sum:
//       push    rbp
//       mov     rbp, rsp
//       mov     QWORD PTR [rbp-8], 10    ; x = 10
//       mov     QWORD PTR [rbp-16], 20   ; y = 20
//       mov     rax, QWORD PTR [rbp-8]
//       add     rax, QWORD PTR [rbp-16]
//       add     rax, rdi                  ; + a (passed in RDI)
//       add     rax, rsi                  ; + b (passed in RSI)
//       pop     rbp
//       ret
//
// Argument a arrives in RDI, b in RSI.
// x is stored at [rbp-8], y at [rbp-16].
// Return value is placed in RAX.
```

## 2.4 The Red Zone

The System V ABI reserves **128 bytes below RSP** (the "red zone") for use by **leaf functions** —
functions that do not call any other functions. A leaf function may use this space for local
variables without modifying RSP, avoiding the overhead of stack pointer manipulation.

```
┌──────────────────────┐  ← RSP
│  Red Zone (128B)     │  ← [RSP - 128, RSP) : available to leaf functions
│  (untouchable by     │
│   interrupt handlers)│
├──────────────────────┤  ← RSP - 128
│  ...                 │
```

:::warning Non-leaf functions (functions that call other functions) must NOT use the red zone.
Signal handlers and interrupt contexts may clobber the red zone. Compiler flags like `-mno-red-zone`
(used in OS kernels and JIT compilers) disable this optimization. :::

```cpp
// Leaf function: no CALL instruction, may use the red zone
// $ g++ -O2 -S -o - redzone.cpp | grep -A5 'leaf_fn:'
extern "C" int64_t leaf_fn(int64_t a, int64_t b) {
    return a + b + 1;
}
// At -O2, the compiler may emit no stack frame at all:
//   lea rax, [rdi + rsi + 1]
//   ret

// Non-leaf function: calls another function, must NOT use the red zone
extern "C" int64_t non_leaf_fn(int64_t a, int64_t b) {
    volatile int64_t sink = a + b;  // volatile prevents optimization
    return sink + 1;
    // The call to write the volatile forces a stack frame adjustment
}
```

## See Also

- [Overload Resolution](1_overload_resolution.md)
- [C-Interop and FFI](5_c_interop.md)
