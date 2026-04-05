---
title: Dependency Injection
date: 2026-04-05T00:00:00.000Z
tags:
  - Dart
categories:
  - Dart
slug: dependency-injection
---

# Dependency Injection

## What is Dependency Injection

Dependency Injection (DI) is a design pattern that implements **Inversion of Control (IoC)**:
instead of a class creating its own dependencies, they are provided from the outside. This decouples
consumers from concrete implementations and is fundamental to writing testable, maintainable Dart
and Flutter code.

### Core Principles

```dart
// WITHOUT DI — tight coupling, untestable
class UserService {
  final HttpClient client = HttpClient(); // creates its own dependency
  final Database db = Database();           // hard-wired concrete type

  Future<User> fetchUser(int id) async {
    final response = await client.get('/users/$id');
    return User.fromJson(response.data);
  }
}

// WITH DI — loose coupling, testable
class UserService {
  final HttpClient client;
  final Database db;

  // Dependencies injected via constructor
  UserService(this.client, this.db);

  Future<User> fetchUser(int id) async {
    final response = await client.get('/users/$id');
    return User.fromJson(response.data);
  }
}
```

### Why DI Matters

1. **Testability**: inject mocks instead of real HTTP clients, databases, or platform channels
2. **Decoupling**: swap implementations without changing consumers (e.g., swap `SqliteDatabase` for
   `PostgresDatabase`)
3. **Single Responsibility**: classes focus on their logic, not on wiring dependencies
4. **Reusability**: the same service configured with different dependencies serves different
   contexts

### Two Main Approaches

Dart and Flutter primarily use two DI approaches:

- **Constructor Injection**: pass dependencies as constructor parameters (preferred)
- **Service Locator**: central registry where consumers look up dependencies at runtime

The choice between them has significant implications for compile-time safety, testability, and code
clarity.

---

## Constructor Injection Pattern

Constructor injection is the simplest and safest DI approach. Dependencies are declared as required
constructor parameters, making them explicit and enforced at compile time.

### Basic Pattern

```dart
abstract class UserRepository {
  Future<User?> getById(int id);
  Future<void> save(User user);
}

class SqliteUserRepository implements UserRepository {
  final Database _db;
  SqliteUserRepository(this._db);

  @override
  Future<User?> getById(int id) async {
    final row = await _db.query('users', where: 'id = ?', whereArgs: [id]);
    return row.isNotEmpty ? User.fromMap(row.first) : null;
  }

  @override
  Future<void> save(User user) async {
    await _db.insert('users', user.toMap(),
        conflictAlgorithm: ConflictAlgorithm.replace);
  }
}

class UserService {
  final UserRepository _repo;
  final Logger _logger;

  // All dependencies are explicit, required, and typed
  UserService(this._repo, this._logger);

  Future<User> getOrCreate(int id) async {
    _logger.info('Fetching user $id');
    final existing = await _repo.getById(id);
    if (existing != null) return existing;
    final user = User(id: id, name: 'New User');
    await _repo.save(user);
    return user;
  }
}
```

### Optional Dependencies

```dart
class AnalyticsService {
  final AnalyticsProvider? _analytics;
  final Logger _logger;

  // Some dependencies are optional with defaults
  AnalyticsService({
    AnalyticsProvider? analytics,
    required Logger logger,
  })  : _analytics = analytics,
        _logger = logger;

  void trackEvent(String name, Map<String, dynamic> properties) {
    _analytics?.track(name, properties);
    _logger.info('Event: $name');
  }
}
```

### Testing with Constructor Injection

```dart
import 'package:mocktail/mocktail.dart';

class MockUserRepository extends Mock implements UserRepository {}
class MockLogger extends Mock implements Logger {}

void main() {
  late UserService sut;
  late MockUserRepository mockRepo;
  late MockLogger mockLogger;

  setUp(() {
    mockRepo = MockUserRepository();
    mockLogger = MockLogger();
    sut = UserService(mockRepo, mockLogger);
  });

  test('returns existing user from repository', () async {
    final user = User(id: 1, name: 'Alice');
    when(() => mockRepo.getById(1)).thenAnswer((_) async => user);

    final result = await sut.getOrCreate(1);

    expect(result, user);
    verify(() => mockRepo.getById(1)).called(1);
    verifyNever(() => mockRepo.save(any()));
  });

  test('creates new user when not found', () async {
    when(() => mockRepo.getById(99)).thenAnswer((_) async => null);
    when(() => mockRepo.save(any())).thenAnswer((_) async {});

    final result = await sut.getOrCreate(99);

    expect(result.name, 'New User');
    verify(() => mockRepo.save(any(that: isA<User>()))).called(1);
  });
}
```

### Named Constructor for DI with Defaults

```dart
class NotificationService {
  final PushNotificationProvider _pushProvider;
  final InAppNotificationProvider _inAppProvider;

  // Production constructor — requires all dependencies
  NotificationService({
    required PushNotificationProvider pushProvider,
    required InAppNotificationProvider inAppProvider,
  })  : _pushProvider = pushProvider,
        _inAppProvider = inAppProvider;

  // Testing convenience constructor
  NotificationService.noop()
      : _pushProvider = NoopPushProvider(),
        _inAppProvider = NoopInAppProvider();
}
```

---

## Service Locator Pattern

A service locator is a central registry where objects register their dependencies and look them up
at runtime. In Dart, `GetIt` is the canonical service locator.

### How It Works

```dart
import 'package:get_it/get_it.dart';

final getIt = GetIt.instance;

void setupDependencies() {
  // Register concrete types behind abstract interfaces
  getIt.registerSingleton<Database>(() => SqliteDatabase());
  getIt.registerSingleton<Logger>(() => ConsoleLogger());

  // Lazy singleton — created on first access
  getIt.registerLazySingleton<UserRepository>(
    () => SqliteUserRepository(getIt<Database>()),
  );

  // Factory — new instance every time
  getIt.registerFactory<UserService>(
    () => UserService(getIt<UserRepository>(), getIt<Logger>()),
  );
}

// Anywhere in the codebase
void someFunction() {
  final userService = getIt<UserService>();
  userService.getOrCreate(1);
}
```

### Advantages

- **Lazy initialization**: resources are created only when first needed
- **Decoupling**: consumers don't know which concrete implementation they get
- **Convenience**: no need to thread dependencies through multiple layers of constructors
- **Lifecycle management**: singletons, lazy singletons, and factories have clear semantics

### Disadvantages

- **Hidden dependencies**: reading `getIt<T>()` in a class body hides what that class depends on
- **Harder to test**: tests must configure the service locator globally or per-test, which can cause
  flaky test isolation
- **Runtime errors**: if a dependency is not registered, the error occurs at runtime (`StateError`)
  instead of at compile time
- **Global state**: the service locator is essentially global mutable state, making reasoning about
  code harder

### When Service Locator Is Acceptable

The service locator pattern is commonly accepted in Flutter applications for:

- Top-level infrastructure services (navigation, analytics, logging, HTTP clients)
- Platform-channel abstractions where constructor threading through `BuildContext` is impractical
- Legacy codebases where refactoring to full constructor injection is too costly
- Situations where the convenience tradeoff is explicitly acknowledged

---

## get_it

`get_it` is the de-facto standard service locator for Dart and Flutter applications.

### Registration Methods

```dart
import 'package:get_it/get_it.dart';

final getIt = GetIt.instance;

void configure() {
  // Eager singleton — created immediately
  getIt.registerSingleton<HttpClient>(
    DioHttpClient(baseUrl: 'https://api.example.com'),
  );

  // Lazy singleton — created on first get<T>()
  getIt.registerLazySingleton<Database>(() {
    return SqliteDatabase(path: 'app.db');
  });

  // Factory — new instance on every get<T>()
  getIt.registerFactory<Session>(() {
    return Session(token: generateToken());
  });

  // Async singleton — supports async initialization
  getIt.registerSingletonAsync<ApiService>(() async {
    final client = getIt<HttpClient>();
    final db = getIt<Database>();
    await db.initialize();
    return ApiService(client: client, db: db);
  });

  // Async lazy singleton
  getIt.registerLazySingletonAsync<AnalyticsService>(() async {
    final instance = AnalyticsService();
    await instance.initialize();
    return instance;
  });
}
```

### Retrieval

```dart
// Synchronous retrieval (must be already registered/initialized)
final userService = getIt<UserService>();

// With type alias
final repo = getIt<UserRepository>();

// Checking registration
if (getIt.isRegistered<CacheService>()) {
  final cache = getIt<CacheService>();
}

// Optional retrieval — returns null if not registered
final maybeFeatureFlag = getIt.isRegistered<FeatureFlagService>()
    ? getIt<FeatureFlagService>()
    : null;

// Reset a specific registration
getIt.unregister<Session>();

// Reset everything (useful in tests)
getIt.reset();
```

### Async Initialization

```dart
Future<void> setupAppDependencies() async {
  getIt.registerSingletonAsync<Database>(() async {
    final db = SqliteDatabase(path: 'app.db');
    await db.open();
    return db;
  });

  getIt.registerSingletonAsync<ApiService>(() async {
    final db = await getIt.getAsync<Database>();
    return ApiService(db: db);
  });

  // Must call this to actually create async singletons
  await getIt.allReady();
}
```

### Type-Safe Access with Mixin

```dart
mixin AppServices {
  UserService get userService => getIt<UserService>();
  UserRepository get userRepository => getIt<UserRepository>();
  Logger get logger => getIt<Logger>();
}

class MyViewModel with AppServices {
  void doSomething() {
    logger.info('Loading users...');
    userService.getOrCreate(1);
  }
}
```

### Testing with get_it

```dart
void main() {
  setUp(() {
    getIt.reset();
  });

  test('uses mocked repository', () async {
    final mockRepo = MockUserRepository();
    getIt.registerLazySingleton<UserRepository>(() => mockRepo);

    final service = getIt<UserService>();
    // ...
  });
}
```

---

## injectable

`injectable` is a code-generation package that automates `get_it` registration using annotations,
reducing boilerplate and registration errors.

### Setup

Add to `pubspec.yaml`:

```yaml
dependencies:
  get_it: ^7.6.0
  injectable: ^2.3.0

dev_dependencies:
  build_runner: ^2.4.0
  injectable_generator: ^2.4.0
```

### Annotating Classes

```dart
import 'package:injectable/injectable.dart';

// Singleton — one instance for the entire app lifecycle
@singleton
class AnalyticsService {
  void track(String event) {
    // ...
  }
}

// Lazy singleton — created on first access
@lazySingleton
class CacheService {
  final Map<String, dynamic> _cache = {};
  dynamic get(String key) => _cache[key];
  void set(String key, dynamic value) => _cache[key] = value;
}

// Factory — new instance every time
@injectable
class Session {
  final String token;
  Session({required this.token});
}

// Named registration
@Named('production')
@singleton
class ProductionApiService implements ApiService {
  @override
  Future<Data> fetchData() async {
    // ...
  }
}

@Named('staging')
@singleton
class StagingApiService implements ApiService {
  @override
  Future<Data> fetchData() async {
    // ...
  }
}
```

### Constructor Injection with injectable

`injectable` automatically resolves dependencies from `get_it` based on constructor parameter types:

```dart
@injectable
class UserService {
  final UserRepository _repo;
  final Logger _logger;
  final AnalyticsService? _analytics;

  // injectable inspects constructor parameters and resolves them
  UserService(
    this._repo,
    this._logger, {
    @Named('production') AnalyticsService? analytics,
  }) : _analytics = analytics;

  Future<User> getUser(int id) async {
    _logger.info('Fetching user $id');
    final user = await _repo.getById(id);
    _analytics?.track('user_fetched', {'id': id});
    return user!;
  }
}

@lazySingleton
class UserRepositoryImpl implements UserRepository {
  final Database _db;

  UserRepositoryImpl(this._db);

  // ...
}
```

### Environment-Based Registration

```dart
@Environment('dev')
@lazySingleton
class MockPaymentGateway implements PaymentGateway {
  @override
  Future<bool> charge(double amount) async => true;
}

@Environment('prod')
@lazySingleton
class StripePaymentGateway implements PaymentGateway {
  final String apiKey;

  StripePaymentGateway(@Named('stripe_key') this.apiKey);

  @override
  Future<bool> charge(double amount) async {
    // Real Stripe integration
    return true;
  }
}
```

### Generated Configuration

Run code generation:

```bash
dart run build_runner build
```

This generates a file with `@InjectableInit`:

```dart
// GENERATED CODE — DO NOT EDIT
import 'package:get_it/get_it.dart';
import 'package:injectable/injectable.dart';

extension GetItInjectableX on GetIt {
  // Registers all annotated classes
}

// Call this in main()
@InjectableInit(preferRelativeImports: true)
Future<GetIt> configureDependencies({
  String? environment,
}) async {
  final getIt = GetIt.instance;
  // ... generated registrations
  return getIt;
}
```

### Usage in main.dart

```dart
Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await configureDependencies(environment: 'prod');
  // or for tests: await configureDependencies(environment: 'dev');

  runApp(const MyApp());
}
```

### Using Named Dependencies

```dart
@injectable
class MyService {
  final ApiService _api;

  MyService(@Named('production') this._api);
}
```

### Factory Method Registration

```dart
@injectable
class OrderProcessor {
  final OrderRepository _repo;
  final PaymentGateway _payment;
  final NotificationService _notification;

  OrderProcessor(
    this._repo,
    this._payment,
    this._notification,
  );
}

// Register with custom factory logic
@module
abstract class RegisterModule {
  @factoryMethod
  OrderProcessor orderProcessor(
    OrderRepository repo,
    @Named('production') PaymentGateway payment,
    NotificationService notification,
  ) {
    return OrderProcessor(repo, payment, notification);
  }
}
```

---

## Riverpod as DI

Riverpod is both a state management solution and a dependency injection framework. Providers serve
as dependency containers with compile-time safety.

### Providers as Dependency Containers

```dart
import 'package:flutter_riverpod/flutter_riverpod.dart';

// A provider IS a dependency — declare it once, use everywhere
final httpClientProvider = Provider<HttpClient>((ref) {
  return DioHttpClient(baseUrl: 'https://api.example.com');
});

final databaseProvider = Provider<Database>((ref) {
  return SqliteDatabase(path: 'app.db');
});

// Providers can depend on other providers — Riverpod resolves the graph
final userRepositoryProvider = Provider<UserRepository>((ref) {
  final db = ref.watch(databaseProvider);
  return SqliteUserRepository(db);
});

final userServiceProvider = Provider<UserService>((ref) {
  final repo = ref.watch(userRepositoryProvider);
  final client = ref.watch(httpClientProvider);
  return UserService(repo: repo, client: client);
});
```

### ref.watch() vs ref.read()

```dart
final userControllerProvider = StateNotifierProvider<UserController, AsyncValue<User?>>((ref) {
  final userService = ref.watch(userServiceProvider);
  return UserController(userService);
});

class UserController extends StateNotifier<AsyncValue<User?>> {
  final UserService _userService;

  UserController(this._userService) : super(const AsyncValue.loading());

  // Use ref.read() for one-time reads (e.g., in callbacks, event handlers)
  Future<void> loadUser(int id) async {
    state = const AsyncValue.loading();
    try {
      final user = await _userService.getOrCreate(id);
      state = AsyncValue.data(user);
    } catch (e, st) {
      state = AsyncValue.error(e, st);
    }
  }
}

// In a widget:
class UserScreen extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // ref.watch — rebuilds widget when user changes
    final userAsync = ref.watch(userControllerProvider);

    return userAsync.when(
      data: (user) => Text(user?.name ?? 'No user'),
      loading: () => const CircularProgressIndicator(),
      error: (e, _) => Text('Error: $e'),
    );
  }
}

// In a callback:
class ProfileButton extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return ElevatedButton(
      onPressed: () {
        // ref.read — one-time read, does NOT rebuild
        ref.read(userControllerProvider.notifier).loadUser(42);
      },
      child: const Text('Load Profile'),
    );
  }
}
```

### Provider for Plain Values

```dart
final apiKeyProvider = Provider<String>((ref) {
  return const String.fromEnvironment('API_KEY');
});

final featureFlagsProvider = Provider<FeatureFlags>((ref) {
  return FeatureFlags(
    enableDarkMode: true,
    enableNewDashboard: false,
  );
});
```

### StateNotifierProvider for Stateful Services

```dart
class CartNotifier extends StateNotifier<List<CartItem>> {
  final AnalyticsService _analytics;

  CartNotifier(this._analytics) : super([]);

  void addItem(CartItem item) {
    state = [...state, item];
    _analytics.track('cart_item_added', {'productId': item.productId});
  }

  void removeItem(String productId) {
    state = state.where((item) => item.productId != productId).toList();
  }

  double get total => state.fold(0.0, (sum, item) => sum + item.price);
}

final cartProvider = StateNotifierProvider<CartNotifier, List<CartItem>>((ref) {
  final analytics = ref.watch(analyticsServiceProvider);
  return CartNotifier(analytics);
});
```

### AsyncNotifierProvider for Async Initialization

```dart
@riverpod
class Settings extends _$Settings {
  @override
  Future<AppSettings> build() async {
    // Async initialization — Riverpod handles loading/error states
    final prefs = ref.watch(sharedPreferencesProvider);
    return AppSettings.fromPrefs(prefs);
  }

  void updateTheme(ThemeMode mode) {
    state = AsyncData(state.value!.copyWith(theme: mode));
  }
}

// Usage
class SettingsScreen extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final settingsAsync = ref.watch(settingsProvider);

    return settingsAsync.when(
      data: (settings) => Text('Theme: ${settings.theme}'),
      loading: () => const CircularProgressIndicator(),
      error: (e, _) => Text('Failed to load settings'),
    );
  }
}
```

### Scoping with ProviderScope

```dart
void main() {
  runApp(
    // Root scope — app-wide providers
    ProviderScope(
      overrides: [
        // Override providers for the entire app
        httpClientProvider.overrideWithValue(MockHttpClient()),
      ],
      child: const MyApp(),
    ),
  );
}

// Scoped providers for specific widget subtrees
class TestEnvironment extends StatelessWidget {
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return ProviderScope(
      overrides: [
        userRepositoryProvider.overrideWithValue(MockUserRepository()),
        analyticsServiceProvider.overrideWithValue(NoopAnalyticsService()),
      ],
      child: child,
    );
  }
}

// In tests:
void testWidgets('user screen shows data', (tester) async {
  await tester.pumpWidget(
    ProviderScope(
      overrides: [
        userControllerProvider.overrideWith((ref) {
          final mockService = MockUserService();
          when(() => mockService.getOrCreate(1))
              .thenAnswer((_) async => User(id: 1, name: 'Test'));
          return UserController(mockService);
        }),
      ],
      child: const MaterialApp(home: UserScreen()),
    ),
  );
});
```

---

## Common Patterns

### Repository Pattern with DI

```dart
abstract class ProductRepository {
  Future<List<Product>> getAll();
  Future<Product?> getById(String id);
  Stream<List<Product>> watchAll();
}

@lazySingleton
class FirestoreProductRepository implements ProductRepository {
  final FirebaseFirestore _firestore;

  FirestoreProductRepository(this._firestore);

  @override
  Future<List<Product>> getAll() async {
    final snapshot = await _firestore.collection('products').get();
    return snapshot.docs.map((doc) => Product.fromFirestore(doc)).toList();
  }

  @override
  Future<Product?> getById(String id) async {
    final doc = await _firestore.collection('products').doc(id).get();
    return doc.exists ? Product.fromFirestore(doc) : null;
  }

  @override
  Stream<List<Product>> watchAll() {
    return _firestore.collection('products').snapshots().map(
      (snapshot) => snapshot.docs.map(Product.fromFirestore).toList(),
    );
  }
}
```

### Use Case Services

```dart
@injectable
class GetProductUseCase {
  final ProductRepository _repo;
  final CacheService _cache;
  final Logger _logger;

  GetProductUseCase(this._repo, this._cache, this._logger);

  Future<Product> execute(String id) async {
    _logger.info('Getting product $id');

    // Check cache first
    final cached = _cache.get('product_$id');
    if (cached != null) return cached as Product;

    // Fetch from repository
    final product = await _repo.getById(id);
    if (product == null) throw ProductNotFoundException(id);

    // Update cache
    _cache.set('product_$id', product);
    return product;
  }
}
```

### Platform-Specific Implementations

```dart
abstract class LocationService {
  Future<Location?> getCurrentLocation();
  Stream<Location> watchLocation();
}

@lazySingleton
@Named('mobile')
class MobileLocationService implements LocationService {
  final GeolocatorPlatform _geolocator;

  MobileLocationService(this._geolocator);

  @override
  Future<Location?> getCurrentLocation() async {
    final position = await _geolocator.getCurrentPosition();
    return Location(lat: position.latitude, lng: position.longitude);
  }

  @override
  Stream<Location> watchLocation() {
    return _geolocator.getPositionStream().map(
      (position) => Location(lat: position.latitude, lng: position.longitude),
    );
  }
}

@lazySingleton
@Named('web')
class WebLocationService implements LocationService {
  @override
  Future<Location?> getCurrentLocation() async {
    // Browser geolocation API
    return null;
  }

  @override
  Stream<Location> watchLocation() async* {
    yield* const Stream.empty();
  }
}

// Registration
void setup() {
  final isWeb = kIsWeb;
  getIt.registerSingleton<LocationService>(
    isWeb
        ? getIt<@Named('web') LocationService>()
        : getIt<@Named('mobile') LocationService>(),
  );
}
```

### Singleton Services

```dart
@singleton
class AnalyticsService {
  final HttpClient _client;
  final DeviceInfo _deviceInfo;
  final Logger _logger;
  final Queue<AnalyticsEvent> _queue = Queue();

  AnalyticsService(this._client, this._deviceInfo, this._logger);

  void track(String event, [Map<String, dynamic>? properties]) {
    _queue.add(AnalyticsEvent(
      name: event,
      properties: {
        'platform': _deviceInfo.platform,
        'osVersion': _deviceInfo.osVersion,
        ...?properties,
      },
      timestamp: DateTime.now(),
    ));

    _logger.debug('Analytics event queued: $event');
    _flushIfNeeded();
  }

  void _flushIfNeeded() {
    if (_queue.length >= 20) {
      _flush();
    }
  }

  Future<void> _flush() async {
    if (_queue.isEmpty) return;
    final events = List<AnalyticsEvent>.from(_queue);
    _queue.clear();
    try {
      await _client.post('/analytics/batch', body: {
        'events': events.map((e) => e.toMap()).toList(),
      });
    } catch (e) {
      _logger.error('Failed to flush analytics: $e');
    }
  }
}
```

### Factory Pattern with DI

```dart
@injectable
class OrderFactory {
  final IdGenerator _idGenerator;
  final Clock _clock;

  OrderFactory(this._idGenerator, this._clock);

  Order create({
    required String customerId,
    required List<OrderLine> lines,
  }) {
    return Order(
      id: _idGenerator.generate(),
      customerId: customerId,
      lines: lines,
      status: OrderStatus.pending,
      createdAt: _clock.now(),
    );
  }
}
```

---

## Comparison Table

| Aspect                | Constructor Injection                       | Service Locator (get_it)               | Riverpod                                          |
| --------------------- | ------------------------------------------- | -------------------------------------- | ------------------------------------------------- |
| Compile-time safety   | Full — missing deps are compile errors      | None — errors at runtime               | Full — missing providers are compile errors       |
| Testability           | Excellent — pass mocks directly             | Good — must configure locator per test | Excellent — override providers in ProviderScope   |
| Boilerplate           | Moderate — thread deps through constructors | Low — register once, get anywhere      | Moderate — declare providers, use ref             |
| Lazy initialization   | Manual                                      | Built-in (lazy singleton)              | Built-in (provider evaluated on first watch/read) |
| Scoping               | Manual                                      | Manual                                 | Built-in (ProviderScope, nested scopes)           |
| Dependency visibility | Explicit in constructor signature           | Hidden — read source to discover       | Visible in provider declaration                   |
| Lifecycle management  | Manual                                      | Singleton/factory/lazy singleton       | Auto-disposed, keepAlive                          |
| State management      | Not provided                                | Not provided                           | Built-in                                          |
| Learning curve        | Low                                         | Low                                    | Moderate to high                                  |
| Flutter integration   | Manual wiring                               | Manual wiring                          | Native (ConsumerWidget, HookConsumerWidget)       |
| Hot reload            | Works naturally                             | Works naturally                        | Works naturally                                   |

---

## Common Pitfalls

### Over-Injection

Not every class needs DI. Value objects, simple data holders, and pure functions don't benefit from
injection. Only inject things that have side effects, external dependencies, or multiple
implementations.

```dart
// DON'T — over-injecting a pure value object
@injectable
class EmailAddress {
  final String value;
  EmailAddress(this.value);
}

// DO — simple constructor, no DI needed
class EmailAddress {
  final String value;
  const EmailAddress(this.value);
}
```

### Circular Dependencies

A depends on B, B depends on A — both never resolve. This is a design smell indicating
responsibilities are tangled.

```dart
// DON'T — circular dependency
class A {
  final B b;
  A(this.b);
}

class B {
  final A a;
  B(this.a);
}

// DO — extract shared logic into a third dependency
class A {
  final C c;
  A(this.c);
}

class B {
  final C c;
  B(this.c);
}

class C {
  // Shared logic
}
```

### Singleton vs Factory for Testability

Using singletons for everything makes tests interdependent. State leaks between tests if singletons
are not reset.

```dart
// DON'T — singleton for stateful service used in tests
getIt.registerSingleton<ShoppingCart>(() => ShoppingCart());

// DO — factory for stateful services in tests
getIt.registerFactory<ShoppingCart>(() => ShoppingCart());
```

### DI in Flutter Widgets: ProviderScope Placement

Placing `ProviderScope` too deep or too shallow causes either missing overrides or unnecessary
rebuilds.

```dart
// DON'T — ProviderScope at the wrong level
class MyPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ProviderScope(
      child: Scaffold(body: MyWidget()),
    );
  }
}

// DO — ProviderScope at the root or test level
void main() {
  runApp(ProviderScope(child: MyApp()));
}
```

### Forgetting to Register Dependencies

With `get_it`, forgetting to register a dependency causes a runtime crash. With Riverpod, it's a
compile-time error. With `injectable`, forgetting to annotate a class means it won't be generated.

```dart
// Runtime crash if CacheService not registered:
final cache = getIt<CacheService>(); // StateError: CacheService not found

// Always verify registration in tests:
setUp(() {
  if (!getIt.isRegistered<CacheService>()) {
    getIt.registerFactory<CacheService>(() => InMemoryCacheService());
  }
});
```

### Mixing DI Approaches Inconsistently

Using `get_it` in one module and Riverpod in another creates confusion about where dependencies live
and how they're resolved. Pick one primary approach and be consistent. If using Riverpod, prefer
Riverpod providers for all Flutter-specific dependencies and reserve `get_it` for non-Flutter Dart
services if needed.
