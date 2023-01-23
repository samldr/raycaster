const { floor } = require("mathjs");

// this function is adapted from Dan Bruton's FORTRAN script at http://www.physics.sfasu.edu/astro/color/spectra.html and http://www.midnightkite.com/color.html
// takes an input wavelength and gives an approximate rgb value, to use for diffusion
// 380nm < wavelength < 700nm
//module.exports = 
function wl2rgb(wavelength){ 

    let red, green, blue;
    if (wavelength >= 380 && wavelength <= 440) {

        red = -1 * (wavelength - 440) / (440 - 380);
        green = 0;
        blue = 1;

    } else if (wavelength >= 440 && wavelength <= 490) {

        red = 0;
        green = (wavelength - 440) / (490 - 440);
        blue = 1;

    } else if (wavelength >= 490 && wavelength <= 510) {

        red = 0;
        green = 1;
        blue = -1 * (wavelength - 510) / (510 - 490);

    } else if (wavelength >= 510 && wavelength <= 580) {

        red = (wavelength - 510) / (580 - 510);
        green = 1;
        blue = 0;

    } else if (wavelength >= 580 && wavelength <= 645) {

        red = 1;
        green = -1 * (wavelength - 645) / (645 - 580);
        blue = 0;

    } else if (wavelength >= 645 && wavelength <= 700) {

        red = 1;
        green = 0;
        blue = 0;

    } else if (wavelength >= 700 && wavelength <= 780){

        red = 1 + (1-100/255)/(700-780)*( wavelength - 700 );
        green = 0;
        blue = 0;
    }

    return [floor(255*red), floor(255*green), floor(255*blue)]
}

console.log(wl2rgb(720))