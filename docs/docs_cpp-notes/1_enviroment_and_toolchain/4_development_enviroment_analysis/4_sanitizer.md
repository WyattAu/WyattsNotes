---
title: Sanitizer
date: 2025-12-11T18:46:23.535Z
tags:
  - cpp
categories:
  - cpp
slug: sanitizer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Static analysis predicts defects by parsing source code. **Runtime Sanitizers** detect defects by monitoring the program during execution.

Sanitizers utilize **Compile-Time Instrumentation**. The compiler injects checking instructions around memory accesses, atomic operations, and arithmetic logic. A runtime library then tracks the state of memory and threads, reporting violations immediately (often halting execution).

## The Sanitizer Taxonomy

### 1. Address Sanitizer (ASan)

- **Target:** Memory safety errors.
- **Detects:** Out-of-bounds accesses (heap/stack/global), Use-after-free, Use-after-return, Use-after-scope, Double-free, Memory leaks.
- **Mechanism:** Replaces `malloc`/`free` and surrounds memory objects with "Redzones". Every memory access is instrumented to check the shadow memory state.

### 2. Thread Sanitizer (TSan)

- **Target:** Concurrency errors.
- **Detects:** Data races (simultaneous read/write without synchronization), Deadlocks, Lock order inversions.
- **Mechanism:** Tracks "Happens-Before" relationships and lock acquisition history.
- **Constraint:** Mutually exclusive with ASan.

### 3. Undefined Behavior Sanitizer (UBSan)

- **Target:** C++ Standard violations.
- **Detects:** Signed integer overflow, division by zero, null pointer dereference, alignment violations, invalid enum casts.
- **Mechanism:** Injects branching logic before arithmetic and pointer operations.

### 4. Memory Sanitizer (MSan)

- **Target:** Uninitialized memory usage.
- **Detects:** Reading memory before it has been written.
- **Mechanism:** Bit-precise shadow memory tracking initialization state.
- **Constraint:** **Linux/Clang Only.** Requires all linked libraries (including C++ standard library) to be instrumented, or false positives occur.

## CMake Integration Strategy

Sanitizers should not be enabled globally. They effectively create a new Build Configuration (e.g., `SanitizeAddress`). The best practice is to expose CMake boolean options.

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
3. **Limitations:** It does not currently support `std::string` annotations or some advanced container overflow checks present in GCC/Clang versions.

## Runtime Configuration

Sanitizers compile the logic into the executable, but behavior can be tuned at runtime using environment variables.

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

By default, UBSan prints an error message but continues execution. In strict CI environments, force a crash to fail the build.

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

1. **Build Types:** Do not use `Debug` builds for sanitizers if possible. The combined overhead of unoptimized code (`-O0`) plus sanitizer instrumentation makes the application unusably slow. Use `RelWithDebInfo` (`-O2 -g`) to get reasonable performance with readable stack traces.
2. **Separate CI Jobs:** Run ASan/UBSan in one CI job and TSan in a separate job. TSan's overhead is significantly higher.
3. **False Positives:** Sanitizers generally do not produce false positives (except MSan without full instrumentation). If a sanitizer reports an error, it is a real bug.
