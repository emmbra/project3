


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

END OF THE GAME:

After the user logged the exercise (IF):
1) Team distance = event distance
  -redirect to match page (queries record schema)



endRace() {
  users
    records: push the records id to the user records
  team
    records: 
    teamstatus available
    push records id to teams records
    
  event
    records: 
      completedTime: Date.now()
      status: complete
      records: push th records id to event record
      code: 'Archive'

 create a new Event = code 1234

  record - update 
    recordType: win, 
    caculatedTime: team totaltime
    distanceCovered: team totaldistance
    winningTeamId: teamId
    losingTeamId: ?? ALL THE OTHER TEAMS
    winningUserIds: team.users
    losingUserIds: ?? THE USER OF ?? ALL THE OTHER TEAMS
}




Controller log exercise: 
get total updated from team
check total team distance againt the event distance
  if <
    res.json({newLog, status: "newlog"})
  if >=
    const gameRecord = await endRace()
    res.json({gameRecord, status: "raceEnd"})


Frontend:
  const {data} = axios.whatever
  switch(data.status)
    case "newLog":
      display to use Exercise logges successfully
    case "raceEnd":
      dispatch gameRecord to store
      redirect to match page


Match page
mapStatToProps
get gameRecord data
display on page


2) Exercise logged successfully
  -send message to user that log successful

Backend: 
Frontend:
