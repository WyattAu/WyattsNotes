---
title: Development Enviroment
date: 2025-07-13T19:11:38.762Z
tags:
  - dart
categories:
  - dart
slug: development-enviroment
---

## Virtual Devices

Virtual devices can be created by opening the command-palette and selecting `Flutter: Select Device`, and selecting `create android emulator`. However, the performance is not accurate and convenience is limited, therefore I recommend using a [physical device](#physical-devices).

## Physical Devices

Android devices can be use for running builds by enabling `USB debugging` from `Android developer settings`, this is done by:

1. Open settings and navigate to About Phone
2. Tab on the build number 7 times until a confirmation message appear
3. Then enter Developer Options and enable `USB debugging`
4. Plug the phone into the computer with USB connection

Now when selecting VSCode/command-palette/`Flutter: Select Device`, the identifier of the phone will appear.

## Compiling and Running

With everything setup and a `Flutter: new project` created, the code can now be compiled and ran with the device selected. Now simply clicking `F5` (VSCode's debug mode) will run the command of `flutter run --debug` and a counter app will be visible on your device. This is JIT compiled, and can be hot-reloaded. If you want a release build use the `--release` flag instead, the profile mode is a bit more complex, refer to [Flutter documentation](https://docs.flutter.dev/testing/build-modes#profile) for more detail.

