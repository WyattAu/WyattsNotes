---
title: RAII Patterns
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: raii-patterns
---

# RAII Patterns

RAII (Resource Acquisition Is Initialization) is the foundational C++ idiom that binds resource
lifetime to object lifetime. By acquiring resources in constructors and releasing them in
destructors, RAII guarantees deterministic cleanup even when exceptions propagate through the call
stack.

## 1.1 Formal Definition

A class follows the RAII pattern when:

1. Its **constructor** acquires a resource (opens a file, locks a mutex, allocates memory).
2. Its **destructor** releases that same resource (closes the file, unlocks the mutex, deallocates
   memory).
3. The class maintains the **invariant**: if construction completes successfully, the resource is
   held; destruction always releases it.

This binding of resource lifetime to object lifetime is the single most important idiom in C++. It
is not a language feature — it is a convention that the language's destructor semantics make natural
and safe [N4950 §11.4.7].

## 1.2 Stack Unwinding Guarantee

The critical property that makes RAII work is **stack unwinding**. When an exception propagates out
of a scope, the C++ runtime calls the destructors of all automatic-storage-duration objects in that
scope before transferring control to the handler [N4950 §8.4.4].

```cpp
#include <cstdio>
#include <mutex>
#include <stdexcept>

void process_file(const char* path) {
    std::FILE* fp = std::fopen(path, "r");
    if (!fp) throw std::runtime_error("cannot open file");

    char buf[1024];
    std::fread(buf, 1, sizeof(buf), fp);
    // If this throws, fp is NEVER closed. Resource leak.

    std::fclose(fp);
}
```

With RAII, the resource is released regardless of how the scope is exited:

```cpp
#include <cstdio>
#include <stdexcept>

class FileHandle {
    std::FILE* fp_;
public:
    explicit FileHandle(const char* path) : fp_(std::fopen(path, "r")) {
        if (!fp_) throw std::runtime_error("cannot open file");
    }
    ~FileHandle() {
        if (fp_) std::fclose(fp_);
    }

    FileHandle(const FileHandle&) = delete;
    FileHandle& operator=(const FileHandle&) = delete;

    std::FILE* get() const noexcept { return fp_; }
};

void process_file(const char* path) {
    FileHandle fh(path);
    char buf[1024];
    std::fread(buf, 1, sizeof(buf), fh.get());
    // If fread or anything below throws, ~FileHandle() runs.
    // The file is always closed.
}
```

:::info Relevance RAII is why C++ programs do not need `try`/`finally` blocks. The destructor **is**
the `finally`. This is the mechanism that enables exception-safe code without manual cleanup. :::

## 1.3 MutexLock Example

```cpp
#include <mutex>

class MutexLock {
    std::mutex& mtx_;
public:
    explicit MutexLock(std::mutex& m) : mtx_(m) { mtx_.lock(); }
    ~MutexLock() { mtx_.unlock(); }

    MutexLock(const MutexLock&) = delete;
    MutexLock& operator=(const MutexLock&) = delete;
};

void thread_safe_operation(std::mutex& mtx) {
    MutexLock lock(mtx);
    // Critical section
    // If an exception is thrown here, ~MutexLock() unlocks the mutex.
}
```

:::tip In production code, prefer `std::lock_guard` or `std::scoped_lock` (C++17) over a hand-rolled
MutexLock. They are the standard library's RAII wrappers for mutexes. :::

## See Also

- [Unique Ownership (std::unique_ptr) and EBO](2_unique_ptr.md)
- [Shared Ownership (std::shared_ptr) and Control Block](3_shared_ptr.md)
