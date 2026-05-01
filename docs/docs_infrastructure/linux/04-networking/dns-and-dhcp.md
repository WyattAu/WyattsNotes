---
id: dns-and-dhcp
title: DNS and DHCP on Linux
description:
  DNS and DHCP on Linux — DNS Resolution on Linux; /etc/resolv.conf; Search
  domains appended to unqualified names; Sortlist for address ordering (rarely
  used).
slug: dns-and-dhcp
sidebar_position: 2
---

## DNS Resolution on Linux

### /etc/resolv.conf

The traditional DNS resolver configuration file:

```ini
# /etc/resolv.conf
nameserver 8.8.8.8
nameserver 8.8.4.4
nameserver 1.1.1.1

# Search domains appended to unqualified names
search example.com internal.example.com

# Sortlist for address ordering (rarely used)
sortlist 10.0.0.0/8

# Options
options timeout:2 attempts:3 rotate single-request-reopen
```

```text
Key directives:
  nameserver IP    — DNS server to query (up to 3, used in order)
  search domain1 domain2 — append these to unqualified queries
  domain name      — single search domain (deprecated in favor of search)
  options          — resolver library options:
    timeout:N      — initial timeout in seconds (default 5)
    attempts:N     — number of retries (default 2)
    rotate         — rotate through nameservers
    ndots:N        — query as FQDN if name has at least N dots (default 1)
    single-request — send A and AAAA queries sequentially
    single-request-reopen — close socket between queries
    edns0          — enable EDNS0 (large responses)
    trust-ad       — trust AD flag in responses
```

:::warning

On modern systems, `/etc/resolv.conf` is often a symlink managed by `systemd-resolved` or
`NetworkManager`. Manual edits will be overwritten. Check the symlink target:

```bash
ls -la /etc/resolv.conf
# /etc/resolv.conf -> /run/systemd/resolve/stub-resolv.conf
```

:::

### nsswitch.conf

The Name Service Switch determines the order of lookup mechanisms:

```ini
# /etc/nsswitch.conf
hosts:      files dns myhostname
networks:   files
```

```text
The 'hosts' line determines name resolution order:
  files     — /etc/hosts (checked first)
  dns       — DNS (resolv.conf nameservers)
  myhostname — systemd's nss-myhostname (returns 127.0.0.2 for local hostname)
  mdns4     — multicast DNS (Avahi) for .local
  mdns4_minimal — same, but only for .local names
  resolve   — systemd-resolved (nss-resolve)
```

```bash
# Common configurations
# DNS-first (traditional)
hosts:      dns files

# Files-first (default on most distributions)
hosts:      files dns

# With mDNS for .local
hosts:      files mdns4_minimal [NOTFOUND=return] dns myhostname

# With systemd-resolved
hosts:      resolve [!UNAVAIL=return] files myhostname
```

### /etc/hosts

```text
# /etc/hosts — static hostname-to-address mapping
# Format: IP_address  canonical_hostname  [aliases...]
127.0.0.1       localhost
127.0.1.1       myhost.example.com myhost
::1             localhost ip6-localhost ip6-loopback

# Override DNS for specific hosts
10.0.0.50       db-master.internal
10.0.0.51       db-replica.internal
```

## systemd-resolved

`systemd-resolved` is a local DNS resolver and cache that integrates with systemd.

### Configuration

```ini
# /etc/systemd/resolved.conf
[Resolve]
# DNS servers (static configuration)
DNS=8.8.8.8 1.1.1.1

# Fallback DNS servers (used when no per-link DNS is configured)
FallbackDNS=8.8.4.4

# DNS-over-TLS mode (no, opportunistic, yes)
DNSOverTLS=opportunistic

# MulticastDNS (yes, no, resolve)
MulticastDNS=yes

# DNSSEC mode (no, allow, yes)
DNSSEC=no

# Cache (yes, no)
Cache=yes

# Read /etc/hosts
ReadEtcHosts=yes
```

### Stub Resolver

```bash
# systemd-resolved provides a stub resolver at 127.0.0.53
# This is the default on Ubuntu 18.04+ and other distributions

cat /etc/resolv.conf
# nameserver 127.0.0.53
# options edns0 trust-ad

# Check resolver status
resolvectl status

# Check DNSSEC status
resolvectl dnssec

# Query a specific domain
resolvectl query example.com

# Monitor DNS queries in real-time
resolvectl log-level debug
journalctl -u systemd-resolved -f
```

### Per-Link DNS Configuration

```bash
# Set DNS for a specific interface
resolvectl dns eth0 8.8.8.8 8.8.4.4

# Set search domains for an interface
resolvectl domain eth0 ~example.com

# View per-interface configuration
resolvectl status eth0
```

## DNS Caching

### dnsmasq

`dnsmasq` is a lightweight DNS forwarder, DHCP server, and TFTP server. It is commonly used as a
local DNS cache and for small network management.

```ini
# /etc/dnsmasq.conf

# DNS settings
port=53
domain-needed                     # refuse queries without dotted part
bogus-priv                        # refuse private IP responses from public DNS
listen-address=127.0.0.1          # listen only on localhost
listen-address=10.0.0.1          # listen on LAN interface

# Upstream DNS servers
server=8.8.8.8
server=8.8.4.4
server=1.1.1.1

# Local DNS records
address=/myapp.local/10.0.0.100
address=/db.internal/10.0.0.50

# Hosts file (additional to /etc/hosts)
addn-hosts=/etc/dnsmasq.hosts

# Caching
cache-size=1000                   # cache up to 1000 entries
min-cache-ttl=300                  # minimum TTL 5 minutes
max-cache-ttl=86400                # maximum TTL 24 hours

# Logging
log-queries
log-facility=/var/log/dnsmasq.log
```

```bash
# Start dnsmasq
systemctl enable --now dnsmasq

# Update resolv.conf to point to dnsmasq
echo "nameserver 127.0.0.1" | sudo tee /etc/resolv.conf

# Test the cache
dig example.com @127.0.0.1
# First query: query time ~50ms (upstream)
dig example.com @127.0.0.1
# Second query: query time ~0ms (cached)

# Flush the cache
sudo systemctl restart dnsmasq
# or
sudo kill -HUP $(pidof dnsmasq)
```

### Unbound

`unbound` is a validating, recursive, caching DNS resolver.

```ini
# /etc/unbound/unbound.conf
server:
    interface: 127.0.0.1
    port: 53
    access-control: 127.0.0.0/8 allow
    access-control: 10.0.0.0/8 allow

    # Forward to upstream resolvers
    forward-zone:
        name: "."
        forward-addr: 8.8.8.8
        forward-addr: 8.8.4.4

    # DNSSEC validation
    auto-trust-anchor-file: "/var/lib/unbound/root.key"

    # Privacy (do not send client IP to upstream)
    qname-minimisation: yes

    # Caching
    msg-cache-size: 64m
    rrset-cache-size: 64m
```

```bash
# Start unbound
systemctl enable --now unbound

# Test DNSSEC validation
dig sigfail.verteiltesysteme.net @127.0.0.1
# Should return SERVFAIL (bogus)

dig sigok.verteiltesysteme.net @127.0.0.1
# Should return NOERROR (secure)

# Check trust anchors
unbound-anchor
```

## BIND9

BIND9 is the reference DNS server implementation, suitable for authoritative and recursive DNS.

### named.conf

```ini
# /etc/bind/named.conf.options
options {
    directory "/var/cache/bind";

    // Listen on specific interfaces
    listen-on-v6 { none; };
    listen-on { 10.0.0.1; 127.0.0.1; };

    // Allow queries from specific networks
    allow-query { 10.0.0.0/24; 127.0.0.0/8; };

    // Allow recursion (restrict for security)
    allow-recursion { 10.0.0.0/24; 127.0.0.0/8; };

    // Forwarders (if using as caching resolver)
    forwarders {
        8.8.8.8;
        8.8.4.4;
    };

    // DNSSEC validation
    dnssec-validation auto;

    // Rate limiting
    rate-limit {
        responses-per-second 20;
        nxdomains-per-second 5;
    };
};
```

### Zone Files

```ini
# /etc/bind/named.conf.local
zone "example.com" {
    type master;
    file "/etc/bind/db.example.com";
    allow-transfer { 10.0.0.2; };  # secondary NS IP
};

zone "0.0.10.in-addr.arpa" {
    type master;
    file "/etc/bind/db.10.0.0";
};
```

```text
; /etc/bind/db.example.com
$TTL    604800
@       IN      SOA     ns1.example.com. admin.example.com. (
                        2026040601      ; Serial (YYYYMMDDNN)
                        3600            ; Refresh (1 hour)
                        900             ; Retry (15 minutes)
                        604800          ; Expire (1 week)
                        86400 )         ; Negative Cache TTL (1 day)

        IN      NS      ns1.example.com.
        IN      NS      ns2.example.com.
        IN      A       10.0.0.1

ns1     IN      A       10.0.0.1
ns2     IN      A       10.0.0.2
www     IN      A       10.0.0.10
db      IN      A       10.0.0.50
api     IN      CNAME   www.example.com.

; Round-robin for load balancing
lb      IN      A       10.0.0.20
lb      IN      A       10.0.0.21
lb      IN      A       10.0.0.22
```

```text
; /etc/bind/db.10.0.0 — reverse zone
$TTL    604800
@       IN      SOA     ns1.example.com. admin.example.com. (
                        2026040601
                        3600
                        900
                        604800
                        86400 )
        IN      NS      ns1.example.com.

1       IN      PTR     ns1.example.com.
2       IN      PTR     ns2.example.com.
10      IN      PTR     www.example.com.
50      IN      PTR     db.example.com.
```

```bash
# Check zone syntax
named-checkzone example.com /etc/bind/db.example.com
named-checkzone 0.0.10.in-addr.arpa /etc/bind/db.10.0.0

# Check configuration
named-checkconf /etc/bind/named.conf

# Reload after changes
rndc reload
# or
systemctl reload bind9
```

## DHCP

### DHCP Client

#### dhcpcd

```ini
# /etc/dhcpcd.conf

# Request a specific hostname
hostname myhost

# Request specific IP (not guaranteed)
# ip_address 10.0.0.100/24

# Static configuration (fallback if DHCP fails)
profile static_eth0
static ip_address=10.0.0.100/24
static routers=10.0.0.1
static domain_name_servers=10.0.0.1 8.8.8.8

# Disable IPv4 on specific interface
interface eth0
dhcp
```

#### NetworkManager

```bash
# View DHCP configuration
nmcli device show eth0 | grep -i dhcp
nmcli connection show "Wired connection 1"

# Set DHCP options
nmcli connection modify "Wired connection 1" \
    ipv4.dhcp-send-hostname yes \
    ipv4.dhcp-hostname "myhost"

# Configure static DNS with DHCP
nmcli connection modify "Wired connection 1" \
    ipv4.dns "8.8.8.8 8.8.4.4" \
    ipv4.ignore-auto-dns yes
```

#### systemd-networkd

```ini
# /etc/systemd/network/20-wired.network
[Match]
Name=eth0

[Network]
DHCP=yes

[DHCP]
UseDomains=yes
# Request specific hostname
Hostname=myhost
# Send vendor class identifier
ClientIdentifier=mac
```

### DHCP Server

#### dnsmasq DHCP

```ini
# /etc/dnsmasq.conf

# DHCP range (start, end, lease time)
dhcp-range=10.0.0.100,10.0.0.200,12h

# DHCP options
dhcp-option=option:router,10.0.0.1
dhcp-option=option:dns-server,10.0.0.1,8.8.8.8
dhcp-option=option:ntp-server,10.0.0.1
dhcp-option=option:domain-search,example.com

# Gateway (alternative to option:router)
dhcp-option=3,10.0.0.1

# DNS server (alternative to option:dns-server)
dhcp-option=6,10.0.0.1,8.8.8.8

# Fixed IP assignments (by MAC address)
dhcp-host=aa:bb:cc:dd:ee:ff,10.0.0.50,infinite
dhcp-host=11:22:33:44:55:66,server1,10.0.0.51

# PXE boot
dhcp-boot=pxelinux.0,pxeserver,10.0.0.1

# Interface
interface=eth0
bind-interfaces
```

#### isc-dhcp-server

```ini
# /etc/dhcp/dhcpd.conf

# Global options
option domain-name "example.com";
option domain-name-servers ns1.example.com, 8.8.8.8;
default-lease-time 86400;
max-lease-time 172800;
authoritative;

# Subnet definition
subnet 10.0.0.0 netmask 255.255.255.0 {
    option routers 10.0.0.1;
    option subnet-mask 255.255.255.0;
    option broadcast-address 10.0.0.255;
    option domain-name-servers 10.0.0.1, 8.8.8.8;
    option ntp-servers 10.0.0.1;
    range 10.0.0.100 10.0.0.200;
}

# Fixed hosts
host server1 {
    hardware ethernet aa:bb:cc:dd:ee:ff;
    fixed-address 10.0.0.50;
    option host-name "server1";
}

host server2 {
    hardware ethernet 11:22:33:44:55:66;
    fixed-address 10.0.0.51;
}
```

```bash
# Configure interface
# /etc/default/isc-dhcp-server
INTERFACESv4="eth0"

# Start
systemctl enable --now isc-dhcp-server

# Check leases
cat /var/lib/dhcp/dhcpd.leases
```

## DNS Debugging Tools

### dig

```bash
# Basic query
dig example.com

# Query specific record type
dig example.com A
dig example.com AAAA
dig example.com MX
dig example.com NS
dig example.com TXT
dig example.com CNAME
dig example.com SOA
dig example.com PTR
dig example.com SRV

# Query specific DNS server
dig example.com @8.8.8.8
dig example.com @127.0.0.1

# Reverse DNS (PTR lookup)
dig -x 8.8.8.8

# Short output
dig +short example.com

# Trace delegation
dig +trace example.com

# Show DNSSEC chain
dig +dnssec example.com

# Query with specific options
dig +noall +answer example.com A
dig +noall +comments example.com   # show headers

# Batch queries from file
cat << 'EOF' > queries.txt
example.com A
google.com MX
EOF
dig -f queries.txt

# Check specific nameserver
dig @ns1.example.com example.com SOA
```

### nslookup

```bash
# Interactive mode
nslookup
> server 8.8.8.8
> example.com
> set type=MX
> example.com
> exit

# Non-interactive
nslookup example.com 8.8.8.8
```

### host

```bash
# Simple query
host example.com

# Specific record type
host -t MX example.com

# Specific server
host example.com 8.8.8.8

# Verbose (show all records)
host -v example.com

# Reverse lookup
host 8.8.8.8
```

### resolvectl

```bash
# Query using systemd-resolved
resolvectl query example.com
resolvectl query example.com A
resolvectl query example.com AAAA

# Monitor DNS transactions
resolvectl log-level debug
journalctl -u systemd-resolved -f
```

## DNS-over-HTTPS / DNS-over-TLS

### systemd-resolved with DoT

```ini
# /etc/systemd/resolved.conf
[Resolve]
DNS=1.1.1.1#cloudflare-dns.com 8.8.8.8#dns.google
DNSOverTLS=opportunistic
# DNSOverTLS=no        — disabled
# DNSOverTLS=opportunistic — use DoT if server supports it
# DNSOverTLS=yes       — require DoT, fail if unsupported
```

### Unbound with DoH/DoT Forwarding

```ini
# /etc/unbound/unbound.conf
forward-zone:
    name: "."
    forward-tls-upstream: yes
    forward-addr: 1.1.1.1@853#cloudflare-dns.com
    forward-addr: 8.8.8.8@853#dns.google
```

## Split DNS

Split DNS (split-horizon DNS) returns different responses depending on the client's source network.

### dnsmasq Split DNS

```ini
# /etc/dnsmasq.conf

# Internal network sees internal addresses
server=/example.com/10.0.0.1
local=/example.com/

# External queries go to public DNS
server=8.8.8.8

# Internal host records
address=/www.example.com/10.0.0.10
address=/api.example.com/10.0.0.11
```

### BIND Split DNS

```ini
# /etc/bind/named.conf.options
acl "internal" {
    10.0.0.0/24;
    127.0.0.0/8;
};

view "internal" {
    match-clients { "internal"; };
    zone "example.com" {
        type master;
        file "/etc/bind/db.example.com.internal";
    };
};

view "external" {
    match-clients { any; };
    zone "example.com" {
        type master;
        file "/etc/bind/db.example.com.external";
    };
};
```

## mDNS (Avahi)

Multicast DNS resolves .local hostnames on local networks without a central DNS server.

```bash
# Install
apt-get install avahi-daemon    # Debian/Ubuntu
dnf install avahi               # Fedora/RHEL

# Start
systemctl enable --now avahi-daemon

# Browse services on the network
avahi-browse -a                  # all services
avahi-browse -ar                 # all, resolve addresses
avahi-browse -rt _ssh._tcp       # SSH services
avahi-browse -rt _http._tcp      # HTTP services

# Publish a service
# /etc/avahi/services/myapp.service
<?xml version="1.0" standalone='no'?>
<!DOCTYPE service-group SYSTEM "avahi-service.dtd">
<service-group>
  <name>My App</name>
  <service>
    <type>_http._tcp</type>
    <port>8080</port>
  </service>
</service-group>

# Set hostname for mDNS
# /etc/avahi/avahi-daemon.conf
[server]
host-name=myhost
domain-name=local
```

## Common Pitfalls

### Pitfall: /etc/resolv.conf Overwritten on Reboot

```bash
# On systems using systemd-resolved, /etc/resolv.conf is a symlink
ls -la /etc/resolv.conf
# lrwxrwxrwx /etc/resolv.conf -> /run/systemd/resolve/stub-resolv.conf

# To make permanent changes, configure systemd-resolved instead:
# /etc/systemd/resolved.conf
[Resolve]
DNS=8.8.8.8 1.1.1.1

# On systems using resolvconf:
# /etc/resolvconf.conf
# Add: nameserver 8.8.8.8
```

### Pitfall: DNS Caching After Record Changes

```bash
# After changing DNS records, old values may be cached:
# 1. Local resolver cache
sudo systemctl restart systemd-resolved
sudo systemctl restart dnsmasq
sudo systemctl restart unbound

# 2. Browser cache
# Flush in browser settings

# 3. nscd cache
sudo systemctl restart nscd

# 4. Test without cache
dig +trace example.com @8.8.8.8
```

### Pitfall: ndots Causing Extra Queries

```bash
# With default ndots=5, "myserver" has fewer than 5 dots
# So the resolver first tries "myserver.example.com" and "myserver.internal.example.com"
# before trying "myserver" as-is

# This causes delays and unnecessary queries
# Fix: lower ndots
echo "options ndots:1" | sudo tee -a /etc/resolv.conf

# Fix: always use FQDNs
ping myserver.example.com   # not just "myserver"
```

### Pitfall: DHCP Leases Not Renewed

```bash
# Check current DHCP lease
dhcpcd -T eth0              # test mode, show DHCP exchange
dhcpcd -U eth0              # show current lease

# Release and renew
dhcpcd -k eth0              # release
dhcpcd eth0                 # renew

# For NetworkManager
nmcli device disconnect eth0
nmcli device connect eth0

# For systemd-networkd
systemctl restart systemd-networkd
```

### Pitfall: DNS Resolution Fails for Internal Names Only

```bash
# Check nsswitch order
getent hosts db.internal
# If it returns nothing, check /etc/nsswitch.conf
cat /etc/nsswitch.conf | grep hosts

# Check if the domain search list is correct
resolvectl domain

# Check if the DNS server has the internal zone
dig @10.0.0.1 db.internal

# Common cause: split DNS misconfiguration
# The internal resolver does not have the zone, or the
# external resolver is being queried instead
```
