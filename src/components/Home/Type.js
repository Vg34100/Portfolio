import React from "react";
import Typewriter from "typewriter-effect";
import DropIn from "../DropIn"; 

function Type() {
  return (
    <DropIn className="typewriter-container">
      <div>
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
      </div>
    </DropIn>
  );
}

export default Type;
