import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Game Designer",
          "Programmer",
          "Student",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        delay: 50,
      }}
    />
  );
}

export default Type;
