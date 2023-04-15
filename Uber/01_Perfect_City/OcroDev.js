function solution(departure, destination) {
  let x1 = departure[0],
    x2 = destination[0],
    y1 = departure[1],
    y2 = destination[1];

  let xDist = Math.abs(x1 - x2);
  let yDist = Math.abs(y1 - y2);
  if (
    Math.floor(x1) != x1 &&
    Math.floor(x2) != x2 &&
    Math.floor(x1) == Math.floor(x2) &&
    y1 != y2
  ) {
    xDist = Math.min(
      Math.abs(x1 - Math.floor(x1) + x2 - Math.floor(x2)),
      Math.abs(x1 - Math.ceil(x1) + x2 - Math.ceil(x2))
    );
  } else if (
    Math.floor(y1) != y1 &&
    Math.floor(y2) != y2 &&
    Math.floor(y1) == Math.floor(y2) &&
    x1 != x2
  ) {
    yDist = Math.min(
      Math.abs(y1 - Math.floor(y1) + y2 - Math.floor(y2)),
      Math.abs(y1 - Math.ceil(y1) + y2 - Math.ceil(y2))
    );
  }
  return parseFloat(xDist.toFixed(2)) + parseFloat(yDist.toFixed(2));
}

console.log({ shortest_path: solution([0.4, 1], [0.9, 3]) });
