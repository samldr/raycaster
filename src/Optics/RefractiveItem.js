//refractive items refract light
Item = require("./Item");
class RefractiveItem extends Item {
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
}

module.exports.RefractiveItem = RefractiveItem;
