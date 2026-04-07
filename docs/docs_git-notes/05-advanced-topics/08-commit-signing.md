---
title: Commit Signing
slug: commit-signing
---

## Why Sign Commits

Commit signing uses cryptographic signatures to prove that a commit was authored by the holder of a
specific private key. The signature is stored as part of the commit object itself — it is not a
separate metadata layer, but an integral field in the commit's header.

### The Threat Model

Git's author and committer fields are **unauthenticated text**. Any operation that creates a commit
object can set these fields to arbitrary values:

```bash
# Anyone can claim to be anyone
$ git commit --author="Linus Torvalds <torvalds@linux-foundation.org>" -m "important fix"
```

This is not a bug — Git was designed as a distributed system where trust is social, not
cryptographic. But in an era of supply chain attacks, this design assumption is a liability:

- **Commit spoofing**: An attacker modifies a repository's history and sets author fields to match
  legitimate contributors, making malicious commits appear authentic.
- **Man-in-the-middle**: An attacker intercepts a push and replaces commit objects with modified
  versions containing backdoors.
- **Compromised mirror**: A mirror or fork is altered to include malicious commits attributed to
  real maintainers.
- **Insider threat**: A contributor with push access introduces a change and attributes it to
  someone else to obscure accountability.

Commit signing addresses all of these by binding a commit to a cryptographic key. The signature
covers the commit's entire content — tree hash, parent hashes, author, committer, message — making
it tamper-evident. If any bit of the commit changes, the signature breaks.

### Identity Verification

When you see a commit with a "Verified" badge on GitHub or GitLab, it means the platform has:

1. Extracted the signature from the commit object.
2. Identified the public key referenced in the signature.
3. Verified that the public key is associated with a known account.
4. Confirmed that the signature is mathematically valid over the commit content.

This chain of verification gives you high confidence that the commit was actually produced by the
account holder, not by someone pretending to be them.

### Limitations

Signing commits does not protect against:

- **Key compromise**: If your private key is stolen, the attacker can sign commits as you. Key
  hygiene is critical.
- **Signed malicious commits**: A contributor with a legitimate key can still introduce
  vulnerabilities. Signing proves identity, not intent.
- **Social engineering**: An attacker could create a new account with a similar name and a different
  key. The signature is valid, but the identity is misleading.

Signing is one layer in a defense-in-depth strategy, not a silver bullet.

## GPG Signing

GnuPG (GPG) has been Git's supported signing mechanism since version 1.7.9. It uses the OpenPGP
standard (RFC 4880 / RFC 9580) and provides both signing and encryption capabilities.

### Installing GPG

```bash
# Debian/Ubuntu
$ sudo apt install gnupg

# macOS
$ brew install gnupg

# Fedora
$ sudo dnf install gnupg2

# Alpine (common in Docker)
$ apk add gnupg
```

### Generating a GPG Key

For signing Git commits, an Ed25519 key is preferred — it produces small signatures (64 bytes), uses
elliptic curve cryptography (fast, small keys), and is widely supported in modern GPG versions:

```bash
# Generate an Ed25519 signing key
$ gpg --full-generate-key
# Select: (9) ECC (sign and encrypt)
# Select: (1) Curve 25519
# Enter your real name and email (must match your Git config)
# Set a passphrase (this protects the key at rest)

# Alternatively, for RSA (if Ed25519 is not supported by your platform):
$ gpg --full-generate-key
# Select: (4) RSA (set your own capabilities)
# Key size: 4096
```

The email address in the GPG key **must match** the email address in your Git configuration. GitHub
and GitLab use email matching to associate signatures with accounts.

### Listing Keys

```bash
# List secret keys with long key IDs
$ gpg --list-secret-keys --keyid-format=long
/Users/user/.gnupg/pubring.kbx
---------------------------------
sec   ed25519/ABCDEF1234567890 2025-01-15 [SC]
      11223344556677889900AABBCCDDEEFF00112233
uid           [ultimate] Your Name <you@example.com>
ssb   cv25519/FEDCBA0987654321 2025-01-15 [E]

# The signing key ID is the part after the slash in the sec line:
# ABCDEF1234567890
```

### Configuring Git

```bash
# Set the signing key (use the long key ID)
$ git config --global user.signingkey ABCDEF1234567890

# Sign all commits automatically
$ git config --global commit.gpgsign true

# Sign all annotated tags automatically
$ git config --global tag.gpgsign true

# Verify your configuration
$ git config --get user.signingkey
ABCDEF1234567890
$ git config --get commit.gpgsign
true
```

### GPG Agent and Passphrase Caching

The `gpg-agent` daemon manages your private keys and caches passphrases so you don't have to enter
them for every commit:

```bash
# Check if gpg-agent is running
$ gpgconf --list-dirs agent-socket
/home/user/.gnupg/S.gpg-agent

# Configure passphrase cache duration (default is 600 seconds / 10 minutes)
# Add to ~/.gnupg/gpg-agent.conf:
default-cache-ttl 3600        # 1 hour
default-cache-ttl-ssh 3600    # 1 hour for SSH keys
max-cache-ttl 7200            # Maximum 2 hours

# Reload the agent configuration
$ gpgconf --reload gpg-agent
```

On macOS, if you use GPG Suite, `gpg-agent` integrates with the macOS Keychain. On Linux, you may
need to start `gpg-agent` manually or via your session manager:

```bash
# Start gpg-agent if it is not running
$ gpgconf --launch gpg-agent

# Test that the agent is accessible
$ echo "test" | gpg --clearsign > /dev/null
```

### Exporting and Uploading Your Public Key

GitHub and GitLab need your **public** key to verify your signatures:

```bash
# Export your public key in ASCII-armored format
$ gpg --armor --export ABCDEF1234567890

# Copy the output and paste it into:
# GitHub: Settings > SSH and GPG keys > New GPG key
# GitLab: Preferences > SSH Keys > Add new GPG key

# Alternatively, pipe directly to clipboard (macOS)
$ gpg --armor --export ABCDEF1234567890 | pbcopy

# Linux (requires xclip)
$ gpg --armor --export ABCDEF1234567890 | xclip -selection clipboard
```

## SSH Signing

SSH signing (Git 2.34+) uses Ed25519 SSH keys to sign commits and tags. It is simpler than GPG
because it does not require `gpg-agent`, a separate keyring, or a passphrase daemon. If you already
use SSH for Git authentication, you likely already have a suitable key.

### Generating an SSH Signing Key

```bash
# Generate a dedicated Ed25519 key for signing
$ ssh-keygen -t ed25519 -C "git-signing" -f ~/.ssh/git-signing-key

# If you want to use an existing SSH key for signing, no new key is needed
# Just configure Git to use it (see below)
```

You can use the same SSH key for both authentication and signing, but separating them is a better
practice — if your signing key is compromised, your server access is not affected, and vice versa.

### Configuring Git for SSH Signing

```bash
# Tell Git to use SSH for signing instead of GPG
$ git config --global gpg.format ssh

# Set the path to your signing key's public key
$ git config --global user.signingkey ~/.ssh/git-signing-key.pub

# Sign all commits automatically
$ git config --global commit.gpgsign true

# Verify configuration
$ git config --get gpg.format
ssh
$ git config --get user.signingkey
/home/user/.ssh/git-signing-key.pub
```

### Adding the SSH Signing Key to GitHub/GitLab

Upload the **public** key (`.pub` file) to the platform:

```bash
# Display your public key
$ cat ~/.ssh/git-signing-key.pub
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI... git-signing

# On GitHub: Settings > SSH and GPG keys > New SSH key
#   Key type: "Signing Key"
# On GitLab: Preferences > SSH Keys > Add new key
#   Check "Signing key" checkbox
```

> **Important**: On GitHub, SSH keys must be explicitly designated as "Signing Keys" in the key type
> dropdown. If you add an SSH key as an "Authentication Key," GitHub will not use it to verify
> commit signatures.

### SSH vs GPG: Practical Comparison

| Aspect             | GPG                                    | SSH                                       |
| ------------------ | -------------------------------------- | ----------------------------------------- |
| Key format         | OpenPGP (pubring, secring)             | SSH keypair (ed25519, rsa)                |
| Agent              | `gpg-agent` (complex configuration)    | `ssh-agent` (ubiquitous, simple)          |
| Passphrase caching | Via `gpg-agent` config                 | Via `ssh-agent` (system-level)            |
| Key storage        | `~/.gnupg/` keyring                    | `~/.ssh/` flat files                      |
| Setup complexity   | High (keyring, trust database, export) | Low (generate, configure, upload pub)     |
| CI/CD integration  | Requires GPG key import                | Requires SSH key or ssh-agent socket      |
| Multiple keys      | Keyring supports many                  | Configure per-repo or use `~/.ssh/config` |
| Subkey support     | Yes (separate signing/encryption/auth) | No (each key is a single key pair)        |
| Revocation         | Revocation certificates                | Remove public key from server             |

For new setups, SSH signing is recommended. It eliminates the entire `gpg-agent` complexity layer
and works with infrastructure you already have.

## Signing Commits

### Manual Signing

```bash
# Sign a single commit
$ git commit -S -m "feat: add user authentication"

# Sign with a specific key (overrides user.signingkey)
$ git commit -S ABCDEF1234567890 -m "feat: add user authentication"
```

The `-S` flag (capital S, for "Sign") tells Git to attach a cryptographic signature to the commit.
Without `-S`, the commit is unsigned.

### Automatic Signing

```bash
# Sign every commit automatically
$ git config --global commit.gpgsign true

# Now every `git commit` is signed without -S
$ git commit -m "feat: add user authentication"
# [main abc1234] feat: add user authentication
# 1 file changed, 42 insertions(+)
```

### Amending Signed Commits

When you amend a signed commit, Git creates a **new** commit object with a **new** signature. The
old commit object still exists (and is still validly signed) until garbage collected:

```bash
# Amend creates a new commit with a new signature
$ git commit --amend -m "feat: add user authentication with MFA"
# The new commit abc5678 has a fresh signature

# The old commit abc1234 still exists with its original signature
$ git verify-commit abc1234
# Good signature from "Your Name <you@example.com>"
```

### Rebasing Signed Commits

Rebasing rewrites commit objects — new parent hashes mean new commit hashes. When
`commit.gpgsign = true`, Git automatically re-signs each rewritten commit during the rebase:

```bash
# Rebase with automatic re-signing
$ git rebase -i main
# Each rewritten commit is signed with your current signing key

# If commit.gpgsign is false, rebased commits lose their signatures
$ git log --show-signature -1
# (no signature present)
```

> **Important**: Rebased commits have **new** commit hashes. This means the signatures on the
> rebased commits are new signatures, even though the author, message, and diff are identical. The
> original commits (with original signatures) still exist in the reflog until garbage collected.

### Interactive Rebase and Signing

During an interactive rebase (`git rebase -i`), each commit that is picked, squashed, or edited is
rewritten. With `commit.gpgsign = true`:

- **pick**: the commit is rewritten and re-signed
- **squash/fixup**: the resulting combined commit is signed once
- **edit**: the commit is rewritten and re-signed when you continue
- **reword**: the commit is rewritten (new message) and re-signed

## Signing Tags

Annotated tags (`git tag -a`) can be signed. Lightweight tags (`git tag`) cannot — they are just
pointers to a commit, with no metadata to sign.

### Creating Signed Tags

```bash
# Create a signed annotated tag (prompts for GPG passphrase)
$ git tag -s v1.2.3 -m "Release v1.2.3"

# Sign with SSH instead of GPG
$ git config gpg.format ssh
$ git tag -s v1.2.3 -m "Release v1.2.3"

# Sign with a specific key
$ git tag -u ABCDEF1234567890 v1.2.3 -m "Release v1.2.3"
```

The `-s` flag (lowercase s, for "sign") creates an annotated tag and signs it. The `-a` flag
(lowercase a, for "annotate") creates an unsigned annotated tag. The difference is whether the `tag`
object includes a signature header.

### What Gets Signed

The signature in a tag covers the **tag object itself** — the tag name, the message, the tagger
identity, and the reference to the target commit. If any of these fields are modified, the signature
breaks:

```
object abc1234567890...
type commit
tag v1.2.3
tagger Your Name <you@example.com> 1717500000 +0000

Release v1.2.3

-----BEGIN PGP SIGNATURE-----
iQEzBAABCAAdFiEE...
-----END PGP SIGNATURE-----
```

### Verifying Tags

```bash
# Verify a tag's signature (downloads missing public keys from keyservers)
$ git tag -v v1.2.3
object abc1234567890... type commit
tag v1.2.3
tagger Your Name <you@example.com>

Good signature from "Your Name <you@example.com>"

# Verify without fetching from keyservers (local trust only)
$ git tag -v --no-gpg-verify v1.2.3
```

## Verifying Signatures

### Inspecting Signed Commits

```bash
# Show signatures in the log
$ git log --show-signature

# Verify a specific commit
$ git verify-commit HEAD

# Verify by SHA
$ git verify-commit abc1234567890abcdef1234567890abcdef1234

# Show commit with signature details
$ git cat-file -p HEAD
tree a1b2c3d4e5f6...
parent f7e8d9c0b1a2...
author Your Name <you@example.com> 1717500000 +0000
committer Your Name <you@example.com> 1717500000 +0000
gpgsig -----BEGIN PGP SIGNATURE-----
 iQEzBAABCAAdFiEE...
 -----END PGP SIGNATURE-----

feat: add user authentication
```

### What Verification Actually Checks

The verification process performs three distinct checks:

1. **Signature validity**: The cryptographic signature over the commit content matches the public
   key. This is pure mathematics — if the signature is valid, the commit content was produced by
   someone with access to the corresponding private key.

2. **Key identity**: The public key's User ID matches the commit's author or committer field. Git
   checks that the key's email matches `user.email`. If there is a mismatch, Git reports it as a
   warning, not an error:

```
WARNING: This key is not certified with a trusted signature!
There is no indication that the signature belongs to the author.
```

3. **Commit hash integrity**: The commit's SHA-1 (or SHA-256) hash matches the content. This is
   always true for any well-formed Git object — it is not specific to signed commits. But combined
   with the signature, it means the commit cannot be tampered with.

### Trust Models

GPG's Web of Trust (WoT) is complex and rarely used for Git signing in practice. GitHub and GitLab
use a simpler model: they check whether the public key is registered to the same account that owns
the repository or is a trusted collaborator. If the key is unregistered or belongs to a different
account, the commit shows as "Unverified."

```bash
# Show the full trust chain for a signature
$ git log --show-signature -1
gpg: Good signature from "Your Name <you@example.com>"
gpg:                 aka "Your Name <you@company.com>"
gpg: WARNING: This key is not certified with a trusted signature
gpg:          There is no indication that the signature belongs to the author.
Primary key fingerprint: 1122 3344 5566 7788 9900  AABB CCDD EEFF 0011 2233
```

The "WARNING: This key is not certified" message means the key is not signed by any other key in
your local trust database. This is **normal** and does not indicate a problem — it simply means you
have not built a web of trust. The signature itself is still valid.

## Key Management

### Subkeys

A single GPG "master key" can have multiple subkeys, each with different capabilities:

- **Signing (S)**: Used for signing commits and tags
- **Encryption (E)**: Used for encrypting email and files
- **Authentication (A)**: Used for SSH authentication

The master key should be kept offline (on an air-gapped machine or hardware token). Subkeys are used
for daily operations. If a subkey is compromised, you revoke it and generate a new one — the master
key and its identity remain intact.

```bash
# List your key structure
$ gpg --list-secret-keys --keyid-format=long
sec   ed25519/ABCDEF1234567890 2025-01-15 [SC]  # Master key (Signing + Certification)
      11223344556677889900AABBCCDDEEFF00112233
uid           [ultimate] Your Name <you@example.com>
ssb   ed25519/1111111111111111 2025-01-15 [S]   # Signing subkey
ssb   cv25519/2222222222222222 2025-01-15 [E]   # Encryption subkey
ssb   ed25519/3333333333333333 2025-01-15 [A]   # Authentication subkey
```

For Git signing, you use the signing subkey. Configure Git to use it:

```bash
$ git config --global user.signingkey 1111111111111111
```

### Key Expiration

Keys should have expiration dates. This limits the damage window if a key is compromised and lost:

```bash
# Set expiration when generating a key
$ gpg --full-generate-key
# Key expires in: 1y, 2y, or a specific date: 2026-12-31

# Change expiration of an existing key
$ gpg --edit-key ABCDEF1234567890
> expire
# Key is valid for: 2y
> save
```

When a key expires, Git will still verify signatures made before the expiration date. But you cannot
create new signatures with an expired key until you extend the expiration:

```bash
$ gpg --edit-key ABCDEF1234567890
> expire
# Key is valid for: 1y
> save
```

### Key Revocation

If a key is compromised, you must revoke it immediately. A revocation certificate is a signed
statement that the key should no longer be trusted. Anyone who verifies a signature from a revoked
key will see a warning.

```bash
# Generate a revocation certificate (do this when you create the key)
$ gpg --generate-revocation ABCDEF1234567890
# Save the revocation certificate somewhere safe (not on this machine)

# Revoke a key using the revocation certificate
$ gpg --import revocation-cert.asc

# Publish the revocation to keyservers
$ gpg --send-keys ABCDEF1234567890
```

> **Critical**: Generate your revocation certificate immediately after creating a key. If you lose
> access to your key (hardware failure, forgotten passphrase) without a revocation certificate, you
> cannot revoke it. The key remains valid in the Web of Trust indefinitely.

### Rotating Signing Keys

When you need to rotate to a new signing key:

```bash
# 1. Generate a new key
$ gpg --full-generate-key

# 2. Export the new public key and upload to GitHub/GitLab
$ gpg --armor --export NEWKEYID | pbcopy

# 3. Update Git configuration
$ git config --global user.signingkey NEWKEYID

# 4. Re-sign recent tags with the new key (optional but recommended)
$ git tag -s -f v1.2.3 -m "Release v1.2.3"

# 5. Keep the old key in your keyring so existing signatures verify
# Do NOT revoke the old key unless it was compromised
```

Historical commits retain their original signatures. As long as the old public key is available
(either in your keyring or on the platform), those signatures continue to verify.

### Multiple Signing Keys

You can configure different signing keys per repository:

```bash
# Global default
$ git config --global user.signingkey KEY_A

# Override for a specific repository
$ git -C ~/work/project-a config user.signingkey KEY_A
$ git -C ~/work/project-b config user.signingkey KEY_B

# Verify which key a repository uses
$ git -C ~/work/project-a config user.signingkey
KEY_A
```

## Troubleshooting

### "gpg failed to sign the data"

This is the most common GPG signing error. It usually means `gpg-agent` cannot prompt for a
passphrase:

```
error: gpg failed to sign the data
fatal: failed to write commit object
```

**Diagnosis**:

```bash
# Run with full trace to see the actual error
$ GIT_TRACE=1 GIT_TRACE2=1 git commit -S -m "test"

# Test GPG signing directly
$ echo "test" | gpg --clearsign
```

**Common causes**:

1. **No terminal for passphrase input** — `gpg-agent` needs a terminal or pinentry program to prompt
   for your passphrase. In CI/CD environments, there is no terminal.
2. **`gpg-agent` not running** — the agent must be started before Git can use it.
3. **`GPG_TTY` not set** — Git (and GPG) need to know which terminal to use for pinentry.

### GPG_TTY Issues

```bash
# Set GPG_TTY to your current terminal (add to .bashrc or .zshrc)
$ export GPG_TTY=$(tty)

# Verify
$ echo $GPG_TTY
/dev/pts/0

# If you use tmux, you may need to update GPG_TTY after attaching
$ export GPG_TTY=$(tty)
$ gpgconf --reload gpg-agent
```

### Key Not Found

```
error: gpg: ABCDEF1234567890: secret key not available
fatal: failed to write commit object
```

This means the private key is not in your GPG keyring:

```bash
# List available secret keys
$ gpg --list-secret-keys --keyid-format=long

# If the key is missing, import it
$ gpg --import private-key.asc

# If using a hardware token (YubiKey, etc.), ensure it is connected
$ gpg --card-status
```

### Expired Keys

```
error: gpg: ABCDEF1234567890: skipped: No secret key
```

Or during verification:

```
gpg: Signature made using expired key ABCDEF1234567890
```

Extend the expiration:

```bash
$ gpg --edit-key ABCDEF1234567890
> expire
> 1y
> save
```

### Agent Not Running

```bash
# Check if gpg-agent is running
$ gpgconf --list-dirs agent-socket
/home/user/.gnupg/S.gpg-agent

# If the socket file does not exist, start the agent
$ gpgconf --launch gpg-agent

# Kill and restart (nuclear option)
$ gpgconf --kill gpg-agent
$ gpgconf --launch gpg-agent

# Test
$ echo "test" | gpg --clearsign > /dev/null
```

### SSH Signing Key Not Recognized by GitHub

If GitHub shows "Unverified" for your SSH-signed commits:

1. **Wrong key type on GitHub**: The SSH key must be added as a "Signing Key," not an
   "Authentication Key." Go to Settings > SSH and GPG keys and check the key type.

2. **Email mismatch**: The email in your Git config must match the email on your GitHub account, or
   you must have added the email as a verified email address on GitHub. You can also use GitHub's
   noreply email:

```bash
# Use GitHub's noreply address
$ git config --global user.email "123456789+username@users.noreply.github.com"
```

3. **Wrong key in config**: Ensure `user.signingkey` points to the `.pub` file, not the private key:

```bash
# Correct
$ git config --global user.signingkey ~/.ssh/git-signing-key.pub

# Incorrect — this will not work
$ git config --global user.signingkey ~/.ssh/git-signing-key
```

4. **`gpg.format` not set**: If you configured `user.signingkey` to an SSH key but didn't set
   `gpg.format = ssh`, Git still tries to use GPG:

```bash
$ git config --global gpg.format ssh
```

### GPG in CI/CD

Signing commits in CI requires providing the private key to the runner. This is inherently risky —
the key is exposed to the CI environment:

```bash
# Export the private key (do this once, securely)
$ gpg --armor --export-secret-keys ABCDEF1234567890

# In CI, import the key from a secret variable
$ echo "$GPG_PRIVATE_KEY" | gpg --batch --import
$ echo "$GPG_PASSPHRASE" | gpg --pinentry-mode loopback --passphrase-fd 0 -u ABCDEF1234567890 -a -s < /dev/null

# Configure Git
$ git config --global user.signingkey ABCDEF1234567890
$ git config --global commit.gpgsign true
$ git config --global gpg.program gpg
```

For SSH signing in CI, use a deploy key with the signing capability:

```bash
# In CI, write the private key to a file
$ echo "$SSH_SIGNING_KEY" > ~/.ssh/git-signing-key
$ chmod 600 ~/.ssh/git-signing-key
$ eval "$(ssh-agent -s)"
$ ssh-add ~/.ssh/git-signing-key

# Configure Git
$ git config --global gpg.format ssh
$ git config --global user.signingkey ~/.ssh/git-signing-key.pub
$ git config --global commit.gpgsign true
```

### Git Not Using SSH Agent

If SSH signing fails with "signing failed: agent refused operation":

```bash
# Ensure ssh-agent is running
$ eval "$(ssh-agent -s)"

# Add your signing key to the agent
$ ssh-add ~/.ssh/git-signing-key

# Verify the key is loaded
$ ssh-add -l
256 SHA256:abcdef123456... you@example.com (ED25519)

# If using a hardware key (YubiKey), ensure it is connected
$ ssh-add -l
```

## Common Pitfalls

### Email Mismatch Between Key and Git Config

The most frequent cause of "Unverified" signatures. Your GPG key's email and your `user.email` must
match exactly — character for character. Check both:

```bash
$ git config --global user.email
you@example.com

$ gpg --list-keys --keyid-format=long ABCDEF1234567890
uid           [ultimate] Your Name <you@example.com>
```

If they differ, either update your Git config or generate a new GPG key with the correct email.

### Forgetting to Set `gpg.format` When Switching to SSH

If you previously used GPG and then switch to SSH signing, you must set `gpg.format = ssh`. Without
it, Git tries to use GPG with an SSH public key file, which produces a cryptic error:

```
error: gpg: can't open '/home/user/.ssh/git-signing-key.pub': No such file or directory
```

### Using the Wrong Key ID Format

GPG supports short (32-bit), long (64-bit), and fingerprint (160-bit) key IDs. Always use the
**long** format (16 hex characters). Short key IDs are vulnerable to collision attacks and may not
uniquely identify your key:

```bash
# Short — ambiguous, avoid
$ git config user.signingkey 12345678

# Long — use this
$ git config user.signingkey ABCDEF1234567890

# Fingerprint — works but unnecessarily long
$ git config user.signingkey 11223344556677889900AABBCCDDEEFF00112233
```

### Rebase Rewrites Commits and Invalidates Signatures

Rebasing creates new commit objects. Even if `commit.gpgsign = true` and the new commits are
re-signed, the original commit hashes are gone. If anyone has referenced the original commits (in
issues, PRs, code reviews), those references now point to orphaned objects. This is not a signing
problem per se, but it means that signatures on rebased branches only prove the identity of the
person who rebased, not the original authors.

### Stale GPG Agent Passphrase Cache

If you change your GPG passphrase but `gpg-agent` still has the old one cached, signing will fail
with "bad passphrase." Kill and restart the agent:

```bash
$ gpgconf --kill gpg-agent
$ gpgconf --launch gpg-agent
```

### Not Generating a Revocation Certificate

If your key is compromised and you don't have a revocation certificate, you cannot revoke it. The
key remains valid indefinitely. Generate the revocation certificate immediately after key creation
and store it offline (encrypted USB drive, printed paper, password manager).

### Commits Appear Verified Locally but Not on GitHub

This happens when your local GPG keyring has the public key but GitHub does not. You must upload the
public key to GitHub. For SSH signing, the key must be added as a "Signing Key" (not an
"Authentication Key") on GitHub.

### Signing with Multiple Git Identities

If you have multiple Git identities (work and personal), ensure each identity has its own signing
key and that you configure `user.signingkey` correctly per repository. A commit signed with your
personal key will not verify against your work email on GitHub's work organization, and vice versa.
