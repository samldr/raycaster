const { polynomialRoot } = require("mathjs");
ReflectiveItem = require("./ReflectiveItem.js");
const { Ray } = require("./Ray.js");

class MirrorBall extends ReflectiveItem {
  center;
  r;
  type;

  //TODO: normal lambda function in here!

  constructor(center, r) {
    super();
    this.center = center;
    this.r = r;
    this.type = "mirrorball";
  }

  //.position
  //.direction
  //account for directly vertical line
  //there will be really weird stuff with b because of the coordinate system
  //I.e. down is positive now
  //so we might have to account for that somewhere idk
  intersectPoint(ray) {
    let m =
      (ray.direction[1] - ray.position[1]) /
      (ray.direction[0] - ray.position[0]);
    let b = ray.position[1] - m * ray.position[0];

    let a = 1 + m * m;
    let k = -2 * this.center[0] + 2 * b * m - 2 * m * this.center[1];
    let c =
      this.center[0] * this.center[0] +
      b * b -
      2 * b * this.center[1] +
      this.center[1] * this.center[1] -
      this.r * this.r;

    return polynomialRoot(c, k, a);
  }

  newDirection(ray, intersection) {}
}

const myRay = new Ray([300, 300], [1, 3]);
let myCircle = new MirrorBall([250, 200], 80);

console.log(myCircle.intersectPoint(myRay));

exports.MirrorBall = MirrorBall;
