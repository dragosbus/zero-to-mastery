import React from 'react';
import Particles from 'react-particles-js';

const particlesOption = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }

const Particle = () => (
    <Particles
          className="particles"
          params={particlesOption}
    />
);

export default Particle;