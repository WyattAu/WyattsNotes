---
title: Entry Point
date: 2025-07-12T15:49:11.104Z
tags:
  - Dart
categories:
  - Dart
slug: entry-point
---

## Program Entry

When the project creates an executable, the entry point of the project is located in `main()`, where the default is given as:

```dart
void main(){
  runApp(const MyApp());
}
```

This can be find in `lib/main.dart` along with other source code.

:::info

Inside the `main()` function, there is the `runApp()` function which bootstrap the application by initializing the framework and attaching the root widget the render tree. This is perform by:

```dart
void runApp(Widget app) {
  final WidgetsBinding binding = WidgetsFlutterBinding.ensureInitialized();
  _runWidget(binding.wrapWithDefaultView(app), binding, 'runApp');
}
```

- `WidgetsFlutterBinding.ensureInitialized();` creates the binders required (`GestureBinding`, `RendererBinding`, `SchedulerBinding`, `WidgetsBinding`)
- This `binding` is pass into `_runWidget`
- The widget (app) passed in will be wrapped with a `View` widget, this widget will now be the root widget and be rendered through the `RendererBinding`
- This now calls the `mount()` function which recursively adds the child elements and instantiates `RenderObject` for each `RenderObjectWidget`.
- `SchedulerBinding.scheduleFrame()` hooks into `window.onDrawFrame`
- The event loop will now initialize, each loop will update render objects and draw schedule frames.

:::
