function solution(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
  const fare = [];
  for (let i = 0; i < cost_per_mile.length; i++) {
    let total =
      cost_per_minute[i] * ride_time + cost_per_mile[i] * ride_distance;
    fare.push(total.toFixed(2));
  }
  return fare;
}

console.log({
  solution: solution(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]),
});
