---
id: os-security
title: OS Security
description:
  OS Security — Linux Security Hardening; SSH Hardening; Fail2ban; File
  Permissions with worked examples and exam-style questions.
slug: os-security
sidebar_position: 2
date: 2026-04-08T00:00:00.000Z
tags:
  - Security
categories:
  - Security
---

## Linux Security Hardening

### SSH Hardening

SSH is the primary remote administration protocol on Linux. Default configurations are permissive
and must be hardened.

**Key-based authentication:**

```bash
ssh-keygen -t ed25519 -C "admin@server" -f ~/.ssh/id_ed25519
ssh-copy-id -i ~/.ssh/id_ed25519.pub user@server
```

Ed25519 is preferred over RSA and ECDSA. It is faster, more secure, and has smaller keys. RSA keys
should be at least 4096 bits if used.

**sshd_config hardening:**

```
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
AuthorizedKeysFile .ssh/authorized_keys
PermitEmptyPasswords no
ChallengeResponseAuthentication no
UsePAM yes
X11Forwarding no
MaxAuthTries 3
ClientAliveInterval 300
ClientAliveCountMax 2
AllowUsers admin deploy
Protocol 2
LogLevel VERBOSE
```

Key directives:

- **PermitRootLogin no:** Prevent direct root login over SSH. Administrators should log in as an
  unprivileged user and escalate with `sudo`.
- **PasswordAuthentication no:** Disable password-based authentication. Require key-based
  authentication. This eliminates brute-force attacks against passwords.
- **MaxAuthTries 3:** Limit authentication attempts. Combined with fail2ban, this provides effective
  brute-force mitigation.
- **AllowUsers:** Restrict login to specific users. All other users are denied, even if they have
  valid keys.
- **ClientAliveInterval 300 / ClientAliveCountMax 2:** Terminate idle sessions after 600 seconds
  (300 x 2). This prevents abandoned sessions from being hijacked.

### Fail2ban

Fail2ban monitors log files for repeated authentication failures and temporarily bans the offending
IP addresses using firewall rules (iptables, nftables, or firewalld).

```ini
[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/auth.log
maxretry = 3
findtime = 600
bantime = 3600
```

- **maxretry:** Number of failures before banning (3).
- **findtime:** Time window in seconds (600 = 10 minutes).
- **bantime:** Duration of the ban in seconds (3600 = 1 hour).

For production servers, consider more aggressive settings: `maxretry = 2`, `bantime = 86400`.

### File Permissions

Linux file permissions control access to files and directories. Every file has three permission
classes: owner (u), group (g), and others (o). Each class has three permissions: read (r), write
(w), and execute (x).

| Permission | Octal | File               | Directory                              |
| ---------- | ----- | ------------------ | -------------------------------------- |
| r          | 4     | Read file contents | List directory entries                 |
| w          | 2     | Modify file        | Create/delete/rename entries           |
| x          | 1     | Execute file       | Enter directory (access files by name) |

Common permissions:

- **644:** Owner rw, group r, others r (typical for files)
- **755:** Owner rwx, group rx, others rx (typical for directories and executables)
- **600:** Owner rw, group nothing, others nothing (SSH keys, sensitive config)
- **700:** Owner rwx, group nothing, others nothing (private directories)

#### chmod, chown, umask

```bash
chmod 600 /etc/ssh/sshd_config
chown root:root /etc/ssh/sshd_config
umask 027
```

`umask` sets the default permissions for newly created files. The umask value is subtracted from the
maximum permissions (666 for files, 777 for directories).

With `umask 027`:

- New file: $666 - 027 = 640$ (owner rw, group r, others nothing)
- New directory: $777 - 027 = 750$ (owner rwx, group rx, others nothing)

#### SUID, SGID, and Sticky Bit

**SUID (Set User ID):** When set on an executable file, the process runs with the permissions of the
file's owner, not the user who executed it. This is how `passwd` can modify `/etc/shadow` -- the
`passwd` binary has SUID root.

```bash
chmod u+s /path/to/binary
chmod 4755 /path/to/binary
```

SUID binaries are a common privilege escalation vector. Every SUID binary on the system should be
audited:

```bash
find / -perm -4000 -type f 2>/dev/null
```

**SGID (Set Group ID):** When set on a directory, new files inherit the directory's group rather
than the creator's primary group. This is used for shared directories.

```bash
chmod g+s /path/to/shared-directory
```

**Sticky bit:** When set on a directory, only the file owner, directory owner, or root can delete or
rename files within it. This is used for world-writable directories like `/tmp`.

```bash
chmod +t /tmp
chmod 1777 /tmp
```

### User Management

#### /etc/passwd

```
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
admin:x:1000:1000:Admin User:/home/admin:/bin/bash
```

Fields: `username:x:UID:GID:comment:home_dir:shell`

The `x` in the password field means the password hash is stored in `/etc/shadow`. If the password
field contains anything other than `x`, the account has a password stored directly in `/etc/passwd`,
which is a security issue (passwd is world-readable).

#### /etc/shadow

```
root:$6$rounds=656000$salt$hash:19000:0:99999:7:::
admin:$6$rounds=656000$salt$hash:19000:0:99999:7:::
nobody:*:19000:0:99999:7:::
```

Fields: `username:hash:last_change:min:max:warn:inactive:expire`

- **Hash algorithm:** `$6$` = SHA-512, `$5$` = SHA-256, `$1$` = MD5 (insecure), `$y$` = yescrypt
- **min:** Minimum days between password changes
- **max:** Maximum days before password must be changed
- **warn:** Days before expiration to warn the user
- **inactive:** Days after expiration before account is disabled
- **expire:** Account expiration date (days since epoch)

Only root can read `/etc/shadow`. Permissions should be `640`.

#### PAM (Pluggable Authentication Modules)

PAM provides a flexible framework for authentication. Configuration files are in `/etc/pam.d/`.

Key modules:

- **pam_unix.so:** Standard Unix authentication using `/etc/shadow`.
- **pam_faillock.so:** Account lockout after failed authentication attempts.
- **pam_faildelay.so:** Introduce delay after failed authentication.
- **pam_deny.so:** Always deny access (used as a fallback).
- **pam_permit.so:** Always allow access (used for non-authenticated modules).

Account lockout configuration (`/etc/security/faillock.conf`):

```
deny = 3
unlock_time = 900
fail_interval = 900
root_unlock_time = 60
```

### Service Hardening

Disable unnecessary services to reduce the attack surface:

```bash
systemctl disable --now avahi-daemon
systemctl disable --now cups
systemctl disable --now bluetooth
systemctl mask --now rpcbind
```

`systemctl mask` prevents the service from being started manually or by another service, even by
root (until unmasked).

Review all enabled services:

```bash
systemctl list-unit-files --state=enabled
systemctl list-units --type=service --state=running
```

## SELinux and AppArmor

### Mandatory Access Control (MAC)

Discretionary Access Control (DAC) -- standard Linux permissions (chmod, chown) -- allows the file
owner to set permissions. MAC overrides DAC with system-wide policies that the user cannot modify.

MAC is enforced by the kernel. Even root is subject to MAC policies (unless the policy specifically
exempts root, which it typically does not).

### SELinux

SELinux (Security-Enhanced Linux) was developed by the NSA and uses a policy-based MAC system. It
assigns a security context (label) to every process, file, port, and other system object. Access is
granted only if the policy explicitly allows the source context to access the target context's class
with the specified permission.

Security context format: `user:role:type:level`

Example: `system_u:system_r:httpd_t:s0`

- **user:** SELinux user identity (system_u, unconfined_u, staff_u, etc.)
- **role:** Role (system_r, object_r, staff_r, etc.)
- **type:** Type (the primary identifier for access decisions)
- **level:** MLS/MCS level (optional, for multi-level security)

Common types:

- `httpd_t`: Apache/Nginx process type
- `httpd_sys_content_t`: Web content files
- `sshd_t`: SSH daemon process type
- `var_log_t`: Log files
- `user_home_t`: User home directory files

### SELinux Modes

| Mode       | Behavior                                                                         |
| ---------- | -------------------------------------------------------------------------------- |
| Enforcing  | Policy is enforced. Violations are blocked and logged.                           |
| Permissive | Policy is not enforced. Violations are logged but not blocked. Used for testing. |
| Disabled   | SELinux is completely disabled. No policy loaded, no logging.                    |

Check and set mode:

```bash
getenforce
sestatus
setenforce 1
setenforce 0
```

Permanent setting in `/etc/selinux/config`:

```
SELINUX=enforcing
SELINUXTYPE=targeted
```

### SELinux Troubleshooting

When SELinux blocks an action, it generates an AVC (Access Vector Cache) denial:

```bash
ausearch -m avc -ts recent
sealert -a /var/log/audit/audit.log
```

Common remediation strategies:

1. **Relabel the file:**

   ```bash
   restorecon -v /path/to/file
   ```

2. **Set the correct context permanently:**

   ```bash
   semanage fcontext -a -t httpd_sys_content_t "/var/www/custom(/.*)?"
   restorecon -v /var/www/custom
   ```

3. **Allow a specific action with a boolean:**

   ```bash
   setsebool -P httpd_can_network_connect_db 1
   ```

4. **Write a custom policy module:**
   ```bash
   audit2allow -M my_custom_policy
   semodule -i my_custom_policy.pp
   ```

### AppArmor

AppArmor is an alternative MAC system used by default on Ubuntu, SUSE, and some other distributions.
Unlike SELinux, AppArmor uses path-based policies rather than label-based policies.

Profile example (`/etc/apparmor.d/usr.sbin.nginx`):

```
#include <tunables/global>

/usr/sbin/nginx {
  #include <abstractions/base>
  #include <abstractions/nameservice>

  capability dac_override,
  capability setuid,
  capability setgid,

  /etc/nginx/** r,
  /usr/share/nginx/** r,
  /var/log/nginx/** rw,
  /var/www/** r,

  network inet tcp,
}
```

Commands:

```bash
aa-status
aa-enforce /etc/apparmor.d/usr.sbin.nginx
aa-complain /etc/apparmor.d/usr.sbin.nginx
aa-logprof
apparmor_parser -r /etc/apparmor.d/usr.sbin.nginx
```

## Kernel Security

### Kernel Modules

Kernel modules extend kernel functionality at runtime. They run in kernel mode with full privileges.
Unauthorized or malicious kernel modules can completely compromise the system.

Hardening:

```bash
echo "install usb-storage /bin/true" >> /etc/modprobe.d/disable-usb.conf
echo "install cramfs /bin/true" >> /etc/modprobe.d/disable-filesystems.conf
lsmod
echo "blacklist floppy" >> /etc/modprobe.d/blacklist.conf
```

### sysctl Parameters

sysctl configures kernel parameters at runtime. Security-relevant parameters:

```bash
net.ipv4.ip_forward = 0
net.ipv4.tcp_syncookies = 1
net.ipv4.conf.all.accept_source_route = 0
net.ipv4.conf.default.accept_source_route = 0
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.default.accept_redirects = 0
net.ipv6.conf.all.accept_redirects = 0
net.ipv4.conf.all.rp_filter = 1
net.ipv4.conf.default.rp_filter = 1
kernel.dmesg_restrict = 1
kernel.kptr_restrict = 2
fs.suid_dumpable = 0
kernel.unprivileged_bpf_disabled = 1
kernel.perf_event_paranoid = 3
```

Persistent configuration in `/etc/sysctl.d/99-security.conf`:

```
net.ipv4.ip_forward = 0
net.ipv4.tcp_syncookies = 1
kernel.dmesg_restrict = 1
kernel.kptr_restrict = 2
kernel.unprivileged_bpf_disabled = 1
```

Apply with `sysctl --system`.

### Kernel Hardening Boot Parameters

Add to `/etc/default/grub` (GRUB_CMDLINE_LINUX_DEFAULT):

```
slab_nomerge
init_on_alloc=1
init_on_free=1
page_poison=1
page_alloc.shuffle=1
nosmt
```

Update GRUB after modification:

```bash
grub-mkconfig -o /boot/grub/grub.cfg
```

## Privilege Escalation

Understanding privilege escalation techniques is essential for both attackers and defenders. This
section covers common techniques and their defenses.

### SUID Binaries

If a SUID root binary has a known vulnerability or can be manipulated, an unprivileged user can gain
root access.

Enumeration:

```bash
find / -perm -4000 -type f 2>/dev/null
```

Classic examples:

- **find:** `find . -exec /bin/sh -p \;` (if `find` is SUID root)
- **vim:** `:!/bin/sh` (if vim is SUID root)
- **nmap:** `nmap --interactive` then `!sh` (older versions with SUID)
- **less/more:** `!/bin/sh` (if less is SUID root)

**Defense:** Audit all SUID binaries. Remove SUID from binaries that do not require it. Use
`chmod u-s` to remove the SUID bit. Replace SUID binaries with capabilities where possible (e.g.,
`setcap cap_net_raw+ep /usr/bin/ping` instead of SUID root on ping).

### Misconfigured sudo

sudo allows users to run commands as root (or another user). Misconfigured sudoers rules are a
common escalation path.

```bash
sudo -l
```

Dangerous misconfigurations:

- `sudo vim /etc/shadow` -- The user can run `:!/bin/sh` from vim to get a root shell.
- `sudo less /var/log/auth.log` -- The user can run `!/bin/sh` from less.
- `sudo awk '{print $1}' /etc/shadow` -- Directly reads the shadow file.
- `sudo env` followed by manipulation of PATH or LD_PRELOAD.
- `sudo (root) NOPASSWD: /usr/bin/find` -- Can execute arbitrary commands via find's -exec.
- `sudo (root) NOPASSWD: ALL` -- Full root access.

**Defense:**

- Grant specific commands, not editors or interpreters.
- Use `sudoedit` instead of `sudo vim` for editing files.
- Disable command escaping in editors: `Defaults use_pty`.
- Remove NOPASSWD from all rules unless operationally required.
- Regularly audit sudoers: `visudo -c` and review the output.

### Cron Jobs

Cron jobs run on a schedule with the privileges of the owning user. If a cron job executes a script
that an unprivileged user can modify, the user can inject arbitrary commands that run with the cron
job's privileges.

Enumeration:

```bash
crontab -l
cat /etc/crontab
ls -la /etc/cron.d/
ls -la /var/spool/cron/crontabs/
```

Common issues:

- **Writable cron scripts:** If `/opt/backup.sh` is owned by root but group-writable, any group
  member can modify it and execute code as root.
- **Wildcards in cron commands:** `tar czf /backup/archive.tar.gz *` can be exploited with filename
  trickery (e.g., a file named `--checkpoint=1` or `--use-compress-program=/bin/sh`).
- **PATH hijacking:** If the cron job does not use absolute paths and the PATH includes a
  user-writable directory, an attacker can place a malicious binary in that directory.

**Defense:**

- Set `chmod 700` on all cron scripts. Ensure root-owned scripts are not group- or world-writable.
- Use absolute paths for all commands in cron jobs.
- Set `PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin` in the crontab.
- Avoid wildcards or use `--` to terminate option parsing.

### Kernel Exploits

Kernel vulnerabilities allow an unprivileged user to escalate to root by exploiting bugs in the
kernel itself. These are the most dangerous escalation vectors because they bypass all application-
level controls.

Common kernel vulnerability classes:

- **Use-after-free:** A memory page is freed but a pointer to it remains. An attacker can reallocate
  the page and control its contents.
- **Stack overflow:** Buffer overflow on the kernel stack. Modern kernels have stack canaries
  (`CONFIG_STACKPROTECTOR`), but some paths may be unprotected.
- **Race conditions:** Exploiting TOCTOU (Time of Check, Time of Use) between two kernel operations.
- **Null pointer dereference:** Mapping page 0 and exploiting a kernel null pointer dereference.
- **Heap overflow:** Overflowing kernel heap allocations (slab/SLUB allocator).

**Defense:**

- Keep the kernel updated. Apply security patches promptly.
- Enable kernel address space layout randomization (KASLR): `CONFIG_RANDOMIZE_BASE=y`.
- Enable kernel stack protector: `CONFIG_STACKPROTECTOR=y`.
- Restrict kernel module loading.
- Use `kernel.unprivileged_bpf_disabled = 1` to prevent unprivileged eBPF.
- Use `kernel.perf_event_paranoid = 3` to restrict perf events.

### Path Hijacking

If a directory in the PATH is writable by the current user, an attacker can place a malicious binary
with the same name as a commonly used command in that directory. When the command is executed, the
malicious binary runs instead.

```bash
echo $PATH
```

**Defense:** Ensure system PATH directories (`/usr/bin`, `/bin`, `/usr/sbin`, `/sbin`) are owned by
root and not writable by non-root users. Never put `.` (current directory) in PATH.

### Shared Library Injection (LD_PRELOAD)

The `LD_PRELOAD` environment variable allows a user to load a shared library before all others. A
malicious library can hook function calls and execute arbitrary code with the privileges of the
target process.

```bash
# Attacker creates /tmp/evil.c
#include <stdio.h>
#include <sys/types.h>
#include <stdlib.h>

void _init() {
    if (geteuid() == 0) {
        system("/bin/bash -p");
    }
}

# Compile: gcc -fPIC -shared -o /tmp/evil.so /tmp/evil.c -nostartfiles
# Use: LD_PRELOAD=/tmp/evil.so sudo some_command
```

This only works if `sudo` preserves the `LD_PRELOAD` environment variable (it does not by default in
modern sudo versions).

**Defense:**

- Ensure `env_reset` is set in sudoers (default in most distributions).
- Ensure `env_keep` does not include `LD_PRELOAD`, `LD_LIBRARY_PATH`, or similar.
- Use `Defaults secure_path` in sudoers to set a fixed PATH.

## Logging and Auditing

### syslog / rsyslog

syslog is the standard logging daemon on Linux. rsyslog is the default implementation on most modern
distributions. It receives log messages from applications and the kernel and routes them to files,
remote servers, or other destinations.

Configuration in `/etc/rsyslog.conf` or `/etc/rsyslog.d/`:

```
auth,authpriv.*          /var/log/auth.log
kern.*                   /var/log/kern.log
*.emerg                  :omusrmsg:*
*.*;auth,authpriv.none   -/var/log/syslog
```

Log severity levels (from lowest to highest):

| Level | Keyword | Description               |
| ----- | ------- | ------------------------- |
| 0     | emerg   | System is unusable        |
| 1     | alert   | Immediate action required |
| 2     | crit    | Critical condition        |
| 3     | err     | Error condition           |
| 4     | warning | Warning condition         |
| 5     | notice  | Normal but significant    |
| 6     | info    | Informational             |
| 7     | debug   | Debug messages            |

### journald

systemd-journald is the log manager for systemd-based systems. It stores logs in a binary format
(journal files) and provides structured log entries with metadata.

```bash
journalctl -u ssh              # Logs for sshd service
journalctl -f                  # Follow logs (like tail -f)
journalctl --since "1 hour ago"
journalctl -p err              # Error-level messages only
journalctl --disk-usage        # Show disk usage
```

journald can forward to syslog for integration with existing log management infrastructure.

### auditd

auditd provides kernel-level auditing for security events. It goes beyond application logging by
intercepting system calls and recording security-relevant events.

Configuration in `/etc/audit/audit.rules`:

```
## Audit file access
-w /etc/passwd -p wa -k identity
-w /etc/shadow -p wa -k identity
-w /etc/sudoers -p wa -k identity
-w /etc/ssh/sshd_config -p wa -k ssh_config

## Audit system calls
-a always,exit -F arch=b64 -S execve -F auid>=1000 -F auid!=4294967295 -k exec

## Monitor network configuration changes
-w /etc/network/ -p wa -k network_changes
```

- **-p wa:** Watch for writes and attribute changes.
- **-k key:** Assign a key for filtering.
- **-S execve:** Watch the execve system call.

View audit logs:

```bash
ausearch -k identity
aureport -x
auditctl -l
```

### Log Rotation

Unmanaged log files grow without bound and can fill the disk, causing service outages. Logrotate
manages log rotation, compression, and retention.

Configuration in `/etc/logrotate.d/`:

```
/var/log/auth.log {
    daily
    missingok
    rotate 90
    compress
    delaycompress
    notifempty
    create 640 root adm
    postrotate
        /usr/lib/rsyslog/rsyslog-rotate
    endscript
}
```

### Centralized Logging

In production environments, logs should be forwarded to a centralized log management system:

- **ELK Stack:** Elasticsearch, Logstash, Kibana
- **Splunk:** Commercial SIEM with log collection
- **Graylog:** Open-source log management
- **Fluentd / Fluent Bit:** Log forwarder and processor
- **Vector:** High-performance log pipeline by Datadog

Centralized logging provides:

1. Correlation of events across multiple systems
2. Longer retention than local storage allows
3. Real-time alerting on security events
4. Protection against log tampering (an attacker who compromises a system cannot erase centralized
   logs)

## Patch Management

### Update Strategies

| Strategy        | Description                         | Risk    | Best For                        |
| --------------- | ----------------------------------- | ------- | ------------------------------- |
| Rolling updates | Update one node at a time           | Lowest  | Stateful services, databases    |
| Blue-green      | Maintain two identical environments | Low     | Stateless services              |
| Canary          | Update a small subset first         | Low     | Large deployments               |
| Big bang        | Update everything at once           | Highest | Homogeneous, small environments |

### Automated Patching

```bash
# Debian/Ubuntu
apt update && apt upgrade -y
apt install unattended-upgrades
dpkg-reconfigure -plow unattended-upgrades

# RHEL/CentOS
dnf update -y
dnf install dnf-automatic
systemctl enable --now dnf-automatic-install.timer
```

Unattended-upgrades configuration (`/etc/apt/apt.conf.d/50unattended-upgrades`):

```
Unattended-Upgrade::Allowed-Origins {
    "${distro_id}:${distro_codename}-security";
};
Unattended-Upgrade::AutoFixInterruptedDpkg "true";
Unattended-Upgrade::Remove-Unused-Dependencies "true";
Unattended-Upgrade::Automatic-Reboot "false";
```

### Vulnerability Scanning

Tools that scan systems for known vulnerabilities:

- **OpenSCAP:** SCAP-based compliance and vulnerability scanning.
- **Vuls:** Agentless vulnerability scanner for Linux.
- **Lynis:** Security auditing tool (not a vulnerability scanner per se, but detects
  misconfigurations).
- **Trivy:** Container image and filesystem scanner.

## File Integrity Monitoring

### AIDE (Advanced Intrusion Detection Environment)

AIDE creates a database of file hashes, permissions, and metadata. It periodically compares the
current state against the database and reports changes.

Configuration (`/etc/aide/aide.conf`):

```
/var/log       p+im
/etc/passwd    p+im
/etc/shadow    p+im
/etc/ssh/sshd_config p+im
/bin           p+im
/usr/bin       p+im
```

Flags: `p` (permissions), `i` (inode), `m` (mtime), `s` (size), `sha256` (SHA-256 hash), `sha512`
(SHA-512 hash).

```bash
aideinit                    # Initialize database
aide --update               # Update database
aide --check                # Check for changes
aide --compare              # Compare with last known state
```

### Tripwire

Tripwire is a commercial file integrity monitoring tool with similar functionality to AIDE. It uses
two databases: a baseline database (read-only, ideally stored offline or on immutable storage) and a
current database that is updated on each scan.

### OSSEC / Wazuh

OSSEC (now maintained as Wazuh) provides file integrity monitoring alongside log analysis, rootkit
detection, and active response. It is more feature-rich than AIDE alone and includes a centralized
management architecture.

## Process Isolation

### Namespaces

Linux namespaces provide isolation for system resources. Each namespace type isolates a different
aspect:

| Namespace | Isolates                              |
| --------- | ------------------------------------- |
| Mount     | Filesystem mount points               |
| PID       | Process IDs                           |
| Network   | Network interfaces, routing, iptables |
| UTS       | Hostname and domain name              |
| IPC       | System V IPC, POSIX message queues    |
| User      | User and group IDs                    |
| Cgroup    | Cgroup root directory                 |

Namespaces are the fundamental building block of containers. Docker and Kubernetes use namespaces to
provide process isolation.

### cgroups

Control groups (cgroups) limit and account for resource usage (CPU, memory, I/O, network) for a set
of processes. cgroups v2 is the current standard.

```bash
# Create a cgroup and limit memory to 512 MB
mkdir /sys/fs/cgroup/memory/limited
echo 536870912 > /sys/fs/cgroup/memory/limited/memory.max

# Limit CPU to 1 core
echo 100000 > /sys/fs/cgroup/cpu/limited/cpu.max
```

### seccomp

seccomp (Secure Computing Mode) restricts the system calls a process can make. There are two modes:

- **Strict mode:** Allows only `read`, `write`, `_exit`, and `sigreturn`. Too restrictive for most
  applications.
- **Filter mode (BPF):** Allows specifying a whitelist of permitted system calls using BPF programs.

Docker uses a default seccomp profile that blocks about 44 system calls (out of ~330). Custom
profiles can be created for specific applications.

### Containers as Isolation

Containers provide process isolation through namespaces, cgroups, and seccomp. However, they are not
a security boundary. The kernel is shared between all containers on a host, and container escape is
possible.

Container isolation vs VM isolation:

| Property          | Containers                   | VMs            |
| ----------------- | ---------------------------- | -------------- |
| Kernel            | Shared                       | Separate       |
| Isolation         | Process-level                | Hardware-level |
| Escape difficulty | Moderate (depends on config) | Very difficult |
| Overhead          | Low                          | High           |
| Startup time      | Seconds                      | Minutes        |

## Secure Boot Chain

### UEFI Secure Boot

UEFI Secure Boot ensures that only cryptographically signed bootloaders and kernels can be executed
during the boot process. The firmware verifies the signature of each component before executing it:

1. UEFI firmware verifies the bootloader (e.g., GRUB, shim)
2. The bootloader verifies the kernel
3. The kernel verifies loaded modules (if module signing is enabled)

Keys:

- **Platform Key (PK):** The top-level key. Replaces all other keys if changed.
- **Key Exchange Keys (KEK):** Used to update the Signature Database and forbid list.
- **Signature Database (db):** Contains keys and hashes of trusted bootloaders and applications.
- **Forbidden Database (dbx):** Contains keys and hashes of revoked bootloaders.

### Measured Boot

Measured Boot extends Secure Boot by recording (measuring) each component loaded during the boot
process into a Platform Configuration Register (PCR) in the TPM. Unlike Secure Boot, which blocks
unauthorized components, Measured Boot records what was loaded and allows a remote attestation
service to verify that the boot process was clean.

### TPM (Trusted Platform Module)

The TPM is a hardware chip on the motherboard that provides:

- **Secure key storage:** Keys stored in the TPM never leave the chip. Operations are performed
  inside the TPM.
- **Platform measurement:** PCR values record the state of the system at boot.
- **Remote attestation:** A remote party can verify the PCR values to confirm the system is in a
  known-good state.
- **Sealing:** Data can be encrypted to a specific PCR state. The data is only decryptable if the
  system boots with the expected components.

```bash
# Check TPM status
tpm2_getcap properties-fixed

# Seal a secret to the current PCR state
echo "my-secret" | tpm2_encryptdecrypt -c key.ctx -o sealed.dat

# Unseal (only works if PCR values match)
tpm2_encryptdecrypt -c key.ctx -i sealed.dat
```

## Windows Hardening Basics

### Group Policy

Group Policy (GPO) is the primary mechanism for managing Windows security settings centrally.

Key security policies:

- **Password policy:** Minimum length (14+ characters), complexity requirements, maximum age,
  lockout threshold.
- **Account lockout:** Lock accounts after 5 failed attempts for 15 minutes.
- **User Rights Assignment:** Define who can log on locally, who can shut down the system, who can
  take ownership of files.
- **Audit policy:** Enable audit for logon events, object access, policy change, privilege use.
- **Windows Defender settings:** Configure real-time protection, scheduled scans, exclusions.

### BitLocker

BitLocker provides full-disk encryption for Windows systems. It encrypts the entire volume and uses
the TPM to protect the encryption key.

- **TPM-only mode:** The key is released automatically if the boot measurements are correct.
- **TPM + PIN:** Requires a PIN in addition to TPM. Protects against physical attacks on a powered-
  off system.
- **TPM + USB key:** Requires a USB flash drive in addition to TPM.

### Windows Defender

Windows Defender is the built-in antivirus and anti-malware solution. Key features:

- **Real-time protection:** Monitors files, processes, and network activity for malware.
- **Attack Surface Reduction (ASR):** Blocks behaviors commonly used by malware (executing from
  email client, creating processes from Office documents, etc.).
- **Exploit Protection:** Mitigations against memory corruption vulnerabilities (DEP, ASLR, CFG).
- **Network protection:** Blocks outbound connections to known malicious domains.

### UAC (User Account Control)

UAC prompts for consent when an administrative action is attempted. Even administrators run with
standard user privileges by default. UAC elevates privileges only when explicitly approved.

UAC settings (from most to least secure):

1. **Always notify:** Prompt for every elevation, including built-in admin accounts.
2. **Notify only for app changes:** Suppress prompts for Windows operations.
3. **Notify only for app changes (secure desktop disabled):** Same as above without dimming the
   screen.
4. **Never notify:** Effectively disables UAC. Never use this setting.

## Common Pitfalls

### Disabling SELinux

Many administrators disable SELinux because "it breaks things." This removes a critical defense
layer. The correct approach is to run SELinux in permissive mode, diagnose the AVC denials, and
write appropriate policy or fix the file contexts. Most issues are resolved with `restorecon` or a
boolean.

### Root SSH Access

Allowing direct root login over SSH means that if the root password is compromised (brute force,
credential stuffing, password reuse), the attacker has full system access immediately. Always use
key-based authentication with an unprivileged user and `sudo`.

### Not Monitoring Logs

Logs are useless if nobody reads them. Centralized logging with automated alerting on high-severity
events (failed logins, privilege escalation, file integrity changes) is essential. A breach
discovered months after the fact from forensic analysis is far more costly than one caught in real
time.

### Ignoring Kernel Updates

Kernel vulnerabilities are among the most severe because they bypass all application-level controls.
Automated patching with a reboot window is the minimum. For critical systems, use live patching
(e.g., Canonical Livepatch, KernelCare) to apply security fixes without rebooting.

### Shared Library Path Issues

Leaving `LD_LIBRARY_PATH` or `LD_PRELOAD` in sudoers `env_keep` allows privilege escalation through
shared library injection. Modern sudo defaults to `env_reset`, but always verify.

## Practice Problems

### Problem 1: File Permission Calculation

A file has permissions `rwxr-xr--`. An administrator runs `chmod 750` on the file. What are the new
permissions, and which octal value represents the original permissions?

<details>
<summary>Answer</summary>

Original permissions `rwxr-xr--`:

- Owner: rwx = 4 + 2 + 1 = 7
- Group: r-x = 4 + 0 + 1 = 5
- Others: r-- = 4 + 0 + 0 = 4

Original octal: **754**

After `chmod 750`:

- Owner: rwx = 7
- Group: r-x = 5
- Others: --- = 0

New permissions: **750** (`rwxr-x---`)

The change removes read permission from others.

</details>

### Problem 2: umask Calculation

A system has `umask 077`. What are the default permissions for:

a) A newly created file b) A newly created directory

<details>
<summary>Answer</summary>

a) File: $666 - 077 = 589$ -- but this is wrong because execute bits are never set by default on
file creation. The correct calculation masks off execute bits:

$666 - 077 = 600$ (`rw-------`)

b) Directory: $777 - 077 = 700$ (`rwx------`)

Both give owner-only access. This is a paranoid but secure default for multi-user systems.

</details>

### Problem 3: SELinux Troubleshooting

An Apache web server returns 403 Forbidden for files in `/var/www/html/app/`. The file permissions
are correct (644, owned by apache:apache). `ls -Z` shows:

```
-rw-r--r--. apache apache unconfined_u:object_r:default_t:s0 index.html
```

What is the problem, and how do you fix it?

<details>
<summary>Answer</summary>

The SELinux context is `default_t`, which Apache (running as `httpd_t`) is not allowed to read. Web
content should have the `httpd_sys_content_t` context.

Fix:

```bash
semanage fcontext -a -t httpd_sys_content_t "/var/www/html/app(/.*)?"
restorecon -Rv /var/www/html/app/
```

After the fix, `ls -Z` should show:

```
-rw-r--r--. apache apache unconfined_u:object_r:httpd_sys_content_t:s0 index.html
```

If the application needs to write to the directory, you may also need:

```bash
setsebool -P httpd_unified on
```

Or give the directory the `httpd_sys_rw_content_t` context.

</details>

### Problem 4: Privilege Escalation Analysis

An attacker has access to a low-privilege shell. They run `sudo -l` and see:

```
User deploy may run the following commands on webserver:
    (root) NOPASSWD: /usr/bin/tar
```

How can the attacker escalate to root?

<details>
<summary>Answer</summary>

The attacker can exploit the `tar` command with filename trickery. They create files with names that
`tar` interprets as options:

```bash
# Create a malicious file in /tmp
cd /tmp
echo "/bin/bash -p" > shell.sh
chmod +x shell.sh
touch -- "--use-compress-program=shell.sh"
touch archive.tar

# Create a tar archive that triggers the exploit
sudo tar cf archive.tar --use-compress-program=shell.sh *
```

When `tar` processes the filename `--use-compress-program=shell.sh`, it treats it as an option and
executes `shell.sh` as the compression program, which runs `/bin/bash -p` as root.

**Defense:** Never allow `sudo` access to `tar`, `cp`, `find`, `vim`, `less`, `awk`, or any
interactive/editor command. If archiving is needed, create a wrapper script that validates inputs
and only allows operations on specific paths.

</details>

### Problem 5: Audit Rule Interpretation

An auditd rule is configured as:

```
-a always,exit -F arch=b64 -S open,openat -F dir=/etc -F auid>=1000 -F auid!=4294967295 -k etc_access
```

What does this rule do? Why is `auid!=4294967295` included?

<details>
<summary>Answer</summary>

This rule audits the `open` and `openat` system calls on 64-bit systems when the target path is
under `/etc` and the triggering user has a UID of 1000 or higher (regular users, not system
accounts). The key `etc_access` allows filtering audit logs for this specific rule.

`auid!=4294967295` excludes the "unset" login UID (4294967295 = $2^{32} - 1$, which is the value of
`-1` as an unsigned 32-bit integer). When a process is started by the system (not through a user
login), its audit UID is unset. Excluding this prevents the rule from triggering for system
processes that happen to access files in `/etc`, reducing noise in the audit logs.

</details>

### Problem 6: Kernel Parameter Verification

A server has the following sysctl settings:

```
net.ipv4.ip_forward = 1
net.ipv4.conf.all.accept_redirects = 1
net.ipv4.conf.all.rp_filter = 0
kernel.dmesg_restrict = 0
```

Identify the security issues and provide the corrected values.

<details>
<summary>Answer</summary>

1. **`net.ipv4.ip_forward = 1`:** IP forwarding is enabled. If this server is not a router, this
   allows it to forward packets between interfaces, potentially creating a routing path for
   attackers. **Fix:** `net.ipv4.ip_forward = 0` (unless the server is intentionally a router).

2. **`net.ipv4.conf.all.accept_redirects = 1`:** The server accepts ICMP redirects, which can be
   spoofed to redirect traffic through an attacker's machine (MITM). **Fix:**
   `net.ipv4.conf.all.accept_redirects = 0`.

3. **`net.ipv4.conf.all.rp_filter = 0`:** Reverse path filtering is disabled. This allows spoofed
   source IP addresses in incoming packets, facilitating DDoS reflection attacks. **Fix:**
   `net.ipv4.conf.all.rp_filter = 1`.

4. **`kernel.dmesg_restrict = 0`:** Any user can read the kernel ring buffer via `dmesg`, which may
   contain sensitive information (kernel addresses, module loading, error messages). **Fix:**
   `kernel.dmesg_restrict = 1`.

</details>
