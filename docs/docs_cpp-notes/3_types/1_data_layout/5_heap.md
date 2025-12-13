---
title: Heap
date: 2025-12-13T05:06:47.303Z
tags:
  - cpp
categories:
  - cpp
slug: heap
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

When a C++ program executes `new int` or `std::vector::push_back`, it requests "Dynamic Storage Duration." Unlike the stack, which is managed by a simple pointer increment/decrement instruction, the Heap requires complex interaction with the Operating System Kernel.

## 1. Virtual Memory Architecture

User-mode processes do not access Physical RAM. They access a **Virtual Address Space**. The CPU's Memory Management Unit (MMU) translates these virtual addresses to physical addresses via Page Tables.

### Pages

Memory is managed in fixed-size blocks called **Pages** (typically 4KB, though 2MB Huge Pages exist).

- **Implication:** You cannot ask the OS for 10 bytes. You must ask for a multiple of the Page Size (e.g., 4096 bytes).
- **The User-Space Allocator's Job:** The allocator (malloc/new) requests raw Pages from the OS and subdivides them into small chunks (10 bytes, 32 bytes) for the application.

### State of a Page

In modern OS architectures (Linux/Windows), a page in the heap can be in one of three states:

1. **Free:** Not accessible. Accessing triggers a Segfault/Access Violation.
2. **Reserved:** Address space is allocated, but no physical RAM is backed. Useful for large buffers (sparse arrays).
3. **Committed:** Backed by physical RAM (or swap).

## 2. The Linux/Unix Mechanisms (`brk` & `mmap`)

On POSIX systems, `malloc` uses two distinct syscalls to acquire memory.

### Mechanism A: The Program Break (`brk` / `sbrk`)

The "Data Segment" follows the code and static data in memory. The **Program Break** marks the end of this segment.

- **Action:** To allocate memory, `malloc` calls `sbrk(size)` to increment the pointer, effectively growing the heap upwards.
- **Pros:** Extremely fast (simple pointer arithmetic in the kernel).
- **Cons:**
  - **Contiguous constraint:** You can only grow or shrink the _end_. You cannot return a hole in the middle to the OS.
  - **Serialization:** Modifying the break is a global operation, requiring locking in multi-threaded apps.
- **Usage:** Typically used for small allocations (Small Bins).

### Mechanism B: Anonymous Mapping (`mmap`)

For larger allocations (e.g., `> 128KB` in glibc), `malloc` bypasses the Program Break and asks the kernel for a new, independent region of memory.

- **Action:** `mmap(NULL, size, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, ...)`
- **Pros:**
  - **Independent Lifetime:** This block can be returned to the OS (`munmap`) individually, reducing fragmentation.
  - **Security:** Mappings are randomized (ASLR).
- **Cons:**
  - **Syscall Overhead:** Slower than `sbrk`.
  - **Page Faults:** Requires OS to zero-out pages for security.

## 3. The Windows Mechanism (`VirtualAlloc`)

Windows does not use `brk`. Its heap manager relies entirely on the `VirtualAlloc` API, which offers granular control over the Reserve/Commit states.

1. **`VirtualAlloc(MEM_RESERVE)`**: Reserves a range of addresses (e.g., 1GB) without consuming physical RAM.
2. **`VirtualAlloc(MEM_COMMIT)`**: Backs specific pages within that range with RAM.

This mechanism is essentially equivalent to `mmap`, but the explicit separation of Reserve/Commit allows high-performance structures like "Vector implementation with separate capacity/size" to avoid wasting RAM on unused capacity.

## 4. The User-Space Allocator (`malloc` / `new`)

If syscalls operate on 4KB pages, why can we `new int` (4 bytes)?

The C++ runtime includes a **User-Space Allocator** (implementations include glibc `ptmalloc`, `jemalloc`, `tcmalloc`, or MSVC Heap). This component acts as a middleman.

### Architecture of an Allocator

1. **Arenas:** To prevent thread contention, memory is divided into Arenas (one per core/thread).
2. **Bins / Free Lists:** Memory chunks are categorized by size (e.g., a list of available 32-byte chunks, 64-byte chunks).
3. **Metadata:** Each chunk has a header (hidden bytes before the pointer returned to you) storing the size and flags.

### The Cost of `new`

When you write `auto* p = new Widget();`:

1. **Search:** The allocator looks in the "Widget-sized" free list.
2. **Split:** If a block is found but is too big, it splits it.
3. **Syscall (Rare):** If the free list is empty, it calls `sbrk` or `mmap` to get a new 4KB page from the OS.
4. **Bookkeeping:** It updates the chunk header.

This logic makes `new` non-deterministic and significantly slower than stack allocation.

## 5. Architectural Implications

### Fragmentation

- **External Fragmentation:** Total free memory is sufficient, but no single contiguous block is large enough for the request. Common with `brk` heaps.
- **Internal Fragmentation:** Asking for 20 bytes but getting a 32-byte block (due to alignment and bin sizes).

### Overcommit

Modern OS kernels (especially Linux) are often configured to **Overcommit**.

- `malloc(1GB)` may succeed even if the system has only 512MB RAM.
- The physical RAM is not consumed until you _write_ to the pages.
- **Risk:** If you write to it and RAM is exhausted, the OOM (Out of Memory) Killer terminates the process.

### C++23 Optimization: `std::pmr`

The complexity of the general-purpose allocator is why C++17/20/23 emphasizes **Polymorphic Memory Resources (`std::pmr`)**.

- **Monotonic Buffer:** Allocates a huge chunk via `new` (or `mmap`) once. Subsequent allocations are just `ptr++`.
- **Pool Resource:** Pre-allocates specific block sizes to eliminate fragmentation for specific objects.
- See Module 19.5 for implementation.

## 6. Inspection and Verification

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

    std::cout << "Allocated" << std::endl;
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
