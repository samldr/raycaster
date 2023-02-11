import React, { useRef, useEffect } from "react";
import json from "../optics/sceneFile.json";

const settings = require("../optics/settings.json");

const Canvas = (props) => {
  // PROPS
  // renderSettings
  // simulationSettings

  const canvasRef = useRef(null);

  useEffect(() => {
    //initilizing the canvas
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    //setting up the drawing and text styles
    ctx.fillStyle = "#000000";
    ctx.lineCap = "round";
    ctx.font = "50px serif";

    //drawing border
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    //setting up for drawing rays
    ctx.fillStyle = "#ffffff";
    ctx.lineWidth = props.renderSettings.rayThickness;
    ctx.globalAlpha = props.renderSettings.rayTransparency;
    ctx.strokeStyle = "#ffffff";

    //drawing each ray
    json.rays.forEach((ray) => {
      ctx.beginPath();
      ctx.moveTo(ray.segments[0][0], ray.segments[0][1]);
      ray.segments.forEach((segment) => ctx.lineTo(segment[0], segment[1]));
      ctx.stroke();
    });

    //checks if the objects in the scene should be drawn
    if (props.renderSettings.drawSceneObjects) {
      //setting up for drawing scene objects
      ctx.globalAlpha = 1.0;
      ctx.strokeStyle = "#bdd2c5";
      ctx.lineWidth = 7;

      //drawing scene objects
      json.items.forEach((item) => {
        if (item.type == null) {
        } else if (item.type === "mirror" || item.type === "dielectric") {
          ctx.strokeStyle = "#bdd2c5";
          ctx.beginPath();
          ctx.moveTo(item.endpoint1[0], item.endpoint1[1]);
          ctx.lineTo(item.endpoint2[0], item.endpoint2[1]);
          ctx.stroke();
        } else if (item.type === "wall") {
          ctx.strokeStyle = "#48354a";
          ctx.beginPath();
          ctx.moveTo(item.endpoint1[0], item.endpoint1[1]);
          ctx.lineTo(item.endpoint2[0], item.endpoint2[1]);
          ctx.stroke();
        } else if (item.type == "mirrorball") {
          ctx.strokeStyle = "#48354a";
          ctx.beginPath();
          ctx.arc(item.center[0], item.center[1], item.r, 0, 2 * 3.14159);
          ctx.stroke();
        } else {
          //frosted box
          ctx.globalAlpha = 0.2;
          ctx.fillStyle = "aaaaaa";
          ctx.fillRect(
            item.topLeft[0],
            item.topLeft[1],
            item.bottomRight[0] - item.topLeft[0],
            item.bottomRight[1] - item.topLeft[1]
          );
        }
      });
    }
  }, [props.renderSettings]);

  return (
    <canvas
      ref={canvasRef}
      width={1440}
      height={810}
      style={{ display: "flexbox" }}
      {...props}
    />
  );
};

export default Canvas;
