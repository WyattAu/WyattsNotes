---
title: Network Security
tags:
  - Computing
  - University
---

### 7.1 Symmetric Encryption

**Symmetric encryption** uses the same secret key for both encryption and decryption. Both parties
Must share the key securely before communication.

| Algorithm | Key Size | Block Size | Status     |
| --------- | -------- | ---------- | ---------- |
| DES       | 56 bits  | 64 bits    | Insecure   |
| 3DES      | 168 bits | 64 bits    | Deprecated |
| AES-128   | 128 bits | 128 bits   | Secure     |
| AES-256   | 256 bits | 128 bits   | Secure     |
| ChaCha20  | 256 bits | Stream     | Secure     |

**Block cipher modes of operation:**

| Mode | Description                                   | Parallelisable  |
| ---- | --------------------------------------------- | --------------- |
| ECB  | Each block encrypted independently            | Yes             |
| CBC  | Each block XORed with previous ciphertext     | Decryption only |
| CTR  | Counter-based stream cipher from block cipher | Yes             |
| GCM  | Authenticated encryption (CTR + MAC)          | Yes             |

**Theorem 7.1.** ECB mode is insecure for messages longer than one block because identical plaintext
Blocks produce identical ciphertext blocks, revealing patterns.

_Proof._ If the plaintext contains repeated blocks $P_i = P_j$Then under ECB,
$C_i = E_K(P_i) =
E_K(P_j) = C_j$. An attacker observing identical ciphertext blocks knows the
corresponding Plaintext blocks are identical, regardless of the key. $\blacksquare$

**Key distribution problem.** Symmetric encryption requires a secure channel to exchange keys. For
$n$ parties, $n(n-1)/2$ keys are needed. This motivates asymmetric encryption and key exchange
Protocols.

### 7.2 Asymmetric Encryption

**Asymmetric encryption** uses a key pair: a public key (for encryption/verification) and a private
Key (for decryption/signing). The public key can be freely distributed.

**RSA.** Based on the difficulty of factoring large integers.

1. Choose two large primes $p$ and $q$. Compute $n = pq$ and $\phi(n) = (p-1)(q-1)$.
2. Choose $e$ such that $1 \lt e \lt \phi(n)$ and $\gcd(e, \phi(n)) = 1$.
3. Compute $d$ such that $e \cdot d \equiv 1 \pmod{\phi(n)}$.
4. Public key: $(n, e)$. Private key: $(n, d)$.
5. Encrypt: $c = m^e \bmod n$. Decrypt: $m = c^d \bmod n$.

**Diffie-Hellman key exchange.** Allows two parties to establish a shared secret over an insecure
Channel without prior shared key.

1. Public parameters: prime $p$ and generator $g$.
2. Alice picks secret $a$Sends $A = g^a \bmod p$.
3. Bob picks secret $b$Sends $B = g^b \bmod p$.
4. Shared secret: $s = B^a \bmod p = g^{ab} \bmod p = A^b \bmod p$.

An eavesdropper who sees $g$, $p$, $A$, $B$ cannot compute $g^{ab}$ without solving the discrete
Logarithm problem.

**Digital signatures.** The sender signs a message hash with their private key. Anyone can verify
Using the sender's public key. Provides authentication, integrity, and non-repudiation.

### 7.3 TLS in Depth

TLS 1.3 (RFC 8446) provides a clean, secure design:

- **1-RTT handshake:** Client and server exchange key shares in the first round trip, enabling
  immediate encrypted communication.
- **0-RTT resumption:** On subsequent connections, the client can send application data immediately
  using a pre-shared key from a previous session. Vulnerable to replay attacks.
- **Forward secrecy:** Every session uses ephemeral ECDHE keys, so compromise of the long-term
  private key does not allow decryption of past sessions.
- **Cipher suites:** Only AEAD ciphers are supported (AES-GCM, ChaCha20-Poly1305). No CBC or RC4.

**Certificate chain validation:**

1. Server presents its certificate (signed by intermediate CA).
2. Client verifies the signature chain up to a trusted root CA.
3. Client checks: validity dates, hostname match (SAN), revocation (CRL/OCSP).
4. Client verifies the server's .../1-number-and-algebra/3_proof-and-logic-of-possession for the
   private key.

### 7.4 Firewalls

A **firewall** controls network traffic based on security rules.

**Types:**

| Type                   | Layer | Mechanism                                  |
| ---------------------- | ----- | ------------------------------------------ |
| Packet filtering       | 3     | Permit/deny based on src, dst, port, proto |
| Stateful inspection    | 3--4  | Tracks connection state (TCP states)       |
| Application gateway    | 7     | Proxy for specific applications            |
| Next-generation (NGFW) | 3--7  | Deep packet inspection, IDS/IPS, app ID    |

**Stateful inspection.** Unlike simple packet filtering, a stateful firewall maintains a connection
Table. It can distinguish between a new TCP SYN (allowed) and an unsolicited SYN+ACK (blocked), And
it tracks UDP "connections" by observing request-response patterns.

**DMZ (Demilitarised Zone).** A separate network segment for publicly accessible services (web
Servers, mail servers). The firewall allows external access to the DMZ but restricts DMZ-to-internal
Access.

<details>
<summary>Worked Example: Firewall Rule Set Design</summary>

A company has a web server at `203.0.113.10`A mail server at `203.0.113.20`An internal network
`10.0.0.0/24`And a DNS server at `10.0.0.53`.

| #   | Dir | Src         | Dst          | Port    | Proto | Action |
| --- | --- | ----------- | ------------ | ------- | ----- | ------ |
| 1   | In  | Any         | 203.0.113.10 | 80, 443 | TCP   | Allow  |
| 2   | In  | Any         | 203.0.113.20 | 25      | TCP   | Allow  |
| 3   | Out | 10.0.0.0/24 | Any          | Any     | Any   | Allow  |
| 4   | In  | Any         | 203.0.113.10 | Any     | ICMP  | Allow  |
| 5   | In  | Any         | 10.0.0.53    | 53      | UDP   | Allow  |
| 6   | In  | Any         | Any          | Any     | Any   | Deny   |

**Notes:**

- Rule 1 allows HTTP/HTTPS to the web server.
- Rule 2 allows inbound SMTP for mail delivery.
- Rule 3 allows internal users outbound access to anything.
- Rule 4 allows ping to the web server for monitoring.
- Rule 5 allows external DNS queries.
- Rule 6 is the default deny (catches all unmatched traffic).

A stateful firewall automatically permits return traffic for outbound connections (rule 3) without
Additional rules.

</details>

### 7.5 VPNs

A **Virtual Private Network** creates an encrypted tunnel over a public network.

| Technology | Layer | Protocol      | Use Case                    |
| ---------- | ----- | ------------- | --------------------------- |
| IPsec      | 3     | AH, ESP       | Site-to-site, remote access |
| SSL/TLS    | 4--7  | TLS 1.3       | Client-to-site (OpenVPN)    |
| WireGuard  | 3     | UDP, ChaCha20 | Modern, lightweight VPN     |
| SSH tunnel | 7     | SSH           | Ad-hoc port forwarding      |

**IPsec architecture (RFC 4301):**

- **Security Association (SA):** A one-way logical connection with parameters: SPI (Security
  Parameters Index), destination IP, protocol (AH or ESP), encryption algorithm, key, lifetime.
- **IKE (Internet Key Exchange):** Protocol for establishing SAs. IKEv2 is the current standard.
  Uses Diffie-Hellman for key exchange and digital signatures for authentication.
- **AH (Authentication Header):** Provides integrity and authentication but NOT confidentiality.
  Protects the entire IP packet (immutable fields). Protocol number 51.
- **ESP (Encapsulating Security Payload):** Provides confidentiality, integrity, and authentication.
  Protocol number 50.

**WireGuard.** A modern VPN protocol (Linux kernel 5.6+):

- Uses ChaCha20 for encryption, Poly1305 for authentication, Curve25519 for key exchange.
- No static keys: each peer has a public/private key pair.
- Under 4000 lines of code (vs ~100,000 for OpenVPN + OpenSSL).
- Roaming: peers can change IP without reconfiguration.

### 7.6 Packet Filtering

**Rule syntax (generic):**

| Field  | Source IP  | Src Port | Dest IP    | Dst Port | Protocol | Action |
| ------ | ---------- | -------- | ---------- | -------- | -------- | ------ |
| Rule 1 | Any        | Any      | 10.0.0.0/8 | 22       | TCP      | Allow  |
| Rule 2 | 10.0.0.0/8 | Any      | Any        | 80, 443  | TCP      | Allow  |
| Rule 3 | Any        | Any      | Any        | Any      | Any      | Deny   |

**Key principles:**

- Rules are evaluated top-to-bottom; first match wins.
- Default deny policy: the last rule should deny everything not explicitly allowed.
- Specific rules must precede general rules.
- Stateful firewalls automatically allow return traffic for established connections.

:::caution Common Pitfall Encryption does not imply authentication. A message encrypted with a
public key guarantees Confidentiality but does not prove who sent it. Digital signatures (signing
with a private key) Provide authentication and non-repudiation. TLS combines both via the
certificate chain.

### 7.7 Common Network Attacks

**Denial of Service (DoS) and Distributed DoS (DDoS).** Overwhelm a target with traffic, preventing
Legitimate access. Amplification attacks (DNS, NTP) use small requests that generate large responses
Directed at the victim.

**Man-in-the-middle (MITM).** An attacker intercepts communication between two parties. Defences:
TLS with certificate pinning, mutual authentication, VPNs.

**ARP spoofing.** See Section 4.4. An attacker sends forged ARP messages to redirect traffic through
Their machine.

**DNS spoofing (cache poisoning).** Injecting forged DNS records into a resolver's cache,
redirecting Users to malicious sites. Defences: DNSSEC (cryptographic signatures on DNS records),
source port Randomisation, TSIG.

**SQL injection.** An attacker inserts malicious SQL into application input fields. Not strictly a
Network attack, but often delivered over HTTP. Defences: parameterised queries, input validation.

**TCP SYN flood.** An attacker sends many SYN packets without completing the handshake, exhausting
The server's connection table. Defences: SYN cookies (encode state in the initial sequence number),
Rate limiting, connection throttling.


:::
