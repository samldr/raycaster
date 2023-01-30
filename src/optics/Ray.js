const { Item } = require("./Item.js");
const { distance, i } = require("mathjs");

class Ray {
  //list of ray segments that form the ray
  //first two indices are the coordinates of the point
  //third index is the intensity
  segments = [];

  //current position and direction
  position = []; //2-dimensional vector
  direction = []; //2-dimensional vector

  //intensity
  intensity = 1;

  //last refractive index
  n_last = 1;

  //in a different refractive index?
  notInAir = false;

  constructor(pos, dir) {
    this.position = [pos[0], pos[1]];
    this.direction = [dir[0], dir[1]];
    this.segments = [[pos[0], pos[1], 1]];
  }

  //at the moment, this takes an array of items as an input
  //figure out the OOP so that this can accessed automatically

  //possible code simplification: just use the array instead of accessing each item
  //might create reference issues, might not, idk

  //TODO: create failiure case for when the ray leaves the bounding box

  advance(items) {
    //find the next intersection point
    //advance the position to there
    //update the direction
    //add to the segments

    //find the minimum distance to intersection
    let minDistance = Infinity;
    let minItem = null;
    for (let i = 0; i < items.length; i++) {
      let point = items[i].intersectPoint(this);
      let dist;
      if (point == Infinity || point == null || point.length == 0) {
        dist = Infinity;
      } else {
        dist = distance(point, this.position);
      }
      //magic number to prevent phasing through mirrors
      if (dist < minDistance && dist > 0.001) {
        minDistance = dist;
        minItem = items[i];
      }
    }

    if (minItem == null || minDistance == Infinity) {
      return null;
    }

    //pass in the ray to get the intersection point
    //closest intersection point
    let intersectPoint = minItem.intersectPoint(this);

    //PUT YOUR FUNCTION IN BETWEEN HERE

    //AND HERE plz

    //add segment
    this.segments.push([intersectPoint[0], intersectPoint[1], this.intensity]);

    //update position
    this.position = [intersectPoint[0], intersectPoint[1]];

    //update direction
    let newDir = minItem.newDirection(this, intersectPoint);
    this.direction = [newDir[0], newDir[1]];
    if (newDir[0] == 0 && newDir[1] == 0) {
      return null;
    }

    if (this.n_last === 1 && minItem.n && minItem.n !== 1) {
      this.n_last = minItem.n;
    } else if (this.n_last !== 1) {
      this.n_last = 1;
    }
    return 1;
  }
}

exports.Ray = Ray;
