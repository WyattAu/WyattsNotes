---
title: Transport Layer
tags:
  - Computing
  - University
---

### 5.1 UDP

**Connectionless, unreliable, message-oriented.** 8-byte header.

| Field    | Size    | Description                       |
| -------- | ------- | --------------------------------- |
| Src port | 16 bits | Source port                       |
| Dst port | 16 bits | Destination port                  |
| Length   | 16 bits | Header + data length              |
| Checksum | 16 bits | Optional (IPv4); mandatory (IPv6) |

**Use cases:** DNS, DHCP, VoIP, video streaming, gaming. Suitable when low latency matters more Than
reliability, or when the application handles reliability itself.

### 5.2 TCP

**Connection-oriented, reliable, byte-stream.** Provides flow control, congestion control, ordered
Delivery. Header: 20 bytes minimum.

| Field       | Size    | Description                        |
| ----------- | ------- | ---------------------------------- |
| Src port    | 16 bits | Source port                        |
| Dst port    | 16 bits | Destination port                   |
| Seq number  | 32 bits | Byte position of first data byte   |
| Ack number  | 32 bits | Next expected byte from other side |
| Data offset | 4 bits  | Header length in 32-bit words      |
| Flags       | 9 bits  | URG, ACK, PSH, RST, SYN, FIN       |
| Window      | 16 bits | Receive window size (flow control) |
| Checksum    | 16 bits | Mandatory                          |
| Urgent ptr  | 16 bits | Pointer to urgent data             |

### 5.3 TCP Options

The TCP header can include options (within the data offset space):

| Option         | Size     | Purpose                                 |
| -------------- | -------- | --------------------------------------- |
| MSS            | 4 bytes  | Maximum Segment Size (announced in SYN) |
| Window Scale   | 3 bytes  | Scale the window field (RFC 7323)       |
| SACK Permitted | 2 bytes  | Allow Selective Acknowledgements        |
| SACK           | Variable | Specify blocks of received data         |
| Timestamps     | 10 bytes | RTT measurement, PAWS protection        |

**Selective Acknowledgement (SACK).** Standard TCP only acknowledges contiguous data. If segments 3,
4, 5 are lost but 6-10 arrive, the receiver can only ACK up to segment 2. SACK allows the Receiver
to inform the sender exactly which blocks have arrived, avoiding unnecessary Retransmissions.

**Window scaling.** The TCP window field is 16 bits (max 65,535 bytes), insufficient for high-BDP
Paths. The window scale option shifts the window left by $S$ bits, allowing windows up to
$2^{16+S-1}$ bytes (maximum $S = 14$Yielding a 1 GiB window).

### 5.4 TCP vs UDP Comparison

| Aspect          | TCP                       | UDP                           |
| --------------- | ------------------------- | ----------------------------- |
| Connection      | Connection-oriented       | Connectionless                |
| Reliability     | Guaranteed delivery, ACKs | Best effort                   |
| Ordering        | Ordered delivery          | No ordering                   |
| Flow control    | Sliding window            | None                          |
| Congestion ctrl | cwnd, ssthresh            | None                          |
| Header size     | 20--60 bytes              | 8 bytes                       |
| Overhead        | Higher (handshake, ACKs)  | Lower                         |
| Use cases       | Web, email, file transfer | DNS, VoIP, streaming, gaming  |
| Broadcast       | No (point-to-point)       | Yes (broadcast and multicast) |
| Retransmission  | Automatic                 | Application-level             |

**Theorem 5.1.** TCP achieves reliable ordered delivery over an unreliable network using cumulative
Acknowledgements, sequence numbers, and retransmission timers.

_Proof._ TCP assigns each byte a sequence number. The receiver sends cumulative ACKs indicating the
Next expected byte. If an ACK is not received within the RTO, the sender retransmits. Since the
Receiver buffers out-of-order segments and only delivers in-order data to the application, and since
Every byte is eventually acknowledged or retransmitted until acknowledged, all data is delivered
Exactly once and in order. $\blacksquare$

### 5.5 TCP Connection Management

**Three-way handshake:**

```
Client                        Server
  |--- SYN (seq=x) ---------->|    Client: SYN_SENT
  |<-- SYN+ACK (seq=y,       |    Server: SYN_RCVD
  |    ack=x+1) ------------|
  |--- ACK (ack=y+1) -------->|    ESTABLISHED
```

**Four-way termination:**

```
Client                        Server
  |--- FIN (seq=u) ---------->|    Client: FIN_WAIT_1
  |<-- ACK (ack=u+1) --------|    Client: FIN_WAIT_2
  |                           |    Server: CLOSE_WAIT
  |<-- FIN (seq=v) ----------|    Server: LAST_ACK
  |--- ACK (ack=v+1) -------->|    Client: TIME_WAIT
  |      (wait 2*MSL)         |    Server: CLOSED
```

**TIME_WAIT.** Client waits $2 \times \mathrm{MSL}$ (Maximum Segment Lifetime, 60 s) Before closing.
Ensures: (1) the last ACK reaches the server; (2) old segments have expired.

**TCP state diagram** (state transitions):

| From        | Event                  | To          |
| ----------- | ---------------------- | ----------- |
| CLOSED      | passive open           | LISTEN      |
| CLOSED      | active open, send SYN  | SYN_SENT    |
| LISTEN      | recv SYN, send SYN+ACK | SYN_RCVD    |
| LISTEN      | close                  | CLOSED      |
| SYN_SENT    | recv SYN+ACK, send ACK | ESTABLISHED |
| SYN_RCVD    | recv ACK               | ESTABLISHED |
| ESTABLISHED | close, send FIN        | FIN_WAIT_1  |
| ESTABLISHED | recv FIN, send ACK     | CLOSE_WAIT  |
| FIN_WAIT_1  | recv ACK               | FIN_WAIT_2  |
| FIN_WAIT_1  | recv FIN, send ACK     | CLOSING     |
| FIN_WAIT_2  | recv FIN, send ACK     | TIME_WAIT   |
| CLOSE_WAIT  | close, send FIN        | LAST_ACK    |
| CLOSING     | recv ACK               | TIME_WAIT   |
| LAST_ACK    | recv ACK               | CLOSED      |
| TIME_WAIT   | 2 $\times$ MSL timeout | CLOSED      |

### 5.6 Flow Control

TCP uses a **sliding window**. The receiver advertises `rwnd` (receive window). The sender never has
More than `rwnd` bytes of unacknowledged data in flight.

$$\mathrm{Effective}\;window = \min(\mathrm{cwnd},\, \mathrm{rwnd})$$

**Example.** Buffer size 4096, 1024 unprocessed bytes: `rwnd = 3072`. The window slides as data is
Acknowledged and the receiver processes data.

### 5.7 Congestion Control

TCP adapts its sending rate based on perceived network congestion.

**Slow start.** `cwnd = 1` MSS. Double `cwnd` per ACK (exponential growth). Until `cwnd` reaches
`ssthresh` or loss occurs.

**Congestion avoidance.** When $\mathrm{cwnd} \geq \mathrm{ssthresh}$Increase `cwnd` by
$\mathrm{MSS} \times (\mathrm{MSS} / \mathrm{cwnd})$ per ACK (linear growth, approximately 1 MSS Per
RTT).

**Fast retransmit.** Three duplicate ACKs trigger immediate retransmission of the missing segment.

**Fast recovery.** After fast retransmit: $\mathrm{ssthresh} = \mathrm{cwnd}/2$
$\mathrm{cwnd} = \mathrm{ssthresh} + 3$. Enter congestion avoidance (not slow start).

**TCP Reno state transitions:**

```
Slow Start: cwnd doubles each RTT
  |
  v  (cwnd >= ssthresh)
Congestion Avoidance: cwnd += 1 MSS/RTT
  |
  v  (3 dup ACKs)
Fast Retransmit + Recovery: ssthresh = cwnd/2, cwnd = ssthresh + 3
  |
  v  (new ACK)
Congestion Avoidance
  |
  v  (timeout)
Slow Start: ssthresh = cwnd/2, cwnd = 1
```

**TCP Cubic.** Default in Linux since 2.6.19. Uses a cubic function of time since last congestion
Event. Better performance on high-bandwidth, high-latency networks.

<details>
<summary>Worked Example: TCP Congestion Window Evolution</summary>

Given: MSS = 1460 bytes, initial `ssthresh` = 16384 bytes. Trace `cwnd` through the following
Events:

1. Connection established, enter slow start.
2. After 4 RTTs, cwnd reaches ssthresh.
3. 3 more RTTs in congestion avoidance.
4. Three duplicate ACKs received (fast retransmit).
5. New ACK arrives after fast recovery.

**Slow start (cwnd doubles each RTT):**

| RTT | cwnd (MSS) | cwnd (bytes) | Phase                             |
| --- | ---------- | ------------ | --------------------------------- |
| 1   | 2          | 2920         | Slow start                        |
| 2   | 4          | 5840         | Slow start                        |
| 3   | 8          | 11680        | Slow start                        |
| 4   | 16         | 23360        | cwnd $\geq$ ssthresh $\to$ switch |

**Congestion avoidance (cwnd increases by ~1 MSS per RTT):**

| RTT | cwnd (bytes) | Increment | Phase                |
| --- | ------------ | --------- | -------------------- |
| 5   | 24820        | +1460     | Congestion avoidance |
| 6   | 26280        | +1460     | Congestion avoidance |
| 7   | 27740        | +1460     | Congestion avoidance |

**Fast retransmit and recovery (after 3 dup ACKs):**

Ssthresh = 27740 / 2 = 13870 bytes Cwnd = 13870 + 3 $\times$ 1460 = 18250 bytes

**New ACK arrives (exit fast recovery):**

Cwnd = ssthresh = 13870 bytes, continue congestion avoidance.

</details>

### 5.8 Retransmission Timer

$$\mathrm{RTT_s} = (1 - \alpha)\,\mathrm{RTT_s} + \alpha \cdot \mathrm{RTT_m}$$

$$\mathrm{RTT_d} = (1 - \beta)\,\mathrm{RTT_d} + \beta\,|\mathrm{RTT_m} - \mathrm{RTT_s}|$$

$$\mathrm{RTO} = \mathrm{RTT_s} + 4 \cdot \mathrm{RTT_d}$$

Where $\mathrm{RTT_m}$ = measured RTT, $\alpha = 1/8$, $\beta = 1/4$. Initial RTO = 1 s; minimum RTO
= 200 ms.

:::caution Common Pitfall Karn's algorithm: do not update RTT estimates for retransmitted segments.
The ACK could correspond To either the original or the retransmission (retransmission ambiguity).

<details>
<summary>Worked Example: RTT Estimation</summary>

Given: $\alpha = 1/8$, $\beta = 1/4$Initial $\mathrm{RTT_s} = 0$, $\mathrm{RTT_d} = 0$. Measured
RTTs: 220 ms, 240 ms, 230 ms, 260 ms, 250 ms.

**After measurement 1 (220 ms):**

$\mathrm{RTT_s} = (7/8)(0) + (1/8)(220) = 27.5$ ms
$\mathrm{RTT_d} = (3/4)(0) + (1/4)|220 - 27.5| = 48.125$ ms $\mathrm{RTO} = 27.5 + 4(48.125) = 220$
ms

**After measurement 2 (240 ms):**

$\mathrm{RTT_s} = (7/8)(27.5) + (1/8)(240) = 24.06 + 30 = 54.06$ ms
$\mathrm{RTT_d} = (3/4)(48.125) + (1/4)|240 - 54.06| = 36.09 + 46.49 = 82.58$ ms
$\mathrm{RTO} = 54.06 + 4(82.58) = 384.38$ ms

**After measurement 3 (230 ms):**

$\mathrm{RTT_s} = (7/8)(54.06) + (1/8)(230) = 47.30 + 28.75 = 76.05$ ms
$\mathrm{RTT_d} = (3/4)(82.58) + (1/4)|230 - 76.05| = 61.94 + 38.49 = 100.43$ ms
$\mathrm{RTO} = 76.05 + 4(100.43) = 477.77$ ms

**After measurement 4 (260 ms):**

$\mathrm{RTT_s} = (7/8)(76.05) + (1/8)(260) = 66.54 + 32.50 = 99.04$ ms
$\mathrm{RTT_d} = (3/4)(100.43) + (1/4)|260 - 99.04| = 75.32 + 40.24 = 115.56$ ms
$\mathrm{RTO} = 99.04 + 4(115.56) = 561.28$ ms

**After measurement 5 (250 ms):**

$\mathrm{RTT_s} = (7/8)(99.04) + (1/8)(250) = 86.66 + 31.25 = 117.91$ ms
$\mathrm{RTT_d} = (3/4)(115.56) + (1/4)|250 - 117.91| = 86.67 + 33.02 = 119.69$ ms
$\mathrm{RTO} = 117.91 + 4(119.69) = 596.67$ ms

The smoothed RTT converges toward the true average (~240 ms) and the RTO stabilises around 600 ms.

</details>



:::
