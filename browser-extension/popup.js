const ALGOLIA_APP_ID = 'SJ0ASLWZCS';
const ALGOLIA_INDEX_NAME = 'wyattsnotes_all';
const ALGOLIA_API_KEY = 'algolia-public-key';
const SUBJECT_LABELS = {
  ib: 'IB',
  dse: 'DSE',
  'alevel-maths-physics': 'A-Level Maths & Physics',
  'alevel-sciences': 'A-Level Sciences',
  qualifications: 'Qualifications',
  programming: 'Programming',
  university: 'University',
};

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('results');

let debounceTimer = null;

searchInput.addEventListener('input', () => {
  clearTimeout(debounceTimer);
  const query = searchInput.value.trim();
  debounceTimer = setTimeout(() => {
    if (query.length >= 2) {
      performSearch(query);
    } else {
      resultsContainer.innerHTML = '<div class="empty">Type to search across all subjects</div>';
    }
  }, 300);
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    clearTimeout(debounceTimer);
    const query = searchInput.value.trim();
    if (query) performSearch(query);
  }
});

async function performSearch(query) {
  resultsContainer.innerHTML = '<div class="empty">Searching...</div>';
  try {
    const url = `https://${ALGOLIA_APP_ID}-dsn.algolia.net/1/indexes/${encodeURIComponent(ALGOLIA_INDEX_NAME)}/query`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Algolia-Application-Id': ALGOLIA_APP_ID,
        'X-Algolia-API-Key': ALGOLIA_API_KEY,
      },
      body: JSON.stringify({ query, hitsPerPage: 10, attributesToRetrieve: ['title', 'url', 'hierarchy', 'content'] }),
    });

    if (!res.ok) {
      resultsContainer.innerHTML = '<div class="empty">Search unavailable</div>';
      return;
    }

    const data = await res.json();
    const hits = data.hits || [];

    if (hits.length === 0) {
      resultsContainer.innerHTML = '<div class="empty">No results found</div>';
      return;
    }

    resultsContainer.innerHTML = hits
      .map((hit) => {
        const title = hit.title || hit.hierarchy?.lvl1 || 'Untitled';
        const snippet = getSnippet(hit);
        const subject = guessSubject(hit.url);
        const label = SUBJECT_LABELS[subject] || subject;
        return `<div class="result-item" data-url="${hit.url}">
          <div class="result-title">${escapeHtml(title)}</div>
          <div class="result-snippet">${escapeHtml(snippet)}</div>
          <div class="result-subject">${escapeHtml(label)}</div>
        </div>`;
      })
      .join('');

    resultsContainer.querySelectorAll('.result-item').forEach((el) => {
      el.addEventListener('click', () => {
        const url = el.getAttribute('data-url');
        if (url) {
          chrome.tabs.create({ url, active: true });
          window.close();
        }
      });
    });
  } catch {
    resultsContainer.innerHTML = '<div class="empty">Search failed. Check your connection.</div>';
  }
}

function getSnippet(hit) {
  const text = hit.content || hit._snippetResult?.content?.value || '';
  return text.length > 120 ? text.slice(0, 120) + '...' : text;
}

function guessSubject(url) {
  try {
    const host = new URL(url).hostname;
    const parts = host.split('.');
    const sub = parts[0];
    const known = Object.keys(SUBJECT_LABELS);
    if (known.includes(sub)) return sub;
    return 'main';
  } catch {
    return 'main';
  }
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
