---
title: The C Runtime (CRT)
date: 2025-12-12T04:23:24.345Z
tags:
  - cpp
categories:
  - cpp
slug: runtime-crt
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

A common misconception is that the execution of a C++ program begins at `main()`. In reality,
`main()` is merely a callback function invoked by the **C Runtime (CRT)** after a complex
initialization sequence.

The CRT serves as the abstraction layer between the Operating System Kernel and the C++ Abstract
Machine. It is responsible for setting up the stack, initializing the heap, handling signals, and,
critically for C++, orchestrating the construction of global objects.

## What the CRT Provides Beyond Language Features

The CRT implements services that the C++ standard library relies on but that are not part of the
language itself:

- **Memory allocation:** The implementation of `malloc`, `free`, `operator new`, and
  `operator delete` (ultimately backed by `brk`/`mmap` on Linux or `VirtualAlloc` on Windows).
- **Thread support:** `pthread_create` on Linux, `CreateThread` on Windows. `std::thread` is built
  on top of these.
- **File I/O:** `fopen`, `fread`, `fwrite` wrap system calls (`open`, `read`, `write`).
- **Signal handling:** `signal()`, `raise()` provide POSIX signal semantics.
- **Exception infrastructure:** Stack unwinding for C++ exceptions requires CRT support
  (`__cxa_begin_catch`, `__cxa_throw` on Itanium ABI platforms).
- **Locale and ctype:** Character classification, numeric formatting, and locale management.
- **Exit and cleanup:** `atexit`, `exit`, `abort`, and the termination sequence.

## The Physical Entry Point

When the OS Loader (e.g., `ld.so` on Linux or `ntdll.dll` on Windows) loads a binary, it jumps to
the address specified in the file header (ELF or PE). This address does **not** point to `main`.

- **Linux (ELF):** Points to `_start`, provided by `crt1.o`.
- **Windows (PE):** Points to `mainCRTStartup` (or `wmainCRTStartup`), provided by the MSVC Runtime.

## The Startup Sequence

The full startup path on Linux (glibc) is:

1. **Kernel Handoff:** The OS maps pages into memory and sets the Instruction Pointer (RIP) to the
   Entry Point (`_start`).
2. **`_start` (in `crt1.o`):** This is a tiny assembly stub. It pops `argc` from the stack, sets up
   `argv`, and calls `__libc_start_main`.
3. **`__libc_start_main` (in libc.so):** The main CRT initialization function. It:
   - Registers the program's `main` function as an `atexit` callback.
   - Calls `__libc_csu_init`, which walks the `.init_array` section.
   - **`.init_array` processing:** Each function pointer in `.init_array` is called. This is where
     C++ global constructors execute.
4. **`main()` is called** with `argc`, `argv`, and `envp`.
5. **Return from `main`:** The return value is passed to `exit()`, triggering the termination
   sequence.

```cpp
// Simplified conceptual flow
_start:
    pop %rdi          // argc
    mov %rsp, %rsi    // argv
    call __libc_start_main
    // never returns

__libc_start_main(main, argc, argv, init, fini, rtld_fini, stack_end):
    // ... setup ...
    __libc_csu_init()   // runs .init_array (global constructors)
    result = main(argc, argv, envp)
    exit(result)
```

## C++ Static Initialization

The most architecturally significant phase of startup is **C++ Initialization**. This allows code to
run before `main`.

### The `.init_array` Section

The compiler generates a list of function pointers for every global or static object that requires a
constructor. These pointers are stored in specific binary sections.

<Tabs>
  <TabItem value="linux" label="Linux (ELF)" default>

**Sections:**

- `.init_array`: An array of function pointers executed by the CRT startup routine
  (`__libc_csu_init`).
- `.fini_array`: An array of function pointers executed at termination.

**Inspection:**

```bash
readelf -x .init_array ./app
```

  </TabItem>
  <TabItem value="windows" label="Windows (PE)">

**Sections:**

- `.CRT$XCU`: The section used by the MSVC CRT to discover C++ initializers.

**Inspection:**

```cmd
dumpbin /SECTION:.CRT$XCU /RAWDATA app.exe
```

  </TabItem>
</Tabs>

### Initialization Order and the Static Init Fiasco

The C++ Standard guarantees that global objects _within a single Translation Unit_ are initialized
in the order of definition. However, the order of initialization **across different Translation
Units is undefined**.

**Scenario:**

- `FileA.cpp`: Defines `int x = 42;`
- `FileB.cpp`: Defines `int y = x + 1;`

If the linker arranges `FileB` to initialize before `FileA`, `y` will be initialized to garbage (or
zero) + 1, not 43.

**Architectural Mitigation:**

1. **Constinit (C++20):** Use `constinit` variables which are guaranteed to be initialized at
   compile-time (placed in `.data`), avoiding runtime execution code entirely.
2. **Construct On First Use:** Wrap static globals in a function.

```cpp
// Thread-safe in C++11+ (Magic Statics)
int& get_global() {
    static int x = 42; // Initialized only when get_global() is first called
    return x;
}
```

### How the CRT Finds Constructors

The compiler generates a special initialization function for each TU that has global constructors.
For GCC/Clang, this function is named `_GLOBAL__sub_I_<filename>` and is placed in the `.init_array`
section via a linker attribute:

```cpp
// What the compiler emits (conceptually)
__attribute__((constructor))
static void _GLOBAL__sub_I_file_cpp() {
    // Call constructors for all global objects in this TU
    global_obj.~T(); // actually constructor call
}
```

## `atexit` and Destructors

The CRT uses `atexit` to manage cleanup. When a C++ program returns from `main()`, the following
sequence runs:

1. **`atexit` handlers:** Functions registered via `std::atexit()` are called in reverse
   registration order.
2. **Static destructors:** Destructors for global/static C++ objects are called in reverse order of
   construction.
3. **Stream flushing:** `std::cout` and `printf` buffers are flushed to file descriptors.
4. **OS Exit:** The CRT invokes the `exit_group` syscall (Linux) or `ExitProcess` API (Windows).

The CRT internally registers static destructors as `atexit` callbacks during startup. This means the
destructor order interleaves with explicitly registered `atexit` handlers based on registration
time.

```cpp
#include <cstdlib>

struct Logger {
    ~Logger() { /* flush logs */ }
};

Logger global_logger;  // Destructor registered as atexit callback during startup

void on_exit() {
    // Also registered as atexit callback
}

int main() {
    std::atexit(on_exit);
    return 0;
    // atexit callbacks run in reverse order:
    // 1. on_exit
    // 2. ~Logger (global_logger destructor)
}
```

## CRT on Different Platforms

<Tabs>
  <TabItem value="glibc" label="glibc (Linux)" default>

glibc is the most common CRT on Linux. Key characteristics:

- Dynamic linking by default (libc.so.6).
- `_start` in `crt1.o`, `__libc_start_main` in libc.so.
- Thread-local storage via `tls_setup` in `ld.so`.
- Robust `dlopen`/`dlsym` for dynamic loading.

```bash
# Inspect the CRT objects linked into your binary
ldd ./app
readelf -d ./app | grep NEEDED
```

  </TabItem>
  <TabItem value="musl" label="musl (Alpine, embedded)">

musl is a lightweight, BSD-licensed CRT. Key differences from glibc:

- Smaller binary footprint (ideal for containers and embedded).
- Simpler startup sequence.
- No `libpthread` separate library (pthreads are built in).
- Different `__libc_start_main` implementation.

```bash
# Alpine Linux uses musl by default
docker run --rm alpine sh -c "ldd /bin/ls"
```

  </TabItem>
  <TabItem value="msvc" label="MSVC (Windows)" default>

MSVC provides two CRT variants with significantly different behavior:

- **Dynamic (`/MD`):** Links against `ucrtbase.dll` (Universal C Runtime) and `vcruntime140.dll`.
- **Static (`/MT`):** Embeds the CRT into the executable.

The MSVC startup calls `mainCRTStartup`, which initializes the heap, runs `.CRT$XCU` initializers,
and calls `main`.

```cmd
dumpbin /DEPENDENTS app.exe
```

  </TabItem>
</Tabs>

## Freestanding vs. Hosted Environments

The C++ standard defines two execution environments:

### Hosted Environment

The full C++ language is available. The CRT provides `main`, startup/termination, dynamic memory,
exceptions, and the entire standard library. This is the default for all desktop, server, and mobile
platforms.

### Freestanding Environment

Only a minimal subset of the language is available:

- No `main()` required (a custom entry point may be used).
- No dynamic memory allocation (no `new`, `delete`, `malloc`).
- No exceptions (no `try`/`catch`, no `throw`).
- No RTTI (no `dynamic_cast`, no `typeid`).
- Only these standard library headers are required: `&lt;cstddef&gt;`, `&lt;cfloat&gt;`,
  `&lt;climits&gt;`, `&lt;cstdalign&gt;`, `&lt;cstdarg&gt;`, `&lt;cstdbool&gt;`, `&lt;cstdlib&gt;`
  (only `abort`, `atexit`, `at_quick_exit`, `exit`, `quick_exit`, `_Exit`), `&lt;cstdint&gt;`,
  `&lt;cstdio&gt;`, `&lt;cstring&gt;`, `&lt;ctime&gt;`, `&lt;type_traits&gt;`, `&lt;limits&gt;`,
  `&lt;new&gt;` (placement new only), `&lt;initializer_list&gt;`, `&lt;ciso646&gt;`.

### The `-ffreestanding` Flag

GCC and Clang support `-ffreestanding` to compile for a freestanding environment:

```bash
# Compile for freestanding (OS kernel, bootloader)
clang++ -ffreestanding -nostdlib -c kernel.cpp -o kernel.o
```

Flags commonly used together with `-ffreestanding`:

- **`-nostdlib`:** Do not link the standard library or startup files.
- **`-nostdinc`:** Do not search standard include paths.
- **`-nostdinc++`:** Do not search C++ standard include paths.
- **`-fno-exceptions`:** Disable exception support.
- **`-fno-rtti`:** Disable RTTI.

### Writing a Custom Entry Point

In a freestanding environment, you provide your own entry point:

```cpp
// kernel_entry.cpp (freestanding)
extern "C" void _start() {
    // Custom initialization
    // No CRT, no global constructors, no atexit

    // Must call exit syscall manually (or loop forever for a kernel)
    while (true) {
        __asm__ volatile("hlt");
    }
}

// Link without CRT
// clang++ -ffreestanding -nostdlib -fuse-ld=lld -T linker.ld kernel_entry.cpp -o kernel.elf
```

## Program Termination

Returning from `main()` is functionally equivalent to calling `std::exit()`. The process does not
end immediately; the CRT must unwind the environment.

### The Termination Sequence

1. **Return from `main`:** The return value is passed to the CRT.
2. **`atexit` Handlers:** Functions registered via `std::atexit` are called in reverse order of
   registration.
3. **Static Destructors:** Destructors for global/static C++ objects are called (reverse order of
   construction).
4. **Stream Flushing:** `std::cout` / `printf` buffers are flushed to file descriptors.
5. **OS Exit:** The CRT invokes the `exit` syscall (Linux) or `ExitProcess` API (Windows), returning
   control to the kernel.

:::warning `std::terminate` vs `std::exit` If an exception escapes `main`, or an unjoinable
`std::thread` is destroyed, the CRT calls `std::terminate`. This calls `std::abort`, which kills the
process **without** running static destructors or file buffer flushing. This often results in
truncated logs or corrupted data files. :::

## CRT Linkage Modes (Windows Specific)

On Linux, the CRT is almost always linked dynamically (`glibc`). On Windows, MSVC offers a choice
that profoundly affects architecture.

### 1. Dynamic Linking (`/MD`, `/MDd`)

- **Mechanism:** The executable relies on `VCRUNTIME140.DLL` and `UCRTBASE.DLL` present on the
  system.
- **Pros:** Smaller binary; OS patches to the CRT apply automatically; Memory ownership (Heap) is
  shared across DLL boundaries.
- **Cons:** "DLL Hell" (missing redistributables).

### 2. Static Linking (`/MT`, `/MTd`)

- **Mechanism:** The CRT code is copied directly into the `.exe`.
- **Pros:** Standalone executable (no dependencies).
- **Cons:** Bloated binary; **Heap Isolation**.

### The Heap Isolation Trap

If `App.exe` is linked with `/MT` and `Lib.dll` is linked with `/MT`, they essentially have
**separate Heaps**.

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

Each entry represents a function that runs before `main`. Minimizing these is a key optimization for
CLI tools and short-lived microservices.

## Common Pitfalls

- **Static init fiasco:** Global objects in different TUs have undefined initialization order. Use
  "construct on first use" (magic statics) or `constinit`.
- **`std::terminate` skips destructors:** An uncaught exception or destroyed joinable thread calls
  `std::abort`, bypassing cleanup. Always catch exceptions in `main` or use `std::set_terminate`.
- **Heap isolation on Windows with `/MT`:** Memory allocated in one DLL must be freed in the same
  DLL. Use `/MD` or provide deallocation functions in the DLL.
- **Excessive global constructors in CLI tools:** Each global constructor adds startup latency.
  Profile with `LD_DEBUG=statistics` and minimize.
- **Freestanding without `-nostdlib`:** Using `-ffreestanding` alone still links the CRT. Use
  `-nostdlib` and provide your own `_start` for true freestanding.

## See Also

- [Linker](../1_translation/3_linker.md)
- [Binary Module Interfaces (BMI)](./2_bmi.md)
