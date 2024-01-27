"use client";

import React from "react";
import Particles from "react-tsparticles";

const ParticleComponent = () => {
 
  return (
    <Particles
      id="tsparticles"
      options={{
        autoPlay: true,
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          links: { enable: true, color:{value:"#7b4bff"},opacity:0.5 },
          move: { enable: true },
          opacity:{value:0.3},
          color:{value:"#3562a3"},
        },
      }}
    />
  );
};

export default ParticleComponent;
