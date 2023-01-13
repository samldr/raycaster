import React, { useRef, useEffect } from "react";
import json from "../optics/sceneFile.json";

const settings = require("../optics/settings.json")

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log(json);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    //Our first draw
    ctx.fillStyle = "#000000";
    ctx.lineCap = "round";
    ctx.font = "50px serif";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.lineWidth = settings.rayThickness;
    ctx.globalAlpha = settings.rayTransparency;
    ctx.strokeStyle = "#ffffff";
    json.rays.forEach((ray) => {
      ctx.beginPath();
      ctx.moveTo(ray.segments[0][0], ray.segments[0][1]);
      ray.segments.forEach((segment) => ctx.lineTo(segment[0], segment[1]));
      ctx.stroke();

      //rectangle
    });
    ctx.globalAlpha = 1.0;
    ctx.strokeStyle = "#bdd2c5";
    ctx.lineWidth = 7;
    json.items.forEach((item) => {
      if (item.type == null) {
      } else if (item.type === "mirror") {
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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      {...props}
    />
  );
};

export default Canvas;
