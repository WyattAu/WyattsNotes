---
title: Sanitizer
description:
  C++: Sanitizer — CMake Integration Strategy; Implementation Module; Usage in
  Root CMakeLists.txt; Platform Support Matrix.
date: 2025-12-11T18:46:23.535Z
tags:
  - cpp
categories:
  - cpp
slug: sanitizer
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

Static analysis predicts defects by parsing source code. **Runtime Sanitizers** detect defects by
monitoring the program during execution.

Sanitizers utilize **Compile-Time Instrumentation**. The compiler injects checking instructions
around memory accesses, atomic operations, and arithmetic logic. A runtime library then tracks the
state of memory and threads, reporting violations immediately (often halting execution).

## The Sanitizer Taxonomy

### 1. Address Sanitizer (ASan)

- **Target:** Memory safety errors.
- **Detects:** Out-of-bounds accesses (heap/stack/global), Use-after-free, Use-after-return,
  Use-after-scope, Double-free, Memory leaks.
- **Mechanism:** Replaces `malloc`/`free` and surrounds memory objects with "Redzones". Every memory
  access is instrumented to check the shadow memory state.

### 2. Thread Sanitizer (TSan)

- **Target:** Concurrency errors.
- **Detects:** Data races (simultaneous read/write without synchronization), Deadlocks, Lock order
  inversions.
- **Mechanism:** Tracks "Happens-Before" relationships and lock acquisition history.
- **Constraint:** Mutually exclusive with ASan.

### 3. Undefined Behavior Sanitizer (UBSan)

- **Target:** C++ Standard violations.
- **Detects:** Signed integer overflow, division by zero, null pointer dereference, alignment
  violations, invalid enum casts.
- **Mechanism:** Injects branching logic before arithmetic and pointer operations.

### 4. Memory Sanitizer (MSan)

- **Target:** Uninitialized memory usage.
- **Detects:** Reading memory before it has been written.
- **Mechanism:** Bit-precise shadow memory tracking initialization state.
- **Constraint:** **Linux/Clang Only.** Requires all linked libraries (including C++ standard
  library) to be instrumented, or false positives occur.

## CMake Integration Strategy

Sanitizers should not be enabled globally. They effectively create a new Build Configuration (e.g.,
`SanitizeAddress`). The best practice is to expose CMake boolean options.

### Implementation Module

Create `cmake/Sanitizers.cmake`:

```cmake
function(enable_sanitizers project_name)
    # Options
    option(ENABLE_ASAN "Enable Address Sanitizer" OFF)
    option(ENABLE_TSAN "Enable Thread Sanitizer" OFF)
    option(ENABLE_UBSAN "Enable Undefined Behavior Sanitizer" OFF)
    option(ENABLE_MSAN "Enable Memory Sanitizer" OFF)

    set(SANITIZERS "")

    # 1. Address Sanitizer
    if(ENABLE_ASAN)
        if(ENABLE_TSAN)
             message(FATAL_ERROR "ASan and TSan are mutually exclusive.")
        endif()

        if(MSVC)
            list(APPEND SANITIZERS "address")
        else()
            list(APPEND SANITIZERS "address")
            # Improves stack traces
            target_compile_options(${project_name} INTERFACE -fno-omit-frame-pointer)
            target_link_options(${project_name} INTERFACE -fno-omit-frame-pointer)
        endif()
    endif()

    # 2. Thread Sanitizer
    if(ENABLE_TSAN)
        if(MSVC)
            message(WARNING "TSan not natively supported on MSVC cl.exe")
        else()
            list(APPEND SANITIZERS "thread")
        endif()
    endif()

    # 3. Undefined Behavior Sanitizer
    if(ENABLE_UBSAN)
        if(MSVC)
            # MSVC has /RTC (Runtime Checks) but no direct UBSan equivalent via flags
            # Use Clang-CL if UBSan is required on Windows
        else()
            list(APPEND SANITIZERS "undefined")
        endif()
    endif()

    # 4. Memory Sanitizer (Clang/Linux Only)
    if(ENABLE_MSAN)
        if(CMAKE_CXX_COMPILER_ID MATCHES "Clang" AND CMAKE_SYSTEM_NAME MATCHES "Linux")
            list(APPEND SANITIZERS "memory")
            target_compile_options(${project_name} INTERFACE -fsanitize-memory-track-origins)
        else()
            message(WARNING "MSan requires Clang on Linux.")
        endif()
    endif()

    # Apply Flags
    if(NOT "${SANITIZERS}" STREQUAL "")
        string(REPLACE ";" "," SANITIZERS_STR "${SANITIZERS}")

        if(MSVC)
            # MSVC Syntax: /fsanitize=address
            target_compile_options(${project_name} INTERFACE /fsanitize=${SANITIZERS_STR})
        else()
            # GCC/Clang Syntax: -fsanitize=address,undefined
            target_compile_options(${project_name} INTERFACE -fsanitize=${SANITIZERS_STR})
            target_link_options(${project_name} INTERFACE -fsanitize=${SANITIZERS_STR})
        endif()
    endif()
endfunction()
```

### Usage in Root CMakeLists.txt

```cmake
include(cmake/Sanitizers.cmake)

add_executable(App main.cpp)
enable_sanitizers(App)
```

## Platform Support Matrix

Not all sanitizers are available on all platforms or compilers.

| Sanitizer | Linux (GCC/Clang) | macOS (Apple Clang) | Windows (MSVC)          | Windows (Clang-CL)       |
| :-------- | :---------------- | :------------------ | :---------------------- | :----------------------- |
| **ASan**  | Fully Supported   | Fully Supported     | Supported (VS 2019+)    | Supported                |
| **TSan**  | Fully Supported   | Fully Supported     | Not Supported           | Supported (Experimental) |
| **UBSan** | Fully Supported   | Fully Supported     | Runtime Checks (`/RTC`) | Fully Supported          |
| **MSan**  | Clang Only        | Not Supported       | Not Supported           | Not Supported            |

### Windows MSVC Specifics

Microsoft recently added ASan support to the MSVC toolchain (`cl.exe`).

1. **Requirement:** Visual Studio 2019 version 16.9 or later.
2. **Component:** Ensure "C++ AddressSanitizer" is installed via the Visual Studio Installer.
3. **Limitations:** It does not currently support `std::string` annotations or some advanced
   container overflow checks present in GCC/Clang versions.

## Runtime Configuration

Sanitizers compile the logic into the executable, but behavior can be tuned at runtime using
environment variables.

### ASAN_OPTIONS

Common configurations for CI pipelines:

```bash
# Halt execution immediately on error (default is true)
export ASAN_OPTIONS=halt_on_error=1

# Enable Leak Sanitizer (LSan) component (Linux only, distinct on macOS)
export ASAN_OPTIONS=detect_leaks=1

# Symbolize output (requires llvm-symbolizer to be in PATH)
export ASAN_OPTIONS=symbolize=1
```

### UBSAN_OPTIONS

By default, UBSan prints an error message but continues execution. In strict CI environments, force
a crash to fail the build.

```bash
# Print stack trace on error
export UBSAN_OPTIONS=print_stacktrace=1

# Exit with status code 1 on error
export UBSAN_OPTIONS=halt_on_error=1
```

## Verification

To verify integration, intentionally introduce a bug protected by a preprocessor macro.

**File:** `sanity_check.cpp`

```cpp
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v = {1, 2, 3};
#ifdef TRIGGER_ASAN
    // Heap Buffer Overflow
    std::cout << v[3] << "\n";
#endif
    return 0;
}
```

**Build and Run:**

```bash
cmake -S . -B build -DENABLE_ASAN=ON -DCMAKE_BUILD_TYPE=RelWithDebInfo
cmake --build build
./build/App
```

**Expected Output (Clang/GCC):**

```text
=================================================================
==12345==ERROR: AddressSanitizer: heap-buffer-overflow on address...
READ of size 4 at 0x...
    #0 0x... in main /path/to/sanity_check.cpp:7
...
```

## Best Practices

1. **Build Types:** Do not use `Debug` builds for sanitizers if possible. The combined overhead of
   unoptimized code (`-O0`) plus sanitizer instrumentation makes the application unusably slow. Use
   `RelWithDebInfo` (`-O2 -g`) to get reasonable performance with readable stack traces.
2. **Separate CI Jobs:** Run ASan/UBSan in one CI job and TSan in a separate job. TSan's overhead is
   significantly higher.
3. **False Positives:** Sanitizers generally do not produce false positives (except MSan without
   full instrumentation). If a sanitizer reports an error, it is a real bug.

## Deep Dive: AddressSanitizer Internals

### Shadow Memory Model

ASan maps every 8 bytes of application memory to 1 byte of **shadow memory**. The shadow byte
encodes the accessibility state of the corresponding 8-byte region:

| Shadow Byte Value | Meaning                                         |
| ----------------- | ----------------------------------------------- |
| `0x00`            | All 8 bytes are accessible                      |
| `0x01`–`0x07`     | First N bytes are accessible, rest are poisoned |
| Negative values   | Entire region is poisoned (different meanings)  |

**Poisoning types** are encoded in the negative shadow byte values:

| Shadow Value | Meaning                                   |
| ------------ | ----------------------------------------- |
| `0xfa`       | Heap left redzone (allocated block start) |
| `0xfb`       | Heap right redzone (allocated block end)  |
| `0xfc`       | Stack buffer underflow                    |
| `0xfd`       | Stack buffer overflow                     |
| `0xfe`       | Stack memory after return                 |
| `0xff`       | Stack redzone (padding between variables) |

When an instrumented memory access occurs, the compiler generates code to check the shadow byte
before performing the actual load or store. If the shadow byte indicates the access is poisoned, the
ASan runtime reports the error and aborts.

```cpp
// Conceptual instrumentation by ASan
// Original:
int x = *ptr;

// Instrumented:
int shadow = *(int8_t*)((uintptr_t)ptr >> 3 + kShadowOffset);
if (shadow != 0) {
    if ((intptr_t)ptr & 7 + shadow > 8) {
        __asan_report_load4(ptr);  // report and abort
    }
}
int x = *ptr;
```

### Stack Instrumentation

ASan instruments stack frames by inserting redzones between local variables. This detects stack
buffer overflows and use-after-scope bugs:

```cpp
#include <iostream>

void stack_overflow_demo() {
    int a[4];
    int b[4];
    // ASan inserts redzones between a and b
    // Layout in memory:
    //   [redzone][a[0..3]][redzone][b[0..3]][redzone]
    for (int i = 0; i &lt; 8; ++i) {
        a[i] = i;  // ASan catches a[4]..a[7] as stack-buffer-overflow
    }
}
```

### Leak Detection (LSan)

LeakSanitizer (LSan) is integrated into ASan on Linux. It runs at process exit and scans memory for
unreachable allocations. It distinguishes between:

- **Directly leaked:** Memory with no pointers to it anywhere.
- **Indirectly leaked:** Memory reachable only through other leaked memory.
- **Possibly leaked:** Memory reachable only through pointer arithmetic (not a proper pointer).

```cpp
#include <cstdlib>

void leak_demo() {
    // Direct leak: pointer goes out of scope
    int* p = (int*)malloc(sizeof(int) * 10);
    *p = 42;
    // p is never freed
}
```

## Deep Dive: ThreadSanitizer

### Happens-Before Model

TSan implements the **vector clock** algorithm to track happens-before relationships between memory
operations across threads [N4950 §6.9.2.2]. Every memory access is assigned a vector clock
representing the thread's view of synchronization events.

A data race occurs when two threads access the same memory location, at least one access is a write,
and there is no happens-before relationship between the two accesses.

TSan instruments every memory access and synchronization primitive (mutex lock/unlock, atomic
operations, thread creation/join) to maintain the vector clock state.

```cpp
#include <thread>
#include <iostream>

int shared_counter = 0;

void increment_bad(int count) {
    for (int i = 0; i &lt; count; ++i) {
        shared_counter++;  // TSan: data race (non-atomic write)
    }
}

void increment_good(int count) {
    for (int i = 0; i &lt; count; ++i) {
        // Still a race — this is NOT atomic
        shared_counter++;
    }
}

int main() {
    // TSan detects the race between these two threads
    std::thread t1(increment_bad, 100000);
    std::thread t2(increment_bad, 100000);
    t1.join();
    t2.join();
    std::cout << "counter (likely wrong): " << shared_counter << "\n";
}
```

Typical TSan output:

```text
==================
WARNING: ThreadSanitizer: data race (pid=12345)
  Write of size 4 at 0x... by thread T1:
    #0 increment_bad() /path/to/file.cpp:7:5
    ...
  Previous write of size 4 at 0x... by thread T2:
    #0 increment_bad() /path/to/file.cpp:7:5
    ...
  Location is global 'shared_counter' of size 4 at 0x...
```

### TSan and std::atomic

TSan correctly handles `std::atomic` operations — it recognizes that `load`, `store`, and
`compare_exchange` are synchronization points. A race on an atomic variable with
`memory_order_relaxed` is still flagged if the intent is clearly synchronization:

```cpp
#include <thread>
#include <atomic>
#include <iostream>

std::atomic&lt;int&gt; atomic_counter{0};

void atomic_increment(int count) {
    for (int i = 0; i &lt; count; ++i) {
        atomic_counter.fetch_add(1, std::memory_order_relaxed);
    }
}

int main() {
    std::thread t1(atomic_increment, 100000);
    std::thread t2(atomic_increment, 100000);
    t1.join();
    t2.join();
    std::cout << "atomic counter (correct): " << atomic_counter.load() << "\n";
    // TSan: no warning — atomic operations are properly synchronized
}
```

## Deep Dive: UBSan Checks

UBSan can detect a wide range of undefined behavior. Key checks include:

| Check                       | Undefined Behavior                      | Example                                  |
| --------------------------- | --------------------------------------- | ---------------------------------------- |
| `signed-integer-overflow`   | Signed integer overflow                 | `INT_MAX + 1`                            |
| `unsigned-integer-overflow` | Unsigned integer overflow (wrap)        | `UINT_MAX + 1` (not UB, but often a bug) |
| `shift`                     | Shift past bit-width                    | `1 &lt;&lt; 32` on 32-bit int            |
| `divide-by-zero`            | Integer division by zero                | `int x = 1 / 0`                          |
| `null`                      | Null pointer dereference                | `*nullptr`                               |
| `alignment`                 | Misaligned pointer access               | Cast `char*` to `int*` at unaligned addr |
| `bool`                      | Loading invalid bool value              | `bool b = 2;`                            |
| `enum`                      | Loading value outside enum range        | Cast 42 to enum with range 0-10          |
| `float-cast-overflow`       | Cast float to integer when out of range | `(int)1e30`                              |
| `object-size`               | Accessing past end of object            | Array OOB via pointer arithmetic         |

### Enabling Specific UBSan Checks

```bash
# Enable all checks
-fsanitize=undefined

# Enable specific checks
-fsanitize=signed-integer-overflow,shift,null,alignment

# Add unsigned-integer-overflow (not technically UB, but detects wrap bugs)
-fsanitize=unsigned-integer-overflow
```

```cpp
#include <iostream>
#include <climits>

int main() {
    int x = INT_MAX;
    // UBSan catches: signed integer overflow
    int y = x + 1;
    (void)y;

    // UBSan catches: shift exceeds bit width
    int z = 1 &lt;&lt; 31;  // OK on 32-bit int (shifts by 31)
    // int w = 1 &lt;&lt; 32; // UBSan: shift exponent 32 is too large for 32-bit type

    // UBSan catches: null pointer dereference
    // int* p = nullptr;
    // *p = 42;

    std::cout << "UBSan checks active\n";
}
```

## Suppression Files

When sanitizers report errors in third-party code or known-safe patterns, use suppression files to
silence false positives without disabling the sanitizer entirely:

### ASan Suppression Format

Create `asan_suppressions.txt`:

```
# Suppress errors in third-party library
src:third_party/.*

# Suppress a specific function
fun:my_known_safe_function

# Suppress by error type
error:stack-buffer-overflow:src:known_safe_file.cpp
```

Usage:

```bash
export ASAN_OPTIONS=suppressions=asan_suppressions.txt
```

### UBSan Suppression Format

Create `ubsan_suppressions.txt`:

```
# Suppress signed overflow in specific function
fun:wrap_around_intentionally

# Suppress alignment check in packed struct access
src:network_parser.cpp
```

Usage:

```bash
export UBSAN_OPTIONS=suppressions=ubsan_suppressions.txt
```

## Common Pitfalls

### 1. Running ASan and TSan Simultaneously

ASan and TSan are mutually exclusive because they both instrument memory accesses but with
incompatible mechanisms. Attempting to combine them (`-fsanitize=address,thread`) produces a linker
error or crashes at startup. Run them in separate CI jobs.

### 2. MSan with Uninstrumented Libraries

MSan tracks initialization state at the bit level. If any code in the process is not instrumented
(including the C++ standard library), MSan may report false positives because it cannot see the
initialization performed by uninstrumented code. The solution is to compile **everything** with
`-fsanitize=memory`, including dependencies. This is only practical with Clang on Linux and requires
a fully static build or careful library management.

### 3. ASan and Custom Allocators

If your code uses a custom allocator (e.g., a pool allocator or arena), ASan cannot automatically
track the allocation boundaries. You must either:

- Replace the custom allocator with `malloc`/`free` when ASan is enabled.
- Use `__asan_poison_memory_region` and `__asan_unpoison_memory_region` to manually inform ASan
  about the allocator's state.

```cpp
#include <cstdlib>
#include <cstdint>

extern "C" {
    void __asan_poison_memory_region(const void* addr, size_t size);
    void __asan_unpoison_memory_region(const void* addr, size_t size);
}

class PoolAllocator {
    char* pool_;
    size_t offset_ = 0;
    size_t capacity_;
public:
    explicit PoolAllocator(size_t capacity)
        : pool_(new char[capacity]), capacity_(capacity) {}

    void* allocate(size_t size) {
        void* ptr = pool_ + offset_;
        offset_ += size;
        __asan_unpoison_memory_region(ptr, size);
        return ptr;
    }

    void deallocate(void* ptr, size_t size) {
        __asan_poison_memory_region(ptr, size);
    }

    ~PoolAllocator() { delete[] pool_; }
};
```

### 4. Sanitizer Overhead in Performance-Critical Code

ASan typically adds 2x memory overhead (shadow memory) and 2x CPU overhead. TSan adds 5-15x CPU
overhead and 5-10x memory overhead. Never run sanitizers in production or in performance benchmarks.
Use them exclusively in development and CI.
