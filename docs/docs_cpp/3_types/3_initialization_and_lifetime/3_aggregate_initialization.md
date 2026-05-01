---
title: Aggregate Initialization
description:
  "C++: Aggregate Initialization — What Qualifies as an Aggregate; C++11/14: The Original Definition [N4950 §11.6.1]; C++17: Relaxed Aggregates [N4950 §11.6.1]."
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: aggregate-initialization
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

Aggregate initialization is the mechanism by which plain data structures (structs, arrays, unions)
are initialized without invoking user-defined constructors. As C++ evolved, the definition of
"aggregate" changed significantly -- C++17 relaxed the rules, C++20 added designated initializers,
and each revision shifted what constitutes a valid aggregate. For systems programmers writing
protocol parsers, shared memory structures, and embedded firmware, aggregate initialization is the
primary tool for constructing and inspecting raw data layouts.

## What Qualifies as an Aggregate

The definition of aggregate has evolved across C++ standards:

### C++11/14: The Original Definition [N4950 §11.6.1]

An aggregate is a class with:

- No user-declared constructors (not even defaulted ones)
- No private or protected non-static data members
- No base classes
- No virtual functions

### C++17: Relaxed Aggregates [N4950 §11.6.1]

C++17 relaxed two restrictions:

- **Allowed**: User-declared constructors, provided they are defaulted (not user-provided)
- **Allowed**: Public base classes (but only one level, and base must also be an aggregate)

```cpp
struct Base {
    int x;
};

struct Derived : Base {  // OK in C++17: public base, no user-provided ctors
    int y;
    Derived() = default;
};

Derived d{{1}, 2};  // base members initialized first, then derived
```

### C++20: Further Relaxations

C++20 allowed:

- **Allowed**: Public base classes with non-trivial default constructors (if derived has no
  user-provided constructor)
- **Allowed**: Parenthesized initialization of base class aggregates in derived aggregates

```cpp
struct A { int a; };
struct B { int b; };
struct C : A, B { int c; };

C c{1, 2, 3};  // C++20: initializes A::a, B::b, then C::c
```

### Aggregate Evolution Summary

| Feature                                    | C++11/14 | C++17        | C++20        |
| :----------------------------------------- | :------- | :----------- | :----------- |
| No user-declared constructors              | Required | Defaulted OK | Defaulted OK |
| No private/protected members               | Required | Required     | Required     |
| No base classes                            | Required | Public only  | Public only  |
| No virtual functions                       | Required | Required     | Required     |
| Designated initializers                    | No       | No           | Yes          |
| Aggregate with default member initializers | Yes      | Yes          | Yes          |

## Aggregate Initialization Syntax

### Brace-Enclosed Initializer List

```cpp
struct Point {
    double x;
    double y;
};

Point p1{1.0, 2.0};        // direct aggregate init
Point p2 = {1.0, 2.0};     // copy aggregate init
Point p3 = Point{1.0, 2.0}; // prvalue aggregate init
```

### Arrays

```cpp
int arr1[5] = {1, 2, 3};    // remaining elements zero-initialized
int arr2[5]{};              // all elements zero-initialized
int arr3[] = {1, 2, 3};     // size deduced to 3
int arr4[3] = {1, 2, 3, 4}; // ERROR: too many initializers
```

### Nested Aggregates

```cpp
struct Color {
    unsigned char r, g, b, a;
};

struct Vertex {
    double x, y;
    Color color;
    double normal[3];
};

Vertex v{
    1.0, 2.0,              // x, y
    {255, 128, 0, 255},    // Color: r, g, b, a
    {0.0, 0.0, 1.0}        // normal[3]
};
```

Nested braces can be omitted when there is no ambiguity:

```cpp
Vertex v2{1.0, 2.0, 255, 128, 0, 255, 0.0, 0.0, 1.0};
```

However, omitting nested braces is a maintenance hazard -- adding a member to `Color` silently
breaks the initialization of `normal`. Always use explicit nested braces.

## Designated Initializers (C++20)

C++20 adopted designated initializers from C99, with additional restrictions [N4950 §9.4.5.4].

### Basic Syntax

```cpp
struct Employee {
    std::string name;
    int id;
    double salary;
};

Employee e1{.name = "Alice", .id = 1001, .salary = 85000.0};
Employee e2{.id = 1002, .name = "Bob"};  // salary uses default member initializer or zero
```

### Designated Initializer Rules

1. **Designators must name direct non-static data members** -- no nested paths like `.a.b`.
2. **Designators can appear in any order**, but members are initialized in declaration order.
3. **All unnamed members before a designated member must have initializers** (either explicit or
   default).

```cpp
struct S {
    int a;
    int b;
    int c;
};

S s1{.a = 1, .c = 3};  // OK: b is zero-initialized (no default member initializer)
S s2{.c = 3, .a = 1};  // OK: out of order, but initialized in declaration order (a=1, b=0, c=3)
S s3{.b = 2};           // ERROR: a must be initialized before b
```

### Designators and Unions

```cpp
union Value {
    int i;
    double d;
    const char* s;
};

Value v1{.d = 3.14};    // OK: initializes the double member
Value v2{.i = 42};      // OK: initializes the int member
Value v3{.s = "hello"}; // OK: initializes the string member
```

### Restriction: No Re-initialization

```cpp
S s{.a = 1, .a = 2};    // ERROR: member a designated twice
```

### Interaction with Base Classes (C++20)

```cpp
struct Base { int a; };
struct Derived : Base { int b; };

Derived d{.a = 1, .b = 2};   // C++20: designator can refer to base class member
```

## The Three Initialization Forms

### Default-Initialization

Leaves fundamental types with **indeterminate** values. Only calls the default constructor for class
types.

```cpp
int x;                  // default-initialized: indeterminate value
std::string s;          // default-initialized: calls string() constructor
int arr[10];            // default-initialized: all elements indeterminate

void func() {
    int local;          // default-initialized: indeterminate
}
```

When does default-initialization apply?

- Declaring a variable without an initializer: `int x;`
- Dynamic allocation without initializer: `new int;`
- Base class and member default initialization when not in the member initializer list

### Value-Initialization

Zero-initializes fundamental types, then default-constructs class types.

```cpp
int x{};               // value-initialized: zero
int y = int{};         // value-initialized: zero
std::string s{};       // value-initialized: calls string() (same as default)
int* p = new int{};    // value-initialized: zero
int* arr = new int[10]{};  // all elements zero
```

When does value-initialization apply?

- Empty brace initializer: `int x{};`
- Empty parentheses for class types with constructors: `std::string s();` (but this is vexing
  parse!)
- `new T()` or `new T{}`

### Zero-Initialization

Sets all bytes to zero. This is the first phase of static and value-initialization.

```cpp
static int global;          // zero-initialized before any other init
int arr[100] = {};          // all elements zero-initialized
std::memset(&obj, 0, sizeof(obj));  // manual zero-init (not language zero-init)
```

### The Hierarchy

```
Zero-Initialization (always bit pattern 0)
  └─ Value-Initialization (zero for fundamentals, default-construct for classes)
       └─ Default-Initialization (indeterminate for fundamentals, default-construct for classes)
```

```cpp
struct POD {
    int a;
    double b;
};

POD p1;          // default-init: a and b are indeterminate
POD p2{};        // value-init: a = 0, b = 0.0
POD p3 = POD{};  // value-init: a = 0, b = 0.0

static POD p4;   // zero-init: a = 0, b = 0.0 (static storage)
```

### Perils of Missing Initializers

```cpp
struct Buffer {
    char data[1024];
    size_t length;
};

Buffer b1{};           // all zero: data is all '\0', length is 0
Buffer b2;             // INDERTERMINATE: data and length are garbage
Buffer b3 = {"hello"}; // data = "hello\0\0...\0", length = 0 (!)
                        // length is zero because the second initializer is missing
```

The `b3` case is especially dangerous: the string fills `data`, but `length` is zero-initialized
because no initializer was provided for it. This is not what you'd expect from a C-style struct
initialization.

### Safe Pattern: Always Brace-Initialize

```cpp
Buffer b4{"hello", 5};  // explicit: data = "hello\0...", length = 5
Buffer b5{};             // safe: everything zero
```

## Aggregate Initialization with Default Member Initializers

```cpp
struct Config {
    int timeout_ms = 5000;
    int max_retries = 3;
    bool verbose = false;
};

Config c1{};                    // uses all defaults: {5000, 3, false}
Config c2{1000};                // timeout_ms=1000, max_retries=3, verbose=false
Config c3{1000, 5, true};       // all specified
Config c4{.verbose = true};     // C++20: only verbose overridden, rest use defaults
```

### Interaction with `= delete` and Private Members

```cpp
struct Secret {
private:
    int hidden;
};

Secret s{};  // ERROR: private member, not an aggregate (private non-static data member)
```

If a class has any private or protected non-static data members, it is not an aggregate and cannot
use aggregate initialization.

## Aggregates and `std::is_aggregate`

```cpp
#include <type_traits>

struct Plain { int x; int y; };
struct WithCtor { WithCtor() = default; int x; };  // C++17 aggregate
struct NonAggregate { NonAggregate() {} int x; };  // user-provided ctor, not aggregate

static_assert(std::is_aggregate_v<Plain>);          // true
static_assert(std::is_aggregate_v<WithCtor>);        // true (C++17+)
static_assert(!std::is_aggregate_v<NonAggregate>);   // false
```

## Practical Patterns

### Protocol Header Initialization

```cpp
struct EthernetHeader {
    uint8_t dst_mac[6];
    uint8_t src_mac[6];
    uint16_t ethertype;
};

EthernetHeader frame{
    {0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF},  // broadcast
    {0x00, 0x11, 0x22, 0x33, 0x44, 0x55},  // source
    0x0800                                    // IPv4
};
```

### Compile-Time Configuration

```cpp
struct BuildConfig {
    static constexpr int version_major = 2;
    static constexpr int version_minor = 1;
    bool debug_mode = false;
    int log_level = 1;
};

constexpr BuildConfig release_config{.debug_mode = false, .log_level = 2};
constexpr BuildConfig debug_config{.debug_mode = true, .log_level = 4};
```

### Interop with C Structs

```cpp
extern "C" {
    struct C_Point { double x, y; };
}

C_Point p{1.0, 2.0};  // aggregate init works across language boundary
```

### Shared Memory and Mapped Structures

Aggregates are critical for memory-mapped I/O and shared memory, where you need precise control over
the binary layout:

```cpp
struct __attribute__((packed)) UDPHeader {
    uint16_t src_port;
    uint16_t dst_port;
    uint16_t length;
    uint16_t checksum;
};

// Map directly onto a network buffer
auto* header = reinterpret_cast<const UDPHeader*>(packet_data);
std::cout << "Source port: " << ntohs(header->src_port) << "\n";
```

Note: For protocol headers, always use fixed-width integers from `<cstdint>` and specify endianness
explicitly.

### Aggregate Initialization with Bit-Fields

```cpp
struct Flags {
    unsigned int read : 1;
    unsigned int write : 1;
    unsigned int execute : 1;
    unsigned int reserved : 29;
};

Flags f{};                    // all bits zero
Flags f2{.read = 1, .write = 1};  // C++20: r=1, w=1, x=0, reserved=0
```

### Aggregate Initialization and `constexpr`

Since aggregates with trivial special member functions can be used in constant expressions, they are
ideal for compile-time configuration:

```cpp
struct Version {
    uint8_t major;
    uint8_t minor;
    uint8_t patch;
};

constexpr Version CURRENT_VERSION{2, 1, 0};
static_assert(CURRENT_VERSION.major == 2);

constexpr bool is_compatible(Version v) {
    return v.major == CURRENT_VERSION.major;
}

static_assert(is_compatible({2, 0, 0}));
static_assert(!is_compatible({1, 9, 9}));
```

### Empty Aggregate Initialization

An empty initializer list value-initializes the aggregate, which means all members without default
member initializers are zero-initialized:

```cpp
struct Empty {};

Empty e{};          // valid, zero-sized (sizeof is 1)
Empty e2 = {};      // same

struct WithDefaults {
    int a = 42;
    int b = 99;
};

WithDefaults wd{};  // a=42, b=99 (defaults applied)
```

### Aggregate Initialization and `std::array`

`std::array` is an aggregate (it has no user-provided constructors), so it can be initialized with
brace init:

```cpp
std::array<int, 5> arr{1, 2, 3, 4, 5};
std::array<int, 5> arr2{};         // all zeros
std::array<int, 5> arr3 = {1, 2};  // {1, 2, 0, 0, 0}

constexpr std::array<int, 3> lookup{10, 20, 30};  // compile-time
```

### Aggregates vs Structured Bindings

Aggregates work naturally with C++17 structured bindings:

```cpp
struct Pair {
    int first;
    int second;
};

Pair p{1, 2};
auto [a, b] = p;  // a=1, b=2 (copies)
auto& [ref_a, ref_b] = p;  // references to p.first, p.second
```

### Aggregate Initialization with `auto`

```cpp
auto point = Point{1.0, 2.0};       // Point is deduced from the initializer
auto arr = std::array{1, 2, 3};     // C++17 CTAD: std::array<int, 3>

auto agg = S{.a = 1, .b = 2};     // C++20: designated init with auto
```

### `std::is_aggregate` in Generic Code

```cpp
template<typename T>
void zero_init(T& obj) {
    if constexpr (std::is_aggregate_v<T>) {
        obj = T{};  // aggregate init: zero-initialize all members
    } else {
        // For non-aggregates, rely on default constructor
        obj = T{};
    }
}
```

## Common Pitfalls

### 1. Adding a Member Breaks Positional Initialization

```cpp
struct V1 { int a, b; };
struct V2 { int a, b, c; };  // added field

V2 v{1, 2};  // c is zero-initialized -- may not be what you want
```

Solution: use C++20 designated initializers.

### 2. Narrowing in Aggregate Init

```cpp
struct S { char c; int i; };
S s{256, 42};   // ERROR: 256 doesn't fit in char (narrowing)
S s2{127, 42};  // OK: 127 fits in char
```

### 3. Out-of-Order Designated Initializers Still Initialize in Declaration Order

```cpp
struct S { int a; int b; };
S s{.b = expr_using_a(), .a = 1};
// b's initializer runs FIRST (declaration order), but a is still 1 at that point
// because designator values are evaluated in their syntactic order
```

Wait -- actually, the values are associated with their designators. The initialization order is
declaration order: `a` is initialized first with value `1`, then `b` with `expr_using_a()`. The C++
standard requires that initializers are applied in declaration order regardless of designator order
[N4950 §9.4.5.4].

### 4. Brace Elision with Nested Aggregates

```cpp
struct Inner { int x, y; };
struct Outer { Inner a, b; };

Outer o{1, 2, 3, 4};      // OK but fragile: Inner a={1,2}, Inner b={3,4}
Outer o2{{1, 2}, {3, 4}}; // BETTER: explicit nesting
```

### 5. Aggregate Init Does Not Call Constructors

```cpp
struct Wrapper {
    std::string name;  // non-trivial type
    int count;
};

Wrapper w{"hello", 5};  // aggregate init: calls string(const char*) for name
// This is NOT a constructor call -- it's aggregate initialization that
// happens to call the string constructor as part of element initialization
```

### 6. Static Aggregates Are Zero-Initialized First

```cpp
struct S { int a, b; };
S global_s;  // zero-initialized (static storage duration), then NO further init
              // because no initializer was provided (default-init has no effect on static)
S global_s2{};  // zero-initialized (static storage duration), then value-init (still zero)
S global_s3{1, 2};  // zero-initialized, then aggregate init to {1, 2}
```

## See Also

- **Module 7 (Data Layout)**: Fundamental types, struct layout, padding, and alignment
- **Module 8 (Pointers, References, Views)**: Pointer lifetime and reference binding
- **Module 9.2 (Uniform Initialization)**: Brace init, `initializer_list`, and narrowing conversions
- **Module 9.4 (Constant Expressions)**: `constexpr` aggregates and compile-time initialization
- **Module 10 (Ownership and RAII)**: RAII and why aggregates with non-trivial members need care
