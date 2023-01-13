function inRange(x, a, b) {
  return (x >= a && x <= b) || (x >= b && x <= a);
}

module.exports = inRange;
