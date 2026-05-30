(function () {
  'use strict';

  if (document.getElementById('wyattsnotes-fab')) return;

  var fab = document.createElement('button');
  fab.id = 'wyattsnotes-fab';
  fab.title = "Search Wyatt's Notes";
  fab.setAttribute('aria-label', "Search Wyatt's Notes");
  fab.textContent = 'WN';
  fab.style.cssText = [
    'position:fixed',
    'bottom:24px',
    'right:24px',
    'width:48px',
    'height:48px',
    'border-radius:50%',
    'border:none',
    'background:#1a1a2e',
    'color:#fff',
    'font-size:16px',
    'font-weight:700',
    'cursor:pointer',
    'z-index:2147483647',
    'box-shadow:0 2px 8px rgba(0,0,0,0.3)',
    'transition:transform 0.15s,box-shadow 0.15s',
    'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
  ].join(';');

  fab.addEventListener('mouseenter', function () {
    fab.style.transform = 'scale(1.1)';
    fab.style.boxShadow = '0 4px 16px rgba(0,0,0,0.4)';
  });

  fab.addEventListener('mouseleave', function () {
    fab.style.transform = 'scale(1)';
    fab.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
  });

  fab.addEventListener('click', function () {
    var query = window.getSelection().toString().trim();
    if (query) {
      var url = 'https://wyattsnotes.wyattau.com/search?q=' + encodeURIComponent(query);
    } else {
      var url = 'https://wyattsnotes.wyattau.com/search';
    }
    window.open(url, '_blank');
  });

  document.body.appendChild(fab);
})();
