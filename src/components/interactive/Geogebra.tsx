import React from 'react';
import styles from './styles.module.css';

interface GeogebraProps {
  appletId: string;
  title?: string;
  width?: number;
  height?: number;
}

export const Geogebra: React.FC<GeogebraProps> = ({
  appletId,
  title = 'GeoGebra Applet',
  width = 800,
  height = 600,
}) => {
  const src = [
    'https://www.geogebra.org/material/iframe/id',
    appletId,
    'width',
    String(width),
    'height',
    String(height),
    'border',
    '888888',
    'rc',
    'false',
    'ai',
    'false',
    'smb',
    'false',
    'stb',
    'false',
    'stbh',
    'false',
    'ld',
    'false',
    'sdz',
    'false',
    'ctl',
    'false',
  ].join('/');

  const aspectPadding = (height / width) * 100;

  return (
    <div className={styles.embedContainer}>
      <p className={styles.embedTitle}>{title}</p>
      <div className={styles.embedResponsive} style={{ paddingBottom: `${aspectPadding}%` }}>
        <iframe
          className={styles.embedIframe}
          src={src}
          title={title}
          sandbox="allow-scripts allow-same-origin allow-popups"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
};
