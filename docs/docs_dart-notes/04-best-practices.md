---
title: Best Practices
date: 2025-07-17T20:40:50.912Z
tags:
  - dart
categories:
  - dart
slug: practices
---

## Dart Best Practices

### Null Safety

- Always enable null safety (`dart migrate`).
- Avoid usage of `dynamic` and `Object` declaration, always use `var` or explicit typing.
- Follow the order of `const` >> `final` >> `var` with no nullability specifier >> `final late` >> `var?`.
- Avoid non const top-level variables.
- Favor immutable data classes (with `freezed` or `equatable`).

### Typing

- Avoid `dynamic` where possible; use explicit types (`List<int>` instead of `List`).

### Concurrency

- Prefer `async`/`await` over `.then()` for readability.
- Use `Future.error` for explicit errors instead of throwing strings.
- Leverage `FutureOr<T>` for flexible async/sync returns.
- Offload CPU-intensive tasks to isolates (e.g., image processing).
- Use `compute()` for simple parallelism or `Isolate.spawn` for complex cases.
-

### Collections

- Use collection `if`/`for`/`spreads` for concise code.
- Prefer `.map()`, `.where()`, and `.fold()` over manual loops where appropriate.

### Error Handling

- Catch specific exceptions (`on SomeException`), not just all `catch (e)`.
- Use `rethrow` when needed to preserve stack traces.

## Flutter Best Practices

### State Management

- Prefer Provider, Riverpod, Bloc, or GetX over `setState`
- Avoid global state unless necessary (e.g., use scoped providers).
- Follow BLoC/Cubit or MVVM patterns.
- Keep UI (Widgets) and business logic (Models/Controllers) separate.
  2Reactive Programming:
- Use `StreamBuilder`/`FutureBuilder` for async UI updates.
- Avoid nested reactive widgets (e.g., minimize `StreamBuilder` layers).
  3State Persistence:
- Use `hydrated_bloc` or `shared_preferences` for local state persistence.
- Avoid prop drilling with `Provider` or `Riverpod`.
- Use `freezed` for immutable models and unions.
- Serialize JSON with `json_serializable`.
- Use `MethodChannel` for native integrations (Kotlin/Swift).
- Organize layers into `data`, `domain`, and `presentation`.

### Widget Optimizations

- Mark widgets as `const` when possible to prevent unnecessary rebuilds.
- Use `const` constructors for children in lists/grids.
- Avoid `Opacity` for animations; prefer `AnimatedOpacity` or `Transform`.
- Use `ListView.builder` (or `CustomScrollView`) for infinite/large lists (lazy loading).
- Extract expensive computations from `build()` methods.
- Use `Key`s (e.g., `ValueKey`, `UniqueKey`) when modifying collections of stateful widgets.
- Use `precacheImage` for images loaded on-demand.

### UI/UX Considerations

- Use `LayoutBuilder`, `MediaQuery`, or `SafeArea`.
- Test on multiple screen sizes (e.g., using `DevicePreview`).
- Add semantic labels (`Semantics` widget), use `ExcludeSemantics` where needed.
- Support dynamic text sizing (`TextScaler`).
- Use `intl` package with ARB files or `flutter_localizations`.
- Define a consistent `ThemeData` in `MaterialApp`.
- Use `ThemeExtensions` for custom theming (Flutter 3+).
- Use named routes with `go_router` for deep linking and simplified navigation.

### Performance

- Test performance in profile mode (`flutter run --profile`).
- Use DevTools to check for jank, memory leaks, and CPU usage.
- Dispose controllers (`ScrollController`, `TextEditingController`) and subscriptions.
- Use `const` widgets to reduce garbage collection.
- Minimize `ClipPath`, `Opacity`, and `ShaderMask` usages in animations.
- Prefer `CustomPaint` for complex UIs over deep widget trees.
- Compress images (use `.webp` format).
- Cache images with `cached_network_image`.

## Testing

- Unit Test with `mockito` or `mocktail` for mocking.
- Use `WidgetTester` to verify UI behavior (e.g., `pumpAndSettle`).
- Run end-to-end tests with `integration_test`.
- Use `golden_toolkit` for pixel-perfect UI comparisons.
- Generate reports with `flutter test --coverage` + `lcov`.

## Deployment & Maintenance

- Use `flutter analyze` and `dart fix`.
- Configure `analysis_options.yaml` with strict lints (`flutter_lints` package).
- Pin versions in `pubspec.yaml` (`^` for SemVer-compatible updates).
- Audit dependencies with `dart pub outdated`.
- Use doc comments (`///`) and generate docs via `dart doc`.
- Keep `README.md` updated with project setup and architecture.
- Use `sentry_flutter` for error tracking.

## Platform specific

- ndk version mismatch
  - Set `ndkVersion` in build.gradle.kts to the specific ndk version installed
