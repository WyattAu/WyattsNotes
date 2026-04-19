import React from 'react';
import styles from './styles.module.css';

interface DesmosGraphProps {
  calculatorUrl: string;
  title?: string;
  width?: number;
  height?: number;
}

export const DesmosGraph: React.FC<DesmosGraphProps> = ({
  calculatorUrl,
  title = 'Desmos Graph',
  width = 800,
  height = 600,
}) => {
  const aspectPadding = (height / width) * 100;

  return (
    <div className={styles.embedContainer}>
      <p className={styles.embedTitle}>{title}</p>
      <div
        className={styles.embedResponsive}
        style={{ paddingBottom: `${aspectPadding}%` }}
      >
        <iframe
          className={styles.embedIframe}
          src={calculatorUrl}
          title={title}
          sandbox="allow-scripts allow-same-origin"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
};
