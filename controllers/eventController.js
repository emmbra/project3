const { Event } = require('../models');

module.exports = {
  addEvent: async (req, res) => {
    const { name, distance } = req.body;
    if (!name || !distance) {
      return res.status(400).json({ error: 'You must provide an event name and distance in miles.' });
    }
  },
  editEvent: async (req, res) => {

  },

  deleteEvent: async (req, res) => {

  },

};
