---
id: memory-tuning
title: Memory Tuning
description:
  RAM tuning — memory timings, XMP/EXPO, dual channel, memory overclocking, and memory bandwidth
  optimization.
slug: memory-tuning
---

## DDR Memory Generations

### DDR4 vs DDR5

DDR5 represents a fundamental shift in memory architecture. The comparison is not merely about speed
— the power delivery model, signal integrity, and error correction mechanisms are all different.

| Parameter                | DDR4                | DDR5                           |
| ------------------------ | ------------------- | ------------------------------ |
| Voltage                  | 1.2 V (standard)    | 1.1 V (standard)               |
| Bank Groups              | 4 (16 banks)        | 8 (32 banks)                   |
| Burst Length             | 8 (BL8)             | 16 (BL16)                      |
| Prefetch                 | 8n                  | 16n                            |
| VDDQ (I/O Voltage)       | 1.2 V (same as VDD) | 1.1 V (separate from VDD)      |
| PMIC                     | On motherboard      | On DIMM (on-die)               |
| ECC (base)               | Optional            | Optional (via ECC bits)        |
| Pin Count (desktop)      | 288                 | 288 (notch position different) |
| Max Standard Speed       | 3200 MT/s           | 4800 MT/s (JEDEC)              |
| Typical Enthusiast Speed | 3600–4266 MT/s      | 6000–8400 MT/s                 |

### Key Architectural Differences

DDR5 moves the power management IC (PMIC) from the motherboard onto the DIMM itself. This means each
DIMM manages its own power regulation, reducing the burden on the motherboard VRM. It also means you
cannot adjust VDDQ/VPP independently per DIMM from the motherboard — the DIMM's PMIC handles this
internally.

DDR5 doubles the bank group count (from 4 to 8) and doubles the burst length (from BL8 to BL16).
This means each activation can transfer 64 bytes per bank group instead of 32 bytes, improving
efficiency for sequential access patterns. However, the double burst length means DDR5 has higher
CAS latency in absolute nanoseconds at equivalent CAS latencies in clock cycles.

### Latency in Real Terms

Clock cycle latency alone is misleading. What matters is actual access time in nanoseconds:

$$
t_{CAS}(ns) = \frac{CL \times 2000}{MT/s}
$$

| Speed (MT/s) | CL  | CAS Latency (ns) |
| ------------ | --- | ---------------- |
| DDR4-3200    | 14  | 8.75             |
| DDR4-3600    | 16  | 8.89             |
| DDR5-4800    | 40  | 16.67            |
| DDR5-5600    | 36  | 12.86            |
| DDR5-6000    | 30  | 10.00            |
| DDR5-6400    | 32  | 10.00            |
| DDR5-7200    | 34  | 9.44             |

DDR5-6000 CL30 matches DDR4-3200 CL14 in actual latency while delivering nearly double the
bandwidth. This is why DDR5-6000 is considered the sweet spot for AMD Zen 4 and Intel 13th/14th Gen.

---

## Memory Timings

### Primary Timings

The four primary timings define the basic memory access pattern:

| Timing   | Full Name           | Description                                                            |
| -------- | ------------------- | ---------------------------------------------------------------------- |
| CL (tCL) | CAS Latency         | Clock cycles between a READ command and data availability on the bus   |
| tRCD     | RAS to CAS Delay    | Clock cycles between activating a row and issuing a READ/WRITE command |
| tRP      | RAS Precharge       | Clock cycles between precharging one row and activating another row    |
| tRAS     | Active to Precharge | Minimum clock cycles a row must remain active before precharging       |

These four timings are commonly expressed as CL-tRCD-tRP-tRAS (e.g., 16-18-18-38).

### Timing Relationships

The primary timings are not independent. They are related by the DRAM's electrical characteristics:

$$
tRAS \geq tRCD + tRP
$$

This is the minimum constraint. In practice, tRAS is usually set to tRCD + tRP + a small margin (2–8
cycles). Setting tRAS too low relative to tRCD + tRP can cause data corruption because the memory
cell does not have enough time to hold a charge before precharge.

The total access latency for a random read (worst case, row miss) is:

$$
t_{access} = tRP + tRCD + CL
$$

### Secondary Timings

Secondary timings have a smaller but measurable impact on performance:

| Timing | Full Name                               | Description                                                                      |
| ------ | --------------------------------------- | -------------------------------------------------------------------------------- |
| tRC    | Row Cycle Time                          | Minimum time between activating the same row again. Equal to tRAS + tRP.         |
| tFAW   | Four Activate Window                    | Minimum time between four different activate commands. Critical for 2R/4R DIMMs. |
| tRRD_S | Row to Row Delay (Same Bank Group)      | Delay between activating rows in the same bank group                             |
| tRRD_L | Row to Row Delay (Different Bank Group) | Delay between activating rows in different bank groups                           |
| tCWL   | CAS Write Latency                       | Write equivalent of CL. Usually equal to or CL - 1.                              |
| tWR    | Write Recovery Time                     | Time after a WRITE before the row can be precharged                              |

### Tertiary Timings

Tertiary timings have a small impact but can be the difference between stability and instability at
tight settings:

| Timing | Description                                                                                                                  |
| ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| tRFC   | Refresh Cycle Time — time to complete a full DRAM refresh. Very long on DDR5 (500+ cycles) and often the biggest bottleneck. |
| tREFI  | Refresh Interval — time between refresh cycles. Higher = better performance but riskier.                                     |
| tRDWR  | Read to Write turnaround — bus turnaround time when switching from reads to writes.                                          |
| tWRRD  | Write to Read turnaround — bus turnaround time when switching from writes to reads.                                          |
| tRTT   | Read to Read turnaround (different ranks) — time between reads to different ranks on the same channel.                       |

### Interpreting Timing Strings

A full timing string for DDR5 might look like:

```
30-36-36-76-58 (CL-tRCD-tRP-tRAS-tRC)
```

Or more detailed:

```
30-38-38-78-58-2-56-56-76-52 (CL-tRCD-tRP-tRAS-tRC-tRFC-tFAW-tRRD_L-tRRD_S-tREFI)
```

---

## XMP and EXPO Profiles

### XMP (Intel Extreme Memory Profile)

XMP is an Intel-developed standard for storing pre-validated overclocking profiles in the SPD
(Serial Presence Detect) EEPROM on the DIMM. When you enable XMP in BIOS, the motherboard reads the
profile and applies the specified frequency, timings, and voltages.

XMP supports two profiles (Profile 1 and Profile 2), allowing vendors to store a "safe" and an
"aggressive" profile. For example:

| Profile         | Speed     | Timings     | Voltage |
| --------------- | --------- | ----------- | ------- |
| JEDEC (default) | 4800 MT/s | 40-40-40-77 | 1.1 V   |
| XMP Profile 1   | 6000 MT/s | 30-38-38-78 | 1.35 V  |
| XMP Profile 2   | 6400 MT/s | 34-45-45-90 | 1.4 V   |

### EXPO (AMD Extended Profiles for Overclocking)

EXPO is AMD's equivalent of XMP. Functionally identical — it stores validated profiles in the SPD
chip. The main difference is branding: EXPO profiles are validated on AMD platforms. In practice,
most EXPO kits work fine on Intel and vice versa, as the memory ICs are the same.

### JEDEC Standards

JEDEC defines the standard (non-overclocked) operating parameters. Every DDR5 DIMM ships with a
JEDEC profile that guarantees operation at the specified speed, timings, and voltage. JEDEC DDR5
speeds include 4800, 5200, 5600, and 6000 MT/s.

When you do not enable XMP/EXPO, your memory runs at the JEDEC base speed. For high-performance
DIMMs, this can mean running at 4800 MT/s instead of the rated 6000+ MT/s. Always enable XMP/EXPO to
get the performance you paid for.

### Profile Stability Caveats

XMP/EXPO profiles are validated by the RAM manufacturer on a reference platform with a single DIMM.
Real-world stability depends on:

1. **Motherboard memory routing quality** — trace length matching, impedance control, and layer
   stackup vary between boards.
2. **CPU memory controller quality** — the silicon lottery applies to the memory controller too.
   Some CPUs can drive high-speed memory with two DIMMs populated; others cannot.
3. **DIMM population** — two DIMMs is harder than one; four DIMMs is harder still. The memory
   controller must drive twice or four times the electrical load.
4. **Temperature** — DRAM is temperature-sensitive. Higher temperatures require more voltage or
   relaxed timings.

---

## Channel Architecture

### Single, Dual, and Quad Channel

Modern desktop platforms support dual-channel memory. The memory controller has two independent
64-bit channels, each with its own address/command bus and data bus. Dual-channel operation doubles
the theoretical peak bandwidth:

$$
Bandwidth = \frac{MT/s \times 8 \mathrm{ bytes} \times channels}{1000}
$$

| Configuration              | DDR5-6000 Bandwidth |
| -------------------------- | ------------------- |
| Single channel             | 48.0 GB/s           |
| Dual channel               | 96.0 GB/s           |
| Quad channel (HEDT/server) | 192.0 GB/s          |

### DIMM Population Rules

For dual-channel operation, populate slots according to the motherboard manual. Typically:

- 2 DIMMs: Slots A2 and B2 (the second slot from each channel, usually color-coded)
- 4 DIMMs: Slots A2, B2, A1, B1

Populating the wrong slots can result in single-channel operation, halving your bandwidth. Verify
with CPU-Z (Windows) or `lshw -class memory` (Linux).

### 1R vs 2R DIMMs

DRAM modules can be single-rank (1R) or dual-rank (2R). A rank is a set of DRAM chips that share the
same address/command bus. A 2R DIMM has two independent sets of banks that can be accessed in an
interleaved fashion.

2R DIMMs have higher bank-level parallelism, which means:

- Better performance for random access patterns (more banks to interleave)
- Higher capacity per DIMM
- Harder to overclock (the memory controller drives two ranks instead of one)

For maximum overclocking headroom, 1R DIMMs are preferred. For maximum capacity and mixed-workload
performance, 2R DIMMs are better. The practical difference at the same speed and timings is
typically 3–8% in gaming workloads, favoring 2R.

---

## Memory Frequency vs. Latency Trade-off

The fundamental trade-off in memory tuning is between bandwidth (frequency) and latency (timings).
Higher frequency provides more bandwidth but often comes with looser timings, which increases
latency.

### Which Matters More?

The answer depends on the workload:

- **Gaming:** Latency matters more than bandwidth for most titles. DDR5-6000 CL30 is often faster
  than DDR5-7200 CL34 in games, despite the lower bandwidth.
- **Compression/encoding:** Bandwidth matters more. These workloads stream large amounts of data
  sequentially and benefit from higher transfer rates.
- **Scientific computing:** Depends on the access pattern. Dense matrix operations benefit from
  bandwidth; sparse operations benefit from low latency.
- **Database workloads:** Latency is critical. Each query involves many small random reads.

### AMD Zen 4 Memory Sweet Spot

On AMD Zen 4 (Ryzen 7000 series), the memory controller runs at half the DDR5 frequency (1:2 mode)
up to 6000 MT/s. Above 6000 MT/s, it switches to 1:2.67 mode (UCLK = DDR5 / 2.67), which introduces
additional latency. This makes DDR5-6000 the optimal frequency for Zen 4 in most workloads.

### Intel 13th/14th Gen Memory Sweet Spot

Intel's memory controller handles DDR5 up to ~7200 MT/s comfortably. The sweet spot is
DDR5-6400–6800 CL32-CL34. Beyond 7200 MT/s, stability with two DIMMs becomes increasingly difficult.

---

## Memory Controller Tuning

### Gear Mode (Intel)

Intel's Gear Mode controls the ratio between the memory bus frequency and the memory controller's
internal clock:

| Gear Mode | Ratio | Frequency Range                             | Latency Impact       |
| --------- | ----- | ------------------------------------------- | -------------------- |
| Gear 1    | 1:1   | Up to ~3600 MT/s (DDR4) / ~5600 MT/s (DDR5) | Lowest               |
| Gear 2    | 1:2   | Up to ~7200 MT/s (DDR4) / ~8400 MT/s (DDR5) | Moderate increase    |
| Gear 4    | 1:4   | Extreme overclocking only                   | Significant increase |

Gear 1 provides the lowest latency because the memory controller operates at the same frequency as
the memory bus. Gear 2 halves the controller frequency, which adds approximately 2–4 ns of latency.
For DDR5, most kits above 6000 MT/s require Gear 2.

### FCLK (AMD)

On AMD platforms, FCLK (Infinity Fabric Clock) is the clock speed of the Infinity Fabric
interconnect that connects the CPU cores to the memory controller and PCIe controller. FCLK has a
significant impact on performance because it determines the speed of inter-core communication and L3
cache access.

- **Synchronous mode (1:1):** FCLK = UCLK = MCLK / 2. Maximum FCLK is typically 2000–2200 MHz
  (DDR5-4000 to DDR5-4400 equivalent for Zen 3, or DDR5-6000 on Zen 4 with 1:2 UCLK).
- **Asynchronous mode:** FCLK can be set independently of UCLK. This allows higher memory
  frequencies but introduces a desynchronization penalty for fabric-crossing traffic.

On Zen 3, the synchronous 1:1 FCLK:UCLK ratio was critical for performance, limiting effective DDR4
speed to ~3600 MT/s. On Zen 4, the memory controller architecture changed, making asynchronous
operation less penalizing.

---

## Memory Overclocking Methodology

### Step-by-Step Process

1. **Start with XMP/EXPO enabled.** This gives you the manufacturer's validated baseline.

2. **Establish a stability baseline.** Run MemTest86 for 4 passes and TestMem5 for 30 minutes at
   XMP/EXPO settings. If XMP is not stable at two DIMMs, reduce frequency by one step or increase
   voltage.

3. **Tighten primary timings.** Reduce CL by 1 cycle. Test. If stable, reduce tRCD and tRP by 1
   each. Test. Continue until unstable, then back off.

4. **Tighten secondary timings.** Focus on tFAW (reduce by 2–4 cycles) and tRRD_L (reduce by 1–2
   cycles). These have a measurable impact with relatively low risk.

5. **Tertiary timings (advanced).** Reduce tRFC (this is the biggest tertiary timing on DDR5) and
   increase tREFI. These require extended stability testing.

6. **Increase frequency (optional).** If timings are tight, try increasing frequency by 200 MT/s.
   You may need to relax timings slightly to compensate.

7. **Voltage adjustments.** If you hit instability, increase VDDQ by 0.05 V increments (up to 1.4 V
   for daily use on DDR5). For extreme tuning, VDD can go to 1.45 V with adequate cooling.

### Voltage Parameters

| Voltage           | Function                      | DDR5 Safe Range | DDR5 Extreme Range |
| ----------------- | ----------------------------- | --------------- | ------------------ |
| VDD               | Core DRAM voltage             | 1.1–1.35 V      | 1.35–1.45 V        |
| VDDQ              | I/O voltage                   | 1.1–1.35 V      | 1.35–1.45 V        |
| VPP               | Wordline voltage              | 1.8 V (fixed)   | Do not adjust      |
| VDDIO (CPU side)  | CPU memory controller voltage | 1.1–1.35 V      | 1.35–1.4 V         |
| SA (System Agent) | Uncore voltage (Intel)        | 0.9–1.1 V       | 1.1–1.25 V         |
| VDDP              | SoC voltage (AMD)             | 0.9–1.0 V       | 1.0–1.1 V          |

:::danger Never exceed 1.5 V on VDD/VDDQ for DDR5. Sustained operation above this voltage will cause
permanent damage to the DRAM chips. Even 1.45 V should only be used with active cooling on the
DIMMs. :::

### Stability Testing After Changes

| Test                         | Duration       | What It Catches                          |
| ---------------------------- | -------------- | ---------------------------------------- |
| MemTest86 (bootable)         | 4+ passes      | Basic memory errors, cell-level faults   |
| TestMem5 with Anta777 config | 30–60 min      | Timing instability, marginal errors      |
| Karhu RAM Test               | 3–4 cycles     | Comprehensive, catches edge cases (paid) |
| y-cruncher (Pi computation)  | 15–30 min      | Real-world instability under load        |
| HCI MemTest                  | 200%+ coverage | Memory controller stress under Windows   |

---

## ECC Memory

### How ECC Works

Error-Correcting Code (ECC) memory adds an extra memory chip (or chips) per DIMM that stores parity
and syndrome information. For single-bit errors, ECC can detect and correct the error transparently
(SEC — Single Error Correction). For multi-bit errors, ECC can detect the error but cannot correct
it (DED — Double Error Detection), triggering a machine check exception.

### ECC Memory Types

| Type               | Correction Capability               | Overhead                          |
| ------------------ | ----------------------------------- | --------------------------------- |
| SEC-DED            | Correct 1-bit, detect 2-bit         | 8 bits per 64 bits (1 extra chip) |
| Chipkill / x4 SDDC | Correct any 4-bit error in one chip | Higher overhead                   |
| DDR5 in-band ECC   | Correct 1-bit per burst (internal)  | No extra pins                     |

DDR5 introduces "in-band" ECC, where each 128-bit access includes 8 extra ECC bits that allow the
DRAM to correct single-bit errors internally. This is separate from traditional ECC — it protects
against bit flips within the DRAM chip itself but does not protect against bus errors or provide the
same level of protection as platform-level ECC.

### Performance Impact

ECC memory has a small performance penalty (1–3%) due to the extra read-modify-write cycle for
updates and the latency of error checking. On registered ECC (RDIMM), there is an additional latency
from the register buffer. On load-reduced DIMMs (LRDIMM), the latency penalty is larger (~5–10%) but
capacity is significantly higher.

### When to Use ECC

- **Servers and workstations with important data:** ECC is strongly recommended. The cost premium is
  small relative to the value of the data.
- **ZFS NAS systems:** ECC is highly recommended. ZFS relies on data integrity; silent bit flips in
  memory can propagate to disk and corrupt your pool.
- **Gaming and desktop use:** ECC is generally unnecessary. Consumer platforms rarely support ECC
  anyway (Intel Z-series chipsets do not; AMD AM5 does).

---

## Virtual Memory and Swap Tuning

### Swappiness

The Linux kernel's `vm.swappiness` parameter controls the tendency to swap anonymous memory
(application data) versus dropping file cache pages. The default value is 60, which is a poor
default for systems with sufficient RAM.

| Swappiness | Behavior                                                                         |
| ---------- | -------------------------------------------------------------------------------- |
| 0          | Only swap to avoid OOM. On kernels 3.5+, this is "never swap unless necessary."  |
| 1          | Minimum swapping without fully disabling it.                                     |
| 10         | Prefer keeping anonymous memory in RAM; swap only under significant pressure.    |
| 60         | Default. Balanced but swaps too aggressively for modern systems with 16+ GB RAM. |
| 100        | Aggressively swap anonymous memory.                                              |

For desktops with 16 GB or more RAM:

```bash
# Check current value
cat /proc/sys/vm/swappiness

# Set to 10 for desktop use
echo 10 | sudo tee /proc/sys/vm/swappiness

# Make permanent
echo "vm.swappiness=10" | sudo tee -a /etc/sysctl.d/99-swappiness.conf
```

### Transparent Huge Pages (THP)

THP allows the kernel to allocate 2 MB pages instead of the standard 4 KB pages, reducing TLB misses
for workloads with large memory footprints. THP is enabled by default (`madvise` mode on many
distributions, `always` on some).

```bash
# Check THP mode
cat /sys/kernel/mm/transparent_hugepage/enabled

# Set to madvise (only applications that request it get huge pages)
echo madvise | sudo tee /sys/kernel/mm/transparent_hugepage/enabled

# Set to always (kernel aggressively uses huge pages)
echo always | sudo tee /sys/kernel/mm/transparent_hugepage/enabled
```

:::warning For database workloads (PostgreSQL, Redis, MongoDB), THP can cause latency spikes due to
the kernel's khugepaged daemon defragmenting memory in the background. Database vendors recommend
setting THP to `madvise` or `never`. :::

### Huge Pages

Static huge pages are pre-allocated at boot time and cannot be swapped out. They are used by
applications like databases and DPDK that require pinned, non-swappable memory.

```bash
# Configure 1024 huge pages (each 2 MB = 2 GB total)
echo 1024 | sudo tee /proc/sys/vm/nr_hugepages

# Verify
grep -i huge /proc/meminfo

# Persistent configuration: add to kernel parameters
# default_hugepagesz=2M hugepagesz=2M hugepages=1024
```

### NUMA Memory Policy

On NUMA systems, you can control memory allocation policies:

```bash
# Interleave allocations across all NUMA nodes
numactl --interleave=all ./my_app

# Prefer allocating on node 0, with fallback to node 1
numactl --preferred=0 ./my_app

# Bind exclusively to node 0
numactl --cpunodebind=0 --membind=0 ./my_app
```

---

## Common Pitfalls

### Mixing RAM Kits

Two identical-looking RAM kits from different production batches can have different memory ICs
(e.g., Samsung B-die vs. Micron Rev.E). When mixed, the system must use the timings of the slower
kit, and the memory controller may struggle with the combined electrical load. Always buy a single
kit with the total capacity you need.

### Overclocking Without Testing

A system that boots and runs benchmarks is not necessarily stable. Memory instability can cause
silent data corruption — the system continues running but produces incorrect results. This is
particularly dangerous for ZFS pools, databases, and compilation workloads. Always run MemTest86 and
TestMem5 after any timing or frequency change.

### Ignoring tRFC on DDR5

DDR5 has much higher tRFC values than DDR4 (typically 500–700 cycles vs. 300–350 cycles). tRFC
represents dead time where the memory cannot service requests while refreshing. Tightening tRFC is
one of the most impactful tertiary timing adjustments on DDR5, but it is also one of the most likely
to cause instability if set too aggressively.

### Running Four DIMMs at Maximum Speed

Populating all four DIMM slots significantly increases the electrical load on the memory controller.
Most kits rated for 6000+ MT/s are only validated for two-DIMM configurations. With four DIMMs, you
will likely need to reduce frequency by one or two steps (e.g., from 6000 to 5200 or 5600 MT/s) or
increase voltage. Check your motherboard's QVL (Qualified Vendor List) for four-DIMM validated
speeds.

### Confusing MT/s with MHz

DDR memory speeds are measured in MT/s (mega-transfers per second), not MHz. DDR5-6000 transfers
6000 million times per second, but the actual clock frequency is 3000 MHz because DDR transfers data
on both edges of the clock signal (double data rate). When you see "6000 MHz" in a BIOS or review,
it means 6000 MT/s.

### Neglecting DRAM Cooling

High-speed DDR5 modules generate significant heat — 5–8 W per DIMM under sustained load. Without
adequate airflow over the DIMMs, temperatures can exceed 60 °C, which forces the memory controller
to insert wait states or can cause instability. Ensure your case has intake airflow that passes over
the DIMM area, or use aftermarket DRAM heatsinks and fans.

## Deep Dive: DDR5 Electrical Characteristics

### Signal Integrity

DDR5 operates at significantly higher speeds than DDR4, which makes signal integrity critical. Key
electrical parameters:

| Parameter   | DDR4-3200       | DDR5-4800       | DDR5-6400       |
| ----------- | --------------- | --------------- | --------------- |
| Data Rate   | 3200 MT/s       | 4800 MT/s       | 6400 MT/s       |
| VDDQ        | 1.2 V           | 1.1 V           | 1.1 V           |
| VPP         | 2.5 V           | 1.8 V           | 1.8 V           |
| VREFDQ      | 0.6 V           | 0.55 V          | 0.55 V          |
| AC/DC Swing | 340 mV / 250 mV | 300 mV / 250 mV | 300 mV / 250 mV |
| DQS Phase   | 90°             | 90°             | 90°             |

### Decision Feedback Equalizer (DFE)

At DDR5 speeds (4800+ MT/s), the signal degrades significantly over the PCB traces. DDR5 introduces
a Decision Feedback Equalizer (DFE) in the memory controller and on the DIMM to compensate for
inter-symbol interference (ISI):

- **Transmit DFE (TX DFE):** On the memory controller side, compensates for signal degradation on
  the write path.
- **Receive DFE (RX DFE):** On the DIMM side, compensates for signal degradation on the read path.

DFE training occurs during system boot (JEDEC training sequence) and can be a source of
compatibility issues — some CPU/memory combinations fail DFE training at high speeds.

### Training and Calibration Sequence

On boot, the memory controller performs a calibration sequence:

1. **ZQ Calibration:** Calibrates the on-die termination (ODT) resistors by comparing against a
   precision external resistor (RZQ). Takes approximately 256 clock cycles.
2. **Read Leveling:** Adjusts the DQS read strobe timing to align with the center of the data eye.
   The controller sweeps the DQS delay and finds the optimal sampling point.
3. **Write Leveling:** Adjusts the DQS write strobe timing from the controller's perspective.
4. **VREF Training:** Calibrates the reference voltage for the receiver to optimize the data eye
   opening.
5. **DFE Training:** (DDR5 only) Trains the decision feedback equalizer taps.

This entire sequence takes 1–3 seconds. If any training step fails, the system falls back to a lower
speed or fails to boot.

## Memory Controller Architecture

### Intel Memory Controller (12th-14th Gen)

Intel's memory controller is integrated into the CPU die and connects to the DDR5 DIMMs via the
processor's DDR5 interface:

- **One memory controller per CPU** (not per CCD like AMD).
- **Supports 2 channels** with 1 DIMM per channel for DDR5-6400+ stable operation.
- **Gear mode:** Controls the ratio between the memory bus and the internal clock. Gear 2 (1:2) is
  required above DDR5-5600.

The Intel memory controller is generally more forgiving than AMD's when it comes to running two
DIMMs at high speeds. Most Intel 13th/14th Gen systems can run two DIMMs at DDR5-6800 with relaxed
timings.

### AMD Memory Controller (Zen 4)

AMD's Zen 4 memory controller is a significant improvement over Zen 3:

- **1:2 UCLK ratio** at DDR5-6000, providing optimal latency.
- **Up to DDR5-5200** in 1:1 UCLK mode (FCLK = UCLK = MCLK/2).
- **Infinity Fabric clock** can run asynchronously at higher speeds, reducing the penalty of 1:2.67
  mode.

The Zen 4 memory controller's sweet spot is DDR5-6000 CL30. Going above this requires 1:2.67 mode,
which adds approximately 3–5 ns of latency.

## Advanced Timing Tuning

### Secondary Timing Tuning Process

After tightening primary timings, secondary timings provide the next level of optimization:

1. **tFAW (Four Activate Window):** Start at the JEDEC default and reduce by 2 cycles at a time. For
   dual-rank DDR5, tFAW is typically 24–32. Try reducing to 20–24.
   - Lower tFAW allows more activate commands in a given window, improving row access parallelism.
   - Too low causes data corruption because the DRAM cells do not have enough time to settle.

2. **tRRD_S and tRRD_L:**
   - tRRD_S (Same Bank Group): Start at 4, try reducing to 3.
   - tRRD_L (Different Bank Group): Start at 6, try reducing to 4.
   - These affect the time between activating different rows. Lower values improve interleaved
     access performance.

3. **tCWL (CAS Write Latency):** Usually CL - 1 or CL. Try setting to CL - 1 if it is currently at
   CL. Write latency has less impact on most workloads than read latency.

4. **tWR (Write Recovery Time):** Try reducing by 1 cycle. This is the time after a write before the
   row can be precharged. Related to tRTP (Read to Precharge).

### Tertiary Timing Exploration

Tertiary timings are risky to tune but can provide measurable improvements:

1. **tRFC (Refresh Cycle Time):** This is the biggest tertiary timing on DDR5. Default values are
   often very conservative. Try reducing by 20–40 cycles at a time.
   - DDR5-6000 CL30 typically has tRFC around 500–550. Many kits can run at 460–480.
   - Reducing tRFC directly improves performance because the DRAM is unavailable for a shorter
     period during refreshes.

2. **tREFI (Refresh Interval):** Default is typically 31200 for DDR5 (at normal temperature).
   Increasing tREFI delays refresh cycles, improving performance but reducing data retention margin.
   - Try increasing to 62400 or 93600.
   - At higher tREFI values, the DRAM may lose data if the ambient temperature is high or if there
     are long periods without access.

3. **tRDWR (Read to Write Turnaround):** Default is typically 5–7 cycles. Try reducing by 1.

4. **tWRRD (Write to Read Turnaround):** Default is typically 6–8 cycles. Try reducing by 1.

### Memory Stress Testing After Tertiary Timing Changes

Tertiary timing instability is often intermittent and may not appear in short tests:

1. Run TestMem5 with Anta777 config for 2+ hours.
2. Run Karhu RAM Test for 4+ cycles (if available).
3. Run y-cruncher for 1+ hour.
4. Run MemTest86 for 8+ passes.
5. Use the system normally for 24 hours and check for any unexpected crashes or corruption.

## Virtual Memory Deep Dive

### Transparent Huge Pages Internals

THP works by the kernel's `khugepaged` daemon scanning process memory and collapsing contiguous
standard (4 KB) pages into huge pages (2 MB). This process involves:

1. **Scanning:** `khugepaged` periodically scans process address spaces looking for contiguous 4 KB
   pages that could be collapsed into a single 2 MB page.
2. **Copying:** When eligible pages are found, `khugepaged` allocates a 2 MB page, copies the data
   from the constituent 4 KB pages, and updates the page tables.
3. **Collapsing:** The original 4 KB pages are freed and replaced with the single 2 MB page.

This process consumes CPU and memory bandwidth. Under memory pressure, the cost of the collapsing
operation can cause latency spikes.

### Huge Pages Configuration

```bash
# Check current huge page settings
cat /proc/meminfo | grep -i huge

# Allocate 1024 huge pages at boot (2 GB total)
# Add to kernel parameters:
# default_hugepagesz=2M hugepagesz=2M hugepages=1024

# Or allocate dynamically
echo 1024 | sudo tee /proc/sys/vm/nr_hugepages

# Verify allocation
grep -i huge /proc/meminfo

# Configure libhugetlbfs for transparent usage
# LD_PRELOAD=/usr/lib64/libhugetlbfs.so
```

### Swap File vs. Swap Partition

| Feature              | Swap File                            | Swap Partition                  |
| -------------------- | ------------------------------------ | ------------------------------- |
| Resizable            | Yes (fallocate, truncate)            | No (requires partitioning tool) |
| Location flexibility | Any filesystem (except ZFS)          | Dedicated partition             |
| Multiple             | Yes (multiple swap files)            | No (one per partition)          |
| Performance          | Slightly lower (filesystem overhead) | Slightly higher (raw device)    |
| Recommended for      | Modern Linux (kernel 5.0+)           | Legacy systems                  |

```bash
# Create a swap file
sudo fallocate -l 8G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Make permanent
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

# Verify
swapon --show
free -h
```

:::warning Do not create a swap file on a ZFS dataset. ZFS does not support swap files due to its
copy-on-write nature. Use a swap file on ext4/xfs or a dedicated swap partition instead. :::

### NUMA Memory Policy Deep Dive

On NUMA systems, the `numactl` tool controls memory allocation policies:

```bash
# Display NUMA topology
numactl --hardware

# Available policies:
# --interleave=all   Allocate pages round-robin across all nodes
# --preferred=0      Prefer node 0, fall back to others
# --membind=0        Allocate only on node 0 (fail if insufficient)
# --cpunodebind=0    Run only on CPUs from node 0
```

The `numastat` command shows per-node memory statistics:

```bash
# Show per-node allocation statistics
numastat

# Show per-process NUMA statistics
numastat -p <PID>
```

Key metrics to watch:

- **numa_hit:** Memory allocated on the preferred node (good).
- **numa_miss:** Memory allocated on a non-preferred node (remote memory access).
- **numa_foreign:** Memory allocated for another node (this node is serving remote requests).
- **interleave_hit:** Memory allocated via interleaving policy.

## Memory Benchmarking

### AIDA64 Memory Benchmark

AIDA64 provides the most detailed memory benchmarking on Windows:

- **Memory Read:** Sequential read throughput at various block sizes.
- **Memory Write:** Sequential write throughput.
- **Memory Copy:** Copy throughput (read from one location, write to another).
- **Memory Latency:** Access latency at various block sizes and access patterns (random,
  sequential).

### Linux Memory Benchmarking

```bash
# Stream benchmark (measures sustained memory bandwidth)
# Install: sudo apt install stream
stream_c

# Latency measurement with lmbench
# Install: sudo apt install lmbench
lat_mem_rd -P 1 512m  # Read latency for 512 MB
lat_mem_rd -P 4 512m  # Read latency with 4 processes (NUMA test)

# NUMA bandwidth measurement
numactl --hardware
numactl -p 1 bandwidth  # Measure bandwidth on node 0
```

### Interpreting Memory Benchmark Results

| Metric         | DDR4-3600 CL16 | DDR5-6000 CL30 | DDR5-7200 CL34 |
| -------------- | -------------- | -------------- | -------------- |
| Read (GB/s)    | 45–50          | 75–85          | 90–100         |
| Write (GB/s)   | 40–45          | 60–70          | 75–85          |
| Copy (GB/s)    | 38–42          | 55–65          | 70–80          |
| Latency (ns)   | 50–60          | 60–70          | 65–75          |
| AIDA64 Read    | 50,000 MB/s    | 80,000 MB/s    | 95,000 MB/s    |
| AIDA64 Latency | 55 ns          | 68 ns          | 72 ns          |

## DDR5 Power Management and PMIC

### On-DIMM PMIC Architecture

DDR5's most significant architectural change is the relocation of the PMIC (Power Management IC)
from the motherboard to the DIMM itself. Each DDR5 DIMM has its own PMIC that manages:

- **VDD (1.1 V):** Core power supply for the DRAM cells.
- **VDDQ (1.1 V):** I/O power supply for the data bus.
- **VPP (1.8 V):** Word line driver voltage.
- **VREFDQ (0.55 V):** Reference voltage for the data receiver.

### PMIC Impact on Tuning

Because the PMIC is on the DIMM, you cannot independently adjust VDDQ and VPP from the motherboard.
The motherboard only controls VDD (via the memory controller's VDDIO supply). All other voltages are
managed by the DIMM's PMIC according to its programmed profile.

This means:

- **VDDQ and VPP tuning** is not available on DDR5 without specialized tools or custom PMIC
  firmware.
- **VDD adjustment** from the motherboard affects the PMIC's input voltage, which may or may not
  change the actual VDDQ and VPP depending on the PMIC's regulation mode.
- **Some DIMMs** expose PMIC configuration through SMBus (System Management Bus), allowing tools
  like Thaiphoon Burner or specialized BIOS implementations to adjust internal voltages.

### DDR5 Training and PMIC

During POST, the memory controller communicates with the DIMM's PMIC via SMBus to:

1. Set the target voltage for each rail.
2. Configure the PMIC's power state transitions.
3. Enable or disable power saving features.

If the PMIC firmware is outdated or incompatible with the motherboard, training can fail. Updating
the PMIC firmware requires specialized tools and carries the risk of bricking the DIMM.

## Memory Stability Under Linux

### Linux Memory Testing Tools

```bash
# stress-ng memory stress test
stress-ng --vm 8 --vm-bytes 80% --vm-rw 40 --timeout 3600 --metrics-brief

# memtester (user-space memory test)
# Allocates memory and tests with various patterns
memtester 8G 1  # 8 GB, 1 iteration

# Built-in kernel memory testing
echo 1 > /proc/sys/kernel/test_optimize  # Not available on all kernels
```

### Linux Memory Management for Tuning

```bash
# Transparent Huge Pages
echo always | sudo tee /sys/kernel/mm/transparent_hugepage/enabled
echo madvise | sudo tee /sys/kernel/mm/transparent_hugepage/defrag

# Swap configuration
echo 10 | sudo tee /proc/sys/vm/swappiness
echo 4096 | sudo tee /proc/sys/vm/min_free_kbytes

# NUMA balancing
echo 0 | sudo tee /proc/sys/kernel/numa_balancing  # Disable for latency-sensitive workloads

# Memory overcommit (allow allocation beyond physical RAM)
echo 0 | sudo tee /proc/sys/vm/overcommit_memory  # Heuristic (default)
echo 1 | sudo tee /proc/sys/vm/overcommit_memory  # Always allow
echo 2 | sudo tee /proc/sys/vm/overcommit_memory  # Never allow
```

## Memory and CPU Interaction

### Memory Bandwidth and CPU Performance

Memory bandwidth directly affects CPU performance in memory-bound workloads:

$$
Performance_{limited} = \frac{Instructions}{Cycle} \times \frac{Memory\_Bandwidth}{Bytes\_per\_Instruction}
$$

For a CPU that can execute at 5.0 GHz and needs 2 bytes of memory access per instruction:

| Memory Config            | Bandwidth  | Theoretical Max IPC |
| ------------------------ | ---------- | ------------------- |
| DDR4-3200 single channel | 25.6 GB/s  | 6.4 IPC             |
| DDR4-3200 dual channel   | 51.2 GB/s  | 12.8 IPC            |
| DDR5-6000 dual channel   | 96.0 GB/s  | 24.0 IPC            |
| DDR5-7200 dual channel   | 115.2 GB/s | 28.8 IPC            |

Real-world IPC is much lower because not every instruction accesses memory. However, the principle
holds: insufficient memory bandwidth bottlenecks the CPU.

### Intel Gear Mode Impact on Latency

| Gear Mode | Memory Controller Clock | DDR5 Speed Range | Latency Impact     |
| --------- | ----------------------- | ---------------- | ------------------ |
| Gear 1    | 1:1 (equal to MCLK)     | Up to ~5600 MT/s | Lowest latency     |
| Gear 2    | 1:2 (half of MCLK)      | Up to ~8400 MT/s | ~2–4 ns additional |
| Gear 4    | 1:4 (quarter of MCLK)   | Extreme speeds   | ~6–8 ns additional |

The latency impact of Gear 2 is typically 3–5 ns. At DDR5-6000 CL30, the absolute latency is 10.0
ns. At DDR5-7200 CL34 in Gear 2, the absolute latency is 9.4 ns + 3 ns = ~12.4 ns. The higher-speed
DDR5 is actually slower in terms of absolute latency.

## Memory Timing Relationships Mathematical Model

### Timing Constraint Equations

The primary timings must satisfy these constraints:

$$
tRAS \geq tRCD + tRP + tWR
$$

> **Note:** The JEDEC spec defines `tRAS >= tRCD + tRP`. Including `tWR` in the sum is a
> conservative margin used by some memory vendors for additional stability, but it is not part of
> the official JEDEC specification.

$$
tRC \geq tRAS + tRP
$$

$$
tFAW \geq 4 \times tRRD_S
$$

$$
tFAW \geq tRRD_S + 3 \times tRRD_L
$$

These constraints ensure the DRAM cells have sufficient time to complete each operation before the
next operation begins. Violating any constraint causes data corruption.

### Secondary and Tertiary Timing Dependencies

| Timing | Depends On        | Relationship                          |
| ------ | ----------------- | ------------------------------------- |
| tRC    | tRAS, tRP         | $tRC \geq tRAS + tRP$                 |
| tRFC   | DRAM density      | Larger for denser chips               |
| tREFI  | tRFC, temperature | Inversely proportional to temperature |
| tWTR   | tCL, tCWL         | Write-to-read turnaround              |
| tRTW   | tCL, tCWL         | Read-to-write turnaround              |
| tFAW   | tRRD_S, tRRD_L    | Four-activate window constraint       |

### Calculating True Latency

The true memory access latency (from command to data) depends on the access pattern:

**Sequential access (row already active):**

$$
t_{sequential} = tCL
$$

**Random access (new row required):**

$$
t_{random} = tRP + tRCD + tCL
$$

**Row conflict (different row in same bank):**

$$
t_{conflict} = tRP + tRCD + tCL + tRAS + tRP
$$

Understanding these latencies is crucial for database and VM workloads where random access patterns
dominate.

## Memory Stability Edge Cases

### Cold Boot vs. Warm Boot Stability

Some memory configurations are stable after a warm boot (restart) but fail after a cold boot (power
off, wait, power on). This is because:

1. **Cold boot** subjects the memory controller and DRAM to the full voltage and temperature range.
   The memory controller must calibrate from scratch.
2. **Warm boot** benefits from residual charge in the DRAM cells and pre-initialized calibration
   values cached by the firmware.

If your system is unstable after a cold boot but stable after a warm boot:

- Increase VDDQ by 0.05 V.
- Relax tRFC and tREFI.
- Check that the CMOS battery is good (a dying battery can cause cold boot issues).

### Seasonal Temperature Sensitivity

DRAM cells retain charge longer at lower temperatures. Conversely, higher temperatures reduce
retention time. If your system is stable in winter but becomes unstable in summer:

- Reduce tREFI (shorter interval between refreshes).
- Increase VDD slightly (0.05 V).
- Improve case airflow over the DIMMs.

### Two-DIMM vs. Four-DIMM Stability

Running four DIMMs is significantly harder than two because:

1. The memory controller must drive twice the electrical load.
2. Signal integrity degrades with longer trace routes (to the second pair of DIMM slots).
3. Inter-symbol interference increases between adjacent channels.

If four-DIMM stability is poor:

- Reduce frequency by one step (e.g., 6000 to 5600 MT/s).
- Increase VDD by 0.05–0.10 V.
- Relax secondary timings (tFAW, tRRD).
- Ensure DIMMs in slots A2/B2 match and DIMMs in A1/B1 match.
