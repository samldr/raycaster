let csvLog = "\n";
let start = (last = end = Date.now());
const dateForFile = new Date();

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

csvLog +=
  `${dateForFile.toLocaleDateString()}` +
  "," +
  `${dateForFile.toLocaleTimeString()}` +
  ",," +
  settings.maxRays +
  "," +
  settings.maxBounces +
  ",";

//time to import the modules and settings
end = Date.now();
console.log("took " + (end - last) + " ms to import modules and settings");
csvLog += end - last + ",";
last = Date.now();

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

//time to construct all the objects in the scene
end = Date.now();
console.log("took " + (end - last) + " ms to construct scene objects");
csvLog += end - last + ",";
last = Date.now();

myScene = new Scene(
  [myMirror, myMirror3, myMirror2, myMirror4, myMirror5],
  myLightSource
);

//time to construct the scene
end = Date.now();
console.log("took " + (end - last) + " ms to construct the scene itself");
csvLog += end - last + ",";
last = Date.now();

myScene.simulate();

//time to simulate the scene
end = Date.now();
console.log("took " + (end - last) + " ms to simulate the scene");
csvLog += end - last + ",";
last = Date.now();

let json = JSON.stringify({
  items: myScene.items,
  rays: myScene.rays,
});

//time to compile JSON file
end = Date.now();
console.log("took " + (end - last) + " ms to compile the JSON file");
csvLog += end - last + ",";
last = Date.now();

//writing to scene file
var fs = require("fs");
const { config } = require("process");
fs.writeFile("src/optics/sceneFile.json", json, "utf8", function (err) {
  if (err) throw err;
});

//time to write to JSON file
end = Date.now();
console.log("took " + (end - last) + " ms to write to the JSON file");
csvLog += end - last + ",";
last = Date.now();

//total runtime
console.log("total time elapsed: " + (end - start) + " ms");
csvLog += end - start + ",";

//write to the csv log file
fs.appendFile("benchmark/benchmarkLog.csv", csvLog, "utf8", function (err) {
  if (err) throw err;
});
