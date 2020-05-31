


? === ?

distance of Event 

total distance sum
of all users
of each team


Log
  distance
  user
  team
  virtual: sum distance by teamId + eventId

Team
  logs
  virtual: sum distance by eventId


virtual: totalDistance = () => {
  this.logs.reduce(log => this._id === log.teamId )
}


1. create virtual fields
2. decide where/when to check for that distanceMatch condition
3. implement it


Virtual example:

const arr = [1,2,3,4,5];
arr.reduce((total, current) => {
  return total + current;
})
/**
 * total: 0, current: 1, return 1
 * total: 1, current: 2, return 3
 * total: 3, current: 3, return 6
 * total: 6, current: 4, return 10
 * total: 10, current: 5, return 15
 */
 Workout.this.findById(id)
{
  day: "20-20-20",
  exercises: [],
  totalDuration: 15
}


Try to figure out the sum function for the distance on the log controller....trying to test on the postman...
