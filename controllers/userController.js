const { User } = require('../models');

module.exports = {
  getUserById: async (req, res) => {
    try {
      const { userId } = req.params;
      const users = await User.findById(userId).populate('Team').populate('Record').populate('Log').populate('Event');
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
      const users = await User.find({}, 'email');
      if (!users) {
        return res.status(400).json({ error: 'There are no users registered at the moment' });
      }
      return res.status(200).json(users);
    } catch (e) {
      return res.status(403).json(e);
    }
  },
  getAllUserUsernames: async (req, res) => {
    try {
      const users = await User.find({}, 'username');
      if (!users) {
        return res.status(400).json({ error: 'There are no users registered at the moment' });
      }
      return res.status(200).json(users);
    } catch (e) {
      return res.status(403).json(e);
    }
  },
};
