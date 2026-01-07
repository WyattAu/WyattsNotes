---
title: Reference And Lifetime
date: 2026-01-03T04:13:20.675Z
tags:
  - cpp
categories:
  - cpp
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A C++ Reference (`T&`) is an alias for an existing object. Unlike pointers, references are not objects themselves in the abstract machine; they imply a direct binding.

However, hardware does not understand "aliases." It understands addresses. This module analyzes how the compiler maps high-level reference semantics to low-level machine code and details the specific rules governing the lifespan of temporary objects bound to references.

## 1. Architectural Implementation

While the C++ Standard defines a reference as an alias, the **Application Binary Interface (ABI)** implements a reference almost identically to a constant pointer.

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
    src="https://godbolt.org/e?readOnly=true&hideEditorToolbars=true#g:!((g:!((g:!((h:codeEditor,i:(filename:'1',fontScale:12,fontUsePx:'0',j:1,lang:c%2B%2B,selection:(endColumn:2,endLineNumber:7,positionColumn:2,positionLineNumber:7,selectionStartColumn:2,selectionStartLineNumber:7,startColumn:2,startLineNumber:7),source:'void+by_pointer(int*+p)+%7B%0A++++*p+%3D+10%3B%0A%7D%0A%0Avoid+by_reference(int%26+r)+%7B%0A++++r+%3D+10%3B%0A%7D'),l:'5',n:'0',o:'C%2B%2B+source+%231',t:'0')),k:100,l:'4',m:50,n:'0',o:'',s:0,t:'0'),(g:!((h:compiler,i:(compiler:g152,filters:(b:'0',binary:'1',binaryObject:'1',commentOnly:'0',debugCalls:'1',demangle:'0',directives:'0',execute:'1',intel:'0',libraryCode:'0',trim:'1',verboseDemangling:'0'),flagsViewOpen:'1',fontScale:12,fontUsePx:'0',j:1,lang:c%2B%2B,libs:!(),options:'-O2',overrides:!(),selection:(endColumn:12,endLineNumber:6,positionColumn:12,positionLineNumber:6,selectionStartColumn:12,selectionStartLineNumber:6,startColumn:12,startLineNumber:6),source:1),l:'5',n:'0',o:'+x86-64+gcc+15.2+(Editor+%231)',t:'0')),header:(),l:'4',m:50,n:'0',o:'',s:0,t:'0')),l:'3',n:'0',o:'',t:'0')),version:4"
    title="Compiler Explorer"
    sandbox="allow-scripts allow-same-origin"
    loading="lazy"
  ></iframe>
</div>

**Conclusion:** At the machine level, passing by reference is indistinguishable from passing by pointer. The caller passes the memory address of the object in the register `RDI`.

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
- **Implication:** A reference member prevents the compiler from generating a default assignment operator because references cannot be "reseated" (rebound to a new address) after initialization.

## 2. Nullability and Invariants

A reference is architecturally a **Non-Nullable Pointer**.

### The Contract

The C++ standard states that a reference must always be bound to a valid object. It is impossible to declare an uninitialized reference:

```cpp
int& r; // Compiler Error: 'r' declared as reference but not initialized

```

### The Null Reference Undefined Behavior

While the syntax prevents null references, pointer arithmetic and casting can manufacture them. This is **Undefined Behavior**.

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

**Optimization Impact:** In the example above, if `ptr` is actually null, the check `if (!ptr)` is removed. The program proceeds to access invalid memory, leading to a security vulnerability or crash later in execution.

## 3. Temporary Lifetime Extension

One of the most complex architectural features of C++ is the ability to bind a temporary object (an rvalue) to a reference, thereby altering the temporary's destruction time.

## The Rule

If a **prvalue** (temporary) is bound to a reference, the lifetime of the temporary is extended to match the lifetime of the reference.

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

**Compiler Implementation:**
The compiler treats the temporary bound to `ref` effectively as a hidden local variable in the scope of `run()`.

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

In `scope_trap`, the C++ Standard dictates that the temporary `Wrapper` is destroyed at the end of the full expression. The lifetime extension applies to the result of `.val` (which is an `int`), but that `int` resides inside the `Wrapper`. When `Wrapper` dies, the `int` dies.

## 4. `std::reference_wrapper`

Standard containers (`std::vector`, `std::array`) require elements to be **Assignable**. Because C++ references cannot be reseated, `std::vector<int&>` is ill-formed.

To store references in containers, the architecture requires `std::reference_wrapper<T>`, found in `<functional>`.

### Implementation

`std::reference_wrapper` is a trivially copyable class that holds a pointer `T*` but exposes an interface that mimics `T&`.

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

`std::reference_wrapper<T>` has an implicit conversion operator to `T&`. This allows it to be passed to functions expecting `T&`.

## 5. Architectural Decision Matrix

When designing APIs, choose the parameter type based on ownership and nullability contracts.

| Semantic Requirement           | Type       | Implementation Cost                |
| :----------------------------- | :--------- | :--------------------------------- |
| **Input Only (Read-Only)**     | `const T&` | Pointer pass (8 bytes). Zero copy. |
| **Input/Output (Mutation)**    | `T&`       | Pointer pass (8 bytes).            |
| **Optional Input (Nullable)**  | `const T*` | Pointer pass. Requires null check. |
| **Optional Output (Nullable)** | `T*`       | Pointer pass. Requires null check. |

| **Store Reference in Container** | `std::reference_wrapper<T>` | Pointer size storage. |
| **Reset/Reseat Capability** | `T*` | Mutable pointer. |

## Verification

To verify lifetime extension behavior, use clang's `-fsanitize=address` (ASan). ASan instruments stack variables and detects Use-After-Scope errors.

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
