# Push Notification Setup

Design document for implementing Web Push notifications on WyattsNotes.

## Architecture Overview

```
Client (SW) ←→ Browser Push API ←→ Push Server (Cloudflare Workers) ←→ VAPID
```

## 1. Service Worker Push Event Handler

The service worker handles two events:

- **`push`** — Receives push messages from the server, constructs and displays a `Notification`.
- **`notificationclick`** — Opens the relevant page when the user taps a notification.

The handler lives in `src/plugins/push-notifications/push-handler.js` and is imported into the main service worker during the build.

## 2. Notification Permission Flow

1. User visits a docs page and sees a "Subscribe to updates" banner (dismissed per-session).
2. Clicking the button calls `Notification.requestPermission()`.
3. If granted, the client generates a push subscription via `serviceWorkerRegistration.pushManager.subscribe()` using the VAPID public key.
4. The subscription object is POSTed to the Cloudflare Workers backend for storage.

**Permission is never requested on first visit** — only after explicit user action.

## 3. Subscription Management (VAPID Keys)

- VAPID key pair generated once and stored in Cloudflare Workers secrets (`VAPID_PRIVATE_KEY`, `VAPID_PUBLIC_KEY`).
- Public key is embedded in the client-side code.
- Subscriptions are stored in KV with the user's endpoint as the key.
- Subscriptions are cleaned up on `pushsubscriptionchange` events.

## 4. Notification Types

| Type | Trigger | Example |
|---|---|---|
| `update` | New content published | "New study guide: Linear Algebra" |
| `reminder` | Scheduled study reminder | "Time to review: IB Chemistry Topic 4" |
| `announcement` | Site announcements | "New practice problems available" |

Each notification includes a `data` object with `{ type, url, subject }`.

## 5. Privacy Considerations

- No personal data collected beyond the push subscription endpoint.
- Users can unsubscribe at any time via browser settings or an in-page toggle.
- No third-party push services — all delivery runs through our own Cloudflare Workers.
- Subscriptions are not shared with analytics or advertising.
- GDPR-compliant: no consent popup, only user-initiated opt-in.

## 6. Implementation: Web Push API

### Client (browser)

```js
const registration = await navigator.serviceWorker.ready;
const subscription = await registration.pushManager.subscribe({
  userVisibleOnly: true,
  applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
});
await fetch('/api/v1/push/subscribe', {
  method: 'POST',
  body: JSON.stringify(subscription),
});
```

### Backend (Cloudflare Workers)

```js
await webpush.sendNotification(subscription, JSON.stringify(payload), {
  vapidDetails: {
    subject: 'mailto:admin@wyattsnotes.com',
    publicKey: VAPID_PUBLIC_KEY,
    privateKey: VAPID_PRIVATE_KEY,
  },
});
```

## 7. Backend: Cloudflare Workers

- **Route**: `POST /api/v1/push/subscribe` — register subscription
- **Route**: `DELETE /api/v1/push/subscribe` — remove subscription
- **Route**: `POST /api/v1/push/broadcast` — send notification to all subscribers (admin-only, auth protected)
- Storage: Cloudflare KV binding `PUSH_SUBSCRIPTIONS`

Dependencies: `web-push` npm package (edge-compatible build).
