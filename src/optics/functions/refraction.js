// does not include internal reflection at the moment
const { dot, multiply, add, sqrt, subtract, abs } = require('mathjs')

function refract(i, n, n_1, n_2, crit){
    //i = incident vector
    //n = normal vector
    //n_1 = incident refractive index
    //n_2 = refracted refractive index
    //crit = critical angle of n_2 material


    const mu = n_1/n_2;
    
    //checks to make sure the right normal vector is chosen
    if(dot(i,n) > 0){
        n = multiply(-1,n)
    }


    //need to be within the critical angle to do this first
    const ni = dot(n,i)
    const out = add(n*sqrt(abs(1-mu^2*(1-ni^2))), multiply(mu, subtract(i,multiply(ni,n))))

    return out

}

console.log(refract([0.5,-0.866],[0, -1],1,1.2))