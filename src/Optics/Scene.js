const { Ray } = require("./Ray.js");
const { Item } = require("./Item.js");

class Scene {
  //list of Items
  //list of Rays
  //make the dimensions changeable?
  //default 1000 1000

  NUM_RAYS = 500;
  MAX_BOUNCES = 10;

  items = [];
  rays = [];

  //possible debugging: spread operator didn't work, array of items is getting passed in and treated as one parameter

  constructor(items) {
    //adds all the items to the items array
    //this can probably just be accomplished by copying the array
    for (let i = 0; i < items.length; i++) {
      this.items[i] = items[i];
    }
    //creates all the rays
    //TODO: Abstract all the ray creation into "Source"
    for (let i = 0; i < this.NUM_RAYS; i++) {
      //TODO: remove magic numbers
      this.rays[i] = new Ray([750, 900 + 0.01 * i], [-0.5 + 0.00001 * i, -1]);
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
