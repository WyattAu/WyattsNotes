---
id: sharing-and-permissions
title: Sharing and Permissions
description: File sharing protocols — SMB, NFS, iSCSI, and permission management on TrueNAS.
slug: sharing-and-permissions
---

## SMB/CIFS

### SMB Protocol Overview

Server Message Block (SMB) is the primary file sharing protocol for Windows environments. TrueNAS
uses Samba to provide SMB sharing. Modern versions support SMB 3.1.1, which includes encryption,
compression, and continuous availability.

| SMB Version | Features                            | Security          | Recommendation       |
| ----------- | ----------------------------------- | ----------------- | -------------------- |
| SMB1        | Legacy, no encryption               | Broken (WannaCry) | Disable always       |
| SMB2        | Large reads/writes, oplocking       | Improved          | Minimum acceptable   |
| SMB2.1      | Improved oplocking                  | Good              | Supported for legacy |
| SMB3        | Encryption, continuous availability | Strong            | Recommended minimum  |
| SMB3.0.2    | Offload data transfer               | Strong            | Recommended          |
| SMB3.1.1    | Pre-authentication integrity        | Strongest         | Recommended          |

### SMB Dialect Negotiation

When an SMB client connects to the server, the client and server negotiate the highest mutually
supported dialect. If the server is configured with a minimum version of SMB3, clients that only
support SMB1 or SMB2 will be refused.

On TrueNAS, the minimum SMB version is configured under **Sharing** → **Windows (SMB) Shares** →
**Settings** → **SMB Protocol**. Set this to `SMB3` to block all legacy clients.

### SMB3 Features in Detail

**SMB Encryption:** Encrypts all SMB traffic, protecting data in transit from eavesdropping. The
overhead depends on CPU capability — AES-NI hardware acceleration reduces the cost to approximately
3–5% throughput reduction. Enable per-share or globally.

**SMB Multichannel:** Allows multiple network connections between client and server, increasing
throughput and providing failover. The client automatically detects and uses multiple paths.

**Continuous Availability (CA):** Enables transparent failover for clustered file servers. When the
server node fails, clients reconnect to another node without dropping connections.

**SMB Direct (RDMA):** Enables direct memory-to-memory data transfer between client and server over
RDMA-capable network interfaces (InfiniBand, RoCE, iWARP). Provides ultra-low latency and high
throughput without CPU involvement.

### Setting Up SMB Sharing on TrueNAS

1. Navigate to **Sharing** → **Windows (SMB) Shares** → **Add**.
2. Select the dataset to share.
3. Configure the share name and path.
4. Set the SMB protocol version (minimum SMB3).
5. Configure access control (local users, Active Directory, or anonymous).
6. Configure advanced options (oplocks, VFS modules, auxiliary parameters).

### SMB Dataset Permissions

TrueNAS offers two approaches to SMB permissions:

1. **SMB Dataset Permissions (simplified):** Set via the SMB share configuration. Options include:
   - `DEFAULT` — Use the dataset's Unix permissions
   - `RESTRICTED` — Only the owner can access
   - `BUILTIN_ADMINISTRATORS` — Windows admin group gets full access
   - `BUILTIN_USERS` — Windows users group gets read access

2. **ACL Management (advanced):** Use Windows-style ACLs via the TrueNAS ACL editor. This provides
   fine-grained control over user and group permissions, including inheritance.

### SMB Share Configuration Options

| Option                         | Default             | Description                                   |
| ------------------------------ | ------------------- | --------------------------------------------- |
| Name                           | Dataset name        | Share name visible to clients                 |
| Path                           | Dataset mount point | Filesystem path to share                      |
| Comment                        | Empty               | Description visible in network browsing       |
| Purpose                        | No special purpose  | Optimizes settings for specific use cases     |
| Hosts Allow                    | All                 | IP addresses/networks allowed to connect      |
| Hosts Deny                     | None                | IP addresses/networks denied access           |
| Browsable                      | Yes                 | Whether the share appears in network browsing |
| Recycle Bin                    | Disabled            | Enables a recycle bin for deleted files       |
| Shadow Copy                    | Disabled            | Enables previous versions (Windows)           |
| Access Based Share Enumeration | No                  | Only show shares the user has access to       |
| macOS Streaming                | No                  | Optimize for macOS streaming workloads        |

### macOS Compatibility

macOS SMB clients have known issues with extended attributes, file locking, and resource forks. To
improve macOS compatibility:

1. Enable **VFS Modules:** `catia` (character translation), `fruit` (macOS resource fork support),
   and `streams_xattr` (extended attribute storage).
2. Set the appropriate SMB protocol version in the share configuration.
3. Use `fruit:encoding = native` for better performance with Time Machine backups.

### macOS-Specific SMB Auxiliary Parameters

```text
# In SMB auxiliary parameters for macOS shares:
vfs objects = catia fruit streams_xattr
fruit:encoding = native
fruit:metadata = stream
fruit:veto_appledouble = no
fruit:posix_rename = yes
fruit:zero_file_id = yes
```

### Time Machine Support

TrueNAS can act as a Time Machine backup target for macOS:

1. Create a dedicated dataset for Time Machine backups.
2. Create an SMB share with the purpose set to "Time Machine."
3. Enable the "Shadow Copy" option for previous versions.
4. macOS will automatically discover the share as a backup target.

**Considerations:**

- Time Machine creates sparse bundle disk images. These grow over time and cannot be shrunk.
- Enable quotas on the Time Machine dataset to prevent it from consuming all available space.
- Time Machine backups are not compatible with ZFS snapshots — the sparse bundle format does not
  support efficient snapshotting.

### Opportunistic Locking (OpLocks)

OpLocks allow a client to cache file data locally, improving performance. However, they can cause
issues with database files and applications that require strict file consistency:

| OpLock Type         | Description                       | Risk                                       |
| ------------------- | --------------------------------- | ------------------------------------------ |
| Level 1 (Exclusive) | Client caches reads and writes    | Data corruption if multiple clients access |
| Level 2 (Shared)    | Client caches reads only          | Lower risk                                 |
| Batch               | Client can defer close operations | Database corruption risk                   |
| Lease (SMB2+)       | Extended oplock with durability   | Same risks as Level 1                      |

For database files (SQLite, Microsoft Access), disable oplocks on the share:

```text
# In SMB auxiliary parameters:
kernel oplocks = no
kernel share modes = no
vfs objects = no
```

### SMB Signing

SMB signing adds a cryptographic signature to every SMB message, preventing man-in-the-middle
attacks. It is required for SMB3 encryption.

| Setting              | Performance Impact | Security |
| -------------------- | ------------------ | -------- |
| Disabled             | None               | Low      |
| Required (auto)      | 5–10%              | Medium   |
| Required (mandatory) | 10–15%             | High     |

### SMB Logging and Debugging

```bash
# Enable verbose SMB logging on TrueNAS
# In the SMB service settings, set log level to 3 (verbose)

# View SMB logs
cat /var/log/samba4/log.smbd

# Test SMB connection
smbclient -L //nas-name/share -U username

# Check active SMB sessions
smbstatus
```

---

## NFS

### NFSv3 vs NFSv4

| Feature            | NFSv3                       | NFSv4                       |
| ------------------ | --------------------------- | --------------------------- |
| Stateful           | No                          | Yes (leases, delegations)   |
| Locking            | NLM (separate protocol)     | Integrated                  |
| Security           | AUTH_SYS / AUTH_KRB5        | Mandatory security flavors  |
| Firewall           | Uses random ports (rpcbind) | Single port (2049)          |
| ACLs               | POSIX ACLs                  | NFSv4 ACLs (richer)         |
| Caching            | Client-side caching limited | Delegations improve caching |
| Character encoding | Not specified               | UTF-8 required              |
| Pseudo-filesystem  | Not supported               | Referrals and pseudo-fs     |

NFSv4 is recommended for all new deployments. It simplifies firewall configuration (single port),
provides better security, and supports more robust locking.

### NFSv4.1 and NFSv4.2

NFSv4.1 added:

- **pNFS (Parallel NFS):** Allows clients to access storage devices directly for data transfer,
  bypassing the NFS server for data path. The metadata server still handles metadata operations.
- **Session trunking:** Multiple connections between client and server for failover and load
  balancing.

NFSv4.2 added:

- **Server-side copy:** COPY operation allows the server to copy data without sending it through the
  client.
- **Labeled NFS:** Security labels (SELinux, AppArmor) on files.
- **Space reservation:** Clients can reserve space before writing.
- **Application I/O hints:** Clients can provide I/O size and alignment hints.

### NFS Exports on TrueNAS

1. Navigate to **Sharing** → **Unix (NFS) Shares** → **Add**.
2. Select the dataset.
3. Configure the authorized networks and hosts.
4. Set security options (sys, krb5, krb5i, krb5p).
5. Configure squashing settings.

### NFS Export Configuration

| Option              | Description                | Recommended Setting               |
| ------------------- | -------------------------- | --------------------------------- |
| Authorized Networks | IP ranges allowed to mount | Restrict to known client networks |
| Maproot User        | UID to map root to         | `root` or `0`                     |
| Maproot Group       | GID to map root to         | `wheel` or `0`                    |
| Security            | Authentication flavor      | `krb5p` for security-sensitive    |
| Enabled             | Activate the export        | Yes                               |

### Squashing

Root squashing maps `root` (UID 0) to an unprivileged user (typically `nobody`) to prevent a remote
root user from having root access to exported files. This is enabled by default and should be left
on unless you have a specific need for no_root_squash.

| Squash Setting    | Behavior                    |
| ----------------- | --------------------------- |
| Root Squashing    | UID 0 mapped to `nobody`    |
| No Root Squashing | UID 0 retains root access   |
| All Squashing     | All UIDs mapped to `nobody` |

### NFSv4 ID Mapping

NFSv4 uses string-based user and group names instead of numeric UIDs/GIDs. The server and client
must agree on the name-to-ID mapping. On TrueNAS:

- With local users, `nfs4idmapd` handles the mapping.
- With Active Directory, the AD domain provides the mapping.
- With LDAP, the LDAP directory provides the mapping.

If the server and client have different UID/GID mappings for the same username, files will appear to
be owned by the wrong user. Ensure the ID mapping configuration is consistent.

### Kerberos Integration

For secure NFS, use Kerberos authentication:

- **krb5:** Authentication only. Data is not encrypted.
- **krb5i:** Authentication + integrity (signed packets). Detects tampering.
- **krb5p:** Authentication + privacy (encrypted packets). Full security.

Kerberos requires a properly configured KDC (Key Distribution Center), typically MIT Kerberos or
FreeIPA.

**Kerberos setup overview:**

1. Install and configure a KDC (MIT Kerberos or FreeIPA).
2. Create NFS service principals for the server and all clients.
3. Create keytabs for the server and clients.
4. Configure the NFS server to use Kerberos security.
5. Configure clients to use Kerberos authentication.

```bash
# Verify Kerberos is working
kinit username@REALM
klist  # Should show the ticket

# Test NFS mount with Kerberos
mount -t nfs4 -o sec=krb5p nas:/mnt/pool/data /mnt/data
```

### NFS Performance Tuning

```bash
# Mount options for NFSv4 with optimal performance
mount -t nfs4 -o rw,noatime,hard,intr,_netdev,rsize=1048576,wsize=1048576 \
    nas:/mnt/pool/data /mnt/data

# Key options:
# rsize/wsize — Read/write size. 1M is optimal for modern networks.
# hard — Retry indefinitely on server failure (vs soft which returns I/O error).
# intr — Allow interrupting hung NFS calls.
# noatime — Don't update access times.
```

### NFS Server Tuning on TrueNAS

```bash
# Increase NFS server threads (default is 16)
# More threads = more concurrent NFS requests
# Set based on expected client count (e.g., 64 for 20+ clients)
```

Configure under **Sharing** → **Unix (NFS) Shares** → **Settings**.

### async vs. sync NFS

| Mode  | Behavior                                             | Safety | Performance |
| ----- | ---------------------------------------------------- | ------ | ----------- |
| sync  | Server acknowledges write only after data is on disk | High   | Lower       |
| async | Server acknowledges write before data is on disk     | Lower  | Higher      |

For NFS, the default sync behavior depends on the client's mount options. ZFS's copy-on-write
ensures data integrity regardless of the NFS sync setting, but async mode can return "success" to
the client before the data is actually stable on disk.

### NFS Client Configuration (Linux)

```bash
# /etc/fstab entry for NFSv4
nas:/mnt/pool/data  /mnt/data  nfs4  rw,hard,intr,_netdev,rsize=1048576,wsize=1048576,noatime  0 0

# Autofs for on-demand mounting
# /etc/auto.master
/-  /etc/auto.nfs

# /etc/auto.nfs
/mnt/data  -rw,hard,intr,rsize=1048576,wsize=1048576  nas:/mnt/pool/data
```

---

## iSCSI

### iSCSI Architecture

iSCSI (Internet Small Computer System Interface) encapsulates SCSI commands over IP networks,
allowing remote access to block devices. This is used for VM storage, database storage, and any
workload that requires raw block access rather than file-level access.

| Component | Role                                                              |
| --------- | ----------------------------------------------------------------- |
| Target    | The storage server (TrueNAS) that provides block devices          |
| LUN       | Logical Unit Number — the block device exposed by the target      |
| Initiator | The client that connects to the target and accesses the LUN       |
| Portal    | The IP address and port the target listens on                     |
| IQN       | iSCSI Qualified Name — unique identifier for target and initiator |

### iSCSI Discovery and Login

iSCSI uses two phases:

1. **Discovery:** The initiator finds available targets on the network. This can be done via
   SendTargets (the initiator queries a portal for available targets) or via iSNS (Internet Storage
   Name Service, a directory service for iSCSI targets).
2. **Login:** The initiator establishes a session with the target. During login, authentication
   parameters and session parameters are negotiated.

### Setting Up iSCSI on TrueNAS

1. Navigate to **Sharing** → **Block (iSCSI) Shares** → **Target Global Configuration**.
2. Set the portal (listen address), typically the IP of the TrueNAS interface.
3. Create an initiator group (define which initiators can connect).
4. Create a target and associate it with the initiator group.
5. Create extents (LUNs backed by ZFS zvols).
6. Associate extents with the target.

### Initiator Groups

An initiator group defines which initiators (clients) are allowed to connect to a target and what
LUNs they can see. This provides access control at the iSCSI level:

- **Create an initiator group** with the IQNs or IP addresses of authorized initiators.
- **Associate the initiator group** with a target to restrict access.
- **Use separate initiator groups** for different classes of clients (e.g., VM hosts vs. database
  servers).

### Zvols vs. Datasets for iSCSI

iSCSI LUNs are backed by ZFS zvols (zfs volumes). A zvol is a raw block device managed by ZFS,
providing all the benefits of ZFS (checksumming, compression, snapshots, replication) at the block
level.

```bash
# Create a zvol for iSCSI
zfs create -V 100G -b 64K -o compression=lz4 tank/iscsi/lun0

# The zvol appears as /dev/zvol/tank/iscsi/lun0
```

Key zvol properties:

| Property     | Recommended Value | Rationale                                               |
| ------------ | ----------------- | ------------------------------------------------------- |
| volblocksize | 64K or 128K       | Match the VM filesystem block size                      |
| compression  | lz4               | Reduces storage usage and improves performance          |
| sync         | always            | Required for data integrity on block devices            |
| primarycache | metadata          | For VM workloads, caching metadata in ARC is sufficient |

### Zvol Sizing Considerations

- Zvols are pre-allocated at creation time (unlike datasets that grow dynamically). Choose the size
  carefully — resizing a zvol is possible but requires coordination with the client.
- Over-provisioning zvols is safe with ZFS — the zvol size is a logical limit, not a physical
  allocation. As long as the pool has free space, the zvol can be written to up to its logical size.
- Thin provisioning is the default on TrueNAS. The zvol only consumes pool space as data is written.
  Monitor pool capacity to prevent the zvol from consuming all available space.

### iSCSI Authentication

iSCSI supports two authentication methods:

1. **CHAP (Challenge-Handshake Authentication Protocol):** One-way authentication where the target
   authenticates the initiator. The initiator provides a username and password.
2. **Mutual CHAP:** Two-way authentication where both the initiator and target authenticate each
   other. More secure but more complex to configure.

```bash
# Configure CHAP authentication on the initiator (Linux)
# /etc/iscsi/iscsid.conf
node.session.auth.authmethod = CHAP
node.session.auth.username = initiator_user
node.session.auth.password = initiator_password
node.session.auth.username_in = target_user
node.session.auth.password_in = target_password
```

### Multipath I/O (MPIO)

For high availability, configure multipath I/O so the initiator has multiple paths to the target:

1. Create multiple portals on the TrueNAS (different NICs, different subnets).
2. On the initiator, configure MPIO to use both paths.
3. Use the `mpathconf` tool (Linux) or MPIO (Windows) to set up multipath.

Multipath provides:

- **Path redundancy:** If one path fails, traffic continues on the remaining path.
- **Load balancing:** I/O is distributed across multiple paths, potentially doubling throughput.

```bash
# Linux multipath configuration
# /etc/multipath.conf
defaults {
    user_friendly_names yes
    find_multipaths yes
}

blacklist {
    devnode "^sda"
}
```

### iSCSI Performance Tuning

- **Use dedicated NICs** for iSCSI traffic. Sharing NICs with other traffic introduces latency and
  jitter.
- **Enable jumbo frames** (MTU 9000) on both the TrueNAS and the initiator for better throughput.
- **Use `sync=standard`** on the zvol for data integrity. Do not use `sync=disabled` for database
  workloads.
- **Increase the iSCSI queue depth** on the initiator if the workload benefits from deeper queues.

---

## Permission Models

### Unix Permissions

TrueNAS uses FreeBSD (CORE) or Linux (SCALE) under the hood, both of which use traditional Unix
permissions:

- **Owner:** The user who owns the file/directory.
- **Group:** The group associated with the file/directory.
- **Others:** Everyone else.
- **Permissions:** Read (r), Write (w), Execute (x) for each of the above.

```bash
# Set ownership
chown -R user:group /mnt/pool/dataset

# Set permissions
chmod -R 750 /mnt/pool/dataset

# Common permission sets:
# 755 (rwxr-xr-x) — Owner full, group and others read+execute
# 770 (rwxrwx---) — Owner and group full, others none
# 750 (rwxr-x---) — Owner full, group read+execute, others none
```

### Permission Bits Explained

| Bit | Octal    | Meaning (File)        | Meaning (Directory)              |
| --- | -------- | --------------------- | -------------------------------- |
| r   | 4        | Read file contents    | List directory entries           |
| w   | 2        | Modify file contents  | Create/delete files in directory |
| x   | 1        | Execute file          | Enter directory (cd into it)     |
| s   | (setuid) | Execute as file owner | N/A                              |
| s   | (setgid) | Execute as file group | New files inherit group          |
| t   | (sticky) | N/A                   | Only owner can delete files      |

### NFS4 ACLs

NFSv4 ACLs provide fine-grained access control that goes beyond traditional Unix permissions:

```bash
# Set an ACL (Linux/SCALE)
nfs4_setfacl -a A::user@domain.com:RWX /mnt/pool/dataset

# List ACLs
nfs4_getfacl /mnt/pool/dataset
```

NFSv4 ACLs support:

- Allow/deny entries for specific users and groups
- Inheritance flags (file inherit, directory inherit)
- Access masks (read, write, execute, append, delete, read attributes, write attributes)

### NFSv4 ACL Syntax

```
A::user@domain.com:RWX/ad
A:fd:group@domain.com:RX:fd
D::user@domain.com:W
```

| Component | Meaning                                            |
| --------- | -------------------------------------------------- |
| A or D    | Allow or Deny                                      |
| f         | File only                                          |
| d         | Directory only                                     |
| fd        | File and directory (default for new entries)       |
| RWX       | Permissions (read, write, execute)                 |
| /ad       | Inheritance flags (apply to this, directory, file) |

### Windows ACLs via SMB

TrueNAS provides a graphical ACL editor for SMB shares that mimics Windows Explorer's security tab.
This is the recommended approach for Windows-dominated environments:

1. Navigate to the dataset in TrueNAS.
2. Click "Edit ACL" (the padlock icon).
3. Add or modify ACEs (Access Control Entries).
4. Set permissions (Full Control, Modify, Read & Execute, List Folder Contents, Read, Write).
5. Set inheritance options.

### Windows ACL Inheritance

By default, ACLs inherit from the parent directory. This means:

- Setting permissions on a root directory propagates to all subdirectories and files.
- You can break inheritance at any level to set custom permissions.
- Changes to parent permissions propagate to child objects that have not broken inheritance.

### TrueNAS User Management

TrueNAS manages users and groups through its web interface:

1. Navigate to **Credentials** → **Local Users** (or **Directory Services** for AD/LDAP).
2. Create users with appropriate UIDs and GIDs.
3. Assign users to groups.
4. Map users to SMB/NFS shares.

For environments with Active Directory, configure the AD join under **Directory Services** →
**Active Directory**. This automatically imports users and groups from AD, and you can use AD
credentials for SMB/NFS authentication.

### LDAP Integration

For environments using LDAP (OpenLDAP, 389 Directory Server):

1. Configure the LDAP connection under **Directory Services** → **LDAP**.
2. Set the server URI, base DN, bind DN, and bind password.
3. Configure user and group mapping attributes.
4. Test the connection.
5. Enable LDAP for SMB and/or NFS authentication.

### User and Group ID Planning

| ID Range    | Purpose         | Example                       |
| ----------- | --------------- | ----------------------------- |
| 0           | root            | System                        |
| 1–999       | System accounts | daemon, bin, sys              |
| 1000–59999  | Local users     | Regular NAS users             |
| 60000–65533 | LDAP/AD users   | Mapped from directory service |
| 65534       | nobody          | Unmapped/anonymous            |

Ensure UIDs and GIDs are consistent across the NAS and all client systems. If the NAS assigns UID
1001 to user "alice" but a client system assigns UID 1001 to user "bob", permissions will be wrong
when accessing NFS or SMB shares.

---

## Shadow Copies and Previous Versions

### Configuring Shadow Copies

Shadow copies (previous versions) allow users to restore previous versions of files directly from
Windows Explorer. On TrueNAS, shadow copies are backed by ZFS snapshots.

1. Enable periodic snapshots on the dataset (under **Data Protection** → **Snapshot Tasks**).
2. In the SMB share configuration, enable "Shadow Copy."
3. Windows clients can right-click a file or folder and select "Restore previous versions."

### Shadow Copy Behavior

- Shadow copies are read-only. Users cannot modify or delete shadow copies.
- The number of shadow copies depends on the snapshot retention policy.
- Shadow copies consume no additional space beyond the snapshots themselves.
- Large numbers of shadow copies can slow directory listing on Windows clients.

### Snapshot Retention Policies

```bash
# Common retention policy:
# Keep hourly snapshots for 1 day (24)
# Keep daily snapshots for 7 days
# Keep weekly snapshots for 4 weeks
# Keep monthly snapshots for 12 months
```

TrueNAS provides a built-in snapshot task scheduler with these presets. Configure under **Data
Protection** → **Snapshot Tasks** → **Add**.

### Shadow Copy Client Configuration (Windows)

```text
# Enable shadow copy support on Windows clients:
# 1. Open Group Policy Editor (gpedit.msc)
# 2. Navigate to: Computer Configuration → Administrative Templates → Network → Lanman Server
# 3. Enable "Allow shadow copies to be enabled on shares"
```

### Home Directory Sharing

For user home directories:

1. Create a dataset per user: `tank/homes/alice`, `tank/homes/bob`.
2. Create an SMB share for each home directory or use the `homes` share type.
3. Set permissions so each user can only access their own home directory.
4. Enable shadow copies for file recovery.

### Guest Access vs. Authenticated

| Mode              | Configuration          | Security | Use Case                 |
| ----------------- | ---------------------- | -------- | ------------------------ |
| Authenticated     | User accounts required | High     | Production environments  |
| Guest (anonymous) | No credentials needed  | Low      | Public file sharing only |

:::warning Never enable guest access on shares containing sensitive data. Guest access bypasses all
authentication and authorization checks. Use it only for public read-only shares (e.g., a shared
software repository). :::

---

## Common Pitfalls

### Mixing Unix and Windows ACLs

Do not use both Unix permissions and Windows ACLs on the same dataset. This causes permission
conflicts that are extremely difficult to debug. Choose one model and stick with it:

- **Windows-only environments:** Use Windows ACLs via SMB. Set the dataset ACL type to `SMB`.
- **Unix-only environments:** Use Unix permissions and NFSv4 ACLs.
- **Mixed environments:** Use NFSv4 ACLs, which both NFS and SMB can interpret.

### Not Restricting SMB Protocol Versions

Leaving SMB1 enabled is a significant security risk. SMB1 has known vulnerabilities (including the
exploit used by WannaCry) and provides no modern features. Always set the minimum SMB version to
SMB3 in the TrueNAS SMB service configuration.

### Using Soft NFS Mounts

A "soft" NFS mount returns an I/O error to the application if the NFS server is unreachable for the
timeout period. This can cause data corruption in applications that assume I/O either succeeds or
fails definitively (databases, VM images). Always use "hard" mounts for persistent storage.

### Forgetting to Configure NFS Security

The default NFS security flavor is `sys` (AUTH_SYS), which trusts the client to report the correct
UID/GID. Any user who can connect to the NFS server can claim to be any user, including root. For
any network where you do not fully trust all clients, use Kerberos (krb5, krb5i, or krb5p).

### Overlooking Dataset Case Sensitivity

SMB is case-insensitive by default, while NFS and ZFS are case-sensitive. If you share the same
dataset via both SMB and NFS, case sensitivity mismatches can cause files to appear duplicated or
missing. Set the `casesensitivity` dataset property to `insensitive` if sharing primarily via SMB.

### Not Enabling NFSv4 ID Mapping

Without proper NFSv4 ID mapping (`nfs4idmapd`), the server and client may disagree on the mapping
between usernames and UIDs. This results in files appearing to be owned by `nobody` or incorrect
users. Always configure ID mapping when using NFSv4 with named users.

### Ignoring SMB Signing Requirements

Some compliance frameworks (PCI-DSS, HIPAA) require SMB signing. Without it, an attacker on the
local network can intercept and modify SMB traffic. Enable SMB signing globally or per-share if your
environment requires it.

## SMB3 Encryption Configuration

SMB3 encryption protects data in transit between client and server. TrueNAS supports SMB3 encryption
which can be enabled globally or per-share. Encrypted SMB traffic adds CPU overhead (typically
10-25% depending on the cipher used) but eliminates the need for separate VPN tunnels for data
protection.

### Enabling SMB3 Encryption Globally

In TrueNAS SCALE, navigate to **Sharing > Windows Shares (SMB) > Settings** and set **SMB Protocol**
to `SMB3`. Then enable **Host SMB3 Encryption** to require encryption for all connections.

From the CLI:

```bash
# Check current SMB encryption setting
midclt call smb.get_smb_conf | jq '.'

# Enable encryption via CLI (TrueNAS SCALE)
midclt call smb.update '{"smb3_encryption": true}'
```

### Per-Share Encryption

Not all shares need encryption. For example, internal-only media shares on a trusted network may not
benefit from the overhead. Enable encryption selectively:

```bash
# Set encryption per share
midclt call smb.update '{"shares": [{"name": "sensitive-data", "encrypt": true}]}'

# Verify the setting
midclt call smb.get_share sensitive-data | jq '.encrypt'
```

### Performance Impact

| Cipher                    | AES-128-GCM | AES-256-GCM | ChaCha20-Poly1305       |
| ------------------------- | ----------- | ----------- | ----------------------- |
| CPU Overhead (AES-NI)     | 5-10%       | 8-15%       | 10-20%                  |
| CPU Overhead (no AES-NI)  | 30-50%      | 35-55%      | 15-25%                  |
| Throughput Impact (10GbE) | Minimal     | Minimal     | Noticeable on &lt;10GbE |

Modern Intel and AMD CPUs with AES-NI instructions handle AES-128-GCM with minimal overhead. If your
CPU lacks AES-NI (rare on anything newer than 2013), the performance penalty is significant.

:::tip Use `smbstatus` on TrueNAS to verify that connections are actually using encryption:

```bash
smbstatus -b | head -30
```

The `Dialect` column should show `SMB3_11` or higher for encrypted connections. :::

## NFSv4.2 Features

NFSv4.2 introduces several features that improve performance and usability compared to NFSv4.1 and
earlier versions. TrueNAS supports NFSv4.2 by default when the NFS service is configured for NFSv4.

### Server-Side Copy (Copy Offload)

NFSv4.2 supports the `COPY` operation, which allows the server to copy data within the same
filesystem without transferring it over the network. This is analogous to Server-Side Copy in SMB3.

```bash
# On the NFS client, use cp --reflink for copy offload
cp --reflink=always /mnt/nfs/source/largefile /mnt/nfs/destination/largefile

# The copy happens entirely on the server; no data traverses the network
```

### Sparse Files and Hole Punching

NFSv4.2 supports `ALLOCATE` and `DEALLOCATE` operations for efficient space management. This is
critical for virtual machine images and database files that use sparse allocation.

```bash
# Punch a hole in a file (free space without deleting the file)
# Requires NFSv4.2 and fallocate support on the client
fallocate -d /mnt/nfs/vm-disk.qcow2

# Preallocate space for a file
fallocate -l 100G /mnt/nfs/database/datafile
```

### Labeled NFS (SecLabel)

NFSv4.2 can carry SELinux or AppArmor security labels alongside file operations, enabling Mandatory
Access Control (MAC) enforcement across NFS mounts. This is primarily useful in environments that
already use SELinux in enforcing mode.

```bash
# Check if labeled NFS is in use
cat /proc/mounts | grep nfs4 | grep -o "seclabel"
```

### NFSv4.2 Performance Tuning

```bash
# Increase read/write size (kernel defaults are often conservative)
mount -t nfs4 -o rw,noatime,rsize=1048576,wsize=1048576,hard,intr \
  truenas.local:/mnt/tank/data /mnt/nfs

# Verify negotiated sizes
nfsstat -m | grep -E "rsize|wsize"

# Enable parallel NFS (pNFS) if using TrueNAS Enterprise with multiple data servers
mount -t nfs4 -o minorversion=2,pnfs truenas.local:/mnt/tank/data /mnt/nfs
```

:::warning Large `rsize` and `wsize` values improve throughput for large sequential reads/writes but
can increase latency for small random I/O. For mixed workloads, 1MB is a reasonable default. For
metadata-heavy workloads (mail servers, source code repositories), consider 128K or 256K. :::

## iSCSI Target Configuration Deep Dive

iSCSI provides block-level storage access over Ethernet, which is essential for VMware ESXi,
Hyper-V, and other hypervisors that require raw block devices rather than file-level access.

### Creating an iSCSI Target in TrueNAS SCALE

1. Navigate to **Sharing > Block Shares (iSCSI)**
2. Click **Add Target**
3. Configure the target:
   - **Target Name:** A unique identifier (e.g., `esxi-datastore`)
   - **Target Alias:** Human-readable description
   - **Target Portal Group:** Select the portal that defines which interfaces and ports to use
   - **Initiator Group:** Define which initiators (clients) are allowed to connect

### Portal and Portal Group Configuration

A portal defines the network interface and port that the iSCSI target listens on:

```bash
# View current iSCSI portals via CLI
midclt call iscsi.portal.query

# Create a portal on a specific interface
midclt call iscsi.portal.create '{
  "listen": [{"address": "10.0.0.10", "port": 3260}],
  "comment": "10GbE iSCSI portal"
}'
```

:::info Always use a dedicated network interface for iSCSI traffic. Sharing a NIC between iSCSI and
other services introduces latency and packet loss that directly impacts storage performance. If
possible, use a separate VLAN or physical network for iSCSI. :::

### Extent Configuration

An extent maps a ZFS volume (zvol) to the iSCSI target:

```bash
# Create a zvol for iSCSI use
zfs create -V 500G -b 64K -o compression=lz4 -o logbias=latency \
  tank/iscsi/esxi-datastore

# Verify the zvol
zfs list -o name,volsize,volblocksize,compression,logbias tank/iscsi/esxi-datastore
```

Key zvol properties for iSCSI:

| Property       | Recommended Value                              | Rationale                           |
| -------------- | ---------------------------------------------- | ----------------------------------- |
| `volblocksize` | `64K` for VMs, `128K` for databases            | Match guest I/O size                |
| `compression`  | `lz4` or `zstd`                                | Reduces storage; minimal CPU impact |
| `logbias`      | `latency` for databases, `throughput` for bulk | Controls sync write behavior        |
| `sync`         | `standard` (default)                           | Ensures data integrity              |
| `primarycache` | `metadata` if using host caching               | Avoids double-caching               |

### CHAP Authentication

Configure CHAP (Challenge-Handshake Authentication Protocol) to restrict iSCSI access:

```bash
# Create a CHAP user
midclt call iscsi.auth.create '{
  "tag": 1,
  "user": "esxi-initiator",
  "secret": "your-secure-secret-here"
}'

# Associate CHAP with the initiator group
midclt call iscsi.initiatorgroup.update 1 '{
  "auth": "chap",
  "auth_group": 1
}'
```

:::warning CHAP secrets are transmitted in plain text in the TrueNAS API. Use the web UI for CHAP
configuration when possible, as it masks the secret. Never expose CHAP credentials in scripts
checked into version control. :::

## Windows ACL Delegation Examples

When integrating TrueNAS with Active Directory, you can delegate permission management to non-admin
users through ACL inheritance and permission entry ordering.

### Creating a Delegated Share Structure

```powershell
# On a Windows client connected to the TrueNAS share:
# 1. Create a department folder structure
New-Item -Path "\\TRUENAS\share\Engineering" -ItemType Directory
New-Item -Path "\\TRUENAS\share\Marketing" -ItemType Directory

# 2. Remove default inheritance and copy permissions
$acl = Get-Acl "\\TRUENAS\share\Engineering"
$acl.SetAccessRuleProtection($true, $true)
Set-Acl "\\TRUENAS\share\Engineering" $acl

# 3. Grant a department lead full control on their folder
$rule = New-Object System.Security.AccessControl.FileSystemAccessRule(
  "DOMAIN\EngineeringLead", "FullControl", "ContainerInherit,ObjectInherit", "None", "Allow"
)
$acl.AddAccessRule($rule)

# 4. Deny the lead access to other departments (explicit deny takes precedence)
$denyRule = New-Object System.Security.AccessControl.FileSystemAccessRule(
  "DOMAIN\EngineeringLead", "FullControl", "ContainerInherit,ObjectInherit", "None", "Deny"
)
$otherAcl = Get-Acl "\\TRUENAS\share\Marketing"
$otherAcl.AddAccessRule($denyRule)
Set-Acl "\\TRUENAS\share\Marketing" $otherAcl
```

### Advanced ACL Examples

#### Time-Based Access

While SMB does not natively support time-based access control, you can achieve this through TrueNAS
middleware scripts:

```bash
#!/bin/bash
# /mnt/pool/scripts/toggle-share-access.sh
# Called by cron at specific hours

SHARE_NAME="sensitive-data"
HOUR=$(date +%H)

if [ "$HOUR" -ge 8 ] && [ "$HOUR" -lt 18 ]; then
  midclt call smb.update "{\"shares\": [{\"name\": \"$SHARE_NAME\", \"enabled\": true}]}"
else
  midclt call smb.update "{\"shares\": [{\"name\": \"$SHARE_NAME\", \"enabled\": false}]}"
fi
```

#### Quota-Based Access Control

Combine ZFS user quotas with share permissions to enforce storage limits:

```bash
# Set a 50GB quota for a specific user on a dataset
zfs set userquota@jdoe=50G tank/share/data

# Check quota usage
zfs userspace tank/share/data

# Set a group quota for the engineering team
zfs set groupquota@engineering=500G tank/share/data

# View group quota usage
zfs groupspace tank/share/data
```

This approach is more effective than trying to manage quotas through Windows ACLs alone, because ZFS
enforces quotas at the filesystem level regardless of the access protocol.

## Common Pitfalls (Extended)

### Mixing NFS and SMB Access to the Same Dataset

Accessing the same ZFS dataset simultaneously via NFS and SMB causes locking and caching
inconsistencies. NFS uses advisory locks while SMB uses mandatory locks. Files created via NFS may
have permissions that SMB clients cannot interpret (POSIX vs Windows ACL mapping issues).

:::warning If you must share data between NFS and SMB clients, use separate datasets with a
replication or rsync pipeline to synchronize content. Alternatively, use SMB exclusively with
Windows ACL support enabled. :::

### Not Setting Up DNS Properly

iSCSI and NFS performance degrades significantly when the client cannot resolve the server's
hostname quickly. Each DNS lookup timeout adds latency to every new connection. Ensure that:

```bash
# Verify forward and reverse DNS resolution
host truenas.local
host 10.0.0.10

# Both should return consistent results
# If using /etc/hosts, ensure entries exist on both client and server
```
