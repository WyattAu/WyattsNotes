---
id: api-security
title: API Security
description:
  API security — REST security, rate limiting, input validation, CORS, and API gateway patterns.
slug: api-security
---

## REST API Security Fundamentals

REST APIs are stateless by design: each request must contain all information needed for
authentication and authorization. The server does not maintain session state between requests.

### Stateless Authentication Per Request

```text
Every request must include:
1. Authentication credential (Bearer token, API key, mTLS certificate)
2. Required headers (Content-Type, Accept)
3. Any correlation/tracing identifiers

The server validates credentials on every request.
No server-side session is required (but tokens must be stateless or validated).
```

## Authentication Methods

### API Keys

```python
# Simple API key in header
API_KEYS = {
    'key_abc123': {'name': 'service-a', 'scopes': ['read:users']},
    'key_def456': {'name': 'service-b', 'scopes': ['read:users', 'write:orders']},
}

@app.before_request
def validate_api_key():
    api_key = request.headers.get('X-API-Key')
    if not api_key or api_key not in API_KEYS:
        return jsonify({"error": "Invalid API key"}), 401
    g.api_key_info = API_KEYS[api_key]
```

:::warning

API keys provide weak authentication: they are long-lived shared secrets that cannot be scoped to a
user or easily rotated. Use them only for server-to-server communication where OAuth 2.0 is
impractical. Prefer OAuth 2.0 Bearer tokens for user-facing APIs.

:::

### Bearer Tokens

```python
from functools import wraps

def require_bearer_token(required_scopes=None):
    def decorator(f):
        @wraps(f)
        def wrapper(*args, **kwargs):
            auth_header = request.headers.get('Authorization', '')
            if not auth_header.startswith('Bearer '):
                return jsonify({"error": "Missing Bearer token"}), 401

            token = auth_header[7:]
            try:
                claims = validate_jwt(token)
            except InvalidTokenError:
                return jsonify({"error": "Invalid or expired token"}), 401

            if required_scopes:
                token_scopes = set(claims.get('scope', '').split())
                missing = set(required_scopes) - token_scopes
                if missing:
                    return jsonify({"error": f"Missing scopes: {missing}"}), 403

            g.user = claims
            return f(*args, **kwargs)
        return wrapper
    return decorator

@app.route('/api/orders')
@require_bearer_token(['read:orders'])
def list_orders():
    ...
```

### HMAC Signatures

```python
import hmac
import hashlib
import time

def verify_hmac_signature(request, api_secret):
    timestamp = request.headers.get('X-Timestamp')
    signature = request.headers.get('X-Signature')

    if not timestamp or not signature:
        return False

    # Reject requests older than 5 minutes (replay protection)
    if abs(time.time() - int(timestamp)) > 300:
        return False

    # Recreate the signature
    message = f"{timestamp}.{request.method}.{request.path}.{request.get_data().decode()}"
    expected = hmac.new(
        api_secret.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()

    return hmac.compare_digest(signature, expected)
```

### mTLS

```nginx
# Nginx: require client certificates
server {
    listen 443 ssl;
    ssl_certificate /etc/nginx/server.crt;
    ssl_certificate_key /etc/nginx/server.key;
    ssl_client_certificate /etc/nginx/ca.crt;
    ssl_verify_client on;
    ssl_verify_depth 2;
}
```

| Method       | Security Level | Best For                          |
| ------------ | -------------- | --------------------------------- |
| API Key      | Low            | Internal services, prototyping    |
| Bearer Token | High           | User-facing APIs, microservices   |
| HMAC         | High           | API gateways, financial APIs      |
| mTLS         | Very High      | Service mesh, zero-trust networks |

## Authorization

### RBAC (Role-Based Access Control)

```python
# Role hierarchy
ROLES = {
    'viewer':   {'read'},
    'editor':   {'read', 'write'},
    'admin':    {'read', 'write', 'delete', 'admin'},
}

def require_role(role_name):
    def decorator(f):
        @wraps(f)
        def wrapper(*args, **kwargs):
            user_role = g.user.get('role', 'viewer')
            if user_role not in ROLES or role_name not in get_role_hierarchy(user_role):
                return jsonify({"error": "Insufficient permissions"}), 403
            return f(*args, **kwargs)
        return wrapper
    return decorator
```

### ABAC (Attribute-Based Access Control)

```python
def check_permission(user, resource, action):
    """Check if user can perform action on resource based on attributes."""
    if user['department'] == resource['department']:
        return True  # Same department: full access
    if user['role'] == 'admin':
        return True
    if action == 'read' and resource['visibility'] == 'public':
        return True
    return False
```

### Scope-Based Authorization

```python
@app.route('/api/admin/users')
@require_bearer_token(['admin:users'])
def admin_list_users():
    ...

@app.route('/api/orders')
@require_bearer_token(['read:orders'])
def list_orders():
    ...
```

## Rate Limiting

### Token Bucket Algorithm

```python
import time
from collections import defaultdict

class TokenBucketRateLimiter:
    def __init__(self, capacity, refill_rate):
        self.capacity = capacity
        self.refill_rate = refill_rate  # tokens per second
        self.buckets = defaultdict(lambda: {'tokens': capacity, 'last_refill': time.time()})

    def allow(self, key):
        bucket = self.buckets[key]
        now = time.time()
        elapsed = now - bucket['last_refill']

        bucket['tokens'] = min(
            self.capacity,
            bucket['tokens'] + elapsed * self.refill_rate
        )
        bucket['last_refill'] = now

        if bucket['tokens'] >= 1:
            bucket['tokens'] -= 1
            return True
        return False

limiter = TokenBucketRateLimiter(capacity=100, refill_rate=10)

@app.before_request
def rate_limit():
    key = request.remote_addr  # or user ID, API key, etc.
    if not limiter.allow(key):
        return jsonify({"error": "Rate limit exceeded"}), 429
```

### Sliding Window Log

```python
import time
from collections import defaultdict

class SlidingWindowRateLimiter:
    def __init__(self, max_requests, window_seconds):
        self.max_requests = max_requests
        self.window_seconds = window_seconds
        self.requests = defaultdict(list)

    def allow(self, key):
        now = time.time()
        cutoff = now - self.window_seconds

        # Remove expired entries
        self.requests[key] = [t for t in self.requests[key] if t > cutoff]

        if len(self.requests[key]) >= self.max_requests:
            return False

        self.requests[key].append(now)
        return True
```

### Rate Limiting Headers

```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1700000000
Retry-After: 30
```

| Strategy       | Per-User | Per-IP | Notes                              |
| -------------- | -------- | ------ | ---------------------------------- |
| Token bucket   | Yes      | Yes    | Smooth rate, burst allowed         |
| Sliding window | Yes      | Yes    | Precise, memory-intensive          |
| Fixed window   | Yes      | Yes    | Simple, burst at window boundaries |

:::info

Rate limit by user identity (API key or token) when authenticated, and by IP address when
unauthenticated. Unauthenticated rate limits should be stricter to prevent abuse.

:::

## Input Validation

### JSON Schema Validation

```python
from jsonschema import validate, ValidationError

CREATE_ORDER_SCHEMA = {
    "type": "object",
    "required": ["customer_id", "items"],
    "properties": {
        "customer_id": {"type": "integer", "minimum": 1},
        "items": {
            "type": "array",
            "minItems": 1,
            "maxItems": 100,
            "items": {
                "type": "object",
                "required": ["product_id", "quantity"],
                "properties": {
                    "product_id": {"type": "integer", "minimum": 1},
                    "quantity": {"type": "integer", "minimum": 1, "maximum": 999}
                }
            }
        },
        "notes": {"type": "string", "maxLength": 1000}
    },
    "additionalProperties": False
}

@app.route('/api/orders', methods=['POST'])
@require_bearer_token(['write:orders'])
def create_order():
    data = request.get_json()
    try:
        validate(data, CREATE_ORDER_SCHEMA)
    except ValidationError as e:
        return jsonify({"error": f"Validation failed: {e.message}"}), 400
    ...
```

### Type Checking and Length Limits

```python
def validate_pagination(request):
    """Validate and sanitize pagination parameters."""
    try:
        limit = int(request.args.get('limit', 20))
        offset = int(request.args.get('offset', 0))
    except (ValueError, TypeError):
        return None, None, "limit and offset must be integers"

    limit = max(1, min(limit, 100))  # Clamp to [1, 100]
    offset = max(0, min(offset, 10000))  # Cap at 10000

    return limit, offset, None
```

## CORS Configuration

```python
from flask_cors import CORS

# SAFE: explicit allowlist
ALLOWED_ORIGINS = [
    'https://app.example.com',
    'https://admin.example.com'
]

CORS(app, origins=ALLOWED_ORIGINS, methods=['GET', 'POST', 'PUT', 'DELETE'],
     allow_headers=['Authorization', 'Content-Type'],
     supports_credentials=True)

# VULNERABLE: wildcard with credentials
# CORS(app, origins='*', supports_credentials=True)  # BLOCKED by browsers
```

## API Versioning

| Strategy        | Example                               | Pros            | Cons                   |
| --------------- | ------------------------------------- | --------------- | ---------------------- |
| URL path        | `/api/v1/orders`                      | Simple, visible | URL changes            |
| Header          | `Accept: application/vnd.api.v1+json` | Clean URLs      | Hidden, harder to test |
| Query parameter | `/api/orders?version=1`               | Easy to add     | Cache-busting issues   |

```python
# URL path versioning (recommended for most APIs)
@app.route('/api/v1/orders')
def list_orders_v1():
    return jsonify(legacy_format(orders))

@app.route('/api/v2/orders')
def list_orders_v2():
    return jsonify(modern_format(orders))
```

## Response Filtering

```python
# Sparse fieldsets (JSON:API pattern)
@app.route('/api/v1/users')
def list_users():
    fields = request.args.get('fields', '').split(',')
    users = get_all_users()

    if fields:
        filtered = [{k: u[k] for k in fields if k in u} for u in users]
        return jsonify(filtered)
    return jsonify(users)
```

## Pagination

### Cursor vs Offset

```python
# Offset pagination (simple, but slow at high offsets)
@app.route('/api/orders')
def list_orders():
    limit = min(int(request.args.get('limit', 20)), 100)
    offset = max(int(request.args.get('offset', 0)), 0)
    orders = db.query("SELECT * FROM orders ORDER BY id LIMIT %s OFFSET %s", (limit, offset))
    return jsonify({"data": orders, "offset": offset, "limit": limit})

# Cursor pagination (efficient at any position)
@app.route('/api/orders')
def list_orders():
    limit = min(int(request.args.get('limit', 20)), 100)
    cursor = request.args.get('cursor')

    if cursor:
        orders = db.query(
            "SELECT * FROM orders WHERE id > %s ORDER BY id LIMIT %s",
            (cursor, limit)
        )
    else:
        orders = db.query(
            "SELECT * FROM orders ORDER BY id LIMIT %s",
            (limit,)
        )

    next_cursor = orders[-1]['id'] if orders else None
    return jsonify({
        "data": orders,
        "next_cursor": next_cursor
    })
```

| Method | Performance at page 10000 | Consistency on inserts/deletes | URL bookmarkable    |
| ------ | ------------------------- | ------------------------------ | ------------------- |
| Offset | Slow (scans 10000+ rows)  | Unstable (rows shift)          | Yes                 |
| Cursor | Fast (index lookup)       | Stable (deterministic)         | No (cursor changes) |

## Idempotency Keys

```python
from hashlib import sha256

@app.route('/api/orders', methods=['POST'])
@require_bearer_token(['write:orders'])
def create_order():
    idempotency_key = request.headers.get('Idempotency-Key')
    if not idempotency_key:
        return jsonify({"error": "Idempotency-Key header required"}), 400

    # Check if this key was already processed
    existing = redis.get(f"idempotency:{idempotency_key}")
    if existing:
        return jsonify(json.loads(existing)), 200  # Return original response

    # Process the order
    order = create_order_from_request(request)
    response = jsonify(order)

    # Store the response for future retries (TTL = 24h)
    redis.setex(
        f"idempotency:{idempotency_key}",
        86400,
        json.dumps(order)
    )

    return response, 201
```

## Webhook Security

```python
import hmac
import hashlib

def verify_webhook_signature(request, secret):
    signature = request.headers.get('X-Webhook-Signature')
    if not signature:
        return False

    payload = request.get_data()
    expected = hmac.new(
        secret.encode(),
        payload,
        hashlib.sha256
    ).hexdigest()

    return hmac.compare_digest(signature, expected)

@app.route('/webhooks/payment', methods=['POST'])
def payment_webhook():
    if not verify_webhook_signature(request, WEBHOOK_SECRET):
        return jsonify({"error": "Invalid signature"}), 401

    event = request.get_json()
    process_payment_event(event)
    return jsonify({"status": "ok"}), 200
```

## API Gateway Patterns

```text
API Gateway responsibilities:
1. Authentication (validate tokens, API keys)
2. Rate limiting (per-client, per-route)
3. Request transformation (headers, body)
4. Response transformation (filtering, formatting)
5. Load balancing (round-robin, least connections)
6. Circuit breaking (fail fast on downstream failures)
7. Request logging and monitoring
8. TLS termination
```

### Gateway Implementation Options

| Option          | Complexity | Customization      | Use Case                     |
| --------------- | ---------- | ------------------ | ---------------------------- |
| Kong            | Medium     | High (Lua plugins) | Large-scale, extensible      |
| AWS API Gateway | Low        | Medium             | AWS ecosystem                |
| Envoy           | High       | Very High          | Service mesh, gRPC           |
| Nginx           | Medium     | High               | General purpose, lightweight |
| Traefik         | Low        | Medium             | Container environments       |

## GraphQL Security

### Query Depth Limiting

```python
# Limit maximum query depth to prevent complex/nested queries
MAX_QUERY_DEPTH = 5

def validate_query_depth(query_ast, current_depth=0):
    if current_depth > MAX_QUERY_DEPTH:
        raise GraphQLDepthError(f"Query depth exceeds maximum of {MAX_QUERY_DEPTH}")

    for field in query_ast.selection_set.selections:
        if hasattr(field, 'selection_set') and field.selection_set:
            validate_query_depth(field, current_depth + 1)
```

### Complexity Analysis

```python
# Assign cost to each field and limit total query complexity
FIELD_COSTS = {
    'orders': 10,
    'items': 5,
    'customer': 1,
}

MAX_COMPLEXITY = 500

def calculate_complexity(query_ast):
    total = 0
    for field in query_ast.selection_set.selections:
        field_name = field.name.value
        cost = FIELD_COSTS.get(field_name, 1)
        if hasattr(field, 'selection_set') and field.selection_set:
            cost *= calculate_complexity(field)
        total += cost
    return total
```

### Introspection Control

```javascript
// Disable introspection in production
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV !== 'production',
});
```

## OpenAPI Security

```yaml
# openapi.yaml security schemes
components:
  securitySchemes:
    BearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT

    ApiKeyAuth:
      type: apiKey
      in: header
      name: X-API-Key

    OAuth2:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          scopes:
            read:orders: Read orders
            write:orders: Create/update orders

security:
  - BearerAuth: []
  - ApiKeyAuth: []

paths:
  /orders:
    get:
      security:
        - BearerAuth: [read:orders]
    post:
      security:
        - OAuth2: [write:orders]
```

## Common Pitfalls

### Not Validating Input on the Server

Client-side validation improves UX but provides zero security. An attacker can send any payload
directly to your API. Always validate on the server, regardless of what the client does.

### CORS Misconfiguration

Reflecting the `Origin` header without validation allows any origin to make authenticated requests.
Always use an explicit allowlist.

### Exposing Internal IDs

Using sequential integer IDs (1, 2, 3...) allows attackers to enumerate resources. Use UUIDs or
hashids for public identifiers.

### Not Rate Limiting Authentication Endpoints

Without rate limiting, attackers can brute-force credentials, enumerate usernames, and perform
credential stuffing attacks. Rate limit all authentication endpoints.

### Returning Stack Traces in API Responses

Stack traces reveal implementation details (framework, library versions, file paths) that help
attackers craft targeted exploits. Return generic error messages in production; log details
server-side.
