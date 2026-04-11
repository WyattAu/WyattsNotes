---
id: cpu-fundamentals
title: CPU Architecture and Tuning
description:
  CPU architecture fundamentals — pipelines, caches, clock speeds, turbo boost, power states, and
  CPU-specific tuning.
slug: cpu-fundamentals
---

## Microarchitecture Overview

A modern CPU is a superscalar, out-of-order, speculative execution engine. Understanding these
concepts is prerequisite to any meaningful tuning, because every knob you adjust interacts with one
or more of these mechanisms.

### Instruction Pipeline

Every x86 instruction passes through a series of pipeline stages. Intel's Golden Cove (12th Gen
P-core) has a pipeline depth of approximately 19 stages; AMD's Zen 4 is roughly 16 stages. Pipeline
depth is a fundamental trade-off:

- **Deeper pipelines** allow higher clock frequencies (each stage does less work per clock), but
  incur larger penalties on branch mispredictions and pipeline flushes.
- **Shallower pipelines** have lower clock ceilings but recover from mispredictions faster.

The pipeline stages broadly follow this sequence:

```mermaid
graph LR
    A[Fetch] --> B[Decode]
    B --> C[Rename]
    C --> D[Allocate / ROB]
    D --> E[Reservation Stations]
    E --> F[Dispatch / Execute]
    F --> G[Retire]
```

### Fetch and Decode

The front-end fetches instruction bytes from the L1 instruction cache (typically 32 KB, 8-way set
associative on Intel, 64 KB on AMD Zen 4). The decoder translates x86 CISC instructions into
internal micro-ops ($\mu$ops). Intel CPUs can decode up to 6 instructions per cycle; AMD Zen 4 can
decode up to 6 as well. Instructions that decode to more than one $\mu$op (complex instructions like
`ENTER`, string operations, or instructions with memory operands using complex addressing modes)
consume more decoder bandwidth.

The micro-op cache (MSB on Intel, OP cache on AMD) caches already-decoded $\mu$ops, bypassing the
legacy decoder entirely. On Intel 12th Gen, the micro-op cache can deliver up to 8 $\mu$ops per
cycle, compared to 6 from the legacy decoder. Code that fits in the micro-op cache executes faster
because it avoids the decode bottleneck.

### Out-of-Order Execution

After decode, $\mu$ops enter the reorder buffer (ROB). The ROB tracks the program order of all
in-flight $\mu$ops while allowing the execution units to process them in any order dictated by data
dependencies and resource availability.

Key components:

- **Reservation Stations:** Hold $\mu$ops waiting for their operands to become available. When all
  operands are ready, the $\mu$op is dispatched to an execution port.
- **Register Renaming:** Eliminates false dependencies (Write-After-Write, Write-After-Read) by
  mapping architectural registers (e.g., `RAX`) to physical registers. Intel Golden Cove has ~280
  physical integer registers; AMD Zen 4 has 160.
- **Reorder Buffer:** Tracks in-flight $\mu$ops and ensures they retire in program order. Intel
  Golden Cove ROB size is 512 entries; AMD Zen 4 is 416.

The out-of-order window size (determined by ROB size, scheduler entries, and load/store queue depth)
directly affects how much instruction-level parallelism the CPU can extract. Larger windows find
more independent work to do, which is why wider out-of-order engines generally perform better on
branchy, real-world code.

### Branch Prediction

The front-end needs to know which instructions to fetch next. Branch predictors attempt to guess the
outcome of conditional branches before they execute.

- **BTB (Branch Target Buffer):** Caches the target addresses of previously seen branches. Intel
  12th Gen has a ~1.5K-entry L1 BTB and a ~5K-entry L2 BTB.
- **Pattern History:** Uses 2-bit saturating counters (strongly taken, weakly taken, weakly not
  taken, strongly not taken) to track branch behavior.
- **TAGE (TAgged GEometric):** Used on recent Intel and AMD designs. Combines multiple predictor
  tables with different history lengths to achieve high accuracy.

Branch misprediction penalty is proportional to pipeline depth: on a 19-stage pipeline, a
misprediction flushes the pipeline and wastes roughly 15–19 cycles. This is why branch-heavy code
can perform significantly worse than expected.

### Superscalar Execution

Modern CPUs have multiple execution ports that can process $\mu$ops in parallel. Intel Golden Cove
has 12 execution ports:

| Ports | Function                         |
| ----- | -------------------------------- |
| 0     | ALU, MUL, DIV, JMP, LEA          |
| 1     | ALU, MUL, fast LEA, shift/rotate |
| 2     | Load (AGU)                       |
| 3     | Load (AGU), simple ALU           |
| 4     | Store address (AGU)              |
| 5     | ALU, branch, fast LEA            |
| 6     | Store data                       |
| 7     | ALU, shift/rotate                |
| 8     | ALU, branch                      |
| 9     | ALU                              |
| 10    | Store address (AGU)              |
| 11    | Load (AGU)                       |

AMD Zen 4 has 10 execution ports with a different allocation. The key takeaway for tuning is that
your code (or the compiler's output) must have enough independent $\mu$ops to fill these ports. If
every instruction depends on the previous one (a long dependency chain), most ports sit idle.

---

## Cache Hierarchy

The cache hierarchy exists because main memory is orders of magnitude slower than the CPU core. The
latency gap drives every architectural decision in cache design.

### Latency Comparison

| Level          | Size (Typical) | Latency (Cycles) | Latency (ns at 5 GHz) |
| -------------- | -------------- | ---------------- | --------------------- |
| L1 Data        | 32–48 KB       | 4–5              | ~1.0                  |
| L1 Instruction | 32–64 KB       | 4–5              | ~1.0                  |
| L2             | 1–2 MB         | 12–14            | ~2.8                  |
| L3 (Shared)    | 16–64 MB       | 35–50            | ~8.0                  |
| DRAM (DDR5)    | Variable       | 200–400+         | ~60–80                |
| NVMe SSD       | Variable       | ~10,000          | ~2,000                |

### Cache Lines and Spatial Locality

Caches operate on cache lines, not individual bytes. On x86, a cache line is 64 bytes. When you read
a single byte from memory, the CPU fetches the entire 64-byte line. This exploits spatial locality —
if a program accesses one address, it is likely to access nearby addresses soon.

For array traversal, this means iterating sequentially through memory is significantly faster than
random access, because sequential access hits in the cache after the first load. Stride access with
a power-of-two stride can cause cache set conflicts, where multiple lines map to the same set and
evict each other.

### Set Associativity

Each cache level uses set-associative mapping. An N-way set-associative cache means each memory
address can map to N different cache lines within a set. Higher associativity reduces conflict
misses but increases lookup latency and power consumption.

| CPU                     | L1 Data      | L2           | L3                 |
| ----------------------- | ------------ | ------------ | ------------------ |
| Intel 12th Gen (P-core) | 8-way, 48 KB | 12-way, 2 MB | 16-way (per slice) |
| AMD Zen 4               | 8-way, 32 KB | 16-way, 1 MB | 16-way (per CCD)   |

### MESI Protocol

Multi-core systems use a cache coherence protocol to ensure all cores see consistent data. The MESI
protocol defines four states for each cache line:

| State             | Meaning                                          |
| ----------------- | ------------------------------------------------ |
| **M** (Modified)  | Line is modified in this cache only; dirty       |
| **E** (Exclusive) | Line is clean and present only in this cache     |
| **S** (Shared)    | Line is clean and may be present in other caches |
| **I** (Invalid)   | Line is not valid in this cache                  |

When Core A modifies a line in Shared state, it must issue a RFO (Read For Ownership) request to
invalidate all other copies. This is why false sharing — where unrelated variables share a cache
line and are modified by different cores — can devastate multi-threaded performance. Each write
triggers a coherence round-trip, effectively serializing access.

MESI extensions include MESIF (Intel uses an Forward state for efficient sharing) and MOESI (AMD
uses an Owned state that allows dirty data to be shared without writing back to memory).

### Non-Uniform Cache Architecture (Intel Hybrid)

Intel's 12th Gen and later use a hybrid architecture with P-cores and E-cores. The L3 cache is
shared, but P-cores and E-cores have different L1 and L2 cache sizes and latencies. The Intel Thread
Director (hardware + OS scheduler) steers threads to the appropriate core type based on workload
characteristics. This has tuning implications:

- P-cores have larger L2 caches (2 MB per P-core vs ~0.5 MB per E-core) and higher clock speeds.
- E-cores are more power-efficient but have lower single-thread performance.
- On Linux, the `intel_pstate` driver and the scheduler's asym packing support handle this
  automatically. On Windows, Thread Director requires Windows 11.

---

## Clock Speeds and Power States

### Base Clock vs. Boost Clock

- **Base Clock:** The guaranteed minimum frequency all cores can sustain simultaneously at the TDP
  power limit. For a Core i7-13700K, this is 3.4 GHz (P-cores).
- **Boost Clock:** The maximum single-core frequency under favorable thermal and power conditions.
  For the same CPU, this is 5.4 GHz.
- **All-Core Boost:** The maximum frequency all P-cores can sustain simultaneously. This is lower
  than the single-core boost because the TDP/PL2 power envelope must be shared across all cores.

The actual frequency at any given moment depends on:

1. Active core count (fewer cores = higher per-core boost)
2. Current power draw vs. PL1/PL2 limits
3. Current temperature vs. thermal throttling threshold
4. Current workload type (AVX-512 heavy loads get lower boost on some Intel SKUs)

### P-States (Performance States)

P-States control the operating frequency and voltage of the CPU. They are numbered from P0 (highest
frequency, highest voltage) upward. P-state transitions are managed by the CPU's integrated power
controller (PCU on Intel, SMU on AMD).

On modern systems, P-states are managed autonomously by the CPU. The OS requests a performance level
via ACPI, and the CPU's hardware decides the actual frequency. This is known as "hardware-managed
P-states" or HWP (Hardware P-States) on Intel.

### C-States (Idle States)

C-States are idle power-saving states. When a core has no work to do, it can enter progressively
deeper C-states:

| State     | Description                      | Exit Latency    | Power Savings |
| --------- | -------------------------------- | --------------- | ------------- |
| C0        | Active execution                 | 0               | None          |
| C1        | Halt, clock gated                | ~1 $\mu$s       | Minimal       |
| C1E       | Enhanced halt, voltage reduced   | ~1–2 $\mu$s     | Moderate      |
| C3        | Sleep, L1/L2 cache flushed       | ~50 $\mu$s      | Significant   |
| C6        | Deep power down, core state lost | ~100–200 $\mu$s | Very high     |
| C8/C9/C10 | Package-level idle               | ~1–2 ms         | Maximum       |

Deeper C-states save more power but have higher exit latencies. For latency-sensitive workloads
(e.g., audio processing, real-time trading), you may want to limit C-states to C1 or C1E to avoid
wakeup latency spikes.

On Linux, C-states are controlled via:

```bash
cat /sys/module/processor/parameters/idle
```

Set to `nomwait` or `max_cstate=1` on the kernel command line to restrict deep idle states.

### Intel Speed Shift Technology (HWP)

Hardware P-States (HWP) allows the CPU to autonomously manage its frequency without OS intervention.
The OS provides a "hint" via the IA32_HWP_REQUEST MSR, specifying a minimum, maximum, and desired
(energy-performance preference) frequency. The CPU then selects the actual frequency based on
workload demand, thermal headroom, and power budget.

HWP is generally faster and more responsive than OS-managed P-states because the CPU can react to
workload changes within microseconds rather than milliseconds. On server and desktop workloads, HWP
typically matches or exceeds OS-managed P-state performance while using less power.

Enable HWP on Linux:

```bash
# Verify HWP is active
cat /sys/devices/system/cpu/intel_pstate/status

# If it shows "active", HWP is enabled
# The kernel must be booted with intel_pstate=active or the default
```

### AMD Precision Boost 2 / Precision Boost Overdrive

AMD's Precision Boost 2 (PB2) algorithm boosts the CPU based on workload characteristics, thermal
headroom, and power budget. Unlike Intel's approach, PB2 does not use fixed frequency bins — it
selects the optimal frequency continuously based on current conditions.

Precision Boost Overdrive (PBO) removes the factory power limits, allowing the CPU to draw more
power (subject to motherboard VRM limits) to sustain higher boost frequencies. Combined with Curve
Optimizer (negative offset to the voltage-frequency curve), PBO can deliver higher sustained
performance at lower temperatures than stock.

---

## CPU Affinity and NUMA

### CPU Affinity (cpu pinning)

CPU affinity binds a process or thread to a specific core or set of cores. This can improve
performance by:

1. Reducing cache migration overhead — when a thread moves between cores, its working set must be
   loaded into the new core's caches.
2. Preventing scheduler ping-pong — the OS scheduler may bounce a thread between cores, causing
   repeated cache invalidations.
3. Ensuring NUMA locality — on multi-socket systems, binding a process to cores on the same NUMA
   node as its memory ensures low-latency memory access.

On Linux, use `taskset` or `numactl`:

```bash
# Pin process to cores 0-3
taskset -c 0-3 ./my_workload

# Pin process to NUMA node 0
numactl --cpunodebind=0 --membind=0 ./my_workload
```

### NUMA Architecture

On multi-socket systems, each socket (or CCD on AMD) has its own local memory controller and
directly attached DRAM. Accessing local memory is fast; accessing remote memory (attached to another
socket) traverses an interconnect (UPI on Intel, Infinity Fabric on AMD) and is significantly
slower.

| Access Type           | Latency     | Bandwidth         |
| --------------------- | ----------- | ----------------- |
| Local DRAM            | ~80 ns      | Full              |
| Remote DRAM (1 hop)   | ~120–140 ns | Reduced (~60–70%) |
| Remote DRAM (2+ hops) | ~160–200 ns | Further reduced   |

On NUMA systems, the OS NUMA scheduler attempts to allocate memory local to the process's current
CPU. However, this can be suboptimal for workloads with specific memory access patterns. Use
`numactl --hardware` to inspect the NUMA topology and `numastat` to monitor memory locality.

---

## CPU Frequency Drivers (Linux)

### intel_pstate vs. acpi-cpufreq

Linux offers two primary CPU frequency scaling drivers for Intel CPUs:

| Driver         | Description                         | Recommended For              |
| -------------- | ----------------------------------- | ---------------------------- |
| `intel_pstate` | Hardware-managed P-states via HWP   | Modern Intel (Sandy Bridge+) |
| `acpi-cpufreq` | OS-managed P-states via ACPI tables | Legacy hardware, VMs         |

The `intel_pstate` driver operates in two modes:

- **Active mode:** HWP is enabled. The CPU manages frequency autonomously. This is the default on
  most modern systems and generally provides the best performance.
- **Passive mode:** The CPU suggests frequencies, but the OS governor makes the final decision. This
  allows use of the `schedutil` governor.

Check the current driver:

```bash
cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_driver
```

### Governor Selection

The CPU frequency governor determines the policy for frequency scaling:

| Governor       | Behavior                                             | Use Case                                |
| -------------- | ---------------------------------------------------- | --------------------------------------- |
| `performance`  | Always at maximum frequency                          | Benchmarks, latency-sensitive workloads |
| `powersave`    | Minimum frequency (with HWP, allows boost on demand) | Energy-efficient servers                |
| `ondemand`     | Increases frequency when load exceeds threshold      | Legacy driver (not used with HWP)       |
| `schedutil`    | Frequency driven by scheduler utilization data       | Works with passive mode                 |
| `conservative` | Gradually increases frequency                        | Legacy, rarely used                     |

With `intel_pstate` in active mode, the governor has limited effect because HWP manages frequency
autonomously. The `performance` governor sets the HWP minimum to maximum, preventing any frequency
reduction. The `powersave` governor allows HWP to operate freely, which paradoxically often delivers
equal or better performance because HWP can boost aggressively when needed and drop frequency when
idle.

```bash
# Set governor for all cores
echo performance | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor

# Verify
cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor
```

### Energy Performance Preference (EPP)

With HWP active, you can set the Energy Performance Preference via the
`energy_performance_preference` sysfs attribute:

```bash
# Set to "performance" for maximum frequency
echo performance | sudo tee /sys/devices/system/cpu/cpu0/cpufreq/energy_performance_preference

# Set to "balance_performance" for good performance with reasonable power
echo balance_performance | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/energy_performance_preference

# Set to "power" for minimum power
echo power | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/energy_performance_preference
```

This interacts with HWP's autonomous frequency selection. `performance` biases HWP toward higher
frequencies; `power` biases toward lower frequencies. For desktop tuning, `balance_performance` is
usually the best default.

---

## Thermal Throttling

### How Thermal Throttling Works

Modern CPUs have a thermal monitor that continuously reads the on-die digital thermal sensors. When
the temperature reaches the thermal throttling threshold (PROCHOT), the CPU takes corrective action:

1. **Clock modulation:** The CPU inserts idle cycles to reduce power dissipation. It may skip every
   Nth clock cycle (e.g., 50% modulation means the CPU is effectively running at half speed).
2. **Frequency reduction:** The CPU reduces its operating frequency to lower power consumption.
3. **Voltage reduction:** On some platforms, the CPU reduces voltage along with frequency.

Intel CPUs begin throttling at 100 °C (Tjmax). AMD Zen 4 throttles at 95 °C. These are
non-configurable hardware limits designed to prevent permanent damage.

### Per-Core vs. Package Thermal Throttling

Thermal throttling can occur at two levels:

- **Per-core throttling:** Only the hottest core(s) reduce frequency. Other cores continue at full
  speed. This is the default behavior on modern Intel and AMD CPUs.
- **Package throttling:** The entire package reduces frequency when the package average or peak
  temperature exceeds the limit.

On hybrid Intel CPUs (P-cores and E-cores), per-core throttling is important because P-cores and
E-cores have different thermal densities. A P-core running AVX-512 can hit 100 °C while adjacent
E-cores are at 70 °C. Per-core throttling ensures the E-cores are not penalized.

### PL1 and PL2 (Intel Power Limits)

Intel CPUs implement two configurable power limits:

- **PL1 (Sustained Power Limit):** The long-term average power limit, typically equal to the TDP.
  For a Core i7-13700K, PL1 is 125 W by default. The CPU may exceed PL1 for up to the PL2 time
  window (Tau, typically 28 seconds on desktop).
- **PL2 (Short-term Power Limit):** The peak power limit during turbo boost. For the same CPU, PL2
  is 253 W by default.

After the Tau window expires, the CPU must reduce its power draw to PL1. This is why you see
benchmark scores drop after the first 30 seconds — the CPU transitions from PL2 to PL1.

On Linux, PL1 and PL2 are exposed via the `powercap` subsystem:

```bash
# Read current PL1/PL2
cat /sys/class/powercap/intel-rapl:0/constraint_0_power_limit_uw
cat /sys/class/powercap/intel-rapl:0/constraint_1_power_limit_uw

# Set PL1 to 150W (in microwatts)
echo 150000000 | sudo tee /sys/class/powercap/intel-rapl:0/constraint_0_power_limit_uw

# Set PL2 to 280W
echo 280000000 | sudo tee /sys/class/powercap/intel-rapl:0/constraint_1_power_limit_uw
```

On AMD, the equivalent limits are PPT (Package Power Tracking), TDC (Thermal Design Current), and
EDC (Electrical Design Current). These are configured via the `ryzenadj` tool or BIOS.

### Monitoring Power and Temperature

```bash
# Install msr-tools for direct MSR access
sudo modprobe msr

# Read package temperature (Intel)
sudo rdmsr 0x1A2

# Read PL1
sudo rdmsr -u 0x610

# Read PL2
sudo rdmsr -u 0x648
```

For comprehensive monitoring, use `sensors` (from the `lm-sensors` package) or `turbostat`:

```bash
# Run turbostat for 5 seconds
sudo turbostat --show Core,CPU,Busy%,Bzy_MHz,PKG%,PC8,PC9,PC10,PkgWatt,PkgTmp -i 5

# Monitor all sensors
sensors
```

---

## SMT and Hyper-Threading

Simultaneous Multithreading (SMT, branded as Hyper-Threading by Intel) allows a single physical core
to execute instructions from two threads simultaneously by sharing execution resources.

### How SMT Works

Each physical core has a set of execution ports, reorder buffer entries, and load/store queue
entries. With SMT enabled, two logical threads share these resources:

- Each thread has its own architectural state (registers, instruction pointers).
- Execution ports, caches, and execution units are shared and dynamically allocated between the two
  threads based on availability.
- When one thread stalls (e.g., waiting for a cache miss), the other thread can use the execution
  resources.

### Performance Impact

SMT performance depends entirely on the workload:

- **Highly parallel workloads with independent threads:** SMT provides 20–30% throughput
  improvement.
- **Workloads with shared data structures:** SMT can degrade performance due to cache contention and
  increased cache coherence traffic.
- **Single-threaded workloads:** SMT provides no benefit; disabling it may slightly improve
  single-thread performance by giving one thread exclusive access to all execution resources.

```bash
# Disable SMT (Hyper-Threading) on Linux
echo 0 | sudo tee /sys/devices/system/cpu/smt/active

# Re-enable
echo 1 | sudo tee /sys/devices/system/cpu/smt/active
```

:::warning
Disabling SMT halves your logical core count. Ensure your workload can run within the
physical core limit before disabling it. Some applications are licensed per logical core and will
not work correctly with SMT disabled.
:::

### Security Considerations

SMT has been implicated in several side-channel attacks (Spectre variants, MDS, L1TF). For
security-sensitive environments, some organizations recommend disabling SMT entirely. The
performance cost is workload-dependent but can be 15–30% for parallel workloads.

On Linux, kernel parameter `nosmt` disables SMT at boot time.

---

## Practical Tuning Workflow

### Desktop Tuning (Maximum Performance)

```bash
# 1. Set performance governor
echo performance | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor

# 2. Set EPP to performance
echo performance | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/energy_performance_preference

# 3. Disable C-states (optional, for latency-sensitive workloads)
# Add to kernel parameters: intel_idle.max_cstate=1 processor.max_cstate=1

# 4. Verify settings
cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor
cat /sys/devices/system/cpu/cpu0/cpufreq/energy_performance_preference
```

### Server Tuning (Balanced Performance/Power)

```bash
# 1. Use powersave governor with HWP (allows autonomous boosting)
echo powersave | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor

# 2. Set EPP to balance_performance
echo balance_performance | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/energy_performance_preference

# 3. Leave C-states enabled for power savings during idle periods
# No additional configuration needed
```

### Latency-Sensitive Tuning (Trading Power for Consistency)

```bash
# 1. Pin the workload to specific cores
taskset -c 4-7 ./latency_sensitive_app

# 2. Isolate the cores from the scheduler (kernel boot parameter)
# isolcpus=4,5,6,7 nohz_full=4,5,6,7 rcu_nocbs=4,5,6,7

# 3. Disable C-states on those cores
# This is harder to do per-core; consider using cpupower
sudo cpupower idle-set -D

# 4. Set governor to performance
sudo cpupower frequency-set -g performance
```

---

## Common Pitfalls

### Forcing Maximum Frequency Does Not Always Improve Performance

Setting the governor to `performance` prevents frequency scaling but does not improve performance
for most workloads. With HWP active, the CPU already boosts to maximum frequency when needed and
drops to lower frequencies when idle to save power and reduce thermals. Forcing maximum frequency
can actually hurt performance by preventing the CPU from entering low-power states during brief idle
periods, which increases average temperature and may trigger earlier thermal throttling under
sustained multi-core loads.

### Ignoring NUMA on Multi-Socket Systems

Running a memory-intensive workload on a NUMA system without binding it to a specific NUMA node can
result in 30–50% of memory accesses going to remote DRAM. Always check the NUMA topology with
`numactl --hardware` and use `numactl` to bind memory-intensive workloads to a single node.

### Disabling SMT Without Measuring

Disabling SMT is a common recommendation for security hardening, but the performance impact is
workload-dependent. Always benchmark your specific workload with SMT enabled and disabled before
making a decision. For compute-heavy parallel workloads, the 20–30% throughput loss from disabling
SMT may be unacceptable.

### Overlooking Microcode Updates

CPU microcode updates can change power management behavior, fix errata, and even adjust boost
algorithms. After a microcode update (delivered via BIOS/UEFI or Linux firmware package), re-test
your tuning settings. A stable overclock or undervolt may become unstable after a microcode update.

### Measuring Frequency with the Wrong Tool

Many tools report the requested frequency rather than the actual frequency. On modern CPUs with HWP,
the actual frequency changes hundreds of times per second. Use `turbostat` or `perf stat` to measure
the actual average frequency over a period, not the instantaneous value reported by
`cat /proc/cpuinfo`.

### Confusing TDP with Actual Power Draw

TDP (Thermal Design Power) is a marketing metric, not a power consumption limit. An Intel CPU with a
125 W TDP can easily draw 200–250 W during multi-core boost (PL2 window). Always monitor actual
power draw with `turbostat`, `RAPL`, or HWiNFO64 rather than relying on TDP specifications.

### Applying Desktop Tuning to Servers

Server tuning priorities differ from desktop tuning. On servers, power efficiency, thermal headroom
for neighboring components, and consistent latency matter more than peak single-core performance.
Using the `performance` governor on a server with 64+ cores can result in excessive power
consumption and thermal throttling under full load. Use `powersave` with HWP and
`balance_performance` EPP instead.

## CPU Microcode Updates

Modern CPUs receive firmware-level bug fixes and performance adjustments through microcode updates.
These updates ship with BIOS/UEFI firmware and with the Linux kernel itself. On Linux, microcode is
loaded early in boot from an initramfs image containing the latest microcode binary from Intel or
AMD.

### Checking Current Microcode Version

```bash
# Intel
cat /sys/devices/system/cpu/cpu0/microcode/version

# AMD
cat /sys/devices/system/cpu/cpu0/microcode/amd/patch_id

# Generic: see what the kernel loaded
dmesg | grep microcode
```

Typical output shows the revision loaded and whether it was an early load (initramfs) or a late load
(after root filesystem mounted). Early loading is preferred because it applies fixes before any
userspace code runs.

### Why Microcode Matters for Tuning

Microcode updates can change CPU behavior in ways that affect performance measurements:

- **Spectre/Meltdown mitigations:** Some microcode updates add IBRS, STIBP, or PSFD instructions
  that add overhead to syscalls and indirect branches. The performance impact ranges from 2% to 30%
  depending on workload.
- **Voltage/frequency adjustments:** Intel has shipped microcode updates that reduce maximum turbo
  frequencies to address stability issues (e.g., the Ice Lake PL1/PL2 fixes).
- **Cache behavior changes:** Some updates modify L3 cache allocation or prefetcher behavior.

:::warning
Never benchmark a CPU before verifying the microcode version. A BIOS update that includes
a new microcode revision can invalidate months of tuning work if it changes turbo behavior or adds
mitigation overhead.
:::

### Forcing Microcode Reload

On Linux, you can trigger a late microcode reload (without reboot) if you have updated the microcode
binary in `/lib/firmware/intel-ucode/` or `/lib/firmware/amd-ucode/`:

```bash
# Reload microcode (late load)
echo 1 > /sys/devices/system/cpu/microcode/reload

# Verify it took effect
dmesg | tail -5
```

Note that late loading does not apply all fixes. Some security mitigations must be applied before
the kernel initializes CPU features, meaning a reboot is required.

## Intel Thread Director

Introduced with Alder Lake (12th Gen), Intel Thread Director (ITD) is a hardware-assisted thread
scheduling technology that communicates per-thread classification to the operating system via ACPI
and MSR interfaces. ITD classifies each instruction stream as belonging to one of several
categories:

| Class ID | Category          | Typical Use Case              |
| -------- | ----------------- | ----------------------------- |
| 0        | None              | Idle or unknown               |
| 1        | Interactive       | UI thread, input handling     |
| 2        | Background        | File indexing, telemetry      |
| 3        | Management        | Service threads, daemons      |
| 4        | Non-Turbo         | Thermal-constrained workloads |
| 5        | Throughput        | Parallel compute              |
| 6        | Latency-sensitive | Real-time audio, game logic   |

### Monitoring Thread Director

```bash
# Check if ITD is supported
cat /proc/cpuinfo | grep -i "model name"

# View per-thread classification (requires kernel 5.18+)
cat /sys/devices/system/cpu/cpu*/topology/thread_siblings_list

# Use turbostat to see ITD feedback
turbostat --show Core,CLUSTER,Busy%,Bzy_MHz,IRQ,PkgWatt,PkgTmp -i 5
```

### Tuning Implications

ITD works in conjunction with the kernel scheduler. On Linux, the `intel_pstate` driver and the
`schedutil` governor consumes ITD hints to place threads on appropriate cores. For heterogeneous
architectures (P-cores and E-cores):

- **P-cores** have higher single-thread performance and should receive latency-sensitive and
  throughput-classified threads.
- **E-cores** are more power-efficient and should receive background and throughput workloads where
  per-thread latency is less critical.

You can influence this behavior with process affinity and cgroups:

```bash
# Pin a latency-sensitive process to P-cores (cores 0-7 on typical Alder Lake)
taskset -c 0-7 ./my_realtime_app

# Use cgroups v2 to constrain a batch job to E-cores
mkdir /sys/fs/cgroup/batch_jobs
echo "8-15" > /sys/fs/cgroup/batch_jobs/cpuset.cpus
echo $PID > /sys/fs/cgroup/batch_jobs/cgroup.procs
```

:::info
On server platforms with homogeneous cores (Xeon Scalable), ITD is less relevant because all
cores have identical capabilities. ITD primarily benefits client and workstation platforms with
big.LITTLE-style heterogeneous core layouts.
:::

## AMD Precision Boost Overdrive 2

AMD's PBO2 (also called Curve Optimizer) allows per-core undervolting/overvolting by applying a
global offset to the CPU's stock voltage-frequency curve. Unlike traditional undervolting which
shifts the entire curve, PBO2 can apply different offsets to individual cores based on their silicon
quality (binning).

### How Curve Optimizer Works

The stock `V/F` curve defines voltage as a function of frequency. Curve Optimizer applies a negative
offset (undervolt) or positive offset (overvolt) at each frequency point:

$$V_{actual}(f) = V_{stock}(f) + \text{offset}$$

Where `offset` is typically in the range of -30 to +30 steps, with each step approximately equal to
5mV. So a `-20` step offset reduces voltage by roughly 100mV at every frequency point.

### Configuring PBO2

On most AMD motherboards, PBO2 is configured in the BIOS:

1. Enable Precision Boost Overdrive (Advanced > AMD Overclocking > PBO)
2. Set PBO Mode to `Advanced`
3. Configure Curve Optimizer:
   - **Mode:** All Core or Per Core
   - **Sign:** Negative (undervolt) or Positive (overvolt)
   - **Magnitude:** 0-30 steps

```bash
# On Linux, check if PBO2 settings are active
# Install and use ryzenadj
ryzenadj --info

# Typical output shows current STAPM limit, PPT, TDC, EDC
# Curve Optimizer offsets are visible in:
cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_voltages
```

### Stability Testing Curve Optimizer Offsets

Finding the optimal negative offset requires iterative testing:

```bash
# Stress test loop for finding stable undervolt
for offset in 5 10 15 20 25 30; do
  echo "Testing Curve Optimizer offset: -${offset}"
  # Set offset via ryzenadj (if supported)
  ryzenadj --co-negative=${offset}
  # Run stress test for 15 minutes
  stress-ng --cpu 0 --cpu-method all --timeout 900 --metrics-brief
  # Check for WHEA errors or machine check exceptions
  dmesg | grep -i "mce\|hardware error\|corrected" | tail -3
  echo "---"
done
```

:::warning
A negative offset that is too aggressive causes WHEA (Windows Hardware Error
Architecture) errors on Windows or Machine Check Exceptions (MCE) on Linux. These can cause silent
data corruption. Always verify stability with both compute tests (Prime95, stress-ng) and memory
tests (memtester) when changing voltage offsets.
:::

## Interpreting turbostat Output

`turbostat` is the single most useful tool for real-time CPU frequency, power, and thermal
monitoring on Intel and AMD platforms. It reads model-specific registers (MSRs) directly, giving you
hardware-level accuracy.

### Basic Usage

```bash
# Snapshot every 5 seconds, show per-core stats
turbostat -i 5

# Show specific columns
turbostat --show Core,CLUSTER,Busy%,Bzy_MHz,IRQ,PkgWatt,PkgTmp,IPC -i 5

# Run a command and report statistics
turbostat ./my_benchmark
```

### Key Columns Explained

| Column    | Meaning                              | What to Look For                                      |
| --------- | ------------------------------------ | ----------------------------------------------------- |
| `Bzy_MHz` | Average frequency while busy         | Should be close to max turbo during load              |
| `Busy%`   | Percentage of time core was not idle | 100% under full load                                  |
| `IPC`     | Instructions per cycle               | Higher is better; architecture-dependent              |
| `PkgWatt` | Package power draw in watts          | Compare against TDP/TDP PL2                           |
| `PkgTmp`  | Package temperature in Celsius       | Should stay below thermal throttle point              |
| `IRQ`     | Time servicing interrupts            | High values indicate driver or I/O overhead           |
| `SMI`     | System Management Interrupts         | Should be near zero; high values indicate BIOS issues |
| `CORE%c1` | Core C1 residency                    | Higher means more idle time                           |
| `POLL%`   | Polling idle time                    | Should be low unless using `idle=poll`                |

### Example: Detecting Thermal Throttling

```bash
# Run turbostat while stressing the CPU
turbostat --show PkgTmp,Bzy_MHz,PkgWatt,Core,ThmTmp -i 1 &
TPID=$!
stress-ng --cpu 0 --cpu-method all --timeout 60
kill $TPID

# If you see Bzy_MHz drop while PkgTmp approaches Tjunction (typically 95-105C),
# the CPU is thermally throttling. Check throttling counters:
rdmsr 0x19C 2>/dev/null || echo "Thermal status MSRs not accessible"
```

## Per-Core Overclocking Methodology

On platforms that support per-core frequency offsets (primarily Intel K-series and AMD Ryzen with
PBO2), you can apply different multipliers or voltage offsets to individual cores. This accounts for
silicon variation where some cores bin higher than others on the same die.

### Finding the Best Cores

```bash
# Run single-threaded tests on each core to find the strongest ones
for core in $(seq 0 $(nproc --all | awk '{print $1-1}')); do
  echo "Testing core $core"
  taskset -c $core stress-ng --cpu 1 --cpu-method all \
    --timeout 60 --metrics-brief 2>&1 | tail -1
done
```

Cores that produce the highest throughput (or complete the test fastest) are the strongest. On Intel
platforms, you can verify which core is the "favorite core" (receives the highest single-core
turbo):

```bash
# The favorite core gets the highest turbo frequency
cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_max_freq | \
  awk '{print $1}' | sort -n | uniq -c | sort -rn
```

### Applying Per-Core Offsets

On Intel K-series (via BIOS or Intel XTU):

1. Set all-core multiplier to your desired base overclock.
2. Test each core individually at +2, +3, +4 bins above the all-core setting.
3. Apply per-core positive offsets only to cores that pass 1-hour stability testing at the higher
   multiplier.
4. Pin latency-sensitive processes to the best cores.

```bash
# Verify per-core max frequencies after BIOS configuration
for i in $(seq 0 $(nproc --all | awk '{print $1-1}')); do
  max_freq=$(cat /sys/devices/system/cpu/cpu$i/cpufreq/cpuinfo_max_freq)
  echo "Core $i: $(echo "scale=0; $max_freq/1000" | bc) MHz"
done
```

## CPU Benchmark Methodology

Benchmarking CPUs for tuning purposes requires a disciplined approach to avoid common measurement
errors. The goal is not to produce a score for publication but to measure the effect of a specific
tuning change.

### Benchmark Categories

| Category      | Tools                                    | What It Measures                    |
| ------------- | ---------------------------------------- | ----------------------------------- |
| Single-thread | Cinebench R23 ST, Geekbench 6 ST         | Max turbo frequency, IPC            |
| Multi-thread  | Cinebench R23 MT, stress-ng              | All-core frequency, thermal limits  |
| Memory-bound  | STREAM, memcpy benchmarks                | Memory subsystem, cache performance |
| I/O-bound     | fio, sysbench fileio                     | CPU impact on storage throughput    |
| Real-world    | Application-specific (compile, database) | Actual workload performance         |

### Running Controlled Benchmarks

```bash
# 1. Set CPU governor to performance (eliminate governor noise)
echo performance | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor

# 2. Disable turbo boost (establish baseline)
echo 1 | sudo tee /sys/devices/system/cpu/intel_pstate/no_turbo

# 3. Pin to specific cores (eliminate migration noise)
taskset -c 2-5 ./my_benchmark

# 4. Run multiple iterations and take median
for i in $(seq 1 5); do
  ./my_benchmark 2>&1 | grep "score"
done | sort -n | awk '{arr[NR]=$0} END {print arr[int(NR/2)+1]}'

# 5. Re-enable turbo and compare
echo 0 | sudo tee /sys/devices/system/cpu/intel_pstate/no_turbo
```

### Interpreting Cinebench Results

Cinebench R23 is the de facto standard for quick CPU performance assessment. Key interpretation
points:

- **Single-core score** correlates directly with max turbo frequency and IPC. If your single-core
  score is below expected values for your CPU model, check that turbo boost is working and that
  thermal throttling is not occurring.
- **Multi-core score** should scale roughly linearly with core count, minus a degradation factor
  (typically 10-25%) due to shared cache contention, memory bandwidth saturation, and thermal
  limits.
- **Multi-core ratio** (MT/ST) indicates scaling efficiency. A ratio below `cores * 0.75` suggests
  memory bandwidth or thermal throttling issues.

:::tip
Always run Cinebench at least 3 times and report the median. The first run may be slower due
to caching effects. Let the CPU cool between runs (wait for temperatures to drop below 50C) to
ensure consistent thermal conditions.
:::

### Geekbench vs Cinebench

Geekbench 6 includes real-world workloads (machine learning, image processing, cryptography) but is
closed-source and can vary between runs due to background OS activity. Cinebench uses a fixed
workload based on Cinema 4D rendering, making it more reproducible. For tuning validation, Cinebench
is preferred. For comparing different CPU architectures, Geekbench provides a broader perspective.

### PassMark for System-Level Comparison

PassMark PerformanceTest runs a suite of CPU, disk, GPU, and memory tests, producing an overall
score. It is useful for system-level comparisons but less precise for isolating individual tuning
changes. Use it for before/after system comparisons, not for per-parameter optimization.

## Common Pitfalls (Extended)

### Benchmarking on AC Power vs Battery

On laptops, always benchmark on AC power with the charger capable of delivering full wattage. A 65W
charger on a system that can draw 135W under load will cause immediate throttling, invalidating
results. Verify with:

```bash
cat /sys/class/power_supply/AC*/online
cat /sys/class/power_supply/BAT*/power_now  # Battery discharge rate (negative = charging)
```

### Ignoring Background Services

Systemd services, cron jobs, and desktop environments can introduce noise. Before benchmarking:

```bash
# Stop non-essential services
sudo systemctl stop snapd cron fstrim.timer updatedb.timer
# Close unnecessary applications and check CPU usage
top -bn1 | head -20
```

### Forgetting to Save BIOS Settings

BIOS settings are stored in CMOS, which is powered by a coin cell battery. If the battery dies, all
custom settings revert to defaults. After a tuning session, export your BIOS profile (if the
motherboard supports it) or photograph every settings page. Some high-end motherboards support
saving profiles to USB.

### Not Accounting for Silicon Lottery

Two identical CPU models can differ by 100-300 MHz in stable overclock or undervolt headroom due to
manufacturing variation. Do not assume your results will generalize. When advising others on tuning,
provide ranges rather than exact values, and always include the disclaimer that individual results
vary.
