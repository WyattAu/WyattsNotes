---
title: Storage Duration
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: storage-duration
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

Every object in C++ has a **storage duration** that determines when its storage is allocated, when
it is released, and what its initial state is. Storage duration is orthogonal to scope -- an object
at block scope can have static storage duration, and a namespace-scope object always has static
storage duration. Understanding these four categories is essential for reasoning about lifetime,
thread safety, and program startup/shutdown behavior.

## The Four Storage Durations

| Storage Duration | Allocation Time        | Deallocation Time            | Initial State                                | Thread Safety                         |
| :--------------- | :--------------------- | :--------------------------- | :------------------------------------------- | :------------------------------------ |
| **Automatic**    | Block entry            | Block exit                   | Indeterminate (unless initialized)           | N/A (per-thread stack)                |
| **Static**       | Program startup        | Program termination          | Zero-initialized, then constant/dynamic init | Safe (guaranteed by [N4950 §6.6.3.2]) |
| **Thread**       | Thread creation        | Thread termination           | Zero-initialized, then constant/dynamic init | Per-thread copy                       |
| **Dynamic**      | `new` / `operator new` | `delete` / `operator delete` | Indeterminate                                | Must synchronize externally           |

[N4950 §6.7] defines these categories and their semantics.

## Automatic Storage Duration

Automatic storage duration is the default for local variables declared at block scope without
`static` or `thread_local`.

```cpp
void example() {
    int x;              // automatic storage duration, indeterminate value
    int y = 42;         // automatic storage duration, initialized to 42
    int z[100];         // automatic storage duration, all elements indeterminate

    static int s = 1;   // static storage duration (NOT automatic)
    thread_local int t; // thread storage duration (NOT automatic)
}
```

### Stack Behavior

Automatic storage is typically allocated on the call stack. The compiler generates prologue/epilogue
code that adjusts the stack pointer:

```cpp
struct Widget {
    int a, b, c;
    Widget() : a(1), b(2), c(3) {}
};

void process() {
    Widget w;  // stack pointer decremented by sizeof(Widget)
                // constructor runs
    // ... use w ...
}  // destructor runs
   // stack pointer incremented (storage reclaimed)
```

Key properties:

- **Zero-cost allocation/deallocation**: Stack pointer arithmetic, no allocator involvement.
- **Deterministic lifetime**: Destruction occurs at block exit in reverse order of construction
  [N4950 §6.7.7.2].
- **No fragmentation**: The stack is a contiguous LIFO structure.
- **Limited size**: Stack overflow is a real risk; default stack size is typically 1-8 MB depending
  on OS.

### Temporary Objects

Temporary objects (prvalues) also have automatic storage duration. Their lifetime is tied to the
full-expression in which they are created:

```cpp
std::string get_name() {
    return std::string("hello");  // temporary, destroyed at end of full-expression
}

void use() {
    const auto& ref = std::string("hello");  // lifetime extended to scope of ref
}
```

See [Reference Lifetime](../2_pointers_references_views/2_reference_lifetime.md) for details on
reference lifetime extension.

## Static Storage Duration

Objects with static storage duration persist for the entire lifetime of the program. This includes:

- Namespace-scope variables (globals)
- `static` class members
- Block-scope variables declared `static`
- `const` namespace-scope variables of integral or enumeration type (with constant initializer)

### Initialization Phases

Static initialization proceeds in two phases [N4950 §6.6.3.2]:

1. **Zero-initialization**: All static-duration objects are zero-initialized before any other
   initialization takes place.
2. **Constant initialization / Dynamic initialization**:
   - **Constant initialization**: Objects initialized with constant expressions or `constexpr`
     constructors. This happens at compile time (the object is placed in the binary's `.data` or
     `.rodata` segment).
   - **Dynamic initialization**: All other initialization. This happens during program startup.

```cpp
constexpr int compile_time = 42;           // constant initialization (in binary)
int runtime_val = compute_something();      // dynamic initialization
static std::string msg = "hello";           // dynamic initialization (std::string constructor)
```

### The Static Initialization Order Fiasco

This is one of the most insidious bugs in C++ [N4950 §6.6.3.2.2]. Within a single translation unit,
static objects are initialized in declaration order. But **across translation units, the order is
unspecified**.

```cpp
// file: config.cpp
struct Config {
    int timeout = 30;
};
Config& get_config() {
    static Config instance;  // Construct On First Use (safe)
    return instance;
}

// file: logger.cpp
struct Logger {
    Logger() {
        int t = get_config().timeout;  // BOOM if Config not yet constructed
        // ...
    }
};
Logger global_logger;  // dynamic initialization
```

If `logger.cpp` is initialized before `config.cpp`, `global_logger`'s constructor calls
`get_config()` before `Config::instance` is constructed. The behavior is undefined.

#### The Construct On First Use Idiom

The canonical solution uses a function-local `static` variable. Function-local statics are
initialized on first call, and the initialization is thread-safe as of C++11 [N4950 §6.7.6]:

```cpp
struct Database {
    Database(const std::string& conn_str) : connection(conn_str) {}
    std::string connection;
};

// Safe across all translation units:
Database& get_database() {
    static Database instance("postgresql://localhost/mydb");
    return instance;
}
```

The compiler generates a guard variable (e.g., `_ZGV15get_databaseE9instance`) and uses
`__cxa_guard_acquire` / `__cxa_guard_release` to ensure thread-safe, exactly-once initialization.

#### `constexpr` Initialization as a Solution

If the object can be `constexpr`, it is initialized at compile time and sidesteps the fiasco
entirely:

```cpp
struct Flags {
    int max_connections = 100;
    int timeout_ms = 5000;
};
constexpr Flags g_flags{};  // in binary, no dynamic init
```

## Thread-Local Storage Duration

`thread_local` variables have storage duration from thread creation to thread termination. Each
thread gets its own independent copy [N4950 §6.7.3].

```cpp
thread_local int thread_id = 0;
thread_local std::mt19937 rng{std::random_device{}()};

void worker(int id) {
    thread_id = id;  // each thread has its own copy
    std::cout << std::this_thread::get_id() << ": " << thread_id << "\n";
}
```

### TLS Mechanics

TLS can be implemented in several ways:

| Implementation                        | Description                                                | Trade-off                                  |
| :------------------------------------ | :--------------------------------------------------------- | :----------------------------------------- |
| **PEB/TLS slots** (Windows)           | Per-thread array of pointers, allocated on thread creation | Fast access, limited slots                 |
| **`__thread` / `thread_local`** (ELF) | Compiler reserves a TLS segment in the binary              | Fast access via `fs`/`gs` segment register |
| **`pthread_getspecific`**             | Runtime key-value lookup                                   | Slow, but unlimited slots                  |

### Initialization Order

Thread-local variables are initialized in the order they are defined within a single translation
unit, but the order across translation units is unspecified. The initialization happens when the
thread first accesses the variable (or at thread start for eagerly-initialized TLS).

```cpp
thread_local std::string thread_name = "unnamed";  // dynamic init on first use

void set_thread_name(const std::string& name) {
    thread_name = name;
}

std::string get_thread_name() {
    return thread_name;
}
```

### Performance Considerations

TLS access via the `fs` segment register on x86_64 is typically a single instruction
(`mov rax, fs:[offset]`), making it nearly as fast as regular variable access. However:

- TLS variables in shared libraries can be significantly slower if the TLS block is not
  pre-allocated.
- Excessive TLS usage increases per-thread memory overhead.

## Dynamic Storage Duration

Dynamic storage duration is obtained through allocation functions (`new`, `operator new`, `malloc`)
and released through deallocation functions (`delete`, `operator delete`, `free`).

### new and delete

```cpp
int* p = new int(42);          // allocate and initialize
int* arr = new int[100];       // allocate array
delete p;                       // deallocate single object
delete[] arr;                   // deallocate array
```

**Critical rule**: Matching `new`/`delete` and `new[]`/`delete[]` is required. Using `delete` on an
array or `delete[]` on a single object is undefined behavior [N4950 §6.7.5.5.4].

### Placement new

Placement `new` constructs an object at a specific memory address without allocating storage:

```cpp
#include <new>

alignas(std::max_align_t) unsigned char buffer[sizeof(std::string)];

void example() {
    std::string* s = new (buffer) std::string("hello");
    // s points into buffer, no heap allocation occurred

    s->~std::string();  // must manually call destructor
    // No delete -- no memory was allocated
}
```

Placement `new` is the foundation of custom allocators, memory pools, and the standard library
containers.

### `std::construct_at` (C++20)

`std::construct_at` is the modern, typesafe alternative to placement new [N4950 §20.10.3.2]:

```cpp
#include <memory>

alignas(std::string) unsigned char buffer[sizeof(std::string)];

void example() {
    std::string* s = std::construct_at(
        reinterpret_cast<std::string*>(buffer),
        "hello"
    );

    std::destroy_at(s);  // modern counterpart to manual destructor call
}
```

`std::construct_at` and `std::destroy_at` are preferred over placement new and manual destructor
calls because they handle `const` and reference types correctly and are more readable.

### Overloading `operator new` and `operator delete`

```cpp
class PoolAllocator {
    void* pool_;
public:
    PoolAllocator(size_t size) {
        pool_ = std::malloc(size);
    }

    static void* operator new(size_t sz) {
        return get_pool().allocate(sz);
    }

    static void operator delete(void* p, size_t sz) noexcept {
        get_pool().deallocate(p, sz);
    }
};
```

The overloaded `operator new` handles allocation; the constructor is still called by the compiler.
Similarly, `operator delete` handles deallocation, and the destructor runs before it.

### The Global Allocation Functions

| Function                            | Behavior                      | Customization        |
| :---------------------------------- | :---------------------------- | :------------------- |
| `operator new(size_t)`              | Single-object allocation      | Replaceable globally |
| `operator new[](size_t)`            | Array allocation              | Replaceable globally |
| `operator new(size_t, nothrow_t)`   | Returns `nullptr` on failure  | Replaceable globally |
| `operator new(size_t, align_val_t)` | C++17 aligned allocation      | Replaceable globally |
| `operator new(size_t, void* p)`     | Placement new (no allocation) | Not replaceable      |

## Storage Duration Summary Table

```cpp
void demonstrate_all_durations() {
    int auto_var = 1;                    // automatic: block scope
    static int static_var = 2;           // static: persists across calls
    thread_local int tls_var = 3;        // thread: per-thread copy
    int* dyn_var = new int(4);           // dynamic: heap, manual lifetime
    // ...
    delete dyn_var;
}
```

### Alignment in Dynamic Storage

`operator new` returns memory aligned for any type with a fundamental alignment (typically 16 bytes
on x86_64). For over-aligned types, C++17 provides `operator new(size_t, align_val_t)`:

```cpp
struct alignas(64) CacheLine {
    std::atomic<int> data[16];
};

CacheLine* cl = new CacheLine;  // C++17: uses aligned operator new automatically
```

For custom allocators, alignment must be handled explicitly:

```cpp
void* aligned_alloc(size_t alignment, size_t size) {
    void* p = nullptr;
    if (posix_memalign(&p, alignment, size) != 0) {
        throw std::bad_alloc();
    }
    return p;
}
```

### Array new and delete

```cpp
Widget* arr = new Widget[10];
delete[] arr;  // must use delete[] for arrays

// What delete[] actually does:
// 1. Calls ~Widget() on arr[9], arr[8], ..., arr[0] (reverse order)
// 2. Calls operator delete[](arr) to free the memory
```

The array size is typically stored by the allocator alongside the allocation (a "cookie" before the
array data). This is why `new[]`/`delete[]` must be matched.

### Memory Leaks and Ownership

The most common bug with dynamic storage duration is forgetting to `delete`:

```cpp
void leak() {
    Widget* w = new Widget{};
    // ... exception thrown, w is never deleted
}
```

This is why **smart pointers** and RAII are essential. See **Module 10 (Ownership and RAII)**.

```cpp
void no_leak() {
    auto w = std::make_unique<Widget>();
    // ... exception thrown, unique_ptr destructor calls delete
}
```

## Storage Duration and `const`

The `const` qualifier interacts differently with each storage duration:

```cpp
const int global = 42;              // static storage, internal linkage
extern const int shared = 42;       // static storage, external linkage

void func() {
    const int local = 42;            // automatic storage, value cannot change
    static const int persistent = 42; // static storage, persists across calls

    const int* p = new const int(42); // dynamic storage, must delete with const pointer
    delete p;
}
```

### `constexpr` and Storage Duration

`constexpr` variables at namespace scope have static storage duration and are placed directly in the
binary's read-only segment:

```cpp
constexpr int table[] = {1, 2, 3, 4, 5};
// Placed in .rodata, no runtime initialization needed
```

## Storage Duration in Practice

### Embedded Systems

In embedded firmware, dynamic storage is often avoided entirely due to heap fragmentation:

```cpp
// Embedded pattern: pool allocator with static storage
class ObjectPool {
    static constexpr size_t POOL_SIZE = 32;
    alignas(max_align_t) unsigned char buffer_[POOL_SIZE * sizeof(Widget)];
    bool used_[POOL_SIZE] = {};
public:
    Widget* allocate() {
        for (size_t i = 0; i < POOL_SIZE; ++i) {
            if (!used_[i]) {
                used_[i] = true;
                return std::construct_at(reinterpret_cast<Widget*>(buffer_ + i * sizeof(Widget)));
            }
        }
        return nullptr;
    }

    void deallocate(Widget* p) {
        size_t idx = reinterpret_cast<unsigned char*>(p) - buffer_;
        std::destroy_at(p);
        used_[idx / sizeof(Widget)] = false;
    }
};
```

### Thread Safety and Storage Duration

| Storage Duration | Thread Safety for Initialization | Thread Safety for Access     |
| :--------------- | :------------------------------- | :--------------------------- |
| Automatic        | N/A (stack is per-thread)        | Must synchronize shared data |
| Static           | Thread-safe (C++11 guarantee)    | Must synchronize writes      |
| Thread           | Thread-safe per-thread init      | Inherently per-thread        |
| Dynamic          | Not thread-safe                  | Must synchronize externally  |

### Static Destruction Order

Static objects are destroyed in reverse order of construction. But across translation units, the
construction order is unspecified, meaning the destruction order is also unspecified. Objects from
different TUs may reference each other during destruction, leading to use-after-free:

```cpp
// TU1: Logger constructed first (by chance)
struct Logger {
    ~Logger() { std::cout << "Logger destroyed\n"; }
};
Logger global_logger;

// TU2: Config constructed second
struct Config {
    ~Config() { std::cout << "Config destroyed\n"; }
};
Config global_config;

// Destruction order: Config first, then Logger
// If Logger's destructor uses Config, it's accessing a destroyed object
```

The Construct On First Use idiom also solves the destruction order problem: function-local statics
are destroyed in reverse order of their **first access**, not their declaration.

## Common Pitfalls

### 1. Returning References to Automatic Variables

```cpp
const int& bad() {
    int local = 42;
    return local;  // dangling reference: local is destroyed at function exit
}
```

The returned reference binds to storage that no longer exists. Undefined behavior.

### 2. Using `delete` Instead of `delete[]` for Arrays

```cpp
int* arr = new int[10];
delete arr;     // UB: only calls destructor for first element, wrong operator delete
delete[] arr;   // correct: calls all destructors, calls operator delete[]
```

### 3. Forgetting to Destroy Placement-new Objects

```cpp
void* buf = operator new(sizeof(Widget));
Widget* w = new (buf) Widget;
// Missing: w->~Widget();
operator delete(buf);  // destructor never ran -- resource leak
```

### 4. Thread-Local Initialization with Dependencies

```cpp
thread_local Logger& get_logger() {
    // Safe: function-local static, initialized on first call per thread
    static Logger instance;
    return instance;
}

thread_local Logger logger;  // Dangerous: init order across TUs unspecified
```

### 5. Dynamic Exception in `operator new`

```cpp
int* p = new (std::nothrow) int(42);
if (!p) {
    // handle allocation failure without throwing
}
```

Use the `nothrow` variant when exceptions are undesirable.

## See Also

- **Module 7 (Data Layout)**: How storage maps to physical memory and struct layout rules
- **Module 8 (Pointers, References, Views)**: Pointer lifetime, dangling references, reference
  binding
- **Module 10 (Ownership and RAII)**: RAII pattern for managing dynamic storage duration
- **Module 13 (Error Handling)**: Exception safety during object construction and destruction
