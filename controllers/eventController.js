const { Event } = require('../models');

module.exports = {
  getEvent: async (req, res) => {
    try {
      const eventToFind = await Event.findOne({ code: '1234' })
        .populate('teams')
        .populate('users')
        .populate('logs');
      return res.status(200).json(eventToFind);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  joinEvent: async (req, res) => {
    const { teamId } = req.body;
    try {
      const eventToJoin = await Event.findOne({ code: '1234' });
      eventToJoin.users.push(req.user._id);
      eventToJoin.teams.push(teamId);
      await eventToJoin.save();
      const eventToFind = await Event.findOne({ code: '1234' })
        .populate('teams')
        .populate('users')
        .populate('logs');
      return res.status(200).json(eventToFind);
    } catch (e) {
      return res.status(403).json(e);
    }
  },

  // addEvent: async (req, res) => {
  //   const { name, distance } = req.body;
  //   if (!name || !distance) {
  //     return res.status(400).json({ error: 'You must provide an event name and distance in miles.' });
  //   }
  // },
  // editEvent: async (req, res) => {

  // },

  // deleteEvent: async (req, res) => {

  // },
};
