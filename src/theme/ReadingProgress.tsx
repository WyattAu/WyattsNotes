import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import React, { useEffect, useRef } from 'react';

export default function ReadingProgress(): React.ReactElement {
  const barRef = useRef<HTMLDivElement>(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    function updateProgress() {
      if (tickingRef.current) {
        return;
      }
      tickingRef.current = true;
      window.requestAnimationFrame(() => {
        const bar = barRef.current;

        if (!bar) {
          tickingRef.current = false;

          return;
        }

        const scrollTop = window.scrollY;

        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        if (docHeight > 0) {
          const pct = Math.min((scrollTop / docHeight) * 100, 100);

          bar.style.width = `${pct}%`;
          bar.setAttribute('aria-valuenow', String(Math.round(pct)));

          if (pct < 1) {
            bar.style.display = 'none';
          } else {
            bar.style.display = '';
          }
        }
        tickingRef.current = false;
      });
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  if (!ExecutionEnvironment.canUseDOM) {
    return <></>;
  }

  return (
    <div
      ref={barRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '0%',
        height: '3px',
        background: 'var(--ifm-color-primary)',
        zIndex: 9999,
        transition: 'width 100ms linear',
        pointerEvents: 'none',
        display: 'none',
      }}
      role="progressbar"
      aria-valuenow={0}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    />
  );
}
