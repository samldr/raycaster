const {
  polynomialRoot,
  norm,
  distance,
  multiply,
  subtract,
  dot,
} = require("mathjs");
ReflectiveItem = require("./ReflectiveItem.js");
const reflect = require("./functions/reflection.js");
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
    let m = ray.direction[1] / ray.direction[0];
    let b = ray.position[1] - m * ray.position[0];

    let a = 1 + m * m;
    let k = -2 * this.center[0] + 2 * b * m - 2 * m * this.center[1];
    let c =
      this.center[0] * this.center[0] +
      b * b -
      2 * b * this.center[1] +
      this.center[1] * this.center[1] -
      this.r * this.r;

    let solution = polynomialRoot(c, k, a);
    if (typeof solution[0] !== "number") {
      return [];
    } else {
      let y0 = (solution[0] - ray.position[0]) * m + ray.position[1];
      let y1 = (solution[1] - ray.position[0]) * m + ray.position[1];
      //console.log([solution[0], y0], ray.position);
      let d0 = distance([solution[0], y0], ray.position);
      let d1 = distance([solution[1], y1], ray.position);
      if (d0 < d1) {
        return [solution[0], y0];
      } else {
        return [solution[1], y1];
      }
    }
  }

  newDirection(ray, intersection) {
    let normal_raw = [
      intersection[0] - this.center[0],
      intersection[1] - this.center[1],
    ];
    let normal = multiply(1 / norm(normal_raw), normal_raw);
    // console.log(
    //   "incident",
    //   ray.direction,
    //   "normal",
    //   normal,
    //   "reflection",
    //   reflect(ray.direction, normal, 1, 1)
    // );
    return reflect(ray.direction, normal, 1, 1);
  }
}

const myRay = new Ray([300, 300], [1, -3]);
let myCircle = new MirrorBall([250, 200], 80);

exports.MirrorBall = MirrorBall;
