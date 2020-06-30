const { Log, Team, Event, Record, User } = require('../models');

const getTotalTeamDistance = async (team) => {
  try {
    // console.log('LINE5:', team);
    const totalDistance = await Log.aggregate([
      {
        $match: {
          team: team._id,
        },
      },
      {
        $group: {
          _id: null,
          totalDistance: { $sum: '$distance' },
          totalTime: { $sum: '$time' },
        },
      },
    ]);
    // console.log('TOTAL DISTANCE:', totalDistance);
    return Promise.resolve(totalDistance);
  } catch (e) {
    return e;
  }
};

const endEvent = async (eventInfo, team, totalTeamDistance) => {
  try {
    // Records
    // console.log("EVENT:", eventInfo.users);
    // console.log('TOTALTIMEDISTANCE END EVENT:', totalTeamDistance);
    // console.log('EVENT DISTANCE:', eventDistance);
    const newRecord = await new Record({
      recordType: 'win',
      calculatedTime: totalTeamDistance[0].totalTime,
      distanceCovered: totalTeamDistance[0].totalDistance,
      winningTeamId: team._id,
      winningUserIds: team.users,
      users: eventInfo.users,
      teams: eventInfo.teams,
      logs: eventInfo.logs,
      event: eventInfo._id,
    }).save();
    // console.log("NEWRECORD:", newRecord);

  //   const eventRecord = await Record.findById(newRecord._id)
  //     .populate('event')
  //     .populate('users')
  //     .populate('teams')
  //     .populate('logs')
  //     .populate('winningUserIds')
  //     .populate('winningTeamId');
  // console.log('EVENTRECORD:', eventRecord);

    // Users
    const winningUsers = newRecord.winningUserIds.map(async ({ _id }) => {
      const userToUpdate = await User.findById(_id);
      userToUpdate.records.push(newRecord._id);
      await userToUpdate.save();
    });

    // Team
    const teamToUpdate = await Team.findById(team._id);
    teamToUpdate.records.push(newRecord._id);
    teamToUpdate.teamStatus = 'available';
    await teamToUpdate.save();
    // console.log("TEAMTOUPDATE:", teamToUpdate);

    // const finalEvent = await Event.findById(eventInfo._id)
    //   .populate('users')
    //   .populate('teams')
    //   .populate('logs');
    // console.log('EVENTRECORD:', finalEvent);

    // Event
    const eventToUpdate = await Event.findById(eventInfo._id);
    eventToUpdate.completedTime = Date.now();
    eventToUpdate.status = 'complete';
    eventToUpdate.code = 'Archived';
    eventToUpdate.records.push(newRecord._id);
    await eventToUpdate.save();
    console.log("EVENTTOUPDATE:", eventToUpdate);

    const newEvent = await new Event({
      name: "Let's go to Hawaii",
      distance: 2300,
      startTime: Date.now(),
      dateCreated: Date.now(),
      status: 'active',
      code: 1234,
    }).save();
    // const teamToUpdate = await Team.findByIdAndUpdate(
    //   team._id, 
    //   { $push: { teamStatus: 'available' } },
    //   { $push: { records: newRecord._id } },
    //   { new: true },
    // );

    return newRecord;
  } catch (e) {
    return e;
  }
};

module.exports = {
  addExerciseLog: async (req, res) => {
    // console.log(req.body);
    const { time, distance, teamId } = req.body;
    if (!time || !distance) {
      return res.status(400).json({ error: 'You must provide time in minutes and distance in miles.' });
    }
    try {
      const newLog = await new Log({
        time, distance, user: req.user._id, team: teamId,
      }).save();
      req.user.logs.push(newLog);
      await req.user.save();
      // console.log('NEW LOG', newLog);
      const team = await Team.findById(teamId);
      // console.log("TEAM:", team);
      const totalTeamDistance = await getTotalTeamDistance(team);
      // console.log('ADD EXERCISE:', totalTeamDistance);
      const eventInfo = await Event.findOne({ code: '1234' });
      // console.log(eventInfo);
      eventInfo.logs.push(newLog._id);
      eventInfo.save();
      // const eventDistance = await Event.findOne({ code: '1234' }, 'distance');
      // console.log('TEAM DISTANCE', totalTeamDistance);
      // console.log('TEAM DISTANCE.TotalDistance', totalTeamDistance[0].totalDistance);
      // console.log('EVENT:', eventDistance[0].distance);

      // const arr = [{ name: 'Pandas' }];
      // const [data] = arr;
      // data = { name: "Pandas" }

      if (totalTeamDistance[0].totalDistance <= eventInfo.distance) {
        return res.status(200).json({ newLog, status: 'newLog' });
      }
      const gameRecord = await endEvent(eventInfo, team, totalTeamDistance);
      console.log('gameRecord: ', gameRecord);

      return res.json({ gameRecord, status: 'raceEnd' });
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  // addExerciseLog: async (req, res) => {
  //   console.log(req.body);
  //   const { time, distance, teamId } = req.body;
  //   if (!time || !distance) {
  //     return res.status(400).json({ error: 'You must provide time in minutes and distance in miles.' });
  //   }
  //   try {
  //     const newLog = await new Log({
  //       time, distance, user: req.user._id, team: teamId,
  //     }).save();
  //     req.user.logs.push(newLog);
  //     await req.user.save();
  //     const team = await Team.findById(teamId);
  //     const totalTeamDistance = await getTotalTeamDistance(team);
  //     console.log(totalTeamDistance);
  //     return res.status(200).json(newLog);
  //   } catch (e) {
  //     return res.status(403).json({ e });
  //   }
  // },
  getTotalUserDistance: async (req, res) => {
    try {
      const totalDistance = await Log.aggregate([
        {
          $match: {
            user: req.user._id,
          },
        },
        {
          $group: {
            _id: null,
            totalDistance: { $sum: '$distance' },
            totalTime: { $sum: '$time' },
          },
        },
      ]);
      // console.log(totalDistance);
      return res.json(totalDistance);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};
