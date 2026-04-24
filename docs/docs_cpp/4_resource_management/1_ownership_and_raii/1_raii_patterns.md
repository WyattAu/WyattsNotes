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
the `finally`. This is the mechanism that enables exception-safe code without manual cleanup.
:::

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
MutexLock. They are the standard library's RAII wrappers for mutexes.
:::

## 1.4 Standard Library RAII Wrappers

The C++ standard library provides RAII wrappers for the most common resource types. Using these
instead of hand-rolled wrappers is preferred — they are well-tested, well-documented, and handle
edge cases you might forget.

### `std::lock_guard` and `std::scoped_lock`

Mutex locking is the canonical RAII use case in concurrent code [N4950 §33.4.3]:

```cpp
#include <mutex>
#include <thread>
#include <vector>

std::mutex mtx;
int shared_data = 0;

void safe_increment() {
    std::lock_guard<std::mutex> lock(mtx);
    // mtx.lock() called in lock_guard constructor
    ++shared_data;
    // mtx.unlock() called in lock_guard destructor, even if this scope
    // is exited via exception, return, or break
}

void safe_multiple_locks(std::mutex& m1, std::mutex& m2) {
    // C++17: scoped_lock acquires multiple locks with deadlock avoidance
    std::scoped_lock lock(m1, m2);
    // Uses a deadlock-free algorithm (similar to std::lock) internally
    // All locks released together on scope exit
}
```

### `std::unique_ptr` and `std::shared_ptr`

Smart pointers are RAII wrappers for heap memory [N4950 §20.11]:

```cpp
#include <memory>

void unique_ptr_ownership() {
    auto ptr = std::make_unique<int[]>(1024);
    // Resource: heap-allocated array of 1024 ints
    // Acquisition: std::make_unique (operator new[])
    // Release: ~unique_ptr calls operator delete[]
    // Exception-safe: even if code below throws, the array is freed
}

void shared_ptr_ownership() {
    auto ptr = std::make_shared<double>(3.14);
    // Resource: heap-allocated double + control block
    // Release: when last shared_ptr is destroyed
}
```

### `std::string`, `std::vector`, `std::fstream`

Standard containers and file streams are RAII types. They acquire resources (memory, file
descriptors) in their constructors and release them in their destructors [N4950 §22.3, §23.3,
§30.4]:

```cpp
#include <fstream>
#include <vector>

void container_and_stream_raii() {
    std::vector<int> v{1, 2, 3};
    // Memory acquired in constructor, released in destructor

    std::ofstream ofs("output.txt");
    // File opened in constructor, closed in destructor
    ofs << v[0];
    // Even if ofs.close() is never called, the file is closed when ofs
    // goes out of scope
}
```

## 1.5 Socket Wrapper Example

Network sockets are system resources that must be explicitly closed. A raw `socket()` call without
RAII is a leak waiting to happen:

```cpp
#include <sys/socket.h>
#include <unistd.h>
#include <stdexcept>

class Socket {
    int fd_;
public:
    explicit Socket(int domain, int type, int protocol = 0)
        : fd_(::socket(domain, type, protocol))
    {
        if (fd_ < 0) throw std::runtime_error("socket() failed");
    }

    ~Socket() {
        if (fd_ >= 0) ::close(fd_);
    }

    Socket(const Socket&) = delete;
    Socket& operator=(const Socket&) = delete;

    Socket(Socket&& other) noexcept : fd_(other.fd_) {
        other.fd_ = -1;
    }

    Socket& operator=(Socket&& other) noexcept {
        if (this != &other) {
            if (fd_ >= 0) ::close(fd_);
            fd_ = other.fd_;
            other.fd_ = -1;
        }
        return *this;
    }

    int fd() const noexcept { return fd_; }

    void bind(const struct sockaddr* addr, socklen_t len) {
        if (::bind(fd_, addr, len) < 0)
            throw std::runtime_error("bind() failed");
    }

    void listen(int backlog = 128) {
        if (::listen(fd_, backlog) < 0)
            throw std::runtime_error("listen() failed");
    }

    Socket accept() {
        struct sockaddr_storage addr{};
        socklen_t len = sizeof(addr);
        int client_fd = ::accept(fd_, reinterpret_cast<sockaddr*>(&addr), &len);
        if (client_fd < 0) throw std::runtime_error("accept() failed");
        return Socket(client_fd);
    }

private:
    explicit Socket(int fd) : fd_(fd) {}
};
```

:::info The move constructor and move assignment operator transfer ownership of the file descriptor.
The moved-from `Socket` has `fd_ == -1`, so its destructor is a no-op. This is the standard pattern
for move-only RAII types that wrap non-copyable OS resources [N4950 §11.4.7].
:::

## 1.6 Database Connection Wrapper

Database connections are another resource that benefits from RAII. A connection that is not
explicitly closed leaks server-side resources (file descriptors, transaction state, connection pool
slots):

```cpp
#include <stdexcept>

class DbConnection {
    void* handle_;  // opaque database handle (e.g., sqlite3*, MYSQL*)
    bool committed_ = false;
public:
    explicit DbConnection(const char* conn_str)
        : handle_(db_connect(conn_str))
    {
        if (!handle_) throw std::runtime_error("database connection failed");
    }

    ~DbConnection() {
        if (handle_) {
            if (!committed_) db_rollback(handle_);
            db_disconnect(handle_);
        }
    }

    DbConnection(const DbConnection&) = delete;
    DbConnection& operator=(const DbConnection&) = delete;

    void execute(const char* sql) {
        if (db_execute(handle_, sql) != 0)
            throw std::runtime_error("SQL execution failed");
    }

    void commit() {
        db_commit(handle_);
        committed_ = true;
    }

private:
    static void* db_connect(const char* conn_str);
    static void db_disconnect(void* handle);
    static int db_execute(void* handle, const char* sql);
    static void db_commit(void* handle);
    static void db_rollback(void* handle);
};
```

The destructor automatically rolls back uncommitted transactions and disconnects. Even if an
exception propagates out of the function that created the connection, the database is left in a
consistent state.

## 1.7 The ScopeGuard Idiom

Sometimes you need to run cleanup code at scope exit that does not fit neatly into a named class.
The **ScopeGuard** idiom provides a general-purpose RAII wrapper for arbitrary cleanup actions:

```cpp
#include <utility>

template <typename F>
class ScopeGuard {
    F func_;
    bool active_ = true;
public:
    explicit ScopeGuard(F&& f) : func_(std::forward<F>(f)) {}
    ~ScopeGuard() { if (active_) func_(); }

    ScopeGuard(ScopeGuard&& other) noexcept
        : func_(std::move(other.func_))
        , active_(other.active_)
    {
        other.active_ = false;
    }

    ScopeGuard(const ScopeGuard&) = delete;
    ScopeGuard& operator=(const ScopeGuard&) = delete;

    void release() noexcept { active_ = false; }
};

// Deduction guide (C++17)
template <typename F>
ScopeGuard(F) -> ScopeGuard<F>;

// Convenience macro for the common case
#define SCOPE_GUARD(expr) \
    ScopeGuard ANONYMOUS_VARIABLE(scope_guard_)([&]() noexcept { expr; })

#define ANONYMOUS_VARIABLE(prefix) prefix ## __LINE__
```

```cpp
#include <cstdio>

void scope_guard_example() {
    std::FILE* fp = std::fopen("data.bin", "rb");
    if (!fp) throw std::runtime_error("cannot open file");

    SCOPE_GUARD(std::fclose(fp));

    char header[4];
    if (std::fread(header, 1, 4, fp) != 4)
        throw std::runtime_error("truncated header");

    // If any code below throws, fclose(fp) is called automatically.
    // The ScopeGuard is released at the end of the scope.

    process_header(header);
}
```

C++23 introduces `std::unexpected` and the Deducing `this` feature, but `std::scope_exit` (a
generalized ScopeGuard) was not adopted into C++23. Use the implementation above or a library like
[gsl::finally](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines) for production code.

## 1.8 RAII and Exception Safety Guarantees

RAII is the mechanism that makes C++'s three exception safety guarantees possible [N4950 §13.2]:

| Guarantee    | Description                                                                    | RAII Role                                                                                                                                          |
| ------------ | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **No-throw** | The operation never throws.                                                    | RAII destructors are implicitly `noexcept` (since C++11). If a destructor throws during stack unwinding, `std::terminate` is called [N4950 §14.4]. |
| **Strong**   | If the operation throws, the state is rolled back to before the operation.     | RAII objects created during the operation are destroyed during unwinding, automatically releasing any resources they acquired.                     |
| **Basic**    | If the operation throws, no resources are leaked and invariants are preserved. | RAII ensures that all resources are released even if the operation fails partway through.                                                          |

RAII enables the strong guarantee by default: if an exception propagates out of a function, every
RAII object in that function's scope is destroyed, releasing every resource that was acquired. No
manual `try`/`catch`/`finally` is needed.

```cpp
void transfer(Account& from, Account& to, int amount) {
    // Both locks are RAII. If credit() throws, ~lock_guard unlocks
    // both mutexes. No deadlock, no leaked lock.
    std::scoped_lock lock(from.mtx, to.mtx);
    from.debit(amount);   // might throw
    to.credit(amount);    // might throw — but debit already succeeded
    // Strong guarantee violated: if credit throws, debit is not rolled back.
    // Fix: use a journal/log that is committed only after both succeed.
}
```

## 1.9 RAII vs Garbage Collection

RAII and garbage collection (GC) solve related but different problems:

| Property                      | RAII                                | Garbage Collection                                                         |
| ----------------------------- | ----------------------------------- | -------------------------------------------------------------------------- |
| **Deterministic destruction** | Yes — destructor runs at scope exit | No — finalizer runs at GC's discretion                                     |
| **Resource types**            | All (memory, files, sockets, locks) | Memory only (finalizers are unreliable for other resources)                |
| **Performance**               | Zero overhead (compile-time)        | Runtime overhead (pause times, GC threads)                                 |
| **Memory leaks**              | Impossible with correct RAII        | Possible (unreferenced but unreachable objects, reference counting cycles) |
| **Latency**                   | Bounded (destructor cost)           | Unbounded (GC pause times)                                                 |

RAII is strictly more general than GC. GC only manages memory; RAII manages **any** resource with
deterministic cleanup. A GC language like Java still needs `try`-with-resources or `using` blocks
for non-memory resources (files, sockets, locks). In C++, RAII handles all of these uniformly.

:::info The C++ destructor model is what makes RAII possible. Objects with automatic storage
duration are destroyed in reverse order of construction when the scope exits, whether by normal flow
of control or by exception propagation [N4950 §6.7.2]. This is a language guarantee, not a
convention.
:::

## 1.10 RAII Rule of Thumb

**Every resource acquisition should be wrapped in an RAII type.** If you write a raw call to `new`,
`malloc`, `fopen`, `socket`, `pthread_mutex_lock`, `lock`, `mmap`, or any other resource acquisition
function, ask yourself: "What releases this resource, and when?" If the answer is "a manual call
later in the function," you have a potential leak.

The standard library provides RAII wrappers for most common resources:

| Resource             | Raw Acquisition                      | RAII Wrapper                                     |
| -------------------- | ------------------------------------ | ------------------------------------------------ |
| Heap memory          | `new`, `malloc`                      | `std::unique_ptr`, `std::shared_ptr`, containers |
| File descriptors     | `fopen`, `open`                      | `std::fstream`, `std::FILE` wrapper              |
| Mutexes              | `pthread_mutex_lock`, `mtx.lock()`   | `std::lock_guard`, `std::scoped_lock`            |
| Dynamic libraries    | `dlopen`                             | `std::unique_ptr` with `dlclose` deleter         |
| Memory mapping       | `mmap`                               | `std::unique_ptr` with `munmap` deleter          |
| Sockets              | `socket`                             | Custom `Socket` class (see §1.5)                 |
| Database connections | `sqlite3_open`, `mysql_real_connect` | Custom connection class (see §1.6)               |

## Common Pitfalls

**Forgetting to delete copy constructor and assignment operator.** RAII types that own a resource
must be non-copyable (or implement deep copy). If you allow copying, two objects will try to release
the same resource — double-free or double-close. Always `= delete` the copy operations unless you
have a deliberate deep-copy strategy:

```cpp
class BadRAII {
    std::FILE* fp_;
public:
    explicit BadRAII(const char* path) : fp_(std::fopen(path, "r")) {}
    ~BadRAII() { std::fclose(fp_); }
    // Copy constructor and assignment operator are NOT deleted!
    // Copying a BadRAII causes double-close: UB.
};
```

**Forgetting virtual destructors in polymorphic hierarchies.** If you delete a derived object
through a base pointer and the base class destructor is not `virtual`, only the base destructor runs
— the derived destructor is never called, and derived resources leak [N4950 §11.4.7]:

```cpp
class Base {
public:
    ~Base() { /* releases base resources */ }
    // NOT virtual — derived destructors won't run when deleted via Base*
};

class Derived : public Base {
    std::unique_ptr<int[]> data_;
public:
    ~Derived() { /* releases data_ — BUT THIS NEVER RUNS via Base* delete */ }
};

void leak() {
    Base* p = new Derived();
    delete p;  // ~Base() runs, ~Derived() does NOT run. data_ is leaked.
}
```

**Using `new`/`delete` directly instead of smart pointers.** Raw `new`/`delete` pairs are not
exception-safe. If an exception occurs between `new` and `delete`, the memory is leaked. Always use
`std::make_unique` or `std::make_shared`:

```cpp
// Bad: not exception-safe
auto* obj = new Widget();
do_something_that_might_throw();
delete obj;  // never reached if do_something_that_might_throw() throws

// Good: exception-safe
auto obj = std::make_unique<Widget>();
do_something_that_might_throw();
// ~unique_ptr runs regardless
```

**Throwing in destructors.** Destructors are implicitly `noexcept` in C++11 and later. If a
destructor throws during stack unwinding (while another exception is active), `std::terminate` is
called [N4950 §14.4]. If cleanup code in a destructor might throw, catch the exception inside the
destructor:

```cpp
class SafeResource {
public:
    ~SafeResource() noexcept {
        try {
            cleanup();  // might throw
        } catch (...) {
            // Log the error, but don't propagate
        }
    }
};
```

## See Also

- [Unique Ownership (std::unique_ptr) and EBO](2_unique_ptr.md)
- [Shared Ownership (std::shared_ptr) and Control Block](3_shared_ptr.md)
- [Weak Pointers and Cyclic Reference Breaking](4_weak_ptr.md)
- [Common Pitfalls](5_custom_deleters.md)

:::

:::

:::

:::
