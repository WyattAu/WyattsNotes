---
title: The C Runtime (CRT)
date: 2025-12-12T04:23:24.345Z
tags:
  - cpp
categories:
  - cpp
slug: runtime-crt
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A common misconception is that the execution of a C++ program begins at `main()`. In reality, `main()` is merely a callback function invoked by the **C Runtime (CRT)** after a complex initialization sequence.

The CRT serves as the abstraction layer between the Operating System Kernel and the C++ Abstract Machine. It is responsible for setting up the stack, initializing the heap, handling signals, and, critically for C++, orchestrating the construction of global objects.

## The Physical Entry Point

When the OS Loader (e.g., `ld.so` on Linux or `ntdll.dll` on Windows) loads a binary, it jumps to the address specified in the file header (ELF or PE). This address does **not** point to `main`.

- **Linux (ELF):** Points to `_start`. provided by `crt1.o`.
- **Windows (PE):** Points to `mainCRTStartup` (or `wmainCRTStartup`), provided by the MSVC Runtime.

### The Startup Sequence

1. **Kernel Handoff:** The OS maps pages into memory and sets the Instruction Pointer (RIP) to the Entry Point.
2. **Stack Setup:** The CRT aligns the stack frame.
3. **Argument Parsing:** The CRT reads the raw command line from the process control block and parses it into `argc` and `argv`.
4. **Environment Setup:** `envp` is initialized.
5. **Heap Initialization:** The initial heap region is requested from the OS (via `brk` or `VirtualAlloc`) to support `malloc`/`new`.
6. **C++ Initialization:** Global constructors are executed.
7. **Invocation:** `main()` is called.

## C++ Static Initialization

The most architecturally significant phase of startup is **C++ Initialization**. This allows code to run before `main`.

### The `.init_array` Section

The compiler generates a list of function pointers for every global or static object that requires a constructor. These pointers are stored in specific binary sections.

<Tabs>
  <TabItem value="linux" label="Linux (ELF)" default>

**Sections:**

- `.init_array`: An array of function pointers executed by the CRT startup routine (`__libc_csu_init`).
- `.fini_array`: An array of function pointers executed at termination.

**Inspection:**

```bash
readelf -x .init_array ./app
```

  </TabItem>
  <TabItem value="windows" label="Windows (PE)" default>

**Sections:**

- `.CRT$XCU`: The section used by the MSVC CRT to discover C++ initializers.

**Inspection:**

```cmd
dumpbin /SECTION:.CRT$XCU /RAWDATA app.exe
```

  </TabItem>
</Tabs>

### The Static Initialization Order Fiasco

The C++ Standard guarantees that global objects _within a single Translation Unit_ are initialized in the order of definition. However, the order of initialization **across different Translation Units is undefined**.

**Scenario:**

- `FileA.cpp`: Defines `int x = 42;`
- `FileB.cpp`: Defines `int y = x + 1;`

If the linker arranges `FileB` to initialize before `FileA`, `y` will be initialized to garbage (or zero) + 1, not 43.

**Architectural Mitigation:**

1. **Constinit (C++20):** Use `constinit` variables which are guaranteed to be initialized at compile-time (placed in `.data`), avoiding runtime execution code entirely.
2. **Construct On First Use:** Wrap static globals in a function.

```cpp
// Thread-safe in C++11+ (Magic Statics)
int& get_global() {
    static int x = 42; // Initialized only when get_global() is first called
    return x;
}
```

## Program Termination

Returning from `main()` is functionally equivalent to calling `std::exit()`. The process does not end immediately; the CRT must unwind the environment.

### The Termination Sequence

1. **Return from `main`:** The return value is passed to the CRT.
2. **`atexit` Handlers:** Functions registered via `std::atexit` are called in reverse order of registration.
3. **Static Destructors:** Destructors for global/static C++ objects are called (reverse order of construction).
4. **Stream Flushing:** `std::cout` / `printf` buffers are flushed to file descriptors.
5. **OS Exit:** The CRT invokes the `exit` syscall (Linux) or `ExitProcess` API (Windows), returning control to the kernel.

:::warning `std::terminate` vs `std::exit`
If an exception escapes `main`, or an unjoinable `std::thread` is destroyed, the CRT calls `std::terminate`. This calls `std::abort`, which kills the process **without** running static destructors or file buffer flushing. This often results in truncated logs or corrupted data files.
:::

## CRT Linkage Modes (Windows Specific)

On Linux, the CRT is almost always linked dynamically (`glibc`). On Windows, MSVC offers a choice that profoundly affects architecture.

### 1. Dynamic Linking (`/MD`, `/MDd`)

- **Mechanism:** The executable relies on `VCRUNTIME140.DLL` and `UCRTBASE.DLL` present on the system.
- **Pros:** Smaller binary; OS patches to the CRT apply automatically; Memory ownership (Heap) is shared across DLL boundaries.
- **Cons:** "DLL Hell" (missing redistributables).

### 2. Static Linking (`/MT`, `/MTd`)

- **Mechanism:** The CRT code is copied directly into the `.exe`.
- **Pros:** Standalone executable (no dependencies).
- **Cons:** Bloated binary; **Heap Isolation**.

### The Heap Isolation Trap

If `App.exe` is linked with `/MT` and `Lib.dll` is linked with `/MT`, they essentially have **separate Heaps**.

- Allocating memory in `Lib.dll` and freeing it in `App.exe` causes a Heap Corruption crash.
- **Best Practice:** Always use `/MD` (Dynamic) for non-trivial systems involving multiple DLLs.

## Architectural Verification

To understand the startup cost of your application, you can profile the time spent _before_ `main`.

### Linux (LD_DEBUG)

The dynamic linker can report relocation processing time.

```bash
LD_DEBUG=statistics ./app
```

### Analyzing Initializers

If startup is slow, you may have excessive global constructors. Use `nm` to count them.

```bash
# Look for internal initialization functions generated by GCC/Clang
nm -C ./app | grep _GLOBAL__sub_I
```

Each entry represents a function that runs before `main`. Minimizing these is a key optimization for CLI tools and short-lived microservices.
