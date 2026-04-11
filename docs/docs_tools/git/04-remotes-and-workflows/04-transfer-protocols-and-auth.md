---
title: Transfer Protocols and Authentication
slug: transfer-protocols-and-auth
---

## Protocol Overview

Git communicates with remote repositories over two primary transport protocols: **HTTPS** and
**SSH**. Both are widely supported by GitHub, GitLab, Bitbucket, Gitea, and self-hosted Git servers.
Each protocol has distinct tradeoffs in security posture, authentication mechanism, network
compatibility, and performance characteristics.

Git also supports a third protocol — the unauthenticated `git://` protocol — but it is disabled by
default on all major hosting platforms due to its lack of authentication (it was the vector for
CVE-2014-9398, a buffer overflow vulnerability). It is not covered here.

| Aspect                | HTTPS                                      | SSH                                       |
| --------------------- | ------------------------------------------ | ----------------------------------------- |
| Default port          | 443                                        | 22                                        |
| Authentication        | Personal access token, password (legacy)   | Public/private key pair                   |
| Transport encryption  | TLS (the entire connection is encrypted)   | SSH (the entire connection is encrypted)  |
| Firewall friendliness | High (port 443 is almost always open)      | Low (port 22 is often blocked)            |
| Initial setup         | Token creation on hosting platform         | Key generation, agent config, key upload  |
| CI/CD suitability     | Excellent (token as env var)               | Good (deploy key)                         |
| Enterprise proxy      | Works through HTTP(S) proxies              | Requires ProxyCommand or jump hosts       |
| Performance           | Slightly slower (TLS overhead per request) | Slightly faster (persistent multiplexing) |

Git does not enforce a single protocol for a repository. You can fetch over HTTPS and push over SSH,
or use different protocols for different remotes. The choice is per-remote URL, not per-repository.

```bash
# A repository can have remotes using different protocols
$ git remote -v
origin    https://github.com/user/repo.git (fetch)
origin    git@github.com:user/repo.git (push)
upstream  git@github.com:org/repo.git (fetch)
upstream  git@github.com:org/repo.git (push)
```

## SSH Setup

### Generating an SSH Key

The modern standard is the **Ed25519** algorithm, which offers equivalent security to RSA-3072 with
smaller keys and faster operations. It is supported by OpenSSH 6.5+ (released January 2014) and all
major Git hosting platforms.

```bash
# Generate an Ed25519 key (recommended)
$ ssh-keygen -t ed25519 -C "user@example.com"
Generating public/private ed25519 key pair.
Enter file in which to save the key (/home/user/.ssh/id_ed25519):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/user/.ssh/id_ed25519
Your public key has been saved in /home/user/.ssh/id_ed25519.pub
```

### Key Type Comparison

| Algorithm | Key Size | Security Level | Speed (sign) | Speed (verify) | Recommendation |
| --------- | -------- | -------------- | ------------ | -------------- | -------------- |
| Ed25519   | 256 bit  | ~128 bit       | Very fast    | Very fast      | Default choice |
| RSA       | 2048 bit | ~112 bit       | Slow         | Moderate       | Legacy minimum |
| RSA       | 4096 bit | ~140 bit       | Very slow    | Moderate       | Overkill       |
| ECDSA     | 256 bit  | ~128 bit       | Moderate     | Moderate       | Avoid (NIST)   |

**Ed25519** is the default choice for all new keys. Use RSA-4096 only if you must interoperate with
systems that do not support Ed25519 (rare, but some older enterprise SSH servers and FIPS-140-2
compliant systems may lack support). Avoid ECDSA — while not broken, its reliance on NIST curves has
drawn suspicion since the Dual EC DRBG controversy, and Ed25519 is strictly superior in performance.

### Passphrase-Protected Keys

A passphrase encrypts the private key on disk. If an attacker gains access to your `~/.ssh/`
directory, they cannot use the key without the passphrase. This is an important defense-in-depth
measure.

```bash
# Generate with a passphrase (you will be prompted)
$ ssh-keygen -t ed25519 -C "user@example.com"
Enter passphrase: ********

# Change or remove a passphrase from an existing key
$ ssh-keygen -p -f ~/.ssh/id_ed25519
Enter old passphrase: ********
Enter new passphrase (empty for no passphrase): [press enter to remove]
```

Without `ssh-agent` (covered below), you must enter the passphrase every time the key is used. This
becomes tedious with frequent Git operations, which is why `ssh-agent` exists.

### ssh-agent for Key Caching

`ssh-agent` is a daemon that holds your decrypted private keys in memory. Once you add a key to the
agent and authenticate once (entering the passphrase), subsequent SSH connections use the cached key
without prompting.

```bash
# Start ssh-agent (or verify it is running)
$ eval "$(ssh-agent -s)"
Agent pid 12345

# Add your default key
$ ssh-add ~/.ssh/id_ed25519
Enter passphrase for /home/user/.ssh/id_ed25519:
Identity added: /home/user/.ssh/id_ed25519 (user@example.com)

# Add all keys in ~/.ssh/
$ ssh-add

# List keys currently held by the agent
$ ssh-add -l
256 SHA256:abc123... user@example.com (ED25519)

# Remove a specific key from the agent
$ ssh-add -d ~/.ssh/id_ed25519

# Remove all keys from the agent
$ ssh-add -D
```

#### Persisting ssh-agent Across Sessions

On Linux, `ssh-agent` does not persist across reboots or terminal sessions. You must start it in
each session, or configure your shell to auto-start it:

```bash
# Add to ~/.bashrc or ~/.zshrc
if [ -z "$SSH_AUTH_SOCK" ]; then
  eval "$(ssh-agent -s)" > /dev/null
  ssh-add ~/.ssh/id_ed25519 2>/dev/null
fi
```

On macOS, `ssh-agent` is started automatically by launchd and integrates with the macOS Keychain. On
Windows, the OpenSSH Agent service handles this automatically.

#### ssh-agent Lifetime

The agent retains keys in RAM until it exits or the keys are explicitly removed. For security, you
can set a lifetime:

```bash
# Add key with a 1-hour lifetime
$ ssh-add -t 3600 ~/.ssh/id_ed25519

# Add key with a 4-hour lifetime
$ ssh-add -t 4h ~/.ssh/id_ed25519
```

After the lifetime expires, the key is removed from the agent and you must re-add it (re-entering
the passphrase).

### Adding the Public Key to a Hosting Platform

The public key (`.pub` file) must be registered on the Git hosting platform. Never share the private
key.

```bash
# Display your public key to copy
$ cat ~/.ssh/id_ed25519.pub
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI... user@example.com

# Copy it directly to clipboard (Linux with xclip)
$ xclip -sel clip < ~/.ssh/id_ed25519.pub

# Copy on macOS
$ pbcopy < ~/.ssh/id_ed25519.pub
```

On GitHub: Settings > SSH and GPG keys > New SSH key. On GitLab: Preferences > SSH Keys > Add new
key. On Bitbucket: Personal settings > SSH keys > Add key.

### Verifying SSH Connectivity

After adding your key, verify the connection before using Git:

```bash
# Test GitHub SSH connectivity
$ ssh -T git@github.com
Hi username! You've successfully authenticated, but GitHub does not
provide shell access.

# Test with verbose output for debugging
$ ssh -vT git@github.com
# This shows the full handshake: key exchange, authentication, etc.

# Test GitLab
$ ssh -T git@gitlab.com
Welcome to GitLab, @username!

# Test Bitbucket
$ ssh -T git@bitbucket.org
authenticated via ssh key.
You can use git to connect to Bitbucket.
```

## SSH Configuration

The `~/.ssh/config` file lets you define host aliases, specify which key to use per host, configure
connection multiplexing, and more. This is essential when you have multiple Git accounts or multiple
SSH keys.

### Config File Syntax

```gitconfig
# ~/.ssh/config

# --- GitHub (personal account) ---
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519
    IdentitiesOnly yes

# --- GitHub (work account via alias) ---
Host github-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_work_ed25519
    IdentitiesOnly yes

# --- GitLab ---
Host gitlab.com
    HostName gitlab.com
    User git
    IdentityFile ~/.ssh/id_ed25519
    IdentitiesOnly yes

# --- Self-hosted Gitea ---
Host gitea.internal
    HostName gitea.internal.example.com
    Port 2222
    User git
    IdentityFile ~/.ssh/id_gitea
```

### Key Directives

| Directive        | Purpose                                                        | Example                          |
| ---------------- | -------------------------------------------------------------- | -------------------------------- |
| `Host`           | Pattern-matching alias for the host                            | `Host github-work`               |
| `HostName`       | Actual hostname to connect to                                  | `HostName github.com`            |
| `User`           | Username for the connection                                    | `User git`                       |
| `IdentityFile`   | Path to the private key file                                   | `IdentityFile ~/.ssh/id_ed25519` |
| `IdentitiesOnly` | Only use the specified IdentityFile, not ssh-agent or defaults | `IdentitiesOnly yes`             |
| `Port`           | Non-default SSH port                                           | `Port 2222`                      |
| `ForwardAgent`   | Forward the local ssh-agent to the remote host                 | `ForwardAgent yes`               |
| `AddKeysToAgent` | Automatically add the key to ssh-agent on first use            | `AddKeysToAgent yes`             |
| `Compression`    | Enable compression for slow connections                        | `Compression yes`                |

### IdentitiesOnly

This is a critical directive when you have multiple SSH keys. Without it, SSH tries all keys in the
default order (and all keys in the agent) until one works. This causes failures on servers that have
a "too many authentication failures" lockout policy.

```gitconfig
# Without IdentitiesOnly, SSH might try id_rsa first (wrong key),
# get rejected, then try id_ed25519 (correct key).
# Some servers lock you out after 5 failed attempts.

Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_personal
    IdentitiesOnly yes    # Only try this specific key
```

### Multiple SSH Keys for Multiple Accounts

A common scenario is having separate GitHub accounts for personal and work use. Since both use
`github.com` as the hostname, you use host aliases:

```gitconfig
# ~/.ssh/config

# Personal GitHub
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_personal
    IdentitiesOnly yes

# Work GitHub
Host github-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_work
    IdentitiesOnly yes
```

Then clone using the alias for the work account:

```bash
# Personal repo (uses default github.com Host block)
$ git clone git@github.com:personaluser/repo.git

# Work repo (uses github-work Host block)
$ git clone git@github-work:workorg/repo.git
```

### Connection Multiplexing

SSH connection multiplexing reuses a single TCP connection for multiple SSH sessions. This
dramatically speeds up repeated connections (like multiple `git fetch` operations) because the TCP
handshake and key exchange happen only once.

```gitconfig
# ~/.ssh/config

Host *
    ControlMaster auto
    ControlPath ~/.ssh/sockets/%r@%h-%p
    ControlPersist 600
```

| Directive            | Purpose                                                                  |
| -------------------- | ------------------------------------------------------------------------ |
| `ControlMaster auto` | Enable multiplexing; auto-create a master connection if none exists      |
| `ControlPath`        | Path to the control socket file (`%r` = user, `%h` = host, `%p` = port)  |
| `ControlPersist 600` | Keep the master connection alive for 600 seconds (10 min) after last use |

The socket directory must exist:

```bash
$ mkdir -p ~/.ssh/sockets
$ chmod 700 ~/.ssh/sockets
```

After configuration, the first SSH connection creates a socket. Subsequent connections within the
`ControlPersist` window reuse it:

```bash
# First connection: full TCP handshake + key exchange (~200ms)
$ git fetch origin

# Subsequent connections within 10 minutes: reuse socket (~5ms)
$ git fetch origin
$ git push origin main
```

## HTTPS Authentication

### Personal Access Tokens (PATs)

HTTPS authentication to GitHub and GitLab uses Personal Access Tokens (PATs) instead of passwords.
GitHub deprecated password authentication for Git operations in August 2021 (and removed it entirely
in August 2022). GitLab deprecated it in 2022.

A PAT is a long-lived token (configurable expiry) that acts as a bearer credential for API and Git
operations. It can be scoped to limit its permissions.

#### Creating a GitHub PAT

```bash
# GitHub UI: Settings > Developer settings > Personal access tokens > Tokens (classic)
# Or: Settings > Developer settings > Personal access tokens > Fine-grained tokens

# Fine-grained tokens (recommended): scoped to specific repositories
# Classic tokens: scoped by permission categories (repo, admin, etc.)
```

| Token Type   | Scope Granularity        | Repository-Level | Expiry       | Recommended For      |
| ------------ | ------------------------ | ---------------- | ------------ | -------------------- |
| Fine-grained | Per-repo, per-permission | Yes              | Configurable | New projects         |
| Classic      | Permission categories    | No (global)      | Configurable | Legacy compatibility |

#### Creating a GitLab PAT

GitLab provides several token types. For Git operations, use a **Personal Access Token** or a
**Project Access Token**.

```bash
# GitLab UI: Preferences > Access Tokens
# Scopes: read_repository, write_repository (minimum for git clone/push)

# For CI/CD: Project > Settings > Repository > Deploy Tokens
# Deploy tokens are scoped to a single project and have read/write_repository scopes
```

### Using the Token with Git

The PAT is used as the password when Git prompts for credentials over HTTPS:

```bash
# Git will prompt for username and password
$ git clone https://github.com/user/repo.git
Username for 'https://github.com': your-username
Password for 'https://github.com': ghp_xxxxxxxxxxxxxxxxxxxx

# Or embed in the URL (not recommended — token visible in process list and .git/config)
$ git clone https://user:ghp_xxxx@github.com/user/repo.git
```

Embedding tokens directly in URLs is insecure. The token is stored in plaintext in `.git/config` and
is visible in `ps aux` output. Always use credential helpers instead.

### Switching Between Protocols

```bash
# Switch from HTTPS to SSH
$ git remote set-url origin git@github.com:user/repo.git

# Switch from SSH to HTTPS
$ git remote set-url origin https://github.com/user/repo.git

# Verify the current remote URL
$ git remote get-url origin
git@github.com:user/repo.git

# List all remotes with URLs
$ git remote -v
```

### Token Rotation

Tokens should be rotated periodically. The workflow is:

1. Create a new token on the hosting platform
2. Update the stored credential (via credential helper or by performing one operation with the new
   token)
3. Revoke the old token
4. Verify that existing CI/CD pipelines and local operations still work

```bash
# After creating a new token, force Git to prompt for new credentials
$ git credential reject <<EOF
protocol=https
host=github.com
EOF

# Next git operation will prompt for the new token
$ git fetch origin
Username: your-username
Password: ghp_NEW_TOKEN_HERE
```

## Credential Helpers

Credential helpers store and retrieve Git credentials so you do not have to re-enter them for every
operation. Git includes several helpers, and the platform provides additional ones.

### How Credential Helpers Work

Git's credential system is a simple request/response protocol over stdin/stdout:

```
# Git sends a query:
protocol=https
host=github.com

# The helper responds with matching credentials:
protocol=https
host=github.com
username=your-username
password=ghp_xxxxxxxxxxxx
```

Helpers are pluggable — Git asks the helper for credentials, and the helper either returns them or
prompts the user. If no helper is configured, Git falls back to prompting on the terminal.

### Built-in Helpers

#### git-credential-cache (In-Memory)

Stores credentials in memory for a configurable duration. The daemon runs as a background process
and is shared across all terminal sessions.

```bash
# Enable with 15-minute default timeout
$ git config --global credential.helper cache

# Custom timeout (1 hour)
$ git config --global credential.helper 'cache --timeout=3600'

# Custom timeout (30 seconds — useful for testing)
$ git config --global credential.helper 'cache --timeout=30'
```

Credentials are stored in a Unix socket and are lost when the daemon exits or the timeout expires.
This is the least persistent option but the most secure against disk-based attacks.

#### git-credential-store (Plaintext File)

Stores credentials in **plaintext** in `~/.git-credentials`. This is convenient but insecure — any
process running as your user can read the file.

```bash
# Enable globally
$ git config --global credential.helper store

# Specify a custom file location
$ git config --global credential.helper 'store --file ~/.git-credentials-custom'

# File format (one line per credential):
# https://user:token@github.com
```

```
# ~/.git-credentials contents (INSECURE — plaintext)
https://user:ghp_xxxxxxxxxxxx@github.com
https://user:glpat-xxxxxxxxxxxxxx@gitlab.com
```

**Do not use `store` on shared machines.** Prefer `cache` or platform-specific secure helpers.

### Platform-Specific Helpers

#### git-credential-libsecret (Linux / GNOME Keyring)

Stores credentials in the GNOME Keyring or KDE Wallet (via libsecret). This encrypts credentials at
rest using your login password.

```bash
# Install the helper
$ sudo apt install libsecret-1-0 libsecret-1-dev
$ make -C /usr/share/doc/git/contrib/credential/libsecret

# Or on Fedora
$ sudo dnf install git-credential-libsecret

# Configure
$ git config --global credential.helper /usr/lib/git-core/git-credential-libsecret
```

#### git-credential-manager-core (Cross-Platform)

Git Credential Manager Core (GCM Core) is maintained by GitHub and supports multiple backends. It is
the default credential helper on Windows when you install Git for Windows.

```bash
# Install on Linux
$ sudo apt install git-credential-manager    # Debian/Ubuntu
$ sudo dnf install git-credential-manager    # Fedora

# Configure
$ git config --global credential.helper manager-core

# Or install the newer "Git Credential Manager" (successor to GCM Core)
# https://github.com/git-ecosystem/git-credential-manager/releases
```

GCM Core supports:

- Windows Credential Manager
- macOS Keychain
- Linux secret service (libsecret)
- OAuth browser-based authentication (no token management needed)

#### git-credential-osxkeychain (macOS)

Stores credentials in the macOS Keychain. This is the default on macOS when you install Git via
Xcode command-line tools.

```bash
# Verify it is available
$ git credential-osxkeychain
# (no output = available)

# Configure
$ git config --global credential.helper osxkeychain
```

### Choosing a Helper

| Platform | Recommended Helper                            | Security                           |
| -------- | --------------------------------------------- | ---------------------------------- |
| Linux    | `libsecret` or `manager-core`                 | Encrypted at rest (keyring)        |
| macOS    | `osxkeychain` or `manager-core`               | Encrypted at rest (Keychain)       |
| Windows  | `manager-core` (default with Git for Windows) | Encrypted at rest (Credential Mgr) |
| CI/CD    | `cache` (short timeout) or env variable       | Ephemeral / job-scoped             |
| Docker   | `store` (in container) or `cache`             | Container-isolated                 |

### Per-Remote Credential Configuration

You can configure different credential helpers per remote or per directory:

```bash
# Global default
$ git config --global credential.helper libsecret

# Override for a specific repository (e.g., work repo uses a different helper)
$ git -C ~/work/repo config credential.helper 'cache --timeout=3600'

# Per-host credential helper in ~/.gitconfig
$ git config --global credential.https://github.com.helper libsecret
$ git config --global credential.https://gitlab.company.com.helper 'store --file ~/.git-credentials-work'
```

## Protocol v2

Git Protocol v2 was introduced in Git 2.18 (June 2018) and became the default for HTTP in Git 2.26
(March 2020). It is a significant redesign of the wire protocol that improves performance and
enables new features like partial clone.

### What Changed in Protocol v2

**Protocol v1** (the original, since Git's inception in 2005) had several inefficiencies:

- The ref advertisement (listing all refs the server has) was sent uncompressed and unconditionally.
  On repos with hundreds of thousands of refs, this alone could take several seconds.
- Capabilities were advertised inline with refs, making the protocol hard to extend.
- There was no way to filter what the server sent — you either got everything or nothing.

**Protocol v2** addresses these:

| Feature                | Protocol v1            | Protocol v2                             |
| ---------------------- | ---------------------- | --------------------------------------- |
| Ref advertisement      | All refs, uncompressed | Filtered, can use packfile URIs         |
| Capability negotiation | Inline with refs       | Separate, structured                    |
| Shallow fetch support  | Limited                | Full support with `deepen`              |
| Filter support         | Not supported          | `--filter=blob:none`, `--filter=tree:0` |
| Symref support         | Implicit               | Explicit `symref` capability            |
| Packfile URIs          | Not supported          | Offload packfile downloads to CDN       |

### Verifying Protocol Version

```bash
# Check which protocol Git uses (v2 is the default for modern Git)
$ GIT_PROTOCOL_FROM_USER=0 git ls-remote --symref origin HEAD
ref: refs/heads/main	HEAD
abc1234def5678...	refs/heads/main

# Force protocol v2 explicitly
$ GIT_CURL_VERBOSE=1 git ls-remote origin 2>&1 | grep "Git-Protocol"
> Git-Protocol: version=2

# Force protocol v1 for comparison
$ git -c protocol.version=1 ls-remote origin
```

### Performance Impact

For typical operations, the performance difference between v1 and v2 is modest (5-15% faster for
`fetch` on repos with thousands of refs). For monorepos with hundreds of thousands of refs, v2 can
be 3-5x faster for the initial ref advertisement phase.

The real performance win comes from **packfile URIs** — in v2, the server can return a URI for the
packfile alongside a thin pack, allowing the client to download the bulk data from a CDN rather than
the Git server directly. This is used by GitHub and GitLab to reduce load on their origin servers.

## When to Use SSH vs HTTPS

### Decision Matrix

| Factor                     | SSH Wins                                 | HTTPS Wins                                  |
| -------------------------- | ---------------------------------------- | ------------------------------------------- |
| Auth convenience           | Key-based, no prompts after setup        | Token required, but credential helpers help |
| Firewall / proxy           | Blocked on port 22 in many networks      | Port 443 almost universally open            |
| Enterprise proxy support   | Requires ProxyCommand or ProxyJump       | Works through HTTP(S) proxies natively      |
| Initial setup complexity   | Higher (key gen, agent, upload)          | Lower (create token, paste)                 |
| CI/CD pipelines            | Deploy keys work, but setup is heavier   | Token as env var, simple                    |
| Multiple accounts          | Requires SSH config aliases              | One token per account, straightforward      |
| Security (key rotation)    | Key rotation is manual                   | Token rotation is straightforward           |
| Security (credential leak) | Private key never transmitted            | Token transmitted on every request          |
| Performance                | Faster with multiplexing (ControlMaster) | Slightly slower (TLS per-request)           |
| Self-hosted server         | Simple (add key to authorized_keys)      | Requires TLS cert + PAT or LDAP setup       |

### Practical Recommendations

- **Personal development on a trusted network**: SSH. Set up `ssh-agent`, configure `~/.ssh/config`
  with multiplexing, and never think about credentials again.
- **Corporate environment with VPN/proxy**: HTTPS. Port 22 is often blocked, and corporate proxies
  handle HTTP(S) traffic.
- **CI/CD pipelines**: HTTPS with a scoped PAT injected as an environment variable. SSH requires
  managing deploy keys and agent sockets in containers, which is more complex.
- **Open source contributions (fork-based workflow)**: Either works. HTTPS is slightly simpler for
  one-off contributions because you can create a token and start immediately.
- **Self-hosted servers behind a bastion host**: SSH with a ProxyJump or ProxyCommand configuration.

## Troubleshooting

### "Permission denied (publickey)"

This is the most common SSH authentication failure. It means the SSH server rejected all keys
offered by the client.

```bash
# Diagnose with verbose output
$ ssh -vT git@github.com
debug1: Offering public key: /home/user/.ssh/id_rsa RSA SHA256:abc...
debug1: Authentications that can continue: publickey
debug1: Offering public key: /home/user/.ssh/id_ed25519 ED25519 SHA256:def...
debug1: Server accepts key: pkalg ssh-ed25519 blen 256
# ... if you see "Server accepts key", auth succeeded

# If you see "Permission denied (publickey)" without any "Offering public key" lines,
# your SSH client is not finding any keys to offer.
```

**Causes and fixes:**

1. **Wrong key or no key**: The key you added to the hosting platform does not match the key SSH is
   offering. Verify:

```bash
$ ssh-add -l                          # List keys in agent
$ ls -la ~/.ssh/id_*                  # List key files on disk
$ ssh-keygen -l -f ~/.ssh/id_ed25519  # Fingerprint of a specific key
```

2. **Key not loaded into agent**: If the key is passphrase-protected and `ssh-agent` is not running
   (or the key was not added), SSH cannot use it.

```bash
$ eval "$(ssh-agent -s)"
$ ssh-add ~/.ssh/id_ed25519
```

3. **Wrong public key on the server**: The public key registered on GitHub/GitLab does not match
   your private key. Re-copy the `.pub` file contents to the hosting platform.

4. **File permissions are too open**: SSH refuses to use private keys that are readable by other
   users.

```bash
$ chmod 700 ~/.ssh
$ chmod 600 ~/.ssh/id_ed25519
$ chmod 644 ~/.ssh/id_ed25519.pub
$ chmod 644 ~/.ssh/config
```

5. **`IdentitiesOnly` pointing to wrong file**: Check your `~/.ssh/config` to ensure the
   `IdentityFile` path is correct.

### "fatal: Could not read from remote repository"

This error can be caused by SSH or HTTPS failures. The message is the same, but the underlying cause
differs.

```bash
# For SSH URLs:
$ GIT_SSH_COMMAND="ssh -vT" git fetch origin 2>&1
# Look for the specific SSH error in the verbose output

# For HTTPS URLs:
$ GIT_CURL_VERBOSE=1 git fetch origin 2>&1
# Look for HTTP status codes (401, 403, etc.)
```

### SSH Connection Refused

```bash
$ ssh -T git@github.com
ssh: connect to host github.com port 22: Connection refused

# Your network or firewall is blocking port 22.
# Test port 443 (GitHub also runs SSH on port 443):
$ ssh -T -p 443 git@ssh.github.com
Hi username! You've successfully authenticated...

# If port 443 works, configure ~/.ssh/config:
Host github.com
    HostName ssh.github.com
    Port 443
    User git
```

### HTTPS Certificate Errors

```bash
$ git fetch origin
fatal: unable to access 'https://github.com/user/repo.git/':
SSL certificate problem: unable to get local issuer certificate
```

**Do not disable SSL verification** (`git config http.sslVerify false`). This makes you vulnerable
to man-in-the-middle attacks. Instead:

```bash
# On Linux, install CA certificates and tell Git where to find them
$ sudo apt install ca-certificates
$ git config --global http.sslCAInfo /etc/ssl/certs/ca-certificates.crt

# On corporate networks with a custom CA, add the corporate CA
$ git config --global http.sslCAInfo /path/to/corporate/ca-bundle.crt

# If you must use a self-signed cert in a trusted environment (e.g., local dev server):
$ git config --global http.sslCAInfo /path/to/self-signed-ca.crt
```

### Credential Helper Not Found

```bash
$ git fetch origin
fatal: cannot use 'libsecret' as a credential helper: helper not found
```

This means the configured credential helper binary is not installed or not in your PATH.

```bash
# Check what helper is configured
$ git config --global credential.helper
libsecret

# Check if the binary exists
$ which git-credential-libsecret
# (no output = not installed)

# Install the correct package or switch to a different helper
$ git config --global credential.helper cache
```

## Common Pitfalls

### Committing SSH Private Keys to a Repository

The private key file (`id_ed25519`, `id_rsa`) must never be committed. It provides full access to
every service where the public key is registered.

```bash
# Add SSH keys to .gitignore (belt and suspenders)
$ echo "*.pem" >> .gitignore
$ echo "id_*" >> .gitignore
$ echo "!id_*.pub" >> .gitignore   # Allow public keys
```

If a private key was committed, treat it as a full security incident: rotate the key on all hosting
platforms, revoke the old public key, and use [filter-repo](../05-advanced-topics/10-filter-repo.md)
to remove it from history.

### Using git-credential-store on Shared Machines

`git-credential-store` writes tokens in plaintext to `~/.git-credentials`. On a shared or multi-user
system, any user who can read your home directory can extract your tokens.

```bash
# Check if store is configured
$ git config --global credential.helper
store

# Switch to a secure alternative
$ git config --global credential.helper libsecret
# or
$ git config --global credential.helper 'cache --timeout=900'
```

### Hardcoding Tokens in CI/CD Configuration Files

Storing tokens directly in `.github/workflows/*.yml`, `.gitlab-ci.yml`, or `Jenkinsfile` is a
security risk. Use the platform's secret management:

```bash
# GitHub Actions: Use repository secrets (Settings > Secrets and variables > Actions)
# Reference with ${{ secrets.MY_TOKEN }}

# GitLab CI: Use CI/CD variables (Settings > CI/CD > Variables)
# Reference with $CI_TOKEN

# Jenkins: Use Credentials binding
# Reference with credentials('token-id')
```

### Not Setting IdentitiesOnly with Multiple Keys

When you have multiple keys and do not set `IdentitiesOnly yes`, SSH tries keys in a
non-deterministic order (based on the agent and default file scanning). This can cause
authentication failures that appear intermittent:

```bash
# Sometimes it works, sometimes it doesn't — non-deterministic key order
$ git push origin main
# Works
$ git push origin main
# Permission denied (publickey)
```

Fix: always set `IdentitiesOnly yes` when you have multiple keys.

### Confusing SSH and HTTPS URLs in .git/config

A repository cloned over HTTPS that is later accessed via SSH (or vice versa) will fail. The remote
URL determines the protocol:

```bash
# Check the current URL
$ git remote get-url origin
https://github.com/user/repo.git    # This will use HTTPS auth
git@github.com:user/repo.git        # This will use SSH auth

# If you cloned over HTTPS but want to use SSH:
$ git remote set-url origin git@github.com:user/repo.git
```

### Token Expiry Breaking CI/CD Pipelines

PATs with a short expiry will silently break CI/CD pipelines when they expire. The pipeline will
fail with a 401 Unauthorized error that is easy to misdiagnose.

Mitigation: set token expiry reminders in your calendar, use a dedicated CI/CD token with a longer
expiry, or use platform-native credentials (GitHub Actions' `GITHUB_TOKEN` is auto-managed).

### SSH Agent Forwarding in Untrusted Environments

`ForwardAgent yes` forwards your local `ssh-agent` to the remote host. This means any user or
process on the remote host can use your SSH keys to authenticate to other servers.

```gitconfig
# DANGEROUS — never use this for untrusted hosts
Host untrusted-server
    ForwardAgent yes

# SAFE — only forward to trusted bastion hosts
Host bastion.trusted-company.com
    ForwardAgent yes
```

If you need SSH agent forwarding (e.g., to access a Git server behind a bastion), use it only on
bastion hosts you control and trust.
