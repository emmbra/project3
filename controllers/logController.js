const { Log } = require('../models');

module.exports = {
  addExerciseLog: async (req, res) => {
    console.log(req.body);
    const { time, distance, teamId } = req.body;
    if (!time || !distance) {
      return res.status(400).json({ error: 'You must provide time in minutes and distance in miles.' });
    }
    try {
      const newLog = await new Log({ time, distance, user: req.user._id, team: teamId }).save();
      req.user.logs.push(newLog);
      await req.user.save();
      return res.status(200).json(newLog);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getTotalTeamDistance: async (req, res) => {
    try {
      const totalDistance = await Log.aggregate(
        [
          {
            $group:
              {
                user: req.user._id,
                totalDistance: { $sum: 'distance' },
              },
          },
        ],
      );
      console.log(totalDistance);
      return res.json(totalDistance);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },


};
