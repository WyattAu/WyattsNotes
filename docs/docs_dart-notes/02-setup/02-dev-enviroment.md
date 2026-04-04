---
title: Development Enviroment
date: 2025-07-13T19:11:38.762Z
tags:
  - dart
categories:
  - dart
slug: development-enviroment
---

## Virtual Devices

Virtual devices can be created by opening the command-palette and selecting
`Flutter: Select Device`, and selecting `create android emulator`. However, the performance is not
accurate and convenience is limited, therefore I recommend using a
[physical device](#physical-devices).

## Physical Devices

Android devices can be use for running builds by enabling `USB debugging` from
`Android developer settings`, this is done by:

1. Open settings and navigate to About Phone
2. Tab on the build number 7 times until a confirmation message appear
3. Then enter Developer Options and enable `USB debugging`
4. Plug the phone into the computer with USB connection

Now when selecting VSCode/command-palette/`Flutter: Select Device`, the identifier of the phone will
appear.

:::warning

If running `Flutter: Select Device` does not show your physical device, try revoking the USB
Debugging and disconnect the device. Then reconnect the device and check remember device when
verifying.

:::

## Compiling and Running

With everything setup and a `Flutter: new project` created, the code can now be compiled and ran
with the device selected. Now simply clicking `F5` (VSCode's debug mode) will run the command of
`flutter run --debug` and a counter app will be visible on your device. This is JIT compiled, and
can be hot-reloaded. If you want a release build use the `--release` flag instead, the profile mode
is a bit more complex, refer to
[Flutter documentation](https://docs.flutter.dev/testing/build-modes#profile) for more detail.

## Project Structure

Every Dart project is defined by a `pubspec.yaml` file at the root. This is the single source of
truth for dependencies, metadata, and build configuration — similar to `package.json` (Node),
`Cargo.toml` (Rust), or `go.mod` (Go).

### pubspec.yaml

```yaml
name: my_app
description: A sample Dart application
version: 1.0.0
publish_to: 'none' # prevent accidental publish to pub.dev

environment:
  sdk: '>=3.0.0 <4.0.0' # SDK version constraint

dependencies:
  path: ^1.9.0 # package from pub.dev
  http: ^1.2.0

dev_dependencies:
  test: ^1.25.0 # only used during development/testing
  lints: ^4.0.0 # lint rules
```

Key fields:

| Field              | Purpose                                                             |
| ------------------ | ------------------------------------------------------------------- |
| `name`             | Package identifier, must be lowercase_with_underscores              |
| `environment.sdk`  | Dart SDK version constraint. Use caret syntax for compatible ranges |
| `dependencies`     | Packages required at runtime                                        |
| `dev_dependencies` | Packages required only for development (testing, linting, codegen)  |
| `publish_to`       | Set to `'none'` for private packages                                |

### Typical project layout

```
my_app/
├── analysis_options.yaml     # static analysis config
├── pubspec.yaml              # package manifest
├── pubspec.lock              # pinned versions (committed to VCS)
├── bin/
│   └── my_app.dart           # executable entry point (CLI apps)
├── lib/
│   ├── my_app.dart           # library entry point
│   └── src/
│       ├── models.dart
│       └── services.dart
└── test/
    ├── my_app_test.dart
    └── src/
        └── services_test.dart
```

The `bin/` directory is for executable entry points. The `lib/` directory contains reusable library
code. The `test/` directory mirrors `lib/` structure for test files.

## Packages and Dependencies

### pub get

After editing `pubspec.yaml`, run:

```bash
dart pub get
```

This resolves dependencies, downloads packages to a local cache (`~/.pub-cache`), and generates
`pubspec.lock` and the `.dart_tool/package_config.json` file used by the analyzer and compiler.

### pub add

To add a dependency interactively:

```bash
dart pub add http           # add runtime dependency
dart pub add dev:test       # add dev dependency
dart pub add http --sdk=flutter  # add Flutter plugin
```

### pub outdated

Check for updates:

```bash
dart pub outdated
```

Output shows current versions, resolvable versions, and latest versions for each dependency.

### pub remove

```bash
dart pub remove http
```

### Dependency resolution

Dart uses a **pubspec lockfile** model. `pubspec.lock` pins exact versions. Commit `pubspec.lock` to
version control for applications. For libraries (packages intended to be consumed by others), you
typically do **not** commit `pubspec.lock` — consumers resolve versions themselves.

## Static Analysis: dart analyze

```bash
dart analyze
```

The analyzer checks for type errors, unused imports, missing returns, and lint violations. It reads
`analysis_options.yaml` for configuration:

```yaml
include: package:lints/recommended.yaml

analyzer:
  exclude:
    - build/**
    - '**/*.g.dart'
  errors:
    missing_return: error
    unnecessary_import: warning
```

Common lint packages:

| Package              | Description                                                   |
| -------------------- | ------------------------------------------------------------- |
| `lints`              | Official Google lint rules (`recommended.yaml` / `core.yaml`) |
| `very_good_analysis` | Very Good Ventures' stricter ruleset                          |
| `flutter_lints`      | Flutter-specific lint rules                                   |

Run with info-level output:

```bash
dart analyze --fatal-infos
```

In CI, use `dart analyze --fatal-infos` and fail the build on any finding.

## Formatting: dart format

```bash
dart format .                # format all files in-place
dart format --set-exit-if-changed .   # CI: fail if unformatted
dart format --output=show .  # dry-run, show diff
```

Dart has an opinionated formatter (similar to `gofmt`). There are no configuration options — the
formatter enforces a single canonical style. This eliminates style debates in code review.

Line length defaults to 80 characters. Change it in `analysis_options.yaml`:

```yaml
formatter:
  page_width: 120
```

## Running Code

### dart run

```bash
dart run bin/my_app.dart arg1 arg2
```

`dart run` compiles and executes in one step. For JIT performance during development, this is the
standard command.

### dart compile

For production, compile to a standalone binary:

```bash
dart compile exe bin/my_app.dart -o my_app    # native executable
dart compile aot-snapshot bin/my_app.dart -o my_app.aot  # AOT snapshot
dart compile js bin/my_app.dart -o my_app.js   # JavaScript
dart compile wasm bin/my_app.dart              # WebAssembly
```

`dart compile exe` produces a self-contained binary with no VM dependency. Binary sizes are
typically 3–10 MB for a minimal application.

### flutter run

```bash
flutter run                     # debug mode (JIT, hot reload)
flutter run --release           # release mode (AOT)
flutter run --profile           # profiling mode
flutter run -d chrome           # run on Chrome
flutter run -d macos            # run on macOS desktop
flutter run -d all              # run on all connected devices
```

Hot reload during debug: press `r` in the terminal. Hot restart (full state reset): press `R`.

## Debugging

### VS Code Debugger

Set breakpoints by clicking the gutter (line number area) or pressing `F9`. Press `F5` to start
debugging. The debug panel shows variables, call stack, and breakpoints.

### Dart DevTools

DevTools is a suite of performance and debugging tools:

```bash
dart devtools                     # launch standalone DevTools
flutter pub global activate devtools && dart devtools
```

DevTools provides:

- **Widget Inspector** (Flutter): visualize the widget tree, select widgets to find source code
- **Timeline**: CPU and GPU frame profiling
- **Memory**: heap snapshot, allocation tracing, leak detection
- **Network**: HTTP request inspection
- **Logging**: view `print()` and `debugPrint()` output
- **Coverage**: code coverage visualization

### Observatory (Legacy)

The VM service is available at `http://localhost:XXXXX/` when running in debug mode. DevTools
connects to this service. You can also access it directly in a browser for low-level VM inspection.

## Testing Basics

### Writing a test

```dart
// test/calculator_test.dart
import 'package:test/test.dart';
import 'package:my_app/calculator.dart';

void main() {
  group('Calculator', () {
    late Calculator calc;

    setUp(() {
      calc = Calculator();
    });

    test('adds two numbers', () {
      expect(calc.add(2, 3), equals(5));
    });

    test('throws on division by zero', () {
      expect(() => calc.divide(10, 0), throwsA(isA<ArgumentError>()));
    });
  });
}
```

### Running tests

```bash
dart test                        # run all tests
dart test test/calculator_test.dart  # run specific file
dart test --coverage=coverage    # generate coverage
```

### Test structure

- **`test()`**: Individual test case. Describe with a string that reads as a specification.
- **`group()`**: Logical grouping of related tests. Groups can be nested.
- **`setUp()`** / **`tearDown()`**: Run before/after each test in a group.
- **`setUpAll()`** / **`tearDownAll()`**: Run once before/after all tests in a group.

### Assertions

```dart
expect(value, equals(expected));              // equality
expect(value, isNull);                        // null check
expect(value, isNotNull);                     // non-null check
expect(value, isA<MyType>());                 // type check
expect(value, greaterThan(10));               // comparison
expect(value, contains('substring'));         // string contains
expect(list, containsAll([1, 2, 3]));          // collection contains
expect(() => fn(), throwsException);           // throws check
expect(fn(), completes);                      // Future completes
expect(fn(), completion(equals(42)));          // Future completes with value
```

## Common Pitfalls

- **Not committing `pubspec.lock` for applications**: For apps (not libraries), always commit
  `pubspec.lock`. Without it, different developers or CI runs may resolve different dependency
  versions, causing "works on my machine" issues.
- **Running `dart analyze` before `dart pub get`**: The analyzer needs the
  `.dart_tool/package_config.json` generated by `pub get`. Run `pub get` first.
- **Ignoring `dev_dependencies` in production**: `dev_dependencies` like `test` and `lints` are not
  included in release builds, but they must be present during development.
- **Using `flutter run` for benchmarking**: Debug mode has assertions enabled, no optimizations, and
  uses JIT. Always use `--release` or `--profile` for performance measurements.
