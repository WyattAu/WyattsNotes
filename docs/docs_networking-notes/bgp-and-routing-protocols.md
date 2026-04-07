---
title: BGP and Routing Protocols
date: 2026-04-07T00:00:00.000Z
tags:
  - Networking
categories:
  - Networking
slug: bgp-and-routing-protocols
---

## Overview

Routing is the process of selecting a path across a network for traffic to travel from a source to a
destination. Every packet your systems send -- whether it is an API call to another data center, a
DNS query to a resolver, or a user request to your load balancer -- relies on routing protocols to
determine where it goes.

This section covers the full spectrum of routing, from static routes on a single router to BGP
sessions between autonomous systems that make the Internet function. The emphasis is on practical
understanding: what each protocol does, how it makes decisions, where it fails, and how to
troubleshoot it.

## Routing Fundamentals

### Routed Protocols vs Routing Protocols

**Definition.** A **routed protocol** is a network-layer protocol that defines the packet format and
addressing used to deliver data from source to destination. IP (both IPv4 and IPv6) is a routed
protocol. A **routing protocol** is a protocol that routers use to dynamically share routing
information and build their routing tables. OSPF, BGP, and EIGRP are routing protocols.

Routed protocols carry user traffic. Routing protocols carry control traffic between routers. Do not
confuse them.

### The Routing Table

Every IP router maintains a routing table (also called the Routing Information Base, or RIB). Each
entry contains:

| Field       | Description                                                                       |
| ----------- | --------------------------------------------------------------------------------- |
| Destination | The network or host address being routed to (prefix)                              |
| Mask        | The subnet mask defining the prefix length                                        |
| Gateway     | The next-hop IP address                                                           |
| Interface   | The outgoing interface to reach the next hop                                      |
| Metric      | The cost of the route (lower is preferred unless administrative distance differs) |
| Protocol    | How the route was learned (connected, static, OSPF, BGP, etc.)                    |

On Cisco IOS, view the routing table with `show ip route`:

```
Router# show ip route
Codes: C - connected, S - static, R - RIP, O - OSPF, B - BGP
       D - EIGRP, N - NHRP, L - local

Gateway of last resort is 10.0.0.1 to network 0.0.0.0

S*   0.0.0.0/0 [1/0] via 10.0.0.1, Ethernet0/0
C    10.0.0.0/24 is directly connected, Ethernet0/0
O    192.168.1.0/24 [110/20] via 10.0.0.2, 00:03:12, Ethernet0/1
B    172.16.0.0/16 [20/0] via 10.0.0.3, 00:01:45
```

The bracket notation `[administrative distance/metric]` is critical for understanding which route
wins when multiple protocols advertise the same prefix.

### Route Sources

Routes enter the routing table from three sources:

1. **Directly connected routes.** Interfaces that are up and have an IP address configured.
   Administrative distance: 0. These are always the most trusted.

2. **Static routes.** Manually configured by an administrator. Administrative distance: 1 (default),
   configurable. Used when the network topology is simple or you need explicit control.

3. **Dynamic routes.** Learned through routing protocols (OSPF, BGP, EIGRP, RIP, IS-IS). Each
   protocol has a default administrative distance.

### Administrative Distance

**Definition.** **Administrative distance** (AD) is a value from 0 to 255 that a router uses to rate
the trustworthiness of a route source. When the same prefix is learned from multiple sources, the
route with the lowest AD is installed in the routing table. AD 0 is most trusted, 255 is
unreachable.

| Source           | Administrative Distance |
| ---------------- | ----------------------- |
| Connected        | 0                       |
| Static           | 1                       |
| EIGRP (summary)  | 5                       |
| EBGP             | 20                      |
| EIGRP (internal) | 90                      |
| IGRP             | 100                     |
| OSPF             | 110                     |
| IS-IS            | 115                     |
| RIP              | 120                     |
| EIGRP (external) | 170                     |
| iBGP             | 200                     |
| Unknown          | 255                     |

:::info
Administrative distance is a Cisco concept, but the principle exists in other vendors'
implementations under different names (route preference, distance, or trust value). The numeric
values may differ.
:::

When two routes for the same prefix have the same AD, the router compares metrics. When both AD and
metric match, the router may load-balance (equal-cost or unequal-cost, depending on the protocol).

## Static Routing

### Configuration

Static routes are manually configured. They do not adapt to topology changes, which is both their
strength (predictability, no protocol overhead) and their weakness (they do not fail over unless you
build that in).

```
ip route 192.168.2.0 255.255.255.0 10.0.0.2
```

This tells the router: "To reach 192.168.2.0/24, send packets to next-hop 10.0.0.2."

You can also specify the outbound interface instead of a next-hop:

```
ip route 192.168.2.0 255.255.255.0 Ethernet0/1
```

:::warning
Specifying an outbound interface instead of a next-hop on a multi-access network (like
Ethernet) requires proxy ARP to function correctly, which can cause unexpected behavior. Prefer
next-hop addresses on multi-access links.
:::

### Default Routes

A default route (also called a gateway of last resort) matches any destination not found in the
routing table. Every edge router needs one.

```
ip route 0.0.0.0 0.0.0.0 10.0.0.1
```

### Summary Routes

A summary route (or aggregate route) represents multiple more-specific routes with a single entry.
This reduces the size of the routing table.

For example, if you have 10.1.0.0/24, 10.1.1.0/24, 10.1.2.0/24, and 10.1.3.0/24, you can summarize
them as 10.1.0.0/22:

```
ip route 10.1.0.0 255.255.252.0 10.0.0.2
```

### Floating Static Routes

A floating static route is a backup route with a higher administrative distance. It is installed in
the routing table only when the primary route disappears.

```
ip route 0.0.0.0 0.0.0.0 10.0.0.1          ! primary, AD=1
ip route 0.0.0.0 0.0.0.0 10.0.0.5 10       ! backup, AD=10
```

If the primary link to 10.0.0.1 goes down, the floating static route via 10.0.0.5 takes over.

### When to Use Static vs Dynamic Routing

| Factor              | Static Routes                       | Dynamic Routing                          |
| ------------------- | ----------------------------------- | ---------------------------------------- |
| Network size        | Small, simple                       | Large, complex                           |
| Topology changes    | Rare or none                        | Frequent                                 |
| Administrative load | Low (initially), high to maintain   | Higher initial setup, lower ongoing      |
| Convergence         | None (or manual failover)           | Automatic                                |
| Bandwidth usage     | None                                | Protocol overhead                        |
| Predictability      | Full control                        | Protocol-dependent                       |
| Scalability         | Poor                                | Good                                     |
| Typical use case    | Stub networks, default routes, DMZs | Enterprise backbones, ISP core, Internet |

## Interior Gateway Protocols Overview

**Definition.** An **Interior Gateway Protocol** (IGP) is a routing protocol used to exchange
routing information within a single autonomous system (AS). OSPF, IS-IS, EIGRP, and RIP are IGPs.
BGP is an Exterior Gateway Protocol (EGP) used between autonomous systems.

### Distance Vector vs Link-State

IGPs fall into two algorithmic categories:

**Distance Vector** (RIP, EIGRP):

- Each router knows only its neighbors and the distance (metric) to each destination through those
  neighbors.
- Routers periodically send their entire routing table (or a subset) to neighbors.
- Convergence is slower because information propagates hop by hop.
- Prone to routing loops without additional mechanisms (split horizon, route poisoning).

**Link-State** (OSPF, IS-IS):

- Each router maintains a complete map of the network topology (the link-state database).
- Routers flood information about their directly connected links to all other routers in the area.
- Each router independently runs the SPF algorithm (Dijkstra) to compute the shortest path tree.
- Convergence is faster because every router has the same topological view.
- More memory and CPU intensive, but scales better for large networks.

### Protocol Comparison

| Protocol | Type            | Metric              | Convergence | Scalability | Complexity |
| -------- | --------------- | ------------------- | ----------- | ----------- | ---------- |
| RIP      | Distance vector | Hop count           | Slow        | Small       | Low        |
| EIGRP    | Hybrid          | Composite           | Fast        | Large       | Medium     |
| OSPF     | Link-state      | Cost (bandwidth)    | Fast        | Very large  | Medium     |
| IS-IS    | Link-state      | Cost (configurable) | Fast        | Very large  | High       |

## RIP (Routing Information Protocol)

RIP is the oldest IGP still in use. It is simple, well-understood, and adequate for very small
networks. For anything beyond a lab or a tiny office, use OSPF instead.

### RIPv1 vs RIPv2

| Feature        | RIPv1                    | RIPv2                     |
| -------------- | ------------------------ | ------------------------- |
| Transport      | UDP port 520             | UDP port 520              |
| Subnet masks   | Not supported (classful) | Included (classless/VLSM) |
| Authentication | None                     | Plain text or MD5         |
| Updates        | Broadcast                | Multicast (224.0.0.9)     |
| Next-hop       | Not supported            | Supported                 |

RIPv1 is obsolete. RIPv2 is still used in some legacy environments but should not be deployed in new
networks.

### Hop Count Limit

RIP uses hop count as its sole metric. The maximum hop count is 15. A destination at 16 hops is
considered unreachable. This limits RIP to networks where no path between any two routers exceeds 15
hops -- effectively small networks.

### Loop Prevention Mechanisms

RIP implements several mechanisms to prevent routing loops:

**Maximum hop count (16 = unreachable):** A route that increments past 15 hops is discarded.

**Split horizon:** A router does not advertise a route back out the interface through which it was
learned. This prevents the classic two-node routing loop.

**Route poisoning:** When a route becomes unreachable, the router advertises it with a metric of 16
(infinity) instead of waiting for the hold-down timer to expire. This speeds convergence.

**Hold-down timers:** After a route is marked as unreachable, the router suppresses any new
information about that route for a hold-down period (default 180 seconds). This prevents flapping
routes from causing instability.

**Triggered updates:** A router sends an immediate update when a route changes, rather than waiting
for the periodic update timer.

### Timers

| Timer           | Default | Purpose                                            |
| --------------- | ------- | -------------------------------------------------- |
| Update timer    | 30s     | Interval between periodic routing updates          |
| Invalid timer   | 180s    | Time after which a route is marked invalid         |
| Hold-down timer | 180s    | Time a route is held in a "possibly down" state    |
| Flush timer     | 240s    | Time after which a route is removed from the table |

### RIP Configuration

```
router rip
  version 2
  network 10.0.0.0
  network 192.168.1.0
  no auto-summary
```

### RIPng (RIP for IPv6)

RIPng operates on UDP port 521, uses the multicast address FF02::9, and supports IPv6 prefix
routing. Configuration follows the same principles as RIPv2 but uses the `ipv6 router rip` command
hierarchy.

```
ipv6 unicast-routing
ipv6 router rip MY_RIP
  exit
interface Ethernet0/0
  ipv6 rip MY_RIP enable
```

## OSPF (Open Shortest Path First)

OSPF is the most widely deployed IGP in enterprise and service provider networks. It is a link-state
protocol that uses Dijkstra's Shortest Path First (SPF) algorithm to compute loop-free routes.

### How OSPF Works

1. **Neighbor discovery.** Routers on a shared segment discover each other using Hello packets
   (multicast 224.0.0.5 for all OSPF routers, 224.0.0.6 for DR/BDR).

2. **Adjacency formation.** Routers exchange database descriptions (DBDs), link-state requests
   (LSRs), and link-state updates (LSUs) to synchronize their link-state databases.

3. **SPF calculation.** Each router independently runs Dijkstra's algorithm on the link-state
   database to build a shortest-path tree rooted at itself.

4. **Route installation.** The shortest-path tree produces entries in the routing table.

### OSPF Areas

OSPF uses a two-level hierarchy of areas to control the scope of link-state flooding and SPF
calculations:

- **Area 0 (Backbone Area):** The central area. All other areas must connect to it directly or
  through a virtual link. Inter-area traffic always passes through Area 0.

- **Non-backbone areas:** Connect to Area 0 via an Area Border Router (ABR). Types include:
  - **Standard area:** Accepts all LSA types.
  - **Stub area:** Does not accept external LSAs (Type 5). Uses a default route to reach external
    destinations.
  - **Totally stubby area (Cisco extension):** Does not accept external or inter-area LSAs (Types 3,
    4, 5). Uses a default route for everything outside the area.
  - **NSSA (Not-So-Stubby Area):** Allows external routes to be imported as Type 7 LSAs, which the
    ABR converts to Type 5 LSAs for the rest of the OSPF domain.

:::info
Area design is one of the most critical decisions in an OSPF deployment. A poorly designed
area topology causes excessive SPF recalculations, large routing tables, and slow convergence. Keep
areas small, limit the number of ABRs, and avoid transit areas.
:::

### OSPF Cost Metric

OSPF cost is calculated as `reference bandwidth / interface bandwidth`. The default reference
bandwidth on Cisco routers is 100 Mbps (10^8 bps).

| Interface Speed | Default OSPF Cost |
| --------------- | ----------------- |
| 10 Mbps         | 10                |
| 100 Mbps        | 1                 |
| 1 Gbps          | 1                 |
| 10 Gbps         | 1                 |

Since modern networks commonly use links faster than 100 Mbps, you should adjust the reference
bandwidth:

```
router ospf 1
  auto-cost reference-bandwidth 100000   ! sets reference to 100 Gbps
```

### LSA Types

| LSA Type | Name                  | Generated By | Scope      | Description                           |
| -------- | --------------------- | ------------ | ---------- | ------------------------------------- |
| 1        | Router LSA            | Every router | Area       | Lists router's links and costs        |
| 2        | Network LSA           | DR           | Area       | Describes a multi-access segment      |
| 3        | Summary LSA (network) | ABR          | Inter-area | Summarizes networks from one area     |
| 4        | Summary LSA (ASBR)    | ABR          | Inter-area | Location of an ASBR                   |
| 5        | External LSA (Type 1) | ASBR         | Entire AS  | External routes from another protocol |
| 7        | NSSA External LSA     | ASBR in NSSA | NSSA       | External routes in an NSSA            |

### DR/BDR Election

On multi-access networks (Ethernet, Frame Relay), OSPF elects a Designated Router (DR) and a Backup
Designated Router (BDR) to reduce the number of adjacencies. Without DR/BDR, a segment with N
routers would require N\*(N-1)/2 adjacencies. With DR/BDR, only 2N-1 adjacencies are needed.

**Election rules:**

1. The router with the highest OSPF priority (default 1) wins. Priority 0 means the router is
   ineligible.
2. If priorities tie, the router with the highest Router ID wins.
3. Election is non-preemptive: if a higher-priority router comes online after the election, it does
   not take over.

```
interface Ethernet0/0
  ip ospf priority 100
```

:::warning
DR/BDR election on NBMA networks (like Frame Relay or DMVPN) can cause unexpected
behavior. On hub-and-spoke topologies, ensure the hub has the highest priority and all spokes have
priority 0. Otherwise, a spoke might win the DR election, breaking routing.
:::

### OSPF Configuration

```
router ospf 1
  router-id 1.1.1.1
  network 10.0.1.0 0.0.0.255 area 0
  network 10.0.2.0 0.0.0.255 area 1
  area 1 stub
  default-information originate
```

### OSPFv3 (OSPF for IPv6)

OSPFv3 runs over IPv6 but is fundamentally a separate protocol from OSPFv2. Key differences:

- OSPFv3 uses IPv6 link-local addresses for neighbor communication.
- Authentication is handled by IPsec (AH/ESP) rather than OSPF's own authentication mechanisms.
- LSA types carry IPv6 prefixes instead of IPv4 prefixes.
- Multiple instances can run on a single interface (instance ID).

```
ipv6 unicast-routing
ipv6 router ospf 1
  router-id 1.1.1.1
  exit
interface Ethernet0/0
  ipv6 ospf 1 area 0
```

## IS-IS (Intermediate System to Intermediate System)

IS-IS is a link-state IGP originally developed for the OSI protocol suite (CLNP) and later extended
to support IP routing (Integrated IS-IS). It is widely used in large service provider networks and
is the IGP of choice for many Tier-1 ISPs.

### NET Addresses

IS-IS routers are identified by **Network Entity Titles** (NETs), which are NSAP addresses with an
N-SEL (Network Service Access Point Selector) of 00. A NET has the format:

```
AreaID.SystemID.NSEL
```

For example: `49.0001.0001.0001.0001.00`

- **Area ID:** Variable length, identifies the IS-IS area (analogous to OSPF area).
- **System ID:** 6 octets (typically derived from the MAC address or a loopback IP), uniquely
  identifies the router.
- **NSEL:** Always 00 for a router NET.

### IS-IS Levels

IS-IS operates in two levels:

- **Level 1 (L1):** Intra-area routing. Routers exchange LSPs only within their area. L1 routers
  have a default route pointing to the nearest L1/L2 router for inter-area traffic.
- **Level 2 (L2):** Inter-area routing. L2 routers exchange LSPs across all areas, forming the IS-IS
  backbone (analogous to OSPF Area 0, but IS-IS does not require a specific area number for the
  backbone).
- **Level 1/2 (L1/L2):** A router that participates in both levels, acting as an ABR equivalent.

### IS-IS vs OSPF

| Feature            | IS-IS                            | OSPF                       |
| ------------------ | -------------------------------- | -------------------------- |
| Protocol           | TLV-based, extensible            | Fixed LSA types            |
| Hierarchy          | Two levels (L1, L2)              | Multiple areas with Area 0 |
| Backbone           | Contiguous L2 routers (any area) | Area 0 specifically        |
| Adjacency          | Per level on each interface      | Single per interface       |
| Authentication     | Cleartext or HMAC-MD5/SHA        | Cleartext, MD5, or SHA     |
| DR equivalent      | DIS (elected, but preemptive)    | DR/BDR (non-preemptive)    |
| Updates            | TLV-encoded LSPs                 | LSA types 1-7              |
| IPv6 support       | Same protocol, new TLVs          | OSPFv3 (separate protocol) |
| Typical deployment | Service provider backbones       | Enterprise networks        |

### IS-IS TLVs

IS-IS uses Type-Length-Value (TLV) encoding in its Link State PDUs (LSPs). This makes IS-IS
extremely extensible -- new features can be added by defining new TLVs without changing the base
protocol.

Key TLVs include:

- **TLV 1/2:** Area addresses
- **TLV 6:** IS-IS neighbors (L1)
- **TLV 8:** IS-IS neighbors (L2)
- **TLV 128:** IP-reachable addresses (IPv4)
- **TLV 129:** Supported protocols
- **TLV 130/132:** IP interface addresses
- **TLV 135:** IPv6 reachability
- **TLV 226:** IPv6 interface addresses

### IS-IS Configuration

```
router isis MY_ISIS
  net 49.0001.0001.0001.0001.00
  is-type level-2-only
  metric-style wide
  exit
interface Ethernet0/0
  ip router isis MY_ISIS
  isis metric 10
```

The `metric-style wide` command enables 32-bit metrics (required for modern networks with links
faster than the narrow metric's 63-step range).

## EIGRP (Enhanced Interior Gateway Routing Protocol)

EIGRP is a Cisco-proprietary advanced distance-vector protocol (Cisco calls it a "hybrid," but it is
fundamentally distance-vector with some link-state features). It uses the Diffusing Update Algorithm
(DUAL) to guarantee loop-free paths and fast convergence.

### EIGRP Metrics

EIGRP uses a composite metric calculated from four values using the K-value formula:

```
Metric = 256 * [(K1 * BW_min) + (K2 * BW_min / (256 - Load)) + (K3 * Delay_sum)] * [K5 / (Reliability + K4)]
```

By default, only K1 (bandwidth) and K3 (delay) are enabled (K1=1, K2=0, K3=1, K4=0, K5=0).

| Component   | Description                                                      |
| ----------- | ---------------------------------------------------------------- |
| Bandwidth   | Minimum bandwidth along the path (in Kbps)                       |
| Delay       | Sum of interface delays along the path (in tens of microseconds) |
| Reliability | Reliability of the path (0-255, where 255 is 100%)               |
| Load        | Load on the path (0-255, where 255 is fully loaded)              |

:::info
Never enable K2 (load) or K5 (reliability) in production. These values fluctuate with
traffic, causing the metric to change constantly and leading to route flapping and instability.
:::

### Feasible Successors and DUAL

**Definition.** The **Feasible Distance** (FD) is the total metric to reach a destination via the
current successor (the best path). The **Reported Distance** (RD) or **Advertised Distance** is the
neighbor's cost to reach that same destination.

**Definition.** A **Feasible Successor** is a backup path where the reported distance is less than
the feasible distance of the current successor. This is called the **Feasibility Condition**:
`RD < FD`.

When a successor fails, the feasible successor is immediately promoted without any recomputation,
providing sub-second convergence.

If no feasible successor exists, DUAL must perform a recomputation, querying neighbors for
alternative paths.

### EIGRP Configuration

```
router eigrp MY_AS
  network 10.0.0.0
  network 192.168.1.0
  no auto-summary
  eigrp router-id 1.1.1.1
  exit
interface Ethernet0/0
  bandwidth 10000
  ip bandwidth-percent eigrp 1 50
```

## BGP (Border Gateway Protocol)

BGP is the routing protocol that makes the Internet work. It is the only Exterior Gateway Protocol
(EGP) in widespread use, exchanging routing information between autonomous systems. BGP is a path
vector protocol, meaning it tracks the sequence of ASes a route has traversed rather than computing
a metric-based shortest path.

### Autonomous System Numbers

**Definition.** An **Autonomous System** (AS) is a collection of IP networks and routers under a
single administrative domain with a unified routing policy. Each AS is identified by an **Autonomous
System Number** (ASN).

| Range              | Type     | Notes                                          |
| ------------------ | -------- | ---------------------------------------------- |
| 1 - 64511          | Public   | Assigned by regional registries (RIRs)         |
| 64512 - 65534      | Private  | For internal use, not routable on the Internet |
| 65535              | Reserved |                                                |
| 65536 - 4294967294 | Public   | 32-bit ASNs (4-byte AS numbers)                |
| 4294967295         | Reserved |                                                |

Major cloud providers' public ASNs: AWS (16509, 14618), Google (15169, 396982), Azure (8075, 12076),
Cloudflare (13335), Netflix (2906).

### eBGP vs iBGP

| Attribute     | eBGP (External BGP)                      | iBGP (Internal BGP)                      |
| ------------- | ---------------------------------------- | ---------------------------------------- |
| Peers         | Different autonomous systems             | Same autonomous system                   |
| Next-hop      | Modified to the sending router's address | Not modified (preserved from eBGP)       |
| AD (Cisco)    | 20                                       | 200                                      |
| TTL           | 1 (by default)                           | 255 (by default)                         |
| Full mesh     | Not required                             | Required (unless using route reflectors) |
| Route learned | Can be advertised to any BGP peer        | Not advertised to other iBGP peers       |

### BGP Sessions

BGP runs over TCP port 179. Before any routing information is exchanged, two BGP speakers must
establish a TCP connection and negotiate BGP session parameters.

```
router bgp 65001
  bgp log-neighbor-changes
  neighbor 10.0.0.2 remote-as 65002          ! eBGP session
  neighbor 10.0.0.2 description "ISP-A"
  neighbor 192.168.1.1 remote-as 65001       ! iBGP session
  neighbor 192.168.1.1 update-source Loopback0
  neighbor 192.168.1.1 next-hop-self
  exit
interface Loopback0
  ip address 1.1.1.1 255.255.255.255
```

:::info
For iBGP sessions, use loopback interfaces as the source and configure
`update-source Loopback0` and `next-hop-self`. For eBGP sessions, use directly connected interfaces
(unless you are using multihop, which requires `ebgp-multihop`).
:::

### NLRI

**Definition.** **Network Layer Reachability Information** (NLRI) is the set of IP prefixes that a
BGP speaker advertises. In IPv4 unicast BGP, NLRI is a prefix and length (e.g., 203.0.113.0/24). In
MP-BGP, NLRI can carry IPv6 prefixes, VPNv4/VPNv6 prefixes, MPLS labels, and more.

### BGP Path Attributes

Every BGP route carries a set of path attributes that influence the BGP decision process. These are
the core of BGP's policy-based routing.

| Attribute             | Code | Type                     | Description                                                         |
| --------------------- | ---- | ------------------------ | ------------------------------------------------------------------- |
| ORIGIN                | 1    | Well-known mandatory     | How the route was originated: IGP, EGP, or incomplete               |
| AS_PATH               | 2    | Well-known mandatory     | Sequence of ASes the route has traversed                            |
| NEXT_HOP              | 3    | Well-known mandatory     | IP address of the next-hop router                                   |
| MED (MULTI_EXIT_DISC) | 4    | Optional non-transitive  | Suggests a preferred exit point to a neighboring AS                 |
| LOCAL_PREF            | 5    | Well-known discretionary | Preference for routes within the AS (higher is better)              |
| ATOMIC_AGGREGATE      | 6    | Well-known discretionary | Indicates the route is an aggregate with less-specific details      |
| AGGREGATOR            | 7    | Optional transitive      | AS number and IP of the router that created the aggregate           |
| COMMUNITY             | 8    | Optional transitive      | Tags for route filtering and policy (e.g., NO_EXPORT, NO_ADVERTISE) |
| ORIGINATOR_ID         | 9    | Optional non-transitive  | Originator of a route (used with route reflectors)                  |
| CLUSTER_LIST          | 10   | Optional non-transitive  | List of route reflector cluster IDs (loop prevention)               |
| MP_REACH_NLRI         | 14   | Optional non-transitive  | Multiprotocol extensions for IPv6, VPNv4, etc.                      |
| MP_UNREACH_NLRI       | 15   | Optional non-transitive  | Withdrawal of multiprotocol NLRI                                    |

**ORIGIN** values:

- **IGP (i):** Learned via a network statement or redistribution from an IGP. Most preferred.
- **EGP (e):** Learned via EGP (obsolete protocol).
- **Incomplete (?):** Learned via redistribution from an IGP or static route. Least preferred.

**AS_PATH** types:

- **AS_SEQUENCE:** Ordered list of ASes traversed.
- **AS_SET:** Unordered set of ASes (used in aggregation).
- **AS_CONFED_SEQUENCE:** Ordered list of confederation sub-ASes.
- **AS_CONFED_SET:** Unordered set of confederation sub-ASes.

### BGP Decision Process

When BGP receives multiple paths to the same prefix, it selects the best path using a 13-step
process (Cisco implementation):

1. **Highest weight** (Cisco-proprietary, local to the router)
2. **Highest LOCAL_PREF**
3. **Locally originated** (network or aggregate, over received routes)
4. **Shortest AS_PATH**
5. **Lowest ORIGIN type** (IGP < EGP < incomplete)
6. **Lowest MED** (only compared when routes come from the same AS)
7. **eBGP over iBGP**
8. **Lowest IGP metric to NEXT_HOP**
9. **Oldest route** (longest-established path for stability)
10. **Lowest router ID** (or lowest neighbor address if router ID ties)
11. **Cluster list length** (for route reflectors)
12. **Lowest neighbor address**

### iBGP Full Mesh and Route Reflectors

In a pure iBGP deployment, every router must peer with every other iBGP router (full mesh). This
scales as N\*(N-1)/2 sessions. For 10 routers, that is 45 sessions. For 100 routers, that is 4950
sessions. This does not scale.

**Route Reflectors** (RFC 4456) solve this problem. A route reflector is an iBGP router that is
allowed to advertise iBGP-learned routes to other iBGP peers (reflect them).

Three types of route reflector clients:

- **Non-client peers:** iBGP peers that are not clients (treated as normal iBGP peers)
- **Client peers:** iBGP peers that are clients (receive reflected routes)
- **Cluster:** A route reflector and its clients form a cluster, identified by a cluster ID

```
router bgp 65001
  neighbor 192.168.1.2 route-reflector-client
  neighbor 192.168.1.3 route-reflector-client
  bgp cluster-id 1.1.1.1
```

### Confederations

**Definition.** A **BGP confederation** (RFC 5065) subdivides a single AS into multiple sub-ASes.
Within a confederation, sub-ASes use eBGP-like peering (full mesh is not required), but to external
peers, the entire confederation appears as a single AS.

```
router bgp 65001
  bgp confederation identifier 65001
  bgp confederation peers 65002 65003
  neighbor 10.0.0.2 remote-as 65002
```

Confederations are less common than route reflectors in modern deployments but are still used in
some large service provider networks.

### BGP Communities

**Definition.** A **BGP community** is a 32-bit tag attached to a route for policy purposes.
Communities allow you to tag routes and apply policies based on those tags at any point in the
network.

Well-known communities:

- **NO_EXPORT (0xFFFFFF01):** Do not advertise outside the local AS or confederation.
- **NO_ADVERTISE (0xFFFFFF02):** Do not advertise to any BGP peer.
- **NO_EXPORT_SUBCONFED (0xFFFFFF03):** Do not advertise outside the local sub-AS confederation.
- **LLGR_STALE (0xFFFFFF06):** Indicates a long-lived stale route (RFC 8212).
- **BLACKHOLE (0xFFFFFF02, sometimes 65535:666):** Tag routes to be discarded (used in DDoS
  mitigation).

Communities are commonly used for:

- Marking routes from specific customers for differentiated treatment
- Signaling preference between upstream providers
- Implementing prepend policies
- Triggering blackholing for DDoS mitigation

```
route-map SET_COMMUNITY permit 10
  set community 65001:100 65001:200 additive
  exit
route-map SET_NO_EXPORT permit 10
  set community no-export
  exit
router bgp 65001
  neighbor 10.0.0.2 route-map SET_COMMUNITY out
  neighbor 10.0.0.2 send-community both
```

### BGP Security

BGP was designed in an era of trust, and its security model is weak by modern standards. Several
mechanisms exist to mitigate BGP attacks:

**BGPsec (RFC 8205):** Adds cryptographic signatures to the AS_PATH, allowing routers to verify that
each AS in the path actually authorized the advertisement. Deployment is limited due to complexity
and performance concerns.

**RPKI (Resource Public Key Infrastructure):** Uses X.509 certificates to create a binding between
ASNs and IP prefixes. Route validators (Relying Parties) compare BGP advertisements against the RPKI
data to detect unauthorized prefix origin announcements.

```
router bgp 65001
  bgp rpki server tcp 192.168.1.100 port 8323 refresh 600
```

**MANRS (Mutually Agreed Norms for Routing Security):** A set of best practices that network
operators should follow:

1. Filter routing announcements (prevent leaks and hijacks)
2. Enable anti-spoofing (BCP 38, uRPF)
3. Coordinate and share contact information
4. Publish routing policy (ROAs in RPKI)

:::warning
BGP hijacking is a real and ongoing threat. In 2008, Pakistan Telecom hijacked YouTube's
prefix (208.65.153.0/24) by advertising a more specific route, redirecting global YouTube traffic to
Pakistan. In 2018, attackers hijacked Amazon's NS1 prefix to intercept cryptocurrency DNS traffic.
Implement RPKI validation and prefix filtering on all BGP sessions.
:::

## Route Redistribution

### Overview

**Definition.** **Route redistribution** is the process of importing routes learned by one routing
protocol into another routing protocol's advertisements. This is necessary when different parts of a
network run different routing protocols, or when connecting to a network that uses a different IGP.

### Seed Metric

When a route is redistributed into a protocol, it needs a metric in that protocol's format. If no
metric is specified, the route gets a default seed metric that is typically unusable (e.g., RIP uses
16/infinity, OSPF uses 20, EIGRP uses 0 which is unusable).

```
router ospf 1
  redistribute bgp 65001 subnets metric 100 metric-type 1
  redistribute connected subnets
  redistribute static subnets metric 200
```

```
router eigrp 100
  redistribute ospf 1 metric 10000 100 255 1 1500
```

### Route Tagging

Route tags allow you to mark redistributed routes so they can be filtered or identified later,
preventing routing feedback loops where a protocol redistributes routes back into the protocol they
originally came from.

```
route-map TAG_REDIST permit 10
  set tag 65001
  exit
router ospf 1
  redistribute bgp 65001 subnets route-map TAG_REDIST
```

### Suboptimal Routing

Route redistribution frequently causes suboptimal routing. A classic scenario: OSPF and EIGRP both
redistribute into each other. Router A learns a route from OSPF, redistributes it into EIGRP. Router
B learns it from EIGRP and redistributes it back into OSPF. Now OSPF has the same route from two
sources -- the original and the redistributed version -- with different metrics. The redistributed
version may be preferred or may cause routing loops.

Solutions:

- Use route tagging to identify and filter redistributed routes
- Set higher administrative distances on redistributed routes
- Use distribute-lists or route-maps to control exactly what gets redistributed

## Route Filtering and Policy

### Prefix Lists

Prefix lists are the preferred method for filtering routes by prefix. They are more efficient and
expressive than access lists for route filtering.

```
ip prefix-list FROM_ISP seq 5 permit 203.0.113.0/24 le 32
ip prefix-list FROM_ISP seq 10 permit 198.51.100.0/22 le 32
ip prefix-list FROM_ISP seq 100 deny 0.0.0.0/0 le 32

router bgp 65001
  neighbor 10.0.0.2 prefix-list FROM_ISP in
```

The `le` (less-than-or-equal) and `ge` (greater-than-or-equal) modifiers control the prefix length
range. `permit 203.0.113.0/24 le 32` matches 203.0.113.0/24 and all more-specific prefixes.

### Route Maps

Route maps are the most powerful filtering and policy tool. They combine match conditions with set
actions, similar to if-then logic.

```
route-map PREPEND_AS permit 10
  match ip address prefix-list CUSTOMER_PREFIXES
  set as-path prepend 65001 65001 65001
  exit

route-map SET_LOCAL_PREF permit 10
  match ip address prefix-list PREFERRED_PREFIXES
  set local-preference 300
  exit

router bgp 65001
  neighbor 10.0.0.2 route-map SET_LOCAL_PREF in
  neighbor 10.0.0.3 route-map PREPEND_AS out
```

### AS-Path Access Lists

AS-path access lists match on the AS_PATH attribute using regular expressions.

```
ip as-path access-list 1 deny _65001_
ip as-path access-list 1 permit .*
```

This denies routes that contain AS 65001 in the AS_PATH (transit routes through our own AS) and
permits everything else.

Common regex patterns:

| Pattern   | Meaning                         |
| --------- | ------------------------------- |
| `^65001$` | Originated by AS 65001          |
| `_65001_` | AS 65001 appears in the path    |
| `^65001_` | Received directly from AS 65001 |
| `_65001$` | AS 65001 is the origin AS       |
| `.*`      | Match any AS_PATH               |
| `[0-9]+`  | One or more digits              |

### Community Filtering

```
ip community-list 1 permit 65001:100
ip community-list 2 deny no-export
ip community-list 2 permit .*

route-map FILTER_COMMUNITY permit 10
  match community 1
  set local-preference 200
  exit
```

## IPv6 Routing

IPv6 routing operates on the same principles as IPv4 routing but uses 128-bit addresses and has some
protocol-specific differences.

### Key Differences from IPv4

| Aspect         | IPv4                           | IPv6                                |
| -------------- | ------------------------------ | ----------------------------------- |
| Address size   | 32 bits                        | 128 bits                            |
| Default route  | 0.0.0.0/0                      | ::/0                                |
| OSPF           | OSPFv2 (multicast 224.0.0.5/6) | OSPFv3 (uses link-local, FF02::5/6) |
| RIP            | RIPv2 (multicast 224.0.0.9)    | RIPng (multicast FF02::9)           |
| BGP            | IPv4 unicast AFI               | IPv6 unicast via MP-BGP             |
| Source address | Interface IP                   | Link-local for protocol traffic     |

### MP-BGP (Multiprotocol BGP)

**Definition.** **Multiprotocol BGP** (MP-BGP, RFC 4760) extends BGP to carry routes for multiple
address families including IPv6 (AFI 2, SAFI 1), VPNv4 (AFI 1, SAFI 128), VPNv6 (AFI 2, SAFI 128),
and more.

```
router bgp 65001
  address-family ipv6 unicast
    neighbor 2001:db8::1 activate
    network 2001:db8:1::/64
    exit-address-family
```

### OSPFv3 Configuration

OSPFv3 is fundamentally different from OSPFv2. It runs over IPv6, uses link-local addresses for
adjacencies, and carries IPv6 prefixes in separate LSAs.

```
ipv6 unicast-routing
ipv6 router ospf 1
  router-id 1.1.1.1
  exit
interface Ethernet0/0
  ipv6 address 2001:db8:1::1/64
  ipv6 ospf 1 area 0
  ipv6 ospf cost 10
```

## MPLS (Multiprotocol Label Switching)

### Overview

**Definition.** **MPLS** is a forwarding mechanism that uses short, fixed-length labels instead of
IP prefix lookups to make forwarding decisions. Packets are forwarded based on a label that is
prepended to the packet, enabling faster switching and support for traffic engineering and VPNs.

MPLS sits between layer 2 and layer 3 (sometimes called layer 2.5). The label is typically 20 bits
and is inserted between the layer 2 header and the layer 3 header.

### Label Switching and LSP

1. An **ingress Label Switch Router** (LSR) receives an IP packet, classifies it, and pushes a label
   onto the packet.
2. Intermediate LSRs swap the incoming label for an outgoing label based on their label forwarding
   table (LFIB). No IP lookup is performed.
3. The **egress LSR** pops the label and forwards the packet based on the original IP header.

The path that labeled packets follow is called a **Label Switched Path** (LSP).

### LDP (Label Distribution Protocol)

LDP (RFC 5036) is the protocol used to distribute labels between LSRs. LSRs discover neighbors using
UDP on port 646, then establish TCP sessions on port 646 to exchange label mappings.

```
mpls ip
mpls label protocol ldp
interface Ethernet0/0
  mpls ip
  mpls ldp discovery transport-address interface
```

### MPLS VPN (L3VPN)

MPLS L3VPNs allow service providers to offer Layer 3 VPN services to customers, where each
customer's traffic is isolated even though it traverses the same provider backbone.

**Key concepts:**

- **VRF (Virtual Routing and Forwarding):** A virtual routing instance on a PE router. Each VRF has
  its own routing table, separate from the global routing table. Customer routes are installed in
  the VRF.

- **RD (Route Distinguisher):** A 64-bit value prepended to an IPv4 prefix to make it globally
  unique across all VPNs. Format: `ASN:NN` (e.g., 65001:100) or `IP:NN` (e.g., 1.1.1.1:100). A route
  `192.168.1.0/24` with RD `65001:100` becomes `65001:100:192.168.1.0/24` -- a VPNv4 prefix.

- **RT (Route Target):** An extended BGP community that controls which VRFs can import which routes.
  Routes are exported with RTs, and VRFs import routes that match their import RTs.

```
ip vrf CUSTOMER_A
  rd 65001:100
  route-target export 65001:100
  route-target import 65001:100
  exit
interface Ethernet0/0
  ip vrf forwarding CUSTOMER_A
  ip address 10.1.1.1 255.255.255.0
```

### MPLS Traffic Engineering

MPLS TE allows explicit control over the path that traffic takes through the network, overriding the
IGP shortest path. This is used to:

- Balance load across multiple links
- Avoid congested links
- Reserve bandwidth for specific applications
- Provide fast reroute (FRR) protection

MPLS TE uses RSVP-TE to establish tunnels with explicit paths:

```
interface Tunnel0
  ip unnumbered Loopback0
  tunnel destination 2.2.2.2
  tunnel mode mpls traffic-eng
  tunnel mpls traffic-eng path-option 1 explicit name PATH1
  tunnel mpls traffic-eng bandwidth 100000
```

## Network Design

### Hierarchical Design Model

The three-tier hierarchical model divides the network into core, distribution, and access layers:

**Core Layer:**

- High-speed, reliable transport between distribution layer devices
- Minimal policy -- fast switching is the priority
- Redundancy and fault tolerance are critical
- No direct host connections
- Typically uses OSPF or IS-IS with a simple topology

**Distribution Layer:**

- Aggregation of access layer connections
- Policy enforcement (ACLs, QoS, routing policies)
- Inter-VLAN routing
- Route summarization and redistribution
- Typically the boundary between areas in OSPF

**Access Layer:**

- Connects end devices (servers, workstations, phones, APs)
- Port security, 802.1X, PoE
- VLAN segmentation
- High port density

### Redundancy

Redundancy eliminates single points of failure:

- **Link redundancy:** Multiple physical paths between devices. Use EtherChannel/LACP for link
  aggregation and STP for loop prevention at layer 2.
- **Device redundancy:** HSRP, VRRP, or GLBP for first-hop redundancy. Use iBGP with route
  reflectors for routing protocol redundancy.
- **Path redundancy:** Multiple routing paths with equal-cost or unequal-cost load balancing. OSPF
  supports equal-cost multi-path (ECMP) by default. EIGRP supports both ECMP and unequal-cost load
  balancing (variance command).

### Load Balancing

**Equal-cost multi-path (ECMP):** Multiple paths with the same metric. The router distributes
traffic across all paths (typically per-flow using a hash of source/destination IP and port).

```
router ospf 1
  maximum-paths 4        ! use up to 4 equal-cost paths
```

**Unequal-cost load balancing (EIGRP only):** Uses paths with different metrics by specifying a
variance multiplier.

```
router eigrp 100
  maximum-paths 4
  variance 2             ! use paths with metric up to 2x the best path's metric
```

### Route Summarization

Summarization reduces the size of routing tables, limits the scope of routing updates, and provides
natural route aggregation that speeds convergence. Summarize at area boundaries and network edges.

OSPF supports two types of summarization:

- **Inter-area summarization** on ABRs: `area 1 range 10.1.0.0 255.255.252.0`
- **External summarization** on ASBRs: `summary-address 10.0.0.0 255.255.0.0`

```
router ospf 1
  area 1 range 10.1.0.0 255.255.252.0
  summary-address 172.16.0.0 255.240.0.0
```

## Troubleshooting

### Diagnostic Commands

**View the routing table:**

```
show ip route
show ip route ospf
show ip route bgp
show ipv6 route
```

**Verify OSPF:**

```
show ip ospf neighbor
show ip ospf interface brief
show ip ospf database
show ip ospf database router
show ip ospf database external
show ip ospf events
```

**Verify BGP:**

```
show ip bgp summary
show ip bgp
show ip bgp 203.0.113.0/24
show ip bgp neighbors 10.0.0.2
show ip bgp neighbors 10.0.0.2 advertised-routes
show ip bgp neighbors 10.0.0.2 received-routes
show ip bgp regexp _65001_
```

**General diagnostics:**

```
ping 10.0.0.2 source 10.0.0.1
traceroute 10.0.0.2
show ip interface brief
show running-config | section router
show logging | include OSPF|BGP
```

### Common Failure Modes

**BGP session not establishing:**

1. TCP connectivity: Can you reach the neighbor on port 179? Check ACLs, firewalls.
2. ASN mismatch: Verify remote-as matches on both sides.
3. BGP identifier conflict: Ensure unique router IDs.
4. eBGP TTL: If neighbors are not directly connected, configure `ebgp-multihop`.
5. iBGP loopback reachability: Ensure the loopback is reachable via an IGP.

**OSPF adjacency stuck in INIT or 2WAY:**

1. Subnet mismatch: Both interfaces must be in the same subnet.
2. Area mismatch: Both sides must agree on the area.
3. Authentication mismatch: Both sides must use the same authentication type and key.
4. Hello/dead timer mismatch: Both sides must have matching timers.
5. Passive interface: One side may have the interface configured as passive.

**Routes not appearing in the table:**

1. Administrative distance: Check if another route source has a lower AD.
2. Redistribution not configured: Verify redistribute commands and seed metrics.
3. Filtering: Check prefix-lists, route-maps, and distribute-lists.
4. Next-hop unreachable: BGP will not install a route if the next-hop is not resolvable.

### Debug Commands

:::warning
Debug commands can generate massive output and impact router performance. Use them
carefully, and always use `terminal monitor` and specific debug filters. Disable debug with
`undebug all` as soon as you have the information you need.
:::

```
debug ip routing
debug ip ospf adj
debug ip bgp events
debug ip bgp updates
debug ip packet
```

For less invasive troubleshooting, use conditional debug:

```
debug condition ip address 10.0.0.2
debug ip ospf adj
```

## Common Pitfalls

### Routing Loops

Routing loops occur when traffic circulates between two or more routers without reaching the
destination. In distance-vector protocols, loops happen when information propagates slowly and
routers make decisions based on outdated data.

Prevention:

- Split horizon and route poisoning in RIP
- DUAL in EIGRP
- SPF algorithm in OSPF/IS-IS (inherently loop-free)
- AS_PATH in BGP (detects loops by checking if the local ASN is already in the path)

### Routing Black Holes

**Definition.** A **routing black hole** occurs when traffic is forwarded to a router that does not
have a route to the destination or has no return path. Traffic goes in but never comes back.

Common causes:

- MPLS label distribution failure (traffic enters the MPLS cloud but no label exists for the
  destination)
- Incomplete redistribution (routes exist in one protocol but are not redistributed to another)
- IGP/BGP synchronization issues (the IGP does not have the BGP-learned next hop)

### BGP Route Flapping

Route flapping is when a BGP route is repeatedly withdrawn and readvertised. This causes excessive
BGP update processing and can destabilize the entire routing table.

**BGP dampening** (RFC 2439) suppresses flapping routes by assigning a penalty each time a route
flaps. When the penalty exceeds a suppress threshold, the route is suppressed. Penalties decay over
time, and the route is reused when the penalty falls below a reuse threshold.

```
router bgp 65001
  bgp dampening
  bgp dampening 5 750 2000 60    ! half-life, suppress, reuse, max-suppress (minutes)
```

:::warning
BGP dampening can cause more harm than good in some scenarios, particularly when a
flapping route carries important traffic. Many operators prefer to fix the root cause of the
flapping rather than suppress the route. Use dampening carefully.
:::

### OSPF Area Design Mistakes

1. **Too many areas:** Each ABR must maintain separate LSDBs for each area it connects to. More
   areas means more memory, more SPF calculations, and more complexity.

2. **Transit areas:** Avoid making non-backbone areas carry transit traffic. All inter-area traffic
   should go through Area 0.

3. **Virtual links:** Virtual links are a workaround for non-contiguous Area 0, not a design
   pattern. They add fragility and should not be part of a permanent design.

4. **Large areas:** An OSPF area should not have more than 50-100 routers. Beyond that, the SPF
   calculation becomes expensive and convergence slows.

5. **Incorrect LSA types in stub areas:** Configuring an area as stub when it has an ASBR causes
   routes to be lost. Use NSSA instead.

### Split Horizon Violation Over NBMA

Split horizon is automatically disabled on physical interfaces using Frame Relay encapsulation. On
NBMA networks (Frame Relay, X.25, ATM), subinterfaces behave differently:

- **Point-to-point subinterfaces:** Split horizon is disabled (correct behavior, since there is only
  one neighbor).
- **Multipoint subinterfaces:** Split horizon is enabled (can cause problems in hub-and-spoke
  topologies where the hub needs to advertise routes learned from one spoke to another spoke).

If you see routes missing on NBMA networks, check whether split horizon is causing the issue:

```
interface Serial0/0.1 multipoint
  no ip split-horizon     ! disable if needed for hub-and-spoke
```

This is particularly relevant for RIP and EIGRP, which rely on split horizon for loop prevention.
OSPF and IS-IS are not affected because they are link-state protocols.
