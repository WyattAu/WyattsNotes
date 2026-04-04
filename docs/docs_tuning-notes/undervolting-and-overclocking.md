---
title: Undervolting and Overclocking
date: 2025-06-12T16:37:43.317Z
categories:
  - general
slug: undervolting
---

## Undervolting

Undervolting is the process of reducing the operating voltage (Vcore for CPUs and Vddc for GPUs)
supplied below the voltage level defined by the manufacturer at a given clock speeds.

### Purpose

Reducing power consumption ($P = C \times V^2 \times F$), reducing heat generation due to the lower
voltage supplied, and hence reducing cooling required.

### Implementation

#### CPU

1. Update BIOS/UEFI to latest stable version
2. Backup BIOS profile
3. Install monitoring tool (HWiNFO64) and stress testers (Cinebench R23, y-cruncher, MemTest86 and
   Prime95)
4. Press `Del` on boot when the logo can be seen to enter BIOS
5. Enter advance mode, this can be different depending on the manufacture
6. Find Core Voltage Offset and set to $-0.075V$
7. Save BIOS changes (`F10`)
8. if the system fail to boot
   1. Wait for 3 auto recovery attempts
   2. Clear CMOS by powering off, removing the battery for 60s or short JBAT1 pins
9. If the system successfully boot, run the following test, any failure, change the voltage offset
   by $0.010 V$
10. smoke test with cinebench R23 multicore
11. run HWiNFO with option sensor only, and click logging start then follow the instructions.
12. Run y-chruncher with VST for 15 minuites
13. Run Prime95 for 60 minutes, setting `Test=FFT,MinFFT=4,MaxFFT=4096,RunFFT=1,Memory=90,Time=60`
14. (Optional) Test the idel stability by `Start-Sleep -Seconds 7200` in powershell for 2 hours.
15. Check HWiNFO logs for WHEA errors, if any increase voltage.
16. If no problem arrises, increase the core voltage offset by $0.010V$ again for stability

#### GPU

1. Install MSI Afterburner
2. Open the voltage/frequency curve editor (Ctrl+F)
3. Find the voltage point corresponding to your desired clock speed
4. Drag the voltage point down (lower voltage) while keeping the frequency the same
5. Apply and test with a GPU benchmark (Superposition, 3DMark Time Spy)
6. If stable, continue lowering voltage in 10–25 mV steps until instability appears
7. Raise voltage by one step from the last unstable point
8. Verify stability with a 30-minute FurMark session and monitor temperatures

---

## Voltage Basics

Understanding voltage is foundational to all tuning. This section covers the key concepts that apply
to both undervolting and overclocking.

### Vcore and VID

**Vcore** is the actual voltage delivered to the CPU cores. **VID (Voltage ID)** is the voltage the
CPU requests from the Integrated Voltage Regulator (IVR). These two values are not always the same:

- At idle: Vcore may be close to or slightly below VID due to power-saving states (C-states).
- Under load: Vcore is typically below VID due to Vdroop.
- The delta between VID and Vcore is affected by LLC (Load-Line Calibration) settings.

When you set a voltage offset of -75 mV, you are telling the VRM to deliver 75 mV less than the VID
the CPU requests. The actual Vcore will be even lower due to Vdroop.

### Vdroop

Vdroop is an intentional design feature of CPU voltage regulators. When the CPU load suddenly drops
(for example, a compute thread finishes), the inductance in the VRM circuit would cause the voltage
to overshoot if there were no droop. This overshoot can damage silicon. Vdroop provides a margin so
that the worst-case overshoot stays within safe limits.

The relationship is simple: higher load → more Vdroop → lower actual voltage. This is why your CPU
may be stable at 1.25 V under light load but crash under heavy load even though the VID has not
changed.

### Load-Line Calibration (LLC)

LLC counteracts Vdroop by making the VRM more aggressive in maintaining the target voltage under
load. LLC is typically configured on a scale (e.g., Level 1–7, or Auto/Medium/High/Extreme).

| LLC Level       | Behavior                                                | Use Case                                |
| --------------- | ------------------------------------------------------- | --------------------------------------- |
| Low (1–2)       | Heavy Vdroop, large delta between idle and load voltage | Stock operation, maximum safety         |
| Medium (3–5)    | Moderate Vdroop, reasonable compensation                | Moderate overclocking, daily use        |
| High (6–7)      | Minimal Vdroop, voltage nearly flat across loads        | Aggressive overclocking                 |
| Extreme / Ultra | Negative Vdroop (voltage increases under load)          | **Not recommended** — risk of overshoot |

**Warning:** Setting LLC too high eliminates the safety margin that Vdroop provides. On load
transitions (load → idle), the voltage can overshoot the VID by a significant margin. This is
particularly dangerous for CPUs running near their maximum safe voltage. For most use cases, LLC
Level 4 or 5 provides a good balance.

### Safe Voltage Limits

Exceeding these limits can cause electromigration and permanent silicon degradation:

| Platform                             | Maximum Safe Vcore | Notes                                                |
| ------------------------------------ | ------------------ | ---------------------------------------------------- |
| Intel 12th Gen (Alder Lake)          | 1.40 V             | Long-term degradation above 1.35 V                   |
| Intel 13th Gen (Raptor Lake)         | 1.40 V             | Known Vmin Shift Instability issue; keep &lt; 1.35 V |
| Intel 14th Gen (Raptor Lake Refresh) | 1.40 V             | Same Vmin Shift concern                              |
| AMD Zen 3 (Ryzen 5000)               | 1.35 V             | Curve Optimizer recommended over fixed offset        |
| AMD Zen 4 (Ryzen 7000)               | 1.30 V             | DDR5 memory controller is voltage-sensitive          |
| AMD Zen 5 (Ryzen 9000)               | 1.30 V             | Similar to Zen 4                                     |

These are conservative long-term limits. Short bursts above these values (transient spikes) are
normal and handled by the CPU's internal protections. The concern is sustained voltage at or above
these thresholds under load.

---

## Intel Undervolting (ThrottleStop Method)

ThrottleStop is the preferred tool for undervolting Intel laptops. It works by directly
communicating with the CPU's Integrated Voltage Regulator (IVR) to apply voltage offsets.

### Setup

1. Download ThrottleStop from the official thread on NotebookReview forums.
2. Extract and run as Administrator.
3. On the "FIVR" (Fully Integrated Voltage Regulator) screen, click "Unlock Adjustable Voltage."

### Applying the Offset

1. In the FIVR control window, find the "CPU Core Voltage Offset" slider.
2. Set a negative offset. Start with **-50 mV** for a safe starting point.
3. Click "Apply" and immediately run Cinebench R23 multi-core.
4. If stable, reduce the offset by an additional 10 mV (e.g., -60 mV).
5. Repeat until the system crashes or shows artifacts.
6. When instability occurs, increase the offset by 10 mV from the last unstable point.

### Per-Core Type Offsets (P-Cores and E-Cores)

On 12th Gen and later Intel CPUs, P-Cores (Performance) and E-Cores (Efficiency) have separate
voltage domains. ThrottleStop allows you to set independent offsets for each:

- **P-Core Offset:** The P-Cores do the heavy lifting and typically need less aggressive undervolts.
  Start at -50 mV.
- **E-Core Offset:** The E-Cores are more tolerant of lower voltage. You may be able to push these
  to -80 mV or beyond.

### ThrottleStop Additional Settings

- **Disable Speed Shift (SpeedStep Technology = Off):** Some users report more consistent
  undervolting behavior with Speed Shift disabled. This prevents the CPU from rapidly changing
  P-states, which can cause voltage transitions that trigger instability.
- **Set Power Limits:** ThrottleStop can override the OEM's PL1 and PL2 power limits. This is useful
  when the laptop manufacturer has set overly conservative limits.
- **Enable "BD PROCHOT":** Controls the external PROCHOT signal. Disabling this can prevent the
  laptop from throttling when the charger gets warm, but it also removes a safety mechanism.

### Intel XTU Alternative

Intel XTU provides similar functionality with a more polished GUI but is less reliable on laptops.
It is better suited for desktop platforms. The same offset approach applies: start at -50 mV, reduce
in 10 mV steps, stress test after each change.

### Intel Undervolting Lock (12th Gen+)

Intel has locked undervolting on many 12th, 13th, and 14th Gen desktop platforms via microcode
updates. Check your BIOS for a "Microcode Update" or "CPU Undervolting Protection" setting. On some
motherboards, this can be disabled to restore undervolting capability. On laptops, ThrottleStop may
still work depending on the OEM's implementation.

---

## AMD Undervolting (Curve Optimizer and PPT Limits)

AMD's approach to undervolting is fundamentally different from Intel's. Instead of applying a fixed
voltage offset, AMD uses **Curve Optimizer** to shift the entire voltage-frequency curve.

### Curve Optimizer Basics

The Curve Optimizer applies a signed offset (positive or negative) to the voltage requested by the
CPU's boost algorithm at each frequency point. A negative offset means the CPU tries to hit the same
frequencies at lower voltage.

- **Negative values** (e.g., -20) = undervolting (lower voltage, same frequency)
- **Positive values** (e.g., +20) = overvolting (higher voltage, same frequency) — used to support
  higher overclocks
- **Units:** The Curve Optimizer is measured in steps, where each step is approximately 5 mV. A
  value of -20 corresponds to roughly -100 mV.

### Applying Curve Optimizer

1. Enter BIOS and navigate to AMD overclocking settings (typically under "Advanced" or "AMD CBS").
2. Find "Curve Optimizer" or "Precision Boost Overdrive → Curve Optimizer."
3. Enable Curve Optimizer and select "All Core" or "Per Core."
4. For an all-core undervolt, start with **-15** (approximately -75 mV).
5. Save, reboot, and stress test.
6. If stable, reduce by 2 steps (e.g., -17).
7. If unstable, increase by 2 steps.

### Per-Core Curve Optimizer

AMD CPUs have a "Core Quality" ranking that indicates which cores are stronger. You can apply more
aggressive negative offsets to higher-quality cores and less aggressive offsets to weaker ones.

1. Use Ryzen Master or HWiNFO64 to identify the best and worst cores.
2. Apply the most aggressive negative offset (e.g., -20) to the best cores.
3. Apply a milder offset (e.g., -10) to the weakest cores.
4. Test each core individually using single-thread workloads.

This is time-consuming but can yield better results than a uniform all-core offset.

### PPT / TDC / EDC Limits

AMD's power limits control how much power the CPU is allowed to draw:

| Limit | Full Name                 | Description                  |
| ----- | ------------------------- | ---------------------------- |
| PPT   | Package Power Tracking    | Total socket power in watts  |
| TDC   | Thermal Design Current    | Sustained current limit (A)  |
| EDC   | Electrical Design Current | Peak/turbo current limit (A) |

For undervolting, you typically do not need to change these. However, if you are trying to reduce
thermals on a laptop or SFF build, lowering the PPT can force the CPU to boost less aggressively,
which reduces temperatures at the cost of peak performance.

- **Stock PPT values:** Varies by SKU. A Ryzen 9 7950X has a 170 W TDP with 230 W PPT.
- **Reduced PPT example:** Setting PPT to 120 W on a 170 W CPU will reduce multi-core performance by
  10–20% but significantly improve thermals.

### AMD Overclocking: PBO (Precision Boost Overdrive)

Enabling PBO allows the CPU to boost beyond its rated limits. Combined with a negative Curve
Optimizer offset, this can yield higher sustained frequencies at lower temperatures than stock.

1. Enable PBO in BIOS.
2. Set PBO limits to "Manual."
3. Set PPT to "Motherboard" (lets the board's VRM determine the limit) or a custom value.
4. Apply Curve Optimizer with a negative offset.
5. Stress test and monitor.

**Warning:** Enabling PBO without a Curve Optimizer offset can increase temperatures significantly.
The recommended approach is to undervolt first, then enable PBO.

---

## CPU Overclocking

CPU overclocking increases the clock speed beyond the manufacturer's rated specifications. This can
be done by adjusting the base clock (BCLK), multiplier, or both.

### Base Clock (BCLK) vs. Multiplier

Modern CPUs have two ways to increase frequency:

- **Multiplier:** The CPU's internal clock multiplier. On unlocked CPUs (Intel K-series, AMD Black
  Edition / Ryzen), this is freely adjustable. Changing the multiplier only affects CPU frequency.
- **BCLK (Base Clock):** The reference clock that drives the CPU, memory, PCIe, and DMI/UPI
  interconnects. Increasing BCLK overclocks everything simultaneously. This is more complex and
  risky because it can destabilize PCIe devices, storage controllers, and memory.

**Recommendation:** Always use multiplier overclocking when possible. BCLK overclocking should only
be attempted when you have exhausted multiplier headroom and understand the risks to other
subsystems.

### Intel CPU Overclocking

1. Enter BIOS and enable "Overclocking" or "XMP" mode (required to unlock multiplier settings on
   some boards).
2. Set all-core multiplier to a target value (e.g., 50x for 5.0 GHz).
3. Set a fixed Vcore or adaptive voltage:
   - **Fixed Vcore:** Set manually (e.g., 1.28 V). Simple but wastes power at idle.
   - **Adaptive Voltage:** Set an offset or target voltage with a negative offset. More power
     efficient but harder to stabilize.
4. Set LLC to Level 4–5.
5. Save, boot, and stress test with Prime95 Small FFTs.
6. If stable for 30 minutes, try increasing the multiplier by 1.
7. If unstable, increase Vcore by 0.01–0.02 V.
8. Repeat until you reach your temperature or voltage limit.

**Target temperatures:** Stay below 90 °C under Prime95 Small FFTs. If you exceed 90 °C, you have
hit your thermal limit and should stop increasing frequency.

### AMD CPU Overclocking

AMD's boosting algorithm (Precision Boost 2 / Precision Boost 2 with Curve Optimizer) makes manual
overclocking less relevant on Zen 3 and later. The algorithm already pushes the CPU close to its
maximum frequency. Manual overclocking disables PBO and can actually reduce performance in some
workloads.

For Zen 2 / Zen 3 / Zen 4:

1. The recommended approach is to **enable PBO with a negative Curve Optimizer offset** rather than
   setting a fixed frequency.
2. If you insist on manual overclocking, disable PBO and set a fixed frequency and voltage.
3. Start with a conservative target (e.g., 100 MHz above stock all-core boost).
4. Set a fixed Vcore and LLC level.
5. Stress test with y-cruncher or OCCT.
6. Increment frequency and voltage as needed.

### BCLK Overclocking

BCLK overclocking is an advanced technique that increases the reference clock frequency:

- Default BCLK: 100 MHz
- Typical target: 102–105 MHz
- Aggressive target: 105–110 MHz (high risk of instability)

**What BCLK affects:**

- CPU frequency (multiplier × BCLK)
- Memory frequency (ratio × BCLK)
- PCIe and DMI/UPI interconnect speeds

**Risks:**

- PCIe devices (GPU, NVMe SSD, network cards) can become unstable if the BCLK is too high.
- NVMe SSDs can corrupt data if the PCIe link becomes unstable. **Back up your data before
  attempting BCLK overclocking.**
- Some platforms (Intel 12th Gen+) have a fixed BCLK and do not support BCLK overclocking.

### When to Stop Overclocking

Stop and revert to your last stable settings if any of the following occur:

- Core temperatures exceed 95 °C under sustained load
- You are approaching the maximum safe Vcore for your platform
- WHEA errors appear in HWiNFO64 logs
- The system requires significantly more voltage for marginal frequency gains (diminishing returns)
- You experience random reboots, BSODs, or application crashes during normal use
- Your VRM temperatures exceed 80 °C (check with HWiNFO64)

---

## Memory Overclocking

Memory overclocking increases the data rate and/or tightens the timings of your RAM. This can
improve performance in memory-bound workloads (gaming, compilation, scientific computing).

### XMP (Intel) and EXPO (AMD)

XMP (Extreme Memory Profile) and EXPO (Extended Profiles for Overclocking) are vendor-certified
overclocking profiles stored in the RAM's SPD (Serial Presence Detect) chip. Enabling XMP/EXPO in
BIOS applies the manufacturer's tested settings.

1. Enter BIOS.
2. Navigate to memory settings.
3. Enable XMP (Intel) or EXPO (AMD).
4. Select the desired profile (Profile 1 or Profile 2 if available).
5. Save and reboot.

**Important:** XMP/EXPO profiles are certified by the RAM manufacturer for use with a single module.
Running two or four modules at XMP speeds is not guaranteed to be stable, as the memory controller
must work harder to drive multiple modules. If you experience instability with multiple modules,
try:

- Reducing the frequency by one step (e.g., from 6000 MT/s to 5600 MT/s)
- Relaxing the timings
- Increasing the DRAM voltage by 0.05 V

### Memory Timings

Memory timings are specified as a series of numbers (e.g., 16-18-18-38). These represent delays
measured in clock cycles:

| Timing   | Name                | Description                                                 |
| -------- | ------------------- | ----------------------------------------------------------- |
| CL / tCL | CAS Latency         | Delay between a read command and data availability          |
| tRCD     | RAS to CAS Delay    | Delay between activating a row and reading/writing a column |
| tRP      | RAS Precharge       | Delay between precharging one row and activating another    |
| tRAS     | Active to Precharge | Minimum time a row must remain active before precharging    |

Lower numbers = better performance. Tightening timings is more difficult than increasing frequency
but can yield similar or better performance gains in latency-sensitive workloads.

### Secondary and Tertiary Timings

Beyond the primary timings (CL-tRCD-tRP-tRAS), there are secondary and tertiary timings that affect
performance:

- **tRC** (Row Cycle Time): Related to tRAS + tRP. Often auto-calculated but worth tightening
  manually.
- **tFAW** (Four Activate Window): Minimum time between four activate commands. Important for
  four-DIMM configurations.
- **tRFC** (Refresh Cycle Time): Time to complete a DRAM refresh cycle. Very long on DDR5; can often
  be tightened significantly.
- **tREFI** (Refresh Interval): Time between refresh cycles. Increasing this improves performance
  but may cause data errors if set too high.

### DDR4 vs. DDR5 Considerations

- **DDR4:** Mature platform, extensive tuning guides available. Sweet spot for Ryzen 3000/5000 is
  3600 MT/s with tight timings (CL14–CL16).
- **DDR5:** Higher default speeds but much looser timings. The memory controller on AMD Zen 4 and
  Intel 13th/14th Gen handles DDR5 well up to 6000–6400 MT/s. Beyond 6400 MT/s, the memory
  controller becomes the bottleneck, especially with two DIMMs populated.

### Memory Stress Testing

After any memory frequency or timing change, run these tests:

1. **MemTest86** (bootable): Run at least 4 passes. This tests memory without OS interference.
2. **TestMem5 / TM5** (Windows): Run the "Extreme by Anta777" or "1usmus" config for 30–60 minutes.
   Catches timing instability that MemTest86 may miss.
3. **Karhu RAM Test** (Windows, paid): The most thorough Windows-based memory tester. Run for at
   least 3–4 cycles. Expensive but worth it if you are serious about memory tuning.
4. **y-cruncher:** Run a memory-intensive test (e.g., Pi computation). Catches instability under
   real workloads.

---

## Stress Testing Methodology

Stress testing is not optional — it is the only way to verify that your tuning changes are stable. A
system that "feels fine" during normal use can still be producing WHEA errors that indicate silent
data corruption.

### Testing Hierarchy

Follow this order after any tuning change:

1. **Quick smoke test:** Cinebench R23 multi-core, 1 run. Takes 10 minutes. Catches gross
   instability.
2. **Short stress test:** y-cruncher VST, 15 minutes. Catches moderate instability.
3. **Extended stress test:** Prime95 Small FFTs, 60 minutes. Catches thermal and voltage
   instability.
4. **Memory test:** MemTest86, 4+ passes. Catches memory-specific instability.
5. **Idle test:** Leave the system idle for 2 hours with HWiNFO64 logging. Catches C-state
   instability (system crashes or freezes when idle).

### Prime95 Configuration

For CPU stability testing, use these settings:

```
Test=FFT, MinFFT=4, MaxFFT=4096, RunFFT=1, Memory=90, Time=60
```

- **Small FFTs (FFT=4–4096):** Stresses the CPU with data that fits in L1/L2 cache. Generates
  maximum heat. Use this for thermal testing.
- **Blend (large FFTs, high memory):** Stresses both CPU and memory. Use this for overall system
  stability.
- **Run time:** 60 minutes is the minimum. For production systems, run overnight (8+ hours).

### OCCT Configuration

OCCT is particularly good at catching instability that Prime95 misses:

- **OCCT CPU (Small Data Set, AUTO):** Similar to Prime95 Small FFTs but uses a different stress
  algorithm. Run for 30 minutes.
- **OCCT CPU (Large Data Set):** Tests with data larger than L3 cache, stressing the memory
  controller. Run for 30 minutes.
- **OCCT Memory:** Dedicated memory stress test. Run for 60 minutes after any timing or frequency
  change.

### Interpreting Results

| Symptom                               | Likely Cause                             | Fix                                       |
| ------------------------------------- | ---------------------------------------- | ----------------------------------------- |
| Immediate crash or BSOD on test start | Voltage too low or settings incompatible | Increase voltage or revert changes        |
| Crash after 5–30 minutes              | Marginal stability, near the edge        | Increase voltage by 10–20 mV              |
| Crash after 1–4 hours                 | Thermal throttling or VRM issues         | Check temperatures, improve cooling       |
| WHEA errors with no crash             | Silent instability, data corruption risk | Increase voltage by 10 mV, retest         |
| Crash only when idle                  | C-state instability                      | Increase offset voltage, disable C-states |

---

## Monitoring Temperatures and Stability

### What to Monitor

Run HWiNFO64 in "Sensors Only" mode with logging enabled. Key sensors to watch:

- **CPU Package Temperature:** Should stay below 90 °C under sustained load.
- **CPU Core Max:** The hottest individual core. More useful than package average.
- **CPU Vcore:** Actual delivered voltage. Should be stable (not fluctuating wildly) under load.
- **CPU VID:** Requested voltage. The delta between VID and Vcore indicates Vdroop.
- **CPU Package Power:** Total power draw. Compare against your PPT/PL2 limit.
- **VRM Temperature:** Voltage regulator temperature. Should stay below 80 °C.
- **Memory Temperature:** For DDR5, keep below 60 °C. DDR4 is generally safe below 50 °C.
- **WHEA Errors:** Any non-zero count indicates instability.

### On-Screen Display (OSD)

For real-time monitoring during benchmarks and games:

1. Install RivaTuner Statistics Server (included with MSI Afterburner).
2. Configure the OSD to display CPU temperature, GPU temperature, CPU power, GPU power, frame rate,
   and 1% low frame times.
3. Toggle OSD with the hotkey (default: Ctrl+Shift+O).

### Thermal Management

If temperatures are too high, address these in order:

1. **Repaste the CPU/GPU.** Thermal paste degrades over time. Replacing it with a quality paste
   (Thermal Grizzly Kryonaut, NT-H2, or SYY-157) can drop temperatures by 5–15 °C.
2. **Improve case airflow.** Ensure intake fans provide cool air and exhaust fans remove hot air. A
   single fan configuration is rarely adequate for tuned systems.
3. **Undervolt.** This is the most effective way to reduce temperatures without sacrificing
   performance.
4. **Reduce power limits.** Lowering PPT/PL2 reduces the maximum power draw, which directly reduces
   temperatures.
5. **Upgrade cooling.** A better cooler (larger tower heatsink, liquid cooling, or a laptop cooling
   pad) may be necessary if the above steps are insufficient.

---

## Common Pitfalls

### "It Works for Me" Syndrome

Every silicon sample is different. Settings that are stable on one CPU may crash another of the
exact same model. Do not assume that someone else's settings will work for you. Always test
thoroughly with your own hardware.

### Chasing the Last Megahertz

Diminishing returns are severe near the limit. Going from 5.0 GHz to 5.1 GHz might require 0.05 V
more voltage and increase temperatures by 5 °C, for a 1–2% performance gain. Going from 4.8 GHz to
5.0 GHz might cost 0.02 V and yield a 3–5% gain. Focus on the low-hanging fruit: undervolting for
sustained boost, enabling XMP/EXPO, and ensuring adequate cooling.

### Ignoring WHEA Errors

WHEA errors are not harmless. They indicate that the CPU detected and corrected bit flips. While the
CPU can correct single-bit errors, multi-bit errors cause uncorrectable machine check exceptions
(UCMCE), which result in BSODs. More importantly, silent data corruption can occur before the error
is detected. If HWiNFO64 reports any WHEA errors during stress testing, your settings are not
stable.

### Testing Only Under Load

Some instability manifests only during load transitions (load → idle, idle → load). This is
particularly common with aggressive LLC settings and fixed voltage modes. Always test idle stability
after confirming load stability.

### Not Saving BIOS Profiles

Before making any change, save your current BIOS profile. If something goes wrong, you can quickly
restore to a known-good state without having to clear CMOS and reconfigure everything from scratch.

### Forgetting About BIOS Updates

Motherboard manufacturers frequently release BIOS updates that change power delivery behavior, add
new tuning options, or fix stability issues. An overclock that was stable on BIOS version 1.20 may
be unstable on 1.30. After any BIOS update, re-test your tuning settings.

### Overlooking Power Supply Limits

Your PSU must be able to deliver the power your components demand. An overclocked CPU and GPU can
draw significantly more power than stock. If your PSU is operating near its capacity, voltage ripple
can increase, which causes instability that is not related to your CPU or GPU settings.

### Mixing RAM Kits

Buying two separate RAM kits (even of the same model and speed) and using them together is a common
source of memory instability. RAM kits are binned and matched at the factory. Two kits from
different batches may have different memory ICs or require different voltages. Always buy a single
kit with the total capacity you need.

---

## GPU Tuning (Expanded)

### NVIDIA GPU Undervolting

NVIDIA GPUs (RTX 20-series and later) use a voltage/frequency curve that can be edited with MSI
Afterburner:

1. Open MSI Afterburner and press Ctrl+F to open the curve editor.
2. Hold Shift and click on the voltage/frequency curve to create a custom point.
3. Find the clock speed you want to sustain (e.g., 1860 MHz).
4. Set the voltage to the lowest point on the curve that supports that clock speed.
5. Drag all points above your target voltage down to the same voltage level, creating a flat line.
6. This ensures the GPU never exceeds your target voltage, regardless of load.

Typical results:

- RTX 3060: 1800–1900 MHz at 825–875 mV (stock is ~1050 mV)
- RTX 3070: 1800–1900 MHz at 875–925 mV
- RTX 4070: 2500–2600 MHz at 875–925 mV

### NVIDIA GPU Overclocking

1. After undervolting (to establish a thermal baseline), increase the core clock offset in 10–15 MHz
   increments.
2. Test with Superposition or 3DMark Time Spy after each increment.
3. When artifacts or crashes appear, reduce the offset by 15–20 MHz.
4. Optionally, increase the memory clock offset in 50–100 MHz increments.
5. Memory overclocking responds differently — test with a VRAM-intensive benchmark.

### AMD GPU Tuning

AMD GPUs can be tuned with MSI Afterburner or AMD's own Adrenalin software:

- **Adrenalin Undervolting:** Use the "Tuning" tab → "Automatic Undervolting" or set a manual curve.
  The interface is less flexible than MSI Afterburner.
- **Power Limit:** AMD GPUs typically have a power limit slider that can be increased by 10–15%.
  Combined with undervolting, this can yield higher sustained clocks at lower temperatures.

---

## When to Stop

Knowing when to stop is more important than knowing how to push further. Stop tuning and enjoy your
system when:

- Your temperatures are comfortable (below 80 °C under sustained gaming/workload)
- You have no WHEA errors after extended stress testing
- The performance gains from further tuning are marginal (&lt; 2%)
- You have reached a point where each additional step requires disproportionately more voltage or
  cooling
- You are no longer enjoying the process — tuning should be fun, not frustrating

The best tune is the one that gives you the performance you need with comfortable temperatures, low
noise, and rock-solid stability. Everything beyond that is diminishing returns.
