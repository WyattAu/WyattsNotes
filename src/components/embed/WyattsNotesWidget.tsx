import React, { useCallback, useEffect, useRef, useState } from 'react';

interface WyattsNotesWidgetProps {
  subject: string;
  topic?: string;
  width?: string | number;
  height?: string | number;
  theme?: 'light' | 'dark';
  className?: string;
}

const BASE_URL = 'https://wyattsnotes.wyattau.com';

function getSubjectUrl(subject: string): string {
  const map: Record<string, string> = {
    ib: 'https://ib.wyattau.com',
    dse: 'https://dse.wyattau.com',
    'alevel-maths-physics': 'https://alevel-maths-physics.wyattau.com',
    'alevel-sciences': 'https://alevel-sciences.wyattau.com',
    qualifications: 'https://qualifications.wyattau.com',
    programming: 'https://programming.wyattau.com',
    university: 'https://university.wyattau.com',
  };

  return map[subject] || BASE_URL;
}

const WyattsNotesWidget: React.FC<WyattsNotesWidgetProps> = ({
  subject,
  topic,
  width = '100%',
  height = 500,
  theme = 'light',
  className,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState<number>(
    typeof height === 'number' ? height : parseInt(String(height), 10),
  );

  const handleMessage = useCallback((event: MessageEvent) => {
    if (
      event.origin !== BASE_URL &&
      !Object.values({
        ib: 'https://ib.wyattau.com',
        dse: 'https://dse.wyattau.com',
        'alevel-maths-physics': 'https://alevel-maths-physics.wyattau.com',
        'alevel-sciences': 'https://alevel-sciences.wyattau.com',
        qualifications: 'https://qualifications.wyattau.com',
        programming: 'https://programming.wyattau.com',
        university: 'https://university.wyattau.com',
      }).includes(event.origin)
    ) {
      return;
    }
    if (event.data?.type === 'wyattsnotes:resize' && typeof event.data.height === 'number') {
      setIframeHeight(event.data.height);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, [handleMessage]);

  const baseUrl = getSubjectUrl(subject);
  const path = topic ? `/docs/${topic}` : '';
  const iframeSrc = `${baseUrl}${path}`;

  const containerStyle: React.CSSProperties = {
    width: typeof width === 'number' ? `${String(width)}px` : String(width),
    maxWidth: '100%',
    overflow: 'hidden',
    borderRadius: 0,
    border: theme === 'dark' ? '1px solid #444' : '1px solid #e0e0e0',
    background: theme === 'dark' ? '#1a1a2e' : '#fff',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '6px 12px',
    fontSize: '13px',
    fontWeight: 600,
    color: theme === 'dark' ? '#e0e0e0' : '#333',
    borderBottom: theme === 'dark' ? '1px solid #333' : '1px solid #eee',
    background: theme === 'dark' ? '#16213e' : '#f8f9fa',
  };

  return (
    <div className={className} style={containerStyle}>
      <div style={headerStyle}>
        <span>{"Wyatt's Notes"}</span>
        <a
          href={iframeSrc}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#4a7cff', textDecoration: 'none', fontSize: '12px' }}
        >
          Open ↗
        </a>
      </div>
      <iframe
        ref={iframeRef}
        src={iframeSrc}
        style={{ width: '100%', height: `${iframeHeight}px`, border: 'none', display: 'block' }}
        title={`Wyatt's Notes — ${subject}${topic ? ` / ${topic}` : ''}`}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-popups"
      />
    </div>
  );
};

export default WyattsNotesWidget;
