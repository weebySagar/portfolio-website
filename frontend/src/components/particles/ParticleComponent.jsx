"use client";

import React, { useCallback, useMemo } from "react";
import { loadFull } from "tsparticles";
import { loadSlim } from "@tsparticles/slim";
import Particles from "react-tsparticles";

const ParticleComponent = () => {
  const options = useMemo(() => {
    return {
      particles: {
        links: {},
        move: {
          enable: true,
          zIndex: 0,
        },
      },
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    //    await loadSlim(engine)
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    //console.log(container);
  }, []);
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
