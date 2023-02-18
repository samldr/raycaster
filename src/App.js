import "./App.css";
//import Canvas from "./Components/Canvas";
import Canvas from "./components/Canvas";
import { Bottombar } from "./components/Bottombar";
import { Navbar } from "./components/Navbar";
import { React, useState, useEffect } from "react";
//import { driver } from "./optics/driver";
const { Scene } = require("./optics/Scene.js");
const { LightSource } = require("./optics/LightSource.js");
const { Mirror } = require("./optics/Mirror.js");
const { Wall } = require("./optics/Wall.js");

function App() {
  //state for render settings
  let [renderSettings, setRenderSettings] = useState({
    rayThickness: 1,
    rayTransparency: 0.01,
    drawSceneObjects: true,
  });

  //state for simulation settings
  let [simulationSettings, setSimulationSettings] = useState({
    maxBounces: 5,
    maxRays: 1000,
    sourceAngle: 1,
    canvasWidth: 800,
    canvasHeight: 800,
    fullScreenCanvas: false,
  });

  //state for the scene objects
  let [sceneObjects, setSceneObjects] = useState([
    new Mirror(0, 0, 1000, 0),
    new Mirror(1000, 1000, 0, 1000),
    new Mirror(1000, 0, 1000, 1000),
    new Mirror(0, 1000, 0, 0),
    new Mirror(350, 750, 700, 700),
    new Wall(0, 0, 1440, 0),
    new Wall(1440, 810, 0, 810),
    new Wall(1440, 0, 1440, 810),
    new Wall(0, 810, 0, 0),
  ]);

  let intialScene = new Scene(
    sceneObjects,
    new LightSource(
      [100, 100],
      simulationSettings.sourceAngle,
      simulationSettings.maxRays,
      30
    )
  );
  intialScene.simulate();

  //state for the scene
  let [scene, setScene] = useState(intialScene);

  //if the objects in the scene or the simulation settings change, re-simulate the scene
  //fix the sources!
  useEffect(() => {
    console.log("UseEffect called");
    let newScene = new Scene(
      sceneObjects,
      new LightSource(
        [200, 200] /* TODO: remove magic number */,
        simulationSettings.sourceAngle,
        simulationSettings.maxRays,
        45 /* TODO: remove magic number */
      )
    );
    console.log("NewScene created");
    newScene.simulate();
    console.log("NewScene simulated");
    setScene(newScene);
    console.log("NewScene set");
  }, [sceneObjects, simulationSettings]);

  return (
    <div className="main">
      <Navbar
        renderSettings={renderSettings}
        setRenderSettings={setRenderSettings}
        simulationSettings={simulationSettings}
        setSimulationSettings={setSimulationSettings}
        setScene={setScene}
      ></Navbar>
      <div>
        <Canvas
          id="canvasRef"
          renderSettings={renderSettings}
          simulationSettings={simulationSettings}
          scene={scene}
        ></Canvas>
        <Bottombar></Bottombar>
      </div>
    </div>
  );
}

export default App;
