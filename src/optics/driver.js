let start = Date.now();

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
const { FrostedBox } = require("./FrostedBox");
const settings = require("./settings.json");

myMirror = new Mirror(0, 0, 1000, 0);
myMirror3 = new Mirror(1000, 1000, 0, 1000);
myMirror4 = new Mirror(1000, 0, 1000, 1000);
myMirror2 = new Mirror(0, 1000, 0, 0);
//myWall = new Wall(975, 975, 75, 975)
myMirror5 = new Mirror(400, 400, 230, 230);
//myMirror6 = new Mirror(800,302,600,302)

//myFB = new FrostedBox([100, 400], [300, 600], 2.5);
myLightSource = new LightSource(
  settings.sourcePos,
  settings.sourceAngle,
  settings.maxRays,
  settings.sourceOffset
);
myScene = new Scene(
  [myMirror, myMirror3, myMirror2, myMirror4, myMirror5],
  myLightSource
);
myScene.simulate();

let sceneJSON = {
  items: myScene.items,
  rays: myScene.rays,
};

let json = JSON.stringify(sceneJSON);

var fs = require("fs");
const { config } = require("process");
fs.writeFile("src/optics/sceneFile.json", json, "utf8", function (err) {
  if (err) throw err;
  //console.log("complete");
});

let end = Date.now()
console.log('took '+ (end - start) +' ms to complete')