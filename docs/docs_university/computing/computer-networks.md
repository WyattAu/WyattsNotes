---
title: Computer Networks
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

- **Shannon capacity:** For a noisy channel with signal-to-noise ratio $\mathrm{SNR}$:

$$C = H \log_2(1 + \mathrm{SNR}) \;\mathrm{bps}$$

**Example.** A telephone line has $H = 3100$ Hz and $\mathrm{SNR} = 3162$ (35 dB). Shannon limit:
$C = 3100 \times \log_2(3163) \approx 34{,}860$ bps.

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

**Cyclic Redundancy Check (CRC).** A polynomial code widely used (Ethernet, Wi-Fi, USB).

1. Append $r$ zero bits to the message ($r$ = degree of generator polynomial $G(x)$).
2. Divide the augmented message polynomial by $G(x)$ using modulo-2 arithmetic.
3. Append the remainder (CRC) to the original message.
4. Receiver divides by $G(x)$; zero remainder means no error.

**Theorem 3.1.** CRC detects all single-bit errors, all double-bit errors (if $G(x)$ has factor
$(x+1)$), all odd-numbered errors, and all burst errors of length $\leq r$.

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

- **Binary exponential backoff:** After $n$-th collision, choose random $k \in \{0, 1, \ldots,
  2^{\min(n,10)} - 1\}$ and wait $k \times 512$ bit times.
- **Minimum frame size:** Must be at least $2\tau$ where $\tau$ is the round-trip propagation delay.
  For 10 Mbps Ethernet with $\tau = 51.2\;\mu\mathrm{s}$: minimum frame = 64 bytes.

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

## 4. Network Layer

### 4.1 IPv4 Addressing

An IPv4 address is a 32-bit number in dotted-decimal: `192.168.1.1`.

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

**Extension headers** provide optional functionality: Hop-by-Hop Options, Routing (source routing),
Fragment, Destination Options, Authentication Header (AH), Encapsulating Security Payload (ESP).

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

**Path MTU Discovery (PMTUD):** The sender sets the DF flag. If a router cannot forward, it returns
ICMP "Fragmentation Needed" and the sender reduces packet size. Preferred over fragmentation.

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

### 5.4 TCP Connection Management

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

### 5.5 Flow Control

TCP uses a **sliding window**. The receiver advertises `rwnd` (receive window). The sender never has
more than `rwnd` bytes of unacknowledged data in flight.

$$\mathrm{Effective window} = \min(\mathrm{cwnd}, \mathrm{rwnd})$$

**Example.** Buffer size 4096, 1024 unprocessed bytes: `rwnd = 3072`. The window slides as data is
acknowledged and the receiver processes data.

### 5.6 Congestion Control

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

### 5.7 Retransmission Timer

$$\mathrm{RTT}_s = (1 - \alpha)\,\mathrm{RTT}_s + \alpha \cdot \mathrm{RTT}_m$$

$$\mathrm{RTT}_d = (1 - \beta)\,\mathrm{RTT}_d + \beta\,|\mathrm{RTT}_m - \mathrm{RTT}_s|$$

$$\mathrm{RTO} = \mathrm{RTT}_s + 4 \cdot \mathrm{RTT}_d$$

where $\mathrm{RTT}_m$ = measured RTT, $\alpha = 1/8$, $\beta = 1/4$. Initial RTO = 1 s; minimum
RTO = 200 ms.

:::caution Common Pitfall
Karn's algorithm: do not update RTT estimates for retransmitted segments. The ACK could correspond
to either the original or the retransmission (retransmission ambiguity).
:::

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

**SMTP (Simple Mail Transfer Protocol).** Push protocol for sending email (TCP port 25/587).

**IMAP (Internet Message Access Protocol).** Access email on the server without downloading. Supports
folders, search, partial fetch. TCP port 143 (993 for IMAPS).

**POP3 (Post Office Protocol v3).** Download email to the client; typically deletes from server. TCP
port 110 (995 for POP3S).

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
A common confusion: DNS uses both TCP and UDP. Queries typically use UDP port 53 (for efficiency).
TCP is used for zone transfers, responses exceeding 512 bytes, and DNSSEC. The switch to TCP was
formalised in DNS over TCP (RFC 7766).
:::
