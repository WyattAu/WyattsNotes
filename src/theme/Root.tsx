import React, { useEffect } from 'react';

/**
 * Cross-domain theme synchronization.
 *
 * Docusaurus stores its color mode preference in localStorage under the key
 * `docusaurus.theme` (or `theme` depending on the version). Because each
 * subdomain (academics.wyattau.com, alevel.wyattau.com, etc.) has its own
 * localStorage origin, the preference does not persist when a user navigates
 * between sub-sites.
 *
 * This script synchronizes the preference via a cookie set on the parent
 * domain `.wyattau.com`. On every page load:
 *
 * 1. If `localStorage` has a preference but the cookie does not, write the
 *    cookie (first visit or cookie expired).
 * 2. If the cookie has a preference but `localStorage` does not, read the
 *    cookie and seed `localStorage` before Docusaurus initializes.
 * 3. If both agree, do nothing.
 *
 * The cookie path is set to `/` and the domain to `.wyattau.com` so it is
 * sent with every request to any subdomain.
 */
const THEME_SYNC_SCRIPT = `
(function() {
  var STORAGE_KEY = 'docusaurus.theme';
  var COOKIE_NAME = 'wyattsnotes-theme';
  var COOKIE_DOMAIN = '.wyattau.com';
  var COOKIE_MAX_AGE = 365 * 24 * 60 * 60;

  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  }

  function setCookie(name, value, domain, maxAge) {
    document.cookie =
      name + '=' + encodeURIComponent(value) +
      '; domain=' + domain +
      '; path=/' +
      '; max-age=' + maxAge +
      '; SameSite=Lax' +
      '; Secure';
  }

  function getStorageTheme() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        return parsed && parsed.colorMode ? parsed.colorMode : null;
      }
    } catch (e) {}
    return null;
  }

  function setStorageTheme(mode) {
    try {
      var existing = {};
      try { existing = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch (e) {}
      existing.colorMode = mode;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    } catch (e) {}
  }

  function syncToCookie(mode) {
    if (mode && mode !== getCookie(COOKIE_NAME)) {
      setCookie(COOKIE_NAME, mode, COOKIE_DOMAIN, COOKIE_MAX_AGE);
    }
  }

  // --- Initial sync on page load ---
  var storageTheme = getStorageTheme();
  var cookieTheme = getCookie(COOKIE_NAME);

  if (storageTheme && !cookieTheme) {
    syncToCookie(storageTheme);
  } else if (cookieTheme && !storageTheme) {
    setStorageTheme(cookieTheme);
  } else if (storageTheme && cookieTheme && storageTheme !== cookieTheme) {
    syncToCookie(storageTheme);
  }

  // --- Watch for in-page theme toggles ---
  // Docusaurus sets data-theme on <html> when the user clicks the toggle.
  var currentTheme = document.documentElement.getAttribute('data-theme');
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(m) {
      if (m.attributeName === 'data-theme') {
        var newTheme = document.documentElement.getAttribute('data-theme');
        if (newTheme && newTheme !== currentTheme) {
          currentTheme = newTheme;
          syncToCookie(newTheme);
        }
      }
    });
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  // --- Cross-tab sync via storage event ---
  window.addEventListener('storage', function(e) {
    if (e.key === STORAGE_KEY) {
      try {
        var parsed = JSON.parse(e.newValue);
        if (parsed && parsed.colorMode) {
          syncToCookie(parsed.colorMode);
        }
      } catch (err) {}
    }
  });
})();
`;

export default function Root({ children }: { children: React.ReactNode }): React.ReactElement {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dsn = (window as any).__SENTRY_DSN__;

    if (typeof window !== 'undefined' && window.Sentry && dsn) {
      window.Sentry.init({
        dsn,
        environment: process.env.NODE_ENV || 'production',
        sampleRate: 0.1,
        tracesSampleRate: 0.05,
        replaysSessionSampleRate: 0.01,
        integrations: [
          window.Sentry.browserTracingIntegration(),
          window.Sentry.replayIntegration({
            maskAllText: false,
            blockAllMedia: false,
          }),
        ],
      });
    }
  }, []);

  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: "Wyatt's Notes",
            url: 'https://wyattsnotes.wyattau.com',
            description:
              'Free, rigorous study notes for IB, A-Level, GCSE, AP, Scottish Highers, Irish LC, and computer science.',
            author: {
              '@type': 'Person',
              name: 'Wyatt Au',
            },
          }),
        }}
      />
      <script dangerouslySetInnerHTML={{ __html: THEME_SYNC_SCRIPT }} />
    </>
  );
}
