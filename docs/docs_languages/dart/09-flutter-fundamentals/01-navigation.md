---
title: Navigation
description:
  Navigation — Navigator 1.0; Basic Push and Pop; Passing Data to a Route;
  Returning Data from a Route with worked examples and exam-style questions.
date: 2026-04-05T00:00:00.000Z
tags:
  - Dart
categories:
  - Dart
slug: navigation
---

# Navigation

## Navigation Overview

Navigation is the mechanism by which users move between different screens, pages, or views within a
Flutter application. Every non-trivial app needs a way to transition the user from one logical
destination to another, whether that is moving from a home screen to a settings page, drilling into
a detail view, or presenting a modal dialog.

There are two dominant paradigms for navigation in Flutter: imperative navigation and declarative
navigation.

### Imperative Navigation

Imperative navigation is the model inherited from many traditional UI frameworks. The developer
explicitly tells the framework to "go to this screen now" by calling a function that mutates the
navigation stack:

```dart
Navigator.of(context).push(
  MaterialPageRoute(builder: (context) => const DetailPage()),
);
```

The push call directly modifies the navigator's internal stack. This is analogous to calling
`startActivity` on Android or presenting a view controller on iOS. The control flow is linear and
explicit: every transition is triggered by a discrete function call.

The problems with imperative navigation become apparent as an app grows:

- **Global mutable state**: The navigator's route stack is global state that any widget can modify,
  making it difficult to reason about which part of the app caused a navigation event.
- **No single source of truth**: The current screen is determined by a sequence of push/pop calls
  scattered throughout the codebase. There is no central declaration of "what screens exist" and
  "how they connect."
- **Deep linking is bolted on**: Converting a URL like `/users/42/posts/7` into a sequence of pushes
  is manual and error-prone.
- **Type safety**: Routes are identified by strings or builder functions, so passing the wrong
  arguments is only caught at runtime.

### Declarative Navigation

Declarative navigation treats the navigation state as a function of application state. Instead of
imperatively pushing and popping routes, you declare a mapping from app state (or URL-like location)
to the widget tree that should be displayed:

```dart
final _router = GoRouter(
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => const HomePage(),
      routes: [
        GoRoute(
          path: 'users/:id',
          builder: (context, state) {
            final id = state.pathParameters['id']!;
            return UserDetailPage(userId: id);
          },
        ),
      ],
    ),
  ],
);
```

The router becomes the single source of truth for the app's navigation structure. The current
location determines what is displayed. When the location changes (whether from a user action, a deep
link, or a redirect), the router reacts and rebuilds the widget tree accordingly.

Benefits of the declarative approach:

- **Centralized route table**: Every route and its parameters are declared in one place.
- **Deep linking is first-class**: A URL directly maps to a route — no manual push choreography
  required.
- **Predictable back-button behavior**: The router manages the navigation stack based on the
  declarative structure, so the back button always behaves consistently.
- **Testability**: Navigation logic can be tested by asserting that a given URL produces the
  expected widget tree.

Flutter has evolved through several navigation APIs to arrive at the current best practice of using
`go_router`, a declarative routing package maintained by the Flutter team.

---

## Navigator 1.0

Navigator 1.0 is Flutter's original navigation system, built around the `Navigator` widget and an
imperative API. Understanding it is essential because many existing codebases still use it, and it
is the foundation upon which later APIs were built.

### Basic Push and Pop

The two most fundamental operations are `push` and `pop`:

```dart
class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Home')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Navigator.of(context).push(
              MaterialPageRoute(
                builder: (context) => const DetailPage(title: 'Details'),
              ),
            );
          },
          child: const Text('Go to Details'),
        ),
      ),
    );
  }
}

class DetailPage extends StatelessWidget {
  final String title;
  const DetailPage({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(title)),
      body: Center(
        child: ElevatedButton(
          onPressed: () => Navigator.of(context).pop(),
          child: const Text('Go Back'),
        ),
      ),
    );
  }
}
```

`Navigator.push()` adds a new route to the top of the navigation stack. `Navigator.pop()` removes
the topmost route. Under the hood, `Navigator` maintains an ordered list of `Route` objects — the
**navigation stack** — and only the topmost route is visible.

### Passing Data to a Route

Data is passed to a pushed route through its constructor:

```dart
Navigator.of(context).push(
  MaterialPageRoute(
    builder: (context) => UserProfilePage(userId: 42),
  ),
);
```

### Returning Data from a Route

`pop` accepts an optional result argument. The calling code awaits the push to receive the result:

```dart
final result = await Navigator.of(context).push<String>(
  MaterialPageRoute(
    builder: (context) => const SelectionPage(),
  ),
);

if (result != null) {
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(content: Text('Selected: $result')),
  );
}
```

In the pushed route, pop with the data:

```dart
Navigator.of(context).pop('Option A');
```

### Named Routes

`MaterialApp` accepts a `routes` map that associates string names with widget builders:

```dart
MaterialApp(
  routes: {
    '/': (context) => const HomePage(),
    '/detail': (context) => const DetailPage(),
    '/settings': (context) => const SettingsPage(),
  },
);
```

Navigation uses `Navigator.pushNamed()`:

```dart
Navigator.of(context).pushNamed('/detail');
```

Passing arguments to named routes requires the `arguments` parameter:

```dart
Navigator.of(context).pushNamed(
  '/detail',
  arguments: {'userId': 42, 'source': 'search'},
);

final args = ModalRoute.of(context)!.settings.arguments as Map<String, dynamic>;
```

There is also `onGenerateRoute` for more control:

```dart
MaterialApp(
  onGenerateRoute: (settings) {
    switch (settings.name) {
      case '/':
        return MaterialPageRoute(builder: (_) => const HomePage());
      case '/user':
        final userId = settings.arguments as int;
        return MaterialPageRoute(
          builder: (_) => UserProfilePage(userId: userId),
        );
      default:
        return MaterialPageRoute(builder: (_) => const NotFoundPage());
    }
  },
);
```

### Route and MaterialPageRoute

`Route` is the abstract base class representing a screen in the navigation stack.
`MaterialPageRoute` is the concrete implementation that provides Material Design page transitions
(slide-in from the right on Android, slide-in from the bottom on iOS when using
`CupertinoPageRoute`).

A `Route` has a lifecycle managed by the `Navigator`:

- **Installed**: Added to the navigator.
- **Covered**: Another route is pushed on top, hiding this one.
- **Uncovered**: The route above is popped, revealing this one.
- **Popped**: Removed from the navigator.

### Limitations of Navigator 1.0

Navigator 1.0 works well for simple apps but has serious limitations at scale:

1. **Imperative mutations**: Any widget with a `BuildContext` can push or pop at any time, leading
   to unpredictable navigation state.
2. **No deep linking**: There is no built-in way to map a URL to a stack of routes. The developer
   must manually parse the URL and perform a sequence of pushes.
3. **No type safety for arguments**: Arguments are passed as `Object?` and require runtime casting.
4. **No route guards**: There is no declarative mechanism to protect routes (e.g., requiring
   authentication). Guards must be implemented manually at each entry point.
5. **Poor support for web**: The browser's address bar does not automatically reflect the current
   route, and back/forward button handling is manual.

---

## Navigator 2.0

Navigator 2.0 was introduced as a declarative alternative to Navigator 1.0. It is a lower-level API
that provides complete control over the navigation stack, making it possible to implement deep
linking, URL-based routing, and complex nested navigation patterns.

### Core Components

Navigator 2.0 is built from four cooperating classes:

1. **`RouteInformationProvider`** — Owns the current route information (typically a URL string). It
   listens to platform route changes (e.g., browser URL bar) and notifies the rest of the system.
2. **`RouteInformationParser<T>`** — Converts raw route information (a string) into a typed
   configuration object `T`. This is where URL parsing happens.
3. **`RouterDelegate<T>`** — The central coordinator. It receives the parsed configuration, builds
   the navigation stack, and tells the `Navigator` which pages to display. It also handles
   back-button dispatching.
4. **`BackButtonDispatcher`** — Intercepts the system back button (Android) or browser back button
   (web) and delegates to the `RouterDelegate`.

### How Navigator 2.0 Works Under the Hood

The flow proceeds as follows:

1. The `RouteInformationProvider` detects a route change (e.g., user taps a link, browser URL
   changes).
2. It passes the raw route string to the `RouteInformationParser`.
3. The parser converts the string into a typed configuration object.
4. The `RouterDelegate` receives the new configuration and calls `setNewRoutePath`.
5. The delegate rebuilds its internal page list and calls `notifyListeners`.
6. The `Router` widget rebuilds, creating a `Navigator` with the delegate's current pages.

When the user presses the back button:

1. `BackButtonDispatcher` invokes `popRoute` on the `RouterDelegate`.
2. The delegate decides whether to pop a page from its list or let the system handle it.
3. The delegate updates its pages and calls `notifyListeners`.

### Example Implementation

```dart
class AppRoutePath {
  final String? userId;
  final bool isUnknown;

  AppRoutePath.home()
      : userId = null,
        isUnknown = false;

  AppRoutePath.detail(this.userId) : isUnknown = false;

  AppRoutePath.unknown()
      : userId = null,
        isUnknown = true;
}

class AppRouteInformationParser extends RouteInformationParser<AppRoutePath> {
  @override
  Future<AppRoutePath> parseRouteInformation(
    RouteInformation routeInformation,
  ) async {
    final uri = Uri.parse(routeInformation.uri.toString());
    if (uri.pathSegments.length == 2 && uri.pathSegments[0] == 'users') {
      return AppRoutePath.detail(uri.pathSegments[1]);
    }
    return AppRoutePath.home();
  }

  @override
  RouteInformation? restoreRouteInformation(AppRoutePath configuration) {
    if (configuration.userId != null) {
      return RouteInformation(uri: Uri.parse('/users/${configuration.userId}'));
    }
    return const RouteInformation(uri: Uri.parse('/'));
  }
}

class AppRouterDelegate extends RouterDelegate<AppRoutePath>
    with ChangeNotifier, PopNavigatorRouterDelegateMixin<AppRoutePath> {
  final GlobalKey<NavigatorState> _navigatorKey;
  AppRouterDelegate() : _navigatorKey = GlobalKey<NavigatorState>();

  AppRoutePath _currentPath = AppRoutePath.home();
  AppRoutePath get currentPath => _currentPath;

  @override
  GlobalKey<NavigatorState> get navigatorKey => _navigatorKey;

  @override
  AppRoutePath get currentConfiguration => _currentPath;

  @override
  Widget build(BuildContext context) {
    return Navigator(
      key: navigatorKey,
      pages: [
        const MaterialPage(
          key: ValueKey('home'),
          child: HomePage(),
        ),
        if (_currentPath.userId != null)
          MaterialPage(
            key: ValueKey('user-${_currentPath.userId}'),
            child: UserProfilePage(userId: _currentPath.userId!),
          ),
      ],
      onPopPage: (route, result) {
        if (!route.didPop(result)) return false;
        _currentPath = AppRoutePath.home();
        notifyListeners();
        return true;
      },
    );
  }

  @override
  Future<void> setNewRoutePath(AppRoutePath configuration) async {
    _currentPath = configuration;
    notifyListeners();
  }
}
```

### PlatformRouteInformationProvider

`PlatformRouteInformationProvider` is the default implementation that integrates with the platform's
route information system. On the web, it reads from and writes to the browser's history API. On
mobile, it is less critical since mobile platforms do not have a URL bar.

### Why Navigator 2.0 Is Rarely Used Directly

Navigator 2.0 provides the primitives, but it requires significant boilerplate to implement
correctly. Most production apps use **GoRouter**, which wraps Navigator 2.0 in a much simpler
declarative API. Understanding Navigator 2.0 is valuable for debugging GoRouter internals or
building custom routing solutions that GoRouter cannot express.

---

## GoRouter

`go_router` is the officially recommended routing package for Flutter. It provides a declarative,
URL-based routing API built on top of Navigator 2.0.

### Basic Setup

```dart
final _router = GoRouter(
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => const HomePage(),
    ),
    GoRoute(
      path: '/settings',
      builder: (context, state) => const SettingsPage(),
    ),
  ],
);

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      routerConfig: _router,
    );
  }
}
```

### Route Structure

Routes are defined as a tree of `GoRoute` objects. Each `GoRoute` can have a `routes` array
containing child routes:

```dart
GoRoute(
  path: '/',
  builder: (context, state) => const HomePage(),
  routes: [
    GoRoute(
      path: 'profile',
      builder: (context, state) => const ProfilePage(),
    ),
    GoRoute(
      path: 'users/:id',
      builder: (context, state) {
        final id = state.pathParameters['id']!;
        return UserDetailPage(userId: id);
      },
      routes: [
        GoRoute(
          path: 'posts/:postId',
          builder: (context, state) {
            final id = state.pathParameters['id']!;
            final postId = state.pathParameters['postId']!;
            return PostDetailPage(userId: id, postId: postId);
          },
        ),
      ],
    ),
  ],
)
```

Child routes inherit their parent's path prefix. A route with `path: 'posts/:postId'` nested under
`/users/:id` has the full path `/users/:id/posts/:postId`.

### Key GoRoute Properties

- **`path`**: The URL path pattern. Must start with `/` for top-level routes; relative paths for
  nested routes.
- **`builder`**: Returns the widget for this route. Called with the `BuildContext` and a
  `GoRouterState`.
- **`redirect`**: A function that can redirect to a different path. Called before the builder.
- **`routes`**: Array of child `GoRoute` objects for nested navigation.

### Navigation Methods

GoRouter provides several methods for navigation:

```dart
context.go('/users/42');        // Replace the current location
context.push('/users/42');      // Push a new location onto the stack
context.pushReplacement('/');   // Replace the top of the stack
context.pop();                  // Pop the top of the stack
context.goNamed('userDetail', pathParameters: {'id': '42'});
```

The key difference between `go` and `push`:

- `go` replaces the current location. The back button will not return to the previous screen. This
  is analogous to "navigate" in web terms.
- `push` adds a new location on top of the stack. The back button will return to the previous
  screen.

### Named Routes

GoRouter supports named routes, which provide an alternative to path-based navigation:

```dart
GoRoute(
  name: 'userDetail',
  path: 'users/:id',
  builder: (context, state) {
    final id = state.pathParameters['id']!;
    return UserDetailPage(userId: id);
  },
);

context.goNamed('userDetail', pathParameters: {'id': '42'});
```

Named routes are useful when you want to change the URL structure without updating every navigation
call in your codebase.

---

## Path Parameters

Path parameters are dynamic segments in a URL path, denoted with a colon prefix. They allow a single
route definition to match multiple URLs with different values.

### Defining Path Parameters

```dart
GoRoute(
  path: '/users/:id',
  builder: (context, state) {
    final id = state.pathParameters['id']!;
    return UserDetailPage(userId: id);
  },
),
```

The `:id` segment matches any non-slash string and makes the matched value available in
`state.pathParameters`.

### Multiple Parameters

```dart
GoRoute(
  path: '/users/:userId/posts/:postId',
  builder: (context, state) {
    final userId = state.pathParameters['userId']!;
    final postId = state.pathParameters['postId']!;
    return PostPage(userId: userId, postId: postId);
  },
),
```

### Typed Path Parameters

`go_router` provides typed extraction utilities. While `pathParameters` always returns
`Map<String, String>`, you should parse to the expected type:

```dart
GoRoute(
  path: '/users/:id',
  builder: (context, state) {
    final id = int.tryParse(state.pathParameters['id']!);
    if (id == null) {
      return const NotFoundPage();
    }
    return UserDetailPage(userId: id);
  },
),
```

### Path Validation

Path parameters match any value that does not contain a forward slash. For stricter validation, use
the `redirect` function:

```dart
GoRoute(
  path: '/users/:id',
  redirect: (context, state) {
    final idStr = state.pathParameters['id'];
    final id = int.tryParse(idStr ?? '');
    if (id == null || id < 1) {
      return '/error';
    }
    return null; // null means no redirect
  },
  builder: (context, state) {
    final id = int.parse(state.pathParameters['id']!);
    return UserDetailPage(userId: id);
  },
),
```

### Wildcard Parameters

GoRouter supports wildcard parameters with `*`:

```dart
GoRoute(
  path: '/files/*filepath',
  builder: (context, state) {
    final filepath = state.pathParameters['filepath']!;
    return FileViewerPage(path: filepath);
  },
),
```

A wildcard matches the remainder of the path including slashes. `/files/docs/report.pdf` would match
with `filepath` equal to `docs/report.pdf`.

---

## Query Parameters

Query parameters are key-value pairs appended to a URL after a `?`, separated by `&`. They are
commonly used for filtering, pagination, and search.

### Defining Routes with Query Parameters

Routes do not include query parameters in their `path` definition. Query parameters are
automatically available in `GoRouterState`:

```dart
GoRoute(
  path: '/search',
  builder: (context, state) {
    final query = state.uri.queryParameters['q'] ?? '';
    final page = int.tryParse(state.uri.queryParameters['page'] ?? '1') ?? 1;
    final filter = state.uri.queryParameters['filter'];
    return SearchResultsPage(
      query: query,
      page: page,
      filter: filter,
    );
  },
),
```

### Building URIs with Query Parameters

When navigating programmatically, construct the URI with query parameters:

```dart
final uri = Uri(
  path: '/search',
  queryParameters: {
    'q': 'flutter navigation',
    'page': '2',
    'filter': 'recent',
  },
);
context.go(uri.toString());
```

### Accessing Query Parameters

`GoRouterState.uri` is a `Uri` object that provides full access to query parameters:

```dart
// Access individual parameters
final sort = state.uri.queryParameters['sort'];

// Access all parameters as a map
final allParams = state.uri.queryParameters;

// Handle multi-value parameters (e.g., ?tag=dart&tag=flutter)
final tags = state.uri.queryParametersAll['tag'] ?? [];
```

### Query Parameter Types

Query parameters are always strings in the URL. You must parse them to the desired type:

```dart
final page = int.tryParse(state.uri.queryParameters['page'] ?? '1') ?? 1;
final active = state.uri.queryParameters['active'] == 'true';
final limit = double.tryParse(state.uri.queryParameters['limit'] ?? '10') ?? 10.0;
```

### Preserving Query Parameters Across Navigation

GoRouter preserves query parameters when you navigate within the same route hierarchy. However, when
navigating to a completely different route, query parameters from the previous route are not carried
over. If you need to persist filter state, store it in app-level state (e.g., a Riverpod provider or
BLoC) rather than relying on query parameters.

---

## Guards and Redirects

Guards and redirects control access to routes. GoRouter provides a `redirect` function on both the
top-level `GoRouter` and individual `GoRoute` objects.

### Global Redirect

A top-level `redirect` runs for every navigation event:

```dart
final router = GoRouter(
  redirect: (context, state) {
    final isLoggedIn = authService.isLoggedIn;
    final isLoginRoute = state.matchedLocation == '/login';

    if (!isLoggedIn && !isLoginRoute) {
      return '/login?from=${state.matchedLocation}';
    }

    if (isLoggedIn && isLoginRoute) {
      return '/';
    }

    return null;
  },
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => const HomePage(),
    ),
    GoRoute(
      path: '/login',
      builder: (context, state) => const LoginPage(),
    ),
  ],
);
```

The `redirect` function returns `null` to allow navigation to proceed, or a string path to redirect
to. If the redirect returns a path that would itself be redirected, GoRouter detects the loop and
throws an error.

### Route-Level Redirect

Individual routes can have their own `redirect`:

```dart
GoRoute(
  path: '/admin',
  redirect: (context, state) {
    final role = authService.currentUser?.role;
    if (role != 'admin') {
      return '/unauthorized';
    }
    return null;
  },
  builder: (context, state) => const AdminDashboard(),
),
```

### Role-Based Access Control

Combine global and route-level redirects for a multi-tier access control system:

```dart
final router = GoRouter(
  redirect: (context, state) {
    final isLoggedIn = authService.isLoggedIn;
    final isAuthRoute = state.matchedLocation.startsWith('/auth');

    if (!isLoggedIn && !isAuthRoute) {
      return '/auth/login';
    }
    return null;
  },
  routes: [
    GoRoute(
      path: '/auth/login',
      builder: (context, state) => const LoginPage(),
    ),
    GoRoute(
      path: '/dashboard',
      builder: (context, state) => const DashboardPage(),
      routes: [
        GoRoute(
          path: 'admin',
          redirect: (context, state) {
            if (authService.currentUser?.role != 'admin') {
              return '/dashboard';
            }
            return null;
          },
          builder: (context, state) => const AdminPage(),
        ),
      ],
    ),
  ],
);
```

### Redirect Chains and Loops

GoRouter limits redirects to prevent infinite loops. By default, if a redirect triggers more than 5
consecutive redirects, GoRouter throws an error. This prevents accidental infinite redirect chains
where `/a` redirects to `/b` which redirects back to `/a`.

### Refreshing the Route List

When the authentication state changes, call `router.refresh()` to re-evaluate all redirects:

```dart
authService.addListener(() {
  router.refresh();
});
```

---

## Deep Linking

Deep linking allows an external source (a URL, another app, a push notification) to navigate
directly to a specific screen within your app, potentially with parameters.

### What Deep Links Are

A deep link is a URL that points to a specific resource inside a mobile app rather than a web page.
There are two types:

- **App links (Android) / Universal links (iOS)**: Use `https://` URLs that are verified to belong
  to your app. If the app is installed, the OS opens it; otherwise, the URL opens in the browser.
- **Custom URL schemes**: Use a custom scheme like `myapp://users/42`. These are simpler to set up
  but less secure (any app can register the same scheme).

### GoRouter Initial Location

GoRouter can start at a specific location:

```dart
final router = GoRouter(
  initialLocation: '/dashboard',
  routes: [...],
);
```

When a deep link is received, GoRouter automatically parses it and navigates to the corresponding
route.

### Handling Incoming Links on Android

Add an intent filter to `AndroidManifest.xml`:

```xml
<activity
    android:name=".MainActivity"
    android:exported="true">
    <intent-filter android:autoVerify="true">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="https" android:host="example.com" />
    </intent-filter>
</activity>
```

### Handling Incoming Links on iOS

Add an associated domain in `apple-app-site-association` (hosted on your web server) and configure
the `CFBundleURLTypes` in `Info.plist`:

```xml
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>https</string>
        </array>
    </dict>
</array>
```

### Handling Incoming Links on Web

On the web, GoRouter integrates with the browser's URL bar automatically. When a user navigates to
`https://example.com/users/42`, GoRouter parses the path and renders the corresponding widget.

### The `uni_links` Package

The `uni_links` package provides a unified API for receiving deep links on both Android and iOS:

```dart
import 'package:uni_links/uni_links.dart';

Future<void> initDeepLinks() async {
  // Handle cold start (app was not running)
  final initialUri = await getInitialUri();
  if (initialUri != null) {
    GoRouter.of(navigatorKey.currentContext!).go(initialUri.toString());
  }

  // Handle warm start (app was in background)
  uriLinkStream.listen((Uri? uri) {
    if (uri != null) {
      GoRouter.of(navigatorKey.currentContext!).go(uri.toString());
    }
  });
}
```

### Deferred Deep Linking

Deferred deep linking refers to the scenario where a user clicks a link but does not have the app
installed. The user is taken to the app store, installs the app, and then is navigated to the
originally intended content. This requires a third-party service like Firebase Dynamic Links
(deprecated), Branch.io, or Adjust to store the pending deep link and deliver it after installation.

---

## Nested Navigation

Nested navigation allows you to have multiple navigation stacks within a single screen. The most
common use case is a bottom navigation bar where each tab maintains its own navigation history.

### ShellRoute for Persistent UI

`ShellRoute` provides a persistent shell around child routes. The shell widget remains in the tree
as the user navigates between child routes:

```dart
ShellRoute(
  builder: (context, state, child) => ScaffoldWithNavBar(child: child),
  routes: [
    GoRoute(
      path: '/home',
      builder: (context, state) => const HomePage(),
    ),
    GoRoute(
      path: '/explore',
      builder: (context, state) => const ExplorePage(),
    ),
    GoRoute(
      path: '/profile',
      builder: (context, state) => const ProfilePage(),
    ),
  ],
),
```

The `ScaffoldWithNavBar` widget renders the persistent bottom navigation bar and places the `child`
in the body:

```dart
class ScaffoldWithNavBar extends StatelessWidget {
  final Widget child;
  const ScaffoldWithNavBar({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: child,
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _calculateSelectedIndex(context),
        onTap: (index) => _onItemTapped(index, context),
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.explore),
            label: 'Explore',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'Profile',
          ),
        ],
      ),
    );
  }

  int _calculateSelectedIndex(BuildContext context) {
    final location = GoRouterState.of(context).matchedLocation;
    if (location.startsWith('/home')) return 0;
    if (location.startsWith('/explore')) return 1;
    if (location.startsWith('/profile')) return 2;
    return 0;
  }

  void _onItemTapped(int index, BuildContext context) {
    switch (index) {
      case 0:
        context.go('/home');
      case 1:
        context.go('/explore');
      case 2:
        context.go('/profile');
    }
  }
}
```

### StatefulShellRoute.indexedStack

`StatefulShellRoute.indexedStack` preserves the state of each tab's navigation stack. When the user
switches tabs and comes back, the previous navigation state is restored:

```dart
StatefulShellRoute.indexedStack(
  builder: (context, state, navigationShell) {
    return ScaffoldWithNavBar(navigationShell: navigationShell);
  },
  branches: [
    StatefulShellBranch(
      routes: [
        GoRoute(
          path: '/home',
          builder: (context, state) => const HomePage(),
          routes: [
            GoRoute(
              path: 'detail/:id',
              builder: (context, state) => const HomeDetailPage(),
            ),
          ],
        ),
      ],
    ),
    StatefulShellBranch(
      routes: [
        GoRoute(
          path: '/explore',
          builder: (context, state) => const ExplorePage(),
          routes: [
            GoRoute(
              path: 'category/:name',
              builder: (context, state) => const CategoryPage(),
            ),
          ],
        ),
      ],
    ),
    StatefulShellBranch(
      routes: [
        GoRoute(
          path: '/profile',
          builder: (context, state) => const ProfilePage(),
        ),
      ],
    ),
  ],
),
```

Each `StatefulShellBranch` maintains its own `Navigator` stack. This means that if the user
navigates from `/home` to `/home/detail/5` and then switches to the Explore tab, the Home tab
retains the detail page. When the user switches back to Home, they see the detail page exactly as
they left it.

### Nested Navigation Without ShellRoute

You can also nest `Navigator` widgets manually, though this is less common with GoRouter:

```dart
class TabPage extends StatelessWidget {
  final int tabIndex;

  const TabPage({super.key, required this.tabIndex});

  @override
  Widget build(BuildContext context) {
    return Navigator(
      onGenerateRoute: (settings) {
        // Generate routes specific to this tab
      },
    );
  }
}
```

---

## Navigation Patterns

### Bottom Sheets

Bottom sheets slide up from the bottom of the screen. They are useful for selections, confirmations,
or supplementary content:

```dart
void showFilterSheet(BuildContext context) {
  showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    shape: const RoundedRectangleBorder(
      borderRadius: BorderRadius.vertical(top: Radius.circular(16)),
    ),
    builder: (context) => const FilterSheet(),
  );
}
```

### Dialogs

Dialogs are modal overlays that require user interaction:

```dart
final confirmed = await showDialog<bool>(
  context: context,
  barrierDismissible: false,
  builder: (context) => AlertDialog(
    title: const Text('Delete Item'),
    content: const Text('Are you sure you want to delete this item?'),
    actions: [
      TextButton(
        onPressed: () => Navigator.of(context).pop(false),
        child: const Text('Cancel'),
      ),
      TextButton(
        onPressed: () => Navigator.of(context).pop(true),
        child: const Text('Delete'),
      ),
    ],
  ),
);

if (confirmed == true) {
  // Delete the item
}
```

### Full-Screen Pages

A full-screen route covers the entire screen, including the status bar:

```dart
GoRoute(
  path: '/video/:id',
  pageBuilder: (context, state) => CustomTransitionPage<void>(
    key: state.pageKey,
    child: VideoPlayerPage(videoId: state.pathParameters['id']!),
    transitionsBuilder: (context, animation, secondaryAnimation, child) {
      return const SizedBox.expand(child: child);
    },
    transitionDuration: Duration.zero,
    reverseTransitionDuration: Duration.zero,
  ),
),
```

### Modal Routes

`fullscreenDialog: true` creates a route that slides in from the bottom (on iOS) and has a close
button instead of a back arrow:

```dart
Navigator.of(context).push(
  MaterialPageRoute(
    fullscreenDialog: true,
    builder: (context) => const NewTaskPage(),
  ),
);
```

In GoRouter, use `pageBuilder` with `FullScreenDialogPage`:

```dart
GoRoute(
  path: '/new',
  pageBuilder: (context, state) => const MaterialPage<void>(
    fullscreenDialog: true,
    child: NewTaskPage(),
  ),
),
```

### Returning Data from a Route

Both Navigator 1.0 and GoRouter support returning data from a route:

```dart
// With GoRouter push
final result = await context.push<String>('/select-item');
if (result != null) {
  print('Selected: $result');
}

// In the pushed route, pop with data
context.pop('selected-item-id');
```

### Custom Page Transitions

GoRouter allows custom page transitions via `pageBuilder`:

```dart
GoRoute(
  path: '/details',
  pageBuilder: (context, state) => CustomTransitionPage(
    key: state.pageKey,
    child: const DetailsPage(),
    transitionsBuilder: (context, animation, secondaryAnimation, child) {
      return SlideTransition(
        position: Tween<Offset>(
          begin: const Offset(0, 1),
          end: Offset.zero,
        ).animate(CurvedAnimation(parent: animation, curve: Curves.easeOutCubic)),
        child: child,
      );
    },
    transitionDuration: const Duration(milliseconds: 400),
  ),
),
```

---

## Common Pitfalls

### Using `go` When You Mean `push`

`context.go('/detail')` replaces the current route. If you want the user to be able to press back
and return to the previous screen, use `context.push('/detail')` instead. A common bug is using `go`
everywhere and losing the back stack, so the back button exits the app unexpectedly.

### Forgetting to Handle Null Path Parameters

`state.pathParameters['id']` returns `String?`. Forgetting the null check or the `!` assertion
causes a runtime crash:

```dart
final id = state.pathParameters['id']!; // Crashes if 'id' is missing
```

Always validate parameters in a `redirect` function before reaching the builder.

### Infinite Redirect Loops

If a redirect function returns a path that itself triggers a redirect, GoRouter detects the loop
after approximately 5 iterations and throws. Common causes:

- The login redirect sends the user to `/`, which redirects back to `/login` because the user is not
  yet authenticated (race condition with async auth state).
- Two routes redirect to each other.

### Not Calling `router.refresh()` After Auth State Changes

When the authentication state changes (user logs in or out), GoRouter's redirect functions are not
automatically re-evaluated. You must call `router.refresh()` to trigger re-evaluation. Without this,
a user who just logged in may still see the login screen.

### Using `Navigator.of(context)` Directly with GoRouter

When using GoRouter, avoid mixing Navigator 1.0 calls (`Navigator.push`, `Navigator.pop`) with
GoRouter calls (`context.go`, `context.push`). They operate on different stacks and can cause
inconsistent behavior. Always use GoRouter's API for page-level navigation.

### Not Using `GlobalKey<NavigatorState>` for Deep Links

When using GoRouter, you need a `GlobalKey<NavigatorState>` to access the navigator from outside the
widget tree (e.g., in a deep link handler). Forgetting to provide this key to `MaterialApp.router`
causes deep links to fail silently.

### Ignoring Web URL Behavior

On the web, every navigation event updates the browser's URL bar. If your routes use `push` heavily,
the browser's back button will step through each pushed route individually, which may confuse users.
Consider whether `go` is more appropriate for web.

### Over-Nesting ShellRoutes

Nesting `ShellRoute` objects more than two levels deep creates complex navigation hierarchies that
are difficult to debug. If you find yourself needing deeply nested shells, consider simplifying your
app's information architecture.

### State Loss in ShellRoute Tabs

Using a plain `ShellRoute` with `context.go()` for tab switching destroys and rebuilds the child
navigator's state. If you need to preserve each tab's navigation history, use
`StatefulShellRoute.indexedStack` instead.

### Missing `key` on Pages

When building custom pages, always provide a unique `key` (typically `state.pageKey`). Without a
stable key, Flutter may not properly animate transitions or may incorrectly reuse page state.
