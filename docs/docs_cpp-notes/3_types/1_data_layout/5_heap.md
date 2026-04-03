---
title: Heap
date: 2025-12-13T05:06:47.303Z
tags:
  - cpp
categories:
  - cpp
slug: heap
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

When a C++ program executes `new int` or `std::vector::push_back`, it requests "Dynamic Storage
Duration." Unlike the stack, which is managed by a simple pointer increment/decrement instruction,
the Heap requires complex interaction with the Operating System Kernel.

## 1. Virtual Memory Architecture

User-mode processes do not access Physical RAM. They access a **Virtual Address Space**. The CPU's
Memory Management Unit (MMU) translates these virtual addresses to physical addresses via Page
Tables.

### Pages

Memory is managed in fixed-size blocks called **Pages** (typically 4KB, though 2MB Huge Pages
exist).

- **Implication:** You cannot ask the OS for 10 bytes. You must ask for a multiple of the Page Size
  (e.g., 4096 bytes).
- **The User-Space Allocator's Job:** The allocator (malloc/new) requests raw Pages from the OS and
  subdivides them into small chunks (10 bytes, 32 bytes) for the application.

### State of a Page

In modern OS architectures (Linux/Windows), a page in the heap can be in one of three states:

1. **Free:** Not accessible. Accessing triggers a Segfault/Access Violation.
2. **Reserved:** Address space is allocated, but no physical RAM is backed. Useful for large buffers
   (sparse arrays).
3. **Committed:** Backed by physical RAM (or swap).

## 2. The Linux/Unix Mechanisms (`brk` & `mmap`)

On POSIX systems, `malloc` uses two distinct syscalls to acquire memory.

### Mechanism A: The Program Break (`brk` / `sbrk`)

The "Data Segment" follows the code and static data in memory. The **Program Break** marks the end
of this segment.

- **Action:** To allocate memory, `malloc` calls `sbrk(size)` to increment the pointer, effectively
  growing the heap upwards.
- **Pros:** Extremely fast (simple pointer arithmetic in the kernel).
- **Cons:**
  - **Contiguous constraint:** You can only grow or shrink the _end_. You cannot return a hole in
    the middle to the OS.
  - **Serialization:** Modifying the break is a global operation, requiring locking in
    multi-threaded apps.
- **Usage:** Typically used for small allocations (Small Bins).

### Mechanism B: Anonymous Mapping (`mmap`)

For larger allocations (e.g., `> 128KB` in glibc), `malloc` bypasses the Program Break and asks the
kernel for a new, independent region of memory.

- **Action:** `mmap(NULL, size, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, ...)`
- **Pros:**
  - **Independent Lifetime:** This block can be returned to the OS (`munmap`) individually, reducing
    fragmentation.
  - **Security:** Mappings are randomized (ASLR).
- **Cons:**
  - **Syscall Overhead:** Slower than `sbrk`.
  - **Page Faults:** Requires OS to zero-out pages for security.

## 3. The Windows Mechanism (`VirtualAlloc`)

Windows does not use `brk`. Its heap manager relies entirely on the `VirtualAlloc` API, which offers
granular control over the Reserve/Commit states.

1. **`VirtualAlloc(MEM_RESERVE)`**: Reserves a range of addresses (e.g., 1GB) without consuming
   physical RAM.
2. **`VirtualAlloc(MEM_COMMIT)`**: Backs specific pages within that range with RAM.

This mechanism is essentially equivalent to `mmap`, but the explicit separation of Reserve/Commit
allows high-performance structures like "Vector implementation with separate capacity/size" to avoid
wasting RAM on unused capacity.

## 4. The User-Space Allocator (`malloc` / `new`)

If syscalls operate on 4KB pages, why can we `new int` (4 bytes)?

The C++ runtime includes a **User-Space Allocator** (implementations include glibc `ptmalloc`,
`jemalloc`, `tcmalloc`, or MSVC Heap). This component acts as a middleman.

### Architecture of an Allocator

1. **Arenas:** To prevent thread contention, memory is divided into Arenas (one per core/thread).
2. **Bins / Free Lists:** Memory chunks are categorized by size (e.g., a list of available 32-byte
   chunks, 64-byte chunks).
3. **Metadata:** Each chunk has a header (hidden bytes before the pointer returned to you) storing
   the size and flags.

### The Cost of `new`

When you write `auto* p = new Widget();`:

1. **Search:** The allocator looks in the "Widget-sized" free list.
2. **Split:** If a block is found but is too big, it splits it.
3. **Syscall (Rare):** If the free list is empty, it calls `sbrk` or `mmap` to get a new 4KB page
   from the OS.
4. **Bookkeeping:** It updates the chunk header.

This logic makes `new` non-deterministic and significantly slower than stack allocation.

### glibc `ptmalloc` Internals

glibc's `ptmalloc` (derived from dlmalloc) is the default allocator on most Linux systems. It
organizes free chunks into bins:

**Fast Bins:** Small chunks (up to 128 bytes) stored in singly-linked lists per size class.
Allocation and deallocation are O(1) — just pop/push from the list.

**Unsorted Bin:** A catch-all bin for recently freed chunks. When a chunk is freed, it goes here
first. On the next allocation, the allocator checks this bin and may move chunks to small or large
bins.

**Small Bins:** Chunks up to 512 bytes, organized in doubly-linked lists per 16-byte size class.

**Large Bins:** Chunks larger than 512 bytes, organized by size ranges.

**Chunk Layout:**

```
┌──────────┬──────────┬───────────────────────────────┬──────────┐
│ prev_size│   size   │        user data              │  (next)  │
│ (8 bytes)│ (8 bytes)│       (requested bytes)       │          │
└──────────┴──────────┴───────────────────────────────┴──────────┘
                                           ↑ malloc returns this pointer
```

The minimum chunk size is 32 bytes (on 64-bit systems) due to the 16-byte header and alignment
requirements. This means `malloc(1)` actually consumes 32 bytes.

## 5. Architectural Implications

### Fragmentation

- **External Fragmentation:** Total free memory is sufficient, but no single contiguous block is
  large enough for the request. Common with `brk` heaps.
- **Internal Fragmentation:** Asking for 20 bytes but getting a 32-byte block (due to alignment and
  bin sizes).

### Overcommit

Modern OS kernels (especially Linux) are often configured to **Overcommit**.

- `malloc(1GB)` may succeed even if the system has only 512MB RAM.
- The physical RAM is not consumed until you _write_ to the pages.
- **Risk:** If you write to it and RAM is exhausted, the OOM (Out of Memory) Killer terminates the
  process.

## 6. Stack vs Heap Allocation Tradeoffs

Understanding when to use stack vs heap allocation is critical for performance and correctness:

| Aspect         | Stack Allocation              | Heap Allocation                          |
| -------------- | ----------------------------- | ---------------------------------------- |
| Speed          | ~1 cycle (pointer bump)       | ~100-1000 cycles (search, bookkeeping)   |
| Size limit     | Small (typically 1-8 MB)      | Large (limited by virtual address space) |
| Lifetime       | Automatic (scope-based)       | Manual (delete/free or smart pointers)   |
| Thread safety  | Each thread has its own stack | Shared heap — requires synchronization   |
| Fragmentation  | None (LIFO deallocation)      | Both internal and external               |
| Cache locality | Excellent (contiguous)        | Variable (depends on allocation pattern) |

**Rule of thumb:** Allocate on the stack by default. Use the heap only when:

- The object is too large for the stack
- The object must outlive the current scope
- The size is not known at compile time

```cpp
#include <iostream>
#include <vector>
#include <chrono>

void stack_vs_heap_benchmark() {
    constexpr int N = 1000000;

    // Stack allocation: deterministic, fast
    auto start = std::chrono::high_resolution_clock::now();
    for (int i = 0; i < N; ++i) {
        int data[64];  // Stack-allocated array
        data[0] = i;   // Prevent optimization
    }
    auto end = std::chrono::high_resolution_clock::now();
    std::cout << "stack: " << std::chrono::duration_cast<std::chrono::microseconds>(end - start).count() << " us\n";

    // Heap allocation: slower, non-deterministic
    start = std::chrono::high_resolution_clock::now();
    for (int i = 0; i < N; ++i) {
        auto* data = new int[64];
        data[0] = i;
        delete[] data;
    }
    end = std::chrono::high_resolution_clock::now();
    std::cout << "heap:  " << std::chrono::duration_cast<std::chrono::microseconds>(end - start).count() << " us\n";
}
```

## 7. Arena Allocation Pattern

Arena (or region) allocation is a strategy that allocates a large block once and then sub-divides it
with simple pointer bumps. All objects in the arena are freed at once when the arena is destroyed.
This eliminates fragmentation and provides near-stack allocation speed for dynamic workloads:

```cpp
#include <cstddef>
#include <cstdint>
#include <vector>
#include <iostream>

class Arena {
    std::vector<std::byte> buffer_;
    std::size_t offset_ = 0;

public:
    explicit Arena(std::size_t capacity) : buffer_(capacity) {}

    void* allocate(std::size_t size, std::size_t alignment = alignof(std::max_align_t)) {
        std::size_t aligned_offset = (offset_ + alignment - 1) & ~(alignment - 1);
        if (aligned_offset + size > buffer_.size()) {
            return nullptr;  // Out of memory
        }
        void* ptr = buffer_.data() + aligned_offset;
        offset_ = aligned_offset + size;
        return ptr;
    }

    void reset() { offset_ = 0; }  // Free everything at once

    std::size_t used() const { return offset_; }
    std::size_t capacity() const { return buffer_.size(); }
};

void arena_demo() {
    Arena arena(4096);

    int* a = static_cast<int*>(arena.allocate(sizeof(int)));
    *a = 42;

    double* b = static_cast<double*>(arena.allocate(sizeof(double)));
    *b = 3.14;

    std::cout << "used: " << arena.used() << " / " << arena.capacity() << "\n";

    arena.reset();  // All allocations freed at once
    std::cout << "after reset, used: " << arena.used() << "\n";  // 0
}
```

**Benefits:** O(1) allocation, zero fragmentation, no per-allocation overhead. Used in game engines,
parsers, and high-frequency trading systems. C++17's `std::pmr::monotonic_buffer_resource` provides
a standard arena allocator.

## 8. `malloc`/`free` Overhead Comparison

| Operation            | Approximate Cost (x86_64) | Notes                            |
| -------------------- | ------------------------- | -------------------------------- |
| Stack allocation     | ~1 ns                     | Single pointer bump instruction  |
| `malloc` (cached)    | ~50-100 ns                | Fast bin hit, no syscall         |
| `malloc` (new)       | ~200-500 ns               | Syscall + page fault + zero-fill |
| `free`               | ~30-50 ns                 | Fast bin push, possible coalesce |
| `new` (with ctor)    | ~100-300 ns               | `malloc` + constructor call      |
| `delete` (with dtor) | ~50-200 ns                | Destructor call + `free`         |

These numbers are approximate and vary by platform, allocator implementation, allocation size, and
fragmentation state.

## 9. Inspection and Verification

To visualize the interaction between C++ code and Kernel memory managers, use system tracing tools.

### Scenario: Tracing Syscalls

Create `heap_test.cpp`:

```cpp
#include <vector>
#include <iostream>

int main() {
    // 1. Small allocation (likely sbrk/heap reuse)
    auto* p = new int[10];

    // 2. Huge allocation (likely mmap)
    // 1024 * 1024 * 128 bytes = 128 MB
    std::vector<char> huge_buffer(128 * 1024 * 1024);
    return 0;
}
```

<Tabs>
  <TabItem value="linux" label="Linux (strace)" default>

Run `strace` to intercept system calls related to memory management (`-e trace=memory`).

```bash
g++ heap_test.cpp -o heap_test
strace -e trace=memory ./heap_test
```

**Output Analysis:**

1. `brk(NULL)`: Gets current heap end.
2. `brk(0x...)`: Increases heap end (small allocations).
3. `mmap(..., 134217728, ...)`: Requests ~128MB anonymously for the vector.
4. `munmap(...)`: Releases the 128MB block upon vector destruction.

  </TabItem>
  <TabItem value="windows" label="Windows (VMMap)" default>

On Windows, `strace` does not exist. Use **VMMap** from Sysinternals.

1. Launch VMMap.
2. Run the application.
3. Observe the "Heap" category (managed by `VirtualAlloc` internally) versus "Private Data".
4. Note the differentiation between "Committed" and "Reserved" memory.

  </TabItem>
</Tabs>

## 10. Heap Profiling with Valgrind Massif

Valgrind Massif is a heap profiler that tracks memory usage over time, helping identify leaks and
excessive allocations:

```bash
# Compile with debug symbols
g++ -g -O0 my_app.cpp -o my_app

# Run with Massif
valgrind --tool=massif ./my_app

# View the profile
ms_print massif.out.<pid>
```

Massif produces a timeline of heap usage, showing which allocation sites contribute the most memory.
It is invaluable for finding:

- **Memory leaks** (monotonically increasing heap usage)
- **Peak usage** (maximum heap consumption during execution)
- **Allocation hotspots** (which code paths allocate the most)

## 11. AddressSanitizer for Heap Issues

AddressSanitizer (ASan) is a compiler instrumentation tool that catches heap errors at runtime with
minimal overhead (~2x slowdown):

```bash
# Compile with ASan
g++ -fsanitize=address -g -O1 my_app.cpp -o my_app

# Run
./my_app
```

**Errors detected by ASan:**

- **Heap buffer overflow:** Reading or writing past the allocated size
- **Use-after-free:** Accessing memory after it has been freed
- **Double free:** Calling `free` on the same pointer twice
- **Memory leaks:** Allocated memory not freed at program exit
- **Stack buffer overflow:** Reading or writing past stack-allocated arrays

```cpp
#include <cstdlib>

void asan_examples() {
    // 1. Heap buffer overflow
    int* p = static_cast<int*>(std::malloc(4 * sizeof(int)));
    p[4] = 42;  // ASan: heap-buffer-overflow

    // 2. Use-after-free
    std::free(p);
    int x = p[0];  // ASan: heap-use-after-free

    // 3. Double free
    std::free(p);  // ASan: attempting free on address which was not malloc()-ed
}
```

## 12. C++23 Optimization: `std::pmr`

The complexity of the general-purpose allocator is why C++17/20/23 emphasizes **Polymorphic Memory
Resources (`std::pmr`)**.

- **Monotonic Buffer:** Allocates a huge chunk via `new` (or `mmap`) once. Subsequent allocations
  are just `ptr++`.
- **Pool Resource:** Pre-allocates specific block sizes to eliminate fragmentation for specific
  objects.
- **Synchronized Pool:** Thread-safe version of pool resource.
- See the dedicated `std::pmr` module for implementation details.

## Common Pitfalls

1. **Assuming `malloc` always succeeds.** On Linux with overcommit, `malloc` can return non-null for
   allocations larger than physical RAM. The OOM killer will terminate your process later when you
   write to the memory.

2. **Mixing `new`/`delete` with `malloc`/`free`.** The C++ `new` expression calls `operator new`
   which may use a different allocator than `malloc`. Always pair `new` with `delete` and `malloc`
   with `free`.

3. **Ignoring fragmentation in long-running processes.** External fragmentation causes allocation
   failures even when total free memory is sufficient. Use arena allocation or `std::pmr` for
   long-running workloads with many small allocations.

4. **Not checking `new` failure.** By default, `new` throws `std::bad_alloc` on failure. Use
   `new(std::nothrow)` to get `nullptr` instead, or catch the exception.

5. **Premature optimization with custom allocators.** The default allocator is highly optimized for
   general use. Only switch to a custom allocator after profiling shows it is a bottleneck.

## See Also

- [The Stack](./4_stack.md)
- [Pointers](../2_pointers_references_views/1_pointers.md)
- [Unique Ownership (std::unique_ptr) and EBO](../../4_resource_management/1_ownership_and_raii/2_unique_ptr.md)
