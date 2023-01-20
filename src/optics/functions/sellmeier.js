// TODO
// -better material selection method
// -more materials

function sellmeier(wavelength, material){
    // wavelength in nanometers
    // refractive index depends on wavelength
    
    wavelength = wavelength/1000
    if(material == 'air'){

        return n = 1

    } else if(material == 'soda-lime'){

        const lambda2  = wavelength**2
        return n = 1.5130-(0.003169*lambda2)+(0.003962/lambda2)

    }

}

console.log(sellmeier(662,'soda-lime'))