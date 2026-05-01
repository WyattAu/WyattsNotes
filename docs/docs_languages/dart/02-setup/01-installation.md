---
title: Installation
description:
  Installation — IDE choice; Standalone Dart SDK; macOS; Linux (Debian/Ubuntu)
  with worked examples and exam-style questions.
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

## Standalone Dart SDK

If you do not need Flutter (server-side Dart, CLI tools, scripts), install only the Dart SDK.

### macOS

```bash
brew tap dart-lang/dart
brew install dart
```

Or download the archive directly from https://dart.dev/get-dart

```bash
curl -O https://storage.googleapis.com/dart-archive/channels/stable/release/latest/sdk/dartsdk-macos-x64-release.zip
unzip dartsdk-macos-x64-release.zip -d ~/development
export PATH="$PATH:$HOME/development/dart-sdk/bin"
```

For Apple Silicon:

```bash
curl -O https://storage.googleapis.com/dart-archive/channels/stable/release/latest/sdk/dartsdk-macos-arm64-release.zip
```

### Linux (Debian/Ubuntu)

```bash
sudo apt update
sudo apt install apt-transport-https
sudo sh -c 'curl -fsSL https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/dart.gpg'
echo "deb [signed-by=/usr/share/keyrings/dart.gpg] https://storage.googleapis.com/download.dartlang.org/linux/debian stable main" | sudo tee /etc/apt/sources.list.d/dart_stable.list > /dev/null
sudo apt update
sudo apt install dart
```

### Windows

Download the installer from https://dart.dev/get-dart. Run the `.exe` — it adds
`dart` to your PATH automatically. Verify with:

```bash
dart --version
```

## Flutter SDK (Includes Dart)

If you are building Flutter applications, install the Flutter SDK instead. It bundles the Dart SDK —
you do not need a separate Dart installation.

### macOS / Linux

```bash
git clone https://github.com/flutter/flutter.git -b stable ~/development/flutter
export PATH="$PATH:$HOME/development/flutter/bin"
flutter doctor
```

The `flutter doctor` command checks your environment and reports missing dependencies.

### Windows

```powershell
git clone https://github.com/flutter/flutter.git -b stable C:\development\flutter
setx PATH "%PATH%;C:\development\flutter\bin"
flutter doctor
```

:::warning

Do not install Flutter in directories that require elevated privileges (`C:\Program Files`,
`/usr/local`). The Flutter CLI needs write access to its own directory for SDK updates.

:::

## Version Management

### Using `fvm` (Flutter Version Management)

In production or multi-project environments, you need to pin Flutter/Dart versions per project:

```bash
# Install fvm
dart pub global activate fvm

# Install a specific Flutter version
fvm install 3.24.0
fvm use 3.24.0

# Run flutter commands through fvm
fvm flutter run
fvm flutter build apk --release
```

`fvm use` creates an `.fvmrc` file in the project root. Team members run `fvm use` to switch to the
correct version.

### Using `dart` version directly

The Dart SDK is versioned independently. Check your version:

```bash
dart --version
# Dart SDK version: 3.5.0 (stable) on "linux_x64"
```

To change the Dart SDK channel (stable, beta, dev):

```bash
flutter channel stable
flutter upgrade
```

## Verifying Installation

After installation, verify everything:

```bash
# Dart SDK
dart --version
dart compile exe -o hello hello.dart   # test AOT compilation

# Flutter SDK
flutter --version
flutter doctor -v                      # verbose environment check

# Dart package manager
dart pub --version
```

`flutter doctor -v` output should look something like:

```
[✓] Flutter (Channel stable, 3.24.0)
[✓] Android toolchain - develop for Android devices (Android SDK version 34.0.0)
[✓] Chrome - develop for the web
[✗] Linux toolchain - develop for Linux desktop
    ! clang++ is not installed
```

Every `[✓]` means that toolchain is ready. `[✗]` items need attention — follow the diagnostic
output.

## IDE Setup

### VS Code (Recommended)

Install VS Code, then add these extensions:

| Extension        | ID                          | Purpose                                    |
| ---------------- | --------------------------- | ------------------------------------------ |
| Dart             | `dart-code.dart-code`       | Syntax, analysis, debugging, pub support   |
| Flutter          | `dart-code.flutter`         | Widget editing, DevTools, emulator control |
| Flutter Snippets | `alexisvt.flutter-snippets` | Boilerplate code generation                |

After installing, open a Dart/Flutter project folder. VS Code will prompt you to select the Flutter
SDK location if it is not already in PATH.

Key VS Code shortcuts for Dart:

| Action           | Shortcut                               |
| ---------------- | -------------------------------------- |
| Run (debug)      | `F5`                                   |
| Hot reload       | `Ctrl+F5` / `Cmd+F5` (while debugging) |
| Go to definition | `F12`                                  |
| Rename symbol    | `F2`                                   |
| Quick fix        | `Ctrl+.` / `Cmd+.`                     |
| Format document  | `Shift+Alt+F` / `Shift+Option+F`       |

### Android Studio

Android Studio includes the Dart and Flutter plugins by default when you install the Flutter SDK
through its installer:

1. Download Android Studio from https://developer.android.com/studio
2. Install the Flutter and Dart plugins: **Settings &gt; Plugins &gt; Marketplace &gt; "Flutter"**
3. Configure the SDK path: **Settings &gt; Languages &amp; Frameworks &gt; Flutter &gt; Flutter SDK
   path**

Android Studio provides:

- Visual layout editor (not as useful for Flutter as for XML layouts)
- Android Emulator (AVD Manager)
- Profiler and APK analyzer

### IntelliJ IDEA

Install the Dart plugin from JetBrains Marketplace. It provides the same analysis engine as Android
Studio without the Android-specific tooling.

## Installation Guide (VS Code Workflow)

1. Ensure VS Code, the extensions, and git is installed and updated.
2. Launch VS Code and open command palette (`Ctrl+Shift+P`)
3. With the `dart-code.flutter` installed, typing `flutter` in command palette shows a command of
   `Flutter: New Project`.
4. VS Code will now prompt you to locate your Flutter SDK, select `Download SDK` which automatically
   installs the Flutter SDK and adds to PATH, _Remember to choose a location that doesnt require
   elevated priviledges_.
5. Now type `flutter doctor` in the terminal and resolve any missing SDK or packages
   1. I would recommend installing android sdk from android studio
   2. I would also recommend installing Visual Studio if windows development is needed.
   3. If the developement platform is Windows, the path may not have added correctly, include the
      android sdk, dart sdk and flutter sdk in path.

## Creating Your First Project

### Pure Dart (CLI application)

```bash
dart create -t console my_cli
cd my_cli
dart run
```

This creates a minimal console application with a `pubspec.yaml`, `bin/`, and `test/` directory.

### Flutter application

```bash
flutter create my_app
cd my_app
flutter run
```

This creates a full Flutter project with platform-specific directories (`android/`, `ios/`, `web/`,
`macos/`, `linux/`, `windows/`).

### Project structure after `dart create -t console`:

```
my_cli/
├── analysis_options.yaml
├── bin/
│   └── my_cli.dart        # entry point
├── lib/
│   └── ...                # library code
├── pubspec.yaml           # dependencies and metadata
├── pubspec.lock           # pinned dependency versions
└── test/
    └── my_cli_test.dart   # tests
```

## Common Pitfalls

- **PATH issues on Windows**: The Flutter SDK modifies PATH during installation but many terminals
  (especially PowerShell) need a restart to pick up changes. Run `refreshenv` or restart the
  terminal.
- **Multiple SDK versions**: If you install both standalone Dart SDK and Flutter SDK, the `dart`
  binary on PATH may point to the wrong one. Use `which dart` / `where dart` to verify. Uninstall
  the standalone Dart SDK if you are using Flutter.
- **Xcode license on macOS**: Even for pure Dart development, `flutter doctor` may complain about
  Xcode. Run `sudo xcodebuild -license accept` to resolve this.
- **Android SDK cmdline-tools**: `flutter doctor` expects `cmdline-tools/latest/bin` in the Android
  SDK path. Install it via Android Studio's SDK Manager under "SDK Tools".

## Android SDK Setup

If you are targeting Android devices, you need the Android SDK. The recommended path is through
Android Studio.

### Installing Android Studio

1. Download from https://developer.android.com/studio
2. Run the installer (it bundles Android SDK, SDK Platform-Tools, and Android Emulator)
3. Launch Android Studio and complete the setup wizard — it downloads the latest SDK and system
   images

### Configuring environment variables

Add these to your shell profile (`~/.bashrc`, `~/.zshrc`, etc.):

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
```

### Accepting licenses

```bash
flutter doctor --android-licenses
```

Accept all licenses. This is required before you can build APKs.

### Android SDK Manager

Within Android Studio: **Settings &gt; Appearance &amp; Behavior &gt; System Settings &gt; Android
SDK**

Required components:

| Component                                    | Purpose                            |
| -------------------------------------------- | ---------------------------------- |
| Android SDK Platform 34 (or latest)          | Target API level                   |
| Android SDK Build-Tools                      | `aapt`, `d8`, `dx` build tools     |
| Android SDK Platform-Tools                   | `adb`, `fastboot`                  |
| Android SDK Command-line Tools               | `sdkmanager` CLI                   |
| Android Emulator                             | `emulator` binary                  |
| Intel x86 Emulator Accelerator (HAXM) or KVM | Hardware acceleration for emulator |

### Verifying Android setup

```bash
adb devices          # list connected devices/emulators
emulator -list-avds  # list available virtual devices
flutter devices      # list all Flutter-visible devices
```

## iOS/macOS Setup

### macOS requirements (for iOS development)

1. Install Xcode from the Mac App Store
2. Accept the license: `sudo xcodebuild -license accept`
3. Install command line tools: `xcode-select --install`
4. Install CocoaPods: `sudo gem install cocoapods` (or `brew install cocoapods`)

```bash
sudo xcodebuild -license accept
xcode-select --install
```

### Verifying macOS/iOS setup

```bash
xcrun --sdk iphoneos --show-sdk-path   # should print the SDK path
flutter devices                          # should show "macOS" and "iPhone" simulator
```

## Windows Desktop Setup

For Windows desktop development (UWP/Win32 Flutter apps):

1. Install Visual Studio 2022 with the following workloads:
   - **Desktop development with C++**
   - **Universal Windows Platform development** (optional, for UWP)
2. Ensure the Windows 10/11 SDK is installed

```bash
flutter doctor
# Look for: [✓] Visual Studio - develop Windows apps
```

## Linux Desktop Setup

For Linux desktop development:

```bash
sudo apt install clang cmake ninja-build pkg-config libgtk-3-dev liblzma-dev libstdc++-12-dev
```

On Fedora:

```bash
sudo dnf install clang cmake ninja-build gtk3-devel libXtst-devel pkgconfig
```

Verify:

```bash
flutter devices    # should show "Linux (desktop)"
```

## Web Setup

No additional installation is required for web development. Flutter includes the `dart2js` and
`dart2wasm` compilers.

```bash
flutter devices    # should show "Chrome" and "Edge" if browsers are installed
flutter run -d chrome
```

## Uninstalling

### Flutter SDK

Delete the Flutter directory and remove it from PATH:

```bash
rm -rf ~/development/flutter
# Remove the PATH export from your shell profile
```

### Dart SDK

```bash
# macOS (Homebrew)
brew uninstall dart

# Linux (apt)
sudo apt remove dart

# Windows: Use Programs and Features in Control Panel
```

### Clean pub cache

The pub cache can grow large over time:

```bash
dart pub cache clean
# Or manually:
rm -rf ~/.pub-cache
```

### fvm

```bash
dart pub global deactivate fvm
rm -rf ~/.fvm
```
