---
title: Networking and Security
date: 2026-04-14
tags:
  - Computer Science
  - ILC
categories:
  - Computer Science
slug: networking-and-security
---

# Networking and Security

This topic covers computer networks, network models, protocols, security threats, and defensive
measures.

## Network Fundamentals (OL/HL)

### Types of Network

| Type                        | Description                            | Example        |
| --------------------------- | -------------------------------------- | -------------- |
| LAN (Local Area Network)    | Covers a small area (building, campus) | School network |
| WAN (Wide Area Network)     | Covers a large geographic area         | The Internet   |
| WLAN (Wireless LAN)         | LAN using wireless connections         | Home Wi-Fi     |
| PAN (Personal Area Network) | Very small range (a few metres)        | Bluetooth      |

### Client-Server vs Peer-to-Peer (OL/HL)

**Client-server:** central server provides resources to clients. Advantages: centralised management,
security, backup. Disadvantages: single point of failure, cost.

**Peer-to-peer:** all computers are equal, sharing resources directly. Advantages: no central
server, cost-effective for small networks. Disadvantages: security, difficult to manage at scale.

### Network Topologies (OL/HL)

**Star topology:** all devices connect to a central hub/switch.

- Advantages: easy to add/remove devices, if one cable fails others are unaffected.
- Disadvantages: if the hub fails, the network goes down.

**Bus topology:** all devices connect to a single cable (bus).

- Advantages: simple, cheap.
- Disadvantages: if the main cable fails, the network goes down; performance degrades with many
  devices.

**Ring topology:** devices connected in a circular loop.

- Advantages: no collisions, equal access.
- Disadvantages: if one device fails, the ring is broken.

**Mesh topology:** every device connects to every other device.

- Advantages: highly reliable, no single point of failure.
- Disadvantages: expensive, complex cabling.

### Comparing Topologies (HL)

| Feature         | Star           | Mesh      | Bus          | Ring     |
| --------------- | -------------- | --------- | ------------ | -------- |
| Cost            | Low            | High      | Very low     | Low      |
| Reliability     | Medium         | Very high | Low          | Low      |
| Scalability     | Good           | Poor      | Poor         | Poor     |
| Fault tolerance | Good           | Excellent | Poor         | Poor     |
| Cable required  | One per device | Many      | One backbone | One ring |

**Worked Example (HL).** A school has 30 computers in a lab. Recommend a topology.

Star topology is recommended. Each computer connects to a central switch via its own cable. If one
cable fails, only that computer is affected. The switch directs traffic efficiently.

## Network Models (HL)

### The OSI Model

The Open Systems Interconnection model has 7 layers:

| Layer | Name         | Function                              | Example                 |
| ----- | ------------ | ------------------------------------- | ----------------------- |
| 7     | Application  | User interface, applications          | HTTP, FTP, SMTP         |
| 6     | Presentation | Data formatting, encryption           | SSL/TLS, JPEG           |
| 5     | Session      | Establishes, maintains, ends sessions | NetBIOS                 |
| 4     | Transport    | End-to-end communication              | TCP, UDP                |
| 3     | Network      | Routing and addressing                | IP, ICMP                |
| 2     | Data Link    | Node-to-node data transfer            | Ethernet, MAC addresses |
| 1     | Physical     | Physical transmission of bits         | Cables, Wi-Fi, hubs     |

**Mnemonic:** "All People Seem To Need Data Processing" (bottom to top).

### The TCP/IP Model (HL)

A simplified 4-layer model:

| Layer          | OSI Equivalent | Protocol             |
| -------------- | -------------- | -------------------- |
| Application    | 5, 6, 7        | HTTP, DNS, SMTP, FTP |
| Transport      | 4              | TCP, UDP             |
| Internet       | 3              | IP, ICMP             |
| Network Access | 1, 2           | Ethernet, Wi-Fi      |

**Encapsulation:** As data moves down the layers, each layer adds its own header. At the receiving
end, each layer removes its header.

## Network Protocols (OL/HL)

### TCP/IP (HL)

**TCP (Transmission Control Protocol):** connection-oriented, reliable. Establishes a connection
before sending data (three-way handshake). Guarantees delivery and order. Used for web browsing,
email.

**UDP (User Datagram Protocol):** connectionless, unreliable. No guarantee of delivery or order.
Faster than TCP. Used for streaming, online gaming, DNS.

**TCP three-way handshake:**

1. Client sends SYN to server.
2. Server responds with SYN-ACK.
3. Client sends ACK. Connection established.

**Why three steps?** Ensures both sides can send and receive, and agree on sequence numbers.

### IP Addressing (OL/HL)

**IPv4:** 32-bit address (4 octets), e.g., $192.168.1.1$. Approximately 4.3 billion addresses.

**IPv6:** 128-bit address, e.g., $2001:0db8:85a3:0000:0000:8a2e:0370:7334$. Virtually unlimited
addresses.

**Private IP ranges:**

- $10.0.0.0$ -- $10.255.255.255$ (Class A)
- $172.16.0.0$ -- $172.31.255.255$ (Class B)
- $192.168.0.0$ -- $192.168.255.255$ (Class C)

**Worked Example (OL).** Convert the IP address 192.168.1.1 to binary.

$192 = 11000000$, $168 = 10101000$, $1 = 00000001$, $1 = 00000001$.

Result: $11000000.10101000.00000001.00000001$.

### Subnet Masks (HL)

A subnet mask determines which part of an IP address is the network portion and which is the host
portion.

**Example (HL):** IP address $192.168.1.100$ with subnet mask $255.255.255.0$.

Network portion: $192.168.1.0$. Host portion: $0.0.0.100$.

This allows 254 hosts ($2^8 - 2$).

**Worked Example (HL).** IP address $172.16.5.50$ with subnet mask $255.255.0.0$. What is the
network address and broadcast address?

Network address: $172.16.0.0$. Broadcast address: $172.16.255.255$. Number of hosts:
$2^{16} - 2
= 65534$.

### DNS (Domain Name System) (OL/HL)

Translates domain names (e.g., www.example.com) to IP addresses.

Hierarchical structure: root $\to$ top-level domain (.com, .org) $\to$ second-level domain (example)
$\to$ subdomain (www).

### HTTP/HTTPS (OL/HL)

**HTTP (Hypertext Transfer Protocol):** protocol for transferring web pages. Port 80.

**HTTPS (HTTP Secure):** HTTP encrypted with SSL/TLS. Port 443.

### Other Protocols

- **FTP (File Transfer Protocol):** transfers files. Port 21.
- **SMTP (Simple Mail Transfer Protocol):** sends email. Port 25.
- **POP3/IMAP:** receives email.
- **DHCP (Dynamic Host Configuration Protocol):** assigns IP addresses automatically.
- **NAT (Network Address Translation):** allows multiple devices to share one public IP address.

**Protocol port reference:**

| Protocol | Port |
| -------- | ---- |
| HTTP     | 80   |
| HTTPS    | 443  |
| FTP      | 21   |
| SMTP     | 25   |
| DNS      | 53   |
| SSH      | 22   |

## Network Hardware (OL/HL)

| Device                | Function                                                           |
| --------------------- | ------------------------------------------------------------------ |
| Router                | Connects different networks, routes packets                        |
| Switch                | Connects devices within a LAN, forwards frames using MAC addresses |
| Hub                   | Connects devices, broadcasts data to all ports (no intelligence)   |
| Modem                 | Converts digital signals to analog and vice versa                  |
| Wireless Access Point | Allows wireless devices to connect to a wired network              |
| Firewall              | Filters traffic, blocks unauthorised access                        |
| Repeater              | Regenerates signals to extend network range                        |

**Switch vs Hub:** A switch learns MAC addresses and directs data only to the intended recipient. A
hub broadcasts to all ports, wasting bandwidth and causing collisions.

**Router vs Switch:** A switch connects devices within a LAN (MAC addresses). A router connects
different networks (IP addresses).

## Security Threats (OL/HL)

### Malware

- **Virus:** attaches to legitimate programs, replicates, and spreads.
- **Worm:** self-replicating, spreads without a host program.
- **Trojan:** disguised as legitimate software, does not self-replicate.
- **Ransomware:** encrypts files and demands payment for decryption.
- **Spyware:** secretly monitors activity and collects information.
- **Adware:** displays unwanted advertisements.

### Social Engineering

Manipulating people into divulging confidential information.

- **Phishing:** fraudulent emails or websites pretending to be legitimate.
- **Spear phishing:** targeted phishing at specific individuals.
- **Pretexting:** creating a false scenario to obtain information.
- **Baiting:** offering something enticing to trick the victim.

### Other Threats

- **DDoS (Distributed Denial of Service):** overwhelms a server with traffic from multiple sources.
- **Man-in-the-middle attack:** intercepts communication between two parties.
- **SQL injection:** inserts malicious SQL code into input fields to access or manipulate a
  database.
- **Brute force attack:** systematically tries every possible password.

## Security Defences (OL/HL)

### Technical Measures

- **Firewall:** monitors and filters incoming and outgoing traffic.
- **Antivirus software:** detects and removes malware.
- **Encryption:** converts data into an unreadable format without the correct key.
- **Two-factor authentication (2FA):** requires two forms of identification.
- **SSL/TLS:** encrypts data in transit (HTTPS).
- **Intrusion Detection System (IDS):** monitors network traffic for suspicious activity.

### Encryption (HL)

**Symmetric encryption:** same key for encryption and decryption. Fast. Example: AES.

**Asymmetric encryption:** public key for encryption, private key for decryption. Slower but more
secure for key exchange. Example: RSA.

**Hashing:** one-way function that produces a fixed-length output. Used for password storage and
integrity verification. Example: SHA-256.

```python
import hashlib

password = "mypassword123"
hash_value = hashlib.sha256(password.encode()).hexdigest()
print(f"SHA-256 hash: {hash_value}")
```

**How HTTPS uses both:**

1. Client requests server's public key (from digital certificate).
2. Client generates a random session key.
3. Client encrypts session key with server's public key.
4. Server decrypts with private key.
5. Both sides use symmetric (AES) encryption for data transfer.

### Policies and Practices

- **Strong passwords:** minimum 12 characters, mix of upper/lowercase, numbers, and symbols.
- **Regular updates:** keep software and operating systems patched.
- **Backup:** regular backups to protect against data loss.
- **Access control:** limit access based on roles (principle of least privilege).
- **Security awareness training:** educate users about threats and best practices.

### SQL Injection Prevention (HL)

Use parameterised queries instead of string concatenation.

**Vulnerable:**

```python
query = f"SELECT * FROM users WHERE username = '{username}' AND password = '{password}'"
```

**Secure (parameterised):**

```python
cursor.execute("SELECT * FROM users WHERE username = ? AND password = ?", (username, password))
```

## Transmission Media (OL/HL)

### Guided Media

| Medium                | Speed     | Distance | Security            |
| --------------------- | --------- | -------- | ------------------- |
| Twisted pair (copper) | Medium    | Short    | Low (can be tapped) |
| Fibre optic           | Very fast | Long     | High                |
| Coaxial cable         | Medium    | Medium   | Medium              |

### Unguided Media

| Medium        | Speed    | Distance    | Security            |
| ------------- | -------- | ----------- | ------------------- |
| Wi-Fi (radio) | Fast     | Short       | Low (interceptable) |
| Microwave     | Fast     | Medium-Long | Medium              |
| Satellite     | Variable | Very long   | Medium              |

**Fibre optic vs copper:**

- Fibre optic carries data as light pulses through glass fibres. Much faster, immune to
  electromagnetic interference, and harder to tap.
- Copper carries data as electrical signals. Cheaper and easier to install, but slower and
  susceptible to interference.

### Packet Switching (HL)

Data is broken into packets for transmission. Each packet contains data, source address, destination
address, sequence number, and error checking.

**Advantages of packet switching:**

- No dedicated connection needed
- If a packet is lost, only that packet needs to be resent
- Multiple users can share the network
- Packets can take different paths around failures

**Packet switching vs circuit switching:**

| Feature        | Packet Switching        | Circuit Switching         |
| -------------- | ----------------------- | ------------------------- |
| Connection     | No dedicated connection | Dedicated connection      |
| Resource usage | Efficient (shared)      | Wasteful (reserved)       |
| Reliability    | Packets can reroute     | Fixed route               |
| Example        | The Internet            | Traditional phone network |

## Data Transmission (HL)

### Bandwidth, Latency, and Throughput

- **Bandwidth:** Maximum data transfer rate (bits per second). Measures capacity.
- **Latency:** Time for a packet to travel from source to destination (ms). Measures delay.
- **Throughput:** Actual data transfer rate achieved. Always $\le$ bandwidth.

**Analogy.** Bandwidth is the width of a motorway. Latency is the travel time for a single car.
Throughput is the actual number of cars passing per hour.

**Worked Example (HL).** A network has bandwidth 1 Gbps but actual throughput is 650 Mbps due to
congestion. How long to transfer a 200 MB file?

$200 \times 8 / 650 = 2.46$ seconds.

### Error Detection (HL)

**Checksum:** A value calculated from the data and sent with it. The receiver recalculates and
compares.

**Parity check:** An extra bit added to make the number of 1s even (even parity) or odd (odd
parity).

**Worked Example (HL).** Calculate the parity bit for 1011011 using even parity.

Number of 1s = 5 (odd). Parity bit = 1 (to make total even). Transmitted: 11011011.

## Network Security Deep Dive (HL)

### Firewall Rules

A firewall inspects traffic based on rules. Example rules:

| Rule | Source IP      | Destination IP | Port | Action |
| ---- | -------------- | -------------- | ---- | ------ |
| 1    | Any            | 192.168.1.0/24 | 80   | Allow  |
| 2    | Any            | Any            | 22   | Deny   |
| 3    | 192.168.1.0/24 | Any            | 443  | Allow  |

### SSL/TLS Handshake Detail (HL)

1. Client sends ClientHello (supported cipher suites, random number).
2. Server responds with ServerHello (chosen cipher suite, certificate, random number).
3. Client verifies the server's certificate against trusted CAs.
4. Client generates a pre-master secret and encrypts it with the server's public key.
5. Both sides derive the session key from the pre-master secret.
6. Encrypted communication begins using the session key.

### Digital Signatures (HL)

A digital signature provides:

- **Authentication:** Proves the sender's identity (only they have the private key).
- **Integrity:** Proves the message was not modified in transit.

**Process:**

1. Sender computes a hash of the message.
2. Sender encrypts the hash with their private key.
3. Receiver decrypts with the sender's public key.
4. Receiver computes their own hash and compares.

## Network Protocols in Detail

### DHCP (Dynamic Host Configuration Protocol)

DHCP automatically assigns IP addresses to devices. When a device connects:

1. **Discover:** Client broadcasts a DHCP discover message.
2. **Offer:** DHCP server responds with an available IP address.
3. **Request:** Client requests the offered IP address.
4. **Acknowledge:** Server confirms the lease.

**DHCP lease time:** IP addresses are assigned for a limited time (e.g., 24 hours). The client
must renew the lease before it expires.

### FTP (File Transfer Protocol)

FTP uses two connections: a control connection (port 21) for commands and a data connection (port 20)
for file transfer.

- **Active mode:** Server initiates data connection to client (can be blocked by firewalls).
- **Passive mode:** Client initiates data connection to server (firewall-friendly).

### SSH (Secure Shell)

SSH provides encrypted remote access to a server. Port 22.

**Features:** Encrypted terminal sessions, file transfer (SCP/SFTP), port forwarding, key-based
authentication.

### HTTP Status Codes in Detail

| Code | Meaning               | When Used                        |
| ---- | --------------------- | -------------------------------- |
| 200  | OK                    | Successful GET or POST           |
| 201  | Created               | Resource successfully created     |
| 301  | Moved Permanently     | URL has changed permanently       |
| 304  | Not Modified          | Cached version is still valid     |
| 400  | Bad Request           | Malformed request syntax          |
| 401  | Unauthorized          | Authentication required          |
| 403  | Forbidden             | Authenticated but not authorised  |
| 404  | Not Found             | Resource does not exist           |
| 500  | Internal Server Error | Server-side failure               |

## Network Security Deep Dive

### Firewall Types

| Type           | Description                                              |
| -------------- | -------------------------------------------------------- |
| Packet filter  | Examines source/destination IP and port                  |
| Stateful       | Tracks connection state; allows return traffic           |
| Proxy          | Intercepts all traffic; acts as intermediary             |
| Next-gen (NGFW)| Combines traditional firewall with IPS, application awareness |

### Intrusion Detection Systems

**IDS (Intrusion Detection System):** Monitors network traffic for suspicious activity and alerts
administrators.

**IPS (Intrusion Prevention System):** Actively blocks traffic that matches known attack patterns.

### Wireless Security in Detail

**Wi-Fi encryption evolution:**

| Protocol | Encryption | Vulnerability                     |
| -------- | ---------- | ---------------------------------- |
| WEP      | RC4        | Easily cracked (minutes)          |
| WPA      | TKIP       | Partially vulnerable              |
| WPA2     | AES        | KRACK attack on handshake          |
| WPA3     | AES + SAE   | Most secure; resistant to offline attacks |

### Penetration Testing

A simulated attack on a system to identify vulnerabilities before malicious attackers do.

**Phases:**

1. **Reconnaissance:** Gather information about the target.
2. **Scanning:** Identify open ports, services, and vulnerabilities.
3. **Exploitation:** Attempt to gain access.
4. **Reporting:** Document findings and recommendations.

## Transmission Media in Detail

### Fibre Optic Types

| Type   | Description                           | Use Case                  |
| ------ | ------------------------------------- | ------------------------- |
| Single-mode | One path for light; long distance | Telecommunications, long runs |
| Multi-mode | Multiple paths; shorter distance  | LANs, data centres          |

### Wireless Signal Propagation

**Factors affecting wireless signal strength:**

- **Distance:** Signal strength decreases with distance (inverse square law).
- **Obstacles:** Walls, furniture, and metal objects attenuate signals.
- **Interference:** Other wireless devices, microwaves, Bluetooth.
- **Antenna type:** Omnidirectional (360 degrees) vs directional (focused).

## Additional Practice Questions

11. Explain the difference between bandwidth and throughput. Why is throughput always less than or
    equal to bandwidth?

12. Describe how a digital signature provides both authentication and integrity.

13. Explain the purpose of each field in a data packet (data, source address, destination address,
    sequence number, error checking).

14. A company has 200 devices on a LAN with subnet mask 255.255.255.0. What is the network address
    and how many host addresses are available?

15. Explain the four phases of penetration testing.

16. Compare packet-filtering firewalls with stateful firewalls. Give an advantage of each.

17. A user reports slow network performance. Explain how you would diagnose the problem using
    network tools.

18. Explain the difference between single-mode and multi-mode fibre optic cable. When would you
    use each?

19. Describe the DHCP lease process. What happens when a lease expires and the client does not
    renew?

20. Explain how a proxy firewall works and why it provides better security than a packet-filtering
    firewall.

## Network Configuration

### Subnetting Practice

**Worked Example.** A company has the network 172.16.0.0/16. They need 10 subnets. What subnet mask
should they use?

$2^4 = 16$ subnets (4 bits borrowed). Subnet mask: $255.255.240.0$ (/20).

Usable hosts per subnet: $2^{12} - 2 = 4094$.

**Worked Example.** For the network 192.168.1.0/26, list the network address, first usable host,
last usable host, and broadcast address.

Network address: 192.168.1.0. First host: 192.168.1.1. Last host: 192.168.1.62. Broadcast:
192.168.1.63.

### VLAN Configuration

A VLAN logically segments a physical network. Devices in different VLANs cannot communicate directly
even if they are on the same physical switch.

**Benefits:**

- Improved security (isolating departments).
- Reduced broadcast traffic.
- Flexible device placement.

## Cryptography in Detail

### Symmetric Encryption Algorithms

| Algorithm | Key Length | Speed     | Use Case                    |
| --------- | ---------- | --------- | --------------------------- |
| AES-128   | 128 bits   | Very fast | General purpose             |
| AES-256   | 256 bits   | Very fast | High-security applications |
| DES       | 56 bits    | Fast      | Obsolete (too weak)         |
| 3DES      | 168 bits   | Slow      | Legacy systems              |

### Asymmetric Encryption

**RSA (Rivest-Shamir-Adleman):**

1. Choose two large prime numbers p and q.
2. Compute n = p * q.
3. Compute phi(n) = (p-1) * (q-1).
4. Choose e such that 1 < e < phi(n) and gcd(e, phi(n)) = 1.
5. Compute d such that e * d mod phi(n) = 1.
6. Public key: (e, n). Private key: (d, n).

**Encrypt:** ciphertext = plaintext^e mod n.
**Decrypt:** plaintext = ciphertext^d mod n.

### Digital Certificates

A digital certificate binds a public key to an identity. It is issued by a Certificate Authority
(CA) and includes:

- The subject's public key.
- The subject's identity (name, organisation).
- The issuer (CA).
- Validity period.
- Digital signature of the CA.

**Certificate chain:** Root CA -> Intermediate CA -> Server certificate. The browser trusts the root
CA, which signs the intermediate, which signs the server certificate.

## Network Troubleshooting

### Common Issues

| Symptom                   | Possible Cause                  | Diagnostic Tool |
| ------------------------- | ------------------------------- | --------------- |
| No Internet access        | DNS failure, router issue       | ping, nslookup |
| Slow network               | Congestion, hardware issue      | speed test, ping |
| Intermittent connectivity  | Loose cable, interference       | continuous ping |
| Cannot access specific site | DNS issue, firewall block       | nslookup, traceroute |

### Troubleshooting Methodology

1. Identify the problem (symptoms, scope).
2. Establish a theory of probable cause.
3. Test the theory.
4. Establish a plan of action.
5. Implement the solution.
6. Verify full system functionality.
7. Document findings.

## Additional Practice Questions

16. Explain the difference between AES and DES. Why is DES no longer considered secure?

17. Write the steps to create a digital certificate for a web server. What is the role of the
    certificate authority?

18. A network administrator needs to create 5 subnets from the network 10.0.0.0/24. Is this
    possible? Explain your answer.

19. Explain the certificate chain and why browsers trust web server certificates.

20. Describe the seven-step troubleshooting methodology used in network diagnostics.

21. A user cannot access example.com but can access other websites. Explain the likely cause and the
    steps to diagnose and fix the problem.

22. Compare AES-128 and AES-256. In what scenarios would AES-256 be preferred?

23. Explain what a man-in-the-middle attack is and how HTTPS prevents it.

24. Write a step-by-step guide for configuring a VLAN on a managed switch to separate student and
    staff networks.

## Network Protocols Summary Table (HL)

| Protocol  | Layer       | Port(s) | Purpose                          | TCP/UDP |
| --------- | ----------- | ------- | -------------------------------- | ------ |
| HTTP      | Application | 80      | Web page transfer                | TCP    |
| HTTPS     | Application | 443     | Secure web page transfer          | TCP    |
| FTP       | Application | 20, 21  | File transfer                    | TCP    |
| SSH       | Application | 22      | Secure remote access             | TCP    |
| SMTP      | Application | 25      | Email sending                    | TCP    |
| DNS       | Application | 53      | Domain name resolution           | UDP    |
| DHCP      | Application | 67, 68  | IP address assignment            | UDP    |
| POP3      | Application | 110     | Email receiving                  | TCP    |
| IMAP      | Application | 143     | Email receiving (synchronised)    | TCP    |
| Telnet    | Application | 23      | Remote terminal (unencrypted)    | TCP    |

## Network Address Translation in Practice

**Worked Example.** A home network has devices with private IPs 192.168.1.2, 192.168.1.3,
192.168.1.4. The router's public IP is 203.0.113.5.

When 192.168.1.2 sends a request to a web server:
1. Router replaces source IP from 192.168.1.2 to 203.0.113.5.
2. Router records the mapping in its NAT table.
3. Response arrives at 203.0.113.5.
4. Router looks up the NAT table, replaces destination with 192.168.1.2, and forwards.

## IPv6 Addressing Details

**IPv6 address notation:**

- 8 groups of 4 hexadecimal digits: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`
- Leading zeros can be omitted: `2001:db8:85a3:0:0:8a2e:370:7334`
- Consecutive all-zero groups replaced with `::`: `2001:db8:85a3::8a2e:370:7334`

**IPv6 loopback:** `::1`

**IPv6 link-local:** `fe80::/10`

**Worked Example.** Expand the IPv6 address `2001:db8::1` to its full form.

`2001:0db8:0000:0000:0000:0000:0000:0001`

## Additional Practice Questions

25. Explain the role of each protocol in the table above. Why does DNS use UDP instead of TCP?

26. Explain how NAT works in a home network with 5 devices. Why is NAT necessary?

27. Write the full form of the IPv6 address `fe80::1%eth0`.

28. Explain why DNS uses UDP for queries but can fall back to TCP for large responses.

29. Compare POP3 and IMAP. Which is better for accessing email from multiple devices?

30. A school has 3 computer labs with 30 computers each. Design a network addressing scheme using
    private IP addresses. Specify the network address, subnet mask, and range of usable IPs.

## Common Pitfalls

1. **OSI model** -- remember the layers from bottom (physical) to top (application).
2. **TCP vs UDP** -- TCP is reliable but slower; UDP is fast but unreliable.
3. **Private IP addresses** -- not routable on the public internet.
4. **Encryption** -- symmetric uses one key; asymmetric uses a key pair.
5. **SQL injection** -- always use parameterised queries.
6. **Confusing switch and router** -- switch uses MAC addresses within a LAN; router uses IP
   addresses between networks.
7. **Forgetting port numbers** -- each protocol uses a standard port.
8. **Confusing the Internet and the WWW** -- the Internet is infrastructure; the Web is a service.

## Practice Questions

### Ordinary Level

1. Describe the difference between a LAN and a WAN.
2. Explain the functions of a router and a switch.
3. Describe three types of malware and how they differ.
4. Explain what phishing is and how to protect against it.

### Higher Level

1. Describe the OSI model, naming all seven layers and their functions.
2. Explain how TCP establishes a connection using the three-way handshake.
3. A computer has IP address $172.16.5.50$ with subnet mask $255.255.0.0$. What is the network
   address and the broadcast address?
4. Explain the difference between symmetric and asymmetric encryption. When would you use each?

5. Convert the IP address $10.0.0.1$ to its 32-bit binary representation.
6. Explain what a DDoS attack is and how it differs from a standard DoS attack.
7. Describe how HTTPS establishes a secure connection using asymmetric and symmetric encryption.
8. Explain the role of NAT in a home network. Why is it necessary?
9. A network has a bandwidth of 100 Mbps. A 50 MB file needs to be transferred. Calculate the
   minimum transfer time.
10. Explain the principle of least privilege and give an example of its application.
11. Explain the difference between bandwidth and throughput. Why is throughput always less than or
    equal to bandwidth?
12. Describe how a digital signature provides both authentication and integrity.
13. Explain the purpose of each field in a data packet (data, source address, destination address,
    sequence number, error checking).
14. A company has 200 devices on a LAN with subnet mask 255.255.255.0. What is the network address
    and how many host addresses are available?
