import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const KATEX_CSS_URL = 'https://cdn.jsdelivr.net/npm/katex@0.16.44/dist/katex.min.css';

function loadKatexCSS() {
  if (!ExecutionEnvironment.canUseDOM) {
    return;
  }

  if (document.querySelector('.katex-display') || document.querySelector('.katex')) {
    if (!document.querySelector(`link[href="${KATEX_CSS_URL}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = KATEX_CSS_URL;
      document.head.appendChild(link);
    }
  }
}

export function onRouteDidUpdate() {
  loadKatexCSS();
}

loadKatexCSS();
