const { dot, multiply, subtract}  = require('mathjs')

module.exports = function reflect(incident, normal){
    
    //finds the reflection using vectors
    //b = a-2*dot(a,n)*n, where a is the incident ray vector, n is the normal vector of the surface, and b is the reflected ray vector
    const outVec = subtract(
        incident,
        multiply(2*dot(incident,normal),normal)
        );

    return outVec;
}
