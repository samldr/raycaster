//should be an abstract class, thanks a lot JS
class Item {
  //abstract class, so nothing fits here

  constructor() {
    if (this.constructor == Item) {
      throw new Error(
        "Item is an abstract class (Item or subclass of Item), so it cannot be instantiated"
      );
    }
  }

  signedDistance(ray) {
    throw new Error(
      "signedDistance must be implemented; it cannot be called from an abstract class (Item)"
    );
  }

  //possible debugging: the intersect point is behind the ray (i.e. the ray is moving away)
  //so the real intersect point should be Infinity
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

  //TODO: figure out if a normal vector function must be implemented
}
module.exports = Item;
