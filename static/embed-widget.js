(function () {
  'use strict';

  var script = document.currentScript;
  if (!script) return;

  var subject = script.getAttribute('data-subject') || '';
  var topic = script.getAttribute('data-topic') || '';
  var width = script.getAttribute('data-width') || '100%';
  var height = parseInt(script.getAttribute('data-height') || '500', 10);
  var theme = script.getAttribute('data-theme') || 'light';
  var targetId = script.getAttribute('data-target') || '';

  if (!subject) {
    console.error('[WyattsNotes Widget] data-subject is required');
    return;
  }

  var BASE_URL = 'https://wyattsnotes.wyattau.com';
  var SUBJECT_URLS = {
    ib: 'https://ib.wyattau.com',
    dse: 'https://dse.wyattau.com',
    'alevel-maths-physics': 'https://alevel-maths-physics.wyattau.com',
    'alevel-sciences': 'https://alevel-sciences.wyattau.com',
    qualifications: 'https://qualifications.wyattau.com',
    programming: 'https://programming.wyattau.com',
    university: 'https://university.wyattau.com',
  };

  var baseUrl = SUBJECT_URLS[subject] || BASE_URL;
  var path = topic ? '/docs/' + topic : '';

  var container = document.createElement('div');
  container.style.width = width;
  container.style.maxWidth = '100%';
  container.style.overflow = 'hidden';
  container.style.borderRadius = '8px';
  container.style.border = theme === 'dark' ? '1px solid #444' : '1px solid #e0e0e0';
  container.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

  var header = document.createElement('div');
  header.style.cssText =
    'display:flex;align-items:center;justify-content:space-between;padding:6px 12px;font-size:13px;font-weight:600;border-bottom:1px solid ' +
    (theme === 'dark' ? '#333' : '#eee') +
    ';background:' +
    (theme === 'dark' ? '#16213e' : '#f8f9fa') +
    ';color:' +
    (theme === 'dark' ? '#e0e0e0' : '#333');

  var label = document.createElement('span');
  label.textContent = "Wyatt's Notes";
  header.appendChild(label);

  var link = document.createElement('a');
  link.href = baseUrl + path;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.style.cssText = 'color:#4a7cff;text-decoration:none;font-size:12px';
  link.textContent = 'Open \u2197';
  header.appendChild(link);

  container.appendChild(header);

  var iframe = document.createElement('iframe');
  iframe.src = baseUrl + path;
  iframe.style.cssText = 'width:100%;height:' + height + 'px;border:none;display:block';
  iframe.title = "Wyatt's Notes \u2014 " + subject + (topic ? ' / ' + topic : '');
  iframe.loading = 'lazy';
  iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups');
  container.appendChild(iframe);

  if (targetId) {
    var target = document.getElementById(targetId);
    if (target) target.appendChild(container);
    else console.error('[WyattsNotes Widget] Target element #' + targetId + ' not found');
  } else {
    script.parentNode.insertBefore(container, script);
  }
})();
