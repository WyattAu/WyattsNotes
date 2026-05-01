---
title: Setup Traefik
description:
  Setup Traefik — Why Traefik; Prerequisites; Traefik Concepts; Docker Compose
  Deployment with worked examples and exam-style questions.
date: 2025-07-21T18:30:46.381Z
tags:
  - truenas
categories:
  - truenas
slug: setup-traefik
---

## Why Traefik

Traefik is a modern HTTP reverse proxy and load balancer designed for microservices and
containerized environments. Key advantages over alternatives:

| Feature                           | Traefik                            | Nginx Proxy Manager   | Caddy            |
| --------------------------------- | ---------------------------------- | --------------------- | ---------------- |
| Auto-discovery from Docker labels | Yes (native)                       | No (manual UI)        | Yes (via plugin) |
| TLS certificate management        | Built-in ACME                      | Built-in (UI)         | Built-in         |
| Configuration method              | Labels, file, CLI                  | Web UI                | Caddyfile        |
| Dynamic routing                   | Automatic on container start       | Manual per proxy host | Automatic        |
| Learning curve                    | Medium                             | Low                   | Low              |
| Dashboard                         | Built-in                           | Built-in              | No               |
| Docker Compose integration        | Excellent (labels on each service) | Separate container    | Good             |

Traefik shines in a homelab because it eliminates manual proxy configuration. When you start a new
container with the right labels, Traefik picks it up and routes traffic immediately — no restart, no
config file editing, no UI clicking.

## Prerequisites

- TrueNAS SCALE with Apps/Docker support enabled
- A DDNS domain pointing to your public IP (Cloudflare, DuckDNS, No-IP, etc.)
- ISP ports 80 and 443 forwarded to your TrueNAS server (or the machine running Traefik)
- A Docker runtime (TrueNAS SCALE Apps, or Docker Compose via Portainer/Dockge)

## Traefik Concepts

Before deploying, understand the core routing model:

- **Routers**: Define how requests reach your services (host-based, path-based, etc.)
- **Middlewares**: Modify requests before they reach services (authentication, headers, rate
  limiting, compression)
- **Services**: Define the backend (container IP + port)
- **EntryPoints**: Listening ports (80 for HTTP, 443 for HTTPS, 8080 for dashboard)
- **Providers**: Sources of configuration (Docker labels, file provider, etc.)
- **TLS Stores/Certificates**: Managed by ACME (Let's Encrypt) with automatic renewal

## Docker Compose Deployment

This is the recommended way to run Traefik on TrueNAS SCALE. Store this compose file in a dataset
accessible to your Docker runtime.

Create the directory structure on your TrueNAS:

```bash
mkdir -p /mnt/tank/apps/traefik/{config,dynamic,certs}
```

### docker-compose.yml

```yaml
services:
  traefik:
    image: traefik:v3.2
    container_name: traefik
    restart: unless-stopped
    security_opt:
      - no-new-privileges:true
    ports:
      - '80:80'
      - '443:443'
      - '8080:8080'
    command:
      - '--api.insecure=true'
      - '--api.dashboard=true'
      - '--providers.docker=true'
      - '--providers.docker.exposedbydefault=false'
      - '--providers.docker.network=proxy-network'
      - '--providers.file.filename=/dynamic-config.yml'
      - '--entrypoints.web.address=:80'
      - '--entrypoints.websecure.address=:443'
      - '--entrypoints.traefik.address=:8080'
      - '--certificatesresolvers.letsencrypt.acme.tlschallenge=true'
      - '--certificatesresolvers.letsencrypt.acme.email=your-email@example.com'
      - '--certificatesresolvers.letsencrypt.acme.storage=/letsencrypt/acme.json'
      - '--log.level=INFO'
      - '--accesslog=true'
      - '--accesslog.filepath=/var/log/traefik/access.log'
      - '--serversTransport.insecureSkipVerify=true'
    networks:
      - proxy-network
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - traefik-certs:/letsencrypt
      - ./dynamic:/dynamic-config.yml:ro
    labels:
      - 'traefik.enable=true'
      - 'traefik.http.routers.traefik.rule=Host(`traefik.yourdomain.com`)'
      - 'traefik.http.routers.traefik.entrypoints=traefik'
      - 'traefik.http.routers.traefik.service=api@internal'

volumes:
  traefik-certs:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: /mnt/tank/apps/traefik/certs

networks:
  proxy-network:
    external: true
    name: proxy-network
```

### Setting Permissions on acme.json

The ACME certificate store file requires restricted permissions. After starting Traefik for the
first time, set permissions:

```bash
chmod 600 /mnt/tank/apps/traefik/certs/acme.json
```

If Traefik fails to start, check the logs for permission errors on `acme.json`.

### Creating the Proxy Network

Create the external Docker network before starting Traefik:

```bash
docker network create proxy-network
```

All containers that need to be routed through Traefik must be on this network.

## Routing Rules

### Host-Based Routing

The most common routing method. Each service gets its own subdomain:

```yaml
services:
  jellyfin:
    image: jellyfin/jellyfin:latest
    container_name: jellyfin
    restart: unless-stopped
    networks:
      - proxy-network
    labels:
      - 'traefik.enable=true'
      - 'traefik.http.routers.jellyfin.rule=Host(`jellyfin.yourdomain.com`)'
      - 'traefik.http.routers.jellyfin.entrypoints=websecure'
      - 'traefik.http.routers.jellyfin.tls=true'
      - 'traefik.http.routers.jellyfin.tls.certresolver=letsencrypt'
      - 'traefik.http.services.jellyfin.loadbalancer.server.port=8096'
```

### Path-Based Routing

Route multiple services under a single domain based on URL path:

```yaml
labels:
  - 'traefik.enable=true'
  - 'traefik.http.routers.app.rule=Host(`yourdomain.com`) && PathPrefix(`/app`)'
  - 'traefik.http.routers.app.entrypoints=websecure'
  - 'traefik.http.routers.app.tls.certresolver=letsencrypt'
  - 'traefik.http.middlewares.app-strip.stripprefix.prefixes=/app'
  - 'traefik.http.routers.app.middlewares=app-strip'
  - 'traefik.http.services.app.loadbalancer.server.port=8080'
```

### HTTP to HTTPS Redirect

Force all HTTP traffic to HTTPS by adding a redirect middleware:

```yaml
services:
  traefik:
    # ... (other config)
    labels:
      - 'traefik.http.middlewares.redirect-to-https.redirectscheme.scheme=https'
      - 'traefik.http.middlewares.redirect-to-https.redirectscheme.permanent=true'
      - 'traefik.http.routers.http-catchall.rule=HostRegexp(`{any:.+}`)'
      - 'traefik.http.routers.http-catchall.entrypoints=web'
      - 'traefik.http.routers.http-catchall.middlewares=redirect-to-https'
```

Or add it in a dynamic configuration file (see below).

## Dynamic Configuration File

For middlewares and routing rules that apply globally or are shared across services, use a
file-based dynamic provider.

Create `dynamic-config.yml` in your Traefik config directory:

```yaml
http:
  middlewares:
    redirect-to-https:
      redirectScheme:
        scheme: https
        permanent: true

    default-headers:
      headers:
        frameDeny: true
        contentTypeNosniff: true
        browserXssFilter: true
        stsSeconds: 31536000
        stsIncludeSubdomains: true
        stsPreload: true

    compression:
      compress: {}

    rate-limit:
      rateLimit:
        average: 100
        burst: 50

    auth-basic:
      basicAuth:
        users:
          - 'admin:$apr1$hashedpassword'

    auth-forward:
      forwardAuth:
        address: 'http://authelia:9091/api/verify?rd=https://auth.yourdomain.com/'
        trustForwardHeader: true
        authResponseHeaders:
          - 'X-Forwarded-User'

  routers:
    http-catchall:
      rule: 'HostRegexp(`{any:.+}`)'
      entrypoints:
        - web
      middlewares:
        - redirect-to-https
      service: noop@internal
```

## TLS with Let's Encrypt

Traefik handles Let's Encrypt certificate provisioning and renewal automatically. Two challenge
types are commonly used:

### TLS Challenge (Recommended for most setups)

The default in the compose file above. Traefik proves domain ownership by responding to an ACME
challenge on port 443. Only port 443 needs to be forwarded.

### HTTP Challenge

If your ISP blocks port 443 or you have issues with the TLS challenge, switch to HTTP:

```yaml
command:
  - '--certificatesresolvers.letsencrypt.acme.httpchallenge=true'
  - '--certificatesresolvers.letsencrypt.acme.httpchallenge.entrypoint=web'
  # ... rest of config
```

This requires port 80 to be forwarded.

### DNS Challenge (Wildcard certificates)

For wildcard certificates (`*.yourdomain.com`), you need the DNS challenge. Example with Cloudflare:

```yaml
command:
  - '--certificatesresolvers.letsencrypt.acme.dnschallenge=true'
  - '--certificatesresolvers.letsencrypt.acme.dnschallenge.provider=cloudflare'
  - '--certificatesresolvers.letsencrypt.acme.email=your-email@example.com'
  - '--certificatesresolvers.letsencrypt.acme.storage=/letsencrypt/acme.json'
environment:
  - 'CF_DNS_API_TOKEN=your-cloudflare-api-token'
```

Then on your routers, use:

```yaml
- 'traefik.http.routers.myapp.tls.certresolver=letsencrypt'
- 'traefik.http.routers.myapp.tls.domains[0].main=yourdomain.com'
- 'traefik.http.routers.myapp.tls.domains[0].sans=*.yourdomain.com'
```

### Certificate Renewal

Traefik automatically renews certificates before expiry (default: 30 days before). No manual
intervention needed. Check certificate status:

```bash
# View stored certificates
curl -s http://localhost:8080/api/http/routers | jq '.[].tls'
```

## Middleware Examples

### Authentication (Basic Auth)

Generate a hashed password:

```bash
# Using htpasswd
apt install apache2-utils
htpasswd -nb admin yourpassword

# Using Docker
docker run --rm httpd:alpine htpasswd -nb admin yourpassword
```

Apply to a service:

```yaml
labels:
  - 'traefik.http.middlewares.my-auth.basicauth.users=admin:$apr1$hashhere'
  - 'traefik.http.routers.myapp.middlewares=my-auth'
```

### Authentication with Authelia (Recommended)

For SSO across all your services, use Authelia as a forward auth middleware:

```yaml
labels:
  - 'traefik.http.middlewares.authelia.forwardauth.address=http://authelia:9091/api/verify?rd=https://auth.yourdomain.com'
  - 'traefik.http.middlewares.authelia.forwardauth.trustforwardheader=true'
  - 'traefik.http.routers.myapp.middlewares=authelia'
```

This redirects unauthenticated users to an Authelia login page. After login, users are authenticated
across all services without re-entering credentials.

### Rate Limiting

Protect services from abuse:

```yaml
labels:
  - 'traefik.http.middlewares.my-ratelimit.ratelimit.average=100'
  - 'traefik.http.middlewares.my-ratelimit.ratelimit.burst=50'
  - 'traefik.http.routers.myapp.middlewares=my-ratelimit'
```

### Compression

Enable gzip compression for responses:

```yaml
labels:
  - 'traefik.http.middlewares.compress.compress=true'
  - 'traefik.http.routers.myapp.middlewares=compress'
```

### Security Headers

Add common security headers:

```yaml
labels:
  - 'traefik.http.middlewares.security-headers.headers.frameDeny=true'
  - 'traefik.http.middlewares.security-headers.headers.contentTypeNosniff=true'
  - 'traefik.http.middlewares.security-headers.headers.browserXssFilter=true'
  - 'traefik.http.middlewares.security-headers.headers.stsSeconds=31536000'
  - 'traefik.http.routers.myapp.middlewares=security-headers'
```

### Chaining Multiple Middlewares

Apply multiple middlewares in order (processed left to right):

```yaml
labels:
  - 'traefik.http.routers.myapp.middlewares=security-headers,compress,authelia'
```

## Dashboard

The Traefik dashboard is available at:

- `http://192.168.1.10:8080` (insecure, internal only)
- `https://traefik.yourdomain.com` (if you configured the label in the compose file)

The dashboard shows all routers, services, middlewares, and entrypoints in real time. It is
invaluable for debugging routing issues.

<details>
<summary>Securing the dashboard</summary>

Never expose the dashboard on port 8080 to the public internet without authentication. Options:

1. **Authelia/Basic Auth**: Add an auth middleware to the dashboard router
2. **Firewall**: Block port 8080 at the router level
3. **IP allowlist**: Use Traefik's `ipwhitelist` middleware

```yaml
- 'traefik.http.middlewares.ip-whitelist.ipwhitelist.sourcerange=192.168.1.0/24'
- 'traefik.http.routers.traefik.middlewares=ip-whitelist'
```

</details>

## Example: Full Service Stack with Traefik

Here is a complete example showing a Jellyfin media server behind Traefik with TLS, security
headers, and compression:

```yaml
services:
  jellyfin:
    image: lscr.io/linuxserver/jellyfin:latest
    container_name: jellyfin
    restart: unless-stopped
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/New_York
    volumes:
      - /mnt/tank/apps/jellyfin/config:/config
      - /mnt/tank/media/tv:/data/tvshows
      - /mnt/tank/media/movies:/data/movies
    networks:
      - proxy-network
    labels:
      - 'traefik.enable=true'
      - 'traefik.http.routers.jellyfin.rule=Host(`jellyfin.yourdomain.com`)'
      - 'traefik.http.routers.jellyfin.entrypoints=websecure'
      - 'traefik.http.routers.jellyfin.tls=true'
      - 'traefik.http.routers.jellyfin.tls.certresolver=letsencrypt'
      - 'traefik.http.routers.jellyfin.middlewares=security-headers,compress'
      - 'traefik.http.services.jellyfin.loadbalancer.server.port=8096'

networks:
  proxy-network:
    external: true
    name: proxy-network
```

## Debugging

When a service is not reachable through Traefik:

1. **Check Traefik logs**:

```bash
docker logs traefik --tail 100
```

2. **Verify labels are applied**:

```bash
docker inspect jellyfin | jq '.[0].Config.Labels'
```

3. **Check the dashboard** — all routers should show a green status. Red or yellow means a
   configuration error.

4. **Common issues**:
   - Container not on the `proxy-network` → Traefik cannot reach it
   - `traefik.enable=true` label missing or misspelled
   - Port mismatch: `loadbalancer.server.port` does not match the container's internal port
   - DNS not resolving: the subdomain must point to your public IP
   - Certificate pending: Let's Encrypt has rate limits. Check `acme.json` for error messages
   - `exposedbydefault=false` means you must explicitly enable each service with labels

5. **Increase log level** temporarily:

```yaml
command:
  - '--log.level=DEBUG'
```

## Common Pitfalls and Lessons Learned

<details>
<summary>Docker socket permissions</summary>

Traefik needs read-only access to the Docker socket (`/var/run/docker.sock`). On TrueNAS SCALE, the
Apps system may run Docker in a different context. If Traefik cannot detect containers, verify:

```bash
# Check if Traefik can read the socket
docker exec traefik ls -la /var/run/docker.sock

# The socket should show as readable (srw-rw---- or similar)
```

On TrueNAS SCALE, you may need to use the built-in Apps catalog for Traefik rather than a custom
compose, or ensure the Docker socket path is correct for the SCALE Kubernetes-based Docker runtime.

</details>

<details>
<summary>Let's Encrypt rate limits</summary>

Let's Encrypt enforces strict rate limits: 50 certificates per registered domain per week, 5
duplicate certificates per week. If you are experimenting and restarting containers frequently, you
can hit this limit. Use the Let's Encrypt staging environment during development:

```yaml
command:
  - '--certificatesresolvers.letsencrypt.acme.caserver=https://acme-staging-v02.api.letsencrypt.org/directory'
```

Staging certificates will show as invalid (red padlock) in browsers, but the flow is identical.
Switch back to the production server once everything works.

</details>

<details>
<summary>Container restarts break routing</summary>

When a container restarts and gets a new IP, Traefik should automatically detect the change via
Docker events. If it does not, check:

- The Docker socket is mounted correctly
- `providers.docker` is set to `true`
- The container is on the same network Traefik is watching

You can force a provider refresh by restarting Traefik:

```bash
docker restart traefik
```

</details>

<details>
<summary>CORS issues with WebSocket services</summary>

Some applications (Jellyfin, code-server, WebTop) use WebSocket connections. Traefik supports
WebSockets natively, but you may need to adjust timeouts:

```yaml
labels:
  - 'traefik.http.routers.myapp.middlewares=ws-timeout'
  - 'traefik.http.middlewares.ws-timeout.headers.customResponseHeaders.X-Content-Type-Options='
```

If WebSocket connections drop after 30 seconds, check if your reverse proxy or ISP is terminating
idle connections.

</details>

<details>
<summary>TLS-ALPN-01 challenge fails behind CGNAT</summary>

If your ISP uses Carrier-Grade NAT (CGNAT), you cannot receive incoming connections on port 443. The
TLS challenge will fail. Switch to the DNS challenge with your DNS provider (Cloudflare, Route53,
etc.) which requires no inbound ports.

</details>
