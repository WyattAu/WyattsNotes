---
id: owasp-top-10
title: OWASP Top 10 (2021) Detailed
description:
  OWASP Top 10 (2021) Detailed — A01: Broken Access Control; IDOR (Insecure
  Direct Object Reference) for thorough revision and examination preparation.
slug: owasp-top-10
---

## A01: Broken Access Control

Broken access control is the most critical web application security risk. It occurs when users can
act outside their intended permissions.

### IDOR (Insecure Direct Object Reference)

```python
# VULNERABLE: Any user can access any order by changing the ID
@app.route('/api/orders/<order_id>')
def get_order(order_id):
    order = db.query("SELECT * FROM orders WHERE id = %s", (order_id,))
    return jsonify(order)

# SAFE: Verify the user owns the resource
@app.route('/api/orders/<order_id>')
@require_auth
def get_order(order_id):
    order = db.query(
        "SELECT * FROM orders WHERE id = %s AND customer_id = %s",
        (order_id, current_user.id)
    )
    if not order:
        return jsonify({"error": "Not found"}), 404
    return jsonify(order)
```

### Privilege Escalation

```python
# VULNERABLE: Role from user input, not from session
@app.route('/api/admin/users')
def admin_panel():
    role = request.args.get('role', 'user')  # attacker sets ?role=admin
    if role == 'admin':
        return jsonify(admin_data)
    return jsonify(user_data)

# SAFE: Role from authenticated session
@app.route('/api/admin/users')
@require_role('admin')
def admin_panel():
    return jsonify(admin_data)
```

### Path Traversal

```python
# VULNERABLE: attacker reads arbitrary files
@app.route('/download')
def download():
    filename = request.args.get('file')
    return send_file(f'/var/data/{filename}')
# ?file=../../etc/passwd

# SAFE: validate and sanitize the path
import os

@app.route('/download')
def download():
    filename = request.args.get('file')
    base_dir = '/var/data/uploads'

    filepath = os.path.realpath(os.path.join(base_dir, filename))
    if not filepath.startswith(os.path.realpath(base_dir)):
        return jsonify({"error": "Invalid path"}), 400

    if not os.path.isfile(filepath):
        return jsonify({"error": "Not found"}), 404

    return send_file(filepath)
```

### Detection and Remediation

| Method                | Tool / Approach                      |
| --------------------- | ------------------------------------ |
| Automated scanning    | OWASP ZAP, Burp Suite Pro            |
| Manual testing        | Modify IDs, roles, paths in requests |
| Code review           | Check for missing authorization      |
| Access control matrix | Document and test all routes         |

:::tip

Implement access control as a framework-level middleware, not per-route. Every route should require
authentication by default, with explicit opt-in for public routes. This prevents the most common
access control bug: forgetting to add `@require_auth` to a new route.

:::

## A02: Cryptographic Failures

### Weak Algorithms

```python
# VULNERABLE: MD5 for passwords
import hashlib
password_hash = hashlib.md5(password.encode()).hexdigest()

# VULNERABLE: SHA-1 for signatures
import hashlib
signature = hashlib.sha1(data.encode()).hexdigest()

# SAFE: bcrypt for passwords
import bcrypt
password_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt(rounds=12))

# SAFE: SHA-256 for signatures
import hashlib
signature = hashlib.sha256(data.encode()).hexdigest()

# SAFE: Use a proven library (e.g., argon2id)
from argon2 import PasswordHasher
ph = PasswordHasher()
password_hash = ph.hash(password)
```

### Key Exposure

```javascript
// VULNERABLE: API keys in client-side code
const API_KEY = 'sk-1234567890abcdef';
fetch('https://api.example.com/data', {
  headers: { Authorization: `Bearer ${API_KEY}` },
});

// SAFE: API keys on server side only
// Client sends request to your backend, backend uses the key
```

### Insecure Transport

```nginx
# VULNERABLE: no TLS, or allowing HTTP
server {
    listen 80;
    server_name example.com;
    # Sensitive data sent in cleartext
}

# SAFE: redirect all HTTP to HTTPS, use HSTS
server {
    listen 80;
    server_name example.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name example.com;
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
}
```

### Detection and Remediation

| Method                 | Approach                                             |
| ---------------------- | ---------------------------------------------------- |
| Credential scanning    | TruffleHog, git-secrets, detect-secrets              |
| TLS configuration      | SSL Labs, testssl.sh, nmap --script ssl-enum-ciphers |
| Password storage audit | Code review for hashing algorithm used               |
| Transport security     | Verify TLS 1.2+, HSTS, no mixed content              |

## A03: Injection

### SQL Injection Variants

```python
# Classic (string concatenation)
cursor.execute(f"SELECT * FROM users WHERE id = {user_id}")

# UNION-based
cursor.execute(f"SELECT name FROM products WHERE id = {user_id} UNION SELECT password FROM users")

# Blind (boolean-based)
cursor.execute(f"SELECT * FROM users WHERE id = {user_id} AND SUBSTRING(password,1,1) = 'a'")

# Blind (time-based)
cursor.execute(f"SELECT * FROM users WHERE id = {user_id}; IF SUBSTRING(password,1,1)='a' WAITFOR DELAY '0:0:5'")

# SAFE: parameterized query
cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))
```

### NoSQL Injection

```python
# VULNERABLE: MongoDB injection via dictionary merging
@app.route('/login', methods=['POST'])
def login():
    query = {"username": request.form['username'], "password": request.form['password']}
    user = db.users.find_one(query)  # attacker sends {"password": {"$ne": ""}}

# SAFE: use explicit field operators
@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    user = db.users.find_one({"username": username, "password": password})
```

### Command Injection

```python
# VULNERABLE: shell command with user input
import os
filename = request.args.get('file')
os.system(f"convert {filename} output.png")
# ?file=; rm -rf /

# SAFE: use subprocess with shell=False and argument list
import subprocess
filename = request.args.get('file')
subprocess.run(['convert', filename, 'output.png'], check=True)
```

### LDAP Injection

```python
# VULNERABLE: LDAP filter with user input
ldap_filter = f"(uid={username})"
# attacker: *)(uid=*))(|(uid=*  → returns all entries

# SAFE: escape LDAP special characters
import ldap.filter
safe_username = ldap.filter.escape_filter_chars(username)
ldap_filter = f"(uid={safe_username})"
```

### Detection and Remediation

| Method                | Tool / Approach                                       |
| --------------------- | ----------------------------------------------------- |
| Automated scanning    | SQLMap, OWASP ZAP, Burp Suite                         |
| SAST                  | Semgrep, CodeQL, Bandit (Python)                      |
| Parameterized queries | Use prepared statements for ALL database interactions |
| Input validation      | Whitelist allowed characters/values                   |

## A04: Insecure Design

Insecure design refers to fundamental flaws in the application's architecture and design, as opposed
to implementation bugs.

### Missing Threat Modeling

```text
Common insecure design patterns:

1. No rate limiting on password reset endpoints
2. Account enumeration via different error messages ("user not found" vs "wrong password")
3. Missing business logic validation (negative quantities, oversized orders)
4. No separation between admin and user contexts
5. Trust boundaries not defined (client trusted with authorization decisions)
```

### Missing Security Requirements

```text
Secure design checklist:

- Authentication required for all sensitive operations
- Authorization enforced at every level (feature, data, field)
- Input validation defined for every input
- Rate limiting on authentication and sensitive endpoints
- Audit logging for all state-changing operations
- Session management with appropriate timeouts
- Error handling that does not leak internal information
```

### Detection and Remediation

| Method                | Approach                                         |
| --------------------- | ------------------------------------------------ |
| Threat modeling       | STRIDE, DREAD, attack trees                      |
| Abuse cases           | Define what an attacker SHOULD NOT be able to do |
| Security requirements | NIST SP 800-53, OWASP ASVS                       |
| Design review         | Security-focused architecture review             |

## A05: Security Misconfiguration

### Default Credentials

```bash
# Common default credentials to check and change:
# admin/admin, root/root, tomcat/tomcat, guest/guest
# Spring Boot Actuator: /actuator endpoints exposed by default
# JMX: jmxremote.password with default credentials
# Database: postgres/postgres, sa/ (SQL Server)

# Check for default credentials in your infrastructure
nmap --script default-credentials 10.0.0.0/24
```

### Unnecessary Features

```yaml
# VULNERABLE: Spring Boot Actuator exposed without authentication
management:
  endpoints:
    web:
      exposure:
        include: "*"  # Exposes ALL actuator endpoints

# SAFE: expose only necessary endpoints with authentication
management:
  endpoints:
    web:
      exposure:
        include: health,info
  endpoint:
    health:
      show-details: when-authorized
```

### Verbose Errors

```python
# VULNERABLE: stack traces in production responses
@app.errorhandler(Exception)
def handle_error(e):
    return jsonify({"error": str(e), "traceback": traceback.format_exc()}), 500

# SAFE: generic error in production, detailed in logs
@app.errorhandler(Exception)
def handle_error(e):
    app.logger.error(f"Unhandled exception: {traceback.format_exc()}")
    return jsonify({"error": "Internal server error"}), 500
```

### Detection and Remediation

| Method                  | Approach                         |
| ----------------------- | -------------------------------- |
| Configuration audit     | CIS benchmarks, SCAP             |
| Directory/file scanning | DirBuster, gobuster, ffuf        |
| Header scanning         | SecurityHeaders.com, Observatory |
| Automated compliance    | InSpec, Open Policy Agent        |

## A06: Vulnerable and Outdated Components

### Dependency Scanning

```bash
# npm
npm audit
npm audit fix --force  # breaks changes; review before using

# Python
pip audit
safety check --full-report

# Go
govulncheck ./...

# Rust
cargo audit

# Java
mvn org.owasp:dependency-check-maven:check

# Docker
trivy image myapp:latest
grype myapp:latest
```

### Known CVEs

```text
Monitoring workflow:
1. Maintain a software bill of materials (SBOM)
2. Subscribe to CVE notifications for your dependencies
3. Automate scanning in CI/CD pipeline
4. Establish SLA for critical vulnerability remediation:
   - Critical: 24-48 hours
   - High: 1 week
   - Medium: 1 month
   - Low: next release cycle
```

### Supply Chain Security

```text
Supply chain hardening:
1. Pin dependency versions (lockfiles)
2. Verify package integrity (checksums, signatures)
3. Use private registries (Artifactory, Nexus)
4. Review new dependencies before adding
5. Use SLSA framework for build integrity
6. Monitor for typosquatting (npm audit, Snyk)
```

## A07: Identification and Authentication Failures

### Credential Stuffing

```python
# Detection: many failed logins from different IPs using known breached credentials
# Prevention: rate limiting, account lockout, MFA

# Rate limiting middleware
from flask_limiter import Limiter
limiter = Limiter(app, key_func=lambda: request.remote_addr)

@app.route('/login', methods=['POST'])
@limiter.limit("5 per minute")
def login():
    ...

# Account lockout after N failed attempts
FAILED_LOGIN_LIMIT = 5
LOCKOUT_DURATION = 300  # 5 minutes

@app.route('/login', methods=['POST'])
def login():
    ip = request.remote_addr
    attempts = redis.get(f"login_attempts:{ip}")
    if attempts and int(attempts) >= FAILED_LOGIN_LIMIT:
        return jsonify({"error": "Account temporarily locked"}), 429

    # ... verify credentials ...

    if not valid:
        redis.incr(f"login_attempts:{ip}")
        redis.expire(f"login_attempts:{ip}", LOCKOUT_DURATION)
        return jsonify({"error": "Invalid credentials"}), 401
```

### Brute Force Prevention

| Defense                     | Implementation                         |
| --------------------------- | -------------------------------------- |
| Rate limiting               | Per-IP and per-account limits          |
| Account lockout             | Temporary lock after N failed attempts |
| CAPTCHA                     | After N failed attempts                |
| MFA                         | TOTP, WebAuthn, push notification      |
| Progressive delay           | Exponential backoff on failed attempts |
| Breached password detection | Check against HaveIBeenPwned API       |

### Session Fixation

```python
# VULNERABLE: session ID not regenerated after login
@app.route('/login', methods=['POST'])
def login():
    if valid_credentials(request.form):
        session['user_id'] = user.id  # session ID unchanged
        return redirect('/dashboard')

# SAFE: regenerate session ID after authentication
@app.route('/login', methods=['POST'])
def login():
    if valid_credentials(request.form):
        session.clear()  # clear old session
        session.regenerate()  # new session ID
        session['user_id'] = user.id
        return redirect('/dashboard')
```

## A08: Software and Data Integrity Failures

### Insecure Deserialization

```python
# VULNERABLE: deserializing untrusted pickle data
import pickle
data = pickle.loads(request.get_data())  # RCE

# VULNERABLE: deserializing untrusted YAML
import yaml
data = yaml.load(request.get_data())  # RCE (yaml.load is unsafe)

# SAFE: use JSON for data-only deserialization
import json
data = json.loads(request.get_data())  # no code execution

# SAFE: use yaml.safe_load
import yaml
data = yaml.safe_load(request.get_data())  # no arbitrary objects
```

### Unsigned Updates

```bash
# Verify package signatures before installation
# npm: npm verify (limited support)
# Python: pip with --require-hashes in requirements.txt

# requirements.txt with pinned hashes
flask==3.0.0 \
    --hash=sha256:abc123...
werkzeug==3.0.0 \
    --hash=sha256:def456...

pip install --require-hashes -r requirements.txt
```

### CDN Poisoning

```text
Prevention:
1. Use SRI (Subresource Integrity) for CDN-hosted scripts:
   &lt;script src="https://cdn.example.com/lib.js"
   integrity="sha384-abc123..."
   crossorigin="anonymous"&gt;&lt;/script&gt;

2. Self-host critical dependencies

3. Monitor CDN availability and integrity
```

## A09: Security Logging and Monitoring Failures

### No Audit Trail

```python
# SAFE: structured logging for security events
import structlog

logger = structlog.get_logger()

@app.route('/login', methods=['POST'])
def login():
    ip = request.remote_addr
    user_agent = request.headers.get('User-Agent', '')

    if valid_credentials(request.form):
        logger.info("login.success",
            user_id=user.id,
            ip=ip,
            user_agent=user_agent
        )
    else:
        logger.warning("login.failure",
            username=request.form.get('username', ''),
            ip=ip,
            user_agent=user_agent
        )
```

### Insufficient Logging

```text
Minimum security events to log:
1. All authentication events (success and failure)
2. Authorization failures (access denied)
3. Data access events (read sensitive data)
4. Data modification events (create, update, delete)
5. System events (startup, shutdown, configuration changes)
6. Input validation failures
7. Rate limiting triggers
```

### Missing Alerts

```text
Alert on:
- Spike in failed authentication (brute force)
- Privilege escalation attempts
- Unusual data access patterns
- New admin account creation
- Configuration changes
- Certificate expiration approaching
- Unexpected geographic access
```

## A10: Server-Side Request Forgery (SSRF)

### Internal Services

```python
# VULNERABLE: server fetches arbitrary URLs
import requests

@app.route('/proxy')
def proxy():
    url = request.args.get('url')
    return requests.get(url).text
# ?url=http://169.254.169.254/latest/meta-data/ (AWS metadata)

# SAFE: validate against allowlist
import ipaddress
from urllib.parse import urlparse

ALLOWED_DOMAINS = ['api.example.com', 'cdn.example.com']

@app.route('/proxy')
def proxy():
    url = request.args.get('url')
    parsed = urlparse(url)

    if parsed.hostname not in ALLOWED_DOMAINS:
        return jsonify({"error": "Domain not allowed"}), 400

    if parsed.scheme not in ('http', 'https'):
        return jsonify({"error": "Scheme not allowed"}), 400

    try:
        ip = ipaddress.ip_address(parsed.hostname)
        if ip.is_private or ip.is_loopback:
            return jsonify({"error": "Private IPs not allowed"}), 400
    except ValueError:
        pass  # hostname, checked against allowlist

    return requests.get(url, timeout=5).text
```

### Cloud Metadata

```bash
# AWS IMDSv1 (vulnerable): no authentication required
curl http://169.254.169.254/latest/meta-data/iam/security-credentials/

# AWS IMDSv2 (secure): requires session token
TOKEN=$(curl -X PUT "http://169.254.169.254/latest/api/token" \
  -H "X-aws-ec2-metadata-token-ttl-seconds: 21600")
curl -H "X-aws-ec2-metadata-token: $TOKEN" \
  http://169.254.169.254/latest/meta-data/iam/security-credentials/

# Mitigation: enable IMDSv2 (requires token)
# Also: use network policies to block metadata endpoint from application servers
```

### File Protocol SSRF

```python
# VULNERABLE: allows file:// protocol
requests.get(request.args.get('url'))
# ?url=file:///etc/passwd

# SAFE: restrict to http/https only
parsed = urlparse(url)
if parsed.scheme not in ('http', 'https'):
    return error_response()
```

## Common Pitfalls

### Relying on WAFs as Primary Defense

Web Application Firewalls are defense-in-depth, not a substitute for secure coding. Attackers bypass
WAFs with encoding tricks, chunked requests, and protocol-level manipulation. Fix the vulnerability,
do not mask it.

### Not Testing for All OWASP Categories

Many organizations test for SQL injection and XSS but ignore access control, insecure design, and
SSRF. Use a comprehensive testing methodology that covers all 10 categories.

### Ignoring Security Headers

Missing security headers (`X-Content-Type-Options`, `X-Frame-Options`, `CSP`, `HSTS`) provides no
defense against client-side attacks. Add them to every response.

### Not Keeping Dependencies Updated

Automated dependency scanning in CI/CD catches most known vulnerabilities. Not having this pipeline
means you are flying blind. Integrate scanning into every pull request and deployment.

### Treating OWASP as a Checklist

OWASP Top 10 is a awareness document, not a compliance checklist. It does not cover all
vulnerabilities. Supplement with ASVS (Application Security Verification Standard), threat modeling,
and regular penetration testing.
