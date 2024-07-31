import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 180,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.03,
            distance: 100,
          },
          move: {
            enable: true,
            direction: "none", // Allows random movement
            speed: { min: 0.5, max: 1}, // Increase the speed for noticeable movement
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble", // This mode repels particles away from the cursor
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            bubble: {
              distance: 100,
              size: 3,
              duration: 2,
              opacity: 0.5,
              speed: 3,
            },
            repulse: {
              distance: 10, // Distance for repulse effect
              duration: 1.4, // Duration of the repulse effect for smoothness
            },
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
