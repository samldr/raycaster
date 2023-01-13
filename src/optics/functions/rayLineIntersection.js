const { intersect } = require("mathjs");

function rayLineIntersection(ray, line) {
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
    return null;
  }
}

exports.rayLineIntersection = rayLineIntersection;
