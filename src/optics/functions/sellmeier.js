// TODO
// -better material selection method
// -more materials

function sellmeier(wavelength, material){
    // wavelength in micrometers
    // refractive index depends on wavelength

    if(material == 'air'){

        return n = 1

    } else if(material == 'soda-lime'){

        const lambda2  = wavelength**2
        return n = 1.5130-(0.003169*lambda2)+(0.003962/lambda2)

    }

}

console.log(sellmeier(0.76,'soda-lime'))