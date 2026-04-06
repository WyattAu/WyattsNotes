---
title: Network Security
date: 2025-06-02T16:25:28.480Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: network-security
---

## 1. Threats and Vulnerabilities

### Types of Threats

| Threat             | Description                                                          |
| ------------------ | -------------------------------------------------------------------- |
| Malware            | Malicious software (viruses, worms, trojans, ransomware)             |
| Phishing           | Fraudulent emails/messages tricking users into revealing credentials |
| DDoS attack        | Overwhelming a server with traffic from multiple sources             |
| Man-in-the-middle  | Attacker intercepts communication between two parties                |
| SQL injection      | Inserting malicious SQL into input fields to manipulate databases    |
| Brute force attack | Systematically trying all possible passwords/keys                    |
| Social engineering | Manipulating people into divulging confidential information          |

### The CIA Triad

The three core principles of information security:

1. **Confidentiality:** Data is accessible only to authorised parties
2. **Integrity:** Data is accurate and has not been tampered with
3. **Availability:** Data and services are accessible when needed

---

## 2. Symmetric Encryption

### Definition

**Symmetric encryption** uses the **same key** for both encryption and decryption.

$$C = E_K(M), \quad M = D_K(C)$$

where $M$ is the plaintext, $C$ is the ciphertext, $E$ is the encryption function, $D$ is the
decryption function, and $K$ is the shared secret key.

### AES (Advanced Encryption Standard)

AES is the most widely used symmetric encryption algorithm.

| Property   | Value                                    |
| ---------- | ---------------------------------------- |
| Key sizes  | 128, 192, 256 bits                       |
| Block size | 128 bits                                 |
| Rounds     | 10 (128-bit), 12 (192-bit), 14 (256-bit) |
| Type       | Substitution-permutation network         |

### Key Distribution Problem

Symmetric encryption requires both parties to share the same secret key. Distributing this key
securely is a fundamental challenge — if the key is intercepted during exchange, the encryption is
compromised.

---

## 3. Asymmetric Encryption

### Definition

**Asymmetric encryption** (public-key cryptography) uses a **pair of keys**: a **public key**
(shared openly) and a **private key** (kept secret).

$$C = E_{\text{pub}}(M), \quad M = D_{\text{priv}}(C)$$

- Anyone can encrypt using the public key
- Only the private key holder can decrypt

### RSA Algorithm

#### Key Generation

1. Choose two large primes $p$ and $q$
2. Compute $n = p \times q$
3. Compute $\phi(n) = (p-1)(q-1)$ (Euler's totient)
4. Choose $e$ such that $1 \lt{} e \lt{} \phi(n)$ and $\gcd(e, \phi(n)) = 1$
5. Compute $d$ such that $d \cdot e \equiv 1 \pmod{\phi(n)}$

Public key: $(e, n)$. Private key: $(d, n)$.

#### Encryption and Decryption

**Encrypt:** $C = M^e \bmod n$

**Decrypt:** $M = C^d \bmod n$

#### Correctness Proof

**Theorem.** RSA decryption correctly recovers the original message: $(M^e)^d \equiv M \pmod{n}$ for
all $M \in [0, n)$.

**Proof.** We need to show $M^{ed} \equiv M \pmod{n}$.

Since $ed \equiv 1 \pmod{\phi(n)}$, we have $ed = 1 + k\phi(n)$ for some integer $k$.

**Case 1:** $\gcd(M, n) = 1$ (M is coprime to n).

By Euler's theorem: $M^{\phi(n)} \equiv 1 \pmod{n}$.

Therefore:
$M^{ed} = M^{1 + k\phi(n)} = M \cdot (M^{\phi(n)})^k \equiv M \cdot 1^k \equiv M \pmod{n}$. ✓

**Case 2:** $\gcd(M, n) \neq 1$. Since $n = pq$, $M$ must be divisible by $p$ or $q$ (but not both,
since $M \lt{} n = pq$).

Without loss of generality, let $M \equiv 0 \pmod{p}$. Then $M^{ed} \equiv 0 \equiv M \pmod{p}$. ✓

For $q$: since $M \not\equiv 0 \pmod{q}$, $\gcd(M, q) = 1$. By Fermat's little theorem:
$M^{q-1} \equiv 1 \pmod{q}$. Since $\phi(n) = (p-1)(q-1)$:

$$M^{ed} = M^{1 + k(p-1)(q-1)} = M \cdot (M^{q-1})^{k(p-1)} \equiv M \cdot 1^{k(p-1)} \equiv M \pmod{q}$$

✓

By the Chinese Remainder Theorem: $M^{ed} \equiv M \pmod{n}$. ✓ $\square$

### Key Sizes and Security

| Key size  | Security level | Notes                |
| --------- | -------------- | -------------------- |
| 1024 bits | ~80 bits       | Insecure, deprecated |
| 2048 bits | ~112 bits      | Minimum recommended  |
| 3072 bits | ~128 bits      | High security        |
| 4096 bits | ~150 bits      | Very high security   |

---

## 4. Digital Signatures

### Purpose

A **digital signature** provides:

1. **Authentication:** Proves who sent the message
2. **Integrity:** Proves the message wasn't altered
3. **Non-repudiation:** The sender cannot deny sending it

### Process

**Signing:** $$S = D_{\text{priv}}(H(M))$$

where $H$ is a hash function. The sender hashes the message and "decrypts" the hash with their
private key.

**Verification:** $$H(M) \stackrel{?}{=} E_{\text{pub}}(S)$$

The receiver encrypts the signature with the sender's public key and compares it to the hash of the
received message.

**Correctness:** Since only the sender knows the private key, only they could have produced $S$. If
the message was altered, $H(M)$ would differ, and verification would fail.

---

## 5. Hash Functions

### Definition

A **cryptographic hash function** $H: \{0,1\}^* \to \{0,1\}^n$ maps arbitrary-length input to a
fixed-length output (hash/digest).

### Properties

1. **Pre-image resistance:** Given $h$, it is computationally infeasible to find $M$ such that
   $H(M) = h$
2. **Second pre-image resistance:** Given $M_1$, it is infeasible to find $M_2 \neq M_1$ with
   $H(M_1) = H(M_2)$
3. **Collision resistance:** It is infeasible to find any pair $M_1 \neq M_2$ with $H(M_1) = H(M_2)$
4. **Avalanche effect:** A small change in input produces a completely different hash
5. **Deterministic:** Same input always produces the same output

### Common Hash Functions

| Algorithm | Output size | Status                    |
| --------- | ----------- | ------------------------- |
| MD5       | 128 bits    | Broken (collisions found) |
| SHA-1     | 160 bits    | Broken (collision attack) |
| SHA-256   | 256 bits    | Secure                    |
| SHA-512   | 512 bits    | Secure                    |

### Applications

- **Password storage:** Store $H(\text{password})$ instead of the plaintext password
- **Data integrity:** Compare hashes before and after transmission
- **Digital signatures:** Sign the hash instead of the entire message
- **Blockchain:** Hash pointers link blocks

### Password Hashing

**Why not just hash?** Simple hashing is vulnerable to **rainbow tables** (precomputed hash-lookup
tables).

**Salting:** Add a random string (salt) before hashing: $H(\text{salt} + \text{password})$. Each
user gets a unique salt, making rainbow tables useless.

**Key stretching:** Use slow hash functions (bcrypt, PBKDF2, Argon2) that deliberately take many
iterations, making brute-force attacks impractical.

---

## 6. Firewalls

### Definition

A **firewall** is a network security system that monitors and controls incoming and outgoing network
traffic based on predetermined security rules.

### Types

| Type              | How it works                                  | Layer            |
| ----------------- | --------------------------------------------- | ---------------- |
| Packet filtering  | Examines source/destination IP and port       | Network (L3)     |
| Stateful          | Tracks connection state                       | Transport (L4)   |
| Application-layer | Inspects actual content                       | Application (L7) |
| Next-generation   | Combines all above + IDS/IPS, deep inspection | All layers       |

:::info
Board-specific

- **AQA** requires symmetric encryption (AES), asymmetric encryption (RSA), digital signatures,
  SSL/TLS, firewalls, and malware types
- **CIE (9618)** covers encryption methods, network security protocols, and threats; may include
  specific protocol details
- **OCR (A)** requires understanding of encryption, digital certificates, authentication methods,
  and network security protocols
- **Edexcel** covers network security fundamentals including encryption and firewalls
:::

---

## Problem Set

**Problem 1.** Given RSA parameters $p = 5$, $q = 11$, $e = 3$, encrypt the message $M = 7$ and then
decrypt it. Show all steps.

<details>
<summary>Answer</summary>

$n = p \times q = 5 \times 11 = 55$

$\phi(n) = (5-1)(11-1) = 40$

Verify: $\gcd(3, 40) = 1$ ✓

Find $d$: $3d \equiv 1 \pmod{40}$. Try: $3 \times 27 = 81 = 2 \times 40 + 1$. So $d = 27$.

**Encrypt:** $C = 7^3 \bmod 55 = 343 \bmod 55 = 343 - 6 \times 55 = 343 - 330 = 13$.

**Decrypt:** $M = 13^{27} \bmod 55$.

Using repeated squaring: $13^2 = 169 \bmod 55 = 4$. $13^4 = 4^2 = 16$.
$13^8 = 16^2 = 256 \bmod 55 = 36$.
$13^{16} = 36^2 = 1296 \bmod 55 = 1296 - 23 \times 55 = 1296 - 1265 = 31$.

$13^{27} = 13^{16} \times 13^8 \times 13^2 \times 13^1 = 31 \times 36 \times 4 \times 13$

$31 \times 36 = 1116 \bmod 55 = 1116 - 20 \times 55 = 1116 - 1100 = 16$

$16 \times 4 = 64 \bmod 55 = 9$

$9 \times 13 = 117 \bmod 55 = 117 - 2 \times 55 = 7$ ✓

Decrypted message: 7. ✓
</details>

**Problem 2.** Explain why symmetric encryption is faster than asymmetric encryption.

<details>
<summary>Answer</summary>

Symmetric encryption (e.g., AES) uses simple operations: substitution boxes (S-boxes), bit
permutations, and XOR — all of which are fast hardware operations. AES-128 requires only 10 rounds
of these operations.

Asymmetric encryption (e.g., RSA) relies on computationally expensive mathematical operations:
modular exponentiation on very large numbers (hundreds of digits). RSA encryption requires computing
$M^e \bmod n$ where $n$ is at least 2048 bits (617 decimal digits). Modular exponentiation of such
large numbers is orders of magnitude slower than AES.

Typical performance: AES processes ~1 GB/s on modern hardware. RSA-2048 processes ~1,000
operations/second. AES is roughly 1000× faster.
</details>

**Problem 3.** A user's password is stored as
`SHA-256("password123") = ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f`. Explain
why this is insecure and how to improve it.

<details>
<summary>Answer</summary>

**Problems:**

1. No salt: identical passwords produce identical hashes → vulnerable to rainbow table attacks
2. SHA-256 is too fast: an attacker can try billions of hashes per second using a GPU
3. No key stretching: a single hash computation is very fast, enabling brute-force attacks

**Improvements:**

1. **Use a unique salt per user:** Store `salt` and `bcrypt(salt + password)` instead
2. **Use a slow hash function:** bcrypt, PBKDF2, or Argon2 are designed to be slow (configurable
   cost parameter)
3. **Use key stretching:** Multiple iterations of the hash function (PBKDF2 does this)

Example secure storage: `argon2id(salt="random_16_bytes", password, iterations=3, memory=64MB)`
</details>

**Problem 4.** Explain how a man-in-the-middle attack works and how HTTPS prevents it.

<details>
<summary>Answer</summary>

**MITM attack:**

1. Attacker positions themselves between the client and server (e.g., on a public Wi-Fi network)
2. The client sends data to the attacker, thinking it's the server
3. The attacker reads/modifies the data and forwards it to the server
4. The server responds to the attacker, who forwards it to the client
5. Neither party is aware of the interception

**How HTTPS prevents MITM:**

1. **TLS handshake:** The server presents an SSL certificate signed by a trusted Certificate
   Authority (CA)
2. **Certificate verification:** The client checks that the certificate is valid, signed by a
   trusted CA, and matches the domain
3. **Key exchange:** The client and server establish a shared secret using asymmetric encryption
   (Diffie-Hellman or RSA), without ever sending the secret over the network
4. **Encryption:** All subsequent communication is encrypted with the shared secret

Even if the attacker intercepts the traffic, they cannot:

- Decrypt the data (they don't have the shared secret)
- Forge a valid certificate (they don't have the CA's private key)
- Modify the data without detection (TLS includes integrity checks)
</details>

**Problem 5.** Explain the difference between a virus, a worm, and a Trojan.

<details>
<summary>Answer</summary>

| Malware | Reproduction                 | Needs host                   | User action required     | Purpose              |
| ------- | ---------------------------- | ---------------------------- | ------------------------ | -------------------- |
| Virus   | Attaches to files            | Yes (infects other files)    | Yes (open infected file) | Various              |
| Worm    | Self-replicates over network | No                           | No                       | Spread, payload      |
| Trojan  | Does not replicate           | No (disguised as legitimate) | Yes (install it)         | Data theft, backdoor |

**Virus:** Attaches to legitimate programs and spreads when the infected program is run. Can corrupt
or modify files.

**Worm:** Self-replicating malware that spreads over networks without user interaction. Example: the
WannaCry ransomware worm spread via SMB.

**Trojan:** Malware disguised as legitimate software. Does not replicate. Creates backdoors for
attackers. Named after the Trojan Horse of Greek mythology.
</details>

**Problem 6.** Explain the role of a Certificate Authority (CA) in public-key cryptography.

<details>
<summary>Answer</summary>

A **Certificate Authority (CA)** is a trusted entity that issues **digital certificates** binding a
public key to an identity (domain name, organisation, person).

**Process:**

1. A website generates a key pair and sends the public key + identity to a CA
2. The CA verifies the applicant's identity (domain ownership, business registration)
3. The CA signs the certificate with its own private key: `Sign_CA(domain, public_key, expiry)`
4. The website presents this certificate to browsers during the TLS handshake
5. The browser verifies the signature using the CA's public key (pre-installed in the browser)

**Why important:** Without CAs, an attacker could create a certificate for any domain, and browsers
would have no way to distinguish legitimate certificates from fraudulent ones. CAs provide the trust
infrastructure that makes HTTPS work.
</details>

**Problem 7.** Compute the SHA-256 hash of the empty string `""`. Then compute the SHA-256 hash of
`"a"`. What does this demonstrate about hash functions?

<details>
<summary>Answer</summary>

SHA-256("") = `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`

SHA-256("a") = `ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb`

This demonstrates:

1. **Determinism:** The same input always produces the same output
2. **Avalanche effect:** Changing a single character ("a" vs "") produces a completely different
   hash — no similarity between the two outputs
3. **Fixed output size:** Both hashes are 256 bits (64 hex characters), regardless of input length
</details>

**Problem 8.** Describe a SQL injection attack and explain how to prevent it.

<details>
<summary>Answer</summary>

**SQL injection:** An attacker inserts malicious SQL code into an input field that is concatenated
into a database query.

**Vulnerable code:**

```python
query = f"SELECT * FROM users WHERE username = '{username}' AND password = '{password}'"
```

**Attack:** Input username = `' OR '1'='1` → query becomes:

```sql
SELECT * FROM users WHERE username = '' OR '1'='1' AND password = 'anything'
```

This always evaluates to true, granting access without valid credentials.

**Prevention:**

1. **Parameterised queries (prepared statements):** Use placeholders instead of string
   concatenation:

```python
   cursor.execute("SELECT * FROM users WHERE username = ? AND password = ?", (username, password))
```

2. **Input validation:** Reject or sanitise inputs containing SQL metacharacters
3. **Least privilege:** Database accounts should have minimum necessary permissions
4. **Stored procedures:** Pre-compiled SQL that accepts parameters safely
</details>

For revision on network fundamentals, see
[Network Fundamentals](/docs/docs_ALevel-notes/computer-science/networks/network-fundamentals).

:::
