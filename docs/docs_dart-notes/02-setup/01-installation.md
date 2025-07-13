---
title: Installation
date: 2025-07-12T15:51:40.399Z
tags:
  - Dart
categories:
  - Dart
slug: installation
---

## IDE choice

My recommended IDE for Dart is modifying the text editor VSCode with Dart and Flutter extensions:

- `dart-code.dart-code`
- `dart-code.flutter`
- `alexisvt.flutter-snippets`

## Installation guide

1. Ensure VSCode, the extensions, and git is installed and updated.
2. Launch VSCode and open command palette (`crtl+shift+P`)
3. With the `dart-code.flutter` installed, typing `flutter` in command palette shows a command of `Flutter: New Project`.
4. VSCode will now prompt you to locate your Flutter SDK, select `Download SDK` which automatically installs the Flutter SDK and adds to PATH, _Remember to choose a location that doesnt require elevated priviledges_.
5. Now type `flutter doctor` in the terminal and resolve any missing SDK or packages
   1. I would recommend installing android sdk from android studio
   2. I would also recommend installing Visual Studio if windows development is needed.
   3. If the developement platform is Windows, the path may not have added correctly, include the android sdk, dart sdk and flutter sdk in path.
