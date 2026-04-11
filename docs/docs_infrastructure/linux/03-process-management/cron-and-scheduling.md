---
id: cron-and-scheduling
title: Cron and Task Scheduling
description: Task scheduling — cron, crontab, anacron, systemd timers, at, and batch job management.
slug: cron-and-scheduling
sidebar_position: 2
---

## cron Daemon

The cron daemon (`crond`) is a time-based job scheduler that runs commands at specified times and
intervals. It wakes up every minute, checks all crontab files for matching time specifications, and
executes due commands.

```bash
# Check if cron is running
systemctl status cron        # Debian/Ubuntu
systemctl status crond       # Fedora/RHEL

# Start/enable cron
systemctl enable --now cron
systemctl enable --now crond
```

## Crontab Format

### Time Fields

```text
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12)
# |  |  |  |  .---- day of week (0 - 6, 0 = Sunday)
# |  |  |  |  |
# *  *  *  *  *  command
```

```bash
# Examples
* * * * *      /usr/bin/command       # every minute
*/5 * * * *    /usr/bin/command       # every 5 minutes
0 * * * *      /usr/bin/command       # every hour (at minute 0)
0 2 * * *      /usr/bin/command       # every day at 2:00 AM
0 0 * * 0      /usr/bin/command       # every Sunday at midnight
0 0 1 * *      /usr/bin/command       # first of every month at midnight
0 0 1 1 *      /usr/bin/command       # January 1 at midnight
30 4 1,15 * *  /usr/bin/command       # 1st and 15th at 4:30 AM
0 9-17 * * 1-5 /usr/bin/command       # every hour 9-17 on weekdays
0 */2 * * *    /usr/bin/command       # every 2 hours
15 6 * * 2-6   /usr/bin/command       # 6:15 AM, Tuesday through Saturday
```

### Special Strings

| String      | Equivalent  | Description                     |
| ----------- | ----------- | ------------------------------- |
| `@yearly`   | `0 0 1 1 *` | Once per year                   |
| `@annually` | `0 0 1 1 *` | Same as @yearly                 |
| `@monthly`  | `0 0 1 * *` | Once per month                  |
| `@weekly`   | `0 0 * * 0` | Once per week                   |
| `@daily`    | `0 0 * * *` | Once per day                    |
| `@midnight` | `0 0 * * *` | Same as @daily                  |
| `@hourly`   | `0 * * * *` | Once per hour                   |
| `@reboot`   | (special)   | Run once at cron daemon startup |

```bash
# System backup every day at midnight
@daily /usr/local/bin/backup.sh

# Weekly report every Monday at 6 AM
@weekly /usr/local/bin/generate-report.sh

# Cleanup on reboot
@reboot /usr/local/bin/cleanup.sh
```

### Advanced Time Specifications

```bash
# Step values
*/15 * * * *      # every 15 minutes
1-31/2 * * * *    # every other day of the month (1,3,5,...,31)

# Range with step
0 6-18/2 * * *   # every 2 hours from 6 AM to 6 PM (6,8,10,...,18)

# Day of week with day of month (both must match)
0 0 15 * 1       # 15th of the month AND Monday (not common)
# To specify "15th OR Monday", use two separate lines:
0 0 15 * *       # 15th of every month
0 0 * * 1       # every Monday

# Lists
0 0 * * 1,3,5   # Monday, Wednesday, Friday
```

## Crontab Commands

```bash
# Edit user's crontab
crontab -e

# List user's crontab
crontab -l

# Remove user's crontab
crontab -r

# Remove with confirmation
crontab -i -r

# Edit another user's crontab (root only)
crontab -e -u username
crontab -l -u username

# Replace crontab from file
crontab crontab_file.txt

# Validate crontab syntax (some implementations)
crontab -l 2>&1 | head -1
```

## cron Environment

### Environment Variables in Crontab

```bash
# Crontab environment is minimal — NOT the same as interactive shell
# These are the defaults set by cron:
# SHELL=/bin/sh
# PATH=/usr/bin:/bin
# HOME=/home/username (or /root)
# LOGNAME=username

# Set environment variables in crontab
SHELL=/bin/bash
PATH=/usr/local/bin:/usr/bin:/bin
JAVA_HOME=/usr/lib/jvm/java-11
LANG=en_US.UTF-8

# These take effect for all subsequent cron entries
*/5 * * * * /usr/local/bin/myapp --config /etc/myapp.conf
```

### PATH Issues

```bash
# WRONG — command not found in cron's minimal PATH
* * * * * python3 /path/to/script.py
# /bin/sh: python3: command not found

# CORRECT — use full paths
* * * * * /usr/bin/python3 /path/to/script.py

# CORRECT — set PATH in crontab
PATH=/usr/local/bin:/usr/bin:/bin
* * * * * python3 /path/to/script.py

# CORRECT — source environment in the script
* * * * * /bin/bash -c 'source ~/.bashrc && python3 /path/to/script.py'
```

### MAILTO

```bash
# Send cron output via email
MAILTO=admin@example.com
0 2 * * * /usr/local/bin/backup.sh

# Disable email for a specific job
MAILTO=""
0 * * * * /usr/local/bin/check_health.sh

# Send to multiple addresses
MAILTO="admin@example.com,oncall@example.com"
```

## cron Permissions

```bash
# /etc/cron.allow — if it exists, only listed users can use cron
# /etc/cron.deny  — if it exists, listed users CANNOT use cron
#
# Priority: cron.allow > cron.deny
# If neither exists: only root can use cron (varies by distribution)
# If both exist: cron.allow takes precedence

# Create /etc/cron.allow
echo "admin" | sudo tee -a /etc/cron.allow
echo "deploy" | sudo tee -a /etc/cron.allow

# Create /etc/cron.deny
echo "nobody" | sudo tee -a /etc/cron.deny
```

## System cron

### /etc/crontab

```ini
# /etc/crontab — system-wide crontab
# Format includes a username field (unlike user crontabs)
SHELL=/bin/bash
PATH=/sbin:/bin:/usr/sbin:/usr/bin
MAILTO=root

# For details see man 4 crontabs

# Example of system crontab entries
# m h dom mon dow user  command
17 * * * * root    cd / && run-parts --report /etc/cron.hourly
25 6 * * * root    test -x /usr/sbin/anacron || ( cd / && run-parts --report /etc/cron.daily )
47 6 * * 7 root    test -x /usr/sbin/anacron || ( cd / && run-parts --report /etc/cron.weekly )
52 6 1 * * root    test -x /usr/sbin/anacron || ( cd / && run-parts --report /etc/cron.monthly )
```

### /etc/cron.d/

```bash
# Drop-in directory for application cron jobs
# Files must be owned by root and not writable by group/other

# /etc/cron.d/myapp
SHELL=/bin/bash
PATH=/sbin:/bin:/usr/sbin:/usr/bin
* * * * * appuser /usr/local/bin/myapp-health-check

# /etc/cron.d/logrotate
SHELL=/bin/bash
*/15 * * * * root /usr/sbin/logrotate /etc/logrotate.conf

# Permissions on cron.d files must be 0644
chmod 644 /etc/cron.d/myapp
chown root:root /etc/cron.d/myapp
```

### /etc/cron.hourly, cron.daily, cron.weekly, cron.monthly

```bash
# Scripts in these directories are run by run-parts
# Scripts must be executable and not have dots or other special characters in filenames

# List scheduled scripts
ls -la /etc/cron.daily/
# logrotate  man-db.cron  ...

# Add a daily job
cat > /etc/cron.daily/my-daily-job << 'EOF'
#!/bin/bash
/usr/local/bin/daily-maintenance
EOF
chmod 755 /etc/cron.daily/my-daily-job
```

## anacron

`anacron` (anachronistic cron) is designed for systems that are not running 24/7. Unlike cron, which
assumes the system is always on, anacron ensures that jobs run at the specified intervals relative
to the last run, even if the system was off.

```bash
# anacron configuration
cat /etc/anacrontab
# /etc/anacrontab: configuration file for anacron
# See anacron(8) and anacrontab(5) for details.
#
# period  delay  job-identifier  command
1         5      cron.daily      nice run-parts --report /etc/cron.daily
7         10     cron.weekly     nice run-parts --report /etc/cron.weekly
@monthly  15     cron.monthly    nice run-parts --report /etc/cron.monthly

# period: number of days between runs
# delay: minutes to wait after anacron starts before running
# job-identifier: unique name (used for timestamp files in /var/spool/anacron/)
# command: the command to run
```

```bash
# Run anacron manually
anacron -n    # run all jobs now (no delay)
anacron -s    # run jobs synchronously
anacron -f    # force jobs to run (ignore timestamps)
anacron -t    # test configuration (dry run)

# Check timestamps
ls -la /var/spool/anacron/
# cron.daily   cron.monthly  cron.weekly
```

### cron vs anacron

| Feature      | cron                  | anacron                     |
| ------------ | --------------------- | --------------------------- |
| System type  | 24/7 servers          | Desktops, laptops           |
| Missed jobs  | Skipped               | Run at next opportunity     |
| Granularity  | 1-minute precision    | Daily minimum               |
| Runs at      | Exact specified times | After boot (with delay)     |
| Per-user     | Yes                   | No (system-wide only)       |
| Suitable for | Precise scheduling    | Ensuring periodic tasks run |

## systemd Timers

systemd timers provide an alternative to cron with tighter integration into the systemd ecosystem.

### Timer Unit Files

```ini
# /etc/systemd/system/backup.timer
[Unit]
Description=Daily backup timer

[Timer]
# Calendar expression (systemd.time calendar format)
OnCalendar=*-*-* 02:00:00

# Run immediately if a scheduled run was missed
# (e.g., system was off at 2 AM)
Persistent=true

# Randomize start time by up to 10 minutes
# (prevents thundering herd on many systems)
RandomizedDelaySec=10m

# Accuracy — timer may fire this much late (default 1 min)
AccuracySec=1min

[Install]
WantedBy=timers.target
```

```ini
# /etc/systemd/system/backup.service
[Unit]
Description=Daily backup

[Service]
Type=oneshot
ExecStart=/usr/local/bin/backup.sh
User=backup
Group=backup
```

### OnCalendar Syntax

```bash
# systemd calendar expressions (see systemd.time(7))
OnCalendar=*-*-* 02:00:00              # daily at 2 AM
OnCalendar=Mon *-*-* 03:00:00           # every Monday at 3 AM
OnCalendar=*-*-01 00:00:00              # first of every month
OnCalendar=Mon..Fri *-*-* 09:00:00      # weekdays at 9 AM
OnCalendar=*-*-* 00/3:00:00             # every 3 hours
OnCalendar=hourly                        # same as above
OnCalendar=daily                         # every day at midnight
OnCalendar=weekly                        # every Monday at midnight
OnCalendar=monthly                       # first of every month
OnCalendar=quarterly                     # every 3 months
OnCalendar=semi-annually                 # every 6 months
OnCalendar=yearly                        # every year
OnCalendar=*-*-* 02:00:00 UTC           # daily at 2 AM UTC
OnCalendar=Mon,Fri *-*-* 17,18:00:00    # Mon and Fri at 5 PM and 6 PM

# Validate a calendar expression
systemd-analyze calendar '*-*-* 02:00:00'
systemd-analyze calendar 'Mon..Fri *-*-* 09:00:00'

# Show next scheduled runs
systemd-analyze calendar --iterations=5 'Mon *-*-* 03:00:00'
```

### Managing Timers

```bash
# List all timers
systemctl list-timers --all

# List timers for a specific unit
systemctl list-timers backup.timer

# Enable and start a timer
systemctl enable --now backup.timer

# Stop and disable
systemctl stop backup.timer
systemctl disable backup.timer

# Check timer status
systemctl status backup.timer

# View timer logs
journalctl -u backup.timer
journalctl -u backup.service

# Show timer calendar
systemctl show backup.timer --property=NextElapseUSecRealtime
```

### systemd Timers vs cron

| Feature             | cron                     | systemd timer            |
| ------------------- | ------------------------ | ------------------------ |
| Boot catch-up       | No (missed jobs skipped) | Yes (`Persistent=true`)  |
| Logging             | Email or /var/log/syslog | journald                 |
| Dependencies        | None                     | Full systemd dependency  |
| Resource limits     | System defaults          | Per-service limits       |
| Randomized delay    | No                       | `RandomizedDelaySec`     |
| Calendar syntax     | cron expression          | systemd calendar events  |
| Per-user timers     | Yes                      | Yes (`--user`)           |
| Precision           | 1 minute                 | 1 minute (`AccuracySec`) |
| Built-in monitoring | No                       | Yes (`systemctl status`) |
| Timezone handling   | System timezone          | Per-timer `Timezone=`    |

:::info

For new deployments, systemd timers are generally preferred over cron because they provide better
logging, dependency management, and missed-job handling. However, cron remains ubiquitous and is
still the default on many distributions for user-level scheduling.

:::

## at and batch

`at` schedules one-time execution of commands at a specified time. `batch` executes commands when
system load drops below a threshold.

### at

```bash
# Schedule at a specific time
echo "/usr/local/bin/backup.sh" | at 02:00
echo "/usr/local/bin/backup.sh" | at 2:00 AM tomorrow
echo "/usr/local/bin/backup.sh" | at now + 3 hours
echo "/usr/local/bin/backup.sh" | at 5:00 PM 2026-04-10

# Interactive mode
at 02:00
> /usr/local/bin/maintenance.sh
> /usr/local/bin/cleanup.sh
> ^D (Ctrl+D to end)

# Schedule from a file
at -f /path/to/script.sh 02:00

# List pending jobs
atq
# 3	Tue Apr  6 02:00:00 2026 a user

# View job details
at -c 3

# Remove a job
atrm 3

# Restrict access
# /etc/at.allow and /etc/at.deny work like cron.allow/cron.deny
```

### batch

```bash
# Run when system load average drops below 1.5 (default)
echo "/usr/local/bin/heavy-computation.sh" | batch

# Run when load drops below 0.8
echo "/usr/local/bin/heavy-computation.sh" | batch -l 0.8

# batch uses at internally with a load constraint
```

## Job Logging and Monitoring

### cron Logging

```bash
# cron logs to syslog/journald
journalctl -u cron -f              # follow cron logs
journalctl -u cron --since today   # today's cron logs
journalctl -u cron -p err          # cron errors only
grep CRON /var/log/syslog          # syslog-based

# Check for cron job execution
journalctl -u cron | grep "backup.sh"
```

### Monitoring with systemd Timers

```bash
# List all timers with next/last run times
systemctl list-timers --all --no-pager

# Check if a timer fired
journalctl -u backup.service --since "1 day ago"

# Check timer accuracy
systemctl show backup.timer | grep -E 'Next|Last'
```

### Alerting on Job Failure

```bash
#!/bin/bash
# /usr/local/bin/backup-with-alert.sh
set -euo pipefail

backup_result=0
/usr/local/bin/backup.sh || backup_result=$?

if (( backup_result != 0 )); then
    echo "Backup failed with exit code $backup_result" | \
        mail -s "BACKUP FAILURE" admin@example.com
    exit "$backup_result"
fi

echo "Backup completed successfully at $(date)"
```

## Common Cron Patterns

### Log Rotation

```cron
# Rotate application logs daily
0 0 * * * find /var/log/app -name "*.log" -mtime +30 -delete
0 0 * * * find /var/log/app -name "*.gz" -mtime +90 -delete
```

### Database Backup

```cron
# PostgreSQL daily backup at 2 AM
0 2 * * * postgres pg_dump -Fc mydb > /backups/mydb-$(date +\%Y\%m\%d).dump
0 2 * * * postgres pg_dumpall -Fc > /backups/all-$(date +\%Y\%m\%d).dump

# Cleanup old backups (keep 30 days)
0 3 * * * find /backups -name "*.dump" -mtime +30 -delete
```

### Health Checks

```cron
# Check service health every 5 minutes
*/5 * * * * /usr/local/bin/check-health.sh
# Check disk space every hour
0 * * * * df -h | awk '$5+0 > 90 {print "ALERT: " $6 " at " $5}'
```

### Certificate Renewal

```cron
# Check for certificate renewal twice daily
0 0,12 * * * root certbot renew --quiet --deploy-hook "systemctl reload nginx"
```

## Debugging cron

### Common Issues

```bash
# 1. Wrong PATH
# cron has a minimal PATH: /usr/bin:/bin
# Fix: use full paths or set PATH in crontab

# 2. Environment variables not set
# cron does NOT source ~/.bashrc, ~/.profile, etc.
# Fix: source the environment in the script or crontab

# 3. Cron job runs but produces no output
# Check if the script works manually
# Redirect output to a log file
* * * * * /usr/local/bin/script.sh >> /tmp/cron-debug.log 2>&1

# 4. Permission denied
# Check file permissions: script must be executable
# Check directory permissions: cron user must be able to write to output locations

# 5. cron not running
systemctl status cron
systemctl start cron
```

### Debugging Techniques

```bash
# Add shell debugging to cron
* * * * * /bin/bash -x /usr/local/bin/script.sh >> /tmp/cron-debug.log 2>&1

# Log environment
* * * * * env > /tmp/cron-env.log

# Check cron daemon logs
journalctl -u cron --since "10 minutes ago"

# Test cron expression
# Validate with:
* * * * * date >> /tmp/cron-test.log

# Verify the cron daemon is processing your crontab
crontab -l
# Watch for execution
tail -f /tmp/cron-debug.log
```

### Timezone Handling

```bash
# cron uses the system timezone (defined in /etc/localtime or $TZ)
timedatectl

# Change system timezone
sudo timedatectl set-timezone America/New_York

# Set timezone per-job in crontab
CRON_TZ=America/New_York
0 9 * * * /usr/local/bin/morning-report.sh

# For systemd timers, set per-timer timezone
# /etc/systemd/system/report.timer
[Timer]
OnCalendar=Mon *-*-* 09:00:00
Timezone=America/New_York
```

## Common Pitfalls

### Pitfall: Percent Signs in cron Commands

```cron
# WRONG — cron interprets % as newline
0 2 * * * /usr/bin/backup.sh --date $(date +%Y%m%d)

# CORRECT — escape percent signs
0 2 * * * /usr/bin/backup.sh --date $(date +\%Y\%m\%d)

# CORRECT — wrap in a script
0 2 * * * /usr/local/bin/backup-wrapper.sh
```

### Pitfall: cron Mail Output Fills Mailbox

```cron
# Every cron job sends output to the user's mailbox
# If output is voluminous, /var/mail/ fills up

# Fix: redirect output to a file
0 2 * * * /usr/local/bin/backup.sh > /var/log/backup.log 2>&1

# Fix: redirect to /dev/null if output is not needed
0 2 * * * /usr/local/bin/backup.sh > /dev/null 2>&1

# Fix: disable mail globally
MAILTO=""
```

### Pitfall: cron.d Files Must Not Have Extensions

```bash
# WRONG — files with extensions are ignored by run-parts
/etc/cron.d/mybackup.sh
/etc/cron.d/maintenance.cron
/etc/cron.d/job~

# CORRECT — no dots in filename (except .dpkg-old, .dpkg-dist, etc.)
/etc/cron.d/mybackup
/etc/cron.d/maintenance
```

### Pitfall: @reboot Runs for Every cron Daemon Start

```cron
# @reboot runs every time crond starts, not just at system boot
# This includes: systemctl restart cron, package updates, etc.

# Fix: use a systemd service with appropriate ordering
# [Unit]
# After=network.target
# [Service]
# Type=oneshot
# RemainAfterExit=yes
```

### Pitfall: cron Jobs Without Absolute Paths

```cron
# WRONG — relative paths resolve to $HOME
0 2 * * * cd project && ./backup.sh

# CORRECT — use absolute paths
0 2 * * * cd /opt/project && /opt/project/backup.sh

# CORRECT — or use full path in the script's shebang
```

### Pitfall: System Clock Changes Affect cron

```bash
# If NTP adjusts the clock backward, cron may re-execute recent jobs
# If the clock jumps forward, jobs may be skipped

# systemd timers with Persistent=true handle this better
# Consider migrating to systemd timers for critical schedules
```

## Advanced Patterns

### Lock Files for Concurrent Prevention

```bash
#!/usr/bin/env bash
# Prevent concurrent execution of a cron job

LOCKFILE="/var/run/myjob.lock"
exec 200>"$LOCKFILE"

flock -n 200 || {
    echo "Another instance is already running" >&2
    exit 1
}

# Critical section — only one instance at a time
echo "Starting job at $(date)"
sleep 60
echo "Job completed at $(date)"
```

```cron
# Use flock in cron directly
* * * * * /usr/bin/flock -n /var/run/myjob.lock /usr/local/bin/myjob.sh
```

### Cron Job Timeout Wrapper

```bash
#!/usr/bin/env bash
# Wrap a cron job with a timeout to prevent runaway processes

TIMEOUT=3600
LOGFILE="/var/log/job-wrapper.log"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" >> "$LOGFILE"
}

log "Starting: $*"
timeout "$TIMEOUT" "$@"
exit_code=$?

if (( exit_code == 124 )); then
    log "TIMEOUT: job exceeded ${TIMEOUT}s"
elif (( exit_code != 0 )); then
    log "FAILED: exit code $exit_code"
else
    log "SUCCESS"
fi

exit "$exit_code"
```

```cron
# Use timeout wrapper
0 2 * * * /usr/local/bin/timeout-wrapper.sh /usr/local/bin/backup.sh
```

### Cron Job Alerting

```bash
#!/usr/bin/env bash
# /usr/local/bin/cron-alert.sh
# Run a command and alert on failure

COMMAND="$*"
ALERT_EMAIL="oncall@example.com"
HOSTNAME="$(hostname)"
SUBJECT="[CRON ALERT] $HOSTNAME: $COMMAND failed"

output=$("$@" 2>&1)
exit_code=$?

if (( exit_code != 0 )); then
    {
        echo "Command: $COMMAND"
        echo "Host: $HOSTNAME"
        echo "Exit code: $exit_code"
        echo "Time: $(date)"
        echo ""
        echo "Output:"
        echo "$output"
    } | mail -s "$SUBJECT" "$ALERT_EMAIL"
    exit "$exit_code"
fi
```

### Staggered Execution Across Servers

```cron
# On server 1 — run at minute 0
0 * * * * /usr/local/bin/health-check.sh

# On server 2 — run at minute 10
10 * * * * /usr/local/bin/health-check.sh

# On server 3 — run at minute 20
20 * * * * /usr/local/bin/health-check.sh

# This prevents all servers from hitting the same resource simultaneously
# Alternatively, use RANDOM_DELAY in systemd timers
```

### Cron Job Dependency Chain

```bash
#!/usr/bin/env bash
# Run job B only after job A succeeds

# Job A
if ! /usr/local/bin/job-a.sh; then
    echo "Job A failed, skipping job B" >&2
    exit 1
fi

# Job B
/usr/local/bin/job-b.sh
```

```cron
# Or use a wrapper script that handles dependencies
0 2 * * * /usr/local/bin/job-chain.sh
```

### Monitoring Cron Execution

```bash
# Check if cron jobs ran recently
# /usr/local/bin/check-cron.sh

#!/usr/bin/env bash
WARN_HOURS=2

check_file_age() {
    local file="$1"
    local label="$2"
    if [[ ! -f "$file" ]]; then
        echo "WARNING: $label marker not found: $file"
        return 1
    fi
    local age_hours
    age_hours=$(( ( $(date +%s) - $(stat -c%Y "$file") ) / 3600 ))
    if (( age_hours > WARN_HOURS )); then
        echo "WARNING: $label last ran $age_hours hours ago"
        return 1
    fi
    echo "OK: $label last ran $age_hours hours ago"
    return 0
}

# Each cron job creates a marker file
# 0 * * * * /usr/local/bin/job.sh && touch /var/run/job.last

check_file_age /var/run/backup.last "Backup"
check_file_age /var/run/health-check.last "Health check"
check_file_age /var/run/cleanup.last "Cleanup"
```

### Cron and Container Environments

```bash
# Containers typically do not run a cron daemon
# Options for scheduled tasks in containers:

# 1. Host cron calling into the container
# /etc/cron.d/container-task
* * * * * root docker exec mycontainer /usr/local/bin/task.sh

# 2. systemd timer on the host
# [Unit]
# Description=Container task
# [Service]
# Type=oneshot
# ExecStart=/usr/bin/docker exec mycontainer /usr/local/bin/task.sh

# 3. Dedicated sidecar container running cron
# Docker Compose example:
# services:
#   cron:
#     image: myapp
#     command: cron -f
#     volumes:
#       - ./crontab:/etc/cron.d/myapp
```

### Cron Timezone Per-Job

```bash
# systemd timers support per-timer timezone
# /etc/systemd/system/morning-report.timer
[Timer]
OnCalendar=*-*-* 09:00:00
Timezone=America/New_York

# For cron, use TZ environment variable
# This sets the timezone for the cron job's environment
CRON_TZ=America/New_York
0 9 * * * /usr/local/bin/morning-report.sh

# Or set TZ inside the script itself
#!/usr/bin/env bash
export TZ=America/New_York
```

### High-Frequency Cron Jobs

```bash
# Running jobs every minute can miss if the job takes longer than 60 seconds
# Use a daemon approach instead

#!/usr/bin/env bash
# /usr/local/bin/polling-daemon.sh
INTERVAL=5

while true; do
    start=$(date +%s)
    /usr/local/bin/poll-and-process.sh
    elapsed=$(( $(date +%s) - start ))
    sleep_time=$(( INTERVAL - elapsed ))
    if (( sleep_time > 0 )); then
        sleep "$sleep_time"
    fi
done
```

```ini
# Or use systemd timer with higher precision
# [Timer]
# OnCalendar=*-*-* *:*:00/5
# AccuracySec=1s
```
