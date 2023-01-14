class MirrorBall extends ReflectiveItem {
  center;
  radius;

  //TODO: normal lambda function in here!

  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
    type = "mirrorball";
  }

  intersectPoint(ray) {}

  newDirection(ray, intersection) {}
}

exports.MirrorBall = MirrorBall;
