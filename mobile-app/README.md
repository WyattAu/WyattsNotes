# Wyatt's Notes — Mobile App

A React Native (Expo) mobile app for accessing study notes offline on iOS and Android.

## Prerequisites

- Node.js 18+
- Expo CLI: `npm install -g expo-cli` (or use `npx`)
- iOS Simulator (Xcode) or Android Emulator
- Expo Go app on a physical device for testing

## Setup

```bash
npx create-expo-app@latest mobile-app --template tabs
cd mobile-app
npm install @react-navigation/bottom-tabs @react-navigation/native
npm install @gorhom/bottom-sheet react-native-mmkv expo-secure-store
```

Replace the generated `app/` directory with the files from this scaffold.

## Navigation Structure

The app uses Expo Router (file-based routing) with a tab navigator:

| Tab | Route | Description |
|---|---|---|
| Home | `app/(tabs)/index.tsx` | Browse subjects and topics |
| Search | `app/(tabs)/search.tsx` | Full-text search via Algolia |
| Bookmarks | `app/(tabs)/bookmarks.tsx` | Saved content for offline |
| Settings | `app/(tabs)/settings.tsx` | Language, theme, notifications |

Each subject detail screen is at `app/subject/[slug].tsx` and each content page at `app/content/[...slug].tsx`.

## Content Loading

Content is fetched from the REST API:

```ts
const API_BASE = 'https://wyattsnotes.wyattau.com/api/v1';

async function fetchSubjects(): Promise<Subject[]> {
  const res = await fetch(`${API_BASE}/subjects`, {
    headers: { 'X-API-Key': await getApiKey() },
  });
  const json = await res.json();
  return json.data;
}
```

## Offline Support

Content is cached locally using `react-native-mmkv` for fast key-value storage:

1. **Auto-cache**: When a page is loaded, its HTML is stored in MMKV keyed by slug.
2. **Cache invalidation**: The `last_updated` field from the API is compared; stale content is re-fetched.
3. **Offline indicator**: A banner shows when the device is offline and cached content is displayed.
4. **Bookmark sync**: Bookmarked slugs are stored in MMKV and synced to the server when back online.

```ts
import { MMKV } from 'react-native-mmkv';
const storage = new MMKV();

function cacheContent(slug: string, html: string) {
  storage.set(`content:${slug}`, html);
  storage.set(`content:${slug}:timestamp`, Date.now().toString());
}

function getCachedContent(slug: string): string | null {
  return storage.getString(`content:${slug}`);
}
```

## Push Notifications

Setup via Expo Notifications:

1. Generate push credentials: `npx expo push:android:generate` / Apple certificate upload.
2. Store credentials in `eas.json` under `extra.expoPushNotification`.

```ts
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({ shouldShowAlert: true, shouldPlaySound: false, shouldSetBadge: true }),
});

async function requestPermissions() {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') return;
  const token = (await Notifications.getExpoPushTokenAsync()).data;
  await registerPushToken(token);
}
```

## Build and Deployment

### Development

```bash
npx expo start        # Start dev server
npx expo start --ios  # iOS only
npx expo start --android  # Android only
```

### Production Build (EAS)

Install EAS CLI and build:

```bash
npm install -g eas-cli
eas build --platform ios
eas build --platform android
eas submit --platform ios   # Submit to App Store
eas submit --platform android  # Submit to Google Play
```

Configuration in `eas.json`:

```json
{
  "build": {
    "ios": { "scheme": "WyattsNotes" },
    "android": { "package": "com.wyattau.wyattsnotes" }
  }
}
```

## Environment Variables

Create `.env` in the mobile app root:

```
EXPO_PUBLIC_API_BASE=https://wyattsnotes.wyattau.com/api/v1
EXPO_PUBLIC_ALGOLIA_APP_ID=SJ0ASLWZCS
EXPO_PUBLIC_ALGOLIA_API_KEY=your-key
EXPO_PUBLIC_ALGOLIA_INDEX_NAME=wyattsnotes_all
```

## Project Structure

```
mobile-app/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx      # Home — subject list
│   │   ├── search.tsx     # Algolia search
│   │   ├── bookmarks.tsx  # Saved content
│   │   └── settings.tsx   # Preferences
│   ├── subject/[slug].tsx # Subject detail
│   └── content/[...slug].tsx  # Content viewer
├── components/
│   ├── ContentCard.tsx
│   ├── SearchBar.tsx
│   └── WebView.tsx
├── lib/
│   ├── api.ts
│   ├── cache.ts
│   └── theme.ts
├── app.json
├── eas.json
└── package.json
```
