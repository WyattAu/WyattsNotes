---
id: http
title: HTTP
description:
  HTTP — Methods; Status Codes; Connection Management; Chunked Transfer Encoding
  with worked examples and exam-style questions.
slug: http
sidebar_position: 6
tags:
  - Networking
categories:
  - Networking
---

## Overview

HTTP (Hypertext Transfer Protocol) is the application-layer protocol that powers the World Wide Web.
Originally designed for retrieving hypertext documents (RFC 1945, HTTP/1.0 in 1996), it has evolved
into a general-purpose application protocol used for APIs, streaming, IoT communication, and
virtually every client-server interaction on the Internet.

This section covers HTTP/1.1 (RFC 9112), HTTP/2 (RFC 9113), HTTP/3 (RFC 9114), and the practical
aspects of deploying and debugging HTTP-based services.

## HTTP/1.1

HTTP/1.1 (originally RFC 2616, now obsoleted by RFC 9110-9114) is the foundational version of HTTP.
Despite being over 25 years old, it remains the most widely deployed version and is still the
default for many client-server interactions.

### Methods

HTTP defines methods that indicate the desired action on a resource:

| Method  | Idempotent | Safe | Cacheable   | Purpose                              |
| ------- | ---------- | ---- | ----------- | ------------------------------------ |
| GET     | Yes        | Yes  | Yes         | Retrieve a resource                  |
| HEAD    | Yes        | Yes  | Yes         | Retrieve headers only                |
| POST    | No         | No   | Conditional | Submit data for processing           |
| PUT     | Yes        | No   | No          | Replace a resource entirely          |
| DELETE  | Yes        | No   | No          | Remove a resource                    |
| PATCH   | No         | No   | No          | Partial modification of a resource   |
| OPTIONS | Yes        | Yes  | No          | Describe communication options       |
| TRACE   | Yes        | Yes  | No          | Loop-back test (rarely used)         |
| CONNECT | No         | No   | No          | Establish a tunnel (e.g., TLS proxy) |

**Idempotent:** Repeating the request produces the same result. `PUT /users/1` with the same payload
creates or replaces user 1 -- calling it multiple times has the same effect. `POST /users` creates a
new user each time.

**Safe:** Does not modify server state. `GET` should never have side effects (though in practice,
many APIs violate this).

```bash
# HTTP methods with curl
curl -X GET https://api.example.com/users/1
curl -X POST -H "Content-Type: application/json" -d '{"name":"Alice"}' https://api.example.com/users
curl -X PUT -H "Content-Type: application/json" -d '{"name":"Alice Updated"}' https://api.example.com/users/1
curl -X DELETE https://api.example.com/users/1
curl -X PATCH -H "Content-Type: application/json" -d '{"name":"Bob"}' https://api.example.com/users/1
curl -X OPTIONS https://api.example.com/users
curl -X HEAD https://api.example.com/users/1
```

### Status Codes

Status codes indicate the result of the request. They are grouped into five classes:

**1xx -- Informational:**

| Code | Meaning             | Use Case                            |
| ---- | ------------------- | ----------------------------------- |
| 100  | Continue            | Client should send the request body |
| 101  | Switching Protocols | Upgrading to WebSocket or HTTP/2    |

**2xx -- Success:**

| Code | Meaning         | Use Case                               |
| ---- | --------------- | -------------------------------------- |
| 200  | OK              | Standard success response              |
| 201  | Created         | Resource created (POST/PUT)            |
| 204  | No Content      | Success with no response body (DELETE) |
| 206  | Partial Content | Range request (resumable downloads)    |

**3xx -- Redirection:**

| Code | Meaning            | Use Case                                           |
| ---- | ------------------ | -------------------------------------------------- |
| 301  | Moved Permanently  | Resource has a new permanent URL                   |
| 302  | Found              | Temporary redirect (method may change to GET)      |
| 303  | See Other          | Response is at another URI (method changes to GET) |
| 304  | Not Modified       | Cached version is still valid                      |
| 307  | Temporary Redirect | Temporary redirect (method preserved)              |
| 308  | Permanent Redirect | Permanent redirect (method preserved)              |

:::warning

The distinction between 301/302 and 307/308 matters for methods. 301 and 302 allow the client to
change the method from POST to GET on redirect. 307 and 308 preserve the original method. If you
redirect a POST request, use 307/308 unless you explicitly want the method changed.

:::

**4xx -- Client Errors:**

| Code | Meaning                | Use Case                                 |
| ---- | ---------------------- | ---------------------------------------- |
| 400  | Bad Request            | Malformed request syntax                 |
| 401  | Unauthorized           | Authentication required                  |
| 403  | Forbidden              | Authenticated but not authorized         |
| 404  | Not Found              | Resource does not exist                  |
| 405  | Method Not Allowed     | Method not supported for this resource   |
| 408  | Request Timeout        | Server timed out waiting for the request |
| 409  | Conflict               | Request conflicts with current state     |
| 413  | Payload Too Large      | Request body exceeds server limit        |
| 415  | Unsupported Media Type | Content-Type not supported               |
| 422  | Unprocessable Entity   | Valid syntax but semantic errors         |
| 429  | Too Many Requests      | Rate limiting                            |

**5xx -- Server Errors:**

| Code | Meaning               | Use Case                                     |
| ---- | --------------------- | -------------------------------------------- |
| 500  | Internal Server Error | Unhandled server exception                   |
| 502  | Bad Gateway           | Upstream server returned an invalid response |
| 503  | Service Unavailable   | Server overloaded or in maintenance          |
| 504  | Gateway Timeout       | Upstream server did not respond in time      |
| 507  | Insufficient Storage  | Server cannot store the representation       |

### Key HTTP/1.1 Headers

**Request Headers:**

| Header              | Purpose                                                                             |
| ------------------- | ----------------------------------------------------------------------------------- |
| `Host`              | Required in HTTP/1.1. Identifies the target host and port. Enables virtual hosting. |
| `User-Agent`        | Client software identification                                                      |
| `Accept`            | Expected response content types                                                     |
| `Content-Type`      | Media type of the request body                                                      |
| `Content-Length`    | Size of the request body in bytes                                                   |
| `Authorization`     | Authentication credentials                                                          |
| `If-None-Match`     | ETag for conditional requests                                                       |
| `If-Modified-Since` | Timestamp for conditional requests                                                  |
| `Range`             | Request a subset of the resource                                                    |
| `Origin`            | Indicates the origin of the cross-origin request (CORS)                             |

**Response Headers:**

| Header                      | Purpose                                            |
| --------------------------- | -------------------------------------------------- |
| `Content-Type`              | Media type of the response body                    |
| `Content-Length`            | Size of the response body in bytes                 |
| `Content-Encoding`          | Encoding applied to the body (gzip, br, deflate)   |
| `Cache-Control`             | Directives for caching                             |
| `ETag`                      | Opaque identifier for the response content version |
| `Last-Modified`             | Timestamp of the last modification                 |
| `Set-Cookie`                | Instructs the client to store a cookie             |
| `Location`                  | URL for redirection (3xx responses)                |
| `Server`                    | Server software identification                     |
| `Strict-Transport-Security` | Force HTTPS (HSTS)                                 |
| `X-Request-ID`              | Unique identifier for the request (for tracing)    |

### Connection Management

**Persistent Connections (Keep-Alive):**

HTTP/1.0 opened a new TCP connection for every request. HTTP/1.1 makes persistent connections the
default -- a single TCP connection can serve multiple requests and responses. This eliminates TCP
handshake overhead for subsequent requests.

```
Connection: keep-alive    (HTTP/1.0, explicit)
Connection: close         (either version, close after response)
```

In HTTP/1.1, connections are persistent by default. The client or server sends `Connection: close`
to signal that the connection should be closed after the response.

**Pipelining (RFC 7230):** HTTP/1.1 pipelining allows the client to send multiple requests without
waiting for responses. The server must respond in order. Pipelining was never widely implemented due
to head-of-line blocking (a slow response blocks all subsequent responses) and is deprecated in
practice.

### Chunked Transfer Encoding

When the server does not know the response size in advance (e.g., streaming data, dynamic content),
it uses chunked encoding:

```
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

4\r\n
Wiki\r\n
5\r\n
pedia\r\n
0\r\n
\r\n
```

Each chunk starts with its size in hexadecimal, followed by `\r\n`, the data, and `\r\n`. A
zero-size chunk terminates the transfer.

### HTTP/1.1 Limitations

1. **Head-of-line blocking:** Only one request/response can be in flight at a time on a connection.
   A slow response blocks all subsequent requests. Workaround: open 6+ connections (browsers do
   this), but this increases resource usage.
2. **Verbose headers:** ASCII headers are uncompressed and repeated across requests on the same
   connection.
3. **No server push:** The server cannot proactively send data to the client (beyond the response to
   a request).
4. **No multiplexing:** Multiple requests require multiple TCP connections, each with its own
   congestion control state and TLS handshake.

## HTTP/2

HTTP/2 (RFC 9113, originally RFC 7540) addresses the limitations of HTTP/1.1 while maintaining the
same semantics (methods, status codes, headers, URIs). The wire format is completely different.

### Binary Framing

HTTP/2 is a binary protocol. All communication is performed in binary frames. There are 10 frame
types:

| Frame Type    | Purpose                                                        |
| ------------- | -------------------------------------------------------------- |
| DATA          | Carries request/response body content                          |
| HEADERS       | Carries request/response headers                               |
| PRIORITY      | Specifies stream priority                                      |
| RST_STREAM    | Aborts a stream                                                |
| SETTINGS      | Configures connection parameters                               |
| PUSH_PROMISE  | Server push notification                                       |
| PING          | Measures RTT and keepalive                                     |
| GOAWAY        | Graceful shutdown of the connection                            |
| WINDOW_UPDATE | Advertises flow control credits                                |
| CONTINUATION  | Continues a header block that did not fit in one HEADERS frame |

### Streams and Multiplexing

HTTP/2 introduces **streams** -- independent, bidirectional sequences of frames within a single TCP
connection. Multiple streams can be interleaved on the same connection, eliminating HTTP/1.1's
head-of-line blocking at the application layer.

Each stream is identified by a 31-bit integer. Client-initiated streams use odd numbers;
server-initiated streams use even numbers. Streams have three states: idle, open (local or remote),
half-closed (local or remote), and closed.

```mermaid
sequenceDiagram
    participant C as Client
    participant S as Server

    Note over C,S: Single TCP connection

    C->>S: HEADERS [stream 1]: GET /style.css
    C->>S: HEADERS [stream 3]: GET /script.js
    C->>S: HEADERS [stream 5]: GET /api/data

    S->>C: HEADERS [stream 1]: 200 OK
    S->>C: DATA [stream 1]: CSS content
    S->>C: HEADERS [stream 5]: 200 OK
    S->>C: DATA [stream 5]: JSON data
    S->>C: HEADERS [stream 3]: 200 OK
    S->>C: DATA [stream 3]: JS content
```

### Header Compression (HPACK)

HTTP/1.1 sends headers as uncompressed ASCII text, repeating the same headers on every request.
HPACK (RFC 7541) compresses headers using:

1. **Static table:** 61 pre-defined common header fields (e.g., `:method: GET`, `:path: /`,
   `user-agent`, `accept-encoding`).
2. **Dynamic table:** Previously sent headers are stored in a FIFO buffer and referenced by index.
3. **Huffman coding:** String values are encoded using Huffman coding for additional compression.

HPACK is critical for performance. A typical HTTP/2 request with common headers (User-Agent, Accept,
Accept-Encoding, etc.) that would be ~500 bytes in HTTP/1.1 can be compressed to ~50-100 bytes with
HPACK.

### Server Push

HTTP/2 allows the server to proactively send resources to the client before they are requested. The
server sends a `PUSH_PROMISE` frame containing the headers of the promised resource, followed by the
response.

```
Client: GET /index.html
Server: 200 OK (index.html)
Server: PUSH_PROMISE: GET /style.css
Server: 200 OK (style.css)
Server: PUSH_PROMISE: GET /script.js
Server: 200 OK (script.js)
```

Server push was intended to reduce latency by pre-loading assets, but it has been largely
deprecated. Chrome removed support for server push in 2022. The issues include:

1. **Cache duplication:** Pushed resources may already be in the browser cache, wasting bandwidth.
2. **Prioritization complexity:** Pushed resources compete with explicitly requested resources for
   bandwidth.
3. **Resource management:** Servers can push resources the client does not need.

Use `&lt;link rel="preload"&gt;` hints instead, which let the client decide what to fetch.

### Flow Control

HTTP/2 implements flow control at the stream and connection levels. Each endpoint advertises an
initial window size (default: 65,535 bytes). The sender must not send more data than the receiver's
window allows. `WINDOW_UPDATE` frames increase the available window.

This prevents a fast sender from overwhelming a slow receiver, which is particularly important with
multiplexing (many streams competing for the same connection).

### Stream Priority

HTTP/2 allows clients to assign priorities to streams using `PRIORITY` frames and priority fields in
`HEADERS` frames. Each stream has a weight (1-256) and a dependency on another stream. This allows
the server to allocate bandwidth based on client preferences (e.g., prioritize CSS over images).

### TCP Head-of-Line Blocking Persists

HTTP/2 eliminates application-layer head-of-line blocking (multiple streams can be interleaved), but
**TCP head-of-line blocking remains**. Because HTTP/2 runs over TCP, a single lost TCP segment
blocks delivery of all streams on that connection until the segment is retransmitted. On lossy
networks (mobile, long-haul), this can make HTTP/2 slower than HTTP/1.1 with multiple connections.

This is the primary motivation for HTTP/3.

## HTTP/3

HTTP/3 (RFC 9114) replaces TCP with QUIC as the transport layer. QUIC is built on UDP and provides
reliability, ordering, congestion control, and built-in encryption (TLS 1.3).

### Key Improvements over HTTP/2

1. **No TCP head-of-line blocking.** QUIC delivers packets from independent streams independently. A
   lost packet in stream A does not block delivery of packets in stream B. This is the most
   significant improvement over HTTP/2.

2. **0-RTT connection establishment.** QUIC combines the transport and TLS handshakes, allowing the
   client to send data on the first flight (using pre-shared session information). With TCP + TLS
   1.3, this takes 1-RTT; with QUIC, it takes 0-RTT on repeat connections.

3. **Connection migration.** QUIC uses connection IDs instead of IP:port 4-tuples. When a client's
   IP address changes (Wi-Fi to cellular, roaming), the connection survives. TCP connections break
   on IP changes.

4. **User-space implementation.** QUIC is implemented in user space, allowing faster iteration and
   deployment without kernel changes. This is particularly important for protocol evolution.

### HTTP/3 Frame Types

HTTP/3 defines a new set of frame types carried within QUIC streams:

| Frame Type     | Purpose                                             |
| -------------- | --------------------------------------------------- |
| DATA           | Carries request/response body                       |
| HEADERS        | Carries request/response headers (QPACK compressed) |
| CANCEL_PUSH    | Cancels a pushed resource                           |
| SETTINGS       | Configuration parameters                            |
| PUSH_PROMISE   | Server push                                         |
| GOAWAY         | Graceful shutdown                                   |
| MAX_PUSH_ID    | Limits the number of push IDs                       |
| RETRY_PRIORITY | Adjusts stream priority                             |

### QPACK (Header Compression for HTTP/3)

QPACK is the successor to HPACK, designed for the QUIC transport. It addresses HPACK's head-of-line
blocking issue -- in HTTP/2, a lost header frame blocks all subsequent streams because the decoder
needs the lost frame to update its dynamic table. QPACK allows the encoder and decoder to continue
processing independently by referencing the dynamic table without requiring in-order delivery.

### Deployment Status

HTTP/3 adoption is growing rapidly:

- **Supported by:** Chrome, Firefox, Safari, Edge, curl, nginx, Cloudflare, Fastly, Google
- **Not supported by:** Some older CDN configurations, legacy load balancers, some enterprise
  proxies
- **QUIC on UDP:** Requires UDP port 443 to be open. Some firewalls block non-TCP traffic on port
  443, which breaks HTTP/3.

```bash
# Check if a server supports HTTP/3
curl --http3 https://www.cloudflare.com
curl -I --alt-svc https://www.google.com  # Look for Alt-Svc header
```

## Caching

HTTP caching is one of the most important performance mechanisms. Proper caching configuration
reduces latency, server load, and bandwidth consumption.

### Cache-Control Directives

The `Cache-Control` header controls caching behavior. It is the most important header for caching
configuration.

**Request directives:**

| Directive        | Meaning                                                                 |
| ---------------- | ----------------------------------------------------------------------- |
| `no-cache`       | Always validate with the origin server before using a cached response   |
| `no-store`       | Do not store any part of the request or response                        |
| `max-age=60`     | Accept cached responses no older than 60 seconds                        |
| `max-stale=30`   | Accept cached responses up to 30 seconds past their expiration          |
| `min-fresh=10`   | Accept cached responses that will be fresh for at least 10 more seconds |
| `only-if-cached` | Only use cached responses; do not validate or fetch from origin         |

**Response directives:**

| Directive                    | Meaning                                                        |
| ---------------------------- | -------------------------------------------------------------- |
| `public`                     | Any cache (including CDNs and proxies) may store this response |
| `private`                    | Only the browser may cache this response                       |
| `no-cache`                   | Cache must validate with the origin before using the response  |
| `no-store`                   | Do not store any part of the response                          |
| `max-age=3600`               | Cache for 3600 seconds (1 hour)                                |
| `s-maxage=300`               | Override max-age for shared caches (CDNs, proxies)             |
| `must-revalidate`            | Once stale, must validate before use (do not serve stale)      |
| `stale-while-revalidate=600` | Serve stale response while revalidating in background          |
| `immutable`                  | Response will never change during max-age; do not revalidate   |

### Conditional Requests

Conditional requests allow the client to validate whether a cached response is still fresh without
re-downloading the full content.

**ETag (Entity Tag):**

The server includes an `ETag` header with a unique identifier for the response content:

```
HTTP/1.1 200 OK
ETag: "abc123"
Cache-Control: max-age=3600
```

When the cache expires, the client sends the ETag back in an `If-None-Match` header:

```
GET /resource HTTP/1.1
If-None-Match: "abc123"
```

If the content has not changed, the server responds with `304 Not Modified` (no body):

```
HTTP/1.1 304 Not Modified
ETag: "abc123"
```

**Last-Modified:**

Similar mechanism using timestamps:

```
GET /resource HTTP/1.1
If-Modified-Since: Wed, 01 Jan 2024 00:00:00 GMT

HTTP/1.1 304 Not Modified
```

### Vary Header

The `Vary` header tells caches which request headers affect the response content. A response with
`Vary: Accept-Encoding` means the cache must store separate entries for different `Accept-Encoding`
values (e.g., one for gzip, one for br).

```
Vary: Accept-Encoding, Origin
```

:::warning

Misconfigured `Vary` headers are a common source of caching bugs. If `Vary: *` is set, the response
is never cached. If `Vary` omits a header that affects the response (e.g., `Vary: Accept-Encoding`
but the response varies by `Origin`), the wrong content may be served to different users.

:::

## Cookies and Sessions

Cookies are the primary mechanism for maintaining state across HTTP requests. The server sends
cookies to the client via the `Set-Cookie` header, and the client includes them in subsequent
requests via the `Cookie` header.

```
Set-Cookie: session_id=abc123; Path=/; Secure; HttpOnly; SameSite=Strict; Max-Age=3600
```

**Cookie attributes:**

| Attribute             | Purpose                                           |
| --------------------- | ------------------------------------------------- |
| `Secure`              | Only sent over HTTPS                              |
| `HttpOnly`            | Not accessible to JavaScript (prevents XSS theft) |
| `SameSite=Strict`     | Only sent with same-site requests (prevents CSRF) |
| `SameSite=Lax`        | Sent with top-level navigation GET requests       |
| `SameSite=None`       | Sent with cross-site requests (requires `Secure`) |
| `Path=/`              | Scoped to the given path                          |
| `Domain=.example.com` | Shared across subdomains                          |
| `Max-Age=3600`        | Expires in 3600 seconds                           |
| `Expires=...`         | Absolute expiration date                          |

:::warning

Always set `Secure`, `HttpOnly`, and `SameSite` on session cookies. Failing to set `HttpOnly` allows
XSS attacks to steal session tokens. Failing to set `SameSite` allows CSRF attacks.

:::

## CORS (Cross-Origin Resource Sharing)

CORS (RFC 6454) controls which origins are allowed to access resources. Browsers enforce the
Same-Origin Policy, which blocks cross-origin requests by default. CORS headers allow the server to
opt-in to cross-origin access.

**Preflight request:** For non-simple requests (e.g., with custom headers or methods other than
GET/HEAD/POST), the browser sends an `OPTIONS` request first:

```
OPTIONS /api/data HTTP/1.1
Origin: https://example.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Content-Type, Authorization
```

The server responds with CORS headers:

```
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Max-Age: 3600
```

## Content Negotiation

HTTP supports content negotiation through several mechanisms:

- **Accept:** Client specifies preferred response formats:
  `Accept: application/json, text/html;q=0.9`
- **Accept-Encoding:** Client specifies preferred encodings:
  `Accept-Encoding: gzip, deflate, br;q=0.9, *;q=0.8`
- **Accept-Language:** Client specifies preferred languages: `Accept-Language: en-US, en;q=0.9`
- **Content-Type:** Request/response body format

The `q` parameter (quality factor, 0.000 to 1.000, default 1.0) indicates preference ordering.

## HTTP Authentication

**Basic Authentication (RFC 7617):** Sends credentials in plaintext (base64-encoded) with every
request.

```
Authorization: Basic dXNlcjpwYXNzd29yZA==
```

Insecure unless used over HTTPS. Base64 is encoding, not encryption.

**Bearer Token (RFC 6750):** Used with OAuth 2.0. The client sends an opaque access token.

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Digest Authentication (RFC 7616):** Challenge-response mechanism. More secure than Basic but
rarely used in practice.

## REST Principles

REST (Representational State Transfer) is an architectural style for web APIs, not a protocol. The
key constraints:

1. **Client-server architecture:** Separation of concerns between client and server.
2. **Stateless:** Each request contains all information needed to process it. No server-side session
   state.
3. **Cacheable:** Responses must define themselves as cacheable or non-cacheable.
4. **Uniform interface:** Resources identified by URIs, manipulated via standard HTTP methods.
5. **Layered system:** Client cannot tell if it is connected to the end server or an intermediary.
6. **Code on demand (optional):** Servers can extend client functionality by sending executable code
   (e.g., JavaScript).

**RESTful API design:**

```
GET    /users          -- List users
GET    /users/1        -- Get user 1
POST   /users          -- Create user
PUT    /users/1        -- Replace user 1
PATCH  /users/1        -- Partially update user 1
DELETE /users/1        -- Delete user 1
GET    /users/1/posts  -- List posts by user 1
```

## Common Pitfalls

1. **Not using persistent connections.** Opening a new TCP connection (and TLS handshake) for every
   request is extremely expensive. Ensure your HTTP client uses keep-alive. Connection pooling is
   essential for API performance.

2. **Incorrect timeout configuration.** HTTP clients without timeouts can hang indefinitely. Set
   connect timeout (5 seconds), read timeout (30 seconds), and total timeout (60 seconds). Use
   exponential backoff for retries, not fixed intervals.

3. **Ignoring HTTP/2 server push issues.** Server push can cause cache duplication and waste
   bandwidth. Most implementations have moved away from it. If you enable it, monitor push
   effectiveness and disable it if it does not improve performance.

4. **Caching misconfigurations.** Caching sensitive data (personal information, API responses with
   user-specific data) without proper `Cache-Control` headers can leak data between users. Always
   set `Cache-Control: private` or `Cache-Control: no-store` on sensitive responses.

5. **Status code misuse.** Using 200 for everything makes error handling impossible. Use appropriate
   status codes: 201 for creation, 204 for successful deletion, 400 for client errors, 404 for
   missing resources, 409 for conflicts, 422 for validation errors, 500 for server errors.

6. **Large request bodies without streaming.** Loading entire request/response bodies into memory
   causes OOM on large files. Stream bodies to disk for uploads/downloads exceeding available
   memory.

7. **Missing CORS preflight caching.** The `Access-Control-Max-Age` header controls how long the
   browser caches preflight responses. Without it, the browser sends an OPTIONS request before every
   cross-origin request, doubling latency.

8. **Cookie scope misconfiguration.** Setting `Domain=.example.com` on a session cookie shares it
   with all subdomains, including potentially compromised ones. Set the narrowest possible scope.

## HTTP Performance Optimization

### Connection Management

HTTP/1.1 persistent connections eliminate the TCP handshake overhead for subsequent requests. But a
single connection serializes requests (no pipelining in practice). Browsers open 6 connections per
origin (HTTP/1.1) to parallelize requests, which increases resource usage on both client and server.

HTTP/2 eliminates this limitation with multiplexing -- a single TCP connection can serve multiple
concurrent requests. This reduces the number of TCP connections, which is especially important for
TLS (each connection requires a handshake).

### Request Batching and Pipelining

If you cannot use HTTP/2, batch multiple operations into a single request:

```json
POST /batch
{
  "operations": [
    {"method": "GET", "path": "/users/1"},
    {"method": "GET", "path": "/users/2"},
    {"method": "GET", "path": "/users/3"}
  ]
}
```

This is not a standard HTTP feature but is implemented by some APIs (e.g., GraphQL, JSON:API
batching, Microsoft Graph batch). It reduces the number of HTTP round trips.

### Prefetching and Preloading

```html
<!-- Preload critical resources -->
<link rel="preload" href="/css/style.css" as="style" />
<link rel="preload" href="/js/app.js" as="script" />
<link rel="preload" href="/fonts/main.woff2" as="font" crossorigin />

<!-- Prefetch resources for the next navigation -->
<link rel="prefetch" href="/next-page.js" />

<!-- DNS prefetch for third-party origins -->
<link rel="dns-prefetch" href="//cdn.example.com" />

<!-- Preconnect (DNS + TCP + TLS handshake) -->
<link rel="preconnect" href="https://api.example.com" crossorigin />
```

### HTTP/2 Server Push (Deprecated)

HTTP/2 server push allows the server to proactively send resources before the client requests them.
As noted earlier, this feature has been deprecated due to poor cache interaction and difficulty
controlling priority. Use `&lt;link rel="preload"&gt;` instead.

### Compression

HTTP supports content encoding to reduce payload size:

```
Content-Encoding: gzip      # Most widely supported, 60-80% reduction on text
Content-Encoding: br        # Brotli, 15-25% better than gzip, supported by modern browsers
Content-Encoding: deflate   # zlib, less efficient than gzip, rarely used
Content-Encoding: zstd      # Zstandard, better compression speed, growing support
```

For HTTPS connections, TLS-level compression should be disabled (CRIME/BREACH attacks exploit the
fact that compressed data leaks information about plaintext patterns through side channels).

```bash
# Test compression with curl
curl -H "Accept-Encoding: gzip, br, deflate" -sI https://example.com | grep content-encoding

# Enable gzip in nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_min_length 256;
```

## HTTP Security Headers

Security headers instruct browsers to enable or disable certain security features:

| Header                         | Purpose                                 | Example                                                 |
| ------------------------------ | --------------------------------------- | ------------------------------------------------------- |
| `Strict-Transport-Security`    | Force HTTPS                             | `max-age=31536000; includeSubDomains; preload`          |
| `Content-Security-Policy`      | Control resource loading                | `default-src 'self'; script-src 'self' 'unsafe-inline'` |
| `X-Content-Type-Options`       | Prevent MIME sniffing                   | `nosniff`                                               |
| `X-Frame-Options`              | Prevent clickjacking                    | `DENY` or `SAMEORIGIN`                                  |
| `X-XSS-Protection`             | Enable XSS filter (deprecated)          | `0` (disable, use CSP instead)                          |
| `Referrer-Policy`              | Control referrer header                 | `strict-origin-when-cross-origin`                       |
| `Permissions-Policy`           | Control browser features                | `camera=(), microphone=(), geolocation=()`              |
| `Cross-Origin-Opener-Policy`   | Isolate browsing context                | `same-origin`                                           |
| `Cross-Origin-Resource-Policy` | Control cross-origin resource sharing   | `same-origin`                                           |
| `Cross-Origin-Embedder-Policy` | Control cross-origin resource embedding | `require-corp`                                          |

```bash
# Check security headers
curl -sI https://example.com | grep -iE "strict-transport|content-security|x-content-type|x-frame|referrer-policy|permissions-policy"
```

## HTTP/2 and HTTP/3 Protocol Negotiation

### ALPN (Application-Layer Protocol Negotiation)

ALPN (RFC 7301) is a TLS extension that allows the client and server to negotiate the application
protocol during the TLS handshake. This eliminates an extra round trip compared to separate protocol
negotiation after the TLS handshake.

```
ClientHello:
  ALPN: h2, http/1.1

ServerHello:
  ALPN: h2
```

Without ALPN, the client would complete the TLS handshake, then send an HTTP request, and the server
would respond with an Upgrade or redirect. ALPN negotiates the protocol during the handshake, saving
a round trip.

### Alt-Svc Header

The `Alt-Svc` (Alternative Service) header informs the client that the service is also available
over a different protocol or port:

```
Alt-Svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400
```

This tells the client: "HTTP/3 is available on port 443, and this information is valid for 86400
seconds." The client can then attempt to connect via HTTP/3 and fall back to HTTP/2 if it fails.

```bash
# Check if a server advertises HTTP/3
curl -sI https://www.google.com | grep alt-svc
# Alt-Svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
```

## HTTP Debugging

### Verbose Request/Response

```bash
# Show complete request and response headers
curl -v https://api.example.com/users/1

# Show timing for each phase
curl -w "DNS: %{time_namelookup}s\nTCP: %{time_connect}s\nTLS: %{time_appconnect}s\nTTFB: %{time_starttransfer}s\nTotal: %{time_total}s\n" \
  -o /dev/null -s https://example.com

# Show response headers only
curl -sI https://example.com

# Follow redirects with verbose output
curl -vL https://example.com

# Show request headers that would be sent
curl -sI --resolve example.com:443:127.0.0.1 https://example.com
```

### Testing with Different Methods

```bash
# POST with file upload
curl -X POST -F "file=@document.pdf" https://example.com/upload

# PUT with binary data
curl -X PUT --data-binary @image.png https://example.com/images/photo.png

# PATCH with JSON
curl -X PATCH -H "Content-Type: application/json" \
  -d '{"field": "new_value"}' https://api.example.com/resource/1

# DELETE with confirmation
curl -X DELETE -w "%{http_code}" -o /dev/null -s https://api.example.com/resource/1
```

### Testing Conditional Requests

```bash
# First request to get the ETag
ETAG=$(curl -sI https://example.com/resource | grep -i etag | awk '{print $2}' | tr -d '\r')

# Conditional request with If-None-Match
curl -I -H "If-None-Match: $ETAG" https://example.com/resource
# Should return 304 Not Modified

# Conditional request with If-Modified-Since
curl -I -H "If-Modified-Since: Wed, 01 Jan 2024 00:00:00 GMT" https://example.com/resource
```

### Benchmarking HTTP Servers

```bash
# Apache Bench (ab)
ab -n 1000 -c 100 https://example.com/

# wrk (modern alternative)
wrk -t4 -c100 -d30s https://example.com/

# hey (Go-based, similar to ab)
hey -n 1000 -c 100 https://example.com/
```

## WebSocket

WebSocket (RFC 6455) provides full-duplex communication over a single TCP connection. It upgrades an
HTTP connection to a WebSocket connection:

```
GET /chat HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13

HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

After the upgrade, the connection is no longer HTTP. Both sides can send frames (text or binary) at
any time. WebSocket is used for chat applications, real-time notifications, gaming, and
collaborative editing.

WebSocket frames have a 2-14 byte header (depending on payload length) and support fragmentation,
ping/pong keepalive, and close handshake. The connection is secured by using `wss://` (WebSocket
over TLS).

:::warning

WebSocket connections bypass HTTP caching, CORS, and many security controls. Use WebSocket only when
you need persistent, low-latency, bidirectional communication. For periodic updates, Server- Sent
Events (SSE) are simpler and work over standard HTTP.

:::

## Server-Sent Events (SSE)

SSE is a one-way (server-to-client) streaming protocol over HTTP. The server sends events as
text/event-stream responses:

```
HTTP/1.1 200 OK
Content-Type: text/event-stream
Cache-Control: no-cache
Connection: keep-alive

data: {"type": "update", "value": 42}

data: {"type": "notification", "message": "New message"}

id: 123
event: custom-event
data: {"key": "value"}

retry: 3000
```

SSE advantages over WebSocket:

- Works over standard HTTP (no upgrade needed)
- Automatic reconnection built into the spec
- Works with HTTP/2 multiplexing
- Simpler to implement and debug
- Supported by all modern browsers

SSE limitations:

- One-way only (server to client)
- Text-based (binary data requires base64 encoding)
- Limited to 6 concurrent SSE connections per origin in some browsers

```javascript
// Client-side SSE
const source = new EventSource('/events');
source.onmessage = (event) => console.log(event.data);
source.addEventListener('custom-event', (event) => console.log(event));
source.onerror = () => console.log('Connection lost, auto-reconnecting...');
```
