const { dot, multiply, add, sqrt } = require('mathjs')
const reflect = require('./reflection')

module.exports = function refract(incident, normal, intensity, n_1, n_2){

    // incident = incident vector
    // normal = normal vector
    // intensity = intensity of the incident vector
    // n_1 = incident refractive index
    // n_2 = transmitted refractive index
  
    const ndoti = dot(normal, incident) // -cos(theta) shorthand

    // assigns proper normal vector for refraction formula
    if(ndoti < 0){
        normal = multiply(-1,normal)
    }

    const mu = n_1/n_2;
    const sin2 = (mu**2)*(1-(ndoti**2)) // sin^2(theta) shorthand
    let transmitted, reflected

    // checks the incoming angle to determine the case
    // case 1: total internal reflection, no ray is transmitted
    if(sin2 > 1){
        reflected = reflect(incident, normal, intensity, n_1)
    } 
    // case 2: refraction and fresnel (partial) reflection
    // note: might need to be split into a 3rd case where sin2 = 1, as im not sure if this will work in this case even though it should
    else if(sin2 <= 1){

        // intensity calculations
        const reflectivity = ((n_2-n_1)/(n_2+n_1))**2
        const reflectedIntensity = reflectivity*intensity
        const transmittedIntensity = 1 - reflectedIntensity

        // const transmittedIntensity =  ((1-reflectivity)**2)*intensity*e**(-distance*alpha)
        // in practice, the transmitted intensity is less than than (incident - reflected) intensity because the ray loses energy while traveling through the material
        // this has been omitted for now until we can implement it properly (as it relies on the distance travelled in the material)

        // snell's law in vector form
        transmitted = add(
            multiply(
                mu,
                incident
            ),
            multiply(
                mu,
                -ndoti,
                normal
            ),
            multiply(
                normal,
                sqrt(1-sin2)
            )
        )
        transmitted.push(transmittedIntensity, n_2)

        // fresnel reflection
        reflected = reflect(incident, normal, reflectedIntensity, n_1)
    }
    
    return { transmitted, reflected }
}
// console.log(refract([0.7071,-0.7071],[0, -1],1,1.5,1))