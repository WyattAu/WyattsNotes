---
id: traffic-analysis
title: Traffic Analysis
description:
  Network traffic analysis — tcpdump filters, Wireshark advanced features, NetFlow, and performance
  monitoring.
slug: traffic-analysis
tags:
  - Networking
categories:
  - Networking
---

## Overview

Network traffic analysis is the process of capturing, examining, and interpreting network traffic to
troubleshoot problems, detect anomalies, optimize performance, and investigate security incidents.
This document covers packet capture methodology, advanced tcpdump and Wireshark usage, network flow
analysis (NetFlow/sFlow/IPFIX), bandwidth monitoring, and incident response workflows.

The fundamental skill is being able to answer the question: "what is actually on the wire?" --
independently of what you expect to be there.

## Packet Capture Methodology

### Where to Capture

Choosing the right capture point is the first and most important decision. The wrong capture point
yields misleading or useless data.

**SPAN Port (Switched Port Analyzer):**

A SPAN port mirrors traffic from one or more source ports to a destination port where the capture
device is connected. Available on most managed switches.

```text
# Cisco IOS SPAN configuration
monitor session 1 source interface Gi0/1 both
monitor session 1 destination interface Gi0/24
```

Advantages: no hardware cost, works on any switch. Disadvantages: may drop packets under heavy load
(ASIC limitations), does not capture errors on the source port, may not mirror all VLAN tags
correctly.

**Network TAP (Test Access Point):**

A hardware device inserted inline between two network devices. TAPs provide a passive copy of all
traffic (including errors and malformed frames) to the capture device.

```text
[Switch] --- [TAP] --- [Router]
                |
           [Capture Device]
```

Advantages: captures everything including errors, no impact on the monitored link, full-duplex
monitoring. Disadvantages: hardware cost, requires physical access to insert, introduces a potential
point of failure.

**Inline Capture:**

Capture traffic at the endpoint itself (on the server, VM, or container). Uses libpcap to capture
packets as they enter and leave the network interface.

Advantages: captures the endpoint's perspective (including locally-generated traffic), no additional
hardware. Disadvantages: endpoint CPU overhead, may not capture traffic that the endpoint's OS drops
before libpcap sees it.

### Capture Point Selection Guide

| Scenario                         | Best Capture Point                                     |
| -------------------------------- | ------------------------------------------------------ |
| Troubleshoot server connectivity | On the server (tcpdump)                                |
| Full link visibility             | TAP (if available) or SPAN                             |
| Packet loss investigation        | TAP (captures errors)                                  |
| Multi-point analysis             | SPAN + server capture, correlated                      |
| Encrypted traffic analysis       | On the endpoint (before encryption / after decryption) |
| Container networking             | On the host's veth interface or inside the container   |

:::warning

SPAN ports can drop packets under heavy load. The SPAN port's ASIC may not be able to mirror
line-rate traffic, especially on 10Gbps+ links. If you see missing packets in a SPAN capture,
consider using a TAP or capturing on the endpoint.

:::

## tcpdump Advanced

### BPF Filter Language

tcpdump uses the Berkeley Packet Filter (BPF) language to select which packets to capture. BPF
filters are compiled into a bytecode program that runs in the kernel, so filtering happens before
packets are copied to userspace. This is critical for performance -- capturing all traffic on a
10Gbps link without a filter would overwhelm the capture buffer.

### Primitive Filters

```bash
# By host (source or destination)
tcpdump -i eth0 host 192.168.1.100

# By source host
tcpdump -i eth0 src 192.168.1.100

# By destination host
tcpdump -i eth0 dst 192.168.1.100

# By network
tcpdump -i eth0 net 10.0.0.0/8

# By port
tcpdump -i eth0 port 443

# By source port
tcpdump -i eth0 src port 443

# By destination port
tcpdump -i eth0 dst port 443

# By protocol
tcpdump -i eth0 tcp
tcpdump -i eth0 udp
tcpdump -i eth0 icmp
tcpdump -i eth0 icmp6
tcpdump -i eth0 arp
```

### Compound Filters

```bash
# AND
tcpdump -i eth0 host 192.168.1.100 and port 443

# OR
tcpdump -i eth0 port 80 or port 443

# NOT
tcpdump -i eth0 not port 22

# Combined
tcpdump -i eth0 '(host 192.168.1.100 or host 192.168.1.200) and port 443'

# Exclude specific hosts
tcpdump -i eth0 'net 10.0.0.0/8 and not host 10.0.0.1'

# TCP flags
tcpdump -i eth0 'tcp[tcpflags] & (tcp-syn|tcp-fin) != 0'    # SYN or FIN
tcpdump -i eth0 'tcp[tcpflags] & tcp-syn != 0'               # SYN only
tcpdump -i eth0 'tcp[tcpflags] & tcp-rst != 0'               # RST only
tcpdump -i eth0 'tcp[tcpflags] & (tcp-syn|tcp-ack) != 0'     # SYN-ACK
```

### Byte-Level Matching

BPF allows matching arbitrary bytes in the packet. The syntax is `proto[offset:size]`.

```bash
# Match TCP payload containing "GET"
tcpdump -i eth0 'tcp port 80 and (((ip[2:2] - ((ip[0]&0xf)<<2)) - ((tcp[12]&0xf0)>>2)) != 0)' \
  -A -s 0 | grep 'GET '

# Match specific ICMP type (type 3 = destination unreachable)
tcpdump -i eth0 'icmp[0] == 3'

# Match specific ICMP code (code 4 = fragmentation needed)
tcpdump -i eth0 'icmp[0] == 3 and icmp[1] == 4'

# Match GRE protocol (IP protocol 47)
tcpdump -i eth0 'ip[9] == 47'

# Match packets larger than 1000 bytes
tcpdump -i eth0 'greater 1000'

# Match packets smaller than 100 bytes
tcpdump -i eth0 'less 100'
```

### Capture and Save

```bash
# Save capture to pcap file
tcpdump -i eth0 -w /tmp/capture.pcap -c 10000

# Save with ring buffer (rotate files, keep last N)
tcpdump -i eth0 -w /tmp/capture.pcap -C 100 -W 5
# -C 100: max 100MB per file
# -W 5: keep 5 files

# Read from pcap file
tcpdump -r /tmp/capture.pcap

# Read with display filter
tcpdump -r /tmp/capture.pcap 'host 192.168.1.100 and port 443'

# Capture with verbose output
tcpdump -i eth0 -vv -nn -X 'host 192.168.1.100'
# -vv: very verbose
# -nn: no DNS resolution (faster)
# -X: hex + ASCII payload
```

### Performance Tuning

```bash
# Increase capture buffer size (default is 2MB, may be too small for 10Gbps)
tcpdump -i eth0 -B 524288000   # 500MB buffer

# Disable promiscuous mode (only capture traffic to/from this host)
tcpdump -i eth0 -p

# Limit snapshot length (default 262144 bytes)
tcpdump -i eth0 -s 96   # capture first 96 bytes (headers only, no payload)

# Use zero-copy capture (if supported)
tcpdump -i eth0 -Z root
```

## Wireshark Advanced

### Display Filters

Wireshark display filters are applied after capture and use a different (and more powerful) syntax
than BPF capture filters.

```text
# Protocol filters
tcp
udp
http
tls
dns
icmp

# IP address
ip.addr == 192.168.1.100
ip.src == 192.168.1.100
ip.dst == 192.168.1.100

# Port
tcp.port == 443
tcp.srcport == 443
tcp.dstport == 443

# TCP flags
tcp.flags.syn == 1
tcp.flags.rst == 1
tcp.flags.fin == 1
tcp.analysis.retransmission
tcp.analysis.duplicate_ack

# DNS
dns.qry.name contains "example.com"
dns.qry.type == 1    # A record
dns.qry.type == 28   # AAAA record
dns.flags.response == 0  # query
dns.flags.response == 1  # response

# TLS
tls.handshake.type == 1   # ClientHello
tls.handshake.type == 2   # ServerHello
tls.handshake.extensions.server_name contains "example.com"

# HTTP
http.request.method == "GET"
http.response.code == 200
http.host contains "example.com"
http.request.uri contains "/api/"

# Combined
ip.addr == 192.168.1.100 and tcp.port == 443 and tls.handshake.type == 1

# Exclude
!(arp or dns)    # exclude ARP and DNS
```

### Column Preferences

Customize the packet list columns to show the information you need most:

```text
No. | Time | Source | Destination | Protocol | Length | Info
```

Add custom columns: Frame Time (relative to first packet), Delta Time (inter-packet interval), TCP
Stream, TCP Segment Length, Cumulative Bytes.

### Coloring Rules

Wireshark ships with default coloring rules, but you can add custom rules:

```text
# Highlight all TCP retransmissions in bright red
tcp.analysis.retransmission

# Highlight all RST packets
tcp.flags.rst == 1

# Highlight all DNS queries
dns.flags.response == 0

# Highlight all HTTP errors (4xx, 5xx)
http.response.code >= 400
```

### Following TCP Streams

Right-click a TCP packet and select "Follow TCP Stream" to see the full conversation. This
reassembles all TCP segments in order, removing headers and showing the application data.

### Expert Info

Wireshark's Expert Info (Analyze menu) automatically annotates packets with potential issues:

- **Notes:** Informational (e.g., "TCP window update")
- **Warnings:** Potential problems (e.g., "Previous segment not captured", "Duplicate ACK")
- **Errors:** Definite problems (e.g., "Retransmission", "Out of order", "RST sent")

### Protocol Preferences

Wireshark allows per-protocol configuration:

- **TLS:** Decrypt using a pre-master secret (SSLKEYLOGFILE), RSA private key, or session keys
- **HTTP:** Set TCP port for HTTP (if using non-standard ports)
- **DNS:** Enable/disable DNS query/response matching

### Decrypting TLS Traffic

```bash
# Set SSLKEYLOGFILE for Chrome/Firefox
export SSLKEYLOGFILE=/tmp/sslkeys.log
google-chrome

# In Wireshark: Edit > Preferences > Protocols > TLS
# (Pre)-Master-Secret log filename: /tmp/sslkeys.log
```

## tshark

tshark is the command-line version of Wireshark. It uses the same capture and display filter syntax
but outputs to the terminal.

### Capturing

```bash
# Capture with display filter
tshark -i eth0 -f 'port 443' -Y 'tls.handshake.type == 1'

# Capture and save
tshark -i eth0 -w /tmp/capture.pcap -c 10000
```

### Extracting Fields

```bash
# Extract HTTP host headers
tshark -r /tmp/capture.pcap -Y http -T fields \
  -e frame.number -e ip.src -e ip.dst -e http.host -e http.request.uri

# Extract DNS query names
tshark -r /tmp/capture.pcap -Y 'dns.flags.response == 0' -T fields \
  -e frame.number -e dns.qry.name -e dns.qry.type

# Extract TLS SNI
tshark -r /tmp/capture.pcap -Y 'tls.handshake.type == 1' -T fields \
  -e frame.number -e ip.src -e ip.dst \
  -e tls.handshake.extensions_server_name

# Extract TCP retransmissions
tshark -r /tmp/capture.pcap -Y 'tcp.analysis.retransmission' -T fields \
  -e frame.number -e ip.src -e ip.dst -e tcp.srcport -e tcp.dstport
```

### Statistics

```bash
# Protocol hierarchy
tshark -r /tmp/capture.pcap -q -z io,phs

# Conversations (by IP)
tshark -r /tmp/capture.pcap -q -z conv,ip

# Conversations (by TCP port)
tshark -r /tmp/capture.pcap -q -z conv,tcp

# DNS statistics
tshark -r /tmp/capture.pcap -q -z dns,tree

# HTTP statistics
tshark -r /tmp/capture.pcap -q -z http,tree

# IO statistics (bytes per second)
tshark -r /tmp/capture.pcap -q -z io,stat,0
```

### JSON Output for Scripting

```bash
# Output as JSON for parsing with jq
tshark -r /tmp/capture.pcap -Y 'http.response' -T json \
  | jq '.[] | select(._source.layers.http) | {time: ._source.layers.frame."frame.time_relative", code: ._source.layers.http."http.response.code"}'
```

## Network Flow Analysis

### NetFlow (Cisco)

NetFlow is a network protocol developed by Cisco that exports aggregated flow records from routers
and switches. A "flow" is a unidirectional sequence of packets sharing the same 5-tuple (source IP,
destination IP, source port, destination port, protocol).

**What NetFlow records:**

| Field            | Description                          |
| ---------------- | ------------------------------------ |
| src_addr         | Source IP address                    |
| dst_addr         | Destination IP address               |
| src_port         | Source port                          |
| dst_port         | Destination port                     |
| protocol         | IP protocol (TCP, UDP, ICMP, etc.)   |
| packets          | Number of packets in the flow        |
| bytes            | Total bytes in the flow              |
| start_time       | Time of first packet                 |
| end_time         | Time of last packet                  |
| tcp_flags        | OR of TCP flags seen in all packets  |
| tos              | Type of Service / DSCP value         |
| as_src           | Source AS number (if BGP is enabled) |
| as_dst           | Destination AS number                |
| input_interface  | SNMP index of ingress interface      |
| output_interface | SNMP index of egress interface       |
| nexthop          | Next-hop IP address                  |

**NetFlow versions:**

| Version | Description                                  |
| ------- | -------------------------------------------- |
| v5      | Original format, fixed fields                |
| v9      | Template-based, extensible (RFC 3954)        |
| IPFIX   | IETF standard based on NetFlow v9 (RFC 7011) |

### sFlow

sFlow (Sampled Flow) uses statistical sampling rather than tracking every packet. The router samples
1 in N packets (configurable, typically 1:1000) and exports the sample to a collector.

Advantages over NetFlow: lower CPU overhead on the router, works at line rate, can export interface
counters and packet headers.

Disadvantages: sampling means some flows are missed, less accurate for low-volume traffic.

### Flow Export Configuration

```text
# Cisco IOS NetFlow configuration
interface GigabitEthernet0/1
  ip flow ingress
  ip flow egress

flow exporter EXPORTER-1
  destination 10.0.0.100
  source 10.0.0.1
  transport udp 2055
  export-protocol netflow-v9

flow monitor MONITOR-1
  record netflow ipv4 original-input
  exporter EXPORTER-1
  cache timeout active 60

interface GigabitEthernet0/1
  ip flow monitor MONITOR-1 input
```

### Flow Analysis Tools

```bash
# nfdump (NetFlow collector and analyzer)
nfdump -r /data/netflow/nfcapd.202401150000 -n 20   # top 20 flows by bytes
nfdump -r /data/netflow/nfcapd.202401150000 -s srcip/bytes  # top talkers (source)
nfdump -r /data/netflow/nfcapd.202401150000 -s dstport/bytes  # top ports
nfdump -r /data/netflow/nfcapd.202401150000 'dst port 443'   # filter flows

# SiLK (Suite for IP network analysis)
rwfilter --proto=6 --dport=443 --pass=stdout \
  | rwcount --bin-size=300      # count connections per 5-minute bin
rwfilter --proto=17 --pass=stdout \
  | rwstats --fields=sport,dport --top=20  # top UDP port pairs
```

## Bandwidth Monitoring

### iftop

Real-time bandwidth usage per connection:

```bash
iftop -i eth0 -n   # -n: no DNS resolution
```

### nload

Simple real-time bandwidth monitor per interface:

```bash
nload
```

### bmon

Bandwidth monitor with graphical output:

```bash
bmon
```

### vnstat

Long-term bandwidth monitoring (stores historical data):

```bash
# Start monitoring
vnstat -u -i eth0

# View daily stats
vnstat -d

# View live traffic
vnstat -l

# View monthly stats
vnstat -m
```

### nethogs

Bandwidth monitoring per process:

```bash
nethogs eth0
```

## Connection Tracking

### conntrack (Linux)

Linux's netfilter connection tracking system maintains a table of all active connections. This is
the backbone of NAT, stateful firewalls, and conntrack-based tools.

```bash
# View all tracked connections
conntrack -L

# View connections for a specific IP
conntrack -L -s 192.168.1.100

# View NAT translations
conntrack -L -nat

# View connection tracking statistics
conntrack -S

# Maximum tracked connections
cat /proc/sys/net/nf_conntrack_max

# Current tracked connections
cat /proc/sys/net/netfilter/nf_conntrack_count
```

### nfconntrack Tuning

```bash
# Increase connection tracking table size
sysctl -w net.netfilter.nf_conntrack_max=262144

# Reduce connection tracking timeout
sysctl -w net.netfilter.nf_conntrack_tcp_timeout_established=600

# View timeout values
cat /proc/sys/net/netfilter/nf_conntrack_tcp_timeout_established
```

:::warning

If the conntrack table fills up, new connections are dropped with
`nf_conntrack: table full, dropping packet` messages in dmesg. This is a common cause of seemingly
random connection failures on firewalls and NAT gateways. Monitor `nf_conntrack_count` vs
`nf_conntrack_max`.

:::

## Performance Metrics

### Throughput

Measured in bits per second (bps) or bytes per second (Bps).

```bash
# Measure throughput with iperf3
# Server
iperf3 -s

# Client
iperf3 -c server.example.com -t 30 -P 4    # 30s test, 4 parallel streams
iperf3 -c server.example.com -u -b 100M     # UDP test, 100 Mbps target
```

### Packet Loss

```bash
# Measure packet loss with ping
ping -c 100 example.com | tail -2
# 100 packets transmitted, 99 received, 1% packet loss

# MTR (My Traceroute) combines ping and traceroute
mtr --report --report-cycles 100 example.com
```

### Jitter

Jitter is the variation in packet delay. High jitter causes problems for real-time applications
(VoIP, video).

```bash
# Measure jitter with iperf3
iperf3 -c server.example.com -u -b 10M -l 1470
# Look for "jitter" in the output

# Measure jitter with ping (calculate from delay variation)
ping -i 0.1 -c 100 example.com | awk '/time=/ {print $7}' | \
  awk 'BEGIN{prev=0} {if(prev>0) printf "%.1f\n", $0-prev; prev=$0}'
```

### Latency

```bash
# Round-trip latency
ping -c 10 example.com

# One-way latency (requires clocks synchronized via NTP)
iperf3 -c server.example.com --connect-timeout 5000

# TCP connection latency (measure SYN to SYN-ACK)
hping3 -S -c 10 -p 443 example.com
```

## Network Baseline Establishment

### Why Baseline

You cannot detect anomalies if you do not know what normal looks like. A network baseline records
typical traffic patterns, throughput, latency, packet loss, and protocol distribution during normal
operation.

### What to Measure

| Metric               | Tool            | Frequency |
| -------------------- | --------------- | --------- |
| Interface throughput | SNMP / iftop    | 5 minutes |
| Top talkers (by IP)  | NetFlow / sFlow | 5 minutes |
| Top protocols        | NetFlow / sFlow | 5 minutes |
| TCP connections      | conntrack / ss  | 1 minute  |
| DNS query volume     | dns query logs  | 1 minute  |
| HTTP request rate    | access logs     | 1 minute  |
| Packet loss          | ping / SLA      | 1 minute  |
| Latency (RTT)        | ping / SLA      | 1 minute  |

### Baseline Duration

Capture at least one full business cycle (7 days) to capture weekday vs weekend patterns, peak vs
off-peak hours, and any batch processing windows.

## Anomaly Detection

### Unusual Traffic Patterns

Indicators of network anomalies:

- **Unexpected bandwidth spike:** Data exfiltration, DDoS, misconfigured backup
- **New top talkers:** Compromised host communicating with unknown destinations
- **Unexpected protocols:** SSH on non-standard ports, DNS tunneling, ICMP tunneling
- **Traffic to unusual ports:** Scanning, exploitation attempts
- **Traffic to unusual destinations:** Connections to known-bad IPs or countries you do not do
  business with
- **Unusual DNS patterns:** High volume of NXDOMAIN (DNS tunneling or DGA malware), high volume to a
  specific domain

### Port Scan Detection

```bash
# Detect SYN scans with tcpdump
tcpdump -i eth0 'tcp[tcpflags] & tcp-syn != 0 and tcp[tcpflags] & tcp-ack == 0' \
  -nn -c 1000

# Detect with tshark
tshark -i eth0 -f 'tcp[tcpflags] & (tcp-syn) != 0 and tcp[tcpflags] & (tcp-ack) == 0' \
  -c 1000 -q -z conv,tcp | head -30
```

### Data Exfiltration Indicators

- Large outbound transfers to unusual destinations
- DNS tunneling (high volume of long DNS queries)
- ICMP tunneling (large ICMP payloads)
- HTTPS connections to unknown or newly-registered domains
- Steganography in image files or other media

```bash
# Detect large DNS queries (possible DNS tunneling)
tcpdump -i eth0 -nn 'udp port 53 and greater 100' -w /tmp/dns-large.pcap

# Detect unusual ICMP traffic (possible ICMP tunneling)
tcpdump -i eth0 -nn 'icmp[icmptype] != icmp-echo and icmp[icmptype] != icmp-echoreply' \
  -w /tmp/icmp-unusual.pcap
```

## pcap Analysis Workflow for Incident Response

### Step 1: Identify the Scope

Determine the time window and affected hosts from logs and alerts. This tells you which captures to
analyze and what time range to filter.

### Step 2: Extract Conversations

```bash
# List all unique IP conversations in the capture
tshark -r incident.pcap -q -z conv,ip | sort -k 5 -rn | head -20

# List all unique TCP conversations
tshark -r incident.pcap -q -z conv,tcp | sort -k 6 -rn | head -20
```

### Step 3: Extract DNS Queries

```bash
# All DNS queries (potential C2 domain lookups)
tshark -r incident.pcap -Y 'dns.flags.response == 0' -T fields \
  -e frame.time -e ip.src -e dns.qry.name | sort | uniq -c | sort -rn | head -50
```

### Step 4: Extract HTTP Requests

```bash
# All HTTP requests (potential malicious downloads)
tshark -r incident.pcap -Y 'http.request' -T fields \
  -e frame.time -e ip.src -e http.host -e http.request.uri -e http.user_agent
```

### Step 5: Extract TLS SNI

```bash
# All TLS handshakes (SNI reveals destination even with encrypted traffic)
tshark -r incident.pcap -Y 'tls.handshake.type == 1' -T fields \
  -e frame.time -e ip.src -e ip.dst -e tls.handshake.extensions_server_name
```

### Step 6: Extract Payloads for Suspicious Connections

```bash
# Extract full TCP stream for a specific conversation
tshark -r incident.pcap -q -z follow,tcp,raw,10.0.0.50,443,192.168.1.100,52341
```

## Merging and Correlating Captures

### Merge Captures from Multiple Points

```bash
# Merge two pcap files chronologically
mergecap -w merged.pcap capture1.pcap capture2.pcap capture3.pcap

# Use editcap to filter by time range
editcap -A "2024-01-15 10:00:00" -B "2024-01-15 11:00:00" \
  capture.pcap filtered.pcap
```

### Correlating Server and Client Captures

When troubleshooting packet loss or latency, capture on both the client and the server
simultaneously. Use NTP to synchronize clocks, then correlate packets by timestamp.

```bash
# Client capture
tcpdump -i eth0 -w /tmp/client.pcap host 10.0.0.50 &

# Server capture (simultaneously)
ssh server "tcpdump -i eth0 -w /tmp/server.pcap host 192.168.1.100" &

# After the test, compare:
# - Which packets left the client but never arrived at the server (lost in network)
# - Which packets arrived at the server but the response never reached the client (lost in network)
# - RTT measured from client vs server perspective
```

## Common Pitfalls

### 1. Capturing on the Wrong Interface

On a server with multiple interfaces, make sure you are capturing on the correct one.
`tcpdump -i any` captures on all interfaces but may not show the physical interface name. Always
verify with `ip link show` first.

### 2. Not Using -nn

Without `-nn`, tcpdump performs reverse DNS lookups for every IP address and service name lookups
for every port. This is extremely slow for high-traffic captures and may cause tcpdump to drop
packets. Always use `-nn`.

### 3. Capture Buffer Too Small

The default capture buffer is 2MB. On a 10Gbps link, 2MB fills in ~1.6 milliseconds. Use `-B` to
increase the buffer:

```bash
tcpdump -i eth0 -B 524288000   # 500MB
```

### 4. Not Considering VLAN Tags

If your network uses VLANs, the VLAN tag (802.1Q) is prepended to the Ethernet frame. tcpdump may
not match filters against VLAN-tagged traffic. Use `vlan` in the BPF filter:

```bash
tcpdump -i eth0 'vlan 100 and port 443'
```

### 5. SPAN Port Packet Drops

As mentioned earlier, SPAN ports can drop packets. Always verify your capture by checking for
missing TCP segments (Wireshark's "Previous segment not captured" expert info). If you see
systematic drops, use a TAP or capture on the endpoint.

### 6. Encrypted Traffic Blindness

TLS encryption makes packet-level analysis blind to application data. For encrypted traffic, you
need either:

- The session keys (SSLKEYLOGFILE)
- A TLS decryption appliance
- Metadata analysis (SNI, JA3/JA3S fingerprints, certificate information, flow patterns)

### 7. Capture Files Growing Too Large

A full-speed capture on a 10Gbps link generates approximately 1.25GB per second. Use ring buffers to
rotate files:

```bash
tcpdump -i eth0 -w /tmp/capture.pcap -C 100 -W 5 -G 300
# -C 100: max 100MB per file
# -W 5: keep 5 files
# -G 300: new file every 300 seconds
```

### 8. Not Checking Clock Synchronization

When correlating captures from multiple points, ensure all systems are synchronized via NTP. A clock
skew of even 1 second can make correlation impossible for fast interactions. Use `ntpq -p` to verify
NTP synchronization before starting a multi-point capture.
