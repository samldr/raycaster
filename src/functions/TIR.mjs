//TIR = total internal refraction

import { sin, cos, asin, atan, norm } from "mathjs";

//todo: find a way to determine normal vector
//      find a way to determine endPos

export default function TIR(
  inVec,
  normalVec,
  critAng,
  n,
  alpha,
  inPos,
  distance,
  intensity
) {
  const inAngle = atan(inVec[1] / inVec[0]);

  const distance = norm(subtract(exitPos, inPos));

  if (inAngle <= critAng) {
    //Transmitted Ray
    const transmittedAngle = asin((1 / n) * sin(inAngle));
    const transmittedIntensity =
      (1 - reflectivity) ** 2 * intensity * e ** (-alpha * distance);

    //next, add this as a segment with above intensity
    const transmittedVec = [cos(transmittedAngle), sin(transmittedAngle)];

    //Reflected Ray
    const reflectedIntensity =
      reflectivity * (1 - reflectivity) * intensity * e ** (-alpha * distance);

    //next, spawn this as a new vector with above intensity
    const reflectedVec = reflection(
      inVec,
      normalVec,
    );

    //next, run this function again with the new vector
    TIR(reflectedVec);
  } else if (inAngle > critAng) {
    //Reflected Ray
    //next, spawn this as a new vector with above intensity
    const reflectedVec = reflection(
      inVec,
      normalVec,
      critAng,
      n,
      alpha,
      distance,
      intensity
    );

    //next, run this function again with the new vector
    TIR(reflectedVec);
  }
}
