import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import React, { useEffect, useRef, useState } from 'react';

export default function ReadingProgress(): React.ReactElement {
  const [progress, setProgress] = useState(0);
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
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        if (docHeight > 0) {
          setProgress(Math.min((scrollTop / docHeight) * 100, 100));
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

  if (progress < 1) {
    return <></>;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: '3px',
        background: 'var(--ifm-color-primary)',
        zIndex: 9999,
        transition: 'width 100ms linear',
        pointerEvents: 'none',
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    />
  );
}
