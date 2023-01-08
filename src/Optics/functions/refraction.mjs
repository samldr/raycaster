import { asin, atan, multiply, sin, sqrt } from "mathjs";

export default function refraction(inVec, intensity, n, alpha, initialPos) {
  //n is the refractive index of the material, alpha is the absorbtion coefficient of the material

  const theta1 = atan(inVec[0] / inVec[1]);
  const theta2 = asin((sin(theta1) * 1) / n);

  const length = sqrt(inVec[0] ^ (2 + inVec[1]) ^ 2);
  const internalVec = multiply(length, [cos(theta2), sin(theta2)]);

  const exitPos = [0, 0]; //needs to be found. TODO

  //A constant that determines how well the material reflects light
  const reflectivity = ((n - 1) / (n + 1)) ** 2;

  //const firstReflectedRayIntensity = intensity*reflectivity
  //const secondReflectedRayIntensity = reflectivity*(1-reflectivity)*intensity*e**(-alpha*x)

  return { reflectivity, theta1, theta2 };
}

console.log(refraction([1, 1], 2, 1.2));
