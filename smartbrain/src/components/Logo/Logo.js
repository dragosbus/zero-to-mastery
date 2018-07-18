import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';

const Logo = () => (
  <div className="logo">
    <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 60, width: 60 }}>
      <div className="Tilt-inner">
        <img src={brain} alt="Logo"/>
      </div>
    </Tilt>
  </div>
);

export default Logo;
