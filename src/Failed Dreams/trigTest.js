const { FastTrigProvider } = require("./FastTrigProvider");
const { sin } = require("mathjs");

let ftp = new FastTrigProvider();
const pi = 3.141596253;

console.log("regular start");
for (let i = 0; i < 2 * pi; i += pi / 1000000) {
  let k = sin(i);
}
