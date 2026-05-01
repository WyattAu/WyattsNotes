---
title: Computer Networks
description:
  University-level notes on Computer Networks: 1. Network Models; 1.1 The OSI
  Reference Model; 1.2 The TCP/IP Model; 1.3 Comparison.
date: 2026-04-24T00:00:00.000Z
tags:
  - Computing
  - University
categories:
  - Computing
slug: computer-networks
---

## 1. Network Models

### 1.1 The OSI Reference Model

The **Open Systems Interconnection (OSI)** model defines seven layers of abstraction for network
communication:

| Layer | Name        | Function                                     | Examples                   |
| ----- | ----------- | -------------------------------------------- | -------------------------- |
| 7     | Application | User-facing protocols                        | HTTP, DNS, SMTP, FTP       |
| 6     | Presentation| Data representation, encryption, compression | TLS, SSL, JPEG, ASCII     |
| 5     | Session     | Dialog control, synchronisation              | NetBIOS, RPC, PPTP         |
| 4     | Transport   | End-to-end reliability, flow control         | TCP, UDP, SCTP             |
| 3     | Network     | Logical addressing, routing                  | IP, ICMP, ARP, OSPF        |
| 2     | Data Link   | Framing, error detection, MAC                | Ethernet, Wi-Fi, PPP       |
| 1     | Physical    | Bit transmission on the medium               | Cables, hubs, radio waves  |

**Encapsulation.** Each layer adds its own header (and possibly trailer) to the data from the layer
above, forming a **protocol data unit (PDU)**:

$$\mathrm{Data} \xrightarrow{+\mathrm{th}} \mathrm{Segment} \xrightarrow{+\mathrm{nh}} \mathrm{Packet} \xrightarrow{+\mathrm{fh+ft}} \mathrm{Frame} \xrightarrow{\mathrm{encode}} \mathrm{Bits}$$

### 1.2 The TCP/IP Model

The **TCP/IP** model is the practical standard used on the Internet, with four layers:

| Layer          | OSI Equivalent | Protocols                    |
| -------------- | -------------- | ---------------------------- |
| Application    | 5, 6, 7        | HTTP, DNS, SMTP, TLS         |
| Transport      | 4              | TCP, UDP                     |
| Internet       | 3              | IP, ICMP, ARP                |
| Network Access | 1, 2           | Ethernet, Wi-Fi, MAC         |

### 1.3 Comparison

The OSI model is a theoretical reference used for teaching and design. The TCP/IP model reflects
actual protocol implementations. The session and presentation layers in OSI are absorbed into the
application layer in TCP/IP.

**Detailed OSI vs TCP/IP comparison:**

| Aspect                | OSI Model                          | TCP/IP Model                      |
| --------------------- | ---------------------------------- | --------------------------------- |
| Layers                | 7                                  | 4                                 |
| Nature                | Theoretical reference model        | Practical implementation model    |
| Session/Presentation  | Separate layers (5, 6)             | Merged into Application layer     |
| Network layer         | Connection-oriented and connectionless | Primarily connectionless (IP)   |
| Transport layer       | TP4 (reliable) and TP0 (unreliable)| TCP (reliable) and UDP (unreliable) |
| Standardisation       | ISO/IEC                            | IETF (RFCs)                       |
| Adopted by            | Academic, government               | The global Internet               |
| Protocol independence | Layer-independent protocols        | Protocols tightly coupled         |
| Service interface     | Precisely defined (SAPs)           | Loosely defined                   |
| Release               | 1984                               | Developed 1970s, formalised 1980s |

### 1.4 Protocol Data Unit Encapsulation

Each layer encapsulates data from the layer above by prepending a header (and appending a trailer at
layer 2). The resulting data unit is named according to its layer:

| Layer         | PDU Name  | Header Added        | Trailer | Size (typical) |
| ------------- | --------- | ------------------- | ------- | -------------- |
| Application   | Data      | Application-specific| None    | Variable       |
| Transport     | Segment   | TCP/UDP header      | None    | 20--60 bytes   |
| Network       | Packet    | IP header           | None    | 20--60 bytes   |
| Data Link     | Frame     | MAC header          | FCS     | 14--18 + 4 B   |
| Physical      | Bits      | None (encoding)     | None    | N/A            |

**Encapsulation walkthrough.** Consider sending an HTTP GET request of 500 bytes through TCP/IP over
Ethernet:

1. **Application layer:** HTTP creates a request message (500 bytes).
2. **Transport layer:** TCP adds a 20-byte header. Segment = 520 bytes.
3. **Network layer:** IP adds a 20-byte header. Packet = 540 bytes.
4. **Data Link layer:** Ethernet adds 14-byte header + 4-byte FCS. Frame = 558 bytes.
5. **Physical layer:** Frame is encoded into bits and transmitted on the medium.

**Decapsulation.** At the receiver, each layer strips its corresponding header before passing data
to the layer above. This process is the reverse of encapsulation.

## 2. Physical Layer

### 2.1 Transmission Media

**Guided media:** Twisted pair (UTP, STP), coaxial cable, fibre optic.

- **Twisted pair:** Category 5e/6/6a for Ethernet. Bandwidth up to 10 Gbps (Cat 6a, 100 m).
- **Fibre optic:** Single-mode (long distance, laser) and multi-mode (shorter distance, LED).
  Bandwidth up to 100+ Gbps.

**Unguided media:** Radio waves, microwaves, infrared. Subject to attenuation, interference, and
line-of-sight constraints.

### 2.2 Signaling

**Analog vs. digital.** Analog signals vary continuously; digital signals are discrete.

- **Bandwidth:** Range of frequencies a channel can carry, measured in Hz.
- **Bit rate:** Number of bits transmitted per second (bps).
- **Nyquist theorem:** For a noiseless channel of bandwidth $H$ Hz with $V$ discrete signal levels:

$$C = 2H \log_2 V \;\mathrm{bps}$$

**Theorem 2.1 (Nyquist--Shannon Sampling Theorem).** A bandlimited signal of bandwidth $H$ Hz can
be perfectly reconstructed from samples taken at a rate of at least $2H$ samples per second.

*Proof.* Let $x(t)$ be a signal with Fourier transform $X(f)$ such that $X(f) = 0$ for
$\lvert f \rvert \gt H$. Sampling at rate $f_s$ produces $x_s(t) = x(t) \cdot \sum_{n=-\infty}^{\infty} \delta(t - nT_s)$
where $T_s = 1/f_s$. In the frequency domain, $X_s(f) = f_s \sum_{k=-\infty}^{\infty} X(f - kf_s)$.
When $f_s \geq 2H$, the spectral copies do not overlap, and $x(t)$ can be recovered by an ideal
lowpass filter with cutoff $H$. When $f_s \lt 2H$, aliasing occurs and perfect recovery is
impossible. $\blacksquare$

- **Shannon capacity:** For a noisy channel with signal-to-noise ratio $\mathrm{SNR}$:

$$C = H \log_2(1 + \mathrm{SNR}) \;\mathrm{bps}$$

**Theorem 2.2 (Shannon--Hartley Theorem).** The channel capacity $C$ is the maximum error-free data
rate achievable on a channel of bandwidth $H$ with signal-to-noise ratio $\mathrm{SNR}$.

*Proof.* For a bandlimited AWGN channel, the number of distinguishable signal levels is constrained
by the noise power. Let $\mathrm{SNR} = S/N$ where $S$ is signal power and $N = N_0 H$ is noise
power. The number of distinguishable amplitude levels is proportional to $\sqrt{1 + \mathrm{SNR}}$.
With $\log_2$ levels per signal element and $2H$ signal elements per second (Nyquist), the maximum
error-free rate is $C = 2H \cdot \tfrac{1}{2}\log_2(1 + \mathrm{SNR}) = H \log_2(1 + \mathrm{SNR})$.
$\blacksquare$

**Example.** A telephone line has $H = 3100$ Hz and $\mathrm{SNR} = 3162$ (35 dB). Shannon limit:
$C = 3100 \times \log_2(3163) \approx 34860$ bps.

<details>
<summary>Worked Example: Nyquist Bit Rate</summary>

A noiseless channel has a bandwidth of 4000 Hz. How many signal levels are needed to achieve a data
rate of 56000 bps?

Using Nyquist's formula:
$$C = 2H \log_2 V$$
$$56000 = 2 \times 4000 \times \log_2 V$$
$$\log_2 V = \frac{56000}{8000} = 7$$
$$V = 2^7 = 128$$

**Answer:** 128 signal levels are required.

</details>

<details>
<summary>Worked Example: Shannon Channel Capacity</summary>

A satellite channel has a bandwidth of 36 MHz and an SNR of 30 dB. Find the maximum data rate.

First convert SNR from dB to linear:
$$\mathrm{SNR}_{\mathrm{linear}} = 10^{30/10} = 1000$$

Apply Shannon's formula:
$$C = H \log_2(1 + \mathrm{SNR}) = 36 \times 10^6 \times \log_2(1001)$$
$$\log_2(1001) = \frac{\ln(1001)}{\ln(2)} \approx 9.967$$
$$C = 36 \times 10^6 \times 9.967 \approx 358.8 \times 10^6 \;\mathrm{bps} \approx 358.8\;\mathrm{Mbps}$$

**Answer:** The maximum achievable data rate is approximately 358.8 Mbps. Any attempt to exceed
this rate will result in an unacceptable error rate regardless of the modulation scheme used.

</details>

<details>
<summary>Worked Example: Comparing Nyquist and Shannon Limits</summary>

A channel has $H = 6000$ Hz and $\mathrm{SNR} = 1023$ (30 dB).

**Shannon limit:**
$$C = 6000 \times \log_2(1024) = 6000 \times 10 = 60000\;\mathrm{bps}$$

**Nyquist limit with $V = 8$:**
$$C = 2 \times 6000 \times \log_2(8) = 12000 \times 3 = 36000\;\mathrm{bps}$$

The Nyquist limit (36 kbps) is below the Shannon limit (60 kbps), so 8 signal levels are
achievable. With $V = 64$:
$$C = 12000 \times 6 = 72000\;\mathrm{bps}$$

This exceeds Shannon's limit of 60 kbps, meaning 64 levels would produce errors. The maximum
number of levels consistent with Shannon:
$$C_{\mathrm{Shannon}} = 2H \log_2 V \implies 60000 = 12000 \times \log_2 V \implies V = 32$$

**Answer:** At most 32 signal levels can be used reliably on this channel.

</details>

:::caution Common Pitfall
Bandwidth (Hz) and bit rate (bps) are different quantities. Bandwidth is the range of frequencies
the channel can carry; bit rate is the number of bits transmitted per second. Shannon's theorem
relates the maximum bit rate to bandwidth and SNR, but they are not interchangeable.
:::

### 2.3 Multiplexing

**Frequency-Division Multiplexing (FDM).** Divide bandwidth into non-overlapping frequency bands.
Each user gets a dedicated band. Used in radio and cable TV.

**Time-Division Multiplexing (TDM).** Divide time into fixed slots; each user gets a slot per cycle.
Synchronous TDM assigns slots statically; statistical TDM assigns dynamically based on demand.

**Wavelength-Division Multiplexing (WDM).** FDM for fibre optics. Multiple wavelengths share a
single fibre. Dense WDM (DWDM) supports 80+ channels.

**Code-Division Multiple Access (CDMA).** Each user is assigned a unique code. All users transmit
simultaneously on the same frequency; codes are mathematically orthogonal so receivers can isolate
their signal.

### 2.4 Modulation

**Digital-to-analog modulation:** ASK (Amplitude Shift Keying), FSK (Frequency Shift Keying), PSK
(Phase Shift Keying). QAM combines ASK and PSK for higher data rates.

- 16-QAM encodes 4 bits per symbol (16 combinations of amplitude and phase).
- 256-QAM encodes 8 bits per symbol.
- 1024-QAM encodes 10 bits per symbol (used in Wi-Fi 6).

**Theorem 2.3 (QAM spectral efficiency).** An $M$-ary QAM scheme where $M = 2^{2k}$ has a spectral
efficiency of $2k$ bits/symbol, i.e., the bit rate equals $2k \times B$ where $B$ is the bandwidth
in Hz.

*Proof.* QAM modulates both amplitude and phase of a carrier. With $M$ symbols, each symbol carries
$\log_2 M = 2k$ bits. The symbol rate equals the bandwidth $B$ (Nyquist: 2 symbols/Hz for
baseband, 1 symbol/Hz for passband). Therefore bit rate = $2k \times B$. $\blacksquare$

<details>
<summary>Worked Example: QAM Data Rate Calculation</summary>

A 256-QAM modem operates over a 20 MHz channel. What is the maximum data rate?

$$M = 256, \quad \log_2 256 = 8 \;\mathrm{bits/symbol}$$

$$\mathrm{Bit\;rate} = 8 \times 20 \times 10^6 = 160\;\mathrm{Mbps}$$

If the channel has SNR = 24 dB, verify against Shannon:

$$\mathrm{SNR}_{\mathrm{linear}} = 10^{24/10} = 251.2$$
$$C = 20 \times 10^6 \times \log_2(252.2) \approx 20 \times 10^6 \times 7.98 \approx 159.6\;\mathrm{Mbps}$$

The Nyquist-based rate (160 Mbps) is very close to the Shannon limit (159.6 Mbps), meaning 256-QAM
is near-optimal for this channel but has almost no margin for noise or interference.

</details>

### 2.5 Line Coding

Line codes map binary data to signals suitable for the physical medium.

| Encoding       | Description                                    | Example            |
| -------------- | ---------------------------------------------- | ------------------ |
| NRZ (L)        | High = 1, Low = 0                              | USB                |
| NRZI           | Transition = 1, no transition = 0              | USB                |
| Manchester     | Transition at mid-bit; low-to-high = 0         | 802.3 (10 Mbps)    |
| Differential Manchester | Transition at start of 0 bit only | 802.5 (Token Ring) |
| 4B/5B          | 4 data bits encoded as 5-bit codes             | 100BASE-TX         |
| 8B/10B         | 8 data bits encoded as 10-bit codes            | Gigabit Ethernet   |
| 64B/66B        | 64 data bits encoded as 66-bit codes           | 10GBASE-R          |

**Spectral efficiency.** Manchester encoding doubles the bandwidth requirement (two signal levels per
bit). 4B/5B adds 25% overhead. 8B/10B adds 25%. 64B/66B adds only 3% overhead.

**Scrambling.** High-density bipolar 3 (HDB3) and other scrambling techniques ensure sufficient
transitions for clock recovery, preventing long runs of identical bits.

## 3. Data Link Layer

### 3.1 Framing

The data link layer receives a bit stream and divides it into manageable **frames**.

**Framing methods:**

1. **Byte count:** First field specifies frame length. Vulnerable to corrupted count.
2. **Flag bytes:** Special flag byte (`0x7E` for HDLC) marks start/end. Byte stuffing with escape
   byte (`0x7D`) prevents ambiguity.
3. **Bit-oriented flags:** Flag pattern `01111110`. Bit stuffing: insert `0` after five consecutive
   `1`s in the data.
4. **Clock-based:** Manchester encoding provides self-clocking and frame boundaries.

### 3.2 Error Detection and Correction

**Error types:** Single-bit errors (one bit flipped), burst errors (multiple consecutive bits).

**Hamming distance.** $d(x, y)$ is the number of bit positions where codewords $x$ and $y$ differ.
The minimum distance $d_{\min}$ determines capability:

- Detect up to $d_{\min} - 1$ errors.
- Correct up to $\lfloor(d_{\min} - 1)/2\rfloor$ errors.

**Hamming code.** Adds $r$ parity bits to $m$ data bits where $2^r \geq m + r + 1$. Each parity bit
covers positions whose binary representation has a `1` in a specific bit position.

**Example (Hamming(7,4)).** 4 data bits, 3 parity bits. $d_{\min} = 3$: detects 2 errors, corrects 1.

<details>
<summary>Worked Example: Hamming(7,4) Encoding and Error Correction</summary>

**Encoding.** Transmit data bits $d_1 d_2 d_3 d_4 = 1011$.

Codeword positions (1-indexed): $p_1\; p_2\; d_1\; p_3\; d_2\; d_3\; d_4$.
Place data bits: position 3 = 1, position 5 = 0, position 6 = 1, position 7 = 1.

Parity bits cover positions whose binary index has a 1 in the corresponding bit:

$p_1$ covers positions with bit 0 set: {1, 3, 5, 7}.
$p_2$ covers positions with bit 1 set: {2, 3, 6, 7}.
$p_3$ covers positions with bit 2 set: {4, 5, 6, 7}.

Calculate parity bits (even parity):

$p_1$: positions 1, 3, 5, 7 $\to$ data at 3, 5, 7 are 1, 0, 1. Sum = 0 (even) $\to$ $p_1 = 0$.

$p_2$: positions 2, 3, 6, 7 $\to$ data at 3, 6, 7 are 1, 1, 1. Sum = 1 (odd) $\to$ $p_2 = 1$.

$p_3$: positions 4, 5, 6, 7 $\to$ data at 5, 6, 7 are 0, 1, 1. Sum = 0 (even) $\to$ $p_3 = 0$.

**Transmitted codeword:** $0\;1\;1\;0\;0\;1\;1$

**Error correction.** Suppose bit 6 is flipped during transmission.
Received word: $0\;1\;1\;0\;0\;0\;1$

Compute syndrome bits:

$S_1$: check positions 1, 3, 5, 7 $\to$ $0 + 1 + 0 + 1 = 0$ (even, OK).

$S_2$: check positions 2, 3, 6, 7 $\to$ $1 + 1 + 0 + 1 = 1$ (odd, error).

$S_3$: check positions 4, 5, 6, 7 $\to$ $0 + 0 + 0 + 1 = 1$ (odd, error).

Syndrome = $S_3 S_2 S_1 = 110_2 = 6$. The error is at position 6. Flip bit 6:
corrected word = $0\;1\;1\;0\;0\;1\;1$.

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

Compute the CRC for message `110100` using generator $G(x) = x^3 + x + 1$ (binary `1011`, degree
$r = 3$).

**Step 1:** Append $r = 3$ zero bits $\to$ augmented message: `110100000`.

**Step 2:** Perform modulo-2 (XOR) polynomial division.

$$M(x) = x^5 + x^4 + x^2, \quad G(x) = x^3 + x + 1$$

$$M_{\mathrm{aug}}(x) = x^8 + x^7 + x^5$$

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

**Verification.** The receiver divides `110100100` by `1011`. Since $x^2$ was chosen as the remainder,
$(x^8 + x^7 + x^5) + x^2 = (x^5 + x^4 + x^3 + x^2) \cdot G(x)$, so the division yields remainder 0,
confirming no error.

</details>

### 3.3 MAC Protocols

**ALOHA.** Transmit whenever ready; if collision, wait random time and retransmit.

- **Pure ALOHA:** Throughput $S = G e^{-2G}$, maximum at $G = 0.5$: $S_{\max} = 1/(2e) \approx 18.4\%$.
- **Slotted ALOHA:** Time divided into slots; transmit at slot boundary. $S = G e^{-G}$, maximum at
  $G = 1$: $S_{\max} = 1/e \approx 36.8\%$.

**CSMA (Carrier Sense Multiple Access).** Listen before transmitting.

- **1-persistent:** If busy, wait; transmit immediately when idle. High collision probability.
- **Non-persistent:** If busy, wait random time before sensing again. Lower collision, higher delay.
- **p-persistent:** If busy, wait until idle, then transmit with probability $p$.

**CSMA/CD (Collision Detection).** Used in wired Ethernet (802.3). Transmit and listen simultaneously;
if collision detected, send jam signal and wait random backoff.

- **Binary exponential backoff:** After $n$-th collision, choose random $k \in \\{0, 1, \ldots,
  2^{\min(n,10)} - 1\\}$ and wait $k \times 512$ bit times.
- **Minimum frame size:** Must be at least $2\tau$ where $\tau$ is the round-trip propagation delay.
  For 10 Mbps Ethernet with $\tau = 51.2\;\mu\mathrm{s}$: minimum frame = 64 bytes.

**CSMA/CD collision analysis.** The sender must still be transmitting when a collision signal returns
from the farthest point on the network. The worst-case round-trip propagation time is $2\tau$, where
$\tau = d/v$ ($d$ is the maximum cable length, $v$ is the signal propagation speed, typically
$2 \times 10^8$ m/s in copper). The minimum frame size is therefore:

$$L_{\min} = R \times 2\tau = \frac{2Rd}{v}$$

where $R$ is the data rate.

<details>
<summary>Worked Example: CSMA/CD Minimum Frame Size</summary>

A 100 Mbps Ethernet network uses a maximum cable length of 2 km. Signal propagation speed is
$2 \times 10^8$ m/s. Calculate the minimum frame size.

One-way propagation delay:
$$\tau = \frac{d}{v} = \frac{2000}{2 \times 10^8} = 10\;\mu\mathrm{s}$$

Worst case: collision occurs at the far end, signal must travel back. Total time is $2\tau = 20\;\mu\mathrm{s}$.

The sender must still be transmitting after $2\tau$:
$$L_{\min} = R \times 2\tau = 100 \times 10^6 \times 20 \times 10^{-6} = 2000\;\mathrm{bits} = 250\;\mathrm{bytes}$$

**Answer:** The minimum frame size is 250 bytes (2000 bits). Any frame shorter than this risks an
undetected collision.

</details>

**CSMA/CA (Collision Avoidance).** Used in wireless (802.11). Cannot detect collisions while
transmitting (half-duplex radio). Uses RTS/CTS handshake and inter-frame spacing (IFS).

**Wi-Fi (IEEE 802.11).** Wireless LAN standards operating in the 2.4 GHz, 5 GHz, and 6 GHz bands.

| Standard  | Frequency | Max PHY Rate | Channel Width |
| --------- | --------- | ------------ | ------------- |
| 802.11a   | 5 GHz     | 54 Mbps      | 20 MHz        |
| 802.11b   | 2.4 GHz   | 11 Mbps      | 22 MHz        |
| 802.11g   | 2.4 GHz   | 54 Mbps      | 20 MHz        |
| 802.11n   | 2.4/5 GHz | 600 Mbps     | 20/40 MHz     |
| 802.11ac  | 5 GHz     | 6.93 Gbps    | 20-160 MHz    |
| 802.11ax  | 2.4/5/6   | 9.6 Gbps     | 20-160 MHz    |

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

| Field    | Size      | Description                           |
| -------- | --------- | ------------------------------------- |
| Preamble | 7 bytes   | Alternating 1s and 0s for sync        |
| SFD      | 1 byte    | Start of frame delimiter (10101011)   |
| Dest MAC | 6 bytes   | Destination MAC address               |
| Src MAC  | 6 bytes   | Source MAC address                    |
| Type/Len | 2 bytes   | EtherType or frame length             |
| Payload  | 46-1500 B | Data                                  |
| FCS      | 4 bytes   | Frame check sequence (CRC-32)         |

**MAC address:** 48-bit globally unique address. First 24 bits: OUI (organisation). Last 24 bits:
device-specific. Broadcast: `FF:FF:FF:FF:FF:FF`. Multicast: least significant bit of the first
octet is 1.

**Ethernet evolution:**

| Standard     | Speed    | Medium           | Max Segment |
| ------------ | -------- | ---------------- | ----------- |
| 10BASE-T     | 10 Mbps  | Cat3+ UTP        | 100 m       |
| 100BASE-TX   | 100 Mbps | Cat5+ UTP        | 100 m       |
| 1000BASE-T   | 1 Gbps   | Cat5e+ UTP       | 100 m       |
| 10GBASE-T    | 10 Gbps  | Cat6a+ UTP       | 100 m       |
| 10GBASE-SR   | 10 Gbps  | Multi-mode fibre | 26-300 m    |
| 10GBASE-LR   | 10 Gbps  | Single-mode fibre| 10 km       |
| 100GBASE-SR4 | 100 Gbps | Multi-mode fibre | 70-100 m    |
| 400GBASE-DR4 | 400 Gbps| Single-mode fibre| 500 m       |

**Theorem 3.3 (CSMA/CD efficiency).** The maximum efficiency of CSMA/CD is:

$$\eta = \frac{1}{1 + 5a}$$

where $a = \tau / T_f$ is the ratio of propagation delay to frame transmission time.

*Proof.* In the worst case, a collision wastes $2\tau$ time and one frame transmission time $T_f$.
The useful time per cycle is $T_f$. The total cycle time is $T_f + 2\tau$ in the worst case, but
on average (with the binary exponential backoff), the effective overhead is approximately $5\tau$.
Thus $\eta = T_f / (T_f + 5\tau) = 1 / (1 + 5a)$. $\blacksquare$

When $a \ll 1$ (large frames or short distances), efficiency approaches 1. When $a$ approaches 1
(short frames or long distances), efficiency drops significantly. This is why minimum frame sizes
are imposed.

### 3.5 VLANs

A **Virtual LAN (VLAN)** logically segments a physical LAN into separate broadcast domains at layer 2,
without requiring separate physical infrastructure.

**802.1Q frame tagging.** A 4-byte tag is inserted after the source MAC address:

| Field         | Size    | Description                          |
| ------------- | ------- | ------------------------------------ |
| TPID          | 16 bits | Tag Protocol Identifier (0x8100)     |
| PCP           | 3 bits  | Priority Code Point (802.1p)         |
| DEI           | 1 bit   | Drop Eligible Indicator              |
| VLAN ID (VID) | 12 bits | VLAN identifier (1-4094)             |

**Trunking.** Links between switches that carry traffic for multiple VLANs. Frames are tagged with
their VLAN ID on trunk links.

**Benefits:** Security (isolation between VLANs), broadcast containment, flexible network management,
reduced cost (no need for separate switches per segment).

### 3.6 Switching

**Circuit switching.** A dedicated path is established for the entire duration. Used in traditional
telephone networks. Constant bandwidth but inefficient for bursty data.

**Packet switching.** Data divided into packets, each routed independently.

- **Datagram:** Each packet routed independently (IP). No setup; may arrive out of order.
- **Virtual circuit:** Logical path established before data transfer (ATM, MPLS). Ordered delivery.

**Theorem 3.2.** Packet switching achieves higher utilisation than circuit switching for bursty
traffic.

*Proof.* Circuit switching reserves the peak rate per connection. Packet switching uses statistical
multiplexing: the sum of peak rates can exceed link capacity as long as the average aggregate rate
does not. $\blacksquare$

**Switch forwarding methods.** A layer-2 switch can forward frames using two strategies:

| Aspect              | Store-and-Forward            | Cut-Through                  |
| ------------------- | ---------------------------- | ---------------------------- |
| Operation           | Receives entire frame first  | Reads destination MAC only   |
| Latency             | $L/R + d_{\mathrm{prop}}$ per hop | $L_h/R + d_{\mathrm{prop}}$ per hop |
| Error detection     | Can check FCS before forward | Cannot check FCS             |
| Memory requirement  | Must buffer full frame       | Only needs header buffer     |
| Use case            | General-purpose switching    | Low-latency environments     |

where $L$ is the full frame length, $L_h$ is the header length (14 bytes for Ethernet), $R$ is the
link rate, and $d_{\mathrm{prop}}$ is the propagation delay.

For a path through $n$ switches:

$$\mathrm{Store\mathrm{-}and\mathrm{-}forward\;latency} = n \cdot \frac{L}{R} + d_{\mathrm{total}}$$

$$\mathrm{Cut\mathrm{-}through\;latency} = \frac{L}{R} + (n-1) \cdot \frac{L_h}{R} + d_{\mathrm{total}}$$

<details>
<summary>Worked Example: Switching Latency Comparison</summary>

A 1500-byte frame traverses 3 store-and-forward switches on 1 Gbps links. Each link has 5 $\mu$s
propagation delay.

**Store-and-forward:**

$$\mathrm{Latency} = 3 \times \frac{1500 \times 8}{10^9} + 3 \times 5 \times 10^{-6} = 36\;\mu\mathrm{s} + 15\;\mu\mathrm{s} = 51\;\mu\mathrm{s}$$

**Cut-through:**

$$\mathrm{Latency} = \frac{1500 \times 8}{10^9} + 2 \times \frac{14 \times 8}{10^9} + 3 \times 5 \times 10^{-6} = 12\;\mu\mathrm{s} + 0.224\;\mu\mathrm{s} + 15\;\mu\mathrm{s} = 27.2\;\mu\mathrm{s}$$

**Answer:** Cut-through saves approximately 23.8 $\mu$s (47% reduction) for this scenario, but it
cannot detect corrupted frames before forwarding them.

</details>

## 4. Network Layer

### 4.1 IPv4 Addressing

An IPv4 address is a 32-bit number in dotted-decimal: `192.168.1.1`.

**IPv4 header format (20 bytes minimum):**

| Field        | Size    | Description                                   |
| ------------ | ------- | --------------------------------------------- |
| Version      | 4 bits  | Always 4                                      |
| IHL          | 4 bits  | Header length in 32-bit words (5 = 20 bytes)  |
| DSCP/ECN     | 8 bits  | Differentiated services / Explicit congestion |
| Total Length | 16 bits | Entire packet size (header + data)            |
| Identification| 16 bits| Unique ID for fragments of the same datagram  |
| Flags        | 3 bits  | DF (Don't Fragment), MF (More Fragments)      |
| Fragment Off.| 13 bits | Offset in 8-byte units                        |
| TTL          | 8 bits  | Time to live; decremented by each router       |
| Protocol     | 8 bits  | Upper-layer protocol (6=TCP, 17=UDP, 1=ICMP)  |
| Checksum     | 16 bits | Header checksum only                          |
| Src Address  | 32 bits | Source IPv4 address                           |
| Dst Address  | 32 bits | Destination IPv4 address                      |

**Address classes:**

| Class | Range                       | Default Mask     | First Bits |
| ----- | --------------------------- | ---------------- | ---------- |
| A     | 1.0.0.0 -- 126.255.255.255  | 255.0.0.0        | 0          |
| B     | 128.0.0.0 -- 191.255.255.255| 255.255.0.0      | 10         |
| C     | 192.0.0.0 -- 223.255.255.255| 255.255.255.0    | 110        |
| D     | 224.0.0.0 -- 239.255.255.255| Multicast        | 1110       |
| E     | 240.0.0.0 -- 255.255.255.255| Reserved         | 1111       |

**Special addresses:** `127.0.0.0/8` (loopback), `0.0.0.0` (this network), `255.255.255.255`
(broadcast).

### 4.2 Subnetting and CIDR

**Subnetting.** Borrow bits from the host portion to create subnets.

**Example.** Network `192.168.1.0/24` with `/26` mask (borrow 2 bits):

| Subnet           | Range                          | Broadcast        |
| ---------------- | ------------------------------ | ---------------- |
| 192.168.1.0/26   | 192.168.1.1 -- 192.168.1.62    | 192.168.1.63     |
| 192.168.1.64/26  | 192.168.1.65 -- 192.168.1.126  | 192.168.1.127    |
| 192.168.1.128/26 | 192.168.1.129 -- 192.168.1.190 | 192.168.1.191    |
| 192.168.1.192/26 | 192.168.1.193 -- 192.168.1.254 | 192.168.1.255    |

Each subnet has $2^6 - 2 = 62$ usable hosts.

**CIDR (Classless Inter-Domain Routing).** Notation: `a.b.c.d/n` where $n$ is the prefix length.
Allows route aggregation (supernetting).

**Example.** Aggregate `192.168.0.0/24` and `192.168.1.0/24` into `192.168.0.0/23`.

<details>
<summary>Worked Example: VLSM Subnetting</summary>

Subnet `192.168.10.0/24` to accommodate:
- LAN A: 60 hosts
- LAN B: 28 hosts
- LAN C: 12 hosts
- LAN D: 6 hosts
- 3 point-to-point links: 2 hosts each

**Strategy:** Allocate largest subnets first. For each subnet, find the smallest power of 2 that
provides enough addresses (including network and broadcast).

| Subnet    | Hosts needed | $2^n$ | Prefix | Network            | Range                             | Broadcast          |
| --------- | ------------ | ----- | ------ | ------------------ | --------------------------------- | ------------------ |
| LAN A     | 60           | 64    | /26    | 192.168.10.0/26    | .1 -- .62                         | 192.168.10.63      |
| LAN B     | 28           | 32    | /27    | 192.168.10.64/27   | .65 -- .94                        | 192.168.10.95      |
| LAN C     | 12           | 16    | /28    | 192.168.10.96/28   | .97 -- .110                       | 192.168.10.111     |
| LAN D     | 6            | 8     | /29    | 192.168.10.112/29  | .113 -- .118                      | 192.168.10.119     |
| P2P Link 1| 2            | 4     | /30    | 192.168.10.120/30  | .121 -- .122                      | 192.168.10.123     |
| P2P Link 2| 2            | 4     | /30    | 192.168.10.124/30  | .125 -- .126                      | 192.168.10.127     |
| P2P Link 3| 2            | 4     | /30    | 192.168.10.128/30  | .129 -- .130                      | 192.168.10.131     |

**Remaining space:** 192.168.10.132/24 -- 192.168.10.255 (124 addresses for future use).

**Key insight:** VLSM avoids wasting addresses. Without VLSM, using /26 for all subnets would require
$7 \times 64 = 448$ addresses. With VLSM we use only 132 addresses.

</details>

### 4.3 IPv6

128-bit addresses: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`. Abbreviation rules: leading zeros in a
group may be omitted; one consecutive group of all-zeros may be replaced with `::`.

**Key differences from IPv4:**

- Address space: $2^{128}$.
- No broadcast (uses multicast).
- Simplified header for faster processing.
- Mandatory IPsec support.
- No fragmentation at routers (only at source).

**IPv6 header format (40 bytes fixed):**

| Field       | Size    | Description                       |
| ----------- | ------- | --------------------------------- |
| Version     | 4 bits  | Always 6                          |
| Traffic Class| 8 bits | ECN and DSCP                      |
| Flow Label  | 20 bits | QoS and flow identification       |
| Payload Len | 16 bits | Length of the payload             |
| Next Header | 8 bits  | Type of extension header          |
| Hop Limit   | 8 bits  | Replaces IPv4 TTL                 |

**IPv6 header analysis.** The fixed 40-byte header with no options field is a deliberate simplification
over IPv4 (whose header ranges from 20 to 60 bytes). Every field is either fixed-size or has a
clearly defined offset. This allows routers to process IPv6 packets faster because they never need to
parse variable-length options. Optional functionality is moved to **extension headers**, which are
chained via the Next Header field:

| Extension Header          | Next Header Value | Purpose                            |
| ------------------------- | ----------------- | ---------------------------------- |
| Hop-by-Hop Options        | 0                 | Options processed by every router  |
| Routing (Type 0)          | 43                | Source routing (deprecated)        |
| Fragment                  | 44                | Fragmentation and reassembly       |
| Destination Options       | 60                | Options for destination only       |
| Authentication Header     | 51                | Integrity and authentication       |
| Encapsulating Security    | 50                | Confidentiality and integrity      |

**Transition mechanisms:** Dual stack, tunnelling (encapsulate IPv6 in IPv4), translation (NAT64).

### 4.4 ARP

**Address Resolution Protocol** resolves IP addresses to MAC addresses on a local network.

1. Host needs to send a packet to IP address $B$.
2. Host checks its ARP cache for $B$'s MAC address.
3. If not cached, broadcast an ARP request: "Who has $B$? Tell $A$."
4. Host $B$ replies with its MAC address (unicast).
5. Host $A$ caches the mapping (typically with a timeout of minutes).

**Gratuitous ARP.** A host broadcasts its own IP-to-MAC mapping, typically on startup or interface
change. Used for duplicate address detection, cache updates, and failover in high-availability setups.

**ARP spoofing.** An attacker sends forged ARP messages to associate their MAC address with the IP
address of a legitimate device, enabling man-in-the-middle attacks. Defences include static ARP
entries, ARP inspection, and dynamic ARP protection (DAI).

### 4.5 NAT

**Network Address Translation** maps private addresses (RFC 1918: `10.0.0.0/8`,
`172.16.0.0/12`, `192.168.0.0/16`) to public addresses.

- **Static NAT:** One-to-one mapping.
- **Dynamic NAT:** Pool of public addresses assigned on demand.
- **PAT (NAT overload):** Multiple private addresses share one public address via port numbers.
  Translation table maps (private IP, private port) to (public IP, public port).

**PAT limitation:** Approximately 65,000 concurrent connections per public IP.

### 4.6 Routing Algorithms

**Distance Vector Routing.** Each router maintains a vector of distances to all destinations.
Routers exchange vectors with neighbours periodically.

- **Bellman-Ford equation:** $d_x(y) = \min_v \{c(x,v) + d_v(y)\}$ where $c(x,v)$ is the link cost
  to neighbour $v$.
- **RIP:** Uses hop count (max 15 hops); updates every 30 seconds. Slow convergence; susceptible to
  count-to-infinity.

**Count-to-infinity example.** Routers A, B, C in a line with cost 1 each. If link A-B fails:

1. B sets $d_B(A) = \infty$, advertises to C.
2. C still has $d_C(A) = 2$ via B, advertises $d_C(A) = 2$ to B.
3. B sets $d_B(A) = 3$ via C. C then sets $d_C(A) = 4$. This continues.

**Solution: Split horizon with poisoned reverse.** B advertises $d_B(A) = \infty$ to A (since B's
route to A goes through A).

**Link State Routing.** Each router has complete topology. Uses Dijkstra's algorithm.

- **OSPF:** Hierarchical design (areas), VLSM support, fast convergence. Link-state advertisements
  (LSAs) flooded throughout the area. Each router runs Dijkstra on the full topology graph.
  Uses cost = $10^8 / \mathrm{bandwidth(bps)}$ by default.

**OSPF area design:**

- **Backbone area (Area 0):** All other areas must connect to it. All inter-area traffic passes
  through Area 0.
- **Non-backbone areas:** Summarise routes before advertising to Area 0. Types: standard, stub (no
  external routes), totally stubby (no external or inter-area routes), NSSA.
- **LSA types:** Type 1 (router LSA, intra-area), Type 2 (network LSA, intra-area), Type 3
  (summary LSA, inter-area), Type 5 (external LSA, redistributed routes).

**OSPF adjacency states:** Down, Init, 2-Way, ExStart, Exchange, Loading, Full.

**OSPF packet fields:**

| Field           | Description                            |
| --------------- | -------------------------------------- |
| Header          | Version, area ID, router ID, checksum |
| LSA type        | Router-LSA, Network-LSA, Summary-LSA  |
| Link ID         | Identifies the described object       |
| Advertising router | Router originating the LSA      |
| Sequence number | Detects stale or duplicate LSAs       |
| Age             | Time since LSA originated (seconds)   |

**Path Vector Routing (BGP).** Used for inter-domain routing. Carries the full AS path to each
destination, not just the distance.

- **eBGP:** Between different ASes. **iBGP:** Within the same AS.
- **Attributes:** `AS_PATH` (loop prevention), `NEXT_HOP`, `LOCAL_PREF` (exit preference), `MED`
  (entry preference), origin type.
- **Decision process:** Highest `LOCAL_PREF`, shortest `AS_PATH`, lowest origin, lowest `MED`,
  eBGP over iBGP, lowest IGP cost to `NEXT_HOP`, lowest router ID.

**BGP route advertisement:**

```
AS 65001 -> AS 65002: reach 203.0.113.0/24, AS_PATH = 65001
AS 65002 -> AS 65003: reach 203.0.113.0/24, AS_PATH = 65001 65002
```

AS 65003 rejects any route containing its own AS number (loop prevention).

**BGP attributes in detail:**

- **Well-known mandatory:** `AS_PATH`, `NEXT_HOP`, `ORIGIN` (IGP $\lt$ EGP $\lt$ Incomplete).
- **Well-known discretionary:** `LOCAL_PREF` (not sent to eBGP peers; influences outbound traffic).
- **Optional transitive:** `COMMUNITY` (tag routes for policy), `MP_REACH_NLRI` (IPv6/VPNv4).
- **Optional non-transitive:** `MED` (suggestion to neighbour about preferred entry point;
  lower is better; compared only for routes from the same neighbouring AS).

**iBGP full mesh requirement.** Within an AS, all iBGP speakers must be fully meshed (or use route
reflectors/confederations) because iBGP does not re-advertise routes learned from other iBGP peers.
This prevents routing loops within the AS.

**Routing protocol comparison:**

| Feature        | RIP                    | OSPF                      | BGP                     |
| -------------- | ---------------------- | ------------------------- | ----------------------- |
| Type           | Distance Vector        | Link State                | Path Vector             |
| Algorithm      | Bellman-Ford           | Dijkstra                  | Policy-based            |
| Metric         | Hop count (max 15)     | Cost (bandwidth-based)    | AS_PATH + attributes    |
| Scope          | AS (interior)          | AS (interior)             | Inter-domain            |
| Convergence    | Slow                   | Fast                      | Configurable            |
| Updates        | Periodic (30 s)        | Triggered (LSA flood)     | Incremental             |
| Scalability    | Small networks         | Large networks            | Internet-scale          |
| Hierarchy      | Flat                   | Areas                     | AS-based                |
| VLSM support   | RIPv2 only             | Yes                       | Yes                     |

<details>
<summary>Worked Example: Routing Table Construction with Dijkstra's Algorithm</summary>

Consider the following network topology with link costs:

```
A ---3--- B ---2--- C
|           |           |
4           1           5
|           |           |
D ---6--- E ---3--- F
```

**Goal:** Construct the routing table at router A using Dijkstra's algorithm.

**Initialisation.** Set $d(A) = 0$, $d(\mathrm{all\;others}) = \infty$. Unvisited = $\{A, B, C, D, E, F\}$.

**Visit A** ($d = 0$). Neighbours: B (cost 3), D (cost 4).
Update: $d(B) = 3$, prev$(B) = A$. $d(D) = 4$, prev$(D) = A$.

**Visit B** ($d = 3$, smallest unvisited). Neighbours: A (skip), C (3 + 2 = 5), E (3 + 1 = 4).
Update: $d(C) = 5$, prev$(C) = B$. $d(E) = 4$, prev$(E) = B$.

**Visit D** ($d = 4$). Neighbours: A (skip), E (4 + 6 = 10, worse than 4).
No updates.

**Visit E** ($d = 4$). Neighbours: B (skip), D (skip), F (4 + 3 = 7).
Update: $d(F) = 7$, prev$(F) = E$.

**Visit C** ($d = 5$). Neighbours: B (skip), F (5 + 5 = 10, worse than 7).
No updates.

**Visit F** ($d = 7$). All neighbours visited. Done.

**Routing table at A:**

| Destination | Next Hop | Cost | Path          |
| ----------- | -------- | ---- | ------------- |
| B           | B        | 3    | A -- B        |
| C           | B        | 5    | A -- B -- C   |
| D           | D        | 4    | A -- D        |
| E           | B        | 4    | A -- B -- E   |
| F           | B        | 7    | A -- B -- E -- F|

</details>

### 4.7 ICMP

**Internet Control Message Protocol** provides error reporting and diagnostics. Encapsulated in IP
(protocol number 1).

| Type | Code | Meaning                    |
| ---- | ---- | -------------------------- |
| 0    | 0    | Echo reply                 |
| 3    | 0-15 | Destination unreachable    |
| 8    | 0    | Echo request (ping)        |
| 11   | 0-1  | Time exceeded (TTL expiry) |

**Traceroute.** Sends packets with incrementing TTL. When TTL expires, the router returns an ICMP
Time Exceeded message, revealing intermediate hops.

### 4.8 IP Fragmentation

When a packet exceeds the MTU, it must be fragmented. The IP header includes Identification, Flags
(DF, MF), and Fragment Offset fields.

**Fragmentation process:**

1. The Identification field is the same for all fragments of the original datagram.
2. The MF (More Fragments) flag is 1 for all fragments except the last.
3. The Fragment Offset specifies the position of the fragment's data in the original datagram
   (in 8-byte units).
4. Each fragment becomes an independent IP packet with its own IP header.
5. Only the receiver reassembles fragments; routers never reassemble.

<details>
<summary>Worked Example: IP Fragmentation</summary>

A 4000-byte datagram (20-byte header + 3980-byte data) must traverse a link with MTU = 1500 bytes.

Payload per fragment = MTU - IP header = 1500 - 20 = 1480 bytes.

The data size (3980 bytes) must be a multiple of 8 for fragmentation. The last fragment can be
shorter, but the offset is in 8-byte units. 1480 is divisible by 8 ($1480/8 = 185$), so this
works cleanly.

Number of fragments: $\lceil 3980 / 1480 \rceil = 3$.

| Fragment | Header | Data   | MF | Offset | Total |
| -------- | ------ | ------ | -- | ------ | ----- |
| 1        | 20 B   | 1480 B | 1  | 0      | 1500 B|
| 2        | 20 B   | 1480 B | 1  | 185    | 1500 B|
| 3        | 20 B   | 1020 B | 0  | 370    | 1040 B|

Total transmitted: 4040 bytes (40 bytes of additional headers due to fragmentation).

</details>

**Path MTU Discovery (PMTUD):** The sender sets the DF flag. If a router cannot forward, it returns
ICMP "Fragmentation Needed" and the sender reduces packet size. Preferred over fragmentation.

:::caution Common Pitfall
When subnetting, remember that a `/31` prefix (RFC 3021) has exactly 2 addresses and is valid for
point-to-point links with no network or broadcast address. A `/32` is a single host route. The
formula $2^n - 2$ usable hosts applies only for prefixes of `/30` or shorter.
:::

## 5. Transport Layer

### 5.1 UDP

**Connectionless, unreliable, message-oriented.** 8-byte header.

| Field    | Size    | Description                        |
| -------- | ------- | ---------------------------------- |
| Src port | 16 bits | Source port                        |
| Dst port | 16 bits | Destination port                   |
| Length   | 16 bits | Header + data length               |
| Checksum | 16 bits | Optional (IPv4); mandatory (IPv6)  |

**Use cases:** DNS, DHCP, VoIP, video streaming, gaming. Suitable when low latency matters more
than reliability, or when the application handles reliability itself.

### 5.2 TCP

**Connection-oriented, reliable, byte-stream.** Provides flow control, congestion control, ordered
delivery. Header: 20 bytes minimum.

| Field      | Size    | Description                                  |
| ---------- | ------- | -------------------------------------------- |
| Src port   | 16 bits | Source port                                  |
| Dst port   | 16 bits | Destination port                             |
| Seq number | 32 bits | Byte position of first data byte             |
| Ack number | 32 bits | Next expected byte from other side           |
| Data offset| 4 bits  | Header length in 32-bit words                |
| Flags      | 9 bits  | URG, ACK, PSH, RST, SYN, FIN                 |
| Window     | 16 bits | Receive window size (flow control)           |
| Checksum   | 16 bits | Mandatory                                    |
| Urgent ptr | 16 bits | Pointer to urgent data                       |

### 5.3 TCP Options

The TCP header can include options (within the data offset space):

| Option          | Size    | Purpose                                      |
| --------------- | ------- | -------------------------------------------- |
| MSS             | 4 bytes | Maximum Segment Size (announced in SYN)      |
| Window Scale    | 3 bytes | Scale the window field (RFC 7323)            |
| SACK Permitted  | 2 bytes | Allow Selective Acknowledgements             |
| SACK            | Variable| Specify blocks of received data              |
| Timestamps      | 10 bytes| RTT measurement, PAWS protection             |

**Selective Acknowledgement (SACK).** Standard TCP only acknowledges contiguous data. If segments
3, 4, 5 are lost but 6-10 arrive, the receiver can only ACK up to segment 2. SACK allows the
receiver to inform the sender exactly which blocks have arrived, avoiding unnecessary
retransmissions.

**Window scaling.** The TCP window field is 16 bits (max 65,535 bytes), insufficient for high-BDP
paths. The window scale option shifts the window left by $S$ bits, allowing windows up to
$2^{16+S-1}$ bytes (maximum $S = 14$, yielding a 1 GiB window).

### 5.4 TCP vs UDP Comparison

| Aspect          | TCP                              | UDP                          |
| --------------- | -------------------------------- | ---------------------------- |
| Connection      | Connection-oriented              | Connectionless               |
| Reliability     | Guaranteed delivery, ACKs        | Best effort                  |
| Ordering        | Ordered delivery                 | No ordering                  |
| Flow control    | Sliding window                   | None                         |
| Congestion ctrl | cwnd, ssthresh                   | None                         |
| Header size     | 20--60 bytes                     | 8 bytes                      |
| Overhead        | Higher (handshake, ACKs)         | Lower                        |
| Use cases       | Web, email, file transfer        | DNS, VoIP, streaming, gaming |
| Broadcast       | No (point-to-point)              | Yes (broadcast and multicast)|
| Retransmission  | Automatic                        | Application-level            |

**Theorem 5.1.** TCP achieves reliable ordered delivery over an unreliable network using cumulative
acknowledgements, sequence numbers, and retransmission timers.

*Proof.* TCP assigns each byte a sequence number. The receiver sends cumulative ACKs indicating the
next expected byte. If an ACK is not received within the RTO, the sender retransmits. Since the
receiver buffers out-of-order segments and only delivers in-order data to the application, and since
every byte is eventually acknowledged or retransmitted until acknowledged, all data is delivered
exactly once and in order. $\blacksquare$

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

**TIME_WAIT.** Client waits $2 \times \mathrm{MSL}$ (Maximum Segment Lifetime, typically 60 s)
before closing. Ensures: (1) the last ACK reaches the server; (2) old segments have expired.

**TCP state diagram** (state transitions):

| From          | Event                   | To            |
| ------------- | ----------------------- | ------------- |
| CLOSED        | passive open            | LISTEN        |
| CLOSED        | active open, send SYN   | SYN_SENT      |
| LISTEN        | recv SYN, send SYN+ACK  | SYN_RCVD      |
| LISTEN        | close                   | CLOSED        |
| SYN_SENT      | recv SYN+ACK, send ACK  | ESTABLISHED   |
| SYN_RCVD      | recv ACK                | ESTABLISHED   |
| ESTABLISHED   | close, send FIN         | FIN_WAIT_1    |
| ESTABLISHED   | recv FIN, send ACK      | CLOSE_WAIT    |
| FIN_WAIT_1    | recv ACK                | FIN_WAIT_2    |
| FIN_WAIT_1    | recv FIN, send ACK      | CLOSING       |
| FIN_WAIT_2    | recv FIN, send ACK      | TIME_WAIT     |
| CLOSE_WAIT    | close, send FIN         | LAST_ACK      |
| CLOSING       | recv ACK                | TIME_WAIT     |
| LAST_ACK      | recv ACK                | CLOSED        |
| TIME_WAIT     | 2 $\times$ MSL timeout  | CLOSED        |

### 5.6 Flow Control

TCP uses a **sliding window**. The receiver advertises `rwnd` (receive window). The sender never has
more than `rwnd` bytes of unacknowledged data in flight.

$$\mathrm{Effective\;window} = \min(\mathrm{cwnd},\, \mathrm{rwnd})$$

**Example.** Buffer size 4096, 1024 unprocessed bytes: `rwnd = 3072`. The window slides as data is
acknowledged and the receiver processes data.

### 5.7 Congestion Control

TCP adapts its sending rate based on perceived network congestion.

**Slow start.** `cwnd = 1` MSS. Double `cwnd` per ACK (exponential growth). Until `cwnd` reaches
`ssthresh` or loss occurs.

**Congestion avoidance.** When $\mathrm{cwnd} \geq \mathrm{ssthresh}$, increase `cwnd` by
$\mathrm{MSS} \times (\mathrm{MSS} / \mathrm{cwnd})$ per ACK (linear growth, approximately 1 MSS
per RTT).

**Fast retransmit.** Three duplicate ACKs trigger immediate retransmission of the missing segment.

**Fast recovery.** After fast retransmit: $\mathrm{ssthresh} = \mathrm{cwnd}/2$,
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
event. Better performance on high-bandwidth, high-latency networks.

<details>
<summary>Worked Example: TCP Congestion Window Evolution</summary>

Given: MSS = 1460 bytes, initial `ssthresh` = 16384 bytes. Trace `cwnd` through the following
events:

1. Connection established, enter slow start.
2. After 4 RTTs, cwnd reaches ssthresh.
3. 3 more RTTs in congestion avoidance.
4. Three duplicate ACKs received (fast retransmit).
5. New ACK arrives after fast recovery.

**Slow start (cwnd doubles each RTT):**

| RTT | cwnd (MSS) | cwnd (bytes) | Phase            |
| --- | ---------- | ------------ | ---------------- |
| 1   | 2          | 2920         | Slow start       |
| 2   | 4          | 5840         | Slow start       |
| 3   | 8          | 11680        | Slow start       |
| 4   | 16         | 23360        | cwnd $\geq$ ssthresh $\to$ switch |

**Congestion avoidance (cwnd increases by ~1 MSS per RTT):**

| RTT | cwnd (bytes) | Increment          | Phase                |
| --- | ------------ | ------------------ | -------------------- |
| 5   | 24820        | +1460              | Congestion avoidance |
| 6   | 26280        | +1460              | Congestion avoidance |
| 7   | 27740        | +1460              | Congestion avoidance |

**Fast retransmit and recovery (after 3 dup ACKs):**

ssthresh = 27740 / 2 = 13870 bytes
cwnd = 13870 + 3 $\times$ 1460 = 18250 bytes

**New ACK arrives (exit fast recovery):**

cwnd = ssthresh = 13870 bytes, continue congestion avoidance.

</details>

### 5.8 Retransmission Timer

$$\mathrm{RTT}_s = (1 - \alpha)\,\mathrm{RTT}_s + \alpha \cdot \mathrm{RTT}_m$$

$$\mathrm{RTT}_d = (1 - \beta)\,\mathrm{RTT}_d + \beta\,|\mathrm{RTT}_m - \mathrm{RTT}_s|$$

$$\mathrm{RTO} = \mathrm{RTT}_s + 4 \cdot \mathrm{RTT}_d$$

where $\mathrm{RTT}_m$ = measured RTT, $\alpha = 1/8$, $\beta = 1/4$. Initial RTO = 1 s; minimum
RTO = 200 ms.

:::caution Common Pitfall
Karn's algorithm: do not update RTT estimates for retransmitted segments. The ACK could correspond
to either the original or the retransmission (retransmission ambiguity).
:::

<details>
<summary>Worked Example: RTT Estimation</summary>

Given: $\alpha = 1/8$, $\beta = 1/4$, initial $\mathrm{RTT}_s = 0$, $\mathrm{RTT}_d = 0$.
Measured RTTs: 220 ms, 240 ms, 230 ms, 260 ms, 250 ms.

**After measurement 1 (220 ms):**

$\mathrm{RTT}_s = (7/8)(0) + (1/8)(220) = 27.5$ ms
$\mathrm{RTT}_d = (3/4)(0) + (1/4)|220 - 27.5| = 48.125$ ms
$\mathrm{RTO} = 27.5 + 4(48.125) = 220$ ms

**After measurement 2 (240 ms):**

$\mathrm{RTT}_s = (7/8)(27.5) + (1/8)(240) = 24.06 + 30 = 54.06$ ms
$\mathrm{RTT}_d = (3/4)(48.125) + (1/4)|240 - 54.06| = 36.09 + 46.49 = 82.58$ ms
$\mathrm{RTO} = 54.06 + 4(82.58) = 384.38$ ms

**After measurement 3 (230 ms):**

$\mathrm{RTT}_s = (7/8)(54.06) + (1/8)(230) = 47.30 + 28.75 = 76.05$ ms
$\mathrm{RTT}_d = (3/4)(82.58) + (1/4)|230 - 76.05| = 61.94 + 38.49 = 100.43$ ms
$\mathrm{RTO} = 76.05 + 4(100.43) = 477.77$ ms

**After measurement 4 (260 ms):**

$\mathrm{RTT}_s = (7/8)(76.05) + (1/8)(260) = 66.54 + 32.50 = 99.04$ ms
$\mathrm{RTT}_d = (3/4)(100.43) + (1/4)|260 - 99.04| = 75.32 + 40.24 = 115.56$ ms
$\mathrm{RTO} = 99.04 + 4(115.56) = 561.28$ ms

**After measurement 5 (250 ms):**

$\mathrm{RTT}_s = (7/8)(99.04) + (1/8)(250) = 86.66 + 31.25 = 117.91$ ms
$\mathrm{RTT}_d = (3/4)(115.56) + (1/4)|250 - 117.91| = 86.67 + 33.02 = 119.69$ ms
$\mathrm{RTO} = 117.91 + 4(119.69) = 596.67$ ms

The smoothed RTT converges toward the true average (~240 ms) and the RTO stabilises around 600 ms.

</details>

## 6. Application Layer

### 6.1 DNS

DNS translates domain names to IP addresses. Hierarchical, distributed database.

**Domain hierarchy:** Root (`.`) $\to$ TLD (`com`, `org`, `net`) $\to$ second-level
(`example.com`) $\to$ subdomain (`www.example.com`).

**Record types:**

| Type | Name  | Purpose                                 |
| ---- | ----- | --------------------------------------- |
| A    | IPv4  | IPv4 address                            |
| AAAA | IPv6  | IPv6 address                            |
| CNAME| Alias | Alias to another name                   |
| MX   | Mail  | Mail server for the domain              |
| NS   | Name  | Authoritative name server               |
| SOA  | Start | Zone administration info                |
| TXT  | Text  | Arbitrary text (SPF, DKIM, verification)|

**Resolution process:**

1. Client queries the **recursive resolver** (e.g., `8.8.8.8`).
2. Resolver queries a **root server** for the TLD server.
3. Root refers to the **TLD server** (e.g., for `.com`).
4. TLD server refers to the **authoritative server** for the domain.
5. Authoritative server returns the answer.
6. Resolver caches the result with a TTL.

**Iterative vs recursive resolution.** The client's query to its configured resolver is **recursive**
(the resolver does all the work). The resolver's queries to root, TLD, and authoritative servers
are **iterative** (each server refers the resolver to the next, or answers directly). This
distinction is important: the root and TLD servers are not burdened with recursion.

**DNS caching and TTL.** Each DNS record has a Time-To-Live (TTL) value (in seconds). Resolvers cache
the record for the TTL duration. Typical TTLs: 300 s (5 min) for dynamic records, 86400 s (24 h)
for stable records. Negative caching (NXDOMAIN) also has a TTL (specified in the SOA record's
minimum field).

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
multiple round trips to root, TLD, and authoritative servers.

### 6.2 HTTP

**HTTP/1.0.** New TCP connection per request/response. No persistent connections.

**HTTP/1.1.** Default persistent connections (`Connection: keep-alive`). Pipelining allows multiple
requests without waiting for responses. Head-of-line blocking: one stalled request blocks subsequent
ones.

**HTTP/2.** Multiplexing over a single TCP connection. Binary framing, header compression (HPACK),
server push, stream prioritisation. Solved application-layer HOL blocking.

**HTTP/3.** Uses QUIC (UDP-based) instead of TCP. Solves TCP-level HOL blocking. Includes
connection migration, 0-RTT handshake resumption, integrated TLS 1.3.

**HTTP methods:**

| Method | Idempotent | Safe | Purpose                           |
| ------ | ---------- | ---- | --------------------------------- |
| GET    | Yes        | Yes  | Retrieve a resource               |
| POST   | No         | No   | Submit data                       |
| PUT    | Yes        | No   | Replace a resource                |
| DELETE | Yes        | No   | Delete a resource                 |
| PATCH  | No         | No   | Partial modification              |
| HEAD   | Yes        | Yes  | Like GET but no body              |
| OPTIONS| Yes        | Yes  | Describe communication options    |

**Status codes:**

| Code Range | Category        | Examples                    |
| ---------- | --------------- | --------------------------- |
| 1xx        | Informational   | 100 Continue                |
| 2xx        | Success         | 200 OK, 201 Created         |
| 3xx        | Redirection     | 301 Moved, 304 Not Modified |
| 4xx        | Client Error    | 400 Bad Request, 404 Not Found |
| 5xx        | Server Error    | 500 Internal, 503 Unavailable |

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
pre-installed in the browser/OS trust store.

### 6.4 Email Protocols

**SMTP (Simple Mail Transfer Protocol).** Push protocol for sending email (TCP port 25/587). Uses a
command-response dialogue: `HELO`/`EHLO`, `MAIL FROM`, `RCPT TO`, `DATA`, `QUIT`. Supports extensions
for authentication (`AUTH`) and encryption (`STARTTLS`).

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

**IMAP (Internet Message Access Protocol).** Access email on the server without downloading. Supports
folders, search, partial fetch. TCP port 143 (993 for IMAPS). States: authenticated, selected, and
logout. Messages remain on the server unless explicitly deleted.

**POP3 (Post Office Protocol v3).** Download email to the client; typically deletes from server. TCP
port 110 (995 for POP3S). Simpler than IMAP but less flexible. Supports `TOP` (fetch headers) and
`RETR` (fetch full message).

| Aspect    | IMAP                              | POP3                       |
| --------- | --------------------------------- | -------------------------- |
| Mode      | Remote access                     | Download and delete        |
| Folders   | Yes, server-side                  | No                         |
| Search    | Server-side search                | No                         |
| Sync      | Multi-device sync                 | No                         |
| Resource  | Higher server storage             | Lower server storage       |

### 6.5 Other Application Protocols

**DHCP (Dynamic Host Configuration Protocol).** Automatically assigns IP addresses, subnet masks,
default gateway, and DNS servers to clients. Uses UDP ports 67 (server) and 68 (client).

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
not forward. A DHCP relay agent (configured on the router) converts the broadcast to a unicast and
forwards it to the DHCP server, adding the `giaddr` (gateway IP address) field so the server knows
which subnet to allocate an address from.

**DHCPv6.** Uses multicast (`ff02::1:2` for servers) and supports rapid commit (2-message exchange
instead of 4-message DORA). Stateless DHCPv6 provides only configuration (DNS, NTP) without address
assignment (SLAAC handles addressing).

**FTP (File Transfer Protocol).** Two connections: control (port 21) and data (port 20 for active
mode, random high port for passive mode). Supports ASCII and binary transfer modes.

**SSH (Secure Shell).** Encrypted remote access and file transfer (SCP, SFTP). TCP port 22. Uses
public-key authentication. Transport layer provides encryption, integrity, and compression.

**WebSocket.** Full-duplex communication channel over a single TCP connection (RFC 6455). Handshake
is HTTP-based with an `Upgrade: websocket` header. Used for real-time web applications (chat,
gaming, live data).

**SNMP (Simple Network Management Protocol).** Used for monitoring and managing network devices.
UDP port 161/162. Three versions: v1 (community strings, no security), v2c, v3 (user-based security
model with authentication and encryption).

### 6.6 Network Performance Metrics

**Key metrics:**

- **Bandwidth-delay product (BDP):** $\mathrm{BDP} = \mathrm{bandwidth} \times \mathrm{RTT}$.
  The maximum amount of unacknowledged data that can be in flight. For a 10 Gbps link with 80 ms
  RTT: $\mathrm{BDP} = 10^{10} \times 0.08 = 800\;\mathrm{Mb} = 100\;\mathrm{MB}$.

- **Throughput:** Actual data rate achieved, typically less than bandwidth due to protocol overhead,
  congestion, and errors.

- **Latency components:** Propagation delay ($d / c$, where $d$ is distance), transmission delay
  ($L / R$, where $L$ is frame length, $R$ is rate), queuing delay, processing delay.

- **Jitter:** Variation in packet arrival times. Critical for real-time applications (VoIP, video).
  Measured as the standard deviation of delay.

**Theorem 6.2.** The maximum throughput of a TCP connection is bounded by the window size divided by
the RTT: $\mathrm{throughput} \leq \min(\mathrm{cwnd}, \mathrm{rwnd}) / \mathrm{RTT}$.

*Proof.* The sender cannot have more than the window size in unacknowledged data. Each byte sent
requires an ACK, which takes one RTT to arrive. Thus the sender can send at most window / RTT bytes
per second. $\blacksquare$

:::caution Common Pitfall
DNS uses both TCP and UDP. Queries typically use UDP port 53 (for efficiency). TCP is used for zone
transfers, responses exceeding 512 bytes, and DNSSEC. The switch to TCP was formalised in RFC 7766.
:::

## 7. Network Security

### 7.1 Symmetric Encryption

**Symmetric encryption** uses the same secret key for both encryption and decryption. Both parties
must share the key securely before communication.

| Algorithm | Key Size     | Block Size | Status    |
| --------- | ------------ | ---------- | --------- |
| DES       | 56 bits      | 64 bits    | Insecure  |
| 3DES      | 168 bits     | 64 bits    | Deprecated|
| AES-128   | 128 bits     | 128 bits   | Secure    |
| AES-256   | 256 bits     | 128 bits   | Secure    |
| ChaCha20  | 256 bits     | Stream     | Secure    |

**Block cipher modes of operation:**

| Mode | Description                                      | Parallelisable |
| ---- | ------------------------------------------------ | -------------- |
| ECB  | Each block encrypted independently               | Yes            |
| CBC  | Each block XORed with previous ciphertext        | Decryption only|
| CTR  | Counter-based stream cipher from block cipher    | Yes            |
| GCM  | Authenticated encryption (CTR + MAC)             | Yes            |

**Theorem 7.1.** ECB mode is insecure for messages longer than one block because identical plaintext
blocks produce identical ciphertext blocks, revealing patterns.

*Proof.* If the plaintext contains repeated blocks $P_i = P_j$, then under ECB, $C_i = E_K(P_i) =
E_K(P_j) = C_j$. An attacker observing identical ciphertext blocks knows the corresponding
plaintext blocks are identical, regardless of the key. $\blacksquare$

**Key distribution problem.** Symmetric encryption requires a secure channel to exchange keys. For
$n$ parties, $n(n-1)/2$ keys are needed. This motivates asymmetric encryption and key exchange
protocols.

### 7.2 Asymmetric Encryption

**Asymmetric encryption** uses a key pair: a public key (for encryption/verification) and a private
key (for decryption/signing). The public key can be freely distributed.

**RSA.** Based on the difficulty of factoring large integers.

1. Choose two large primes $p$ and $q$. Compute $n = pq$ and $\phi(n) = (p-1)(q-1)$.
2. Choose $e$ such that $1 \lt e \lt \phi(n)$ and $\gcd(e, \phi(n)) = 1$.
3. Compute $d$ such that $e \cdot d \equiv 1 \pmod{\phi(n)}$.
4. Public key: $(n, e)$. Private key: $(n, d)$.
5. Encrypt: $c = m^e \bmod n$. Decrypt: $m = c^d \bmod n$.

**Diffie-Hellman key exchange.** Allows two parties to establish a shared secret over an insecure
channel without prior shared key.

1. Public parameters: prime $p$ and generator $g$.
2. Alice picks secret $a$, sends $A = g^a \bmod p$.
3. Bob picks secret $b$, sends $B = g^b \bmod p$.
4. Shared secret: $s = B^a \bmod p = g^{ab} \bmod p = A^b \bmod p$.

An eavesdropper who sees $g$, $p$, $A$, $B$ cannot compute $g^{ab}$ without solving the discrete
logarithm problem.

**Digital signatures.** The sender signs a message hash with their private key. Anyone can verify
using the sender's public key. Provides authentication, integrity, and non-repudiation.

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
4. Client verifies the server's proof-of-possession for the private key.

### 7.4 Firewalls

A **firewall** controls network traffic based on security rules.

**Types:**

| Type                    | Layer | Mechanism                                |
| ----------------------- | ----- | ---------------------------------------- |
| Packet filtering        | 3     | Permit/deny based on src, dst, port, proto|
| Stateful inspection     | 3--4  | Tracks connection state (TCP states)     |
| Application gateway     | 7     | Proxy for specific applications          |
| Next-generation (NGFW)  | 3--7  | Deep packet inspection, IDS/IPS, app ID |

**Stateful inspection.** Unlike simple packet filtering, a stateful firewall maintains a connection
table. It can distinguish between a new TCP SYN (allowed) and an unsolicited SYN+ACK (blocked),
and it tracks UDP "connections" by observing request-response patterns.

**DMZ (Demilitarised Zone).** A separate network segment for publicly accessible services (web
servers, mail servers). The firewall allows external access to the DMZ but restricts DMZ-to-internal
access.

<details>
<summary>Worked Example: Firewall Rule Set Design</summary>

A company has a web server at `203.0.113.10`, a mail server at `203.0.113.20`, an internal network
`10.0.0.0/24`, and a DNS server at `10.0.0.53`.

| # | Dir | Src              | Dst              | Port    | Proto | Action |
|---| --- | ---------------- | ---------------- | ------- | ----- | ------ |
| 1 | In  | Any              | 203.0.113.10     | 80, 443 | TCP   | Allow  |
| 2 | In  | Any              | 203.0.113.20     | 25      | TCP   | Allow  |
| 3 | Out | 10.0.0.0/24      | Any              | Any     | Any   | Allow  |
| 4 | In  | Any              | 203.0.113.10     | Any     | ICMP  | Allow  |
| 5 | In  | Any              | 10.0.0.53        | 53      | UDP   | Allow  |
| 6 | In  | Any              | Any              | Any     | Any   | Deny   |

**Notes:**
- Rule 1 allows HTTP/HTTPS to the web server.
- Rule 2 allows inbound SMTP for mail delivery.
- Rule 3 allows internal users outbound access to anything.
- Rule 4 allows ping to the web server for monitoring.
- Rule 5 allows external DNS queries.
- Rule 6 is the default deny (catches all unmatched traffic).

A stateful firewall automatically permits return traffic for outbound connections (rule 3) without
additional rules.

</details>

### 7.5 VPNs

A **Virtual Private Network** creates an encrypted tunnel over a public network.

| Technology | Layer | Protocol         | Use Case                    |
| ---------- | ----- | ---------------- | --------------------------- |
| IPsec      | 3     | AH, ESP          | Site-to-site, remote access |
| SSL/TLS    | 4--7  | TLS 1.3          | Client-to-site (OpenVPN)    |
| WireGuard  | 3     | UDP, ChaCha20    | Modern, lightweight VPN     |
| SSH tunnel | 7     | SSH              | Ad-hoc port forwarding      |

**IPsec architecture (RFC 4301):**

- **Security Association (SA):** A one-way logical connection with parameters: SPI (Security
  Parameters Index), destination IP, protocol (AH or ESP), encryption algorithm, key, lifetime.
- **IKE (Internet Key Exchange):** Protocol for establishing SAs. IKEv2 is the current standard.
  Uses Diffie-Hellman for key exchange and digital signatures for authentication.
- **AH (Authentication Header):** Provides integrity and authentication but NOT confidentiality.
  Protects the entire IP packet (immutable fields). Protocol number 51.
- **ESP (Encapsulating Security Payload):** Provides confidentiality, integrity, and
  authentication. Protocol number 50.

**WireGuard.** A modern VPN protocol (Linux kernel 5.6+):
- Uses ChaCha20 for encryption, Poly1305 for authentication, Curve25519 for key exchange.
- No static keys: each peer has a public/private key pair.
- Under 4000 lines of code (vs ~100,000 for OpenVPN + OpenSSL).
- Roaming: peers can change IP without reconfiguration.

### 7.6 Packet Filtering

**Rule syntax (generic):**

| Field        | Source IP       | Src Port | Dest IP         | Dst Port | Protocol | Action |
| ------------ | --------------- | -------- | --------------- | -------- | -------- | ------ |
| Rule 1       | Any             | Any      | 10.0.0.0/8      | 22       | TCP      | Allow  |
| Rule 2       | 10.0.0.0/8      | Any      | Any             | 80, 443  | TCP      | Allow  |
| Rule 3       | Any             | Any      | Any             | Any      | Any      | Deny   |

**Key principles:**

- Rules are evaluated top-to-bottom; first match wins.
- Default deny policy: the last rule should deny everything not explicitly allowed.
- Specific rules must precede general rules.
- Stateful firewalls automatically allow return traffic for established connections.

:::caution Common Pitfall
Encryption does not imply authentication. A message encrypted with a public key guarantees
confidentiality but does not prove who sent it. Digital signatures (signing with a private key)
provide authentication and non-repudiation. TLS combines both via the certificate chain.
:::

### 7.7 Common Network Attacks

**Denial of Service (DoS) and Distributed DoS (DDoS).** Overwhelm a target with traffic, preventing
legitimate access. Amplification attacks (DNS, NTP) use small requests that generate large responses
directed at the victim.

**Man-in-the-middle (MITM).** An attacker intercepts communication between two parties. Defences:
TLS with certificate pinning, mutual authentication, VPNs.

**ARP spoofing.** See Section 4.4. An attacker sends forged ARP messages to redirect traffic through
their machine.

**DNS spoofing (cache poisoning).** Injecting forged DNS records into a resolver's cache, redirecting
users to malicious sites. Defences: DNSSEC (cryptographic signatures on DNS records), source port
randomisation, TSIG.

**SQL injection.** An attacker inserts malicious SQL into application input fields. Not strictly a
network attack, but often delivered over HTTP. Defences: parameterised queries, input validation.

**TCP SYN flood.** An attacker sends many SYN packets without completing the handshake, exhausting
the server's connection table. Defences: SYN cookies (encode state in the initial sequence number),
rate limiting, connection throttling.

## 8. Problem Set

1. **Nyquist theorem.** A noiseless channel has bandwidth 8000 Hz. What is the maximum data rate
   with 16 signal levels? With 256 signal levels?

2. **Shannon capacity.** A channel has bandwidth 4 MHz and SNR = 24 dB. Compute the maximum
   error-free data rate. If 64 signal levels are used with a Nyquist-based scheme, is the channel
   being used within its theoretical limit?

3. **Nyquist vs Shannon.** A channel has $H = 3000$ Hz and $\mathrm{SNR} = 31$ (about 15 dB).
   What is the maximum number of signal levels $V$ that can be used reliably?

4. **Hamming code.** Encode the data bits $d_1 d_2 d_3 d_4 = 0110$ using Hamming(7,4). If bit 5
   of the transmitted codeword is flipped, show how the receiver detects and corrects the error.

5. **CRC computation.** Compute the CRC for the message `10110010` using the generator polynomial
   $G(x) = x^3 + x + 1$ (binary `1011`). Write the transmitted codeword.

6. **CRC verification.** The receiver gets the codeword `101101110` and the generator is `1011`.
   Perform modulo-2 division to determine whether the frame was received correctly.

7. **ALOHA throughput.** A slotted ALOHA system has 4 stations, each transmitting with probability
   $p = 0.2$ in each slot. Compute the throughput $S$ and compare it to the theoretical maximum.

8. **CSMA/CD minimum frame.** A 1 Gbps Ethernet has a maximum segment length of 100 m and
   propagation speed $2 \times 10^8$ m/s. What is the minimum frame size? How does it compare to
   the standard Ethernet minimum of 64 bytes?

9. **Switching latency.** A 1000-byte frame passes through 5 store-and-forward switches on 100 Mbps
   links (ignore propagation delay). Compute the total latency. Repeat for cut-through switching.

10. **Subnetting.** Given the network `172.16.0.0/16`, create subnets to support 100 hosts, 50
    hosts, 25 hosts, and 10 hosts using VLSM. List the network address, usable range, and broadcast
    for each.

11. **Route aggregation.** Aggregate the following routes into the most specific supernet:
    `198.51.100.0/24`, `198.51.101.0/24`, `198.51.102.0/24`, `198.51.103.0/24`.

12. **IPv6 addressing.** Expand the IPv6 address `2001:db8::1` to its full 128-bit form. How many
    /64 subnets does a /56 prefix provide? How many /128 addresses per /64?

13. **Dijkstra's algorithm.** Given the network topology below, find the shortest path tree from
    router S to all destinations:
    ```
    S --2-- A --1-- B
    |         |         |
    5         3         2
    |         |         |
    C --4-- D --1-- E
    ```
    Construct the routing table at S.

14. **Distance vector convergence.** Three routers X, Y, Z are connected: X--Y (cost 1), Y--Z
    (cost 1), X--Z (cost 5). Initially, X's route to Z goes through Y. If link Y--Z fails, trace
    the count-to-infinity problem for 4 iterations. Explain how split horizon with poisoned reverse
    prevents it.

15. **TCP congestion control.** Given MSS = 1000 bytes, initial `ssthresh` = 8000 bytes. Trace
    `cwnd` through: slow start for 3 RTTs, then 2 RTTs of congestion avoidance, then a timeout.
    What is the value of `ssthresh` after the timeout?

16. **RTT estimation.** Using $\alpha = 1/8$, $\beta = 1/4$, and measured RTTs of 100 ms,
    120 ms, 80 ms, compute $\mathrm{RTT}_s$, $\mathrm{RTT}_d$, and RTO after each measurement
    (starting from $\mathrm{RTT}_s = \mathrm{RTT}_d = 0$).

17. **DNS resolution.** A client at `192.168.1.100` wants to resolve `www.example.com`. Describe
    the complete resolution process, including: the recursive query to the local resolver, the
    iterative queries to root and TLD servers, and the role of caching. How many round trips are
    needed on a cold cache?

18. **HTTP performance.** A web page contains 1 HTML document (10 KB), 5 CSS files (20 KB total),
    10 images (500 KB total), and 2 JavaScript files (100 KB total). Compare the total time to
    load the page over HTTP/1.0 (6 parallel TCP connections), HTTP/1.1 (1 persistent connection,
    no pipelining), and HTTP/2 (1 connection with multiplexing). Assume RTT = 50 ms and bandwidth
    = 10 Mbps. Ignore processing time.

    *Hint:* Total data = 630 KB = 5.04 Mb. Transmission time = 5.04 / 10 = 0.504 s.
    - HTTP/1.0: 16 objects, 6 connections. Each connection requires 1 RTT for TCP handshake + 1
      RTT for HTTP request/response. With 6 parallel connections: 3 round trips for the TCP +
      HTTP per batch = 150 ms per batch, with 3 batches (6 + 6 + 4 objects) = 3 $\times$ 150 +
      504 = 954 ms.
    - HTTP/1.1: 1 connection, sequential requests. 1 RTT for handshake + 16 RTTs for requests
      (serial) + 504 ms = 1 $\times$ 50 + 16 $\times$ 50 + 504 = 1354 ms.
    - HTTP/2: 1 RTT for handshake, all requests multiplexed. 1 $\times$ 50 + 504 = 554 ms.

19. **Firewall rules.** A company has a web server at `203.0.113.10`, a mail server at
    `203.0.113.20`, and an internal network `10.0.0.0/24`. Write a set of packet filtering rules
    that: (a) allows external HTTP/HTTPS to the web server, (b) allows external SMTP to the mail
    server, (c) allows internal users to access any external service, (d) blocks all other inbound
    traffic.

20. **RSA encryption.** Given primes $p = 5$, $q = 11$, and public exponent $e = 3$: (a) Compute
    $n$, $\phi(n)$, and the private key $d$. (b) Encrypt the message $m = 7$. (c) Decrypt the
    ciphertext to verify.

21. **TCP throughput bound.** A TCP connection over a satellite link has RTT = 600 ms and
    bandwidth = 50 Mbps. The receiver advertises `rwnd` = 1 MB. If `cwnd` grows to 2 MB during
    slow start, what is the maximum achievable throughput? What is the BDP, and is the window
    large enough to fill the pipe?

22. **CDMA orthogonality.** Four stations share a channel using CDMA with chip codes:
    $C_1 = (+1, -1, +1, +1)$, $C_2 = (+1, +1, -1, +1)$, $C_3 = (+1, +1, +1, -1)$,
    $C_4 = (-1, +1, +1, +1)$. Station 1 sends bit 1, station 2 sends bit 0, station 3 sends
    bit 1, station 4 is silent. Compute the combined signal and show that each receiver correctly
    recovers its station's bit.
