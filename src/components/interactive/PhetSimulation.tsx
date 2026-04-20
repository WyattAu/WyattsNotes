import React from 'react';
import styles from './styles.module.css';

interface PhetSimulationProps {
  simulationId: string;
  title?: string;
  width?: number;
  height?: number;
}

export const PhetSimulation: React.FC<PhetSimulationProps> = ({
  simulationId,
  title = 'PhET Simulation',
  width = 800,
  height = 600,
}) => {
  const src = `https://phet.colorado.edu/sims/html/${simulationId}/latest/${simulationId}_en.html`;

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
