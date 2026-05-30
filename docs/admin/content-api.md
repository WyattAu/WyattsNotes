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
