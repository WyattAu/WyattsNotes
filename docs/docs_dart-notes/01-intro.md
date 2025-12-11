---
id: intro
title: Intro
description: Test description
slug: /intro
sidebar_position: 1
---

## Abstract

This resource is created as a aggregation of best practices in Dart and Flutter listed as a tutorial.

:::info

Different from other languages, the Flutter aspect is important, and GUI presentation is important, therefore when Dart code uses Flutter, compiler explorer cannot be used and Dartpad will be used.

:::

<div className="godbolt-container">
  <iframe
    width="100%"
    height="800"
    src="https://dartpad.dev/embed-inline.html?id=f6b391a0280187585c9256ef42e5d913&split=horizontal&theme=dark"
    title="Dartpad Embedded"
    sandbox="allow-scripts allow-same-origin"
    loading="lazy"
  ></iframe>
</div>

## Dart Introduction

Dart is an OOP focus programming language developed by Google, desgined for native support by compiling to native machine code with AOT (Ahead-of-Time) compilation, and fast reiteration with JIT (Just-in-Time) compilation that enables hot-reload. Parallelism in Dart relies on isolates instead of threads appraoch, which are thread-like execution units that have separate memory, therefore no state sharing is possible and rely on messaging when communcation between isolates are needed. Memory management in Dart relies on garbage collector, with no direct memory access allowed.

## Flutter Introduction

Flutter is a multi-platform (IOS, Android, Windows, macOS, Linux, web) UI Framework. Flutter rely heavily on immutable widgets, with lifecycle, state, and layout handled by Impeller (Flutter 3.29+). Developing Flutter relies heavily on widget compositions and core primitives.

## Typical Toolchain Required

- Dart SDK
  - Includes VM, core libraries, analyzer, and Dart CLI
- Flutter SDK
  - Provide Impeller support and Flutter CLI
- Pub
  - Package manager similar to `conan` for C++
