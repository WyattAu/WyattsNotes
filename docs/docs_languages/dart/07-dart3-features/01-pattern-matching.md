---
title: Pattern Matching
description:
  Dart: Pattern Matching — Pattern Matching Overview; Refutable vs Irrefutable
  Patterns; Where Patterns Appear; Logical Patterns.
date: 2026-04-05T00:00:00.000Z
tags:
  - Dart
categories:
  - Dart
slug: pattern-matching
---

## Pattern Matching Overview

Pattern matching in Dart 3 is a compile-time mechanism for decomposing and inspecting values. A
pattern is a syntactic construct that describes the **shape** of a value — its type, its structure,
and the relationships between its parts. When a value is tested against a pattern, the compiler
either matches (the value conforms) or refutes (the value does not conform).

This is not a new concept in language design. Rust has had irrefutable pattern matching since 1.0,
Haskell has had pattern matching since its inception, and Scala has had extractors for over a
decade. What Dart 3 brings is a unified pattern system that works across switch statements, if-case
expressions, for-in loops, variable declarations, and catch clauses.

### Refutable vs Irrefutable Patterns

This distinction is foundational. Get this wrong and you will write code that crashes at runtime.

**Irrefutable patterns** always match any value of the given type. The compiler enforces that the
value can never fail to match. These are allowed anywhere a pattern is accepted — variable
declarations, for-in loops, and function parameters.

```dart
// Irrefutable: any int matches 'var x'
var x = 42;

// Irrefutable: any int matches 'int y'
int y = 42;

// Irrefutable: any (int, String) record matches this destructuring
var (count, label) = (3, 'items');
```

**Refutable patterns** may fail to match. The compiler requires them only in contexts where failure
is handled — switch cases, if-case, and catch clauses. Using a refutable pattern in a variable
declaration is a compile error because there is no fallback path.

```dart
// Refutable: only matches if the value is exactly 42
if (x case 42) {
  print('Found the answer');
}

// Compile error — refutable pattern in variable declaration
// var 42 = x; // ERROR

// Refutable: only matches if value is an int &gt; 0
if (x case int n when n > 0) {
  print('Positive: $n');
}
```

### Where Patterns Appear

Patterns are not limited to switch statements. Dart 3 allows patterns in five contexts:

| Context              | Pattern Type               | Example                        |
| -------------------- | -------------------------- | ------------------------------ |
| Switch cases         | Refutable                  | `case [a, b]:`                 |
| if-case              | Refutable                  | `if (x case [a, b])`           |
| for-in               | Irrefutable (each element) | `for (var (k, v) in pairs)`    |
| Variable declaration | Irrefutable                | `var (a, b) = record`          |
| catch clauses        | Refutable                  | `on FormatException catch (e)` |

The compiler enforces the refutability constraint at each site. A refutable pattern in a variable
declaration produces a hard error. An irrefutable pattern in a switch case is allowed but pointless
(it always matches, making subsequent cases unreachable).

## Logical Patterns

Logical patterns combine other patterns using boolean logic. They are the pattern-matching
equivalent of `||`, `&&`, and relational operators.

### Or Patterns (`||`)

The or-pattern matches if **any** of its sub-patterns match. This is the pattern version of a
fallthrough switch. The sub-patterns must bind the same variables (same names, same types).

```dart
String describe(int value) => switch (value) {
  0 || 1 || 2 => 'small',
  3 || 4 || 5 => 'medium',
  _ => 'large',
};
```

Or-patterns are particularly useful with enum values where you want to group cases:

```dart
enum HttpMethod { get, post, put, delete, patch, head, options }

bool isReadOnly(HttpMethod method) => switch (method) {
  HttpMethod.get || HttpMethod.head || HttpMethod.options => true,
  _ => false,
};
```

**Binding consistency**: All branches of an or-pattern must bind the same variables. The compiler
enforces this because it cannot know which branch matched at compile time, so it must guarantee that
all bindings are valid regardless.

```dart
// ERROR: different variable names in or-pattern branches
switch (record) {
  case (int a, _) || (_, int b): // Compile error
    print(a); // Which branch defined 'a'?
}

// OK: same bindings in all branches
switch (record) {
  case (int a, _) || (int a, int _):
    print(a); // 'a' is defined in both branches
}
```

### And Patterns (`&&`)

The and-pattern matches if **both** sub-patterns match. The second sub-pattern can reference
bindings from the first. This enables type refinement — match a general type, then narrow it.

```dart
switch (value) {
  case int n && n > 0:
    print('Positive integer: $n');
  case int n && n < 0:
    print('Negative integer: $n');
  case int _:
    print('Zero');
}
```

The and-pattern evaluates left-to-right. The right-hand side can use variables bound by the
left-hand side. This ordering is not just syntactic — it is semantic. The compiler generates code
that first tests the left pattern, and only if it succeeds, tests the right pattern against the
bound variables.

### Relational Patterns

Relational patterns use `==`, `!=`, `<`, `>`, `<=`, `>=` to compare the matched value against a
constant. These are not general-purpose — the right-hand side must be a compile-time constant.

```dart
String categorize(int score) => switch (score) {
  < 0 => 'invalid',
  >= 0 && < 60 => 'fail',
  >= 60 && < 80 => 'pass',
  >= 80 && <= 100 => 'distinction',
  > 100 => 'invalid',
};

// Relational patterns with enum ordinals
enum Priority { low, medium, high, critical }

bool isUrgent(Priority p) => switch (p) {
  >= Priority.high => true,
  _ => false,
};
```

The relational operators work on any type that implements the corresponding operator. For enums,
Dart synthesizes `index`-based comparison, so `>= Priority.high` checks
`p.index >= Priority.high.index`.

**Why relational patterns exist**: Without them, you would need a guard clause for every comparison:

```dart
// Without relational patterns — verbose
String categorize(int score) => switch (score) {
  _ when score < 0 => 'invalid',
  _ when score >= 0 && score < 60 => 'fail',
  // ...
};

// With relational patterns — declarative
String categorize(int score) => switch (score) {
  < 0 => 'invalid',
  >= 0 && < 60 => 'fail',
  // ...
};
```

## Cast Patterns

The cast pattern (`as`) performs a type cast and binds the result. This is the pattern-matching
equivalent of `as`, but with the safety of a runtime check embedded in the pattern itself.

### Basic Cast Pattern

```dart
// Without cast pattern — manual type check + cast
void process(Object value) {
  if (value is String) {
    print((value as String).toUpperCase()); // Redundant cast after is-check
  }
}

// With cast pattern — single operation
void process(Object value) {
  if (value case String s) {
    print(s.toUpperCase()); // s is already typed as String
  }
}
```

Wait — `case String s` is a **type test pattern**, not a cast pattern. The cast pattern uses `as`
explicitly. Let me be precise:

```dart
// Type test pattern (is-check)
if (value case String s) {
  // Matches if value is String. s has type String.
}

// Cast pattern (as-cast)
if (value case var s as String) {
  // Casts value to String. s has type String.
  // Throws if value is NOT a String (same as 'value as String').
}
```

The difference matters. The type test pattern (`String s`) only matches if the value is already a
`String`. The cast pattern (`var s as String`) attempts to cast — if the value is a subtype of
`String` (which is impossible since `String` is sealed), it succeeds; otherwise it throws. In
practice, for sealed types like `String`, they behave identically. The cast pattern becomes relevant
with custom type hierarchies where implicit upcasts exist.

### Cast Pattern with Null Safety

The cast pattern is the pattern equivalent of `as?` in other languages — except Dart's `as` throws
on failure. The cast pattern will throw at runtime if the cast fails, just like `as`.

```dart
// This throws if value is not a List&lt;int&gt;
if (value case List&lt;int&gt; items) {
  print('Got ${items.length} integers');
}

// Equivalent to:
if (value is List&lt;int&gt;) {
  final items = value as List&lt;int&gt;;
  print('Got ${items.length} integers');
}
```

**When to use cast patterns**: Use them when you need to narrow a `dynamic` or `Object` to a
specific type and you are certain the cast will succeed (or you want an exception on failure). Use
type test patterns when you want to conditionally handle a specific type.

## Null-Check and Null-Assert Patterns

Dart's null safety is sound at compile time, but pattern matching provides runtime null
discrimination within nullable contexts.

### Null-Check Pattern (`?`)

The null-check pattern matches only non-null values. It binds the value with a non-nullable type.

```dart
String? maybeName;
// ...
if (maybeName case var name?) {
  // name has type String (not String?)
  print('Name is: $name');
} else {
  print('Name is null');
}
```

The `?` suffix on the variable pattern is the null-check. Without it, `var name` would bind
`maybeName` as `String?`, and you would still need null-aware access inside the body.

This is equivalent to:

```dart
if (maybeName != null) {
  final name = maybeName; // Promoted to String by flow analysis
  print('Name is: $name');
}
```

The pattern version is more concise and composes with other patterns:

```dart
// Combining null-check with type test
Object? maybeList;
if (maybeList case List&lt;int&gt; items?) {
  // items is List&lt;int&gt; (not List&lt;int&gt;?)
  print('Non-null list of ints: $items');
}
```

### Null-Assert Pattern (`!`)

The null-assert pattern matches only non-null values, and throws if the value is null. This is the
pattern equivalent of the `!` postfix operator.

```dart
String? name;
// ...
// Throws if name is null — no else branch needed
if (name case var n!) {
  print(n.toUpperCase());
}
```

**Why use null-assert patterns**: They are useful in contexts where you have external knowledge that
a value is non-null, but the type system cannot prove it. For example, after checking a condition
that the analyzer cannot follow:

```dart
void process(Map&lt;String, dynamic&gt; json) {
  // We know 'name' is always present and non-null in our API
  if (json['name'] case var name!) {
    print(name);
  }
}
```

Use `?` (null-check) when you want to handle the null case. Use `!` (null-assert) when null is a
programming error and should crash.

### Null Patterns in Switch

```dart
String describe(String? value) => switch (value) {
  null => 'is null',
  '' => 'is empty',
  String s => 'is "$s"',
};
```

The `null` literal pattern matches the null value. The `String s` case implicitly does not match
null because `String` is non-nullable. The compiler handles this exhaustiveness for you — every
possible value of `String?` is covered.

## Constant Patterns

Constant patterns match against compile-time constant values. These are the simplest patterns — they
test for equality.

### Literal Constants

```dart
final responseCode = 200;
switch (responseCode) {
  case 200:
    print('OK');
  case 404:
    print('Not Found');
  case 500:
    print('Server Error');
  default:
    print('Unknown');
}
```

### Enum Constants

```dart
enum Status { initial, loading, success, failure }

switch (status) {
  case Status.initial:
    print('Not started');
  case Status.loading:
    print('In progress');
  case Status.success:
    print('Done');
  case Status.failure:
    print('Failed');
}
```

### Boolean Constants

```dart
switch (isEnabled) {
  case true:
    print('Enabled');
  case false:
    print('Disabled');
}
```

### Numeric Constants

```dart
String describeByte(int value) => switch (value) {
  0x00 => 'null byte',
  0x0A => 'newline',
  0x0D => 'carriage return',
  0x20 => 'space',
  _ => 'other (0x${value.toRadixString(16).toUpperCase().padLeft(2, '0')})',
};
```

**Constant patterns use `==`**: The matching is done via the `==` operator, not identity
(`identical`). This means two different objects that are equal will match. For most built-in types,
`==` checks value equality.

## Wildcard Patterns

The wildcard pattern discards a value — it matches anything but does not bind it.

### Single Wildcard (`_`)

```dart
// Discard the second element of a record
var (name, _) = ('Alice', 30);
print(name); // 'Alice'

// Discard in switch — match anything
switch (value) {
  case 42:
    print('The answer');
  case _:
    print('Something else');
}
```

The `_` in a variable declaration context is special — it tells the compiler you intentionally do
not need the value. In a switch, `_` is the catch-all default case.

### Double Wildcard (`__`)

When `_` is used as a variable name (not in a pattern context), Dart warns about unused variables.
The `__` pattern explicitly suppresses this warning when you have multiple wildcards and want to
make it clear you are intentionally discarding multiple values.

```dart
// _ alone in a non-pattern context generates a warning
final _ = something; // Warning: unused variable

// In pattern context, _ is always a wildcard (no warning)
switch (triple) {
  case (var a, _, _):
    print('First: $a');
}

// __ for explicit "I know this is unused"
switch (record) {
  case (_, __, var c):
    print('Third: $c');
}
```

In practice, `_` as a wildcard in pattern context does not generate warnings. The `__` form exists
for cases where the analyzer might be confused about intent. Use `_` unless you get a warning.

## Variable Patterns

Variable patterns bind a matched value to a new variable. They are the most basic pattern — they
always match.

### `var` Pattern

```dart
// Bind without type annotation — inferred type
var x = 42; // x has type int

// In a destructuring context
var (a, b, c) = (1, 2, 3);
```

### Typed Variable Pattern

```dart
// Bind with explicit type
int x = 42;

// In a pattern context
if (value case int n) {
  // n has type int
  print(n);
}
```

### Destructuring with Variable Binding

Variable patterns become powerful when combined with destructuring patterns. Each variable in the
pattern binds to the corresponding part of the matched value:

```dart
final (name, age, email) = ('Alice', 30, 'alice@example.com');
// name: String, age: int, email: String

// With type annotations
final (String name, int age, String email) = record;
```

## Object Patterns

Object patterns destructure an object by matching its properties. They use the object's getter
methods to extract values.

### Basic Object Destructuring

```dart
class Point {
  final double x;
  final double y;
  const Point(this.x, this.y);
}

// Destructure by field name
final Point(:x, :y) = Point(3.0, 4.0);
print('x: $x, y: $y');

// Equivalent to:
final tmp = Point(3.0, 4.0);
final x = tmp.x;
final y = tmp.y;
```

The `:x` syntax is shorthand for `x: var x` — it declares a variable `x` and binds it to the getter
`x`. This is called a "getter tear-off" pattern.

### Renaming in Object Patterns

```dart
final Point(x: px, y: py) = Point(3.0, 4.0);
print('px: $px, py: $py');
```

### Nested Object Destructuring

```dart
class Rectangle {
  final Point topLeft;
  final Point bottomRight;
  const Rectangle(this.topLeft, this.bottomRight);
}

final Rectangle(
  topLeft: Point(x: x1, y: y1),
  bottomRight: Point(x: x2, y: y2),
) = Rectangle(Point(0, 0), Point(10, 10));
```

### Positional vs Named Fields

Object patterns always use named getters. There is no positional form for object patterns —
positional patterns are for lists and records.

```dart
class Person {
  final String name;
  final int age;
  Person(this.name, this.age);
}

// Named getters only — positional constructor params don't matter
final Person(:name, :age) = Person('Alice', 30);

// This is NOT valid (no positional object pattern):
// final Person(name, age) = Person('Alice', 30); // ERROR
```

### Null Checking in Object Patterns

```dart
class Response {
  final int? statusCode;
  final String? body;
  Response(this.statusCode, this.body);
}

final Response(statusCode: var code?, body: var b?) = response;
// code is int (not int?), b is String (not String?)
```

The null-check pattern `?` can be applied to any getter in an object pattern to assert non-null.

### Object Pattern with Type Test

```dart
switch (shape) {
  case Circle(radius: var r) when r > 5:
    print('Large circle');
  case Rectangle(width: var w, height: var h):
    print('Rectangle: ${w}x${h}');
}
```

## List Patterns

List patterns match against list structure — they check length, element values, and types.

### Basic List Destructuring

```dart
final [a, b, c] = [1, 2, 3];
print('$a, $b, $c'); // 1, 2, 3
```

### Rest Pattern (`...`)

The rest pattern matches zero or more remaining elements:

```dart
final [first, ...rest] = [1, 2, 3, 4, 5];
print(first); // 1
print(rest);  // [2, 3, 4, 5]

final [...all] = [1, 2, 3];
print(all); // [1, 2, 3]

final [first, ...middle, last] = [1, 2, 3, 4, 5];
print(first);  // 1
print(middle); // [2, 3, 4]
print(last);   // 5
```

The rest pattern binds a `List` of the remaining elements. It can appear at most once in a list
pattern, and it can appear at the beginning, middle, or end.

### Skip Pattern with Wildcard

```dart
final [first, _, last] = [1, 2, 3];
print(first); // 1
print(last);  // 3
```

### Nested List Patterns

```dart
final matrix = [[1, 2], [3, 4], [5, 6]];

for (final [a, b] in matrix) {
  print('Row: $a, $b');
}
// Output:
// Row: 1, 2
// Row: 3, 4
// Row: 5, 6
```

### Matching List Length

List patterns implicitly check length. A pattern `[a, b]` only matches lists of exactly length 2:

```dart
String describeList(List&lt;int&gt; list) => switch (list) {
  [] => 'empty',
  [_] => 'singleton',
  [_, _] => 'pair',
  [_, _, ...] => 'three or more',
};
```

### Type Annotations in List Patterns

```dart
final [String name, int age] = ['Alice', 30];
// name: String, age: int

// Type mismatch at runtime throws
// final [int x, int y] = ['not', 'ints']; // Throws
```

## Map Patterns

Map patterns match against map structure — they check for the presence of specific keys and bind the
corresponding values.

### Basic Map Destructuring

```dart
final {'name': var name, 'age': var age} = {'name': 'Alice', 'age': 30};
print('Name: $name, Age: $age');
```

### Checking for Key Existence

Map patterns only match if all specified keys are present. Missing keys cause the pattern to refute:

```dart
String describeConfig(Map&lt;String, dynamic&gt; config) => switch (config) {
  {'host': String host, 'port': int port} =>
    'Server at $host:$port',
  {'host': String host} =>
    'Server at $host (default port)',
  _ =>
    'Invalid config',
};
```

### Combined with Type Patterns

Map values can be matched with sub-patterns:

```dart
final {'user': {'name': var name, 'roles': [String role, ...]}} = data;
print('User $name has role $role');
```

### Partial Matching

Map patterns do not require the map to contain only the specified keys. Extra keys are ignored:

```dart
final data = {'name': 'Alice', 'age': 30, 'city': 'London'};
final {'name': var name} = data; // OK — extra keys ignored
print(name); // 'Alice'
```

### Shorthand Map Pattern with Null-Safety

```dart
Map&lt;String, Object?&gt;? maybeConfig;
// ...
if (maybeConfig case {'theme': String theme, 'debug': bool debug}?) {
  // maybeConfig is non-null, has 'theme' (String) and 'debug' (bool) keys
  print('Theme: $theme, Debug: $debug');
}
```

## Record Patterns

Records are Dart 3's new anonymous aggregate types. Record patterns destructure them by position or
name.

### Positional Record Destructuring

```dart
final (name, age) = ('Alice', 30);
print('Name: $name, Age: $age');

// With type annotations
final (String name, int age) = record;
```

### Named Record Destructuring

```dart
final ({String name, int age}) = (name: 'Alice', age: 30);
print('Name: $name, Age: $age');

// Shorthand — ':name' binds variable 'name' from getter 'name'
final (:name, :age) = (name: 'Alice', age: 30);
```

### Mixed Positional and Named

```dart
final (int code, String message, {int? line, int? column}) = record;
```

### Nested Record Patterns

```dart
final ((x1, y1), (x2, y2)) = ((0, 0), (10, 10));
print('Rectangle from ($x1,$y1) to ($x2,$y2)');
```

### Type Annotations in Record Patterns

```dart
final (int x, String s, {double d}) = (42, 'hello', d: 3.14);
// x: int, s: String, d: double
```

The type annotations serve as runtime type checks. If the value at that position does not match the
declared type, the pattern refutes.

### Record Patterns in Switch

```dart
String describe(Object record) => switch (record) {
  (int x, int y) when x == y => 'Diagonal at ($x, $y)',
  (0, _) => 'On y-axis',
  (_, 0) => 'On x-axis',
  (int x, int y) => 'Point at ($x, $y)',
  _ => 'Not a 2D point',
};
```

## Sealed Class Exhaustiveness

Sealed classes and pattern matching are designed to work together. When you switch on a sealed
class, the compiler verifies that every subtype is handled.

### Exhaustive Switch on Sealed Types

```dart
sealed class Result&lt;T&gt; {}

class Success&lt;T&gt; extends Result&lt;T&gt; {
  final T value;
  Success(this.value);
}

class Failure&lt;T&gt; extends Result&lt;T&gt; {
  final String error;
  Failure(this.error);
}

String describe(Result&lt;int&gt; result) => switch (result) {
  Success(value: var v) => 'Success: $v',
  Failure(error: var e) => 'Failure: $e',
  // No default needed — compiler knows Success and Failure are the only subtypes
};
```

The compiler enumerates all direct subtypes of the sealed class in the same library. If you miss
one, you get a compile error. If you add a new subtype, every switch on the sealed class breaks at
compile time — not at runtime.

### Why `default` is Discouraged

Adding `default` to a switch on a sealed type defeats the purpose:

```dart
// BAD — default hides missing cases
String describe(Result&lt;int&gt; result) => switch (result) {
  Success(value: var v) => 'Success: $v',
  _ => 'Something else', // If you add a new subtype, this silently catches it
};

// GOOD — compiler forces you to handle every subtype
String describe(Result&lt;int&gt; result) => switch (result) {
  Success(value: var v) => 'Success: $v',
  Failure(error: var e) => 'Failure: $e',
};
```

### Adding a New Subtype

When you add `class Cancelled&lt;T&gt; extends Result&lt;T&gt;` to the sealed hierarchy, the
compiler flags every switch that does not handle it:

```
error: The type 'Cancelled<int>' is not exhaustively handled by the switch cases.
```

This is the entire motivation for sealed classes — they make the set of subtypes enumerable at
compile time, enabling exhaustive pattern matching. Without sealed, you would need `default` and
lose compile-time safety.

## if-case

The `if-case` construct allows pattern matching without a full switch statement. It is useful when
you want to match a single pattern and handle the non-matching case with normal control flow.

### Basic if-case

```dart
final response = [200, 'OK'];

if (response case [int code, String message]) {
  print('Response: $code $message');
}
```

### Guard Clauses with `when`

The `when` keyword adds a boolean guard to any pattern case. The guard runs after the pattern
matches:

```dart
if (response case [int code, _] when code >= 400) {
  print('Error response: $code');
}

// In switch
switch (user) {
  case User(age: var a) when a >= 18:
    print('Adult');
  case User(age: var a):
    print('Minor ($a years)');
}
```

### if-case with Variable Binding

```dart
final json = {'name': 'Alice', 'age': 30};

if (json case {'name': String name, 'age': int age}) {
  print('$name is $age years old');
}
```

### if-case-else

```dart
if (value case int n when n > 0) {
  print('Positive: $n');
} else if (value case int n) {
  print('Non-positive: $n');
} else {
  print('Not an integer');
}
```

The `when` guard is not part of the pattern — it is a separate boolean expression evaluated after
the pattern matches. Variables bound by the pattern are available in the guard expression.

## For-in Patterns

The for-in loop accepts a pattern in its variable declaration. Each element from the iterable is
matched against the pattern.

### Destructuring Records in a Loop

```dart
final records = [(1, 'one'), (2, 'two'), (3, 'three')];

for (final (number, word) in records) {
  print('$number: $word');
}
```

### Destructuring Maps in a Loop

```dart
final config = {'host': 'localhost', 'port': '8080', 'debug': 'true'};

for (final MapEntry(:key, :value) in config.entries) {
  print('$key = $value');
}
```

### Destructuring in Nested Loops

```dart
final matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (final [a, b, c] in matrix) {
  print('$a + $b + $c = ${a + b + c}');
}
```

### Filtering with Patterns

Combine for-in patterns with if-case for filtering:

```dart
final responses = [
  [200, 'OK'],
  [404, 'Not Found'],
  [500, 'Server Error'],
  [200, 'Created'],
];

for (final [int code, String msg] in responses) {
  if (code case >= 400) {
    print('Error $code: $msg');
  }
}
```

### For-in with Map Patterns

```dart
final List&lt;Map&lt;String, dynamic&gt;&gt; users = [
  {'name': 'Alice', 'role': 'admin'},
  {'name': 'Bob', 'role': 'user'},
  {'name': 'Charlie', 'role': 'admin'},
];

for (final {'name': String name, 'role': String role} in users) {
  print('$name ($role)');
}
```

## Common Pitfalls

### 1. Refutable Patterns in Irrefutable Contexts

```dart
// ERROR — refutable pattern in variable declaration
final [a, b] = someList; // What if the list has != 2 elements?

// OK — irrefutable pattern (rest element makes it always match)
final [a, b, ...rest] = someList;
```

This is the single most common mistake. The compiler catches it, but the error message can be
confusing if you do not understand the refutable/irrefutable distinction.

### 2. Or-Pattern Binding Mismatch

```dart
// ERROR — different bindings in or-pattern
switch (pair) {
  case (int a, String b) || (String a, int b): // Compile error
    print(a);
}

// OK — consistent bindings
switch (pair) {
  case (int a, _) || (String a, _):
    print(a);
}
```

### 3. Exhaustiveness on Non-Sealed Types

```dart
// This is NOT exhaustive — int has infinitely many values
String describe(int n) => switch (n) {
  0 => 'zero',
  1 => 'one',
  2 => 'two',
  // Missing: all other integers
  // No compile error because int is not sealed
};

// Fix: add a default case
String describe(int n) => switch (n) {
  0 => 'zero',
  1 => 'one',
  2 => 'two',
  _ => 'other',
};
```

Only sealed types (and enums) enable true exhaustive matching without `default`.

### 4. Object Patterns Require Getters, Not Fields

```dart
class Box {
  int _value; // Private field
  Box(this._value);
  int get value => _value;
}

// OK — 'value' is a public getter
final Box(:value) = Box(42);

// If there is no getter, the pattern cannot access the value
class Secret {
  final int _hidden = 42;
  // No public getter for _hidden
}
// final Secret(:_hidden) = Secret(); // ERROR — no getter named '_hidden'
```

Object patterns use the object's **public API** (getters). They cannot access private fields, even
from the same library. They access the getter, not the underlying field.

### 5. Rest Pattern in the Middle

```dart
// The rest pattern captures everything between the surrounding patterns
final [first, ...middle, last] = [1, 2, 3, 4, 5];
// first = 1, middle = [2, 3, 4], last = 5

// You cannot have two rest patterns
// final [...start, _, ...end] = list; // ERROR — at most one rest
```

### 6. Null-Check Pattern Does Not Bind in Else

```dart
String? maybeName = getName();

if (maybeName case var name?) {
  print(name); // name: String — non-null
} else {
  // 'name' is NOT in scope here
  print('null');
}
```

The variable bound by a pattern is only in scope within the case body. The `else` branch does not
have access to it.

### 7. Switch Expression vs Switch Statement

```dart
// Switch EXPRESSION — returns a value, no break needed
final result = switch (value) {
  1 => 'one',
  2 => 'two',
  _ => 'other',
};

// Switch STATEMENT — does not return a value, needs break
switch (value) {
  case 1:
    print('one');
    break;
  case 2:
    print('two');
    break;
  default:
    print('other');
}
```

In Dart 3, switch statements no longer require `break` for fallthrough prevention (it is implicit).
But only switch **expressions** return values. Mixing them up is a common source of confusion.

### 8. Guard Clauses and Exhaustiveness

A `when` guard does not count toward exhaustiveness. If all your cases have guards, the compiler
considers the switch non-exhaustive:

```dart
// ERROR — not exhaustive
String describe(int n) => switch (n) {
  _ when n > 0 => 'positive',
  _ when n < 0 => 'negative',
  // Missing: n == 0 (the guard 'n > 0' is false for 0, 'n < 0' is also false)
};

// Fix: add an unguarded case for zero
String describe(int n) => switch (n) {
  _ when n > 0 => 'positive',
  _ when n < 0 => 'negative',
  0 => 'zero',
};
```

### 9. Pattern Matching on `dynamic` Loses Type Safety

```dart
void process(dynamic value) {
  switch (value) {
    case int n:
      print('int: $n');
    case String s:
      print('String: $s');
    case List&lt;int&gt; items:
      print('List of ints: $items');
    default:
      print('Unknown: $value');
  }
}

// If 'value' is List&lt;String&gt;, the List&lt;int&gt; pattern does NOT match.
// List&lt;int&gt; is not a supertype of List&lt;String&gt; in Dart.
```

Dart's generics are reified at runtime. `List&lt;int&gt;` and `List&lt;String&gt;` are different
types. A `List&lt;int&gt;` pattern only matches a list whose runtime type argument is `int`. This is
correct behavior but surprises developers coming from languages with type erasure (Java).

### 10. Map Pattern Key Type Must Match

```dart
final map = {1: 'one', 2: 'two'};
// Map pattern keys must match the map's key type
if (map case {1: var one}) {
  print(one); // 'one'
}
// if (map case {'1': var one}) { } // ERROR — String key for int-keyed map
```
