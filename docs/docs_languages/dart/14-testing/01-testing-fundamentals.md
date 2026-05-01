---
title: Testing Fundamentals
description:
  Testing Fundamentals — Why Test; Regression Prevention; Documentation; Design
  Improvement with worked examples and exam-style questions.
date: 2026-04-05T00:00:00.000Z
tags:
  - Dart
categories:
  - Dart
slug: testing-fundamentals
---

## Why Test

Testing is not a phase that comes after development. It is a structural property of the codebase
that determines whether you can safely change it. The absence of tests does not mean you are moving
faster — it means every change is a gamble with unknown odds.

### Regression Prevention

A regression is a bug introduced by a change that was supposed to be unrelated. The cost of a
regression grows non-linearly with time: a bug caught by a test running in CI costs seconds to fix;
a bug caught by a user in production costs hours of investigation, a release cycle, and lost trust.
Tests act as a contract that the system must continue to satisfy after every change.

### Documentation

A test describes the expected behavior of a unit in a form that cannot go out of date — if the test
passes, the behavior matches the description; if it fails, either the behavior changed or the test
needs updating. This is more reliable than comments, which have no mechanism to signal staleness.

### Design Improvement

Code that is difficult to test is almost always poorly structured. Tight coupling, hidden
dependencies, side effects in constructors, and god classes all surface as untestable code. Writing
tests first (test-driven development) or writing tests immediately after forces you to confront
these design problems while they are still cheap to fix.

### Confidence in Refactoring

Refactoring is the process of changing the internal structure of code without changing its external
behavior. Without tests, you have no way to verify that behavior is preserved. With tests, you can
restructure, rename, split, and merge with confidence — the tests tell you immediately if you broke
something.

### Types of Testing

| Type        | Scope                    | Speed      | What It Validates                               |
| ----------- | ------------------------ | ---------- | ----------------------------------------------- |
| Unit        | Single function or class | Millis     | Isolated logic correctness                      |
| Widget      | Single Flutter widget    | 10-100ms   | Rendering, interaction, lifecycle               |
| Integration | Multiple units together  | 100-1000ms | Unit interactions, data flow across boundaries  |
| End-to-End  | Full application flow    | Seconds    | User-visible behavior from launch to completion |

Unit tests are the foundation. They are fast, deterministic, and cheap to maintain. Widget tests add
coverage for the UI layer. Integration tests validate that units compose correctly. End-to-end tests
are the most expensive and should be used sparingly — they catch issues that lower-level tests miss,
but they are slow, flaky, and hard to debug.

The testing pyramid is not a suggestion — it is a cost optimization. A project with 1000 unit tests,
100 widget tests, and 10 integration tests will outperform a project with 10 unit tests and 100
integration tests in both defect detection and developer velocity.

## The test Package

### Setup

```yaml
# pubspec.yaml
dev_dependencies:
  test: ^1.25.0
```

For Flutter projects, the `flutter_test` package is the equivalent — it re-exports `test` and adds
Flutter-specific bindings:

```yaml
# pubspec.yaml (Flutter)
dev_dependencies:
  flutter_test:
    sdk: flutter
```

### Test File Conventions

Test files live in the `test/` directory and mirror the `lib/` structure:

```
lib/
  src/
    auth/
      authenticator.dart
      token_store.dart
test/
  src/
    auth/
      authenticator_test.dart
      token_store_test.dart
```

Each file under test is suffixed with `_test.dart`. The test runner discovers tests by convention —
no registration is required.

### The Core API

```dart
import 'package:test/test.dart';

void main() {
  // Define a single test case
  test('addition works', () {
    expect(1 + 1, equals(2));
  });

  // Group related tests
  group('Calculator', () {
    late Calculator calc;

    // Runs before each test in this group
    setUp(() {
      calc = Calculator();
    });

    // Runs after each test
    tearDown(() {
      calc.dispose();
    });

    test('adds two numbers', () {
      expect(calc.add(2, 3), equals(5));
    });

    test('throws on division by zero', () {
      expect(() => calc.divide(1, 0), throwsArgumentError);
    });
  });
}
```

### setUp, tearDown, setUpAll, tearDownAll

`setUp` and `tearDown` run before and after **each** test. `setUpAll` and `tearDownAll` run **once**
before and after all tests in the group. The distinction matters for expensive resources:

```dart
group('Database Integration', () {
  static late Database db;

  setUpAll(() async {
    db = await Database.connect('postgres://localhost/test_db');
    await db.migrate();
  });

  tearDownAll(() async {
    await db.close();
  });

  setUp(() async {
    await db.truncateAllTables();
  });

  test('inserts a user', () async {
    final id = await db.insertUser(name: 'Alice');
    expect(id, isNotNull);
  });

  test('fetches user by id', () async {
    final id = await db.insertUser(name: 'Bob');
    final user = await db.fetchUser(id);
    expect(user.name, equals('Bob'));
  });
});
```

`setUpAll` is for resources that are expensive to create (database connections, HTTP servers, test
fixtures). `setUp` is for resetting state between tests. Never share mutable state across tests
without resetting it — tests must be independent and order-invariant.

### expect and the Matcher System

`expect(actual, matcher)` is the core assertion. The `actual` value is evaluated immediately; the
`matcher` describes the expected property. When the match fails, the test framework produces a
human-readable diff:

```dart
expect(actual, equals(expected));
// Fails with:
// Expected: <expected value>
//   Actual: <actual value>
```

The matcher system is composable — you can negate, combine, and nest matchers:

```dart
expect(list, isNot(isEmpty));
expect(value, allOf(isA<int>(), greaterThan(0), lessThan(100)));
```

## Matchers

### Equality and Identity

```dart
expect(42, equals(42));
expect(a, isNot(equals(b)));

// Identity — checks if two references point to the same object
final obj = Object();
expect(obj, same(obj));       // Passes
expect(obj, same(Object()));  // Fails
```

`equals` uses the `==` operator. `same` uses `identical()`. Use `equals` for value equality and
`same` when you need reference identity (e.g., verifying that a factory returns a cached instance).

### Boolean

```dart
expect(true, isTrue);
expect(false, isFalse);
```

### Null

```dart
expect(null, isNull);
expect(value, isNotNull);
```

### Type Checking

```dart
expect(value, isA<String>());
expect(value, isA<List<int>>());

// Combined with property access after type check
expect(value, isA<User>().having((u) => u.name, 'name', 'Alice'));
```

`isA<T>()` checks `value is T` at runtime. The `.having()` combinator lets you assert properties of
the matched object — the second argument is a description used in failure messages.

### Numeric Comparisons

```dart
expect(10, greaterThan(5));
expect(3, lessThan(5));
expect(5, greaterThanOrEqualTo(5));
expect(5, lessThanOrEqualTo(5));
expect(3.14, closeTo(3.0, 0.2));  // |actual - expected| <= delta
```

`closeTo` is essential for floating-point comparisons. Never use `equals` for doubles — rounding
errors will cause flaky tests.

### Collections

```dart
// Contains
expect([1, 2, 3], contains(2));
expect({'a': 1, 'b': 2}, containsPair('a', 1));

// Empty
expect([], isEmpty);
expect([1], isNotEmpty);

// Every element matches
expect([2, 4, 6], everyElement(isEven));

// Ordered matching
expect([1, 2, 3], equals([1, 2, 3]));
expect([1, 2, 3], containsAll([2, 1])); // subset, order-independent

// Unordered equality
expect([3, 1, 2], unorderedEquals([1, 2, 3]));

// Pairwise comparison
expect([[1, 2], [3, 4]], pairwise(equals, [[1, 2], [3, 4]]));
```

### Exception Matchers

```dart
// Generic throw check
expect(() => throw Exception('boom'), throwsA(anything));

// Specific type
expect(() => throw ArgumentError('bad'), throwsArgumentError);
expect(() => throw StateError('bad'), throwsStateError);
expect(() => throw Exception('bad'), throwsException);

// With message matching
expect(
  () => throw FormatException('invalid input'),
  throwsA(isA<FormatException>().having((e) => e.message, 'message', 'invalid input')),
);
```

### String Matchers

```dart
expect('hello world', contains('world'));
expect('hello world', startsWith('hello'));
expect('hello world', endsWith('world'));
expect('hello', matches(r'^[a-z]+$'));  // regex
expect('hello', equalsIgnoringCase('HELLO'));
```

### Custom Matchers

When the built-in matchers do not express the property you need, write a custom matcher:

```dart
import 'package:test/test.dart';

class IsValidEmail extends Matcher {
  static final _emailRegex = RegExp(
    r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$',
  );

  @override
  bool matches(Object? item, Map matchState) {
    return item is String && _emailRegex.hasMatch(item);
  }

  @override
  Description describe(Description description) {
    return description.add('a valid email address');
  }

  @override
  Description describeMismatch(
    Object? item,
    Description mismatchDescription,
    Map matchState,
    bool verbose,
  ) {
    return mismatchDescription.add('was not a valid email: ').addDescriptionOf(item);
  }
}

// Usage
Matcher get isValidEmail => IsValidEmail();

test('email validation', () {
  expect('user@example.com', isValidEmail);
  expect('not-an-email', isNot(isValidEmail));
});
```

For more complex matchers, extend `CustomMatcher` which provides `featureValueOf` for property
extraction:

```dart
class HasLength extends CustomMatcher {
  HasLength(Matcher lengthMatcher) : super('has length', 'length', lengthMatcher);

  @override
  Object? featureValueOf(Object? actual) {
    if (actual is List) return actual.length;
    if (actual is String) return actual.length;
    if (actual is Map) return actual.length;
    return null;
  }
}

// Usage
expect([1, 2, 3], HasLength(equals(3)));
expect('hello', HasLength(greaterThan(0)));
```

## Unit Testing

### Testing Pure Functions

Pure functions are the easiest to test — no dependencies, no side effects, no setup. Input goes in,
output comes out:

```dart
// lib/src/math/geometry.dart
double circleArea(double radius) {
  if (radius < 0) throw ArgumentError('Radius must be non-negative');
  return 3.141592653589793 * radius * radius;
}

// test/src/math/geometry_test.dart
import 'package:test/test.dart';
import 'package:myapp/src/math/geometry.dart';

void main() {
  group('circleArea', () {
    test('returns correct area for positive radius', () {
      expect(circleArea(1), closeTo(3.14159, 0.00001));
      expect(circleArea(2), closeTo(12.56637, 0.00001));
      expect(circleArea(0), equals(0.0));
    });

    test('throws ArgumentError for negative radius', () {
      expect(() => circleArea(-1), throwsArgumentError);
    });
  });
}
```

### Testing Classes with Dependencies

When a class depends on external services (repositories, API clients, caches), inject those
dependencies as abstract interfaces and substitute test doubles:

```dart
// lib/src/auth/authenticator.dart
abstract class TokenStore {
  Future<String?> get();
  Future<void> save(String token);
  Future<void> clear();
}

abstract class AuthApi {
  Future<String> login(String email, String password);
}

class Authenticator {
  final TokenStore _tokenStore;
  final AuthApi _api;

  Authenticator(this._tokenStore, this._api);

  Future<bool> authenticate(String email, String password) async {
    final cached = await _tokenStore.get();
    if (cached != null) return true;

    final token = await _api.login(email, password);
    await _tokenStore.save(token);
    return true;
  }

  Future<void> logout() async {
    await _tokenStore.clear();
  }
}
```

```dart
// test/src/auth/authenticator_test.dart
import 'package:test/test.dart';
import 'package:mockito/mockito.dart';
import 'package:myapp/src/auth/authenticator.dart';

class FakeTokenStore implements TokenStore {
  String? _token;
  @override
  Future<String?> get() async => _token;
  @override
  Future<void> save(String token) async => _token = token;
  @override
  Future<void> clear() async => _token = null;
}

class MockAuthApi extends Mock implements AuthApi {}

void main() {
  group('Authenticator', () {
    late Authenticator auth;
    late FakeTokenStore tokenStore;
    late MockAuthApi api;

    setUp(() {
      tokenStore = FakeTokenStore();
      api = MockAuthApi();
      auth = Authenticator(tokenStore, api);
    });

    test('returns true when cached token exists', () async {
      await tokenStore.save('cached-token');
      final result = await auth.authenticate('a@b.com', 'pass');
      expect(result, isTrue);
      verifyNever(api.login(any, any));
    });

    test('calls API when no cached token, then saves', () async {
      when(api.login('a@b.com', 'pass'))
          .thenAnswer((_) async => 'new-token');

      final result = await auth.authenticate('a@b.com', 'pass');

      expect(result, isTrue);
      verify(api.login('a@b.com', 'pass')).called(1);
      expect(await tokenStore.get(), equals('new-token'));
    });

    test('logout clears token store', () async {
      await tokenStore.save('token');
      await auth.logout();
      expect(await tokenStore.get(), isNull);
    });
  });
}
```

### Arrange-Act-Assert Pattern

Every test follows three phases:

1. **Arrange** — set up the system under test and its inputs.
2. **Act** — invoke the behavior being tested.
3. **Assert** — verify the output or side effects.

```dart
test('calculates total with tax', () {
  // Arrange
  final cart = Cart(taxRate: 0.1);
  cart.addItem(Item(price: 10.0));
  cart.addItem(Item(price: 20.0));

  // Act
  final total = cart.total;

  // Assert
  expect(total, closeTo(33.0, 0.001));
});
```

Keep the phases visually distinct with blank lines. This makes tests scannable and makes it obvious
when a test is doing too much in one phase.

### Test Organization

Mirror the source structure. If `lib/src/orders/order_service.dart` contains `OrderService`, the
test lives at `test/src/orders/order_service_test.dart`. This is not just convention — it makes
navigation trivial when the directory tree is the same in both `lib/` and `test/`.

Within a test file, use `group()` to organize by method, then by scenario:

```dart
void main() {
  group('OrderService', () {
    late OrderService service;
    late MockOrderRepo repo;
    late MockPaymentGateway payment;

    setUp(() { /* ... */ });

    group('createOrder', () {
      test('creates order when inventory is available', () { /* ... */ });
      test('throws when item is out of stock', () { /* ... */ });
      test('charges payment after order creation', () { /* ... */ });
    });

    group('cancelOrder', () {
      test('refunds payment when order is cancellable', () { /* ... */ });
      test('throws when order has already shipped', () { /* ... */ });
    });
  });
}
```

## Mocking

### mockito

`mockito` is the dominant mocking library in the Dart ecosystem. It uses code generation to create
mock classes that record calls and return configurable values.

```yaml
# pubspec.yaml
dev_dependencies:
  mockito: ^5.4.0
  build_runner: ^2.4.0
```

Generate mocks with a file annotation:

```dart
// test/mocks.mocks.dart
import 'package:mockito/annotations.dart';
import 'package:myapp/src/repositories/user_repository.dart';
import 'package:myapp/src/services/analytics_service.dart';

@GenerateMocks([UserRepository, AnalyticsService])
void main() {}
```

Run the generator:

```bash
dart run build_runner build
```

This produces `mocks.mocks.dart` with `MockUserRepository` and `MockAnalyticsService` classes.

### Stubbing with when/thenReturn

```dart
import 'package:mockito/mockito.dart';
import 'package:mockito/annotations.dart';
import 'mocks.mocks.dart';

void main() {
  late MockUserRepository repo;

  setUp(() {
    repo = MockUserRepository();
  });

  test('fetches user by id', () async {
    // Stub: when this method is called with this argument, return this value
    when(repo.findById('123'))
        .thenAnswer((_) async => User(id: '123', name: 'Alice'));

    final user = await repo.findById('123');
    expect(user.name, equals('Alice'));
  });

  test('returns null for non-existent user', () async {
    when(repo.findById('999'))
        .thenAnswer((_) async => null);

    final user = await repo.findById('999');
    expect(user, isNull);
  });
});
```

`thenAnswer` receives the invocation as an argument, which allows dynamic responses:

```dart
when(repo.findById(any))
    .thenAnswer((invocation) async {
      final id = invocation.positionalArguments[0] as String;
      return User(id: id, name: 'User-$id');
    });
```

For simple cases, `thenReturn` is shorthand:

```dart
when(repo.count()).thenReturn(42);
when(repo.findById(any)).thenReturn(null);
```

### Verification with verify

```dart
test('logs analytics event on login', () async {
  final analytics = MockAnalyticsService();
  final service = AuthService(repo, analytics);

  await service.login('alice@example.com', 'password');

  // Verify the method was called exactly once with these arguments
  verify(analytics.trackEvent('login', {'email': 'alice@example.com'}))
      .called(1);

  // Verify it was called at least once (any arguments)
  verify(analytics.trackEvent(any, any)).called(greaterThan(0));

  // Verify it was never called
  verifyNever(analytics.trackEvent('logout', any));
});
```

### reset

`reset(mock)` clears all stubbings and call history on a mock. Use it when you want to reuse a mock
across tests without recreating it:

```dart
tearDown(() {
  reset(repo);
});
```

### Argument Matchers

mockito provides argument matchers for flexible stubbing and verification:

```dart
import 'package:mockito/annotations.dart';

// Match any value
when(repo.findById(any)).thenReturn(null);

// Match any named parameter value
when(repo.search(name: anyNamed('name'))).thenReturn([]);

// Match any value of a specific type
when(repo.save(anyThat(isA<AdminUser>())))
    .thenAnswer((_) async => true);

// Capture arguments for inspection
test('sends correct notification', () async {
  final notificationService = MockNotificationService();
  await service.processOrder(order);

  final captured = verify(
    notificationService.send(captureAny, captureAny),
  ).captured;
  expect(captured[0], equals('user-123'));
  expect(captured[1], isA<OrderConfirmation>());
});
```

### mocktail

`mocktail` is a simpler alternative that does not require code generation. You extend `Mock`
directly:

```yaml
# pubspec.yaml
dev_dependencies:
  mocktail: ^1.0.0
```

```dart
import 'package:mocktail/mocktail.dart';

class MockUserRepository extends Mock implements UserRepository {}

void main() {
  late MockUserRepository repo;

  setUp(() {
    repo = MockUserRepository();
    // mocktail requires you to register fallback values for non-nullable parameters
    registerFallbackValue(User(id: '0', name: 'fallback'));
  });

  test('fetches user', () async {
    when(() => repo.findById('123'))
        .thenAnswer((_) async => User(id: '123', name: 'Alice'));

    final user = await repo.findById('123');
    expect(user.name, equals('Alice'));
  });
}
```

### mockito vs mocktail

| Factor        | mockito                               | mocktail                         |
| ------------- | ------------------------------------- | -------------------------------- |
| Code gen      | Required (`build_runner`)             | None                             |
| Setup         | Annotate classes, run generator       | Extend `Mock` directly           |
| Fallback vals | Not required                          | Required for non-nullable params |
| API           | `when(mock.method()).thenReturn(...)` | `when(() => mock.method())...`   |
| Ecosystem     | Larger, more mature                   | Lighter, simpler                 |
| Type safety   | Strong (generated stubs)              | Weaker (manual `implements`)     |

Use `mocktail` for small projects or when you want zero build-time overhead. Use `mockito` for
larger projects where generated mocks provide stronger type guarantees and better IDE support.

## Async Testing

### Testing Future-Returning Functions

A test body can be `async`. The test runner `await`s the returned Future:

```dart
test('fetches data from API', () async {
  final service = DataService(client: mockClient);
  final result = await service.fetchUsers();

  expect(result, hasLength(3));
  expect(result[0].name, equals('Alice'));
});
```

If the Future completes with an error and no `try/catch` wraps it, the test fails with the error
message and stack trace. This is correct behavior — the test framework catches the error for you:

```dart
test('propagates API errors', () async {
  when(mockClient.get(any)).thenThrow(SocketException('network down'));

  final service = DataService(client: mockClient);

  // This test passes because it expects the Future to throw
  await expectLater(
    service.fetchUsers(),
    throwsA(isA<SocketException>()),
  );
});
```

### expectLater for Streams

`expectLater` returns a Future that completes when the matcher is satisfied. This is essential for
testing streams because you cannot `await` a stream in a normal `expect`:

```dart
test('emits values in order', () {
  final controller = StreamController<int>();
  final stream = controller.stream;

  expectLater(
    stream,
    emitsInOrder([1, 2, 3, emitsDone]),
  );

  controller.add(1);
  controller.add(2);
  controller.add(3);
  controller.close();
});
```

### Stream Matchers

```dart
import 'package:test/test.dart';

// Emits exactly these values in this order, then done
expectLater(stream, emitsInOrder([1, 2, 3, emitsDone]));

// Emits these values (ignoring order) then done
expectLater(stream, emitsUnorderedEvents([3, 1, 2, emitsDone]));

// Emits a single value matching a matcher
expectLater(stream, emits(equals(42)));

// Emits an error matching a matcher
expectLater(stream, emitsError(isA<StateError>()));

// Emits any error
expectLater(stream, emitsError(anything));

// Never emits (stream completes empty)
expectLater(stream, neverEmits(anything));

// Combining — emits 1, then 2, then any error, then done
expectLater(
  stream,
  emitsInOrder([1, 2, emitsError(anything), emitsDone]),
);
```

### FakeAsync and the async Package

`FakeAsync` from `package:async` gives you deterministic control over time in tests. It replaces the
real event loop with a fake one that only advances when you tell it to:

```yaml
dev_dependencies:
  async: ^2.11.0
```

```dart
import 'package:async/async.dart';
import 'package:test/test.dart';

test('debounce fires after 500ms of inactivity', () {
  FakeAsync().run((fakeAsync) {
    final callLog = <int>[];
    final debounced = debounce<int>(
      (value) => callLog.add(value),
      const Duration(milliseconds: 500),
    );

    debounced(1);
    debounced(2);
    debounced(3);

    // No calls yet — debounce period has not elapsed
    expect(callLog, isEmpty);

    // Advance time by 499ms — still within debounce window
    fakeAsync.elapse(const Duration(milliseconds: 499));
    expect(callLog, isEmpty);

    // Advance past the debounce threshold
    fakeAsync.elapse(const Duration(milliseconds: 1));
    expect(callLog, equals([3])); // Only the last value fires
  });
});

test('timeout fires after deadline', () {
  FakeAsync().run((fakeAsync) {
    var completed = false;
    var timedOut = false;

    Future.delayed(const Duration(seconds: 5)).then((_) {
      completed = true;
    }).timeout(
      const Duration(seconds: 2),
      onTimeout: () {
        timedOut = true;
        return null;
      },
    );

    fakeAsync.elapse(const Duration(seconds: 1));
    expect(completed, isFalse);
    expect(timedOut, isFalse);

    fakeAsync.elapse(const Duration(seconds: 1));
    expect(timedOut, isTrue);
    expect(completed, isFalse);

    fakeAsync.elapse(const Duration(seconds: 3));
    expect(completed, isTrue);
  });
});
```

`FakeAsync` is indispensable for testing timers, debounces, timeouts, and any time-dependent logic.
Without it, tests that depend on real time are slow and non-deterministic.

### Testing Completer-Based APIs

```dart
test('resolves when completer completes', () async {
  final completer = Completer<String>();
  final future = completer.future;

  completer.complete('done');
  expect(await future, equals('done'));
});

test('rejects when completer completes with error', () async {
  final completer = Completer<String>();
  final future = completer.future;

  completer.completeError(StateError('failed'));
  await expectLater(future, throwsStateError);
});
```

## Property-Based Testing

Traditional tests check specific inputs against expected outputs. Property-based testing checks that
a **property** (invariant) holds across a large space of random inputs. This catches edge cases that
hand-written tests miss.

### Using check (package:check_v1)

```yaml
dev_dependencies:
  check_v1: ^0.2.0
```

```dart
import 'package:check_v1/check_v1.dart';

void main() {
  test('sort is idempotent', () {
    check(listOf(numericInt)).satisfies((list) {
      final sorted = List<int>.from(list)..sort();
      final sortedAgain = List<int>.from(sorted)..sort();
      return sortedAgain.equals(sorted);
    }).withLabel('sorting twice produces the same result as sorting once');
  });

  test('sort preserves length', () {
    check(listOf(numericInt)).satisfies((list) {
      final sorted = List<int>.from(list)..sort();
      return sorted.length == list.length;
    }).withLabel('sorted list has same length as input');
  });

  test('sort produces ordered output', () {
    check(listOf(numericInt)).satisfies((list) {
      final sorted = List<int>.from(list)..sort();
      for (var i = 1; i < sorted.length; i++) {
        if (sorted[i] < sorted[i - 1]) return false;
      }
      return true;
    }).withLabel('sorted list is in non-decreasing order');
  });

  test('reverse is its own inverse', () {
    check(listOf(numericInt)).satisfies((list) {
      final reversed = list.reversed.toList();
      final doubleReversed = reversed.reversed.toList();
      return listEquals(list, doubleReversed);
    }).withLabel('reversing twice returns the original list');
  });
}
```

### Generators

`check` provides generators for common types:

```dart
// Built-in generators
check(numericInt)         // Random int
check(numericDouble)      // Random double
check(alphaString)        // Random string
check(listOf(numericInt)) // Random list of ints
check(mapOf(numericInt, alphaString)) // Random map

// Custom generator
final positiveInts = numericInt.where((n) => n > 0);
final nonEmptyStrings = alphaString.where((s) => s.isNotEmpty);
final emailLike = alphaString.map((s) => '$s@example.com');
```

### When to Use Property-Based Testing

Use it for:

- Pure functions with well-defined invariants (sorting, serialization, parsing).
- Data transformations where the relationship between input and output can be expressed as a rule.
- Round-trip properties: `parse(serialize(x)) == x`.

Do not use it for:

- Functions with side effects (I/O, database writes).
- Functions that depend on external state.
- Properties that are expensive to check (O(n^2) or worse for large inputs).

Property-based tests are complementary to example-based tests. They find edge cases; example-based
tests document specific behaviors. Use both.

## Test Coverage

### Generating Coverage Reports

```bash
# Dart
dart test --coverage=coverage

# Flutter
flutter test --coverage
```

This produces `coverage/lcov.info` — a machine-readable file listing every line in your source code
and whether it was executed during the test run.

### Viewing Coverage with genhtml

```bash
# Install lcov (if not already installed)
# macOS: brew install lcov
# Linux: apt install lcov

# Generate HTML report
genhtml coverage/lcov.info -o coverage/html

# Open in browser
open coverage/html/index.html
```

Each source file gets a page showing which lines are covered (green), uncovered (red), or not
relevant (gray).

### Coverage Thresholds in CI

Enforce minimum coverage in CI to prevent regression:

```bash
# Fail if overall coverage is below 80%
flutter test --coverage
lcov --summary coverage/lcov.info
# Parse the summary output and fail if below threshold
```

In GitHub Actions:

```yaml
- name: Run tests with coverage
  run: flutter test --coverage

- name: Check coverage threshold
  run: |
    COVERAGE=$(lcov --summary coverage/lcov.info 2>&1 | grep -oP '\d+\.\d+%')
    echo "Coverage: $COVERAGE"
    # Fail if below 80%
    if (( $(echo "$COVERAGE < 80.0" | bc -l) )); then
      echo "::error::Coverage $COVERAGE is below 80% threshold"
      exit 1
    fi
```

### Interpreting Coverage Reports

Coverage is a necessary but not sufficient metric. 100% line coverage does not mean 100%
correctness. Coverage tells you what code was **executed**, not whether the execution was
**verified**.

```dart
// This function has 100% line coverage but zero assertion coverage
int divide(int a, int b) {
  if (b == 0) return 0; // Line covered by one test
  return a ~/ b;         // Line covered by another test
}

// But no test verifies that divide(6, 2) == 3
// The test calls divide(6, 0) and divide(6, 2) but only checks:
test('divide does not crash', () {
  expect(divide(6, 0), isA<int>());
  expect(divide(6, 2), isA<int>());
});
```

Branch coverage is more informative than line coverage — it measures whether each conditional branch
was taken. Some tools support this, but the Dart ecosystem's support is limited. Focus on line
coverage as a floor and supplement with manual review of assertion quality.

### Excluding Files from Coverage

Create a `.covfilter` or pass exclusions:

```bash
genhtml coverage/lcov.info \
  --ignore-errors source \
  --rc genhtml_hi_limit=100 \
  --rc genhtml_med_limit=80 \
  -o coverage/html
```

Exclude generated files, test helpers, and platform-specific code that cannot be tested on the CI
platform.

## Running Tests

### dart test vs flutter test

- `dart test` — runs pure Dart tests (no Flutter SDK). Use for packages, servers, CLI tools.
- `flutter test` — runs Flutter-aware tests (includes widget testing, golden tests). Use for Flutter
  apps and packages that depend on Flutter.

### Filtering Tests

```bash
# Run tests matching a name pattern
flutter test --name "calculator"

# Run tests NOT matching a pattern
flutter test --name "slow" --exclude-tags slow

# Run tests with a specific tag
# In test file:
// @Tags(['integration'])
// test('full flow', () { ... });

# Run only unit tests (not tagged as integration)
flutter test --exclude-tags integration

# Run only integration tests
flutter test --tags integration
```

Tags are defined in the test file with a comment before the test:

```dart
@Tags(['slow'])
test('processes 10k records', () async {
  // This test takes several seconds
}, timeout: Timeout(Duration(minutes: 1)));
```

### Parallelism

The test runner runs tests concurrently by default, using multiple isolates:

```bash
# Default: runs on all available cores
flutter test

# Limit to 2 concurrent isolates (useful for resource-constrained CI)
flutter test -j 2

# Run all tests sequentially (useful for debugging test isolation issues)
flutter test -j 1
```

Tests must be independent — they must not share mutable state, depend on execution order, or compete
for external resources (ports, files). If tests fail under parallelism but pass sequentially, you
have a test isolation bug.

### Reporters

```bash
# Default: compact (one line per test)
flutter test --reporter compact

# Expanded: one line per assertion failure with full context
flutter test --reporter expanded

# JSON: machine-readable output for CI integration
flutter test --reporter json

# GitHub: prints GitHub Actions annotations for failures
flutter test --reporter github
```

### Platform Selection

```dart
// test/my_test.dart
@TestOn('browser')
import 'package:test/test.dart';

void main() {
  // This test only runs in browser environments
  test('localStorage works', () {
    // ...
  });
}
```

```bash
# Run only browser tests
dart test -p chrome

# Run only VM tests
dart test -p vm

# Run tests on multiple platforms
dart test -p vm,chrome
```

### Timeouts

Each test has a default timeout of 30 seconds. Override per-test:

```dart
test('slow operation', () async {
  await longRunningOperation();
}, timeout: Timeout(Duration(minutes: 2)));
```

Or globally in `dart_test.yaml`:

```yaml
# dart_test.yaml
timeout: 60s
```

## Common Pitfalls

### 1. Testing Implementation Instead of Behavior

```dart
// WRONG — couples test to internal implementation
test('adds item to _items list', () {
  cart.addItem(item);
  expect(cart._items, contains(item)); // Accessing private field
});

// CORRECT — tests the observable behavior
test('total increases when item is added', () {
  cart.addItem(Item(price: 10.0));
  expect(cart.total, equals(10.0));
});
```

Tests that reach into private internals break when you refactor. Tests that verify public behavior
survive refactoring.

### 2. Tests That Depend on Execution Order

```dart
// WRONG — test B depends on test A having run
test('A: creates user', () async {
  await service.createUser('alice');
});

test('B: fetches user created by A', () async {
  final user = await service.fetchUser('alice');
  expect(user, isNotNull); // Fails if run alone or in different order
});

// CORRECT — each test sets up its own state
test('fetches existing user', () async {
  await service.createUser('alice');
  final user = await service.fetchUser('alice');
  expect(user, isNotNull);
});
```

### 3. Over-Mocking

```dart
// WRONG — the mock is so complex it duplicates the real implementation
when(repo.findById(any)).thenAnswer((invocation) {
  final id = invocation.positionalArguments[0] as String;
  if (id == '123') return Future.value(User(id: '123', name: 'Alice'));
  if (id == '456') return Future.value(User(id: '456', name: 'Bob'));
  return Future.value(null);
});

// CORRECT — use a simple in-memory fake or limit the stub to what the test needs
when(repo.findById('123'))
    .thenAnswer((_) async => User(id: '123', name: 'Alice'));
```

If your mock setup is longer than the test body, you are testing the mock, not the system.

### 4. Ignoring Async Errors

```dart
// WRONG — the async error in the Future is silently lost
test('handles error', () async {
  service.doWork(); // Returns Future — not awaited, no error handling
});

// CORRECT — await or use expectLater
test('handles error', () async {
  await expectLater(
    service.doWork(),
    throwsA(isA<NetworkException>()),
  );
});
```

### 5. Floating-Point Equality

```dart
// WRONG — floating-point rounding will cause intermittent failures
expect(0.1 + 0.2, equals(0.3)); // Fails: 0.30000000000000004 != 0.3

// CORRECT — use closeTo with an appropriate tolerance
expect(0.1 + 0.2, closeTo(0.3, 1e-10));
```

### 6. Tests That Pass Vacuously

```dart
// WRONG — the assertion always passes
test('user is valid', () {
  final user = User(name: 'Alice', age: 30);
  expect(user, isNotNull); // Trivially true for any non-null object
});

// CORRECT — assert meaningful properties
test('user has correct name and age', () {
  final user = User(name: 'Alice', age: 30);
  expect(user.name, equals('Alice'));
  expect(user.age, equals(30));
});
```

### 7. Shared Mutable State Across Tests

```dart
// WRONG — static state leaks between tests
class Config {
  static String environment = 'test';
}

test('A: sets environment', () {
  Config.environment = 'production';
  expect(Config.environment, equals('production'));
});

test('B: expects default environment', () {
  expect(Config.environment, equals('test')); // Fails if A runs first
});

// CORRECT — reset in setUp or use instance-based state
```

### 8. Not Using FakeAsync for Timer-Dependent Tests

```dart
// WRONG — real timeout makes test slow and flaky
test('debounce works', () async {
  final callLog = <int>[];
  final debounced = debounce(callLog.add, Duration(seconds: 1));
  debounced(1);
  debounced(2);
  await Future.delayed(Duration(seconds: 2));
  expect(callLog, equals([2]));
}, timeout: Timeout(Duration(seconds: 5)));

// CORRECT — deterministic with FakeAsync
test('debounce works', () {
  FakeAsync().run((fake) {
    final callLog = <int>[];
    final debounced = debounce(callLog.add, Duration(seconds: 1));
    debounced(1);
    debounced(2);
    fake.elapse(Duration(milliseconds: 999));
    expect(callLog, isEmpty);
    fake.elapse(Duration(milliseconds: 1));
    expect(callLog, equals([2]));
  });
});
```

### 9. Golden Tests Without Baseline Updates

Golden tests compare widget rendering against a saved image. When you intentionally change the UI,
the golden test fails until you update the baseline. Forgetting to update leads to red tests that
everyone ignores — at which point the golden test has zero value. Run
`flutter test --update-goldens` when you intentionally change the UI, and review the diff carefully.

### 10. Coverage as a Vanity Metric

100% coverage is not the goal. A test suite with 80% coverage and strong assertions is more valuable
than one with 100% coverage and weak assertions. Coverage measures execution, not correctness. Use
it as a floor, not a ceiling, and supplement it with code review of assertion quality.
