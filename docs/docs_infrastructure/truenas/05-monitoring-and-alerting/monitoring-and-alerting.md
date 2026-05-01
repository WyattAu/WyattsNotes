---
id: monitoring-and-alerting
title: Monitoring and Alerting
description:
  Monitoring and Alerting — TrueNAS Built-in Monitoring; Dashboard; System
  Information; SMART Tests with worked examples and exam-style questions.
slug: monitoring-and-alerting
---

## TrueNAS Built-in Monitoring

### Dashboard

The TrueNAS dashboard provides a real-time overview of system health:

| Widget             | Information                                  |
| ------------------ | -------------------------------------------- |
| CPU Usage          | Per-core utilization percentage              |
| Memory Usage       | Used, free, cached, and wired memory         |
| Pool Usage         | Per-pool capacity, used, and available space |
| Network            | Interface throughput (Rx/Tx)                 |
| Disk I/O           | Read/write throughput per pool or disk       |
| System Temperature | CPU, disk, and enclosure temperatures        |
| System Load        | 1, 5, and 15 minute load averages            |

### System Information

Navigate to **System** → **Advanced** for detailed system information:

- **System:** Hostname, uptime, kernel version, platform
- **Hardware:** CPU model, RAM amount, PCI devices
- **Network:** Interface configuration, IP addresses, MAC addresses
- **Storage:** Pool status, disk information, SLOG/L2ARC status

---

## SMART Tests

### SMART Test Types

| Test Type       | Duration    | What It Tests                               | Recommended Frequency |
| --------------- | ----------- | ------------------------------------------- | --------------------- |
| Short           | 2–5 minutes | Basic electrical and mechanical tests       | Daily                 |
| Long (Extended) | 2–6 hours   | Full surface scan, complete mechanical test | Weekly                |
| Conveyance      | 5 minutes   | Vendor-specific (transport damage check)    | After shipping        |

### Configuring SMART Tests on TrueNAS

1. Navigate to **Data Protection** → **S.M.A.R.T. Tests** → **Add**.
2. Select the disk type (All, HDD, SSD, NVMe).
3. Select the test type (Short or Long).
4. Set the schedule (Daily, Weekly, Monthly).
5. Save.

### Interpreting SMART Results

```bash
# Check SMART health
smartctl -H /dev/sda

# Full SMART attributes
smartctl -a /dev/sda

# Check self-test log
smartctl -l selftest /dev/sda
```

Critical attributes to monitor:

| Attribute                | HDD | SSD | Warning Threshold                         |
| ------------------------ | --- | --- | ----------------------------------------- |
| Reallocated Sector Count | Yes | N/A | Any increase                              |
| Current Pending Sector   | Yes | N/A | Any non-zero value                        |
| Offline Uncorrectable    | Yes | N/A | Any non-zero value                        |
| Media Wear Indicator     | N/A | Yes | &lt; 10% remaining                        |
| Available Spare          | N/A | Yes | &lt; 10%                                  |
| Temperature              | Yes | Yes | &gt; 55 °C (HDD), &gt; 70 °C (SSD)        |
| Power-On Hours           | Yes | Yes | Compare against MTBF (HDD: ~50,000 hours) |
| Command Timeout          | Yes | Yes | Any non-zero value                        |
| UDMA CRC Error Count     | Yes | Yes | Any non-zero value (cable issue)          |

---

## ZFS Scrub Scheduling

### Scrub Configuration

1. Navigate to **Data Protection** → **Scrub Tasks** → **Add**.
2. Select the pool to scrub.
3. Set the schedule (Monthly is standard for HDD pools; Weekly for SSD pools).
4. Set the threshold (minimum days between scrubs).
5. Enable or disable scrub when resilvering is in progress.

### Scrub Scheduling Best Practices

| Pool Type                  | Scrub Frequency | Rationale                                    |
| -------------------------- | --------------- | -------------------------------------------- |
| All-HDD                    | Monthly         | HDD scrub is slow (1–3 days for large pools) |
| All-SSD                    | Weekly          | SSD scrub is fast (1–4 hours)                |
| Hybrid (SSD special + HDD) | Monthly         | Scrub the entire pool monthly                |
| Critical data              | Bi-weekly       | Trade I/O impact for earlier detection       |

### Monitoring Scrub Progress

```bash
# Check scrub status
zpool status tank

# Example output:
# pool: tank
# status: scrub in progress since ...
# scan: scrub repaired 0 in 12h34m with 0 errors on ...
```

---

## Email Alerting

### Configuring Email on TrueNAS

1. Navigate to **System** → **Alert Settings**.
2. Configure the email settings:
   - SMTP server address and port
   - Encryption (TLS/SSL)
   - Authentication (username/password or app-specific password)
   - From address
   - To addresses (comma-separated)
3. Send a test email to verify the configuration.

### Alert Levels

TrueNAS classifies alerts into severity levels:

| Level       | Meaning                   | Example                               |
| ----------- | ------------------------- | ------------------------------------- |
| Critical    | Immediate action required | Pool degraded, disk failure           |
| Warning     | Attention needed          | SMART predictive failure, temperature |
| Information | Informational             | Scrub completed, snapshot created     |

### Common Alert Triggers

Configure alert rules for:

- **Disk failures:** Any drive with SMART status not "OK"
- **Temperature:** Disk or CPU temperature exceeding threshold
- **Pool capacity:** Pool usage exceeding 80% or 90%
- **Scrub errors:** Any errors found during scrub
- **Replication lag:** Replication destination falling behind source
- **UPS events:** Power failure, battery low, on battery

---

## UPS Monitoring

### NUT (Network UPS Tools)

NUT provides UPS monitoring and automated shutdown for TrueNAS:

1. Connect the UPS to the TrueNAS server via USB.
2. Navigate to **System** → **UPS** → **Add**.
3. Configure the UPS settings:
   - Identifier (e.g., `ups`)
   - Driver (e.g., `usbhid-ups` for USB-connected UPS)
   - Port (e.g., `auto`)
   - Shutdown mode (UPS goes to battery, or low battery)
4. Configure the shutdown behavior:
   - Minutes on battery before shutdown (e.g., 5 minutes)
   - Load percentage threshold (e.g., shut down at 50% battery)

### UPS Configuration Parameters

| Setting                | Value        | Rationale                                    |
| ---------------------- | ------------ | -------------------------------------------- |
| Shutdown timer         | 5–10 minutes | Enough time for clean shutdown, not too long |
| Low battery threshold  | 20–30%       | Prevents battery exhaustion                  |
| Extra delay            | 30 seconds   | Allows other systems to shut down first      |
| No communication grace | 60 seconds   | Tolerates brief USB disconnects              |

### Multi-System UPS Monitoring

For environments with multiple systems on the same UPS:

1. Configure TrueNAS as the UPS **master** (connected to the UPS via USB).
2. Configure other systems as UPS **slaves** (connected to TrueNAS via the network).
3. TrueNAS notifies slave systems to shut down before shutting down itself.

```bash
# On TrueNAS (master), allow network access to NUT:
# Configure the UPS service to listen on the network interface
# Set up NUT users and passwords for slave systems
```

---

## SNMP Monitoring

### SNMP Configuration

TrueNAS supports SNMPv2c and SNMPv3:

1. Navigate to **System** → **Advanced** → **SNMP**.
2. Enable SNMP.
3. Configure community string (SNMPv2c) or user credentials (SNMPv3).
4. Set the contact and location information.
5. Select which OIDs to expose (system, interfaces, storage, etc.).

### SNMP Integration

TrueNAS SNMP exposes:

- System information (hostname, uptime, OS version)
- Interface statistics (bytes in/out, errors, drops)
- Storage pool information (capacity, health, I/O)
- Disk information (temperature, SMART health)
- CPU and memory utilization

### Monitoring with External Tools

Use the SNMP data with:

- **Zabbix:** Full-featured monitoring platform with TrueNAS templates.
- **LibreNMS:** Auto-discovering network monitoring.
- **PRTG:** Windows-based monitoring with SNMP sensors.
- **Check_MK:** Enterprise monitoring with native TrueNAS checks.

---

## Integration with Grafana and Prometheus

### Prometheus Node Exporter

TrueNAS can export metrics to Prometheus for visualization in Grafana:

1. Deploy the Prometheus + Grafana stack from the TrueNAS app catalog.
2. Configure Prometheus to scrape TrueNAS metrics (via the node exporter or the TrueNAS API).
3. Import pre-built Grafana dashboards for TrueNAS.

### Key Metrics to Monitor

| Metric             | Source    | Alert Threshold                       |
| ------------------ | --------- | ------------------------------------- |
| Pool capacity      | ZFS       | &gt; 80% warning, &gt; 90% critical   |
| Pool health        | ZFS       | Any non-ONLINE state                  |
| Disk temperature   | SMART     | &gt; 55 °C (HDD), &gt; 70 °C (SSD)    |
| CPU utilization    | System    | &gt; 90% for 5+ minutes               |
| Memory utilization | System    | &gt; 90% sustained                    |
| ARC hit ratio      | ZFS       | &lt; 80% (consider more RAM or L2ARC) |
| Scrub errors       | ZFS       | Any errors                            |
| Replication lag    | ZFS       | &gt; 24 hours behind                  |
| UPS battery        | NUT       | On battery, low battery               |
| Network errors     | Interface | Any CRC, frame, or drop errors        |

### Grafana Dashboard Examples

Common dashboard panels for TrueNAS:

- Pool capacity over time (bar chart or gauge)
- I/O throughput per pool (time series)
- Disk temperature heatmap
- ARC hit ratio and size (time series)
- Network throughput per interface (time series)
- CPU and memory utilization (time series)
- SMART predictive failure indicators (table)

---

## Log Analysis

### Accessing Logs

```bash
# System logs
cat /var/log/messages

# ZFS-related logs
dmesg | grep zfs

# SMB/CIFS logs
cat /var/log/samba4/log.smbd

# NFS logs
cat /var/log/messages | grep nfsd

# Boot logs
journalctl -b
```

### Common Log Patterns to Monitor

| Pattern                     | Severity    | Action                                      |
| --------------------------- | ----------- | ------------------------------------------- |
| `zfs: checksum error`       | Critical    | Check pool health, scrub, replace disk      |
| `ata1: hard resetting link` | Warning     | Check SATA cable and connection             |
| `mpt2sas: device reset`     | Warning     | Check SAS controller and disk               |
| `smbd: connection denied`   | Information | Check authentication configuration          |
| `kernel: out of memory`     | Critical    | Add RAM, check for memory leaks             |
| `UPS: on battery`           | Warning     | Monitor battery level, prepare for shutdown |

---

## Capacity Planning

### Monitoring Growth Rate

```bash
# Check pool capacity and growth
zpool list -v
zfs list -o name,used,avail,refer,mountpoint

# Historical capacity tracking (via zpool history)
zpool history tank | grep create
```

Track capacity growth over time to predict when you will need to add storage. A pool that grows by 1
TB/month will fill a 20 TB pool in approximately 20 months (accounting for RAIDZ overhead).

### Planning Guidelines

| Metric              | Action Threshold                                   |
| ------------------- | -------------------------------------------------- |
| Pool usage &gt; 70% | Plan expansion within 6 months                     |
| Pool usage &gt; 80% | Order drives immediately                           |
| Pool usage &gt; 90% | Critical — expand or delete data                   |
| Pool usage &gt; 95% | Emergency — ZFS performance degrades significantly |

---

## Alert Fatigue Management

### Reducing Noise

Alert fatigue occurs when too many low-priority alerts desensitize administrators to critical ones.

**Strategies:**

1. **Set appropriate thresholds:** Do not alert on every minor event. Temperature warnings at 45 °C
   are noise; warnings at 55 °C are actionable.
2. **Aggregate alerts:** Group related alerts (e.g., "SMART errors on pool tank" rather than
   individual errors per disk).
3. **Use escalation:** Critical alerts go to immediate notification (email + SMS); warnings go to a
   daily digest.
4. **Review and prune:** Regularly review alert rules and remove or adjust ones that trigger
   frequently without action.
5. **Acknowledge and track:** Use a ticketing system to track alert acknowledgment and resolution.

---

## Common Pitfalls

### Not Configuring Email Alerts

A TrueNAS system without email alerts is a silent system. Disk failures, pool degradation, and other
critical events will go unnoticed until data is lost. Always configure email alerts and verify they
work with a test email.

### Running SMART Tests Only When Problems Occur

SMART tests are predictive — they detect problems before they become failures. Running SMART tests
only when you suspect a problem defeats the purpose. Schedule regular short and long tests to catch
failures early.

### Ignoring SMART Warnings

A SMART predictive failure warning means the drive has a high probability of failing. Replace the
drive immediately — do not wait for it to fail completely. The longer you wait, the higher the risk
of a second drive failing before the resilver completes.

### Not Testing UPS Shutdown

A UPS that is configured but never tested may fail when needed. Test the UPS shutdown procedure
quarterly:

1. Disconnect the UPS from mains power.
2. Verify TrueNAS detects the power loss.
3. Verify TrueNAS initiates shutdown at the configured threshold.
4. Verify other systems on the UPS also shut down.
5. Reconnect mains power and verify systems restart cleanly.

### Monitoring Without Context

Collecting metrics without understanding what they mean leads to either panic (false alarms) or
complacency (missed warnings). Define clear thresholds for each metric, document them, and ensure
the team understands what each alert means and what action to take.

## TrueNAS Dashboard Deep Dive

### Real-Time Metrics

The TrueNAS dashboard provides real-time metrics for:

| Category | Metrics                                       | Refresh Rate |
| -------- | --------------------------------------------- | ------------ |
| CPU      | Per-core utilization, temperature, frequency  | 2 seconds    |
| Memory   | Used, free, cached, wired, swap               | 2 seconds    |
| Network  | Per-interface Rx/Tx throughput, errors        | 2 seconds    |
| Disk     | Per-disk I/O throughput, latency, queue depth | 2 seconds    |
| Pool     | Per-pool I/O throughput, capacity, ARC stats  | 5 seconds    |
| UPS      | Battery level, load, estimated runtime        | 5 seconds    |

### Historical Metrics

TrueNAS stores historical metrics using RRDtool (Round Robin Database). Historical data is retained
for approximately:

- **1-minute resolution:** 24 hours
- **5-minute resolution:** 7 days
- **1-hour resolution:** 30 days

For longer retention or higher resolution, use external monitoring (Prometheus + Grafana).

### Dashboard Widgets Configuration

The TrueNAS dashboard is customizable. Navigate to the dashboard and click the gear icon to:

1. **Add widgets:** CPU, memory, pool, network, disk, system temperature, uptime.
2. **Rearrange widgets:** Drag and drop to customize the layout.
3. **Resize widgets:** Some widgets support resizing for more detail.
4. **Remove widgets:** Remove widgets you do not need to reduce visual clutter.

## Advanced SMART Analysis

### SMART Attribute Deep Dive

Understanding SMART attributes in detail:

**Reallocated Sector Count (ID 5):**

- Count of sectors that have been reallocated due to read errors.
- Any increase indicates the drive is failing. Plan for immediate replacement.
- This is the single most important SMART attribute for HDDs.

**Current Pending Sector Count (ID 197):**

- Count of sectors that are unstable and awaiting reallocation.
- Non-zero value means the drive has detected potential bad sectors.
- If the count increases over time, the drive is deteriorating.

**Uncorrectable Sector Count (ID 198):**

- Count of sectors that could not be recovered after multiple read attempts.
- Any non-zero value means data has been lost. Replace the drive immediately.

**Command Timeout (ID 188):**

- Count of aborted operations due to timeout.
- Non-zero value can indicate cable issues, controller problems, or drive failure.

**UDMA CRC Error Count (ID 199):**

- Count of CRC errors on the UDMA interface.
- Usually indicates a bad SATA/SAS cable or connector.
- Replace the cable before replacing the drive.

**Media Wear Indicator (ID 173, SSD-specific):**

- Percentage of rated endurance used.
- When this reaches 0%, the drive has reached its rated write endurance.
- Most drives continue to function beyond 0% but with increased risk.

**Available Spare (ID 232, SSD-specific):**

- Percentage of spare blocks remaining.
- When this drops below 10%, the drive is running out of spare blocks for wear leveling.
- Plan for replacement.

### SMART Self-Test Log Analysis

```bash
# View self-test log
sudo smartctl -l selftest /dev/sda

# Example output interpretation:
# Num  Test_Description    Status                  Remaining  LifeTime  LBA_of_first_error
# # 1  Extended offline    Completed: read failure  90%        1200h     123456789

# Status values:
# Completed without error    — Healthy
# Completed: read failure    — Bad sectors detected
# Aborted by host            — Test was interrupted
# Interrupted (host reset)    — System rebooted during test
# Not started                — Test has not begun
```

### SMART Temperature Monitoring

```bash
# Monitor temperature continuously
watch -n 5 'smartctl -A /dev/sda | grep -i temperature'

# Set up temperature alerting with smartd
# /etc/smartd.conf:
# /dev/sda -W 5,45,55 -R 5 -m admin@example.com
# -W: Monitor temperature, warn at 45°C, critical at 55°C
# -R: Report changes in raw attributes
# -m: Email alerts
```

## ZFS Scrub Deep Dive

### Scrub Mechanics

During a scrub, ZFS reads every block in the pool and verifies its checksum:

1. Read the block and its stored checksum.
2. Compute the checksum of the read data.
3. Compare computed vs. stored checksum.
4. If they match: data is intact. Continue.
5. If they do not match: a. Read the redundant copy (mirror) or recompute from parity (RAIDZ). b.
   Verify the corrected data. c. Write the corrected data back to the bad block. d. Log the error.

### Scrub Performance Impact

| Pool Type    | Scrub Speed       | I/O Impact                                       |
| ------------ | ----------------- | ------------------------------------------------ |
| All-SSD      | 500 MB/s – 2 GB/s | Low (SSDs handle concurrent scrub + workload)    |
| All-HDD      | 50–150 MB/s       | High (scrub consumes significant read bandwidth) |
| Mirror (SSD) | 1–2 GB/s          | Low                                              |
| RAIDZ2 (HDD) | 50–100 MB/s       | High                                             |

During a scrub of an HDD pool, normal I/O performance can degrade by 30–50%. Schedule scrubs during
off-peak hours.

### Scrub Error Analysis

```bash
# After a scrub completes, check the results
zpool status tank

# Example output:
# scan: scrub repaired 0 in 12h34m with 0 errors on Mon Jan 15 10:30
# scan: scrub in progress since Mon Jan 15 10:00
#       42.5% done, 0h47m to go
#       0 repaired, 0 unrepairable errors

# Key fields:
# repaired      — Number of blocks repaired from redundancy
# unrepairable — Number of blocks that could not be repaired (DATA LOSS)
# errors        — Total checksum errors found
```

If `unrepairable` is non-zero, you have experienced data corruption that could not be recovered from
redundancy. Identify which files were affected and restore from backup.

## Email Alerting Advanced Configuration

### SMTP Configuration for Common Providers

**Gmail (App Password):**

```
SMTP Server: smtp.gmail.com
Port: 465
Encryption: SSL/TLS
Username: your-email@gmail.com
Password: <app-specific-password>
From: your-email@gmail.com
To: admin@example.com
```

**SendGrid:**

```
SMTP Server: smtp.sendgrid.net
Port: 465
Encryption: SSL/TLS
Username: apikey
Password: <sendgrid-api-key>
From: notifications@example.com
To: admin@example.com
```

**Mailgun:**

```
SMTP Server: smtp.mailgun.org
Port: 587
Encryption: STARTTLS
Username: postmaster@mg.example.com
Password: <mailgun-password>
From: notifications@example.com
To: admin@example.com
```

### Alert Routing

For environments with multiple administrators, route alerts based on severity:

| Severity    | Notification Method                  | Response Time     |
| ----------- | ------------------------------------ | ----------------- |
| Critical    | Email + SMS (via PagerDuty/Opsgenie) | Immediate         |
| Warning     | Email                                | Within 4 hours    |
| Information | Email (daily digest)                 | Next business day |

## Prometheus Integration for TrueNAS

### Installing Node Exporter

```bash
# Option 1: Use the TrueNAS app catalog
# Install "Prometheus Node Exporter" from the catalog

# Option 2: Manual installation
# SSH into TrueNAS and install node_exporter
curl -LO https://github.com/prometheus/node_exporter/releases/download/v1.7.0/node_exporter-1.7.0.linux-amd64.tar.gz
tar xzf node_exporter-1.7.0.linux-amd64.tar.gz
sudo cp node_exporter-1.7.0.linux-amd64/node_exporter /usr/local/bin/
```

### Key Metrics to Export

| Metric                           | Source                         | Description                   |
| -------------------------------- | ------------------------------ | ----------------------------- |
| `zfs_arc_stats`                  | `/proc/spl/kstat/zfs/arcstats` | ARC hit ratio, size, metadata |
| `zfs_pool_stats`                 | `zpool list`                   | Pool capacity, health, I/O    |
| `smartmon_device`                | `smartctl`                     | Disk temperatures, health     |
| `node_cpu_seconds_total`         | `/proc/stat`                   | CPU utilization               |
| `node_memory_MemAvailable_bytes` | `/proc/meminfo`                | Available memory              |
| `node_filesystem_avail_bytes`    | `statvfs`                      | Filesystem free space         |

### Grafana Dashboard JSON

Import pre-built TrueNAS dashboards from Grafana.com or build custom ones. Key panels:

1. **Pool Health Status:** Single stat panel showing pool state (ONLINE/DEGRADED/FAULTED).
2. **Pool Capacity Gauge:** Gauge showing % used, with thresholds at 70% (yellow) and 90% (red).
3. **ARC Hit Ratio Time Series:** Line chart showing hit ratio over 24 hours.
4. **Disk Temperature Heatmap:** Color-coded table of all disk temperatures.
5. **I/O Throughput:** Stacked area chart of read/write throughput per pool.
6. **SMART Predictive Failures:** Table showing drives with SMART warnings.

## UPS Monitoring Deep Dive

### NUT Configuration Files

TrueNAS NUT configuration is stored in `/etc/nut/`:

```text
# /etc/nut/ups.conf
[myups]
    driver = usbhid-ups
    port = auto
    desc = "APC Back-UPS 1500"

# /etc/nut/upsd.conf
LISTEN 0.0.0.0 3493
MAXAGE 15
```

### UPS Monitoring Commands

```bash
# Check UPS status
upsc myups

# Key fields:
# battery.charge    — Remaining charge percentage
# battery.runtime   — Estimated minutes remaining
# ups.status        — "OL" (online), "OB" (on battery), "LB" (low battery)
# ups.load          — Load percentage
# input.voltage     — Input voltage
# output.voltage    — Output voltage
# ups.temperature   — UPS internal temperature
```

### UPS Shutdown Sequence

When the UPS detects a power failure:

1. **Power failure detected.** UPS switches to battery.
2. **NUT notifies TrueNAS.** The UPS status changes to "OB" (on battery).
3. **Timer starts.** TrueNAS waits for the configured delay (e.g., 5 minutes).
4. **If power is restored within the delay:** Normal operation resumes. No shutdown.
5. **If timer expires:** TrueNAS initiates shutdown: a. Stop all services (SMB, NFS, apps). b. Sync
   all ZFS pools (`zpool sync`). c. Export all pools (`zpool export -a`). d. Shutdown the system
   (`shutdown -p now`).
6. **UPS signals low battery:** UPS sends the final "LB" signal and shuts itself down.

### Multi-System UPS Monitoring

For environments with multiple servers on one UPS:

```
# TrueNAS (master): Connected to UPS via USB
# Server 2 (slave): Monitors via NUT network

# On the master (TrueNAS):
# /etc/nut/upsd.users
[upsmonitor]
    password = <password>
    upsmon master

# On the slave (Server 2):
# /etc/nut/upsmon.conf
MONITOR myups@truenas-ip 1 upsmonitor <password> master
SHUTDOWNCMD "/sbin/shutdown -h +0"
```

## Log Analysis and Automation

### Centralized Logging

For environments with multiple systems, centralize logs using:

- **syslog:** Configure TrueNAS to forward logs to a central syslog server.
- **ELK Stack:** Elasticsearch + Logstash + Kibana for log analysis.
- **Loki + Grafana:** Lightweight log aggregation with Grafana integration.

### Log Retention

TrueNAS retains logs according to:

| Log Type        | Default Retention | Location           |
| --------------- | ----------------- | ------------------ |
| System logs     | 1 week            | `/var/log/`        |
| Audit logs      | Configurable      | `/var/log/audit/`  |
| SMB logs        | Configurable      | `/var/log/samba4/` |
| App logs        | Configurable      | Per-app            |
| Middleware logs | Configurable      | Per-app            |

### Log Analysis Scripts

```bash
#!/bin/bash
# Check for common error patterns in system logs
LOG_FILE="/var/log/messages"

echo "=== ZFS Errors ==="
grep -i "zfs.*error\|zfs.*fault\|zfs.*degraded" "$LOG_FILE" | tail -20

echo "=== Disk Errors ==="
grep -i "ata.*error\|scsi.*error\|i/o error\|medium error" "$LOG_FILE" | tail -20

echo "=== Network Errors ==="
grep -i "link.*down\|carrier.*lost\|crc.*error" "$LOG_FILE" | tail -20

echo "=== Memory Errors ==="
grep -i "out of memory\|oom\|page allocation failure" "$LOG_FILE" | tail -20

echo "=== UPS Events ==="
grep -i "ups\|battery\|power failure" "$LOG_FILE" | tail -20
```

## Capacity Planning

### Growth Rate Analysis

```bash
# Track pool capacity over time
zpool list -v -p | awk '{print strftime("%Y-%m-%d"), $0}' >> /var/log/pool_capacity.log

# Analyze growth rate (daily)
cat /var/log/pool_capacity.log | awk '{print $1, $4}' | \
  awk 'NR>1 {printf "%s %s %+.1f GB/day\n", $1, $2, ($2-prev)/((NR>2)?1:1)} {prev=$2}'
```

### Capacity Forecasting

Based on historical growth rate, project when the pool will reach capacity thresholds:

$$
T_{80\%} = \frac{0.8 \times C_{total} - C_{used}}{R_{growth}}
$$

Where:

- $C_{total}$ is the total pool capacity
- $C_{used}$ is the current used capacity
- $R_{growth}$ is the daily growth rate

## Alert Fatigue Prevention

### Alert Tiers

| Tier | Severity                      | Response          | Channel        |
| ---- | ----------------------------- | ----------------- | -------------- |
| P0   | Critical, data at risk        | Immediate         | PagerDuty, SMS |
| P1   | Warning, performance degraded | Within 1 hour     | Email, Slack   |
| P2   | Informational, non-urgent     | Next business day | Daily digest   |

### Alert Suppression

Suppress alerts during known maintenance windows:

```bash
# TrueNAS does not have built-in alert suppression.
# Workaround: Disable email alerts during maintenance, re-enable after.
# Or use an external alerting system (PagerDuty) with maintenance windows.
```

## Advanced Monitoring Configurations

### Prometheus Scrape Configuration

```yaml
# prometheus.yml for TrueNAS monitoring
global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'truenas'
    static_configs:
      - targets: ['truenas.local:9100']
    relabel_configs:
      - source_labels: [__address__]
        target_label: instance
        regex: '(.*):(.*)'
        replacement: '${1}'

  - job_name: 'smartmon'
    static_configs:
      - targets: ['truenas.local:9633']

  - job_name: 'zfs'
    static_configs:
      - targets: ['truenas.local:9133']
```

### Grafana Dashboard JSON Export

Export and share Grafana dashboards:

1. Navigate to the dashboard in Grafana.
2. Click the share icon (top right).
3. Select "Export" → "View JSON".
4. Save the JSON file.
5. Import on another Grafana instance.

### Alerting with Prometheus AlertManager

```yaml
# Prometheus alert rule for ZFS pool capacity
groups:
  - name: truenas_alerts
    rules:
      - alert: ZFSPoolCapacityHigh
        expr: zfs_pool_used_bytes / zfs_pool_size_bytes > 0.85
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: 'ZFS pool {{ $labels.pool }} is above 85% capacity'
          description:
            'Pool {{ $labels.pool }} is using {{ $value | humanizePercentage }} of its capacity.'
```

## Log Analysis Deep Dive

### Centralized Log Aggregation

For environments with multiple TrueNAS systems or other servers:

**ELK Stack (Elasticsearch, Logstash, Kibana):**

1. Install Filebeat on TrueNAS to forward logs to Logstash.
2. Logstash parses and enriches the logs.
3. Elasticsearch stores and indexes the logs.
4. Kibana provides visualization and search.

**Loki + Grafana (lightweight alternative):**

1. Install Promtail on TrueNAS to forward logs to Loki.
2. Loki stores logs in a compressed index.
3. Grafana provides LogQL queries and visualization.
4. Much lighter than ELK, suitable for smaller deployments.

### Log Retention Policies

```bash
# Configure log rotation in TrueNAS
# Navigate to System → Advanced → Syslog
# Set maximum log file size (default: 10 MB)
# Set maximum number of archived log files (default: 5)
```

## Capacity Planning Deep Dive

### Growth Rate Calculation

```bash
# Track pool usage over time
#!/bin/bash
LOG="/var/log/pool_capacity.log"
echo "$(date '+%Y-%m-%d'),$(zpool list -Hp -o capacity tank),$(zpool list -Hp -o used tank)" >> "$LOG"

# Calculate growth rate (last 30 days)
tail -30 "$LOG" | awk -F',' '
  NR>1 {
    used_diff = $3 - prev_used
    days_diff = NR - 1
    printf "Daily growth: %.1f GB/day\n", used_diff / days_diff
  }
  { prev_used = $3 }
'
```

### Capacity Planning Spreadsheet

| Dataset      | Current Usage | Monthly Growth | Months to 80% | Action Date |
| ------------ | ------------- | -------------- | ------------- | ----------- |
| tank/data    | 4.2 TB        | 50 GB          | 12            | 2026-04     |
| tank/media   | 8.7 TB        | 100 GB         | 3             | 2025-07     |
| tank/backups | 2.1 TB        | 30 GB          | 18            | 2027-08     |

### When to Expand

| Current Usage | Recommended Action                |
| ------------- | --------------------------------- |
| &lt; 50%      | Monitor monthly, no action needed |
| 50–70%        | Plan expansion within 6 months    |
| 70–80%        | Order drives, schedule expansion  |
| 80–90%        | Urgent: expand within 2 weeks     |
| &gt; 90%      | Critical: expand immediately      |

### Expansion Methods

1. **Add vdevs:** Add new vdevs to the pool (increases both capacity and performance).
2. **Replace with larger drives:** Replace drives one at a time with larger drives (increases
   capacity only).
3. **Cloud sync archival:** Move cold data to cloud storage.
4. **Data pruning:** Delete unnecessary snapshots, old logs, and temporary files.
