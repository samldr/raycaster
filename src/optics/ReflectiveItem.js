//reflective items reflect light
//Item = require("./Item");
const { Item } = require("./Item");
class ReflectiveItem extends Item {
  constructor() {
    //if this throws errors, just rewrite the constructor
    super();
  }

  signedDistance(ray) {
    throw new Error(
      "signedDistance must be implemented; it cannot be called from an abstract class (Item)"
    );
  }

  intersectPoint(ray) {
    throw new Error(
      "intersectPoint must be implemented; it cannot be called from an abstract class (Item)"
    );
  }

  newDirection(ray, intersection) {
    throw new Error(
      "newDirection must be implemented; it cannot be called from an abstract class (Item)"
    );
  }

  getNormal(intersection) {
    throw new Error(
      "getNormal must be implemented; it cannot be called from an abstract class (Item)"
    );
  }
}

module.exports = ReflectiveItem;
