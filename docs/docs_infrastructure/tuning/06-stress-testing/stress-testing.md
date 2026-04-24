---
id: stress-testing
title: Stress Testing and Validation
description:
  Stress testing methodology — CPU, GPU, memory, and storage stress tests, stability validation, and
  monitoring.
slug: stress-testing
---

## Why Stress Test

Stress testing serves three purposes for a systems engineer:

1. **Stability verification** — Confirming that hardware operates correctly under worst-case
   conditions. Tuning changes (undervolting, overclocking, memory timing adjustments) must be
   validated with systematic testing. A system that boots and runs a web browser is not proven
   stable.

2. **Thermal profiling** — Establishing the thermal ceiling of your system under sustained load.
   This information guides cooling decisions and identifies whether thermal throttling will occur in
   production workloads.

3. **Silicon quality assessment** — Stress testing reveals the headroom available in your specific
   silicon sample. Two identical CPUs may have very different thermal and stability profiles due to
   manufacturing variance (the silicon lottery).

### The Cost of Insufficient Testing

Untested instability can manifest as:

- **Silent data corruption:** The most dangerous form. The system continues operating but produces
  incorrect results. Database corruption, file system errors, compilation failures with wrong
  output, and machine learning models trained on corrupted data are all possible outcomes.
- **WHEA errors:** CPU-detected hardware errors that are corrected internally but indicate the
  silicon is operating outside its reliable envelope.
- **Intermittent crashes:** BSODs, kernel panics, spontaneous reboots, and application crashes that
  are difficult to reproduce and diagnose.
- **Reduced lifespan:** Sustained operation at excessive voltage and temperature causes
  electromigration, accelerating silicon degradation.

---

## CPU Stress Tests

### Prime95

Prime95 is the gold standard for CPU stability testing. It uses GIMPS (Great Internet Mersenne Prime
Search) algorithms to stress the CPU with varying FFT (Fast Fourier Transform) sizes.

| Test Mode  | FFT Size       | What It Stresses            | Primary Use                              |
| ---------- | -------------- | --------------------------- | ---------------------------------------- |
| Small FFTs | 4–4096 K       | L1/L2 cache, ALU, FPU       | Maximum heat generation, thermal testing |
| Large FFTs | 4096–4096 K    | L3 cache, memory controller | Cache and memory stress                  |
| Blend      | Mixed          | All levels                  | Overall system stability                 |
| Custom     | User-specified | User-specified              | Targeted testing                         |

**Recommended configuration for stability testing:**

```text
Test=FFT
MinFFT=4
MaxFFT=4096
RunFFT=1
Memory=90
Time=60
```

This runs all FFT sizes up to 4096 K with 90% memory usage for 60 minutes. Adjust `Time` to 120–240
minutes for production systems.

### OCCT

OCCT (OverClock Checking Tool) is a comprehensive stability tester that catches errors Prime95 may
miss:

| Test               | Duration | What It Catches                     |
| ------------------ | -------- | ----------------------------------- |
| OCCT CPU (Small)   | 30 min   | CPU thermal and voltage instability |
| OCCT CPU (Large)   | 30 min   | Memory controller instability       |
| OCCT CPU (Extreme) | 30 min   | Combined CPU and memory stress      |
| OCCT Memory        | 60 min   | Memory-specific errors              |
| OCCT Power         | 30 min   | PSU voltage stability under load    |

OCCT is particularly effective at catching marginal instability that Prime95's large FFT sizes do
not exercise. Use OCCT as a secondary test after Prime95 passes.

### AIDA64

AIDA64 provides a suite of stress tests with real-time monitoring:

- **System Stability Test:** Stresses CPU, FPU, cache, and memory simultaneously.
- **FPU Stress Test:** Heavy floating-point workload that generates maximum heat on AVX-capable
  CPUs.
- **Cache Stress Test:** Exercises L1, L2, and L3 caches.

AIDA64 is less effective at catching instability than Prime95 or OCCT but provides excellent
monitoring and is useful for thermal profiling.

### y-cruncher

y-cruncher is a multi-threaded Pi computation program that stresses the CPU differently from
Prime95:

```text
# Recommended test: Variable Size Transform (VST)
# Select "All" computation sizes
# Run for at least 15-30 minutes
```

y-cruncher is particularly good at catching instability in workloads that mix integer and
floating-point operations with irregular memory access patterns. If Prime95 passes but y-cruncher
fails, your settings are marginal.

### Linpack

Linpack (specifically the Intel-optimized version) is the most power-hungry CPU stress test
available. It generates more heat than Prime95 by using AVX instructions heavily:

```bash
# Install Linpack (Intel MKL version)
sudo apt install intel-mkl

# Run Linpack
./linpack_xeon64
```

:::warning Linpack generates extreme power consumption — often exceeding the CPU's rated TDP by
30–50%. This can push VRMs and PSU beyond their rated capacity. Only use Linpack for brief thermal
profiling (5–10 minutes), not for extended stability testing.
:::

---

## GPU Stress Tests

### FurMark

FurMark is a GPU power virus that pushes the GPU to its maximum power draw. It renders a fur-covered
donut using extremely heavy shaders.

- **Use for:** Verifying thermal limits and power delivery stability.
- **Duration:** 15–30 minutes is sufficient.
- **Do not use for:** Extended stability testing. FurMark stresses the GPU in a way no real
  application does. A GPU stable under FurMark may crash in games, and vice versa.

### 3DMark Time Spy / Speed Way

3DMark benchmarks provide realistic gaming workloads:

- **Time Spy:** Direct3D 12 benchmark. Run the stress test mode for 20+ loops.
- **Speed Way:** Direct3D 12 Ultimate with ray tracing. More representative of modern games.

### Unigine Superposition

Superposition is a visually demanding benchmark that stresses both the GPU and VRAM:

- Run at your native resolution with maximum quality settings.
- Run for 30+ minutes to catch thermal-related instability.

### GPU Memory Testing

For GPU memory overclocking stability, use CUDA memtest (NVIDIA) or ROCm memtest (AMD):

```bash
# NVIDIA CUDA memtest
./cuda_memtest.sh  # Runs all tests

# Or specify iteration count
./cuda_memtest.sh --iterations 10
```

---

## Memory Stress Tests

### MemTest86

MemTest86 is the standard for memory testing. It runs from a bootable USB drive, testing memory
without any operating system interference. This eliminates potential issues with OS-level memory
management.

```text
# Create bootable USB
1. Download MemTest86 from memtest86.com (free version)
2. Flash to USB using the provided image tool
3. Boot from USB
4. Run at least 4 passes (full test cycle)
```

**Pass requirements:**

| Scenario                            | Minimum Passes | Recommended |
| ----------------------------------- | -------------- | ----------- |
| Quick check after settings change   | 4              | 4           |
| New build validation                | 4              | 8           |
| Production system                   | 8              | 16+         |
| Troubleshooting intermittent errors | 8              | 16+         |

Any errors, even a single bit, indicate instability. There is no such thing as an "acceptable"
memory error rate.

### TestMem5 (TM5)

TestMem5 runs within Windows and can catch timing instability that MemTest86 misses:

```text
# Recommended configurations:
1. Download TM5 and the "Extreme by Anta777" config
2. Extract TM5 to a folder
3. Place the .tm5 config file in the configs/ subdirectory
4. Run TM5, select the Anta777 config
5. Run for at least 30-60 minutes
```

TM5 with the Anta777 config is specifically designed to detect marginal timing instability. It uses
custom test patterns that stress the DRAM cells at the boundaries of their specified timings.

### HCI MemTest

HCI MemTest (Windows) runs as a background application, testing memory while you use the system
normally:

```text
# Configuration:
1. Open N instances of HCI MemTest (N = GB of RAM / 2)
2. Each instance should test ~1500-2000 MB
3. Run until total coverage exceeds 200%
4. Any errors indicate instability
```

HCI MemTest is useful because it tests memory under realistic conditions (OS running, background
processes active). It can catch errors that only occur under specific memory access patterns.

### Karhu RAM Test

Karhu RAM Test (paid, Windows) is the most thorough Windows-based memory tester. It uses algorithmic
test patterns similar to TM5 but with a more polished interface and automated pass/fail reporting.

```text
# Run settings:
1. Set memory percentage to 90-95%
2. Set iterations to 4-6
3. Let it run for 2-4 hours
4. Any errors = instability
```

---

## Storage Stress Tests

### fio (Flexible I/O Tester)

fio is the standard storage benchmarking and stress testing tool on Linux:

```bash
# 4K random read test (single queue depth)
fio --name=randread --ioengine=libaio --iodepth=1 --rw=randread \
    --bs=4k --direct=1 --size=1G --numjobs=4 --runtime=60 \
    --group_reporting --output-format=json

# 4K random read/write test (queue depth 64)
fio --name=randrw --ioengine=libaio --iodepth=64 --rw=randrw \
    --rwmixread=70 --bs=4k --direct=1 --size=4G --numjobs=4 \
    --runtime=60 --group_reporting

# Sequential write test
fio --name=seqwrite --ioengine=libaio --iodepth=32 --rw=write \
    --bs=128k --direct=1 --size=16G --numjobs=1 --runtime=60 \
    --group_reporting
```

### badblocks

badblocks is a simple but effective tool for verifying storage media integrity:

```bash
# Destructive read-write test (4 passes)
sudo badblocks -wsv /dev/sdX

# Non-destructive read-only test
sudo badblocks -sv /dev/sdX
```

:::warning `badblocks -w` is destructive — it overwrites all data on the device. Only use on
unpartitioned drives or drives whose data you have backed up.
:::

### CrystalDiskMark

CrystalDiskMark (Windows) provides an easy GUI for sequential and random I/O testing:

- **Seq Q8T1:** Sequential read/write with queue depth 8, 1 thread. Tests peak sequential
  throughput.
- **4K Q32T1:** 4K random with queue depth 32, 1 thread. Tests SSD controller performance.
- **4K Q1T1:** 4K random with queue depth 1, 1 thread. Tests worst-case random latency.

---

## Combined System Tests

### Running Multiple Stress Tests Simultaneously

To validate the entire system under maximum load, run CPU, GPU, and memory tests concurrently:

```bash
# Terminal 1: CPU stress (Linux)
stress-ng --cpu 0 --cpu-method all --timeout 3600 --metrics-brief

# Terminal 2: Memory stress
stress-ng --vm 8 --vm-bytes 80% --timeout 3600 --metrics-brief

# Terminal 3: GPU stress (if available)
gpu_burn 600  # NVIDIA GPU stress test

# Terminal 4: Storage stress
fio --name=stress --ioengine=libaio --iodepth=32 --rw=randrw \
    --bs=4k --direct=1 --size=4G --numjobs=4 --runtime=3600 \
    --group_reporting
```

This tests:

- CPU under thermal and power constraints (simultaneous with GPU and storage load)
- Memory stability under pressure from multiple workloads
- GPU thermal behavior with CPU generating additional heat
- PSU voltage stability under combined load
- Cooling system capacity

---

## Monitoring During Stress Tests

### Windows Monitoring

**HWiNFO64** is the primary monitoring tool:

1. Run HWiNFO64 in "Sensors Only" mode.
2. Click "Logging Start" to begin recording to CSV.
3. Monitor these values:
   - CPU Package Temperature (target: &lt; 90 °C)
   - CPU Core Max (target: &lt; 95 °C)
   - CPU Package Power (compare against PL1/PL2 limits)
   - CPU Vcore (should be stable, not fluctuating wildly)
   - VRM Temperature (target: &lt; 80 °C)
   - GPU Temperature and Hotspot (target: &lt; 80 °C edge, &lt; 100 °C junction)
   - GPU Power Draw (compare against power limit)
   - WHEA Errors (target: 0)
   - +12V, +5V, +3.3V rails (should be within 5% of nominal)

### Linux Monitoring

```bash
# Install monitoring tools
sudo apt install lm-sensors stress-ng fio

# Monitor all sensors
watch -n 1 "sensors && free -h && df -h"

# CPU-specific monitoring
sudo turbostat --show Core,CPU,Busy%,Bzy_MHz,PKG%,PkgWatt,PkgTmp -i 5

# GPU monitoring (NVIDIA)
watch -n 1 nvidia-smi

# GPU monitoring (AMD)
watch -n 1 rocm-smi

# Memory monitoring
watch -n 1 "free -h && cat /proc/meminfo | grep -E 'MemAvailable|MemFree|Cached'"

# Storage I/O monitoring
iostat -x 5
```

### Setting Up Alerting

Configure alerts to notify you when critical thresholds are exceeded:

```bash
# Linux: Create a simple monitoring script
cat &lt;&lt;'EOF' &gt; monitor_stress.sh
#!/bin/bash
# Alert if CPU temp exceeds 90C
TEMP=$(sensors -u | grep -A1 "Package id 0" | grep "temp1_input" | awk '{print $2}')
if (( $(echo "$TEMP &gt; 90" | bc -l) )); then
    echo "WARNING: CPU temperature at $TEMP °C" | wall
fi
EOF
chmod +x monitor_stress.sh
```

---

## Interpreting Results

### Symptom Analysis

| Symptom                 | Timing                          | Likely Cause                           | Action                                     |
| ----------------------- | ------------------------------- | -------------------------------------- | ------------------------------------------ |
| Immediate crash or BSOD | Within seconds of starting test | Voltage too low, settings incompatible | Increase voltage, revert settings          |
| Crash after 5–30 min    | During early testing            | Marginal stability                     | Increase voltage by 10–20 mV               |
| Crash after 1–4 hours   | During extended testing         | Thermal throttling, VRM overheating    | Check temps, improve cooling               |
| WHEA errors, no crash   | Throughout testing              | Silent instability                     | Increase voltage by 10 mV, retest          |
| Crash only at idle      | After stopping stress test      | C-state instability                    | Disable deep C-states, adjust idle voltage |
| Artifacts on screen     | During GPU test                 | GPU core/memory clock too high         | Reduce GPU overclock                       |
| File corruption         | After testing                   | Memory or storage instability          | Run MemTest86, check SMART data            |
| System hangs (no BSOD)  | Random                          | Severe hardware problem                | Check PSU, motherboard, RAM individually   |

### What WHEA Errors Mean

WHEA (Windows Hardware Error Architecture) errors indicate that the CPU detected an internal error
and corrected it. The correction means the system continued running, but the error itself is a
reliability concern.

| WHEA Error Type         | Meaning                                    | Severity             |
| ----------------------- | ------------------------------------------ | -------------------- |
| Corrected Machine Check | Single-bit error corrected by ECC/hardware | Low (but cumulative) |
| Cache Hierarchy Error   | L1/L2/L3 cache error                       | Medium               |
| Bus Error               | Front-side bus or interconnect error       | High                 |
| Internal Timer Error    | CPU timer error                            | Medium               |

**Zero WHEA errors is the only acceptable threshold.** Even one corrected error during stress
testing means your settings are not stable enough for production use.

---

## Testing Duration Guidelines

### Quick Smoke Test (10–15 minutes)

Run after every individual setting change:

- Cinebench R23 multi-core (1 run, ~10 min)
- Quick storage benchmark (CrystalDiskMark, ~3 min)

Catches gross instability. If this fails, go back and adjust before proceeding.

### Standard Stability Test (1–2 hours)

Minimum before considering settings "likely stable":

- Prime95 Small FFTs, 60 min
- y-cruncher VST, 15 min
- GPU: Superposition, 30 min
- Memory: TM5 with Anta777, 30 min

### Extended Stability Test (8–12 hours)

Run before putting the system into production:

- Prime95 Blend, 4–8 hours (or overnight)
- GPU: 3DMark Time Spy stress test, 20 loops (~2 hours)
- Memory: MemTest86, 8+ passes
- Storage: fio sustained write test, 4 hours

### Burn-In Test (24–48 hours)

For new builds or critical systems:

- Run all tests continuously for 24–48 hours
- Monitor with HWiNFO64 logging throughout
- Check for any errors, crashes, or anomalies in the logs

---

## Safe Temperature Limits

### CPU Temperature Limits

| Platform               | Maximum Sustained | Thermal Throttle | Absolute Maximum  |
| ---------------------- | ----------------- | ---------------- | ----------------- |
| Intel 12th–14th Gen    | 85 °C             | 100 °C           | 115 °C (junction) |
| AMD Ryzen 5000 (Zen 3) | 80 °C             | 90 °C            | 95 °C             |
| AMD Ryzen 7000 (Zen 4) | 80 °C             | 95 °C            | 95 °C             |
| AMD Ryzen 9000 (Zen 5) | 80 °C             | 95 °C            | 95 °C             |
| AMD Threadripper       | 80 °C             | 95 °C            | 110 °C            |

### GPU Temperature Limits

| Platform             | Maximum Sustained | Thermal Throttle  | Hotspot Limit     |
| -------------------- | ----------------- | ----------------- | ----------------- |
| NVIDIA RTX 30-series | 75 °C             | 83 °C (edge)      | 105 °C (junction) |
| NVIDIA RTX 40-series | 75 °C             | 83 °C (edge)      | 91 °C (junction)  |
| AMD RDNA 3           | 85 °C (junction)  | 110 °C (junction) | 120 °C (junction) |

### Memory Temperature Limits

| Type               | Maximum | Notes                                           |
| ------------------ | ------- | ----------------------------------------------- |
| DDR4               | 50 °C   | Beyond this, errors increase exponentially      |
| DDR5               | 60 °C   | DDR5 runs hotter than DDR4 at equivalent speeds |
| DDR5 with heatsink | 65 °C   | Heatsinks provide a small margin                |

---

## What Constitutes "Stable"

A system is considered stable only when:

1. **Zero WHEA errors** across all stress tests.
2. **Zero crashes or hangs** during any stress test of the recommended duration.
3. **Zero memory errors** in MemTest86 (4+ passes) and TestMem5 (30+ min).
4. **Zero visual artifacts** during GPU stress tests.
5. **Temperatures remain within safe limits** under sustained full load.
6. **Idle stability** — system remains stable for 2+ hours at idle after stress testing.
7. **Real-world validation** — the system runs your actual workloads without errors for at least one
   week.

If any single criterion fails, the system is not stable. There are no partial passes.

---

## Common Pitfalls

### Testing Only Under Load

Some instability only manifests during load transitions (idle to load, load to idle). After
confirming load stability, always test idle stability by leaving the system idle with monitoring
software running for 2+ hours. C-state instability is a common cause of idle-only crashes.

### Using a Single Stress Test

No single stress test exercises all CPU execution paths. Prime95 stresses ALU/FPU operations
differently from y-cruncher, which differs from Linpack. A system that passes Prime95 may fail
y-cruncher. Always use at least two different CPU stress tests.

### Ignoring VRM and PSU Temperatures

Monitoring CPU and GPU temperatures is not sufficient. VRM temperatures (motherboard power delivery)
and PSU temperatures are equally important. A VRM overheating at 90 °C can cause voltage instability
that manifests as CPU errors, even though the CPU itself is within temperature limits.

### Running Stress Tests Without Monitoring

Running a stress test and walking away for an hour is wasted effort if you cannot analyze the
results. Always enable logging in your monitoring software (HWiNFO64, turbostat, sensors) so you can
review temperature, voltage, and power data after the test.

### Trusting a Single Pass

A single pass of MemTest86 or a single loop of Prime95 does not prove stability. Marginal
instability may only appear after multiple passes or under specific conditions (e.g., when the
system is warm from extended use). Always run the recommended number of passes.

### Confusing Thermal Throttling with Instability

Thermal throttling is a normal protective mechanism, not instability. If your CPU thermal throttles
during Prime95 Small FFTs but does not crash or produce errors, your system is stable — just
thermally limited. Thermal throttling means you need better cooling, not different voltage or
frequency settings.

## Advanced CPU Stress Test Configurations

### Prime95 Custom FFT Configuration

For targeted stability testing, Prime95 allows custom FFT ranges:

```text
# Maximum heat generation (L1/L2 cache stress)
Test=FFT
MinFFT=2
MaxFFT=4
Memory=0
Time=60

# Memory controller stress (L3 cache and DRAM)
Test=FFT
MinFFT=32768
MaxFFT=32768
Memory=4096
Time=60

# Mixed cache stress
Test=FFT
MinFFT=4
MaxFFT=32768
Memory=2048
RunFFT=4
Time=120

# Large FFT stress (full memory)
Test=Blend
MinFFT=8
MaxFFT=4096
Memory=90
Time=480
```

### Linpack Configuration

```bash
# Intel-optimized Linpack (requires MKL)
# Configuration for maximum heat generation:
# - Use all cores/threads
# - Problem size N = 80% of installed RAM
# - Leading dimension = problem size
# - Number of trials = 10

# Example for a system with 32 GB RAM:
# N = 25000 (approximately 5 GB per matrix)
# Leading dimension = 25000
# Trials = 10

./linpack_xeon64 < linpack_input.dat
```

Linpack input file format:

```text
Sample Intel Optimized LINPACK Benchmark input file
8                     # Number of tests
1000 2000 4000 8000 16000 20000 25000 30000  # Problem sizes N
1000 2000 4000 8000 16000 20000 25000 30000  # Leading dimensions
1 1 1 1 1 1 1 1  # Number of trials per size
```

### y-cruncher Advanced Configuration

y-cruncher supports multiple computation modes:

| Mode        | Stress Type       | Duration  | Best For             |
| ----------- | ----------------- | --------- | -------------------- |
| Pi (all)    | Mixed compute     | 15–60 min | General stability    |
| Pi - 25M    | Light compute     | 5 min     | Quick smoke test     |
| Pi - 2.5B   | Heavy compute     | 30–60 min | Extended stability   |
| Benchmark   | All modes         | 10 min    | Performance baseline |
| Stress Test | AVX/FMA intensive | 15 min    | Maximum heat         |

## GPU Stress Test Advanced Configurations

### FurMark Configuration

FurMark is a GPU power virus. Configure it for thermal verification:

- **Resolution:** Use your native resolution for realistic thermal loads.
- **Anti-aliasing:** 8x MSAA increases GPU load without changing the fundamental stress pattern.
- **Time:** 15 minutes is sufficient for thermal verification. Running longer provides no additional
  benefit and risks premature wear on the GPU's VRMs.
- **Post-processing:** Enable post-processing shaders to increase VRAM usage.

### 3DMark Stress Test Configuration

3DMark Time Spy stress test runs the benchmark loop 20 times, tracking the score stability:

- **Pass threshold:** 97% score stability (the minimum score must be within 97% of the maximum).
- **Duration:** 20 loops take approximately 20–30 minutes.
- **Monitor:** Track GPU temperature, power draw, and clock speed throughout. If the score drops
  significantly in later loops, the GPU is thermal throttling.

### GPU Memory Stress Testing

```bash
# NVIDIA CUDA memtest
./cuda_memtest --num_iterations 10 --stress_mod all

# Options:
# --num_iterations  Number of test iterations (more = more thorough)
# --stress_mod all   Test all memory patterns (walk, random, checkerboard)
# --device 0         Test specific GPU (default: 0)
# --verbose          Print detailed progress

# AMD ROCm memtest
rocm-smi --showmeminfo vram  # Show VRAM info first
/opt/rocm/rocm/bin/rocminfo   # Verify GPU is accessible
# Then run the memtest binary
```

## Storage Stress Test Profiles

### fio Comprehensive Test Suite

```bash
#!/bin/bash
# Comprehensive storage stress test script

DEVICE="/dev/nvme0n1"
SIZE="16G"
RUNTIME="600"

echo "=== 4K Random Read ==="
fio --name=4k_rand_read --ioengine=libaio --iodepth=64 --rw=randread \
    --bs=4k --direct=1 --size=$SIZE --numjobs=4 --runtime=$RUNTIME \
    --group_reporting --output-format=json --output=4k_rand_read.json

echo "=== 4K Random Write ==="
fio --name=4k_rand_write --ioengine=libaio --iodepth=64 --rw=randwrite \
    --bs=4k --direct=1 --size=$SIZE --numjobs=4 --runtime=$RUNTIME \
    --group_reporting --output-format=json --output=4k_rand_write.json

echo "=== 4K Mixed R/W (70/30) ==="
fio --name=4k_mixed --ioengine=libaio --iodepth=64 --rw=randrw \
    --rwmixread=70 --bs=4k --direct=1 --size=$SIZE --numjobs=4 \
    --runtime=$RUNTIME --group_reporting --output-format=json --output=4k_mixed.json

echo "=== 128K Sequential Read ==="
fio --name=seq_read --ioengine=libaio --iodepth=32 --rw=read \
    --bs=128k --direct=1 --size=$SIZE --numjobs=1 --runtime=$RUNTIME \
    --group_reporting --output-format=json --output=seq_read.json

echo "=== 128K Sequential Write ==="
fio --name=seq_write --ioengine=libaio --iodepth=32 --rw=write \
    --bs=128k --direct=1 --size=$SIZE --numjobs=1 --runtime=$RUNTIME \
    --group_reporting --output-format=json --output=seq_write.json

echo "=== Complete ==="
```

### SMART Extended Tests

```bash
# Short test (2-5 minutes, basic)
sudo smartctl -t short /dev/nvme0n1

# Long test (2-6 hours, full surface scan)
sudo smartctl -t long /dev/nvme0n1

# Conveyance test (5 minutes, transport damage check, HDD only)
sudo smartctl -t conveyance /dev/sda

# Monitor test progress
sudo smartctl -l selftest /dev/nvme0n1

# Selective self-test (test specific LBA ranges)
# First, set the test range:
sudo smartctl -t select,0+1000 /dev/sda  # Test first 1000 sectors
```

## Monitoring During Extended Tests

### HWiNFO64 Logging Configuration

For extended stress tests, configure HWiNFO64 for comprehensive logging:

1. Open HWiNFO64 → Sensors only.
2. Click "Logging start."
3. Configure logging interval to 1 second.
4. Select all relevant sensors:
   - CPU: Temperature (all cores), Vcore, VID, Package Power, Power Limits, Multiplier, Core
     Utilization
   - GPU: Temperature (edge, junction, memory), Power, Core Clock, Memory Clock, Fan Speed, Hotspot
     Temperature
   - Memory: Temperature, DRAM Voltage
   - Motherboard: VRM Temperature, System Temperature, +12V, +5V, +3.3V
   - Storage: Temperature, Available Spare, Media Wear Indicator

### Linux Monitoring Dashboard

```bash
#!/bin/bash
# Comprehensive monitoring script for stress testing
# Run in a separate terminal during stress tests

LOG_FILE="stress_monitor_$(date +%Y%m%d_%H%M%S).log"

while true; do
    echo "=== $(date '+%Y-%m-%d %H:%M:%S') ===" >> "$LOG_FILE"

    # CPU
    echo "--- CPU ---" >> "$LOG_FILE"
    cat /proc/stat | head -5 >> "$LOG_FILE"
    cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_cur_freq >> "$LOG_FILE" 2>/dev/null

    # Memory
    echo "--- Memory ---" >> "$LOG_FILE"
    free -h >> "$LOG_FILE"

    # Temperatures
    echo "--- Temperatures ---" >> "$LOG_FILE"
    sensors -u 2>/dev/null | grep -E "temp|input" >> "$LOG_FILE"

    # Storage
    echo "--- Storage I/O ---" >> "$LOG_FILE"
    iostat -x 1 1 >> "$LOG_FILE" 2>/dev/null

    sleep 5
done
```

### Setting Up Automated Alerting

```bash
# Create an alerting script that checks thresholds
#!/bin/bash
# stress_alert.sh

MAX_CPU_TEMP=90
MAX_GPU_TEMP=85
MAX_VRM_TEMP=80

while true; do
    # CPU temperature check
    CPU_TEMP=$(sensors -u 2>/dev/null | grep -A1 "Package id 0" | grep temp1_input | awk '{print $2}')
    if [ -n "$CPU_TEMP" ] && [ "$(echo "$CPU_TEMP > $MAX_CPU_TEMP" | bc -l)" -eq 1 ]; then
        echo "ALERT: CPU temperature at ${CPU_TEMP}°C" | wall
    fi

    # VRM temperature check
    VRM_TEMP=$(sensors -u 2>/dev/null | grep -A1 "temp3_input" | tail -1 | awk '{print $2}')
    if [ -n "$VRM_TEMP" ] && [ "$(echo "$VRM_TEMP > $MAX_VRM_TEMP" | bc -l)" -eq 1 ]; then
        echo "ALERT: VRM temperature at ${VRM_TEMP}°C" | wall
    fi

    sleep 10
done
```

## Cross-Platform Testing Considerations

### Windows vs. Linux Stress Testing

| Aspect         | Windows                        | Linux                                |
| -------------- | ------------------------------ | ------------------------------------ |
| CPU stress     | Prime95, OCCT, AIDA64          | stress-ng, stress, mprime            |
| GPU stress     | FurMark, 3DMark, Superposition | gpu_burn, glmark2                    |
| Memory stress  | TestMem5, HCI MemTest, Karhu   | MemTest86 (bootable), stress-ng --vm |
| Storage stress | CrystalDiskMark, ATTO          | fio, dd, badblocks                   |
| Monitoring     | HWiNFO64, MSI Afterburner OSD  | turbostat, sensors, htop, iostat     |
| WHEA errors    | HWiNFO64, Windows Event Viewer | mcelog (if available), dmesg         |

### Bootable Stress Testing

For the most isolated testing, use a bootable environment:

- **MemTest86:** The standard for memory testing. Boots from USB, no OS required.
- **Prime95 (mprime):** Can be run from a Linux Live USB for OS-independent CPU testing.
- **mhwd (Multiple Hardware Watchdog):** Comprehensive hardware stress testing from a bootable
  environment.

## Burn-In Testing for New Builds

### 48-Hour Burn-In Protocol

For a new build, follow this comprehensive burn-in procedure:

**Day 1: CPU and Memory**

1. Run MemTest86 for 8 passes (approximately 8–12 hours).
2. Run Prime95 Small FFTs for 4 hours.
3. Run OCCT CPU (Large) for 2 hours.

**Day 2: GPU and Combined**

1. Run FurMark for 30 minutes (thermal verification only).
2. Run 3DMark Time Spy stress test (20 loops).
3. Run combined CPU + GPU stress test (Prime95 + FurMark) for 2 hours.
4. Run y-cruncher for 4 hours.

**Day 3: Storage and Extended**

1. Run fio comprehensive test suite (all profiles, 1 hour each).
2. Run badblocks on all storage devices (non-destructive read test).
3. Run SMART long test on all drives.
4. Run the system under normal use for the remainder of the day.

**Post-Burn-In Analysis:**

1. Review all HWiNFO64 logs for anomalies (temperature spikes, WHEA errors, voltage excursions).
2. Review SMART data for all drives (reallocated sectors, pending sectors, CRC errors).
3. Verify no crashes, BSODs, or application errors occurred during normal use.
4. Document the system's baseline temperatures and power consumption for future reference.

### Burn-In for Used/Hardware-Swapped Systems

When adding used hardware (CPU, RAM, GPU) to an existing system, run a focused burn-in:

- **Used CPU:** Prime95 Small FFTs for 4 hours + y-cruncher for 2 hours.
- **Used RAM:** MemTest86 for 8 passes + TestMem5 for 2 hours.
- **Used GPU:** FurMark for 30 minutes + CUDA memtest for 1 hour.
- **Used SSD/HDD:** SMART long test + badblocks non-destructive read test.

:::

:::
