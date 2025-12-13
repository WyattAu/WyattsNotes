---
title: Stack
date: 2025-12-13T04:07:38.177Z
tags:
  - cpp
categories:
  - cpp
slug: stack-frame
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In C++, "Automatic Storage Duration" (variables declared locally) is implemented via the **Call Stack**. Unlike the Heap, which requires complex allocator logic to manage free blocks, the Stack is a linear contiguous block of memory managed directly by the CPU via a single register: the Stack Pointer.

## 1. The Hardware Mechanism (x86_64)

On modern x86_64 architectures, the stack grows **downwards**, from high memory addresses to low memory addresses.

### The Registers

- **`RSP` (Stack Pointer):** Points to the "top" (lowest address) of the stack.
- **`RBP` (Base Pointer / Frame Pointer):** Points to the beginning of the current stack frame. (Note: Modern compilers often omit this via `-fomit-frame-pointer` to free up a register, addressing locals relative to `RSP` instead).
- **`RIP` (Instruction Pointer):** Holds the address of the next instruction to execute.

### Allocation and Deallocation

- **Allocation:** Subtracting from `RSP`.
  - `sub rsp, 0x20` (Allocates 32 bytes).
- **Deallocation:** Adding to `RSP`.
  - `add rsp, 0x20` (Frees 32 bytes).

This simple integer arithmetic is why stack allocation is deterministic and orders of magnitude faster than heap allocation.

## 2. The Stack Frame Layout

A **Stack Frame** is the memory region dedicated to a single function call. Its structure adheres to the platform's ABI (Application Binary Interface).

### The Sequence of a Function Call

When `Caller()` invokes `Callee()`:

1. **Argument Passing:** Arguments are placed in registers (`RDI`, `RSI`, `RDX`...) or pushed onto the stack if registers are exhausted.
2. **The Call Instruction:** The CPU pushes the **Return Address** (the current value of `RIP`) onto the stack and jumps to the `Callee`.
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

The adjacency of **Local Data** and **Control Data** (Return Address) on the stack is the fundamental security flaw of the von Neumann architecture.

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

When `vulnerable_function` executes `ret`, the CPU pops the corrupted Return Address into `RIP`. If the attacker crafts this address to point to malicious code (Shellcode) or existing library functions (Return Oriented Programming - ROP), they gain control of the process.

## 4. Architectural Mitigations

Modern C++ toolchains and OS architectures implement multiple layers of defense against stack smashing.

### 4.1. Stack Canaries (Stack Smashing Protector)

The compiler injects a secret value (the "Canary" or "Cookie") between the local variables and the Control Data (RBP/Return Address).

**Prologue:**

1. Read a random value from the Thread Control Block (FS/GS segment).
2. Place it on the stack.

**Epilogue:**

1. Read the value from the stack.
2. XOR it with the original secret.
3. If they do not match (result non-zero), assume a buffer overflow occurred and call `__stack_chk_fail` (terminating the process immediately).

**Compiler Flags:**

- GCC/Clang: `-fstack-protector-strong` (Recommended default).
- MSVC: `/GS` (Enabled by default).

### 4.2. Address Space Layout Randomization (ASLR)

The OS randomizes the base address of the stack, heap, and libraries every time the program runs. This makes it difficult for an attacker to predict the address of their shellcode or ROP gadgets.

### 4.3. Shadow Stacks (Hardware Enforcement)

Newer CPUs (Intel Tiger Lake+, AMD Zen 3+) support **Control-flow Enforcement Technology (CET)**.

- The CPU maintains a second, hidden stack solely for Return Addresses.
- On `call`, the return address is pushed to _both_ the main stack and shadow stack.
- On `ret`, the CPU compares the two. If they differ (due to main stack corruption), a hardware exception is raised.

## 5. C++23 Safety Strategies

While compiler mitigations are powerful, the architectural solution is to avoid using constructs that allow unchecked writes.

### Avoid Raw Arrays

Raw arrays (`int buf[10]`) decay to pointers and lack bounds information.

**Bad:**

```cpp
void process(int* ptr) {
    ptr[15] = 0; // Did we overrun? Who knows.
}
```

### Use `std::span` (C++20) and `std::array`

`std::array` allocates on the stack but provides a class interface. `std::span` provides a non-owning view with size information.

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

Uninitialized stack variables contain garbage (whatever was left on the stack by the previous function). Using uninitialized values is Undefined Behavior.

**Mitigation:**
Clang and GCC support automatic initialization patterns.

- `-ftrivial-auto-var-init=pattern`: Fills stack variables with a specific pattern (e.g., `0xAA`). Useful for debugging.
- `-ftrivial-auto-var-init=zero`: Fills stack variables with zero. Safer for production (reduces info leaks), though theoretically masks logic bugs.

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
