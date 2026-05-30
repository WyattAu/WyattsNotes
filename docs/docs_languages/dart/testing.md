---
title: testing
slug: dart/testing
date: 2026-05-30
tags:
  - Dart
categories:
  - Dart
description: Dart testing: unit tests, widget tests, integration tests, mocking, test-driven development, golden tests, code coverage, and Flutter testing patterns.
---

## Unit Testing

Unit tests validate individual functions, methods, and classes in isolation. They are the fastest tests
to run, the cheapest to maintain, and the most valuable for catching logic errors early. The standard
test framework in Dart is the `test` package, which provides a lightweight API inspired by other xUnit
frameworks.

### The test Package

```yaml
dev_dependencies:
  test: ^1.25.0
```

The core API consists of three functions: `test`, `group`, and `expect`.

```dart
import 'package:test/test.dart';

void main() {
  test('adds two numbers', () {
    expect(2 + 2, equals(4));
  });
}
```

### Organizing Tests with group

Groups allow you to nest related tests under a shared setup and teardown. This is not just aesthetics —
shared setup reduces duplication and ensures each test in the group operates on a consistent state.

```dart
void main() {
  group('Calculator', () {
    late Calculator calc;

    setUp(() {
      calc = Calculator();
    });

    tearDown(() {
      calc.dispose();
    });

    group('addition', () {
      test('positive numbers', () {
        expect(calc.add(2, 3), equals(5));
      });

      test('negative numbers', () {
        expect(calc.add(-1, -2), equals(-3));
      });

      test('handles overflow by clamping', () {
        expect(calc.add(double.maxFinite, 1), equals(double.maxFinite));
      });
    });

    group('division', () {
      test('divides correctly', () {
        expect(calc.divide(10, 2), equals(5));
      });

      test('throws on division by zero', () {
        expect(() => calc.divide(10, 0), throwsA(isA<DivisionByZeroError>()));
      });
    });
  });
}
```

### Matchers

The `expect` function pairs a value with a matcher. Matchers are composable — they can be nested,
combined with `allOf`, `anyOf`, and negated with `isNot`.

```dart
import 'package:test/test.dart';

void main() {
  test('matcher examples', () {
    expect(value, equals(42));
    expect(value, isNotNull);
    expect(value, greaterThan(0));
    expect(list, containsAll([1, 2, 3]));
    expect(string, startsWith('hello'));
    expect(map, containsPair('key', 'value'));

    expect(value, allOf(isA<int>(), greaterThan(0), lessThan(100)));
    expect(value, anyOf(equals(1), equals(2), equals(3)));
    expect(value, isNot(equals(0)));

    expect(() => riskyFunction(), throwsStateError);
    expect(() => riskyFunction(), throwsA(isA<FormatException>()));
  });
}
```

### Running Tests

```bash
dart test                  # Run all tests
dart test test/unit/       # Run tests in a specific directory
dart test -n "addition"    # Run tests matching a name pattern
dart test -r expanded      # Verbose output with each test on a new line
dart test --concurrency=4  # Run with 4 isolates
dart test --reporter json  # JSON output for CI pipelines
```

## Mocking

Mocking substitutes real dependencies with test doubles that record interactions and return
programmed responses. This isolates the unit under test from external state — databases, network calls,
file systems — making tests deterministic and fast.

### mockito Package

```yaml
dev_dependencies:
  mockito: ^5.4.0
  build_runner: ^2.4.0
```

### Mock Generation

mockito uses code generation to create mock classes from abstract interfaces. Generate mocks with:

```bash
dart run build_runner build
```

Annotate the class you want to mock:

```dart
import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';

@GenerateMocks([HttpClient, UserRepository])
import 'my_test.mocks.dart';

void main() {
  late MockHttpClient mockClient;
  late MockUserRepository mockRepo;

  setUp(() {
    mockClient = MockHttpClient();
    mockRepo = MockUserRepository();
  });

  test('fetches user by id', () async {
    when(mockRepo.getById(1)).thenAnswer((_) async => User(id: 1, name: 'Alice'));

    final service = UserService(mockRepo);
    final user = await service.getUser(1);

    expect(user.name, equals('Alice'));
    verify(mockRepo.getById(1)).called(1);
  });
}
```

### Programming Responses

`when` and `thenReturn` handle synchronous returns. `thenAnswer` provides access to invocation arguments
for dynamic responses. `thenThrow` programs exceptions.

```dart
when(mockRepo.getById(any)).thenAnswer((invocation) async {
  final id = invocation.positionalArguments[0] as int;
  return User(id: id, name: 'User $id');
});

when(mockRepo.getById(999)).thenThrow(NotFoundException());

when(mockRepo.getAll())
    .thenReturn(Stream.fromIterable([User(id: 1), User(id: 2)]));
```

### Verification

After the test exercises the code under test, verify that the expected interactions occurred:

```dart
verify(mockRepo.getById(1)).called(1);
verify(mockRepo.delete(any)).called(greaterThan(0));
verifyNever(mockRepo.clearCache());
verifyInOrder([
  mockRepo.clearCache(),
  mockRepo.getById(1),
]);
```

### Argument Matchers

Use matchers instead of literal values when the exact argument is not relevant to the verification:

```dart
when(mockRepo.getById(any)).thenReturn(mockUser);
when(mockRepo.findbyname(startsWith('A'))).thenReturn([]);
verify(mockRepo.save(argThat(isA<User>())));
```

## Widget Testing

Widget tests (component tests in Flutter terminology) render a single widget in a test environment and
verify its behavior — layout, interaction, state changes — without running the full application. They
are slower than unit tests but orders of magnitude faster than integration tests.

### Setting Up Widget Tests

```yaml
dev_dependencies:
  flutter_test:
    sdk: flutter
```

### WidgetTester and pumpWidget

`WidgetTester` drives the widget lifecycle. `pumpWidget` builds and lays out the widget tree. `pump`
advances the clock by one frame.

```dart
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('Counter increments on tap', (tester) async {
    await tester.pumpWidget(
      MaterialApp(
        home: CounterPage(),
      ),
    );

    expect(find.text('0'), findsOneWidget);
    expect(find.text('1'), findsNothing);

    await tester.tap(find.byIcon(Icons.add));
    await tester.pump();

    expect(find.text('1'), findsOneWidget);
    expect(find.text('0'), findsNothing);
  });
}
```

### Finders

Finders locate widgets in the tree by type, text, key, icon, or custom predicates.

```dart
find.text('Submit')                              // By displayed text
find.byType(ElevatedButton)                      // By widget type
find.byIcon(Icons.delete)                        // By icon
find.byKey(Key('login-form'))                    // By GlobalKey
find.byWidget(myWidget)                          // By exact widget instance
find.descendant(of: find.byType(ListView), matching: find.text('Item 1'))
find.ancestor(of: find.text('Hello'), of: find.byType(Scaffold))
find.byWidgetPredicate((widget) => widget is TextField && widget.enabled)
```

### Gestures

```dart
await tester.tap(find.byType(ElevatedButton));
await tester.longPress(find.text('Delete'));
await tester.enterText(find.byType(TextField), 'hello');
await tester.drag(find.byType(ListView), const Offset(0, -200));
await tester.fling(find.byType(ListView), const Offset(0, -500), 100);
await tester.scrollUntilVisible(find.text('Last Item'), 100);
await tester.pumpAndSettle(); // Wait for all animations to complete
```

### Testing Async Widgets

Widgets that depend on `FutureBuilder`, `StreamBuilder`, or async initialization require explicit
pumping to advance through loading states.

```dart
testWidgets('displays data after fetch', (tester) async {
  await tester.pumpWidget(MaterialApp(
    home: FutureDataPage(fetcher: () async => 'loaded data'),
  ));

  expect(find.byType(CircularProgressIndicator), findsOneWidget);
  expect(find.text('loaded data'), findsNothing);

  await tester.pumpAndSettle();

  expect(find.byType(CircularProgressIndicator), findsNothing);
  expect(find.text('loaded data'), findsOneWidget);
});
```

## Integration Testing

Integration tests run the entire application in a real environment — a simulator, emulator, or physical
device. They validate end-to-end flows: navigation, data persistence, network interactions, platform
channels.

### IntegrationTestWidget

```yaml
dev_dependencies:
  integration_test:
    sdk: flutter
```

```dart
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';

void main() {
  final binding = IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  testWidgets('login flow', (tester) async {
    app.main();
    await tester.pumpAndSettle();

    await tester.enterText(find.byType(TextField).first, 'user@example.com');
    await tester.enterText(find.byType(TextField).last, 'password123');
    await tester.tap(find.byType(ElevatedButton));
    await tester.pumpAndSettle();

    expect(find.text('Welcome'), findsOneWidget);
    binding.convertFlutterSurfaceToImage();
  });
}
```

### Running Integration Tests

```bash
flutter test integration_test/                    # On connected device/emulator
flutter test integration_test -d chrome          # On web
flutter test integration_test -d macos           # On desktop
flutter test integration_test --coverage         # With coverage
```

### App-Level Testing Patterns

Integration tests are not limited to UI flows. They can verify deep links, push notification handling,
background execution, and platform channel communication.

```dart
testWidgets('deep link opens correct screen', (tester) async {
  app.main();
  await tester.pumpAndSettle();

  await tester.runAsync(() async {
    await TestDefaultBinaryMessengerBinding.instance.defaultBinaryMessenger
        .handlePlatformMessage(
      'deep_link',
      const StringCodec().encodeMethodCall(
        MethodCall('open', '/settings/profile'),
      ),
      (_) {},
    );
  });

  await tester.pumpAndSettle();
  expect(find.text('Profile'), findsOneWidget);
});
```

## Golden Tests

Golden tests capture a rendered widget as an image and compare it against a reference image (the
golden file). Any visual change — intentional or not — fails the test. This catches regressions that
no amount of logic testing would detect: padding changes, color shifts, font substitutions, layout
breaks on different screen sizes.

### GoldenFileComparator

```dart
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('button matches golden', (tester) async {
    await tester.pumpWidget(MaterialApp(
      home: Scaffold(
        body: PrimaryButton(label: 'Submit'),
      ),
    ));

    await expectLater(
      find.byType(PrimaryButton),
      matchesGoldenFile('goldens/primary_button.png'),
    );
  });
}
```

### Generating and Updating Goldens

```bash
flutter test --update-goldens    # Regenerate all golden files
flutter test --update-goldens test/button_test.dart  # Regenerate specific test
```

### Platform-Specific Goldens

Different platforms render differently — text rendering, shadows, and anti-aliasing vary between macOS,
Linux, Windows, and mobile. Use platform-specific golden directories:

```dart
testWidgets('card renders correctly', (tester) async {
  await tester.pumpWidget(MaterialApp(home: ProfileCard()));

  final deviceInfo = TestDefaultBinaryMessengerBinding.instance;
  final platform = Platform.operatingSystem;

  await expectLater(
    find.byType(ProfileCard),
    matchesGoldenFile('goldens/profile_card_$platform.png'),
  );
});
```

### Pixel-Level Testing Considerations

Golden tests are sensitive to environment differences. Font availability, anti-aliasing algorithms, and
DPI scaling can cause false positives. Strategies to manage flakiness:

- Run golden tests on a single consistent CI environment
- Use `threshold` to allow a small percentage of pixel difference
- Isolate goldens from data-dependent rendering (use mock data)
- Keep golden files in version control so changes are reviewed in diffs

## Asynchronous Testing

Dart is fundamentally asynchronous. Most real-world code involves Futures, Streams, and event-driven
patterns. Testing async code requires tools that let you control time instead of waiting for real
delays.

### Testing Futures

```dart
test('completes with a value', () async {
  final result = await fetchData();
  expect(result, isNotNull);
});

test('throws on error', () async {
  expect(fetchFailingData(), throwsA(isA<NetworkException>()));
});
```

### Testing Streams

```dart
test('emits expected values', () {
  final controller = StreamController<int>();
  final stream = controller.stream;

  expectLater(
    stream,
    emitsInOrder([1, 2, 3, emitsDone]),
  );

  controller
    ..add(1)
    ..add(2)
    ..add(3)
    ..close();
});
```

### fakeAsync and flushMicrotasks

The `fake_async` package gives you control over the event loop. Timers, microtasks, and periodic timers
all become deterministic.

```dart
import 'package:fake_async/fake_async.dart';

test('timer fires after delay', () {
  fakeAsync((async) {
    final results = <int>[];
    periodicTimer(Duration(seconds: 1), () {
      results.add(results.length);
    });

    async.elapse(const Duration(seconds: 3));

    expect(results, equals([0, 1, 2]));
  });
});
```

### Completer for Controlling Futures

```dart
test('service retries on failure', () async {
  final completer = Completer<Response>();
  mockClient.send(any).thenAnswer((_) => completer.future);

  final future = service.fetchData();

  await Future.delayed(Duration.zero);
  verify(mockClient.send(any)).called(1);

  completer.completeError(TimeoutException('timed out'));
  await Future.delayed(Duration.zero);

  verify(mockClient.send(any)).called(greaterThan(1));
});
```

## Test-Driven Development in Dart

Test-driven development (TDD) is a discipline where you write the test before the implementation. The
cycle is: write a failing test (Red), write the minimal code to pass it (Green), improve the design
while keeping tests green (Refactor).

### The Red-Green-Refactor Cycle

1. **Red**: Write a test that describes the behavior you want. Run it — it must fail.
2. **Green**: Write the simplest code that makes the test pass. No more, no less.
3. **Refactor**: Clean up the code while keeping all tests green. Rename, extract, simplify.

### Dart-Specific TDD Considerations

Dart's null safety and strong type system make TDD more productive. The compiler catches a category of
errors that would otherwise require tests in dynamically-typed languages, so Dart TDD focuses on
behavioral correctness rather than type safety.

```dart
void main() {
  group('AuthService', () {
    late AuthService authService;
    late MockTokenStore mockTokenStore;
    late MockApiClient mockApiClient;

    setUp(() {
      mockTokenStore = MockTokenStore();
      mockApiClient = MockApiClient();
      authService = AuthService(mockApiClient, mockTokenStore);
    });

    test('authenticates valid credentials and stores token', () async {
      when(mockApiClient.authenticate('user', 'pass'))
          .thenAnswer((_) async => Token('jwt-token', DateTime.now().add(Duration(hours: 1))));

      await authService.login('user', 'pass');

      verify(mockTokenStore.store('jwt-token')).called(1);
      expect(authService.isAuthenticated, isTrue);
    });

    test('rejects invalid credentials', () async {
      when(mockApiClient.authenticate('user', 'wrong'))
          .thenThrow(AuthException('invalid credentials'));

      expect(() => authService.login('user', 'wrong'), throwsA(isA<AuthException>()));
      expect(authService.isAuthenticated, isFalse);
    });
  });
}
```

### When TDD Helps Most

- Public API design — tests clarify the contract before implementation locks it in
- Complex business logic — state machines, validation rules, calculation engines
- Error handling paths — edge cases that are hard to reason about without executable examples
- Refactoring existing code — write tests for the current behavior first, then refactor with safety

## Code Coverage

Code coverage measures what percentage of your code is exercised by tests. It is a necessary but
insufficient metric — 100% coverage does not mean 100% correctness, but low coverage is a reliable
indicator of untested risk.

### Generating Coverage Reports

```bash
dart test --coverage=coverage    # Run tests and generate coverage data
```

This produces a JSON file in the coverage directory. Convert it to an lcov report:

```bash
dart run coverage:format_coverage --lcov --in=coverage --out=coverage/lcov.info \
  --packages=.dart_tool/package_config.json --report-on=lib
```

Generate an HTML report from lcov:

```bash
genhtml coverage/lcov.info -o coverage/html
```

Open `coverage/html/index.html` in a browser to see line-by-line coverage.

### Coverage Thresholds

Enforce minimum coverage in CI to prevent regression:

```yaml
# .github/workflows/test.yml
- name: Check coverage
  run: |
    dart test --coverage=coverage
    dart run coverage:format_coverage --lcov --in=coverage --out=coverage/lcov.info \
      --packages=.dart_tool/package_config.json --report-on=lib
    genhtml coverage/lcov.info -o coverage/html
    TOTAL=$(lcov --summary coverage/lcov.info 2>&1 | grep -oP '\d+\.\d+%')
    echo "Total coverage: $TOTAL"
```

### Meaningful Coverage

Coverage numbers are misleading if the tests themselves are weak. A test that calls a function with
random inputs and asserts nothing will generate coverage but provides no value. Focus on:

- Branch coverage over line coverage — both branches of an if statement should be tested
- Edge case coverage — empty collections, null inputs, boundary values
- Integration coverage — are the units wired together correctly?
- Mutation testing — tools like `mutation_test` flip operators and assertions to check if tests catch the change

## Flutter Testing Patterns

Flutter applications use reactive state management, navigation, and dependency injection patterns that
require specific testing approaches.

### Provider Testing

```dart
testWidgets('provides value to subtree', (tester) async {
  await tester.pumpWidget(
    ChangeNotifierProvider(
      create: (_) => CounterModel(),
      child: MaterialApp(
        home: Consumer<CounterModel>(
          builder: (_, model, __) => Text('${model.count}'),
        ),
      ),
    ),
  );

  expect(find.text('0'), findsOneWidget);
});
```

### Riverpod Testing

```dart
test('provider emits expected state', () async {
  final container = ProviderContainer(overrides: [
    userRepositoryProvider.overrideWithValue(mockRepo),
  ]);

  final result = await container.read(userProvider.future);
  expect(result.name, equals('Alice'));

  container.dispose();
});
```

### BLoC Testing

```dart
test('emits [Loading, Loaded] on fetch', () async {
  final bloc = UserBloc(mockRepo);

  when(mockRepo.fetchUsers()).thenAnswer((_) async => [User(id: 1)]);

  final expected = [
    UserState.initial().copyWith(status: UserStatus.loading),
    UserState.initial().copyWith(
      status: UserStatus.loaded,
      users: [User(id: 1)],
    ),
  ];

  expectLater(bloc.stream, emitsInOrder(expected));
  bloc.add(FetchUsers());
});
```

### Navigation Testing

```dart
testWidgets('navigates to detail on tap', (tester) async {
  final navigator = MockNavigator();
  when(navigator.push(any)).thenAnswer((_) async => null);

  await tester.pumpWidget(
    MaterialApp(
      home: UserListPage(onTap: () => navigator.push(UserDetailRoute())),
    ),
  );

  await tester.tap(find.text('Alice'));
  await tester.pumpAndSettle();

  verify(navigator.push(any)).called(1);
});
```

## Common Pitfalls

1. **Testing implementation instead of behavior.** If you refactor the internals and tests break, the
   tests are coupled to implementation. Write tests against the public interface — inputs and outputs —
   not internal method calls. Verify behavior, not mechanics.

2. **Over-mocking.** If every dependency is mocked, tests verify mocks interacting with mocks, not the
   real logic. Mock external boundaries (network, file system, databases). Do not mock the domain layer
   or value objects.

3. **Ignoring async ordering.** `pump()` renders one frame. `pumpAndSettle()` waits for all animations
   and microtasks. Using the wrong one causes flaky tests — either timing out on infinite animations
   or not advancing far enough to see state changes.

4. **Test interdependence.** Tests that depend on order, shared mutable state, or external services
   fail unpredictably. Each test must set up its own state and clean up after itself. Use `setUp` and
   `tearDown`, not global variables.

5. **Golden test flakiness on CI.** Different machines render differently. Pin font versions, use a
   containerized environment, or run golden tests only on a single platform in CI. Accept a small pixel
   threshold if anti-aliasing varies.

6. **Not testing error paths.** Happy-path tests are easy. Error-path tests — what happens when the
   network fails, the database is corrupt, the input is malformed — are where the bugs live. Every test
   group should have at least one error case.

7. **Coverage without quality.** A high coverage number from low-quality tests provides a false sense
   of security. A single well-structured test that exercises a real edge case is worth more than ten
   tests that assert nothing meaningful.

## Summary

Dart and Flutter provide a layered testing framework: unit tests for logic, widget tests for UI
components, and integration tests for full application flows. Mocking with mockito isolates units from
their dependencies. Golden tests catch visual regressions that logic tests cannot. `fakeAsync` gives
deterministic control over time for testing async code. Coverage tools measure test breadth but not
depth — pair them with mutation testing and code review. The greatest risk in any testing strategy is
not what you fail to test, but what you test incorrectly — a false-passing test is worse than no test
at all.
