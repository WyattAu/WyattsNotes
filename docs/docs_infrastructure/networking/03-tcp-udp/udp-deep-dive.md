---
id: udp-deep-dive
title: UDP Deep Dive
description:
  UDP internals — datagram structure, checksum, broadcast, multicast, QUIC, and when UDP is the
  right choice.
slug: udp-deep-dive
tags:
  - Networking
categories:
  - Networking
---

## Overview

UDP (User Datagram Protocol, RFC 768) is the simplest transport-layer protocol in the TCP/IP suite:
an 8-byte header, no handshake, no state, no guarantees. Despite (or because of) this simplicity,
UDP is the foundation for some of the most critical and high-performance protocols on the Internet.
DNS, DHCP, NTP, SNMP, streaming media, gaming, VPNs, and QUIC all ride on UDP.

This document dissects UDP internals, explains when and why UDP is the right choice, covers
broadcast and multicast, and examines the reliability patterns that UDP-based protocols implement at
the application layer.

## UDP Header Structure

The UDP header is exactly 8 bytes -- the minimum of any transport protocol:

```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|          Source Port          |       Destination Port        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|            Length             |           Checksum            |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    data (variable length)                    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

| Field            | Bits | Description                                                                         |
| ---------------- | ---- | ----------------------------------------------------------------------------------- |
| Source Port      | 16   | Optional. Identifies the sender. Zero means "not specified."                        |
| Destination Port | 16   | Required. Identifies the intended receiver.                                         |
| Length           | 16   | Total UDP datagram length: header (8) + data. Minimum 8. Maximum 65535.             |
| Checksum         | 16   | Coverage includes pseudo-header + UDP header + data. Zero = "no check" (IPv4 only). |

### Source Port Considerations

The source port is optional. If the sender does not need a reply, it can set the source port to
zero. This is rare in practice because most applications need responses, and the source port is how
the receiver knows where to send them.

When the source port is non-zero, it is typically an ephemeral port chosen by the kernel from the
range defined by `net.ipv4.ip_local_port_range` (default: 32768-60999 on Linux).

### Maximum Datagram Size

The Length field is 16 bits, so the maximum UDP datagram is 65,535 bytes. Subtracting the 8-byte
header gives a maximum payload of 65,527 bytes. However, IP fragmentation limits the practical
maximum to the path MTU minus IP and UDP headers (typically 1472 bytes over standard Ethernet).

```bash
# View current UDP buffer sizes
sysctl net.core.rmem_max
sysctl net.core.rmem_default
sysctl net.core.wmem_max
sysctl net.core.wmem_default

# Increase UDP receive buffer for high-throughput applications
sysctl -w net.core.rmem_max=16777216
```

## UDP Checksum

### Computation

The UDP checksum covers three things:

1. **Pseudo-header:** Source IP, destination IP, protocol number (17), and UDP length
2. **UDP header:** All four fields
3. **Data payload:** Everything after the header

The checksum is the ones-complement of the ones-complement sum of all 16-bit words. If the data
length is odd, a zero byte is appended for computation purposes only.

### IPv4 vs IPv6 Pseudo-Headers

**IPv4 pseudo-header:**

```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                        Source Address                         |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                      Destination Address                      |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|     Zero      |    Protocol    |          UDP Length           |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

**IPv6 pseudo-header:**

```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
+                                                               +
|                                                               |
+                         Source Address                        +
|                                                               |
+                                                               +
|                                                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
+                                                               +
|                                                               |
+                      Destination Address                      +
|                                                               |
+                                                               +
|                                                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                   UDP Length (32 bits)                        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                  Next Header (8 bits)                         |  Zero
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

Key differences: IPv6 pseudo-header uses 32-bit length (instead of 16-bit), 128-bit addresses
(instead of 32-bit), and "Next Header" field (instead of Protocol). The IPv6 pseudo-header is 40
bytes vs 12 bytes for IPv4.

### Why Checksum Can Be Zero (IPv4 Only)

In IPv4, a checksum of zero means "no checksum computed." The sender explicitly sets the checksum
field to zero to indicate this. The receiver must accept datagrams with a zero checksum without
verification.

In IPv6, the checksum is **mandatory**. A zero checksum in IPv6 UDP is not valid. This was a
deliberate design decision in IPv6 because the 128-bit addresses make the pseudo-header much larger,
and the probability of an undetected corruption affecting the pseudo-header is non-trivial.

### UDP-Lite (RFC 3828)

UDP-Lite modifies the checksum to cover only a partial payload. The "Checksum Coverage" field
replaces the Length field and specifies how many bytes of the payload are covered by the checksum.
Applications that tolerate bit errors in the payload (voice, video) can use UDP-Lite to reduce the
probability of a datagram being discarded due to a checksum failure in non-critical data.

```bash
# Check if UDP-Lite is supported
grep UDP-LITE /proc/net/protocols
```

## UDP Use Cases

### DNS (Port 53)

DNS uses UDP for queries and responses under 512 bytes (originally; EDNS0 extends this). If the
response exceeds the limit, the server sets the TC (Truncation) bit, and the client retries over
TCP.

Why UDP: DNS queries are small, a single request-response pair, and the overhead of TCP's three-way
handshake (3 packets) would exceed the query itself (1 packet). UDP gets the answer in one round
trip instead of three.

### DHCP (Ports 67/68)

DHCP uses UDP because the client does not yet have an IP address and cannot establish a TCP
connection. The client sends from 0.0.0.0:68 to 255.255.255.255:67 (broadcast).

### NTP (Port 123)

NTP uses UDP because time synchronization requires low-latency, lightweight exchanges. A single NTP
packet is 48 bytes. TCP's handshake would add 100ms+ of latency on a WAN link, directly degrading
time accuracy.

### SNMP (Port 161/162)

SNMP uses UDP because management queries are small and periodic. A manager sends a GET request, the
agent responds with a GET-RESPONSE. No persistent connection is needed.

### Streaming Media

RTP (Real-time Transport Protocol, RFC 3550) uses UDP because:

- Latency is more important than reliability. A dropped video frame is acceptable; a delayed frame
  is not.
- Retransmission is pointless for real-time data. By the time a lost packet is retransmitted, its
  playback window has passed.
- Application-level forward error correction (FEC) and adaptive bitrate are more appropriate than
  TCP's reliability.

### Gaming

Multiplayer games use UDP because:

- Game state updates are small and frequent (20-60 ticks per second)
- Old state updates are irrelevant (you want the latest position, not the position from 50ms ago)
- TCP's head-of-line blocking means one lost packet delays all subsequent packets
- Application-level interpolation and prediction handle packet loss gracefully

### QUIC (Port 443)

QUIC (RFC 9000) runs over UDP because:

- Bypassing middlebox ossification. Deploying a new transport protocol at the IP layer is
  effectively impossible due to firewalls and NATs that only understand TCP and UDP. Running QUIC
  over UDP means it traverses existing infrastructure.
- Connection migration. QUIC's connection IDs allow a connection to survive IP address changes (WiFi
  to cellular), which is impossible with TCP's 4-tuple identification.
- 0-RTT connection establishment. QUIC combines the transport handshake with TLS 1.3, reducing
  connection setup to a single round trip (or zero for repeat connections).

## Broadcast

### Limited Broadcast (255.255.255.255)

Limited broadcast is sent to all hosts on the local network segment. It is never forwarded by
routers. Used by DHCP clients that do not yet know their network address.

```bash
# Send a limited broadcast
echo "test" | socat - UDP-DATAGRAM:255.255.255.255:9000,broadcast

# Capture broadcast traffic
tcpdump -i eth0 'dst 255.255.255.255'
```

### Directed Broadcast

Directed broadcast is sent to the broadcast address of a specific subnet (e.g., `192.168.1.255/24`).
Routers may forward directed broadcasts (though this is typically disabled by default, RFC 2644).

```bash
# Directed broadcast example
# 192.168.1.255 is the broadcast address for 192.168.1.0/24
ping -b 192.168.1.255
```

### Subnet Broadcast

Every subnet has a broadcast address: the last address in the subnet (all host bits set to 1). For
`10.0.0.0/24`, the broadcast is `10.0.0.255`. For `10.0.0.0/23`, the broadcast is `10.0.1.255`.

:::warning

Many modern operating systems do not respond to broadcast pings by default. Linux sets
`net.ipv4.icmp_echo_ignore_broadcasts=1`. Do not rely on ping to test broadcast reachability.

:::

## Multicast

### Overview

Multicast delivers packets to a group of interested receivers rather than all hosts (broadcast) or a
single host (unicast). The sender transmits once, and the network replicates the packet only where
needed.

### Multicast Address Ranges

| Range                     | Purpose                                          |
| ------------------------- | ------------------------------------------------ |
| 224.0.0.0/24              | Local network control (not forwarded by routers) |
| 224.0.1.0/24              | Internetwork control                             |
| 224.0.2.0 - 224.0.255.255 | Ad-hoc multicast                                 |
| 224.1.0.0 - 224.1.255.255 | Source-specific multicast (SSM)                  |
| 225.0.0.0/8               | Reserved                                         |
| 226.0.0.0/8               | Reserved                                         |
| 227.0.0.0/8               | Reserved                                         |
| 228.0.0.0/8               | GLOP addressing (RFC 3180, based on AS numbers)  |
| 232.0.0.0/8               | Source-specific multicast (SSM, RFC 4607)        |
| 233.0.0.0/8               | GLOP addressing                                  |
| 234.0.0.0/8               | Reserved                                         |
| 239.0.0.0/8               | Administratively scoped (local use)              |

### IGMP (Internet Group Management Protocol)

IGMP (RFC 3376, IGMPv3) is how hosts signal multicast group membership to their local router.

```
Host                          Router
  |                              |
  |--- IGMP Membership Report -->|  "I want to receive 239.1.1.1"
  |                              |
  |<-- IGMP Membership Query -----|  "Who wants 239.1.1.1?"
  |--- IGMP Membership Report -->|  "I still want it"
  |                              |
  |--- IGMP Leave Group -------->|  "I no longer want 239.1.1.1"
```

```bash
# View IGMP groups joined by the local host
ip maddr show

# Join a multicast group
ip maddr add 239.1.1.1 dev eth0

# View multicast routing table
ip mroute show
```

### TTL Scoping

Multicast packets have a TTL that limits how far they propagate:

| TTL      | Scope                        |
| -------- | ---------------------------- |
| 0        | Restricted to same host      |
| 1        | Restricted to same subnet    |
| &lt; 32  | Restricted to same site      |
| &lt; 64  | Restricted to same region    |
| &lt; 128 | Restricted to same continent |
| &lt; 255 | Unrestricted                 |

### Multicast Routing: PIM

PIM (Protocol Independent Multicast) is the dominant multicast routing protocol. Two modes:

**PIM Sparse Mode (PIM-SM, RFC 4601):** Receivers explicitly join groups. Traffic is only forwarded
where needed. Uses a Rendezvous Point (RP). Default for most deployments.

**PIM Dense Mode (PIM-DM, RFC 3973):** Floods traffic everywhere, then prunes branches where no
receivers exist. Suitable for small networks with many receivers. Rarely used in production.

```bash
# Check PIM neighbors
show ip pim neighbor   # Cisco IOS

# Check multicast routes
show ip mroute         # Cisco IOS
ip mroute show         # Linux
```

## UDP Reliability Patterns

Since UDP provides no reliability, applications that need it must implement it themselves. Several
patterns exist:

### Application-Level ACKs

The receiver sends an acknowledgment for each datagram (or batch of datagrams). The sender
retransmits if no ACK is received within a timeout.

```
Sender                              Receiver
  |                                    |
  |--- DATA [seq=1] ------------------>|
  |                                    |
  |<-- ACK [seq=1] --------------------|  within timeout
  |                                    |
  |--- DATA [seq=2] ------------------>|
  |                                    |
  |          (timeout)                 |
  |--- DATA [seq=2] (retransmit) ----->|
  |                                    |
  |<-- ACK [seq=2] --------------------|
```

### Sequence Numbers

Every datagram includes a sequence number. The receiver uses sequence numbers to:

- Detect duplicates (discard datagrams with already-seen sequence numbers)
- Detect reordering (buffer out-of-order datagrams)
- Detect gaps (request retransmission of missing sequence numbers)

### Selective Retransmission

Instead of retransmitting everything from the gap, the receiver can send a NACK (Negative
Acknowledgment) specifying exactly which sequence numbers are missing. This is more efficient than
go-back-N for high-latency, lossy links.

### Example: TFTP

TFTP (Trivial File Transfer Protocol, RFC 1350) is a minimal example of UDP reliability:

- Each data packet has a block number (1-65535, wrapping)
- Receiver ACKs each block with the block number
- Sender retransmits on timeout
- Fixed timeout (no adaptive retransmission)
- No windowing -- one outstanding block at a time

TFTP is intentionally simple, which makes it useful for bootstrap (PXE boot) but unsuitable for
high-performance transfers.

## UDP Fragmentation

### The Problem

When a UDP datagram exceeds the path MTU, the IP layer fragments it. Each fragment is a separate IP
packet that must be reassembled at the receiver. If any fragment is lost, the entire datagram is
lost.

Fragmentation is especially problematic for UDP because:

1. **No retransmission.** TCP retransmits lost segments; UDP does not. A single lost fragment means
   a lost datagram.
2. **Firewall interference.** Many firewalls drop fragments or only inspect the first fragment.
   Non-first fragments lack the UDP header, so stateful firewalls cannot match them to a connection.
3. **Performance.** Fragmentation and reassembly consume CPU and memory on both endpoints and
   intermediate routers.

### Path MTU Discovery (PMTUD)

UDP applications should perform Path MTU Discovery to avoid fragmentation. The sender sets the DF
(Don't Fragment) bit. If a router encounters a packet larger than the next-hop MTU, it drops the
packet and sends an ICMP "Fragmentation Needed" (Type 3, Code 4) message. The sender reduces its
packet size and retries.

```bash
# Test path MTU to a destination
ping -M do -s 1400 example.com    # DF bit set, 1400 bytes of data
ping -M do -s 1472 example.com    # Maximum for standard Ethernet (1500 - 20 IP - 8 UDP)

# View PMTU cache
ip route get 8.8.8.8
```

:::warning

ICMP "Fragmentation Needed" messages are frequently filtered by firewalls, breaking PMTUD. If PMTUD
fails, the sender never learns the correct MTU and silently drops packets. This is one of the most
insidious networking problems because the connection appears to work for small packets but fails for
large ones. Use TCP MSS clamping or UDP packet size limits as a workaround.

:::

## UDP and NAT

### The Problem

NAT (Network Address Translation) maps internal IP:port pairs to external IP:port pairs. For TCP,
the NAT tracks the connection state (SYN, ESTABLISHED, FIN) and creates a mapping when the SYN is
seen. For UDP, there is no handshake, so the NAT must heuristically create a mapping when it sees
the first outbound datagram.

### NAT Mapping Timeout

UDP NAT mappings have a timeout (typically 30-120 seconds). If no traffic is sent in either
direction within the timeout, the mapping is deleted. The next outbound datagram creates a new
mapping, potentially with a different external port.

This is a problem for long-lived UDP sessions (VPN tunnels, gaming) where traffic may be sparse.
Applications must send periodic keepalive packets to refresh the NAT mapping.

### NAT Traversal

For peer-to-peer UDP communication (e.g., WebRTC, gaming):

1. **STUN (Session Traversal Utilities for NAT, RFC 5389):** A server on the public internet tells
   the client what its public IP:port is. This works for "full cone" NATs.
2. **TURN (Traversal Using Relays around NAT, RFC 5766):** When direct communication fails
   (symmetric NAT), TURN relays all traffic through a public server.
3. **ICE (Interactive Connectivity Establishment, RFC 8445):** A framework that tries STUN first,
   falls back to TURN if needed. Used by WebRTC.

```bash
# Test NAT type with stun-client
stun-client stun.l.google.com:19302
```

### IPv6 and NAT

IPv6 was designed to eliminate NAT (every device gets a globally routable address). In practice,
many IPv6 deployments still use NPTv6 (Network Prefix Translation, RFC 6296) or provider-side NAT
due to addressing policies. However, end-to-end connectivity is much more achievable with IPv6.

## QUIC Overview

QUIC (RFC 9000) is a transport protocol designed by Google, standardized by the IETF, that runs over
UDP. It is the transport for HTTP/3.

### Key Features

| Feature               | TCP        | QUIC                                     |
| --------------------- | ---------- | ---------------------------------------- |
| Transport             | IP layer   | UDP (port 443)                           |
| Handshake             | TCP + TLS  | Integrated (TLS 1.3)                     |
| Connection setup      | 2-3 RTT    | 1 RTT (0-RTT for repeats)                |
| Head-of-line blocking | Yes (TCP)  | No (per-stream)                          |
| Connection ID         | 4-tuple    | Connection ID (stable across IP changes) |
| Multiplexing          | No HOL fix | Independent streams                      |
| Loss recovery         | Global     | Per-stream                               |
| Middlebox traversal   | Good       | UDP (good)                               |
| Congestion control    | Cubic/BBR  | Cubic/BBR (same algorithms)              |

### Connection Migration

QUIC's connection ID decouples the connection from the 4-tuple. When a mobile device switches from
WiFi to cellular, its IP address changes. With TCP, this would terminate the connection. With QUIC,
the connection ID remains the same, and the connection survives.

### 0-RTT

On repeat connections, QUIC can send application data in the first flight (0-RTT). The client uses a
cached session ticket from a previous connection to derive the encryption keys immediately, without
waiting for the server's handshake response.

:::warning

0-RTT data is vulnerable to replay attacks. An attacker who captures the 0-RTT data can replay it to
the server. Applications must not use 0-RTT for non-idempotent operations (POST requests, financial
transactions).

:::

## UDP vs TCP Decision Framework

Use this decision tree:

1. **Do you need reliable, ordered delivery?** If yes, TCP (or QUIC for HTTP/3).
2. **Is latency more important than reliability?** If yes, UDP (with application-level retry for
   critical data).
3. **Do you need multicast or broadcast?** If yes, UDP (TCP does not support it).
4. **Is the data real-time?** (voice, video, gaming) If yes, UDP (old data is worthless).
5. **Is the payload small and request-response?** (DNS, NTP) If yes, UDP (TCP handshake overhead
   exceeds the payload).
6. **Do you need congestion control?** If yes, TCP (or implement it in your UDP application).
7. **Do you need to traverse restrictive firewalls?** If yes, TCP (UDP is more likely to be
   blocked).

### When to Choose UDP

- Real-time communication (VoIP, video conferencing, gaming)
- DNS queries (small, request-response)
- DHCP (client has no IP yet)
- Streaming media (latency-sensitive, loss-tolerant)
- VPN tunnels (WireGuard, OpenVPN -- implement their own reliability)
- QUIC/HTTP/3 (modern web protocol)
- Network monitoring (SNMP, syslog)
- Service discovery (mDNS, SSDP)

### When to Choose TCP

- File transfers (reliability is non-negotiable)
- HTTP/1.1 and HTTP/2 (web traffic)
- Database connections (PostgreSQL, MySQL, Redis)
- SSH (secure shell)
- Email (SMTP, IMAP)
- API calls (REST, gRPC over TCP)

## DCCP and SCTP

### DCCP (Datagram Congestion Control Protocol, RFC 4340)

DCCP provides congestion control without reliability. It fills the gap between raw UDP (no
congestion control) and TCP (full reliability + congestion control). Use cases: streaming media
where congestion control is needed but retransmission is not.

DCCP is rarely deployed in practice. Most applications that need congestion control over UDP
implement it themselves (QUIC, WebRTC).

### SCTP (Stream Control Transmission Protocol, RFC 4960)

SCTP provides message-oriented, reliable, multi-stream transport with features like multi-homing
(sending over multiple paths simultaneously). It was designed for telephony signaling (SS7 over IP)
and is used by WebRTC data channels (via DTLS-SCTP).

Key features:

- **Multi-streaming:** Multiple independent streams within one association. Loss on one stream does
  not block others (no head-of-line blocking).
- **Multi-homing:** Endpoints can have multiple IP addresses. If one path fails, traffic
  automatically fails over to another.
- **Message-oriented:** Preserves message boundaries (unlike TCP's byte stream).
- **Four-way handshake:** Uses a cookie mechanism to prevent SYN-flood-style attacks.

```bash
# Check SCTP support
grep SCTP /proc/net/protocols

# List SCTP associations
ss -sctp -an
```

SCTP is rarely used directly by applications outside of telecommunications. Linux supports it
natively (socket type `SOCK_STREAM` with protocol `IPPROTO_SCTP`).

## Common Pitfalls

### 1. UDP Buffer Overflows

The kernel's UDP receive buffer has a fixed size (default 212992 bytes on Linux). If the receiver
cannot read fast enough, the buffer fills up and new datagrams are silently dropped. The sender
receives no notification.

```bash
# Monitor UDP buffer overflows
netstat -su | grep "buffer errors"
# or
cat /proc/net/snmp | grep Udp
# Look for Udp: InErrors (includes buffer overflows)

# Increase buffer size
sysctl -w net.core.rmem_max=16777216
sysctl -w net.core.rmem_default=2621440
```

### 2. Fragmentation Fires

Sending UDP datagrams larger than the path MTU causes fragmentation. Each fragment that arrives
consumes reassembly buffer space. A flood of fragments can exhaust the reassembly buffer, causing
all UDP traffic to fail. Many operating systems limit the number of concurrent reassembly attempts
and the total reassembly memory.

Mitigation: keep UDP datagrams under 1400 bytes to safely fit within any reasonable MTU.

### 3. DNS and 512-Byte Limit

The original DNS specification (RFC 1035) limits UDP responses to 512 bytes. EDNS0 (RFC 6891)
extends this, but not all networks support it. If a DNS response is truncated (TC bit set), the
client must retry over TCP. Misconfigured firewalls that block TCP port 53 break this fallback.

### 4. Assuming UDP Packets Arrive in Order

UDP provides no ordering guarantee. If you send packets 1, 2, 3, they may arrive as 3, 1, 2.
Applications that assume ordering (e.g., a protocol that sends a command in packet N and its
argument in packet N+1) will break. Include sequence numbers and handle reordering.

### 5. Forgetting About NAT Timeouts

UDP NAT mappings expire. If your application sends datagrams sporadically (e.g., a heartbeat every
10 minutes), the NAT mapping may expire between heartbeats. The next datagram creates a new mapping
with a different external port, and the peer's responses go to the old (now invalid) port. Send
keepalives more frequently than the NAT timeout (typically every 20-30 seconds).

### 6. Not Handling ICMP Errors

When a router cannot deliver a UDP datagram (network unreachable, port unreachable, TTL exceeded),
it sends an ICMP error message back to the sender. The sender's kernel delivers this as an error on
the socket (e.g., `ECONNREFUSED` for port unreachable). Many applications ignore socket errors or do
not handle ICMP-derived errors correctly.

### 7. Asymmetric Routing and Stateful Firewalls

Stateful firewalls track UDP "connections" by observing the first outbound datagram and creating a
state entry. If return traffic arrives via a different path (asymmetric routing) and hits a
different firewall that has no state entry, the return traffic is dropped. Ensure symmetric routing
for UDP traffic through firewalls, or use UDP keepalives to maintain state entries on all firewall
paths.

## UDP in Container and Microservice Environments

### Container DNS Resolution

Containers use UDP for DNS resolution by default. When a container resolves a service name, the DNS
query goes to the embedded DNS server (127.0.0.11 in Docker, CoreDNS in Kubernetes) over UDP. If DNS
resolution fails, the container cannot discover services.

```bash
# Test DNS resolution inside a container
docker exec mycontainer nslookup myservice
docker exec mycontainer dig myservice.default.svc.cluster.local

# Check CoreDNS logs in Kubernetes
kubectl logs -n kube-system -l k8s-app=kube-dns
```

### Service Mesh Sidecar Proxies

Service meshes like Istio and Linkerd inject sidecar proxies (Envoy) that intercept all traffic,
including UDP. The sidecar handles service discovery, load balancing, and observability for UDP
services.

### UDP Health Checks

Load balancers and service discovery systems have limited support for UDP health checks. Unlike TCP
(where a successful connection proves the service is alive), UDP has no connection. Health checks
must either:

1. Send a probe and expect a response (application-dependent)
2. Check if the port is open (using ICMP port unreachable as a negative signal)
3. Rely on metrics from the application itself

```bash
# HAProxy UDP health check
backend dns
  mode udp
  server dns1 10.0.0.50:53 check
  # HAProxy sends a DNS query for "www.haproxy.org" and checks for a valid response
```

## UDP Socket Programming Considerations

### recvfrom and sendto

UDP uses `recvfrom()` and `sendto()` for connectionless communication:

```c
int sockfd = socket(AF_INET, SOCK_DGRAM, 0);

struct sockaddr_in server_addr;
server_addr.sin_family = AF_INET;
server_addr.sin_port = htons(53);
inet_pton(AF_INET, "8.8.8.8", &server_addr.sin_addr);

// Send a datagram
sendto(sockfd, query, query_len, 0,
       (struct sockaddr *)&server_addr, sizeof(server_addr));

// Receive a datagram
struct sockaddr_in from_addr;
socklen_t from_len = sizeof(from_addr);
recvfrom(sockfd, buffer, sizeof(buffer), 0,
         (struct sockaddr *)&from_addr, &from_len);
```

### connect() with UDP

Calling `connect()` on a UDP socket does not send any packets. It sets the default destination
address for `send()` and filters incoming packets to only those from the connected address. This is
useful for applications that communicate with a single peer.

```c
connect(sockfd, (struct sockaddr *)&server_addr, sizeof(server_addr));
// Now you can use send() instead of sendto()
send(sockfd, query, query_len, 0);
// recv() only returns packets from the connected address
recv(sockfd, buffer, sizeof(buffer), 0);
```

### UDP and EPOLL Edge-Triggered Mode

UDP sockets with `epoll` in edge-triggered mode require reading in a loop until `EAGAIN` is
returned. Otherwise, datagrams that arrive between `epoll_wait` calls may be missed (they will be
delivered on the next trigger, but the application may not call `epoll_wait` again if it thinks
there is nothing to do).

### MSG_TRUNC

If the receive buffer is smaller than the datagram, the datagram is truncated and the `MSG_TRUNC`
flag is set. The rest of the datagram is silently discarded. Check for truncation:

```c
ssize_t n = recvfrom(sockfd, buffer, sizeof(buffer), MSG_PEEK,
                     (struct sockaddr *)&from_addr, &from_len);
if (n > sizeof(buffer)) {
    // Datagram would be truncated
    // Allocate a larger buffer or discard
}
```

## UDP and IPv6

### IPv6 UDP Differences

- Checksum is mandatory (cannot be zero)
- Fragmentation only by source (PMTUD required)
- Larger address fields in pseudo-header (40 bytes vs 12 bytes)
- Multicast scope IDs (link-local scope requires interface specification)

```bash
# IPv6 UDP example
socat - UDP6:[ff02::1]:1234    # send to all-nodes multicast
socat - UDP6:[::1]:1234         # send to localhost

# IPv6 multicast on specific interface
ping6 -I eth0 ff02::1
```

### Dual-Stack Considerations

On dual-stack systems, both IPv4 and IPv6 sockets can handle traffic. However, the `IPV6_V6ONLY`
socket option controls whether an IPv6 socket can also accept IPv4 connections (mapped addresses):

```bash
# Check default IPv6-only setting
sysctl net.ipv6.bindv6only

# On Linux, IPv6 sockets accept IPv4 connections by default (mapped as ::ffff:a.b.c.d)
# Set to 1 to disable IPv4-mapped IPv6 addresses
sysctl -w net.ipv6.bindv6only=1
```

## UDP Diagnostic Commands Reference

```bash
# List all UDP sockets
ss -uanp

# Show UDP buffer sizes per socket
ss -uanmp

# Count UDP sockets by state
ss -uan | awk '{print $2}' | sort | uniq -c

# Monitor UDP traffic with tcpdump
tcpdump -i eth0 -nn udp

# Monitor UDP errors
netstat -su | grep -A 10 "Udp:"

# Show UDP receive buffer overflows
cat /proc/net/snmp | grep Udp

# Trace UDP packets through the kernel
trace-cmd record -e netif_receive_skb -p function_graph

# Measure UDP jitter with iperf3
iperf3 -c server.example.com -u -b 10M -l 1470 -J
```

### Reading /proc/net/snmp UDP Counters

The `Udp` line in `/proc/net/snmp` provides kernel-level UDP statistics:

```text
Udp: InDatagrams NoPorts InErrors OutDatagrams RcvbufErrors SndbufErrors InCsumErrors IgnoredMulti
```

| Counter      | Meaning                                         |
| ------------ | ----------------------------------------------- |
| InDatagrams  | Total datagrams received                        |
| NoPorts      | Datagrams for ports with no listener            |
| InErrors     | Total errors (includes buffer errors, checksum) |
| OutDatagrams | Total datagrams sent                            |
| RcvbufErrors | Receive buffer overflow (datagrams dropped)     |
| SndbufErrors | Send buffer overflow                            |
| InCsumErrors | Checksum validation failures                    |
| IgnoredMulti | Multicast packets dropped (socket not joined)   |

```bash
# Watch UDP error counters in real-time
watch -n 1 'cat /proc/net/snmp | grep Udp'
```
