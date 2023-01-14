const { sin, pi } = require("mathjs");

//this file is used to build the lookup table for fast trig
//it calculates the trig and sends it to the standard output
//output redirection can then be used to save the output to a json file

//the spacing is one degree; angles are measured in degrees
//i.e. lookup[0] is sin(0), lookup[1] is sin(1), lookup[90] = sin(90), etc

console.log("[");
for (let theta = 0; theta < 90; theta++) {
  console.log(sin(theta * (pi / 180)), ",");
}
console.log("]");
