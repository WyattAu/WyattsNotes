---
id: http-2-and-3
title: HTTP/2 and HTTP/3
description:
  HTTP/2 and HTTP/3 — multiplexing, header compression, server push, QUIC transport, and migration
  considerations.
slug: http-2-and-3
tags:
  - Networking
categories:
  - Networking
---

## Overview

HTTP/2 (RFC 9113) and HTTP/3 (RFC 9114) are the modern versions of the Hypertext Transfer Protocol.
HTTP/2 brought binary framing, multiplexing, and header compression to address the limitations of
HTTP/1.1. HTTP/3 replaces TCP with QUIC (a UDP-based transport) to eliminate TCP-level head-of-line
blocking and enable features like connection migration.

Both protocols maintain the same HTTP semantics (methods, status codes, headers, URIs) as HTTP/1.1.
The change is in how the bytes are formatted on the wire, not in what they mean.

## HTTP/2

### Binary Framing Layer

HTTP/1.1 is a text protocol. HTTP/2 is a binary protocol. Every HTTP/2 communication is performed
over a single TCP connection, and all communication is split into smaller messages and frames.

```
+-----------------------------------------------+
|                 Frame Header (9 bytes)         |
|                                               |
|  Length (24): frame payload length             |
|  Type (8): DATA, HEADERS, SETTINGS, etc.      |
|  Flags (8): END_STREAM, END_HEADERS, etc.     |
|  Reserved (1) + Stream Identifier (31)        |
+-----------------------------------------------+
|               Frame Payload (0 to 2^24-1)      |
+-----------------------------------------------+
```

### Streams and Multiplexing

A stream is a bidirectional flow of frames within a single HTTP/2 connection. Multiple streams are
multiplexed over a single TCP connection. Each stream has a unique 31-bit identifier.
Client-initiated streams use odd numbers; server-initiated streams use even numbers.

```
Client                                          Server
  |                                                |
  |--- HEADERS [stream 1] ----------------------->|  GET /style.css
  |--- HEADERS [stream 3] ----------------------->|  GET /script.js
  |--- HEADERS [stream 5] ----------------------->|  GET /image.png
  |                                                |
  |<-- HEADERS [stream 1] ------------------------|  200 OK
  |<-- DATA [stream 1] ---------------------------|  CSS content
  |<-- HEADERS [stream 3] ------------------------|  200 OK
  |<-- DATA [stream 3] ---------------------------|  JS content
  |<-- HEADERS [stream 5] ------------------------|  200 OK
  |<-- DATA [stream 5] ---------------------------|  Image data
```

No ordering requirement exists between streams. The server can send stream 5's data before stream
1's, and the client reassembles each stream independently.

### Flow Control

HTTP/2 implements flow control at the stream level and the connection level. Each side advertises a
window size (initially 65,535 bytes, configurable via SETTINGS). The sender must not send more data
than the receiver's window allows. The receiver sends WINDOW_UPDATE frames to increase the window.

This prevents a fast sender from overwhelming a slow receiver. Without flow control, a server
sending a large response could exhaust the client's receive buffer.

```
Client                                          Server
  |                                                |
  |<-- DATA [stream 1, 16KB] --------------------|  (client window decreases)
  |<-- DATA [stream 1, 16KB] --------------------|  (client window decreases)
  |--- WINDOW_UPDATE [stream 1, +32KB] ---------->|  (client grants more window)
  |<-- DATA [stream 1, 32KB] --------------------|  (server can send more)
```

### HPACK Header Compression

HTTP/1.1 sends headers as plain text, repeated on every request. For a typical page load with 30-100
requests, headers like `User-Agent`, `Accept`, `Cookie`, and `Accept-Encoding` are sent dozens of
times, each time consuming hundreds of bytes.

HPACK (RFC 7541) compresses headers using three techniques:

1. **Static table:** 61 predefined common header field/value pairs (e.g., `:method: GET`,
   `:path: /`, `accept-encoding: gzip, deflate`)
2. **Dynamic table:** Header fields sent in previous messages are cached and referenced by index
   number
3. **Huffman coding:** Literal header values are encoded using Huffman coding, which reduces common
   ASCII strings by ~20-30%

```
First request:
  :method: GET
  :path: /api/users
  accept: application/json
  user-agent: Mozilla/5.0...

Second request (to same server):
  :method: GET              <- static table index 2
  :path: /api/users         <- dynamic table index (from first request)
  accept: application/json  <- dynamic table index
  user-agent: Mozilla/5.0... <- dynamic table index

Second request on wire: ~20 bytes (3 index references) vs ~200 bytes (full headers)
```

:::info

HPACK is designed to be resistant to CRIME/BREACH-style compression oracle attacks. It does not
compress across different origins (the dynamic table is per-origin), and it does not compress cookie
values in a way that leaks information.

:::

### Server Push

HTTP/2 allows the server to proactively send resources to the client before the client requests
them. The server sends a PUSH_PROMISE frame that includes the request headers for the pushed
resource. The client can reject pushed resources with a RST_STREAM frame.

```
Client                                          Server
  |                                                |
  |--- HEADERS [stream 1]: GET /index.html ------>|
  |                                                |
  |<-- HEADERS [stream 1]: 200 OK ----------------|
  |<-- DATA [stream 1]: HTML body -----------------|
  |<-- PUSH_PROMISE [stream 2]: GET /style.css -->|  Server pushes CSS
  |<-- PUSH_PROMISE [stream 4]: GET /app.js ---->|  Server pushes JS
  |<-- HEADERS [stream 2]: 200 OK ----------------|
  |<-- DATA [stream 2]: CSS body ------------------|
  |<-- HEADERS [stream 4]: 200 OK ----------------|
  |<-- DATA [stream 4]: JS body -------------------|
```

:::warning

Server push has been deprecated in practice. Chrome removed support in 2022, and Firefox followed.
The rationale: caching is more effective (the client can predict what it needs based on the HTML),
push is hard to get right (pushing resources the client already has cached wastes bandwidth), and
push complicates the client's cache state. Use `&lt;link rel="preload"&gt;` instead.

:::

### Stream Priority and Dependencies

HTTP/2 allows clients to assign priorities to streams using a dependency tree. Each stream can have
a parent stream and a weight (1-256). This helps the server decide which resources to send first
when multiple streams are active.

```text
        [stream 0: root]
         /            \
   weight:32      weight:16
   [stream 1]     [stream 3]
   /          \
weight:12  weight:20
[stream 5] [stream 7]
```

In this example, stream 1 gets twice the bandwidth of stream 3 (weight 32 vs 16). Within stream 1's
subtree, stream 7 gets more bandwidth than stream 5 (weight 20 vs 12).

:::warning

In practice, stream priority implementation varies between servers and clients, and the results are
often underwhelming. Most implementations use simple FIFO ordering. Do not rely on stream priority
for critical performance optimization.

:::

### Connection Preface

HTTP/2 starts with a connection preface:

- **Client sends:** the string `PRI * HTTP/2.0\r\n\r\nSM\r\n\r\n` (a magic string that ensures the
  server speaks HTTP/2) followed by a SETTINGS frame
- **Server sends:** a SETTINGS frame (typically with default settings)

Both sides must send their SETTINGS as the first frame of the connection. The SETTINGS frame is not
acknowledged until the receiver sends a SETTINGS_ACK frame.

### SETTINGS Frame

The SETTINGS frame configures connection-level parameters:

| Parameter              | Default   | Description                                  |
| ---------------------- | --------- | -------------------------------------------- |
| HEADER_TABLE_SIZE      | 4096      | Maximum size of the HPACK dynamic table      |
| ENABLE_PUSH            | 1         | Server push enabled (0 = disabled)           |
| MAX_CONCURRENT_STREAMS | unlimited | Maximum concurrent streams per connection    |
| INITIAL_WINDOW_SIZE    | 65535     | Initial flow control window for new streams  |
| MAX_FRAME_SIZE         | 16384     | Maximum frame payload size (16384 to 2^24-1) |
| MAX_HEADER_LIST_SIZE   | unlimited | Maximum total header size                    |

```bash
# Test HTTP/2 with curl
curl -I --http2 https://example.com

# View HTTP/2 frames with nghttp
nghttp -nv https://example.com

# View detailed frame information
nghttp -v https://example.com
```

## HTTP/2 Limitations

### Head-of-Line Blocking at TCP Level

This is the fundamental limitation of HTTP/2. While HTTP/2 eliminates head-of-line blocking between
streams (a stalled stream does not block other streams), it does not eliminate head-of-line blocking
at the TCP level.

When a TCP packet is lost, all subsequent TCP segments cannot be delivered to the application until
the lost packet is retransmitted and arrives in order. This means a single lost packet blocks ALL
HTTP/2 streams on that connection, even if the lost packet belongs to only one stream.

```
TCP stream:  [1][2][3][4][5][6][7][8]
                  ^
                  Packet 3 lost

HTTP/2 streams before loss:
  Stream 1: frames from packets 1, 2, 3
  Stream 3: frames from packets 4, 5, 6
  Stream 5: frames from packets 7, 8

After loss: ALL streams blocked until packet 3 is retransmitted
(even though streams 3 and 5's data was received)
```

This is especially problematic on lossy networks (mobile, satellite) where packet loss rates of 1-5%
are common. On a 1% loss network, HTTP/2 can perform worse than HTTP/1.1 with multiple connections
because HTTP/1.1's multiple TCP connections provide independent loss recovery.

## HTTP/3

### Overview

HTTP/3 (RFC 9114) replaces TCP with QUIC as the transport layer. QUIC runs over UDP and implements
its own reliability, congestion control, and flow control. The key advantage: QUIC handles loss
recovery per-stream, so a lost packet on one stream does not block other streams.

### QUIC as Transport

QUIC (RFC 9000) is a general-purpose transport protocol, not specific to HTTP/3. Key properties:

| Property                  | TCP + TLS                | QUIC                     |
| ------------------------- | ------------------------ | ------------------------ |
| Transport                 | TCP                      | UDP                      |
| Encryption                | TLS (separate handshake) | Integrated (TLS 1.3)     |
| Handshake                 | 2-3 RTT                  | 1 RTT (0-RTT for repeat) |
| Head-of-line blocking     | Yes (TCP level)          | No (per-stream recovery) |
| Connection identification | 4-tuple (IP+port)        | Connection ID            |
| Connection migration      | No                       | Yes (IP/port change)     |
| Middlebox interference    | Significant              | Minimal (encrypted)      |

### 0-RTT Connection Establishment

For repeat connections, QUIC supports 0-RTT: the client sends application data in the first flight,
using cached session keys from a previous connection.

```
First connection (1 RTT):
  Client                                          Server
    |                                                |
    |--- Initial [CRYPTO: ClientHello] ------------->|  Flight 1
    |                                                |
    |<-- Initial [CRYPTO: ServerHello] --------------|  Flight 2
    |<-- Handshake [CRYPTO: Finished] ---------------|
    |<-- 1-RTT [CRYPTO: app data] -------------------|
    |                                                |
    |--- Handshake [CRYPTO: Finished] -------------->|  Flight 3
    |--- 1-RTT [CRYPTO: app data] ------------------>|

Repeat connection (0-RTT):
  Client                                          Server
    |                                                |
    |--- Initial [CRYPTO: ClientHello] ------------->|  Flight 1
    |--- 0-RTT [CRYPTO: app data] ------------------>|  Data sent immediately!
    |                                                |
    |<-- Initial [CRYPTO: ServerHello] --------------|
    |<-- Handshake [CRYPTO: Finished] ---------------|
    |<-- 1-RTT [CRYPTO: app data] -------------------|
```

### Connection Migration

QUIC uses connection IDs (CID) instead of the 4-tuple to identify connections. When a client's IP
address changes (WiFi to cellular, VPN connect/disconnect), the connection survives because the CID
is unchanged.

```
Client on WiFi                              Client on Cellular
  |                                           |
  |--- [CID: abc123] ----------------------->|
  |                                           |
  |          (WiFi drops, switch to cellular) |
  |                                           |
  |--- [CID: abc123, new path] ------------->|  Same connection, new IP
  |<-- [CID: abc123, path response] ---------|  Server acknowledges
```

### Loss Recovery Without Head-of-Line Blocking

QUIC numbers packets independently per stream. When a packet is lost, only the affected stream is
blocked. Other streams continue sending and receiving.

```
QUIC streams:
  Stream 0: packets 1, 2, 3, [4 lost], 5, 6
  Stream 4: packets 1, 2, 3, 4, 5, 6

Packet 4 of stream 0 is lost:
  - Stream 0: blocked at packet 4, retransmission requested
  - Stream 4: continues normally (no dependency on stream 0)
```

### QUIC Protocol Details

**Connection IDs:** Opaque byte strings (up to 20 bytes) chosen by the server. The client includes
the server's CID in every packet so the server can identify the connection without relying on the
4-tuple.

**Packet Numbers:** Monotonically increasing per connection. Used for ACK generation and loss
detection. Packet numbers are never reused (even for retransmissions, which get new numbers).

**Streams:** Unidirectional or bidirectional. HTTP/3 uses one bidirectional stream for the control
stream and unidirectional streams for request/response bodies.

**TLS 1.3 Integration:** QUIC uses TLS 1.3 for all cryptographic operations. The TLS handshake is
carried in QUIC CRYPTO frames. All QUIC packets (except Version Negotiation) are encrypted.

## HTTP/3 vs HTTP/2 Comparison

| Feature              | HTTP/2              | HTTP/3                      |
| -------------------- | ------------------- | --------------------------- |
| Transport            | TCP                 | QUIC (over UDP)             |
| Encryption           | TLS 1.2+ (optional) | TLS 1.3 (mandatory)         |
| Handshake RTT        | 2-3 RTT             | 1 RTT (0-RTT for repeat)    |
| HOL blocking         | TCP-level           | Eliminated                  |
| Connection migration | No                  | Yes                         |
| Header compression   | HPACK               | QPACK (RFC 9204)            |
| Stream multiplexing  | Yes                 | Yes                         |
| Server push          | Supported           | Supported (also deprecated) |
| Prioritization       | Weight/dependency   | Extensible prioritization   |
| Binary framing       | Yes                 | Yes (different format)      |

### QPACK Header Compression

QPACK is the HTTP/3 successor to HPACK. It uses the same static and dynamic table approach but fixes
a head-of-line blocking issue in HPACK: in HTTP/2, if the decoder needs a header from the dynamic
table that has not arrived yet (due to packet loss), all subsequent headers are blocked. QPACK
allows the decoder to proceed without waiting for the table update, using an encoded data stream
that can be processed independently.

## Alt-Svc Header (HTTP/3 Discovery)

The Alt-Svc (Alternative Service) header tells the client that the server is also available over a
different protocol, port, or host. This is the primary mechanism for HTTP/3 discovery.

```text
HTTP/2 response:
  alt-svc: h3=":443"; ma=2592000
```

This means: "This server is also available via HTTP/3 on port 443, and this information is valid for
2,592,000 seconds (30 days)."

The client can then attempt an HTTP/3 connection. If it succeeds, the client remembers and uses
HTTP/3 for future requests (for up to `ma` seconds). If it fails, the client falls back to HTTP/2.

```bash
# Check Alt-Svc header
curl -I https://cloudflare.com
# Look for: alt-svc: h3=":443"; ma=86400

# Test HTTP/3 with curl
curl --http3 https://cloudflare.com
```

## Migration Considerations

### Protocol Negotiation

HTTP/3 is discovered via Alt-Svc (from HTTP/2) or via DNS HTTPS/SVCB records (RFC 9460):

```text
_https.example.com.  IN  SVCB  1 altsvc.example.com.
  alpn="h3,h2"
  ipv4hint=93.184.216.1
```

### Fallback Strategy

Clients should always fall back gracefully:

```
1. Try HTTP/3 (if previously advertised via Alt-Svc or SVCB)
2. If HTTP/3 fails, fall back to HTTP/2
3. If HTTP/2 fails, fall back to HTTP/1.1
```

### CDN Support

Major CDNs support HTTP/3:

| CDN        | HTTP/3 Support | Alt-Svc Header      |
| ---------- | -------------- | ------------------- |
| Cloudflare | Yes (default)  | h3=":443"; ma=86400 |
| Fastly     | Yes            | h3=":443"; ma=86400 |
| Akamai     | Yes            | h3=":443"; ma=86400 |
| AWS CF     | Yes            | h3=":443"; ma=86400 |

### Browser Support

All modern browsers support HTTP/3:

- Chrome: Yes (since version 87, 2020)
- Firefox: Yes (since version 88, 2021)
- Safari: Yes (since version 14, 2020)
- Edge: Yes (Chromium-based, same as Chrome)

## Performance Implications

### Latency

HTTP/3's 1-RTT handshake (vs HTTP/2's 2-3 RTT) provides a measurable latency improvement for first
connections. For repeat connections with 0-RTT, the improvement is even more significant.

| Scenario             | HTTP/1.1             | HTTP/2             | HTTP/3                       |
| -------------------- | -------------------- | ------------------ | ---------------------------- |
| New connection       | 3 RTT                | 3 RTT              | 1 RTT                        |
| Repeat connection    | 1 RTT                | 1 RTT              | 0 RTT                        |
| Lost packet (mobile) | 1 RTT per connection | Blocks all streams | Only affected stream blocked |

### Throughput

HTTP/3 and HTTP/2 have similar throughput on low-loss networks. HTTP/3 is significantly better on
lossy networks (mobile, satellite) due to the elimination of TCP-level HOL blocking.

### Connection Setup Time

Measured over a 100ms RTT link:

| Protocol           | Setup Time    | Data First Byte |
| ------------------ | ------------- | --------------- |
| HTTP/1.1 + TLS 1.2 | 300ms (3 RTT) | 400ms (4 RTT)   |
| HTTP/2 + TLS 1.2   | 300ms (3 RTT) | 400ms (4 RTT)   |
| HTTP/3 (new)       | 100ms (1 RTT) | 200ms (2 RTT)   |
| HTTP/3 (repeat)    | 0ms (0-RTT)   | 100ms (1 RTT)   |

## HTTP/4 and Beyond

There is no formal HTTP/4 specification as of 2024. The IETF's QUIC working group and HTTP working
group are focused on:

- **Multipath QUIC:** Using multiple network paths simultaneously for a single connection (RFC 9185
  defines the extension framework)
- **Extended CONNECT:** HTTP/3 support for tunneling arbitrary protocols (RFC 9220)
- **WebTransport:** A framework for client-server communication using QUIC streams and datagrams
  (for gaming, real-time collaboration)
- **MASQUE:** Proxying over QUIC (RFC 9298), enabling better VPN and proxy performance

The trend is toward QUIC as the universal transport, with HTTP/3 as the primary application protocol
and WebTransport for specialized use cases.

## Practical Deployment

### nginx

```text
# Enable HTTP/2 (nginx 1.9.5+)
server {
    listen 443 ssl http2;
    ssl_certificate     /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
}

# HTTP/3 requires nginx with quic patch or nginx 1.25.0+
# (mainline with QUIC support)
server {
    listen 443 quic reuseport;
    listen 443 ssl;
    http2 on;
    ssl_certificate     /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;

    add_header Alt-Svc 'h3=":443"; ma=86400';
}
```

### Cloudflare

Cloudflare enables HTTP/3 by default for all zones on the Free plan and above. No configuration
needed -- just ensure your origin server supports HTTP/2 (Cloudflare handles the HTTP/3-to-origin
downgrade).

### Testing HTTP/3

```bash
# Check if a server supports HTTP/3
curl -I https://example.com 2>&1 | grep -i alt-svc

# Force HTTP/3
curl --http3 https://example.com

# Use quiche client (Google's QUIC implementation)
curl --quic https://example.com

# Use ngtcp2-based curl
curl --http3-only https://example.com
```

## Common Pitfalls

### 1. HTTP/2 Over HTTPS Only

All browsers implement HTTP/2 only over TLS (h2). The plaintext version (h2c) is defined in the spec
but not supported by browsers. If you configure HTTP/2 without TLS, browsers fall back to HTTP/1.1.

### 2. Flow Control Mismatches

If the client's initial window size is too small, the server cannot send data fast enough, causing
unnecessary stalls. If it is too large, the server can overwhelm the client's buffer. Most
implementations use the default (65,535 bytes) and rely on WINDOW_UPDATE to adjust.

### 3. Server Push Abuse

Over-pushing wastes bandwidth and can slow down the page load (pushed resources compete with
explicitly requested resources for bandwidth). In practice, server push should only be used for
critical resources that the client will definitely need (CSS, JS referenced in the HTML head) and
that are not already cached.

### 4. HTTP/3 and UDP Firewall Rules

HTTP/3 runs over UDP port 443. Many corporate firewalls block all UDP traffic except for DNS (port
53). If your users are behind restrictive firewalls, HTTP/3 will fail silently and fall back to
HTTP/2. Ensure UDP 443 is permitted.

### 5. Alt-Svc Caching Issues

The client caches the Alt-Svc information for the duration specified in the `ma` (max-age)
parameter. If you change your HTTP/3 configuration or disable it, clients will continue attempting
HTTP/3 for up to `ma` seconds. Set a short `ma` during transitions.

### 6. QUIC Connection Migration and Load Balancers

Traditional load balancers use the 4-tuple (source IP, source port, destination IP, destination
port) for session affinity. QUIC's connection migration changes the source IP and port, breaking
sticky sessions. Load balancers must support QUIC-aware session affinity (using the connection ID)
or use a consistent hashing algorithm.

### 7. Monitoring Blind Spots

HTTP/2 and HTTP/3 multiplexing makes per-request monitoring harder. A single TCP connection carries
hundreds of requests. Traditional monitoring tools that count connections may miss request-level
problems. Use application-level metrics (RED: Rate, Errors, Duration) and HTTP/2-aware access logs.

## HTTP/2 Frame Types

### DATA (0x0)

Carries the request or response body. DATA frames are associated with a stream and may be subject to
flow control.

```
+-----------------------------------------------+
|                Length (24)                      |
+---------------+---------------+---------------+
| 0 (8 bits)    | 0 (8 bits)    | END_STREAM (1)|
|               |               | + PADDED (1)  |
+---------------+---------------+---------------+
|                Stream Identifier (31)          |
+-----------------------------------------------+
|                Data (*)                        |
+-----------------------------------------------+
```

Flags:

- **END_STREAM (0x1):** This frame is the last frame the endpoint will send on this stream
- **PADDED (0x8):** Padding length and padding bytes follow the data

### HEADERS (0x1)

Carries request or response headers. May also carry the END_STREAM flag if the request has no body
(e.g., a GET request).

```
+-----------------------------------------------+
|                Length (24)                      |
+---------------+---------------+---------------+
| 1 (8 bits)    | END_HEADERS   | PRIORITY (1)  |
|               | (1)           | + PADDED (1)  |
|               |               | + END_STREAM  |
+---------------+---------------+---------------+
|                Stream Identifier (31)          |
+-----------------------------------------------+
|                HPACK-encoded headers (*)        |
+-----------------------------------------------+
```

### SETTINGS (0x4)

Sets connection-level parameters. Sent by both client and server. Each endpoint acknowledges the
other's SETTINGS with a SETTINGS_ACK frame.

### WINDOW_UPDATE (0x8)

Updates the flow control window for a stream or the entire connection. The payload is a 4-byte
unsigned integer indicating the window increment.

### PING (0x6)

A keepalive mechanism. The payload is 8 opaque bytes. The receiver must respond with a PING frame
containing the same payload. PING frames can be sent by either side at any time.

### RST_STREAM (0x3)

Abruptly terminates a stream. The payload is a 4-byte error code. After sending RST_STREAM, no
further frames can be sent on that stream.

Error codes:

| Code | Name                | Description                                     |
| ---- | ------------------- | ----------------------------------------------- |
| 0x0  | NO_ERROR            | Graceful shutdown                               |
| 0x1  | PROTOCOL_ERROR      | Protocol violation                              |
| 0x2  | INTERNAL_ERROR      | Internal error in the peer                      |
| 0x3  | FLOW_CONTROL_ERROR  | Flow control violation                          |
| 0x4  | SETTINGS_TIMEOUT    | SETTINGS ACK not received in time               |
| 0x5  | STREAM_CLOSED       | Frame received for a half-closed (local) stream |
| 0x6  | FRAME_SIZE_ERROR    | Frame too large                                 |
| 0x7  | REFUSED_STREAM      | Stream refused before processing                |
| 0x8  | CANCEL              | End-user canceled the stream                    |
| 0x9  | COMPRESSION_ERROR   | HPACK decoding failure                          |
| 0xa  | CONNECT_ERROR       | CONNECT frame error (for extended CONNECT)      |
| 0xb  | ENHANCE_YOUR_CALM   | Too many frames (stop sending so fast)          |
| 0xc  | INADEQUATE_SECURITY | TLS not acceptable                              |
| 0xd  | HTTP_1_1_REQUIRED   | Use HTTP/1.1 instead                            |

### GOAWAY (0x7)

Signals the end of the connection. The sender includes the last stream ID it will process and an
error code. Streams with IDs greater than the specified last stream ID are rejected.

```
Client sends streams: 1, 3, 5, 7, 9
Server sends GOAWAY with last_stream_id = 5

Result: streams 1, 3, 5 are processed normally
        streams 7, 9 may have been partially processed and should be retried
```

:::info

GOAWAY does not immediately terminate the connection. Existing streams can continue to complete. The
sender should continue processing streams with IDs less than or equal to `last_stream_id`. Only new
streams with IDs greater than `last_stream_id` are rejected.

:::

### PUSH_PROMISE (0x5)

Sent by the server to announce that it will push a resource. Contains the request headers for the
pushed resource and the stream ID that will be used for the push.

## HTTP/2 Flow Control Deep Dive

### Connection vs Stream Flow Control

HTTP/2 has two levels of flow control:

1. **Connection-level:** Limits the total amount of buffered data across all streams
2. **Stream-level:** Limits the amount of buffered data per stream

A sender must respect both limits. The effective window for a stream is:

```
effective_window = min(connection_window, stream_window)
```

### Initial Window Size

The default initial window size is 65,535 bytes (65535 = 2^16 - 1). This can be changed via the
SETTINGS frame's INITIAL_WINDOW_SIZE parameter.

:::warning

Changing INITIAL_WINDOW_SIZE affects only new streams, not existing ones. Existing streams continue
with their current window size. This can lead to confusion during the transition period.

:::

### Window Update Behavior

When the receiver consumes data (reads it from the buffer), it sends WINDOW_UPDATE to increase the
window. If the window reaches zero, the sender MUST stop sending. A zero window on a stream does not
affect other streams (unless the connection window is also zero).

### Flow Control and Push

Pushed streams are subject to flow control. The client can send WINDOW_UPDATE frames for pushed
streams, or RST_STREAM to reject a push.

## HTTP/3 Frame Format

HTTP/3 uses QUIC streams instead of HTTP/2's frame-based format. Each frame type has a 62-bit
variable length integer encoding:

```
Frame {
  Type (i),
  Length (i),
  Payload (..),
}
```

### HTTP/3 Frame Types

| Type | Name         | Description                                    |
| ---- | ------------ | ---------------------------------------------- |
| 0x00 | DATA         | Request or response body                       |
| 0x01 | HEADERS      | Request or response headers (QPACK compressed) |
| 0x04 | SETTINGS     | Connection parameters                          |
| 0x05 | PUSH_PROMISE | Server push promise                            |
| 0x06 | GOAWAY       | Connection shutdown                            |
| 0x07 | MAX_PUSH_ID  | Maximum push ID the client will accept         |
| 0x0d | GREASE       | For testing extensibility                      |
| 0x21 | CANCEL_PUSH  | Cancel a server push                           |
| 0x40 | RESERVED     | Reserved (was HTTP/2 SETTINGS)                 |
| 0x41 | CONNECT_IP   | Extended CONNECT for IP proxying               |
| 0x42 | CONNECT_UDP  | Extended CONNECT for UDP proxying              |

### Variable-Length Integer Encoding

HTTP/3 uses QUIC's variable-length integer encoding to save bytes:

| First 2 Bits | Length  | Usable Bits | Maximum Value             |
| ------------ | ------- | ----------- | ------------------------- |
| 00           | 1 byte  | 6           | 63                        |
| 01           | 2 bytes | 14          | 16,383                    |
| 10           | 4 bytes | 30          | 1,073,741,823             |
| 11           | 8 bytes | 62          | 4,611,686,018,427,387,903 |

Small values (common in practice) use fewer bytes. For example, a DATA frame with 50 bytes of
payload needs only 1 byte for the length field (50 fits in 6 bits), whereas HTTP/2 always uses 3
bytes.

## HTTP/2 and HTTP/3 Security Considerations

### HTTP/2 Connection Coalescing

HTTP/2 allows a client to coalesce multiple origins onto a single connection if they resolve to the
same IP address and present a valid TLS certificate for the connection's origin. An attacker who can
control a DNS response and obtain a wildcard or multi-SAN certificate could potentially coalesce
connections from unrelated origins onto a single connection, enabling cross-origin timing attacks.

Mitigation: browsers implement strict connection coalescing rules. Certificates must explicitly list
all coalescable origins. Wildcards do not match across subdomain boundaries.

### HTTP/3 and 0-RTT Replay

As mentioned earlier, 0-RTT data can be replayed. An attacker who captures a 0-RTT flight can replay
it to the server. The server has no way to distinguish a replay from a legitimate request.

Mitigations:

- Only use 0-RTT for idempotent operations (GET, HEAD)
- Use single-use tickets (server tracks used tickets)
- Limit the amount of 0-RTT data the server accepts

### HPACK Bomb

An attacker can craft a series of requests that cause the HPACK dynamic table to grow very large,
consuming server memory. The attacker sends headers with unique values that fill the dynamic table,
then sends many requests that reference the large table entries.

Mitigation: limit the maximum HPACK table size (HEADER_TABLE_SIZE setting) and enforce it strictly.

## Debugging HTTP/2 and HTTP/3

### curl with Verbose HTTP/2

```bash
# Verbose HTTP/2 output
curl -v --http2 https://example.com 2>&1 | head -50

# Show headers only
curl -I --http2 https://example.com

# Show all frames
curl --http2 -v https://example.com 2>&1
```

### nghttp (HTTP/2 Client/Server Tools)

```bash
# Show frames
nghttp -nv https://example.com

# Show HPACK dynamic table
nghttp -nv -H "accept-encoding: gzip" https://example.com

# HTTP/2 server
nghttpd -d /var/www/html 443 server.key server.crt
```

### quiche (HTTP/3)

```bash
# HTTP/3 client (quiche)
quiche-client https://example.com
```

### Wireshark Filters for HTTP/2

```text
# All HTTP/2 frames
http2

# Specific frame types
http2.type == 0    # DATA
http2.type == 1    # HEADERS
http2.type == 4    # SETTINGS
http2.type == 5    # PUSH_PROMISE
http2.type == 6    # PING
http2.type == 7    # GOAWAY
http2.type == 8    # WINDOW_UPDATE

# Specific streams
http2.streamid == 1

# HTTP/2 errors
http2.error_code == 2    # INTERNAL_ERROR
http2.error_code == 5    # FLOW_CONTROL_ERROR

# HTTP/3 (QUIC) filters
quic
http3
```

## HTTP/2 Header Table Size Attacks

### HPACK Bomb

An attacker can manipulate the HPACK dynamic table to consume excessive memory on the server. By
sending a sequence of requests with large, unique header values, the attacker forces the server to
store these values in the dynamic table, eventually consuming all available memory.

### Defense: Limit HEADER_TABLE_SIZE

Set a reasonable HEADER_TABLE_SIZE to limit the dynamic table:

```text
# nginx: limit HPACK table size
large_client_header_buffers 4 8k;
```

Most servers enforce a maximum header list size as well, which limits the total size of decoded
headers per request regardless of compression.

## HTTP/2 Priority Trees in Practice

### Dependency-Based Priority

HTTP/2 clients build a priority tree where streams depend on other streams. The root (stream 0) is
the implicit parent. Each stream has a weight (1-256) and an optional exclusive flag.

In practice, browser implementations vary:

- **Chrome:** Uses a simple scheme: HTML at weight 160, CSS/JS at weight 110, images at weight 40
- **Firefox:** Uses a more complex scheme based on resource type and loading order
- **Server implementations:** Most servers ignore the priority tree and use FIFO or round-robin

The HTTP/3 working group recognized that the dependency-based priority scheme was too complex and
replaced it with a simpler extensible priority scheme (RFC 9218) that uses absolute urgency values
and incremental priority updates.

## HTTP/2 Stream Lifecycle

```
idle -> reserved (local)  -- server sends PUSH_PROMISE
idle -> reserved (remote) -- client receives PUSH_PROMISE
idle -> open              -- client or server sends HEADERS
open -> half-closed (local)   -- endpoint sends END_STREAM
open -> half-closed (remote)  -- peer sends END_STREAM
half-closed (local) -> closed -- peer sends END_STREAM
half-closed (remote) -> closed -- endpoint sends END_STREAM
reserved (local) -> half-closed (remote) -- endpoint sends HEADERS
reserved (remote) -> half-closed (local) -- peer sends HEADERS
any -> closed -- endpoint sends RST_STREAM
any -> closed -- connection error (GOAWAY)
```

A stream in the `closed` state no longer exists on the endpoint. However, the peer may not know the
stream is closed if the close frame is lost. The endpoint must be prepared to receive frames for a
closed stream for a short time window (the maximum of the idle timeout and 3 RTTs).
