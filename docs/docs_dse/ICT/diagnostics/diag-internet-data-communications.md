---
title: Internet and Data Communications -- Diagnostic Tests
description: "DSE ICT diagnostic tests for internet and data communications: network topologies, OSI model, TCP/IP, protocols, bandwidth, and error detection."
slug: diag-internet-data-communications
hide_table_of_contents: true
---

# Internet and Data Communications — Diagnostic Tests

## Unit Tests

### UT-1: OSI Model and Protocols
**Question:** (a) List all 7 layers of the OSI model with their primary functions. (b) For each of the following, identify the OSI layer: HTTP, TCP, IP, Ethernet, MAC address, Router, Switch, Encryption (TLS). (c) Explain the process of encapsulation as data moves from the application layer down to the physical layer.

**Solution:**

(a) | Layer | Name | Primary Function |
|---|---|---|
| 7 | Application | Provides network services directly to user applications |
| 6 | Presentation | Data formatting, encryption, compression, character encoding |
| 5 | Session | Establishes, manages, and terminates sessions between applications |
| 4 | Transport | End-to-end reliable (TCP) or unreliable (UDP) data delivery |
| 3 | Network | Logical addressing (IP) and routing between networks |
| 2 | Data Link | Framing, MAC addressing, error detection (node-to-node delivery) |
| 1 | Physical | Physical transmission of raw bits over a medium |

(b) HTTP: Layer 7 (Application). TCP: Layer 4 (Transport). IP: Layer 3 (Network). Ethernet: Layer 2 (Data Link) and Layer 1 (Physical). MAC address: Layer 2 (Data Link). Router: Layer 3 (Network). Switch: Layer 2 (Data Link). Encryption (TLS): Layer 6 (Presentation).

(c) Encapsulation: At the application layer, user data is generated. Each layer adds its own header (and possibly trailer) around the data:
- **Application** creates the data payload.
- **Transport** adds a header with port numbers and sequence numbers $\to$ **segment** (TCP) or **datagram** (UDP).
- **Network** adds an IP header with source/destination IP addresses $\to$ **packet**.
- **Data Link** adds a frame header (MAC addresses) and trailer (error detection via CRC) $\to$ **frame**.
- **Physical** converts the frame to signals (electrical, optical, radio) for transmission.

At the receiving end, **de-encapsulation** strips each layer's header in reverse order.

### UT-2: Network Topologies and Performance
**Question:** (a) Compare star, bus, and mesh topologies in terms of: cost, fault tolerance, and scalability. (b) A star network has 8 computers connected to a central switch. Calculate the number of cables needed. If one cable fails, how many computers are affected? (c) A full mesh network has 6 nodes. Calculate the number of connections needed. (d) Explain the difference between a hub and a switch.

**Solution:**

(a) | Topology | Cost | Fault Tolerance | Scalability |
|---|---|---|---|
| **Star** | Medium (requires central switch/hub and individual cables) | High (one cable failure affects only one node; central device failure affects all) | Good (easy to add/remove nodes) |
| **Bus** | Low (single backbone cable, simple) | Low (single cable failure brings down the entire network) | Poor (adding nodes disrupts the network) |
| **Mesh** | High (many cables or wireless links) | Very high (multiple paths between nodes; single failure does not disconnect) | Complex (adding nodes requires many new connections) |

(b) Star network: 8 cables (one from each computer to the central switch). If one cable fails, only **1 computer** is affected (the one connected by that cable). All other 7 computers continue to communicate through the switch.

(c) Full mesh: each node connects to every other node. Number of connections $= \frac{n(n-1)}{2} = \frac{6 \times 5}{2} = 15$.

(d) A **hub** is a physical layer device that broadcasts every incoming frame to ALL connected ports. It does not examine frame addresses and creates a single shared collision domain.

A **switch** is a data link layer device that learns MAC addresses and forwards frames only to the specific destination port. Each port is its own collision domain, and simultaneous communications can occur between different pairs of ports. Switches are significantly more efficient than hubs.

### UT-3: Bandwidth and Data Transmission
**Question:** (a) A file of 150 MB is downloaded over a 100 Mbps connection. Calculate the download time. (b) A network has a latency of 50 ms and bandwidth of 1 Gbps. Calculate the time to send a 10 KB packet. (c) Explain the difference between latency and bandwidth using an analogy. (d) Calculate the maximum throughput of a channel with bandwidth 20 MHz using 256-QAM (8 bits per symbol).

**Solution:**

(a) Download time $= \frac{150 \times 8}{100} = 12$ seconds. (150 MB $\times 8 = 1200$ megabits; $1200 / 100 = 12$ s.)

(b) Transmission time $= \frac{10 \times 1024 \times 8}{10^9} = \frac{81{,}920}{10^9} = 0.00008192$ s $= 0.08192$ ms.

Total time $=$ latency $+$ transmission time $= 50 + 0.082 = 50.082$ ms. Latency dominates for small packets.

(c) **Bandwidth** is like the width of a highway (how many cars can travel simultaneously). **Latency** is like the speed limit and distance (how long it takes one car to travel from A to B). A wide highway with a low speed limit (high bandwidth, high latency) is good for bulk data transfers. A narrow highway with high speed (low bandwidth, low latency) is better for interactive applications like online gaming.

(d) 256-QAM transmits 8 bits per symbol. Nyquist theorem: maximum data rate $= 2 \times \text{bandwidth} \times \log_2(\text{levels}) = 2 \times 20 \times 10^6 \times 8 = 320$ Mbps.

---

## Integration Tests

### IT-1: TCP/IP Protocol Stack (with Computer Systems)
**Question:** A user types `www.example.com` into a browser. Trace the complete process from URL entry to page display, identifying which protocols operate at each layer and how the data is encapsulated and transmitted. Include DNS resolution, TCP handshake, and HTTP request/response.

**Solution:**

1. **Application Layer (HTTP, DNS):** The browser parses the URL and sends a DNS query to resolve `www.example.com` to an IP address (e.g., 93.184.216.34). The DNS request is encapsulated in a UDP segment and sent to the DNS server.

2. **DNS Response:** The DNS server returns the IP address. The browser now knows the destination.

3. **Transport Layer (TCP):** The browser initiates a TCP three-way handshake:
   - Client sends SYN to server (SYN flag set, random sequence number).
   - Server responds with SYN-ACK (acknowledges client's SYN, sends its own SYN).
   - Client sends ACK (acknowledges server's SYN). Connection established.

4. **Transport Layer (HTTP):** The browser sends an HTTP GET request, encapsulated in a TCP segment with source port (e.g., 50000) and destination port (80).

5. **Network Layer (IP):** The TCP segment is encapsulated in an IP packet with the client's source IP and server's destination IP. The client's routing table determines the next hop (default gateway).

6. **Data Link Layer (Ethernet):** The IP packet is encapsulated in an Ethernet frame with the source MAC (client's NIC) and destination MAC (router's interface). ARP may be used to resolve the router's MAC from its IP.

7. **Physical Layer:** The frame is converted to electrical/optical signals and transmitted over the network cable or Wi-Fi.

8. Each router along the path decapsulates to Layer 3 (IP), reads the destination IP, re-encapsulates with new Layer 2 headers, and forwards.

9. The server receives the frame, decapsulates through all layers, and the HTTP server processes the GET request, sends back the HTML content following the same encapsulation process in reverse.

10. The browser receives the response, decapsulates, and renders the HTML page.

### IT-2: Network Design and Error Detection (with Data Representation)
**Question:** A school needs to network 3 computer labs (30 computers each), a server room, and 10 administrative computers. (a) Recommend a network design (topology, devices) and justify. (b) The school uses Ethernet with CRC error detection. Explain how CRC detects errors. (c) If a frame of 512 bytes has a CRC polynomial that produces a 32-bit remainder, calculate the total frame size transmitted. (d) Explain why the school should use VLANs to separate student and administrative traffic.

**Solution:**

(a) **Topology:** Hierarchical star. Each lab has a switch connecting its 30 computers (star within each lab). Each lab switch connects to a core/distribution switch in the server room. The server room has its own switch. Administrative computers connect to a separate switch.

**Devices:**
- 4x 48-port Gigabit switches (one per lab)
- 1x core switch (24+ ports with VLAN capability)
- 1x 16-port switch for administration and servers
- 1x router/firewall for internet connection
- Cat6 Ethernet cabling

Justification: Star topology provides fault tolerance (one cable failure affects only one computer), easy management, and good performance. The hierarchical design segments the network for security and performance.

(b) CRC (Cyclic Redundancy Check): The sender treats the data as a polynomial and divides it by a predetermined generator polynomial using modulo-2 binary division. The remainder of this division is appended to the data as the CRC checksum. The receiver performs the same division. If the remainder is zero, no error is detected. If non-zero, an error occurred and the frame is discarded. CRC can detect all single-bit errors, all double-bit errors, and any odd number of errors, as well as burst errors up to the degree of the polynomial.

(c) Total frame size $= 512 + 4 = 516$ bytes. (32 bits $= 4$ bytes of CRC appended to the data.)

(d) VLANs (Virtual LANs) logically separate traffic even if devices share the same physical switch. Benefits:
1. **Security:** Students cannot access administrative systems (student records, financial data).
2. **Performance:** Broadcast traffic from 90 student computers does not flood the administrative network.
3. **Compliance:** Data protection regulations may require isolating sensitive data.
4. **Simplified management:** Access control policies are applied at the VLAN level rather than per-port.

### IT-3: Wireless Networking and Protocols (with Network Security)
**Question:** (a) Compare Wi-Fi (802.11) standards: 802.11n (Wi-Fi 4), 802.11ac (Wi-Fi 5), and 802.11ax (Wi-Fi 6) in terms of maximum speed, frequency bands, and key improvements. (b) Explain why WPA3 is more secure than WPA2. (c) A cafe offers free Wi-Fi. Explain three security risks for customers and how to mitigate each.

**Solution:**

(a) | Standard | Max Speed | Frequency | Key Improvements |
|---|---|---|---|
| 802.11n (Wi-Fi 4) | 600 Mbps | 2.4 GHz, 5 GHz | MIMO (multiple antennas), wider channels |
| 802.11ac (Wi-Fi 5) | 6.93 Gbps | 5 GHz | MU-MIMO (multi-user), wider 160 MHz channels, 256-QAM |
| 802.11ax (Wi-Fi 6) | 9.6 Gbps | 2.4 GHz, 5 GHz, 6 GHz | OFDMA (orthogonal frequency division multiple access), target wake time (power saving), BSS coloring (dense environments) |

(b) WPA3 improvements over WPA2:
1. **Stronger encryption:** Uses SAE (Simultaneous Authentication of Equals) instead of PSK, which is resistant to offline dictionary attacks.
2. **Forward secrecy:** Even if a password is compromised after connection, previously captured traffic cannot be decrypted (unlike WPA2 where knowing the password allows decryption of all captured traffic).
3. **Protection against KRACK:** WPA3's SAE handshake is not vulnerable to the Key Reinstallation Attack that affected WPA2.
4. **192-bit enterprise mode:** Optional stronger encryption for high-security environments.

(c) Three risks and mitigations:
1. **Eavesdropping (packet sniffing):** On unencrypted public Wi-Fi, attackers can capture all traffic. Mitigation: Use a VPN to encrypt all traffic, or only visit HTTPS websites.
2. **Evil twin attack:** An attacker sets up a rogue access point with the same SSID to intercept traffic. Mitigation: Verify the network name with staff, use a VPN.
3. **Malware distribution:** Attackers can intercept unencrypted HTTP connections and inject malware. Mitigation: Ensure software is updated, use HTTPS, avoid sensitive transactions on public Wi-Fi.
