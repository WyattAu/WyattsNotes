---
id: intro
title: Introduction to Dart & Flutter
description: Dart and Flutter best practices, UI patterns, and cross-platform development reference.
slug: intro
sidebar_position: 1
---

## Abstract

This resource is created as a aggregation of best practices in Dart and Flutter listed as a
tutorial.

:::info

Different from other languages, the Flutter aspect is important, and GUI presentation is important,
therefore when Dart code uses Flutter, compiler explorer cannot be used and Dartpad will be used.

:::

<div className="godbolt-container">
  <iframe
    width="100%"
    height="800"
    src="https://dartpad.dev/embed-inline.html?id=f6b391a0280187585c9256ef42e5d913&split=horizontal&theme=dark"
    title="Dartpad Embedded"
    sandbox="allow-scripts allow-same-origin"
    loading="lazy"
  ></iframe>
</div>

## Dart Introduction

Dart is an OOP focus programming language developed by Google, desgined for native support by
compiling to native machine code with AOT (Ahead-of-Time) compilation, and fast reiteration with JIT
(Just-in-Time) compilation that enables hot-reload. Parallelism in Dart relies on isolates instead
of threads appraoch, which are thread-like execution units that have separate memory, therefore no
state sharing is possible and rely on messaging when communcation between isolates are needed.
Memory management in Dart relies on garbage collector, with no direct memory access allowed.

## Flutter Introduction

Flutter is a multi-platform (IOS, Android, Windows, macOS, Linux, web) UI Framework. Flutter rely
heavily on immutable widgets, with lifecycle, state, and layout handled by Impeller (Flutter 3.29+).
Developing Flutter relies heavily on widget compositions and core primitives.

## Where Dart Runs

Dart is a general-purpose language with four primary compilation targets:

| Target               | Compilation                           | Use Case                                            |
| -------------------- | ------------------------------------- | --------------------------------------------------- |
| **Native (AOT)**     | Ahead-of-Time to ARM/x64 machine code | Mobile (iOS/Android), desktop (macOS/Windows/Linux) |
| **Web (WASM/js)**    | dart2wasm or dart2js                  | Browser applications                                |
| **Server (AOT/JIT)** | Native AOT or VM JIT                  | Backend services, CLI tools                         |
| **Flutter runtime**  | AOT (release) or JIT (debug)          | Cross-platform GUI applications                     |

The dual JIT/AOT strategy is the defining architectural decision in Dart. During development, the VM
uses JIT compilation with **hot reload** — the VM injects updated source into the running process
without restarting. In release, the AOT compiler (`dart2native` / `flutter build`) produces a
standalone binary with no runtime dependency on the VM. This is not an interpreter trick; the AOT
compiler performs tree-shaking, type inference, and inlining to produce code competitive with C++ on
numeric benchmarks.

### Flutter

Flutter is the primary consumer of Dart. It is a multi-platform UI framework (iOS, Android, Windows,
macOS, Linux, web) that relies heavily on immutable widgets. Lifecycle, state, and layout are
handled by the rendering pipeline (Impeller as of Flutter 3.29+). Developing Flutter relies heavily
on widget composition and core primitives.

### Server-side Dart

Dart runs on the server via `dart run` or compiled AOT binaries via `dart compile exe`. The `shelf`
package provides middleware-based HTTP handling, and the `dart:io` library gives you sockets, file
I/O, and process management. Google's internal infrastructure runs significant Dart services, and
the ecosystem includes ORM-like packages (`drift`), gRPC support (`grpc`), and Docker base images
(`dart:stable`).

### Dart for the Web

Dart compiles to JavaScript (dart2js) or WebAssembly (dart2wasm). Flutter Web uses this to run
Flutter applications in the browser. For non-Flutter web apps, frameworks like `angular` and
`over_react` exist, though the ecosystem is smaller here compared to TypeScript/React.

## Type System Overview

Dart has a **sound type system** with non-nullable types by default (null safety, Dart 2.12+). Every
expression has a static type known at compile time, and the type checker guarantees that no `null`
value reaches a non-nullable variable at runtime.

```dart
String name = 'Dart';        // non-nullable, must be initialized
String? maybeName = null;     // nullable, can hold null
int count = 42;               // inferred type is int
dynamic anything = 'flexible'; // no static type checking
Object something = 'typed';    // static type is Object, runtime type is String
```

Dart supports generics, mixins, extension methods, abstract classes, and **operator overloading**
via user-defined operators. It does not support multiple inheritance or raw pointers.

## Dart vs Kotlin vs Swift

| Feature          | Dart                                | Kotlin                         | Swift                           |
| ---------------- | ----------------------------------- | ------------------------------ | ------------------------------- |
| Null safety      | Sound, default                      | Sound, default                 | Sound, optional                 |
| Async model      | `Future`/`Stream` + `async`/`await` | Coroutines + `suspend`         | `async`/`await` + `Sendable`    |
| Concurrency      | Isolates (no shared memory)         | Coroutines + threads           | Structured concurrency (actors) |
| Compilation      | JIT (dev) + AOT (release)           | JVM + Kotlin/Native (AOT)      | AOT (native) + JIT (REPL)       |
| Pattern matching | 3.0+ (patterns, guards)             | 1.7+ (exhaustive `when`)       | Swift 5.7+                      |
| Memory           | GC                                  | GC (JVM) / ARC (Native)        | ARC (manual optional)           |
| Primary use      | Flutter, server                     | Android, server, multiplatform | Apple platforms, server         |
| Package manager  | `pub`                               | `gradle` / `maven`             | `swift-package-manager`         |

Key differences for systems engineers:

- **Isolates vs threads**: Dart's isolates have separate heaps. No mutexes, no data races, no shared
  mutable state. Communication is via message passing (`SendPort`/`ReceivePort`). This is
  conceptually similar to Erlang processes or Rust's message-passing concurrency, but simpler (no
  ownership system).
- **AOT by default**: Unlike Kotlin (JVM), Dart produces standalone native binaries without a
  runtime VM dependency.
- **Single vendor**: Dart is primarily maintained by Google. Kotlin has JetBrains + Google, Swift
  has Apple + community.

## Why Learn Dart

If you are a systems engineer, Dart is worth learning for practical reasons:

1. **Flutter is dominant in cross-platform mobile**. If your org ships to iOS and Android, Flutter
   is the most productive single-codebase option.
2. **The language is small**. Dart's spec fits in a few hundred pages. You can be productive in a
   weekend.
3. **Native performance**. AOT-compiled Dart does not have a GC pause problem in practice
   (generational, short-pause collector). Startup time is competitive with Go.
4. **Server-side is viable**. If you want one language for mobile + backend, Dart works.

## Hello World Deep Dive

```dart
void main() {
  print('Hello, Dart!');
}
```

This is a complete Dart program. Let's dissect it:

- **`void`** — The return type. `main()` returns nothing. Dart supports `void`, `int`, `double`,
  `bool`, `String`, `Null`, and user-defined types. `void` is a special type indicating no value.
- **`main()`** — The entry point. The Dart VM looks for a top-level function named `main`. It can
  optionally accept `List<String> args` for command-line arguments.
- **`print()`** — A top-level function from `dart:core` (implicitly imported). Writes to stdout with
  a newline.
- **No semicolon omission** — Semicolons are required. Unlike JavaScript's ASI, Dart has no
  automatic semicolon insertion.

### A More Complete Example

```dart
import 'dart:io';

void main(List<String> args) {
  final name = args.isNotEmpty ? args[0] : 'World';
  final timestamp = DateTime.now().toIso8601String();
  print('[$timestamp] Hello, $name!');

  if (args.contains('--verbose')) {
    print('Running on ${Platform.operatingSystem} '
        'with PID ${pid}');
  }
}
```

Run it:

```bash
dart run hello.dart --verbose
```

This demonstrates imports, nullable-safe list access, string interpolation, and conditional
execution — all within a single file.

## Typical Toolchain Required

- Dart SDK
  - Includes VM, core libraries, analyzer, and Dart CLI
- Flutter SDK
  - Provides Impeller support and Flutter CLI
- Pub
  - Package manager similar to `conan` for C++

## Common Pitfalls

- **Confusing `dynamic` with `Object`**: `dynamic` disables static type checking entirely. `Object`
  is the top type but still enforces type checks at runtime. Prefer `Object?` over `dynamic` unless
  you genuinely need no static checking.
- **Assuming Dart has threads**: It does not. Isolates are not threads. You cannot share memory
  between isolates. If you need shared-memory parallelism, Dart is the wrong tool — use Rust, C++,
  or Go.
- **Ignoring tree-shaking**: The AOT compiler only includes code reachable from `main()`. If you use
  reflection or `dynamic` dispatch extensively, tree-shaking cannot work and binary size balloons.

## Concurrency Model: Isolates

Dart's concurrency story is fundamentally different from most languages. There are no threads, no
mutexes, no shared mutable state.

### How Isolates Work

Each isolate has its own memory heap, its own event loop, and its own garbage collector. Two
isolates cannot access the same memory location. Communication happens exclusively through message
passing via `SendPort` and `ReceivePort`.

```dart
import 'dart:isolate';

void isolateEntry(SendPort sendPort) {
  final receivePort = ReceivePort();
  sendPort.send(receivePort.sendPort);

  receivePort.listen((message) {
    final result = (message as int) * 2;
    sendPort.send(result);
  });
}

void main() async {
  final receivePort = ReceivePort();
  await Isolate.spawn(isolateEntry, receivePort.sendPort);

  final sendPort = await receivePort.first as SendPort;

  final responsePort = ReceivePort();
  sendPort.send(responsePort.sendPort);
  sendPort.send(42);

  final result = await responsePort.first;
  print('Result: $result');  // Result: 84
}
```

### Compute Isolates (Dart 2.19+)

For CPU-bound parallelism, `Isolate.run` provides a simpler API:

```dart
void main() async {
  final result = await Isolate.run(() {
    // This runs in a separate isolate with its own heap
    var sum = 0;
    for (var i = 0; i &lt; 1000000000; i++) {
      sum += i;
    }
    return sum;
  });
  print('Sum: $result');
}
```

The trade-off is clear: no data races, but message serialization has overhead. For fine-grained
parallelism (e.g., pixel-level image processing), Dart isolates are slower than thread-based
approaches. For coarse-grained parallelism (e.g., parsing a large JSON blob), isolates work well.

## Memory Management

Dart uses a generational garbage collector with two generations: new space and old space.

- **New space**: Short-lived objects. Allocated in a semi-space collector. Collection is fast
  (sub-millisecond).
- **Old space**: Objects that survive several new-space collections are promoted. Uses a mark-sweep
  algorithm.

The GC runs concurrently with the mutator (application code) for old-space collections, meaning
pause times are typically under 1ms even for large heaps. This is a practical advantage over JVM's
stop-the-world GC pauses.

You have no direct control over GC. There is no `System.gc()`, no `free()`, no `autoreleasepool`.
The GC is tuned for low-latency UI applications, which means it favors pause time over throughput.

## Asynchronous Programming

Dart's async model is based on `Future` and `Stream`, with `async`/`await` syntax sugar.

```dart
Future&lt;String&gt; fetchData() async {
  final response = await HttpClient().getUrl(Uri.parse('https://example.com'));
  return response.transform(utf8.decoder).join();
}

void main() async {
  final data = await fetchData();
  print(data);
}
```

Key points:

- `Future` represents a value that will be available later (similar to a JavaScript `Promise`).
- `Stream` represents a sequence of asynchronous events (similar to an `Observable` in RxJS).
- The event loop is single-threaded within each isolate. `await` yields to the event loop; it does
  not create a thread.
- `async` functions return a `Future` synchronously. The function body executes asynchronously.

```dart
// Stream example
void main() {
  final controller = StreamController&lt;int&gt;();
  controller.stream
      .where((value) =&gt; value.isEven)
      .map((value) =&gt; value * 2)
      .listen((value) =&gt; print('Processed: $value'));

  controller.add(1);
  controller.add(2);
  controller.add(3);
  controller.add(4);
  controller.close();
}
```

## Dart Ecosystem

### pub.dev

The central package repository is [pub.dev](https://pub.dev). Notable packages:

| Package                 | Purpose                                |
| ----------------------- | -------------------------------------- |
| `http`                  | HTTP client                            |
| `shelf`                 | Server-side HTTP middleware framework  |
| `freezed`               | Immutable data classes with codegen    |
| `json_serializable`     | JSON serialization codegen             |
| `drift`                 | Type-safe SQL database (ORM)           |
| `riverpod`              | State management (Flutter)             |
| `dio`                   | Advanced HTTP client with interceptors |
| `get_it` / `injectable` | Dependency injection                   |
| `args`                  | Command-line argument parsing          |

### Build System: build_runner

Dart uses code generation extensively (for JSON serialization, freezed classes, etc.). The
`build_runner` package orchestrates this:

```bash
dart pub global activate build_runner
dart run build_runner build          # generate once
dart run build_runner watch          # watch for changes and regenerate
```

Generated files conventionally have a `.g.dart` or `.freezed.dart` suffix and are excluded from VCS.

### Language Server Protocol

The Dart analysis server implements the Language Server Protocol (LSP). Any editor that supports LSP
gets autocompletion, go-to-definition, rename, and diagnostics for free. VS Code, Neovim, Emacs, and
Sublime Text all have Dart LSP support.

## Version History

| Version | Year | Key Feature                              |
| ------- | ---- | ---------------------------------------- |
| 1.0     | 2013 | Initial release                          |
| 2.0     | 2018 | Dart Platform (native AOT), Flutter beta |
| 2.12    | 2021 | Sound null safety                        |
| 3.0     | 2023 | Records, patterns, sealed classes, Wasm  |
| 3.5     | 2024 | Improved interop, macros (experimental)  |

Dart follows a 6-week release cycle for stable channel releases. Each release is
backward-compatible.
