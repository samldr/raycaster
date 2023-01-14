import { dot, multiply, subtract, norm } from 'mathjs'

export default function reflection(inVec, normalVec){
    
    //normalizes the normal vector
    const normal = multiply(1/(norm(normalVec)),normalVec); //faster to do this for each item instead of for each ray, TODO later

    //finds the reflection using vectors instead of angles (could be faster??)
    //b = a-2*dot(a,n)*n, where a is the incident ray vector, n is the normal vector of the surface, and b is the reflected ray vector
    const outVec = subtract(
        inVec,
        multiply(2*dot(inVec,normal),normal)
        );

    return outVec;
}

