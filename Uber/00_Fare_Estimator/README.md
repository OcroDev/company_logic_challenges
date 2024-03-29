## Fare Estimator

Uber is building a Fare Estimator that can tell you how much your ride will cost before you request it. It works by passing approximated ride distance and ride time through this formula:

`(Cost per minute) _ (ride time) + (Cost per mile) _ (ride distance)`

where `Cost per minute` and `Cost per` mile depend on the car type.

You are one of the engineers building the Fare Estimator, so knowing cost per minute and cost per mile for each car type, as well as ride distance and ride time, return the fare estimates for all car types.

#### Example:

For
`ride_time = 30`,.
`ride_distance = 7`,.
`cost_per_minute = [0.2, 0.35, 0.4, 0.45]`, and
`cost_per_mile = [1.1, 1.8, 2.3, 3.5]`, the output should be:
`solution(ride_time, ride_distance, cost_per_minute, cost_per_mile) = [13.7, 23.1, 28.1, 38]`.

Since:

```
30 _ 0.2 + 7 _ 1.1 = 6 + 7.7 = 13.7
30 _ 0.35 + 7 _ 1.8 = 10.5 + 12.6 = 23.1
30 _ 0.4 + 7 _ 2.3 = 12 + 16.1 = 28.1
30 _ 0.45 + 7 _ 3.5 = 13.5 + 24.5 = 38
```
