---
title: Cryptography
description: 'University Computer Science Cryptography notes covering key definitions, core concepts, worked examples, and practice questions for study and revision.'
date: 2026-05-31T00:00:00.000Z
tags:
  - Computer Science
  - University
categories:
  - Computer Science
---

## 1. Fundamentals

### 1.1 Cryptographic Goals

| Goal              | Threat Addressed                      |
| ----------------- | ------------------------------------- |
| **Confidentiality** | Eavesdropping                      |
| **Integrity**      | Tampering with messages             |
| **Authentication** | Impersonation                       |
| **Non-repudiation** | Denying having sent a message      |

### 1.2 Kerckhoffs' Principle

A cryptosystem should be secure even if everything about the system (except the key) is known to the adversary.

### 1.3 Security Definitions

**Computational security:** Breaking requires more than polynomial-time resources.

**Information-theoretic security (perfect secrecy):** The ciphertext reveals no information about the plaintext, regardless of the adversary's computational power.

**Shannon's theorem:** Perfect secrecy requires $|K| \geq |M|$ (key space at least as large as message space). The One-Time Pad achieves this.

### 1.4 One-Time Pad

$$c = p \oplus k$$
$$p = c \oplus k$$

where $p$ = plaintext, $c$ = ciphertext, $k$ = random key of same length, $\oplus$ = XOR.

Perfectly secure, but key is as long as the message and must never be reused.

## 2. Symmetric Encryption

### 2.1 Block Ciphers

Operate on fixed-size blocks (e.g., 64 or 128 bits).

**Feistel cipher structure:**

```
FEISTEL_ROUND(L, R, K_i):
    L_new = R
    R_new = L ⊕ F(R, K_i)
    return (L_new, R_new)

FEISTEL_ENCRYPT(plaintext, keys):
    (L, R) = split(plaintext)
    for i = 0 to n-1:
        (L, R) = FEISTEL_ROUND(L, R, keys[i])
    return (R, L)  // swap at the end
```

**Properties:** Decryption uses the same structure with keys in reverse order.

### 2.2 DES (Data Encryption Standard)

- Block size: 64 bits. Key: 56 bits (+ 8 parity bits).
- 16 Feistel rounds.
- Initial permutation, 16 rounds, final permutation.

**Weaknesses:** 56-bit key is too short (brute-force feasible). Superseded by AES.

### 2.3 AES (Advanced Encryption Standard)

- Block size: 128 bits. Key sizes: 128, 192, 256 bits.
- Based on substitution-permutation network (not Feistel).
- 10 rounds (128-bit key), 12 rounds (192-bit), 14 rounds (256-bit).

**AES round operations:**

```
AES_ROUND(state, round_key):
    state = SUB_BYTES(state)         // S-box substitution (byte level)
    state = SHIFT_ROWS(state)         // Cyclic left shift of rows
    state = MIX_COLUMNS(state)        // Matrix multiplication in GF(2^8)
    state = ADD_ROUND_KEY(state, round_key)  // XOR with round key
    return state
```

**Last round omits MIX_COLUMNS.**

**Key schedule:** Expand the key into round keys using Rijndael key schedule.

```
KEY_SCHEDULE(key):
    words = split key into 32-bit words
    for i = Nk to 4*(Nr+1) - 1:
        temp = words[i-1]
        if i mod Nk == 0:
            temp = SUB_WORD(ROT_WORD(temp)) ⊕ RCON[i/Nk]
        words[i] = words[i - Nk] ⊕ temp
    return words
```

### 2.4 Block Cipher Modes of Operation

| Mode        | Description                                    | Parallel | Error Propagation |
| ----------- | ---------------------------------------------- | -------- | ----------------- |
| **ECB**     | Each block encrypted independently             | Yes      | None (blocks independent) |
| **CBC**     | Each block XORed with previous ciphertext      | No       | 1 block           |
| **CTR**     | Counter encrypted, XORed with plaintext       | Yes      | None (blocks independent) |
| **CFB**     | Plaintext XORed with encrypted previous output | No       | 1 block           |
| **OFB**     | Keystream from encrypting IV repeatedly       | Yes      | None              |
| **GCM**     | CTR mode + authentication tag                 | Yes      | Authentication    |

**ECB vulnerability:** Identical plaintext blocks produce identical ciphertext blocks. Never use ECB for messages longer than one block.

**CBC encryption:**

```
CBC_ENCRYPT(plaintext, key, IV):
    C_0 = IV
    for i = 1 to n:
        C_i = ENC_K(P_i ⊕ C_{i-1})
    return C_1 || C_2 || ... || C_n
```

**CTR mode:**

```
CTR_ENCRYPT(plaintext, key, nonce):
    for i = 0 to n-1:
        counter_i = nonce || i  (encoded as 128-bit)
        keystream_i = ENC_K(counter_i)
        C_i = P_i ⊕ keystream_i
    return C_0 || C_1 || ... || C_{n-1}
```

### 2.5 Stream Ciphers

Generate a keystream and XOR with plaintext. Examples: RC4, ChaCha20.

```
STREAM_ENCRYPT(plaintext, key):
    keystream = GENERATE_KEYSTREAM(key, len(plaintext))
    return plaintext ⊕ keystream
```

**Chacha20:** Used in TLS 1.3. 256-bit key, 96-bit nonce, 32-bit counter.

## 3. Asymmetric Encryption

### 3.1 RSA

**Key generation:**

```
RSA_KEYGEN():
    choose two large primes p, q
    n = p * q
    φ(n) = (p-1)(q-1)
    choose e such that 1 < e < φ(n) and gcd(e, φ(n)) = 1
    compute d = e^(-1) mod φ(n)
    public key = (e, n)
    private key = (d, n)
```

**Encryption/Decryption:**

$$c = m^e \mod n$$
$$m = c^d \mod n$$

**Correctness:** $c^d = m^{ed} = m^{k\varphi(n)+1} = m \cdot (m^{\varphi(n)})^k \equiv m \pmod{n}$ (by Euler's theorem).

**Security:** Based on the difficulty of factoring $n$ into $p$ and $q$.

**Key sizes:** 2048 bits (minimum recommended), 3072 or 4096 for long-term security.

### 3.2 ElGamal

Based on the **Diffie-Hellman** problem in cyclic groups.

**Key generation:**

```
ELGAMAL_KEYGEN():
    choose prime p, generator g of Z_p*
    choose private key x in {2, ..., p-2}
    public key y = g^x mod p
```

**Encryption:**

$$c_1 = g^k \mod p \quad (k \text{ random})$$
$$c_2 = m \cdot y^k \mod p$$

**Decryption:**

$$m = c_2 \cdot (c_1^x)^{-1} \mod p = c_2 \cdot g^{-kx} \mod p$$

### 3.3 Elliptic Curve Cryptography (ECC)

Uses the algebraic structure of elliptic curves over finite fields instead of modular arithmetic.

**Elliptic curve:** $y^2 = x^3 + ax + b$ over $\mathbb{F}_p$.

**Group operation (point addition):** Given points $P$ and $Q$:

- $P + Q$: Draw a line through $P$ and $Q$; the third intersection with the curve is $-(P+Q)$; reflect over x-axis.
- $P + P$ (doubling): Use the tangent line.

**ECDSA (Elliptic Curve Digital Signature Algorithm):**

```
ECDSA_SIGN(msg, private_key d):
    e = hash(msg)
    z = leftmost bits of e
    choose random k
    (x, y) = k * G     // G is base point
    r = x mod n
    s = k^(-1) * (z + r*d) mod n
    return (r, s)

ECDSA_VERIFY(msg, sig (r,s), public_key Q):
    e = hash(msg)
    z = leftmost bits of e
    w = s^(-1) mod n
    u1 = z*w mod n
    u2 = r*w mod n
    (x, y) = u1*G + u2*Q
    return r == x mod n
```

**Advantage:** Same security as RSA-2048 with ~256-bit ECC keys.

| Security Level | RSA Key | ECC Key |
| -------------- | ------- | ------- |
| 80-bit        | 1024    | 160     |
| 128-bit       | 3072    | 256     |
| 256-bit       | 15360   | 521     |

## 4. Hash Functions

### 4.1 Properties

A cryptographic hash function $H: \{0,1\}^* \to \{0,1\}^n$ should have:

1. **Preimage resistance:** Given $h$, hard to find $m$ such that $H(m) = h$.
2. **Second preimage resistance:** Given $m_1$, hard to find $m_2 \neq m_1$ with $H(m_1) = H(m_2)$.
3. **Collision resistance:** Hard to find any $m_1, m_2$ with $H(m_1) = H(m_2)$.

**Birthday paradox:** A collision can be found in $O(2^{n/2})$ hash evaluations (not $O(2^n)$).

### 4.2 Merkle-Damgard Construction

Build a fixed-output hash from a compression function:

```
MERKLE_DAMGARD(message, IV):
    pad message to multiple of block size
    break into blocks M_1, M_2, ..., M_k
    H_0 = IV
    for i = 1 to k:
        H_i = f(H_{i-1}, M_i)   // compression function
    return H_k
```

**Used by:** MD5, SHA-1, SHA-256.

**Padding (MDP - Merkle-Damgard padding):** Append a 1 bit, then zeros, then the 64-bit message length.

### 4.3 SHA-256

- Output: 256 bits (32 bytes).
- Block size: 512 bits (64 bytes).
- 64 rounds of compression.

**Internal state:** 8 × 32-bit words $(a, b, c, d, e, f, g, h)$.

**Round function:**

```
SHA256_ROUND(state, W_t, K_t):
    T1 = h + Σ1(e) + Ch(e,f,g) + K_t + W_t
    T2 = Σ0(a) + Maj(a,b,c)
    h = g; g = f; f = e; e = d + T1
    d = c; c = b; b = a; a = T1 + T2
```

**Word expansion:**

$$W_t = \begin{cases} M_t & 0 \leq t \leq 15 \\ \sigma_1(W_{t-2}) + W_{t-7} + \sigma_0(W_{t-15}) + W_{t-16} & 16 \leq t \leq 63 \end{cases}$$

### 4.4 Hash Function Comparison

| Function | Output (bits) | Block (bits) | Rounds | Status              |
| --------- | ------------- | ------------ | ------ | ------------------- |
| MD5       | 128           | 512          | 64     | Broken              |
| SHA-1     | 160           | 512          | 80     | Broken (collision)  |
| SHA-256   | 256           | 512          | 64     | Secure              |
| SHA-3     | 256           | 1088         | 24     | Secure (Keccak)     |
| BLAKE2    | 256/512       | 128          | 10-14  | Secure, very fast   |

## 5. Digital Signatures

### 5.1 RSA Signatures

```
RSA_SIGN(msg, private_key (d, n)):
    hash_val = SHA256(msg)
    signature = hash_val^d mod n
    return signature

RSA_VERIFY(msg, signature, public_key (e, n)):
    hash_val = SHA256(msg)
    recovered = signature^e mod n
    return recovered == hash_val
```

**Textbook RSA signatures are insecure.** Use PSS (Probabilistic Signature Scheme) padding.

### 5.2 Properties of Digital Signatures

1. **Authentication:** Verifies the signer's identity.
2. **Integrity:** Message cannot be altered without invalidating the signature.
3. **Non-repudiation:** Signer cannot deny having signed.

## 6. Key Exchange

### 6.1 Diffie-Hellman Key Exchange

Allows two parties to establish a shared secret over an insecure channel.

```
DH_EXCHANGE():
    // Public parameters: prime p, generator g
    // Alice:
    a = random()                    // private
    A = g^a mod p                   // public
    send A to Bob

    // Bob:
    b = random()                    // private
    B = g^b mod p                   // public
    send B to Alice

    // Shared secret:
    // Alice computes: s = B^a = g^(ba) mod p
    // Bob computes:   s = A^b = g^(ab) mod p
    // s is the same shared secret
```

**Security:** Based on the Discrete Logarithm Problem (DLP): given $g^a \mod p$, finding $a$ is computationally hard.

**Ephemeral Diffie-Hellman (DHE):** New key exchange for every session (forward secrecy).

### 6.2 Forward Secrecy

If long-term keys are compromised, past session keys remain secure. Achieved by using ephemeral key exchange (DHE or ECDHE) instead of static key exchange.

## 7. PKI and Certificates

### 7.1 Public Key Infrastructure

**Components:**

- **CA (Certificate Authority):** Issues and signs certificates.
- **RA (Registration Authority):** Verifies identity before CA issuance.
- **Certificate:** Binds a public key to an identity, signed by a CA.
- **CRL (Certificate Revocation List):** List of revoked certificates.
- **OCSP (Online Certificate Status Protocol):** Real-time certificate validation.

### 7.2 X.509 Certificate Structure

```
Certificate ::= SEQUENCE {
    tbsCertificate       TBSCertificate,
    signatureAlgorithm   AlgorithmIdentifier,
    signatureValue       BIT STRING
}

TBSCertificate ::= SEQUENCE {
    version              [0]  EXPLICIT INTEGER DEFAULT v1,
    serialNumber              CertificateSerialNumber,
    signature                AlgorithmIdentifier,
    issuer                   Name,
    validity                 Validity,
    subject                  Name,
    subjectPublicKeyInfo     SubjectPublicKeyInfo,
    ...
}
```

**Chain of trust:**

```
Root CA (self-signed, trust anchor)
  └── Intermediate CA (signed by Root)
       └── End-entity cert (signed by Intermediate)
```

### 7.3 TLS Handshake (Simplified)

```
Client                              Server
  |--- ClientHello (supported ciphers) -->|
  |<-- ServerHello (chosen cipher) -----|
  |<-- Certificate --------------------|
  |<-- ServerKeyExchange (DHE params) --|
  |--- ClientKeyExchange (DHE response) ->|
  |--- ChangeCipherSpec ---------------->|
  |--- Finished ------------------------>|
  |<-- ChangeCipherSpec -----------------|
  |<-- Finished --------------------------|
  |                                      |
  |        Secure channel established    |
```

**Key derivation:** Both sides derive the same master secret from the shared secret (DH), then generate symmetric keys for encryption and MAC.

## 8. Zero-Knowledge Proofs

### 8.1 Definition

A zero-knowledge proof allows a **prover** to convince a **verifier** that a statement is true **without revealing any information beyond the truth of the statement**.

**Properties:**

1. **Completeness:** If the statement is true, an honest prover convinces an honest verifier.
2. **Soundness:** If the statement is false, no cheating prover can convince the verifier (except with negligible probability).
3. **Zero-knowledge:** The verifier learns nothing beyond the truth of the statement.

### 8.2 Ali Baba Cave (Intuition)

A cave with a circular path split by a door that opens with a secret password.

- Prover enters from one side, randomly goes left or right.
- Verifier asks prover to emerge from a specific side.
- Prover can comply only if they know the secret (or got lucky with probability 1/2).
- After $k$ rounds, cheating probability is $(1/2)^k$.

### 8.3 Sigma Protocol Example (Discrete Log)

Prove knowledge of $x$ where $y = g^x \mod p$ without revealing $x$:

```
PROVER:
    choose random r
    R = g^r mod p
    send R to verifier

VERIFIER:
    choose random challenge c in {0, 1}
    send c to prover

PROVER:
    s = r + c*x mod q    (q divides p-1)
    send s to verifier

VERIFIER:
    accept if g^s == R * y^c mod p
```

## 9. Post-Quantum Cryptography

### 9.1 The Quantum Threat

**Shor's algorithm** (quantum): Can factor integers and compute discrete logarithms in polynomial time. Breaks RSA, DSA, ECDSA, Diffie-Hellman.

**Grover's algorithm** (quantum): Speeds up brute-force search from $O(2^n)$ to $O(2^{n/2})$. Halves symmetric key strength.

### 9.2 NIST Post-Quantum Standards (2024)

| Algorithm   | Type                    | Use                    |
| ----------- | ----------------------- | ---------------------- |
| **ML-KEM**  | Lattice-based (KEM)     | Key encapsulation (replaces DH) |
| **ML-DSA**  | Lattice-based (signature) | Digital signatures (replaces RSA/ECDSA) |
| **SLH-DSA** | Hash-based (signature) | Stateful hash signatures |

**ML-KEM (Module-Lattice Key Encapsulation Mechanism):** Based on the hardness of the Module Learning With Errors (MLWE) problem.

```
ML-KEM_KEYGEN():
    (pk, sk) = KeyGen()
    return (pk, sk)

ML-KEM_ENCAP(pk):
    (K, c) = Encaps(pk)
    return (K, c)

ML-KEM_DECAP(sk, c):
    K' = Decaps(sk, c)
    return K'
```

### 9.3 Practical Recommendations

| Algorithm              | Quantum Safe?  | Transition Plan        |
| ---------------------- | -------------- | ---------------------- |
| AES-256                | Yes (Grover: 128-bit security) | Keep, double key size |
| RSA                    | No             | Replace with ML-KEM     |
| ECDSA / ECDH           | No             | Replace with ML-DSA / ML-KEM |
| SHA-256                | Yes            | Keep                    |
| ChaCha20-Poly1305      | Yes            | Keep                    |

**Hybrid approach:** Use classical + post-quantum algorithms simultaneously during transition (e.g., X25519 + ML-KEM).

## 10. Common Pitfalls

1. **Reusing a nonce in CTR mode or ChaCha20.** Reusing a nonce produces the same keystream, allowing XOR of two ciphertexts to cancel out keystream and potentially recover plaintext (two-time pad attack).

2. **Using ECB mode for multi-block messages.** ECB encrypts each block independently, leaking patterns. Always use CBC, CTR, or GCM instead.

3. **Ignoring proper padding in RSA.** Textbook RSA without padding (PKCS#1 v1.5 or OAEP for encryption, PSS for signatures) is vulnerable to various attacks (Bleichenbacher, chosen-plaintext).

4. **Generating weak random numbers for keys.** Keys must be generated from a cryptographically secure random number generator (CSPRNG). Using `rand()` or similar PRNGs is catastrophic.

5. **Comparing hashes directly for MAC verification.** Timing attacks can leak information. Use constant-time comparison (`CRYPTO_memcmp` or similar).

6. **Ignoring certificate validation.** Disabling certificate verification (`verify=False`) exposes applications to man-in-the-middle attacks. Always validate the full certificate chain.

7. **Rolling your own crypto.** Custom cryptographic schemes almost always have subtle vulnerabilities. Use well-vetted libraries (libsodium, OpenSSL, BoringSSL) and standard algorithms.

## Worked Examples

### Example 1: RSA Encryption and Decryption
**Problem:** Alice chooses primes p=11, q=13. Her public key is (e=7, n). Bob wants to send the message M=5. Compute the ciphertext and show that decryption recovers M.
**Solution:** n = 11*13 = 143. phi(n) = (11-1)(13-1) = 120. e=7. d = e^-1 mod phi(n). Extended Euclidean: 7*17 = 119 = 120 - 1, so d = 17. Ciphertext C = 5^7 mod 143 = 78125 mod 143 = 47. Decryption: M = 47^17 mod 143. Compute: 47^2 mod 143 = 2209 mod 143 = 86. 47^4 mod 143 = 86^2 mod 143 = 7396 mod 143 = 20. 47^8 mod 143 = 20^2 mod 143 = 400 mod 143 = 14. 47^16 mod 143 = 14^2 mod 143 = 196 mod 143 = 53. 47^17 = 53*47 mod 143 = 2491 mod 143 = 5. M = 5 recovered.

### Example 2: Diffie-Hellman Key Exchange
**Problem:** Alice and Bob agree on prime p=23 and generator g=5. Alice chooses private a=6, Bob chooses private b=15. Calculate their shared secret.
**Solution:** Alice sends A = g^a mod p = 5^6 mod 23 = 15625 mod 23 = 8. Bob sends B = g^b mod p = 5^15 mod 23. 5^2=2, 5^4=4, 5^8=16, 5^15=16*4*2*5 mod 23 = 640 mod 23 = 19. Shared secret (Alice): B^a mod p = 19^6 mod 23 = 47045881 mod 23 = 2. Shared secret (Bob): A^b mod p = 8^15 mod 23 = 2. Both compute the same shared secret: 2.

## Summary

- **Symmetric encryption** (AES) is efficient for bulk data; block cipher modes (CBC, CTR, GCM) add security properties.
- **Asymmetric encryption** (RSA, ECC) enables key exchange and digital signatures with public/private key pairs.
- **Hash functions** (SHA-256, SHA-3) provide integrity through collision and preimage resistance, using the Merkle-Damgard or sponge construction.
- **Digital signatures** (RSA, ECDSA) provide authentication, integrity, and non-repudiation.
- **Key exchange** (Diffie-Hellman, ECDHE) establishes shared secrets; forward secrecy requires ephemeral keys.
- **PKI** (X.509 certificates, CAs) provides a trust hierarchy for public key distribution.
- **Zero-knowledge proofs** enable verification without revealing secrets.
- **Post-quantum cryptography** (ML-KEM, ML-DSA) protects against future quantum attacks using lattice-based and hash-based schemes.

## Cross-References

| Topic | Link |
|-------|------|
| Algorithms Overview | [View](/docs_infrastructure/cs/algorithms-overview) |
| Network Security | [View](/docs_university/computer-science/networking) |
| Distributed Systems | [View](/docs_university/computer-science/distributed-systems) |
