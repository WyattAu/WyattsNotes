---
title: Data Link Layer
tags:
  - Computing
  - University
---

### 3.1 Framing

The data link layer receives a bit stream and divides it into manageable **frames**.

**Framing methods:**

1. **Byte count:** First field specifies frame length. Vulnerable to corrupted count.
2. **Flag bytes:** Special flag byte (`0x7E` for HDLC) marks start/end. Byte stuffing with escape
   byte (`0x7D`) prevents ambiguity.
3. **Bit-oriented flags:** Flag pattern `01111110`. Bit stuffing: insert `0` after five consecutive
   `1`S in the data.
4. **Clock-based:** Manchester encoding provides self-clocking and frame boundaries.

### 3.2 Error Detection and Correction

**Error types:** Single-bit errors (one bit flipped), burst errors (multiple consecutive bits).

**Hamming distance.** $d(x, y)$ is the number of bit positions where codewords $x$ and $y$ differ.
The minimum distance $d_{\min}$ determines capability:

- Detect up to $d_{\min} - 1$ errors.
- Correct up to $\lfloor(d_{\min} - 1)/2\rfloor$ errors.

**Hamming code.** Adds $r$ parity bits to $m$ data bits where $2^r \geq m + r + 1$. Each parity bit
Covers positions whose binary representation has a `1` in a specific bit position.

**Example (Hamming(7,4)).** 4 data bits, 3 parity bits. $d_{\min} = 3$: detects 2 errors,
corrects 1.

<details>
<summary>Worked Example: Hamming(7,4) Encoding and Error Correction</summary>

**Encoding.** Transmit data bits $d_1 d_2 d_3 d_4 = 1011$.

Codeword positions (1-indexed): $p_1\; p_2\; d_1\; p_3\; d_2\; d_3\; d_4$. Place data bits: position
3 = 1, position 5 = 0, position 6 = 1, position 7 = 1.

Parity bits cover positions whose binary index has a 1 in the corresponding bit:

$p_1$ covers positions with bit 0 set: {1, 3, 5, 7}. $p_2$ covers positions with bit 1 set: {2, 3,
6, 7}. $p_3$ covers positions with bit 2 set: {4, 5, 6, 7}.

Calculate parity bits (even parity):

$p_1$: positions 1, 3, 5, 7 $\to$ data at 3, 5, 7 are 1, 0, 1. Sum = 0 (even) $\to$ $p_1 = 0$.

$p_2$: positions 2, 3, 6, 7 $\to$ data at 3, 6, 7 are 1, 1, 1. Sum = 1 (odd) $\to$ $p_2 = 1$.

$p_3$: positions 4, 5, 6, 7 $\to$ data at 5, 6, 7 are 0, 1, 1. Sum = 0 (even) $\to$ $p_3 = 0$.

**Transmitted codeword:** $0\;1\;1\;0\;0\;1\;1$

**Error correction.** Suppose bit 6 is flipped during transmission. Received word:
$0\;1\;1\;0\;0\;0\;1$

Compute syndrome bits:

$S_1$: check positions 1, 3, 5, 7 $\to$ $0 + 1 + 0 + 1 = 0$ (even, OK).

$S_2$: check positions 2, 3, 6, 7 $\to$ $1 + 1 + 0 + 1 = 1$ (odd, error).

$S_3$: check positions 4, 5, 6, 7 $\to$ $0 + 0 + 0 + 1 = 1$ (odd, error).

Syndrome = $S_3 S_2 S_1 = 110_2 = 6$. The error is at position 6. Flip bit 6: Corrected word =
$0\;1\;1\;0\;0\;1\;1$.

**Answer:** The Hamming code detects and corrects the single-bit error at position 6.

</details>

**Cyclic Redundancy Check (CRC).** A polynomial code widely used (Ethernet, Wi-Fi, USB).

1. Append $r$ zero bits to the message ($r$ = degree of generator polynomial $G(x)$).
2. Divide the augmented message polynomial by $G(x)$ using modulo-2 arithmetic.
3. Append the remainder (CRC) to the original message.
4. Receiver divides by $G(x)$; zero remainder means no error.

**Theorem 3.1.** CRC detects all single-bit errors, all double-bit errors (if $G(x)$ has factor
$(x+1)$), all odd-numbered errors, and all burst errors of length $\leq r$.

<details>
<summary>Worked Example: CRC Polynomial Division</summary>

Compute the CRC for message `110100` using generator $G(x) = x^3 + x + 1$ (binary `1011`Degree
$r = 3$).

**Step 1:** Append $r = 3$ zero bits $\to$ augmented message: `110100000`.

**Step 2:** Perform modulo-2 (XOR) polynomial division.

$$M(x) = x^5 + x^4 + x^2, \quad G(x) = x^3 + x + 1$$

$$M_{\mathrm{aug}(x) = x^8 + x^7 + x^5}$$

Division steps:

1. $x^8 / x^3 = x^5$. Multiply: $x^5 G(x) = x^8 + x^6 + x^5$. Subtract (XOR):
   $(x^8 + x^7 + x^5) + (x^8 + x^6 + x^5) = x^7 + x^6$.

2. $x^7 / x^3 = x^4$. Multiply: $x^4 G(x) = x^7 + x^5 + x^4$. Subtract:
   $(x^7 + x^6) + (x^7 + x^5 + x^4) = x^6 + x^5 + x^4$.

3. $x^6 / x^3 = x^3$. Multiply: $x^3 G(x) = x^6 + x^4 + x^3$. Subtract:
   $(x^6 + x^5 + x^4) + (x^6 + x^4 + x^3) = x^5 + x^3$.

4. $x^5 / x^3 = x^2$. Multiply: $x^2 G(x) = x^5 + x^3 + x^2$. Subtract:
   $(x^5 + x^3) + (x^5 + x^3 + x^2) = x^2$.

5. Degree of $x^2$ (which is 2) is less than degree of $G(x)$ (which is 3). Stop.

**Remainder:** $x^2$ = binary `100`.

**Step 3:** Append remainder to original message. Transmitted codeword: `110100100`.

**Verification.** The receiver divides `110100100` by `1011`. Since $x^2$ was chosen as the
remainder, $(x^8 + x^7 + x^5) + x^2 = (x^5 + x^4 + x^3 + x^2) \cdot G(x)$So the division yields
remainder 0, Confirming no error.

</details>

### 3.3 MAC Protocols

**ALOHA.** Transmit whenever ready; if collision, wait random time and retransmit.

- **Pure ALOHA:** Throughput $S = G e^{-2G}$Maximum at $G = 0.5$:
  $S_{\max} = 1/(2e) \approx 18.4\%$.
- **Slotted ALOHA:** Time divided into slots; transmit at slot boundary. $S = G e^{-G}$Maximum at
  $G = 1$: $S_{\max} = 1/e \approx 36.8\%$.

**CSMA (Carrier Sense Multiple Access).** Listen before transmitting.

- **1-persistent:** If busy, wait; transmit immediately when idle. High collision probability.
- **Non-persistent:** If busy, wait random time before sensing again. Lower collision, higher delay.
- **p-persistent:** If busy, wait until idle, then transmit with probability $p$.

**CSMA/CD (Collision Detection).** Used in wired Ethernet (802.3). Transmit and listen
simultaneously; If collision detected, send jam signal and wait random backoff.

- **Binary exponential backoff:** After $n$-th collision, choose random
  $k \in \\{0, 1, \ldots,
 2^{\min(n,10)} - 1\\}$ and wait $K \times 512$ bit times.
- **Minimum frame size:** Must be at least $2\tau$ where $\tau$ is the round-trip propagation delay.
  For 10 Mbps Ethernet with $\tau = 51.2\;\mu\mathrm{s}$: minimum frame = 64 bytes.

**CSMA/CD collision analysis.** The sender must still be transmitting when a collision signal
returns From the farthest point on the network. The worst-case round-trip propagation time is
$2\tau$Where $\tau = d/v$ ($d$ is the maximum cable length, $v$ is the signal propagation speed,
$2 \times 10^8$ m/s in copper). The minimum frame size is therefore:

$$L_{\min} = R \times 2\tau = \frac{2Rd}{v}$$

Where $R$ is the data rate.

<details>
<summary>Worked Example: CSMA/CD Minimum Frame Size</summary>

A 100 Mbps Ethernet network uses a maximum cable length of 2 km. Signal propagation speed is
$2 \times 10^8$ m/s. Calculate the minimum frame size.

One-way propagation delay: $$\tau = \frac{d}{v} = \frac{2000}{2 \times 10^8} = 10\;\mu\mathrm{s}$$

Worst case: collision occurs at the far end, signal must travel back. Total time is
$2\tau = 20\;\mu\mathrm{s}$.

The sender must still be transmitting after $2\tau$:
$$L_{\min} = R \times 2\tau = 100 \times 10^6 \times 20 \times 10^{-6} = 2000\;\mathrm{bits} = 250\;\mathrm{bytes}$$

**Answer:** The minimum frame size is 250 bytes (2000 bits). Any frame shorter than this risks an
Undetected collision.

</details>

**CSMA/CA (Collision Avoidance).** Used in wireless (802.11). Cannot detect collisions while
Transmitting (half-duplex radio). Uses RTS/CTS handshake and inter-frame spacing (IFS).

**Wi-Fi (IEEE 802.11).** Wireless LAN standards operating in the 2.4 GHz, 5 GHz, and 6 GHz bands.

| Standard | Frequency | Max PHY Rate | Channel Width |
| -------- | --------- | ------------ | ------------- |
| 802.11a  | 5 GHz     | 54 Mbps      | 20 MHz        |
| 802.11b  | 2.4 GHz   | 11 Mbps      | 22 MHz        |
| 802.11g  | 2.4 GHz   | 54 Mbps      | 20 MHz        |
| 802.11n  | 2.4/5 GHz | 600 Mbps     | 20/40 MHz     |
| 802.11ac | 5 GHz     | 6.93 Gbps    | 20-160 MHz    |
| 802.11ax | 2.4/5/6   | 9.6 Gbps     | 20-160 MHz    |

**Key 802.11 mechanisms:**

- **DCF (Distributed Coordination Function):** CSMA/CA with random backoff. IFS priorities: SIFS
  (shortest, for ACKs/CTS), PIFS (PCF), DIFS (standard data), EIFS (after error).
- **RTS/CTS:** Sender sends Request To Send, receiver replies with Clear To Send. Reduces hidden
  terminal problem.
- **RTS/CTS pseudocode:**

```c
void wifi_send(frame *f) {
    while (channel_busy()) wait(DIFS);
    send_RTS();
    wait_for_CTS(timeout);
    if (received_CTS()) {
        wait(SIFS);
        send_data(f);
        wait(SIFS);
        wait_for_ACK(timeout);
        if (!received_ACK()) {
            backoff = choose_random(0, 2^min(n,10) - 1) * slot_time;
            wait(backoff);
            retry_count++;
        }
    } else {
        backoff = choose_random(0, 2^min(n,10) - 1) * slot_time;
        wait(backoff);
    }
}
```

- **MIMO:** Multiple-Input Multiple-Output. Uses multiple antennas for spatial multiplexing
  (simultaneous streams) and diversity (reliability). 802.11n supports up to 4x4 MIMO.
- **OFDM/OFDMA:** Orthogonal Frequency-Division Multiplexing divides the channel into subcarriers.
  OFDMA (802.11ax) allows scheduling different clients on different subcarriers simultaneously.
- **BSS (Basic Service Set):** An access point (AP) and its associated stations. ESS (Extended
  Service Set): multiple BSSs connected by a distribution system.

### 3.4 Ethernet (IEEE 802.3)

**Frame format:**

| Field    | Size      | Description                         |
| -------- | --------- | ----------------------------------- |
| Preamble | 7 bytes   | Alternating 1s and 0s for sync      |
| SFD      | 1 byte    | Start of frame delimiter (10101011) |
| Dest MAC | 6 bytes   | Destination MAC address             |
| Src MAC  | 6 bytes   | Source MAC address                  |
| Type/Len | 2 bytes   | EtherType or frame length           |
| Payload  | 46-1500 B | Data                                |
| FCS      | 4 bytes   | Frame check sequence (CRC-32)       |

**MAC address:** 48-bit globally unique address. First 24 bits: OUI (organisation). Last 24 bits:
Device-specific. Broadcast: `FF:FF:FF:FF:FF:FF`. Multicast: least significant bit of the first Octet
is 1.

**Ethernet evolution:**

| Standard     | Speed    | Medium            | Max Segment |
| ------------ | -------- | ----------------- | ----------- |
| 10BASE-T     | 10 Mbps  | Cat3+ UTP         | 100 m       |
| 100BASE-TX   | 100 Mbps | Cat5+ UTP         | 100 m       |
| 1000BASE-T   | 1 Gbps   | Cat5e+ UTP        | 100 m       |
| 10GBASE-T    | 10 Gbps  | Cat6a+ UTP        | 100 m       |
| 10GBASE-SR   | 10 Gbps  | Multi-mode fibre  | 26-300 m    |
| 10GBASE-LR   | 10 Gbps  | Single-mode fibre | 10 km       |
| 100GBASE-SR4 | 100 Gbps | Multi-mode fibre  | 70-100 m    |
| 400GBASE-DR4 | 400 Gbps | Single-mode fibre | 500 m       |

**Theorem 3.3 (CSMA/CD efficiency).** The maximum efficiency of CSMA/CD is:

$$\eta = \frac{1}{1 + 5a}$$

Where $a = \tau / T_f$ is the ratio of propagation delay to frame transmission time.

_Proof._ In the worst case, a collision wastes $2\tau$ time and one frame transmission time $T_f$.
The useful time per cycle is $T_f$. The total cycle time is $T_f + 2\tau$ in the worst case, but On
average (with the binary exponential backoff), the effective overhead is approximately $5\tau$. Thus
$\eta = T_f / (T_f + 5\tau) = 1 / (1 + 5a)$. $\blacksquare$

When $a \ll 1$ (large frames or short distances), efficiency approaches 1. When $a$ approaches 1
(short frames or long distances), efficiency drops significantly. This is why minimum frame sizes
Are imposed.

### 3.5 VLANs

A **Virtual LAN (VLAN)** logically segments a physical LAN into separate broadcast domains at layer
2, Without requiring separate physical infrastructure.

**802.1Q frame tagging.** A 4-byte tag is inserted after the source MAC address:

| Field         | Size    | Description                      |
| ------------- | ------- | -------------------------------- |
| TPID          | 16 bits | Tag Protocol Identifier (0x8100) |
| PCP           | 3 bits  | Priority Code Point (802.1p)     |
| DEI           | 1 bit   | Drop Eligible Indicator          |
| VLAN ID (VID) | 12 bits | VLAN identifier (1-4094)         |

**Trunking.** Links between switches that carry traffic for multiple VLANs. Frames are tagged with
Their VLAN ID on trunk links.

**Benefits:** Security (isolation between VLANs), broadcast containment, flexible network
management, Reduced cost (no need for separate switches per segment).

### 3.6 Switching

**Circuit switching.** A dedicated path is established for the entire duration. Used in traditional
Telephone networks. Constant bandwidth but inefficient for bursty data.

**Packet switching.** Data divided into packets, each routed independently.

- **Datagram:** Each packet routed independently (IP). No setup; may arrive out of order.
- **Virtual circuit:** Logical path established before data transfer (ATM, MPLS). Ordered delivery.

**Theorem 3.2.** Packet switching achieves higher utilisation than circuit switching for bursty
Traffic.

_Proof._ Circuit switching reserves the peak rate per connection. Packet switching uses statistical
Multiplexing: the sum of peak rates can exceed link capacity as long as the average aggregate rate
Does not. $\blacksquare$

**Switch forwarding methods.** A layer-2 switch can forward frames using two strategies:

| Aspect             | Store-and-Forward                 | Cut-Through                         |
| ------------------ | --------------------------------- | ----------------------------------- |
| Operation          | Receives entire frame first       | Reads destination MAC only          |
| Latency            | $L/R + d_{\mathrm{prop}}$ per hop | $L_h/R + d_{\mathrm{prop}}$ per hop |
| Error detection    | Can check FCS before forward      | Cannot check FCS                    |
| Memory requirement | Must buffer full frame            | Only needs header buffer            |
| Use case           | General-purpose switching         | Low-latency environments            |

Where $L$ is the full frame length, $L_h$ is the header length (14 bytes for Ethernet), $R$ is the
Link rate, and $d_{\mathrm{prop}}$ is the propagation delay.

For a path through $n$ switches:

$$\mathrm{Store}\mathrm{-and\mathrm}{-forward\;latency} = n \cdot \frac{L}{R} + d_{\mathrm{total}}$$

$$\mathrm{Cut}\mathrm{-through}\;latency} = \frac{L}{R} + (n-1) \cdot \frac{L_h}{R} + d_{\mathrm{total}$$

<details>
<summary>Worked Example: Switching Latency Comparison</summary>

A 1500-byte frame traverses 3 store-and-forward switches on 1 Gbps links. Each link has 5 $\mu$S
Propagation delay.

**Store-and-forward:**

$$\mathrm{Latency} = 3 \times \frac{1500 \times 8}{10^9} + 3 \times 5 \times 10^{-6} = 36\;\mu\mathrm{s} + 15\;\mu\mathrm{s} = 51\;\mu\mathrm{s}$$

**Cut-through:**

$$\mathrm{Latency} = \frac{1500 \times 8}{10^9} + 2 \times \frac{14 \times 8}{10^9} + 3 \times 5 \times 10^{-6} = 12\;\mu\mathrm{s} + 0.224\;\mu\mathrm{s} + 15\;\mu\mathrm{s} = 27.2\;\mu\mathrm{s}$$

**Answer:** Cut-through saves approximately 23.8 $\mu$S (47% reduction) for this scenario, but it
Cannot detect corrupted frames before forwarding them.

</details>

