---
id: dns-architecture
title: DNS Architecture and Operations
description:
  DNS Architecture and Operations — DNS Infrastructure Components; Registrars;
  Registries; TLD Operators with worked examples and exam-style questions.
slug: dns-architecture
tags:
  - Networking
categories:
  - Networking
---

## Overview

DNS infrastructure is the backbone of Internet naming. Beyond the recursive resolution process
covered in the DNS fundamentals document, this deep dive covers the operational side: how zones are
managed, how delegation works, how DNSSEC provides authenticity, how anycast enables global scale,
and how enterprise DNS is designed for reliability and security.

Understanding DNS architecture is critical for systems engineers because virtually every service
depends on DNS. When DNS fails, everything fails -- websites, APIs, email, authentication, service
discovery, container orchestration.

## DNS Infrastructure Components

### Registrars

Registrars are accredited businesses that sell domain names to registrants (organizations,
individuals). Examples: GoDaddy, Namecheap, Cloudflare Registrar, AWS Route 53. The registrar
interface is where you:

- Register a domain name
- Set name server records (delegation)
- Manage WHOIS contact information
- Configure DNSSEC signing (DS records at the parent)

### Registries

Registries operate the TLD (Top-Level Domain) zone. They maintain the authoritative name servers for
the TLD and accept registrations from registrars. Examples:

- Verisign operates `.com` and `.net`
- PIR operates `.org`
- Google Registry operates `.dev`, `.app`, `.page`
- Nominet operates `.uk`

The registry does not interact with end users. The registrar communicates with the registry on
behalf of the registrant.

### TLD Operators

TLD operators run the authoritative name servers for a TLD. For `.com`, Verisign runs 13 logical
name server clusters (a through m.gtld-servers.net) deployed as anycast instances worldwide. These
servers respond to queries asking "where is the authoritative name server for example.com?"

### Root Servers

The root zone (`.`) is the apex of the DNS hierarchy. ICANN coordinates the root zone, which is
served by 13 logical root server networks (A through M) operated by different organizations:

| Label | Operator                          | Anycast instances |
| ----- | --------------------------------- | ----------------- |
| A     | Verisign                          | 100+              |
| B     | USC ISI                           | 6                 |
| C     | Cogent Communications             | 10+               |
| D     | University of Maryland            | 10+               |
| E     | NASA Ames Research Center         | 10+               |
| F     | Internet Systems Consortium (ISC) | 60+               |
| G     | US Department of Defense          | 10+               |
| H     | US Army Research Lab              | 6                 |
| I     | Netnod                            | 50+               |
| J     | Verisign                          | 100+              |
| K     | RIPE NCC                          | 30+               |
| L     | ICANN                             | 20+               |
| M     | WIDE Project                      | 10+               |

The "13" is a historical limit from the original DNS specification (UDP packet size constraints).
Today, each logical root server is deployed as an anycast cluster with dozens to hundreds of
physical instances.

## Zone Management

### SOA Record

Every DNS zone has exactly one SOA (Start of Authority) record. It defines the zone's primary name
server, the responsible person's email, and timing parameters for zone transfers and negative
caching.

```text
example.com.  3600  IN  SOA  ns1.example.com. hostmaster.example.com. (
                    2024011501  ; Serial (YYYYMMDDNN format)
                    3600        ; Refresh (slave checks master every 1 hour)
                    900         ; Retry (on failure, retry every 15 minutes)
                    604800      ; Expire (after 1 week without refresh, zone is stale)
                    86400       ; Minimum TTL (negative cache TTL for NXDOMAIN)
                    )
```

### Serial Numbers

The serial number is how slaves determine whether the zone has changed. When the slave's serial
matches the master's, no transfer is needed. When the master's serial is higher, the slave requests
a transfer.

Serial number formats:

- **YYYYMMDDNN:** Recommended. `2024011501` = January 15, 2024, revision 01. Easy to read, prevents
  rollover confusion.
- **Incremental:** Simple counter (1, 2, 3...). Easy to forget to increment.
- **UNIX timestamp:** Seconds since epoch. Precise but hard to read.

:::warning

If you decrease the serial number, slaves will not transfer the new zone (their serial is already
higher). This is a common mistake when migrating DNS providers. Always ensure the serial is higher
than the current value on all slaves.

:::

### Zone Transfers

**AXFR (Full Zone Transfer, RFC 5936):** The slave downloads the entire zone. Used for initial
synchronization or when the slave is far behind.

```bash
# Perform a full zone transfer with dig
dig axfr example.com @ns1.example.com

# With TSIG authentication
dig axfr example.com @ns1.example.com tsig-key.example.com
```

**IXFR (Incremental Zone Transfer, RFC 1995):** The slave downloads only the changes since its last
serial. The master sends a sequence of additions and deletions. More efficient for large zones with
frequent changes.

```bash
# Perform an incremental zone transfer
dig ixfr=2024011401 example.com @ns1.example.com
```

### NOTIFY (RFC 1996)

Without NOTIFY, slaves poll the master every `refresh` interval (typically 1 hour). This means
changes can take up to 1 hour to propagate to slaves. NOTIFY pushes the notification immediately:

```
Master (zone changed)          Slave
  |                              |
  |--- NOTIFY (serial=2024011502)|
  |                              |
  |<-- SOA query -----------------|
  |--- SOA response (serial=1501)-|
  |                              |
  |<-- IXFR query (from=1501) ---|
  |--- IXFR response (diffs) ----|
```

## DNS Delegation

### How Delegation Works

When a parent zone delegates a child zone, it inserts NS records pointing to the child's
authoritative name servers. It also inserts glue records (A/AAAA records for the child's name
servers when they are within the child's zone).

```
.com zone (parent):
  example.com.     IN  NS  ns1.example.com.
  example.com.     IN  NS  ns2.example.com.
  ns1.example.com. IN  A   93.184.216.1       ; glue record
  ns2.example.com. IN  A   93.184.216.2       ; glue record

example.com zone (child):
  @                IN  NS  ns1.example.com.
  @                IN  NS  ns2.example.com.
  ns1.example.com. IN  A   93.184.216.1
  ns2.example.com. IN  A   93.184.216.2
```

### Glue Records

Glue records are necessary because the resolver needs the IP address of the child's name server to
query it, but that IP address is in the child's zone -- which it cannot resolve yet (circular
dependency). The parent provides the glue records to break the cycle.

### Out-of-Bailiwick Delegation

When a name server for a zone is in a different domain, glue records are not strictly necessary (the
resolver can look up the name server's address independently). However, providing glue records is
still recommended for performance.

```
example.com zone:
  @    IN  NS  ns1.cdndns.net.    ; out-of-bailiwick
  @    IN  NS  ns2.cdndns.net.

cdndns.net zone:
  ns1.cdndns.net. IN  A   1.2.3.4
  ns2.cdndns.net. IN  A   5.6.7.8
```

### Lame Delegation

A lame delegation occurs when the parent zone's NS records point to name servers that are not
authoritative for the child zone. Causes:

- The child's name servers are not configured to serve the zone
- The child's name servers are unreachable (firewall, network issue)
- The parent's NS records are stale (zone migration incomplete)

```bash
# Detect lame delegation with dig
dig ns example.com
dig @ns1.example.com example.com soa
dig @ns2.example.com example.com soa
# If ns1 or ns2 returns REFUSED or NXDOMAIN, it is lame
```

## DNSSEC in Practice

### Overview

DNSSEC (Domain Name System Security Extensions) adds cryptographic signatures to DNS records,
allowing resolvers to verify that the responses they receive are authentic and have not been
tampered with. DNSSEC does not provide confidentiality (responses are still in plaintext) -- it
provides authenticity and integrity.

### Chain of Trust

DNSSEC establishes a chain of trust from the root zone down to the leaf zone:

```
Root Key (trust anchor)
  |
  v
.com zone signed by Root Key (DS record in root zone)
  |
  v
example.com zone signed by .com key (DS record in .com zone)
  |
  v
www.example.com record signed by example.com key (RRSIG)
```

### Key Types

**KSK (Key Signing Key):** A longer key (typically RSA-2048 or RSA-4096 or ECDSA P-256) used only to
sign the ZSK. The KSK's hash (DS record) is published in the parent zone. The KSK is rotated
infrequently (annually or less).

**ZSK (Zone Signing Key):** A shorter key (typically ECDSA P-256 or RSA-2048) used to sign all
records in the zone. The ZSK is rotated frequently (monthly) because it is used for every record.

### Record Types

| Type   | Purpose                                               |
| ------ | ----------------------------------------------------- |
| DNSKEY | Public key for the zone                               |
| DS     | Hash of a child zone's DNSKEY, stored in parent zone  |
| RRSIG  | Digital signature over a resource record set (RRset)  |
| NSEC   | Points to the next name in the zone (proves NXDOMAIN) |
| NSEC3  | Hashed NSEC (prevents zone enumeration)               |

### Signing a Zone

```bash
# Using BIND
dnssec-keygen -a ECDSAP256SHA256 -n ZONE example.com   # ZSK
dnssec-keygen -a ECDSAP256SHA256 -n ZONE -f KSK example.com  # KSK
dnssec-signzone -A -3 $(date +%Y%m%d) -N INCREMENT example.com

# Using ldns-keygen and ldns-signzone
ldns-keygen -a ECDSAP256SHA256 example.com
ldns-signzone example.com.signed example.com Kexample.com.+013+*.key
```

### Key Rotation

ZSK rotation is straightforward: generate a new ZSK, sign the zone with both old and new ZSKs, wait
for the old RRSIGs to expire, then remove the old ZSK.

KSK rotation is more involved because the DS record in the parent zone must be updated. The process
(RFC 8078):

1. Generate a new KSK
2. Sign the zone with both old and new KSKs
3. Publish the new DS record at the parent (via registrar interface)
4. Wait for the new DS record to propagate (up to 48 hours)
5. Remove the old KSK from the zone

```bash
# Rolling the KSK with BIND
rndc signing -nsec3param example.com
rndc loadkeys example.com
rndc signing -list example.com
```

### NSEC vs NSEC3

**NSEC** explicitly lists the next name in the zone. This allows zone enumeration (walking the
entire zone by following NSEC chains). NSEC is simpler and more efficient.

**NSEC3** uses hashed names instead of plaintext names. The resolver cannot enumerate the zone
because the names are hashed. NSEC3 is recommended for zones that want to prevent zone enumeration.

:::info

NSEC3 zone enumeration resistance is not absolute. An attacker with sufficient resources can
brute-force the hashes for common names. NSEC3 with opt-out (unsigned delegations are not covered)
provides weaker security but better performance for large zones.

:::

## Anycast DNS

### How Anycast Works

Anycast assigns the same IP address to multiple servers in different locations. BGP routes traffic
to the nearest (topologically closest) server. For DNS, this means queries are answered by the
closest name server instance.

```
Client in Tokyo           Client in London
  |                          |
  |--> 198.51.100.1 -------->|--> 198.51.100.1 ---------|
  |    (anycast)              |    (anycast)
  v                          v
[Tokyo DNS instance]    [London DNS instance]
198.51.100.1           198.51.100.1
```

### Root Server Anycast

All 13 root server operators use anycast. The a-root (198.41.0.4) has over 100 instances worldwide.
This provides:

- **Latency reduction:** Queries are answered by the closest instance (typically under 50ms)
- **Availability:** If one instance fails, BGP withdraws the route and traffic goes to the next
  closest
- **DDoS resilience:** Attack traffic is distributed across all instances

### CDN DNS

CDNs like Cloudflare, Akamai, and Fastly use anycast for their authoritative DNS. When a client
queries `www.example.com` and the CDN's DNS returns an IP address, the client is directed to the
nearest CDN edge server.

```bash
# Test which root server instance you hit
dig @198.41.0.4 . NS +short
# Compare with another location
dig @198.41.0.4 . NS +short +timeout=2

# Measure latency to different DNS servers
dig @8.8.8.8 example.com +stats | grep "Query time"
dig @1.1.1.1 example.com +stats | grep "Query time"
```

## Split-Horizon DNS

### Overview

Split-horizon DNS (also called split-view DNS or split-brain DNS) provides different DNS responses
depending on the source of the query. Internal clients get internal IP addresses; external clients
get external IP addresses.

```
Internal query for db.example.com:
  Response: 10.0.0.50  (private database server)

External query for db.example.com:
  Response: REFUSED or different public IP
```

### BIND Configuration Example

```text
// Internal view (for 10.0.0.0/8 clients)
view "internal" {
    match-clients { 10.0.0.0/8; };
    zone "example.com" {
        type master;
        file "/etc/bind/db.example.com.internal";
    };
};

// External view (for everyone else)
view "external" {
    match-clients { any; };
    zone "example.com" {
        type master;
        file "/etc/bind/db.example.com.external";
    };
};
```

### Use Cases

- **Internal services:** Database servers, management interfaces, internal APIs should not be
  resolvable from the Internet
- **Development vs production:** Developers resolve `api.example.com` to a staging server;
  production users resolve to the production server
- **GeoDNS:** Different responses based on geography (but anycast is usually better for this)

## DNS Load Balancing

### Round-Robin DNS

The simplest form of DNS load balancing. Multiple A records for the same name, with the resolver
cycling through them.

```text
example.com.  300  IN  A   93.184.216.1
example.com.  300  IN  A   93.184.216.2
example.com.  300  IN  A   93.184.216.3
```

Limitations:

- **No health checking.** If one server goes down, DNS still returns its IP. Clients get connection
  refused.
- **Caching.** Resolvers cache the full RRset and distribute it independently of the authoritative
  server's order.
- **Uneven distribution.** Clients that share a recursive resolver all get the same answer.

### Weight-Based DNS

Some DNS providers (AWS Route 53, Cloudflare) support weight-based routing:

```text
example.com.  300  IN  A   93.184.216.1  ; weight 3 (75% of traffic)
example.com.  300  IN  A   93.184.216.2  ; weight 1 (25% of traffic)
```

### GeoDNS

Return different IP addresses based on the query source's geographic location:

```text
; European clients
example.com.  300  IN  A   93.184.216.1  ; geo: EU

; US clients
example.com.  300  IN  A   93.184.216.2  ; geo: US

; Asian clients
example.com.  300  IN  A   93.184.216.3  ; geo: APAC
```

This is how CDNs direct users to the nearest edge server.

## Enterprise DNS Design

### Internal/External Split

| Aspect     | Internal DNS                            | External DNS                     |
| ---------- | --------------------------------------- | -------------------------------- |
| Purpose    | Corporate infrastructure resolution     | Public-facing services           |
| Servers    | AD Domain Controllers, dedicated DNS    | Cloud provider or third-party    |
| Zones      | corp.example.com, ad.example.com        | example.com                      |
| Records    | Private IPs, SRV for internal services  | Public IPs, MX, TXT for security |
| Forwarding | Internal recursive resolvers            | ISP or public resolvers          |
| Security   | Protected by firewall, no public access | Public, DDoS protected           |
| DNSSEC     | Optional (internal trust)               | Recommended                      |

### Active Directory Integration

Active Directory is completely dependent on DNS. AD domain controllers register SRV records that
clients use to locate domain services:

```text
_ldap._tcp.dc._msdcs.corp.example.com.  IN  SRV  0 100 389 dc1.corp.example.com.
_kerberos._tcp.dc._msdcs.corp.example.com. IN SRV  0 100 88 dc1.corp.example.com.
```

If DNS for AD is misconfigured, authentication, group policy, and all AD-dependent services fail.

### Forwarding vs Recursion

**Forwarding:** The DNS server forwards queries it cannot answer to an upstream resolver (e.g.,
8.8.8.8 or the ISP's resolver). Simple to configure but adds latency and a dependency.

**Recursion:** The DNS server performs the full resolution itself (querying root, TLD, authoritative
servers). More control, can be faster with caching, but more complex to configure and secure.

Best practice for enterprise: use dedicated recursive resolvers (Unbound, BIND) that perform
recursion, not forwarding. This gives you control over caching behavior, logging, and security
policies.

```bash
# Unbound configuration for recursive resolution
# /etc/unbound/unbound.conf
server:
    interface: 0.0.0.0@53
    access-control: 10.0.0.0/8 allow
    do-not-query-localhost: no
    hide-identity: yes
    hide-version: yes
    prefetch: yes
    prefetch-key: yes

forward-zone:
    name: "."
    forward-addr: 8.8.8.8
    forward-addr: 1.1.1.1
```

## DNS Troubleshooting Tools

### dig +trace

The most important DNS troubleshooting command. It traces the full resolution path from the root
down to the authoritative server.

```bash
# Full resolution trace
dig +trace example.com

# Trace with DNSSEC validation
dig +trace +dnssec example.com

# Trace specific record type
dig +trace example.com MX

# Trace from a specific recursive resolver
dig @8.8.8.8 +trace example.com
```

### Advanced dig Usage

```bash
# Query a specific authoritative server
dig @ns1.example.com example.com A

# Show the full DNSSEC chain
dig example.com DNSKEY +dnssec +multiline
dig example.com DS +dnssec +multiline

# Check delegation
dig example.com NS @a.gtld-servers.net

# Test DNSSEC validation
dig example.com A +dnssec +cd  # disable checking (cd = checking disabled)
dig example.com A +dnssec      # enable checking

# Measure query time
dig example.com +stats

# Query over TCP (when UDP is blocked or truncated)
dig +tcp example.com

# Query with EDNS0
dig +edns=0 example.com

# Show all record types for a name
dig example.com ANY +noall +answer
```

### dnstop

Real-time DNS traffic monitoring:

```bash
# Monitor DNS traffic on eth0
dnstop eth0

# Filter by source
dnstop -l 10.0.0.0/8 eth0
```

### tcpdump for DNS

```bash
# Capture DNS queries and responses
tcpdump -i eth0 -n port 53

# Capture only queries (no responses)
tcpdump -i eth0 -n 'port 53 and udp[10:2] & 0x8000 = 0'

# Capture only responses
tcpdump -i eth0 -n 'port 53 and udp[10:2] & 0x8000 != 0'

# Capture DNS over TCP
tcpdump -i eth0 -n 'tcp port 53'

# Save to pcap for analysis
tcpdump -i eth0 -n -w /tmp/dns-capture.pcap port 53
```

## Common DNS Problems

### NXDOMAIN

The queried name does not exist in the zone. Causes:

- Typo in the domain name
- Record not yet created (propagation delay)
- Record deleted
- Wildcard not configured (if expected)

```bash
# Check if the name exists
dig example.com A @ns1.example.com

# Check for typos
dig exmple.com A  # oops
```

### SERVFAIL

The authoritative server encountered an error. Causes:

- DNSSEC validation failure (broken chain of trust)
- Server misconfiguration
- Server overloaded or unreachable
- Broken zone file syntax

```bash
# Check DNSSEC chain
dig example.com DNSKEY +dnssec @ns1.example.com
dig example.com RRSIG A +dnssec @ns1.example.com

# Check server health
dig example.com A @ns1.example.com +timeout=5
dig example.com SOA @ns1.example.com
```

### Cache Poisoning

Cache poisoning occurs when an attacker injects forged DNS responses into a recursive resolver's
cache, causing subsequent queries to return malicious IP addresses.

Mitigations:

- **Source port randomization:** The resolver uses random source ports for queries (RFC 5452). An
  attacker must guess both the query ID (16 bits) and the source port (16 bits), making spoofing
  much harder.
- **DNSSEC:** The resolver validates signatures. Even if a forged response is accepted into the
  cache, DNSSEC validation rejects it.
- **DNS-over-TLS / DNS-over-HTTPS:** Encrypt the query path, preventing interception and injection.
- **0x20 encoding:** Randomize the case of the query name. The response must match the case, making
  forgery harder.

:::warning

DNS cache poisoning was dramatically demonstrated by the Kaminsky attack (2008). Before source port
randomization was widely deployed, an attacker could poison any resolver within seconds. All modern
resolvers implement source port randomization and DNSSEC validation.

:::

## Common Pitfalls

### 1. Not Monitoring DNS

DNS failures are often the first sign of infrastructure problems. Monitor:

- Query latency (dig +stats)
- Error rates (SERVFAIL, NXDOMAIN, timeout)
- DNSSEC validation failures
- Recursive resolver health
- Zone transfer completion

### 2. Long TTLs in Agile Environments

Long TTLs (hours or days) mean changes take a long time to propagate. In cloud environments where
services are frequently created and destroyed, long TTLs cause stale records. Use short TTLs (60-300
seconds) for dynamic records, and long TTLs (86400 seconds) for stable records.

### 3. Single Point of Failure in DNS

If all authoritative name servers are in the same subnet, datacenter, or cloud region, a single
outage takes down all DNS. Follow the "2-2-2" rule: at least 2 name servers, in at least 2
datacenters, on at least 2 different networks.

### 4. Forgetting About Reverse DNS (PTR)

Many services (email servers, SSH, some APIs) check reverse DNS. If your server's IP does not have a
PTR record pointing back to your domain, email may be rejected as spam, and SSH connections may be
slow (reverse DNS lookup timeout).

```bash
# Check reverse DNS
dig -x 93.184.216.1
host 93.184.216.1
```

### 5. Breaking DNSSEC During Migration

When migrating between DNS providers, the DNSSEC chain of trust must be maintained. If you remove
the old DS record before the new one is published, DNSSEC validation fails and your domain becomes
unreachable. Always overlap: publish the new DS first, verify it validates, then remove the old DS.

### 6. CNAME at the Zone Apex

RFC 1912 states that a CNAME should not coexist with any other record type for the same name. The
zone apex (e.g., `example.com`) must have SOA and NS records, so a CNAME at the apex would conflict.
Use ALIAS/ANAME records (provider-specific) or CNAME flattening to work around this.

## DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT)

### DNS-over-TLS (RFC 7858)

DNS-over-TLS encrypts DNS queries and responses using TLS. The standard port is 853. The client
establishes a TCP connection to the resolver, performs a TLS handshake, and then sends DNS queries
within the TLS tunnel.

```bash
# Test DoT with kdig (Knot DNS utilities)
kdig @1.1.1.1 +tls example.com

# Test with openssl
openssl s_client -connect 1.1.1.1:853 -servername cloudflare-dns.com
```

### DNS-over-HTTPS (RFC 8484)

DNS-over-HTTPS sends DNS queries as HTTP POST or GET requests over TLS. The standard path is
`/dns-query` with content type `application/dns-message`. Port 443.

```bash
# Test DoH with curl
curl -H 'Accept: application/dns-message' \
  'https://dns.google/dns-query?dns=AAABAAABAAAAAAAAB2V4YW1wbGUDY29tAAABAAE'

# Using kdig
kdig @https://dns.google example.com +https
```

### DoH vs DoT Comparison

| Feature            | DoT (853)             | DoH (443)                    |
| ------------------ | --------------------- | ---------------------------- |
| Port               | 853 (dedicated)       | 443 (shared with HTTPS)      |
| Firewall traversal | May be blocked        | Works through most proxies   |
| Privacy            | Visible as DNS (port) | Indistinguishable from HTTPS |
| Overhead           | Lower (no HTTP)       | Higher (HTTP framing)        |
| Detection          | Easy to detect/block  | Hard to detect/block         |
| Client support     | Android, iOS, Linux   | Browsers, curl, most OS      |

:::warning

DoH is controversial in enterprise environments because it bypasses corporate DNS resolvers and
content filtering. Users can configure their browsers to use an external DoH resolver (e.g.,
`dns.google`, `cloudflare-dns.com`), making it impossible for IT to enforce DNS-based policies. Some
enterprises block DoH at the firewall to maintain control.

:::

## DNS Performance Tuning

### Caching Hierarchy

The DNS resolution latency depends on how many caching layers the query hits:

```
Application resolver -> OS cache -> Local recursive resolver -> ISP cache -> Authoritative server
```

Typical latencies at each level:

| Level                 | Latency  | TTL influence          |
| --------------------- | -------- | ---------------------- |
| Application cache     | 0ms      | Application-controlled |
| OS cache (nscd)       | 0ms      | Respects TTL           |
| Local recursive cache | 0-5ms    | Respects TTL           |
| ISP cache hit         | 5-50ms   | Respects TTL           |
| Authoritative (cold)  | 50-500ms | Fresh answer           |

### Negative Caching

When a resolver receives NXDOMAIN or SERVFAIL, it caches the negative response. The TTL for negative
caching is controlled by the SOA record's minimum TTL field (and the SOA.MINIMUM in the negative
response). RFC 2308 recommends a default negative cache TTL of 3-5 minutes.

```bash
# View negative cache TTL in a response
dig nonexist.example.com | grep -i "nxdomain\|soa"
```

### Prefetching

Some resolvers (Unbound, Knot Resolver) support DNS prefetching: proactively refreshing records
before they expire, so that the cached answer is always fresh when the application queries.

```text
# Unbound prefetch configuration
server:
    prefetch: yes
    prefetch-key: yes
```

### ECS (EDNS Client Subnet, RFC 7871)

ECS allows the recursive resolver to pass the client's subnet (typically /24 for IPv4, /56 for IPv6)
to the authoritative server. This enables geo-DNS and CDN routing to the nearest server based on the
client's location, not the resolver's location.

```bash
# Test ECS with dig
dig +subnet=192.168.1.0/24 www.example.com @8.8.8.8
```

:::warning

ECS trades privacy for performance. The authoritative server learns the client's subnet.
Privacy-focused resolvers (Cloudflare 1.1.1.1, Quad9) zero out ECS by default or randomize it. If
you operate an authoritative server behind a CDN, ensure ECS is configured correctly -- incorrect
ECS processing can route clients to the wrong CDN edge.

:::

## DNS Failover and High Availability

### Primary/Secondary Architecture

The standard DNS HA model uses at least two authoritative name servers on different networks:

```text
Primary (master):  ns1.example.com  93.184.216.1  (Datacenter A)
Secondary (slave): ns2.example.com  93.184.216.2  (Datacenter B)
```

The primary accepts zone updates. Secondaries perform zone transfers (AXFR/IXFR) from the primary.
If the primary fails, secondaries continue serving the zone from their cached copy.

### Anycast for Authoritative DNS

For high availability and low latency, deploy authoritative name servers using anycast:

```text
ns1.example.com  198.51.100.1  (anycast: NYC, London, Tokyo, Sydney)
ns2.example.com  198.51.100.2  (anycast: NYC, London, Tokyo, Sydney)
```

If any single site fails, BGP withdraws the route and traffic automatically routes to the next
closest site. No DNS reconfiguration needed.

### Health Checking and Failover

Configure health checks on your authoritative servers. If a server fails health checks, the
monitoring system should alert and optionally update NS records (via API) or adjust BGP
advertisements.

```bash
# Simple health check with dig
dig @ns1.example.com example.com SOA +timeout=2 +tries=1
echo $?    # 0 = success, non-zero = failure
```
