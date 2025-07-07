---
title: Undervolting and Overclocking
date: 2025-06-12T16:37:43.317Z
categories:
  - general
slug: undervolting
---

## Undervolting

Undervolting is the process of reducing the operating voltage (Vcore for CPUs and Vddc for GPUs) supplied below the voltage level defined by the manufacturer at a given clock speeds.

### Purpose

Reducing power consumption ($P = C \times V^2 \times F$), reducing heat generation due to the lower voltage supplied, and hence reducing cooling required.

### Implementation

#### CPU

1. Update BIOS/UEFI to latest stable version
2. Backup BIOS profile
3. Install monitoring tool (HWiNFO64) and stress testers (Cinebench R23, y-cruncher, MemTest86 and Prime95)
4. Press `Del` on boot when the logo can be seen to enter BIOS
5. Enter advance mode, this can be different depending on the manufacture
6. Find Core Voltage Offset and set to $-0.075V$
7. Save BIOS changes (`F10`)
8. if the system fail to boot
   1. Wait for 3 auto recovery attempts
   2. Clear CMOS by powering off, removing the battery for 60s or short JBAT1 pins
9. If the system successfully boot, run the following test, any failure, change the voltage offset by $0.010 V$
10. smoke test with cinebench R23 multicore
11. run HWiNFO with option sensor only, and click logging start then follow the instructions.
12. Run y-chruncher with VST for 15 minuites
13. Run Prime95 for 60 minutes, setting `Test=FFT,MinFFT=4,MaxFFT=4096,RunFFT=1,Memory=90,Time=60`
14. (Optional) Test the idel stability by `Start-Sleep -Seconds 7200` in powershell for 2 hours.
15. Check HWiNFO logs for WHEA errors, if any increase voltage.
16. If no problem arrises, increase the core voltage offset by $0.010V$ again for stability

#### GPU

1.

## Overclocking
