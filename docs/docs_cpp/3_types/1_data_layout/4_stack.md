---
title: Stack
description:
  "C++: Stack — 1. The Hardware Mechanism (x86_64); The Registers; Allocation and Deallocation; The Sequence of a Function Call."
date: 2025-12-13T04:07:38.177Z
tags:
  - cpp
categories:
  - cpp
slug: stack-frame
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

In C++, "Automatic Storage Duration" (variables declared locally) is implemented via the **Call
Stack**. Unlike the Heap, which requires complex allocator logic to manage free blocks, the Stack is
a linear contiguous block of memory managed directly by the CPU via a single register: the Stack
Pointer.

## 1. The Hardware Mechanism (x86_64)

On modern x86_64 architectures, the stack grows **downwards**, from high memory addresses to low
memory addresses.

### The Registers

- **`RSP` (Stack Pointer):** Points to the "top" (lowest address) of the stack.
- **`RBP` (Base Pointer / Frame Pointer):** Points to the beginning of the current stack frame.
  (Note: Modern compilers often omit this via `-fomit-frame-pointer` to free up a register,
  addressing locals relative to `RSP` instead).
- **`RIP` (Instruction Pointer):** Holds the address of the next instruction to execute.

### Allocation and Deallocation

- **Allocation:** Subtracting from `RSP`.
  - `sub rsp, 0x20` (Allocates 32 bytes).
- **Deallocation:** Adding to `RSP`.
  - `add rsp, 0x20` (Frees 32 bytes).

This simple integer arithmetic is why stack allocation is deterministic and orders of magnitude
faster than heap allocation.

## 2. The Stack Frame Layout

A **Stack Frame** is the memory region dedicated to a single function call. Its structure adheres to
the platform's ABI (Application Binary Interface).

### The Sequence of a Function Call

When `Caller()` invokes `Callee()`:

1. **Argument Passing:** Arguments are placed in registers (`RDI`, `RSI`, `RDX`...) or pushed onto
   the stack if registers are exhausted.
2. **The Call Instruction:** The CPU pushes the **Return Address** (the current value of `RIP`) onto
   the stack and jumps to the `Callee`.
3. **Prologue:** The `Callee` sets up its frame:
   - Pushes the old `RBP` (to restore the caller's frame later).
   - Sets `RBP = RSP`.
   - Subtracts from `RSP` to allocate space for local variables.
4. **Body:** Execution of the function logic.
5. **Epilogue:**
   - `mov rsp, rbp` (Deallocate locals).
   - `pop rbp` (Restore caller's base pointer).
   - `ret` (Pop the Return Address into `RIP`, jumping back to `Caller`).

### Memory Visualization

Consider the layout in memory (High addresses at top, Low at bottom):

| Address     | Content            | Description                                         |
| :---------- | :----------------- | :-------------------------------------------------- |
| `0x7FFF08`  | `Arg N`            | Stack arguments (if any)                            |
| `0x7FFF00`  | **Return Address** | **CRITICAL:** Where execution resumes after return. |
| `0x7FFFF8`  | Saved RBP          | Link to the previous stack frame.                   |
| `0x7FFFF0`  | `local_var_1`      | Local variables of current function.                |
| `0x7FFF...` | ...                | ...                                                 |
| `0x7FFFE0`  | `buffer[0]`        | Start of a local array.                             |

## 3. Buffer Overflows (Stack Smashing)

The adjacency of **Local Data** and **Control Data** (Return Address) on the stack is the
fundamental security flaw of the von Neumann architecture.

### The Mechanism

Consider this unsafe C++ code using a legacy C function:

```cpp
void vulnerable_function(const char* user_input) {
    char buffer[16]; // Allocated on stack
    // DANGER: strcpy does not check bounds
    strcpy(buffer, user_input);
}
```

If `user_input` is 32 bytes long:

1. Bytes 0-15 fill `buffer`.
2. Bytes 16-23 overwrite other local variables or the Saved RBP.
3. **Bytes 24-31 overwrite the Return Address.**

When `vulnerable_function` executes `ret`, the CPU pops the corrupted Return Address into `RIP`. If
the attacker crafts this address to point to malicious code (Shellcode) or existing library
functions (Return Oriented Programming - ROP), they gain control of the process.

## 4. Architectural Mitigations

Modern C++ toolchains and OS architectures implement multiple layers of defense against stack
smashing.

### 4.1. Stack Canaries (Stack Smashing Protector)

The compiler injects a secret value (the "Canary" or "Cookie") between the local variables and the
Control Data (RBP/Return Address).

**Prologue:**

1. Read a random value from the Thread Control Block (FS/GS segment).
2. Place it on the stack.

**Epilogue:**

1. Read the value from the stack.
2. XOR it with the original secret.
3. If they do not match (result non-zero), assume a buffer overflow occurred and call
   `__stack_chk_fail` (terminating the process immediately).

**Compiler Flags:**

- GCC/Clang: `-fstack-protector-strong` (Recommended default).
- MSVC: `/GS` (Enabled by default).

### 4.2. Address Space Layout Randomization (ASLR)

The OS randomizes the base address of the stack, heap, and libraries every time the program runs.
This makes it difficult for an attacker to predict the address of their shellcode or ROP gadgets.

### 4.3. Shadow Stacks (Hardware Enforcement)

Newer CPUs (Intel Tiger Lake+, AMD Zen 3+) support **Control-flow Enforcement Technology (CET)**.

- The CPU maintains a second, hidden stack solely for Return Addresses.
- On `call`, the return address is pushed to _both_ the main stack and shadow stack.
- On `ret`, the CPU compares the two. If they differ (due to main stack corruption), a hardware
  exception is raised.

## 5. C++23 Safety Strategies

While compiler mitigations are powerful, the architectural solution is to avoid using constructs
that allow unchecked writes.

### Avoid Raw Arrays

Raw arrays (`int buf[10]`) decay to pointers and lack bounds information.

**Bad:**

```cpp
void process(int* ptr) {
    ptr[15] = 0; // Did we overrun? Who knows.
}
```

### Use `std::span` (C++20) and `std::array`

`std::array` allocates on the stack but provides a class interface. `std::span` provides a
non-owning view with size information.

**Good:**

```cpp
#include <span>
#include <array>

void process(std::span<int> s) {
    // In Release mode, operator[] is usually unchecked for speed.
    // In Debug/Hardened modes, it traps.
    // C++23's std::print creates safer patterns naturally.
    if (s.size() > 15) {
        s[15] = 0;
    }
}

void caller() {
    std::array<int, 10> buf;
    process(buf); // Implicit conversion to span, size is carried along.
}
```

### Automatic Variable Initialization

Uninitialized stack variables contain garbage (whatever was left on the stack by the previous
function). Using uninitialized values is Undefined Behavior.

**Mitigation:** Clang and GCC support automatic initialization patterns.

- `-ftrivial-auto-var-init=pattern`: Fills stack variables with a specific pattern (e.g., `0xAA`).
  Useful for debugging.
- `-ftrivial-auto-var-init=zero`: Fills stack variables with zero. Safer for production (reduces
  info leaks), though theoretically masks logic bugs.

## Verification

To inspect if your binary has Stack Canaries enabled:

<Tabs>
  <TabItem value="linux" label="Linux (readelf)" default>

```bash
readelf -s ./app | grep stack_chk
```

_Output:_ You should see `__stack_chk_fail`.

Alternatively, use `checksec` (from `pwntools` or similar):

```bash
checksec --file=./app
```

Look for **Canary: found**.

  </TabItem>
  <TabItem value="windows" label="Windows (dumpbin)" default>

```cmd
dumpbin /LOADCONFIG app.exe
```

Look for `Security Cookie` entries.

  </TabItem>
</Tabs>

## 6. Stack Size Limits

Every thread receives a fixed-size stack at creation time. The default size varies by platform:

| Platform      | Default Stack Size                    | Configuration Mechanism                             |
| :------------ | :------------------------------------ | :-------------------------------------------------- |
| Linux (glibc) | 8 MB                                  | `ulimit -s` (soft limit), `setrlimit(RLIMIT_STACK)` |
| macOS         | 8 MB (main thread), 512 KB (pthreads) | `ulimit -s`, `pthread_attr_setstacksize`            |
| Windows       | 1 MB                                  | `/STACK:reserve,commit` linker flag                 |

### Detecting Stack Exhaustion

Stack overflow is not catchable via C++ exceptions. When the stack pointer crosses the guard page at
the bottom of the stack region, the OS delivers a `SIGSEGV` (Linux/macOS) or a `STACK_OVERFLOW`
exception (Windows). These are fatal signals — there is no recovery.

```cpp
#include <cstdio>
#include <cstdint>

// Recursion until stack overflow
void infinite_recurse(uint64_t depth = 0) {
    char buffer[4096];  // 4 KB per frame
    std::printf("depth = %lu, stack near %p\n", depth, (void*)&buffer);
    infinite_recurse(depth + 1);
}

int main() {
    infinite_recurse();
    // On Linux: Segmentation fault (core dumped)
    // On Windows: Stack overflow exception
}
```

### Configuring Stack Size at Link Time (Windows)

```cmake
# CMake: Set stack size to 4 MB reserve, 4 KB commit
target_link_options(App PRIVATE /STACK:4194304,4096)
```

### Configuring Stack Size at Runtime (POSIX)

```cpp
#include <pthread.h>
#include <cstdio>

void* thread_func(void*) {
    // This thread has a 2 MB stack instead of the default 8 MB
    return nullptr;
}

int main() {
    pthread_t tid;
    pthread_attr_t attr;
    pthread_attr_init(&attr);
    pthread_attr_setstacksize(&attr, 2 * 1024 * 1024);  // 2 MB
    pthread_create(&tid, &attr, thread_func, nullptr);
    pthread_join(tid, nullptr);
    pthread_attr_destroy(&attr);
}
```

## 7. The Red Zone (System V ABI)

On x86_64 System V ABI (Linux, macOS, FreeBSD), the 128-byte region below `RSP` is reserved as the
**Red Zone**. This area can be freely clobbered by leaf functions (functions that call no other
functions) without adjusting `RSP`.

```
          High Address
    +--------------------+
    |    Caller Frame    |
    +--------------------+
    |    Return Address   |
    +--------------------+ <-- RSP of caller
    |    128-byte Red    |
    |       Zone         |  <-- Leaf function can use this without sub rsp, N
    +--------------------+ <-- RSP (unaltered)
          Low Address
```

### Why the Red Zone Exists

The Red Zone eliminates the `sub rsp` / `add rsp` prologue/epilogue for small leaf functions, saving
two instructions per call. This is particularly beneficial for small accessor functions and inline
assembly.

### When the Red Zone is Invalidated

The Red Zone is only safe in leaf functions. If a leaf function calls another function (or if a
signal handler fires), the callee will overwrite the Red Zone, corrupting the leaf function's
locals.

**Compiler flags:**

- `-mno-red-zone`: Disables the Red Zone. Required for kernel code (where interrupts can fire at any
  point and clobber the Red Zone) and for signal handler code.
- `-mred-zone`: Default for user-space code on System V platforms.

```cpp
// Compiled with -O2: this function uses the Red Zone for 'local'
__attribute__((noinline))
int leaf_function(int x) {
    int local = x * 2;  // Stored in the Red Zone, no sub rsp needed
    return local + 1;
}
```

## 8. Stack Alignment Requirements

The System V ABI requires that the stack be 16-byte aligned at the point of a `call` instruction.
This means that upon entry to a function (after the return address is pushed), `RSP` is 8 bytes
mod 16. The function prologue must adjust `RSP` to a 16-byte boundary before calling any other
function or using any SIMD instruction that requires aligned memory.

### Alignment and SIMD

SSE and AVX instructions require 16-byte and 32-byte alignment respectively. Misaligned stack
accesses cause `SIGBUS` on some architectures or severe performance degradation on others:

```cpp
#include <immintrin.h>
#include <cstdio>

void aligned_stack_example() {
    // __m256 requires 32-byte alignment
    // The compiler automatically aligns the stack frame
    __m256 vec = _mm256_set1_ps(1.0f);
    float result[8];
    _mm256_store_ps(result, vec);  // Requires 32-byte aligned address
    std::printf("result[0] = %f\n", result[0]);
}
```

The compiler inserts padding in the stack frame to satisfy alignment requirements. If you inspect
the assembly, you will see `sub rsp, 0x20` or similar, where the allocation size is rounded up to
the next multiple of 16 (or 32 for AVX).

### Manual Alignment with `alignas`

You can request specific alignment for stack variables using `alignas`:

```cpp
#include <cstdint>
#include <cstdio>

void manual_align() {
    // Force 64-byte alignment (cache line size)
    alignas(64) int64_t cache_aligned[8];

    std::printf("address = %p\n", (void*)cache_aligned);
    std::printf("aligned to 64? %s\n",
        (reinterpret_cast<uintptr_t>(cache_aligned) % 64 == 0) ? "yes" : "no");
}
```

## 9. Tail Call Optimization (TCO)

Tail Call Optimization (TCO), also called tail call elimination, allows the compiler to reuse the
current stack frame for a function call that is the last operation in a function. This converts
recursion into iteration at the machine code level, eliminating stack growth.

```cpp
#include <cstdio>

// NOT tail-recursive: addition happens after the recursive call
int factorial_naive(int n) {
    if (n <= 1) return 1;
    return n * factorial_naive(n - 1);  // Must preserve stack frame for the multiplication
}

// Tail-recursive: the recursive call IS the last operation
int factorial_tail(int n, int acc = 1) {
    if (n <= 1) return acc;
    return factorial_tail(n - 1, n * acc);  // Compiler can reuse this frame
}

int main() {
    std::printf("factorial_naive(20) = %d\n", factorial_naive(20));
    std::printf("factorial_tail(20)  = %d\n", factorial_tail(20));

    // factorial_tail can compute arbitrarily large values without stack overflow
    // factorial_naive will overflow the stack for large N
}
```

### When TCO Does Not Apply

The compiler cannot apply TCO if:

- The recursive call is not in tail position (there is work after the call).
- The function takes the address of a local variable and passes it to the callee (the callee might
  reference the caller's stack frame, which would be overwritten).
- Debug builds (`-O0`) typically disable TCO for easier debugging.
- `-fno-optimize-sibling-calls` explicitly disables TCO.

### Verifying TCO in Assembly

```bash
# Compile with optimization to see TCO
clang++ -O2 -S -o - tco_example.cpp | grep -A 20 "factorial_tail"
# With TCO: you will see a 'jmp' instruction instead of 'call'
# Without TCO: you will see 'call factorial_tail'
```

A `jmp` (jump) instruction reuses the current stack frame. A `call` (call) instruction pushes a new
return address, growing the stack.

## 10. Stack Unwinding and Exception Handling

When a C++ exception is thrown, the runtime must unwind the stack, calling destructors for all
automatic variables in each frame between the `throw` and the matching `catch`. This process is
called **stack unwinding** [N4950 §17.3].

### The Unwind Mechanism

The compiler generates **exception tables** (`.eh_frame` on Linux, `.pdata` on Windows) that
describe the layout of each stack frame and which destructors need to be called. The C++ runtime
library (`libstdc++` / `libc++` / `libcpmt`) reads these tables to perform the unwind.

```cpp
#include <cstdio>

struct Logger {
    const char* name;
    Logger(const char* n) : name(n) { std::printf("  enter %s\n", name); }
    ~Logger() { std::printf("  exit  %s\n", name); }
};

void inner() {
    Logger l3("inner");
    throw 42;  // Stack unwinding begins here
}

void middle() {
    Logger l2("middle");
    inner();
}

void outer() {
    Logger l1("outer");
    middle();
}

int main() {
    try {
        outer();
    } catch (int e) {
        std::printf("caught: %d\n", e);
    }
}
// Output:
//   enter outer
//   enter middle
//   enter inner
//   exit  inner
//   exit  middle
//   exit  outer
// caught: 42
```

### Performance Cost of Exception Tables

Even if exceptions are never thrown, the compiler generates exception tables for every function with
automatic variables that have non-trivial destructors. These tables increase binary size. Using
`-fno-exceptions` eliminates this overhead entirely but also disables `try`/`catch`/`throw` and
`std::error_code` (in some configurations).

### `std::uncaught_exceptions` (C++17)

C++17 introduced `std::uncaught_exceptions()` [N4950 §17.3.6] which returns the number of currently
active exceptions. This allows destructors to detect whether they are being called during normal
scope exit or during stack unwinding:

```cpp
#include <exception>
#include <cstdio>

struct SafeDestructor {
    bool committed = false;

    ~SafeDestructor() {
        if (std::uncaught_exceptions() > 0) {
            std::printf("WARNING: unwinding, transaction not committed\n");
        } else {
            std::printf("Normal destruction, transaction committed\n");
        }
    }
};

void may_throw(bool should_throw) {
    SafeDestructor sd;
    if (!should_throw) {
        sd.committed = true;
    }
    // If should_throw is true, ~SafeDestructor detects unwinding
}
```

## 11. Thread Stacks

Each thread receives its own independent stack region. The stack is allocated by the OS (or the
threading library) when the thread is created and freed when the thread exits.

### Stack Layout for Multi-Threaded Programs

```
Main Thread Stack:         Thread 2 Stack:           Thread 3 Stack:
+------------------+       +------------------+      +------------------+
|     main()       |       |   thread_func()  |      |   thread_func()  |
|     ...          |       |     ...          |      |     ...          |
+------------------+       +------------------+      +------------------+
   Guard Page               Guard Page                Guard Page
   (no access)              (no access)               (no access)
```

### Stack Address Space Layout

On Linux, thread stacks are typically allocated using `mmap` in the virtual address space. The stack
region is placed near the top of the address space (for the main thread) or in a random location
(for other threads, due to ASLR). A guard page (unmapped page) at the bottom of the stack detects
overflow.

### Per-Thread Stack Configuration

```cpp
#include <pthread.h>
#include <cstdint>

void* stack_size_example(void*) {
    // Query the actual stack size
    pthread_attr_t attr;
    pthread_attr_init(&attr);
    pthread_getattr_np(pthread_self(), &attr);

    void* stack_addr;
    size_t stack_size;
    pthread_attr_getstack(&attr, &stack_addr, &stack_size);
    pthread_attr_destroy(&attr);

    // stack_size is the actual usable stack size
    return nullptr;
}
```

## Common Pitfalls

### 1. Large Stack Allocations

Allocating large arrays on the stack can cause stack overflow even without recursion:

```cpp
void bad_function() {
    double matrix[1000][1000];  // 8 MB — exceeds default 8 MB stack
    // Stack overflow immediately on entry
}
```

For large allocations, use the heap (`std::vector`) or static storage.

### 2. Returning References to Stack Variables

The most classic C++ bug. A reference or pointer to a stack variable becomes dangling when the
function returns:

```cpp
const int& dangling() {
    int local = 42;
    return local;  // WARNING: dangling reference
    // The stack frame is deallocated, local is destroyed
}

// Undefined Behavior: using the returned reference
int x = dangling();  // Reads from deallocated stack memory
```

### 3. Stack Canaries and `-fno-omit-frame-pointer`

When `-fstack-protector-strong` is enabled, the compiler may be forced to emit frame pointers even
if `-fomit-frame-pointer` is specified, because the canary must be placed at a known offset from
`RBP`. This costs one register on x86_64.

### 4. Debug Builds and Stack Usage

Debug builds (`-O0`) typically allocate more stack space than release builds because:

- Variables are not optimized into registers.
- The compiler does not share stack slots for variables with non-overlapping lifetimes.
- Additional stack probes may be inserted for debugging.

A program that runs fine in debug mode may overflow the stack in release mode (or vice versa, though
less commonly) if stack usage is near the limit.
