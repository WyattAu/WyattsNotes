---
title: FFI and Advanced Topics
date: 2026-04-07T00:00:00.000Z
tags:
  - Dart
categories:
  - Dart
slug: dart-ffi-and-advanced
---

## Null Safety Deep Dive

Dart 2.12 introduced sound null safety. This is not a nullable annotation system bolted onto an
existing type system. It is a fundamental rewrite of the type hierarchy: `Null` is a subtype of
every type, but only of nullable types. The compiler and runtime together guarantee that a
non-nullable variable never holds `null` at runtime. This guarantee is **sound** — it holds across
function boundaries, class hierarchies, generic instantiations, and asynchronous code paths.

### Sound vs Unsounded Null Safety

**Definition.** Soundness (in the type-theoretic sense) means: if the type checker accepts a
program, no runtime type error related to null dereference can occur. The guarantee is global — it
does not depend on the programmer annotating every variable correctly, because the type checker
enforces consistency at all boundaries.

Unsound null safety (e.g., TypeScript's `strictNullChecks`, Kotlin's platform types at interop
boundaries) means the compiler can miss cases. A variable declared non-nullable might still be
`null` at runtime due to unchecked casts, interop boundaries, or generics erasure. Dart's null
safety is sound because:

1. `Null` is a proper subtype, not a special sentinel value.
2. Generic types are reified — `List<int>` and `List<int?>` are distinct at runtime.
3. Flow analysis is global across function boundaries (within compilation units).
4. The runtime enforces null checks at trusted boundaries (e.g., native FFI).

### Nullable and Non-Nullable Types

Every type `T` in Dart 2.12+ exists in two forms: `T` (non-nullable) and `T?` (nullable). The
nullable form is a union type: `T?` is equivalent to `T | Null`.

```dart
String name = 'Dart';           // non-nullable, must be initialized to non-null
String? maybeName = null;        // nullable, can hold String or null
String? alsoName;                // nullable, implicitly initialized to null

int count = 42;                  // non-nullable
int? maybeCount;                 // nullable, implicitly null

List<String> names = ['a'];      // non-nullable list, must be non-null, elements non-null
List<String?> mixed = ['a', null]; // non-nullable list, elements can be null
List<String>? maybeNames = null;   // nullable list reference
```

**Definition.** The nullability hierarchy: `Never` is a subtype of `Null`, which is a subtype of
every `T`, which is a subtype of `T?`, which is a subtype of `Object?`. `Object` is the supertype of
all non-nullable types. `Object?` is the top type.

```
Never        (bottom — no values inhabit this type)
  |
  Null        (only value is null)
  |
  int, String, ... (non-nullable types)
  |
  Object      (supertype of all non-nullable types)
  |
  Object?     (top type — every value is an Object?)
```

### Null Assertion Operator (`!`)

The `!` operator asserts to the type checker that an expression of type `T?` is non-null at this
point. It has no runtime effect other than throwing an `AssertionError` if the value is actually
`null`.

```dart
String? getName() => 'Dart';

void example() {
  String? name = getName();
  // name has static type String?
  String definite = name!;  // static type is now String
  // If name were null at runtime, throws: Null check operator used on a null value
}
```

**When `!` is safe:**

```dart
// Safe: you just checked for null
String? name = getName();
if (name != null) {
  // Flow analysis promotes name to String here — ! is unnecessary
  print(name.length);
}

// Safe: the value is provably non-null from API contract
final list = <String?>['a', 'b', null];
String first = list.first!;  // Safe if you know the list is non-empty and first is non-null
```

**When `!` is dangerous:**

```dart
// Dangerous: depends on external state that could change
String? cached;
void init() {
  cached = 'value';
}
String getValue() => cached!;  // Crashes if init() was never called

// Dangerous: depends on list contents you don't control
List<String?> external = fetchFromNetwork();
String first = external.first!;  // Crashes if first element is null
```

:::warning

Every use of `!` is a claim that you know more than the type checker. If the type checker can
promote the type via flow analysis, remove the `!`. If it cannot, prefer a guard or default value.
The `!` operator is a code smell in production code — it means you are bypassing the safety system.

:::

### Late Initialization

The `late` keyword tells the compiler: "this variable will be initialized before it is used, but not
at the point of declaration." The compiler trusts this assertion and does not require an
initializer. At runtime, accessing an uninitialized `late` variable throws a
`LateInitializationError`.

#### `late` for Deferred Initialization

```dart
class Database {
  late Connection _connection;

  void init(String host, int port) {
    _connection = Connection(host, port);
  }

  void query(String sql) {
    // _connection must have been initialized via init() before this call
    _connection.execute(sql);
  }
}
```

This pattern is common in classes where initialization depends on constructor arguments or
configuration that is not available at field declaration time. The `late` keyword avoids making the
field nullable, which would require null checks everywhere it is used.

#### `late final` for Immutable Deferred Initialization

```dart
class Config {
  late final String environment;
  late final int port;

  void loadFromEnv() {
    environment = Platform.environment['ENV'] ?? 'development';
    port = int.parse(Platform.environment['PORT'] ?? '8080');
  }
}
```

`late final` allows exactly one assignment. After assignment, the field behaves like a `final` field
— any subsequent assignment throws at runtime. This is the correct pattern for computed properties
that are expensive and should be cached.

#### `late` for Lazy Initialization

When `late` is applied to a top-level or instance variable with an initializer, the initializer runs
lazily — on first access, not at declaration time.

```dart
// The expensive computation runs only when heavyResource is first accessed
late final Resource heavyResource = Resource(expensiveSetup());

class Service {
  // Computed lazily on first access to _cache
  late final Map<String, int> _cache = _buildCache();

  Map<String, int> _buildCache() {
    // Expensive computation
    return {'key': computeValue()};
  }
}
```

:::warning

Common pitfall: `late` without `final` allows reassignment. If you intend immutable deferred
initialization, always use `late final`. A bare `late` field is mutable and can be reassigned
arbitrarily after its first initialization.

:::

:::warning

Common pitfall: `late` fields are not initialized in the constructor. If your class has multiple
initialization paths and one path forgets to initialize the `late` field, you get a
`LateInitializationError` at runtime with no compile-time warning.

:::

### Null-Aware Operators

#### Null-Coalescing Operator (`??`)

Returns the left-hand side if it is non-null, otherwise evaluates and returns the right-hand side.

```dart
String? name;
String displayName = name ?? 'Anonymous';  // 'Anonymous'

int? count;
int value = count ?? 0;  // 0

// The right side is only evaluated if the left is null
int computeDefault() {
  print('computing...');
  return 42;
}
int result = count ?? computeDefault();  // prints nothing if count is non-null
```

#### Null-Aware Assignment (`??=`)

Assigns the right-hand side to the left-hand side only if the left-hand side is null. Returns the
final value of the left-hand side.

```dart
String? name;
name ??= 'default';  // name is now 'default'
name ??= 'other';    // name remains 'default' — assignment skipped

// Useful for lazy initialization of mutable fields
class Lazy {
  List<int>? _items;
  List<int> get items => _items ??= [];
}
```

#### Null-Aware Access (`?.`)

Returns `null` if the receiver is `null`, otherwise accesses the member.

```dart
String? name;
int? length = name?.length;  // null — name is null

String? upper = name?.toUpperCase();  // null

// Chaining
class User {
  Address? address;
}

class Address {
  String? city;
}

User? user;
String? city = user?.address?.city;  // null-safe through entire chain
```

#### Null-Aware Cascade (`?..`)

Applies cascade operations only if the receiver is non-null. Returns `null` if the receiver is null.

```dart
String? name;
String? result = name
  ?..toUpperCase()
  ..replaceAll('a', 'b');
// If name is null, result is null and no methods are called
```

### Required Named Parameters

Dart distinguishes between optional named parameters (which may be omitted and may be nullable) and
required named parameters (which must be provided by the caller).

```dart
// Before null safety: optional named parameters could be null
void oldStyle({String name}) {
  // name could be null — no compile-time guarantee
}

// After null safety: required enforces non-null at call site
void newStyle({required String name, required int age}) {
  // name and age are guaranteed non-null
}

// Optional with default
void withDefault({String name = 'unknown', int age = 0}) {
  // name is non-nullable because the default provides a value
}

// Optional nullable
void optionalNullable({String? name}) {
  // name may be null — caller can omit or pass null
}
```

The `required` keyword is orthogonal to nullability. A required parameter can have a nullable type
(if the caller must explicitly pass `null`), but in practice `required` is used with non-nullable
types to enforce that the caller provides a value.

```dart
// required with nullable type — caller must pass something (including null)
void example({required String? name}) {
  // name is nullable, but caller cannot omit it
}
example(name: null);  // valid
example();            // compile error: missing required parameter
```

### The `Never` Type

**Definition.** `Never` is the bottom type of the Dart type system. No value has type `Never`. It is
the return type of functions that never return normally (they always throw or loop forever).

`Never` is a subtype of every type. This makes it useful for exhaustive analysis in pattern matching
and control flow.

```dart
// A function that never returns
Never fail(String message) {
  throw StateError(message);
}

// Using Never in exhaustive pattern matching
String describe(Object value) {
  if (value is int) {
    return 'integer: $value';
  } else if (value is String) {
    return 'string: $value';
  } else {
    // The type checker knows value cannot be int or String here
    // Returning Never from the else branch proves exhaustiveness
    return fail('unexpected type: ${value.runtimeType}');
  }
}
```

`Never` in switch expressions:

```dart
int eval(Expr expr) => switch (expr) {
  IntLiteral(value: final v) => v,
  AddExpr(left: final l, right: final r) => eval(l) + eval(r),
  // No default needed — Never return from exhaustive handler
};
```

### Flow Analysis and Its Limitations

Dart's flow analysis tracks nullability through local variables. If you check a nullable variable
for non-null, the type is promoted within the scope where the check holds.

```dart
String? name = getName();
if (name != null) {
  // name is promoted to String here
  print(name.length);  // no null check needed
}
// name is String? again outside the if block
```

**Limitations of flow analysis:**

```dart
// 1. Closures capture the variable, not the promoted type
String? name = getName();
if (name != null) {
  // name is promoted to String
  final closure = () {
    print(name.length);  // ERROR: name might have been reassigned
  };
}

// 2. Field promotion is limited
class Example {
  String? _name;

  void check() {
    if (_name != null) {
      // _name is promoted locally, but...
      // If another method could modify _name, promotion is fragile
      print(_name.length);
    }
  }
}

// 3. Across function boundaries — no promotion
String? getName() => 'Dart';
// getName() returns String? — the caller cannot assume non-null
// even if the implementation always returns non-null
```

:::warning

Flow analysis does not track mutations through closures or across async boundaries. If a nullable
local is captured by a closure that could be invoked after the variable is nulled, the type checker
will not promote it inside the closure.

:::

### Migration Patterns

When migrating legacy Dart code to null safety:

1. **Add `?` to types that can be null.** This is the safest first step — it makes the type system
   honest about what the code actually does.
2. **Replace `!` assertions with guard clauses.** Every `!` is a potential crash site. Guard clauses
   make the handling explicit.
3. **Use `late` for fields initialized outside the constructor.** This avoids making fields nullable
   when they are logically non-nullable.
4. **Add `required` to named parameters that callers must provide.**
5. **Use default values for optional parameters that should not be nullable.**

```dart
// Before null safety
class User {
  String name;
  String email;
  int age;

  User({this.name, this.email, this.age});
}

// After null safety migration
class User {
  late final String name;
  late final String email;
  final int age;

  User({
    required String name,
    required String email,
    this.age = 0,
  }) {
    this.name = name;
    this.email = email;
  }
}
```

## Foreign Function Interface (dart:ffi)

**Definition.** `dart:ffi` (Foreign Function Interface) is a Dart library that allows Dart code to
call C functions directly, without writing glue code in an intermediate language. It provides
bindings for C types, pointers, structs, callbacks, and dynamic library loading. It is the mechanism
by which Dart interacts with native system libraries, operating system APIs, and
performance-critical C/C++ code.

`dart:ffi` is available on native platforms (iOS, Android, macOS, Windows, Linux). It is not
available on the web (use WASM interop instead).

### Dynamic Library Loading

The entry point for FFI is `DynamicLibrary`, which represents a loaded shared library.

```dart
import 'dart:ffi';
import 'dart:io';

// Open a platform library by name
final dylib = DynamicLibrary.open('libexample.so');       // Linux
final dylib = DynamicLibrary.open('example.dll');           // Windows
final dylib = DynamicLibrary.open('libexample.dylib');      // macOS

// Open a library bundled with the application
final dylib = DynamicLibrary.process();  // symbols from the current process
```

**Definition.** `DynamicLibrary.open` loads a shared library by path. The path resolution follows
platform conventions: on Linux, `LD_LIBRARY_PATH` is searched; on macOS, `DYLD_LIBRARY_PATH`; on
Windows, the system search path. `DynamicLibrary.process()` gives access to symbols exported by the
running process itself.

### Binding C Functions: Typedefs and Lookups

To call a C function from Dart, you define two typedefs: one for the C signature using FFI types,
and one for the Dart-side function type. Then you look up the function pointer in the dynamic
library and cast it.

```dart
import 'dart:ffi';

// C typedef: describes the native function signature
typedef NativeAddFn = Int32 Function(Int32 a, Int32 b);

// Dart typedef: describes the Dart-side callable
typedef DartAddFn = int Function(int a, int b);

void main() {
  final dylib = DynamicLibrary.open('libmath.so');

  // Look up the function by symbol name
  final add = dylib.lookupFunction<NativeAddFn, DartAddFn>('add');

  // Call it like a normal Dart function
  final result = add(3, 4);  // 7
  print(result);
}
```

The two typedefs must agree on parameter and return types. The C typedef uses FFI native types
(`Int32`, `Double`, `Pointer`, etc.). The Dart typedef uses Dart types (`int`, `double`, etc.). The
`lookupFunction` call bridges the two.

### Primitive Types Mapping

Dart and C have different primitive type systems. `dart:ffi` provides native types that map to C
types:

| FFI Type            | C Type                            | Dart Type    | Size (bytes) |
| ------------------- | --------------------------------- | ------------ | ------------ |
| `Int8`              | `int8_t` / `char`                 | `int`        | 1            |
| `Int16`             | `int16_t` / `short`               | `int`        | 2            |
| `Int32`             | `int32_t` / `int`                 | `int`        | 4            |
| `Int64`             | `int64_t` / `long long`           | `int`        | 8            |
| `Uint8`             | `uint8_t` / `unsigned char`       | `int`        | 1            |
| `Uint16`            | `uint16_t` / `unsigned short`     | `int`        | 2            |
| `Uint32`            | `uint32_t` / `unsigned int`       | `int`        | 4            |
| `Uint64`            | `uint64_t` / `unsigned long long` | `int`        | 8            |
| `Float`             | `float`                           | `double`     | 4            |
| `Double`            | `double`                          | `double`     | 8            |
| `Bool`              | `bool` (C99 `_Bool`)              | `bool`       | 1            |
| `Void`              | `void`                            | N/A          | 0            |
| `Handle`            | Dart object handle                | `Object`     | platform     |
| `NativeFunction<T>` | function pointer                  | N/A          | platform     |
| `Pointer<T>`        | `T*`                              | `Pointer<T>` | platform     |

:::info

All integer FFI types map to Dart `int`, regardless of size. Dart's `int` is a 64-bit integer on the
VM. When passing an `Int8` value, the Dart `int` is truncated to 8 bits. When reading an `Int8`
value, it is sign-extended to 64 bits. Always be aware of the C type's range when working with FFI.

:::

### Pointers

**Definition.** `Pointer<T>` represents a memory address pointing to a value of type `T`. It is the
FFI equivalent of a C pointer (`T*`). Pointers are opaque addresses — they have no built-in bounds
checking.

#### Allocation and Deallocation

```dart
import 'dart:ffi';
import 'package:ffi/ffi.dart';

// Allocate memory for a single Int32
final ptr = malloc<Int32>();
ptr.value = 42;
print(ptr.value);  // 42
malloc.free(ptr);

// Allocate with calloc (zero-initialized)
final ptr2 = calloc<Int32>();
print(ptr2.value);  // 0
malloc.free(ptr2);

// Allocate an array of 10 Int32 values
final array = malloc<Int32>(10);
for (var i = 0; i < 10; i++) {
  array[i] = i * 2;  // array.elementAt(i).value = i * 2
}
malloc.free(array);
```

The `malloc` and `calloc` functions are from `package:ffi`, which provides convenience wrappers
around `dart:ffi`'s allocation functions.

#### Pointer Arithmetic

```dart
final ptr = malloc<Int32>(5);
ptr.value = 10;         // ptr[0]
(ptr + 1).value = 20;   // ptr[1]
ptr.elementAt(2).value = 30;  // ptr[2]

// Reading
print(ptr.value);               // 10
print((ptr + 1).value);        // 20
print(ptr.elementAt(2).value);  // 30

// Pointer casting
final bytePtr = ptr.cast<Uint8>();  // reinterpret as byte array
```

:::warning

`malloc` and `calloc` allocate native heap memory. This memory is **not** managed by Dart's garbage
collector. Every `malloc` must have a corresponding `malloc.free`, or you leak native memory. Unlike
Dart objects, there is no finalizer that automatically frees native memory. Use `using` from
`package:ffi` or Dart's `NativeFinalizer` to ensure cleanup.

:::

#### Scoped Allocation with `using`

```dart
import 'package:ffi/ffi.dart';

int addViaFfi(int a, int b) {
  // using ensures malloc.free is called when the scope exits
  return using<Int32>((alloc) {
    final ptrA = alloc<Int32>();
    final ptrB = alloc<Int32>();
    ptrA.value = a;
    ptrB.value = b;
    return nativeAdd(ptrA, ptrB);
  });
}
```

### Structs

**Definition.** An FFI struct is a Dart class that extends `Struct` and maps to a C `struct` in
memory. Fields are declared using `@Int32()`, `@Double()`, `@Pointer()`, and other annotations. The
struct layout in memory matches the C layout.

```dart
import 'dart:ffi';
import 'package:ffi/ffi.dart';

class Point extends Struct {
  @Double()
  external double x;

  @Double()
  external double y;
}

class Rectangle extends Struct {
  external Point origin;

  @Double()
  external double width;

  @Double()
  external double height;
}
```

All struct fields must be `external`. The Dart compiler generates the accessor code that reads and
writes directly from/to the native memory layout.

#### Packed Structs

By default, FFI structs follow the platform's C ABI alignment rules. Use `@Packed(n)` to override
alignment:

```dart
// C: __attribute__((packed)) struct PackedPoint { uint8_t x; uint32_t y; };
@Packed(1)
class PackedPoint extends Struct {
  @Uint8()
  external int x;

  @Uint32()
  external int y;
}
```

`@Packed(1)` means no padding between fields. `@Packed(2)` aligns fields to 2-byte boundaries, etc.

#### Creating and Passing Structs

```dart
final pointPtr = malloc<Point>();
pointPtr.ref.x = 1.0;
pointPtr.ref.y = 2.0;

// Pass pointer to struct to C function
nativeDrawPoint(pointPtr);

// Read back
print('x=${pointPtr.ref.x}, y=${pointPtr.ref.y}');

malloc.free(pointPtr);
```

Use `ptr.ref` to access the struct fields through a pointer. The `.ref` property returns a proxy
object that reads/writes directly from native memory.

### Callbacks

Callbacks allow C code to call back into Dart code. There are two mechanisms in modern Dart:
`NativeCallable` (Dart 3.0+) and `Pointer.fromFunction` (legacy).

#### NativeCallable (Dart 3.0+)

```dart
import 'dart:ffi';

// C expects: int32_t callback(int32_t x, int32_t y)
typedef NativeCallbackFn = Int32 Function(Int32 x, Int32 y);
typedef DartCallbackFn = int Function(int x, int y);

// Create a native callable from a Dart function
final callback = NativeCallable<DartCallbackFn>.listener(
  (int x, int y) {
    print('Callback: $x + $y = ${x + y}');
    return x + y;
  },
);

// Register with C code
nativeRegisterCallback(callback.nativeFunction);

// Must close when done to prevent memory leaks
callback.close();
```

`NativeCallable` has two variants:

| Variant                       | Thread Safety        | Exception Handling                 | Use Case                    |
| ----------------------------- | -------------------- | ---------------------------------- | --------------------------- |
| `NativeCallable.listener`     | Any thread can call  | Exceptions become unhandled errors | Callbacks from any thread   |
| `NativeCallable.isolateLocal` | Only calling isolate | Exceptions propagate to caller     | Callbacks from same isolate |

:::warning

`NativeCallable` objects must be closed with `.close()` when no longer needed. Failure to close
leaks native resources. The callable is valid only while the `NativeCallable` object is alive.

:::

#### Legacy Pointer.fromFunction

```dart
typedef NativeCallbackFn = Int32 Function(Int32 x, Int32 y);
typedef DartCallbackFn = int Function(int x, int y);

final callbackPointer = Pointer.fromFunction<DartCallbackFn>(
  (int x, int y) => x + y,
);

// Pass to C
nativeSetCallback(callbackPointer);
```

:::warning

`Pointer.fromFunction` callbacks can only be invoked from the same isolate that created them. If C
code calls the callback from a different thread, the behavior is undefined and may crash. Use
`NativeCallable.listener` for cross-thread callbacks.

:::

### Strings

C strings (`char*`) and Dart strings (`String`) are different representations. `package:ffi`
provides converters.

#### Dart to C String

```dart
import 'package:ffi/ffi.dart';

// Allocate a Utf8-encoded C string from Dart
final cString = 'Hello, C!'.toNativeUtf8();

// Pass to C function
nativePrintString(cString);

// Free when done
malloc.free(cString);
```

#### C String to Dart

```dart
// C returns a char*
final cStringPtr = nativeGetString();

// Convert to Dart String
final dartString = cStringPtr.toDartString();

// If you own the C string, free it
malloc.free(cStringPtr);

// If C owns the string, do not free it
```

#### UTF-16 Strings (Windows API)

```dart
final utf16String = 'Hello'.toNativeUtf16();
nativeWindowsFunction(utf16String);
malloc.free(utf16String);

final result = nativeWindowsReturnString();
final dartResult = result.toDartString();
```

| Conversion                    | Direction | Encoding                     |
| ----------------------------- | --------- | ---------------------------- |
| `toNativeUtf8()`              | Dart to C | UTF-8                        |
| `toNativeUtf16()`             | Dart to C | UTF-16                       |
| `ptr.toDartString()`          | C to Dart | UTF-8 (auto-detected length) |
| `ptr.toDartString(length: n)` | C to Dart | UTF-8 (fixed length)         |

:::warning

Always free native strings allocated via `toNativeUtf8()` or `toNativeUtf16()`. The `toDartString()`
method allocates a new Dart `String` object — it does not take ownership of the C memory. If C
allocated the string, you must free it with C's deallocator, not Dart's `malloc.free`.

:::

### Arrays

#### Fixed-Size Arrays in Structs

```dart
class Matrix4 extends Struct {
  @Array(16)
  external Array<Double> values;
}

final matrix = malloc<Matrix4>();
for (var i = 0; i < 16; i++) {
  matrix.ref.values[i] = i.toDouble();
}
print(matrix.ref.values[0]);  // 0.0
malloc.free(matrix);
```

#### Variable-Length Arrays

C variable-length arrays (VLAs) are not directly supported. For dynamic arrays, pass a pointer and
length separately:

```dart
// C: void process(int* data, int length)
typedef NativeProcessFn = Void Function(Pointer<Int32> data, Int32 length);
typedef DartProcessFn = void Function(Pointer<Int32> data, int length);

final process = dylib.lookupFunction<NativeProcessFn, DartProcessFn>('process');

final data = malloc<Int32>(100);
for (var i = 0; i < 100; i++) {
  data[i] = i;
}
process(data, 100);
malloc.free(data);
```

### FfiNative Annotation (Dart 3.3+)

The `@FfiNative` annotation simplifies FFI bindings by eliminating manual typedefs and
`lookupFunction` calls. The annotation generates the binding code at compile time.

```dart
import 'dart:ffi';

// C: int32_t add(int32_t a, int32_t b)
@FfiNative<Int32 Function(Int32, Int32)>('add')
external int add(int a, int b);

// C: double sqrt(double x)
@FfiNative<Double Function(Double)>('sqrt')
external double nativeSqrt(double x);

// C: void* malloc(size_t size)
@FfiNative<Pointer<Void> Function(IntPtr)>('malloc')
external Pointer<Void> nativeMalloc(int size);

// C: void free(void* ptr)
@FfiNative<Void Function(Pointer<Void>)>('free')
external void nativeFree(Pointer<Void> ptr);
```

:::info

`@FfiNative` uses symbol resolution at load time rather than lookup time. This is slightly faster
than `DynamicLibrary.lookup` and produces cleaner code. It requires Dart 3.3+ and native platforms
(AOT or JIT).

:::

### Async FFI

Native C functions are synchronous and block the calling thread. In Dart's single-threaded event
loop model, a blocking FFI call freezes the entire isolate. To avoid this, use `Isolate.run` to
offload FFI calls to a separate isolate.

```dart
import 'dart:isolate';

// Synchronous FFI call that might block
int computeInC(int input) {
  return nativeHeavyComputation(input);
}

// Run in a separate isolate to avoid blocking the UI
Future<int> computeAsync(int input) async {
  return await Isolate.run(() => computeInC(input));
}

// Usage
void main() async {
  final result = await computeAsync(42);
  print(result);
}
```

:::warning

Never call blocking FFI functions on the main isolate in a Flutter application. The UI thread must
remain responsive. Always offload potentially long-running native calls to a compute isolate via
`Isolate.run`.

:::

## Isolates and Concurrency Deep Dive

### Isolate Architecture

**Definition.** An isolate is Dart's unit of concurrency. Each isolate has its own memory heap,
event loop, and thread of execution. Isolates do not share memory — communication between them is
strictly via message passing through ports.

This is fundamentally different from threads in Java, C++, or Go. In those languages, threads share
the same heap and require synchronization primitives (mutexes, semaphores, atomics) to prevent data
races. Dart's isolates eliminate data races by eliminating shared state.

```
Isolate A                    Isolate B
+------------------+         +------------------+
| Heap (private)   |         | Heap (private)   |
| Event loop       |         | Event loop       |
| ReceivePort      | <-----> | SendPort         |
| SendPort         | ----->  | ReceivePort      |
+------------------+         +------------------+
```

Messages are copied between isolates. Most Dart objects can be sent (primitives, strings, lists,
maps). Objects containing unsendable types (e.g., closures, sockets, native pointers) cannot be sent
directly.

### Isolate.run()

`Isolate.run()` is the simplest way to run computation in a separate isolate. It creates an isolate,
runs a function, sends the result back, and terminates the isolate.

```dart
import 'dart:isolate';

Future<int> heavyComputation(int input) async {
  return await Isolate.run(() {
    // This runs in a separate isolate with its own heap
    int result = 0;
    for (var i = 0; i < input; i++) {
      result += i;
    }
    return result;
  });
}

void main() async {
  // main isolate is not blocked
  final result = await heavyComputation(1000000000);
  print(result);
}
```

### Isolate.spawn()

`Isolate.spawn()` provides lower-level control. You explicitly create a `ReceivePort` for
communication and pass a `SendPort` to the spawned isolate.

```dart
import 'dart:isolate';

void worker(SendPort sendPort) {
  // Perform work
  final result = 42;

  // Send result back
  sendPort.send(result);

  // Can send multiple messages
  sendPort.send('done');
}

void main() async {
  final receivePort = ReceivePort();

  // Spawn isolate, passing the SendPort
  await Isolate.spawn(worker, receivePort.sendPort);

  // Listen for messages
  final first = await receivePort.first;
  print(first);  // 42

  // Using a stream subscription for multiple messages
  final port2 = ReceivePort();
  await Isolate.spawn(worker, port2.sendPort);

  await for (final message in port2) {
    print(message);
    if (message == 'done') {
      port2.close();
      break;
    }
  }
}
```

### Bidirectional Communication

For long-running isolates that need ongoing communication:

```dart
import 'dart:isolate';

class WorkerIsolate {
  final ReceivePort _mainReceivePort = ReceivePort();
  Isolate? _isolate;
  late SendPort _workerSendPort;

  Future<void> start() async {
    final workerReceivePort = ReceivePort();

    _isolate = await Isolate.spawn(
      _workerLoop,
      _MainMessage(mainPort: workerReceivePort.sendPort),
    );

    // Wait for worker to send its SendPort
    final completer = Completer<SendPort>();
    workerReceivePort.listen((message) {
      if (message is SendPort) {
        completer.complete(message);
      }
    });
    _workerSendPort = await completer.future;
  }

  Future<int> compute(int value) async {
    final responsePort = ReceivePort();
    _workerSendPort.send(_Request(value: value, replyPort: responsePort.sendPort));
    return await responsePort.first as int;
  }

  void dispose() {
    _isolate?.kill(priority: Isolate.immediate);
    _mainReceivePort.close();
  }
}

// Worker entry point
void _workerLoop(_MainMessage message) {
  final receivePort = ReceivePort();
  message.mainPort.send(receivePort.sendPort);

  receivePort.listen((msg) {
    if (msg is _Request) {
      final result = msg.value * 2;
      msg.replyPort.send(result);
    }
  });
}

class _MainMessage {
  final SendPort mainPort;
  _MainMessage({required this.mainPort});
}

class _Request {
  final int value;
  final SendPort replyPort;
  _Request({required this.value, required this.replyPort});
}
```

:::warning

Isolate messages are ordered per port. If isolate A sends messages M1, M2, M3 to isolate B, B will
receive them in that order. However, messages sent from different isolates to the same port may be
interleaved — there is no global ordering guarantee across multiple senders.

:::

### Event Loop Model

Dart's event loop processes two types of tasks:

1. **Microtasks** — High-priority tasks scheduled with `scheduleMicrotask` or via `Future.then()`.
   Microtasks run to completion before the event loop processes the next event. They are used for
   internal async plumbing.

2. **Events (macrotasks)** — I/O events, timers, UI events, isolate messages, etc. The event loop
   processes one event at a time, running all microtasks queued during event processing before
   moving to the next event.

```
while (true) {
  // Process all queued microtasks
  while (microtaskQueue.isNotEmpty) {
    final task = microtaskQueue.removeFirst();
    task();
  }

  // Process one event
  if (eventQueue.isNotEmpty) {
    final event = eventQueue.removeFirst();
    event.handler();
  }
}
```

```dart
import 'dart:async';

void main() {
  scheduleMicrotask(() => print('microtask 1'));
  scheduleMicrotask(() => print('microtask 2'));
  print('sync 1');

  Future.microtask(() => print('microtask 3'));
  print('sync 2');

  Future(() => print('event 1'));  // schedules as a Timer event
  print('sync 3');
}
// Output:
// sync 1
// sync 2
// sync 3
// microtask 1
// microtask 2
// microtask 3
// event 1
```

### Completer and Future Internals

A `Completer<T>` is the manual control interface for a `Future`. Normally, `Future` values are
created by `async`/`await` or `Future.value`/`Future.error`. A `Completer` gives you explicit
control over when the future completes.

```dart
final completer = Completer<String>();

// Somewhere else in the code:
void onResultReceived(String result) {
  if (!completer.isCompleted) {
    completer.complete(result);
  }
}

void onError(Exception e) {
  if (!completer.isCompleted) {
    completer.completeError(e);
  }
}

// Consumers await the future
final result = await completer.future;
```

Common use cases for `Completer`:

- Bridging callback-based APIs to `Future`-based APIs.
- Implementing request/response patterns over message ports.
- Coordinating multiple async operations with custom logic.

```dart
// Bridge a callback-based API to Future
Future<HttpResponse> makeRequest(HttpClient client, String url) {
  final completer = Completer<HttpResponse>();
  client.getUrl(Uri.parse(url)).then((request) {
    request.close().then((response) {
      if (!completer.isCompleted) {
        completer.complete(response);
      }
    }).catchError((e) {
      if (!completer.isCompleted) {
        completer.completeError(e);
      }
    });
  }).catchError((e) {
    if (!completer.isCompleted) {
      completer.completeError(e);
    }
  });
  return completer.future;
}
```

## WASM Compilation (dart2wasm)

### Overview

Dart can compile to WebAssembly (WASM) via `dart compile wasm`. This produces a `.wasm` file plus a
JS bootstrap file that loads and runs it in the browser. WASM compilation is an alternative to
`dart2js` (which compiles to JavaScript).

```bash
dart compile wasm bin/app.dart
# Output: app.wasm, app.mjs (JS module bootstrap)
```

### Advantages over dart2js

| Characteristic  | dart2js                 | dart2wasm                                    |
| --------------- | ----------------------- | -------------------------------------------- |
| Output format   | JavaScript              | WebAssembly + JS bootstrap                   |
| Execution speed | V8 JIT on JS            | Near-native via WASM                         |
| Startup time    | Slower (JS parse + JIT) | Faster (WASM is compact)                     |
| Code size       | Larger                  | Smaller                                      |
| Debugging       | Source maps             | DWARF debug info                             |
| JS interop      | Direct                  | Via `package:web`                            |
| Browser support | All                     | WASM GC required (Chrome 119+, Firefox 120+) |

### JS Interop via package:web

```dart
@JS()
library web_interop;

import 'package:web/web.dart' as web;

void main() {
  // Access browser APIs
  final document = web.document;
  final div = document.createElement('div');
  div.textContent = 'Hello from Dart WASM';
  document.body?.appendChild(div);

  // Fetch API
  final response = await web.window.fetch('https://api.example.com/data');
  final data = await response.json();
}
```

`package:web` provides typed bindings for all Web APIs (DOM, Fetch, WebSocket, etc.). These bindings
use Dart's JS interop types (`JSObject`, `JSString`, `JSArray`, etc.) rather than Dart's native
types.

### Performance Characteristics

WASM compilation produces code that runs at near-native speed for compute-heavy workloads. The WASM
binary is compact and loads quickly. However, every call from WASM to JavaScript (and vice versa)
has overhead. For DOM-heavy applications, this overhead can dominate. For compute-heavy applications
(e.g., image processing, cryptography, simulations), the performance gain is significant.

:::info

dart2wasm requires WebAssembly Garbage Collection (WASM GC) support in the browser. As of 2025, this
is available in Chrome 119+, Firefox 120+, and Safari 17.4+. Older browsers fall back to dart2js.

:::

## Advanced Patterns

### Extension Types (Dart 3)

**Definition.** Extension types (introduced in Dart 3) allow you to define a compile-time wrapper
around an existing type. The wrapper has zero runtime overhead — it is erased at compile time. The
extension type's methods are resolved statically and dispatch to the underlying representation's
API.

```dart
extension type UserId(int value) {
  bool get isValid => value > 0;
  String get formatted => 'USR-$value';
}

extension type EmailAddress(String value) {
  bool get isValid => value.contains('@');
  String get domain => value.split('@').last;
}

// Usage — these are distinct types at compile time
void processUser(UserId id, EmailAddress email) {
  print('User ${id.formatted}, domain: ${email.domain}');
}

// Type safety at zero runtime cost
UserId id = UserId(42);
EmailAddress email = EmailAddress('user@example.com');
processUser(id, email);
// processUser(id, id);  // Compile error: UserId is not EmailAddress
```

Extension types are erased to their representation type at runtime. `UserId` becomes `int`, and
`EmailAddress` becomes `String`. There is no wrapper object allocation, no indirection, and no
virtual dispatch. This is Dart's answer to the "newtype" pattern from Haskell or the "phantom type"
pattern from TypeScript.

### Extension Methods

Extension methods add functionality to existing types without subclassing or modifying the original
class.

```dart
extension StringExtension on String {
  String get capitalized =>
      isEmpty ? '' : '${this[0].toUpperCase()}${substring(1)}';

  bool get isNumeric => double.tryParse(this) != null;

  String repeat(int times) => this * times;
}

extension ListExtension<T> on List<T> {
  List<T> sortedBy<K extends Comparable>(K Function(T) key) {
    final copy = [...this];
    copy.sort((a, b) => key(a).compareTo(key(b)));
    return copy;
  }
}

// Usage
'hello world'.capitalized;         // 'Hello world'
'123.45'.isNumeric;                // true
'abc'.repeat(3);                   // 'abcabcabc'

final users = [{'name': 'Bob'}, {'name': 'Alice'}];
users.sortedBy((u) => u['name'] as String);
```

Extension methods are resolved statically. They do not modify the underlying type and cannot
override existing methods. If an extension method conflicts with a method on the type itself, the
type's method wins.

### Sealed Classes

**Definition.** Sealed classes restrict which classes can extend or implement them. The set of
subtypes is known at compile time and must be defined in the same library. This enables exhaustive
pattern matching — the compiler knows all possible subtypes and can verify that all cases are
handled.

```dart
sealed class Expr {}

class IntLiteral extends Expr {
  final int value;
  IntLiteral(this.value);
}

class AddExpr extends Expr {
  final Expr left;
  final Expr right;
  AddExpr(this.left, this.right);
}

class MulExpr extends Expr {
  final Expr left;
  final Expr right;
  MulExpr(this.left, this.right);
}

// Exhaustive — compiler verifies all subtypes are handled
int eval(Expr expr) => switch (expr) {
  IntLiteral(:final value) => value,
  AddExpr(:final left, :final right) => eval(left) + eval(right),
  MulExpr(:final left, :final right) => eval(left) * eval(right),
  // No default needed — sealed ensures exhaustiveness
};
```

The key constraint: all direct subtypes of a sealed class must be in the same library (same package
file or part file). Sub-subtypes can be in other libraries, but the direct subtypes that form the
exhaustive set must be co-located.

### Records (Dart 3)

Records are anonymous, immutable, fixed-size collections of named and positional fields.

```dart
// Positional record
final point = (1.0, 2.0);
print(point.$1);  // 1.0
print(point.$2);  // 2.0

// Named record
final user = (name: 'Alice', age: 30);
print(user.name);  // 'Alice'
print(user.age);   // 30

// Mixed
final entry = ('key', value: 42);
print(entry.$1);      // 'key'
print(entry.value);   // 42

// Record type annotations
(int, String) pair = (1, 'hello');
({int x, int y}) coords = (x: 10, y: 20);
(int, {String name}) mixed = (42, name: 'test');

// Records in function signatures
({String name, int age}) fetchUser(int id) {
  return (name: 'Alice', age: 30);
}

// Destructuring
final (x, y) = (10, 20);
final (:name, :age) = (name: 'Bob', age: 25);
```

Records are value types. Two records with the same fields are equal:

```dart
print((1, 'a') == (1, 'a'));  // true
print((1, 'a') == (1, 'b'));  // false
```

Records are useful as lightweight return types that replace the need for dedicated classes when you
need to return multiple values:

```dart
// Before: dedicated class
class DivisionResult {
  final int quotient;
  final int remainder;
  DivisionResult(this.quotient, this.remainder);
}

// After: record type
(int quotient, int remainder) divide(int a, int b) {
  return (a ~/ b, a % b);
}
```

### Pattern Matching

Dart 3 introduced comprehensive pattern matching with switch expressions, if-case, guards, and
destructuring.

#### Switch Expressions

```dart
String describeNumber(int n) => switch (n) {
  0 => 'zero',
  1 => 'one',
  < 0 => 'negative',
  _ => 'positive',
};

String describeType(Object value) => switch (value) {
  int _ => 'integer',
  String _ => 'string',
  double _ => 'double',
  List _ => 'list',
  _ => 'other',
};
```

#### Object Destructuring

```dart
sealed class Shape {}

class Circle extends Shape {
  final double radius;
  Circle(this.radius);
}

class Rectangle extends Shape {
  final double width;
  final double height;
  Rectangle(this.width, this.height);
}

String describe(Shape shape) => switch (shape) {
  Circle(:final radius) when radius > 10 => 'large circle (r=$radius)',
  Circle(:final radius) => 'circle (r=$radius)',
  Rectangle(:final width, :final height) => 'rect ${width}x$height',
};

// Record destructuring
void processEntry((String, int) entry) {
  switch (entry) {
    case (final key, final value) when value > 100:
      print('Large: $key = $value');
    case (final key, final value):
      print('Small: $key = $value');
  }
}
```

#### If-Case

```dart
void process(Object value) {
  if (value case int x when x > 0) {
    print('positive integer: $x');
  } else if (value case String s) {
    print('string: $s');
  } else {
    print('unknown: $value');
  }
}
```

#### Guards

Guards are `when` clauses that add conditions to pattern matches:

```dart
String classify(int value) => switch (value) {
  _ when value % 15 == 0 => 'fizzbuzz',
  _ when value % 3 == 0 => 'fizz',
  _ when value % 5 == 0 => 'buzz',
  _ => '$value',
};
```

#### Logical Patterns

```dart
bool isSmallOrLarge(int n) => switch (n) {
  < 10 || > 100 => true,
  _ => false,
};

bool isNotString(Object value) => switch (value) {
  String _ => false,
  _ => true,
};
```

## Common Pitfalls

### FFI Memory Leaks

The most common FFI bug is forgetting to free native memory. Dart's garbage collector does not track
native allocations. Every `malloc`, `calloc`, and `toNativeUtf8` must have a corresponding free.

```dart
// LEAK: native string never freed
void leakString() {
  final cStr = 'hello'.toNativeUtf8();
  nativePrint(cStr);
  // Missing: malloc.free(cStr)
}

// CORRECT: always free
void correctString() {
  final cStr = 'hello'.toNativeUtf8();
  try {
    nativePrint(cStr);
  } finally {
    malloc.free(cStr);
  }
}

// CORRECT: using scope
void correctStringUsing() {
  using((Arena alloc) {
    final cStr = 'hello'.toNativeUtf8(allocator: alloc);
    nativePrint(cStr);
  });
  // Arena frees all allocations when scope exits
}
```

### Dangling Pointers

Using a pointer after the underlying memory has been freed causes undefined behavior. The Dart VM
does not detect use-after-free.

```dart
// DANGEROUS: pointer used after free
final ptr = malloc<Int32>();
malloc.free(ptr);
print(ptr.value);  // Undefined behavior — memory may have been reused

// DANGEROUS: pointer outlives the isolate that allocated it
Pointer<Int32> globalPtr;
void allocate() {
  globalPtr = malloc<Int32>();
}
// If the allocating isolate is killed, globalPtr becomes dangling
```

### Late Initialization Errors

```dart
// CRASH: accessing late field before initialization
class Service {
  late HttpClient client;
}

void main() {
  final service = Service();
  service.client.get(Uri.parse('https://example.com'));
  // LateInitializationError: Field 'client' has not been initialized
}

// SAFE: initialize in constructor
class Service {
  late final HttpClient client;
  Service() {
    client = HttpClient();
  }
}
```

### Unnecessary Null Assertions

```dart
String? name = 'Dart';

// UNNECESSARY: flow analysis already promotes
print(name!.length);

// CORRECT: trust flow analysis
if (name != null) {
  print(name.length);  // promoted to String, no ! needed
}

// CORRECT: use ?? for defaults
print((name ?? '').length);
```

### Isolate Message Ordering

Messages sent from a single `SendPort` to a single `ReceivePort` are delivered in order. But
messages sent from different `SendPort`s to the same `ReceivePort` may interleave.

```dart
// Isolate A sends: M1, M2, M3
// Isolate B sends: N1, N2, N3
// Receiver might get: M1, N1, M2, N2, M3, N3
// But always: M1 before M2 before M3, and N1 before N2 before N3
```

If you need ordering guarantees across multiple senders, implement a sequence number or use a single
sender isolate as a coordinator.

### Null Safety Migration Anti-Patterns

```dart
// ANTI-PATTERN: adding ? everywhere instead of thinking about nullability
class User {
  String? name;      // Should this really be nullable?
  int? age;          // Does age ever need to be null?
  String? email;     // Or should it be required?
}

// BETTER: make fields non-nullable with proper initialization
class User {
  final String name;
  final int age;
  final String email;

  User({
    required this.name,
    required this.age,
    required this.email,
  });
}

// ANTI-PATTERN: wrapping everything in try-catch to handle null
String getName() {
  try {
    return _name!;
  } catch (_) {
    return 'unknown';
  }
}

// BETTER: use null-coalescing
String getName() => _name ?? 'unknown';
```

### FFI Type Width Mistakes

```dart
// WRONG: using int (Dart 64-bit) where C expects int32_t
// If the C function returns -1 as int32_t, it becomes 4294967295 as uint64_t
typedef NativeFn = Int32 Function();
typedef DartFn = int Function();

// When the C function returns Int32 with the high bit set,
// Dart receives a sign-extended int. If you cast to Uint32:
int result = fn();  // result is -1 (sign-extended)
int unsigned = result & 0xFFFFFFFF;  // 4294967295

// Always match the C type width exactly:
// C int32_t -> Dart Int32 typedef
// C uint32_t -> Dart Uint32 typedef
// C size_t -> Dart IntPtr typedef (platform-dependent width)
```

### Async Gap in Isolate Communication

```dart
// BUG: sending non-sendable objects
void spawnWorker() async {
  final receivePort = ReceivePort();
  final httpClient = HttpClient();  // HttpClient is not sendable

  // This throws at runtime: HttpClient cannot be sent between isolates
  Isolate.spawn(worker, (receivePort.sendPort, httpClient));
}

// FIX: create resources inside the worker isolate
void spawnWorker() async {
  final receivePort = ReceivePort();
  Isolate.spawn(worker, receivePort.sendPort);
}

void worker(SendPort sendPort) {
  // Create HttpClient inside the isolate
  final httpClient = HttpClient();
  // ...
}
```

Not all Dart objects can be sent between isolates. Sendable objects include: primitives, `String`,
`List` and `Map` of sendable elements, `SendPort`, `TransferableTypedData`, and `Capability`. Non-
sendable objects include: closures, `Socket`, `HttpClient`, `File`, `Isolate`, and most `dart:io`
types.
