import { asin, atan, multiply, sin, sqrt, subtract } from "mathjs";
import internalReflection from "./internalReflection.mjs";
import reflection from "./reflection.mjs";

export default function refraction(inVec, inPos, intensity) {
  //n is the refractive index of the material, alpha is the absorbtion coefficient of the material
  const n = 1.2;
  const alpha = 0.5;

  const theta1 = atan(inVec[0] / inVec[1]);
  const theta2 = asin((sin(theta1) * 1) / n);

  const internalVec = multiply(sqrt(inVec[0] ^ (2 + inVec[1]) ^ 2), [
    cos(theta2),
    sin(theta2),
  ]);

  const exitPos = [0, 0]; //needs to be found. TODO

  const distance = norm(subtract(exitPos, inPos));

  //A constant that determines how well the material reflects light
  const reflectivity = ((n - 1) / (n + 1)) ** 2;

  //First Reflected Ray:
  const firstIntensity = intensity * reflectivity;
  const firstVec = reflection(inVec, normalVec); //need to add normalvec like you did before nolan

  //Second Reflected Ray:
  const secondIntensity =
    reflectivity * (1 - reflectivity) * intensity * e ** (-alpha * distance);
  const internalSecondVec = reflection(internalVec, normalVec); //same normal vector as before

  const phi1 = atan(internalSecondVec[0] / internalSecondVec[1]);
  const phi2 = asin(sin(phi1) * n);
  const critAngle = asin(1 / n);

  if (phi2 > critAngle) {
    const internalThirdVec = reflection(internalSecondVec, normalVec); //same normal vector as before
    internalReflection(internalThirdVec, normalVec, critAngle);
  } else {
    const secondVec = multiply(sqrt(inVec[0] ^ (2 + inVec[1]) ^ 2), [
      cos(phi2),
      sin(phi2),
    ]);
  }

  //Transmitted Ray:
  const transmittedIntensity =
    (1 - reflectivity) ^ (2 * intensity * e ** (-alpha * distance));
  const transmittedVec = inVec;

  return {
    firstIntensity,
    secondIntensity,
    transmittedIntensity,
    firstVec,
    secondVec,
    transmittedVec,
  };
}
