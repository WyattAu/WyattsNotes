---
title: Networks and the Internet
date: 2026-04-14
tags:
  - Computer Science
  - AP
categories:
  - Computer Science
slug: networks-and-the-internet
---

## The Internet (CED Unit 4)

### History and Architecture

The Internet is a global network of interconnected computer networks. Key concepts:

- **Packet switching:** Data is broken into packets that are routed independently across the
  network.
- **Distributed routing:** No single central authority controls routing; routers use protocols to
  find paths.
- **Redundancy:** Multiple paths between nodes ensure reliability.

### Internet Architecture

| Layer       | Protocol                    | Function                                       |
| ----------- | --------------------------- | ---------------------------------------------- |
| Application | HTTP, HTTPS, SMTP, DNS, FTP | Application-level communication                |
| Transport   | TCP, UDP                    | End-to-end delivery, error checking, ports     |
| Network     | IP (IPv4, IPv6)             | Routing packets between networks               |
| Link        | Ethernet, Wi-Fi             | Physical transmission between adjacent devices |

### IP Addresses

**IPv4:** 32-bit address, written as four octets (e.g., `192.168.1.1`). Approximately 4.3 billion
addresses.

**IPv6:** 128-bit address, written as eight groups of hexadecimal (e.g.,
`2001:0db8:85a3:0000:0000:8a2e:0370:7334`). Approximately $3.4 \times 10^{38}$ addresses.

**Private IP ranges (not routable on the public Internet):**

- `10.0.0.0` to `10.255.255.255` (Class A)
- `172.16.0.0` to `172.31.255.255` (Class B)
- `192.168.0.0` to `192.168.255.255` (Class C)

### DNS (Domain Name System)

DNS translates human-readable domain names (e.g., `example.com`) to IP addresses.

**Resolution process:**

1. Browser checks its cache.
2. Operating system checks its DNS cache.
3. Query sent to the **recursive DNS resolver** (usually provided by the ISP).
4. If not cached, the resolver queries:
   - **Root name server:** Returns the TLD name server (e.g., `.com`).
   - **TLD name server:** Returns the authoritative name server.
   - **Authoritative name server:** Returns the IP address for the domain.
5. The result is cached at each level for future queries.

### TCP vs UDP (CED Unit 4)

| Feature     | TCP (Transmission Control Protocol)   | UDP (User Datagram Protocol) |
| ----------- | ------------------------------------- | ---------------------------- |
| Connection  | Connection-oriented (3-way handshake) | Connectionless               |
| Reliability | Guaranteed delivery, error checking   | Best-effort, no guarantees   |
| Ordering    | Data arrives in order                 | No ordering guarantee        |
| Speed       | Slower (overhead)                     | Faster (less overhead)       |
| Use cases   | Web browsing, email, file transfer    | Streaming, gaming, VoIP      |
| Header size | 20+ bytes                             | 8 bytes                      |

### TCP Three-Way Handshake

1. **SYN:** Client sends a SYN packet to the server.
2. **SYN-ACK:** Server responds with SYN-ACK.
3. **ACK:** Client sends ACK. Connection established.

### HTTP and HTTPS

**HTTP (Hypertext Transfer Protocol):** Protocol for transferring web pages. Stateless (each request
is independent).

**HTTPS:** HTTP over TLS/SSL (encrypted). Uses asymmetric encryption to establish a secure session
key, then symmetric encryption for data transfer.

**HTTP Methods:**

| Method | Purpose                         | Idempotent? |
| ------ | ------------------------------- | ----------- |
| GET    | Retrieve a resource             | Yes         |
| POST   | Submit data / create a resource | No          |
| PUT    | Replace a resource              | Yes         |
| DELETE | Remove a resource               | Yes         |
| PATCH  | Partially modify a resource     | No          |

### Status Codes

| Code Range | Meaning       | Examples                                |
| ---------- | ------------- | --------------------------------------- |
| 1xx        | Informational | 100 Continue                            |
| 2xx        | Success       | 200 OK, 201 Created                     |
| 3xx        | Redirection   | 301 Moved Permanently, 304 Not Modified |
| 4xx        | Client error  | 400 Bad Request, 404 Not Found          |
| 5xx        | Server error  | 500 Internal Server Error               |

## Network Models (CED Unit 4)

### OSI Model (7 Layers)

| Layer | Name         | Function                           |
| ----- | ------------ | ---------------------------------- |
| 7     | Application  | User interface, HTTP, FTP          |
| 6     | Presentation | Data formatting, encryption        |
| 5     | Session      | Session management                 |
| 4     | Transport    | End-to-end delivery (TCP/UDP)      |
| 3     | Network      | Routing (IP)                       |
| 2     | Data Link    | Node-to-node delivery, MAC address |
| 1     | Physical     | Electrical signals, bits           |

### TCP/IP Model (4 Layers)

| Layer       | OSI Layers | Protocols            |
| ----------- | ---------- | -------------------- |
| Application | 5, 6, 7    | HTTP, DNS, SMTP, FTP |
| Transport   | 4          | TCP, UDP             |
| Internet    | 3          | IP, ICMP, ARP        |
| Link        | 1, 2       | Ethernet, Wi-Fi, MAC |

## Network Devices

| Device   | Layer     | Function                                        |
| -------- | --------- | ----------------------------------------------- |
| Repeater | Physical  | Regenerates signals                             |
| Hub      | Physical  | Connects devices, broadcasts to all ports       |
| Switch   | Data Link | Connects devices, forwards based on MAC address |
| Router   | Network   | Connects networks, forwards based on IP address |
| Firewall | Multiple  | Filters traffic based on rules                  |
| Modem    | Physical  | Converts digital/analog signals                 |

## Network Topologies

| Topology          | Description                                 | Advantages                                              | Disadvantages                       |
| ----------------- | ------------------------------------------- | ------------------------------------------------------- | ----------------------------------- |
| Star              | All devices connect to a central hub/switch | Easy to manage, one cable failure doesn't affect others | Hub failure brings down the network |
| Bus               | All devices share a single cable            | Simple, cheap                                           | Single point of failure             |
| Ring              | Devices connected in a circle               | Equal access                                            | One failure breaks ring             |
| Mesh              | Every device connected to every other       | Highly redundant                                        | Expensive, complex                  |
| Tree/Hierarchical | Star topologies connected via bus           | Scalable                                                | Root is a single point of failure   |

## Bandwidth, Latency, and Throughput

- **Bandwidth:** Maximum data transfer rate (bits per second). Measures capacity.
- **Latency:** Time for a packet to travel from source to destination (ms). Measures delay.
- **Throughput:** Actual data transfer rate achieved. Always less than or equal to bandwidth.

## Cybersecurity (CED Unit 4)

### Threats

| Threat            | Description                                              |
| ----------------- | -------------------------------------------------------- |
| Malware           | Malicious software (viruses, worms, trojans, ransomware) |
| Phishing          | Deceptive emails/messages to steal credentials           |
| DDoS attack       | Overwhelming a server with traffic from multiple sources |
| SQL injection     | Injecting malicious SQL into database queries            |
| Man-in-the-middle | Intercepting communication between two parties           |

### Defenses

- **Firewalls:** Block unauthorized traffic.
- **Encryption:** Protect data in transit and at rest.
- **Authentication:** Verify identity (passwords, biometrics, 2FA).
- **Access control:** Limit who can access what (principle of least privilege).
- **Updates/patches:** Fix known vulnerabilities.
- **Intrusion detection systems (IDS):** Monitor for suspicious activity.

## Common Pitfalls

1. **Confusing TCP and UDP.** TCP is reliable and ordered but slower; UDP is fast but unreliable.
   Use TCP for web browsing and UDP for streaming.
2. **Confusing the OSI model layers.** Remember: "All People Seem To Need Data Processing"
   (Application, Presentation, Session, Transport, Network, Data Link, Physical).
3. **Confusing IP addresses and MAC addresses.** IP addresses are logical and change; MAC addresses
   are physical and are burned into the network interface.
4. **Thinking DNS is a single server.** DNS is a distributed, hierarchical system.
5. **Confusing bandwidth and throughput.** Bandwidth is the maximum possible; throughput is the
   actual rate achieved.
6. **Forgetting that HTTPS provides encryption, not just authentication.** It uses TLS to encrypt
   all data between client and server.
7. **Confusing symmetric and asymmetric encryption in HTTPS.** Asymmetric encryption establishes the
   session key; symmetric encryption handles the actual data transfer.

## Practice Questions

1. Explain the difference between TCP and UDP. Give two examples of applications that use each.

2. Describe the steps in a DNS lookup for `www.example.com`.

3. Explain the TCP three-way handshake. Why is it necessary?

4. Compare the star and mesh network topologies in terms of cost, reliability, and scalability.

5. A user receives an email claiming to be from their bank, asking them to click a link and enter
   their password. What type of attack is this, and how should the user respond?

6. Explain the role of a router in a network. At which OSI layer does it operate?

7. Convert the IP address `192.168.10.5` to its 32-bit binary representation.

8. Explain why asymmetric encryption is used to establish a secure connection in HTTPS, but
   symmetric encryption is used for the actual data transfer. Include the concept of computational
   efficiency in your explanation.
