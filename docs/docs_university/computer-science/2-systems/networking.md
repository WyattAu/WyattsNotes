---
title: Networking
description:
  'University-level notes on Networking: OSI and TCP/IP models, physical layer,
  data link layer, network layer, transport layer, and application layer protocols.'
date: 2026-05-31T00:00:00.000Z
tags:
  - Computer Science
  - University
categories:
  - Computer Science
slug: networking
---

## 1. Network Models

### 1.1 OSI Model (7 Layers)

| Layer | Name               | Function                          | Examples                    |
| ----- | ------------------ | --------------------------------- | --------------------------- |
| 7     | Application        | User interface, application logic | HTTP, DNS, SMTP, FTP        |
| 6     | Presentation       | Data formatting, encryption       | TLS/SSL, JPEG, ASCII        |
| 5     | Session            | Dialog control, synchronization   | NetBIOS, RPC                |
| 4     | Transport          | End-to-end reliability            | TCP, UDP                    |
| 3     | Network            | Routing, logical addressing        | IP, ICMP, OSPF, BGP         |
| 2     | Data Link          | Framing, error detection          | Ethernet, Wi-Fi, PPP        |
| 1     | Physical           | Bit transmission over medium      | Cables, fiber, radio waves  |

### 1.2 TCP/IP Model (4 Layers)

| TCP/IP Layer | OSI Layers        | Protocols                    |
| ------------ | ----------------- | ---------------------------- |
| Application  | 5, 6, 7           | HTTP, DNS, SMTP, FTP, TLS    |
| Transport    | 4                 | TCP, UDP                     |
| Internet     | 3                 | IP, ICMP, ARP                |
| Network Access | 1, 2            | Ethernet, Wi-Fi, MAC        |

### 1.3 Encapsulation

Each layer adds a header (and sometimes trailer) to the data from the layer above:

```
Application data
→ [TCP header | Application data]
→ [IP header | TCP header | Application data]
→ [Ethernet header | IP header | TCP header | Application data | FCS]
```

## 2. Physical Layer

### 2.1 Signals and Encoding

**Analog signals:** Continuous, represented by sine waves. Parameters: amplitude, frequency, phase.

**Digital signals:** Discrete (0s and 1s). Encoded as voltage levels.

**Encoding schemes:**

| Scheme         | Description                                     |
| -------------- | ----------------------------------------------- |
| NRZ-L          | High = 0, Low = 1 (or vice versa)              |
| NRZ-I          | Transition at 1, no transition at 0            |
| Manchester     | Transition at midpoint: low→high = 1, high→low = 0 |
| Differential Manchester | Transition at start of each bit; no mid-bit transition = 1 |
| 4B/5B          | 4 data bits encoded as 5 bits (80% efficiency)  |

### 2.2 Bandwidth and Data Rate

**Nyquist theorem** (noiseless channel):

$$C = 2B \log_2 V$$

where $B$ = bandwidth (Hz), $V$ = signal levels.

**Shannon's theorem** (noisy channel):

$$C = B \log_2(1 + \text{SNR})$$

where SNR = signal-to-noise ratio (power ratio). If $\text{SNR}_{\text{dB}} = 30$, then $\text{SNR} = 10^{30/10} = 1000$.

### 2.3 Multiplexing

**FDM (Frequency-Division Multiplexing):** Divide bandwidth into frequency bands, each carrying a separate signal.

**TDM (Time-Division Multiplexing):** Divide time into slots, each carrying data from a different source.

**WDM (Wavelength-Division Multiplexing):** FDM over fiber optics using different wavelengths (colors) of light.

**Statistical TDM:** Dynamically allocate time slots based on demand (more efficient than synchronous TDM).

### 2.4 Transmission Media

| Medium           | Bandwidth        | Distance         | Use              |
| ---------------- | ---------------- | ---------------- | ---------------- |
| Twisted pair     | Up to 1 Gbps     | Up to 100m       | LAN (Cat 5e/6/7) |
| Coaxial cable    | Up to 10 Gbps    | Up to 500m       | Cable TV         |
| Fiber optic      | Up to 100 Tbps   | Up to 100km      | Backbone, WAN    |
| Radio (Wi-Fi)    | Up to 9.6 Gbps   | Up to 100m       | WLAN             |

## 3. Data Link Layer

### 3.1 Framing

Divide the bit stream into **frames** for transmission.

**Framing methods:**

- **Byte count:** First byte specifies frame length (vulnerable to count corruption).
- **Byte stuffing (flag bytes):** Use special delimiter DLE STX/DLE ETX; escape DLE within data.
- **Bit stuffing:** Flag pattern 01111110; after five consecutive 1s, insert a 0.

```
BIT_STUFF(data):
    result = ""
    count = 0
    for each bit in data:
        if bit == 1:
            count += 1
            if count == 5:
                result += "10"  // stuff a 0
                count = 0
                continue
        else:
            count = 0
        result += bit
    return result
```

### 3.2 Error Detection

**Parity check:** Add 1 bit so total 1s is even (even parity) or odd (odd parity). Detects single-bit errors.

**Checksum:** Sum all 16-bit words, take 1's complement. Used in TCP, UDP, IP.

**CRC (Cyclic Redundancy Check):**

Given message $M(x)$ and generator polynomial $G(x)$:

1. Append $r$ zero bits to $M(x)$ where $r = \deg(G(x))$.
2. Divide by $G(x)$ using polynomial (mod 2) division.
3. Remainder $R(x)$ is the CRC.
4. Transmit $M(x) \cdot x^r + R(x)$.
5. Receiver divides by $G(x)$; zero remainder = no error.

**Detection capability:** Detects all single-bit errors, all double-bit errors, all odd-number errors, and any burst of length $\leq r$.

### 3.3 Error Correction

**Hamming code:** Adds parity bits at positions $2^i$ to correct single-bit errors.

For $m$ data bits, use $r$ parity bits where $2^r \geq m + r + 1$.

| Data bits | Parity bits | Total |
| --------- | ----------- | ----- |
| 4         | 3           | 7     |
| 8         | 4           | 12    |
| 16        | 5           | 21    |

### 3.4 MAC Protocols

**ALOHA:** Transmit anytime. If collision, wait random time and retransmit. Throughput: $\sim 18.4\%$.

**Slotted ALOHA:** Time divided into slots. Transmit only at slot boundaries. Throughput: $\sim 36.8\%$.

**CSMA/CD (Carrier Sense Multiple Access with Collision Detection):**
1. Sense channel: idle → transmit; busy → wait.
2. While transmitting, detect collisions.
3. On collision: send jam signal, wait (binary exponential backoff), retry.

$$\text{Backoff time} = \text{rand}(0, 2^k - 1) \times \text{slot time}$$

where $k = \min(\text{retries}, 10)$. Used in Ethernet (IEEE 802.3).

**CSMA/CA (Collision Avoidance):** Used in Wi-Fi (802.11). Uses RTS/CTS handshake to reserve the channel before transmitting.

```
CSMA_CA(sender, receiver):
    // Wait for channel idle for DIFS
    while channel busy: wait
    wait DIFS
    send RTS
    wait CTS
    wait SIFS
    send data
    wait ACK after SIFS
```

## 4. Network Layer

### 4.1 IP Addressing

**IPv4 address:** 32 bits, written as 4 octets (e.g., 192.168.1.1).

**IPv6 address:** 128 bits, written as 8 groups of 4 hex digits (e.g., 2001:0db8:85a3::8a2e:0370:7334).

**IPv4 address classes:**

| Class | Range              | Default Subnet | Max Hosts         |
| ----- | ------------------ | -------------- | ----------------- |
| A     | 0.0.0.0 – 127.255.255.255 | /8   | $2^{24} - 2$      |
| B     | 128.0.0.0 – 191.255.255.255 | /16 | $2^{16} - 2$      |
| C     | 192.0.0.0 – 223.255.255.255 | /24 | $2^8 - 2$        |
| D     | 224.0.0.0 – 239.255.255.255 | Multicast |
| E     | 240.0.0.0 – 255.255.255.255 | Reserved |

### 4.2 Subnetting and CIDR

**CIDR (Classless Inter-Domain Routing):** Notation $a.b.c.d/n$ where $n$ = number of network bits.

**Subnet mask:** $n$ 1-bits followed by $32-n$ 0-bits.

**Number of subnets:** $2^{\text{subnet bits}}$

**Hosts per subnet:** $2^{32-n} - 2$ (subtract network address and broadcast address).

**Example:** 192.168.1.0/26 → 64 addresses, 62 usable hosts, 4 subnets.

**Subnetting algorithm:**

```
SUBNET(network, prefix_length, num_subnets):
    subnet_bits = ceil(log2(num_subnets))
    new_prefix = prefix_length + subnet_bits
    subnet_size = 2^(32 - new_prefix)
    for i = 0 to num_subnets - 1:
        start = network + i * subnet_size
        print f"{start}/{new_prefix}"
```

### 4.3 NAT (Network Address Translation)

Translates private IP addresses to a public IP address for Internet access:

$$\text{Private: } (10.0.0.0/8, \ 172.16.0.0/12, \ 192.168.0.0/16)$$

**NAT types:**
- **Static NAT:** One-to-one mapping.
- **Dynamic NAT:** Pool of public IPs, assigned on demand.
- **PAT (NAT overload):** Maps multiple private IPs to one public IP using port numbers.

### 4.4 Routing Protocols

**RIP (Routing Information Protocol):**
- Distance-vector protocol. Uses **Bellman-Ford** algorithm.
- Metric: **hop count** (max 15 hops).
- Sends entire routing table every 30 seconds.
- Convergence: Slow. Count-to-infinity problem.

```
RIP_UPDATE(router):
    every 30 seconds:
        for each destination d:
            min_cost = INF
            next_hop = NIL
            for each neighbor n:
                if cost(d, n) + 1 < min_cost:
                    min_cost = cost(d, n) + 1
                    next_hop = n
            update routing table for d
```

**OSPF (Open Shortest Path First):**
- Link-state protocol. Uses **Dijkstra's** algorithm.
- Each router has a complete map of the network topology.
- Floods LSA (Link State Advertisements) on topology changes.
- Fast convergence. Supports areas for scalability.

**BGP (Border Gateway Protocol):**
- Path-vector protocol. Used for **inter-AS (autonomous system)** routing.
- Exchanges reachability information between ASes.
- Policy-based routing (economic, political considerations).
- **eBGP** (between ASes) and **iBGP** (within an AS).

| Protocol | Type            | Algorithm      | Metric        | Scope     | Convergence |
| -------- | --------------- | -------------- | ------------- | --------- | ----------- |
| RIP      | Distance-vector | Bellman-Ford   | Hop count     | AS        | Slow        |
| OSPF     | Link-state      | Dijkstra       | Cost (custom) | Area/AS   | Fast        |
| BGP      | Path-vector     | Policy-based   | AS path       | Internet  | Varies      |

## 5. Transport Layer

### 5.1 UDP (User Datagram Protocol)

- **Connectionless:** No handshake, no connection state.
- **Unreliable:** No acknowledgment, no retransmission.
- **No ordering:** Packets may arrive out of order.
- **No congestion control.**
- **Header:** 8 bytes (src port, dst port, length, checksum).
- **Use cases:** DNS, DHCP, real-time streaming, gaming.

### 5.2 TCP (Transmission Control Protocol)

- **Connection-oriented:** Three-way handshake.
- **Reliable:** Acknowledgments, retransmissions, sequence numbers.
- **Ordered:** Sequences guarantee in-order delivery.
- **Byte-stream:** No message boundaries.
- **Flow controlled:** Receiver controls sender's rate.
- **Congestion controlled:** Sender adjusts to network conditions.

**TCP header:** 20 bytes minimum (src port, dst port, seq number, ack number, flags, window, checksum, urgent pointer, options).

### 5.3 TCP Three-Way Handshake

```
Client                              Server
  |--- SYN (seq=x) ------------------>|
  |<-- SYN+ACK (seq=y, ack=x+1) -----|
  |--- ACK (seq=x+1, ack=y+1) ------>|
  |                                  |
  |          CONNECTION ESTABLISHED   |
```

### 5.4 TCP Reliable Delivery

**Sequence numbers:** Each byte is numbered. SYN and FIN consume one sequence number.

**Acknowledgments:** Cumulative; ACK $n$ means all bytes up to $n-1$ received.

**Retransmission:** On timeout (RTO = estimated RTT + 4 * RTT deviation):

$$\text{EstimatedRTT} = (1-\alpha) \cdot \text{EstimatedRTT} + \alpha \cdot \text{SampleRTT}$$

$$\text{DevRTT} = (1-\beta) \cdot \text{DevRTT} + \beta \cdot |\text{SampleRTT} - \text{EstimatedRTT}|$$

Typically $\alpha = 0.125$, $\beta = 0.25$.

**Fast retransmit:** 3 duplicate ACKs trigger immediate retransmission without waiting for timeout.

### 5.5 TCP Flow Control

**Sliding window:** Receiver advertises available buffer space via the window field.

```
Sender maintains:
    send_base: oldest un-ACKed byte
    next_seq_num: next byte to send

Receiver maintains:
    recv_base: next expected byte
    window: advertised window size
```

- **Zero window probe:** When window is 0, sender sends probes to detect when window opens.
- **Silly Window Syndrome:** Avoided by Nagle's algorithm (sender buffers small segments) and Clark's solution (receiver doesn't advertise small windows).

### 5.6 TCP Congestion Control

**Slow start:** Congestion window (cwnd) starts at 1 MSS. Doubles each RTT (exponential growth).

```
TCP_SLOW_START():
    cwnd = 1 * MSS
    ssthresh = Infinity
    while true:
        send min(cwnd, receiver_window) bytes
        if timeout:
            ssthresh = cwnd / 2
            cwnd = 1 * MSS  // restart slow start
        else if 3 duplicate ACKs:
            ssthresh = cwnd / 2
            cwnd = ssthresh  // fast recovery
        if cwnd >= ssthresh:
            enter congestion avoidance
```

**Congestion avoidance:** Linear growth (increase cwnd by 1 MSS per RTT).

**Fast recovery:** On 3 duplicate ACKs, halve cwnd (set to ssthresh) instead of resetting to 1.

**Phases:**

| Phase              | cwnd Growth    | Trigger                   |
| ------------------ | -------------- | ------------------------- |
| Slow start         | Exponential    | Connection start, timeout |
| Congestion avoidance | Linear       | cwnd ≥ ssthresh           |
| Fast recovery      | —              | 3 duplicate ACKs          |
| Timeout (RTO)      | Reset to 1 MSS | Timeout                   |

## 6. Application Layer

### 6.1 HTTP (HyperText Transfer Protocol)

**Request methods:**

| Method   | Purpose              | Idempotent | Has body |
| -------- | -------------------- | ---------- | -------- |
| GET      | Retrieve resource    | Yes        | No       |
| POST     | Create/submit data    | No         | Yes      |
| PUT      | Replace resource     | Yes        | Yes      |
| DELETE   | Remove resource       | Yes        | No       |
| PATCH    | Partial update       | No         | Yes      |
| HEAD     | Get headers only     | Yes        | No       |

**Status codes:**
- **2xx:** Success (200 OK, 201 Created)
- **3xx:** Redirection (301 Moved Permanently, 304 Not Modified)
- **4xx:** Client error (400 Bad Request, 401 Unauthorized, 404 Not Found)
- **5xx:** Server error (500 Internal Server Error, 503 Service Unavailable)

**HTTP/1.1 vs HTTP/2 vs HTTP/3:**

| Feature       | HTTP/1.1       | HTTP/2         | HTTP/3           |
| ------------- | -------------- | -------------- | ---------------- |
| Transport     | TCP            | TCP            | QUIC (UDP)       |
| Connections   | 1 per domain   | Multiplexed    | Multiplexed      |
| Header format | Text           | HPACK compressed | QPACK          |
| Ordering      | HOL blocking   | HOL on TCP     | No HOL           |

### 6.2 DNS (Domain Name System)

Hierarchical, distributed database mapping domain names to IP addresses.

**Record types:**

| Type  | Purpose                          |
| ----- | -------------------------------- |
| A     | IPv4 address                     |
| AAAA  | IPv6 address                     |
| CNAME | Canonical name (alias)           |
| MX    | Mail exchange server             |
| NS    | Authoritative name server        |
| TXT   | Text data                        |

**Resolution process:**

```
DNS_RESOLVE(domain):
    check local cache
    query recursive resolver
        if not cached:
            query root server → TLD server → authoritative server
    cache result
    return IP address
```

### 6.3 SMTP (Simple Mail Transfer Protocol)

**Email flow:**

```
Sender MUA → Sender MTA (SMTP) → Intermediate MTA(s) → Receiver MTA (SMTP) → Receiver MUA (IMAP/POP3)
```

**SMTP commands:**

```
HELO hostname       // Greet
MAIL FROM: <addr>   // Sender
RCPT TO: <addr>     // Recipient
DATA                // Start message body
Subject: ...
<Message body>
.                   // End message
QUIT                // Close
```

### 6.4 Other Application Protocols

| Protocol | Port | Purpose                    |
| -------- | ---- | -------------------------- |
| FTP      | 20/21 | File transfer (control/data) |
| SSH      | 22   | Secure shell              |
| DHCP     | 67/68| Auto IP configuration      |
| IMAP     | 143  | Email access (server-side) |
| POP3     | 110  | Email download            |
| HTTPS    | 443  | HTTP over TLS             |
| DNS      | 53   | Name resolution            |

## 7. Common Pitfalls

1. **Confusing TCP and UDP use cases.** TCP adds overhead for reliability, flow control, and congestion control. Use UDP for low-latency applications where occasional packet loss is acceptable (gaming, streaming, DNS).

2. **Forgetting the TCP three-way handshake cost.** Every TCP connection requires a full round trip before data transfer begins. For short-lived connections, this overhead is significant. Use connection pooling.

3. **Underestimating the importance of MTU.** If a packet exceeds the Maximum Transmission Unit, it gets fragmented. Fragmentation increases overhead and reassembly complexity. Path MTU discovery helps avoid this.

4. **Ignoring subnet mask errors.** An incorrect subnet mask causes packets to be sent to the wrong gateway or subnet. Always double-check CIDR notation and subnet masks.

5. **Misunderstanding ARP (Address Resolution Protocol).** ARP maps IP to MAC addresses and is broadcast-based. It works only within a broadcast domain. Routers use their own MAC addresses, not the destination's.

6. **HTTP/1.1 head-of-line blocking.** In HTTP/1.1, one slow response blocks subsequent responses on the same TCP connection. This is solved by HTTP/2 multiplexing or opening multiple connections.

7. **DNS caching issues.** Long TTL values improve performance but delay propagation of changes. Short TTL values increase DNS query volume. Choose based on how often records change.

## Summary

- **OSI model** (7 layers) and **TCP/IP model** (4 layers) organize network functionality into abstraction layers with encapsulation.
- **Physical layer** handles signal encoding, bandwidth (Nyquist/Shannon), and multiplexing (FDM, TDM, WDM).
- **Data link layer** manages framing, error detection (CRC), error correction (Hamming codes), and medium access (CSMA/CD, CSMA/CA).
- **Network layer** handles IP addressing, subnetting (CIDR), NAT, and routing (RIP, OSPF, BGP).
- **Transport layer** provides UDP (fast, unreliable) and TCP (reliable, ordered, flow-controlled, congestion-controlled).
- **Application layer** includes HTTP, DNS, SMTP, and other end-user protocols.
