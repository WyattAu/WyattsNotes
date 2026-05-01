---
id: linux-security
title: Linux Security
description:
  Linux Security — User and Group Model; User and Group Files; View user
  information; Create user with worked examples and exam-style questions.
slug: linux-security
sidebar_position: 1
---

## User and Group Model

Linux security is fundamentally built on the user and group model. Every process runs under a
specific UID (user ID) and GID (group ID), and every file and resource is owned by a UID/GID with
associated permissions.

### User and Group Files

| File              | Purpose                                                         |
| ----------------- | --------------------------------------------------------------- |
| `/etc/passwd`     | User accounts (UID, home dir, shell — password in shadow)       |
| `/etc/shadow`     | Password hashes and aging (readable by root only)               |
| `/etc/group`      | Group definitions (GID, members)                                |
| `/etc/gshadow`    | Group password hashes (readable by root only)                   |
| `/etc/skel/`      | Template directory for new user home directories                |
| `/etc/login.defs` | Default settings for user creation (UID range, password policy) |

```bash
# View user information
id                    # current user's UID, GID, groups
id username           # specific user
finger username       # detailed user info
getent passwd username  # from NSS (includes LDAP, etc.)
getent group groupname

# Create user
useradd -m -s /bin/bash -G sudo,docker username  # create with home, shell, groups
passwd username                                    # set password

# Modify user
usermod -aG docker username    # add to supplementary group (-a is critical!)
usermod -s /bin/zsh username   # change shell
usermod -d /new/home username  # change home directory
usermod -e 2025-12-31 username # set account expiration

# Delete user
userdel username          # delete user, keep home
userdel -r username       # delete user and home directory

# Lock/unlock account
passwd -l username        # lock (prefix password hash with !)
passwd -u username        # unlock
usermod -L username       # lock (more reliable method)
usermod -U username       # unlock

# Password aging
chage -l username         # view aging info
chage -M 90 username      # max password age: 90 days
chage -W 14 username      # warn 14 days before expiration
chage -E 2025-12-31 username  # account expires
```

:::warning

Always use `usermod -aG group user` instead of `usermod -G group user`. Without `-a`, the `-G` flag
**replaces** all existing group memberships. This is one of the most common mistakes in Linux
administration.

:::

### Special UIDs

| UID   | Name         | Description                                      |
| ----- | ------------ | ------------------------------------------------ |
| 0     | root         | Superuser — unrestricted access to all resources |
| 1     | daemon       | System daemons                                   |
| 65534 | nobody       | Unprivileged user (used for NFS, some services)  |
| -1    | (4294967295) | `nobody` on some systems, overflow of 32-bit UID |

### NSS — Name Service Switch

The Name Service Switch (`/etc/nsswitch.conf`) determines the order of lookup for user/group/host
information:

```text
passwd:     files sss
group:      files sss
shadow:     files sss
hosts:      files dns
```

This means: look in local files first (`/etc/passwd`), then consult SSSD (for LDAP/AD). The order
matters for performance and fallback behavior.

## PAM — Pluggable Authentication Modules

PAM provides a modular authentication framework. Applications do not implement authentication
themselves; they delegate to PAM via the `libpam` library. Configuration is stored in `/etc/pam.d/`
or `/etc/pam.conf`.

### PAM Module Types

| Type       | Purpose                                                 |
| ---------- | ------------------------------------------------------- |
| `auth`     | Verify the user's identity (password, token, biometric) |
| `account`  | Account validity checks (expired, time restrictions)    |
| `password` | Password change/verification                            |
| `session`  | Session setup and teardown (logging, resource limits)   |

### PAM Control Flags

| Flag         | Behavior                                                                                      |
| ------------ | --------------------------------------------------------------------------------------------- |
| `required`   | Module must succeed. If it fails, the user is eventually denied (after remaining modules run) |
| `requisite`  | Module must succeed. If it fails, immediately deny (skip remaining modules)                   |
| `sufficient` | If the module succeeds and no prior `required` module failed, success is returned immediately |
| `optional`   | Module result is ignored unless it is the only module for the type                            |
| `include`    | Include all lines from another PAM configuration file                                         |
| `substack`   | Run another PAM stack independently                                                           |

### PAM Configuration Example

```text
# /etc/pam.d/sshd

# 1. Auth — verify identity
auth    required    pam_sepermit.so
auth    required    pam_env.so
auth    sufficient  pam_unix.so try_first_pass
auth    requisite   pam_succeed_if.so uid >= 1000 quiet_success
auth    required    pam_deny.so

# 2. Account — check account validity
account required   pam_unix.so
account sufficient pam_localuser.so
account sufficient pam_succeed_if.so uid &lt; 1000 quiet
account required   pam_permit.so

# 3. Password — enforce password policy
password requisite  pam_pwquality.so retry=3 authtok_type=
password sufficient pam_unix.so sha512 shadow nullok try_first_pass use_authtok
password required   pam_deny.so

# 4. Session — set up session
session optional    pam_keyinit.so revoke
session required    pam_limits.so
session [success=1 default=ignore] pam_succeed_if.so service in crond quiet use_uid
session required    pam_unix.so
```

### Key PAM Modules

| Module                        | Purpose                                                 |
| ----------------------------- | ------------------------------------------------------- |
| `pam_unix.so`                 | Standard UNIX authentication (/etc/passwd, /etc/shadow) |
| `pam_pwquality.so`            | Password strength checking (replaces `pam_cracklib`)    |
| `pam_faillock.so`             | Account locking after failed login attempts             |
| `pam_limits.so`               | Apply resource limits from `/etc/security/limits.conf`  |
| `pam_access.so`               | Access control based on `/etc/security/access.conf`     |
| `pam_mkhomedir.so`            | Auto-create home directories on first login             |
| `pam_sssd.so`                 | Authentication via SSSD (LDAP, AD, IPA)                 |
| `pam_google_authenticator.so` | TOTP two-factor authentication                          |

### Password Policy with pam_pwquality

```ini
# /etc/security/pwquality.conf
minlen = 12
minclass = 3           # at least 3 of: upper, lower, digit, special
dcredit = -1           # at least 1 digit
ucredit = -1           # at least 1 uppercase
lcredit = -1           # at least 1 lowercase
ocredit = -1           # at least 1 special character
maxrepeat = 3          # max 3 consecutive same characters
maxclassrepeat = 4     # max 4 consecutive characters of same class
rejectuser = yes       # reject passwords containing username
enforcing = 1          # enforce (1) or warn only (0)
```

### Account Locking with pam_faillock

```bash
# Configure faillock
# /etc/security/faillock.conf
deny = 5
unlock_time = 900
root_unlock_time = 60
fail_interval = 900
even_deny_root

# View failed login attempts
faillock
faillock --user username
faillock --reset      # reset counter
```

## Capabilities

Linux capabilities break down the monolithic root privilege into fine-grained units. Instead of
granting a process full root access, you can grant only the specific capabilities it needs.

### Common Capabilities

| Capability             | Description                                            |
| ---------------------- | ------------------------------------------------------ |
| `CAP_NET_BIND_SERVICE` | Bind to privileged ports (&lt; 1024)                   |
| `CAP_NET_RAW`          | Use raw and packet sockets (ping, capture)             |
| `CAP_SYS_ADMIN`        | Broad administrative capability (avoid — too powerful) |
| `CAP_SYS_PTRACE`       | Trace processes (ptrace, strace)                       |
| `CAP_SYS_CHROOT`       | Use `chroot(2)`                                        |
| `CAP_SETUID`           | Change user ID                                         |
| `CAP_SETGID`           | Change group ID                                        |
| `CAP_DAC_OVERRIDE`     | Bypass file read/write/execute permission checks       |
| `CAP_DAC_READ_SEARCH`  | Bypass file read permission and directory read/search  |
| `CAP_KILL`             | Send signals to processes not owned by the caller      |
| `CAP_CHOWN`            | Change file ownership                                  |
| `CAP_FOWNER`           | Override permission checks on files you own            |
| `CAP_FSETID`           | Set setuid/setgid bits                                 |
| `CAP_SETPCAP`          | Modify capability bounding set                         |
| `CAP_AUDIT_WRITE`      | Write to the audit log                                 |

### Managing Capabilities

```bash
# View capabilities of a binary
getcap /usr/bin/ping
# /usr/bin/ping cap_net_raw=ep

# Set capabilities on a binary
setcap cap_net_bind_service=+ep /usr/bin/myapp

# Remove capabilities
setcap -r /usr/bin/myapp

# View capabilities of a running process
getpcaps $PID
cat /proc/$PID/status | grep Cap

# CapEff = effective capabilities (what the process can actually use)
# CapPrm = permitted capabilities (can be activated)
# CapInh = inherited capabilities (across exec)
# CapBnd = bounding set (ceiling on what can be gained)
# CapAmb = ambient capabilities (preserved across exec for non-root)
```

### Capabilities in systemd

```ini
# Grant specific capabilities to a systemd service
[Service]
AmbientCapabilities=CAP_NET_BIND_SERVICE CAP_NET_RAW
CapabilityBoundingSet=CAP_NET_BIND_SERVICE CAP_NET_RAW
NoNewPrivileges=yes
```

:::tip

The principle of least privilege applies to capabilities: grant only what is needed. `CAP_SYS_ADMIN`
is especially dangerous as it encompasses many sub-capabilities. Use more specific capabilities
whenever possible.

:::

## SELinux

SELinux (Security-Enhanced Linux) is a mandatory access control (MAC) framework integrated into the
Linux kernel. Unlike DAC (Discretionary Access Control, i.e., standard Unix permissions), MAC
policies are enforced by the kernel and cannot be overridden by the file owner.

### SELinux Modes

| Mode         | Enforcement | Description                                               |
| ------------ | ----------- | --------------------------------------------------------- |
| `enforcing`  | Yes         | Policy violations are blocked and logged                  |
| `permissive` | No          | Policy violations are logged but not blocked (audit mode) |
| `disabled`   | No          | SELinux is completely disabled (not recommended)          |

```bash
# View current mode
getenforce
sestatus

# Change mode (temporary)
setenforce 1    # enforcing
setenforce 0    # permissive

# Set default mode (persistent)
# /etc/selinux/config
# SELINUX=enforcing
# SELINUXTYPE=targeted
```

### SELinux Contexts

Every file, process, and network socket has an SELinux context (also called a label) consisting of
four parts:

```text
user:role:type:level
system_u:object_r:httpd_sys_content_t:s0
```

| Component | Example                 | Description                                        |
| --------- | ----------------------- | -------------------------------------------------- |
| **User**  | `system_u`, `user_u`    | SELinux user identity                              |
| **Role**  | `object_r`, `staff_r`   | Role determines which types can be accessed        |
| **Type**  | `httpd_sys_content_t`   | Type enforcement policy (most important component) |
| **Level** | `s0`, `s0-s15:c0.c1023` | MLS/MCS level (for multi-level security)           |

```bash
# View file context
ls -Z /var/www/html/
ls -dZ /var/www/html/

# View process context
ps -eZ
ps -eZ | grep httpd

# Change file context
chcon -t httpd_sys_content_t /var/www/html/index.html

# Restore default context (from policy)
restorecon -Rv /var/www/html/

# Show default context for a path
matchpathcon /var/www/html/index.html
```

### SELinux Booleans

Booleans are runtime toggles that modify policy behavior without changing the policy itself:

```bash
# List all booleans
getsebool -a

# View specific boolean
getsebool httpd_can_network_connect

# Set boolean (temporary)
setsebool httpd_can_network_connect 1

# Set boolean (persistent)
setsebool -P httpd_can_network_connect 1

# Common booleans:
# httpd_can_network_connect     — allow Apache to connect to network
# httpd_can_network_connect_db  — allow Apache to connect to databases
# httpd_read_user_content       — allow Apache to read user home dirs
# sshd_permit_root_login        — allow root login via SSH
# ftpd_full_access              — allow full FTP access
```

### SELinux Troubleshooting

```bash
# View audit log for SELinux denials
ausearch -m AVC,USER_AVC,SELINUX_ERR -ts recent

# Search for specific denial
ausearch -m AVC -ts recent | grep httpd

# Generate human-readable report from audit log
sealert -a /var/log/audit/audit.log

# Check if SELinux is blocking a specific operation
# 1. Check audit log
grep "denied" /var/log/audit/audit.log

# 2. Generate troubleshooting report
sealert -l &lt;audit-event-id&gt;

# Common fixes:
# restorecon -Rv /path/          — fix file context
# setsebool -P boolean 1         — enable required boolean
# semanage fcontext -a -t type "/path(/.*)?"  — add permanent context rule
# semanage port -a -t type -p tcp 8080  — allow service to bind port
```

### SELinux Policy Types

| Policy     | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| `targeted` | Confines specific system services (httpd, mysqld, etc.)      |
| `mls`      | Multi-Level Security — mandatory for classified environments |
| `minimum`  | Minimal policy for embedded systems                          |

## AppArmor

AppArmor is an alternative MAC framework that uses path-based profiles (unlike SELinux's label-based
approach). It is the default on Ubuntu, SUSE, and some other distributions.

### AppArmor Profiles

```bash
# View AppArmor status
aa-status

# List profiles
aa-status | grep profiles

# View profile for a process
cat /proc/$PID/attr/current

# View profile in detail
apparmor_parser -r /etc/apparmor.d/usr.sbin.nginx

# Enforce mode (block violations)
aa-enforce /etc/apparmor.d/usr.sbin.nginx

# Complain mode (log only)
aa-complain /etc/apparmor.d/usr.sbin.nginx

# Disable profile
aa-disable /etc/apparmor.d/usr.sbin.nginx

# Reload all profiles
apparmor_parser -r /etc/apparmor.d/*
```

### AppArmor Profile Syntax

```text
# /etc/apparmor.d/usr.sbin.nginx

#include &lt;tunables/global&gt;

/usr/sbin/nginx {
  #include &lt;abstractions/base&gt;
  #include &lt;abstractions/nameservice&gt;

  # Capabilities
  capability dac_override,
  capability setuid,
  capability setgid,
  capability net_bind_service,

  # Network access
  network inet tcp,
  network inet6 tcp,

  # File access
  /etc/nginx/** r,
  /usr/share/nginx/** r,
  /var/log/nginx/** rw,
  /var/www/html/** r,
  /run/nginx.pid rw,

  # Deny specific paths
  deny /etc/shadow rwx,
  deny /etc/passwd rwx,
  deny /etc/ssh/** rwx,
}
```

### AppArmor vs SELinux

| Aspect          | SELinux                                  | AppArmor                              |
| --------------- | ---------------------------------------- | ------------------------------------- |
| **Model**       | Label-based (security context on inodes) | Path-based (profiles reference paths) |
| **Policy**      | Policy compiled from TE rules            | Profiles as plain text                |
| **Learning**    | Strict — must write policy explicitly    | Can generate profiles from log data   |
| **Complexity**  | Higher learning curve                    | Simpler to configure                  |
| **Default on**  | RHEL, Fedora, CentOS, Debian             | Ubuntu, SUSE                          |
| **Granularity** | Finer (type enforcement)                 | Coarser (path matching)               |
| **File moves**  | Context preserved with inode             | Broken if file moves to new path      |

## seccomp-bpf

seccomp (secure computing mode) restricts the system calls a process can make. When combined with
BPF (Berkeley Packet Filter), it provides fine-grained syscall filtering.

### seccomp Modes

| Mode       | Description                                          |
| ---------- | ---------------------------------------------------- |
| `disabled` | No restrictions (default)                            |
| `strict`   | Only `read`, `write`, `_exit`, `sigreturn` allowed   |
| `filter`   | BPF program defines allowed syscalls (most flexible) |

### seccomp in Docker

```bash
# Docker uses seccomp profiles by default
docker run --rm --security-opt seccomp=default.json nginx

# Use unconfined (no seccomp — NOT recommended for production)
docker run --rm --security-opt seccomp=unconfined nginx

# Custom seccomp profile
docker run --rm --security-opt seccomp=/path/to/profile.json nginx
```

### seccomp in systemd

```ini
[Service]
# Allow only specific system calls
SystemCallFilter=@system-service @basic-io
SystemCallFilter=~@mount @debug @privileged

# Architecture restriction
SystemCallArchitectures=native

# Deny specific syscalls
SystemCallFilter=~mount umount2 pivot_root swapon swapoff
```

## Linux Audit System

The Linux Audit framework provides a mechanism for tracking security-relevant system events. It is
controlled by `auditd` and configured via `auditctl` rules.

### Audit Rules

```bash
# Watch a file for access
auditctl -w /etc/passwd -p rwxa -k identity_changes

# Watch a directory recursively
auditctl -w /etc/sudoers.d/ -p wa -k sudoers_changes

# Monitor system calls by user
auditctl -a always,exit -F arch=b64 -S open,openat -F uid=0 -k root_file_access

# Monitor execution of a specific binary
auditctl -a always,exit -F path=/usr/bin/sudo -F perm=x -k sudo_execution

# Monitor failed file access
auditctl -a always,exit -F arch=b64 -S open,openat -F exit=-EACCES -k access_denied

# Monitor network connections
auditctl -a always,exit -F arch=b64 -S connect -k network_connections

# List current rules
auditctl -l

# Delete all rules
auditctl -D

# Make rules persistent
# /etc/audit/rules.d/audit.rules
-w /etc/passwd -p rwxa -k identity_changes
-w /etc/shadow -p rwxa -k identity_changes
-w /etc/sudoers -p rwxa -k identity_changes
```

### Audit Log Analysis

```bash
# View audit log
ausearch -m AVC -ts recent          # SELinux denials
ausearch -m USER_LOGIN -ts recent   # login events
ausearch -k identity_changes        # by key
ausearch -sv no                     # unsuccessful events
ausearch -a 1234                    # by audit event ID

# Generate report
aureport -x                         # executable summary
aureport -au                        # audit events by user
aureport -m                         # by audit event type
aureport -k                         # by audit key
```

### auditd Configuration

```ini
# /etc/audit/auditd.conf
local_events = yes
write_logs = yes
log_file = /var/log/audit/audit.log
log_format = ENRICHED
max_log_file = 50
max_log_file_action = ROTATE
num_logs = 5
flush = INCREMENTAL
freq = 20
disp_qos = lossy
max_retries = 3
```

## Kernel Hardening (sysctl)

```bash
# View current kernel parameters
sysctl -a | grep net.ipv4
sysctl net.ipv4.ip_forward

# Set parameter (temporary)
sysctl -w net.ipv4.ip_forward=1

# Persistent configuration
# /etc/sysctl.d/99-hardening.conf
```

### Network Hardening

```ini
# Disable IP forwarding (unless needed)
net.ipv4.ip_forward = 0

# Disable source routing
net.ipv4.conf.all.accept_source_route = 0
net.ipv4.conf.default.accept_source_route = 0

# Disable ICMP redirects
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.all.send_redirects = 0
net.ipv6.conf.all.accept_redirects = 0

# Enable reverse path filtering (anti-spoofing)
net.ipv4.conf.all.rp_filter = 1
net.ipv4.conf.default.rp_filter = 1

# Disable ICMP redirect sending
net.ipv4.conf.all.send_redirects = 0

# Enable SYN cookies (SYN flood protection)
net.ipv4.tcp_syncookies = 1

# Log martian packets (packets with impossible source addresses)
net.ipv4.conf.all.log_martians = 1

# Disable IPv6 if not used
net.ipv6.conf.all.disable_ipv6 = 1
```

### Memory and Process Hardening

```ini
# Restrict kernel pointer access
kernel.kptr_restrict = 2

# Restrict dmesg
kernel.dmesg_restrict = 1

# Restrict core dumps
kernel.core_pattern = |/bin/false
fs.suid_dumpable = 0

# ASLR (Address Space Layout Randomization) — already enabled by default
kernel.randomize_va_space = 2

# Restrict loading kernel modules (if not needed)
kernel.modules_disabled = 1    # cannot be reversed without reboot!
```

## SSH Hardening

```bash
# /etc/ssh/sshd_config — recommended settings

# Protocol and authentication
Protocol 2
PermitRootLogin prohibit-password    # or 'no'
PasswordAuthentication no            # key-only auth
PubkeyAuthentication yes
AuthorizedKeysFile .ssh/authorized_keys

# Security settings
MaxAuthTries 3
MaxSessions 5
LoginGraceTime 30
PermitEmptyPasswords no
ChallengeResponseAuthentication no
UsePAM no

# Restrict to specific users/groups
AllowUsers deploy admin
AllowGroups ssh-users

# Disable unused features
X11Forwarding no
AllowAgentForwarding no
AllowTcpForwarding no
PermitTunnel no

# Hardening
PermitUserEnvironment no
ClientAliveInterval 300
ClientAliveCountMax 2
Banner /etc/ssh/banner

# Logging
LogLevel VERBOSE
SyslogFacility AUTH
```

```bash
# Reload SSH configuration
systemctl reload sshd

# Test configuration before reload
sshd -t
```

## Common Pitfalls

### Pitfall: SELinux Blocking Legitimate Operations

The most common SELinux issue is a service being denied access to a file or port because the SELinux
context is wrong. Symptoms include "Permission denied" errors that appear even when standard Unix
permissions are correct:

```bash
# Diagnose
ausearch -m AVC -ts recent
sealert -l &lt;audit-id&gt;

# Quick fix (not recommended for production)
setenforce 0    # switch to permissive to confirm SELinux is the cause

# Proper fix
restorecon -Rv /path/to/files
# or
semanage fcontext -a -t httpd_sys_content_t "/custom/path(/.*)?"
restorecon -Rv /custom/path
```

### Pitfall: `CAP_SYS_ADMIN` Is Too Broad

`CAP_SYS_ADMIN` covers many sub-operations (mount, pivot_root, IPC, etc.). Granting it is equivalent
to granting near-root access. Always use more specific capabilities:

```bash
# WRONG
setcap cap_sys_admin=+ep /usr/bin/myapp

# CORRECT — use specific capabilities
setcap cap_net_bind_service=+ep /usr/bin/myapp
```

### Pitfall: PAM Stack Order Matters

PAM processes modules in the order they appear. A `sufficient` module early in the stack can
short-circuit the entire auth process:

```text
# WRONG — pam_unix.so is sufficient, so pam_faillock is never reached
auth    sufficient  pam_unix.so
auth    required    pam_faillock.so

# CORRECT — check faillock first
auth    required    pam_faillock.so preauth
auth    sufficient  pam_unix.so
auth    required    pam_faillock.so authfail
```

### Pitfall: Audit Rules Lost on Reboot

`auditctl` rules are not persistent. Rules must be placed in `/etc/audit/rules.d/` to survive
reboots:

```bash
# WRONG — rules lost on reboot
auditctl -w /etc/passwd -p rwxa -k identity

# CORRECT — persistent rule in /etc/audit/rules.d/audit.rules
echo "-w /etc/passwd -p rwxa -k identity" >> /etc/audit/rules.d/audit.rules
```

### Pitfall: SSH Key Permissions

SSH requires strict permissions on key files and directories. If permissions are too open, SSH will
refuse to use the key:

```bash
# Correct permissions
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub
chmod 600 ~/.ssh/authorized_keys

# Common error:
# "Permissions 0644 for '/home/user/.ssh/id_rsa' are too open"
```

### Pitfall: Disabling SELinux vs Permissive Mode

Setting `SELINUX=disabled` in `/etc/selinux/config` requires a reboot and relabels the filesystem
with no SELinux contexts, making it hard to re-enable. Instead, use `SELINUX=permissive` during
troubleshooting and switch back to `enforcing` when done:

```bash
# Temporary switch (no reboot needed)
setenforce 0    # permissive
setenforce 1    # enforcing

# NEVER set SELINUX=disabled unless absolutely certain
```

### Pitfall: Password Hashes in /etc/passwd

Historically, `/etc/passwd` contained password hashes. Modern systems store hashes in `/etc/shadow`
(readable only by root). If you see a hash in `/etc/passwd`, the system is misconfigured:

```bash
# Check: second field should be 'x'
grep root /etc/passwd
# root:x:0:0:root:/root:/bin/bash   ← CORRECT (x means shadow)
# root:$6$...:0:0:root:/root:/bin/bash  ← WRONG (hash in passwd)
```

### Pitfall: Forgetting `setenforce` Is Temporary

`setenforce 0` changes the mode only for the running system. After a reboot, the system returns to
the mode specified in `/etc/selinux/config`. Do not rely on `setenforce` for persistent
configuration changes.
