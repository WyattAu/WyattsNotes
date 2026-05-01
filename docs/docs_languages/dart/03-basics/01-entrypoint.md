---
title: Entry Point
description:
  "Entry Point — Program Entry; main() Function Variants; Command-Line Arguments; Output: with worked examples and exam-style questions."
date: 2025-07-12T15:49:11.104Z
tags:
  - Dart
categories:
  - Dart
slug: entry-point
---

## Program Entry

When the project creates an executable, the entry point of the project is located in `main()`, where
the default is given as:

```dart
void main(){
  runApp(const MyApp());
}
```

This can be find in `lib/main.dart` along with other source code.

:::info

Inside the `main()` function, there is the `runApp()` function which bootstrap the application by
initializing the framework and attaching the root widget the render tree. This is perform by:

```dart
void runApp(Widget app) {
  final WidgetsBinding binding = WidgetsFlutterBinding.ensureInitialized();
  _runWidget(binding.wrapWithDefaultView(app), binding, 'runApp');
}
```

- `WidgetsFlutterBinding.ensureInitialized();` creates the binders required (`GestureBinding`,
  `RendererBinding`, `SchedulerBinding`, `WidgetsBinding`)
- This `binding` is pass into `_runWidget`
- The widget (app) passed in will be wrapped with a `View` widget, this widget will now be the root
  widget and be rendered through the `RendererBinding`
- This now calls the `mount()` function which recursively adds the child elements and instantiates
  `RenderObject` for each `RenderObjectWidget`.
- `SchedulerBinding.scheduleFrame()` hooks into `window.onDrawFrame`
- The event loop will now initialize, each loop will update render objects and draw schedule frames.

:::

## main() Function Variants

The `main()` function has three valid signatures:

```dart
// 1. No arguments (most common in Flutter)
void main() {
  print('No arguments');
}

// 2. With command-line arguments (CLI apps)
void main(List<String> args) {
  print('Arguments: $args');
}

// 3. With optional arguments using the args package
import 'package:args/args.dart';

void main(List<String> args) {
  final parser = ArgParser()
    ..addOption('name', abbr: 'n', defaultsTo: 'World')
    ..addFlag('verbose', abbr: 'v', negatable: false);

  final results = parser.parse(args);
  if (results['verbose'] as bool) {
    print('Verbose mode enabled');
  }
  print('Hello, ${results['name']}!');
}
```

The `main()` function must be a **top-level function** (not a method of a class) and must be named
exactly `main`. It must be in a library file (not a part file).

## Command-Line Arguments

```dart
void main(List<String> args) {
  if (args.isEmpty) {
    print('Usage: dart run main.dart <name> [--verbose]');
    return;
  }

  final name = args[0];
  final verbose = args.contains('--verbose');

  print('Name: $name');
  if (verbose) {
    print('Verbose: true');
    print('Argument count: ${args.length}');
  }
}
```

Run it:

```bash
dart run main.dart Dart --verbose
# Output:
# Name: Dart
# Verbose: true
# Argument count: 2
```

Note that `args` does **not** include the program name (unlike C's `argv[0]`). It starts with the
first actual argument.

## Basic Types

Dart has a small set of built-in types. The type system is sound — the compiler and runtime
guarantee type safety.

### Numbers

```dart
// int: 64-bit signed integer on native platforms
int count = 42;
int hex = 0xFF;
int binary = 0b1010;
int big = 9007199254740991;  // 2^53 - 1

// double: IEEE 754 double-precision floating point
double pi = 3.14159;
double scientific = 1.42e5;
double infinity = double.infinity;
double nan = double.nan;

// num is the supertype of both int and double
num value = 42;       // OK, int is a subtype of num
value = 3.14;         // OK, double is a subtype of num
```

### Strings

```dart
String single = 'single quotes';
String double = "double quotes";
String interpolated = 'Hello, $single';          // string interpolation
String expression = '2 + 2 = ${2 + 2}';          // expression interpolation
String multiline = '''
This is a
multi-line string
''';
String raw = r'No \escape $interpolation';       // raw string
```

### Booleans

```dart
bool flag = true;
bool empty = '';           // ERROR: String is not a bool
bool truthy = 'hello';    // ERROR: Dart has no truthy/falsy coercion
```

Dart does **not** have implicit boolean coercion. Unlike JavaScript or Python, only `true` and
`false` are valid boolean values. Conditions in `if`, `while`, and `?:` must evaluate to `bool`.

### Lists

```dart
// Typed list
List<int> numbers = [1, 2, 3];
List<String> names = ['Alice', 'Bob'];

// List literal type inference
var inferred = [1, 2, 3];       // List<int>
var mixed = <int>[1, 2, 3];    // explicit type parameter

// Common operations
numbers.add(4);
numbers.removeAt(0);
numbers.forEach((n) => print(n));
var first = numbers.first;
var last = numbers.last;
var slice = numbers.sublist(1, 3);

// Fixed-length list
List<int> fixed = List.filled(5, 0);
```

### Maps

```dart
Map<String, int> scores = {'Alice': 95, 'Bob': 87};
scores['Charlie'] = 92;
scores.remove('Bob');

// Iterate
for (final entry in scores.entries) {
  print('${entry.key}: ${entry.value}');
}
```

## Variables

Dart has four variable declaration keywords. Understanding the differences is critical.

### var

Type is inferred from the initializer. The variable is mutable.

```dart
var name = 'Dart';       // inferred as String
name = 'Flutter';         // OK
name = 42;               // ERROR: type mismatch
```

### final

The variable must be initialized exactly once. The reference cannot be reassigned, but the object
itself can be mutated.

```dart
final name = 'Dart';          // inferred as String
final List<int> items = [1, 2, 3];

// name = 'Flutter';           // ERROR: cannot reassign final
items.add(4);                  // OK: mutating the list, not the reference
```

### const

Compile-time constant. The value must be a literal or a const constructor invocation. All const
variables with the same value refer to the same object (canonicalization).

```dart
const pi = 3.14159;
const List<int> items = [1, 2, 3];  // immutable list

// items.add(4);              // ERROR: cannot mutate const list
// const now = DateTime.now(); // ERROR: not a compile-time constant

// Canonicalization
const a = [1, 2, 3];
const b = [1, 2, 3];
print(identical(a, b));      // true — same object in memory
```

### late

Defer initialization until first access. Required when a field cannot be initialized in the
constructor but will be before use.

```dart
class Database {
  late Connection _conn;

  void init() {
    _conn = Connection.open('localhost');
  }

  void query(String sql) {
    // _conn is guaranteed initialized here because init() was called first
    return _conn.execute(sql);
  }
}

// late also works with lazy initialization
late final String expensive = _computeExpensiveValue();

String _computeExpensiveValue() {
  print('Computed!');
  return 'result';
}
```

The `late` keyword tells the analyzer "trust me, this will be initialized before access." If you
access it before initialization, you get a runtime error. Use it when:

1. The variable is initialized in `initState()` or a setup method, not the constructor.
2. You want lazy initialization of an expensive computation.
3. The variable is a non-nullable field that cannot be set in the constructor initializer list.

## Null Safety

Dart's null safety (Dart 2.12+) is sound — the compiler guarantees that no `null` value reaches a
non-nullable variable at runtime.

### Nullable and Non-Nullable Types

```dart
String name = 'Dart';       // non-nullable, must not be null
String? nickname = null;     // nullable, can be null

// To use a nullable value, you must handle null
int length = nickname?.length ?? 0;    // null-aware access + null coalescing
int? maybeLength = nickname?.length;    // null-aware access, result is nullable
```

### Null Assertion

```dart
String? name = 'Dart';
String definite = name!;    // assert name is not null
// If name is actually null, throws TypeError at runtime
```

Use `!` only when you are **certain** the value is not null. If the assertion is wrong, you get a
runtime crash with no useful context. Prefer null-aware operators or explicit checks.

### Null-Aware Operators

```dart
String? name;
String? upper = name?.toUpperCase();      // null-aware access
String result = name ?? 'default';         // null coalescing
name ??= 'Dart';                           // null-aware assignment

// Cascading with null-aware
String? buffer;
buffer
  ?..write('hello')
  ..write(' world');     // only cascades if buffer is not null
```

### Late Initialization for Non-Nullable Fields

```dart
class Service {
  // Cannot be null, cannot be initialized at declaration
  late final String configPath;

  void configure(String path) {
    configPath = path;
  }
}
```

## Basic Control Flow

### if / else

```dart
final value = 42;
if (value > 50) {
  print('high');
} else if (value > 20) {
  print('medium');
} else {
  print('low');
}
```

### for / for-in

```dart
// Classic for loop
for (var i = 0; i &lt; 5; i++) {
  print(i);
}

// for-in loop
final items = ['a', 'b', 'c'];
for (final item in items) {
  print(item);
}
```

### while / do-while

```dart
var count = 0;
while (count &lt; 3) {
  print(count);
  count++;
}

var x = 0;
do {
  print(x);
  x++;
} while (x &lt; 3);
```

### switch / switch expressions (Dart 3.0+)

```dart
final command = 'start';
switch (command) {
  case 'start':
    print('Starting');
    break;
  case 'stop':
    print('Stopping');
    break;
  default:
    print('Unknown');
}

// Switch expression (Dart 3.0+)
final result = switch (command) {
  'start' => 'Starting',
  'stop' => 'Stopping',
  _ => 'Unknown',
};
```

### Pattern matching in switch (Dart 3.0+)

```dart
final value = [1, 2, 3];
final description = switch (value) {
  [] => 'empty',
  [var single] => 'single: $single',
  [var first, var second] => 'pair: $first, $second',
  [var first, ...var rest] => 'first: $first, rest: $rest',
};
```

### Ternary operator

```dart
final age = 20;
final status = age >= 18 ? 'adult' : 'minor';
```

Remember: Dart has no truthy/falsy. The condition in `?:`, `if`, `while` must be `bool`. You cannot
write `final status = name ? 'exists' : 'missing';` — that is a compile error.

## Common Pitfalls

- **Using `var` for everything**: `var` is fine for local variables with obvious initializers. For
  fields and parameters, always specify the type explicitly — it serves as documentation.
- **Confusing `final` with immutable**: `final` means the reference cannot change. The object itself
  is still mutable. Use `const` for compile-time constants, or use immutable collections from
  `package:collection` / `package:built_collection` for deep immutability.
- **Overusing `!` (null assertion)**: Every `!` is a potential crash. Prefer `?.`, `??`, or explicit
  null checks. Use `!` only when the null state is provably impossible (e.g., after an `is` check).
- **Forgetting that Dart has no truthy coercion**: `if (list)` does not check if the list is
  non-empty. Use `if (list.isNotEmpty)`. `if (value)` does not check if value is non-zero. Use
  `if (value != 0)`.
- **Using `late` without guaranteeing initialization**: `late` defers the runtime check. If you
  access a `late` variable before it is set, you get a `LateInitializationError`. This is a runtime
  crash, not a compile-time error.
