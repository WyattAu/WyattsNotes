self.addEventListener('push', (event) => {
  let data = {
    title: 'WyattsNotes',
    body: 'New update available',
    icon: '/img/logo.png',
    url: '/',
  };

  if (event.data) {
    try {
      const payload = event.data.json();
      data = {
        title: payload.title || data.title,
        body: payload.body || data.body,
        icon: payload.icon || data.icon,
        url: payload.url || payload.data?.url || '/',
      };
    } catch {
      data.body = event.data.text() || data.body;
    }
  }

  const category = data.title.toLowerCase().includes('reminder')
    ? 'reminder'
    : data.title.toLowerCase().includes('announcement')
      ? 'announcement'
      : 'update';

  const options = {
    body: data.body,
    icon: data.icon,
    badge: '/img/notification-badge.png',
    tag: `${category}-${Date.now()}`,
    category,
    data: { url: data.url, type: category },
    renotify: true,
  };

  event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const urlToOpen = event.notification.data?.url || '/';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
      for (const client of clients) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          return client.focus().then(() => client.navigate(urlToOpen));
        }
      }
      return self.clients.openWindow(urlToOpen);
    }),
  );
});
