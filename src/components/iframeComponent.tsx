import React from 'react';

interface IFrameComponentProps {
  src: string;
  width?: string;
  height?: string;
  title?: string;
  ariaLabel?: string;
  frameborder?: string;
}

const IFrameComponent: React.FC<IFrameComponentProps> = ({
  src,
  width = '800px',
  height = '200px',
  title = '',
  ariaLabel = '',
}) => {
  return (
    <div className="iframe-container">
      <h3 className="iframe-title">{title}</h3>
      <iframe src={src} width={width} height={height} title={title} aria-label={ariaLabel}></iframe>
    </div>
  );
};

export default IFrameComponent;
