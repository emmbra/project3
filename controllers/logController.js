const { Log } = require('../models');

const getTotalTeamDistance = async (teamId) => {
  try {
    console.log("LINE5:", teamId);
    const totalDistance = await Log.aggregate([
      { $match: {
        team: teamId,
        },
      },
      { $group: {
        _id: null,
        totalDistance: { $sum: '$distance' },
        },
      },
    ]);
    console.log(totalDistance);
    return totalDistance;
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
      const totalTeamDistance = await getTotalTeamDistance(teamId);
      console.log(totalTeamDistance);
      return res.status(200).json(newLog);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getTotalUserDistance: async (req, res) => {
    try {
      const totalDistance = await Log.aggregate([
        { $match: {
            user: req.user._id,
          },
        },
        { $group: {
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
