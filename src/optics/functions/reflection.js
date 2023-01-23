const { dot, multiply, subtract } = require("mathjs");

module.exports = function reflect(incident, normal, intensity, n) {
  // incident = incident vector
  // normal = normal vector
  // intensity = incident vector intensity (only gets passed to new vector)
  // n = current refractive index (only gets passed to new vector)

  // finds the reflection using vectors
  // b = a-2*dot(a,n)*n, where a is the incident ray vector, n is the normal vector of the surface, and b is the reflected ray vector
  const reflected = subtract(
    incident,
    multiply(2 * dot(incident, normal), normal)
  );

  reflected.push(intensity, n);
  return reflected;
};