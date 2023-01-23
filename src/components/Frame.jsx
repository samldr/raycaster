import React from "react";
import Canvas from "./Canvas";
import "./Frame.css";
import "../App.css";

export const Frame = () => {
  return (
    <div className="main">
      <Canvas id="mainCanvas"></Canvas>
    </div>
  );
};
