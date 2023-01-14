inRange = require("./util");
ReflectiveItem = require("./ReflectiveItem.js");
Ray = require("./Ray.js");
const { intersect, dot, multiply, subtract, norm } = require("mathjs");

class Mirror extends ReflectiveItem {
  endpoint1;
  endpoint2;
  type = "mirror";
  normal;

  constructor(x1, y1, x2, y2) {
    super();
    this.endpoint1 = [x1, y1];
    this.endpoint2 = [x2, y2];

    const invSlopeVec = [
      this.endpoint1[1] - this.endpoint2[1],
      this.endpoint2[0] - this.endpoint1[0],
    ];

    this.normal = multiply(1 / norm(invSlopeVec), invSlopeVec);
  }

  //possible error: check if ray is actually a ray object
  //TODO: DEFINITE ERROR: intersection point with mirror will be calulated even
  //if the ray passes above the mirror and doesn't intersect with it

  //ISSUE!!!!! if the ray extends past the mirror, an intersection will be given where one doesn't exist
  //COMPENSATE FOR THIS!!
  intersectPoint(ray) {
    //intersection of lines formed by the mirror and ray, both defined by two points
    let intersection = intersect(this.endpoint1, this.endpoint2, ray.position, [
      ray.position[0] + ray.direction[0],
      ray.position[1] + ray.direction[1],
    ]);
    if (intersection == null) {
      return null;
    }
    //add bounds ternary check here
    //rearrange the order to optimize using short circuit logic
    //TODO: fix problem that when ray goes straight up or down into mirror, the intersection does not get recognized
    if (
      inRange(intersection[0], this.endpoint1[0], this.endpoint2[0]) &&
      inRange(intersection[1], this.endpoint1[1], this.endpoint2[1]) &&
      ((ray.direction[0] > 0 && intersection[0] > ray.position[0]) ||
        (ray.direction[0] < 0 && intersection[0] < ray.position[0]))
    ) {
      return intersection;
    } else {
      return null;
    }
  }

  //TODO: this can be put in the superclass
  newDirection(ray, intersection) {
    const outVec = subtract(
      ray.direction,
      multiply(2 * dot(ray.direction, this.normal), this.normal)
    );
    return outVec;
  }

  //TODO: figure out if a normal vector function must be implemented
}

exports.Mirror = Mirror;
