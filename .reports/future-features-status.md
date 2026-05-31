# Future Features Status

## Implemented Scaffolds (Code Exists, Needs Activation)

### Browser Extension
- **Status**: Scaffold complete (manifest, popup, search, content script)
- **Location**: `browser-extension/`
- **Activation requires**: Chrome Web Store developer account ($5), icon assets, Algolia API key
- **Effort to activate**: 4-8 hours
- **Blocker**: None

### Mobile App
- **Status**: Scaffold complete (Expo app with tab navigation)
- **Location**: `mobile-app/`
- **Activation requires**: Expo account, app store developer accounts
- **Effort to activate**: 40-80 hours (content loading, offline, push)
- **Blocker**: Content API server needs deployment first

### REST API
- **Status**: Server scaffold complete (native Node.js HTTP)
- **Location**: `scripts/content-api-server.mjs`
- **Activation requires**: Server deployment (Cloudflare Workers or Railway)
- **Effort to activate**: 8-16 hours (auth, pagination, rate limiting)
- **Blocker**: None

### Push Notifications
- **Status**: Service worker handler complete
- **Location**: `src/plugins/push-notifications/push-handler.js`
- **Activation requires**: VAPID key generation, Cloudflare Workers backend
- **Effort to activate**: 16-24 hours (permission flow, subscription management)
- **Blocker**: Privacy review needed

### AI Integration
- **Status**: TF-IDF semantic search running, architecture doc for OpenAI upgrade
- **Location**: `scripts/semantic-search-server.mjs`, `.reports/ai-integration-architecture.md`
- **Activation requires**: OpenAI API key ($0.03/year), embedding generation
- **Effort to activate**: 24-40 hours (embeddings, index, search endpoint)
- **Blocker**: Cost/benefit analysis for educational content

### Translation Pipeline
- **Status**: Pipeline functional, 1/207 IB files translated to Chinese
- **Location**: `scripts/translation-pipeline.mjs`, `docs/docs_ib/i18n/zh/`
- **Activation requires**: Translators (human or AI-reviewed)
- **Effort to activate**: 40-80 hours per language per site
- **Blocker**: Translation quality assurance process
