import { useRef } from 'react';
import Crosshair from '../Crosshair.jsx';
import React from 'react';

const Component = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} style={{ height: '300px', overflow: 'hidden' }}>
      <Crosshair containerRef={containerRef} color='#ff4400' />

      
    </div>
  );
};

export default Component;
