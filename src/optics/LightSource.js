const { pi } = require("mathjs");

// range is from 0 to 360

class LightSource {
  pos;
  range;
  rayNum;
  rotation;
  angleIncrement;

  constructor(pos, range, rayNum, rotation) {
    this.pos = pos;
    this.range = range;
    this.rayNum = rayNum;
    this.rotation = (rotation * pi) / 180;
    this.angleIncriment = ((range / 180) * pi) / rayNum;
  }
}

exports.LightSource = LightSource;
