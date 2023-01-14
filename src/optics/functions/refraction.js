// does not support intensity or spawning new rays at the moment
const { dot, multiply, add, sqrt } = require('mathjs')
const reflect = require('./reflection')

module.exports = function refract(incident, normal, n_1, n_2){
    //incident = incident vector
    //normal = normal vector
    //n_1 = incident refractive index
    //n_2 = transmitted refractive index
    
    const ndoti = dot(normal,incident) // -cos(theta) shorthand

    // assigns proper normal vector for refraction formula
    if(ndoti < 0){
        normal = multiply(-1,normal)
    }

    const mu = n_1/n_2;
    const sin2 = (mu**2)*(1-(ndoti**2)) //sin^2(theta) shorthand

    let transmitted, reflected

    //checks if greater than the critical angle
    if(sin2 > 1){

        //total internal reflection
            reflected = reflect(incident, normal)

    } else if(sin2 <= 1){

        //refraction, using snell's law in vector form
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
    }
    
    return {normal, incident, transmitted, reflected }

}

//console.log(refract([0.7071,-0.7071],[0, -1],1,1.5))