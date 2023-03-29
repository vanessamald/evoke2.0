import React, { useState } from 'react';
import brainView from '../../assets/images/brainview-test.jpg';

function ZoomImage({ src }) {
  const [zoom, setZoom] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (event) => {
    setX(event.nativeEvent.offsetX);
    setY(event.nativeEvent.offsetY);
  };

  const handleMouseEnter = () => {
    setZoom(true);
  };

  const handleMouseLeave = () => {
    setZoom(false);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '200px',
        height: '200px',
        overflow: 'hidden',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt="zoomable" />
      {zoom && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50%',
            height: '50%',
            background: 'rgba(255, 255, 255, 0.3)',
            zIndex: 1,
          }}
        />
      )}
      {zoom && (
        <div
          style={{
            position: 'absolute',
            top: y * -1 + 200,
            left: x * -1 + 200,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${src})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `${x}px ${y}px`,
            zIndex: 2,
          }}
        />
      )}
    </div>
  );
}

export default ZoomImage;

