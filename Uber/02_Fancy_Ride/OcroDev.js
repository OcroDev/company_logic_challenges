function solution(l, fares) {
  let uber = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'];
  let type = 0,
    bestCar = 0;

  for (let i = 1; i < fares.length; i++) {
    let ride = fares[i] * l;
    if (ride <= 20 && ride > bestCar) {
      bestCar = ride;
      type++;
    }
  }
  return uber[type];
}

console.log({ uber: solution(30, [0.3, 0.5, 0.7, 1, 1.3]) });
console.log({ uber: solution(15, [0.7, 1, 1.3, 1.5, 1.7]) });
console.log({ uber: solution(19, [1, 2, 3, 4, 5]) });
console.log({ uber: solution(20, [0.3, 0.5, 0.7, 1, 1.3]) });
console.log({ uber: solution(15, [0.3, 0.5, 0.7, 1, 1.3]) });
