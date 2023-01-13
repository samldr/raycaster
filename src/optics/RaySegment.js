class RaySegment {
  endpoint1;
  endpoint2;

  constructor(x1, y1, x2, y2) {
    endpoint1 = [x1, y1];
    endpoint2 = [x2, y2];
  }
}

exports.RaySegment = RaySegment;
