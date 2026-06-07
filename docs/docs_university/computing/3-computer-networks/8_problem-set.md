---
title: Problem Set
tags:
  - Computing
  - University
---

1. **Nyquist theorem.** A noiseless channel has bandwidth 8000 Hz. What is the maximum data rate
   with 16 signal levels? With 256 signal levels?

2. **Shannon capacity.** A channel has bandwidth 4 MHz and SNR = 24 dB. Compute the maximum
   error-free data rate. If 64 signal levels are used with a Nyquist-based scheme, is the channel
   being used within its theoretical limit?

3. **Nyquist vs Shannon.** A channel has $H = 3000$ Hz and $\mathrm{SNR} = 31$ (about 15 dB). What
   is the maximum number of signal levels $V$ that can be used reliably?

4. **Hamming code.** Encode the data bits $d_1 d_2 d_3 d_4 = 0110$ using Hamming(7,4). If bit 5 of
   the transmitted codeword is flipped, show how the receiver detects and corrects the error.

5. **CRC computation.** Compute the CRC for the message `10110010` using the generator polynomial
   $G(x) = x^3 + x + 1$ (binary `1011`). Write the transmitted codeword.

6. **CRC verification.** The receiver gets the codeword `101101110` and the generator is `1011`.
   Perform modulo-2 division to determine whether the frame was received correctly.

7. **ALOHA throughput.** A slotted ALOHA system has 4 stations, each transmitting with probability
   $p = 0.2$ in each slot. Compute the throughput $S$ and compare it to the theoretical maximum.

8. **CSMA/CD minimum frame.** A 1 Gbps Ethernet has a maximum segment length of 100 m and
   propagation speed $2 \times 10^8$ m/s. What is the minimum frame size? How does it compare to the
   standard Ethernet minimum of 64 bytes?

9. **Switching latency.** A 1000-byte frame passes through 5 store-and-forward switches on 100 Mbps
   links (ignore propagation delay). Compute the total latency. Repeat for cut-through switching.

10. **Subnetting.** Given the network `172.16.0.0/16`Create subnets to support 100 hosts, 50 hosts,
    25 hosts, and 10 hosts using VLSM. List the network address, usable range, and broadcast for
    each.

11. **Route aggregation.** Aggregate the following routes into the most specific supernet:
    `198.51.100.0/24``198.51.101.0/24``198.51.102.0/24``198.51.103.0/24`.

12. **IPv6 addressing.** Expand the IPv6 address `2001:db8::1` to its full 128-bit form. How many
    /64 subnets does a /56 prefix provide? How many /128 addresses per /64?

13. **Dijkstra's algorithm.** Given the network topology below, find the shortest path tree from
    router S to all destinations:

    ```
    S --2-- A --1-- B
    |         |         |
    5         3         2
    |         |         |
    C --4-- D --1-- E
    ```

    Construct the routing table at S.

14. **Distance vector convergence.** Three routers X, Y, Z are connected: X--Y (cost 1), Y--Z (cost
    1), X--Z (cost 5). Initially, X's route to Z goes through Y. If link Y--Z fails, trace the
    count-to-infinity problem for 4 iterations. Explain how split horizon with poisoned reverse
    prevents it.

15. **TCP congestion control.** Given MSS = 1000 bytes, initial `ssthresh` = 8000 bytes. Trace
    `cwnd` through: slow start for 3 RTTs, then 2 RTTs of congestion avoidance, then a timeout. What
    is the value of `ssthresh` after the timeout?

16. **RTT estimation.** Using $\alpha = 1/8$, $\beta = 1/4$And measured RTTs of 100 ms, 120 ms, 80
    ms, compute $\mathrm{RTT_s}$, $\mathrm{RTT_d}$And RTO after each measurement (starting from
    $\mathrm{RTT_s} = \mathrm{RTT_d} = 0$).

17. **DNS resolution.** A client at `192.168.1.100` wants to resolve `www.example.com`. Describe the
    complete resolution process, including: the recursive query to the local resolver, the iterative
    queries to root and TLD servers, and the role of caching. How many round trips are needed on a
    cold cache?

18. **HTTP performance.** A web page contains 1 HTML document (10 KB), 5 CSS files (20 KB total), 10
    images (500 KB total), and 2 JavaScript files (100 KB total). Compare the total time to load the
    page over HTTP/1.0 (6 parallel TCP connections), HTTP/1.1 (1 persistent connection, no
    pipelining), and HTTP/2 (1 connection with multiplexing). Assume RTT = 50 ms and bandwidth = 10
    Mbps. Ignore processing time.

_Hint:_ Total data = 630 KB = 5.04 Mb. Transmission time = 5.04 / 10 = 0.504 s.

- HTTP/1.0: 16 objects, 6 connections. Each connection requires 1 RTT for TCP handshake + 1 RTT for
  HTTP request/response. With 6 parallel connections: 3 round trips for the TCP + HTTP per batch =
  150 ms per batch, with 3 batches (6 + 6 + 4 objects) = 3 $\times$ 150 + 504 = 954 ms.
- HTTP/1.1: 1 connection, sequential requests. 1 RTT for handshake + 16 RTTs for requests (serial) +
  504 ms = 1 $\times$ 50 + 16 $\times$ 50 + 504 = 1354 ms.
- HTTP/2: 1 RTT for handshake, all requests multiplexed. 1 $\times$ 50 + 504 = 554 ms.

19. **Firewall rules.** A company has a web server at `203.0.113.10`A mail server at
    `203.0.113.20`And an internal network `10.0.0.0/24`. Write a set of packet filtering rules that:
    (a) allows external HTTP/HTTPS to the web server, (b) allows external SMTP to the mail server,
    (c) allows internal users to access any external service, (d) blocks all other inbound traffic.

20. **RSA encryption.** Given primes $p = 5$, $q = 11$And public exponent $e = 3$: (a) Compute $n$,
    $\phi(n)$And the private key $d$. (b) Encrypt the message $m = 7$. (c) Decrypt the ciphertext to
    verify.

21. **TCP throughput bound.** A TCP connection over a satellite link has RTT = 600 ms and bandwidth
    = 50 Mbps. The receiver advertises `rwnd` = 1 MB. If `cwnd` grows to 2 MB during slow start,
    what is the maximum achievable throughput? What is the BDP, and is the window large enough to
    fill the pipe?

22. **CDMA orthogonality.** Four stations share a channel using CDMA with chip codes:
    $C_1 = (+1, -1, +1, +1)$, $C_2 = (+1, +1, -1, +1)$, $C_3 = (+1, +1, +1, -1)$
    $C_4 = (-1, +1, +1, +1)$. Station 1 sends bit 1, station 2 sends bit 0, station 3 sends bit 1,
    station 4 is silent. Compute the combined signal and show that each receiver correctly recovers
    its station's bit.

## Common Pitfalls

- **Confusing throughput and latency.** Latency: time for a single packet to travel. Throughput:
  rate of data delivery. **Fix:** Total time = latency + (file size / throughput).
- **Wrong TCP flow control vs congestion control.** Flow control: receiver-side (window to prevent
  buffer overflow). Congestion control: sender-side (avoid network congestion). **Fix:** Flow
  control: receiver advertises window. Congestion control: slow start, congestion avoidance, fast
  retransmit.
- **Confusing routing and forwarding.** Routing: building the routing table (network-layer process).
  Forwarding: looking up the next hop (per-packet). **Fix:** Routing algorithms: distance vector,
  link state. Forwarding: match destination IP to routing table entry.

## Worked Examples

### Example 1: Subnetting

**Problem.** An organisation has IP address 192.168.1.0/24. It needs 8 subnets. Design the
subnetting.

**Solution.** Borrow 3 bits ($2^3 = 8$ subnets). New mask: /27 (255.255.255.224). Subnets:
192.168.1.0/27, 192.168.1.32/27, ..., 192.168.1.224/27. Each subnet has 30 usable hosts.

$\blacksquare$

### Example 2: TCP handshake

**Problem.** Describe the TCP three-way handshake.

**Solution.** Client sends SYN (seq = x). Server responds SYN-ACK (seq = y, ack = x + 1). Client
sends ACK (ack = y + 1). Connection established.

$\blacksquare$

## Summary

- OSI and TCP/IP models; each layer has specific functions and protocols.
- TCP: reliable, connection-oriented; flow control (sliding window), congestion control (slow start,
  AIMD).
- IP addressing and subnetting: CIDR notation, variable-length subnet masking.
- Routing: distance vector (RIP), link state (OSPF), path vector (BGP).

## Cross-References

| Topic      | Site       | Link                                                                                                      |
| ---------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| [Networks] | A-Level    | [View](https://alevel-sciences.wyattau.com/docs/alevel/computer-science/networks/01-network-fundamentals) |
| [Networks] | IB         | [View](https://ib.wyattau.com/docs/ib/computer-science/3-networks/1_networks)                             |
| [Networks] | DSE        | [View](https://dse.wyattau.com/docs/dse/ict/4-networking-and-internet/1_internet-and-data-communications) |
| [Networks] | University | [View](https://university.wyattau.com/docs/computing/3-computer-networks/1_computer-networks)             |

