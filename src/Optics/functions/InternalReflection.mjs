import { dot, multiply, subtract, norm } from "mathjs";
import reflection from "./reflection.mjs";

export default function internalReflection(
  internalVec,
  normalVec,
  critAngle,
  n
) {
  const phi1 = atan(internalVec[0] / internalVec[1]);
  const phi2 = asin(sin(phi1) * n);

  if (phi2 > critAngle) {
    const internalSecondVec = reflection(internalVec, normalVec); //same normal vector as before
    internalReflection(internalSecondVec, normalVec, critAngle, n);
  } else {
    const secondVec = multiply(sqrt(inVec[0] ^ (2 + inVec[1]) ^ 2), [
      cos(phi2),
      sin(phi2),
    ]);
  }
}
