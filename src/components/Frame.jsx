import React from "react";
import Canvas from "./Canvas";
import "./Frame.css";
import "../App.css";

export const Frame = () => {
  return (
    <div className="main">
      <Canvas id="mainCanvas"></Canvas>
      <div id="titleCard">
        <h1>Raycaster</h1>
        <h2>1010 Richard Stairwell</h2>
      </div>
    </div>
  );
};
