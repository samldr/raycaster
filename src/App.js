import "./App.css";
//import Canvas from "./Components/Canvas";
import Canvas from "./components/Canvas";
import { Bottombar } from "./components/Bottombar";
import { Navbar } from "./components/Navbar";
import { React, useState } from "react";

function App() {
  //state for render settings
  let [renderSettings, setRenderSettings] = useState({
    rayThickness: 1,
    rayTransparency: 0.01,
    drawSceneObjects: true,
  });

  //state for simulation settings
  let [simulationSettings, setSimulationSettings] = useState({
    maxBounces: 7,
    maxRays: 100,
    sourceAngle: 10,
    canvasWidth: 800,
    canvasHeight: 800,
    fullScreenCanvas: false,
  });

  return (
    <div className="main">
      <Navbar
        renderSettings={renderSettings}
        setRenderSettings={setRenderSettings}
        simulationSettings={simulationSettings}
        setSimulationSettings={setSimulationSettings}
      ></Navbar>
      <div>
        <Canvas
          id="canvasRef"
          renderSettings={renderSettings}
          simulationSettings={simulationSettings}
        ></Canvas>
        <Bottombar></Bottombar>
      </div>
    </div>
  );
}

export default App;
