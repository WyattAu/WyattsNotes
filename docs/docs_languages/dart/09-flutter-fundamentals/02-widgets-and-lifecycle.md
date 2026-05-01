---
title: Widgets and Lifecycle
description:
  Widgets and Lifecycle — 1. What is a Widget; 2. Widget Types; StatelessWidget;
  StatefulWidget with worked examples and exam-style questions.
date: 2026-04-05T00:00:00.000Z
tags:
  - Dart
categories:
  - Dart
slug: widgets-and-lifecycle
---

# Widgets and Lifecycle

## 1. What is a Widget

Flutter's rendering model is declarative. You do not mutate a view object in place; you describe
what the UI should look like for a given state, and the framework diffs that description against the
current tree and applies the minimal set of changes. A **widget** is the immutable data structure
that carries that description.

A widget is a **blueprint**, not a visual element. When you write `const Text('hello')`, you have
created a configuration object that says "render the string 'hello' with default typography." The
framework then instantiates an `Element` from that widget, and that Element may in turn create a
`RenderObject` that actually performs layout, hit-testing, and painting.

The critical mental model:

| Layer          | Responsibility                                | Mutability         |
| -------------- | --------------------------------------------- | ------------------ |
| `Widget`       | Immutable configuration / description         | Always immutable   |
| `Element`      | Tree node that manages lifecycle, holds state | Mutable (internal) |
| `RenderObject` | Layout, painting, hit-testing                 | Mutable (internal) |

When you call `setState()`, the framework marks the owning `Element` as dirty. On the next frame,
the framework calls `build()` on that Element, which produces a **new** Widget tree. The framework
then reconciles the new widget tree against the old one at the Element level, reusing Elements where
possible and destroying/recreating them where the widget type or key changes.

This reconciliation is why widget identity matters. If you return a widget of the same `runtimeType`
and `key` from `build()`, the framework reuses the existing Element. If either changes, the old
Element is unmounted and a new one is created. This is the foundational reason why `const`
constructors, keys, and widget splitting all affect performance.

The tree structure is a tripartite forest:

```
Widget tree  (transient, rebuilt every frame)
   │
   ▼
Element tree (persistent across rebuilds, owns lifecycle)
   │
   ▼
RenderObject tree (persistent, handles layout/paint/hit-test)
```

The Widget tree exists only as a momentary configuration snapshot. The Element tree is the actual
persistent tree that the framework walks during layout and paint. The RenderObject tree is a subset
of the Element tree (only elements that need layout/paint create RenderObjects; structural elements
like `Column`, `Builder`, or `InheritedWidget` do not).

## 2. Widget Types

### StatelessWidget

An immutable widget whose configuration is fully determined by its constructor arguments. It has no
mutable internal state. The framework calls `build(BuildContext)` once per configuration change.

```dart
class TemperatureDisplay extends StatelessWidget {
  const TemperatureDisplay({super.key, required this.celsius});

  final double celsius;

  @override
  Widget build(BuildContext context) {
    return Text('${celsius.toStringAsFixed(1)}°C');
  }
}
```

Use `StatelessWidget` when the widget's output depends solely on its constructor arguments and data
obtained from ancestor widgets (via `BuildContext`, e.g., `Theme.of(context)`). The build method
should be a pure function of its inputs.

### StatefulWidget

A widget that delegates its mutable state to a separate `State` object. The `createState()` factory
method is called once when the widget is inserted into the tree. The `State` object persists across
rebuilds even when the parent supplies a new `StatefulWidget` instance with updated fields.

```dart
class Counter extends StatefulWidget {
  const Counter({super.key});

  @override
  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int _count = 0;

  @override
  Widget build(BuildContext context) {
    return Text('Count: $_count');
  }
}
```

The separation between `StatefulWidget` (immutable config) and `State` (mutable lifecycle) is
deliberate: it allows the framework to swap a new widget config into an existing State object when
the parent rebuilds. This is why `didUpdateWidget` receives the old widget — the current widget is
already available as `widget`.

### InheritedWidget

A widget that establishes a shared data scope accessible by all descendants. When the
InheritedWidget rebuilds, the framework efficiently notifies only those descendants that registered
a dependency (via `context.dependOnInheritedWidgetOfExactType`).

```dart
class ThemeConfiguration extends InheritedWidget {
  const ThemeConfiguration({
    super.key,
    required this.primaryColor,
    required super.child,
  });

  final Color primaryColor;

  static ThemeConfiguration of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<ThemeConfiguration>()!;
  }

  @override
  bool updateShouldNotify(ThemeConfiguration oldWidget) {
    return primaryColor != oldWidget.primaryColor;
  }
}
```

The `updateShouldNotify` method is the critical optimization gate. Return `true` only when the data
that descendants care about has actually changed. If you return `true` unnecessarily, every
dependent descendant rebuilds on every ancestor rebuild, which cascades into severe performance
degradation.

### ProxyWidget

A widget whose child is provided by another source. The canonical examples are `InheritedWidget`
(child comes from the constructor) and `ParentDataWidget` (which modifies the parent data of its
child in a `MultiChildRenderObjectElement`). You rarely implement `ProxyWidget` directly.

### PreferredSizeWidget

An interface (`PreferredSizeWidget`) implemented by widgets like `AppBar` that communicate their
preferred size to parent widgets (typically `Scaffold`). This allows `Scaffold` to reserve the
correct amount of space in the layout without the AppBar needing to measure itself during the layout
phase.

### const Widgets

When a widget constructor is invoked with `const`, the Dart VM canonicalizes the instance at compile
time. Every `const SizedBox(height: 8)` in your codebase resolves to the **same object identity** in
memory. This means the framework can skip the entire `==` / `runtimeType` check during
reconciliation — it performs a pointer identity check, which is O(1) and branch-predictor friendly.

## 3. BuildContext

`BuildContext` is not a class you instantiate. It is an **abstract interface** implemented by
`Element`. When you receive a `BuildContext` inside `build()`, you are holding a handle to the
`Element` that owns the widget currently being built. This handle represents that element's position
in the tree.

### What BuildContext Provides

- **Ancestor lookups**: `Theme.of(context)`, `MediaQuery.of(context)`, `Navigator.of(context)` — all
  walk up the Element tree to find the nearest `InheritedWidget` of the target type.
- **Dependency registration**: `dependOnInheritedWidgetOfExactType` both looks up the ancestor and
  registers the current element as a dependent, so the element rebuilds when the inherited widget
  changes.
- **Finding RenderObject**: `findRenderObject()` returns the `RenderObject` associated with this
  element (or null if the element has no render object).

### Why You Cannot Store BuildContext

`BuildContext` is valid only while the Element is active in the tree. After `deactivate()` or
`dispose()`, the context is no longer valid. If you store a context and use it in an async gap
(e.g., after `await`), the element may have been unmounted, causing a `debugWidgetBuilder` assertion
or, in release mode, silent corruption.

```dart
class _BadState extends State<Widget> {
  late BuildContext _savedContext;

  @override
  void initState() {
    super.initState();
    _savedContext = context;
    Future.delayed(const Duration(seconds: 5), () {
      // context may be invalid here if the widget was removed
      ScaffoldMessenger.of(_savedContext).showSnackBar(
        const SnackBar(content: Text('This may crash')),
      );
    });
  }
}
```

Instead, check `mounted` before using a stored context:

```dart
if (mounted) {
  ScaffoldMessenger.of(context).showSnackBar(
    const SnackBar(content: Text('Safe')),
  );
}
```

The `mounted` property on `State` returns `true` only while the State object is attached to an
Element in the tree. Once `dispose()` is called, `mounted` becomes `false` and never reverts.

### lookup for InheritedWidget

In Flutter 3.10+, `context.lookup<T>()` provides a non-depended-upon lookup of the nearest ancestor
of type `T` in the Element tree. Unlike `dependOnInheritedWidgetOfExactType`, this does **not**
register a dependency — meaning the calling element will **not** rebuild when the ancestor changes.
Use this when you need to read a value once without subscribing to updates.

## 4. StatelessWidget Lifecycle

The lifecycle of a `StatelessWidget` is trivial because there is no state to manage:

```
Constructor called (with optional const)
        │
        ▼
Element created (StatelessElement)
        │
        ▼
build() called
        │
        ▼
Widget removed from tree
        │
        ▼
Element unmounted (no dispose hook)
```

There is no `initState`, `dispose`, or `didUpdateWidget`. The `build()` method is called every time
the parent provides a new widget configuration with different constructor arguments (or the
framework cannot prove equivalence via `==`).

### const Constructors for Optimization

If you can construct a `StatelessWidget` with `const`, the framework can skip the reconciliation
step entirely when the same const instance appears in consecutive builds. This is because pointer
identity (`identical(oldWidget, newWidget)`) is checked first, before any `runtimeType` or `==`
comparison.

```dart
// Good: same instance every time
const child = SizedBox(height: 8);
Column(children: [child, child, child]);

// Bad: three different instances
Column(children: [
  SizedBox(height: 8),
  SizedBox(height: 8),
  SizedBox(height: 8),
]);
```

### When to Use StatelessWidget

Use `StatelessWidget` when:

- The widget's visual output is a pure function of its constructor arguments.
- The widget does not own any mutable resources (controllers, animations, timers).
- The widget reads data from ancestors via `BuildContext` but does not modify them.

If you find yourself wanting an `initState` or `dispose`, you need a `StatefulWidget`.

## 5. StatefulWidget Lifecycle

This is the full lifecycle, in execution order:

```
createState()                    ← called once when widget is inserted
        │
        ▼
initState()                      ← first method on the State object
        │
        ▼
didChangeDependencies()          ← called when inherited dependencies change
        │
        ▼
build()                          ← called every time state/dependencies change
        │
        ▼
didUpdateWidget(covariant oldWidget) ← called when parent rebuilds with new config
        │
        ▼
setState() called                 ← marks element dirty, schedules rebuild
        │
        ▼
deactivate()                     ← element removed from tree (may be reinserted)
        │
        ▼
dispose()                        ← permanent removal, release resources
```

### createState()

Called by the framework when the `StatefulWidget` is inserted into the tree. This is the only place
where the `State` object is instantiated. The `State` object is then associated with the `Element`
and persists as long as that `Element` remains in the tree — even across parent rebuilds that supply
a new `StatefulWidget` instance.

### initState()

Called exactly once, immediately after the `State` object is created and before the first `build()`.
This is where you:

- Initialize controllers (`TextEditingController`, `AnimationController`, `ScrollController`).
- Subscribe to streams or notification listeners.
- Set up timers.
- Perform one-time computations.

You **cannot** use `context.dependOnInheritedWidgetOfExactType` here because the element has not yet
been registered as a dependency. Use `didChangeDependencies()` for that.

### didChangeDependencies()

Called immediately after `initState()` and subsequently whenever a dependency obtained via
`BuildContext` changes. A "dependency" is an `InheritedWidget` that was looked up using
`dependOnInheritedWidgetOfExactType` (which is what `Theme.of`, `MediaQuery.of`, etc. do
internally).

```dart
@override
void didChangeDependencies() {
  super.didChangeDependencies();
  _mediaQuery = MediaQuery.of(context);
}
```

If you do not call any `of(context)` methods, this method is still called once after `initState()`
but will not be triggered again unless you later register a dependency.

### build()

Called after `initState()`, `didChangeDependencies()`, and after every `setState()`. Must return a
Widget. Should be a pure function of `this.state` and `this.widget` (and any inherited data). Must
not have side effects — do not call `setState()` inside `build()`.

### didUpdateWidget(covariant oldWidget)

Called when the parent rebuilds and provides a new `StatefulWidget` instance. The framework has
already updated `widget` to the new instance. `oldWidget` is the previous configuration. Use this to
react to configuration changes that require state adjustments:

```dart
@override
void didUpdateWidget(covariant MyWidget oldWidget) {
  super.didUpdateWidget(oldWidget);
  if (widget.dataSource != oldWidget.dataSource) {
    _controller.clear();
    _loadData(widget.dataSource);
  }
}
```

### deactivate()

Called when the element is removed from the tree. The element **might** be reinserted (e.g., when
moved to a different position in the tree via a key change). If reinserted, the framework calls
`initState()` again (actually, it reuses the State object and calls `didChangeDependencies()` then
`build()`). Do not release resources here — use `dispose()`.

### dispose()

Called when the element is permanently removed from the tree. This is your last chance to release
resources:

- Dispose controllers (`_controller.dispose()`).
- Cancel subscriptions (`_subscription.cancel()`).
- Cancel timers (`_timer.cancel()`).
- Remove listeners.

After `dispose()`, `mounted` is `false`. You must not call `setState()` after `dispose()`.

## 6. setState

### How setState Works

When you call `setState()`, the following occurs:

1. The callback is executed synchronously (state is mutated immediately).
2. The framework calls `markNeedsBuild()` on the owning `Element`.
3. `markNeedsBuild()` adds the element to the `_dirtyElements` list on `WidgetsBinding`.
4. `WidgetsBinding` schedules a frame via `SchedulerBinding.scheduleFrame()`.
5. On the next frame, `buildScope` iterates over dirty elements in depth-first order and calls
   `rebuild()` on each.
6. `rebuild()` invokes `performRebuild()` which calls your `build()` method.

The rebuild is deferred — it does not happen synchronously inside `setState()`. This means you can
call `setState()` multiple times within a single event handler, and only one rebuild occurs.

### Common Mistakes

**Calling setState after dispose:**

```dart
_timer = Timer(Duration(seconds: 5), () {
  if (!mounted) return; // Must check
  setState(() { _value = 42; });
});
```

**Calling setState during build:**

```dart
@override
Widget build(BuildContext context) {
  setState(() { _x = 1; }); // Throws: setState() or markNeedsBuild() called during build
  return Container();
}
```

This causes an infinite loop because `setState()` triggers `build()`, which calls `setState()`
again.

**setState callback vs imperative state changes:**

The `setState` callback should only contain synchronous state mutations. If you need to await an
async operation, call `setState` after the await completes:

```dart
Future<void> _fetch() async {
  final result = await _api.getData();
  if (!mounted) return;
  setState(() { _data = result; });
}
```

### State Object Identity

The `State` object associated with a `StatefulWidget` persists across parent rebuilds. When the
parent rebuilds and constructs a new `MyWidget(foo: 2)` to replace `MyWidget(foo: 1)`, the framework
reuses the existing `State` object and calls `didUpdateWidget`. The `State` object is only discarded
if the `Element` is removed from the tree or if the widget's `runtimeType` or `key` changes.

This is why fields in `State` survive rebuilds while fields in the widget do not. The widget is
re-instantiated every build; the state persists.

## 7. Keys

Keys provide a secondary identity criterion for widgets. During reconciliation, the framework
matches old and new children by `(runtimeType, key)`. If two widgets have the same `runtimeType` but
different keys, the framework treats them as different widgets — the old Element is unmounted and a
new one is created.

### ValueKey&lt;T&gt;

Identity by value equality. The `T` must implement `==` and `hashCode`. Use when the widget's
identity is tied to a data value:

```dart
ListView(
  children: items.map((item) => ListTile(
    key: ValueKey&lt;String&gt;(item.id),
    title: Text(item.name),
  )).toList(),
)
```

Use `ValueKey<String>` for IDs, `ValueKey<int>` for indices (only when the list order is stable).

### UniqueKey

Generates a unique identity every time it is constructed. Every rebuild creates a new `UniqueKey`,
which forces the framework to create a new Element. This is almost never what you want in a
production list — it defeats element reuse entirely. Use sparingly, typically to force a widget to
fully rebuild (e.g., resetting animation state).

### GlobalKey

Provides identity that is global across the entire widget tree. Only one widget in the tree can have
a given `GlobalKey` at any time. Global keys enable:

- **Accessing State**: `globalKey.currentState` gives you the `State` object, allowing you to call
  methods on it.
- **Accessing Element**: `globalKey.currentContext` gives you the `BuildContext`.
- **Accessing RenderObject**: `globalKey.currentContext!.findRenderObject()`.
- **Moving widgets across subtrees**: A widget with a `GlobalKey` can be moved from one parent to
  another without losing its state, because the framework re-parents the existing Element.

```dart
final _formKey = GlobalKey&lt;FormState&gt;();

Form(
  key: _formKey,
  child: Column(children: [...]),
);

// Later, in a button callback:
void _submit() {
  if (_formKey.currentState!.validate()) {
    _formKey.currentState!.save();
  }
}
```

Global keys are expensive — they require O(1) lookups in a global hash map during every rebuild. Do
not use them inside `ListView.builder` or other lazily-built lists. They also prevent garbage
collection of the Element until the key is nulled out or reassigned.

### ObjectKey

Identity by object identity (`identical()`). Use when the widget should be matched by the exact
object reference, not by value equality. This is rare but useful when your data objects do not
implement `==`/`hashCode` and you want stability tied to the object itself.

### When to Use Each Key Type

| Scenario                        | Key Type                |
| ------------------------------- | ----------------------- |
| List items with unique IDs      | `ValueKey<String>`      |
| Stable list with fixed order    | `ValueKey<int>` (index) |
| Force full widget rebuild       | `UniqueKey`             |
| Access State from outside       | `GlobalKey`             |
| Cross-subtree reparenting       | `GlobalKey`             |
| Objects without `==`/`hashCode` | `ObjectKey`             |

### Common Key Pitfalls

- **Using index-based keys on reorderable lists**: When items are reordered, indices shift, causing
  the framework to mismatch states. Always use value-based keys for reorderable lists.
- **GlobalKey in a builder**: `GlobalKey` inside `ListView.builder` causes severe performance issues
  and state leaks. Use `ValueKey` instead.
- **Forgetting keys entirely on homogeneous lists**: Without keys, inserting at the top of a list
  causes every element to reuse the wrong state.

## 8. const Widgets

### How const Works in Dart

The `const` keyword instructs the Dart compiler to create a canonicalized instance. All `const`
expressions with the same constructor and arguments evaluate to the identical object in memory:

```dart
const a = SizedBox(height: 8);
const b = SizedBox(height: 8);
assert(identical(a, b)); // true — same object
```

For Flutter's reconciliation, `identical(oldWidget, newWidget)` is the cheapest possible check. When
it returns `true`, the framework skips the entire update process — no `didUpdateWidget`, no
`build()` call on the child.

### When to Use const

Use `const` on every widget constructor where all arguments are compile-time constants. This
includes:

- `const SizedBox()`, `const EdgeInsets.all(16)`, `const EdgeInsets.symmetric(horizontal: 16)`
- `const Text('static string')` (only when the string is a literal)
- `const Color(0xFF000000)`
- `const Duration(seconds: 1)`
- `const Icon(Icons.add)`

Do not use `const` when arguments are runtime values:

- `const Text(dynamicValue)` — compilation error
- `const SizedBox(height: computedHeight)` — compilation error

### Performance Impact

The performance impact of `const` is measurable but often overstated for leaf widgets. The primary
benefit is reducing GC pressure (fewer short-lived widget objects) and skipping reconciliation work.
In deeply nested lists or frequently rebuilt subtrees, `const` on leaf widgets (like `SizedBox`,
`Padding`, `Divider`) can meaningfully reduce frame build time.

However, `const` does not eliminate rebuilds of the parent. If a `StatefulWidget` calls
`setState()`, its `build()` runs regardless of whether the returned children are `const`. The
benefit is that the framework can cheaply determine that those children haven't changed and skip
their subtree reconciliation.

### const and Keys

`const` widgets can have keys, but the key must also be const:

```dart
const child = SizedBox(key: ValueKey('spacer'), height: 8);
```

If the key is not const (e.g., `ValueKey(dynamicValue)`), the constructor cannot be const.

## 9. Common Widgets

### Layout

| Widget       | Purpose                                                            | Key Properties                                                         |
| ------------ | ------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| `Container`  | Convenience box with padding, margin, decoration, constraints      | `padding`, `margin`, `decoration`, `constraints`, `alignment`, `color` |
| `Padding`    | Adds empty space inside a parent                                   | `padding` (EdgeInsets)                                                 |
| `Align`      | Aligns child within itself                                         | `alignment`, `widthFactor`, `heightFactor`                             |
| `Center`     | Centers child (shorthand for `Align(alignment: Alignment.center)`) | `widthFactor`, `heightFactor`                                          |
| `Expanded`   | Forces child to fill remaining space in `Flex`                     | `flex`, `child`                                                        |
| `Flexible`   | Like `Expanded` but allows child to be smaller                     | `flex`, `fit` (tight/loose)                                            |
| `SizedBox`   | Box with specific dimensions                                       | `width`, `height`, `child`                                             |
| `Wrap`       | Flow layout (wraps to next line)                                   | `direction`, `spacing`, `runSpacing`, `alignment`                      |
| `Stack`      | Overlapping children                                               | `alignment`, `fit`, `clipBehavior`                                     |
| `Positioned` | Positions child within `Stack`                                     | `top`, `right`, `bottom`, `left`, `width`, `height`                    |
| `Row`        | Horizontal flex layout                                             | `mainAxisAlignment`, `crossAxisAlignment`, `mainAxisSize`              |
| `Column`     | Vertical flex layout                                               | `mainAxisAlignment`, `crossAxisAlignment`, `mainAxisSize`              |

### Visual Effects

| Widget          | Purpose                                                                | Key Properties                                                  |
| --------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------- |
| `Transform`     | Applies a matrix transform before painting                             | `transform`, `alignment`, `origin`                              |
| `Opacity`       | Makes child partially transparent                                      | `opacity`, `alwaysIncludeSemantics`                             |
| `Visibility`    | Hides child but reserves layout space (or collapses)                   | `visible`, `maintainSize`, `maintainAnimation`, `maintainState` |
| `AbsorbPointer` | Absorbs hit-testing (child and descendants don't receive events)       | `absorbing`, `child`                                            |
| `IgnorePointer` | Ignores hit-testing on itself but descendants can still receive events | `ignoring`, `child`                                             |

### Utility

| Widget          | Purpose                                                                    |
| --------------- | -------------------------------------------------------------------------- |
| `LayoutBuilder` | Provides parent constraints via `BoxConstraints` in a builder callback     |
| `MediaQuery`    | Accesses screen size, pixel ratio, text scale factor, padding, view insets |
| `Theme`         | Provides a `ThemeData` subtree to descendants                              |
| `Icon`          | Renders an icon from a font (Material or custom)                           |
| `Image`         | Displays an image from asset, network, file, or memory                     |

### Container Internals

`Container` is a composite widget that wraps multiple other widgets. When you set `color`, it uses a
`DecoratedBox` with a `BoxDecoration(color: ...)`. When you set `padding`, it wraps the child in a
`Padding`. When you set both `margin` and `padding`, it wraps in `Padding(margin: ...)` then
`DecoratedBox(padding: ...)`. If you only need one property, prefer the specific widget (e.g.,
`Padding` instead of `Container(padding: ...)` with no other properties) to avoid unnecessary
nesting.

### Expanded vs Flexible

`Expanded` is `Flexible(fit: FlexFit.tight)`. A tight `FlexFit` forces the child to fill the
allocated space. A loose `FlexFit` allows the child to be smaller than the allocated space. Use
`Expanded` when the child should fill the remaining space. Use `Flexible` when the child should
participate in flex distribution but may not need all the space (e.g., a `Row` where one child
should shrink-wrap).

### Stack and Positioned

`Stack` lays children on top of each other. `Positioned` children are placed at absolute offsets
within the stack. Non-positioned children are laid out by the stack's `alignment` property.
`Positioned.fill()` is a convenience for `Positioned(top: 0, right: 0, bottom: 0, left: 0)`.

## 10. The Element Tree

### The Three Trees

Flutter maintains three parallel trees. Understanding their relationship is essential for debugging
performance issues, understanding lifecycle methods, and knowing why certain operations are cheap or
expensive.

```
Widget  ──configures──►  Element  ──owns──►  RenderObject
 (blueprint)            (tree node)            (layout/paint)
```

- **Widget**: Immutable, short-lived, created every build. Cheap to allocate. Contains
  `createElement()` which creates the corresponding Element.
- **Element**: Persistent, mutable. Created once per tree insertion. Manages the lifecycle
  (initState, dispose, etc.). Implements `build()` (delegates to widget.build). Owns the
  RenderObject (if applicable).
- **RenderObject**: Handles layout (`performLayout`), painting (`paint`), and hit-testing
  (`hitTest`). Mutated during layout, painted during the paint phase. Not all Elements have
  RenderObjects (e.g., `ComponentElement` subclasses like `StatelessElement` and `StatefulElement`
  do not).

### Element Types

| Element Type                     | Corresponding Widget            | Has RenderObject? |
| -------------------------------- | ------------------------------- | ----------------- |
| `StatelessElement`               | `StatelessWidget`               | No                |
| `StatefulElement`                | `StatefulWidget`                | No                |
| `InheritedElement`               | `InheritedWidget`               | No                |
| `SingleChildRenderObjectElement` | `SingleChildRenderObjectWidget` | Yes               |
| `MultiChildRenderObjectElement`  | `MultiChildRenderObjectWidget`  | Yes               |
| `LeafRenderObjectElement`        | `LeafRenderObjectWidget`        | Yes               |

### How Reconciliation Works

When `build()` returns a new widget, the framework compares it against the old widget at each
position in the child list:

1. **Same runtimeType, same key** → reuse Element, call `update()` (which calls `didUpdateWidget` on
   StatefulElements, then `build()`).
2. **Different runtimeType or different key** → unmount old Element (calls `deactivate` →
   `dispose`), create new Element (calls `createstate` → `initState` → `build`).
3. **Child list diff** → uses a greedy algorithm (O(n) for most cases) that matches by
   `(runtimeType, key)` from the head of both old and new lists, then from the tail.

### InheritedElement and Propagation

`InheritedElement` overrides `notifyClients()` to iterate over its registered dependents (stored in
`_dependents`, a map of `Element → Object?`). When an `InheritedWidget`'s `updateShouldNotify`
returns `true`, the `InheritedElement` calls `notifyClients`, which marks each dependent element as
dirty. This is the mechanism by which `Theme.of(context)`, `Provider.of(context)`, and similar APIs
trigger targeted rebuilds.

### Why This Matters for Debugging

- **Excessive rebuilds**: Profile with Flutter DevTools' "Repaint Rainbow" or the
  `debugPrintRebuildDirtyFrames` flag. If a subtree rebuilds too often, check whether it has
  unnecessary dependencies on InheritedWidgets (e.g., depending on `MediaQuery` when you only need
  the theme).
- **Missing dispose**: If a `RenderObject`-backed widget leaks (e.g., animation controller not
  disposed), the Element and its RenderObject remain in memory even after the widget is removed from
  the tree.
- **Deep trees**: Each Element in the tree adds overhead to reconciliation. Flattening widget trees
  (replacing nested `Padding` widgets with a single `Container` or `Padding` with an `EdgeInsets`
  that combines margins) reduces traversal cost.

## 11. Common Pitfalls

### Storing BuildContext

As discussed in Section 3, storing `BuildContext` beyond the synchronous scope of a method is
unsafe. After `deactivate()`, the context is no longer valid. Always check `mounted` before using a
context captured in a closure or async continuation.

```dart
void _handleAsync() async {
  final result = await _service.fetch();
  if (!mounted) return;
  setState(() { _data = result; });
}
```

### Calling setState After dispose

This occurs most frequently with timers, animations, and stream subscriptions that outlive the
widget's lifetime. The fix is always one of:

- Cancel the resource in `dispose()`.
- Check `mounted` before calling `setState()`.
- Both.

```dart
late final StreamSubscription _sub;

@override
void initState() {
  super.initState();
  _sub = _stream.listen((data) {
    if (!mounted) return;
    setState(() { _data = data; });
  });
}

@override
void dispose() {
  _sub.cancel();
  super.dispose();
}
```

### Using StatefulWidgets When StatelessWidget Suffices

A common anti-pattern is wrapping every widget in a `StatefulWidget` "just in case." This adds
memory overhead (the `State` object and its `Element`) and makes the code harder to reason about.
Start with `StatelessWidget`. Convert to `StatefulWidget` only when you have a concrete need for
mutable state, lifecycle hooks, or controller ownership.

A useful heuristic: if the widget's `build()` output changes only in response to parent rebuilds
(i.e., the parent passes new constructor arguments), use `StatelessWidget`. If the widget's output
can change independently (e.g., an animation tick, a timer, user input), use `StatefulWidget`.

### Key Placement in Lists

When using `ListView`, `Column`, or `Row` with a list of children of the same type, omitting keys
causes the framework to match children by position. This works fine for static lists but breaks when
items are added, removed, or reordered:

```dart
// Bad: inserting at index 0 reuses all existing elements with wrong state
Column(children: [
  _buildItem(newItem), // inserted at top
  _buildItem(items[0]), // framework thinks this is the same as old items[0]
  _buildItem(items[1]),
]);

// Good: value keys ensure correct element reuse
Column(children: [
  _buildItem(newItem, key: ValueKey(newItem.id)),
  _buildItem(items[0], key: ValueKey(items[0].id)),
  _buildItem(items[1], key: ValueKey(items[1].id)),
]);
```

### Unnecessary Rebuilds

The primary sources of unnecessary rebuilds:

1. **Not splitting widgets**: If a `build()` method returns a large subtree but only part of it
   depends on changing state, split the changing part into a separate widget. Only the separate
   widget rebuilds on `setState()`.

```dart
// Bad: entire Column rebuilds on every counter change
class _MyState extends State<MyWidget> {
  int _count = 0;
  @override
  Widget build(BuildContext context) {
    return Column(children: [
      Text('Count: $_count'),
      ExpensiveStaticChild(), // this rebuilds too!
    ]);
  }
}

// Good: only CounterDisplay rebuilds
class _MyState extends State<MyWidget> {
  int _count = 0;
  @override
  Widget build(BuildContext context) {
    return Column(children: [
      CounterDisplay(count: _count),
      ExpensiveStaticChild(), // const-eligible, never rebuilds
    ]);
  }
}
```

2. **Missing const constructors**: Without `const`, every rebuild creates new widget instances,
   forcing the framework to do full reconciliation. With `const`, the framework can skip
   reconciliation via pointer identity.

3. **Over-depending on InheritedWidgets**: If a widget calls `Theme.of(context)` inside `build()`
   but does not actually use theme data in its output, it still registers as a dependent and
   rebuilds whenever the theme changes. Extract the theme lookup to a parent widget if possible.

### dispose() for Cleanup

Every `State` object that creates disposable resources must release them in `dispose()`:

| Resource                 | Cleanup Method                   |
| ------------------------ | -------------------------------- |
| `TextEditingController`  | `_controller.dispose()`          |
| `ScrollController`       | `_scrollController.dispose()`    |
| `AnimationController`    | `_animationController.dispose()` |
| `StreamSubscription`     | `_subscription.cancel()`         |
| `Timer`                  | `_timer.cancel()`                |
| `FocusNode`              | `_focusNode.dispose()`           |
| `ChangeNotifier` (owned) | `_notifier.dispose()`            |
| `PageController`         | `_pageController.dispose()`      |

Failing to dispose controllers causes memory leaks. The controller holds references to listeners,
which hold references to `State` objects, which hold references to `Element` objects, which hold
references to `RenderObject` objects. The entire subtree remains in memory.

### setState During Build

Calling `setState()` during `build()` throws a `FlutterError`. This is because the framework is
already in the process of building — marking the element dirty again creates a contradiction. If you
need to trigger a rebuild as a side effect of building, defer it:

```dart
WidgetsBinding.instance.addPostFrameCallback((_) {
  if (mounted) setState(() { /* ... */ });
});
```

However, this is almost always a design smell. Re-examine why you need to mutate state during build.
Common root causes include:

- Derived state that should be computed in `build()` instead of stored.
- Side effects that belong in `didChangeDependencies()` or `didUpdateWidget()`.
- Initialization logic that belongs in `initState()`.

### Using context.dependOnInheritedWidgetOfExactType in initState

This throws because the element is not yet registered in the tree during `initState()`. Move the
lookup to `didChangeDependencies()`:

```dart
@override
void initState() {
  super.initState();
  // BAD: Theme.of(context) here will throw
}

@override
void didChangeDependencies() {
  super.didChangeDependencies();
  _theme = Theme.of(context); // GOOD
}
```

Note that in modern Flutter (2.3+), this restriction is somewhat relaxed — you can use `context` in
`initState()` for non-dependent lookups, but `Theme.of`, `MediaQuery.of`, etc. still fail because
they internally call `dependOnInheritedWidgetOfExactType`.
