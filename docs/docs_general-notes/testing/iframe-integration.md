---
title: Iframe Integration
date: 2025-07-11T23:22:50.056Z
tags:
  - CS
categories:
  - CS
slug: godbolt-integration
---

## Godbolt

<div className="godbolt-container">
  <iframe
    width="100%"
    height="800"
    src="https://godbolt.org/e#z:OYLghAFBqd5QCxAYwPYBMCmBRdBLAF1QCcAaPECAMzwBtMA7AQwFtMQByARg9KtQYEAysib0QXAEx8BBAKoBnTAAUAHpwAMvAFYhptJg1DIApJIBCZ86SX1kBPAMqN0AYVS0AriwYgALADspC4AMngMmABy3gBGmMQSAGykAA6oCoSODO5ePv5BaRkOAmER0SxxCVzJtpj2WUIETMQEOd6%2BgTaYdsUMjc0EpVGx8Uk2TS1teZ0KE4PhwxWj1QCUNqiexMjsHGYAzOHIXlgA1CZ7rmLAJIQILOfYJhoAgvuHx5hnF5iqdZ69Dyer0kBwYR08p3OrjQLBS9FUgJebzBHy%2Brkcs2ImFYiOBoPBkIumPCwFxyIJnyhADc6kRiGSQe8IZSLsRDMBMAoyS80AxZj8UsQThkAF6YAD6BBOAHcvgARE4ADg0pBOCHlJ0kflVLCYqnFhHiGq4Gg050sPIE/NUguFBHQIBAxKMJ2QCGaCg1ZkkJwAdCAALTnOVWABU%2BzMAFYAALe81AoHhKW68IQFZnAIW54nHN2h0gGn2EhQ2b552kvbYE7EVDShQQBAreMvXN5x38Yji7FuiClx0/P69R0pZqqvsFvCYOuOxxNCAaTwi1WN31xYCptZtidThQz1BzhdLtUrX0uNOkIGt1smSOWSSJG9yiC82bCvBiyUnACe6ZMmcvV6AegGwxPQJx4LqwAahAXC%2BhoJwBpqcEnKG34nAA9MezbZoBV41nWN7mF%2Bj4auOVKTtOICzkw86Lqq0pNi2uHMX%2BrhbuRO6OgQbJ8h2LAQIRZgPpGT6ihKUqqL%2B/5McxsknMBnigZ8WJiNBey%2BpGKEnKoGEyghSGRk2exZnJcnjjCcI/FCClKQ8roQCptCqhBTDAJuIoaqYxkAaZuFiZ%2BeAama3kyb5V7SggdCfL29qOgwJD8SKv4XMGJx%2BMhQlCeBVhWGiJy6vqhrEIxOFhbJHmpR5qEVRYrrYWVgFYgQmwMOBXxVgVBoEEa5wAGInGAHADUNICuu6xBcregVRmNHq%2BmJaaPvVDV/nKUlseOPEcruIBECWsVOtxJIPItIWlVeq1GVmPknB2JzPlaUpMP8qBZfhJyjfhCglcx5kbFKUJQtWtZokDg03q4DDg2dq1Ahway0Jwka8L4HBaKQqCcK4OW1QoGxbJSIKSLwBCaPDawINiWAJOeADWEimqQiMcH4vAsCAkYqqj6OYxwvC7iqpNo/DpBwLASADsgL1kBQEDNMACjKIY3RCAgtaozwpAWXQTC9ErES0Kr6tk1rqCwlFCTAFwkZcKb5v0MQkSsDsvDaw7ADy/xG9K3O8JLzzEArnB%2B78yCNPgqO8PwggiGI7BSDIgiKCo6jC6Qui2wYRgoDj1i0HgMS7pAayoCkvS7hwAbu3sCGlsGpgWFYIK8KgNLEMQeBYEX57EJ4ggQZgAAqqAeN3ax45s2x6OMEf6yras%2B5wmvSmyKRLyLzPI6QvsY5w2Ch9L2mKokAaJH4JzAMgyAnNbvpcPd2ONxYqq4IQJBnETKwk2TKwU1ToznmZqzUg7NObbxNrzfmIBBY/wRpwPYKMIHB1IELLQv9SBtwyE4PwQA%3D%3D"
    title="Compiler Explorer"
    sandbox="allow-scripts allow-same-origin"
    loading="lazy"
  ></iframe>
</div>

- Theming is not embedded with iframe
- Font size is embedded with iframe

## Dartpad

<div className="godbolt-container">
  <iframe
    width="100%"
    height="800"
    src="https://dartpad.dev/embed-inline.html?id=f6b391a0280187585c9256ef42e5d913&split=20&theme=dark"
    title="Dartpad Embedded"
    sandbox="allow-scripts allow-same-origin"
    loading="lazy"
  ></iframe>
</div>

- Gemini cannot be turned off
- Place gist after `?id=` and before `&split`

## Security Considerations

### The `sandbox` Attribute

The `sandbox` attribute restricts what an iframe is allowed to do. Always use it — omitting it
grants the embedded page the same privileges as the parent page.

| Token                  | Effect                                                                 |
| ---------------------- | ---------------------------------------------------------------------- |
| (empty)                | Most restrictive: no scripts, no forms, no same-origin, no popups      |
| `allow-scripts`        | Allows JavaScript execution                                            |
| `allow-same-origin`    | Allows the iframe to be treated as same-origin (needed for API access) |
| `allow-popups`         | Allows `window.open` / `target="_blank"`                               |
| `allow-forms`          | Allows form submission                                                 |
| `allow-downloads`      | Allows downloading files                                               |
| `allow-top-navigation` | Allows the iframe to navigate the top-level page (avoid this)          |

:::warning
Never combine `allow-scripts` with `allow-same-origin` if the iframe source is
user-controlled or untrusted. Together they allow the embedded page to strip its own sandbox
restrictions via JavaScript.
:::

For trusted embeds like Godbolt and Dartpad, `sandbox="allow-scripts allow-same-origin"` is
acceptable because both services are well-known and operate over HTTPS.

### Content Security Policy (CSP)

If your site sets a CSP via HTTP headers or `<meta>` tags, iframes add complexity:

- `frame-src` (or the older `child-src`) controls which URLs can be embedded.
- `frame-ancestors` on the **embedded** site controls who can embed it. Many services set
  `frame-ancestors 'self'` to prevent embedding, which is why not every site works inside an iframe.

Example CSP header that allows Godbolt and Dartpad:

```
Content-Security-Policy: frame-src https://godbolt.org https://dartpad.dev;
```

### HTTPS Only

Always use `https://` for iframe `src` values. Browsers will block mixed content (loading HTTP
iframes from an HTTPS parent) without warning the user — the iframe simply will not render.

## Cross-Origin Communication with `postMessage`

When the parent page and iframe are on different origins, direct DOM access is blocked. Use
`window.postMessage` to send data between them.

### Parent to iframe

```js
const iframe = document.querySelector('iframe');
const iframeWindow = iframe.contentWindow;

iframeWindow.postMessage({ type: 'godbolt-set-language', language: 'c++' }, 'https://godbolt.org');
```

### Iframe to parent

Inside the embedded page:

```js
window.parent.postMessage(
  { type: 'compilation-result', asm: '...' },
  'https://your-docusaurus-site.com',
);
```

### Receiving messages

```js
window.addEventListener('message', (event) => {
  if (event.origin !== 'https://godbolt.org') return;
  if (event.data.type === 'compilation-result') {
    console.log('Assembly output:', event.data.asm);
  }
});
```

Key rules:

- **Always check `event.origin`.** Never trust a message without verifying where it came from.
- **Use a structured `data` object** with a `type` field so the listener can dispatch appropriately.
- **Specify `targetOrigin` explicitly** in `postMessage` — never use `'*'` if you know the target.

## Responsive Iframes

Fixed `width` and `height` attributes work but break on narrow screens. Common approaches:

### Aspect Ratio Method

Use the CSS `aspect-ratio` property to maintain proportions:

```css
.iframe-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.iframe-wrapper iframe {
  width: 100%;
  height: 100%;
  border: none;
}
```

### Scrollable Container

When the embedded content is taller than the viewport:

```css
.iframe-scroll-container {
  width: 100%;
  max-height: 600px;
  overflow-y: auto;
  border: 1px solid var(--ifm-color-emphasis-300);
  border-radius: 6px;
}

.iframe-scroll-container iframe {
  width: 100%;
  min-height: 100%;
  border: none;
  display: block;
}
```

### Docusaurus-Specific Wrapper

This site uses a `godbolt-container` CSS class (though currently not defined in custom.css — add it
if needed):

```css
.godbolt-container {
  width: 100%;
  margin: 1.5rem 0;
  border: 1px solid var(--ifm-color-emphasis-300);
  border-radius: 6px;
  overflow: hidden;
}
```

This wraps the iframe with consistent spacing and a subtle border.

## Lazy Loading

The `loading="lazy"` attribute defers iframe loading until the element is near the viewport. This is
critical for pages with multiple or heavy embeds.

```jsx
<iframe src="https://godbolt.org/e#..." loading="lazy" title="Compiler Explorer"></iframe>
```

Browser support is universal for `loading="lazy"` on iframes. There is no need for a
JavaScript-based intersection observer unless you need precise control over when the iframe
initializes.

### Lazy Loading with `srcdoc` Placeholder

For a polished experience, show a placeholder and swap the real `src` on interaction:

```jsx
function LazyIframe({ src, title }) {
  const [loaded, setLoaded] = React.useState(false);

  if (!loaded) {
    return (
      <button
        onClick={() => setLoaded(true)}
        style={{ padding: '2rem', width: '100%', cursor: 'pointer' }}
      >
        Click to load {title}
      </button>
    );
  }

  return (
    <iframe
      src={src}
      title={title}
      width="100%"
      height="600"
      sandbox="allow-scripts allow-same-origin"
    />
  );
}
```

This approach saves bandwidth and avoids executing third-party scripts until the user explicitly
opts in.

## Common Pitfalls

### X-Frame-Options and CSP Blocking

If an iframe is blank or shows a browser error, the target site likely sets `X-Frame-Options: DENY`
or `SAMEORIGIN`, or uses `frame-ancestors` in CSP. There is no workaround — the site owner must
allow embedding.

### Cookie Partitioning (Third-Party)

Modern browsers (Chrome, Firefox, Safari) partition third-party cookies in iframes. If the embedded
service relies on cookies for authentication or preferences, the user may need to interact with the
service directly first.

### Focus Trapping

When an iframe gains focus (e.g., user clicks inside it), keyboard events are captured by the
iframe. The parent page loses keyboard navigation. This is by design but can confuse users who
expect Tab / Escape to work for the parent site. Consider adding a visual hint near interactive
iframes.

### Print Issues

Iframes do not print well. The browser may show a blank rectangle or only the visible portion. If
printable content is needed, extract the data and render it in the parent page instead of embedding.

### Mobile Performance

Each iframe creates a separate browsing context with its own document, scripts, and style sheets. On
mobile devices with limited memory, multiple iframes can cause significant slowdowns. Limit the
number of iframes per page and prefer lazy loading.

## Docusaurus-Specific Patterns

### Embedding in MDX

In Docusaurus MDX files, iframes are written as JSX:

```jsx
<iframe
  width="100%"
  height="500"
  src="https://example.com/embed"
  title="Descriptive title"
  sandbox="allow-scripts"
  loading="lazy"
/>
```

The `title` attribute is required for accessibility. Docusaurus build will warn if it is missing.

### Wrapping in a Component

For repeated embed patterns, create a React component in `src/components/`:

```jsx
// src/components/CodeEmbed.jsx
function CodeEmbed({ src, height = 500, title = 'Code embed' }) {
  return (
    <div className="godbolt-container">
      <iframe
        width="100%"
        height={height}
        src={src}
        title={title}
        sandbox="allow-scripts allow-same-origin"
        loading="lazy"
      />
    </div>
  );
}
```

Then use it in any MDX file:

```mdx
import CodeEmbed from '@site/src/components/CodeEmbed';

<CodeEmbed src="https://godbolt.org/e#..." title="My snippet" height="600" />
```

### Godbolt URL Construction

Godbolt share URLs are long encoded strings. To construct one manually:

1. Open [godbolt.org](https://godbolt.org) and set up the compiler, flags, and source code.
2. Click "Share" and copy the URL.
3. Everything after `#` is the state hash. URL-encode it if embedding in a query parameter.

The base embed URL pattern is:

```
https://godbolt.org/e#<encoded-state>
```

Godbolt supports additional embed parameters:

| Parameter     | Description                          |
| ------------- | ------------------------------------ |
| `#z:...`      | Compressed source and compiler state |
| `&hideEditor` | Hides the source editor panel        |
| `&hideOutput` | Hides the compiler output panel      |

### Dartpad URL Construction

Dartpad embed URLs follow this pattern:

```
https://dartpad.dev/embed-inline.html?id=<gist-id>&split=<ratio>&theme=<dark|light>
```

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| `id`      | GitHub Gist ID containing the Dart source      |
| `split`   | Editor/preview split ratio (0–100)             |
| `theme`   | `dark` or `light` — must match the parent site |

Note that Dartpad's theme does not inherit from the parent page. It must be set explicitly in the
URL. If the site supports dark mode toggling, the Dartpad theme will not switch dynamically without
JavaScript intervention.

:::
