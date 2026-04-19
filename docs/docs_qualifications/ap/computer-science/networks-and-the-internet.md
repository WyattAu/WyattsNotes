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

**Brief history.** The Internet evolved from ARPANET (1969), a US Department of Defense project
designed to create a survivable communications network. TCP/IP was standardized in 1983. The World
Wide Web was invented by Tim Berners-Lee in 1989. Commercial Internet access became widespread in
the 1990s.

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

**Why IPv6?** The 4.3 billion IPv4 addresses have been exhausted due to the explosive growth of
Internet-connected devices. IPv6 provides effectively unlimited addresses.

**IPv6 address shortening.** Leading zeros within each group can be omitted, and consecutive groups
of zeros can be replaced with `::` once per address.

`2001:0db8:0000:0000:0000:0000:0000:0001` becomes `2001:db8::1`.

**Worked Example.** Shorten the IPv6 address `2001:0000:0000:0000:0000:0000:0000:0001`.

Replace consecutive zeros with `::`: `2001::1`.

**Worked Example.** Expand the shortened address `fe80::1` to its full form.

`fe80:0000:0000:0000:0000:0000:0000:0001`.

**Worked Example.** Convert the IPv4 address `10.0.0.1` to binary.

$10 = 00001010$, $0 = 00000000$, $0 = 00000000$, $1 = 00000001$.

Result: `00001010.00000000.00000000.00000001`.

**Private IP ranges (not routable on the public Internet):**

- `10.0.0.0` to `10.255.255.255` (Class A, 16 million addresses)
- `172.16.0.0` to `172.31.255.255` (Class B, 1 million addresses)
- `192.168.0.0` to `192.168.255.255` (Class C, 65,536 addresses)

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

**Why caching matters.** Without caching, every DNS lookup would require multiple queries across the
Internet. Caching at the browser, OS, and resolver levels means most lookups are resolved locally in
milliseconds.

**DNS records:**

| Record Type | Purpose                                  | Example                            |
| ----------- | ---------------------------------------- | ---------------------------------- |
| A           | Maps domain to IPv4 address              | example.com -&gt; 93.184.216.34    |
| AAAA        | Maps domain to IPv6 address              | example.com -&gt; 2606:2800:...    |
| CNAME       | Alias of one domain to another           | blog.example.com -&gt; example.com |
| MX          | Mail exchange server for the domain      | example.com -&gt; mail.example.com |
| NS          | Authoritative name server for the domain | example.com -&gt; ns1.example.com  |

### TCP vs UDP (CED Unit 4)

| Feature     | TCP (Transmission Control Protocol)   | UDP (User Datagram Protocol) |
| ----------- | ------------------------------------- | ---------------------------- |
| Connection  | Connection-oriented (3-way handshake) | Connectionless               |
| Reliability | Guaranteed delivery, error checking   | Best-effort, no guarantees   |
| Ordering    | Data arrives in order                 | No ordering guarantee        |
| Speed       | Slower (overhead)                     | Faster (less overhead)       |
| Use cases   | Web browsing, email, file transfer    | Streaming, gaming, VoIP      |
| Header size | 20+ bytes                             | 8 bytes                      |

**TCP three-way handshake:**

1. **SYN:** Client sends a SYN packet to the server (synchronise).
2. **SYN-ACK:** Server responds with SYN-ACK (synchronise-acknowledge).
3. **ACK:** Client sends ACK (acknowledge). Connection established.

**Why three steps, not two?** The three-way handshake ensures both sides can send and receive. After
the handshake, both the client and server have confirmed each other's sequence numbers. A two-way
handshake would leave the server unsure whether the client received its response.

**TCP flow control.** TCP uses a sliding window mechanism. The receiver advertises a window size
(how much data it can accept). The sender transmits data up to the window size without waiting for
acknowledgements. This allows efficient pipelining while preventing the receiver from being
overwhelmed.

**TCP vs UDP decision guide:**

| Requirement                 | Use TCP | Use UDP |
| --------------------------- | ------- | ------- |
| Must receive all data       | Yes     | No      |
| Order of data matters       | Yes     | No      |
| Speed is critical           | No      | Yes     |
| Can tolerate some data loss | No      | Yes     |
| Example: downloading a file | Yes     |         |
| Example: live video stream  |         | Yes     |
| Example: online gaming      |         | Yes     |
| Example: sending an email   | Yes     |         |

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

**Status Codes:**

| Code Range | Meaning       | Examples                                |
| ---------- | ------------- | --------------------------------------- |
| 1xx        | Informational | 100 Continue                            |
| 2xx        | Success       | 200 OK, 201 Created                     |
| 3xx        | Redirection   | 301 Moved Permanently, 304 Not Modified |
| 4xx        | Client error  | 400 Bad Request, 404 Not Found          |
| 5xx        | Server error  | 500 Internal Server Error               |

**Cookies.** HTTP is stateless, so cookies were invented to maintain state across requests. A cookie
is a small piece of data stored by the browser and sent with each request to the same domain. Uses
include session management (login state), personalisation (preferences), and tracking (analytics).

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

**Mnemonic:** "All People Seem To Need Data Processing" (bottom to top).

### TCP/IP Model (4 Layers)

| Layer       | OSI Layers | Protocols            |
| ----------- | ---------- | -------------------- |
| Application | 5, 6, 7    | HTTP, DNS, SMTP, FTP |
| Transport   | 4          | TCP, UDP             |
| Internet    | 3          | IP, ICMP, ARP        |
| Link        | 1, 2       | Ethernet, Wi-Fi, MAC |

**Encapsulation.** As data moves down the layers, each layer adds its own header. At the link layer,
data becomes a frame. At the network layer, it becomes a packet. At the transport layer, it is a
segment (TCP) or datagram (UDP). The receiving end strips headers as data moves up.

**Encapsulation walkthrough:**

1. Application creates data (e.g., HTTP request).
2. Transport adds TCP header (source port, destination port, sequence number, checksum) creating a
   segment.
3. Internet adds IP header (source IP, destination IP, TTL, protocol) creating a packet.
4. Link adds Ethernet header (source MAC, destination MAC) and trailer (CRC) creating a frame.

At the receiver, each layer removes its header in reverse order.

## Network Devices

| Device   | Layer     | Function                                        |
| -------- | --------- | ----------------------------------------------- |
| Repeater | Physical  | Regenerates signals                             |
| Hub      | Physical  | Connects devices, broadcasts to all ports       |
| Switch   | Data Link | Connects devices, forwards based on MAC address |
| Router   | Network   | Connects networks, forwards based on IP address |
| Firewall | Multiple  | Filters traffic based on rules                  |
| Modem    | Physical  | Converts digital/analog signals                 |

**Switch vs router.** A switch operates at layer 2 (Data Link) and forwards frames within a LAN
using MAC addresses. A router operates at layer 3 (Network) and forwards packets between networks
using IP addresses. A home "router" is actually a router + switch + wireless access point combined.

**Device decision guide:**

| Scenario                                    | Device Needed |
| ------------------------------------------- | ------------- |
| Connect 10 computers in one room            | Switch        |
| Connect LAN to the Internet                 | Router        |
| Extend Wi-Fi range to another building      | Repeater/WAP  |
| Block unauthorized incoming traffic         | Firewall      |
| Connect a home to an ISP via telephone line | Modem         |

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

**Analogy.** Bandwidth is the width of a motorway (how many lanes). Latency is the travel time for a
single car. Throughput is the actual number of cars passing a point per hour (affected by
congestion, speed limits, and road conditions).

**Worked Example.** A link has a bandwidth of 100 Mbps but due to congestion, the actual throughput
is 65 Mbps. A 50 MB file needs to be transferred. How long does it take?

Time = File size / Throughput = $50 \times 8 / 65 \approx 6.15$ seconds.

## Cybersecurity (CED Unit 4)

### Threats

| Threat                     | Description                                                 |
| -------------------------- | ----------------------------------------------------------- |
| Malware                    | Malicious software (viruses, worms, trojans, ransomware)    |
| Phishing                   | Deceptive emails/messages to steal credentials              |
| DDoS attack                | Overwhelming a server with traffic from multiple sources    |
| SQL injection              | Injecting malicious SQL into database queries               |
| Man-in-the-middle          | Intercepting communication between two parties              |
| Cross-site scripting (XSS) | Injecting malicious scripts into web pages viewed by others |

**Malware comparison:**

| Type       | Self-replicates | Needs host | Purpose                        |
| ---------- | --------------- | ---------- | ------------------------------ |
| Virus      | Yes             | Yes        | Damage, spread                 |
| Worm       | Yes             | No         | Spread, consume resources      |
| Trojan     | No              | Disguised  | Steal data, backdoor access    |
| Ransomware | No              | No         | Encrypt files, demand ransom   |
| Spyware    | No              | No         | Monitor activity, collect data |

### Defenses

- **Firewalls:** Block unauthorized traffic based on rules.
- **Encryption:** Protect data in transit and at rest.
- **Authentication:** Verify identity (passwords, biometrics, 2FA).
- **Access control:** Limit who can access what (principle of least privilege).
- **Updates/patches:** Fix known vulnerabilities.
- **Intrusion detection systems (IDS):** Monitor for suspicious activity.
- **Input validation:** Prevent SQL injection and XSS by sanitizing user input.

### Encryption in Detail

**Symmetric encryption:** Both parties share the same secret key. AES is the standard. Fast for bulk
data encryption.

**Asymmetric encryption:** Each party has a public key (shared openly) and a private key (kept
secret). Data encrypted with the public key can only be decrypted with the private key. RSA is the
standard. Slower, used for key exchange.

**How HTTPS combines both:**

1. Client requests server's public key (from its digital certificate).
2. Client generates a random session key.
3. Client encrypts the session key with the server's public key and sends it.
4. Server decrypts the session key with its private key.
5. Both sides use the session key for symmetric (AES) encryption of all subsequent data.

This hybrid approach gives the security of asymmetric encryption for key exchange with the speed of
symmetric encryption for data transfer.

**Digital signatures.** A sender encrypts a hash of a message with their private key. The receiver
verifies it with the sender's public key. This proves the message was sent by the claimed sender
(authentication) and was not modified in transit (integrity).

**Worked Example.** Alice wants to send a signed message to Bob.

1. Alice computes SHA-256 hash of her message.
2. Alice encrypts the hash with her private key -- this is the digital signature.
3. Alice sends the message + signature to Bob.
4. Bob decrypts the signature with Alice's public key, getting the original hash.
5. Bob computes SHA-256 of the received message.
6. If the two hashes match, the message is authentic and unmodified.

## Additional Topics

### Subnetting (Supplementary)

**IPv4 classes:**

| Class | Address Range                | Default Subnet Mask | Usable Hosts |
| ----- | ---------------------------- | ------------------- | ------------ |
| A     | 0.0.0.0 -- 127.255.255.255   | 255.0.0.0           | 16,777,214   |
| B     | 128.0.0.0 -- 191.255.255.255 | 255.255.0.0         | 65,534       |
| C     | 192.0.0.0 -- 223.255.255.255 | 255.255.255.0       | 254          |

**CIDR notation:** 192.168.1.0/24 means the first 24 bits are the network portion, leaving 8 bits
for hosts.

**Worked Example.** For the network 192.168.10.0/26, how many usable hosts are available?

$26$ bits for network, $6$ bits for host. Number of addresses = $2^6 = 64$. Usable hosts =
$64 - 2 = 62$.

### Quality of Service (QoS)

QoS prioritises certain types of traffic. For example, VoIP packets are given priority over file
downloads to ensure call quality. This is implemented using traffic shaping and priority queuing.

### Network Diagnostic Tools

- **ping:** Tests connectivity by sending ICMP echo requests and measuring round-trip time.
- **traceroute:** Shows the path packets take to reach a destination.
- **nslookup / dig:** Queries DNS records.

### Wireless Security (WPA2/WPA3)

**WPA2:** Uses AES encryption. Vulnerable to KRACK attack on the 4-way handshake.

**WPA3:** Uses SAE (Simultaneous Authentication of Equals) for stronger key exchange. Resistant to
offline dictionary attacks.

### Content Delivery Networks (CDNs)

CDNs distribute content across geographically distributed servers. When a user requests a web page,
the CDN serves it from the nearest edge server, reducing latency.

## DNS Records in Detail

| Record Type | Purpose                                  | Example                            |
| ----------- | ---------------------------------------- | ---------------------------------- |
| A           | Maps domain to IPv4 address              | example.com -&gt; 93.184.216.34    |
| AAAA        | Maps domain to IPv6 address              | example.com -&gt; 2606:2800:...    |
| CNAME       | Alias of one domain to another           | blog.example.com -&gt; example.com |
| MX          | Mail exchange server for the domain      | example.com -&gt; mail.example.com |
| NS          | Authoritative name server for the domain | example.com -&gt; ns1.example.com  |
| TXT         | Text records (SPF, DKIM verification)   | v=spf1 include:_spf.example.com    |

## Wireless Networks

### Wi-Fi Standards

| Standard | Speed        | Frequency | Range     |
| -------- | ------------ | --------- | --------- |
| 802.11b  | 11 Mbps      | 2.4 GHz   | ~30 m     |
| 802.11g  | 54 Mbps      | 2.4 GHz   | ~30 m     |
| 802.11n  | 600 Mbps     | 2.4/5 GHz | ~70 m     |
| 802.11ac | 6.9 Gbps     | 5 GHz     | ~35 m     |
| 802.11ax | 9.6 Gbps     | 2.4/5/6   | ~70 m     |

### Wireless Security

**WPA2:** Uses AES encryption. Vulnerable to KRACK attack on the 4-way handshake.

**WPA3:** Uses SAE (Simultaneous Authentication of Equals) for stronger key exchange. Resistant to
offline dictionary attacks.

## Network Diagnostic Tools

- **ping:** Tests connectivity by sending ICMP echo requests and measuring round-trip time.
- **traceroute:** Shows the path packets take to reach a destination.
- **nslookup / dig:** Queries DNS records.
- **netstat:** Shows active network connections.
- **ipconfig / ifconfig:** Shows network configuration.

**Worked Example.** A user cannot access a website. How can diagnostic tools help?

1. `ping 8.8.8.8` -- tests basic Internet connectivity.
2. `nslookup example.com` -- tests DNS resolution.
3. `traceroute example.com` -- shows where packets are being lost.
4. `ping example.com` -- tests if the specific server is reachable.

## Quality of Service (QoS)

QoS prioritises certain types of traffic. For example, VoIP packets are given priority over file
downloads to ensure call quality. This is implemented using traffic shaping and priority queuing.

## Content Delivery Networks (CDNs)

CDNs distribute content across geographically distributed servers. When a user requests a web page,
the CDN serves it from the nearest edge server, reducing latency.

**How CDNs work:**

1. User requests a resource (e.g., an image).
2. DNS resolves to the nearest CDN edge server.
3. If the edge server has the resource cached, it serves it directly (cache hit).
4. If not, it fetches from the origin server and caches it for future requests.

**Benefits:** Reduced latency, reduced load on origin server, improved availability.

## Subnetting in Detail

**IPv4 classes:**

| Class | Address Range                | Default Subnet Mask | Usable Hosts |
| ----- | ---------------------------- | ------------------- | ------------ |
| A     | 0.0.0.0 -- 127.255.255.255   | 255.0.0.0           | 16,777,214   |
| B     | 128.0.0.0 -- 191.255.255.255 | 255.255.0.0         | 65,534       |
| C     | 192.0.0.0 -- 223.255.255.255 | 255.255.255.0       | 254          |

**CIDR notation:** 192.168.1.0/24 means the first 24 bits are the network portion, leaving 8 bits
for hosts.

**Worked Example.** For the network 192.168.10.0/26, how many usable hosts are available?

$26$ bits for network, $6$ bits for host. Number of addresses = $2^6 = 64$. Usable hosts =
$64 - 2 = 62$.

**Worked Example.** A company needs 200 host addresses. What subnet mask should they use?

$2^8 = 256$ addresses, $256 - 2 = 254$ usable hosts. Subnet mask: 255.255.255.0 (/24).

## Network Protocols in Detail

### DHCP (Dynamic Host Configuration Protocol)

DHCP automatically assigns IP addresses to devices on a network. When a device connects, it sends a
DHCP discover message, and the DHCP server responds with an IP address, subnet mask, default
gateway, and DNS server.

**DHCP lease:** IP addresses are assigned for a limited time (lease). The device must renew the lease
before it expires.

### NAT (Network Address Translation)

NAT allows multiple devices on a LAN to share a single public IP address. The router maintains a
translation table that maps private IP addresses to the public IP address and port numbers.

**Why NAT is necessary.** IPv4 has a limited number of addresses (4.3 billion). NAT allows a single
public IP to serve many private devices, conserving the address space.

## Practice Questions

19. Explain how a CDN works and why it improves web performance for users in different geographic
    locations.

20. A company has the network 192.168.0.0/24. They need to create 4 subnets. What subnet mask should
    they use, and how many hosts can each subnet support?

21. Explain the difference between WPA2 and WPA3. Why should a home user upgrade to WPA3?

22. Describe the steps a computer takes when it connects to a Wi-Fi network using WPA2.

23. Explain what QoS is and why it is important for real-time applications like VoIP.

24. A user reports that they can access some websites but not others. Explain how you would use
    diagnostic tools to troubleshoot the problem.

25. Explain how NAT works. Why is it necessary for home networks?

26. Describe the DHCP lease process. What happens when a lease expires?

27. Explain the difference between a DNS A record and a CNAME record. When would you use each?

28. A network administrator wants to block all traffic to a specific port. Where should this rule
    be configured, and what device would enforce it?

29. Compare IPv4 and IPv6 addressing in terms of address space, header complexity, and built-in
    security features.

30. Explain the role of each layer in the TCP/IP model when sending an email using SMTP. Include
    the specific protocols used at each layer.

## HTTP in Detail

### HTTP Methods

| Method | Purpose                         | Idempotent? | Body? |
| ------ | ------------------------------- | ----------- | ----- |
| GET    | Retrieve a resource             | Yes         | No    |
| POST   | Submit data / create a resource | No          | Yes   |
| PUT    | Replace a resource              | Yes         | Yes   |
| DELETE | Remove a resource               | Yes         | No    |
| PATCH  | Partially modify a resource     | No          | Yes   |
| HEAD   | Same as GET but no body         | Yes         | No    |

### HTTP Status Codes

| Code Range | Meaning       | Examples                                |
| ---------- | ------------- | --------------------------------------- |
| 1xx        | Informational | 100 Continue                            |
| 2xx        | Success       | 200 OK, 201 Created                     |
| 3xx        | Redirection   | 301 Moved Permanently, 304 Not Modified |
| 4xx        | Client error  | 400 Bad Request, 403 Forbidden, 404 Not Found |
| 5xx        | Server error  | 500 Internal Server Error, 503 Service Unavailable |

### HTTP Headers

HTTP headers provide additional information about the request or response.

**Common request headers:**

| Header           | Purpose                          | Example                |
| ---------------- | -------------------------------- | ---------------------- |
| Host             | Target host                      | www.example.com        |
| User-Agent       | Browser/client software          | Mozilla/5.0            |
| Accept           | Expected response format        | text/html              |
| Content-Type     | Body format                      | application/json       |
| Authorization    | Authentication credentials      | Bearer token           |

**Common response headers:**

| Header         | Purpose                          | Example            |
| -------------- | -------------------------------- | ------------------ |
| Content-Type   | Response body format            | text/html; utf-8   |
| Content-Length | Size of response body in bytes  | 1234               |
| Set-Cookie     | Set a cookie in the browser     | session=abc123     |
| Cache-Control  | Caching directives              | max-age=3600       |
| Location       | URL for redirection             | /new-page          |

### Cookies and Sessions

HTTP is stateless, so cookies were invented to maintain state across requests.

**Types of cookies:**

- **Session cookies:** Temporary, deleted when the browser closes.
- **Persistent cookies:** Stored on disk, survive browser restarts.
- **Secure cookies:** Only sent over HTTPS.
- **HttpOnly cookies:** Cannot be accessed by JavaScript (prevents XSS theft).

**Session management:** When a user logs in, the server creates a session and sends a session ID as a
cookie. The browser sends this cookie with each subsequent request, allowing the server to identify
the user.

## Network Address Translation (NAT) in Detail

NAT allows multiple devices on a private network to share a single public IP address.

**How NAT works:**

1. Device sends a packet from private IP (192.168.1.5) to a public server (93.184.216.34).
2. The router replaces the source IP with its public IP (203.0.113.5) and records the mapping.
3. When the response arrives, the router uses the mapping to forward the packet to the correct
   private IP.

**Port Address Translation (PAT):** The router also maps source ports to distinguish between
multiple internal devices.

| Internal IP    | Internal Port | External IP    | External Port |
| -------------- | ------------- | -------------- | ------------- |
| 192.168.1.5    | 50001         | 203.0.113.5    | 50001         |
| 192.168.1.6    | 50002         | 203.0.113.5    | 50002         |

## Wireless Security Protocols

| Protocol | Encryption | Key Exchange     | Vulnerability |
| -------- | ---------- | ---------------- | ------------- |
| WEP      | RC4        | Weak             | Easily cracked |
| WPA      | TKIP       | Better           | Partially vulnerable |
| WPA2     | AES        | 4-way handshake  | KRACK attack   |
| WPA3     | AES        | SAE              | Most secure    |

## IPv6 Address Types

| Type          | Prefix      | Purpose                          |
| ------------- | ----------- | -------------------------------- |
| Unicast       | ::1/128      | Single interface                 |
| Link-local    | fe80::/10   | Local network communication       |
| Global        | 2000::/3    | Internet routable addresses      |
| Multicast     | ff00::/8    | Send to multiple interfaces      |
| Loopback      | ::1/128      | Localhost                        |

## Network Performance Monitoring

**Key metrics:**

- **Uptime:** Percentage of time the network is available.
- **Packet loss:** Percentage of packets that fail to reach their destination.
- **Jitter:** Variation in packet arrival times (important for VoIP and video).
- **Throughput:** Actual data transfer rate achieved.

**Worked Example.** A VoIP application requires latency below 150 ms and jitter below 30 ms. A network
test shows latency of 80 ms and jitter of 50 ms. Is the network suitable?

Latency is fine (80 ms < 150 ms) but jitter is too high (50 ms > 30 ms). The VoIP quality may be
poor due to inconsistent packet arrival times.

## Wireless Security in Detail

### WPA2 4-Way Handshake

1. Client sends ClientHello with supported cipher suites.
2. Access point responds with ServerHello and its credentials.
3. Both sides derive a Pairwise Transient Key (PTK) from the pre-shared key.
4. Encrypted communication begins using the PTK.

### KRACK Attack on WPA2

The Key Reinstallation Attack (KRACK) exploits a vulnerability in the 4-way handshake. By
manipulating and replaying handshake messages, an attacker can force the reuse of a nonce, allowing
them to decrypt packets and inject data.

**Mitigation:** Upgrade to WPA3, which uses Simultaneous Authentication of Equals (SAE) and is
immune to KRACK.

## Network Management

### SNMP (Simple Network Management Protocol)

SNMP is used to monitor and manage network devices. Components:

- **Managed devices:** Routers, switches, servers.
- **Agents:** Software on managed devices that collects data.
- **NMS (Network Management Station):** Central system that polls agents.

### VLANs (Virtual Local Area Networks)

A VLAN logically segments a physical network into separate broadcast domains.

**Benefits:**

- Improved security (isolating sensitive departments).
- Reduced broadcast traffic.
- Easier administration (devices can be in the same VLAN regardless of physical location).

**Worked Example.** A school has a computer lab and a staff room on the same physical network. Explain
how VLANs improve security.

Creating separate VLANs for students and staff means broadcast traffic from student devices does not
reach staff computers. Access rules can restrict student VLAN access to sensitive resources like
grade databases.

## Cloud Computing

### Service Models

| Model             | Provider manages        | User manages       | Example                    |
| ----------------- | ----------------------- | ------------------ | -------------------------- |
| IaaS              | Servers, storage, network| OS, apps, data    | AWS EC2, Azure VMs         |
| PaaS              | Runtime, middleware      | Applications, data| Heroku, Google App Engine  |
| SaaS              | Everything              | Nothing (just use)| Gmail, Microsoft 365       |

### Deployment Models

| Model        | Description                                      |
| ------------ | ------------------------------------------------ |
| Public       | Shared resources over the Internet               |
| Private      | Exclusive to one organisation                    |
| Hybrid       | Mix of public and private                         |
| Community    | Shared between organisations with common interests |

## Practice Questions

31. Explain the difference between IaaS, PaaS, and SaaS with examples of each.

32. A company has 200 employees across 4 departments. Explain how VLANs can be used to improve
    network security and performance.

33. Explain how the KRACK attack works against WPA2 and why upgrading to WPA3 prevents it.

34. Describe the role of SNMP in network management. What are managed devices, agents, and the NMS?

35. Explain the difference between public, private, and hybrid cloud deployment models. Give an
    example of when each would be appropriate.

36. A network has a bandwidth of 1 Gbps. Due to protocol overhead, only 95% is available for data.
    Calculate the effective throughput in Mbps.

37. Explain the concept of network segmentation. Why is it important for security compliance?

38. Compare three wireless security protocols (WEP, WPA2, WPA3) in terms of encryption strength and
    known vulnerabilities.

## Common Pitfalls

1. **Confusing TCP and UDP.** TCP is reliable and ordered but slower; UDP is fast but unreliable.
2. **Confusing the OSI model layers.** Remember: "All People Seem To Need Data Processing".
3. **Confusing IP addresses and MAC addresses.** IP addresses are logical; MAC addresses are
   physical.
4. **Thinking DNS is a single server.** DNS is a distributed, hierarchical system.
5. **Confusing bandwidth and throughput.** Bandwidth is maximum; throughput is actual.
6. **Forgetting that HTTPS provides encryption, not just authentication.**
7. **Confusing symmetric and asymmetric encryption.** Asymmetric for key exchange; symmetric for
   data.
8. **Not understanding that HTTP is stateless.** State maintained through cookies and sessions.

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

9. Explain what happens when you type a URL into a browser, from DNS resolution to page rendering.

10. Describe three differences between IPv4 and IPv6. Why was IPv6 introduced?

11. Explain the concept of encapsulation as data moves through the TCP/IP layers.

12. Explain the principle of least privilege and give an example of how it is applied in network
    security.

13. A network has a bandwidth of 1 Gbps and a latency of 20 ms. A 100 MB file needs to be
    transferred. Calculate the minimum transfer time, ignoring overhead.

14. Explain the difference between a virus and a worm. Which is more dangerous and why?

15. Explain how a digital signature provides both authentication and integrity.

16. Describe how a DDoS attack works and explain two strategies for defending against one.

17. Explain the role of each DNS record type (A, AAAA, CNAME, MX, NS) with examples.

18. A company has a web server that must be accessible from the Internet. Describe three security
    measures they should implement and explain how each protects the server.

## Practice Problems

<details>
<summary>Question 1: Subnet mask calculation</summary>

A company has the IP address `192.168.10.0/24`. They need to create 6 subnets. Calculate the new subnet mask, the number of usable hosts per subnet, and the network address of the first three subnets.

</details>

<details>
<summary>Answer</summary>

Current: /24 means 8 bits for hosts (256 addresses). To create 6 subnets, need $2^n \ge 6$, so $n = 3$ bits borrowed (8 subnets).

New subnet mask: /27 (24 + 3) = 255.255.255.224.

Usable hosts per subnet: $2^{32-27} - 2 = 2^5 - 2 = 30$ hosts.

Subnet addresses:
- Subnet 1: 192.168.10.0/27 (hosts .1 to .30)
- Subnet 2: 192.168.10.32/27 (hosts .33 to .62)
- Subnet 3: 192.168.10.64/27 (hosts .65 to .94)

</details>

<details>
<summary>Question 2: TCP vs UDP scenario analysis</summary>

For each of the following applications, explain whether TCP or UDP is more appropriate and justify your choice: (a) online banking, (b) live video streaming, (c) DNS lookup, (d) email.

</details>

<details>
<summary>Answer</summary>

(a) Online banking: TCP. Requires reliable, ordered delivery. A lost packet could mean a missing transaction.

(b) Live video streaming: UDP. Speed is more important than reliability. A dropped frame is acceptable; a delayed frame causes stuttering. TCP's retransmission would cause unacceptable lag.

(c) DNS lookup: UDP. DNS queries are small (fit in one packet) and need fast responses. The overhead of TCP's three-way handshake is unnecessary for simple queries.

(d) Email: TCP. Email must be delivered reliably and in order. Losing an email message is unacceptable.

</details>

<details>
<summary>Question 3: Bandwidth and latency calculation</summary>

A file of size 50 MB must be transferred over a network with bandwidth of 100 Mbps and a round-trip latency of 40 ms. TCP requires a three-way handshake before data transfer. Calculate the total time for the transfer, assuming no packet loss and ignoring protocol overhead.

</details>

<details>
<summary>Answer</summary>

Three-way handshake time: 1.5 round trips = $1.5 \times 40 = 60 \mathrm{ ms}$.

Data transfer time: $50 \mathrm{ MB} = 50 \times 8 = 400 \mathrm{ Mb}$. Time = $400 / 100 = 4 \mathrm{ seconds} = 4000 \mathrm{ ms}$.

Total time: $60 + 4000 = 4060 \mathrm{ ms} \approx 4.06 \mathrm{ seconds}$.

Note: This is a simplified calculation. In practice, TCP slow start, window size limitations, and protocol overhead would increase the transfer time.

</details>

<details>
<summary>Question 4: OSI model layer analysis</summary>

For each of the following, identify which OSI layer is primarily responsible: (a) encrypting data for transmission, (b) determining the best route for a packet, (c) detecting and correcting bit errors, (d) formatting data into packets.

</details>

<details>
<summary>Answer</summary>

(a) Encrypting data: Layer 6 (Presentation). Handles data encryption, compression, and format translation.

(b) Best route for a packet: Layer 3 (Network). Routers operate at this layer, using IP addresses and routing tables.

(c) Detecting and correcting bit errors: Layer 2 (Data Link). Uses checksums and CRC to detect errors in frames.

(d) Formatting data into packets: Layer 4 (Transport). TCP/UDP add headers to create segments/datagrams.

</details>

<details>
<summary>Question 5: Security attack identification</summary>

A user clicks on a link in an email that appears to be from their bank. The link takes them to a website that looks identical to their bank's login page. When they enter their credentials, the information is sent to an attacker's server. Identify the type of attack and describe two defences.

</details>

<details>
<summary>Answer</summary>

This is a **phishing attack** (specifically, spear phishing if targeted). The attacker creates a fraudulent website that mimics the legitimate one to steal credentials.

Two defences:
1. **Two-factor authentication (2FA):** Even if the attacker obtains the password, they cannot log in without the second factor (e.g., SMS code, authenticator app).
2. **Email filtering and user education:** Spam filters can detect and block phishing emails. Training users to verify URLs (check for HTTPS, look for misspellings in the domain) reduces the success rate of phishing attacks.

</details>
