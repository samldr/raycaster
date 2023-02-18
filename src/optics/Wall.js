// inRange = require("./util");
// Ray = require("./Ray.js");
import { Ray } from "./Ray.js";
import { inRange } from "./util";
import { AbsorbingItem } from "./AbsorbingItem.js";
const { intersect } = require("mathjs");
// const AbsorbingItem = require("./AbsorbingItem");

class Wall extends AbsorbingItem {
  endpoint1;
  endpoint2;
  type = "wall";

  constructor(x1, y1, x2, y2) {
    super();
    this.endpoint1 = [x1, y1];
    this.endpoint2 = [x2, y2];
  }

  //possible error: check if ray is actually a ray object
  //TODO: DEFINITE ERROR: intersection point with mirror will be calulated even
  //if the ray passes above the mirror and doesn't intersect with it
  signedDistance(ray) {
    return 69;
  }

  //ISSUE!!!!! if the ray extends past the mirror, an intersection will be given where one doesn't exist
  //COMPENSATE FOR THIS!!
  intersectPoint(ray) {
    //intersection of lines formed by the mirror and ray, both defined by two points
    let intersection = intersect(this.endpoint1, this.endpoint2, ray.position, [
      ray.position[0] + ray.direction[0],
      ray.position[1] + ray.direction[1],
    ]);
    if (intersection == null) {
      return Infinity;
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
      return Infinity;
    }
  }

  newDirection(ray, intersection) {
    return [0, 0];
  }

  //TODO: figure out if a normal vector function must be implemented
}

exports.Wall = Wall;
