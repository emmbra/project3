const { Team } = require('../models');


module.exports = {
  addTeam: async (req, res) => {
    const { name, mascotIMG, teamType, passcode } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'You must provide a name '});
    }
    try {
      const newTeam = await new Team({ name, passcode, mascotIMG, teamType });
      newTeam.users.push(req.user._id).save();
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  newUserJoinTeam: async (req, res) => {
    // update team by Id push req.user into team.users
    // compare team.users.length to team.maxmembers
    // if those numbers are equal then update team and set team.teamstatus to ready
  },
}
