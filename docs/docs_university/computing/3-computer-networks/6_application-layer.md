---
title: Application Layer
tags:
  - Computing
  - University
---

### 6.1 DNS

DNS translates domain names to IP addresses. Hierarchical, distributed database.

**Domain hierarchy:** Root (`.`) $\to$ TLD (`com``org``net`) $\to$ second-level (`example.com`)
$\to$ subdomain (`www.example.com`).

**Record types:**

| Type  | Name  | Purpose                                  |
| ----- | ----- | ---------------------------------------- |
| A     | IPv4  | IPv4 address                             |
| AAAA  | IPv6  | IPv6 address                             |
| CNAME | Alias | Alias to another name                    |
| MX    | Mail  | Mail server for the domain               |
| NS    | Name  | Authoritative name server                |
| SOA   | Start | Zone administration info                 |
| TXT   | Text  | Arbitrary text (SPF, DKIM, verification) |

**Resolution process:**

1. Client queries the **recursive resolver** (e.g., `8.8.8.8`).
2. Resolver queries a **root server** for the TLD server.
3. Root refers to the **TLD server** (e.g., for `.com`).
4. TLD server refers to the **authoritative server** for the domain.
5. Authoritative server returns the answer.
6. Resolver caches the result with a TTL.

**Iterative vs recursive resolution.** The client's query to its configured resolver is
**recursive** (the resolver does all the work). The resolver's queries to root, TLD, and
authoritative servers Are **iterative** (each server refers the resolver to the next, or answers
directly). This Distinction is important: the root and TLD servers are not burdened with recursion.

**DNS caching and TTL.** Each DNS record has a Time-To-Live (TTL) value (in seconds). Resolvers
cache The record for the TTL duration. Typical TTLs: 300 s (5 min) for dynamic records, 86400 s (24
h) For stable records. Negative caching (NXDOMAIN) also has a TTL (specified in the SOA record's
Minimum field).

**DNS resolution sequence example:** Resolving `www.example.com` with an empty cache:

1. Client $\to$ recursive resolver: "What is the A record for `www.example.com`?" (UDP, 1 RTT).
2. Resolver $\to$ root server: "Where is the `.com` TLD?" (1 RTT).
3. Root $\to$ resolver: "Ask the `.com` TLD server at 192.5.6.30."
4. Resolver $\to$ `.com` TLD: "Where is `example.com`?" (1 RTT).
5. TLD $\to$ resolver: "Ask the `example.com` authoritative server at 93.184.216.34."
6. Resolver $\to$ authoritative: "What is the A record for `www.example.com`?" (1 RTT).
7. Authoritative $\to$ resolver: "93.184.216.34, TTL = 300."
8. Resolver $\to$ client: "93.184.216.34" (1 RTT).

Total: 5 RTTs for the resolver, 1 RTT for the client. With caching, subsequent lookups for
`www.example.com` require only 1 RTT (client to resolver).

**Theorem 6.1.** DNS caching dramatically reduces latency. Without caching, every lookup requires
Multiple round trips to root, TLD, and authoritative servers.

### 6.2 HTTP

**HTTP/1.0.** New TCP connection per request/response. No persistent connections.

**HTTP/1.1.** Default persistent connections (`Connection: keep-alive`). Pipelining allows multiple
Requests without waiting for responses. Head-of-line blocking: one stalled request blocks subsequent
Ones.

**HTTP/2.** Multiplexing over a single TCP connection. Binary framing, header compression (HPACK),
Server push, stream prioritisation. Solved application-layer HOL blocking.

**HTTP/3.** Uses QUIC (UDP-based) instead of TCP. Solves TCP-level HOL blocking. Includes Connection
migration, 0-RTT handshake resumption, integrated TLS 1.3.

**HTTP methods:**

| Method  | Idempotent | Safe | Purpose                        |
| ------- | ---------- | ---- | ------------------------------ |
| GET     | Yes        | Yes  | Retrieve a resource            |
| POST    | No         | No   | Submit data                    |
| PUT     | Yes        | No   | Replace a resource             |
| DELETE  | Yes        | No   | Delete a resource              |
| PATCH   | No         | No   | Partial modification           |
| HEAD    | Yes        | Yes  | Like GET but no body           |
| OPTIONS | Yes        | Yes  | Describe communication options |

**Status codes:**

| Code Range | Category      | Examples                       |
| ---------- | ------------- | ------------------------------ |
| 1xx        | Informational | 100 Continue                   |
| 2xx        | Success       | 200 OK, 201 Created            |
| 3xx        | Redirection   | 301 Moved, 304 Not Modified    |
| 4xx        | Client Error  | 400 Bad Request, 404 Not Found |
| 5xx        | Server Error  | 500 Internal, 503 Unavailable  |

### 6.3 TLS

**Transport Layer Security** provides encryption, authentication, and integrity for TCP connections.

**TLS 1.3 handshake (simplified):**

```
Client                          Server
  |--- ClientHello ------------>|
  |   (supported ciphers,       |
  |    key_share)               |
  |<-- ServerHello -------------|
  |   (selected cipher,         |
  |    key_share, cert,         |
  |    Finished)                |
  |--- Finished --------------->|
  |   (Application data now     |
  |    encrypted)               |
```

TLS 1.3 reduces the handshake to 1-RTT (or 0-RTT with session resumption). Supports:

- **AEAD ciphers:** AES-128-GCM, AES-256-GCM, ChaCha20-Poly1305.
- **Key exchange:** ECDHE (Elliptic Curve Diffie-Hellman Ephemeral). Forward secrecy guaranteed.
- **Authentication:** RSA or ECDSA signatures on the server certificate.

**Certificate chain:** Server certificate signed by intermediate CA, signed by root CA. Root CAs are
Pre-installed in the browser/OS trust store.

### 6.4 Email Protocols

**SMTP (Simple Mail Transfer Protocol).** Push protocol for sending email (TCP port 25/587). Uses a
Command-response dialogue: `HELO`/`EHLO``MAIL FROM``RCPT TO``DATA``QUIT`. Supports extensions For
authentication (`AUTH`) and encryption (`STARTTLS`).

**SMTP session example:**

```
C: EHLO client.example.com
S: 250-smtp.example.com Hello
S: 250 AUTH PLAIN LOGIN
C: AUTH PLAIN <credentials>
S: 235 Authentication successful
C: MAIL FROM:<alice@example.com>
S: 250 OK
C: RCPT TO:<bob@example.org>
S: 250 OK
C: DATA
S: 354 Start mail input
C: From: alice@example.com
C: To: bob@example.org
C: Subject: Meeting
C:
C: Hi Bob, let's meet at 3pm.
C: .
S: 250 OK
C: QUIT
S: 221 Bye
```

**IMAP (Internet Message Access Protocol).** Access email on the server without downloading.
Supports Folders, search, partial fetch. TCP port 143 (993 for IMAPS). States: authenticated,
selected, and Logout. Messages remain on the server unless explicitly deleted.

**POP3 (Post Office Protocol v3).** Download email to the client; deletes from server. TCP Port 110
(995 for POP3S). Simpler than IMAP but less flexible. Supports `TOP` (fetch headers) and `RETR`
(fetch full message).

| Aspect   | IMAP                  | POP3                 |
| -------- | --------------------- | -------------------- |
| Mode     | Remote access         | Download and delete  |
| Folders  | Yes, server-side      | No                   |
| Search   | Server-side search    | No                   |
| Sync     | Multi-device sync     | No                   |
| Resource | Higher server storage | Lower server storage |

### 6.5 Other Application Protocols

**DHCP (Dynamic Host Configuration Protocol).** Automatically assigns IP addresses, subnet masks,
Default gateway, and DNS servers to clients. Uses UDP ports 67 (server) and 68 (client).

**DHCP DORA process:**

```
Client                            Server
  |--- DHCPDISCOVER (broadcast) -->|
  |<-- DHCPOFFER -----------------|
  |--- DHCPREQUEST (broadcast) --->|
  |<-- DHCPACK -------------------|
```

Leases are time-limited; clients must renew before expiry (T1 at 50%, T2 at 87.5% of lease).

**DHCP relay.** In networks with multiple subnets, clients broadcast DHCPDISCOVER, which routers do
Not forward. A DHCP relay agent (configured on the router) converts the broadcast to a unicast and
Forwards it to the DHCP server, adding the `giaddr` (gateway IP address) field so the server knows
Which subnet to allocate an address from.

**DHCPv6.** Uses multicast (`ff02::1:2` for servers) and supports rapid commit (2-message exchange
Instead of 4-message DORA). Stateless DHCPv6 provides only configuration (DNS, NTP) without address
Assignment (SLAAC handles addressing).

**FTP (File Transfer Protocol).** Two connections: control (port 21) and data (port 20 for active
Mode, random high port for passive mode). Supports ASCII and binary transfer modes.

**SSH (Secure Shell).** Encrypted remote access and file transfer (SCP, SFTP). TCP port 22. Uses
Public-key authentication. Transport layer provides encryption, integrity, and compression.

**WebSocket.** Full-duplex communication channel over a single TCP connection (RFC 6455). Handshake
Is HTTP-based with an `Upgrade: websocket` header. Used for real-time web applications (chat,
Gaming, live data).

**SNMP (Simple Network Management Protocol).** Used for monitoring and managing network devices. UDP
port 161/162. Three versions: v1 (community strings, no security), v2c, v3 (user-based security
Model with authentication and encryption).

### 6.6 Network Performance Metrics

**Key metrics:**

- **Bandwidth-delay product (BDP):** $\mathrm{BDP} = \mathrm{bandwidth} \times \mathrm{RTT}$. The
  maximum amount of unacknowledged data that can be in flight. For a 10 Gbps link with 80 ms RTT:
  $\mathrm{BDP} = 10^{10} \times 0.08 = 800\;\mathrm{Mb} = 100\;\mathrm{MB}$.

- **Throughput:** Actual data rate achieved, less than bandwidth due to protocol overhead,
  congestion, and errors.

- **Latency components:** Propagation delay ($d / c$Where $d$ is distance), transmission delay
  ($L / R$Where $L$ is frame length, $R$ is rate), queuing delay, processing delay.

- **Jitter:** Variation in packet arrival times. Critical for real-time applications (VoIP, video).
  Measured as the standard deviation of delay.

**Theorem 6.2.** The maximum throughput of a TCP connection is bounded by the window size divided by
The RTT: $\mathrm{throughput} \leq \min(\mathrm{cwnd}, \mathrm{rwnd}) / \mathrm{RTT}$.

_Proof._ The sender cannot have more than the window size in unacknowledged data. Each byte sent
Requires an ACK, which takes one RTT to arrive. Thus the sender can send at most window / RTT bytes
Per second. $\blacksquare$

:::caution Common Pitfall DNS uses both TCP and UDP. Queries use UDP port 53 (for efficiency). TCP
is used for zone Transfers, responses exceeding 512 bytes, and DNSSEC. The switch to TCP was
formalised in RFC 7766.



:::
