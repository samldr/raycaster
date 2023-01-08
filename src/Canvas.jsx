import React, { useRef, useEffect } from "react";
import json from "./data/sceneFile.json";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    //Our first draw
    ctx.fillStyle = "#000000";
    ctx.font = "50px serif";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.01;
    ctx.strokeStyle = "#ffffff";
    json.rays.forEach((ray) => {
      ctx.beginPath();
      ctx.moveTo(ray.segments[0][0], ray.segments[0][1]);
      ray.segments.forEach((segment) => ctx.lineTo(segment[0], segment[1]));
      ctx.stroke();
    });
    ctx.globalAlpha = 1.0;
    ctx.strokeStyle = "#0000ff";
    ctx.lineWidth = 10;
    json.items.forEach((item) => {
      ctx.beginPath();
      ctx.moveTo(item.endpoint1[0], item.endpoint1[1]);
      ctx.lineTo(item.endpoint2[0], item.endpoint2[1]);
      ctx.stroke();
    });
  }, []);

  return <canvas ref={canvasRef} width={1000} height={1000} {...props} />;
};

export default Canvas;
