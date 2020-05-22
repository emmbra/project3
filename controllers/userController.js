const { User } = require('../models');

module.exports = {
  getUserById: async (req, res) => {
    try {
      const users = await User.findById(req.user._id).populate('Team').populate('Record').populate('Log').populate('Event');
      if (!users) {
        return res.status(400).json({ error: 'No users found' });
      }
      return res.status(200).json(users);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getAllUserEmails: async (req, res) => {
    try {
      const users = await User.findOne({ email: req.query.email }, 'email');
      return res.status(200).json(users);
    } catch (e) {
      return res.status(403).json(e);
    }
  },
  getAllUserUsernames: async (req, res) => {
    try {
      const users = await User.find({ email: req.query.username }, 'username');
      return res.status(200).json(users);
    } catch (e) {
      return res.status(403).json(e);
    }
  },
};
