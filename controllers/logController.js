const { Log, Team, Event, Record } = require('../models');

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
    console.log('TOTAL DISTANCE:', totalDistance);
    return Promise.resolve(totalDistance);
  } catch (e) {
    return e;
  }
};

const endEvent = async (eventInfo, team, totalTeamDistance) => {
  try {
    // Users

    // Team

    // Event

    // Records
    console.log("EVENT:", eventInfo);
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

    const eventRecord = await Record.findById(newRecord._id)
      .populate('event')
      .populate('users')
      .populate('teams')
      .populate('logs')
      .populate('winningUserIds')
      .populate('winningTeamId');
    console.log('EVENTRECORD:', eventRecord);

    // console.log('NEWRECORD:', newRecord);
    return newRecord;
  } catch (e) {
    return e;
  }
};

module.exports = {
  addExerciseLog: async (req, res) => {
    console.log(req.body);
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
      console.log('NEW LOG', newLog);
      const team = await Team.findById(teamId);
      // console.log("TEAM:", team);
      const totalTeamDistance = await getTotalTeamDistance(team);
      console.log('ADD EXERCISE:', totalTeamDistance);
      const eventInfo = await Event.findOne({ code: '1234' });
      console.log(eventInfo);
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
      // const gameRecord = await endRace();
      const gameRecord = await endEvent(eventInfo, team, totalTeamDistance);
      console.log('gameRecord: ', gameRecord);
      return res.json({ gameRecord, status: 'raceEnd' });
      // console.log('GAME OVER 123');
      // return res.status(200).json({gameRecord, status: 'eventEnd'});
      // },
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
          },
        },
      ]);
      console.log(totalDistance);
      return res.json(totalDistance);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};
