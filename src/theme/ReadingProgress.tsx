import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import React, { useEffect, useState } from 'react';

export default function ReadingProgress(): React.ReactElement | null {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return;

    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(Math.min((scrollTop / docHeight) * 100, 100));
      }
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  if (!ExecutionEnvironment.canUseDOM) return null;
  if (progress < 1) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: '3px',
        background: 'linear-gradient(90deg, #FF6B35, #ff9a5c)',
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
