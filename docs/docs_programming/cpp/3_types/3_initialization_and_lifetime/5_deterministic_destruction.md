---
title: Deterministic Destruction
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: deterministic-destruction
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

C++ guarantees that destructors run at well-defined points in program execution. Unlike Java
finalizers or C# `IDisposable`, C++ destruction is deterministic, automatic, and intimately tied to
scope. This property is the foundation of RAII -- the single most important resource management
idiom in the language. Understanding the exact mechanics of destruction, including order guarantees,
exception interactions, and partial construction scenarios, is essential for writing correct systems
software.

## Destructor Semantics

A destructor is a special member function invoked when an object's lifetime ends [N4950 §11.4.7].
The compiler generates an implicit destructor for every class unless the user declares one.

```cpp
class FileHandle {
    int fd_;
public:
    explicit FileHandle(const char* path) : fd_(::open(path, O_RDONLY)) {
        if (fd_ < 0) throw std::runtime_error("failed to open");
    }
    ~FileHandle() noexcept {
        if (fd_ >= 0) ::close(fd_);
    }
    FileHandle(const FileHandle&) = delete;
    FileHandle& operator=(const FileHandle&) = delete;
};
```

### When Destructors Run

1. **Block scope exit** (normal or exception): Local automatic objects destroyed in reverse order of
   construction.
2. **`delete` expression**: The pointed-to object is destroyed before deallocation.
3. **Program termination**: Static and thread-local objects destroyed in reverse order of
   construction.
4. **Container operations**: `vector::erase`, `vector::clear`, `map::erase` destroy the removed
   elements.
5. **Algorithm operations**: `std::destroy`, `std::destroy_n`, `std::destroy_at`.

### The Reverse-Construction-Order Guarantee

[N4950 §6.7.7.2] guarantees that objects are destroyed in the exact reverse order of their
construction:

```cpp
struct Tracker {
    const char* name;
    Tracker(const char* n) : name(n) { std::cout << "ctor " << name << "\n"; }
    ~Tracker() { std::cout << "dtor " << name << "\n"; }
};

void example() {
    Tracker a("a");
    Tracker b("b");
    Tracker c("c");
}
// Output:
// ctor a
// ctor b
// ctor c
// dtor c
// dtor b
// dtor a
```

This is not merely a convention -- it is a semantic guarantee of the language. For resource
management, this means inner resources are always released before outer resources, preventing
dangling references.

## Stack Unwinding During Exception Propagation

When an exception is thrown, the runtime unwinds the stack, calling destructors for all automatic
objects in each frame until a matching `catch` is found [N4950 §14.4].

```cpp
void process() {
    std::lock_guard<std::mutex> lock(mutex);
    std::fstream file("data.bin", std::ios::binary);
    std::vector<Record> records;

    load_records(file, records);
    validate(records);
    // If validate() throws:
    // 1. records' destructor runs (frees memory)
    // 2. file's destructor runs (closes file)
    // 3. lock_guard's destructor runs (releases mutex)
    // THEN the exception propagates to the caller
}
```

### Destructors Are Called Even When No `catch` Exists

```cpp
void inner() {
    FileHandle f("log.txt");
    throw std::runtime_error("error");
    // f.~FileHandle() runs BEFORE the exception escapes inner()
}

void outer() {
    inner();  // throws, but FileHandle was already cleaned up
}
```

### `std::uncaught_exception` and `std::uncaught_exceptions`

```cpp
#include <exception>

class SafeLogger {
    bool throwing_ = false;
public:
    void log(const std::string& msg) {
        throwing_ = std::uncaught_exceptions() > 0;
        std::cout << msg << "\n";
    }
    ~SafeLogger() {
        if (!throwing_) {
            // safe to throw or do complex operations
        }
    }
};
```

Use `std::uncaught_exceptions()` (C++17, note the plural) instead of `std::uncaught_exception()` to
correctly handle nested exceptions.

## What Happens When Destructors Throw

If a destructor throws during stack unwinding (i.e., while another exception is already active),
`std::terminate` is called [N4950 §14.4]:

```cpp
struct Bad {
    ~Bad() {
        throw std::runtime_error("destructor threw");  // DANGEROUS
    }
};

void example() {
    try {
        Bad b;
        throw std::runtime_error("original exception");  // stack unwinding begins
        // b.~Bad() throws -> std::terminate() called
    } catch (const std::exception& e) {
        // Never reached if destructor throws during unwinding
    }
}
```

### The Implicit `noexcept` Guarantee

In C++11 and later, destructors are implicitly `noexcept` unless explicitly specified otherwise
[N4950 §14.5]:

```cpp
struct Widget {
    ~Widget() = default;           // implicitly noexcept
    ~Widget() noexcept(false);     // explicitly NOT noexcept (dangerous)
};

struct Danger {
    ~Danger() noexcept(false) {
        throw std::runtime_error("boom");
    }
};
```

The implicit `noexcept` means the compiler will call `std::terminate` if your destructor tries to
throw (unless you opt out with `noexcept(false)`). This is a deliberate language design decision to
prevent the two-active-exceptions problem.

### Safe Destructor Pattern

```cpp
class Connection {
    Socket socket_;
    bool closed_ = false;
public:
    ~Connection() noexcept {
        try {
            if (!closed_) {
                socket_.close();
            }
        } catch (...) {
            // Swallow the exception -- destructors must not throw
            // Log to stderr or a crash reporter
            std::cerr << "Exception in Connection destructor\n";
        }
    }
};
```

## Partial Construction and Member Destruction

If a constructor throws, the destructor is **not** called for the object itself (because it was
never fully constructed). However, destructors **are** called for all fully-constructed subobjects
(base classes and data members) [N4950 §11.9.3]:

```cpp
struct MemberA {
    ~MemberA() { std::cout << "~MemberA\n"; }
};

struct MemberB {
    MemberB() { throw std::runtime_error("B failed"); }
    ~MemberB() { std::cout << "~MemberB\n"; }
};

class Composite {
    MemberA a;   // constructed first
    MemberB b;   // throws during construction
public:
    Composite() : a(), b() {}
    ~Composite() { std::cout << "~Composite\n"; }
};

void test() {
    try {
        Composite c;
    } catch (...) {
        // MemberA was fully constructed -> ~MemberA called
        // MemberB threw during construction -> ~MemberB NOT called
        // Composite was never fully constructed -> ~Composite NOT called
    }
}
// Output: ~MemberA
```

### Member Construction and Destruction Order

Members are constructed in declaration order (not initializer list order) and destroyed in reverse:

```cpp
class Widget {
    Logger logger_;      // constructed first
    Buffer buffer_;      // constructed second
    Network net_;        // constructed third
public:
    Widget() : logger_("widget"), buffer_(1024), net_("localhost") {}
    ~Widget() {
        // Destruction order: net_, buffer_, logger_ (reverse of declaration)
    }
};
```

**Warning**: The member initializer list can list members in any order, but construction always
follows declaration order. This is a common source of bugs when initialization order matters:

```cpp
class Bad {
    int size_ = compute_size();  // computed from data_
    std::vector<int> data_;      // but data_ is constructed AFTER size_
public:
    Bad() : data_(size_) {}      // data_ initialized with size_, but size_ was
                                 // initialized with compute_size() which may
                                 // depend on data_ being constructed first
};
```

## Virtual Destructors and Inheritance

### The slicing problem without virtual destructors

```cpp
struct Base {
    ~Base() { std::cout << "~Base\n"; }
};

struct Derived : Base {
    int* data_ = new int[100];
    ~Derived() { delete[] data_; std::cout << "~Derived\n"; }
};

void leak() {
    Base* p = new Derived();
    delete p;  // ONLY ~Base is called! ~Derived is NOT called!
               // data_ leaks!
}
```

**Rule**: If a class has any virtual functions, it must have a virtual destructor. Deleting a
derived object through a base pointer without a virtual destructor is undefined behavior [N4950
§7.6.2.5.2].

### Correct Version

```cpp
struct Base {
    virtual ~Base() { std::cout << "~Base\n"; }
};

struct Derived : Base {
    int* data_ = new int[100];
    ~Derived() override { delete[] data_; std::cout << "~Derived\n"; }
};

void no_leak() {
    Base* p = new Derived();
    delete p;  // ~Derived called, then ~Base
}
// Output: ~Derived ~Base
```

### Destruction Order in Inheritance Hierarchies

```cpp
struct A {
    ~A() { std::cout << "~A\n"; }
};
struct B : A {
    ~B() { std::cout << "~B\n"; }
};
struct C : B {
    ~C() { std::cout << "~C\n"; }
};

void test() {
    C c;
}
// Output: ~C ~B ~A
```

Destruction proceeds from most-derived to base class, in reverse of construction order.

### `override` for Destructors

```cpp
struct Base {
    virtual ~Base() = default;
};

struct Derived : Base {
    ~Derived() override = default;  // C++11: override on destructors
};
```

The `override` specifier catches signature mismatches, though for destructors this is mainly for
consistency.

## Union Destructors

In C++11 and later, unions can have members with non-trivial special member functions, but the union
itself must define how to handle destruction:

```cpp
struct StringWrapper {
    std::string s;
    ~StringWrapper() { s.~basic_string(); }  // explicitly destroy
};

union Value {
    int i;
    double d;
    StringWrapper sw;  // non-trivial destructor

    Value() {}         // must define constructor
    ~Value() {}        // must define destructor (even if empty for some variants)

    void destroy() {
        switch (tag_) {
            case Tag::String: sw.~StringWrapper(); break;
            default: break;
        }
    }

private:
    enum class Tag { Int, Double, String } tag_;
};
```

### `std::variant` as a Safer Alternative

```cpp
#include <variant>

using Value = std::variant<int, double, std::string>;

Value v = std::string("hello");
// ~string called automatically when v is assigned a different type or destroyed
```

## `std::destroy_at`, `std::destroy`, `std::destroy_n`

C++17 introduced standardized destruction algorithms [N4950 §20.10.3]:

### `std::destroy_at`

```cpp
#include <memory>

alignas(std::string) unsigned char buffer[sizeof(std::string)];

void example() {
    std::string* s = std::construct_at(reinterpret_cast<std::string*>(buffer), "hello");
    std::cout << *s << "\n";
    std::destroy_at(s);  // calls s->~string()
}
```

### `std::destroy_n`

```cpp
#include <memory>

void destroy_array(int* p, size_t n) {
    std::destroy_n(p, n);  // calls destructor on p[0] through p[n-1]
}

void destroy_range(int* first, int* last) {
    std::destroy(first, last);  // calls destructor on [first, last)
}
```

### Custom Allocator Use Case

```cpp
template<typename T, typename Allocator>
class Vector {
    T* data_;
    size_t size_;
    Allocator alloc_;
public:
    ~Vector() {
        if (data_) {
            std::destroy_n(data_, size_);
            alloc_.deallocate(data_, size_);
        }
    }
};
```

## RAII Connection

RAII (Resource Acquisition Is Initialization) depends entirely on deterministic destruction. The
pattern is:

1. **Acquire** a resource in a constructor.
2. **Release** the resource in the destructor.
3. Rely on scope-based destruction for cleanup.

```cpp
class ScopedLock {
    std::mutex& mtx_;
public:
    explicit ScopedLock(std::mutex& m) : mtx_(m) { mtx_.lock(); }
    ~ScopedLock() { mtx_.unlock(); }
    ScopedLock(const ScopedLock&) = delete;
    ScopedLock& operator=(const ScopedLock&) = delete;
};

void critical_section() {
    ScopedLock lock(mutex);  // acquire
    // ... critical code ...
    // lock.~ScopedLock() runs at block exit, even if exception thrown
}
```

See **Module 10 (Ownership and RAII)** for comprehensive coverage of this pattern.

## Java/C# Finalizers: A Fundamental Difference

Java `finalize()` (deprecated in Java 9, removed in Java 18) and C# finalizers are fundamentally
different from C++ destructors:

| Property              | C++ Destructor                       | Java Finalizer                 | C# Finalizer                   |
| :-------------------- | :----------------------------------- | :----------------------------- | :----------------------------- |
| **When called**       | Deterministic (scope exit, `delete`) | Non-deterministic (GC decides) | Non-deterministic (GC decides) |
| **Order guarantee**   | Reverse of construction              | No ordering guarantee          | No ordering guarantee          |
| **Exception safety**  | Terminates if throws during unwind   | Ignored                        | Ignored                        |
| **Performance**       | Zero overhead (same as scope exit)   | Significant GC overhead        | Significant GC overhead        |
| **Guaranteed to run** | Yes (for automatic/static storage)   | No (GC may never run)          | No (GC may never run)          |

### Why Java/C# Need `using` / `try-with-resources`

Because finalizers are non-deterministic, Java and C# provide explicit disposal patterns:

```java
// Java try-with-resources
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    return br.readLine();
}
// br.close() called at end of try block -- analogous to C++ destructor
```

```csharp
// C# using statement
using (var stream = new FileStream("file.txt", FileMode.Open)) {
    // use stream
}
// stream.Dispose() called at end of using block
```

These patterns exist specifically to replicate C++'s deterministic destruction in garbage-collected
languages. C++ has this guarantee natively.

## Common Pitfalls

### 1. Throwing from a Destructor

```cpp
struct Bad {
    ~Bad() { throw std::logic_error("oops"); }
    // During normal destruction: exception propagates (legal but dangerous)
    // During stack unwinding: std::terminate (fatal)
};
```

### 2. Calling `delete` on Base Without Virtual Destructor

```cpp
struct Base { /* no virtual destructor */ };
struct Derived : Base { std::vector<int> data; ~Derived() {} };

Base* p = new Derived();
delete p;  // UB: ~Derived not called, data leaks
```

### 3. Accessing Dead Objects After Destruction

```cpp
int& dangling() {
    int x = 42;
    return x;  // x destroyed when function returns
}  // reference returned is dangling

void use() {
    int& r = dangling();
    std::cout << r << "\n";  // UB: reading destroyed object
}
```

### 4. Partial Construction Leaves Members Uninitialized

```cpp
struct Widget {
    std::vector<int> data;
    std::mutex mtx;
    Widget(size_t n) {
        if (n > MAX_SIZE) throw std::runtime_error("too large");
        data.resize(n);
    }
    // If n > MAX_SIZE: data is default-constructed (empty), mtx is default-constructed
    // Then data.resize throws, ~mtx runs, ~data runs, ~Widget does NOT run
};
```

### 5. Destroying an Array with `delete` Instead of `delete[]`

```cpp
struct S { ~S() { std::cout << "~S\n"; } };

S* arr = new S[3];
delete arr;     // UB: only ~S called for first element
delete[] arr;   // correct: ~S called for all 3 elements
```

### 6. Order-Dependent Destruction in Members

```cpp
class Logger {
    std::ofstream file_;    // destroyed second
    std::string prefix_;    // destroyed first
    // If ~Logger() logs to file_, it must use prefix_
    // But prefix_ is destroyed BEFORE file_ -- must not use prefix_ in destructor
};
```

## See Also

- **Module 8 (Pointers, References, Views)**: Dangling references from destroyed objects
- **Module 9.1 (Storage Duration)**: When storage is released for each duration category
- **Module 9.2 (Uniform Initialization)**: Constructor invocation during object creation
- **Module 10 (Ownership and RAII)**: The RAII pattern built on deterministic destruction
- **Module 13 (Error Handling)**: Exception safety guarantees and stack unwinding
