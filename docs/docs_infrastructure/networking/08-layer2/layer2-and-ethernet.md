---
id: layer2-and-ethernet
title: Layer 2 and Ethernet
description:
  Data link layer fundamentals -- Ethernet framing, MAC addressing, CSMA/CD, switching, VLANs, STP,
  link aggregation, and ARP.
slug: layer2-and-ethernet
sidebar_position: 2
date: 2026-04-08T00:00:00.000Z
tags:
  - Networking
categories:
  - Networking
---

## Data Link Layer Functions

The data link layer (OSI Layer 2) sits between the physical layer and the network layer. Its
responsibilities are concrete and well-defined:

1. **Framing.** Encapsulate network-layer packets into a frame with header and trailer fields that
   allow the receiver to identify where each frame begins and ends on the wire.
2. **MAC addressing.** Provide a unique identifier for each interface on a LAN so that frames can be
   delivered to the correct destination.
3. **Error detection.** Detect (but not correct) bit errors introduced during transmission using a
   Frame Check Sequence (FCS).
4. **Flow control.** Prevent a fast sender from overwhelming a slow receiver (relevant in
   half-duplex environments, less so in modern full-duplex switched LANs).
5. **Media access control.** Determine which device may transmit on a shared medium and when
   (CSMA/CD for classic Ethernet).

Layer 2 does not provide routing. It provides node-to-node delivery within the same broadcast
domain. If the destination MAC is not on the local segment, the frame is sent to the default gateway
(router), and Layer 3 handles inter-network delivery.

### Relationship to Layer 1 and Layer 3

Layer 2 builds on Layer 1 (physical layer) by adding structure to the raw bit stream. It receives
bits from the physical layer, groups them into frames, and passes the extracted payload up to
Layer 3. Conversely, it takes Layer 3 packets, wraps them in a frame, and hands the resulting bit
pattern to Layer 1 for transmission.

The Layer 2 header contains the destination and source MAC addresses. The Layer 3 header contains
the destination and source IP addresses. Both are needed for a frame to traverse a LAN and for the
receiving host to process the packet correctly.

## Ethernet History

### DIX Ethernet (1980)

The original Ethernet was developed at Xerox PARC by Robert Metcalfe, David Boggs, and others in the
mid-1970s. The first commercial specification was published in 1980 by a consortium of DEC, Intel,
and Xerox -- hence "DIX Ethernet" or "Ethernet Blue Book." This is often called "Ethernet V1" or
"DIX Ethernet."

Key characteristics of DIX Ethernet:

- 10 Mbps over thick coaxial cable (10BASE5)
- CSMA/CD access method
- 48-bit MAC addresses
- Frame length: 64 to 1518 bytes

### IEEE 802.3 (1983)

The IEEE standardized Ethernet as 802.3. This created a subtle but important divergence: the IEEE
version uses a Length field (where the value $\le$ 1500 indicates an IEEE 802.3 frame), while DIX
Ethernet II uses an EtherType field (where the value $\ge$ 1536 indicates the upper-layer protocol).

In practice, the industry converged on Ethernet II framing. When you see an Ethernet frame on a
modern network, it is almost certainly Ethernet II (also called DIX Ethernet), not 802.3 with SNAP
or 802.2 LLC.

### Evolution of Speeds

| Standard   | Year | Speed    | Medium             | Max Segment |
| ---------- | ---- | -------- | ------------------ | ----------- |
| 10BASE5    | 1983 | 10 Mbps  | Thick coax (10 mm) | 500 m       |
| 10BASE2    | 1988 | 10 Mbps  | Thin coax (RG-58)  | 185 m       |
| 10BASE-T   | 1990 | 10 Mbps  | Cat3 UTP           | 100 m       |
| 100BASE-TX | 1995 | 100 Mbps | Cat5 UTP           | 100 m       |
| 1000BASE-T | 1999 | 1 Gbps   | Cat5e UTP          | 100 m       |
| 10GBASE-T  | 2006 | 10 Gbps  | Cat6a UTP          | 100 m       |
| 40GBASE-T  | 2018 | 40 Gbps  | Cat8 UTP           | 30 m        |

Each generation maintained backward compatibility at the physical layer while dramatically
increasing throughput. The shift from shared medium (coax, hubs) to switched (full-duplex point-to-
point links) was the most operationally significant change.

## Ethernet II Frame Structure

Every Ethernet frame transmitted on a LAN follows the same structure. The frame is transmitted
most-significant byte first on the wire (big-endian bit order within each byte).

```
+----------+-----+-------------+------------+-----------+---------+-----+
| Preamble | SFD | Dest MAC    | Src MAC    | EtherType | Payload | FCS |
| 7 bytes  | 1 B | 6 bytes     | 6 bytes    | 2 bytes   | 46-1500 | 4 B |
+----------+-----+-------------+------------+-----------+---------+-----+
|<---        8 bytes        --->|<----      14 bytes              --->|
|<--------                    64 - 1518 bytes total               -------->|
```

### Preamble (7 bytes)

The preamble consists of 7 bytes of alternating 1s and 0s: `10101010` repeated 7 times (56 bits).
Its purpose is to allow the receiver's clock to synchronize with the transmitter's clock. The
preamble is not counted as part of the frame for minimum/maximum size calculations.

### Start Frame Delimiter -- SFD (1 byte)

The SFD is a single byte: `10101011`. The last two bits signal the end of the preamble and the start
of the actual frame. The receiver uses this byte to identify exactly where the destination MAC
address begins.

### Destination MAC Address (6 bytes)

The 48-bit MAC address of the intended recipient. Can be unicast, multicast, or broadcast.

### Source MAC Address (6 bytes)

The 48-bit MAC address of the sender. Always unicast (a frame should never be sourced from a
multicast or broadcast address).

### EtherType (2 bytes)

Identifies the protocol encapsulated in the payload. Common values:

| EtherType (hex) | Protocol     |
| --------------- | ------------ |
| 0x0800          | IPv4         |
| 0x86DD          | IPv6         |
| 0x0806          | ARP          |
| 0x8035          | RARP         |
| 0x8100          | 802.1Q VLAN  |
| 0x8864          | PPPoE        |
| 0x8847          | MPLS Unicast |
| 0x88CC          | LLDP         |

When the value is $\le$ 1500 (0x05DC), the field is interpreted as a Length field (802.3 frame)
rather than an EtherType, and the encapsulated protocol is identified by the LLC/SNAP header.

### Payload (46 -- 1500 bytes)

The encapsulated Layer 3 (or Layer 2.5) data. The minimum of 46 bytes exists to ensure that the
total frame (excluding preamble/SFD) is at least 64 bytes, which is required for CSMA/CD collision
detection to work correctly. If the actual data is shorter than 46 bytes, padding bytes are added.

The maximum transmission unit (MTU) for standard Ethernet is 1500 bytes. Jumbo frames extend this to
9000 bytes or more, but require support on every device in the path.

### Frame Check Sequence -- FCS (4 bytes)

A 32-bit CRC (Cyclic Redundancy Check) computed over the entire frame (from Destination MAC through
the end of the Payload). The FCS is appended by the sender and verified by the receiver. If the CRC
does not match, the frame is silently dropped. Layer 2 does not request retransmission -- that is
TCP's responsibility (Layer 4).

The CRC-32 polynomial used is:

$$
G(x) = x^{32} + x^{26} + x^{23} + x^{22} + x^{16} + x^{12} + x^{11} + x^{10} + x^8 + x^7 + x^5 + x^4 + x^2 + x + 1
$$

This polynomial can detect all single-bit errors, all double-bit errors, any odd number of errors,
and any burst error of 32 bits or fewer.

## MAC Addressing

### Format

A MAC address is a 48-bit identifier typically written in hexadecimal as six groups of two digits
separated by colons or hyphens:

```
00:1A:2B:3C:4D:5E    (colon notation -- common on Linux/macOS)
00-1A-2B-3C-4D-5E    (hyphen notation -- common on Windows)
001A.2B3C.4D5E       (dot notation -- Cisco)
```

The first three octets form the **Organizationally Unique Identifier (OUI)**, assigned by IEEE to
hardware manufacturers. The last three octets are assigned by the manufacturer to each individual
interface.

OUI lookup example:

- `00:1A:2B` -- assigned to a specific vendor
- `F8:FF:0A` -- another vendor's prefix

### U/L Bit and I/G Bit

The first byte of the MAC address contains two special bits:

```
Bit 0 (LSB of first byte): I/G (Individual/Group)
  0 = Unicast (intended for a single specific host)
  1 = Group (multicast or broadcast)

Bit 1: U/L (Universally/Locally administered)
  0 = Universally administered (assigned by IEEE, burned into NIC)
  1 = Locally administered (assigned by network administrator)
```

For example, if the first byte is `0x0A`:

```
Binary: 0000 1010
Bit 0 (I/G): 0 -> Unicast
Bit 1 (U/L): 1 -> Locally administered
```

### Address Types

**Unicast:** Frame is destined for a single specific NIC. The I/G bit is 0.

**Broadcast:** Frame is destined for all devices on the LAN. The destination MAC is
`FF:FF:FF:FF:FF:FF`. The I/G bit is 1.

**Multicast:** Frame is destined for a group of devices that have registered for a particular
multicast group. In Ethernet, multicast addresses have the I/G bit set to 1, meaning the least
significant bit of the first octet is 1. For example, `01:00:5E:00:00:01` is a multicast address
used by IPv4 multicast group 224.0.0.1.

### MAC Address Table Size Limits

Enterprise switches typically support between 8,000 and 1,000,000+ MAC address table entries. When
the table fills, new addresses either replace the oldest entries (LRU eviction) or cause the switch
to flood frames to all ports, degrading performance. Plan your network segmentation accordingly.

## CSMA/CD

### Overview

Carrier Sense Multiple Access with Collision Detection (CSMA/CD) is the media access control method
used in half-duplex Ethernet. It is defined in IEEE 802.3 and is the reason for the 64-byte minimum
frame size.

The algorithm works as follows:

1. **Carrier Sense.** Before transmitting, a station listens to the medium. If the medium is busy,
   the station defers and waits until it is idle.
2. **Multiple Access.** Multiple stations share the same medium. Any station can transmit when the
   medium is idle.
3. **Collision Detection.** While transmitting, the station monitors the medium. If it detects a
   signal that differs from what it is sending (indicating another station is transmitting
   simultaneously), a collision has occurred.

### Collision Handling

When a collision is detected:

1. The station sends a 32-bit **jam signal** to ensure all stations on the segment detect the
   collision.
2. Both stations stop transmitting.
3. Each station selects a random **backoff period** using the binary exponential backoff algorithm.
4. After the backoff period, the station attempts to retransmit.

### Binary Exponential Backoff

After the $n$-th collision ($n = 1, 2, 3, \ldots$), the station picks a random integer $r$ uniformly
from the range $\{0, 1, \ldots, 2^k - 1\}$ where:

$$
k = \min(n, 10)
$$

The station waits for $r \times 512$ bit times before retransmitting. A "bit time" at 10 Mbps is 100
nanoseconds, so each slot time is $512 \times 100\mathrm{ ns} = 51.2\,\mu\mathrm{s}$.

The maximum backoff occurs after 10 collisions: $k = 10$, giving a range of $\{0, 1, \ldots,
1023\}$.
After 16 consecutive collisions, the station gives up and reports an error to the upper layer.

<details>
<summary>Worked example: backoff calculation</summary>

A station on a 10 Mbps Ethernet network experiences its 4th collision while attempting to transmit a
frame. Calculate the backoff range.

$k = \min(4, 10) = 4$

Backoff range: $\{0, 1, 2, \ldots, 2^4 - 1\} = \{0, 1, 2, \ldots, 15\}$

Slot time = 512 bit times = 51.2 microseconds

If the random number selected is $r = 7$, the station waits:

$$
7 \times 51.2\,\mu\mathrm{s} = 358.4\,\mu\mathrm{s}
$$

before attempting retransmission.

</details>

### Why 64 Bytes Minimum

The minimum frame size of 64 bytes (46 bytes payload + 14 bytes header + 4 bytes FCS) is directly
tied to CSMA/CD. The worst-case round-trip propagation delay on a 10 Mbps Ethernet segment (2500 m
with 4 repeaters) is approximately 51.2 microseconds, which is exactly 512 bit times. A station must
be able to detect a collision before it finishes transmitting the minimum-size frame. At 10 Mbps,
transmitting 64 bytes takes:

$$
\frac{64 \times 8}{10 \times 10^6} = 51.2\,\mu\mathrm{s}
$$

This ensures that any collision on the segment will be detected before the transmitting station
finishes sending the minimum frame. If the frame were shorter, a station at one end of the segment
might finish transmitting before the collision signal from the far end arrives, leading to an
undetected collision.

## Full-Duplex vs Half-Duplex Ethernet

| Property           | Half-Duplex                       | Full-Duplex                                   |
| ------------------ | --------------------------------- | --------------------------------------------- |
| Direction          | One at a time (send or receive)   | Simultaneous send and receive                 |
| CSMA/CD            | Required                          | Not used                                      |
| Collision domain   | Shared segment                    | Point-to-point link                           |
| Minimum frame size | 64 bytes enforced                 | Not enforced (but standard frames still used) |
| Cable              | Single pair (old coax) or 2 pairs | Separate TX/RX pairs                          |
| Modern use         | Legacy/hubs only                  | Switches, virtually universal                 |

Full-duplex Ethernet eliminates collisions entirely because each station has dedicated transmit and
receive paths. A switch port connected to a single host is inherently full-duplex -- there is no
shared medium to contend with. CSMA/CD is disabled on full-duplex links.

Half-duplex only exists when a hub is in the path. Hubs are physical-layer repeaters that forward
all received signals to all other ports. Every port on a hub is in the same collision domain. Hubs
have been obsolete for over two decades.

## Ethernet Standards Comparison

| Standard   | Speed    | Medium    | Encoding        | Pairs | Max Distance | Notes                       |
| ---------- | -------- | --------- | --------------- | ----- | ------------ | --------------------------- |
| 10BASE-T   | 10 Mbps  | Cat3+ UTP | Manchester      | 2     | 100 m        | Half/full duplex            |
| 100BASE-TX | 100 Mbps | Cat5 UTP  | 4B5B + MLT-3    | 2     | 100 m        | Full duplex                 |
| 1000BASE-T | 1 Gbps   | Cat5e UTP | PAM-5 (4D-PAM5) | 4     | 100 m        | Bi-directional on all pairs |
| 10GBASE-T  | 10 Gbps  | Cat6a UTP | 16QAM / DSQ128  | 4     | 100 m        | 400 MHz bandwidth           |
| 40GBASE-T  | 40 Gbps  | Cat8 UTP  | PAM-16          | 4     | 30 m         | 2 GHz bandwidth             |

### Fiber Variants

Fiber optic Ethernet variants are common in data center and campus backbone deployments:

| Standard     | Speed    | Fiber Type             | Wavelength  | Max Distance      |
| ------------ | -------- | ---------------------- | ----------- | ----------------- |
| 1000BASE-SX  | 1 Gbps   | Multimode (62.5/50 um) | 850 nm      | 275 m (50 um OM2) |
| 1000BASE-LX  | 1 Gbps   | Single-mode (9 um)     | 1310 nm     | 10 km             |
| 10GBASE-SR   | 10 Gbps  | Multimode (50 um)      | 850 nm      | 300 m (OM3)       |
| 10GBASE-LR   | 10 Gbps  | Single-mode (9 um)     | 1310 nm     | 10 km             |
| 40GBASE-SR4  | 40 Gbps  | Multimate (50 um)      | 850 nm      | 100 m (OM3)       |
| 100GBASE-LR4 | 100 Gbps | Single-mode (9 um)     | 4 x 1310 nm | 10 km             |
| 400GBASE-DR4 | 400 Gbps | Single-mode (9 um)     | 4 x 1310 nm | 500 m             |

### 1000BASE-T Details

Gigabit Ethernet over copper (1000BASE-T) uses all four pairs of a Cat5e cable, with bidirectional
signaling on each pair. Unlike 10BASE-T and 100BASE-TX, which use separate pairs for transmit and
receive, 1000BASE-T uses digital signal processing to separate the simultaneous transmit and receive
signals on each pair. This is achieved through echo cancellation and hybrid circuits.

The symbol rate is 125 MBd (125 million symbols per second), and each symbol encodes 2 bits using
PAM-5 modulation (5 amplitude levels: -2, -1, 0, +1, +2). However, trellis coding and 4D-PAM5
encoding effectively transmit 1 byte per symbol across all four pairs:

$$
\mathrm{Line rate} = 125 \mathrm{ MBd} \times 8 \mathrm{ bits/symbol} = 1000 \mathrm{ Mbps}
$$

## Switching

### How a Switch Works

A Layer 2 switch operates at the data link layer. Its primary functions are:

1. **Learning.** When a frame arrives on a port, the switch records the source MAC address and the
   incoming port in its MAC address table (also called a CAM table -- Content Addressable Memory).
2. **Forwarding.** When a frame arrives, the switch looks up the destination MAC address in its
   table. If found, it forwards the frame only out the port associated with that MAC. If not found,
   it floods the frame out all ports except the incoming port (unknown unicast flooding).
3. **Filtering.** If the destination MAC is found and the associated port is the same as the
   incoming port, the switch drops the frame (the destination is on the same segment as the source).

### MAC Address Table

The MAC address table maps MAC addresses to switch ports:

```
MAC Address          Port    VLAN   Age
-------------------  ------  -----  ------
00:1A:2B:3C:4D:5E   Gi0/1   10     120
00:1A:2B:3C:4D:5F   Gi0/2   10     85
00:1A:2B:3C:4D:60   Gi0/5   20     200
FF:FF:FF:FF:FF:FF    --      --     --     (never learned)
```

### Aging

MAC address table entries have an aging timer (default: 300 seconds on Cisco switches). If a MAC
address is not seen in frames arriving on its associated port within the aging period, the entry is
removed. This handles cases where devices are moved to different ports or removed from the network.

Static MAC entries can be configured to prevent aging:

```
mac address-table static 00:1A:2B:3C:4D:5E vlan 10 interface Gi0/1
```

### Flooding Behavior

A switch floods the following frame types to all ports in the same VLAN (except the incoming port):

- **Unknown unicast.** The destination MAC is not in the MAC address table.
- **Broadcast.** The destination MAC is `FF:FF:FF:FF:FF:FF`.
- **Multicast.** The destination MAC has the I/G bit set (unless IGMP snooping is enabled).

Flooding is necessary but can be wasteful. Large broadcast domains with excessive flooding degrade
performance. This is one of the primary reasons for VLAN segmentation.

### MAC Address Table Exhaustion

An attacker can fill a switch's MAC address table by sending frames with random source MAC
addresses. When the table is full, the switch can no longer learn legitimate addresses and must
flood all frames, effectively turning the switch into a hub. This allows the attacker to capture
traffic from other VLANs on the same switch (if port security is not configured).

Countermeasures:

- **Port security:** Limit the number of MAC addresses learned per port.
- **Dynamic ARP inspection (DAI):** Validate ARP packets.
- **DHCP snooping:** Track legitimate MAC-to-IP bindings.

## VLANs

### What Are VLANs?

A Virtual Local Area Network (VLAN) is a logical broadcast domain created at Layer 2. Devices in the
same VLAN can communicate with each other as if they were on the same physical switch, even if they
are on different switches. Devices in different VLANs cannot communicate at Layer 2 -- they require
a router (Layer 3 device) for inter-VLAN routing.

### 802.1Q Tagging

IEEE 802.1Q inserts a 4-byte tag between the Source MAC and the EtherType field:

```
+----------+----------+-----------+-------------+-----------+---------+-----+
| Dest MAC | Src MAC  | 802.1Q    | EtherType   | Payload   | FCS     |
| 6 bytes  | 6 bytes  | Tag       | 2 bytes     | 46-1500   | 4 bytes |
|          |          | 4 bytes   |             |           |         |
+----------+----------+-----------+-------------+-----------+---------+-----+
                      |TPID|PCP|DEI|    VID     |
                      |2B  |3b |1b |   12 bits  |
```

- **TPID (Tag Protocol Identifier):** `0x8100` -- identifies this as an 802.1Q tagged frame.
- **PCP (Priority Code Point):** 3 bits -- used for QoS (802.1p). Values 0-7 map to traffic classes.
- **DEI (Drop Eligible Indicator):** 1 bit -- marks frames eligible for dropping during congestion.
- **VID (VLAN Identifier):** 12 bits -- identifies the VLAN (0-4095). VID 0 is reserved, VID 4095 is
  reserved. Usable range: 1-4094.

The tagged frame increases the maximum frame size from 1518 to 1522 bytes. This is sometimes called
a "jumbo" frame by older devices that do not support 802.1Q, but modern switches handle it
correctly.

### Access Ports vs Trunk Ports

| Property        | Access Port                                              | Trunk Port                              |
| --------------- | -------------------------------------------------------- | --------------------------------------- |
| Tagged frames   | No -- strips tags on egress, expects untagged on ingress | Yes -- carries multiple VLANs with tags |
| VLAN membership | Single VLAN (access VLAN)                                | Multiple VLANs (allowed VLAN list)      |
| Native VLAN     | N/A (or assigns frames to access VLAN)                   | Untagged traffic mapped to native VLAN  |
| Typical use     | End devices (PCs, printers, servers)                     | Switch-to-switch, switch-to-router      |

Configuration example (Cisco):

```
! Access port
interface Gi0/1
  switchport mode access
  switchport access vlan 10

! Trunk port
interface Gi0/24
  switchport mode trunk
  switchport trunk allowed vlan 10,20,30
  switchport trunk native vlan 99
```

### Native VLAN

The native VLAN is the VLAN assigned to untagged traffic on a trunk port. By default, Cisco switches
use VLAN 1 as the native VLAN. Best practice is to change the native VLAN to an unused VLAN (e.g.,
VLAN 999) and prune VLAN 1 from all trunks.

If the native VLAN mismatches between two switches on a trunk, the switches will still form a trunk,
but traffic on the native VLAN will not be tagged, leading to potential security issues and
connectivity problems.

### VLAN Hopping Prevention

VLAN hopping is an attack where an attacker sends traffic from one VLAN to another without a router.

**Double tagging attack:** The attacker sends a frame with two 802.1Q tags. The first switch (with a
matching native VLAN) strips the outer tag and forwards the frame. The second switch sees the inner
tag and forwards the frame to the target VLAN.

Prevention:

1. **Do not use the native VLAN for any legitimate traffic.** Set the native VLAN to an unused,
   dedicated VLAN (e.g., VLAN 999).
2. **Explicitly tag the native VLAN:** `switchport trunk native vlan tag` (Cisco IOS 15.2+).
3. **Prune unnecessary VLANs from trunks:** `switchport trunk allowed vlan 10,20,30`.
4. **Disable unused ports and place them in a dead VLAN:**
   ```
   interface range Gi0/1-23
     shutdown
     switchport mode access
     switchport access vlan 999
   ```

## Spanning Tree Protocol (STP)

### Purpose

STP (IEEE 802.1D) prevents Layer 2 loops in networks with redundant paths. Without STP, a loop
creates a broadcast storm: frames circulate indefinitely, consuming all bandwidth and bringing down
the network.

### Root Bridge Election

STP elects a single root bridge for the entire bridged network. All paths lead to the root bridge,
and STP blocks redundant paths.

The root bridge is the switch with the lowest **Bridge ID (BID)**:

$$
\mathrm{BID} = \mathrm{Bridge Priority (16 bits)} + \mathrm{MAC Address (48 bits)}
$$

The default bridge priority is 32768. The priority is configurable in increments of 4096: 0, 4096,
8192, ..., 61440.

<details>
<summary>Worked example: root bridge election</summary>

Three switches with the following BIDs:

- Switch A: Priority 32768, MAC 00:1A:2B:3C:4D:01 -> BID = 32768.00:1A:2B:3C:4D:01
- Switch B: Priority 8192, MAC 00:1A:2B:3C:4D:02 -> BID = 8192.00:1A:2B:3C:4D:02
- Switch C: Priority 32768, MAC 00:1A:2B:3C:4D:03 -> BID = 32768.00:1A:2B:3C:4D:03

Switch B has the lowest BID (8192 < 32768) and is elected root bridge.

If you want Switch A to be the root bridge instead:

```
spanning-tree vlan 1 priority 4096
```

This sets Switch A's priority to 4096, making its BID lower than Switch B's 8192.

</details>

### Port States (802.1D)

| State      | Forwards Data | Learns MACs | Duration             |
| ---------- | ------------- | ----------- | -------------------- |
| Disabled   | No            | No          | Administrative       |
| Blocking   | No            | No          | Stable               |
| Listening  | No            | No          | Forward delay (15 s) |
| Learning   | No            | Yes         | Forward delay (15 s) |
| Forwarding | Yes           | Yes         | Stable               |

The total time from blocking to forwarding is the **max age** (20 s) + 2 x **forward delay** (30 s)
= 50 seconds in the worst case. This is painfully slow for modern networks.

### BPDU (Bridge Protocol Data Unit)

STP uses BPDUs to exchange topology information. There are two types:

- **Configuration BPDU:** Sent by the root bridge every 2 seconds (hello time). Contains the root
  BID, root path cost, sender BID, and port IDs.
- **TCN (Topology Change Notification) BPDU:** Sent by a non-root bridge when it detects a topology
  change (port going up/down).

### RSTP (802.1w) Improvements

Rapid Spanning Tree Protocol (RSTP, IEEE 802.1w) reduces convergence time from 50 seconds to a few
seconds or less. Key improvements:

| Feature             | STP (802.1D)                                            | RSTP (802.1w)                            |
| ------------------- | ------------------------------------------------------- | ---------------------------------------- |
| Port states         | 5 (blocking, listening, learning, forwarding, disabled) | 3 (discarding, learning, forwarding)     |
| Convergence         | 30-50 seconds                                           | 1-10 seconds (often sub-second)          |
| Sync mechanism      | Timer-based                                             | Proposal/Agreement handshake             |
| Edge ports          | No concept                                              | Explicitly defined (PortFast equivalent) |
| Link type detection | No                                                      | Point-to-point vs shared                 |

RSTP uses a proposal/agreement mechanism: when a port becomes designated, it proposes itself as the
forwarding port. The downstream switch acknowledges (agrees) only if all its non-edge ports are in
sync (blocking or discarding). This allows rapid convergence without waiting for timers.

PortFast (on Cisco) should be enabled on all edge ports (end devices) to skip the listening/learning
states:

```
interface Gi0/1
  spanning-tree portfast
  spanning-tree bpduguard enable
```

BPDU Guard shuts down the port if a BPDU is received, preventing an attacker from introducing a
rogue switch that could become the root bridge.

## Link Aggregation (LACP)

### Purpose

Link aggregation (also called port channeling, bonding, or teaming) combines multiple physical links
into a single logical link. This provides:

- **Increased bandwidth.** Aggregate throughput of all member links.
- **Redundancy.** If one link fails, traffic is redistributed to the remaining links.
- **Load balancing.** Traffic is distributed across member links using a hash algorithm.

### LACP (802.3ad / 802.1AX)

The Link Aggregation Control Protocol (LACP) is defined in IEEE 802.3ad (originally) and superseded
by 802.1AX. LACP provides dynamic negotiation of link aggregation groups between two devices.

Each port has an LACP port priority (default 32768, configurable in increments of 1) and an
administrative key. Ports with the same key on the same device form a LAG (Link Aggregation Group).

### Active vs Passive Mode

- **Active:** Actively sends LACPDU frames to negotiate aggregation.
- **Passive:** Responds to LACPDUs but does not initiate negotiation. Used when one side should not
  actively form the LAG.

At least one side must be active for the LAG to form.

Configuration example (Cisco):

```
interface range Gi0/1-2
  channel-group 1 mode active

interface Port-channel1
  switchport mode trunk
  switchport trunk allowed vlan 10,20
  lacp max-bundle 2
  lacp system-priority 100
```

### Load Balancing

LACP distributes traffic across member links using a hash of:

- Source MAC, destination MAC, or both
- Source IP, destination IP, or both
- Source port, destination port, or both (Layer 4)
- A combination of the above

The hash is deterministic -- the same flow always maps to the same link. This means traffic from a
single flow cannot exceed the bandwidth of one physical link, regardless of the total number of
links in the LAG.

```
port-channel load-balance src-dst-ip    ! hash on src+dst IP
port-channel load-balance src-dst-mac   ! hash on src+dst MAC
port-channel load-balance src-dst-port  ! hash on src+dst port (Layer 4)
```

## ARP (Address Resolution Protocol)

### Operation

ARP resolves IPv4 addresses to MAC addresses. When a host needs to send a packet to an IP address on
the same subnet, it uses ARP to discover the destination's MAC address.

1. The sender checks its **ARP cache** for an existing mapping.
2. If no mapping exists, the sender broadcasts an **ARP Request**: "Who has 192.168.1.100? Tell
   192.168.1.1."
3. The host with IP 192.168.1.100 replies with a unicast **ARP Reply**: "192.168.1.100 is at
   00:1A:2B:3C:4D:5E."
4. The sender caches the mapping and sends the Ethernet frame.

ARP packet format:

```
+----------+----------+-----------+-----------+----------+-----------+
| HTYPE    | PTYPE    | HLEN      | PLEN      | OPER     |           |
| 2 bytes  | 2 bytes  | 1 byte    | 1 byte    | 2 bytes  |           |
| 0x0001   | 0x0800   | 6         | 4         | 1=req    |           |
|          |          |           |           | 2=reply  |           |
+----------+----------+-----------+-----------+----------+-----------+
| Sender MAC (6 bytes)  | Sender IP (4 bytes)                 |
+-----------------------+--------------------------------------+
| Target MAC (6 bytes)  | Target IP (4 bytes)                 |
+-----------------------+--------------------------------------+
```

### Gratuitous ARP

A gratuitous ARP is an ARP request (or reply) where the sender and target IP are the same. It is
used for:

1. **Duplicate address detection.** When a host boots, it sends a gratuitous ARP for its own IP. If
   another host replies, there is an IP address conflict.
2. **ARP cache update.** When a host's MAC address changes (e.g., NIC replacement, failover), it
   sends a gratuitous ARP to update other hosts' caches.
3. **VRRP/HSRP failover notification.** When a virtual router failover occurs, the new active router
   sends a gratuitous ARP to update the network's ARP caches.

### Proxy ARP

Proxy ARP allows a router to answer ARP requests on behalf of a host on another subnet. When host A
(192.168.1.10) sends an ARP request for host B (192.168.2.20), the router responds with its own MAC
address. Host A then sends frames destined for host B to the router, which forwards them.

Proxy ARP is generally considered a legacy feature. Modern networks use proper subnetting and
routing instead. It can cause confusion because hosts believe remote hosts are on the local subnet.

### ARP Cache

The ARP cache maps IP addresses to MAC addresses and has a limited lifetime (typically 20-60 minutes
on Linux, 4 hours on Windows). Viewing the ARP cache:

```
# Linux
ip neigh show
arp -an

# Windows
arp -a
```

Entries can be static (permanent) or dynamic (learned via ARP). Static ARP entries are used to
prevent ARP spoofing in small, controlled environments:

```
# Linux -- static ARP entry
ip neigh add 192.168.1.100 lladdr 00:1A:2B:3C:4D:5E dev eth0 nud permanent
```

### ARP Spoofing

An attacker sends forged ARP replies to associate the attacker's MAC address with the victim's IP
address (or the gateway's IP address). This redirects traffic through the attacker, enabling
man-in-the-middle attacks.

Countermeasures:

- **Dynamic ARP Inspection (DAI):** Validates ARP packets against a trusted database (DHCP snooping
  binding table).
- **Static ARP entries:** For critical devices (gateways, servers).
- **ARP monitoring tools:** arpwatch, XArp.

## Common Pitfalls

### MTU Mismatches

An MTU mismatch between two devices on the same path causes black holes for large packets. If a
switch is configured with an MTU of 9000 (jumbo frames) but the endpoint is at 1500, the endpoint
sends packets that the switch can forward, but intermediate devices with 1500-byte MTU may drop
them. If ICMP is blocked, Path MTU Discovery fails and the connection stalls.

### VLAN 1 as Native VLAN

Using the default VLAN 1 for any traffic is a well-known risk. Every trunk port carries VLAN 1 by
default, creating an unnecessarily large broadcast domain. Always prune VLAN 1 from trunks and
assign the native VLAN to an unused, dedicated VLAN.

### STP Misconfiguration

The most common STP mistakes are:

1. **No root bridge planning.** Leaving the default priority on all switches means the root bridge
   is elected arbitrarily. The root bridge should be the most central, most powerful switch.
2. **BPDU Guard not enabled on edge ports.** Without BPDU Guard, any device (or attacker) connected
   to an edge port can participate in STP and potentially become root bridge.
3. **Mixing STP and RSTP.** Older devices running 802.1D force the network to fall back to legacy
   STP timers, negating RSTP's convergence benefits.
4. **Ignoring STP entirely.** Some administrators disable STP to "eliminate convergence delays."
   This is catastrophic if any physical loop exists in the network.

### ARP on Different Subnets

ARP operates at Layer 2 and only works within the same broadcast domain. If two hosts are on
different subnets, ARP will not reach the destination. The sender must ARP for its default gateway,
not the destination host. A common error is trying to ARP for a remote address and getting no reply.

### Port Security Not Configured

Without port security, any device can connect to any switch port and start sending traffic. In an
office environment, this means a visitor can plug in a laptop and access the network. In a data
center, it means a compromised server can spoof MAC addresses and potentially bypass network
segmentation.

## Practice Problems

### Problem 1: Ethernet Frame Analysis

An Ethernet frame has the following hex dump (starting from the destination MAC):

```
FF:FF:FF:FF:FF:FF  00:1A:2B:3C:4D:5E  08 06  00 01  08 00  06  04  00 01
00:1A:2B:3C:4D:5E  C0 A8 01 0A  00 00 00 00 00 00  C0 A8 01 14
```

Identify the destination MAC, source MAC, EtherType, and determine what type of frame this is.

<details>
<summary>Answer</summary>

- **Destination MAC:** `FF:FF:FF:FF:FF:FF` -- broadcast
- **Source MAC:** `00:1A:2B:3C:4D:5E`
- **EtherType:** `0x0806` -- ARP
- **Frame type:** This is an ARP request broadcast frame. The sender IP is `192.168.1.10`
  (`C0 A8 01 0A`) and the target IP is `192.168.1.20` (`C0 A8 01 14`). The target MAC is
  `00:00:00:00:00:00`, indicating it is unknown (this is a request).

</details>

### Problem 2: CSMA/CD Backoff

A station on a 100 Mbps Ethernet network has experienced 6 collisions while trying to transmit a
frame. Calculate:

a) The backoff slot range (number of possible slot values). b) The maximum wait time before the next
retransmission attempt. c) The slot time in microseconds.

<details>
<summary>Answer</summary>

a) $k = \min(6, 10) = 6$. Range: $\{0, 1, 2, \ldots, 2^6 - 1\} = \{0, 1, 2, \ldots, 63\}$. That is
64 possible values.

b) Maximum wait: $63 \times \mathrm{slot time}$.

c) Slot time at 100 Mbps is still 512 bit times (this is fixed regardless of speed):

$$
\frac{512}{100 \times 10^6} = 5.12\,\mu\mathrm{s}
$$

Maximum wait: $63 \times 5.12\,\mu\mathrm{s} = 322.56\,\mu\mathrm{s}$.

</details>

### Problem 3: MAC Address Interpretation

Given the MAC address `02:AA:BB:CC:DD:EE`:

a) Is this a unicast or multicast address? Justify. b) Is this a universally or locally administered
address? Justify. c) What is the OUI, and what is the device-specific portion?

<details>
<summary>Answer</summary>

a) The first byte is `0x02` = `0000 0010` in binary. Bit 0 (I/G) is 0, so this is a **unicast**
address.

b) Bit 1 (U/L) is 1, so this is a **locally administered** address.

c) **OUI:** `02:AA:BB` (first three octets). **Device-specific:** `CC:DD:EE` (last three octets).

Note: Since this is locally administered, the OUI is not an IEEE-assigned identifier. The full
address is assigned by the network administrator.

</details>

### Problem 4: VLAN Configuration

You are configuring a Cisco switch. Requirements:

- Ports Gi0/1-12: VLAN 10 (Engineering)
- Ports Gi0/13-24: VLAN 20 (Sales)
- Port Gi0/25: Trunk to core switch, carrying only VLANs 10 and 20
- Native VLAN on trunk: VLAN 999 (unused)
- Port Gi0/1 should have BPDU Guard enabled

Write the configuration commands.

<details>
<summary>Answer</summary>

```
vlan 10
  name Engineering
vlan 20
  name Sales
vlan 999
  name BLACKHOLE

interface range Gi0/1-12
  switchport mode access
  switchport access vlan 10
  spanning-tree portfast
  spanning-tree bpduguard enable

interface range Gi0/13-24
  switchport mode access
  switchport access vlan 20
  spanning-tree portfast
  spanning-tree bpduguard enable

interface Gi0/25
  switchport mode trunk
  switchport trunk allowed vlan 10,20
  switchport trunk native vlan 999
  spanning-tree portfast trunk
```

Note: BPDU Guard is explicitly enabled on Gi0/1 per the requirement. The remaining ports should also
have it enabled in production. The native VLAN 999 should not have any active ports assigned.

</details>

### Problem 5: STP Root Bridge

Four switches are connected in a full mesh topology. Their bridge priorities and MAC addresses are:

- SW1: Priority 32768, MAC 00:00:00:00:00:01
- SW2: Priority 16384, MAC 00:00:00:00:00:02
- SW3: Priority 16384, MAC 00:00:00:00:00:03
- SW4: Priority 8192, MAC 00:00:00:00:00:04

a) Which switch is the root bridge? b) If SW4 fails, which switch becomes the root bridge?

<details>
<summary>Answer</summary>

a) The root bridge has the lowest Bridge ID (priority + MAC). Comparing priorities:

- SW4: 8192 (lowest)
- SW2: 16384
- SW3: 16384
- SW1: 32768

SW4 is the root bridge.

b) If SW4 fails, the remaining switches are SW1 (32768), SW2 (16384), and SW3 (16384). SW2 and SW3
have the same priority, so the MAC address is the tiebreaker. SW2 has MAC `00:00:00:00:00:02` and
SW3 has MAC `00:00:00:00:00:03`. Since `02 < 03`, **SW2 becomes the root bridge**.

</details>

### Problem 6: LACP and Load Balancing

A LAG has 4 member links, each operating at 1 Gbps. You are running a backup job that transfers a
single large file from Server A to Server B.

a) What is the maximum throughput the backup job can achieve through the LAG? b) How would you
improve throughput for the backup job? c) What load-balancing method would you use for a web server
handling thousands of short-lived connections?

<details>
<summary>Answer</summary>

a) **1 Gbps.** LACP distributes traffic based on a hash. A single TCP flow (single source IP, dest
IP, source port, dest port combination) always hashes to the same link. The single backup stream
cannot utilize more than one physical link.

b) Use multiple parallel TCP streams (e.g., `tar | ssh` with multiple connections, or a tool like
`iperf -P 4`). Each stream may hash to a different link, utilizing more of the aggregate bandwidth.

c) **Source-destination IP hashing** (`src-dst-ip`). This distributes connections from different
clients across different links. Avoid Layer 2 (MAC) hashing, which sends all traffic from the same
subnet to the same link.

</details>

### Problem 7: ARP Cache and Gratuitous ARP

A server with IP 192.168.1.100 and MAC 00:11:22:33:44:55 is migrated to a new physical server with
the same IP but a new MAC address 00:AA:BB:CC:DD:EE. The default gateway (192.168.1.1) still has the
old ARP entry cached.

a) Why might connectivity fail initially? b) How does a gratuitous ARP solve this? c) If the
gateway's ARP cache timeout is 1200 seconds, what is the maximum downtime without gratuitous ARP?

<details>
<summary>Answer</summary>

a) The gateway has `192.168.1.100 -> 00:11:22:33:44:55` cached. It sends frames for the server to
the old MAC address, which no longer exists. The new server never receives the frames.

b) The new server sends a gratuitous ARP: an ARP request (or reply) with sender IP = 192.168.1.100
and sender MAC = 00:AA:BB:CC:DD:EE. The gateway receives this and updates its ARP cache with the new
MAC address.

c) Without gratuitous ARP, the gateway would continue sending frames to the old MAC for up to 1200
seconds (20 minutes), until the ARP entry expires and the gateway sends a new ARP request. During
this time, connectivity to the server would be completely down.

</details>

### Problem 8: 802.1Q Frame Size

A standard untagged Ethernet frame carries 1500 bytes of payload. What is the total frame size on
the wire when an 802.1Q tag is added? Include all fields.

<details>
<summary>Answer</summary>

Tagged frame breakdown:

- Preamble + SFD: 8 bytes (not counted in frame size)
- Destination MAC: 6 bytes
- Source MAC: 6 bytes
- 802.1Q Tag: 4 bytes (TPID + TCI)
- EtherType: 2 bytes
- Payload: 1500 bytes
- FCS: 4 bytes

Total frame size (excluding preamble/SFD): $6 + 6 + 4 + 2 + 1500 + 4 = 1522$ bytes.

Total bits on wire (including preamble/SFD): $(8 + 1522) \times 8 = 12240$ bits.

The 802.1Q tag adds 4 bytes to the frame, increasing the maximum from 1518 to 1522 bytes. This is
sometimes called a "baby giant" frame. Switches that do not support 802.1Q will drop frames larger
than 1518 bytes.

</details>
