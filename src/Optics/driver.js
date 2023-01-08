const { AbsorbingItem } = require("./AbsorbingItem.js");
const { Item } = require("./Item.js");
const { Mirror } = require("./Mirror.js");
const { Wall } = require("./Wall.js");
const { Ray } = require("./Ray.js");
const { RaySegment } = require("./RaySegment.js");
const { ReflectiveItem } = require("./ReflectiveItem.js");
const { Scene } = require("./Scene.js");
const { Util } = require("./Util.js");
const { LightSource } = require("./LightSource");

myMirror = new Mirror(0, 0, 950, 0);
myMirror2 = new Mirror(100, 100, 400, 400);
myMirror3 = new Mirror(950, 950, 50, 950);
myMirror4 = new Mirror(950, 50, 950, 950);
myWall = new Mirror(50, 950, 50, 50);
myLightSource = new LightSource([500, 300], 10, 3000, 0);
myScene = new Scene(
  [myMirror, myMirror3, myMirror2, myWall, myMirror4],
  myLightSource
);
myScene.simulate();

let sceneJSON = {
  items: myScene.items,
  rays: myScene.rays,
};

let json = JSON.stringify(sceneJSON);

var fs = require("fs");
fs.writeFile("./src/data/sceneFile.json", json, "utf8", function (err) {
  if (err) throw err;
  console.log("complete");
});
