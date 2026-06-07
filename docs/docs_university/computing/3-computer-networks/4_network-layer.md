---
title: Network Layer
tags:
  - Computing
  - University
---

### 4.1 IPv4 Addressing

An IPv4 address is a 32-bit number in dotted-decimal: `192.168.1.1`.

**IPv4 header format (20 bytes minimum):**

| Field          | Size    | Description                                   |
| -------------- | ------- | --------------------------------------------- |
| Version        | 4 bits  | Always 4                                      |
| IHL            | 4 bits  | Header length in 32-bit words (5 = 20 bytes)  |
| DSCP/ECN       | 8 bits  | Differentiated services / Explicit congestion |
| Total Length   | 16 bits | Entire packet size (header + data)            |
| Identification | 16 bits | Unique ID for fragments of the same datagram  |
| Flags          | 3 bits  | DF (Don't Fragment), MF (More Fragments)      |
| Fragment Off.  | 13 bits | Offset in 8-byte units                        |
| TTL            | 8 bits  | Time to live; decremented by each router      |
| Protocol       | 8 bits  | Upper-layer protocol (6=TCP, 17=UDP, 1=ICMP)  |
| Checksum       | 16 bits | Header checksum only                          |
| Src Address    | 32 bits | Source IPv4 address                           |
| Dst Address    | 32 bits | Destination IPv4 address                      |

**Address classes:**

| Class | Range                        | Default Mask  | First Bits |
| ----- | ---------------------------- | ------------- | ---------- |
| A     | 1.0.0.0 -- 126.255.255.255   | 255.0.0.0     | 0          |
| B     | 128.0.0.0 -- 191.255.255.255 | 255.255.0.0   | 10         |
| C     | 192.0.0.0 -- 223.255.255.255 | 255.255.255.0 | 110        |
| D     | 224.0.0.0 -- 239.255.255.255 | Multicast     | 1110       |
| E     | 240.0.0.0 -- 255.255.255.255 | Reserved      | 1111       |

**Special addresses:** `127.0.0.0/8` (loopback), `0.0.0.0` (this network), `255.255.255.255`
(broadcast).

### 4.2 Subnetting and CIDR

**Subnetting.** Borrow bits from the host portion to create subnets.

**Example.** Network `192.168.1.0/24` with `/26` mask (borrow 2 bits):

| Subnet           | Range                          | Broadcast     |
| ---------------- | ------------------------------ | ------------- |
| 192.168.1.0/26   | 192.168.1.1 -- 192.168.1.62    | 192.168.1.63  |
| 192.168.1.64/26  | 192.168.1.65 -- 192.168.1.126  | 192.168.1.127 |
| 192.168.1.128/26 | 192.168.1.129 -- 192.168.1.190 | 192.168.1.191 |
| 192.168.1.192/26 | 192.168.1.193 -- 192.168.1.254 | 192.168.1.255 |

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
Provides enough addresses (including network and broadcast).

| Subnet     | Hosts needed | $2^n$ | Prefix | Network           | Range        | Broadcast      |
| ---------- | ------------ | ----- | ------ | ----------------- | ------------ | -------------- |
| LAN A      | 60           | 64    | /26    | 192.168.10.0/26   | .1 -- .62    | 192.168.10.63  |
| LAN B      | 28           | 32    | /27    | 192.168.10.64/27  | .65 -- .94   | 192.168.10.95  |
| LAN C      | 12           | 16    | /28    | 192.168.10.96/28  | .97 -- .110  | 192.168.10.111 |
| LAN D      | 6            | 8     | /29    | 192.168.10.112/29 | .113 -- .118 | 192.168.10.119 |
| P2P Link 1 | 2            | 4     | /30    | 192.168.10.120/30 | .121 -- .122 | 192.168.10.123 |
| P2P Link 2 | 2            | 4     | /30    | 192.168.10.124/30 | .125 -- .126 | 192.168.10.127 |
| P2P Link 3 | 2            | 4     | /30    | 192.168.10.128/30 | .129 -- .130 | 192.168.10.131 |

**Remaining space:** 192.168.10.132/24 -- 192.168.10.255 (124 addresses for future use).

**Key insight:** VLSM avoids wasting addresses. Without VLSM, using /26 for all subnets would
require $7 \times 64 = 448$ addresses. With VLSM we use only 132 addresses.

</details>

### 4.3 IPv6

128-bit addresses: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`. Abbreviation rules: leading zeros in a
Group may be omitted; one consecutive group of all-zeros may be replaced with `::`.

**Key differences from IPv4:**

- Address space: $2^{128}$.
- No broadcast (uses multicast).
- Simplified header for faster processing.
- Mandatory IPsec support.
- No fragmentation at routers (only at source).

**IPv6 header format (40 bytes fixed):**

| Field         | Size    | Description                 |
| ------------- | ------- | --------------------------- |
| Version       | 4 bits  | Always 6                    |
| Traffic Class | 8 bits  | ECN and DSCP                |
| Flow Label    | 20 bits | QoS and flow identification |
| Payload Len   | 16 bits | Length of the payload       |
| Next Header   | 8 bits  | Type of extension header    |
| Hop Limit     | 8 bits  | Replaces IPv4 TTL           |

**IPv6 header analysis.** The fixed 40-byte header with no options field is a deliberate
simplification Over IPv4 (whose header ranges from 20 to 60 bytes). Every field is either fixed-size
or has a defined offset. This allows routers to process IPv6 packets faster because they never need
to Parse variable-length options. Optional functionality is moved to **extension headers**, which
are Chained via the Next Header field:

| Extension Header       | Next Header Value | Purpose                           |
| ---------------------- | ----------------- | --------------------------------- |
| Hop-by-Hop Options     | 0                 | Options processed by every router |
| Routing (Type 0)       | 43                | Source routing (deprecated)       |
| Fragment               | 44                | Fragmentation and reassembly      |
| Destination Options    | 60                | Options for destination only      |
| Authentication Header  | 51                | Integrity and authentication      |
| Encapsulating Security | 50                | Confidentiality and integrity     |

**Transition mechanisms:** Dual stack, tunnelling (encapsulate IPv6 in IPv4), translation (NAT64).

### 4.4 ARP

**Address Resolution Protocol** resolves IP addresses to MAC addresses on a local network.

1. Host needs to send a packet to IP address $B$.
2. Host checks its ARP cache for $B$'s MAC address.
3. If not cached, broadcast an ARP request: "Who has $B$? Tell $A$."
4. Host $B$ replies with its MAC address (unicast).
5. Host $A$ caches the mapping ( with a timeout of minutes).

**Gratuitous ARP.** A host broadcasts its own IP-to-MAC mapping, on startup or interface Change.
Used for duplicate address detection, cache updates, and failover in high-availability setups.

**ARP spoofing.** An attacker sends forged ARP messages to associate their MAC address with the IP
Address of a legitimate device, enabling man-in-the-middle attacks. Defences include static ARP
Entries, ARP inspection, and dynamic ARP protection (DAI).

### 4.5 NAT

**Network Address Translation** maps private addresses (RFC 1918: `10.0.0.0/8`
`172.16.0.0/12``192.168.0.0/16`) to public addresses.

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

1. B sets $d_B(A) = \infty$Advertises to C.
2. C still has $d_C(A) = 2$ via B, advertises $d_C(A) = 2$ to B.
3. B sets $d_B(A) = 3$ via C. C then sets $d_C(A) = 4$. This continues.

**Solution: Split horizon with poisoned reverse.** B advertises $d_B(A) = \infty$ to A (since B's
Route to A goes through A).

**Link State Routing.** Each router has complete topology. Uses Dijkstra's algorithm.

- **OSPF:** Hierarchical design (areas), VLSM support, fast convergence. Link-state advertisements
  (LSAs) flooded throughout the area. Each router runs Dijkstra on the full topology graph. Uses
  cost = $10^8 / \mathrm{bandwidth}(bps)$ by default.

**OSPF area design:**

- **Backbone area (Area 0):** All other areas must connect to it. All inter-area traffic passes
  through Area 0.
- **Non-backbone areas:** Summarise routes before advertising to Area 0. Types: standard, stub (no
  external routes), totally stubby (no external or inter-area routes), NSSA.
- **LSA types:** Type 1 (router LSA, intra-area), Type 2 (network LSA, intra-area), Type 3 (summary
  LSA, inter-area), Type 5 (external LSA, redistributed routes).

**OSPF adjacency states:** Down, Init, 2-Way, ExStart, Exchange, Loading, Full.

**OSPF packet fields:**

| Field              | Description                           |
| ------------------ | ------------------------------------- |
| Header             | Version, area ID, router ID, checksum |
| LSA type           | Router-LSA, Network-LSA, Summary-LSA  |
| Link ID            | Identifies the described object       |
| Advertising router | Router originating the LSA            |
| Sequence number    | Detects stale or duplicate LSAs       |
| Age                | Time since LSA originated (seconds)   |

**Path Vector Routing (BGP).** Used for inter-domain routing. Carries the full AS path to each
Destination, not just the distance.

- **eBGP:** Between different ASes. **iBGP:** Within the same AS.
- **Attributes:** `AS_PATH` (loop prevention), `NEXT_HOP``LOCAL_PREF` (exit preference), `MED`
  (entry preference), origin type.
- **Decision process:** Highest `LOCAL_PREF`Shortest `AS_PATH`Lowest origin, lowest `MED` eBGP over
  iBGP, lowest IGP cost to `NEXT_HOP`Lowest router ID.

**BGP route advertisement:**

```
AS 65001 -> AS 65002: reach 203.0.113.0/24, AS_PATH = 65001
AS 65002 -> AS 65003: reach 203.0.113.0/24, AS_PATH = 65001 65002
```

AS 65003 rejects any route containing its own AS number (loop prevention).

**BGP attributes in detail:**

- **Well-known mandatory:** `AS_PATH``NEXT_HOP``ORIGIN` (IGP $\lt$ EGP $\lt$ Incomplete).
- **Well-known discretionary:** `LOCAL_PREF` (not sent to eBGP peers; influences outbound traffic).
- **Optional transitive:** `COMMUNITY` (tag routes for policy), `MP_REACH_NLRI` (IPv6/VPNv4).
- **Optional non-transitive:** `MED` (suggestion to neighbour about preferred entry point; lower is
  better; compared only for routes from the same neighbouring AS).

**iBGP full mesh requirement.** Within an AS, all iBGP speakers must be fully meshed (or use route
Reflectors/confederations) because iBGP does not re-advertise routes learned from other iBGP peers.
This prevents routing loops within the AS.

**Routing protocol comparison:**

| Feature      | RIP                | OSPF                   | BGP                  |
| ------------ | ------------------ | ---------------------- | -------------------- |
| Type         | Distance Vector    | Link State             | Path Vector          |
| Algorithm    | Bellman-Ford       | Dijkstra               | Policy-based         |
| Metric       | Hop count (max 15) | Cost (bandwidth-based) | AS_PATH + attributes |
| Scope        | AS (interior)      | AS (interior)          | Inter-domain         |
| Convergence  | Slow               | Fast                   | Configurable         |
| Updates      | Periodic (30 s)    | Triggered (LSA flood)  | Incremental          |
| Scalability  | Small networks     | Large networks         | Internet-scale       |
| Hierarchy    | Flat               | Areas                  | AS-based             |
| VLSM support | RIPv2 only         | Yes                    | Yes                  |

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

**Initialisation.** Set $d(A) = 0$, $d(\mathrm{all}\;others) = \infty$. Unvisited =
$\{A, B, C, D, E, F\}$.

**Visit A** ($d = 0$). Neighbours: B (cost 3), D (cost 4). Update: $d(B) = 3$Prev$(B) = A$.
$d(D) = 4$Prev$(D) = A$.

**Visit B** ($d = 3$Smallest unvisited). Neighbours: A (skip), C (3 + 2 = 5), E (3 + 1 = 4). Update:
$d(C) = 5$Prev$(C) = B$. $d(E) = 4$Prev$(E) = B$.

**Visit D** ($d = 4$). Neighbours: A (skip), E (4 + 6 = 10, worse than 4). No updates.

**Visit E** ($d = 4$). Neighbours: B (skip), D (skip), F (4 + 3 = 7). Update:
$d(F) = 7$Prev$(F) = E$.

**Visit C** ($d = 5$). Neighbours: B (skip), F (5 + 5 = 10, worse than 7). No updates.

**Visit F** ($d = 7$). All neighbours visited. Done.

**Routing table at A:**

| Destination | Next Hop | Cost | Path             |
| ----------- | -------- | ---- | ---------------- |
| B           | B        | 3    | A -- B           |
| C           | B        | 5    | A -- B -- C      |
| D           | D        | 4    | A -- D           |
| E           | B        | 4    | A -- B -- E      |
| F           | B        | 7    | A -- B -- E -- F |

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
3. The Fragment Offset specifies the position of the fragment's data in the original datagram (in
   8-byte units).
4. Each fragment becomes an independent IP packet with its own IP header.
5. Only the receiver reassembles fragments; routers never reassemble.

<details>
<summary>Worked Example: IP Fragmentation</summary>

A 4000-byte datagram (20-byte header + 3980-byte data) must traverse a link with MTU = 1500 bytes.

Payload per fragment = MTU - IP header = 1500 - 20 = 1480 bytes.

The data size (3980 bytes) must be a multiple of 8 for fragmentation. The last fragment can be
Shorter, but the offset is in 8-byte units. 1480 is divisible by 8 ($1480/8 = 185$), so this Works
cleanly.

Number of fragments: $\lceil 3980 / 1480 \rceil = 3$.

| Fragment | Header | Data   | MF  | Offset | Total  |
| -------- | ------ | ------ | --- | ------ | ------ |
| 1        | 20 B   | 1480 B | 1   | 0      | 1500 B |
| 2        | 20 B   | 1480 B | 1   | 185    | 1500 B |
| 3        | 20 B   | 1020 B | 0   | 370    | 1040 B |

Total transmitted: 4040 bytes (40 bytes of additional headers due to fragmentation).

</details>

**Path MTU Discovery (PMTUD):** The sender sets the DF flag. If a router cannot forward, it returns
ICMP "Fragmentation Needed" and the sender reduces packet size. Preferred over fragmentation.

:::caution Common Pitfall When subnetting, remember that a `/31` prefix (RFC 3021) has exactly 2
addresses and is valid for Point-to-point links with no network or broadcast address. A `/32` is a
single host route. The Formula $2^n - 2$ usable hosts applies only for prefixes of `/30` or shorter.



