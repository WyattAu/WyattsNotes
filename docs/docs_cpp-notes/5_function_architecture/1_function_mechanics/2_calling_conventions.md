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

## 2.5 Microsoft x64 ABI vs System V ABI

Windows and Linux/macOS use fundamentally different calling conventions on x86-64. The differences
are significant enough that calling a function compiled with one ABI from code compiled with the
other will crash or corrupt memory.

| Aspect                    | System V AMD64 ABI (Linux/macOS)                 | Microsoft x64 ABI (Windows)                 |
| :------------------------ | :----------------------------------------------- | :------------------------------------------ |
| Integer arg registers     | RDI, RSI, RDX, RCX, R8, R9 (6)                   | RCX, RDX, R8, R9 (4)                        |
| Floating-point registers  | XMM0–XMM7 (8)                                    | XMM0–XMM3 (4)                               |
| Shadow space              | Not required                                     | 32 bytes (caller-allocated, always present) |
| Stack alignment at `CALL` | 16-byte aligned                                  | 16-byte aligned                             |
| Return in RAX             | Integer/scalar                                   | Integer/scalar                              |
| `va_list` implementation  | Register save area (array of GP + SSE registers) | Single pointer (char\*)                     |
| Callee-saved registers    | RBX, RBP, R12–R15                                | RBX, RBP, RDI, RSI, R12–R15                 |
| Red zone                  | 128 bytes below RSP                              | None                                        |

### Shadow Space

The Microsoft x64 ABI requires the caller to allocate **32 bytes of "shadow space"** on the stack
before every function call, regardless of the number of arguments. The callee is free to use this
space to spill register arguments. This simplifies debugging but adds overhead to every call.

```cpp
// Microsoft x64 ABI: shadow space illustration
// Before calling any function, the caller reserves 32 bytes:
//
//   sub  rsp, 32          ; allocate shadow space (plus alignment padding)
//   mov  rcx, arg1        ; first integer argument
//   mov  rdx, arg2        ; second integer argument
//   call target
//   add  rsp, 32          ; clean up shadow space
//
// The callee may use [rsp], [rsp+8], [rsp+16], [rsp+24]
// as scratch space for its first four register arguments.
```

### `va_list` Differences

Variadic functions behave very differently across the two ABIs. Under System V, `va_list` is backed
by a register save area that captures the current state of GP and SSE registers at the point of the
ellipsis. Under Microsoft x64, `va_list` is a simple pointer that walks the stack.

```cpp
#include <cstdarg>
#include <cstdio>

// This function compiles on both ABIs but the underlying mechanism differs:
void print_args(int count, ...) {
    va_list ap;
    va_start(ap, count);

    for (int i = 0; i < count; ++i) {
        int val = va_arg(ap, int);
        std::printf("  arg[%d] = %d\n", i, val);
    }

    va_end(ap);
}

int main() {
    print_args(4, 10, 20, 30, 40);
}
```

## 2.6 Calling Convention Attributes

Compiler-specific attributes let you override the default calling convention. These are
**non-portable** and should only be used when interfacing with external libraries or operating
system APIs.

### MSVC Calling Convention Attributes

| Attribute    | Argument Passing            | Stack Cleanup | Use Case                         |
| :----------- | :-------------------------- | :------------ | :------------------------------- |
| `__cdecl`    | Stack (right to left)       | Caller        | C default; variable-argument fns |
| `__stdcall`  | Stack (right to left)       | Callee        | Win32 API                        |
| `__fastcall` | ECX, EDX, then stack        | Callee        | Performance-critical             |
| `__thiscall` | ECX = `this`, rest on stack | Callee        | C++ member functions (MSVC)      |

These attributes are primarily relevant for **32-bit x86** code, where multiple calling conventions
coexisted. On x86-64, both Windows and Linux use a single calling convention (the platform ABI), so
these attributes have limited effect.

```cpp
// Interfacing with Win32 API (32-bit example):
extern "C" __stdcall int MessageBoxA(void* hwnd, const char* text,
                                      const char* caption, unsigned int type);

// The __cdecl is default on MSVC x86, but explicit for clarity:
extern "C" __cdecl int printf(const char* fmt, ...);
```

### System V: Explicit Attributes

GCC and Clang on Linux/macOS generally do not use calling convention attributes for x86-64 because
the System V ABI is the only game in town. However, the `sysv_abi` and `ms_abi` attributes allow
mixing ABIs on the same platform (e.g., calling Windows DLLs from Linux via Wine or Windows
subsystem for Linux):

```cpp
// GCC/Clang: mixing ABIs on the same platform
extern "C" __attribute__((ms_abi)) void windows_callback(int a, int b);
extern "C" __attribute__((sysv_abi)) void linux_callback(int a, int b);
```

## 2.7 Register Saving Conventions

Registers are divided into **caller-saved** (volatile) and **callee-saved** (non-volatile)
categories. If a function uses a callee-saved register, it must preserve its value (typically by
pushing it onto the stack in the prologue and popping it in the epilogue).

### System V x86-64 Register Map

| Register(s)                | Role              | Saved By |
| :------------------------- | :---------------- | :------- |
| RAX                        | Return value      | Caller   |
| RDI, RSI, RDX, RCX, R8, R9 | Integer arguments | Caller   |
| XMM0–XMM7                  | FP/SIMD arguments | Caller   |
| XMM8–XMM15                 | FP/SIMD scratch   | Caller   |
| R10, R11                   | Scratch           | Caller   |
| RBX                        | Base              | Callee   |
| RBP                        | Frame pointer     | Callee   |
| R12, R13, R14, R15         | General purpose   | Callee   |
| RSP                        | Stack pointer     | Callee   |

```cpp
// Example showing callee-saved register preservation
// Compile: g++ -O1 -S -fno-omit-frame-pointer -masm=intel callee_saved.cpp
extern "C" long use_callee_saved(long a, long b) {
    // The compiler may choose to use RBX to hold 'a' across the call to helper
    // If so, it must save and restore RBX
    volatile long x = a;
    volatile long y = b;
    return x + y + 1;
    // Generated prologue (if RBX is used):
    //   push  rbx            ; save callee-saved register
    //   ...
    // Generated epilogue:
    //   pop   rbx            ; restore callee-saved register
    //   ret
}
```

## 2.8 Stack Alignment Across ABIs

Both System V and Microsoft x64 require **16-byte stack alignment** at the point of a `CALL`
instruction. After `CALL` pushes the 8-byte return address, `RSP` is 8 mod 16 inside the callee. The
callee prologue typically adjusts to restore 16-byte alignment.

```cpp
// Alignment violation example (x86-64, System V):
// If a function receives an odd number of stack arguments,
// the stack may become misaligned unless the caller compensates.
extern "C" long takes_seven(long a, long b, long c, long d,
                            long e, long f, long g, long h);
// a–f in registers (RDI–R9), g at [RSP+8], h at [RSP+16]
// Caller must ensure RSP is 16-byte aligned before the CALL
```

:::warning Alignment violations cause crashes on SIMD instructions (e.g., `movaps` requires 16-byte
alignment). If you see a `SIGSEGV` inside a function that uses SIMD, check for stack misalignment.
Compiler flags like `-mstackrealign` (MSVC) or `-mno-sse` (GCC) can help diagnose these issues. :::

## 2.9 Debugging Calling Convention Mismatches

A calling convention mismatch occurs when the caller and callee disagree on how arguments are
passed. This is one of the most insidious categories of bugs because the program may appear to work
for specific argument values or compiler optimization levels.

### Symptoms

- **Wrong argument values:** Arguments appear shifted or garbage.
- **Crashes on return:** Stack corruption causes the return address to be invalid.
- **Works in debug, crashes in release:** Optimization changes register allocation, exposing or
  masking the mismatch.
- **Works on one compiler, crashes on another:** Different compilers may use different registers for
  spill or different stack layouts.

### Common Causes

1. **Missing `extern "C"`** when linking C++ code to a C library. The C++ name mangling changes the
   symbol name but not the calling convention. However, if the C library expects a specific ABI and
   the C++ compiler uses a different one, arguments will be garbled.
2. **Mismatched `__stdcall`/`__cdecl`** in 32-bit code.
3. **Variadic function prototype mismatch:** Declaring a function as `void f(int, ...)` but defining
   it as `void f(int a, int b)` without the ellipsis.
4. **Struct packing differences:** Passing structs by value across ABI boundaries when the struct
   layout differs due to different alignment/packing rules.

```cpp
// Example: calling convention mismatch
// bad.h — declares the function with wrong prototype
extern "C" int process_data(int a, int b);  // two int arguments

// library.c — actual implementation (compiled with different compiler/ABI)
int process_data(long a, long b, long c) {  // three long arguments
    return a + b + c;
}

// Result: on System V x86-64, 'a' arrives in RDI, 'b' in RSI.
// But the callee expects three arguments, reading garbage from RDX for 'c'.
// On Microsoft x64, 'a' in RCX, 'b' in RDX, and R8 would hold garbage for 'c'.
```

## 2.10 Struct Classification in System V ABI

The System V ABI classifies each argument through a recursive algorithm that decomposes structures
into eightbytes (8-byte chunks). Each eightbyte is classified independently as INTEGER, SSE, or
MEMORY:

1. **INTEGER:** Integer types, pointers, and structures containing only INTEGER-classified
   eightbytes.
2. **SSE:** Floating-point and SIMD types (`__m128`, `__m256`), and structures containing only
   SSE-classified eightbytes.
3. **MEMORY:** The structure is passed on the stack if it exceeds 16 bytes, contains both INTEGER
   and SSE eightbytes (mixed classification), or has misaligned fields.

```cpp
#include <cstdint>

struct TwoInts {    // 16 bytes, all INTEGER eightbytes
    int64_t a, b;
};

struct IntAndFloat { // 8 bytes, mixed INTEGER + SSE → MEMORY
    int32_t a;       // INTEGER eightbyte
    float b;         // SSE eightbyte
};

struct LargeStruct { // 24 bytes → MEMORY (exceeds 2 eightbytes)
    int64_t a, b, c;
};

// TwoInts: a → RAX, b → RDX (returned in two registers)
extern "C" TwoInts return_two_ints();

// IntAndFloat: passed on stack (MEMORY class due to mixed classification)
extern "C" int process_mixed(IntAndFloat s);

// LargeStruct: hidden first pointer argument
extern "C" LargeStruct return_large();
// Caller allocates space, passes pointer in RDI, callee returns pointer in RAX
```

The mixed-classification rule (`IntAndFloat`) is a frequent source of surprise — a small struct that
"should" fit in registers is forced onto the stack because its eightbytes span two register classes.
The fix is to rearrange fields so that all INTEGER fields are contiguous and all SSE fields are
contiguous, though this conflicts with natural alignment preferences.

## 2.11 NRVO and Calling Convention Interaction

Named Return Value Optimization (NRVO) and Return Value Optimization (RVO) [N4950 §11.9.6] eliminate
the copy/move of return values. Under the System V ABI, this means the caller passes a hidden
pointer to the destination storage, and the callee constructs directly into it — bypassing the
return-value register entirely.

```cpp
struct Buffer {
    char data[256];
};

// Without NRVO: caller allocates 256 bytes, passes hidden pointer in RDI.
// Callee constructs into that space, returns pointer in RAX.
Buffer make_buffer() {
    Buffer b;
    return b;  // With NRVO: constructed directly in caller's frame
}

// C++17 guaranteed copy elision for prvalues
Buffer make_buffer_guaranteed() {
    return Buffer{};  // Guaranteed no copy/move since C++17
}
```

Without RVO/NRVO, returning a large struct by value would require constructing into a local
temporary, then copying to the caller's frame via the hidden pointer — doubling the construction
cost. NRVO is not guaranteed (the compiler may decline it if there are multiple return paths with
different named variables), but RVO for prvalues is mandatory since C++17.

Note that C++ compilers on x86-64 generally ignore 32-bit-specific calling convention attributes
(`__cdecl`, `__stdcall`, `__fastcall`) — they either warn or silently treat them as the platform
ABI. These attributes are only meaningful on x86-32 where multiple calling conventions coexisted.

## Common Pitfalls

- **Assuming Windows and Linux share an ABI on x86-64.** They do not. The register allocation,
  shadow space, and `va_list` implementation all differ.
- **Using `__cdecl`/`__stdcall` on x86-64.** These attributes are essentially no-ops on x86-64; the
  platform ABI is always used.
- **Forgetting about shadow space on Windows.** Every call must have 32 bytes of shadow space, even
  if the callee takes no arguments.
- **Passing SIMD types across ABI boundaries.** The System V ABI classifies `__m256` (AVX) types as
  MEMORY, forcing them onto the stack. The Microsoft x64 ABI does not support AVX-512 register
  passing at all.
- **Variadic functions with non-POD types.** Passing objects with non-trivial destructors through
  `...` is undefined behavior. Use `std::initializer_list` or variadic templates instead.

## See Also

- [Overload Resolution](1_overload_resolution.md)
- [C-Interop and FFI](5_c_interop.md)
