---
title: State Management
description:
  State Management — Why setState Alone Does Not Scale; setState and
  InheritedWidget; How setState Works; Scope Limitations.
date: 2026-04-05T00:00:00.000Z
tags:
  - Dart
categories:
  - Dart
slug: state-management
---

## What State Management Is

Flutter renders UI by calling `build()` on widgets. The `build()` method returns a widget tree based
on the current state. When state changes, `build()` must be called again to produce an updated tree.
The problem is: where does the state live, how does it change, and how does the framework know to
rebuild?

Without a deliberate strategy, state ends up scattered across widget fields, callbacks, and global
variables. This works for a prototype but collapses under the weight of a real application:
propagating a change from a deep widget to an ancestor requires passing callbacks through every
intermediate widget (callback hell), shared state becomes uncontrollable without a single source of
truth, and rebuilds become unpredictable because the framework cannot determine which widgets depend
on which state.

State management is the discipline of controlling **where** state is stored, **how** it is modified,
and **which** widgets rebuild when it changes. Every solution in this document addresses the same
fundamental problem — they differ in complexity, boilerplate, testability, and scalability.

### Why setState Alone Does Not Scale

`setState` marks a single `State` object as dirty, triggering a rebuild of that widget and its
descendants. This works for local UI state (a toggle, a text field, an animation progress) but fails
for shared application state (user session, shopping cart, feature flags):

```dart
class CounterPage extends StatefulWidget {
  @override
  State<CounterPage> createState() => _CounterPageState();
}

class _CounterPageState extends State<CounterPage> {
  int _count = 0;

  void _increment() {
    setState(() {
      _count++;
      // This rebuilds CounterPage and ALL its descendants
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Count: $_count'),
        ExpensiveWidget(), // Rebuilds even though it doesn't use _count
        AnotherExpensiveWidget(), // Also rebuilds
      ],
    );
  }
}
```

The problems:

1. **Excessive rebuilds** — `setState` at the top rebuilds the entire subtree, including widgets
   that do not depend on the changed state.
2. **No sharing** — state in a `State` object is inaccessible to sibling or ancestor widgets without
   callbacks.
3. **No persistence** — when the widget is disposed, the state is lost.
4. **No separation of concerns** — business logic lives in the widget, making it untestable and
   unreusable.

## setState and InheritedWidget

### How setState Works

When you call `setState()`, Flutter marks the `State` object's element as dirty. On the next frame,
the framework calls `build()` on that element and reconciles the new widget tree with the old one.
Only widgets whose configuration changes are updated in the render tree.

```dart
setState(() {
  _count++;
});
```

The callback is synchronous. It runs immediately — not on the next frame. The rebuild is scheduled
for the next frame. Multiple `setState` calls within the same microtask are batched into a single
rebuild.

### Scope Limitations

`setState` is scoped to a single `State` object. The state is private to that widget. To communicate
state changes to a parent, you need a callback:

```dart
class TemperatureInput extends StatefulWidget {
  final void Function(double) onChanged;
  const TemperatureInput({required this.onChanged, super.key});

  @override
  State<TemperatureInput> createState() => _TemperatureInputState();
}

class _TemperatureInputState extends State<TemperatureInput> {
  double _value = 0.0;

  @override
  Widget build(BuildContext context) {
    return Slider(
      value: _value,
      onChanged: (v) {
        setState(() => _value = v);
        widget.onChanged(v); // Propagate to parent
      },
    );
  }
}
```

This pattern does not scale. For three levels of nesting, you need three callback parameters. For
ten levels, the boilerplate becomes unmaintainable.

### InheritedWidget

`InheritedWidget` is Flutter's built-in mechanism for propagating data down the widget tree. A
widget anywhere in the subtree can access the data via `BuildContext` without explicit parameter
passing.

```dart
class TemperatureData extends InheritedWidget {
  const TemperatureData({
    required this.temperature,
    required this.onChanged,
    required super.child,
    super.key,
  });

  final double temperature;
  final void Function(double) onChanged;

  static TemperatureData of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<TemperatureData>()!;
  }

  @override
  bool updateShouldNotify(TemperatureData oldWidget) {
    return temperature != oldWidget.temperature;
  }
}

// Usage in a parent widget
class TemperaturePage extends StatefulWidget {
  @override
  State<TemperaturePage> createState() => _TemperaturePageState();
}

class _TemperaturePageState extends State<TemperaturePage> {
  double _temp = 20.0;

  @override
  Widget build(BuildContext context) {
    return TemperatureData(
      temperature: _temp,
      onChanged: (v) => setState(() => _temp = v),
      child: Column(
        children: const [
          TemperatureDisplay(),
          TemperatureSlider(),
        ],
      ),
    );
  }
}

// Any descendant can read the data
class TemperatureDisplay extends StatelessWidget {
  const TemperatureDisplay({super.key});

  @override
  Widget build(BuildContext context) {
    final data = TemperatureData.of(context);
    return Text('Temperature: ${data.temperature}°C');
  }
}

class TemperatureSlider extends StatelessWidget {
  const TemperatureSlider({super.key});

  @override
  Widget build(BuildContext context) {
    final data = TemperatureData.of(context);
    return Slider(
      value: data.temperature,
      onChanged: data.onChanged,
    );
  }
}
```

### How updateShouldNotify Controls Rebuilds

`updateShouldNotify` determines whether descendants that depend on this `InheritedWidget` should be
rebuilt. If it returns `false`, no descendant is notified. If it returns `true`, every widget that
called `of()` is rebuilt.

This is the granularity mechanism — you control which state changes trigger rebuilds by what you
compare in `updateShouldNotify`. Compare only the fields that descendants care about:

```dart
@override
bool updateShouldNotify(AppState oldWidget) {
  return user != oldWidget.user ||
      theme != oldWidget.theme ||
      locale != oldWidget.locale;
  // If only an internal counter changed, descendants won't rebuild
}
```

### Limitations of InheritedWidget

1. **No built-in mutation API** — `InheritedWidget` is immutable. To change its data, you must wrap
   it in a `StatefulWidget` that calls `setState`, then provide a new `InheritedWidget` with updated
   data. This is the boilerplate that `Provider` eliminates.
2. **No notification granularity** — when `updateShouldNotify` returns `true`, **all** dependents
   rebuild, not just the ones that care about the changed field.
3. **No lifecycle management** — `InheritedWidget` does not dispose resources. You must handle
   disposal in the wrapping `StatefulWidget`.
4. **Verbose** — every piece of shared state requires a custom `InheritedWidget` subclass with
   `of()`, `updateShouldNotify`, and a wrapping `StatefulWidget`.

## Provider

`Provider` is a thin wrapper around `InheritedWidget` that eliminates the boilerplate. It is the
most widely used state management solution in Flutter, recommended by the Flutter team for small to
medium applications.

```yaml
dependencies:
  provider: ^6.1.0
```

### ChangeNotifier and ChangeNotifierProvider

`ChangeNotifier` is Dart's built-in observable class from `package:flutter/foundation.dart`. It
maintains a list of listeners and notifies them when `notifyListeners()` is called:

```dart
import 'package:flutter/foundation.dart';

class Counter extends ChangeNotifier {
  int _count = 0;

  int get count => _count;

  void increment() {
    _count++;
    notifyListeners(); // Triggers rebuild of listening widgets
  }

  void decrement() {
    _count--;
    notifyListeners();
  }

  void reset() {
    _count = 0;
    notifyListeners();
  }
}
```

`ChangeNotifierProvider` creates the `ChangeNotifier`, makes it available to the subtree, and
automatically calls `dispose()` when the provider is removed from the tree:

```dart
void main() {
  runApp(
    ChangeNotifierProvider(
      create: (_) => Counter(),
      child: const MyApp(),
    ),
  );
}

class CounterPage extends StatelessWidget {
  const CounterPage({super.key});

  @override
  Widget build(BuildContext context) {
    // context.watch() subscribes to changes — rebuilds when notifyListeners() is called
    final counter = context.watch<Counter>();

    return Column(
      children: [
        Text('Count: ${counter.count}'),
        ElevatedButton(
          onPressed: counter.increment,
          child: const Text('Increment'),
        ),
      ],
    );
  }
}
```

### context.read() vs context.watch() vs context.select()

- `context.watch<T>()` — subscribes to the provider and rebuilds the widget whenever
  `notifyListeners()` is called. Use it in `build()`.
- `context.read<T>()` — returns the provider value without subscribing. Use it in event handlers and
  callbacks. Calling `read()` in `build()` is a mistake — it will not rebuild when state changes.
- `context.select<T, R>(R Function(T) selector)` — subscribes to a specific property of the
  provider. The widget rebuilds only when the selected value changes:

```dart
// Rebuilds only when counter.count changes, not on every notifyListeners()
final count = context.select<Counter, int>((counter) => counter.count);
```

### Consumer and Selector

For fine-grained rebuild control within a widget tree, use `Consumer` and `Selector`:

```dart
// Consumer — rebuilds only its builder, not the entire parent widget
Column(
  children: [
    const HeaderWidget(), // Does not rebuild
    Consumer<Cart>(
      builder: (context, cart, child) {
        return Text('Items: ${cart.itemCount}');
      },
    ),
    const FooterWidget(), // Does not rebuild
  ],
)

// Selector — rebuilds only when the selected value changes
Selector<Cart, double>(
  selector: (_, cart) => cart.totalPrice,
  builder: (_, totalPrice, __) {
    return Text('Total: \$$totalPrice');
  },
)
```

### MultiProvider

When the app has multiple providers, use `MultiProvider` to nest them:

```dart
void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => AuthNotifier()),
        ChangeNotifierProvider(create: (_) => CartNotifier()),
        ChangeNotifierProvider(create: (_) => ThemeNotifier()),
      ],
      child: const MyApp(),
    ),
  );
}
```

Providers can depend on each other by reading other providers during creation:

```dart
MultiProvider(
  providers: [
    ChangeNotifierProvider(create: (_) => ApiClient()),
    ChangeNotifierProxyProvider<ApiClient, UserRepository>(
      create: (_) => UserRepository(),
      update: (_, api, repo) => repo!..updateApi(api),
    ),
  ],
)
```

### Limitations of Provider

1. **No code generation** — every notifier is a hand-written class with manual `notifyListeners()`
   calls. Forgetting to call `notifyListeners()` causes silent bugs (state changes but UI does not
   update).
2. **No async built-in** — handling loading/error states for async operations requires manual
   boilerplate.
3. **Mutable state** — `ChangeNotifier` is mutable by default. Any code with a reference can mutate
   the state directly, bypassing any validation logic.
4. **No dependency injection for non-ChangeNotifier types** — `Provider` works best with
   `ChangeNotifier`. For plain objects, services, or repositories, you need separate provider types
   (`Provider`, `FutureProvider`, `StreamProvider`).
5. **BuildContext dependency** — `context.read()` and `context.watch()` require `BuildContext`,
   which means state access is tied to the widget tree. You cannot access state outside of widgets
   (e.g., in a domain service or route guard).

## Riverpod

Riverpod was created by the same author as Provider (Remi Rousselet) to address its fundamental
limitations. It removes the dependency on `BuildContext`, introduces immutable providers, supports
async out of the box, and provides code generation for less boilerplate.

```yaml
dependencies:
  flutter_riverpod: ^2.5.0
  riverpod_annotation: ^2.3.0

dev_dependencies:
  build_runner: ^2.4.0
  riverpod_generator: ^2.4.0
```

### Providers as Immutable Declarative Values

In Riverpod, a provider is a declaration of how to create a value — not a mutable object. Providers
are immutable globals that you reference by name. The framework handles creation, disposal, and
dependency tracking:

```dart
import 'package:flutter_riverpod/flutter_riverpod.dart';

// A simple provider — creates an int value
final counterProvider = Provider<int>((ref) => 0);

// A state provider — mutable state without a full notifier class
final counterStateProvider = StateProvider<int>((ref) => 0);

// A notifier provider — encapsulated state with business logic
final counterNotifierProvider = NotifierProvider<CounterNotifier, int>(
  CounterNotifier.new,
);

class CounterNotifier extends Notifier<int> {
  @override
  int build() => 0;

  void increment() => state++;
  void decrement() => state--;
  void reset() => state = 0;
}
```

### Provider Types

```dart
// Provider — immutable, derived value
final greetingProvider = Provider<String>((ref) {
  final name = ref.watch(userNameProvider);
  return 'Hello, $name';
});

// StateNotifierProvider — mutable state with a notifier (pre-code-gen)
class TodosNotifier extends StateNotifier<List<Todo>> {
  TodosNotifier() : super([]);

  void add(Todo todo) => state = [...state, todo];
  void remove(String id) => state = state.where((t) => t.id != id).toList();
  void toggle(String id) => state = [
    for (final todo in state)
      if (todo.id == id) todo.copyWith(completed: !todo.completed) else todo,
  ];
}

final todosProvider = StateNotifierProvider<TodosNotifier, List<Todo>>((ref) {
  return TodosNotifier();
});

// FutureProvider — async value with built-in loading/error states
final userProvider = FutureProvider<User>((ref) async {
  final api = ref.watch(apiClientProvider);
  return api.fetchCurrentUser();
});

// StreamProvider — value from a stream with built-in states
final messagesProvider = StreamProvider<Message>((ref) {
  final channel = ref.watch(websocketProvider);
  return channel.messages;
});

// AsyncNotifierProvider — state + async initialization (code-gen)
@riverpod
class AsyncCounter extends _$AsyncCounter {
  @override
  Future<int> build() async {
    // Async initialization — e.g., load from storage
    final prefs = ref.read(sharedPreferencesProvider);
    return prefs.getInt('counter') ?? 0;
  }

  void increment() {
    // state is AsyncValue<int> — use whenData
    state = const AsyncValue.data(0);
    state = AsyncData(state.value! + 1);
  }
}
```

### ref.watch() vs ref.read()

- `ref.watch(provider)` — subscribes to the provider. When the provider's value changes, the
  watching provider or widget rebuilds. Use inside `build()` and widget `build()` methods.
- `ref.read(provider)` — reads the current value without subscribing. Use in event handlers,
  callbacks, and lifecycle methods. Using `ref.read()` inside `build()` is a mistake — the widget
  will not rebuild when the value changes.

```dart
final myWidgetProvider = Provider<void>((ref) {
  // CORRECT — watch in build to react to changes
  final user = ref.watch(userProvider);

  // CORRECT — read in callbacks (no subscription)
  final onLogout = () {
    ref.read(authNotifierProvider.notifier).logout();
  };

  return null;
});
```

### autoDispose

Providers annotated with `autoDispose` are automatically disposed when no widget is watching them.
This prevents memory leaks for providers that hold large resources (stream subscriptions, cached
data):

```dart
final searchResultsProvider = FutureProvider.autoDispose<List<Result>>((ref) async {
  final query = ref.watch(searchQueryProvider);
  if (query.isEmpty) return [];
  return api.search(query);
});
```

When the search UI is dismissed, the provider is disposed. When the search UI is shown again, the
provider is recreated. Use `keepAlive()` to override this for providers that should persist:

```dart
final cachedConfigProvider = FutureProvider.autoDispose<Config>((ref) async {
  final config = await fetchConfig();
  ref.keepAlive(); // Prevent auto-disposal once loaded
  return config;
});
```

### ref.invalidate()

`ref.invalidate(provider)` forces a provider to rebuild on next access. This is useful for
refreshing data:

```dart
final onRefresh = () {
  ref.invalidate(userProvider); // Forces re-fetch on next watch
};
```

All providers that depend on the invalidated provider are also invalidated — this cascading
invalidation ensures consistency.

### Code Generation with @riverpod

The `@riverpod` annotation eliminates boilerplate for common patterns:

```dart
// lib/providers/counter.dart
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'counter.g.dart';

@riverpod
int counter(CounterRef ref) => 0;

@riverpod
class CounterNotifier extends _$CounterNotifier {
  @override
  int build() => 0;

  void increment() => state++;
  void decrement() => state--;
}

@riverpod
Future<User> currentUser(CurrentUserRef ref) async {
  final api = ref.watch(apiClientProvider);
  return api.fetchCurrentUser();
}
```

Run the generator:

```bash
dart run build_runner build --delete-conflicting-outputs
```

This generates the provider definitions in `counter.g.dart`. The generated code handles the provider
family, `autoDispose`, and proper typing.

### Why Riverpod Is Recommended for New Projects

1. **No BuildContext dependency** — providers are global constants. You can access state from
   anywhere: widgets, domain services, route guards, middleware.
2. **Immutable by default** — providers declare how to create a value, not how to mutate it. State
   mutation goes through well-defined notifier APIs.
3. **Async-first** — `FutureProvider` and `AsyncNotifierProvider` handle loading, error, and data
   states without manual boilerplate.
4. **Auto-dispose** — prevents memory leaks by automatically disposing providers when they are no
   longer watched.
5. **Testable** — providers can be overridden in tests without widgets:

```dart
test('fetches user', () async {
  final container = ProviderContainer(
    overrides: [
      apiClientProvider.overrideWithValue(mockApiClient),
    ],
  );

  final user = await container.read(currentUserProvider.future);
  expect(user.name, equals('Alice'));
});
```

## BLoC

The BLoC (Business Logic Component) pattern enforces a strict separation between the UI and business
logic by using a unidirectional data flow: Events go in, States come out. The BLoC itself is a pure
function from event streams to state streams.

```yaml
dependencies:
  flutter_bloc: ^8.1.0
  equatable: ^2.0.5
```

### The Pattern: Events, BLoC, States

```
UI ──(events)──> BLoC ──(states)──> UI
```

1. The UI dispatches an **Event** to the BLoC.
2. The BLoC processes the event, updates its internal state, and emits a new **State**.
3. The UI rebuilds in response to the new state.

This is a state machine. Every state transition is caused by a specific event. Every event produces
a deterministic state transition (for synchronous events). This makes the system traceable — you can
log every event and state transition to reproduce bugs.

### Defining Events and States

```dart
import 'package:equatable/equatable.dart';

// Events — what happened
sealed class AuthEvent extends Equatable {
  @override
  List<Object?> get props => [];
}

class AuthLoginRequested extends AuthEvent {
  final String email;
  final String password;
  AuthLoginRequested({required this.email, required this.password});

  @override
  List<Object?> get props => [email, password];
}

class AuthLogoutRequested extends AuthEvent {}

class AuthTokenRefreshed extends AuthEvent {
  final String token;
  AuthTokenRefreshed(this.token);

  @override
  List<Object?> get props => [token];
}

// States — what the UI should show
sealed class AuthState extends Equatable {
  @override
  List<Object?> get props => [];
}

class AuthInitial extends AuthState {}

class AuthLoading extends AuthState {}

class Authenticated extends AuthState {
  final User user;
  Authenticated(this.user);

  @override
  List<Object?> get props => [user];
}

class AuthError extends AuthState {
  final String message;
  AuthError(this.message);

  @override
  List<Object?> get props => [message];
}
```

Using `sealed` classes for events and states gives you exhaustive pattern matching and prevents
unhandled cases at compile time. `Equatable` provides value equality for events and states, which
prevents the BLoC from emitting duplicate consecutive states.

### The BLoC Class

```dart
import 'package:flutter_bloc/flutter_bloc.dart';

class AuthBloc extends Bloc<AuthEvent, AuthState> {
  final AuthRepository _repo;
  final TokenStore _tokenStore;

  AuthBloc({
    required AuthRepository repo,
    required TokenStore tokenStore,
  })  : _repo = repo,
        _tokenStore = tokenStore,
        super(AuthInitial()) {
    on<AuthLoginRequested>(_onLoginRequested);
    on<AuthLogoutRequested>(_onLogoutRequested);
    on<AuthTokenRefreshed>(_onTokenRefreshed);
  }

  Future<void> _onLoginRequested(
    AuthLoginRequested event,
    Emitter<AuthState> emit,
  ) async {
    emit(AuthLoading());
    try {
      final user = await _repo.login(email: event.email, password: event.password);
      await _tokenStore.save(user.token);
      emit(Authenticated(user));
    } on AuthException catch (e) {
      emit(AuthError(e.message));
    }
  }

  Future<void> _onLogoutRequested(
    AuthLogoutRequested event,
    Emitter<AuthState> emit,
  ) async {
    await _tokenStore.clear();
    emit(AuthInitial());
  }

  Future<void> _onTokenRefreshed(
    AuthTokenRefreshed event,
    Emitter<AuthState> emit,
  ) async {
    try {
      final user = await _repo.validateToken(event.token);
      await _tokenStore.save(user.token);
      emit(Authenticated(user));
    } on AuthException {
      emit(AuthInitial());
    }
  }
}
```

### Cubit: The Simpler Variant

`Cubit` removes the event layer. State transitions happen via direct method calls:

```dart
class CounterCubit extends Cubit<int> {
  CounterCubit() : super(0);

  void increment() => emit(state + 1);
  void decrement() => emit(state - 1);
  void reset() => emit(0);
}
```

Use `Cubit` when the state transitions are simple (no complex event-driven logic). Use `Bloc` when
you need event tracing, replayability, or complex state machines.

### BlocProvider, BlocBuilder, BlocListener, BlocConsumer

```dart
// Provide the BLoC to the subtree
BlocProvider(
  create: (context) => AuthBloc(
    repo: context.read<AuthRepository>(),
    tokenStore: context.read<TokenStore>(),
  ),
  child: const AuthPage(),
)

// BlocBuilder — rebuilds UI when state changes
BlocBuilder<AuthBloc, AuthState>(
  builder: (context, state) {
    return switch (state) {
      AuthLoading() => const CircularProgressIndicator(),
      Authenticated(:final user) => Text('Welcome, ${user.name}'),
      AuthError(:final message) => Text('Error: $message'),
      AuthInitial() => const LoginForm(),
    };
  },
)

// BlocListener — reacts to state changes without rebuilding
BlocListener<AuthBloc, AuthState>(
  listener: (context, state) {
    switch (state) {
      case Authenticated():
        Navigator.pushReplacementNamed(context, '/home');
      case AuthError(:final message):
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text(message)),
        );
      default:
        break;
    }
  },
  child: const AuthForm(),
)

// BlocConsumer — both rebuilds and reacts
BlocConsumer<AuthBloc, AuthState>(
  listener: (context, state) {
    if (state is Authenticated) {
      Navigator.pushReplacementNamed(context, '/home');
    }
  },
  builder: (context, state) {
    return switch (state) {
      AuthLoading() => const CircularProgressIndicator(),
      AuthError(:final message) => Text('Error: $message'),
      _ => const LoginForm(),
    };
  },
)
```

### BlocObserver for Logging

`BlocObserver` provides a global hook for logging all BLoC events and state transitions:

```dart
class AppBlocObserver extends BlocObserver {
  @override
  void onCreate(BlocBase bloc) {
    super.onCreate(bloc);
    logger.info('${bloc.runtimeType} created');
  }

  @override
  void onEvent(Bloc bloc, Object? event) {
    super.onEvent(bloc, event);
    logger.info('${bloc.runtimeType}: $event');
  }

  @override
  void onTransition(Bloc bloc, Transition transition) {
    super.onTransition(bloc, transition);
    logger.info('${bloc.runtimeType}: ${transition.event} → ${transition.nextState}');
  }

  @override
  void onError(BlocBase bloc, Object error, StackTrace stackTrace) {
    super.onError(bloc, error, stackTrace);
    logger.error('${bloc.runtimeType}: $error', stackTrace);
  }

  @override
  void onChange(BlocBase bloc, Change change) {
    super.onChange(bloc, change);
    logger.info('${bloc.runtimeType}: $change');
  }

  @override
  void onClose(BlocBase bloc) {
    super.onClose(bloc);
    logger.info('${bloc.runtimeType} disposed');
  }
}

void main() {
  Bloc.observer = AppBlocObserver();
  runApp(const MyApp());
}
```

### Testing BLoCs

BLoCs are highly testable because they are pure functions from events to states. No widgets needed:

```dart
import 'package:bloc_test/bloc_test.dart';

void main() {
  late AuthBloc bloc;
  late MockAuthRepository repo;
  late MockTokenStore tokenStore;

  setUp(() {
    repo = MockAuthRepository();
    tokenStore = MockTokenStore();
    bloc = AuthBloc(repo: repo, tokenStore: tokenStore);
  });

  tearDown(() => bloc.close());

  blocTest<AuthBloc, AuthState>(
    'emits [loading, authenticated] on successful login',
    build: () => bloc,
    act: (bloc) => bloc.add(AuthLoginRequested(
      email: 'alice@example.com',
      password: 'password',
    )),
    setUp: () {
      when(repo.login(
        email: 'alice@example.com',
        password: 'password',
      )).thenAnswer((_) async => User(
        name: 'Alice',
        email: 'alice@example.com',
        token: 'token-123',
      ));
    },
    expect: () => [
      AuthLoading(),
      Authenticated(User(
        name: 'Alice',
        email: 'alice@example.com',
        token: 'token-123',
      )),
    ],
    verify: (_) {
      verify(tokenStore.save('token-123')).called(1);
    },
  );

  blocTest<AuthBloc, AuthState>(
    'emits [loading, error] on login failure',
    build: () => bloc,
    act: (bloc) => bloc.add(AuthLoginRequested(
      email: 'bad@example.com',
      password: 'wrong',
    )),
    setUp: () {
      when(repo.login(
        email: 'bad@example.com',
        password: 'wrong',
      )).thenThrow(AuthException('Invalid credentials'));
    },
    expect: () => [
      AuthLoading(),
      AuthError('Invalid credentials'),
    ],
  );
}
```

### When BLoC Is Appropriate

- **Large teams** where explicit event contracts prevent "who changed what" confusion.
- **Complex state machines** with many states and transitions (e.g., multi-step forms, order
  processing, authentication flows).
- **Event tracing requirements** — when you need to log, replay, or audit every state transition.
- **Testing rigor** — when the ability to test state transitions in isolation without widgets is a
  priority.

The cost is boilerplate. Every feature requires an event class, a state class, and a BLoC class. For
simple features, this overhead is not justified.

## Comparison Table

| Factor              | setState         | InheritedWidget | Provider   | Riverpod            | BLoC              |
| ------------------- | ---------------- | --------------- | ---------- | ------------------- | ----------------- |
| Complexity          | Trivial          | Low             | Low        | Medium              | High              |
| Learning curve      | None             | Low             | Low        | Medium              | High              |
| Boilerplate         | None             | High            | Low        | Medium (low w/ gen) | High              |
| BuildContext needed | Yes (local only) | Yes             | Yes        | No                  | Yes (for widgets) |
| Async support       | Manual           | Manual          | Manual     | Built-in            | Built-in          |
| Rebuild granularity | None (full tree) | Manual          | Good       | Excellent           | Good              |
| Testability         | Poor             | Poor            | Medium     | Excellent           | Excellent         |
| Scalability         | None             | Low             | Medium     | High                | High              |
| Code generation     | No               | No              | No         | Optional            | No                |
| Ecosystem maturity  | N/A (built-in)   | N/A (built-in)  | Mature     | Mature              | Mature            |
| Recommended for     | Local UI state   | Foundation only | Small apps | New projects        | Large teams       |

## Choosing the Right Solution

The decision depends on four factors: app size, team size, state complexity, and async requirements.

### Small App / Solo Developer

**Provider or setState.** The overhead of Riverpod or BLoC is not justified. Use `setState` for
local UI state and `ChangeNotifierProvider` for shared state. Keep it simple.

```dart
// This is fine for a small app
class SettingsPage extends StatefulWidget { /* ... */ }
class _SettingsPageState extends State<SettingsPage> {
  bool _darkMode = false;
  // setState is sufficient here
}
```

### Medium App / Small Team

**Riverpod.** The auto-dispose, async support, and testability without widgets pay off as complexity
grows. The learning curve is moderate, and code generation keeps boilerplate manageable.

### Large App / Large Team

**Riverpod or BLoC.** Riverpod for flexibility and developer ergonomics. BLoC when the team benefits
from explicit event contracts and state machine discipline.

### Decision Framework

| Condition                                    | Recommendation                |
| -------------------------------------------- | ----------------------------- |
| Local UI state only                          | `setState`                    |
| Shared state, simple mutations               | Provider                      |
| Shared state, async operations               | Riverpod                      |
| Complex state machine, event tracing needed  | BLoC                          |
| State access outside widgets (routing, etc.) | Riverpod                      |
| Team requires strict event contracts         | BLoC                          |
| Minimize boilerplate                         | Riverpod with code generation |
| Already using Provider, want to stay simple  | Provider                      |

The most common mistake is choosing the most complex solution first. Start with `setState` for local
state. Add Provider or Riverpod when state needs to be shared. Introduce BLoC only when the
complexity of the state machine justifies the boilerplate.

## Common Pitfalls

### 1. Using setState for Shared State

```dart
// WRONG — state is trapped in this widget
class UserSession extends StatefulWidget {
  final Widget child;
  const UserSession({required this.child, super.key});

  @override
  State<UserSession> createState() => _UserSessionState();
}

class _UserSessionState extends State<UserSession> {
  User? _currentUser;

  void login(User user) {
    setState(() => _currentUser = user);
  }

  // Siblings and descendants cannot access _currentUser
  // You need callbacks, InheritedWidget, or Provider
}

// CORRECT — use Provider, Riverpod, or BLoC for shared state
final userProvider = StateProvider<User?>((ref) => null);
```

### 2. context.read() in build() Instead of context.watch()

```dart
// WRONG — reads once, never rebuilds when state changes
class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final counter = context.read<Counter>(); // Static read
    return Text('${counter.count}'); // Never updates
  }
}

// CORRECT — subscribes to changes
class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final counter = context.watch<Counter>(); // Reactive subscription
    return Text('${counter.count}'); // Rebuilds when counter changes
  }
}
```

### 3. Forgetting notifyListeners() in Provider

```dart
// WRONG — state changes but UI does not update
class Cart extends ChangeNotifier {
  final List<Item> _items = [];

  void addItem(Item item) {
    _items.add(item);
    // Missing: notifyListeners(); — UI will not rebuild
  }

  List<Item> get items => List.unmodifiable(_items);
}

// CORRECT
class Cart extends ChangeNotifier {
  final List<Item> _items = [];

  void addItem(Item item) {
    _items.add(item);
    notifyListeners(); // Triggers rebuild of watching widgets
  }
}
```

### 4. Creating Providers Inside build()

```dart
// WRONG — creates a new provider on every rebuild, breaking state
class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => Counter(),
      child: const CounterDisplay(),
    );
  }
}

// CORRECT — create providers above the widgets that consume them
// In a parent widget or main()
void main() {
  runApp(
    ChangeNotifierProvider(
      create: (_) => Counter(),
      child: const MyApp(),
    ),
  );
}
```

### 5. Over-Rebuilding with BLoC

```dart
// WRONG — entire page rebuilds on every state change
BlocBuilder<AuthBloc, AuthState>(
  builder: (context, state) {
    return Scaffold(
      appBar: AppBar(title: const Text('Auth')),
      body: switch (state) {
        AuthLoading() => const CircularProgressIndicator(),
        Authenticated(:final user) => UserProfile(user: user),
        AuthError(:final message) => ErrorView(message: message),
        AuthInitial() => const LoginForm(),
      },
      bottomNavigationBar: const BottomNav(), // Rebuilds unnecessarily
    );
  },
)

// CORRECT — use BlocBuilder only for the part that depends on state
Scaffold(
  appBar: AppBar(title: const Text('Auth')),
  body: BlocBuilder<AuthBloc, AuthState>(
    builder: (context, state) {
      return switch (state) {
        AuthLoading() => const CircularProgressIndicator(),
        Authenticated(:final user) => UserProfile(user: user),
        AuthError(:final message) => ErrorView(message: message),
        AuthInitial() => const LoginForm(),
      };
    },
  ),
  bottomNavigationBar: const BottomNav(), // Does not rebuild
)
```

### 6. Not Disposing Resources in Riverpod

```dart
// WRONG — stream subscription leaks
final tickerProvider = StreamProvider<int>((ref) {
  return Stream.periodic(
    const Duration(seconds: 1),
    (count) => count,
  );
  // When no widget watches this, the stream subscription is never cancelled
});

// CORRECT — use autoDispose
final tickerProvider = StreamProvider.autoDispose<int>((ref) {
  final controller = StreamController<int>();
  final subscription = Stream.periodic(
    const Duration(seconds: 1),
    (count) => count,
  ).listen(controller.add);

  ref.onDispose(() {
    subscription.cancel();
    controller.close();
  });

  return controller.stream;
});
```

### 7. Mixing State Management Solutions

Using Provider for one feature, Riverpod for another, and raw BLoC for a third creates an
inconsistent codebase where developers must understand three systems. Pick one solution for the app
layer. It is acceptable to use `setState` for truly local widget state regardless of which solution
the app uses — `setState` is the correct tool for ephemeral, widget-scoped state like animation
progress or a text field controller.

### 8. Not Extracting State Logic from Widgets

```dart
// WRONG — business logic lives in the widget
class OrderPage extends StatefulWidget {
  @override
  State<OrderPage> createState() => _OrderPageState();
}

class _OrderPageState extends State<OrderPage> {
  double _subtotal = 0;
  double _tax = 0;
  double _shipping = 0;

  void _addItem(Item item) {
    setState(() {
      _subtotal += item.price;
      _tax = _subtotal * 0.08;
      _shipping = _subtotal > 50 ? 0 : 5.99;
    });
  }

  double get _total => _subtotal + _tax + _shipping;

  @override
  Widget build(BuildContext context) {
    return Text('Total: \$_total');
  }
}

// CORRECT — state logic in a notifier, widget only renders
class OrderNotifier extends ChangeNotifier {
  double subtotal = 0;
  double get tax => subtotal * 0.08;
  double get shipping => subtotal > 50 ? 0 : 5.99;
  double get total => subtotal + tax + shipping;

  void addItem(Item item) {
    subtotal += item.price;
    notifyListeners();
  }
}
```

### 9. Equatable Without Proper Props Implementation

```dart
// WRONG — props is empty, so all instances are "equal"
class AuthState extends Equatable {
  final User? user;
  final bool isLoading;
  const AuthState({this.user, this.isLoading = false});

  @override
  List<Object?> get props => []; // BUG: every AuthState equals every other
}

// CORRECT — include all fields that affect equality
class AuthState extends Equatable {
  final User? user;
  final bool isLoading;
  const AuthState({this.user, this.isLoading = false});

  @override
  List<Object?> get props => [user, isLoading];
}
```

Without proper `props`, the BLoC will skip emitting identical states even when the fields differ,
because `Equatable` considers them equal.

### 10. Premature Abstraction

Do not create a BLoC, notifier, or provider for a feature that is a single screen with two buttons.
`setState` is the correct tool for that. Premature abstraction adds complexity without benefit.
Abstract when the state is shared across screens, when the logic is complex enough to test in
isolation, or when multiple widgets need to react to the same state change.
