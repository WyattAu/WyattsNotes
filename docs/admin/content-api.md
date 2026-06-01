# Content REST API

Programmatic access to WyattsNotes content for integrations, widgets, and third-party tools.

## Base URL

```
https://wyattsnotes.wyattau.com/api/v1
```

## Authentication

All endpoints require an API key passed via the `X-API-Key` header:

```http
X-API-Key: wn_live_abc123def456
```

Keys are issued via the admin dashboard. Each key is scoped to a rate-limit bucket.

## Rate Limiting

- **Limit**: 100 requests per minute per API key
- Headers included in every response:

| Header | Description |
|---|---|
| `X-RateLimit-Limit` | Requests allowed per window |
| `X-RateLimit-Remaining` | Remaining requests in current window |
| `X-RateLimit-Reset` | Unix timestamp when the window resets |

Exceeding the limit returns `429 Too Many Requests`.

## CORS

CORS is enabled for the following origins:

```
https://wyattsnotes.wyattau.com
https://ib.wyattau.com
https://dse.wyattau.com
https://alevel-maths-physics.wyattau.com
https://alevel-sciences.wyattau.com
https://qualifications.wyattau.com
https://programming.wyattau.com
https://university.wyattau.com
```

Additional origins can be added via the `CORS_ORIGINS` environment variable.

## Response Format

All responses use a consistent JSON envelope:

```json
{
  "data": [],
  "meta": {
    "total": 42,
    "page": 1,
    "per_page": 20,
    "total_pages": 3
  },
  "links": {
    "self": "/api/v1/subjects?page=1",
    "next": "/api/v1/subjects?page=2",
    "prev": null
  }
}
```

## Endpoints

### `GET /api/v1/subjects`

List all subjects across all qualification levels.

**Query parameters:**

| Param | Type | Default | Description |
|---|---|---|---|
| `page` | int | 1 | Page number |
| `per_page` | int | 20 | Items per page (max 100) |

**Example response:**

```json
{
  "data": [
    {
      "slug": "ib",
      "name": "IB",
      "description": "International Baccalaureate Diploma Programme",
      "url": "https://ib.wyattau.com",
      "topic_count": 24
    },
    {
      "slug": "alevel-maths-physics",
      "name": "A-Level Maths & Physics",
      "description": "A-Level Mathematics and Physics",
      "url": "https://alevel-maths-physics.wyattau.com",
      "topic_count": 18
    }
  ],
  "meta": { "total": 8, "page": 1, "per_page": 20, "total_pages": 1 },
  "links": { "self": "/api/v1/subjects", "next": null, "prev": null }
}
```

### `GET /api/v1/subjects/:subject/topics`

List topics within a subject.

**Path parameters:**

| Param | Description |
|---|---|
| `subject` | Subject slug (e.g. `ib`, `dse`, `university`) |

**Example response:**

```json
{
  "data": [
    {
      "slug": "mathematics-hl",
      "name": "Mathematics HL",
      "description": "Higher Level Mathematics",
      "content_count": 45
    }
  ],
  "meta": { "total": 24, "page": 1, "per_page": 20, "total_pages": 2 },
  "links": { "self": "/api/v1/subjects/ib/topics", "next": "/api/v1/subjects/ib/topics?page=2", "prev": null }
}
```

### `GET /api/v1/content/:slug`

Get a single content page by its slug.

**Path parameters:**

| Param | Description |
|---|---|
| `slug` | URL slug of the content page |

**Example response:**

```json
{
  "data": {
    "slug": "ib/mathematics-hl/algebra",
    "title": "Algebra",
    "subject": "ib",
    "topic": "mathematics-hl",
    "html_content": "<p>Content here...</p>",
    "last_updated": "2026-05-30T00:00:00Z",
    "url": "https://ib.wyattau.com/docs/mathematics-hl/algebra"
  },
  "meta": null,
  "links": { "self": "/api/v1/content/ib/mathematics-hl/algebra" }
}
```

### `GET /api/v1/search?q=...`

Search content across all subjects using Algolia.

**Query parameters:**

| Param | Type | Default | Description |
|---|---|---|---|
| `q` | string | **required** | Search query |
| `subject` | string | all | Filter to a subject slug |
| `page` | int | 1 | Page number |
| `per_page` | int | 20 | Results per page |

**Example response:**

```json
{
  "data": [
    {
      "slug": "ib/mathematics-hl/quadratics",
      "title": "Quadratic Functions",
      "subject": "ib",
      "snippet": "The discriminant of a quadratic <em>ax² + bx + c</em> is given by b² - 4ac...",
      "url": "https://ib.wyattau.com/docs/mathematics-hl/quadratics"
    }
  ],
  "meta": { "total": 5, "page": 1, "per_page": 20, "total_pages": 1 },
  "links": { "self": "/api/v1/search?q=quadratics", "next": null, "prev": null }
}
```

## Error Responses

| Status | Code | Description |
|---|---|---|
| 400 | `INVALID_QUERY` | Missing or malformed query parameters |
| 401 | `UNAUTHORIZED` | Missing or invalid API key |
| 404 | `NOT_FOUND` | Content or subject not found |
| 429 | `RATE_LIMITED` | Too many requests |
| 500 | `INTERNAL_ERROR` | Server error |

## SDK

A TypeScript client is available:

```bash
npm install @wyattsnotes/api-client
```

```ts
import { WyattsNotesClient } from '@wyattsnotes/api-client';
const client = new WyattsNotesClient({ apiKey: 'wn_live_...' });
const subjects = await client.subjects.list();
```

## Worked Examples

### Example 1: Fetching IB Mathematics HL Topics
**Problem:** Retrieve page 1 of topics for the IB subject (slug `ib`), showing up to 10 results.
**Solution:**
```
GET /api/v1/subjects/ib/topics?page=1&per_page=10
```
Headers: `X-API-Key: wn_live_abc123def456`

Expected response contains `"data"` array with topic objects including slug, name, description, and content_count. Check `X-RateLimit-Remaining` to confirm quota.

### Example 2: Searching for Quadratic Content
**Problem:** Search all subjects for content mentioning "quadratic equations", limited to A-Level results.
**Solution:**
```
GET /api/v1/search?q=quadratic+equations&subject=alevel-maths-physics
```
Returns a paginated list with snippets and URLs. If `total_pages` > 1, follow the `"next"` link.

### Example 3: Handling Rate Limits
**Problem:** Your integration hits a 429 response. How do you recover?
**Solution:** Inspect the `Retry-After` header (if present) or the `X-RateLimit-Reset` timestamp. Pause requests until the window resets, then resume. Implement exponential backoff as a safety measure.

## Common Pitfalls

- **Missing API key header:** Requests without `X-API-Key` return 401. Verify the header is set before every request.
- **Ignoring pagination:** The `"data"` array is paginated. Always check `meta.total_pages` and follow `"next"` links rather than assuming a single page contains all results.
- **Hardcoding base URLs:** Different deployment environments (staging, production) use different base URLs. Use an environment variable for the base URL.
- **Parsing errors without checking status codes:** Always check the HTTP status code and the `code` field in error responses before parsing `"data"`.

## Summary

The Content REST API provides paginated, authenticated access to subjects, topics, content pages, and search across all WyattsNotes qualification levels. All endpoints require an API key and return a consistent JSON envelope with data, metadata, and pagination links. Rate limits are enforced at 100 requests per minute per key.
