---
title: C-Interop and FFI
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: c-interop-and-ffi
---

# C-Interop and FFI

C++ uses **name mangling** to encode type information into function symbols, enabling overloading. C
does not mangle names — each function has a single symbol matching its source name. Interoperating
between C and C++ requires careful management of linkage, data layouts, and exception boundaries.

## 5.1 `extern "C"` Linkage [N4950 §9.9]

C++ uses **name mangling** to encode type information into function symbols, enabling overloading. C
does not mangle names — each function has a single symbol matching its source name. The `extern "C"`
linkage specification disables name mangling, making a C++ function callable from C (and vice
versa).

```cpp
// mathlib.cpp
extern "C" {

// These functions are exported with unmangled C linkage:
// Symbol names: "add" and "multiply" (no type encoding)
int add(int a, int b) {
    return a + b;
}

double multiply(double a, double b) {
    return a * b;
}

}  // extern "C"

// Without extern "C", these would have mangled names:
//   _Z3addii      (add(int, int))
//   _Z8multiplydd (multiply(double, double))
int subtract(int a, int b) {
    return a - b;
}
```

## 5.2 Calling C from C++

The standard C library headers are wrapped with `extern "C"` by the C++ standard library headers.
When you `#include <cstring>`, the declarations are automatically given C linkage. For your own C
libraries, use `extern "C"`:

```cpp
// my_c_api.h — the C header
#ifndef MY_C_API_H
#define MY_C_API_H

#ifdef __cplusplus
extern "C" {
#endif

typedef struct {
    double x;
    double y;
} Point;

Point point_create(double x, double y);
double point_distance(const Point* a, const Point* b);
void point_translate(Point* p, double dx, double dy);

#ifdef __cplusplus
}  // extern "C"
#endif

#endif  // MY_C_API_H
```

```cpp
// my_c_api.c — the C implementation
#include "my_c_api.h"
#include <math.h>

Point point_create(double x, double y) {
    Point p = {x, y};
    return p;
}

double point_distance(const Point* a, const Point* b) {
    double dx = a->x - b->x;
    double dy = a->y - b->y;
    return sqrt(dx * dx + dy * dy);
}

void point_translate(Point* p, double dx, double dy) {
    p->x += dx;
    p->y += dy;
}
```

```cpp
// main.cpp — calling C from C++
#include "my_c_api.h"
#include <cstdio>
#include <memory>

int main() {
    auto deleter = [](Point* p) {
        std::printf("Destroying point\n");
        delete p;
    };
    std::unique_ptr<Point, decltype(deleter)> p(
        new Point(point_create(3.0, 4.0)),
        deleter
    );

    Point origin = point_create(0.0, 0.0);
    double dist = point_distance(p.get(), &origin);
    std::printf("Distance from origin: %f\n", dist);  // 5.000000

    point_translate(p.get(), 1.0, 1.0);
    dist = point_distance(p.get(), &origin);
    std::printf("After translate: %f\n", dist);  // ~4.242641
}
```

## 5.3 Calling C++ from C

Calling C++ functions from C requires a C-compatible entry point — a function with `extern "C"`
linkage that wraps the C++ implementation:

```cpp
// widget.cpp — C++ implementation
#include <string>
#include <vector>

class Widget {
    std::string name_;
    std::vector<int> data_;
public:
    Widget(const char* name) : name_(name) {}
    void add_value(int v) { data_.push_back(v); }
    const char* get_name() const { return name_.c_str(); }
    int get_value(int index) const {
        return (index < static_cast<int>(data_.size())) ? data_[index] : -1;
    }
};

// C-compatible opaque handle
extern "C" {
    // Opaque pointer type — C code never sees the full definition
    typedef struct WidgetOpaque* WidgetHandle;

    WidgetHandle widget_create(const char* name) {
        return reinterpret_cast<WidgetHandle>(new Widget(name));
    }

    void widget_destroy(WidgetHandle h) {
        delete reinterpret_cast<Widget*>(h);
    }

    void widget_add_value(WidgetHandle h, int v) {
        reinterpret_cast<Widget*>(h)->add_value(v);
    }

    const char* widget_get_name(WidgetHandle h) {
        return reinterpret_cast<Widget*>(h)->get_name();
    }

    int widget_get_value(WidgetHandle h, int index) {
        return reinterpret_cast<Widget*>(h)->get_value(index);
    }
}
```

```c
/* widget_user.c — calling C++ from C */
#include <stdio.h>

/* Opaque type — only declared, never defined in C */
typedef struct WidgetOpaque* WidgetHandle;

WidgetHandle widget_create(const char* name);
void widget_destroy(WidgetHandle h);
void widget_add_value(WidgetHandle h, int v);
const char* widget_get_name(WidgetHandle h);
int widget_get_value(WidgetHandle h, int index);

int main(void) {
    WidgetHandle w = widget_create("sensor-1");
    widget_add_value(w, 10);
    widget_add_value(w, 20);
    widget_add_value(w, 30);

    printf("Widget: %s\n", widget_get_name(w));
    printf("Value[0] = %d\n", widget_get_value(w, 0));
    printf("Value[1] = %d\n", widget_get_value(w, 1));
    printf("Value[2] = %d\n", widget_get_value(w, 2));

    widget_destroy(w);
    return 0;
}
```

:::warning
The `reinterpret_cast` approach above works on platforms where C and C++ share the same
ABI (pointer size, struct layout, calling convention). This is true for x86-64 Linux/macOS (both use
the System V ABI). On platforms with divergent C/C++ ABIs, use `void*` handles and pass data through
C-compatible types only.
:::

## 5.4 ABI Boundaries: Name Mangling and Layout

At a C/C++ boundary, several ABI properties must align:

| Property           | C ABI                                 | C++ ABI (Itanium, used on Linux/macOS) |
| :----------------- | :------------------------------------ | :------------------------------------- |
| Name mangling      | None — symbol = function name         | Encodes types, namespaces, templates   |
| Calling convention | System V AMD64 (x86-64)               | Same as C (on System V platforms)      |
| Struct layout      | Same as C++ POD                       | Same as C for POD; non-POD differs     |
| Exception handling | N/A (no exceptions)                   | Zero-cost with unwind tables           |
| `bool` size        | Typically 1 byte (implementation-def) | Same as C (implementation-defined)     |

```cpp
#include <cstddef>
#include <cstdio>

// Verifying struct layout compatibility across the C boundary
extern "C" {
struct CPoint {
    double x;
    double y;
    // No virtual functions, no non-POD members → layout is identical in C and C++
};

// This struct has a C-compatible layout
struct CPoint make_cpoint(double x, double y) {
    CPoint p{x, y};
    return p;
}

// C++-specific struct — NOT safe to pass across the boundary
struct ComplexPoint {
    double x, y;
    virtual double magnitude() const { /* ... */ return 0.0; }
    // vtable pointer changes the layout — first member is NOT at offset 0
    // sizeof(ComplexPoint) >= 24 (8-byte vptr + 2*8 bytes)
};
}

int main() {
    static_assert(sizeof(CPoint) == 16);
    static_assert(offsetof(CPoint, x) == 0);
    static_assert(offsetof(CPoint, y) == 8);

    std::printf("sizeof(CPoint) = %zu\n", sizeof(CPoint));       // 16
    std::printf("sizeof(ComplexPoint) = %zu\n", sizeof(ComplexPoint)); // 24 (on x86-64)
}
```

## 5.5 Data Marshalling: Ensuring Compatible Layouts

When passing data across a C/C++ boundary, ensure that:

1. **Structs are POD** (Plain Old Data) or `standard-layout`: no virtual functions, no base classes
   with virtual functions, no non-static data members of reference type, all non-static data members
   have the same access control.
2. **Fixed-width types are used** (`int32_t`, not `int`).
3. **No padding surprises**: use `static_assert` and `offsetof` to verify layout, or `#pragma pack`
   / `alignas` to control it.
4. **No C++ exceptions cross the boundary**: exceptions thrown in C++ code called from C unwind
   through C frames, which have no unwind information — undefined behavior. Catch all exceptions
   before returning to C code.

```cpp
#include <cstdint>
#include <cstddef>
#include <cstdio>

// Correct: POD struct with explicit layout guarantees
struct PacketHeader {
    static_assert(offsetof(PacketHeader, magic) == 0);
    int32_t magic;
    int32_t version;
    int64_t timestamp;
    int32_t payload_size;
    int32_t checksum;
};

static_assert(sizeof(PacketHeader) == 24);
static_assert(alignof(PacketHeader) == 8);

// Incorrect: this struct would break C interop
struct BadPacket {
    std::string payload;  // Non-POD: heap allocation, non-trivial destructor
    virtual void validate() {}  // vptr changes layout
};
```

## 5.6 Dynamic Library Loading with `dlfcn.h`

POSIX systems provide `dlopen`, `dlsym`, `dlclose`, and `dlerror` for loading shared libraries at
runtime. This enables plugin architectures and runtime code loading.

```cpp
// plugin.cpp — compiled into libplugin.so
// $ g++ -shared -fPIC -o libplugin.so plugin.cpp

#include <cstdint>

extern "C" {

int32_t plugin_version() {
    return 1;
}

int32_t plugin_compute(int32_t x, int32_t y) {
    return x * x + y * y;
}

const char* plugin_name() {
    return "quadratic_plugin";
}

}  // extern "C"
```

```cpp
// loader.cpp — dynamically loads and uses the plugin
// $ g++ -std=c++17 -o loader loader.cpp -ldl
#include <cstdint>
#include <cstdio>
#include <cstdlib>
#include <dlfcn.h>
#include <string>

struct PluginAPI {
    int32_t (*version)();
    int32_t (*compute)(int32_t, int32_t);
    const char* (*name)();
};

PluginAPI load_plugin(const char* path) {
    void* handle = dlopen(path, RTLD_NOW);
    if (!handle) {
        std::fprintf(stderr, "dlopen failed: %s\n", dlerror());
        std::exit(1);
    }

    // Clear any existing error
    dlerror();

    auto load_sym = [&](const char* name) -> void* {
        void* sym = dlsym(handle, name);
        char* err = dlerror();
        if (err) {
            std::fprintf(stderr, "dlsym(%s) failed: %s\n", name, err);
            std::exit(1);
        }
        return sym;
    };

    PluginAPI api{};
    api.version = reinterpret_cast<int32_t(*)()>(load_sym("plugin_version"));
    api.compute = reinterpret_cast<int32_t(*)(int32_t, int32_t)>(load_sym("plugin_compute"));
    api.name    = reinterpret_cast<const char*(*)()>(load_sym("plugin_name"));
    return api;
}

int main() {
    auto plugin = load_plugin("./libplugin.so");

    std::printf("Plugin: %s v%d\n", plugin.name(), plugin.version());
    std::printf("compute(3, 4) = %d\n", plugin.compute(3, 4));  // 25

    // In production code, store handle and call dlclose(handle) when done
}
```

:::warning
The `RTLD_NOW` flag resolves all symbols at load time, surfacing missing symbol errors
immediately. `RTLD_LAZY` defers resolution to first use, which can mask errors and cause crashes at
unpredictable points. For plugin loading, prefer `RTLD_NOW`.
:::

## 5.7 Common Pitfalls at Language Boundaries

1. **Exceptions crossing the boundary**: A C++ exception that propagates through a C call stack is
   undefined behavior. Always wrap C++ entry points with `try`/`catch(...)`.

2. **Differing `size_t` between 32-bit and 64-bit code**: If a 32-bit C library passes a
   pointer-sized value through an `int`, it will truncate on 64-bit systems.

3. **Differing struct packing**: MSVC defaults to 8-byte alignment; GCC defaults to natural
   alignment. Use explicit packing or fixed-width types.

4. **Static initialization order fiasco**: Global C++ objects with non-trivial constructors may not
   be initialized before a C `main()` calls them. Prefer the Construct On First Use idiom.

5. **`new`/`delete` mismatch**: Memory allocated with `new` in C++ must be freed with `delete` (not
   `free()`), and vice versa. If passing ownership of heap memory across the boundary, provide
   explicit `create`/`destroy` functions in the C API.

```cpp
// Safe C++ entry point wrapping
#include <exception>

extern "C" {
    void safe_entry_point() {
        try {
            // ... C++ code that might throw ...
        } catch (const std::exception& e) {
            // Log and return error code — do NOT let exceptions escape
        } catch (...) {
            // Catch everything else
        }
    }
}
```

## See Also

- [Calling Conventions and Stack Management](2_calling_conventions.md)
- [Type Erasure](4_type_erasure.md)

:::

:::
