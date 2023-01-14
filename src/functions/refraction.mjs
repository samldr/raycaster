import { asin, atan, multiply, norm, sin, sqrt, subtract } from "mathjs";
import reflection from "./reflection.mjs";
import TIR from "./TIR.mjs";

export default function refraction(inVec, inPos, intensity) {
  //n is the refractive index of the material, alpha is the absorbtion coefficient of the material
  const n = 1.2;
  const alpha = 0.5;
  const critAng = asin(1 / n);

  const theta1 = atan(inVec[0] / inVec[1]);
  const theta2 = asin((sin(theta1) * 1) / n);

  const internalVec = multiply(norm(inVec), [cos(theta2), sin(theta2)]);

  const exitPos = [0, 0]; //needs to be found. TODO

  const distance = norm(subtract(exitPos, inPos));

  //A constant that determines how well the material reflects light
  const reflectivity = ((n - 1) / (n + 1)) ** 2;

  //First Reflected Ray:
  const firstIntensity = intensity * reflectivity;
  const firstVec = reflection(inVec, normalVec); //need to add normalvec like you did before nolan

  const secondRay = TIR(
    internalVec,
    normalVec,
    critAng,
    n,
    alpha,
    inPos,
    distance,
    firstIntensity
  );

  return {
    firstIntensity,
    secondIntensity,
    transmittedIntensity,
    firstVec,
    secondVec,
    transmittedVec,
  };
}
