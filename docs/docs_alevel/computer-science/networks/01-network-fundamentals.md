---
title: Network Fundamentals
date: 2025-06-02T16:25:28.480Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: network-fundamentals
---

## 1. Types of Networks

### LAN (Local Area Network)

A network connecting computers within a limited geographical area (building, campus).
Characteristics:

- High speed (100 Mbps to 10 Gbps)
- Low latency
- Owned and maintained by the organisation
- Uses Ethernet or Wi-Fi

### WAN (Wide Area Network)

A network spanning large geographical areas (cities, countries, continents). The internet is the
largest WAN. Characteristics:

- Lower speed than LAN
- Higher latency
- Owned by multiple service providers
- Uses routers, switches, and various transmission media

### WLAN (Wireless LAN)

A LAN using wireless communication (Wi-Fi, IEEE 802.11 standards).

### Network Models

| Model | Scope            | Ownership           | Example            |
| ----- | ---------------- | ------------------- | ------------------ |
| LAN   | Building, campus | Single organisation | Office network     |
| WAN   | Country, global  | Multiple providers  | The Internet       |
| WLAN  | Building         | Single organisation | Wi-Fi in a café    |
| PAN   | Personal (room)  | Individual          | Bluetooth devices  |
| MAN   | City             | Single provider     | City-wide cable TV |

---

## 2. Network Topologies

### Star Topology

All devices connect to a central hub/switch.

- **Advantage:** Easy to add/remove devices; failure of one device doesn't affect others
- **Disadvantage:** Central device failure brings down the entire network

### Mesh Topology

Every device connects to every other device (full mesh) or to multiple devices (partial mesh).

- **Advantage:** High redundancy and reliability
- **Disadvantage:** Expensive; complex cabling ($n(n-1)/2$ cables for full mesh)

### Bus Topology

All devices share a single communication line.

- **Advantage:** Simple, cheap
- **Disadvantage:** Single point of failure; performance degrades with many devices

### Ring Topology

Devices form a circular loop. Data travels in one direction.

- **Advantage:** No collisions; predictable performance
- **Disadvantage:** One device failure breaks the ring

### Comparison

| Property      | Star            | Mesh           | Bus            | Ring           |
| ------------- | --------------- | -------------- | -------------- | -------------- |
| Cost          | Low             | High           | Low            | Medium         |
| Reliability   | Medium          | High           | Low            | Medium         |
| Scalability   | High            | Low            | Low            | Low            |
| Cable failure | Isolates device | Multiple paths | Entire network | Entire network |

---

## 3. The OSI Model

### Seven Layers

| Layer | Name         | Function                             | Protocol examples    |
| ----- | ------------ | ------------------------------------ | -------------------- |
| 7     | Application  | User interface, API                  | HTTP, FTP, SMTP, DNS |
| 6     | Presentation | Data formatting, encryption          | SSL/TLS, JPEG, ASCII |
| 5     | Session      | Manage sessions                      | NetBIOS, RPC         |
| 4     | Transport    | End-to-end delivery, reliability     | TCP, UDP             |
| 3     | Network      | Routing, logical addressing          | IP, ICMP, ARP        |
| 2     | Data Link    | Frame transmission, MAC addressing   | Ethernet, Wi-Fi      |
| 1     | Physical     | Bit transmission over physical media | Cables, signals      |

### Data Encapsulation

As data moves down the layers, each layer adds its own **header** (and sometimes trailer):

```
Application:  [Data]
Presentation: [Presentation Header | Data]
Session:      [Session Header | Presentation Header | Data]
Transport:    [TCP Header | Session Header | Presentation Header | Data]
Network:      [IP Header | TCP Header | Session Header | Presentation Header | Data]
Data Link:    [Frame Header | IP Header | TCP Header | ... | Data | Frame Trailer]
Physical:     [Bits on wire]
```

### TCP/IP Model (4 layers)

| TCP/IP Layer   | OSI Layers                         | Protocols            |
| -------------- | ---------------------------------- | -------------------- |
| Application    | Application, Presentation, Session | HTTP, FTP, DNS, SMTP |
| Transport      | Transport                          | TCP, UDP             |
| Internet       | Network                            | IP, ICMP             |
| Network Access | Data Link, Physical                | Ethernet, Wi-Fi      |

---

## 4. TCP vs UDP

### TCP (Transmission Control Protocol)

- **Connection-oriented:** Three-way handshake before data transfer
- **Reliable:** Acknowledgements, retransmission, sequence numbers
- **Ordered:** Data arrives in the order it was sent
- **Flow control:** Adjusts transmission rate to prevent overwhelming the receiver
- **Overhead:** Larger header (20 bytes minimum)

### UDP (User Datagram Protocol)

- **Connectionless:** No handshake; just send
- **Unreliable:** No acknowledgements or retransmission
- **No ordering:** Packets may arrive out of order
- **No flow control:** Sends at whatever rate the application produces
- **Low overhead:** Small header (8 bytes)

### Comparison

| Property    | TCP                       | UDP                    |
| ----------- | ------------------------- | ---------------------- |
| Connection  | Connection-oriented       | Connectionless         |
| Reliability | Reliable                  | Unreliable             |
| Ordering    | Guaranteed                | Not guaranteed         |
| Speed       | Slower (overhead)         | Faster                 |
| Header      | 20+ bytes                 | 8 bytes                |
| Use cases   | Web, email, file transfer | Streaming, gaming, DNS |

:::info
Board-specific Know specific use cases for each protocol:

- TCP: HTTP, HTTPS, FTP, SMTP, SSH
- UDP: DNS, DHCP, TFTP, online gaming, video streaming, VoIP
:::

### TCP Three-Way Handshake

1. **SYN:** Client → Server: "I want to connect"
2. **SYN-ACK:** Server → Client: "I acknowledge, let's connect"
3. **ACK:** Client → Server: "Acknowledged"

This establishes a reliable connection before data transfer begins.

---

## 5. IP Addressing

### IPv4

A 32-bit address written as four octets: `192.168.1.1`

**Address classes:**

| Class | Range                       | First bits | Default subnet mask |
| ----- | --------------------------- | ---------- | ------------------- |
| A     | 1.0.0.0 – 126.255.255.255   | 0          | 255.0.0.0           |
| B     | 128.0.0.0 – 191.255.255.255 | 10         | 255.255.0.0         |
| C     | 192.0.0.0 – 223.255.255.255 | 110        | 255.255.255.0       |
| D     | 224.0.0.0 – 239.255.255.255 | 1110       | Multicast           |

### Subnetting

Subnet masks divide an IP address into **network** and **host** portions.

**Example:** IP `192.168.1.100` with mask `255.255.255.0` (/24)

- Network address: `192.168.1.0`
- Host address: `100`
- Broadcast: `192.168.1.255`
- Usable hosts: `192.168.1.1` – `192.168.1.254` (254 hosts)

**Hosts per subnet:** $2^{32-n} - 2$ (where $n$ is the prefix length).

### IPv6

128-bit addresses written as eight groups of hex: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`

- $2^{128}$ possible addresses (vs $2^{32}$ for IPv4)
- Solves the IPv4 address exhaustion problem
- Simplified header for faster routing

### Private vs Public IP Addresses

| Range                         | Class | Use           |
| ----------------------------- | ----- | ------------- |
| 10.0.0.0 – 10.255.255.255     | A     | Private (LAN) |
| 172.16.0.0 – 172.31.255.255   | B     | Private (LAN) |
| 192.168.0.0 – 192.168.255.255 | C     | Private (LAN) |

Private addresses are not routable on the internet. **NAT** (Network Address Translation) translates
private addresses to a public address at the router.

---

## 6. DNS (Domain Name System)

### Definition

DNS translates human-readable domain names (e.g., `www.example.com`) into IP addresses (e.g.,
`93.184.216.34`).

### DNS Hierarchy

```
Root DNS servers (.)
├── .com
│   ├── example.com
│   │   ├── www.example.com → 93.184.216.34
│   │   └── mail.example.com → 93.184.216.35
│   └── google.com
├── .org
├── .net
└── .uk
    └── ac.uk
        ├── cam.ac.uk
        └── ox.ac.uk
```

### DNS Resolution Process

1. Browser checks its **cache**
2. Query the **recursive resolver** (usually the ISP's DNS server)
3. Resolver queries the **root DNS server** → returns TLD server for `.com`
4. Resolver queries the `.com` TLD server → returns authoritative server for `example.com`
5. Resolver queries the authoritative server → returns the IP address
6. Result is cached for future use

---

## 7. Common Protocols

| Protocol | Layer       | Port  | Purpose                     |
| -------- | ----------- | ----- | --------------------------- |
| HTTP     | Application | 80    | Web pages                   |
| HTTPS    | Application | 443   | Encrypted web pages         |
| FTP      | Application | 20/21 | File transfer               |
| SMTP     | Application | 25    | Send email                  |
| POP3     | Application | 110   | Receive email               |
| IMAP     | Application | 143   | Access email on server      |
| DNS      | Application | 53    | Domain name resolution      |
| DHCP     | Application | 67/68 | Auto-assign IP addresses    |
| SSH      | Application | 22    | Secure remote access        |
| Telnet   | Application | 23    | Remote access (unencrypted) |

---

## Problem Set

**Problem 1.** A company has a Class C network address `192.168.5.0/24`. They need 6 subnets.
Calculate the subnet mask, number of hosts per subnet, and the network addresses of each subnet.

<details>
<summary>Answer</summary>

Need 6 subnets. Borrow bits: $2^2 = 4$ (not enough), $2^3 = 8$ (enough). Borrow 3 bits.

New subnet mask: `/24 + 3 = /27` → `255.255.255.224`

Hosts per subnet: $2^{32-27} - 2 = 2^5 - 2 = 30$

Subnet addresses (increment by 32):

- 192.168.5.0/27 (hosts: 1–30)
- 192.168.5.32/27 (hosts: 33–62)
- 192.168.5.64/27 (hosts: 65–94)
- 192.168.5.96/27 (hosts: 97–126)
- 192.168.5.128/27 (hosts: 129–158)
- 192.168.5.160/27 (hosts: 161–190)
- 192.168.5.192/27 (hosts: 193–222)
- 192.168.5.224/27 (hosts: 225–254)

8 subnets available (6 needed + 2 spare).

</details>

**Problem 2.** Explain the TCP three-way handshake. Why is a two-way handshake insufficient?

<details>
<summary>Answer</summary>

**Three-way handshake:**

1. Client sends SYN (seq = x): "I want to establish a connection"
2. Server sends SYN-ACK (seq = y, ack = x+1): "I acknowledge and agree"
3. Client sends ACK (ack = y+1): "Acknowledged, connection established"

**Why two-way is insufficient:** A two-way handshake cannot prevent **stale duplicate SYNs** from
establishing spurious connections. If a client sends a SYN that is delayed by the network, and the
client times out and sends another SYN, the first SYN may arrive later. With a two-way handshake,
both SYNs would create separate connections. The third ACK in the three-way handshake allows the
server to identify and discard stale connections: if the server receives an ACK for a connection it
didn't establish, it rejects it.

</details>

**Problem 3.** A user types `https://www.cam.ac.uk` into their browser. Describe the steps that
occur before the web page is displayed, including DNS resolution and the TCP handshake.

<details>
<summary>Answer</summary>

1. **DNS Resolution:**
   - Browser checks local cache → not found
   - Query OS DNS resolver → not found
   - Query ISP's recursive resolver → not found
   - Resolver queries root server → "Ask the .uk TLD server"
   - Resolver queries .uk server → "Ask the ac.uk server"
   - Resolver queries ac.uk server → "Ask the cam.ac.uk authoritative server"
   - Authoritative server returns: `www.cam.ac.uk → 128.232.0.31`
   - Result cached at each level

2. **TCP Handshake:**
   - Client sends SYN to `128.232.0.31:443`
   - Server responds with SYN-ACK
   - Client sends ACK
   - Connection established

3. **TLS Handshake:** (for HTTPS)
   - Client and server negotiate encryption parameters
   - Server presents SSL certificate
   - Secure connection established

4. **HTTP Request:** Client sends `GET / HTTP/1.1` over the encrypted connection

5. **HTTP Response:** Server returns HTML, CSS, JS, images

6. **Rendering:** Browser parses and displays the page
</details>

**Problem 4.** Compare star and mesh topologies in terms of cost, reliability, and scalability.
Which would you recommend for a hospital network? Justify.

<details>
<summary>Answer</summary>

**Star:**

- Cost: Low (one cable per device, one central switch)
- Reliability: Medium (switch failure = total failure; individual device failure isolated)
- Scalability: High (easy to add devices to the switch)

**Mesh:**

- Cost: High ($n(n-1)/2$ cables for full mesh)
- Reliability: High (multiple paths between any two devices)
- Scalability: Low (adding a device requires cables to all existing devices)

**Recommendation for a hospital:** A **partial mesh** or **redundant star** topology. Hospital
networks require high reliability (life-critical systems cannot have downtime), but a full mesh is
prohibitively expensive. A practical approach: multiple star networks connected by redundant links
(partial mesh at the backbone level). Critical systems (ICU monitors) may have redundant
connections.

</details>

**Problem 5.** Explain why UDP is preferred over TCP for online gaming and video conferencing.

<details>
<summary>Answer</summary>

**Online gaming:**

- Low latency is critical — a delayed packet is worse than a lost packet
- UDP's lack of retransmission means lost data is simply skipped (the game moves on)
- TCP's retransmission and ordering cause delay and jitter
- Games can implement their own reliability for critical data (e.g., player positions) while
  dropping non-critical data (e.g., cosmetic effects)

**Video conferencing:**

- Real-time requirement — audio/video from 5 seconds ago is useless
- UDP delivers packets as fast as possible without waiting for retransmission
- Occasional packet loss manifests as brief glitches (acceptable)
- TCP would buffer delayed packets, causing increasing lag
</details>

**Problem 6.** Calculate the number of usable host addresses in a `/28` subnet.

<details>
<summary>Answer</summary>

`/28` means 28 bits for the network, $32 - 28 = 4$ bits for the host.

Number of addresses: $2^4 = 16$

Usable hosts: $16 - 2 = 14$ (subtract network address and broadcast address).

</details>

**Problem 7.** Explain the purpose of NAT (Network Address Translation) and how it works.

<details>
<summary>Answer</summary>

**Purpose:** NAT allows multiple devices on a private network to share a single public IP address
for internet access. This:

1. Conserves the limited IPv4 address space
2. Hides internal network structure from external networks (security)

**How it works:**

1. A device on the LAN (e.g., `192.168.1.10`) sends a packet to an external server
2. The router replaces the source IP (`192.168.1.10`) with its public IP (`203.0.113.1`) and records
   the mapping in a NAT table
3. The router also changes the source port to a unique value (PAT — Port Address Translation)
4. When the response arrives, the router looks up the destination port in the NAT table, replaces
   the destination IP with `192.168.1.10`, and forwards it

**NAT table example:** | Internal IP | Internal Port | External Port | External IP | |
--------------- | ------------- | ------------- | -------------- | | 192.168.1.10 | 50123 | 60001 |
203.0.113.1 | | 192.168.1.11 | 50124 | 60002 | 203.0.113.1 |

</details>

**Problem 8.** Explain what happens at each layer of the OSI model when you send an email.

<details>
<summary>Answer</summary>

**Layer 7 (Application):** Email client composes the message using SMTP protocol. **Layer 6
(Presentation):** Data is formatted (e.g., converting to MIME format for attachments). **Layer 5
(Session):** A session is established with the mail server. **Layer 4 (Transport):** Data is
segmented and wrapped in a TCP segment with port 25. TCP ensures reliable delivery. **Layer 3
(Network):** IP header is added with source and destination IP addresses. Routing determines the
path. **Layer 2 (Data Link):** Ethernet frame is created with MAC addresses of the next hop. **Layer
1 (Physical):** Bits are transmitted as electrical/optical signals over the network cable.

At the receiving end, each layer removes its header in reverse order (Layers 1→7).

</details>

**Problem 9.** A network uses the IP address `172.16.5.130/25`. What is the network address,
broadcast address, and range of usable host addresses?

<details>
<summary>Answer</summary>

`/25` → subnet mask: `255.255.255.128`

Network portion: first 25 bits. Host portion: 7 bits.

Network address: `172.16.5.128` (host bits all 0: `...10000000`)

Broadcast address: `172.16.5.255` (host bits all 1: `...11111111`)

Usable host range: `172.16.5.129` – `172.16.5.254`

Number of usable hosts: $2^7 - 2 = 126$

</details>

**Problem 10.** Explain the difference between a switch and a router. At which OSI layer does each
operate?

<details>
<summary>Answer</summary>

| Property   | Switch                             | Router                                  |
| ---------- | ---------------------------------- | --------------------------------------- |
| OSI layer  | Layer 2 (Data Link)                | Layer 3 (Network)                       |
| Addressing | MAC addresses                      | IP addresses                            |
| Function   | Connects devices within a LAN      | Connects different networks             |
| Forwarding | Forwards frames based on MAC table | Forwards packets based on routing table |
| Broadcast  | Forwards broadcasts within LAN     | Blocks broadcasts between networks      |
| Use case   | Building/campus network            | Internet connectivity                   |

A switch operates at Layer 2, forwarding frames within a single network segment. A router operates
at Layer 3, making decisions about which network to forward packets to, enabling inter-network
communication.

For revision on network security, see
[Network Security](/docs/alevel/computer-science/networks/network-fundamentals).

</details>

---

## 8. Worked Examples: Subnetting and CIDR

### Worked Example: Converting Between CIDR and Subnet Mask

Convert `/26` to a dotted-decimal subnet mask.

`/26` means 26 bits set to 1 in the mask.

Binary: `11111111.11111111.11111111.11000000`

Dotted decimal: `255.255.255.192`

Verification: `128 + 64 = 192` for the fourth octet.

### Worked Example: Finding the Network Address

Given IP `10.150.75.210` with mask `/20`, find the network address, broadcast address, and usable
host range.

Step 1: Subnet mask in binary for the third and fourth octets:

`/20` means the first 20 bits are network. The third octet contributes 4 bits (since 16 bits from
first two octets).

Third octet mask: `11110000` = `240`

Step 2: Network address = IP AND mask:

- First two octets: `10.150` (unchanged)
- Third octet: `75 AND 240` = `01001011 AND 11110000` = `01000000` = `64`
- Fourth octet: `210 AND 0` = `0`

Network address: `10.150.64.0`

Step 3: Broadcast address (all host bits = 1):

- Third octet: `01001111` = `79`
- Fourth octet: `11111111` = `255`

Broadcast: `10.150.79.255`

Step 4: Usable range: `10.150.64.1` — `10.150.79.254`

Hosts per subnet: $2^{12} - 2 = 4094$

### Worked Example: Determining if Two IPs Are in the Same Subnet

Are `192.168.10.50/24` and `192.168.10.200/24` in the same subnet?

Both use `/24`. Network address for each:

- `192.168.10.50 AND 255.255.255.0` = `192.168.10.0`
- `192.168.10.200 AND 255.255.255.0` = `192.168.10.0`

Same network address — same subnet.

Now with `/25`:

- `192.168.10.50 AND 255.255.255.128` = `192.168.10.0`
- `192.168.10.200 AND 255.255.255.128` = `192.168.10.128`

Different network addresses — different subnets.

---

## 9. Protocol Deep Dive

### SSH (Secure Shell)

| Property       | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Port           | 22                                                                |
| Transport      | TCP                                                               |
| Encryption     | Symmetric (AES) for data, asymmetric (RSA/ECDSA) for key exchange |
| Authentication | Password or public-key                                            |
| Purpose        | Secure remote shell access, file transfer (SCP/SFTP)              |

SSH establishes an encrypted tunnel before any data is transmitted. The key exchange uses
Diffie-Hellman to establish a shared secret without transmitting it. All subsequent data is
encrypted with this shared secret using AES.

### FTP (File Transfer Protocol)

| Property   | Value                                  |
| ---------- | -------------------------------------- |
| Ports      | 21 (control), 20 (data in active mode) |
| Transport  | TCP                                    |
| Encryption | None (SFTP adds encryption over SSH)   |
| Purpose    | Upload and download files              |

FTP uses two separate connections: a control connection (commands) and a data connection (file
content). In **active mode**, the server initiates the data connection back to the client —
problematic through firewalls. In **passive mode**, the client initiates both connections.

### HTTP vs HTTPS

| Property    | HTTP         | HTTPS              |
| ----------- | ------------ | ------------------ |
| Port        | 80           | 443                |
| Encryption  | None         | TLS (SSL)          |
| Security    | Plaintext    | Encrypted          |
| Certificate | Not required | Required (from CA) |

HTTP sends all data (including passwords) in plaintext. HTTPS adds a TLS layer: the server presents
a certificate, and all traffic is encrypted. Modern browsers flag HTTP sites as "not secure."

### SMTP (Simple Mail Transfer Protocol)

| Property   | Value                              |
| ---------- | ---------------------------------- |
| Port       | 25 (traditional), 587 (submission) |
| Transport  | TCP                                |
| Encryption | Optional (STARTTLS)                |
| Purpose    | Sending email between mail servers |

SMTP is a push protocol — the sender pushes the message to the receiver's mail server. For
receiving, POP3 or IMAP is used.

---

## 10. Common Pitfalls

| Pitfall                                     | Explanation                                                 | Correct approach                                                |
| ------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------- |
| Confusing `/` notation with number of hosts | `/24` means 24 network bits, not 24 hosts                   | Hosts = $2^{32-n} - 2$                                          |
| Forgetting to subtract 2 from host count    | Network and broadcast addresses are not usable              | Always subtract 2                                               |
| Mixing up public and private ranges         | `10.x.x.x` is always private                                | Memorise the three private ranges                               |
| Assuming DNS uses TCP                       | DNS primarily uses UDP port 53                              | TCP is only used for zone transfers or responses over 512 bytes |
| Confusing SSH with Telnet                   | Both provide remote access, but only SSH encrypts           | Never use Telnet on untrusted networks                          |
| Off-by-one in subnet boundaries             | Including the network or broadcast address as a usable host | First usable = network + 1, last usable = broadcast - 1         |

---

## 11. Additional Problem Set

**Problem 1.** Convert the subnet mask `255.255.252.0` to CIDR notation and calculate the number of
usable hosts per subnet.

<details>
<summary>Answer</summary>

`255.255.252.0` in binary: `11111111.11111111.11111100.00000000`

Count the 1s: 8 + 8 + 6 = 22. CIDR notation: `/22`.

Host bits: $32 - 22 = 10$.

Usable hosts: $2^{10} - 2 = 1022$.

</details>

**Problem 2.** A company has been allocated `172.20.0.0/16`. They need at least 100 subnets, each
supporting at least 200 hosts. Determine a suitable subnet mask and verify the requirements are met.

<details>
<summary>Answer</summary>

Subnets needed: 100. Borrowing bits: $2^6 = 64$ (not enough), $2^7 = 128$ (enough). Borrow 7 bits.

New mask: `/16 + 7 = /23` — `255.255.254.0`

Hosts per subnet: $2^{32-23} - 2 = 2^9 - 2 = 510$ (meets the 200 host requirement).

Subnets available: $2^7 = 128$ (meets the 100 subnet requirement).

The company should use `/23`.

</details>

**Problem 3.** Explain why a client might receive a "connection refused" error when attempting to
connect to a server via SSH on port 22. Give three possible causes.

<details>
<summary>Answer</summary>

Three possible causes:

1. **SSH service not running:** The sshd daemon is not started on the server
2. **Firewall blocking:** A firewall rule is dropping incoming traffic on port 22
3. **Wrong IP/port:** The client is connecting to the wrong IP address or a non-standard SSH port

The "connection refused" error specifically means the server actively rejected the connection (sent
a TCP RST), which distinguishes it from a timeout (where packets are silently dropped).

</details>

**Problem 4.** Describe the difference between FTP active mode and passive mode. Why is passive mode
generally preferred?

<details>
<summary>Answer</summary>

**Active mode:** The client connects to the server on port 21 (control), then the server initiates a
data connection back to the client from port 20. The client must open a port for this incoming
connection.

**Passive mode:** The client connects to port 21 (control), then requests PASV. The server opens a
random high port and tells the client. The client initiates the data connection to that port.

Passive mode is preferred because:

1. The client initiates all connections, avoiding firewall issues on the client side
2. NAT/routers on the client side typically block incoming connections
3. It works through corporate firewalls that only allow outbound connections
</details>

**Problem 5.** A computer has IP address `192.168.1.100`, subnet mask `255.255.255.0`, and default
gateway `192.168.1.1`. The computer wants to send a packet to `192.168.1.50` and another to
`8.8.8.8`. Explain how the computer determines the route for each packet.

<details>
<summary>Answer</summary>

The computer performs an AND operation between the destination IP and its subnet mask to determine
the network address.

**Packet to `192.168.1.50`:**

`192.168.1.50 AND 255.255.255.0` = `192.168.1.0`

This matches the computer's own network (`192.168.1.100 AND 255.255.255.0` = `192.168.1.0`).

Result: The destination is on the **same subnet**. The computer uses ARP to find the MAC address of
`192.168.1.50` and sends the frame directly.

**Packet to `8.8.8.8`:**

`8.8.8.8 AND 255.255.255.0` = `8.8.8.0`

This does not match `192.168.1.0`.

Result: The destination is on a **different network**. The computer forwards the packet to the
**default gateway** (`192.168.1.1`). The computer uses ARP to find the MAC address of the gateway
and sends the frame there.

</details>

:::
