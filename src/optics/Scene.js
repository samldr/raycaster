const { Ray } = require("./Ray.js");
const { Item } = require("./Item.js");
const { LightSource } = require("./LightSource.js");
const { cos, sin, sqrt } = require("mathjs");
const { Wall } = require("./Wall.js");
const settings = require("./settings.json")

class Scene {
  //list of Items
  //list of Rays
  //make the dimensions changeable?
  //default 1000 1000

  NUM_RAYS = 100;
  MAX_BOUNCES = settings.maxBounces;

  items = [];
  rays = [];

  //possible debugging: spread operator didn't work, array of items is getting passed in and treated as one parameter

  constructor(items, source) {
    //adds all the items to the items array
    //this can probably just be accomplished by copying the array
    for (let i = 0; i < items.length; i++) {
      this.items[i] = items[i];
    }

    items.push(new Wall(-10, -10, 1010, -10));
    items.push(new Wall(1010, 1010, 1010, -10));
    items.push(new Wall(1010, 1010, -10, 1010));
    items.push(new Wall(-10, -10, -10, 1010));

    //creates all the rays
    //TODO: Abstract all the ray creation into "Source"
    this.NUM_RAYS = source.rayNum;
    for (let i = 0; i < this.NUM_RAYS; i++) {
      //TODO: remove magic numbers
      for (let i = 0; i < source.rayNum; i++) {
        let angle = (i + 1) * source.angleIncriment + source.rotation;
        let vector = [cos(angle), sin(angle)];

        this.rays[i] = new Ray(source.pos, vector);
      }
    }
  }

  simulate() {
    //populates the array
    for (let i = 0; i < this.NUM_RAYS; i++) {
      for (let j = 0; j < this.MAX_BOUNCES; j++) {
        let res = this.rays[i].advance(this.items);
        //ray hits an absorbing item and does not continue
        if (res == null) {
          break;
        }
      }
    }
  }

  render() {
    //literally draw the simulated stuff
  }
}

exports.Scene = Scene;
