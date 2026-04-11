---
title: Sealed Classes
date: 2026-04-05T00:00:00.000Z
tags:
  - Dart
categories:
  - Dart
slug: sealed-classes
---

## What Sealed Classes Are

Sealed classes are a language-level constraint that restricts a class hierarchy to a known, finite
set of subtypes, all of which must be declared in the same library. They are Dart 3's mechanism for
implementing **algebraic data types (ADTs)** — specifically, sum types.

### The Systems Engineering Motivation

In systems programming, you frequently model states that are mutually exclusive and exhaustive: a
network request is either pending, successful, or failed. A packet is either a SYN, ACK, or DATA
frame. A file descriptor is either open or closed. These are not just "different values" — they are
entirely different structures with different fields, different invariants, and different handling
logic.

Before Dart 3, you had three options for modeling this:

1. **Class hierarchies with `abstract class`** — no exhaustiveness checking, easy to forget a case.
2. **Enums** — exhaustive, but all variants share the same fields (no variant-specific data).
3. **Ad-hoc tagged unions** — use an enum field as a discriminator, with `switch` and `default`.

All three are deficient. Sealed classes solve this by combining the expressiveness of class
hierarchies (each variant has its own fields) with the exhaustiveness of enums (the compiler knows
all variants).

### Sum Types in Language Design

A sum type (tagged union, discriminated union) is a type that can be exactly one of a fixed set of
variants. This is fundamental in languages like Rust (`enum`), Haskell (`data`), and Scala 3
(`enum`/`sealed trait`). The key properties:

- **Closed**: No new variants can be added outside the defining module.
- **Exhaustive**: Pattern matching must handle all variants (or the compiler errors).
- **Heterogeneous**: Each variant can have entirely different fields.

Dart 3's `sealed class` provides exactly these properties.

## Declaring Sealed Classes

### Basic Syntax

```dart
sealed class NetworkResult {}

class Success extends NetworkResult {
  final int statusCode;
  final String body;
  Success(this.statusCode, this.body);
}

class Failure extends NetworkResult {
  final int statusCode;
  final String error;
  Failure(this.statusCode, this.error);
}

class Loading extends NetworkResult {}
```

The `sealed` modifier on `NetworkResult` means:

1. `NetworkResult` cannot be instantiated directly (it is implicitly abstract).
2. Direct subtypes of `NetworkResult` must be in the **same library** (same file, or files in the
   same `part`/`part of` chain).
3. The compiler can enumerate all direct subtypes.

### The Same-Library Restriction

This is the critical constraint. "Same library" in Dart means the same compilation unit — a file
plus all its `part` files. It does **not** mean the same package or the same directory.

```dart
// network_result.dart — the sealed class lives here
sealed class NetworkResult { ... }
class Success extends NetworkResult { ... }
class Failure extends NetworkResult { ... }

// other_file.dart — same package, DIFFERENT library
// class Timeout extends NetworkResult { ... } // COMPILE ERROR
// Cannot extend, implement, or mix in a sealed class from another library
```

**Why same-library only**: The compiler needs to enumerate all direct subtypes for exhaustiveness
checking. If subtypes could be in any library, the compiler would need whole-program analysis to
find them — which is impossible for separately compiled packages. By restricting to the same
library, the compiler has a complete, local view of the hierarchy.

**Practical implication**: You cannot split sealed class subtypes across files in a package unless
you use `part`/`part of`. This is a deliberate design trade-off — exhaustiveness is more valuable
than distribution.

```dart
// result.dart
sealed class Result&lt;T&gt; {}
part 'success.dart';
part 'failure.dart';

// success.dart
part of 'result.dart';
class Success&lt;T&gt; extends Result&lt;T&gt; { ... }

// failure.dart
part of 'result.dart';
class Failure&lt;T&gt; extends Result&lt;T&gt; { ... }
```

### Implicit Abstract

A sealed class is implicitly abstract. You cannot instantiate it:

```dart
sealed class Shape {}

// var s = Shape(); // COMPILE ERROR — sealed classes are implicitly abstract
```

You can add the `abstract` keyword explicitly for clarity, but it is redundant:

```dart
abstract sealed class Shape {} // Legal but redundant
```

## Sealed Subtypes

A sealed class can have subtypes that are classes, enums, or mixins. Each subtype relationship has
specific rules.

### `extends` — Class Subtypes

```dart
sealed class Expr {}

class Num extends Expr {
  final double value;
  Num(this.value);
}

class Add extends Expr {
  final Expr left;
  final Expr right;
  Add(this.left, this.right);
}

class Mul extends Expr {
  final Expr left;
  final Expr right;
  Mul(this.left, this.right);
}
```

Classes that `extend` a sealed class are direct subtypes. The compiler includes them in
exhaustiveness checks.

### `implements` — Interface Subtypes

A class can `implement` a sealed class instead of extending it. This is still a direct subtype for
exhaustiveness purposes:

```dart
sealed class Shape {}

class Circle implements Shape {
  final double radius;
  Circle(this.radius);
}

class Square implements Shape {
  final double side;
  Square(this.side);
}
```

The difference between `extends` and `implements` for sealed subtypes:

- `extends`: Inherits implementation (methods, fields). Is a subtype in both the type hierarchy and
  the sealed hierarchy.
- `implements`: Does not inherit implementation. Only commits to the interface contract. Is still a
  direct subtype of the sealed class for exhaustiveness.

### `enum` as Sealed Subtype

Dart 3 enums are implicitly sealed. An enum can extend a sealed class, and each enum value becomes a
direct subtype:

```dart
sealed class TokenType {}

enum Keyword implements TokenType {
  if_, // 'if' is a keyword in Dart, so we use trailing underscore
  else_,
  while_,
  for_,
}

enum Literal implements TokenType {
  integer,
  string,
  boolean,
}

class Identifier implements TokenType {
  final String name;
  Identifier(this.name);
}
```

In exhaustiveness checking, the compiler treats each enum value as a separate case:

```dart
String describe(TokenType t) => switch (t) {
  Keyword.if_ => 'if keyword',
  Keyword.else_ => 'else keyword',
  Keyword.while_ => 'while keyword',
  Keyword.for_ => 'for keyword',
  Literal.integer => 'integer literal',
  Literal.string => 'string literal',
  Literal.boolean => 'boolean literal',
  Identifier(name: var name) => 'identifier: $name',
};
```

### `mixin` as Sealed Subtype

Mixins can implement sealed classes:

```dart
sealed class Widget {}

mixin ButtonBehavior implements Widget {
  void onClick() { /* ... */ }
}

class FlatButton extends Object with ButtonBehavior {
  // FlatButton is a subtype of Widget via ButtonBehavior
}
```

## Exhaustive Switch

The primary value of sealed classes is enabling exhaustive switch expressions. The compiler verifies
that every direct subtype is handled.

### Basic Exhaustive Switch

```dart
sealed class Result&lt;T&gt; {}

class Ok&lt;T&gt; extends Result&lt;T&gt; {
  final T value;
  Ok(this.value);
}

class Err&lt;T&gt; extends Result&lt;T&gt; {
  final Object error;
  Err(this.error);
}

T unwrapOr&lt;T&gt;(Result&lt;T&gt; result, T defaultValue) => switch (result) {
  Ok(value: var v) => v,
  Err() => defaultValue,
};
```

No `default` case. If you add `class Pending&lt;T&gt; extends Result&lt;T&gt;`, every switch on
`Result&lt;T&gt;` fails to compile until you handle `Pending`.

### Switch Expression vs Switch Statement

Both benefit from exhaustiveness:

```dart
// Switch expression — returns a value
String describe(Result&lt;int&gt; r) => switch (r) {
  Ok(value: var v) => 'Success: $v',
  Err(error: var e) => 'Error: $e',
};

// Switch statement — no return value, but still checked for exhaustiveness
void handle(Result&lt;int&gt; r) {
  switch (r) {
    case Ok(value: var v):
      print('Success: $v');
    case Err(error: var e):
      print('Error: $e');
    // No default needed
  }
}
```

### Compile Error on Missing Case

```dart
// After adding: class Cancelled&lt;T&gt; extends Result&lt;T&gt; { ... }

String describe(Result&lt;int&gt; r) => switch (r) {
  Ok(value: var v) => 'Success: $v',
  Err(error: var e) => 'Error: $e',
  // COMPILE ERROR: The type 'Cancelled<int>' is not exhaustively handled.
};
```

This is a **breaking change at compile time**, not at runtime. You find out immediately when you add
a new subtype, not when a user hits an unhandled case in production.

### `default` Defeats Exhaustiveness

```dart
// BAD — default hides future subtypes
String describe(Result&lt;int&gt; r) => switch (r) {
  Ok() => 'ok',
  _ => 'other', // Catches Err now, AND any future subtype silently
};

// GOOD — compiler forces handling of every known subtype
String describe(Result&lt;int&gt; r) => switch (r) {
  Ok(value: var v) => 'ok: $v',
  Err(error: var e) => 'error: $e',
};
```

The only time `default` is acceptable with a sealed type is when you intentionally want to ignore
new subtypes (which is almost never the right choice).

### Guard Clauses and Exhaustiveness

Guards (`when`) do not contribute to exhaustiveness. If a subtype is only handled behind a guard,
the compiler still considers it uncovered:

```dart
// ERROR — not exhaustive (Ok is guarded, Err is unguarded)
String describe(Result&lt;int&gt; r) => switch (r) {
  Ok(value: var v) when v > 0 => 'positive success',
  Err() => 'error',
};

// Fix: add an unguarded Ok case
String describe(Result&lt;int&gt; r) => switch (r) {
  Ok(value: var v) when v > 0 => 'positive success',
  Ok(value: var v) => 'success: $v',
  Err() => 'error',
};
```

## Sealed Classes vs Abstract Classes

The key difference: abstract classes allow external subtypes; sealed classes do not.

| Property                | `abstract class`              | `sealed class`            |
| ----------------------- | ----------------------------- | ------------------------- |
| Instantiable directly   | No                            | No                        |
| External subtypes       | Yes (any library can extend)  | No (same library only)    |
| Exhaustive switch       | No (must use `default`)       | Yes (compiler-enforced)   |
| Type hierarchy openness | Open (extensible)             | Closed (fixed)            |
| Use case                | Polymorphism, shared behavior | Sum types, state machines |

### When to Use Abstract Classes

Use abstract classes when you want to define a contract and allow any library to provide
implementations:

```dart
// Anyone in any library can implement this
abstract class Serializer&lt;T&gt; {
  String serialize(T value);
  T deserialize(String data);
}

// In a different package:
class JsonSerializer implements Serializer&lt;User&gt; { ... }
class XmlSerializer implements Serializer&lt;User&gt; { ... }
```

### When to Use Sealed Classes

Use sealed classes when the set of subtypes is known at compile time and should never be extended:

```dart
// Only these three subtypes will ever exist
sealed class ConnectionState {}

class Connected extends ConnectionState {
  final Duration latency;
  Connected(this.latency);
}

class Disconnected extends ConnectionState {}

class Reconnecting extends ConnectionState {
  final int attempt;
  Reconnecting(this.attempt);
}
```

### The Decision Criterion

Ask yourself: "Will I ever need to add a new subtype from outside this library?" If yes, use
`abstract class`. If the subtypes are a closed set defined by this library, use `sealed class`.

In practice, most "state" types and "result" types are closed — you know all possible states at
design time. Most "interface" types are open — you want external implementations.

## Sealed Classes vs Enums

Enums are the simplest form of sealed type. Sealed classes are more expressive.

### Enum: Fixed Set of Named Values

```dart
enum HttpStatus {
  ok(200),
  notFound(404),
  serverError(500);

  final int code;
  const HttpStatus(this.code);
}

// Each variant is just a name + optional fields
// All variants share the same fields
```

### Sealed Class: Fixed Set of Heterogeneous Types

```dart
sealed class HttpResponse&lt;T&gt; {}

class HttpOk&lt;T&gt; extends HttpResponse&lt;T&gt; {
  final int statusCode;
  final T body;
  HttpOk(this.statusCode, this.body);
}

class HttpError extends HttpResponse&lt;Never&gt; {
  final int statusCode;
  final String message;
  HttpError(this.statusCode, this.message);
}

class HttpLoading extends HttpResponse&lt;Never&gt; {}
```

### Comparison

| Property                 | `enum`                             | `sealed class`                              |
| ------------------------ | ---------------------------------- | ------------------------------------------- |
| Variant-specific fields  | No (all variants share fields)     | Yes (each class has its own fields)         |
| Variant-specific methods | Limited (no override per variant)  | Yes (each class has its own methods)        |
| Exhaustive switch        | Yes                                | Yes                                         |
| Compile-time constants   | Yes (`const` values)               | No                                          |
| Memory overhead          | Minimal (single object per value)  | Higher (each instance is a separate object) |
| Complexity               | Simple                             | More complex                                |
| Use case                 | Fixed value sets with uniform data | Heterogeneous types with different shapes   |

### When to Use Which

Use **enums** when:

- The variants are simple named values (status codes, roles, modes).
- All variants share the same data shape.
- You need compile-time constants.

Use **sealed classes** when:

- Each variant has a fundamentally different structure (Success has data, Error has message, Loading
  has nothing).
- Each variant needs its own methods.
- The type hierarchy is more complex than a flat list of values.

**Enhanced enums in Dart 3 bridge the gap somewhat**, but they cannot have variant-specific fields.
All enum values share the same constructor parameters.

## Real-World Patterns

### Result Type (Success/Error)

The most common use of sealed classes — replacing nullable returns or exceptions with explicit
success/failure:

```dart
sealed class Result&lt;T&gt; {
  const Result();
}

class Success&lt;T&gt; extends Result&lt;T&gt; {
  final T value;
  const Success(this.value);
}

class Failure&lt;T&gt; extends Result&lt;T&gt; {
  final String message;
  final Object? stackTrace;
  const Failure(this.message, [this.stackTrace]);
}

// Usage
Future&lt;Result&lt;User&gt;&gt; fetchUser(int id) async {
  try {
    final response = await http.get(Uri.parse('/api/users/$id'));
    if (response.statusCode == 200) {
      return Success(User.fromJson(jsonDecode(response.body)));
    }
    return Failure('HTTP ${response.statusCode}');
  } catch (e, st) {
    return Failure(e.toString(), st);
  }
}

// Handling — exhaustive, no exceptions escape
void main() async {
  final result = await fetchUser(42);
  switch (result) {
    case Success(value: var user):
      print('User: ${user.name}');
    case Failure(message: var msg, stackTrace: var st):
      print('Error: $msg');
      print(st);
  }
}
```

**Why not use exceptions?** Exceptions are invisible in the type signature. A function
`User fetchUser(int id)` does not tell you it can throw. A function
`Result&lt;User&gt; fetchUser(int id)` makes the failure case explicit in the type. In systems
engineering, this is the difference between "trust the documentation" and "trust the compiler."

### AST Representation

Abstract syntax trees are the canonical use case for sealed classes — each node type has a different
structure:

```dart
sealed class AstNode {
  const AstNode();
}

class LiteralNode extends AstNode {
  final Object value;
  const LiteralNode(this.value);
}

class BinaryOpNode extends AstNode {
  final AstNode left;
  final String operator;
  final AstNode right;
  const BinaryOpNode(this.left, this.operator, this.right);
}

class UnaryOpNode extends AstNode {
  final String operator;
  final AstNode operand;
  const UnaryOpNode(this.operator, this.operand);
}

class IdentifierNode extends AstNode {
  final String name;
  const IdentifierNode(this.name);
}

// Recursive evaluation — exhaustive by construction
int evaluate(AstNode node) => switch (node) {
  LiteralNode(value: int n) => n,
  BinaryOpNode(left: var l, operator: '+', right: var r) =>
    evaluate(l) + evaluate(r),
  BinaryOpNode(left: var l, operator: '-', right: var r) =>
    evaluate(l) - evaluate(r),
  BinaryOpNode(left: var l, operator: '*', right: var r) =>
    evaluate(l) * evaluate(r),
  UnaryOpNode(operator: '-', operand: var o) =>
    -evaluate(o),
  IdentifierNode() => throw UnimplementedError('Variables not supported'),
  // Adding a new AstNode subtype breaks compile until handled here
};
```

### State Machine

Sealed classes model state machines with type-safe state transitions:

```dart
sealed class ConnectionState {
  const ConnectionState();
}

class Idle extends ConnectionState {
  const Idle();
}

class Connecting extends ConnectionState {
  final int attempt;
  final Uri endpoint;
  const Connecting(this.attempt, this.endpoint);
}

class Connected extends ConnectionState {
  final Uri endpoint;
  final Duration latency;
  final DateTime connectedAt;
  const Connected(this.endpoint, this.latency, this.connectedAt);
}

class Disconnected extends ConnectionState {
  final String? reason;
  final Disconnected() : reason = null;
  const Disconnected.withReason(this.reason);
}

// State transitions — each transition returns a new state
ConnectionState nextState(ConnectionState current, Event event) => switch ((current, event)) {
  (Idle(), Connect(uri: var uri)) => Connecting(1, uri),
  (Connecting(attempt: var a, endpoint: var ep), Connected(latency: var l)) =>
    Connected(ep, l, DateTime.now()),
  (Connecting(attempt: var a, endpoint: var ep), TimedOut()) when a &lt; 3 =>
    Connecting(a + 1, ep),
  (Connecting(attempt: var a), TimedOut()) =>
    Disconnected.withReason('Max retries exceeded'),
  (Connected(), Disconnect()) =>
    Disconnected(),
  (Disconnected(), Connect(uri: var uri)) =>
    Connecting(1, uri),
  // Exhaustive — compiler ensures every combination is handled
};
```

### UI State

Flutter's BLoC/Cubit pattern benefits enormously from sealed classes:

```dart
sealed class HomeState {}

class HomeLoading extends HomeState {}

class HomeLoaded extends HomeState {
  final List&lt;Post&gt; posts;
  final int currentPage;
  final bool hasMore;
  HomeLoaded(this.posts, this.currentPage, this.hasMore);
}

class HomeError extends HomeState {
  final String message;
  HomeError(this.message);
}

// In your widget
Widget build(BuildContext context) {
  return switch (state) {
    HomeLoading() => const CircularProgressIndicator(),
    HomeLoaded(posts: var posts, hasMore: false) => ListView(
      children: posts.map((p) => PostCard(p)).toList(),
    ),
    HomeLoaded(posts: var posts, hasMore: true) => Column(
      children: [
        ListView.builder(
          itemCount: posts.length,
          itemBuilder: (_, i) => PostCard(posts[i]),
        ),
        const LoadMoreButton(),
      ],
    ),
    HomeError(message: var msg) => ErrorWidget(msg),
  };
}
```

### Network Response

```dart
sealed class ApiResponse&lt;T&gt; {}

class ApiSuccess&lt;T&gt; extends ApiResponse&lt;T&gt; {
  final T data;
  final int statusCode;
  ApiSuccess(this.data, this.statusCode);
}

class ApiClientError&lt;T&gt; extends ApiResponse&lt;T&gt; {
  final int statusCode;
  final String message;
  ApiClientError(this.statusCode, this.message);
}

class ApiNetworkError&lt;T&gt; extends ApiResponse&lt;T&gt; {
  final String message;
  ApiNetworkError(this.message);
}

class ApiTimeout&lt;T&gt; extends ApiResponse&lt;T&gt; {}

// Every API call returns ApiResponse&lt;T&gt;, forcing callers to handle all cases
ApiResponse&lt;User&gt; getUser(int id) {
  // ...
}
```

## Sealed Classes with Records

Records and sealed classes combine to create lightweight, expressive data types:

```dart
// Before Dart 3 — verbose
sealed class Result&lt;T&gt; {}
class Ok&lt;T&gt; extends Result&lt;T&gt; {
  final T value;
  Ok(this.value);
}
class Err&lt;T&gt; extends Result&lt;T&gt; {
  final Object error;
  Err(this.error);
}

// With records — more concise where appropriate
sealed class Outcome&lt;T&gt; {}
class Win&lt;T&gt; extends Outcome&lt;T&gt; {
  final (T value, Duration elapsed) result;
  Win(this.result);
}
class Loss extends Outcome&lt;Never&gt; {
  final (String reason, StackTrace? trace) detail;
  Loss(this.detail);
}

// Pattern matching on record fields
String describe(Outcome&lt;int&gt; o) => switch (o) {
  Win(result: (var value, var elapsed)) =>
    'Won with $value in ${elapsed.inMilliseconds}ms',
  Loss(detail: (var reason, var trace)) =>
    'Lost: $reason',
};
```

Records are useful as fields within sealed subtypes when you want to group related values without
declaring a separate class. They are value types (structural equality), which makes testing and
comparison straightforward.

### Records as Sealed Subtype Payloads

```dart
sealed class Command {}

class Move extends Command {
  final ({int x, int y}) delta;
  Move(this.delta);
}

class Resize extends Command {
  final ({double width, double height}) dimensions;
  Resize(this.dimensions);
}

class Rotate extends Command {
  final ({double angle, {int? pivotX, int? pivotY}}) params;
  Rotate(this.params);
}
```

**When to use records vs classes**: Use records when the data is a simple tuple with no behavior.
Use classes when you need methods, validation, or identity semantics.

## Sealed Classes and Pattern Matching

Sealed classes and pattern matching are two halves of the same feature. Sealed classes define the
closed type hierarchy; pattern matching provides the exhaustive decomposition. Neither is fully
useful without the other.

### The Complete Pattern

```dart
sealed class Expr {
  int evaluate();
  const Expr();
}

class Num extends Expr {
  final int value;
  const Num(this.value);
  @override
  int evaluate() => value;
}

class Add extends Expr {
  final Expr left;
  final Expr right;
  const Add(this.left, this.right);
  @override
  int evaluate() => left.evaluate() + right.evaluate();
}

class Mul extends Expr {
  final Expr left;
  final Expr right;
  const Mul(this.left, this.right);
  @override
  int evaluate() => left.evaluate() * right.evaluate();
}

// Optimize: constant folding
Expr optimize(Expr expr) => switch (expr) {
  // Add two constants -> fold
  Add(left: Num(value: var a), right: Num(value: var b)) =>
    Num(a + b),
  // Mul two constants -> fold
  Mul(left: Num(value: var a), right: Num(value: var b)) =>
    Num(a * b),
  // Mul by 0 -> 0
  Mul(left: Num(value: 0) || Num(value: 0), right: var r) ||
  Mul(left: var r, right: Num(value: 0) || Num(value: 0)) =>
    Num(0),
  // Add 0 -> identity
  Add(left: Num(value: 0), right: var other) => other,
  Add(left: var other, right: Num(value: 0)) => other,
  // Recurse on children
  Add(left: var l, right: var r) => Add(optimize(l), optimize(r)),
  Mul(left: var l, right: var r) => Mul(optimize(l), optimize(r)),
  // Leaf — no optimization
  Num() => expr,
};
```

### Deep Matching with Guards

```dart
String classify(Expr expr) => switch (expr) {
  Num(value: var n) when n &lt; 0 => 'negative constant',
  Num(value: var n) when n == 0 => 'zero',
  Num(value: var n) when n > 0 => 'positive constant',
  Add(left: Num(), right: Num()) => 'addition of constants',
  Add(left: Num(), right: Mul()) => 'add of constant and product',
  Mul(left: Add(), right: Add()) => 'product of sums',
  _ => 'complex expression',
};
```

### Sealed Classes with Generics

Generics and sealed classes compose well. The sealed constraint applies to the class hierarchy, not
to the type parameter:

```dart
sealed class Either&lt;L, R&gt; {}

class Left&lt;L, R&gt; extends Either&lt;L, R&gt; {
  final L value;
  Left(this.value);
}

class Right&lt;L, R&gt; extends Either&lt;L, R&gt; {
  final R value;
  Right(this.value);
}

// Type-safe handling
T match&lt;T&gt;(Either&lt;L, R&gt; either, T Function(L) onLeft, T Function(R) onRight) =>
  switch (either) {
    Left(value: var l) => onLeft(l),
    Right(value: var r) => onRight(r),
  };
```

## Common Pitfalls

### 1. Trying to Extend a Sealed Class from Another Library

```dart
// library_a.dart
sealed class Shape {}

// library_b.dart
import 'library_a.dart';

class Triangle extends Shape {} // COMPILE ERROR
// The error message: "The class 'Triangle' can't extend 'Shape' because
// 'Shape' is sealed and defined in a different library."
```

**Fix**: If you need extensible types, use `abstract class` or `base class` instead of `sealed`.

### 2. Forgetting Part Files

If you use `part`/`part of` to split sealed subtypes across files, every file must be declared as a
`part`:

```dart
// main.dart
sealed class Result {}
part 'ok.dart';
part 'err.dart';

// ok.dart
part of 'main.dart';
class Ok extends Result { ... }

// err.dart
part of 'main.dart';
class Err extends Result { ... }

// new_file.dart
part of 'main.dart'; // MUST be declared here too
class Cancelled extends Result { ... }
```

Forgetting to add `part 'new_file.dart'` in `main.dart` causes a compile error.

### 3. Using `default` with Sealed Types

As discussed, `default` defeats exhaustiveness. The compiler will not warn you about missing cases
if `default` is present. This is technically allowed but is always wrong for sealed types.

### 4. Exhaustiveness Only Applies to Direct Subtypes

The compiler checks exhaustiveness of **direct** subtypes only. If a subtype has further subtypes,
the compiler does not recurse:

```dart
sealed class Animal {}

sealed class Mammal extends Animal {}
class Dog extends Mammal {}
class Cat extends Mammal {}

class Bird extends Animal {}

// This is exhaustive — Mammal and Bird cover all direct subtypes
String describe(Animal a) => switch (a) {
  Mammal() => 'mammal',
  Bird() => 'bird',
};

// If you want to distinguish Dog from Cat, you need nested matching:
String describe(Animal a) => switch (a) {
  Dog() => 'dog',
  Cat() => 'cat',
  Bird() => 'bird',
};
```

The compiler considers `Mammal` a sufficient match for `Dog` and `Cat` because `Mammal` is a
supertype. To get fine-grained matching, you must pattern match on the leaf types.

### 5. Sealed Classes Cannot Be Constructed

```dart
sealed class Result {}

// var r = Result(); // COMPILE ERROR — implicitly abstract

// If you need a "default" or "empty" case, create a subtype for it
sealed class Result {}
class Empty extends Result {}
class Value extends Result {
  final String data;
  Value(this.data);
}
```

### 6. Sealed Classes and `implements` — Subtype Still Registered

```dart
sealed class Service {}

class RealService extends Service {
  void doWork() { /* ... */ }
}

class MockService implements Service {
  void doWork() { /* mock implementation */ }
}

// Exhaustive switch must handle BOTH
void handle(Service s) => switch (s) {
  RealService() => print('real'),
  MockService() => print('mock'),
  // Missing either case is a compile error
};
```

Using `implements` instead of `extends` does not remove the subtype from exhaustiveness checking.
Both are direct subtypes.

### 7. Sealed Classes with Mixin Applications

```dart
sealed class Component {}

class Button extends Component with Hoverable, Clickable {}

class Label extends Component {}

// Exhaustive switch handles Button (with mixins applied) and Label
void render(Component c) => switch (c) {
  Button() => print('rendering button'),
  Label() => print('rendering label'),
};
```

The mixin application does not create a new sealed subtype — `Button` is the subtype, regardless of
mixins.

### 8. Generic Sealed Classes with Covariance

```dart
sealed class Box&lt;T&gt; {}

class FullBox&lt;T&gt; extends Box&lt;T&gt; {
  final T contents;
  FullBox(this.contents);
}

class EmptyBox&lt;T&gt; extends Box&lt;T&gt; {}

// This works — exhaustiveness on Box&lt;int&gt;
String describe(Box&lt;int&gt; box) => switch (box) {
  FullBox(contents: var n) => 'Contains $n',
  EmptyBox() => 'Empty',
};
```

Generics do not interfere with exhaustiveness. The compiler checks the sealed hierarchy structure,
not the generic type parameter.

### 9. Trying to Use Sealed Classes for Open Hierarchies

```dart
// WRONG — sealed is for closed hierarchies
sealed class Plugin {} // You want third-party plugins?
// Nobody outside this library can create new Plugin subtypes

// RIGHT — use abstract or base for open hierarchies
abstract class Plugin {} // Anyone can extend
```

### 10. Sealed Classes and JSON Serialization

When serializing sealed classes, you need a discriminator field to reconstruct the correct subtype:

```dart
sealed class Event {
  Map&lt;String, dynamic&gt; toJson();
}

class UserCreated extends Event {
  final String userId;
  UserCreated(this.userId);

  @override
  Map&lt;String, dynamic&gt; toJson() =>
    {'type': 'UserCreated', 'userId': userId};
}

class UserDeleted extends Event {
  final String userId;
  UserDeleted(this.userId);

  @override
  Map&lt;String, dynamic&gt; toJson() =>
    {'type': 'UserDeleted', 'userId': userId};
}

// Deserialization — manual dispatch on discriminator
Event fromJson(Map&lt;String, dynamic&gt; json) => switch (json['type']) {
  'UserCreated' => UserCreated(json['userId'] as String),
  'UserDeleted' => UserDeleted(json['userId'] as String),
  _ => throw ArgumentError('Unknown event type: ${json['type']}'),
};
```

The `switch` on the discriminator string is not exhaustive (strings are not sealed), so you need
`default` here. This is the one place where sealed class exhaustiveness does not apply — at the
serialization boundary where types are erased.
