import React from "react";
import background from "./background.svg";
import atom from "./atom.svg";
import atom2 from "./atom2.svg";
import bracket from "./bracket.svg";
import man from "./man.svg";
import pentagon from "./pentagon.svg";
import "./animation.css";

const Animation = () => {
  return (
    <div>
      <div className="animation">
        <img className="background" src={background} alt="error" />
        <img className="man" src={man} alt="error" />
        <img className="atom" src={atom} alt="error" />
        <img className="atom2" src={atom2} alt="error" />
        <img className="bracket" src={bracket} alt="error" />
        <img className="pentagon" src={pentagon} alt="error" />
      </div>
    </div>
  );
};

export default Animation;
