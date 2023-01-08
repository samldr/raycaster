const { asin, atan, sin, cos, min, distance, intersect } = require("mathjs");
const { RefractiveItem } = require("./RefractiveItem.js");
const { Ray } = require("./Ray.js");

class FrostedBox extends RefractiveItem {
  type = "frostedBox";

  //optical
  n;
  alpha;
  critAng;

  //geometric
  topLeft = [];
  bottomRight = [];

  constructor(topLeft, bottomRight, n) {
    super();
    this.topLeft = topLeft;
    this.bottomRight = bottomRight;
    this.n = n;
    this.alpha = 0.5;
    this.critAng = asin(1 / n);
  }

  intersectPoint(ray) {
    let lines = [
      [this.topLeft, [this.topLeft[0], this.bottomRight[1]]],
      [[this.topLeft[0], this.bottomRight[1]], this.bottomRight],
      [this.bottomRight, [this.topLeft[0], this.bottomRight[1]]],
      [[this.topLeft[0], this.bottomRight[1]], this.topLeft],
    ];

    let points = lines
      .map((el) => this.rayLineIntersection(ray, el))
      .map((el2) => (el2 == null ? [999999, 999999] : el2));
    let min = Infinity;
    let cur = null;
    for (let i = 0; i < points.length; i++) {
      let dist = distance(points[i], ray.position);
      if (dist < min) {
        cur = points[i];
        min = dist;
      }
    }
    return cur;
  }

  newDirection(ray) {
    const theta1 = atan(ray.direction[1] / ray.direction[0]);
    const theta2 = asin(sin(theta1) / this.n);
    return [cos(theta2), sin(theta2)];
  }

  //FUNCTION OF SHAME
  //LEARN HOW TO USE MODULES, YOU HAG
  rayLineIntersection(ray, line) {
    //intersection of lines formed by the mirror and ray, both defined by two points
    let intersection = intersect(line[0], line[1], ray.position, [
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
      inRange(intersection[0], line[0][0], line[1][0]) &&
      inRange(intersection[1], line[0][1], line[1][1]) &&
      ((ray.direction[0] > 0 && intersection[0] > ray.position[0]) ||
        (ray.direction[0] < 0 && intersection[0] < ray.position[0]))
    ) {
      return intersection;
    } else {
      return [999999, 999999];
    }
  }
}

exports.FrostedBox = FrostedBox;
