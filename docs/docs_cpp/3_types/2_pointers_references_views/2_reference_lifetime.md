---
title: Reference And Lifetime
date: 2026-01-03T04:13:20.675Z
tags:
  - cpp
categories:
  - cpp
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

A C++ Reference (`T&`) is an alias for an existing object. Unlike pointers, references are not
objects themselves in the abstract machine; they imply a direct binding.

However, hardware does not understand "aliases." It understands addresses. This module analyzes how
the compiler maps high-level reference semantics to low-level machine code and details the specific
rules governing the lifespan of temporary objects bound to references.

## 1. Architectural Implementation

While the C++ Standard defines a reference as an alias, the **Application Binary Interface (ABI)**
implements a reference almost identically to a constant pointer.

### Assembly Inspection

Consider two functions, one taking a pointer and one taking a reference.

```cpp
void by_pointer(int* p) {
    *p = 10;
}

void by_reference(int& r) {
    r = 10;
}
```

<div className="godbolt-container">
  <iframe
    width="100%"
    height="800"
    src="https://godbolt.org/e?readOnly=true&hideEditorToolbars=true#g:!((g:!((g:!((h:codeEditor,i:(filename:'1',fontScale:12,fontUsePx:'0',j:1,lang:c%2B%2B,selection:(endColumn:2,endLineNumber:7,positionColumn:2,positionLineNumber:7,selectionStartColumn:2,selectionStartLineNumber:7,startColumn:2,startLineNumber:7),source:'void+by_pointer(int*+p)+%7B%0A++++*p+%3D+10%3B%0A%7D%0A%0Avoid+by_reference(int%26+r)+%7B%0A++++r+%3D+10%3B%0A%7D'),l:'5',n:'0',o:'C%2B%2B+source+%231',t:'0')),k:100,l:'4',m:50,n:'0',o:'',s:0,t:'0'),(g:!((h:compiler,i:(compiler:g152,filters:(b:'0',binary:'1',binaryObject:'1',commentOnly:'0',debugCalls:'1',demangle:'0',directives:'0',execute:'1',intel:'0',libraryCode:'0',trim:'1',verboseDemangling:'0'),flagsViewOpen:'1',fontScale:12,fontUsePx:'0',j:1,lang:c%2B%2B,libs:!(),options:'-O2',overrides:!(),selection:(endColumn:12,endLineNumber:6,positionColumn:12,positionLineNumber:6,startColumn:12,startLineNumber:6),source:1),l:'5',n:'0',o:'+x86-64+gcc+15.2+(Editor+%231)',t:'0')),header:(),l:'4',m:50,n:'0',o:'',s:0,t:'0')),l:'3',n:'0',o:'',t:'0')),version:4"
    title="Compiler Explorer"
    sandbox="allow-scripts allow-same-origin"
    loading="lazy"
  ></iframe>
</div>

**Conclusion:** At the machine level, passing by reference is indistinguishable from passing by
pointer. The caller passes the memory address of the object in the register `RDI`.

### Memory Layout (Class Members)

If a class contains a reference member, it occupies storage.

```cpp
struct RefWrapper {
    int& r;
};

struct PtrWrapper {
    int* p;
};
```

- `sizeof(RefWrapper)` == `sizeof(int*)` (8 bytes on 64-bit systems).
- **Implication:** A reference member prevents the compiler from generating a default assignment
  operator because references cannot be "reseated" (rebound to a new address) after initialization.

## 2. Nullability and Invariants

A reference is architecturally a **Non-Nullable Pointer**.

### The Contract

The C++ standard states that a reference must always be bound to a valid object. It is impossible to
declare an uninitialized reference:

```cpp
int& r; // Compiler Error: 'r' declared as reference but not initialized

```

### The Null Reference Undefined Behavior

While the syntax prevents null references, pointer arithmetic and casting can manufacture them. This
is **Undefined Behavior**.

```cpp
void fast_path(int* ptr) {
    // If ptr is nullptr, this creates a null reference.
    // This is UB. The process may crash immediately,
    // OR it may continue in a corrupted state.
    int& ref = *ptr;

    // Compiler Optimization Hazard:
    // The compiler knows 'ref' cannot be null (by standard definition).
    // Therefore, it assumes 'ptr' was not null.
    // It may optimize away subsequent null checks on 'ptr'.
    if (!ptr) {
        // Dead Code: Compiler removes this block.
    }
}
```

**Optimization Impact:** In the example above, if `ptr` is actually null, the check `if (!ptr)` is
removed. The program proceeds to access invalid memory, leading to a security vulnerability or crash
later in execution.

### Null Reference as an Optimization Tool

The non-null invariant allows the compiler to perform optimizations that are impossible with
pointers. Since the compiler can assume a reference is always valid, it can:

1. **Eliminate null checks:** The compiler knows `ref` is never null.
2. **Speculate on dereference:** It can hoist loads past branches.
3. **Prove aliasing:** Two references of different types cannot alias (strict aliasing rule [N4950
   §6.9.2.1]).

```cpp
#include <iostream>

int transform(int& ref) {
    // Compiler assumes ref is valid — no null check needed
    return ref * 2;
}

int transform_ptr(int* ptr) {
    // Compiler must consider ptr == nullptr
    // May generate a null check or rely on UB if null
    return ptr ? (*ptr * 2) : 0;
}
```

## 3. Temporary Lifetime Extension

One of the most complex architectural features of C++ is the ability to bind a temporary object (an
rvalue) to a reference, thereby altering the temporary's destruction time.

## The Rule

If a **prvalue** (temporary) is bound to a reference, the lifetime of the temporary is extended to
match the lifetime of the reference.

**Constraints:**

1. The reference must be `const T&` OR `T&&` (Rvalue Reference).
2. You cannot bind a temporary to a mutable lvalue reference (`T&`).

### Mechanism

```cpp
struct Logger {
    ~Logger() { puts("Destroyed"); }
};

void run() {
    // 1. Normal Temporary
    Logger(); // Constructed, then immediately Destroyed
    puts("---");

    // 2. Lifetime Extension
    // The compiler allocates stack space for the temporary Logger.
    // It is NOT destroyed at the semicolon.
    const Logger& ref = Logger();

    puts("Work");
} // 'ref' goes out of scope -> Temporary Logger is destroyed here.
```

**Compiler Implementation:** The compiler treats the temporary bound to `ref` effectively as a
hidden local variable in the scope of `run()`.

### Lifetime Extension with Rvalue References

Rvalue references (`T&&`) also extend temporary lifetime:

```cpp
#include <iostream>

struct S {
    int value;
    ~S() { std::cout << "Destroyed S(" << value << ")\n"; }
};

int main() {
    // const lvalue reference extends lifetime
    const S& ref1 = S{1};
    std::cout << "ref1.value = " << ref1.value << "\n";

    // rvalue reference also extends lifetime
    S&& ref2 = S{2};
    std::cout << "ref2.value = " << ref2.value << "\n";

    std::cout << "End of main\n";
    // S(2) destroyed, then S(1) destroyed (reverse order of construction)
    return 0;
}
```

### Lifetime Extension in Member Initialization

Lifetime extension applies when binding to reference members during aggregate initialization:

```cpp
#include <iostream>

struct Holder {
    const int& ref;
    ~Holder() { std::cout << "Holder destroyed\n"; }
};

int main() {
    Holder h{42};  // Temporary int(42) lifetime extended to match h
    std::cout << h.ref << "\n";
    std::cout << "End of main\n";
    return 0;
    // Output:
    //   42
    //   End of main
    //   Holder destroyed
    //   (Temporary int destroyed along with Holder)
}
```

### The Transitivity Trap (Broken Extension)

Lifetime extension is **not transitive**. It only applies when binding directly to the temporary.

**Scenario:** Returning a reference to a member of a temporary.

```cpp
struct Wrapper {
    int val;
};

const int& get_val_broken() {
    Wrapper w{42};
    return w.val; // ERROR: Returns reference to local 'w' which dies.
}

void scope_trap() {
    // Wrapper() is a temporary.
    // We bind to .val, NOT the Wrapper itself.
    // The Wrapper temporary dies at the semicolon.
    // 'ref' becomes a dangling reference to stack garbage.
    const int& ref = Wrapper{42}.val;
}
```

In `scope_trap`, the C++ Standard dictates that the temporary `Wrapper` is destroyed at the end of
the full expression. The lifetime extension applies to the result of `.val` (which is an `int`), but
that `int` resides inside the `Wrapper`. When `Wrapper` dies, the `int` dies.

### Lifetime Extension via Function Return

Binding a returned reference to a temporary extends the temporary's lifetime:

```cpp
#include <iostream>

struct Widget {
    int id;
    ~Widget() { std::cout << "Widget " << id << " destroyed\n"; }
};

const Widget& make_widget(int id) {
    return Widget{id};  // Temporary created, returned by const ref
}

int main() {
    // Lifetime extension: the temporary Widget lives as long as ref
    const Widget& ref = make_widget(42);
    std::cout << "Widget " << ref.id << " alive\n";
    std::cout << "End of main\n";
    return 0;
    // Output:
    //   Widget 42 alive
    //   End of main
    //   Widget 42 destroyed
}
```

This works because the prvalue materialization happens at the call site, and the reference binding
to the materialized temporary extends its lifetime. However, if the function returns a reference to
a **local variable** (not a temporary), it is always UB — no lifetime extension can save it.

## 4. `std::reference_wrapper`

Standard containers (`std::vector`, `std::array`) require elements to be **Assignable**. Because C++
references cannot be reseated, `std::vector<int&>` is ill-formed.

To store references in containers, the architecture requires `std::reference_wrapper<T>`, found in
`<functional>`.

### Implementation

`std::reference_wrapper` is a trivially copyable class that holds a pointer `T*` but exposes an
interface that mimics `T&`.

```cpp
#include <vector>
#include <functional>
#include <iostream>

void usage() {
    int a = 10;
    int b = 20;

    // Vector of references
    std::vector<std::reference_wrapper<int>> vec;
    vec.push_back(a);
    vec.push_back(b);

    // Mutation
    vec[0].get() = 100; // Modifies 'a'


    // Reseating (assigning the wrapper changes the pointer, not the value)
    vec[0] = b; // vec[0] now points to 'b'
}
```

### Conversion Operators

`std::reference_wrapper<T>` has an implicit conversion operator to `T&`. This allows it to be passed
to functions expecting `T&`.

### `std::ref` and `std::cref`

The factory functions `std::ref` and `std::cref` create `std::reference_wrapper` objects:

```cpp
#include <functional>
#include <iostream>
#include <thread>

void worker(int& counter) {
    ++counter;
}

int main() {
    int count = 0;

    // std::ref wraps count in a reference_wrapper
    // Without std::ref, std::thread would copy count by value
    std::jthread t(worker, std::ref(count));
    t.join();

    std::cout << "count = " << count << "\n";  // 1
    return 0;
}
```

## 5. Architectural Decision Matrix

When designing APIs, choose the parameter type based on ownership and nullability contracts.

| Semantic Requirement           | Type       | Implementation Cost                |
| :----------------------------- | :--------- | :--------------------------------- |
| **Input Only (Read-Only)**     | `const T&` | Pointer pass (8 bytes). Zero copy. |
| **Input/Output (Mutation)**    | `T&`       | Pointer pass (8 bytes).            |
| **Optional Input (Nullable)**  | `const T*` | Pointer pass. Requires null check. |
| **Optional Output (Nullable)** | `T*`       | Pointer pass. Requires null check. |

| **Store Reference in Container** | `std::reference_wrapper<T>` | Pointer size storage. | |
**Reset/Reseat Capability** | `T*` | Mutable pointer. |

### Forwarding References vs Universal References

When writing generic code, `T&&` in a deduced context is a **forwarding reference**, not an rvalue
reference. This is critical for perfect forwarding:

```cpp
#include <iostream>
#include <utility>

// T&& is a forwarding reference when T is deduced
template <typename T>
void forward_me(T&& arg) {
    std::cout << "Received ";
    // Use std::forward to preserve value category
    process(std::forward<T>(arg));
}

void process(int& lval) { std::cout << "lvalue\n"; }
void process(int&& rval) { std::cout << "rvalue\n"; }

int main() {
    int x = 42;
    forward_me(x);      // T = int&, binds to lvalue -> prints "lvalue"
    forward_me(42);     // T = int, binds to rvalue -> prints "rvalue"
    forward_me(std::move(x));  // T = int, binds to rvalue -> prints "rvalue"
    return 0;
}
```

## 6. Reference Collapsing and Perfect Forwarding

Reference collapsing rules determine what happens when references are combined through template
argument deduction [N4950 §12.2.2.1]:

| Template Argument | Substituted Type | Collapsed Type |
| ----------------- | ---------------- | -------------- |
| `T = int&`        | `int& &&`        | `int&`         |
| `T = int`         | `int&&`          | `int&&`        |
| `T = const int&`  | `const int& &&`  | `const int&`   |
| `T = const int`   | `const int&&`    | `const int&&`  |

The rule: a reference to a reference collapses to the lvalue reference. Only an rvalue reference to
an rvalue reference remains an rvalue reference.

## Verification

To verify lifetime extension behavior, use clang's `-fsanitize=address` (ASan). ASan instruments
stack variables and detects Use-After-Scope errors.

**File:** `lifetime_test.cpp`

```cpp

struct A { int x; };

int main() {
    const int& r = A{42}.x; // ASan will flag this usage
    return r;
}

```

**Command:**

```bash

cla
ng++ -std=c++23 -fsanitize=address -g lifetime_test.cpp -o test
./test
```

**Output:**

```text
ERROR: AddressSanitizer: stack-use-after-scope ...
READ of size 4 ...
```

This confirms that binding to a sub-object of a temporary does not extend the temporary's lifetime.

```

```

## Common Pitfalls

### Pitfall 1: Returning References to Locals

This is the classic dangling reference bug. The compiler can detect the simplest cases but not all:

```cpp
#include <iostream>

int& dangling() {
    int local = 42;
    return local;  // Warning: reference to local variable returned
}

int& dangling_hidden() {
    int local = 42;
    int& ref = local;
    return ref;  // Compiler may not warn — the reference masks the local
}

int main() {
    int& r = dangling();  // Dangling reference
    std::cout << r << "\n";  // UB — may print 42, may crash, may print garbage
    return 0;
}
```

### Pitfall 2: Storing References to Function Parameters

When a function stores a reference to its parameter, the caller must ensure the referenced object
outlives the stored reference:

```cpp
#include <vector>
#include <functional>
#include <iostream>

class Observer {
    const std::string& name_;
public:
    explicit Observer(const std::string& name) : name_(name) {}

    void report() const {
        std::cout << "Observer: " << name_ << "\n";
    }
};

int main() {
    Observer* obs = nullptr;
    {
        std::string temp = "temporary";
        obs = new Observer(temp);
        // temp goes out of scope here — obs->name_ is dangling
    }
    obs->report();  // UB
    delete obs;
    return 0;
}
```

### Pitfall 3: Range-Based For and Temporary Containers

A range-based for loop binds the range expression to a reference, which can extend the lifetime of
temporaries:

```cpp
#include <iostream>
#include <vector>

std::vector<int> make_range() {
    return {1, 2, 3};
}

int main() {
    // SAFE: the temporary vector's lifetime is extended for the loop duration
    for (const auto& x : make_range()) {
        std::cout << x << " ";
    }
    std::cout << "\n";

    // SAFE: same mechanism
    for (const auto& x : std::vector<int>{4, 5, 6}) {
        std::cout << x << " ";
    }
    std::cout << "\n";
    return 0;
}
```

This works because the range-based for loop is specified to bind the range expression to a
reference, triggering lifetime extension [N4950 §8.7.1]. However, this only works for the direct
range expression — not for function calls that return references to temporaries.

### Pitfall 4: Structured Bindings and References

Structured bindings to temporary objects do not extend lifetime in C++17 (this was a defect report,
fixed in C++20):

```cpp
#include <iostream>
#include <utility>

struct Pair {
    int first;
    int second;
};

Pair make_pair() { return {1, 2}; }

int main() {
    // C++17: dangling! The temporary Pair is destroyed after the full expression.
    // C++20: lifetime is extended.
    const auto& [a, b] = make_pair();
    std::cout << a << ", " << b << "\n";
    return 0;
}
```

### Pitfall 5: References and `std::move`

`std::move` does not move anything — it casts to an rvalue reference. Binding an rvalue reference to
a named variable does not destroy the original:

```cpp
#include <iostream>
#include <utility>

int main() {
    int x = 42;
    int&& ref = std::move(x);
    // x is still alive and valid
    // ref is just an rvalue reference to x
    std::cout << x << " " << ref << "\n";  // 42 42

    // Modifying ref modifies x
    ref = 100;
    std::cout << x << "\n";  // 100
    return 0;
}
```
