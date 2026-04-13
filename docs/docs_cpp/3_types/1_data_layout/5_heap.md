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
Allocation and deallocation are O(1) --- just pop/push from the list.

**Unsorted Bin:** A catch-all bin for recently freed chunks. When a chunk is freed, it goes here
first. On the next allocation, the allocator checks this bin and may move chunks to small or large
bins.

**Small Bins:** Chunks up to 512 bytes, organized in doubly-linked lists per 16-byte size class.

**Large Bins:** Chunks larger than 512 bytes, organized by size ranges.

**Chunk Layout:**

```
+----------+----------+-------------------------------+----------+
| prev_size|   size   |        user data              |  (next)  |
| (8 bytes)| (8 bytes)|       (requested bytes)       |          |
+----------+----------+-------------------------------+----------+
                                           ^ malloc returns this pointer
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
| Thread safety  | Each thread has its own stack | Shared heap --- requires synchronization |
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

**Benefits:** $O(1)$ allocation, zero fragmentation, no per-allocation overhead. Used in game
engines, parsers, and high-frequency trading systems. C++17's `std::pmr::monotonic_buffer_resource`
provides a standard arena allocator.

## 8. Pool Allocation Pattern

Pool allocators pre-allocate fixed-size blocks and serve allocations from a free list. This
eliminates external fragmentation for objects of a known size and provides $O(1)$ allocation:

```cpp
#include <cstddef>
#include <vector>
#include <cstdint>
#include <iostream>
#include <cassert>

template <std::size_t BlockSize, std::size_t BlockCount>
class PoolAllocator {
    struct Block {
        alignas(std::max_align_t) std::byte storage[BlockSize];
        Block* next_free = nullptr;
    };

    std::vector<Block> blocks_;
    Block* free_list_ = nullptr;

public:
    PoolAllocator() : blocks_(BlockCount) {
        for (std::size_t i = 0; i < BlockCount; ++i) {
            blocks_[i].next_free = (i + 1 < BlockCount) ? &blocks_[i + 1] : nullptr;
        }
        free_list_ = &blocks_[0];
    }

    void* allocate() {
        if (!free_list_) return nullptr;
        Block* block = free_list_;
        free_list_ = block->next_free;
        return static_cast<void*>(block->storage);
    }

    void deallocate(void* ptr) {
        auto* block = reinterpret_cast<Block*>(
            static_cast<std::byte*>(ptr) - offsetof(Block, storage));
        block->next_free = free_list_;
        free_list_ = block;
    }

    std::size_t available() const {
        std::size_t count = 0;
        for (auto* p = free_list_; p; p = p->next_free) ++count;
        return count;
    }
};

void pool_demo() {
    PoolAllocator<64, 1000> pool;

    void* a = pool.allocate();
    void* b = pool.allocate();
    void* c = pool.allocate();

    std::cout << "Allocated 3 blocks, available: " << pool.available() << "\n";

    pool.deallocate(b);
    std::cout << "Freed 1 block, available: " << pool.available() << "\n";
}
```

## 9. The C++ Allocator Interface [N4950 S9.4]

C++ standard containers parameterize their memory management through the **Allocator** concept
[N4950 §9.4]. An allocator is a class type that provides `allocate`, `deallocate`, `construct`, and
`destroy` member functions. The standard provides `std::allocator<T>` as the default.

### Proof of Allocator Requirements

**Theorem.** A type `A` satisfies the `Allocator` concept for type `T` if and only if it provides
the following member types and functions, with the specified semantics [N4950 §9.4.2]:

**Proof (by enumeration of requirements).** We verify each requirement from [N4950 §9.4.2.1]:

1. **`value_type`**: Must be an alias for `T`. This allows containers to obtain the element type
   from the allocator.

2. **`A::allocate(n)`**: Must return a pointer to storage for `n` objects of type `T`. The storage
   must be aligned for `T` (at least `alignof(T)`). The storage is uninitialized --- no constructors
   are called.

3. **`A::deallocate(p, n)`**: Must deallocate storage previously returned by `allocate`. The pointer
   `p` must have been returned from `allocate` with the same `n`. After deallocation, `p` is
   invalid.

4. **`A::construct(ptr, args...)`** (deprecated in C++20): Constructs a `T` at `ptr` using placement
   new. In C++20, containers use `std::allocator_traits<A>::construct(a, p, args...)` which defaults
   to `::new(static_cast<void*>(p)) T(std::forward<Args>(args)...)`.

5. **`A::destroy(ptr)`** (deprecated in C++20): Calls `ptr->~T()`. In C++20, containers use
   `std::allocator_traits<A>::destroy(a, p)`.

6. **Equality**: `a1 == a2` returns `true` if memory allocated by `a1` can be deallocated by `a2`.
   For stateless allocators (like `std::allocator`), this is always `true`. For stateful allocators
   (like PMR allocators), this is `true` only if they share the same resource.

7. **Propagation traits**: `propagate_on_container_copy_assignment`,
   `propagate_on_container_move_assignment`, `propagate_on_container_swap`, and `is_always_equal`
   control how allocators are transferred when containers are copied, moved, or swapped. These are
   critical for correctness with stateful allocators. QED.

### Custom Allocator for Standard Containers

```cpp
#include <cstddef>
#include <cstdint>
#include <memory>
#include <vector>
#include <iostream>

template <typename T>
class TrackingAllocator {
public:
    using value_type = T;

    TrackingAllocator() = default;

    template <typename U>
    TrackingAllocator(const TrackingAllocator<U>&) noexcept {}

    T* allocate(std::size_t n) {
        std::cout << "  Allocating " << n * sizeof(T) << " bytes\n";
        auto* p = static_cast<T*>(::operator new(n * sizeof(T)));
        return p;
    }

    void deallocate(T* p, std::size_t) noexcept {
        std::cout << "  Deallocating\n";
        ::operator delete(p);
    }

    template <typename U>
    bool operator==(const TrackingAllocator<U>&) const noexcept { return true; }
};

void tracking_demo() {
    std::vector<int, TrackingAllocator<int>> v;

    std::cout << "push_back 1:\n";
    v.push_back(1);

    std::cout << "push_back 2:\n";
    v.push_back(2);

    std::cout << "reserve(100):\n";
    v.reserve(100);

    std::cout << "Vector size=" << v.size() << " capacity=" << v.capacity() << "\n";
}
```

### Comparison of Allocation Strategies

| Strategy      | Allocation Cost | Deallocation Cost | Fragmentation       | Use Case                           |
| ------------- | --------------- | ----------------- | ------------------- | ---------------------------------- |
| `malloc`      | ~50-500 ns      | ~30-200 ns        | External + Internal | General purpose                    |
| Arena         | ~1-5 ns         | 0 (bulk free)     | None                | Parsing, compilation, game frames  |
| Pool          | ~5-20 ns        | ~5-20 ns          | None (per size)     | Fixed-size objects (nodes, events) |
| Stack         | ~1 ns           | ~1 ns             | None                | Small, scope-bound objects         |
| Slab          | ~5-10 ns        | ~5-10 ns          | Minimal             | Kernel objects, cache-line sized   |
| PMR monotonic | ~1-5 ns         | 0 (bulk free)     | None                | C++17 standard arena               |
| PMR pool      | ~5-20 ns        | ~5-20 ns          | None (per size)     | C++17 standard pool                |

## 10. `malloc`/`free` Overhead Comparison

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

## 11. Inspection and Verification

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

## 12. Heap Profiling with Valgrind Massif

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

## 13. AddressSanitizer for Heap Issues

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

### Alignment Requirements and `alignas`

Every type `T` has an alignment requirement `alignof(T)` [N4950 §6.6.5]. The allocator must return
memory aligned to at least this value. Over-aligned types (e.g., SIMD vectors with `alignas(32)`)
require special handling because `operator new` only guarantees `alignof(std::max_align_t)` (16 on
x86_64):

```cpp
#include <cstdint>
#include <iostream>

struct alignas(32) SimdVec {
    float data[8];  // 32 bytes, aligned to 32-byte boundary
};

int main() {
    std::cout << "alignof(SimdVec) = " << alignof(SimdVec) << "\n";
    std::cout << "alignof(std::max_align_t) = " << alignof(std::max_align_t) << "\n";

    // Default new may NOT satisfy alignof(SimdVec) == 32
    // Use aligned new (C++17) for over-aligned types [N4950 §6.6.3]:
    SimdVec* p = static_cast<SimdVec*>(::operator new(sizeof(SimdVec), std::align_val_t{32}));
    std::cout << "p is 32-byte aligned: "
              << (reinterpret_cast<uintptr_t>(p) % 32 == 0) << "\n";

    ::operator delete(p, std::align_val_t{32});
}
```

## 14. C++23 Optimization: `std::pmr`

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

6. **Forgetting alignment with custom allocators.** A custom `allocate()` must return memory aligned
   to at least `alignof(T)`. Returning misaligned memory causes undefined behavior on architectures
   that require aligned access (most ARM processors) and degrades performance on x86 due to
   unaligned load penalties.

7. **Allocator propagation bugs with stateful allocators.** When a container uses a stateful
   allocator (e.g., PMR), copy assignment, move assignment, and swap must handle the allocator
   correctly. The propagation traits (`propagate_on_container_copy_assignment`, etc.) determine
   whether the allocator is copied, moved, or swapped with the container. Getting these wrong causes
   containers to deallocate memory with the wrong allocator.

8. **Small buffer optimization in allocators.** Many standard library implementations of
   `std::string` and `std::function` use small buffer optimization (SBO) to avoid heap allocation
   for small objects. Custom allocators that track allocations may not see these SBO allocations,
   leading to confusing accounting. The SBO buffer is part of the object itself, not heap-allocated.

9. **Thread safety of `malloc`/`free`.** The C standard guarantees that `malloc` and `free` are
   thread-safe [C11 §7.22.1]. However, the global heap lock is a significant contention point in
   multi-threaded applications. Arena and pool allocators reduce contention by giving each thread
   its own allocation context.

### Memory-Mapped Files and `mmap` for Large Data

For very large datasets (gigabytes), memory-mapped files provide an alternative to `malloc` +
`read`. `mmap` maps a file directly into virtual address space, letting the OS handle paging:

```cpp
#include <fcntl.h>
#include <sys/mman.h>
#include <sys/stat.h>
#include <unistd.h>
#include <iostream>
#include <cstdint>

void mmap_demo(const char* path) {
    int fd = open(path, O_RDONLY);
    if (fd < 0) return;

    struct stat sb;
    fstat(fd, &sb);

    void* addr = mmap(nullptr, static_cast<std::size_t>(sb.st_size),
                       PROT_READ, MAP_PRIVATE, fd, 0);
    if (addr == MAP_FAILED) { close(fd); return; }

    // Access file contents as memory — no explicit read() needed
    auto* data = static_cast<const std::byte*>(addr);
    std::cout << "Mapped " << sb.st_size << " bytes\n";

    // The OS pages in data on demand; pages not accessed consume no physical RAM
    munmap(addr, static_cast<std::size_t>(sb.st_size));
    close(fd);
}
```

Advantages: no copy from kernel space to user space, on-demand paging, shared between processes.
Disadvantages: page fault latency on first access, limited to file sizes, no portable C++ API
(POSIX-only).

### NUMA Awareness and Heap Performance

On NUMA (Non-Uniform Memory Access) systems, memory access latency depends on which CPU socket owns
the physical RAM. A `malloc` call may allocate memory on a remote NUMA node, causing 2-3x higher
latency for every access. Production systems handling high-throughput workloads (databases, message
brokers) use NUMA-aware allocation:

- `numa_alloc_onnode()` allocates memory on a specific NUMA node.
- Thread pools pin threads to specific NUMA nodes.
- `std::pmr` resources can be configured per thread to allocate from node-local memory.

### Debugging Heap Corruption

Heap corruption is insidious because the crash often occurs far from the root cause. Common causes:

1. **Buffer overflow:** Writing past the end of a `malloc`'d block overwrites the next chunk's
   metadata (size, flags), causing the allocator to behave erratically on the next allocation or
   free.

2. **Double free:** Freeing a block twice corrupts the free list. The second `free` may merge the
   already-freed block with adjacent free blocks, creating overlapping allocations.

3. **Use-after-free:** Accessing freed memory. If the block has been recycled for a new allocation,
   the data is silently corrupted. If not recycled, the data may appear valid but will eventually be
   reclaimed.

4. **Mismatched allocator:** Calling `free()` on a pointer returned by `new`, or `delete` on a
   pointer returned by `malloc`.

Detection tools:

| Tool                  | What It Detects                       | Overhead | Platform              |
| --------------------- | ------------------------------------- | -------- | --------------------- |
| AddressSanitizer      | Overflow, use-after-free, double-free | ~2x      | Linux, macOS, Windows |
| Valgrind Memcheck     | All memory errors                     | 10-50x   | Linux                 |
| Valgrind Massif       | Memory leaks, peak usage              | 10-20x   | Linux                 |
| glibc `MALLOC_CHECK_` | Heap corruption (basic)               | Minimal  | Linux                 |

## See Also

- [The Stack](./4_stack.md)
- [Pointers](../2_pointers_references_views/1_pointers.md)
- [Unique Ownership (std::unique_ptr) and EBO](../../4_resource_management/1_ownership_and_raii/2_unique_ptr.md)
- [Polymorphic Memory Resources (PMR)](../../8_standard_library/1_containers_and_allocators/4_pmr.md)
