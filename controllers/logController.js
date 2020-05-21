const { Log } = require('../models');

module.exports = {
  addExerciseLog: async (req, res) => {
    const { time, distance } = req.body;
    if (!time || !distance) {
      return res.status(400).json({ error: 'You must provide time in minutes and distance in miles.' });
    }
    try {
      const newLog = await new Log({ time, distance, user: req.user._id }).save();
      req.user.logs.push(newLog);
      await req.user.save();
      return res.status(200).json(newLog);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getTotalTeamDistanceByEventIdandTeamId: async (req, res) => {

  },


};
