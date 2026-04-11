---
title: Code Generation
date: 2026-04-05T00:00:00.000Z
tags:
  - Dart
categories:
  - Dart
slug: code-generation
---

# Code Generation

## What is Code Generation

Code generation in Dart is the process of automatically producing Dart source code from annotations,
builders, and configuration at build time. It reduces boilerplate, eliminates human error in
repetitive code (serialization, equality, copyWith), and ensures consistency between models and
their derived code.

The Dart ecosystem relies on the `build_runner` package as the foundation for all code generation
workflows. Packages like `freezed`, `json_serializable`, `injectable`, `retrofit`, and `auto_route`
all use `build_runner` under the hood.

### Why Code Generation

1. **Boilerplate reduction**: `copyWith`, `==`, `hashCode`, `toString`, `fromJson`/`toJson` are
   generated, not hand-written
2. **Consistency**: generated code is always in sync with the model — change a field, regenerate,
   and serialization updates
3. **Performance**: generated code avoids runtime reflection (which Dart does not have), using
   direct field access instead
4. **Safety**: compile-time errors surface immediately after regeneration, not at runtime

### The build_runner Ecosystem

```
Annotations (your code)
        |
        v
   build_runner
   (reads annotations + build.yaml)
        |
        v
  Builders (packages like freezed, json_serializable)
        |
        v
  Generated files (.g.dart, .freezed.dart, .gr.dart)
```

---

## build_runner

`build_runner` is the canonical build system for Dart code generation. It orchestrates builders that
consume source code and emit generated files.

### Core Commands

```bash
# One-time build — generates all files
dart run build_runner build

# Build with conflict resolution (overwrites existing generated files)
dart run build_runner build --delete-conflicting-outputs

# Watch mode — regenerates on file changes during development
dart run build_runner watch

# Watch mode with conflict resolution
dart run build_runner watch --delete-conflicting-outputs

# Clean all generated files
dart run build_runner clean

# Build for a specific target
dart run build_runner build --define="build=release"
```

### build.yaml Configuration

Create or edit `build.yaml` in your project root to control builder behavior:

```yaml
targets:
  $default:
    builders:
      # Control json_serializable output
      json_serializable:
        options:
          # Options passed to all json_serializable usages
          any_map: false
          checked: true
          explicit_to_json: true

      # Control freezed output
      freezed:
        options:
          # Generate union types
          union_key: 'type'
          union_value_delimiter: '.'

# Global options applied to all builders
global_options:
  freezed:
    runs_before:
      - json_serializable
```

### Targets

Targets define which builders run on which source files. The `$default` target applies to all
packages in the workspace.

```yaml
targets:
  $default:
    sources:
      - 'lib/**'
      - 'test/**'
    builders:
      freezed:
        enabled: true
      json_serializable:
        enabled: true

  # Custom target for a specific subdirectory
  $package:
    builders:
      my_custom_builder:
        enabled: true
```

### Builders Configuration

Each builder has its own set of options. Refer to the builder package's documentation for available
options:

```yaml
targets:
  $default:
    builders:
      json_serializable:
        options:
          field_rename: snake
          create_to_json: true
          create_from_json: true
          include_if_null: false
          explicit_to_json: true

      retrofit_generator:
        options:
          generate_client: true
```

### global_options

Use `global_options` for project-wide settings that should apply regardless of the target:

```yaml
global_options:
  # Ensure json_serializable runs before other builders that depend on it
  json_serializable:
    runs_before:
      - auto_route_generator
      - injectable_generator
```

---

## freezed

`freezed` generates immutable data classes with `copyWith`, `==`, `hashCode`, `toString`, and union
type support using Dart sealed classes.

### Basic Usage

```dart
import 'package:freezed_annotation/freezed_annotation.dart';

part 'user.freezed.dart';

@freezed
class User with _$User {
  const factory User({
    required int id,
    required String name,
    @Default('') String email,
    @Default(false) bool isActive,
  }) = _User;
}
```

After running `dart run build_runner build`, freezed generates:

- `_$User` — the private implementation class
- `copyWith()` — returns a new instance with selected fields changed
- `==` and `hashCode` — deep equality based on all fields
- `toString()` — includes all field values

### Using Generated Methods

```dart
void main() {
  const user = User(id: 1, name: 'Alice', email: 'alice@example.com');

  // copyWith
  final updated = user.copyWith(name: 'Alice Smith', isActive: true);
  print(updated); // User(id: 1, name: Alice Smith, email: alice@example.com, isActive: true)

  // Equality — compares all fields
  const same = User(id: 1, name: 'Alice', email: 'alice@example.com');
  print(user == same); // true

  const different = User(id: 2, name: 'Alice', email: 'alice@example.com');
  print(user == different); // false

  // toString
  print(user); // User(id: 1, name: Alice, email: alice@example.com, isActive: false)
}
```

### Union Types

`freezed` excels at modeling sealed class hierarchies — union types where a value can be one of
several variants:

```dart
import 'package:freezed_annotation/freezed_annotation.dart';

part 'network_result.freezed.dart';

@freezed
sealed class NetworkResult<T> with _$NetworkResult<T> {
  const factory NetworkResult.success(T data) = Success<T>;
  const factory NetworkResult.failure(String error, {int? statusCode}) = Failure;
  const factory NetworkResult.loading() = Loading;
}
```

Using union types:

```dart
void handleResult(NetworkResult<User> result) {
  // Pattern matching with when
  result.when(
    success: (user) => print('Got user: ${user.name}'),
    failure: (error, statusCode) => print('Error $statusCode: $error'),
    loading: () => print('Loading...'),
  );

  // Pattern matching with maybeWhen (partial — must handle null case)
  result.maybeWhen(
    success: (user) => print('Got user: ${user.name}'),
    orElse: () => print('Not a success'),
  );

  // Dart 3 pattern matching
  switch (result) {
    case Success(:final data):
      print('User: ${data.name}');
    case Failure(:final error, :final statusCode):
      print('Error $statusCode: $error');
    case Loading():
      print('Loading...');
  }
}
```

### Union with Discriminant

```dart
@Freezed(unionKey: 'type', unionValueDelimiter: '.')
sealed class PaymentEvent with _$PaymentEvent {
  const factory PaymentEvent.initiated({
    required String orderId,
    required double amount,
  }) = PaymentInitiated;

  const factory PaymentEvent.completed({
    required String orderId,
    required String transactionId,
  }) = PaymentCompleted;

  const factory PaymentEvent.failed({
    required String orderId,
    required String reason,
  }) = PaymentFailed;
}
```

### Custom Methods on Freezed Classes

```dart
@freezed
class Order with _$Order {
  const Order._(); // Private unnamed constructor for custom methods

  const factory Order({
    required String id,
    required List<OrderLine> lines,
    @Default(OrderStatus.pending) OrderStatus status,
    required DateTime createdAt,
  }) = _Order;

  double get total => lines.fold(0.0, (sum, line) => sum + line.total);

  bool get isEditable => status == OrderStatus.pending || status == OrderStatus.draft;

  int get itemCount => lines.fold(0, (sum, line) => sum + line.quantity);
}
```

### @Default Values

```dart
@freezed
class Config with _$Config {
  const factory Config({
    @Default(8080) int port,
    @Default('localhost') String host,
    @Default([]) List<String> allowedOrigins,
    @Default({}) Map<String, String> headers,
    @Default(Duration(minutes: 30)) Duration timeout,
  }) = _Config;
}
```

### When to Use freezed vs Hand-Written Sealed Classes

Use `freezed` when:

- You need `copyWith`, equality, and `toString` generated
- You're modeling data transfer objects (DTOs), API responses, or state
- You want union types with `when`/`maybeWhen` convenience methods

Use hand-written sealed classes when:

- The class has complex invariant logic that doesn't fit `freezed`'s model
- You need fine-grained control over serialization
- The generated boilerplate overhead isn't justified for a small, simple hierarchy

### JsonSerializable Integration

```dart
import 'package:freezed_annotation/freezed_annotation.dart';

part 'product.freezed.dart';
part 'product.g.dart';

@freezed
class Product with _$Product {
  const factory Product({
    required String id,
    required String name,
    required double price,
    @Default([]) @JsonKey(name: 'category_ids') List<String> categoryIds,
    @JsonKey(name: 'created_at') required DateTime createdAt,
  }) = _Product;

  factory Product.fromJson(Map<String, dynamic> json) => _$ProductFromJson(json);
}
```

---

## json_serializable

`json_serializable` generates `fromJson` and `toJson` methods for Dart classes from annotations,
avoiding manual serialization code.

### Basic Usage

```dart
import 'package:json_annotation/json_annotation.dart';

part 'user.g.dart';

@JsonSerializable()
class User {
  final int id;
  final String name;
  final String? email;
  final DateTime createdAt;
  final List<String> roles;

  User({
    required this.id,
    required this.name,
    this.email,
    required this.createdAt,
    required this.roles,
  });

  factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);
  Map<String, dynamic> toJson() => _$UserToJson(this);
}
```

### Field Name Mapping with @JsonKey

```dart
@JsonSerializable(fieldRename: FieldRename.snake)
class ApiProduct {
  final int productId;       // maps to "product_id" in JSON
  final String productName;  // maps to "product_name" in JSON
  final double unitPrice;    // maps to "unit_price" in JSON
}
```

Or per-field:

```dart
class Order {
  @JsonKey(name: 'order_id')
  final String id;

  @JsonKey(name: 'customer_id')
  final String customerId;

  @JsonKey(name: 'total_amount', defaultValue: 0.0)
  final double total;

  @JsonKey(name: 'is_paid', defaultValue: false)
  final bool isPaid;

  Order({required this.id, required this.customerId, required this.total, required this.isPaid});

  factory Order.fromJson(Map<String, dynamic> json) => _$OrderFromJson(json);
  Map<String, dynamic> toJson() => _$OrderToJson(this);
}
```

### Nested Objects with explicitToJson

```dart
@JsonSerializable(explicitToJson: true)
class Company {
  final String name;
  final Address address;
  final List<Employee> employees;

  Company({required this.name, required this.address, required this.employees});

  factory Company.fromJson(Map<String, dynamic> json) => _$CompanyFromJson(json);
  Map<String, dynamic> toJson() => _$CompanyToJson(this);
}

@JsonSerializable()
class Address {
  final String street;
  final String city;
  final String country;

  Address({required this.street, required this.city, required this.country});

  factory Address.fromJson(Map<String, dynamic> json) => _$AddressFromJson(json);
  Map<String, dynamic> toJson() => _$AddressToJson(this);
}
```

Without `explicitToJson: true`, nested objects would serialize as `toString()` output instead of
proper JSON maps.

### Custom Converters with JsonConverter

```dart
class DateTimeConverter implements JsonConverter<DateTime, String> {
  const DateTimeConverter();

  @override
  DateTime fromJson(String json) {
    return DateTime.parse(json);
  }

  @override
  String toJson(DateTime object) {
    return object.toIso8601String();
  }
}

class EpochDateTimeConverter implements JsonConverter<DateTime, int> {
  const EpochDateTimeConverter();

  @override
  DateTime fromJson(int json) {
    return DateTime.fromMillisecondsSinceEpoch(json);
  }

  @override
  int toJson(DateTime object) {
    return object.millisecondsSinceEpoch;
  }
}

// Using converters
@JsonSerializable()
class Event {
  final String id;

  @DateTimeConverter()
  final DateTime createdAt;

  @EpochDateTimeConverter()
  final DateTime updatedAt;

  Event({required this.id, required this.createdAt, required this.updatedAt});

  factory Event.fromJson(Map<String, dynamic> json) => _$EventFromJson(json);
  Map<String, dynamic> toJson() => _$EventToJson(this);
}
```

### Enum Serialization with @JsonValue

```dart
enum OrderStatus {
  @JsonValue('pending')
  pending,
  @JsonValue('processing')
  processing,
  @JsonValue('shipped')
  shipped,
  @JsonValue('delivered')
  delivered,
  @JsonValue('cancelled')
  cancelled,
}

@JsonSerializable()
class Order {
  final String id;
  final OrderStatus status;
  final double total;

  Order({required this.id, required this.status, required this.total});

  factory Order.fromJson(Map<String, dynamic> json) => _$OrderFromJson(json);
  Map<String, dynamic> toJson() => _$OrderToJson(this);
}

// JSON: {"id": "123", "status": "shipped", "total": 99.99}
// Dart: Order(id: "123", status: OrderStatus.shipped, total: 99.99)
```

### Field Exclusion

```dart
@JsonSerializable(includeIfNull: false)
class UserProfile {
  final String name;

  // Exclude from JSON entirely
  @JsonKey(includeFromJson: false, includeToJson: false)
  final String? internalNotes;

  // Exclude from deserialization but include in serialization
  @JsonKey(includeFromJson: false)
  final String computedField;

  // Exclude null values from JSON output
  final String? nickname;

  UserProfile({
    required this.name,
    this.internalNotes,
    required this.computedField,
    this.nickname,
  });

  factory UserProfile.fromJson(Map<String, dynamic> json) => _$UserProfileFromJson(json);
  Map<String, dynamic> toJson() => _$UserProfileToJson(this);
}
```

### Required vs Optional Fields

```dart
@JsonSerializable()
class StrictModel {
  // Required — fromJson throws if key is missing
  @JsonKey(required: true)
  final String mandatoryField;

  // Required with custom error message
  @JsonKey(required: true, disallowNullValue: true)
  final String nonNullableField;

  // Optional with default
  @JsonKey(defaultValue: 'unknown')
  final String optionalField;

  // Nullable — can be absent or null
  final String? nullableField;

  StrictModel({
    required this.mandatoryField,
    required this.nonNullableField,
    required this.optionalField,
    this.nullableField,
  });

  factory StrictModel.fromJson(Map<String, dynamic> json) => _$StrictModelFromJson(json);
  Map<String, dynamic> toJson() => _$StrictModelToJson(this);
}
```

### Handling Unknown Enum Values

```dart
enum Priority {
  @JsonValue('low')
  low,
  @JsonValue('medium')
  medium,
  @JsonValue('high')
  high,
}

@JsonSerializable()
class Task {
  final String title;

  @JsonKey(
    unknownEnumValue: Priority.medium,
    jsonKey: 'priority',
  )
  final Priority priority;

  Task({required this.title, required this.priority});

  factory Task.fromJson(Map<String, dynamic> json) => _$TaskFromJson(json);
  Map<String, dynamic> toJson() => _$TaskToJson(this);
}
```

---

## Generated File Suffixes

Different code generation packages produce files with specific suffixes. Understanding these
conventions helps with `.gitignore` configuration and debugging.

| Suffix          | Package                                       | Purpose                                                                |
| --------------- | --------------------------------------------- | ---------------------------------------------------------------------- |
| `.g.dart`       | `json_serializable`, `injectable`, `retrofit` | General generated code (fromJson/toJson, DI registration, API clients) |
| `.freezed.dart` | `freezed`                                     | Immutable class implementations, union types, copyWith                 |
| `.gr.dart`      | `retrofit`, `auto_route`                      | Retrofit API client, AutoRoute router generated files                  |
| `.config.dart`  | `injectable`                                  | Generated dependency configuration                                     |
| `.chopper.dart` | `chopper`                                     | Chopper API client generated code                                      |

### .gitignore Configuration

Generated files should typically be excluded from version control since they can be regenerated:

```gitignore
# Code generation
*.g.dart
*.freezed.dart
*.gr.dart
*.config.dart

# Some teams commit generated files for CI simplicity
# If so, ensure build_runner runs in CI before compilation
```

When NOT committing generated files, CI must run `build_runner build` before `dart compile` or
`flutter build`. When committing them, every PR that touches annotated files must also commit the
regenerated output.

### Part and Part Of Directives

Generated files use `part`/`part of` directives. The main file must declare the generated parts:

```dart
// user.dart
import 'package:freezed_annotation/freezed_annotation.dart';

part 'user.freezed.dart';
part 'user.g.dart';

@freezed
class User with _$User {
  const factory User({required String name, required int age}) = _User;

  factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);
}
```

---

## build.yaml Configuration Deep Dive

### Builder Options

```yaml
targets:
  $default:
    builders:
      json_serializable:
        options:
          # Field rename strategy for all json_serializable classes
          field_rename: snake

          # Generate both fromJson and toJson
          create_to_json: true
          create_from_json: true

          # Include null fields in toJson output
          include_if_null: false

          # Generate explicit toJson for nested objects
          explicit_to_json: true

          # Allow generic JSON (Map<String, dynamic> without specific types)
          any_map: false

          # Enable checked mode — throws on missing keys
          checked: true
```

### Custom Builder Configuration

```yaml
targets:
  $default:
    builders:
      # Disable a builder entirely
      source_gen:combining_builder:
        enabled: false

      # Configure builder for specific input sets
      json_serializable:
        generate_for:
          - lib/models/**
          - lib/dto/**
        options:
          field_rename: snake

      # Multiple builder configurations
      freezed:
        generate_for:
          - lib/models/**
          - lib/state/**
        options:
          union_key: 'kind'
```

### global_options

```yaml
global_options:
  # Ensure freezed generates before json_serializable
  # because freezed classes often use @JsonSerializable
  freezed:
    runs_before:
      - json_serializable

  # Ensure json_serializable runs before injectable
  # because injectable may need to inspect generated code
  json_serializable:
    runs_before:
      - injectable_generator
```

### Excluding Files from Generation

```yaml
targets:
  $default:
    sources:
      - 'lib/**'
      # Exclude test helpers from code generation
      - '!test/**/helpers/**'
      - '!lib/generated/**'
```

---

## Common Workflows

### Running build_runner After Editing Annotated Files

```bash
# After adding or modifying @freezed, @JsonSerializable, @injectable, etc.
dart run build_runner build --delete-conflicting-outputs
```

The `--delete-conflicting-outputs` flag is critical when:

- Changing a class from `@freezed` to a regular class (removes `.freezed.dart`)
- Renaming fields that affect generated serialization code
- Adding or removing `part` directives

### Watching for Changes During Development

```bash
# Start watch mode — auto-regenerates on save
dart run build_runner watch --delete-conflicting-outputs
```

Watch mode monitors all files in the project and triggers regeneration when annotated source files
change. This is useful during active model development but consumes resources — consider stopping it
when working on unrelated files.

### Cleaning Stale Generated Files

```bash
# Remove all generated files
dart run build_runner clean

# Then rebuild from scratch
dart run build_runner build --delete-conflicting-outputs
```

Clean and rebuild is recommended when:

- Switching branches with different model structures
- After resolving merge conflicts in annotated files
- When generated files seem out of sync with source

### CI/CD Integration

```yaml
# GitHub Actions example
name: Build
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: dart-lang/setup-dart@v1

      - name: Install dependencies
        run: dart pub get

      - name: Generate code
        run: dart run build_runner build --delete-conflicting-outputs

      - name: Check for uncommitted changes
        run: |
          if [ -n "$(git status --porcelain)" ]; then
            echo "ERROR: Generated files are not up to date."
            echo "Run: dart run build_runner build --delete-conflicting-outputs"
            git diff --stat
            exit 1
          fi

      - name: Run tests
        run: dart test

      - name: Analyze
        run: dart analyze
```

### Generated Files Not in VCS but Needed for Compilation

When generated files are in `.gitignore`, every developer and CI runner must generate them before
compilation. This means:

```bash
# Clone and setup
git clone <repo>
cd <repo>
dart pub get
dart run build_runner build --delete-conflicting-outputs

# Now the project compiles
dart analyze
dart test
```

Add a Makefile or script for convenience:

```makefile
.PHONY: generate clean test

generate:
	dart run build_runner build --delete-conflicting-outputs

watch:
	dart run build_runner watch --delete-conflicting-outputs

clean:
	dart run build_runner clean

test: generate
	dart test
```

---

## Common Pitfalls

### Forgetting to Run build_runner

The most common mistake. After adding or modifying annotations, the generated file is stale or
missing. Symptoms include:

- Compilation errors: `Error: No part file found for 'user.freezed.dart'`
- Runtime errors: `_$UserFromJson is not defined`
- IDE errors on generated code

**Fix**: run `dart run build_runner build --delete-conflicting-outputs` after any annotation change.

### Generated File Conflicts

When two builders try to generate the same file, or when a stale generated file conflicts with new
output:

```
Error: Conflicting outputs were found and the build cannot continue.
```

**Fix**: use `--delete-conflicting-outputs`:

```bash
dart run build_runner build --delete-conflicting-outputs
```

### Stale Generated Files

After switching git branches or resolving merge conflicts, generated files may reference classes or
fields that no longer exist:

```dart
// Generated file references a field that was removed from the source
class _$User {
  final String deletedField; // ERROR: source doesn't have this field
}
```

**Fix**: clean and rebuild:

```bash
dart run build_runner clean && dart run build_runner build --delete-conflicting-outputs
```

### build_runner Version Mismatches

Using incompatible versions of `build_runner`, `source_gen`, and builder packages (e.g., `freezed`,
`json_serializable`) causes cryptic errors:

```
Bad state: Unable to find builder for json_serializable
```

**Fix**: ensure all `build_runner`-related packages are compatible:

```bash
dart pub outdated --dev-dependencies
dart pub upgrade build_runner source_gen
```

Check the builder package's changelog for compatible `build_runner` versions.

### Watching Too Many Files (Performance)

`build_runner watch` monitors all files in the project by default. In large monorepos or projects
with many assets, this causes excessive file system activity:

```bash
# Limit watch scope with generate_for in build.yaml
targets:
  $default:
    builders:
      freezed:
        generate_for:
          - "lib/models/**"
          - "lib/dto/**"
```

Also consider excluding directories that don't need code generation:

```yaml
targets:
  $default:
    sources:
      - 'lib/**'
      - '!lib/assets/**'
      - '!lib/generated/**'
      - '!test/fixtures/**'
```

### Generated Files Not in VCS but Needed for Compilation

If `.g.dart` and `.freezed.dart` are in `.gitignore` but CI doesn't run `build_runner` before
compilation, builds fail. Ensure CI pipelines always include the generation step before
`dart analyze` or `dart test`.

Conversely, if generated files ARE committed to VCS, failing to commit them after model changes
causes CI to fail on the analyzer. Always check that generated files are up to date before pushing:

```bash
# Verify generated files are in sync
dart run build_runner build --delete-conflicting-outputs
git diff --exit-code
```

### Part Directive Mismatches

Forgetting to add `part` directives or using wrong file paths causes compilation errors:

```dart
// WRONG — missing part directives
@freezed
class User with _$User {
  const factory User({required String name}) = _User;
  // Error: The part directive is missing
}

// WRONG — wrong file path
part 'models/user.freezed.dart'; // File is in the same directory

// CORRECT
part 'user.freezed.dart';
```

### Mixing Annotation Packages

Using `freezed` with `json_serializable` requires specific import and part configuration. Forgetting
the `@JsonSerializable` integration step or missing the `.g.dart` part directive causes partial
generation:

```dart
// WRONG — only freezed part, no json_serializable part
import 'package:freezed_annotation/freezed_annotation.dart';

part 'user.freezed.dart';

@freezed
class User with _$User {
  const factory User({required String name}) = _User;
  factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);
  // Error: _$UserFromJson not found
}

// CORRECT — both parts declared
import 'package:freezed_annotation/freezed_annotation.dart';

part 'user.freezed.dart';
part 'user.g.dart';

@freezed
class User with _$User {
  const factory User({required String name}) = _User;
  factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);
}
```
