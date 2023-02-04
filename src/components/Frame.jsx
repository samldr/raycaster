import React from "react";
import { Navbar } from "./Navbar";
import Canvas from "./Canvas";
import "./Frame.css";
import "../App.css";
import { Bottombar } from "./Bottombar";

export const Frame = () => {
  return (
    <div className="main">
      <Navbar></Navbar>
      <div>
        <Canvas id="canvasRef"></Canvas>
        <Bottombar></Bottombar>
      </div>
    </div>
  );
};
