---
title: Uniform Initialization
description:
  "C++: Uniform Initialization — Initialization Syntaxes; Direct Initialization; Copy Initialization; List Initialization. and examination."
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: uniform-initialization
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

C++98 had three initialization syntaxes: `T()`, `T = x`, and `T x`. Each had subtly different rules,
and none could initialize containers or arrays uniformly. C++11 introduced brace initialization
(`{}`) as a "uniform" syntax intended to work everywhere. The reality is more nuanced: brace
initialization interacts with overload resolution, `std::initializer_list`, and narrowing
conversions in ways that every systems programmer must understand.

## Initialization Syntaxes

### Direct Initialization

Uses parentheses or braces without `=`. The constructor is called directly.

```cpp
std::string s1("hello");      // direct: calls string(const char*)
std::string s2(10, 'x');      // direct: calls string(size_t, char)
std::vector<int> v1(5);       // direct: vector with 5 default-constructed elements
```

### Copy Initialization

Uses `=`. The right-hand side is converted (if necessary) to the target type.

```cpp
std::string s1 = "hello";     // copy init: constructs from const char*, then moves
int x = 3.14;                 // copy init: narrowing conversion (double to int)
std::string s2 = s1;          // copy init: calls copy constructor
```

Copy initialization considers only non-explicit constructors [N4950 §9.4.5].

### List Initialization

Uses braces. This is the "uniform" syntax introduced in C++11.

```cpp
std::string s1{"hello"};      // direct list init
std::string s2 = {"hello"};   // copy list init
std::vector<int> v{1, 2, 3};  // list init: calls initializer_list constructor
int arr[]{1, 2, 3};           // aggregate init (also brace-based)
```

### Key Difference: Explicit Constructors

```cpp
struct Widget {
    explicit Widget(int x) : value(x) {}
    int value;
};

Widget w1(42);         // OK: direct init
Widget w2 = 42;        // ERROR: copy init, explicit constructor not considered
Widget w3{42};         // OK: direct list init
Widget w4 = {42};      // OK in C++11: copy list init ignores explicit (changed in C++17 for copy-list-init)
```

In C++17, copy list initialization respects `explicit` [N4950 §9.4.5.3]. Before C++17,
`Widget w4 = {42}` would compile, which was a defect.

## The Most Vexing Parse

C++'s grammar is ambiguous when a declaration can be interpreted as either a variable definition or
a function declaration. The compiler always chooses the function declaration interpretation [N4950
§9.4.1].

```cpp
struct Timer {};
struct Widget {
    Widget(Timer t);
};

Widget w1(Timer());        // FUNCTION DECLARATION: w1 is a function returning Widget
                            // taking a function pointer Timer(*)()
Widget w2(Timer{});        // VARIABLE: braces prevent function declaration parsing
Widget w3{Timer{}};        // VARIABLE: also unambiguous
```

### Classic Examples

```cpp
std::ifstream file1("data.txt");     // variable
std::ifstream file2(std::string());   // FUNCTION DECLARATION (vexing parse)
std::ifstream file3{std::string{"data.txt"}};  // variable

std::mutex m;
std::lock_guard<std::mutex> lock1(m);    // variable
std::lock_guard<std::mutex> lock2();      // FUNCTION DECLARATION (vexing parse!)
std::lock_guard<std::mutex> lock3{m};    // variable (brace init avoids the parse)
```

Brace initialization eliminates the vexing parse entirely, which is its single greatest practical
benefit.

## `std::initializer_list` and Its Pitfalls

`std::initializer_list<T>` is a lightweight proxy object that refers to a temporary array of
`const T` objects [N4950 §16.10]. When a constructor or function takes an `std::initializer_list`,
brace initialization has special overload resolution behavior.

### Overload Resolution with `initializer_list`

If a class has a constructor that takes `std::initializer_list`, it will be strongly preferred when
braces are used:

```cpp
struct Widget {
    Widget(int x) { std::cout << "int\n"; }
    Widget(std::initializer_list<int> il) { std::cout << "initializer_list\n"; }
};

Widget w1(42);         // prints "int"
Widget w2{42};         // prints "initializer_list" (!)
Widget w3 = {42};      // prints "initializer_list"
Widget w4{10, 20};     // prints "initializer_list"
Widget w5(10, 20);     // ERROR: no matching constructor
```

This is one of the most surprising behaviors in C++ initialization. A single `int` in braces matches
`initializer_list<int>` over the `int` constructor.

### The `vector` Trap

```cpp
std::vector<int> v1(10, 20);    // vector with 10 elements, each value 20
std::vector<int> v2{10, 20};    // vector with 2 elements: 10 and 20
```

The parentheses call `vector(size_type, const T&)`. The braces call `vector(initializer_list<T>)`.

### Workaround: Using Parentheses for Non-List Construction

When you want to call a specific constructor that takes individual arguments, use parentheses:

```cpp
std::vector<std::string> v1(10, "hello");   // 10 copies of "hello"
std::vector<std::string> v2{10, "hello"};   // ERROR: can't convert int to string
```

### Empty Braces

```cpp
Widget w1;     // default constructor
Widget w2{};   // value-initialization (zero-init for PODs, default for classes)
Widget w3();   // FUNCTION DECLARATION (vexing parse)
```

Use `{}` instead of `()` when default-constructing to avoid the vexing parse.

## Narrowing Conversion Errors in Brace Init

Brace initialization prohibits implicit narrowing conversions [N4950 §9.4.5.3]. This is a major
safety benefit over parentheses.

```cpp
int a = 3.14;       // OK: double-to-int narrowing (warning at best)
int b{3.14};        // ERROR: narrowing conversion from double to int
int c(3.14);        // OK: narrowing allowed in parentheses

char d = 1000;      // OK: 1000 overflows char (undefined for signed, wraps for unsigned)
char e{1000};       // ERROR: narrowing conversion

int f = 1.0;        // OK: 1.0 fits exactly in int
int g{1.0};         // ERROR: narrowing (double to int), even though value fits
```

### What Counts as Narrowing?

A narrowing conversion is any implicit conversion where [N4950 §9.4.5.3]:

- A floating-point type is converted to an integer type
- A `long double` is converted to `double` or `float`, or `double` to `float`, unless the value is
  constant and fits
- An integer type is converted to a narrower integer type, unless the value is constant and fits
- An integer type is converted to an unsigned type that cannot represent all values of the source
  type

```cpp
int a{100};             // OK: constant, fits
int b{2000000000};      // OK: constant, fits in int
char c{100};            // OK: constant, fits in char
char d{200};            // ERROR: 200 does not fit in char
unsigned u{-1};         // ERROR: narrowing from signed to unsigned
float f{3.14f};         // OK: no narrowing
double d2{1.0};         // OK: 1.0 is exact
```

### Bit-field Narrowing

```cpp
struct S {
    int x : 3;
};

S s1{7};    // OK: 7 fits in 3-bit signed int (-4 to 7)
S s2{8};    // ERROR: 8 does not fit in 3-bit signed int
```

## `=` Initializer Form Differences

The presence or absence of `=` in list initialization affects `explicit` constructor handling:

```cpp
struct Explicit {
    explicit Explicit(int) {}
};

Explicit e1(42);       // OK: direct init
Explicit e2 = 42;      // ERROR: copy init, explicit not considered
Explicit e3{42};       // OK: direct list init (C++11)
Explicit e4 = {42};    // ERROR: copy list init, explicit considered and rejected (C++17+)
```

### For Aggregate Types

```cpp
struct Point {
    int x, y;
};

Point p1 = {1, 2};    // copy list init of aggregate
Point p2{1, 2};       // direct list init of aggregate
Point p3 = Point{1, 2};  // prvalue + copy init (likely elided)
```

For aggregates, `= {}` and `{}` are semantically equivalent. Both perform aggregate initialization.

### For `auto`

```cpp
auto x1 = {1, 2, 3};   // auto deduces std::initializer_list<int>
auto x2{1};             // C++17: auto deduces int; C++11/14: initializer_list<int>
auto x3{1, 2};          // ERROR: can't deduce auto from multiple values in braces (C++17+)
```

The C++17 change for `auto x2{1}` was a breaking change. C++17 made `auto{single-value}` deduce the
value type directly, not `initializer_list`.

## Interaction with `constexpr` Constructors

```cpp
struct Point {
    constexpr Point(int x, int y) : x(x), y(y) {}
    int x, y;
};

constexpr Point origin{0, 0};      // compile-time initialization
Point p{3, 4};                      // runtime initialization
```

Brace initialization works identically with `constexpr` constructors and enables compile-time object
construction.

## Initialization of Class Members

```cpp
class Widget {
    int a = 10;         // default member initializer (in-class)
    int b;
    int c;
public:
    Widget() : b(20), c{30} {}     // member initializer list
    Widget(int x) : b(x) {}        // c uses default member initializer (30)
    Widget(int x, int y) : b{x}, c{y} {}  // braces in initializer list
};
```

Braces in the member initializer list are equivalent to parentheses for most types. The distinction
matters only when `initializer_list` constructors are involved.

```cpp
struct Inner {
    Inner(std::initializer_list<int>) { std::cout << "init_list\n"; }
    Inner(int) { std::cout << "int\n"; }
};

class Outer {
    Inner i;
public:
    Outer() : i{42} {}    // prints "init_list" (!)
    Outer(int) : i(42) {}  // prints "int"
};
```

## Return Value Initialization

The return statement also participates in initialization:

```cpp
std::vector<int> make_vector() {
    return {1, 2, 3};  // copy list init of return value
}

std::pair<int, int> make_pair() {
    return {1, 2};     // copy list init
}
```

C++17 guaranteed copy elision (NRVO/prvalue semantics) means the return value is constructed
directly in the caller's storage, making `{1, 2, 3}` efficient without moves.

### Returning Braces from Functions

```cpp
struct Point {
    int x, y;
};

Point make_point(int x, int y) {
    return {x, y};      // aggregate init of returned prvalue
}

Point make_origin() {
    return {};           // value-init: x=0, y=0
}
```

### Overload Resolution Priority

When braces are used, the compiler follows this priority for overload resolution [N4950 §12.4.3]:

1. If a constructor takes `std::initializer_list`, and the arguments can be converted to the list
   element type, the `initializer_list` constructor is preferred.
2. If no `initializer_list` constructor matches, normal overload resolution applies.
3. If the arguments cannot be converted to the `initializer_list` type, the `initializer_list`
   constructor is not considered.

```cpp
struct Widget {
    Widget(int, int) { std::cout << "int,int\n"; }
    Widget(std::initializer_list<long>) { std::cout << "init_list<long>\n"; }
    Widget(std::initializer_list<std::string>) { std::cout << "init_list<string>\n"; }
};

Widget w1{10, 20};       // prints "init_list<long>" (int -> long conversion)
Widget w2(10, 20);       // prints "int,int" (direct match)
Widget w3{10, 20.0};     // ERROR: narrowing in init_list (double -> long)
```

### Preventing `initializer_list` Hijacking

If you want to prevent the `initializer_list` constructor from stealing overloads, you have several
options:

**Option 1: Use parentheses for the desired overload**

```cpp
std::vector<int> v(10, 0);   // 10 elements, each 0
```

**Option 2: Add an overload that is a better match**

```cpp
struct Widget {
    Widget(std::initializer_list<int>) { std::cout << "list\n"; }
    Widget(std::initializer_list<double>) { std::cout << "double list\n"; }
    Widget(int) { std::cout << "int\n"; }
};

Widget w{42};  // calls Widget(int), not initializer_list<int>
               // because Widget(int) is a better match than converting int to initializer_list
```

**Option 3: Remove the `initializer_list` constructor**

If it is not needed, removing it eliminates the ambiguity entirely.

## Brace Init and Smart Pointers

```cpp
auto p1 = std::make_shared<int>(42);      // preferred: single allocation
auto p2 = std::shared_ptr<int>{new int{42}};  // works but two allocations (control block separate)

std::unique_ptr<int[]> arr{new int[10]{1, 2, 3}};  // unique_ptr with array
```

## Brace Init and Optional Values

```cpp
std::optional<int> opt1{42};     // engaged with 42
std::optional<int> opt2{};       // disengaged (nullopt)
std::optional<int> opt3{std::nullopt};  // disengaged

std::optional<std::string> opt4{};  // disengaged
std::optional<std::string> opt5{"hello"};  // engaged with "hello"
```

## Brace Init and Variant

```cpp
std::variant<int, double, std::string> v1{42};       // holds int(42)
std::variant<int, double, std::string> v2{3.14};     // holds double(3.14)
std::variant<int, double, std::string> v3{"hello"};  // holds string("hello")

std::variant<int, double, std::string> v4{0};        // holds int(0), NOT string
```

Brace init deduces the type from the initializer, not from the variant alternatives in order.

## Brace Init and Structured Bindings

```cpp
auto [x, y] = std::pair{1, 2};      // structured binding with brace init
auto [key, value] = std::make_pair("name", 42);

struct Point { int x, y; };
auto [px, py] = Point{3, 4};        // aggregate init + structured binding
```

## Brace Init and STL Containers

```cpp
std::map<std::string, int> m{
    {"alice", 30},
    {"bob", 25},
    {"charlie", 35}
};

std::set<int> s{5, 3, 1, 4, 2};  // sorted: {1, 2, 3, 4, 5}

std::unordered_map<std::string, int> um{
    {"x", 1},
    {"y", 2}
};
```

All standard containers accept brace initialization, which internally uses `initializer_list`
constructors.

## Common Pitfalls

### 1. `initializer_list` Steals the Overload

```cpp
std::vector<int> v(10);    // 10 elements
std::vector<int> v2(10);   // same
std::vector<int> v3{10};   // ONE element: {10}
```

If you intend to construct a vector with a count, always use parentheses.

### 2. Empty Braces vs Default Construction

```cpp
struct Widget {
    Widget() { std::cout << "default\n"; }
    Widget(std::initializer_list<int>) { std::cout << "init_list\n"; }
};

Widget w1;      // prints "default"
Widget w2{};    // prints "default" (empty braces = default construction)
Widget w3{{}};  // prints "init_list" (empty initializer_list)
```

### 3. Brace Initialization and `bool`

```cpp
bool b1{0};       // OK: false
bool b2{1};       // OK: true
bool b3{2};       // ERROR: narrowing (2 does not fit in bool)
bool b4 = 2;      // OK: non-zero is true (surprising!)
```

### 4. Pair and Tuple Initialization

```cpp
std::pair<int, int> p1{1, 2};        // OK
std::pair<int, int> p2(1, 2);        // OK
std::pair<int, int> p3 = {1, 2};     // OK

std::pair<std::string, int> p4{"hello", 42};   // OK: braces work with implicit conversions
std::pair<std::string, int> p5{"hello"s, 42};  // explicit s suffix
```

### 5. Array Initialization Differences

```cpp
int a1[3] = {1, 2, 3};    // OK: copy aggregate init
int a2[3]{1, 2, 3};       // OK: direct aggregate init
int a3[3](1, 2, 3);       // ERROR: arrays can't use parenthesized init
```

## See Also

- **Module 7 (Data Layout)**: Fundamental types, struct layout, and alignment
- **Module 8 (Pointers, References, Views)**: Reference binding during initialization
- **Module 9.3 (Aggregate Initialization)**: Detailed aggregate initialization rules and designated
  initializers
- **Module 9.4 (Constant Expressions)**: `constexpr` and `constinit` initialization
- **Module 10 (Ownership and RAII)**: RAII and initialization of resource-holding objects
