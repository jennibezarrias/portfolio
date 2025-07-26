import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desenvolvedora Front-End",
          "Freelancer",
          "Design UX/UI",
          "Desenvolvedora Web",
          "Desenvolvedora de Software",
          "Desenvolvedora de Aplicativos",
          "Desenvolvedora de Sistemas",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
